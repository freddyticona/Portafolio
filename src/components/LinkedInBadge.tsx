import React, { useEffect, useRef } from 'react';

interface LinkedInBadgeProps {
  /** URL del perfil público de LinkedIn (se usa como fallback accesible) */
  href: string;
  /** Vanity del perfil (parte final de la URL de LinkedIn) */
  vanity: string;
  /** Nombre visible en el enlace fallback */
  name: string;
  /** Locale tipo LinkedIn (es_ES, en_US, ...) */
  locale?: string;
  /** Tamaño del badge: medium | large */
  size?: 'medium' | 'large';
  /** Tema: light | dark */
  theme?: 'light' | 'dark';
  /** Orientación: VERTICAL | HORIZONTAL */
  type?: 'VERTICAL' | 'HORIZONTAL';
  /** Versión del widget */
  version?: 'v1' | 'v2';
  className?: string;
}

// Tipo global del SDK de LinkedIn (cargado por platform.linkedin.com/in.js)
declare global {
  interface Window {
    IN?: {
      parse?: (node: HTMLElement) => void;
      // otras props internas omitidas
    };
  }
}

const LINKEDIN_SDK_URL = 'https://platform.linkedin.com/in.js';

/** Inserta el script del SDK de LinkedIn una sola vez en <head>. */
function ensureLinkedInSDK(): void {
  if (typeof document === 'undefined') return;
  const existing = document.querySelector<HTMLScriptElement>(
    `script[src^="${LINKEDIN_SDK_URL}"]`,
  );
  if (existing) return;

  const s = document.createElement('script');
  s.src = LINKEDIN_SDK_URL;
  s.async = true;
  s.defer = true;
  document.head.appendChild(s);
}

export default function LinkedInBadge({
  href,
  vanity,
  name,
  locale = 'es_ES',
  size = 'medium',
  theme = 'dark',
  type = 'VERTICAL',
  version = 'v1',
  className = '',
}: LinkedInBadgeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ensureLinkedInSDK();
    // Tras hydratar, replantea el parse del SDK si ya está disponible
    // para que inyecte el iframe del widget en el div recién montado.
    let attempts = 0;
    const timer = window.setInterval(() => {
      attempts += 1;
      if (window.IN && typeof window.IN.parse === 'function' && containerRef.current) {
        try {
          window.IN.parse(containerRef.current);
        } catch {
          /* noop */
        }
        window.clearInterval(timer);
      } else if (attempts > 40) {
        // ~8s max esperando al SDK
        window.clearInterval(timer);
      }
    }, 200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`badge-base LI-profile-badge ${className}`}
      data-locale={locale}
      data-size={size}
      data-theme={theme}
      data-type={type}
      data-vanity={vanity}
      data-version={version}
      aria-label={`Perfil de LinkedIn de ${name}`}
      data-testid="linkedin-badge"
    >
      <a
        className="badge-base__link LI-simple-link"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}
      </a>
    </div>
  );
}
