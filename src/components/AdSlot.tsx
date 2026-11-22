/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * AdSlot — contenedor de publicidad en modo DORMIDO.
 *
 * Reglas estrictas (skill monetizacion-hibrida):
 * - Solo se monta en rutas de tráfico (/blog, /guias).
 * - Solo si VITE_ENABLE_ADS === 'true' (por defecto NO está activo).
 * - min-height reservado para CLS = 0: 250px móvil / 90px tablet / 280px escritorio.
 * - Carga diferida con IntersectionObserver (lazyOnload).
 * - Ningún script externo se carga desde este componente sin esas dos condiciones.
 */
import React, { useEffect, useRef, useState } from 'react';

interface Props {
  /** Identificador del bloque, para futuras redes publicitarias. */
  slot?: string;
  labelEs?: string;
  labelEn?: string;
}

const ADS_ENABLED = import.meta.env.VITE_ENABLE_ADS === 'true';
const ADSENSE_ID = import.meta.env.VITE_ADSENSE_ID || '';

/** Solo páginas de tráfico: blog y guías (incluye detalle y listado). */
function isTrafficRoute(pathname: string): boolean {
  return /^\/(blog|guias)(\/|$)/.test(pathname);
}

export default function AdSlot({
  slot = 'in-article',
  labelEs = 'Espacio publicitario',
  labelEn = 'Advertisement',
}: Props) {
  const [allowed, setAllowed] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Doble guard: flag de entorno + ruta. Sin ambos, no se monta nada.
    setAllowed(ADS_ENABLED && isTrafficRoute(window.location.pathname));
  }, []);

  useEffect(() => {
    if (!allowed || !ref.current || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setVisible(true);
        observer.disconnect();
      }
    }, { rootMargin: '200px' });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [allowed]);

  useEffect(() => {
    // Aquí se cargaría el script de la red publicitaria SOLO cuando esté
    // explícitamente activado y exista un ID configurado. Hoy no se carga nada.
    if (!allowed || !visible || !ADSENSE_ID) return;
  }, [allowed, visible]);

  if (!allowed) return null;

  return (
    <aside
      ref={ref}
      data-ad-slot={slot}
      aria-label={labelEs}
      className="w-full my-8 min-h-[250px] md:min-h-[90px] lg:min-h-[280px] flex items-center justify-center border border-white/10 bg-white/[0.02] rounded-sm"
    >
      {visible ? (
        <div className="text-center space-y-1 px-4">
          <span className="block text-[10px] font-mono uppercase tracking-[0.2em] text-stone-500">
            {labelEs} · {labelEn}
          </span>
          <span className="block text-[11px] text-stone-600">
            {import.meta.env.DEV ? 'AdSlot activo (sin red configurada)' : ''}
          </span>
        </div>
      ) : null}
    </aside>
  );
}
