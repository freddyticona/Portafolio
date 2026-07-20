/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { X, CreditCard, Smartphone, Wallet, Building2, CheckCircle, AlertCircle, Info } from 'lucide-react';
import type { PaymentMethod, CheckoutSession, Currency } from '../types';
import {
  formatMoney,
  formatPaymentMethod,
  processStripePayment,
  savePayment,
  createPayment
} from '../lib/payments';
import { PAYMENT_CONFIG } from '../config';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  checkoutSession: CheckoutSession | null;
  lang?: 'es' | 'en';
}

/**
 * Modal de checkout para procesar pagos
 */
export function PaymentModal({ isOpen, onClose, checkoutSession, lang = 'es' }: PaymentModalProps) {
  const [step, setStep] = useState<'method' | 'details' | 'processing' | 'success'>('method');
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('stripe');
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [completedPaymentId, setCompletedPaymentId] = useState<string | null>(null);

  const isEs = lang === 'es';

  // Cerrar modal con ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setStep('method');
      setSelectedMethod('stripe');
      setCustomerDetails({ name: '', email: '', phone: '' });
      setError(null);
      setCompletedPaymentId(null);
    }
  }, [isOpen]);

  if (!isOpen || !checkoutSession) return null;

  const paymentMethods: Array<{
    id: PaymentMethod;
    label: string;
    icon: typeof CreditCard;
    description: string;
  }> = [
    {
      id: 'stripe',
      label: isEs ? 'Tarjeta de Crédito/Débito' : 'Credit/Debit Card',
      icon: CreditCard,
      description: isEs ? 'Paga con Visa, Mastercard, American Express' : 'Pay with Visa, Mastercard, Amex'
    },
    {
      id: 'qr',
      label: isEs ? 'QR / Billetera Móvil' : 'QR / Mobile Wallet',
      icon: Smartphone,
      description: isEs ? 'Tigo Money, Qi, BCP' : 'Tigo Money, Qi, BCP'
    },
    {
      id: 'transferencia',
      label: isEs ? 'Transferencia Bancaria' : 'Bank Transfer',
      icon: Building2,
      description: isEs ? 'Transferencia directa al banco' : 'Direct bank transfer'
    },
    {
      id: 'efectivo',
      label: isEs ? 'Efectivo' : 'Cash',
      icon: Wallet,
      description: isEs ? 'Paga en persona' : 'Pay in person'
    }
  ];

  const handleMethodSelect = (method: PaymentMethod) => {
    setSelectedMethod(method);
    setStep('details');
  };

  const handleDetailsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validar campos
    if (!customerDetails.name || !customerDetails.email || !customerDetails.phone) {
      setError(isEs ? 'Por favor completa todos los campos' : 'Please fill all fields');
      return;
    }

    // Para métodos offline, crear orden pendiente
    if (selectedMethod === 'transferencia' || selectedMethod === 'qr' || selectedMethod === 'efectivo') {
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
        customerDetails.name,
        customerDetails.email,
        customerDetails.phone,
        selectedMethod,
        checkoutSession.currency,
        undefined,
        checkoutSession.notes
      );

      // Guardar como pendiente
      savePayment(payment);
      setCompletedPaymentId(payment.id);

      // Mostrar pantalla de instrucciones de pago
      setStep('payment-instructions');
      return;
    }

    // Para Stripe (requiere configuración real)
    if (selectedMethod === 'stripe') {
      setStep('processing');
      setIsProcessing(true);

      const result = await processStripePayment({
        ...checkoutSession,
        customerName: customerDetails.name,
        customerEmail: customerDetails.email,
        customerPhone: customerDetails.phone
      });

      if (result.success) {
        setCompletedPaymentId(result.paymentId || null);
        setStep('success');
      } else {
        setError(result.error || (isEs ? 'Stripe no está configurado' : 'Stripe not configured'));
        setStep('details');
      }
      setIsProcessing(false);
    }
  };

  const calculateTotal = () => {
    const subtotal = checkoutSession.amount;
    const tax = subtotal * PAYMENT_CONFIG.taxRate;
    return {
      subtotal,
      tax,
      total: subtotal + tax
    };
  };

  const totals = calculateTotal();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-stone-950 border border-stone-800 rounded-lg shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-stone-800">
          <div>
            <h2 className="text-xl font-bold text-white">
              {step === 'success'
                ? (isEs ? '¡Pago Completado!' : 'Payment Complete!')
                : (isEs ? 'Finalizar Compra' : 'Checkout')
              }
            </h2>
            {step !== 'success' && (
              <p className="text-sm text-stone-400 mt-1">
                {isEs ? 'Estás pagando' : 'You are paying'}: {checkoutSession.serviceName}
              </p>
            )}
          </div>
          {step !== 'processing' && step !== 'success' && (
            <button
              onClick={onClose}
              className="p-2 hover:bg-stone-800 rounded-sm transition-colors"
            >
              <X className="w-5 h-5 text-stone-400" />
            </button>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 'method' && (
            <div className="space-y-4">
              <p className="text-stone-300 mb-4">
                {isEs ? 'Selecciona un método de pago' : 'Select a payment method'}
              </p>

              {paymentMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <button
                    key={method.id}
                    onClick={() => handleMethodSelect(method.id)}
                    className="w-full p-4 border border-stone-700 hover:border-gold rounded-sm transition-all text-left group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-stone-800 group-hover:bg-gold/10 rounded-sm transition-colors">
                        <Icon className="w-6 h-6 text-gold" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white mb-1">{method.label}</h3>
                        <p className="text-sm text-stone-400">{method.description}</p>
                      </div>
                      <div className="text-gold">
                        →
                      </div>
                    </div>
                  </button>
                );
              })}

              {/* Resumen */}
              <div className="mt-6 p-4 bg-stone-900/50 border border-stone-800 rounded-sm">
                <div className="flex justify-between text-sm">
                  <span className="text-stone-400">{isEs ? 'Subtotal' : 'Subtotal'}</span>
                  <span className="text-white">{formatMoney(totals.subtotal, checkoutSession.currency)}</span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-stone-400">{isEs ? 'IVA (13%)' : 'Tax (13%)'}</span>
                  <span className="text-white">{formatMoney(totals.tax, checkoutSession.currency)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold mt-3 pt-3 border-t border-stone-800">
                  <span className="text-white">{isEs ? 'Total' : 'Total'}</span>
                  <span className="text-gold">{formatMoney(totals.total, checkoutSession.currency)}</span>
                </div>
              </div>
            </div>
          )}

          {step === 'details' && (
            <form onSubmit={handleDetailsSubmit} className="space-y-6">
              {/* Método seleccionado */}
              <div className="p-4 bg-stone-900/50 border border-stone-800 rounded-sm">
                <div className="flex items-center gap-3">
                  {selectedMethod === 'stripe' && <CreditCard className="w-5 h-5 text-gold" />}
                  {selectedMethod === 'qr' && <Smartphone className="w-5 h-5 text-gold" />}
                  {selectedMethod === 'transferencia' && <Building2 className="w-5 h-5 text-gold" />}
                  {selectedMethod === 'efectivo' && <Wallet className="w-5 h-5 text-gold" />}
                  <span className="text-white font-medium">
                    {formatPaymentMethod(selectedMethod, lang)}
                  </span>
                  <button
                    type="button"
                    onClick={() => setStep('method')}
                    className="ml-auto text-sm text-stone-400 hover:text-white"
                  >
                    {isEs ? 'Cambiar' : 'Change'}
                  </button>
                </div>
              </div>

              {/* Instrucciones según método */}
              {selectedMethod === 'stripe' && (
                <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-sm">
                  <p className="text-sm text-blue-300">
                    {isEs
                      ? 'Serás redirigido a Stripe para completar el pago de forma segura.'
                      : 'You will be redirected to Stripe to complete the payment securely.'}
                  </p>
                </div>
              )}

              {selectedMethod === 'transferencia' && (
                <div className="p-4 bg-stone-900/50 border border-stone-800 rounded-sm space-y-3">
                  <p className="text-sm text-stone-300">{PAYMENT_CONFIG.bankTransfer.instructionsEs}</p>
                  <div className="mt-3 p-4 bg-black/50 rounded-lg border border-stone-700 font-mono text-sm space-y-2">
                    <div className="flex justify-between">
                      <span className="text-stone-400">{isEs ? 'Banco' : 'Bank'}:</span>
                      <span className="text-white font-bold">{PAYMENT_CONFIG.bankTransfer.bankName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">{isEs ? 'Tipo' : 'Type'}:</span>
                      <span className="text-white">{PAYMENT_CONFIG.bankTransfer.accountType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">{isEs ? 'N° Cuenta' : 'Account'}:</span>
                      <span className="text-gold font-bold text-lg">{PAYMENT_CONFIG.bankTransfer.accountNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">{isEs ? 'Beneficiario' : 'Beneficiary'}:</span>
                      <span className="text-white">{PAYMENT_CONFIG.bankTransfer.accountName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">{isEs ? 'C.I.' : 'ID'}:</span>
                      <span className="text-white">{PAYMENT_CONFIG.bankTransfer.idNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">{isEs ? 'Celular' : 'Phone'}:</span>
                      <span className="text-white">{PAYMENT_CONFIG.bankTransfer.phone}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-stone-500 mt-2">
                    <Info className="w-4 h-4" />
                    <span>{isEs ? 'Envía el comprobante por WhatsApp para confirmar' : 'Send receipt via WhatsApp to confirm'}</span>
                  </div>
                </div>
              )}

              {selectedMethod === 'qr' && (
                <div className="p-4 bg-stone-900/50 border border-stone-800 rounded-sm space-y-4">
                  <p className="text-sm text-stone-300 text-center">{PAYMENT_CONFIG.qrPayment.instructionsEs}</p>

                  {/* QR Code Image */}
                  <div className="flex justify-center">
                    <div className="bg-white p-4 rounded-lg">
                      <img
                        src={PAYMENT_CONFIG.qrPayment.qrImage}
                        alt={isEs ? 'Código QR para pago' : 'Payment QR Code'}
                        className="w-48 h-48 object-contain"
                        onError={(e) => {
                          // Fallback si no hay imagen
                          e.currentTarget.src = 'data:image/svg+xml,' + encodeURIComponent(`
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                              <rect fill="#000" width="200" height="200"/>
                              <text x="100" y="90" text-anchor="middle" fill="#fff" font-size="12" font-family="monospace">QR CODE</text>
                              <text x="100" y="110" text-anchor="middle" fill="#D4AF37" font-size="10" font-family="monospace">FREDDY TICONA</text>
                              <text x="100" y="130" text-anchor="middle" fill="#fff" font-size="14" font-family="monospace">${PAYMENT_CONFIG.qrPayment.phoneNumber}</text>
                            </svg>
                          `);
                        }}
                      />
                    </div>
                  </div>

                  <div className="text-center space-y-2">
                    <div className="p-3 bg-black/50 rounded font-mono text-sm">
                      <p className="text-stone-400">{isEs ? 'Banco' : 'Bank'}: {PAYMENT_CONFIG.qrPayment.provider}</p>
                      <p className="text-gold font-bold text-lg">{PAYMENT_CONFIG.qrPayment.phoneNumber}</p>
                    </div>
                    <p className="text-xs text-stone-500">
                      {isEs ? 'Escanea desde la app de Banco Mercantil' : 'Scan from Banco Mercantil app'}
                    </p>
                  </div>
                </div>
              )}

              {/* Formulario */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-2">
                    {isEs ? 'Nombre Completo' : 'Full Name'} *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerDetails.name}
                    onChange={(e) => setCustomerDetails({ ...customerDetails, name: e.target.value })}
                    className="w-full px-4 py-3 bg-stone-900 border border-stone-700 focus:border-gold rounded-sm text-white placeholder-stone-500 transition-colors"
                    placeholder={isEs ? 'Ej: Juan Pérez' : 'Ex: John Doe'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-2">
                    {isEs ? 'Correo Electrónico' : 'Email'} *
                  </label>
                  <input
                    type="email"
                    required
                    value={customerDetails.email}
                    onChange={(e) => setCustomerDetails({ ...customerDetails, email: e.target.value })}
                    className="w-full px-4 py-3 bg-stone-900 border border-stone-700 focus:border-gold rounded-sm text-white placeholder-stone-500 transition-colors"
                    placeholder={isEs ? 'ejemplo@correo.com' : 'example@email.com'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-2">
                    {isEs ? 'Teléfono / WhatsApp' : 'Phone / WhatsApp'} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={customerDetails.phone}
                    onChange={(e) => setCustomerDetails({ ...customerDetails, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-stone-900 border border-stone-700 focus:border-gold rounded-sm text-white placeholder-stone-500 transition-colors"
                    placeholder="+591 62408420"
                  />
                </div>
              </div>

              {error && (
                <div className="flex items-start gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-sm">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-300">{error}</p>
                </div>
              )}

              {/* Total */}
              <div className="p-4 bg-stone-900/50 border border-stone-800 rounded-sm">
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-white">{isEs ? 'Total a Pagar' : 'Total to Pay'}</span>
                  <span className="text-gold">{formatMoney(totals.total, checkoutSession.currency)}</span>
                </div>
              </div>

              {/* Botones */}
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep('method')}
                  className="flex-1 px-4 py-3 border border-stone-700 hover:bg-stone-800 text-white rounded-sm transition-colors"
                >
                  {isEs ? 'Atrás' : 'Back'}
                </button>
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="flex-1 px-4 py-3 bg-gold hover:bg-gold-hover text-black font-bold rounded-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      {isEs ? 'Procesando...' : 'Processing...'}
                    </>
                  ) : (
                    <>
                      {isEs ? 'Confirmar Pago' : 'Confirm Payment'}
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {step === 'processing' && (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 border-4 border-gold border-t-transparent rounded-full animate-spin" />
              <h3 className="text-xl font-bold text-white mb-2">
                {isEs ? 'Procesando tu pago...' : 'Processing your payment...'}
              </h3>
              <p className="text-stone-400">
                {isEs ? 'Por favor espera un momento' : 'Please wait a moment'}
              </p>
            </div>
          )}

          {step === 'payment-instructions' && completedPaymentId && (
            <div className="text-center py-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-500/20 rounded-full flex items-center justify-center">
                <AlertCircle className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {isEs ? 'Orden Creada' : 'Order Created'}
              </h3>
              <p className="text-stone-400 mb-6">
                {isEs
                  ? 'Tu orden ha sido creada. Completa el pago usando los datos a continuación.'
                  : 'Your order has been created. Complete payment using the details below.'}
              </p>

              {/* Order ID */}
              <div className="mb-6 p-4 bg-stone-900/50 border border-stone-800 rounded-lg">
                <p className="text-sm text-stone-400 mb-1">{isEs ? 'Número de Orden' : 'Order Number'}</p>
                <p className="font-mono text-gold text-xl">{completedPaymentId.slice(0, 8).toUpperCase()}</p>
              </div>

              {/* Payment Details */}
              <div className="mb-6 p-4 bg-stone-900/50 border border-stone-800 rounded-lg text-left">
                <p className="text-sm text-stone-400 mb-3">{isEs ? 'Detalles del Pago' : 'Payment Details'}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-stone-400">{isEs ? 'Servicio' : 'Service'}:</span>
                    <span className="text-white">{checkoutSession.serviceName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">{isEs ? 'Monto' : 'Amount'}:</span>
                    <span className="text-gold font-bold">{formatMoney(totals.total, checkoutSession.currency)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">{isEs ? 'Método' : 'Method'}:</span>
                    <span className="text-white">{formatPaymentMethod(selectedMethod, lang)}</span>
                  </div>
                </div>
              </div>

              {/* Instructions based on method */}
              {selectedMethod === 'transferencia' && (
                <div className="mb-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg text-left">
                  <h4 className="font-bold text-white mb-3">{isEs ? 'Pasos para pagar:' : 'Steps to pay:'}</h4>
                  <ol className="space-y-2 text-sm text-stone-300">
                    <li>1. {isEs ? 'Ve a tu app de banco o sucursal' : 'Go to your bank app or branch'}</li>
                    <li>2. {isEs ? 'Realiza transferencia a la cuenta indicada' : 'Make transfer to the account'}</li>
                    <li>3. {isEs ? 'Envía el comprobante por WhatsApp' : 'Send receipt via WhatsApp'}</li>
                  </ol>
                  <a
                    href="https://wa.me/59162408420"
                    target="_blank"
                    rel="noopener"
                    className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-sm text-sm font-bold transition-colors"
                  >
                    {isEs ? 'Enviar comprobante por WhatsApp' : 'Send receipt via WhatsApp'}
                  </a>
                </div>
              )}

              {selectedMethod === 'qr' && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-left">
                  <h4 className="font-bold text-white mb-3">{isEs ? 'Pasos para pagar:' : 'Steps to pay:'}</h4>
                  <ol className="space-y-2 text-sm text-stone-300">
                    <li>1. {isEs ? 'Abre la app de Banco Mercantil' : 'Open Banco Mercantil app'}</li>
                    <li>2. {isEs ? 'Escanea el código QR' : 'Scan the QR code'}</li>
                    <li>3. {isEs ? 'Envía el monto +591 62408420' : 'Send amount to +591 62408420'}</li>
                    <li>4. {isEs ? 'Confirma y envía captura por WhatsApp' : 'Confirm and send screenshot via WhatsApp'}</li>
                  </ol>
                  <a
                    href="https://wa.me/59162408420"
                    target="_blank"
                    rel="noopener"
                    className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-sm text-sm font-bold transition-colors"
                  >
                    {isEs ? 'Confirmar pago por WhatsApp' : 'Confirm payment via WhatsApp'}
                  </a>
                </div>
              )}

              <div className="p-4 bg-stone-900/50 border border-stone-800 rounded-lg">
                <p className="text-xs text-stone-500">
                  {isEs
                    ? 'Tu orden quedará confirmada una vez verifiquemos el pago. Recibirás confirmación por correo.'
                    : 'Your order will be confirmed once we verify the payment. You will receive confirmation by email.'}
                </p>
              </div>

              <button
                onClick={onClose}
                className="mt-6 w-full px-6 py-3 bg-gold hover:bg-gold-hover text-black font-bold rounded-sm transition-colors"
              >
                {isEs ? 'Entendido' : 'Got it'}
              </button>
            </div>
          )}

          {step === 'success' && (
            <div className="text-center py-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {isEs ? '¡Pago Completado!' : 'Payment Complete!'}
              </h3>
              <p className="text-stone-400 mb-6">
                {isEs
                  ? 'Tu pago ha sido procesado exitosamente. Recibirás un correo de confirmación pronto.'
                  : 'Your payment has been successfully processed. You will receive a confirmation email shortly.'}
              </p>

              {completedPaymentId && (
                <div className="p-4 bg-stone-900/50 border border-stone-800 rounded-sm mb-6">
                  <p className="text-sm text-stone-400 mb-1">{isEs ? 'ID de Transacción' : 'Transaction ID'}</p>
                  <p className="font-mono text-gold">{completedPaymentId}</p>
                </div>
              )}

              <div className="space-y-3">
                <button
                  onClick={onClose}
                  className="w-full px-4 py-3 bg-gold hover:bg-gold-hover text-black font-bold rounded-sm transition-colors"
                >
                  {isEs ? 'Cerrar' : 'Close'}
                </button>
                <p className="text-xs text-stone-500">
                  {isEs ? 'Te enviaremos los detalles a tu correo' : 'We will send the details to your email'}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
