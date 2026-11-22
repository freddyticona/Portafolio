/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * NativeConversionCard — tarjeta nativa al cierre de artículos y guías.
 * Enlaza contextualmente a un servicio real (o a la futura tienda), sin
 * scripts de publicidad externa (skill monetizacion-hibrida).
 */
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PortfolioEvents } from '../lib/analytics';

interface Props {
  lang: 'es' | 'en';
  title: string;
  category?: string;
  isGuide?: boolean;
}

/** Destino contextual: producto digital de la tienda o servicio real. */
export function serviceForPost(title: string, isGuide: boolean): { href: string; labelEs: string; labelEn: string; isStore: boolean } {
  const t = (title || '').toLowerCase();
  const has = (...words: string[]) => words.some(w => t.includes(w));

  // Trámites en Bolivia → compendio PDF de guías.
  if (isGuide) {
    return { href: '/tienda/compendio-guias-bolivia-2026', labelEs: 'Compendio de Guías 2026', labelEn: '2026 Guides Compendium', isStore: true };
  }
  // Guiones, hooks y Reels → pack de guiones.
  if (has('guion', 'guión', 'hook', 'script', 'reel', 'viral', 'copy')) {
    return { href: '/tienda/pack-guiones-hooks-reels', labelEs: 'Pack de Guiones y Hooks', labelEn: 'Scripts & Hooks Pack', isStore: true };
  }
  // Color, LUTs y corrección → pack de LUTs.
  if (has('lut', 'color', 'colorización', 'gradación', 'corrección de color', 'davinci', 'premiere')) {
    return { href: '/tienda/pack-luts-cinematograficos', labelEs: 'Pack de LUTs', labelEn: 'LUTs Pack', isStore: true };
  }
  // El resto enlaza a servicios reales.
  if (has('ia', 'inteligencia artificial', 'ai', 'motion', 'animacion', 'animación')) {
    return { href: '/servicios/animacion-ia', labelEs: 'Animación con IA', labelEn: 'AI animation', isStore: false };
  }
  if (has('edicion', 'edición', 'montaje', 'editing')) {
    return { href: '/servicios/edicion-preexistente', labelEs: 'Edición de video', labelEn: 'Video editing', isStore: false };
  }
  if (has('foto', 'camara', 'cámara', 'luz', 'iluminacion', 'iluminación', 'photography')) {
    return { href: '/servicios/cobertura-fotografica', labelEs: 'Cobertura fotográfica', labelEn: 'Photo coverage', isStore: false };
  }
  if (has('documental', 'reportaje', 'cobertura', 'periodism', 'documentary')) {
    return { href: '/servicios/reportaje-impacto', labelEs: 'Reportajes de impacto', labelEn: 'Impact reportages', isStore: false };
  }
  return { href: '/servicios/plan-capsulas-difusion', labelEs: 'Cápsulas y difusión', labelEn: 'Short-form video & distribution', isStore: false };
}

export default function NativeConversionCard({ lang, title, category, isGuide }: Props) {
  const es = lang === 'es';
  const service = serviceForPost(title, Boolean(isGuide));
  const heading = es
    ? (service.isStore ? 'Llévatelo en formato digital' : 'Lleva esto a tu marca')
    : (service.isStore ? 'Get the digital version' : 'Put this to work for your brand');
  const copy = es
    ? (service.isStore
        ? `Descarga ${service.labelEs.toLowerCase()} al instante y úsalo hoy mismo. Pago local por WhatsApp o tarjeta internacional.`
        : `Trabajo de forma personalizada en La Paz y todo Bolivia. Cotiza ${service.labelEs.toLowerCase()} con precios claros y entrega en 3 a 5 días.`)
    : (service.isStore
        ? `Download ${service.labelEn.toLowerCase()} instantly and use it today. Local WhatsApp payment or international card.`
        : `I work one-on-one in La Paz and across Bolivia. Quote ${service.labelEn.toLowerCase()} with clear prices and a 3 to 5 day turnaround.`);

  return (
    <aside className="mt-10 bg-gold/[0.04] border border-gold/25 rounded-sm p-5 md:p-6 space-y-4">
      <span className="inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-gold">
        <Sparkles className="w-3.5 h-3.5" />
        {es ? 'Recomendado para ti' : 'Recommended for you'}
      </span>
      <div className="space-y-2">
        <h3 className="text-lg font-bold text-white font-display">{heading}</h3>
        <p className="text-sm text-stone-300 leading-relaxed">{copy}</p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <a
          href={service.href}
          onClick={() => service.isStore
            ? PortfolioEvents.viewItem(service.labelEs)
            : PortfolioEvents.selectService(service.labelEs, undefined)}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold hover:bg-gold-hover text-black font-bold rounded-sm transition-colors"
        >
          {es
            ? (service.isStore ? `Ver ${service.labelEs.toLowerCase()}` : `Cotizar ${service.labelEs.toLowerCase()}`)
            : (service.isStore ? `View ${service.labelEn.toLowerCase()}` : `Quote ${service.labelEn.toLowerCase()}`)}
          <ArrowRight className="w-4 h-4" />
        </a>
        <a
          href={service.isStore ? '/tienda' : '/servicios'}
          className="text-xs font-mono font-bold uppercase tracking-widest text-gold hover:text-gold-hover transition-colors"
        >
          {service.isStore
            ? (es ? 'Ver toda la tienda →' : 'See the whole store →')
            : (es ? 'Ver todos los servicios →' : 'See all services →')}
        </a>
      </div>
      {category && (
        <p className="text-[10px] font-mono text-stone-500">
          {es ? 'Relacionado con' : 'Related to'}: {category}
        </p>
      )}
    </aside>
  );
}
