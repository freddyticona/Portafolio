/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { marked } from 'marked';
import { BlogPost } from '../types';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  MessageSquare,
  Facebook,
  Twitter,
  Linkedin,
  X,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import CommentSystem from './CommentSystem';

interface BlogDetailProps {
  post: BlogPost;
  lang: 'es' | 'en';
  t: any;
  onBack: () => void;
}

export default function BlogDetail({ post, lang, t, onBack }: BlogDetailProps) {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [showComments, setShowComments] = useState(true);

  // Compartir en redes sociales
  const shareUrl = window.location.href;
  const shareTitle = lang === 'es' ? post.titleEs : post.titleEn;

  const handleShare = (platform: string) => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      copy: shareUrl
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(shareUrl);
      alert(lang === 'es' ? '¡Enlace copiado!' : 'Link copied!');
    } else {
      window.open(urls[platform as keyof typeof urls], '_blank', 'width=600,height=400');
    }
    setShowShareMenu(false);
  };

  // Renderizamos Markdown usando la tipografía de Tailwind (prose)
  const rawContent = lang === 'es' ? post.contentEs : post.contentEn;

  const htmlContent = useMemo(() => {
    return marked.parse(rawContent, { breaks: true });
  }, [rawContent]);

  return (
    <article className="max-w-4xl mx-auto space-y-8 md:space-y-12 animate-fadeIn text-left">
      {/* Top action header */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 hover:border-gold/50 hover:bg-white/10 text-stone-300 hover:text-white rounded-sm text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-gold" />
          <span>{t.blogBackToList}</span>
        </button>

        <div className="relative">
          <button
            onClick={() => setShowShareMenu(!showShareMenu)}
            className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 hover:border-gold/50 hover:bg-white/10 text-stone-300 hover:text-white rounded-sm text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer"
          >
            <Share2 className="w-4 h-4" />
            <span>{lang === 'es' ? 'Compartir' : 'Share'}</span>
          </button>

          {showShareMenu && (
            <div className="absolute top-full right-0 mt-2 bg-[#020202] border border-white/10 rounded-sm shadow-xl overflow-hidden z-10 min-w-[200px]">
              <button onClick={() => handleShare('facebook')} className="w-full px-4 py-3 text-left text-sm text-stone-300 hover:bg-white/5 hover:text-white flex items-center gap-3 transition-colors cursor-pointer">
                <Facebook className="w-4 h-4" />
                {lang === 'es' ? 'Facebook' : 'Facebook'}
              </button>
              <button onClick={() => handleShare('twitter')} className="w-full px-4 py-3 text-left text-sm text-stone-300 hover:bg-white/5 hover:text-white flex items-center gap-3 transition-colors cursor-pointer">
                <Twitter className="w-4 h-4" />
                X (Twitter)
              </button>
              <button onClick={() => handleShare('linkedin')} className="w-full px-4 py-3 text-left text-sm text-stone-300 hover:bg-white/5 hover:text-white flex items-center gap-3 transition-colors cursor-pointer">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </button>
              <button onClick={() => handleShare('copy')} className="w-full px-4 py-3 text-left text-sm text-stone-300 hover:bg-white/5 hover:text-white flex items-center gap-3 transition-colors cursor-pointer">
                X
                {lang === 'es' ? 'Copiar enlace' : 'Copy link'}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Article Header */}
      <header className="space-y-6">
        <div className="flex items-center gap-4 text-xs font-mono text-gold/80">
          <span className="px-3 py-1 bg-gold/10 border border-gold/20 rounded">
            {lang === 'es' ? post.categoryEs : post.categoryEn}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {new Date(post.date).toLocaleDateString(lang === 'es' ? 'es-BO' : 'en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {lang === 'es' ? post.readTimeEs : post.readTimeEn}
          </span>
          {post.source && (
            <span className="flex items-center gap-1.5 text-gold/60">
              <span className="w-1 h-1 rounded-full bg-gold/40" />
              {lang === 'es' ? 'Fuente: ' : 'Source: '}
              {post.sourceUrl ? (
                <a href={post.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold/80 underline underline-offset-2 transition-colors">
                  {post.source}
                </a>
              ) : post.source}
            </span>
          )}
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display leading-tight">
          {lang === 'es' ? post.titleEs : post.titleEn}
        </h1>

        <p className="text-lg text-stone-400 leading-relaxed font-light max-w-3xl">
          {lang === 'es' ? post.excerptEs : post.excerptEn}
        </p>

        {/* Featured Image */}
        <figure className="space-y-3">
          <div className="aspect-video rounded-sm overflow-hidden border border-white/5 relative bg-[#111]">
            <img
              src={post.imageUrl}
              alt={lang === 'es' ? post.titleEs : post.titleEn}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
          {post.imageCaption && (
            <figcaption className="text-xs font-mono text-stone-500 text-right">
              {lang === 'es' ? 'Fuente: ' : 'Source: '} {post.imageCaption}
            </figcaption>
          )}
        </figure>
      </header>

      {/* Article Content */}
      <div 
        className="article-content leading-relaxed"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />

      {/* Video Embed (if available) */}
      {post.videoUrl && (
        <div className="aspect-video rounded-sm overflow-hidden border border-white/5">
          <iframe
            src={`https://www.youtube.com/embed/${post.videoUrl}`}
            title={lang === 'es' ? post.titleEs : post.titleEn}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      {/* Comments Section */}
      {post.enableComments !== false && (
        <div className="border-t border-white/10 pt-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-gold" />
              {lang === 'es' ? 'Comentarios' : 'Comments'}
            </h3>
            <button
              onClick={() => setShowComments(!showComments)}
              className="flex items-center gap-2 text-xs text-stone-400 hover:text-white transition-colors cursor-pointer"
            >
              {showComments ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              {showComments ? (lang === 'es' ? 'Ocultar' : 'Hide') : (lang === 'es' ? 'Mostrar' : 'Show')}
            </button>
          </div>

          {showComments && (
            <CommentSystem postId={post.id} lang={lang} t={t} />
          )}
        </div>
      )}

      {/* Bottom Back Button */}
      <div className="pt-8 text-center border-t border-white/5">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:border-gold hover:bg-white/10 text-stone-300 hover:text-white rounded-sm text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-gold" />
          <span>{t.blogBackToList}</span>
        </button>
      </div>
    </article>
  );
}
