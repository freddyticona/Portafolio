/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type {
  Payment,
  PaymentItem,
  PaymentMethod,
  PaymentStatus,
  ServicePricing,
  CheckoutSession,
  Currency
} from '../types';
import { PAYMENT_CONFIG, SERVICES_PRICING } from '../config';

// ==========================================
// UTILIDADES DE PAGO
// ==========================================

/**
 * Obtiene un servicio por su ID
 */
export function getServiceById(id: string): ServicePricing | undefined {
  return SERVICES_PRICING.find(s => s.id === id);
}

/**
 * Obtiene servicios filtrados por tipo
 */
export function getServicesByType(type: ServicePricing['type']): ServicePricing[] {
  return SERVICES_PRICING.filter(s => s.type === type);
}

/**
 * Obtiene los servicios destacados (popular)
 */
export function getFeaturedServices(): ServicePricing[] {
  return SERVICES_PRICING.filter(s => s.popular);
}

/**
 * Calcula el subtotal de un pago
 */
export function calculateSubtotal(items: PaymentItem[]): number {
  return items.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);
}

/**
 * Calcula el impuesto (IVA 13% Bolivia)
 */
export function calculateTax(subtotal: number, rate: number = PAYMENT_CONFIG.taxRate): number {
  return subtotal * rate;
}

/**
 * Calcula el total de un pago
 */
export function calculateTotal(items: PaymentItem[], taxRate: number = PAYMENT_CONFIG.taxRate): {
  subtotal: number;
  tax: number;
  total: number;
} {
  const subtotal = calculateSubtotal(items);
  const tax = calculateTax(subtotal, taxRate);
  const total = subtotal + tax;

  return { subtotal, tax, total };
}

/**
 * Crea un item de pago a partir de un servicio
 */
export function createPaymentItem(
  service: ServicePricing,
  quantity: number = 1
): PaymentItem {
  return {
    id: crypto.randomUUID(),
    serviceId: service.id,
    serviceName: service.nameEs,
    quantity,
    unitPrice: service.basePrice,
    currency: service.currency,
    subtotal: service.basePrice * quantity
  };
}

/**
 * Crea un pago inicial
 */
export function createPayment(
  items: PaymentItem[],
  customerName: string,
  customerEmail: string,
  customerPhone: string,
  method: PaymentMethod,
  currency: Currency = PAYMENT_CONFIG.defaultCurrency,
  bookingId?: string,
  notes?: string
): Payment {
  const { subtotal, tax, total } = calculateTotal(items);

  return {
    id: crypto.randomUUID(),
    customerName,
    customerEmail,
    customerPhone,
    items,
    subtotal,
    tax,
    total,
    currency,
    method,
    status: 'pending',
    createdAt: new Date().toISOString(),
    bookingId,
    notes
  };
}

/**
 * Crea una sesión de checkout para Stripe
 */
export function createCheckoutSession(data: {
  serviceId: string;
  customerEmail: string;
  customerName: string;
  customerPhone: string;
  bookingDate?: string;
  bookingTime?: string;
  notes?: string;
}): CheckoutSession | null {
  const service = getServiceById(data.serviceId);
  if (!service) return null;

  const paymentItem = createPaymentItem(service);

  return {
    paymentId: crypto.randomUUID(),
    serviceId: service.id,
    serviceName: service.nameEs,
    amount: service.basePrice,
    currency: service.currency,
    customerEmail: data.customerEmail,
    customerName: data.customerName,
    customerPhone: data.customerPhone,
    bookingDate: data.bookingDate,
    bookingTime: data.bookingTime,
    notes: data.notes
  };
}

/**
 * Guarda un pago en localStorage (simulación de base de datos)
 */
export function savePayment(payment: Payment): void {
  const payments = getStoredPayments();
  payments.push(payment);
  localStorage.setItem('payments', JSON.stringify(payments));

  // Trigger analytics event
  trackPaymentEvent(payment);
}

/**
 * Obtiene todos los pagos almacenados
 */
