/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BlogPost } from '../types';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import LazyImage from './LazyImage';

interface BlogCardProps {
  post: BlogPost;
  lang: 'es' | 'en';
  t: any;
  onClick: () => void;
  key?: string | number;
}

export default function BlogCard({ post, lang, t, onClick }: BlogCardProps) {
  return (
    <article 
      onClick={onClick}
      id={`blog-post-card-${post.id}`}
      className="group cursor-pointer bg-white/[0.02] border border-white/5 rounded-sm overflow-hidden hover:border-gold/30 transition-all duration-300 hover:shadow-xl hover:shadow-gold/2 flex flex-col justify-between"
    >
      <div className="space-y-4">
        {/* Post image */}
        <div className="aspect-video w-full overflow-hidden bg-[#050505] relative">
          <LazyImage
            src={post.imageUrl}
            alt={lang === 'es' ? post.titleEs : post.titleEn}
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-[#050505]/90 backdrop-blur-sm border border-white/10 text-[9px] font-mono tracking-wider font-bold uppercase text-gold px-2.5 py-1 rounded-sm">
              {lang === 'es' ? post.categoryEs : post.categoryEn}
            </span>
          </div>
        </div>

        {/* Post content */}
        <div className="px-5 text-left space-y-2">
          {/* Metadata */}
          <div className="flex items-center gap-4 text-[10px] font-mono text-stone-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {lang === 'es' ? post.readTimeEs : post.readTimeEn}
            </span>
          </div>

          <h3 className="text-base md:text-lg font-bold text-white tracking-tight leading-snug group-hover:text-gold transition-colors duration-200 line-clamp-2 font-display">
            {lang === 'es' ? post.titleEs : post.titleEn}
          </h3>
          
          <p className="text-xs text-stone-400 leading-relaxed font-light line-clamp-3">
            {lang === 'es' ? post.excerptEs : post.excerptEn}
          </p>
        </div>
      </div>

      {/* Card footer / CTA */}
      <div className="p-5 pt-3 text-left">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-gold group-hover:translate-x-1 transition-all duration-300">
          <span>{t.readMore}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </article>
  );
}
