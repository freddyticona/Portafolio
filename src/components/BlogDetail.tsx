/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
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
  BookOpen,
  Send,
  Camera,
  User,
  Home,
  ChevronRight,
  ExternalLink,
  Heart,
  Mail
} from 'lucide-react';
import CommentSystem from './CommentSystem';
import { injectStructuredData } from '../lib/structuredData';
import TrustIndicators from './TrustIndicators';

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
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      copy: shareUrl
    };
    if (platform === 'copy') {
      navigator.clipboard.writeText(shareUrl);
      alert(lang === 'es' ? '¡Enlace copiado!' : 'Link copied!');
    } else {
      window.open(urls[platform], '_blank', 'width=600,height=400');
    }
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

  // ─── Structured Data + OG Tags para el artículo ────────────────────
  useEffect(() => {
    const title = lang === 'es' ? post.titleEs : post.titleEn;
    const category = lang === 'es' ? post.categoryEs : post.categoryEn;
    const shareUrl = window.location.href;

    // Inyectar NewsArticle JSON-LD
    injectStructuredData({
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      headline: title,
      description: lang === 'es' ? post.excerptEs : post.excerptEn,
      image: post.imageUrl,
      author: { '@type': 'Person', name: 'Freddy Ticona Guzmán' },
      publisher: {
        '@type': 'Organization',
        name: 'Freddy Ticona - Servicios Audiovisuales',
        logo: { '@type': 'ImageObject', url: 'https://freddydev.net/favicon.ico' }
      },
      datePublished: post.date,
      dateModified: post.date,
      mainEntityOfPage: { '@type': 'WebPage', '@id': shareUrl },
      articleSection: category,
      keywords: [category, post.source].filter(Boolean).join(', '),
      dateline: post.location || 'La Paz, Bolivia',
    });

    // Meta tags OG para artículo
    const setMeta = (prop: string, val: string) => {
      let el = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement;
      if (!el) { el = document.createElement('meta'); el.setAttribute('property', prop); document.head.appendChild(el); }
      el.content = val;
    };
    setMeta('article:published_time', post.date);
    setMeta('article:modified_time', post.date);
    setMeta('article:section', category);
    setMeta('article:tag', category);
    if (post.source) setMeta('article:tag', post.source);

    // Restaurar al desmontar
    return () => {
      const newsScript = document.querySelector('script[type="application/ld+json"]');
      if (newsScript) newsScript.remove();
      ['article:published_time', 'article:modified_time', 'article:section', 'article:tag'].forEach(p => {
        const el = document.querySelector(`meta[property="${p}"]`);
        if (el) el.remove();
      });
    };
  }, [post, lang]);

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

      {/* Social Share — Fixed Left Rail (desktop) / Bottom Bar (mobile) */}
      <div className="hidden lg:flex fixed left-4 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-3 bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/10 rounded-lg py-4 px-2.5 shadow-xl">
        <span className="text-[8px] font-mono font-bold uppercase tracking-widest text-stone-500 [writing-mode:vertical-lr] mb-1">
          {lang === 'es' ? 'Compartir' : 'Share'}
        </span>
        <button onClick={() => handleShare('facebook')} className="p-2 bg-white/5 hover:bg-[#1877F2] rounded-full transition-all duration-200 cursor-pointer group" aria-label="Facebook">
          <Facebook className="w-4 h-4 text-stone-400 group-hover:text-white transition-colors" />
        </button>
        <button onClick={() => handleShare('twitter')} className="p-2 bg-white/5 hover:bg-[#000000] rounded-full transition-all duration-200 cursor-pointer group" aria-label="X (Twitter)">
          <Twitter className="w-4 h-4 text-stone-400 group-hover:text-white transition-colors" />
        </button>
        <button onClick={() => handleShare('whatsapp')} className="p-2 bg-white/5 hover:bg-[#25D366] rounded-full transition-all duration-200 cursor-pointer group" aria-label="WhatsApp">
          <svg className="w-4 h-4 text-stone-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </button>
        <button onClick={() => handleShare('copy')} className="p-2 bg-white/5 hover:bg-gold rounded-full transition-all duration-200 cursor-pointer group" aria-label={lang === 'es' ? 'Copiar enlace' : 'Copy link'}>
          <X className="w-4 h-4 text-stone-400 group-hover:text-black transition-colors" />
        </button>
      </div>

      {/* Social Share — Mobile Bottom Bar */}
      <div className="flex lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#0a0a0a]/95 backdrop-blur-md border-t border-white/10 px-4 py-3 justify-center gap-4">
        <button onClick={() => handleShare('facebook')} className="flex flex-col items-center gap-0.5 text-stone-400 hover:text-[#1877F2] transition-colors cursor-pointer">
          <Facebook className="w-5 h-5" /><span className="text-[8px] font-mono font-bold uppercase tracking-wider">FB</span>
        </button>
        <button onClick={() => handleShare('twitter')} className="flex flex-col items-center gap-0.5 text-stone-400 hover:text-white transition-colors cursor-pointer">
          <Twitter className="w-5 h-5" /><span className="text-[8px] font-mono font-bold uppercase tracking-wider">X</span>
        </button>
        <button onClick={() => handleShare('whatsapp')} className="flex flex-col items-center gap-0.5 text-stone-400 hover:text-[#25D366] transition-colors cursor-pointer">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          <span className="text-[8px] font-mono font-bold uppercase tracking-wider">WA</span>
        </button>
        <button onClick={() => handleShare('linkedin')} className="flex flex-col items-center gap-0.5 text-stone-400 hover:text-[#0A66C2] transition-colors cursor-pointer">
          <Linkedin className="w-5 h-5" /><span className="text-[8px] font-mono font-bold uppercase tracking-wider">IN</span>
        </button>
        <button onClick={() => handleShare('copy')} className="flex flex-col items-center gap-0.5 text-stone-400 hover:text-gold transition-colors cursor-pointer">
          <X className="w-5 h-5" /><span className="text-[8px] font-mono font-bold uppercase tracking-wider">{lang === 'es' ? 'URL' : 'URL'}</span>
        </button>
      </div>

    <article className="max-w-4xl mx-auto space-y-8 md:space-y-12 animate-fadeIn text-left pb-20 lg:pb-0">
      {/* Top action header */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 hover:border-gold/50 hover:bg-white/10 text-stone-300 hover:text-white rounded-sm text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-gold" />
          <span>{t.blogBackToList}</span>
        </button>

        <button
          onClick={() => handleShare('copy')}
          className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 hover:border-gold/50 hover:bg-white/10 text-stone-300 hover:text-white rounded-sm text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer"
        >
          <Share2 className="w-4 h-4" />
          <span>{lang === 'es' ? 'Copiar enlace' : 'Copy link'}</span>
        </button>
      </div>

      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-mono text-stone-500" aria-label="Breadcrumb">
        <button onClick={onBack} className="hover:text-gold transition-colors flex items-center gap-1 cursor-pointer">
          <Home className="w-3 h-3" />
          <span>{lang === 'es' ? 'Inicio' : 'Home'}</span>
        </button>
        <ChevronRight className="w-3 h-3 text-stone-600" />
        <span className="text-stone-400">{lang === 'es' ? (post.categoryEs || 'Noticias') : (post.categoryEn || 'News')}</span>
        <ChevronRight className="w-3 h-3 text-stone-600" />
        <span className="text-gold/60 truncate max-w-[200px]">{lang === 'es' ? post.titleEs : post.titleEn}</span>
      </nav>

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
          <figcaption className="text-xs font-mono text-stone-500 text-right flex items-center justify-end gap-1.5">
            <Camera className="w-3 h-3 text-stone-600" />
            {post.imageCaption
              ? (lang === 'es' ? `Crédito: ${post.imageCaption}` : `Credit: ${post.imageCaption}`)
              : (lang === 'es' ? 'Foto: Cortesía' : 'Photo: Courtesy')}
          </figcaption>
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

      {/* Trust Project Indicators */}
      <TrustIndicators post={post} lang={lang} t={t} />

      {/* Article Content */}
      <div
        className="article-content leading-relaxed"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />

      {/* Tags */}
      <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/5">
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-stone-500 mr-1">
          {lang === 'es' ? 'Etiquetas:' : 'Tags:'}
        </span>
        {[lang === 'es' ? post.categoryEs : post.categoryEn, post.source].filter(Boolean).map((tag, i) => (
          <span key={i} className="px-2.5 py-1 bg-white/[0.03] border border-white/10 hover:border-gold/30 text-[10px] font-mono text-stone-400 hover:text-gold rounded-sm transition-colors cursor-default">
            {tag}
          </span>
        ))}
        {post.location && (
          <span className="px-2.5 py-1 bg-white/[0.03] border border-white/10 text-[10px] font-mono text-stone-400 rounded-sm">
            📍 {post.location}
          </span>
        )}
      </div>

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

      {/* Author Card */}
      <div className="bg-white/[0.02] border border-white/5 rounded-sm p-5 md:p-6 flex flex-col sm:flex-row items-start gap-4">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gold/20 flex items-center justify-center shrink-0 overflow-hidden border-2 border-gold/30">
          <User className="w-7 h-7 md:w-8 md:h-8 text-gold" />
        </div>
        <div className="space-y-2">
          <div>
            <h4 className="text-sm font-bold text-white font-display">Freddy Ticona Guzmán</h4>
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold">
              {lang === 'es' ? 'Realizador Audiovisual' : 'Audiovisual Producer'}
            </p>
          </div>
          <p className="text-xs text-stone-400 leading-relaxed max-w-xl">
            {lang === 'es'
              ? 'Camarógrafo y realizador audiovisual boliviano. Premio Nacional Eduardo Abaroa 2017. +15 años de experiencia en documentales, televisión y cobertura periodística.'
              : 'Bolivian cameraman and audiovisual producer. National Eduardo Abaroa Award 2017. +15 years experience in documentaries, television and news coverage.'}
          </p>
          <div className="flex items-center gap-3 pt-1">
            <a href="https://freddydev.net/contacto" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-gold hover:text-gold/80 transition-colors">
              <Mail className="w-3 h-3" />
              {lang === 'es' ? 'Contactar' : 'Contact'}
            </a>
            <span className="text-stone-600">·</span>
            <span className="text-[10px] font-mono text-stone-500">
              {lang === 'es' ? 'Actualizado: ' : 'Updated: '}
              {new Date(post.date).toLocaleDateString(lang === 'es' ? 'es-BO' : 'en-US', {
                year: 'numeric', month: 'long', day: 'numeric'
              })}
            </span>
          </div>
        </div>
      </div>

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

      {/* Newsletter Subscription */}
      <div className="bg-gradient-to-br from-gold/[0.04] to-transparent border border-gold/10 rounded-sm p-6 md:p-8 space-y-4">
        <div className="space-y-2">
          <h3 className="text-base font-bold text-white font-display flex items-center gap-2">
            <Heart className="w-4 h-4 text-gold" />
            {lang === 'es' ? '¿Te gustó este artículo?' : 'Enjoyed this article?'}
          </h3>
          <p className="text-xs text-stone-400 leading-relaxed">
            {lang === 'es'
              ? 'Recibí notificaciones cuando publique nuevos artículos sobre producción audiovisual, documentales y noticias de Bolivia.'
              : 'Get notified when I publish new articles about audiovisual production, documentaries and news from Bolivia.'}
          </p>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); const d = new FormData(e.target as HTMLFormElement); alert(lang === 'es' ? '¡Gracias por suscribirte!' : 'Thanks for subscribing!'); (e.target as HTMLFormElement).reset(); }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <input
            type="email"
            name="email"
            required
            placeholder={lang === 'es' ? 'tu@email.com' : 'your@email.com'}
            className="flex-1 px-4 py-3 bg-[#020202] border border-white/10 focus:border-gold rounded-sm text-sm text-white placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-gold transition-all"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold hover:bg-gold-hover text-black font-bold rounded-sm text-xs uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            {lang === 'es' ? 'Suscribirme' : 'Subscribe'}
          </button>
        </form>
        <p className="text-[9px] font-mono text-stone-600">
          {lang === 'es' ? 'Sin spam. Podés darte de baja en cualquier momento.' : 'No spam. Unsubscribe anytime.'}
        </p>
      </div>

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