export function getStoredPayments(): Payment[] {
  try {
    const stored = localStorage.getItem('payments');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

/**
 * Obtiene un pago por su ID
 */
export function getPaymentById(id: string): Payment | undefined {
  const payments = getStoredPayments();
  return payments.find(p => p.id === id);
}

/**
 * Actualiza el estado de un pago
 */
export function updatePaymentStatus(
  paymentId: string,
  status: PaymentStatus,
  transactionId?: string
): boolean {
  const payments = getStoredPayments();
  const index = payments.findIndex(p => p.id === paymentId);

  if (index === -1) return false;

  payments[index].status = status;
  if (transactionId) {
    payments[index].transactionId = transactionId;
  }
  if (status === 'completed') {
    payments[index].completedAt = new Date().toISOString();
  }

  localStorage.setItem('payments', JSON.stringify(payments));
  return true;
}

/**
 * Obtiene pagos por cliente (email)
 */
export function getPaymentsByEmail(email: string): Payment[] {
  const payments = getStoredPayments();
  return payments.filter(p => p.customerEmail === email);
}

/**
 * Obtiene estadísticas de pagos
 */
export function getPaymentStats(): {
  total: number;
  completed: number;
  pending: number;
  failed: number;
  totalAmount: number;
  completedAmount: number;
  byMethod: Record<PaymentMethod, number>;
} {
  const payments = getStoredPayments();

  const stats = {
    total: payments.length,
    completed: 0,
    pending: 0,
    failed: 0,
    totalAmount: 0,
    completedAmount: 0,
    byMethod: {
      stripe: 0,
      transferencia: 0,
      qr: 0,
      efectivo: 0,
      'card-present': 0
    }
  };

  payments.forEach(p => {
    if (p.status === 'completed') {
      stats.completed++;
      stats.completedAmount += p.total;
    } else if (p.status === 'pending') {
      stats.pending++;
    } else if (p.status === 'failed') {
      stats.failed++;
    }

    stats.totalAmount += p.total;
    stats.byMethod[p.method] += p.total;
  });

  return stats;
}

/**
 * Convierte moneda
 */
export function convertCurrency(
  amount: number,
  from: Currency,
  to: Currency
): number {
  if (from === to) return amount;

  if (from === 'BOB' && to === 'USD') {
    return amount * PAYMENT_CONFIG.exchangeRate.BOB_TO_USD;
  }

  if (from === 'USD' && to === 'BOB') {
    return amount * PAYMENT_CONFIG.exchangeRate.USD_TO_BOB;
  }

  return amount;
}

/**
 * Formatea monto de dinero
 */
export function formatMoney(amount: number, currency: Currency): string {
  const formatter = new Intl.NumberFormat(
    currency === 'BOB' ? 'es-BO' : 'en-US',
    {
      style: 'currency',
      currency: currency === 'BOB' ? 'BOB' : 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }
  );

  return formatter.format(amount);
}

/**
 * Formatea método de pago para mostrar
 */
export function formatPaymentMethod(method: PaymentMethod, lang: 'es' | 'en' = 'es'): string {
  const labels: Record<PaymentMethod, { es: string; en: string }> = {
    stripe: { es: 'Tarjeta (Stripe)', en: 'Card (Stripe)' },
    transferencia: { es: 'Transferencia Bancaria', en: 'Bank Transfer' },
    qr: { es: 'QR / Billetera', en: 'QR / Wallet' },
    efectivo: { es: 'Efectivo', en: 'Cash' },
    'card-present': { es: 'Tarjeta Presente', en: 'Card Present' }
  };

  return labels[method]?.[lang] || method;
}

/**
 * Formatea estado de pago
 */
export function formatPaymentStatus(status: PaymentStatus, lang: 'es' | 'en' = 'es'): string {
  const labels: Record<PaymentStatus, { es: string; en: string }> = {
    pending: { es: 'Pendiente', en: 'Pending' },
    completed: { es: 'Completado', en: 'Completed' },
    failed: { es: 'Fallido', en: 'Failed' },
    refunded: { es: 'Reembolsado', en: 'Refunded' },
    partial: { es: 'Parcial', en: 'Partial' }
  };

  return labels[status]?.[lang] || status;
}

/**
 * Obtiene color de estado de pago
 */
export function getPaymentStatusColor(status: PaymentStatus): string {
  const colors: Record<PaymentStatus, string> = {
    pending: 'bg-yellow-500/20 text-yellow-400',
    completed: 'bg-green-500/20 text-green-400',
    failed: 'bg-red-500/20 text-red-400',
    refunded: 'bg-orange-500/20 text-orange-400',
    partial: 'bg-blue-500/20 text-blue-400'
  };

  return colors[status] || 'bg-gray-500/20 text-gray-400';
}

/**
 * Genera un recibo de pago
 */
export function generatePaymentReceipt(payment: Payment, lang: 'es' | 'en' = 'es'): string {
  const isEs = lang === 'es';

  let receipt = `
╔════════════════════════════════════════════════════════════╗
║                    ${isEs ? 'RECIBO DE PAGO' : 'PAYMENT RECEIPT'}                          ║
╠════════════════════════════════════════════════════════════╣
║                                                                ║
║  ${isEs ? 'Freddy Ticona Guzmán' : 'Freddy Ticona Guzman'} - ${isEs ? 'Servicios Audiovisuales' : 'Video Services'}                 ║
║  ${isEs ? 'Camarógrafo y Realizador' : 'Cameraman and Filmmaker'}                          ║
║                                                                ║
╠════════════════════════════════════════════════════════════╣
║  ${isEs ? 'NÚMERO DE RECIBO' : 'RECEIPT NUMBER'}: ${payment.id.slice(0, 8).toUpperCase()}                  ║
║  ${isEs ? 'FECHA' : 'DATE'}: ${new Date(payment.createdAt).toLocaleDateString()}                        ║
║  ${isEs ? 'ESTADO' : 'STATUS'}: ${formatPaymentStatus(payment.status, lang).toUpperCase().padEnd(10)}              ║
╠════════════════════════════════════════════════════════════╣
║                                                                ║
║  ${isEs ? 'CLIENTE' : 'CUSTOMER'}:                                                    ║
║    ${payment.customerName.padEnd(54)} ║
║    ${payment.customerEmail.padEnd(54)} ║
║    ${payment.customerPhone.padEnd(54)} ║
║                                                                ║
╠════════════════════════════════════════════════════════════╣
║  ${isEs ? 'SERVICIOS' : 'SERVICES'}                                                   ║
║                                                                ║
`;

  payment.items.forEach((item, index) => {
    const itemTotal = formatMoney(item.subtotal, item.currency);
    receipt += `║  ${index + 1}. ${item.serviceName.padEnd(48)} ${itemTotal.padEnd(4)} ║\n`;
    receipt += `║     ${item.quantity} x ${formatMoney(item.unitPrice, item.currency).padEnd(46)}             ║\n`;
  });

  receipt += `
║                                                                ║
╠════════════════════════════════════════════════════════════╣
║  ${isEs ? 'SUBTOTAL' : 'SUBTOTAL'}:            ${formatMoney(payment.subtotal, payment.currency).padEnd(40)} ║
║  ${isEs ? 'IMPUESTO (13%)' : 'TAX (13%)'}:         ${formatMoney(payment.tax, payment.currency).padEnd(40)} ║
║  ${isEs ? 'TOTAL' : 'TOTAL'}:                ${formatMoney(payment.total, payment.currency).padEnd(40)} ║
║                                                                ║
║  ${isEs ? 'MÉTODO DE PAGO' : 'PAYMENT METHOD'}: ${formatPaymentMethod(payment.method, lang).padEnd(35)}         ║
║                                                                ║
`;

  if (payment.transactionId) {
    receipt += `║  ${isEs ? 'TRANSACCIÓN' : 'TRANSACTION'}:         ${payment.transactionId.padEnd(33)}          ║\n`;
    receipt += `║                                                                ║\n`;
  }

  receipt += `
╠════════════════════════════════════════════════════════════╣
║  ${isEs ? '¡Gracias por tu pago!' : 'Thank you for your payment!'}                        ║
║  ${isEs ? 'Contacto' : 'Contact'}: +591 62408420 | freddyticona62@gmail.com              ║
╚════════════════════════════════════════════════════════════╝
`;

  return receipt;
}

/**
 * Descarga recibo como archivo de texto
 */
export function downloadPaymentReceipt(payment: Payment, lang: 'es' | 'en' = 'es'): void {
  const receipt = generatePaymentReceipt(payment, lang);
  const blob = new Blob([receipt], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `recibo-${payment.id.slice(0, 8)}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Event tracking para pagos
 */
function trackPaymentEvent(payment: Payment): void {
  // Analytics event tracking
  if (typeof (window as any).gtag !== 'undefined') {
    (window as any).gtag('event', 'purchase', {
      transaction_id: payment.id,
      value: payment.total,
      currency: payment.currency,
      items: payment.items.map(item => ({
        item_id: item.serviceId,
        item_name: item.serviceName,
        quantity: item.quantity,
        price: item.unitPrice
      }))
    });
  }

  // Custom analytics event
  try {
    const analytics = (window as any).ftAnalytics;
    if (analytics && analytics.track) {
      analytics.track('payment_created', {
        payment_id: payment.id,
        amount: payment.total,
        currency: payment.currency,
        method: payment.method
      });
    }
  } catch {
    // Analytics no disponible
  }
}

/**
 * Inicializa Stripe (cuando se tenga la clave real)
 * Esta es una implementación placeholder
 */
export async function initializeStripe(): Promise<boolean> {
  if (!PAYMENT_CONFIG.stripe.enabled) {
    console.warn('Stripe payments are disabled');
    return false;
  }

  try {
    // Cargar Stripe.js dinámicamente
    if (!(window as any).Stripe) {
      await new Promise<void>((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://js.stripe.com/v3/';
        script.onload = () => resolve();
        script.onerror = reject;
        document.head.appendChild(script);
      });
    }

    return true;
  } catch (error) {
    console.error('Error loading Stripe:', error);
    return false;
  }
}

/**
 * Simula un proceso de pago con Stripe
 * En producción, esto se conecta a un backend real
 */
export async function processStripePayment(
  checkoutSession: CheckoutSession
): Promise<{ success: boolean; paymentId?: string; error?: string }> {
  // Simulación de proceso de pago
  return new Promise((resolve) => {
    setTimeout(() => {
      // En producción, aquí se redirigiría a Stripe Checkout
      // o se usaría Stripe Elements para el proceso

      const payment = createPayment(
        [{
          id: crypto.randomUUID(),
          serviceId: checkoutSession.serviceId,
          serviceName: checkoutSession.serviceName,
          quantity: 1,
          unitPrice: checkoutSession.amount,
          currency: checkoutSession.currency,
          subtotal: checkoutSession.amount
        }],
        checkoutSession.customerName,
        checkoutSession.customerEmail,
        checkoutSession.customerPhone,
        'stripe',
        checkoutSession.currency
      );

      // Simular éxito (en producción esto depende de Stripe)
      payment.status = 'completed';
      payment.transactionId = `pi_${crypto.randomUUID().slice(0, 24)}`;
      payment.completedAt = new Date().toISOString();

      savePayment(payment);

      resolve({
        success: true,
        paymentId: payment.id
      });
    }, 2000);
  });
}

/**
 * Genera código QR para pago (simulado)
 * En producción, esto generaría un código QR real
 */
export function generateQRCode(amount: number, currency: Currency): string {
  // Simulación de generación de QR
  // En producción, usar una librería como qrcode.js
  const paymentData = JSON.stringify({
    amount,
    currency,
    phone: PAYMENT_CONFIG.qrPayment.phoneNumber,
    timestamp: Date.now()
  });

  // Retornar placeholder URL
  // En producción: `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(paymentData)}`
  return `data:payment/qr;${paymentData}`;
}
