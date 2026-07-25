/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * NewsCard.tsx - Tarjetas de noticias mejoradas con badges de popularidad
 */

import React from 'react';
import { BlogPost, ContentType } from '../types';
import { Calendar, Clock, ArrowRight, MapPin, Eye, TrendingUp, Flame } from 'lucide-react';
import LazyImage from './LazyImage';

interface NewsCardProps {
  key?: string | number;
  post: BlogPost;
  lang: 'es' | 'en';
  onClick: () => void;
  variant?: 'default' | 'hero' | 'compact';
}

export default function NewsCard({ post, lang, onClick, variant = 'default' }: NewsCardProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  const title = lang === 'es' ? post.titleEs : post.titleEn;
  const excerpt = lang === 'es' ? post.excerptEs : post.excerptEn;
  const category = lang === 'es' ? post.categoryEs : post.categoryEn;
  const readTime = lang === 'es' ? post.readTimeEs : post.readTimeEn;

  const isNew = (Date.now() - new Date(post.date).getTime()) / (1000 * 60 * 60) < 48;
  const isPopular = (post.views || 0) >= 1000;

  const contentTypeLabels: Record<ContentType, { es: string; en: string }> = {
    news: { es: 'NOTICIA', en: 'NEWS' },
    analysis: { es: 'ANÁLISIS', en: 'ANALYSIS' },
    opinion: { es: 'OPINIÓN', en: 'OPINION' },
    reportage: { es: 'REPORTAJE', en: 'REPORTAGE' },
    'behind-scenes': { es: 'DETRÁS DE CÁMARAS', en: 'BEHIND THE SCENES' },
    culture: { es: 'CULTURA', en: 'CULTURE' }
  };
  const contentTypeColors: Record<ContentType, string> = {
    news: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
    analysis: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
    opinion: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
    reportage: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
    'behind-scenes': 'text-rose-400 border-rose-500/30 bg-rose-500/10',
    culture: 'text-teal-400 border-teal-500/30 bg-teal-500/10'
  };

  const formattedDate = new Date(post.date).toLocaleDateString(lang === 'es' ? 'es-BO' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  if (variant === 'hero') {
    return (
      <article
        className="card-3d-light group cursor-pointer relative overflow-hidden rounded-sm border border-white/10 bg-[#0a0a0a] min-h-[360px] md:min-h-[440px] focus:outline-none focus:ring-2 focus:ring-gold animate-fade-in-up"
        onClick={onClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={`Noticia principal: ${title}`}
      >
        <div className="absolute inset-0">
          <LazyImage
            src={post.imageUrl}
            alt={title}
            eager
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />
        </div>

        {/* Badges */}
        {post.breaking && (
          <span className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-sm z-10 animate-pulse shadow-lg">
            {lang === 'es' ? '🚨 ÚLTIMA HORA' : '🚨 BREAKING'}
          </span>
        )}
        {!post.breaking && isNew && (
          <span className="absolute top-4 right-4 bg-emerald-500 text-white text-[9px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm z-10 shadow-lg">
            {lang === 'es' ? 'NUEVO' : 'NEW'}
          </span>
        )}
        {isPopular && !post.breaking && (
          <span className="absolute top-4 right-4 bg-pink-600/80 text-white text-[9px] font-mono font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-sm z-10 shadow-lg">
            <TrendingUp className="w-3 h-3 inline mr-0.5" />
            {lang === 'es' ? 'TRENDING' : 'TRENDING'}
          </span>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 space-y-3 z-10">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gold bg-gold/10 border border-gold/20 px-2.5 py-1 rounded-sm backdrop-blur-sm">
              {category}
            </span>
            {post.contentType && (
              <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm border backdrop-blur-sm ${contentTypeColors[post.contentType]}`}>
                {lang === 'es' ? contentTypeLabels[post.contentType].es : contentTypeLabels[post.contentType].en}
              </span>
            )}
            {post.location && (
              <span className="text-[10px] font-mono text-stone-300 bg-black/60 border border-white/10 px-2 py-0.5 rounded-sm flex items-center gap-1 backdrop-blur-sm">
                <MapPin className="w-3 h-3 text-gold" />
                {post.location}
              </span>
            )}
          </div>

          <h3 className="text-xl md:text-3xl font-bold text-white tracking-tight leading-snug group-hover:text-gold transition-colors line-clamp-2 font-display">
            {title}
          </h3>

          <p className="text-sm text-stone-300 line-clamp-2 font-light leading-relaxed">
            {excerpt}
          </p>

          <div className="flex items-center gap-4 text-[10px] font-mono text-stone-400 pt-1 flex-wrap">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-gold" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-gold" />
              {readTime}
            </span>
            {(post.views || 0) > 0 && (
              <span className="flex items-center gap-1 text-stone-400">
                <Eye className="w-3 h-3 text-gold" />
                {post.views} {lang === 'es' ? 'lecturas' : 'views'}
              </span>
            )}
            {post.source && (
              <span className="text-[9px] text-stone-400 bg-white/10 px-2 py-0.5 rounded-sm font-semibold">
                {post.source}
              </span>
            )}
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'compact') {
    return (
      <article
        className="card-3d-light group cursor-pointer flex gap-3 border-b border-white/5 pb-3 mb-3 last:border-0 last:mb-0 last:pb-0 focus:outline-none focus:ring-1 focus:ring-gold rounded-sm p-1 animate-fade-in-left"
        onClick={onClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={`Noticia: ${title}`}
      >
        <div className="w-20 h-20 shrink-0 overflow-hidden rounded-sm bg-[#0a0a0a] relative">
          <LazyImage
            src={post.imageUrl}
            alt=""
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="flex-1 min-w-0 space-y-1">
          <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-gold">
            {category}
          </span>
          <h4 className="text-xs font-semibold text-white leading-tight line-clamp-2 group-hover:text-gold transition-colors font-display">
            {title}
          </h4>
          <div className="flex items-center gap-2 text-[9px] font-mono text-stone-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {formattedDate}
            </span>
            {post.source && (
              <span className="text-[8px] text-stone-400 bg-white/5 px-1.5 py-0.5 rounded-sm">
                {post.source}
              </span>
            )}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className="card-3d-light group cursor-pointer bg-white/[0.02] border border-white/5 rounded-sm overflow-hidden hover:border-gold/30 transition-all duration-300 hover:shadow-xl hover:shadow-gold/5 flex flex-col focus:outline-none focus:ring-2 focus:ring-gold animate-fade-in-up"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Noticia: ${title}`}
    >
      <div className="aspect-video overflow-hidden bg-[#0a0a0a] relative">
        <LazyImage
          src={post.imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-2 left-2 text-[8px] font-mono font-bold uppercase tracking-wider text-gold bg-gold/10 border border-gold/20 px-1.5 py-0.5 rounded-sm">
          {category}
        </span>
        {post.breaking && (
          <span className="absolute top-2 right-2 bg-red-600 text-white text-[8px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm shadow-md animate-pulse">
            {lang === 'es' ? 'ÚLTIMA HORA' : 'BREAKING'}
          </span>
        )}
        {!post.breaking && isNew && (
          <span className="absolute top-2 right-2 bg-emerald-500 text-white text-[7px] font-mono font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-sm shadow-md">
            {lang === 'es' ? 'NUEVO' : 'NEW'}
          </span>
        )}
        {!post.breaking && isPopular && (
          <span className="absolute bottom-2 right-2 bg-pink-600/80 text-white text-[7px] font-mono font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-sm shadow-md">
            <Flame className="w-3 h-3 inline mr-0.5" />
            {lang === 'es' ? 'TRENDING' : 'TRENDING'}
          </span>
        )}
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[9px] font-mono text-stone-500 flex-wrap">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-gold" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-gold" />
              {readTime}
            </span>
            {(post.views || 0) > 0 && (
              <span className="flex items-center gap-1 text-stone-400">
                <Eye className="w-3 h-3 text-gold" />
                {post.views}
              </span>
            )}
            {post.source && (
              <span className="text-[8px] text-stone-400 bg-white/5 px-1.5 py-0.5 rounded-sm font-mono">
                {post.source}
              </span>
            )}
          </div>

          <h3 className="text-sm font-bold text-white leading-snug line-clamp-2 group-hover:text-gold transition-colors font-display">
            {title}
          </h3>

          <p className="text-[11px] text-stone-400 line-clamp-2 font-light leading-relaxed">
            {excerpt}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px] font-mono font-bold text-gold">
          <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            <span>{lang === 'es' ? 'Leer artículo' : 'Read article'}</span>
            <ArrowRight className="w-3 h-3" />
          </span>
          {post.views !== undefined && (
            <span className="text-[9px] text-stone-500 font-normal flex items-center gap-1">
              <Eye className="w-3 h-3 text-stone-500" />
              {post.views}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}