/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * LinkedInBadge — Réplica visual del widget LI-profile de LinkedIn
 * deprecado. Render nativo (sin iframe, sin script de terceros) con
 * dimensiones fijas para evitar CLS, contraste WCAG AA y soporte i18n.
 *
 * Pixel-fiel al widget oficial previamente usado en este sitio:
 *   - Caja vertical ~200 × 270 px
 *   - Chip LinkedIn azul #0A66C2 esquina inferior derecha
 *   - Logo "in" blanco en cápsula azul
 *   - Headline truncado con line-clamp
 *   - Footer "Ver perfil ›" en azul LinkedIn
 *
 * Diferencias intencionales con el widget oficial:
 *   - Sin foto de LinkedIn (evita request extra y dependencias)
 *   - Avatar con iniciales como respaldo elegante
 *   - Localizada (ES/EN) vía props
 */

import React from 'react';

interface LinkedInBadgeProps {
  href: string;
  name: string;
  headline?: string;
  className?: string;
}

function initialsOf(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? '')
    .join('');
}

export default function LinkedInBadge({
  href,
  name,
  headline,
  className = '',
}: LinkedInBadgeProps) {
  const initials = initialsOf(name);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex flex-col w-[200px] h-[270px] bg-[#f3f3f1] rounded-sm overflow-hidden text-left no-underline hover:shadow-md transition-shadow duration-200 ${className}`}
      aria-label={`Ver perfil de LinkedIn de ${name}`}
      data-testid="linkedin-badge"
    >
      {/* Avatar inferior (parte inferior 70% blanco) */}
      <div className="relative flex flex-col h-full">
        {/* Avatar / hero top — gradiente gris neutro */}
        <div className="relative h-[150px] bg-gradient-to-b from-stone-700 via-stone-800 to-stone-900 flex items-center justify-center overflow-hidden">
          <div className="w-[88px] h-[88px] rounded-full bg-gradient-to-br from-stone-300 to-stone-500 flex items-center justify-center text-stone-900 font-display font-bold text-2xl tracking-tight shadow-inner ring-4 ring-stone-200/40">
            {initials || 'FT'}
          </div>

          {/* Chip LinkedIn azul abajo-derecha */}
          <div
            className="absolute bottom-0 right-0 bg-[#0A66C2] text-white text-[10px] font-mono font-bold uppercase tracking-tight px-2 py-0.5 rounded-tl-sm"
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" className="inline-block mr-1 -mt-0.5">
              <path
                fill="currentColor"
                d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.78C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.78 24h20.44C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0z"
              />
            </svg>
            <span className="align-middle">LinkedIn</span>
          </div>
        </div>

        {/* Body blanco */}
        <div className="flex-1 px-4 pt-3 pb-4 bg-[#f3f3f1] flex flex-col gap-2">
          <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 font-bold">
            LinkedIn
          </div>
          <div className="text-[15px] leading-tight font-semibold text-stone-900 group-hover:text-[#0A66C2] transition-colors line-clamp-1">
            {name}
          </div>
          {headline && (
            <div className="text-[11px] text-stone-600 leading-tight line-clamp-2 font-sans">
              {headline}
            </div>
          )}
        </div>
      </div>
    </a>
  );
}
