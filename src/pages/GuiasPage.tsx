import React, { Suspense, lazy, useState, useMemo } from 'react';
import { BlogPost, PageId } from '../types';
import { TranslationT } from '../types.translation';
import { BookOpen, FileText, Search } from 'lucide-react';

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
  handleArticleClick: (post: BlogPost, page?: PageId) => void;
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

  // Agrupar por entidad/institución para que se vea la variedad de guías
  const groups = useMemo(() => {
    const groups: { title: string; posts: BlogPost[] }[] = [];
    const groupTitle = (post: BlogPost): string => {
      const title = lang === 'es' ? post.titleEs : post.titleEn;
      const lower = title.toLowerCase();
      if (lower.includes('segip') || lower.includes('cédula') || lower.includes('cedula')) return lang === 'es' ? 'SEGIP · Identidad' : 'SEGIP · Identity';
      if (lower.includes('soat') || lower.includes('ruat') || lower.includes('licencia de conducir') || lower.includes('vehicular')) return lang === 'es' ? 'Vehículos y Tránsito' : 'Vehicles & Traffic';
      if (lower.includes('pasaporte') || lower.includes('visa') || lower.includes('apostilla') || lower.includes('extranjero')) return lang === 'es' ? 'Migración y Documentos Internacionales' : 'Migration & International Documents';
      if (lower.includes('antecedente') || lower.includes('penal') || lower.includes('policial')) return lang === 'es' ? 'Antecedentes y Seguridad' : 'Background Checks & Safety';
      if (lower.includes('matrimonio') || lower.includes('defunción') || lower.includes('defuncion') || lower.includes('nacimiento')) return lang === 'es' ? 'Registro Civil (SERECÍ)' : 'Civil Registry (SERECÍ)';
      if (lower.includes('empresa') || lower.includes('nit') || lower.includes('marca') || lower.includes('senapi') || lower.includes('funcionamiento') || lower.includes('sep-re')) return lang === 'es' ? 'Negocios y Tributación' : 'Business & Taxation';
      return lang === 'es' ? 'Otros trámites' : 'Other procedures';
    };
    for (const post of guiasPosts) {
      const t = groupTitle(post);
      const g = groups.find(g => g.title === t);
      if (g) g.posts.push(post);
      else groups.push({ title: t, posts: [post] });
    }
    return groups;
  }, [guiasPosts, lang]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredGroups = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return groups;
    return groups
      .map(g => ({ ...g, posts: g.posts.filter(p => {
        const t = (lang === 'es' ? p.titleEs : p.titleEn).toLowerCase();
        const e = (lang === 'es' ? p.excerptEs : p.excerptEn).toLowerCase();
        return t.includes(q) || e.includes(q);
      }) }))
      .filter(g => g.posts.length > 0);
  }, [groups, searchTerm, lang]);

  const totalGuides = guiasPosts.length;

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
        <div className="space-y-10">
          <div className="text-center space-y-3">
            <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest">
              {lang === 'es' ? 'Guías y Trámites' : 'Guides & Procedures'}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display">
              {lang === 'es' ? 'Guías de Trámites Bolivia' : 'Bolivia Procedures Guide'}
            </h1>
            <p className="max-w-2xl mx-auto text-sm text-stone-400 leading-relaxed font-light">
              {lang === 'es'
                ? `Trámites explicados paso a paso: requisitos, costos actualizados y enlaces oficiales. ${totalGuides} guías disponibles.`
                : `Step-by-step procedures: requirements, updated costs and official links. ${totalGuides} guides available.`}
            </p>
          </div>

          {/* Contador + buscador */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-stone-400 bg-white/[0.02] border border-white/10 rounded-sm px-4 py-2">
              <BookOpen className="w-4 h-4 text-gold" />
              <span>
                {lang === 'es'
                  ? `${totalGuides} guías en ${groups.length} categorías`
                  : `${totalGuides} guides in ${groups.length} categories`}
              </span>
            </div>
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={lang === 'es' ? 'Buscar trámite...' : 'Search procedure...'}
                className="w-full pl-9 pr-3 py-2 bg-black/60 border border-white/10 rounded-sm text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-gold transition-colors"
              />
            </div>
          </div>

          {filteredGroups.length === 0 ? (
            <div className="text-center py-16 bg-white/[0.01] border border-white/5 rounded-sm space-y-3">
              <FileText className="w-8 h-8 text-stone-600 mx-auto" />
              <p className="text-stone-400 text-sm font-semibold">
                {lang === 'es' ? 'No se encontraron guías con ese criterio.' : 'No guides found matching your criteria.'}
              </p>
            </div>
          ) : (
            filteredGroups.map((group) => (
              <div key={group.title}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold bg-gold/10 border border-gold/20 px-3 py-1 rounded-sm">
                    {group.title}
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
                  <span className="text-[10px] font-mono text-stone-500">{group.posts.length}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {group.posts.map((post) => (
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
            ))
          )}
        </div>
      )}

      <div className="pb-8" />
    </div>
  );
}
