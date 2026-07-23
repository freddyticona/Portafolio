/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import { BlogPost, PageId } from '../types';
import { TranslationT } from '../types.translation';

const BlogCard = lazy(() => import('../components/BlogCard'));
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
  handleArticleClick: (post: BlogPost, page: PageId) => void;
}

export function BlogPage({
  lang,
  t,
  blogPosts,
  activeBlogPostId,
  setActiveBlogPostId,
  handleArticleClick,
}: BlogPageProps) {
  const activePost = activeBlogPostId
    ? blogPosts.find(p => p.id === activeBlogPostId) ?? null
    : null;

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
          />
        </Suspense>
      ) : (
        // Article grid list
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest">
              {lang === 'es' ? 'Apuntes de Rodaje' : 'Filming Diaries'}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display">
              {t.blogTitle}
            </h1>
            <p className="max-w-2xl mx-auto text-sm text-stone-400 leading-relaxed font-light">
              {t.blogSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Suspense key={post.id} fallback={<LoadingFallback />}>
                <BlogCard
                  post={post}
                  lang={lang}
                  t={t}
                  onClick={() => handleArticleClick(post, 'blog')}
                />
              </Suspense>
            ))}
          </div>
        </div>
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
  handleArticleClick: (post: BlogPost, page: PageId) => void;
}

export function NoticiasPage({
  lang,
  t,
  blogPosts,
  activeBlogPostId,
  setActiveBlogPostId,
  handleArticleClick,
}: NoticiasPageProps) {
  const activePost = activeBlogPostId
    ? blogPosts.find(p => p.id === activeBlogPostId) ?? null
    : null;

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
          />
        </Suspense>
      </div>
    );
  }

  return (
    <Suspense fallback={<LoadingFallback />}>
      <NewsPortal
        posts={blogPosts}
        lang={lang}
        t={t}
        onArticleClick={(post) => handleArticleClick(post, 'noticias')}
      />
    </Suspense>
  );
}
