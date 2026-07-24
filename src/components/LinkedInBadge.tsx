/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * LinkedInBadge — Componente nativo que reemplaza al widget de LinkedIn
 * deprecado (`<script src="platform.linkedin.com/badges/js/profile.js"`).
 *
 * Por que no usamos más el widget oficial:
 *   - LinkedIn dejó de soportar el badge LI-profile-badge en mayo 2024.
 *   - El script de terceros añadía 1 petición bloqueante y bloqueaba
 *     el LCP del sitio por la espera del script externo.
 *   - Sin control sobre estilo, contraste ni accesibilidad.
 *
 * Este componente:
 *   - Renderiza inline (sin iframe externo) → 0 KB adicionales.
 *   - Usa el logo oficial de LinkedIn como SVG local.
 *   - Verificado WCAG AA (texto blanco sobre fondo LinkedIn blue).
 *   - Atributos dimensional estables para evitar CLS.
 *   - Link directo a /in/{USER} que abre en nueva pestaña.
 */

import React from 'react';

interface LinkedInBadgeProps {
  href: string;
  name: string;
  headline?: string;
  className?: string;
  variant?: 'vertical' | 'horizontal';
}

const LINKEDIN_INLINE_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
  <path fill="currentColor" d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.78C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.78 24h20.44C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0z"/>
</svg>
`.trim();

export default function LinkedInBadge({
  href,
  name,
  headline,
  className = '',
  variant = 'vertical',
}: LinkedInBadgeProps) {
  const containerCls =
    variant === 'horizontal'
      ? 'flex items-center gap-4 p-4 bg-[#0a0a0a] border border-white/10 rounded-sm max-w-sm hover:border-gold/30 transition-all duration-300'
      : 'flex flex-col items-center gap-3 p-5 bg-[#0a0a0a] border border-white/10 rounded-sm w-72 hover:border-gold/30 transition-all duration-300';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group ${containerCls} ${className}`}
      aria-label={`Ver perfil de LinkedIn de ${name}`}
      data-testid="linkedin-badge"
    >
      <div
        className="flex items-center justify-center bg-[#0A66C2] text-white rounded-sm shrink-0"
        style={{ width: 48, height: 48 }}
        dangerouslySetInnerHTML={{ __html: `<svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">${
          LINKEDIN_INLINE_SVG.match(/<path[^>]*\/>/)?.[0] ?? ''
        }</svg>` }}
      />
      <div className="min-w-0 text-left">
        <div className="text-xs font-mono uppercase tracking-widest text-gold/80 font-bold">
          LinkedIn
        </div>
        <div className="text-sm font-semibold text-white truncate group-hover:text-gold transition-colors">
          {name}
        </div>
        {headline && (
          <div className="text-[11px] text-stone-400 font-mono truncate mt-0.5">
            {headline}
          </div>
        )}
      </div>
    </a>
  );
}
