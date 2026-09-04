/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy, useEffect } from 'react';
import { BlogPost, PageId } from '../types';
import { TranslationT } from '../types.translation';
import { updateArticleMetaTags, updateMetaTags } from '../lib/seo';

const BlogLayout = lazy(() => import('../components/BlogLayout'));
const BlogDetail = lazy(() => import('../components/BlogDetail'));
const NewsPortal = lazy(() => import('../components/NewsPortal'));

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="skeleton w-full h-32 rounded" aria-busy="true" aria-label="Cargando..." />
    </div>
  );
}

interface BlogPageProps {
  lang: 'es' | 'en';
  t: TranslationT;
  blogPosts: BlogPost[];
  activeBlogPostId: string | null;
  setActiveBlogPostId: (id: string | null) => void;
  handleArticleClick: (post: BlogPost, page?: PageId) => void;
}

export function BlogPage({
  lang,
  t,
  blogPosts,
  activeBlogPostId,
  setActiveBlogPostId,
  handleArticleClick,
}: BlogPageProps) {
  // Solo posts personales (sin fuente externa, sin guías de trámites)
  const personalPosts = blogPosts.filter(p => !p.source && p.categoryEs !== 'Guías y Trámites');

  const activePost = activeBlogPostId
    ? blogPosts.find(p => p.id === activeBlogPostId) ?? null
    : null;

  useEffect(() => {
    if (activePost) {
      updateArticleMetaTags(activePost, lang, 'blog');
    } else {
      updateMetaTags('blog', lang);
    }
  }, [activePost?.id, lang]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12 animate-fadeIn">

      {activePost ? (
        // Full BlogPost reader view
        <Suspense fallback={<LoadingFallback />}>
          <BlogDetail
            post={activePost}
            lang={lang}
            t={t}
            allPosts={blogPosts}
            onBack={() => {
              setActiveBlogPostId(null);
              window.history.pushState(null, '', '/blog');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigate={(p) => handleArticleClick(p)}
          />
        </Suspense>
      ) : (
        <Suspense fallback={<LoadingFallback />}>
          <BlogLayout
            posts={personalPosts}
            lang={lang}
            t={t}
            onArticleClick={(post) => handleArticleClick(post)}
            title={t.blogTitle}
            subtitle={t.blogSubtitle}
            label={lang === 'es' ? 'Apuntes de Rodaje' : 'Filming Diaries'}
          />
        </Suspense>
      )}

      <div className="pb-8" />
    </div>
  );
}

interface NoticiasPageProps {
  lang: 'es' | 'en';
  t: TranslationT;
  blogPosts: BlogPost[];
  activeBlogPostId: string | null;
  setActiveBlogPostId: (id: string | null) => void;
  handleArticleClick: (post: BlogPost, page?: PageId) => void;
  onInicioSpecial?: () => void;
  onSpecialNavigate?: (page: PageId) => void;
}

export function NoticiasPage({
  lang,
  t,
  blogPosts,
  activeBlogPostId,
  setActiveBlogPostId,
  handleArticleClick,
  onInicioSpecial,
  onSpecialNavigate,
}: NoticiasPageProps) {
  const activePost = activeBlogPostId
    ? blogPosts.find(p => p.id === activeBlogPostId) ?? null
    : null;

  // Excluir guías de trámites (tienen su propia sección)
  const newsPosts = blogPosts.filter(p => p.categoryEs !== 'Guías y Trámites');

  useEffect(() => {
    if (activePost) {
      updateArticleMetaTags(activePost, lang, 'noticias');
    } else {
      updateMetaTags('noticias', lang);
    }
  }, [activePost?.id, lang]);

  if (activePost) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fadeIn">
        <Suspense fallback={<LoadingFallback />}>
          <BlogDetail
            post={activePost}
            lang={lang}
            t={t}
            allPosts={blogPosts}
            onBack={() => {
              setActiveBlogPostId(null);
              window.history.pushState(null, '', '/noticias');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigate={(p) => handleArticleClick(p)}
          />
        </Suspense>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12 animate-fadeIn">
      {/* Sector: Reportajes Especiales */}
      <section aria-label={lang === 'es' ? 'Reportajes Especiales' : 'Special Reports'}>
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          <h2 className="text-xl md:text-2xl font-display font-bold text-white tracking-tight">
            {lang === 'es' ? 'Reportajes Especiales' : 'Special Reports'}
          </h2>
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <button
            onClick={() => onSpecialNavigate?.('reportaje-iran-furia-epica')}
            className="group text-left bg-white/[0.02] border border-white/5 rounded-sm overflow-hidden hover:border-gold/40 transition-colors"
          >
            <div className="aspect-[16/9] bg-gradient-to-br from-[#3a1c1c] to-[#0a0a0f] flex items-center justify-center">
              <span className="text-3xl">⚡</span>
            </div>
            <div className="p-4">
              <div className="text-[11px] tracking-widest text-gold/70 mb-1">{lang === 'es' ? 'CAPÍTULO 1 / 4' : 'CHAPTER 1 / 4'}</div>
              <div className="font-display font-semibold text-white group-hover:text-gold transition-colors">{lang === 'es' ? 'Operación Furia Épica — Irán' : 'Operation Epic Fury — Iran'}</div>
              <div className="text-xs text-stone-400 mt-1">{lang === 'es' ? 'El conflicto que reconfiguró Oriente Medio.' : 'The conflict that reshaped the Middle East.'}</div>
            </div>
          </button>
          <button
            onClick={() => onSpecialNavigate?.('reportaje-gaza-desarme')}
            className="group text-left bg-white/[0.02] border border-white/5 rounded-sm overflow-hidden hover:border-gold/40 transition-colors"
          >
            <div className="aspect-[16/9] bg-gradient-to-br from-[#123a2a] to-[#0a0a0f] flex items-center justify-center">
              <span className="text-3xl">🕊️</span>
            </div>
            <div className="p-4">
              <div className="text-[11px] tracking-widest text-gold/70 mb-1">{lang === 'es' ? 'CAPÍTULO 2 / 4' : 'CHAPTER 2 / 4'}</div>
              <div className="font-display font-semibold text-white group-hover:text-gold transition-colors">{lang === 'es' ? 'Gaza: desarme en disputa' : 'Gaza: disarmament in dispute'}</div>
              <div className="text-xs text-stone-400 mt-1">{lang === 'es' ? 'Alto el fuego frágil y el futuro de la Franja.' : 'Fragile ceasefire and the Strip\'s future.'}</div>
            </div>
          </button>
          <button
            onClick={() => onSpecialNavigate?.('reportaje-ucrania-estancamiento')}
            className="group text-left bg-white/[0.02] border border-white/5 rounded-sm overflow-hidden hover:border-gold/40 transition-colors"
          >
            <div className="aspect-[16/9] bg-gradient-to-br from-[#12283a] to-[#0a0a0f] flex items-center justify-center">
              <span className="text-3xl">🌊</span>
            </div>
            <div className="p-4">
              <div className="text-[11px] tracking-widest text-gold/70 mb-1">{lang === 'es' ? 'CAPÍTULO 3 / 4' : 'CHAPTER 3 / 4'}</div>
              <div className="font-display font-semibold text-white group-hover:text-gold transition-colors">{lang === 'es' ? 'Ucrania: negociaciones estancadas' : 'Ukraine: stalled talks'}</div>
              <div className="text-xs text-stone-400 mt-1">{lang === 'es' ? 'Escalada militar sin fin a la vista.' : 'Military escalation with no end in sight.'}</div>
            </div>
          </button>
          <button
            onClick={() => onSpecialNavigate?.('reportaje-malvinas-historia')}
            className="group text-left bg-white/[0.02] border border-white/5 rounded-sm overflow-hidden hover:border-gold/40 transition-colors"
          >
            <div className="aspect-[16/9] bg-gradient-to-br from-[#123a3a] to-[#0a0a0f] flex items-center justify-center">
              <span className="text-3xl">🏝️</span>
            </div>
            <div className="p-4">
              <div className="text-[11px] tracking-widest text-gold/70 mb-1">{lang === 'es' ? 'CAPÍTULO 4 / 4' : 'CHAPTER 4 / 4'}</div>
              <div className="font-display font-semibold text-white group-hover:text-gold transition-colors">{lang === 'es' ? 'Malvinas: 192 años de disputa' : 'Falklands: 192 years of dispute'}</div>
              <div className="text-xs text-stone-400 mt-1">{lang === 'es' ? 'Del despojo de 1833 a la base naval anunciada por Milei.' : 'From 1833 dispossession to Milei\'s naval base announcement.'}</div>
            </div>
          </button>
        </div>
      </section>

      <Suspense fallback={<LoadingFallback />}>
        <NewsPortal
          posts={newsPosts}
          lang={lang}
          t={t}
          onArticleClick={(post) => handleArticleClick(post)}
          onSpecialClick={onInicioSpecial}
        />
      </Suspense>
    </div>
  );
}
