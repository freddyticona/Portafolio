/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect, useCallback } from 'react';
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
  ChevronUp,
  Eye,
  ArrowUp,
  List,
  BookOpen
} from 'lucide-react';
import CommentSystem from './CommentSystem';

interface BlogDetailProps {
  post: BlogPost;
  lang: 'es' | 'en';
  t: any;
  onBack: () => void;
  allPosts?: BlogPost[];
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

function calculateReadTime(content: string): string {
  const text = stripHtml(content);
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));
  return `${minutes} min`;
}

export default function BlogDetail({ post, lang, t, onBack, allPosts }: BlogDetailProps) {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [showComments, setShowComments] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackTop, setShowBackTop] = useState(false);
  const [showToc, setShowToc] = useState(false);

  // ─── Scroll Progress + Back to Top ──────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
      setShowBackTop(scrollTop > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // ─── Compartir en redes sociales ────────────────────────────────────
  const shareUrl = window.location.href;
  const shareTitle = lang === 'es' ? post.titleEs : post.titleEn;

  const handleShare = (platform: string) => {
    const urls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      copy: shareUrl
    };
    if (platform === 'copy') {
      navigator.clipboard.writeText(shareUrl);
      alert(lang === 'es' ? '¡Enlace copiado!' : 'Link copied!');
    } else {
      window.open(urls[platform], '_blank', 'width=600,height=400');
    }
    setShowShareMenu(false);
  };

  // ─── Contenido HTML ─────────────────────────────────────────────────
  const rawContent = lang === 'es' ? post.contentEs : post.contentEn;

  const htmlContent = useMemo(() => {
    const parsed = marked.parse(rawContent, { breaks: true });
    let html = typeof parsed === 'string' ? parsed : '';
    let idx = 0;
    html = html.replace(/<h2>/gi, () => `<h2 id="section-${idx++}">`);
    return html;
  }, [rawContent]);

  // ─── Tiempo de lectura dinámico ─────────────────────────────────────
  const dynamicReadTime = useMemo(() => calculateReadTime(rawContent), [rawContent]);

  // ─── Tabla de Contenidos ────────────────────────────────────────────
  const tocItems = useMemo(() => {
    const items: { id: string; text: string }[] = [];
    const h2Regex = /<h2[^>]*>(.*?)<\/h2>/gi;
    let match;
    let index = 0;
    while ((match = h2Regex.exec(htmlContent)) !== null) {
      const text = stripHtml(match[1]);
      const id = `section-${index++}`;
      items.push({ id, text });
    }
    return items;
  }, [htmlContent]);

  // ─── Artículos Relacionados ─────────────────────────────────────────
  const relatedPosts = useMemo(() => {
    if (!allPosts) return [];
    const cat = post.categoryEs || post.categoryEn || '';
    return allPosts
      .filter(p => p.id !== post.id && (p.categoryEs === cat || p.categoryEn === cat))
      .slice(0, 3);
  }, [allPosts, post]);

  return (
    <>
      {/* Barra de progreso de lectura */}
      <div
        className="fixed top-0 left-0 h-0.5 bg-gold z-50 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={lang === 'es' ? 'Progreso de lectura' : 'Reading progress'}
      />

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
            {dynamicReadTime}
          </span>
          {(post.views || 0) > 0 && (
            <span className="flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5" />
              {post.views} {lang === 'es' ? 'lecturas' : 'reads'}
            </span>
          )}
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

      {/* Tabla de Contenidos (solo si hay suficientes secciones) */}
      {tocItems.length >= 2 && (
        <div className="bg-white/[0.02] border border-white/5 rounded-sm p-5">
          <button
            onClick={() => setShowToc(!showToc)}
            className="flex items-center gap-2 w-full text-left"
          >
            <List className="w-4 h-4 text-gold" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold">
              {lang === 'es' ? 'Contenido del Artículo' : 'Article Contents'}
            </span>
            <ChevronDown className={`w-3.5 h-3.5 text-stone-500 ml-auto transition-transform ${showToc ? 'rotate-180' : ''}`} />
          </button>
          {showToc && (
            <nav className="mt-3 space-y-1">
              {tocItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-xs font-mono text-stone-400 hover:text-gold py-1.5 px-2 rounded hover:bg-white/[0.03] transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(item.id);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item.text}
                </a>
              ))}
            </nav>
          )}
        </div>
      )}

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

      {/* Artículos Relacionados */}
      {relatedPosts.length > 0 && (
        <div className="border-t border-white/5 pt-8 space-y-6">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-gold" />
            {lang === 'es' ? 'Artículos Relacionados' : 'Related Articles'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedPosts.map((rp) => {
              const rpTitle = lang === 'es' ? rp.titleEs : rp.titleEn;
              const rpExcerpt = lang === 'es' ? rp.excerptEs : rp.excerptEn;
              return (
                <button
                  key={rp.id}
                  onClick={() => {
                    window.history.pushState(null, '', `/${window.location.pathname.split('/')[1]}/${rp.slug}`);
                    window.location.reload();
                  }}
                  className="group text-left bg-white/[0.02] border border-white/5 hover:border-gold/30 rounded-sm overflow-hidden transition-all duration-200 cursor-pointer"
                >
                  <div className="aspect-video bg-[#111] relative overflow-hidden">
                    <img
                      src={rp.imageUrl}
                      alt={rpTitle}
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="p-3 space-y-1.5">
                    <h4 className="text-sm font-semibold text-white leading-snug line-clamp-2 group-hover:text-gold transition-colors font-display">
                      {rpTitle}
                    </h4>
                    <p className="text-[11px] text-stone-400 line-clamp-2 leading-relaxed">
                      {rpExcerpt}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
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

      {/* Botón Volver Arriba */}
      {showBackTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-10 h-10 bg-gold/90 hover:bg-gold text-black rounded-sm flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer"
          aria-label={lang === 'es' ? 'Volver arriba' : 'Back to top'}
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
