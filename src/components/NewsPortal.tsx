/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { BlogPost } from '../types';
import NewsCard from './NewsCard';
import { TrendingUp, Flame, Search, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { TranslationT } from '../types.translation';

interface NewsPortalProps {
  posts: BlogPost[];
  lang: 'es' | 'en';
  t: TranslationT;
  onArticleClick: (post: BlogPost) => void;
}

const CATEGORIES = ['all', 'pais', 'santa-cruz', 'mundo', 'economia', 'deportes', 'cultura', 'tecnologia'] as const;

/**
 * Normaliza cadenas eliminando tildes y caracteres especiales para comparaciones insensibles a diacríticos
 */
function normalizeString(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-');
}

export default function NewsPortal({ posts, lang, t, onArticleClick }: NewsPortalProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<'recent' | 'popular' | 'oldest'>('recent');
  const [visibleCount, setVisibleCount] = useState<number>(6);

  // Post destacado (Breaking news o primer post)
  const breakingPosts = posts.filter(p => p.breaking);
  const featuredPosts = posts.filter(p => p.featured && !p.breaking);
  const heroPost = breakingPosts[0] || featuredPosts[0] || posts[0];

  // Mapeo de traducciones para categorías
  const categoryLabel = (cat: string) => {
    switch (cat) {
      case 'all': return lang === 'es' ? 'Todas' : 'All';
      case 'pais': return lang === 'es' ? 'País' : 'Nation';
      case 'santa-cruz': return 'Santa Cruz';
      case 'mundo': return lang === 'es' ? 'Mundo' : 'World';
      case 'economia': return lang === 'es' ? 'Economía' : 'Economy';
      case 'deportes': return lang === 'es' ? 'Deportes' : 'Sports';
      case 'cultura': return lang === 'es' ? 'Cultura & Entretenimiento' : 'Culture & Entertainment';
      case 'tecnologia': return lang === 'es' ? 'Tecnología' : 'Technology';
      default: return cat;
    }
  };

  // Filtrado y ordenamiento con uso de memoización
  const processedPosts = useMemo(() => {
    let result = posts.filter(p => p.id !== heroPost?.id);

    // 1. Filtrado por categoría con normalización Unicode
    if (activeCategory !== 'all') {
      result = result.filter(p => {
        const catEs = normalizeString(p.categoryEs || '');
        const catEn = normalizeString(p.categoryEn || '');
        const target = normalizeString(activeCategory);

        return catEs.includes(target) || catEn.includes(target) ||
               (target === 'cultura' && (catEs.includes('cultura') || catEn.includes('culture'))) ||
               (target === 'pais' && (catEs.includes('pais') || catEn.includes('nation')));
      });
    }

    // 2. Búsqueda por término de texto libre
    if (searchTerm.trim()) {
      const query = searchTerm.toLowerCase();
      result = result.filter(p => {
        const title = (lang === 'es' ? p.titleEs : p.titleEn).toLowerCase();
        const excerpt = (lang === 'es' ? p.excerptEs : p.excerptEn).toLowerCase();
        const source = (p.source || '').toLowerCase();
        const location = (p.location || '').toLowerCase();
        return title.includes(query) || excerpt.includes(query) || source.includes(query) || location.includes(query);
      });
    }

    // 3. Ordenamiento
    return result.sort((a, b) => {
      if (sortBy === 'popular') {
        return (b.views || 0) - (a.views || 0);
      }
      if (sortBy === 'oldest') {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      // Por defecto: 'recent'
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, [posts, heroPost, activeCategory, searchTerm, sortBy, lang]);

  // Trending posts para la barra lateral (Top 5 en lecturas)
  const trendingPosts = useMemo(() => {
    return [...posts].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 5);
  }, [posts]);

  // Posts visibles según paginación
  const visiblePosts = processedPosts.slice(0, visibleCount);

  if (!posts.length) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fadeIn text-center">
        <p className="text-stone-500 text-sm font-mono">
          {lang === 'es' ? 'No hay noticias disponibles en este momento.' : 'No news articles available at the moment.'}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fadeIn text-left">
      {/* Header */}
      <div className="text-center space-y-3 mb-10">
        <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest block">
          {lang === 'es' ? 'Cobertura Periodística Nacional e Internacional' : 'National & International Press Coverage'}
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight font-display">
          {lang === 'es' ? 'Portal de Noticias' : 'News Portal'}
        </h1>
        <p className="max-w-2xl mx-auto text-sm text-stone-400 leading-relaxed font-light">
          {lang === 'es'
            ? 'Análisis periodístico, historias de campo y reportajes culturales de Bolivia y el mundo.'
            : 'Journalistic analysis, field stories, and cultural reports from Bolivia and around the globe.'}
        </p>
      </div>

      {/* Hero Breaking / Featured */}
      {heroPost && !searchTerm && activeCategory === 'all' && (
        <div className="mb-10">
          <NewsCard
            post={heroPost}
            lang={lang}
            onClick={() => onArticleClick(heroPost)}
            variant="hero"
          />
        </div>
      )}

      {/* Search & Sort Controls Bar */}
      <div className="bg-white/[0.02] border border-white/5 p-4 rounded-sm mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search input */}
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setVisibleCount(6);
            }}
            placeholder={lang === 'es' ? 'Buscar noticias por título, tema o fuente...' : 'Search news by title, topic or source...'}
            className="w-full pl-10 pr-4 py-2 bg-black/60 border border-white/10 rounded-sm text-xs font-sans text-stone-200 placeholder-stone-500 focus:outline-none focus:border-gold transition-colors"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 hover:text-stone-300 text-xs"
            >
              ✕
            </button>
          )}
        </div>

        {/* Sort selector */}
        <div className="flex items-center gap-2 w-full md:w-auto shrink-0">
          <SlidersHorizontal className="w-3.5 h-3.5 text-gold" />
          <span className="text-xs font-mono text-stone-400">
            {lang === 'es' ? 'Ordenar:' : 'Sort:'}
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-black/60 border border-white/10 rounded-sm px-3 py-2 text-xs font-mono text-stone-200 focus:outline-none focus:border-gold transition-colors cursor-pointer"
          >
            <option value="recent">{lang === 'es' ? 'Más Recientes' : 'Most Recent'}</option>
            <option value="popular">{lang === 'es' ? 'Más Leídas' : 'Most Read'}</option>
            <option value="oldest">{lang === 'es' ? 'Más Antiguas' : 'Oldest'}</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Main Content Area */}
        <div className="lg:col-span-3 space-y-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 pb-4 border-b border-white/5" role="tablist" aria-label="Categorías de noticias">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setVisibleCount(6);
                }}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`px-3.5 py-2 rounded-sm text-[10px] font-mono font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gold text-black shadow-md'
                    : 'bg-white/[0.02] text-stone-400 hover:text-gold hover:border-gold/30 border border-white/5'
                }`}
              >
                {categoryLabel(cat)}
              </button>
            ))}
          </div>

          {/* Result Stats Counter */}
          <div className="flex items-center justify-between text-xs font-mono text-stone-500">
            <span>
              {lang === 'es' ? `Mostrando ${visiblePosts.length} de ${processedPosts.length} noticias` : `Showing ${visiblePosts.length} of ${processedPosts.length} articles`}
            </span>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="text-gold hover:underline text-xs"
              >
                {lang === 'es' ? 'Limpiar búsqueda' : 'Clear search'}
              </button>
            )}
          </div>

          {/* News Grid */}
          {visiblePosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {visiblePosts.map((post) => (
                <NewsCard
                  key={post.id}
                  post={post}
                  lang={lang}
                  onClick={() => onArticleClick(post)}
                  variant="default"
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white/[0.01] border border-white/5 rounded-sm space-y-3">
              <Search className="w-8 h-8 text-stone-600 mx-auto" />
              <p className="text-stone-400 text-sm font-semibold">
                {lang === 'es' ? 'No se encontraron noticias con estos criterios.' : 'No news found matching your criteria.'}
              </p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchTerm('');
                }}
                className="px-4 py-2 bg-gold/10 border border-gold/30 text-gold rounded-sm text-xs font-mono font-bold uppercase tracking-wider hover:bg-gold hover:text-black transition-colors"
              >
                {lang === 'es' ? 'Ver todas las noticias' : 'View all news'}
              </button>
            </div>
          )}

          {/* Load More Button */}
          {visibleCount < processedPosts.length && (
            <div className="text-center pt-6">
              <button
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/10 hover:border-gold bg-white/[0.02] hover:bg-gold text-stone-300 hover:text-black rounded-sm text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer shadow-lg"
              >
                <span>{lang === 'es' ? 'Cargar más noticias' : 'Load more news'}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-8">
          {/* Trending Box */}
          <div className="bg-white/[0.02] border border-white/5 rounded-sm p-5 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-gold pb-2 border-b border-white/5">
              <TrendingUp className="w-4 h-4 text-gold" />
              <span>{lang === 'es' ? 'Más Leídas' : 'Trending'}</span>
            </div>
            <div className="space-y-2">
              {trendingPosts.map((post, i) => (
                <div
                  key={post.id}
                  onClick={() => onArticleClick(post)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') onArticleClick(post); }}
                  className="group cursor-pointer flex items-start gap-3 p-2 hover:bg-white/[0.04] rounded-sm transition-colors focus:outline-none focus:ring-1 focus:ring-gold"
                >
                  <span className="text-lg font-black text-stone-600 group-hover:text-gold font-display tabular-nums leading-none mt-0.5 transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0 flex-1 space-y-1">
                    <h4 className="text-xs font-semibold text-white leading-snug line-clamp-2 group-hover:text-gold transition-colors font-display">
                      {lang === 'es' ? post.titleEs : post.titleEn}
                    </h4>
                    <div className="flex items-center gap-2 text-[9px] font-mono text-stone-500">
                      <span className="flex items-center gap-1">
                        <Flame className="w-3 h-3 text-red-500/80" />
                        {post.views || 0} {lang === 'es' ? 'lecturas' : 'reads'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
