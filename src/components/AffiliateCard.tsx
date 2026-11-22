/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * AffiliateCard — tarjeta reutilizable de recomendación de equipos/software.
 * Cumple el skill monetizacion-hibrida: rel="nofollow sponsored", target="_blank",
 * etiqueta visible de contenido patrocinado y sin scripts de publicidad externa.
 */
import React from 'react';
import { ExternalLink, Camera } from 'lucide-react';

interface Props {
  lang: 'es' | 'en';
  name: string;
  description: string;
  url: string;
  price?: string;
  image?: string;
}

export default function AffiliateCard({ lang, name, description, url, price, image }: Props) {
  const es = lang === 'es';
  return (
    <aside className="my-8 bg-white/[0.02] border border-white/10 rounded-sm p-4 md:p-5 flex flex-col sm:flex-row gap-4 items-start">
      <div className="w-full sm:w-28 h-20 shrink-0 rounded-sm bg-[#050505] border border-white/5 flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" loading="lazy" />
        ) : (
          <Camera className="w-6 h-6 text-gold/70" />
        )}
      </div>
      <div className="space-y-2 flex-1">
        <span className="block text-[9px] font-mono uppercase tracking-[0.2em] text-stone-500">
          {es ? 'Contenido patrocinado · enlace de afiliado' : 'Sponsored content · affiliate link'}
        </span>
        <h4 className="text-sm font-bold text-white font-display">{name}</h4>
        <p className="text-xs text-stone-400 leading-relaxed">{description}</p>
        <a
          href={url}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-gold hover:text-gold-hover transition-colors"
        >
          {es ? 'Ver en la tienda del fabricante' : 'View at the manufacturer'}
          <ExternalLink className="w-3.5 h-3.5" />
          {price ? <span className="text-stone-500 normal-case tracking-normal ml-1">{price}</span> : null}
        </a>
      </div>
    </aside>
  );
}
