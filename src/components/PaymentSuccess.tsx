/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckCircle, Download, Share2, Home, Calendar, FileText, Mail } from 'lucide-react';
import type { Payment } from '../types';
import { formatMoney, formatPaymentMethod, downloadPaymentReceipt } from '../lib/payments';

interface PaymentSuccessProps {
  payment: Payment;
  lang?: 'es' | 'en';
  onContinue?: () => void;
}

/**
 * Pantalla de éxito después de un pago completado
 */
export function PaymentSuccess({ payment, lang = 'es', onContinue }: PaymentSuccessProps) {
  const isEs = lang === 'es';

  const handleDownloadReceipt = () => {
    downloadPaymentReceipt(payment, lang);
  };

  const handleShare = async () => {
    const shareText = isEs
      ? `He pagado ${formatMoney(payment.total, payment.currency)} por ${payment.items[0]?.serviceName || 'servicios'} en el portafolio de Freddy Ticona`
      : `I paid ${formatMoney(payment.total, payment.currency)} for ${payment.items[0]?.serviceName || 'services'} at Freddy Ticona's portfolio`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: isEs ? 'Pago Completado' : 'Payment Complete',
          text: shareText,
          url: window.location.href
        });
      } catch {
        // Usuario canceló el compartir
      }
    }
  };

  const handleContactSupport = () => {
    const subject = isEs ? 'Consulta sobre pago' : 'Payment inquiry';
    const body = isEs
      ? `Hola, tengo una consulta sobre mi pago con ID: ${payment.id}`
      : `Hi, I have a question about my payment with ID: ${payment.id}`;

    window.location.href = `mailto:freddyticona62@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-stone-950 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-green-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {isEs ? '¡Pago Completado!' : 'Payment Complete!'}
          </h1>
          <p className="text-stone-400">
            {isEs
              ? 'Tu pago ha sido procesado exitosamente'
              : 'Your payment has been successfully processed'}
          </p>
        </div>

        {/* Payment Details Card */}
        <div className="bg-stone-900/50 border border-stone-800 rounded-lg overflow-hidden mb-6">
          {/* Header */}
          <div className="bg-stone-900 px-6 py-4 border-b border-stone-800">
            <div className="flex items-center justify-between">
              <span className="text-sm text-stone-400">
                {isEs ? 'ID de Transacción' : 'Transaction ID'}
              </span>
              <span className="font-mono text-gold">{payment.id.slice(0, 12).toUpperCase()}</span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm text-stone-400">
                {isEs ? 'Fecha' : 'Date'}
              </span>
              <span className="text-white">
                {new Date(payment.createdAt).toLocaleString()}
              </span>
            </div>
          </div>

          {/* Items */}
          <div className="px-6 py-4 space-y-3">
            {payment.items.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-white font-medium">{item.serviceName}</h3>
                  <p className="text-sm text-stone-400">
                    {isEs ? 'Cantidad' : 'Qty'}: {item.quantity} × {formatMoney(item.unitPrice, item.currency)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold">
                    {formatMoney(item.subtotal, item.currency)}
                  </p>
                </div>
              </div>
            ))}

            {/* Totals */}
            <div className="pt-3 mt-3 border-t border-stone-800 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-stone-400">{isEs ? 'Subtotal' : 'Subtotal'}</span>
                <span className="text-white">{formatMoney(payment.subtotal, payment.currency)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-stone-400">{isEs ? 'Impuesto (13%)' : 'Tax (13%)'}</span>
                <span className="text-white">{formatMoney(payment.tax, payment.currency)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold pt-2 border-t border-stone-800">
                <span className="text-white">{isEs ? 'Total' : 'Total'}</span>
                <span className="text-gold text-xl">{formatMoney(payment.total, payment.currency)}</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-stone-900 px-6 py-4 border-t border-stone-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-stone-400">{isEs ? 'Método de Pago' : 'Payment Method'}</p>
                <p className="text-white font-medium">{formatPaymentMethod(payment.method, lang)}</p>
              </div>
              <div className="text-right">
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                  payment.status === 'completed'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {payment.status === 'completed'
                    ? (isEs ? 'Completado' : 'Completed')
                    : (isEs ? 'Pendiente' : 'Pending')
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Info */}
        <div className="bg-stone-900/50 border border-stone-800 rounded-lg px-6 py-4 mb-6">
          <h3 className="text-white font-medium mb-3">
            {isEs ? 'Información del Cliente' : 'Customer Information'}
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-stone-400">{isEs ? 'Nombre' : 'Name'}:</span>
              <span className="text-white">{payment.customerName}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-stone-400">{isEs ? 'Email' : 'Email'}:</span>
              <span className="text-white">{payment.customerEmail}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-stone-400">{isEs ? 'Teléfono' : 'Phone'}:</span>
              <span className="text-white">{payment.customerPhone}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <button
            onClick={handleDownloadReceipt}
            className="flex flex-col items-center gap-2 p-4 bg-stone-900/50 border border-stone-800 hover:border-gold rounded-lg transition-colors group"
          >
            <Download className="w-6 h-6 text-stone-400 group-hover:text-gold transition-colors" />
            <span className="text-sm text-stone-300">{isEs ? 'Descargar' : 'Download'}</span>
          </button>

          <button
            onClick={handleShare}
            className="flex flex-col items-center gap-2 p-4 bg-stone-900/50 border border-stone-800 hover:border-gold rounded-lg transition-colors group"
          >
            <Share2 className="w-6 h-6 text-stone-400 group-hover:text-gold transition-colors" />
            <span className="text-sm text-stone-300">{isEs ? 'Compartir' : 'Share'}</span>
          </button>

          <button
            onClick={handleContactSupport}
            className="flex flex-col items-center gap-2 p-4 bg-stone-900/50 border border-stone-800 hover:border-gold rounded-lg transition-colors group"
          >
            <Mail className="w-6 h-6 text-stone-400 group-hover:text-gold transition-colors" />
            <span className="text-sm text-stone-300">{isEs ? 'Soporte' : 'Support'}</span>
          </button>

          <button
            onClick={() => window.location.href = '/'}
            className="flex flex-col items-center gap-2 p-4 bg-stone-900/50 border border-stone-800 hover:border-gold rounded-lg transition-colors group"
          >
            <Home className="w-6 h-6 text-stone-400 group-hover:text-gold transition-colors" />
            <span className="text-sm text-stone-300">{isEs ? 'Inicio' : 'Home'}</span>
          </button>
        </div>

        {/* Next Steps */}
        <div className="bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/20 rounded-lg p-6">
          <h3 className="text-lg font-bold text-white mb-3">
            {isEs ? '¿Qué sigue?' : 'What\'s Next?'}
          </h3>
          <ul className="space-y-3 text-stone-300">
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <span>{isEs
                ? 'Recibirás un correo de confirmación con los detalles de tu pago.'
                : 'You will receive a confirmation email with your payment details.'}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <span>{isEs
                ? 'Si agendaste una cita, recibirás una confirmación por WhatsApp.'
                : 'If you booked an appointment, you will receive confirmation via WhatsApp.'}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <span>{isEs
                ? 'Puedes descargar el recibo en cualquier momento desde este enlace.'
                : 'You can download the receipt anytime from this page.'}
              </span>
            </li>
          </ul>
        </div>

        {/* Continue Button */}
        {onContinue && (
          <div className="mt-6 text-center">
            <button
              onClick={onContinue}
              className="px-8 py-3 bg-gold hover:bg-gold-hover text-black font-bold rounded-lg transition-colors"
            >
              {isEs ? 'Continuar' : 'Continue'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Versión compacta para mostrar en modales
 */
interface PaymentSuccessCompactProps {
  payment: Payment;
  onClose: () => void;
  lang?: 'es' | 'en';
}

export function PaymentSuccessCompact({ payment, onClose, lang = 'es' }: PaymentSuccessCompactProps) {
  const isEs = lang === 'es';

  return (
    <div className="text-center py-6">
      <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center">
        <CheckCircle className="w-8 h-8 text-green-400" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">
        {isEs ? '¡Pago Completado!' : 'Payment Complete!'}
      </h3>
      <p className="text-stone-400 mb-4">
        {isEs
          ? 'Tu pago ha sido procesado exitosamente'
          : 'Your payment has been successfully processed'}
      </p>

      <div className="bg-stone-900/50 border border-stone-800 rounded-lg p-4 mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-stone-400">{isEs ? 'ID' : 'ID'}</span>
          <span className="font-mono text-gold text-sm">{payment.id.slice(0, 8).toUpperCase()}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-stone-400">{isEs ? 'Total' : 'Total'}</span>
          <span className="text-gold font-bold">{formatMoney(payment.total, payment.currency)}</span>
        </div>
      </div>

      <button
        onClick={onClose}
        className="w-full px-4 py-3 bg-gold hover:bg-gold-hover text-black font-bold rounded-lg transition-colors"
      >
        {isEs ? 'Cerrar' : 'Close'}
      </button>
    </div>
  );
}
