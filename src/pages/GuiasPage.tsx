import React, { Suspense, lazy } from 'react';
import { BlogPost, PageId } from '../types';
import { TranslationT } from '../types.translation';

const BlogCard = lazy(() => import('../components/BlogCard'));
const BlogDetail = lazy(() => import('../components/BlogDetail'));

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="skeleton w-full h-32 rounded" aria-busy="true" aria-label="Cargando..." />
    </div>
  );
}

interface GuiasPageProps {
  lang: 'es' | 'en';
  t: TranslationT;
  blogPosts: BlogPost[];
  activeBlogPostId: string | null;
  setActiveBlogPostId: (id: string | null) => void;
  handleArticleClick: (post: BlogPost, page: PageId) => void;
}

export default function GuiasPage({
  lang,
  t,
  blogPosts,
  activeBlogPostId,
  setActiveBlogPostId,
  handleArticleClick,
}: GuiasPageProps) {
  const guiasPosts = blogPosts.filter(p => p.categoryEs === 'Guías y Trámites');

  const activePost = activeBlogPostId
    ? blogPosts.find(p => p.id === activeBlogPostId) ?? null
    : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12 animate-fadeIn">

      {activePost ? (
        <Suspense fallback={<LoadingFallback />}>
          <BlogDetail
            post={activePost}
            lang={lang}
            t={t}
            allPosts={blogPosts}
            onBack={() => {
              setActiveBlogPostId(null);
              window.history.pushState(null, '', '/guias');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigate={(p) => handleArticleClick(p, 'guias')}
          />
        </Suspense>
      ) : (
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest">
              {lang === 'es' ? 'Guías y Trámites' : 'Guides & Procedures'}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display">
              {lang === 'es' ? 'Guías de Trámites Bolivia' : 'Bolivia Procedures Guide'}
            </h1>
            <p className="max-w-2xl mx-auto text-sm text-stone-400 leading-relaxed font-light">
              {lang === 'es'
                ? 'Guías actualizadas para realizar trámites en Bolivia: SEGIP, SOAT, licencias, pasaportes y más.'
                : 'Updated guides for government procedures in Bolivia: SEGIP, SOAT, driver licenses, passports and more.'}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {guiasPosts.map((post) => (
              <Suspense key={post.id} fallback={<LoadingFallback />}>
                <BlogCard
                  post={post}
                  lang={lang}
                  t={t}
                  onClick={() => handleArticleClick(post, 'guias')}
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
