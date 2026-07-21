import { BlogPost } from '../types';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import LazyImage from './LazyImage';

interface NewsCardProps {
  key?: string | number;
  post: BlogPost;
  lang: 'es' | 'en';
  onClick: () => void;
  variant?: 'default' | 'hero' | 'compact';
}

export default function NewsCard({ post, lang, onClick, variant = 'default' }: NewsCardProps) {
  if (variant === 'hero') {
    return (
      <article onClick={onClick} className="group cursor-pointer relative overflow-hidden rounded-sm border border-white/5 bg-[#0a0a0a] min-h-[360px] md:min-h-[420px]">
        <div className="absolute inset-0">
          <LazyImage src={post.imageUrl} alt={lang === 'es' ? post.titleEs : post.titleEn} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
        </div>
        {post.breaking && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm z-10 animate-pulse">
            {lang === 'es' ? 'ÚLTIMA HORA' : 'BREAKING'}
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gold bg-gold/10 border border-gold/20 px-2 py-0.5 rounded-sm">
              {lang === 'es' ? post.categoryEs : post.categoryEn}
            </span>
          </div>
          <h3 className="text-xl md:text-3xl font-bold text-white tracking-tight leading-snug group-hover:text-gold transition-colors line-clamp-2 font-display">
            {lang === 'es' ? post.titleEs : post.titleEn}
          </h3>
          <p className="text-sm text-stone-300 line-clamp-2 font-light">{lang === 'es' ? post.excerptEs : post.excerptEn}</p>
          <div className="flex items-center gap-4 text-[10px] font-mono text-stone-400">
            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{lang === 'es' ? post.readTimeEs : post.readTimeEn}</span>
            {post.source && <span className="text-[9px] text-stone-500 bg-white/5 px-1.5 py-0.5 rounded-sm">{post.source}</span>}
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'compact') {
    return (
      <article onClick={onClick} className="group cursor-pointer flex gap-3 border-b border-white/5 pb-3 mb-3 last:border-0 last:mb-0 last:pb-0">
        <div className="w-20 h-20 shrink-0 overflow-hidden rounded-sm bg-[#0a0a0a]">
          <LazyImage src={post.imageUrl} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="flex-1 min-w-0 space-y-1">
          <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-gold">{lang === 'es' ? post.categoryEs : post.categoryEn}</span>
          <h4 className="text-xs font-semibold text-white leading-tight line-clamp-2 group-hover:text-gold transition-colors">{lang === 'es' ? post.titleEs : post.titleEn}</h4>
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-mono text-stone-500">{post.date}</span>
            {post.source && <span className="text-[8px] text-stone-500 bg-white/5 px-1 py-0.5 rounded-sm">{post.source}</span>}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article onClick={onClick} className="group cursor-pointer bg-white/[0.02] border border-white/5 rounded-sm overflow-hidden hover:border-gold/30 transition-all duration-300 hover:shadow-xl hover:shadow-gold/2 flex flex-col">
      <div className="aspect-video overflow-hidden bg-[#0a0a0a] relative">
        <LazyImage src={post.imageUrl} alt={lang === 'es' ? post.titleEs : post.titleEn} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
        <span className="absolute top-2 left-2 bg-[#050505]/80 backdrop-blur-sm text-[9px] font-mono font-bold uppercase tracking-wider text-gold px-2 py-0.5 rounded-sm border border-white/10">
          {lang === 'es' ? post.categoryEs : post.categoryEn}
        </span>
        {post.breaking && <span className="absolute top-2 right-2 bg-red-600 text-white text-[8px] font-mono font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-sm">{lang === 'es' ? 'URGENTE' : 'URGENT'}</span>}
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[9px] font-mono text-stone-500">
            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{lang === 'es' ? post.readTimeEs : post.readTimeEn}</span>
            {post.source && <span className="text-[8px] text-stone-500 bg-white/5 px-1.5 py-0.5 rounded-sm">{post.source}</span>}
          </div>
          <h3 className="text-sm font-bold text-white leading-snug line-clamp-2 group-hover:text-gold transition-colors">{lang === 'es' ? post.titleEs : post.titleEn}</h3>
          <p className="text-[11px] text-stone-400 line-clamp-2 font-light">{lang === 'es' ? post.excerptEs : post.excerptEn}</p>
        </div>
        <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-gold group-hover:translate-x-1 transition-transform mt-3">
          <span>{lang === 'es' ? 'Leer más' : 'Read more'}</span>
          <ArrowRight className="w-3 h-3" />
        </div>
      </div>
    </article>
  );
}
