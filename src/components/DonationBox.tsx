/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Heart, Smartphone, Info } from 'lucide-react';

interface DonationBoxProps {
  lang?: 'es' | 'en';
}

/**
 * Componente de donaciones/apoyo financiero con QR
 */
export function DonationBox({ lang = 'es' }: DonationBoxProps) {
  const isEs = lang === 'es';

  return (
    <div className="bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 border border-gold/20 rounded-lg p-6 space-y-4">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2">
          <Heart className="w-6 h-6 text-gold" />
          <h3 className="text-xl font-bold text-white">
            {isEs ? '¿Te gusta mi trabajo?' : 'Like my work?'}
          </h3>
        </div>
        <p className="text-stone-300 text-sm max-w-md mx-auto">
          {isEs
            ? 'Puedes apoyar mi trabajo con una donación voluntaria. Tu ayuda me permite continuar creando contenido profesional.'
            : 'You can support my work with a voluntary donation. Your help allows me to continue creating professional content.'}
        </p>
      </div>

      {/* QR Code */}
      <div className="flex flex-col items-center space-y-3">
        <div className="bg-white p-3 rounded-lg shadow-lg">
          <img
            src="/images/qr-mercantil.jpg"
            alt={isEs ? 'Código QR para donaciones' : 'QR Code for donations'}
            className="w-40 h-40 object-contain"
          />
        </div>

        <div className="text-center space-y-1">
          <p className="text-xs text-stone-400">
            {isEs ? 'Escanea desde Banco Mercantil' : 'Scan from Banco Mercantil app'}
          </p>
          <div className="flex items-center justify-center gap-2 text-gold font-mono text-sm">
            <Smartphone className="w-4 h-4" />
            +591 62408420
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="flex items-start gap-2 p-3 bg-gold/5 border border-gold/10 rounded text-xs text-stone-400">
        <Info className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
        <p>
          {isEs
            ? 'Esta es una donación voluntaria. Si necesitas servicios profesionales, contáctame directamente.'
            : 'This is a voluntary donation. If you need professional services, contact me directly.'}
        </p>
      </div>
    </div>
  );
}

/**
 * Versión compacta para footer
 */
export function DonationBoxCompact({ lang = 'es' }: DonationBoxProps) {
  const isEs = lang === 'es';

  return (
    <div className="text-center space-y-3 p-4 bg-gold/5 rounded border border-gold/10">
      <Heart className="w-5 h-5 text-gold mx-auto" />
      <p className="text-sm text-stone-300">
        {isEs ? '¿Te gusta mi trabajo? Haz una donación' : 'Like my work? Make a donation'}
      </p>
      <a
        href="https://wa.me/59162408420"
        target="_blank"
        rel="noopener"
        className="inline-flex items-center gap-2 px-3 py-2 bg-gold hover:bg-gold-hover text-black text-xs font-bold rounded transition-colors"
      >
        {isEs ? 'Donar ahora' : 'Donate now'}
      </a>
    </div>
  );
}
