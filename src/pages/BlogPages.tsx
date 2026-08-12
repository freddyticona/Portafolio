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
}

export function NoticiasPage({
  lang,
  t,
  blogPosts,
  activeBlogPostId,
  setActiveBlogPostId,
  handleArticleClick,
  onInicioSpecial,
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
    <Suspense fallback={<LoadingFallback />}>
      <NewsPortal
        posts={newsPosts}
        lang={lang}
        t={t}
        onArticleClick={(post) => handleArticleClick(post)}
        onSpecialClick={onInicioSpecial}
      />
    </Suspense>
  );
}
