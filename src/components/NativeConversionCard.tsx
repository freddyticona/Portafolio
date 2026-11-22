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

/** Selecciona el servicio más cercano al tema del artículo. */
export function serviceForPost(title: string, isGuide: boolean): { id: string; labelEs: string; labelEn: string } {
  const t = (title || '').toLowerCase();
  const has = (...words: string[]) => words.some(w => t.includes(w));

  if (isGuide) {
    return { id: 'plan-capsulas-difusion', labelEs: 'Cápsulas y difusión', labelEn: 'Short-form video & distribution' };
  }
  if (has('ia', 'inteligencia artificial', 'ai', 'motion', 'animacion', 'animación')) {
    return { id: 'animacion-ia', labelEs: 'Animación con IA', labelEn: 'AI animation' };
  }
  if (has('edicion', 'edición', 'montaje', 'color', 'davinci', 'editing')) {
    return { id: 'edicion-preexistente', labelEs: 'Edición de video', labelEn: 'Video editing' };
  }
  if (has('reel', 'vertical', 'tiktok', 'shorts', 'instagram')) {
    return { id: 'reel-vertical', labelEs: 'Reels y video vertical', labelEn: 'Reels & vertical video' };
  }
  if (has('foto', 'camara', 'cámara', 'luz', 'iluminacion', 'iluminación', 'photography')) {
    return { id: 'cobertura-fotografica', labelEs: 'Cobertura fotográfica', labelEn: 'Photo coverage' };
  }
  if (has('documental', 'reportaje', 'cobertura', 'periodism', 'documentary')) {
    return { id: 'reportaje-impacto', labelEs: 'Reportajes de impacto', labelEn: 'Impact reportages' };
  }
  return { id: 'plan-capsulas-difusion', labelEs: 'Cápsulas y difusión', labelEn: 'Short-form video & distribution' };
}

export default function NativeConversionCard({ lang, title, category, isGuide }: Props) {
  const es = lang === 'es';
  const service = serviceForPost(title, Boolean(isGuide));
  const href = `/servicios/${service.id}`;
  const heading = es
    ? (isGuide ? '¿Necesitas contenido para tu institución?' : 'Lleva esto a tu marca')
    : (isGuide ? 'Need content for your organization?' : 'Put this to work for your brand');
  const copy = es
    ? `Trabajo de forma personalizada en La Paz y todo Bolivia. Cotiza ${service.labelEs.toLowerCase()} con precios claros y entrega en 3 a 5 días.`
    : `I work one-on-one in La Paz and across Bolivia. Quote ${service.labelEn.toLowerCase()} with clear prices and a 3 to 5 day turnaround.`;

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
          href={href}
          onClick={() => PortfolioEvents.selectService(service.labelEs, undefined)}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold hover:bg-gold-hover text-black font-bold rounded-sm transition-colors"
        >
          {es ? `Cotizar ${service.labelEs.toLowerCase()}` : `Quote ${service.labelEn.toLowerCase()}`}
          <ArrowRight className="w-4 h-4" />
        </a>
        <a
          href="/servicios"
          className="text-xs font-mono font-bold uppercase tracking-widest text-gold hover:text-gold-hover transition-colors"
        >
          {es ? 'Ver todos los servicios →' : 'See all services →'}
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
