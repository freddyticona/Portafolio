/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { CreditCard, Loader2 } from 'lucide-react';
import type { ServicePricing } from '../types';
import { formatMoney, createCheckoutSession } from '../lib/payments';

interface CheckoutButtonProps {
  service: ServicePricing;
  lang?: 'es' | 'en';
  variant?: 'default' | 'compact' | 'full';
  className?: string;
  onCheckoutStart?: () => void;
  onCheckoutComplete?: (paymentId: string) => void;
}

/**
 * Botón de checkout para iniciar el proceso de pago
 */
export function CheckoutButton({
  service,
  lang = 'es',
  variant = 'default',
  className = '',
  onCheckoutStart,
  onCheckoutComplete
}: CheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = () => {
    setIsLoading(true);
    onCheckoutStart?.();

    // Crear sesión de checkout
    const session = createCheckoutSession({
      serviceId: service.id,
      customerEmail: '',
      customerName: '',
      customerPhone: ''
    });

    if (session) {
      // Emitir evento para mostrar el modal de checkout
      window.dispatchEvent(new CustomEvent('open-checkout-modal', { detail: session }));
    }

    setIsLoading(false);
  };

  const isEs = lang === 'es';

  // Variantes de estilos
  const variants = {
    default: 'px-6 py-3 bg-gold hover:bg-gold-hover text-black font-bold rounded-sm transition-all',
    compact: 'px-4 py-2 bg-gold/90 hover:bg-gold text-black text-sm font-semibold rounded-sm transition-all',
    full: 'w-full px-6 py-4 bg-gold hover:bg-gold-hover text-black font-bold rounded-sm transition-all text-lg'
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={isLoading}
      className={`${variants[variant]} ${className} disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
    >
      {isLoading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          {isEs ? 'Procesando...' : 'Processing...'}
        </>
      ) : (
        <>
          <CreditCard className="w-5 h-5" />
          {variant === 'compact' ? (
            isEs ? 'Pagar' : 'Pay'
          ) : (
            <>
              {isEs ? 'Pagar' : 'Pay'} {formatMoney(service.basePrice, service.currency)}
            </>
          )}
        </>
      )}
    </button>
  );
}

/**
 * Badge de precio para servicios
 */
interface PriceBadgeProps {
  service: ServicePricing;
  lang?: 'es' | 'en';
  showDuration?: boolean;
}

export function PriceBadge({ service, lang = 'es', showDuration = true }: PriceBadgeProps) {
  const isEs = lang === 'es';

  return (
    <div className="flex items-center gap-2">
      <span className="text-2xl font-bold text-gold">
        {formatMoney(service.basePrice, service.currency)}
      </span>
      {showDuration && (
        <span className="text-sm text-stone-400">
          / {service.duration}
        </span>
      )}
    </div>
  );
}

/**
 * Precio compacto para listas
 */
interface CompactPriceProps {
  price: number;
  currency: 'BOB' | 'USD';
  lang?: 'es' | 'en';
}

export function CompactPrice({ price, currency, lang = 'es' }: CompactPriceProps) {
  const isEs = lang === 'es';
  const symbol = currency === 'BOB' ? 'Bs.' : '$';

  return (
    <span className="font-mono text-gold">
      {symbol}{price.toLocaleString()}
    </span>
  );
}

/**
 * Comparador de precios (antes/después)
 */
interface PriceComparisonProps {
  originalPrice: number;
  currentPrice: number;
  currency: 'BOB' | 'USD';
  lang?: 'es' | 'en';
}

export function PriceComparison({
  originalPrice,
  currentPrice,
  currency,
  lang = 'es'
}: PriceComparisonProps) {
  const isEs = lang === 'es';
  const discount = Math.round((1 - currentPrice / originalPrice) * 100);

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-stone-500 line-through">
        {formatMoney(originalPrice, currency)}
      </span>
      <span className="text-lg font-bold text-gold">
        {formatMoney(currentPrice, currency)}
      </span>
      {discount > 0 && (
        <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs font-bold rounded-sm">
          -{discount}%
        </span>
      )}
    </div>
  );
}
