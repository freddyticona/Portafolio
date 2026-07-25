/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * NewsPortalFilters.tsx - Componentes de filtros reutilizables para el portal de noticias
 */

import React, { useState, useEffect } from 'react';
import { Search, Filter, X, Calendar, BarChart3 } from 'lucide-react';

interface NewsPortalFiltersProps {
  categories: string[];
  contentTypeOptions: { value: string; labelEs: string; labelEn: string }[];
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  activeContentType: string;
  setActiveContentType: (type: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  sortBy: 'recent' | 'popular' | 'oldest';
  setSortBy: (sort: 'recent' | 'popular' | 'oldest') => void;
  lang: 'es' | 'en';
  totalResults: number;
  visibleCount: number;
  setVisibleCount: (count: number) => void;
  processedPostsCount: number;
}

export default function NewsPortalFilters({
  categories,
  contentTypeOptions,
  activeCategory,
  setActiveCategory,
  activeContentType,
  setActiveContentType,
  searchTerm,
  setSearchTerm,
  sortBy,
  setSortBy,
  lang,
  totalResults,
  visibleCount,
  setVisibleCount,
  processedPostsCount
}: NewsPortalFiltersProps) {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [localSearch, setLocalSearch] = useState(searchTerm);

  // Debounce del buscador
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(localSearch);
    }, 300);
    return () => clearTimeout(timer);
  }, [localSearch]);

  return (
    <div className="bg-white/[0.02] border border-white/5 rounded-sm p-4 mb-6">
      {/* Search Bar */}
      <div className="relative mb-3">
        <Search className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
          placeholder={lang === 'es' ? 'Buscar noticias por título, tema o fuente...' : 'Search news by title, topic or source...'}
          className="w-full pl-10 pr-10 py-2 bg-black/60 border border-white/10 rounded-sm text-xs font-sans text-stone-200 placeholder-stone-500 focus:outline-none focus:border-gold transition-colors"
        />
        {localSearch && (
          <button
            onClick={() => setLocalSearch('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 hover:text-stone-300 text-xs"
          >
            ✕
          </button>
        )}
      </div>

      {/* Quick Filters Row */}
      <div className="flex flex-wrap gap-2 mb-3">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-1">
          {categories.slice(0, 5).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(6);
              }}
              className={`px-2.5 py-1 rounded-sm text-[9px] font-mono font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gold text-black shadow-md'
                  : 'bg-white/[0.03] text-stone-400 hover:text-gold hover:border-gold/30 border border-white/10'
              }`}
            >
              {cat === 'all' ? (lang === 'es' ? 'Todas' : 'All') : cat}
            </button>
          ))}
          {categories.length > 5 && (
            <span className="text-[9px] text-stone-600 font-mono px-1">...</span>
          )}
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-black/60 border border-white/10 rounded-sm px-2.5 py-1.5 text-xs font-mono text-stone-200 focus:outline-none focus:border-gold transition-colors cursor-pointer appearance-none"
          >
            <option value="recent">{lang === 'es' ? 'Más Recientes' : 'Most Recent'}</option>
            <option value="popular">{lang === 'es' ? 'Más Leídas' : 'Most Read'}</option>
            <option value="oldest">{lang === 'es' ? 'Más Antiguas' : 'Oldest'}</option>
          </select>
          <BarChart3 className="w-3 h-3 text-stone-500 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* Advanced Filters Toggle */}
      <button
        onClick={() => setShowAdvanced(!showAdvanced)}
        className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-gold transition-colors cursor-pointer"
      >
        <Filter className="w-3 h-3" />
        <span>{showAdvanced 
          ? (lang === 'es' ? 'Ocultar filtros avanzados' : 'Hide advanced filters') 
          : (lang === 'es' ? 'Filtros avanzados' : 'Advanced filters')}
        </span>
      </button>

      {/* Advanced Filters */}
      {showAdvanced && (
        <div className="mt-3 pt-3 border-t border-white/5 space-y-3">
          {/* Content Type */}
          <div>
            <span className="text-[10px] font-mono text-stone-500 block mb-1.5">
              {lang === 'es' ? 'Tipo de contenido' : 'Content type'}
            </span>
            <div className="flex flex-wrap gap-1">
              {contentTypeOptions.map((ct) => (
                <button
                  key={ct.value}
                  onClick={() => {
                    setActiveContentType(ct.value);
                    setVisibleCount(6);
                  }}
                  className={`px-2 py-0.5 rounded text-[8px] font-mono font-bold uppercase tracking-wider transition-all ${
                    activeContentType === ct.value
                      ? 'bg-gold text-black'
                      : 'bg-white/[0.03] text-stone-400 hover:text-gold hover:border-gold/30 border border-white/10'
                  }`}
                >
                  {lang === 'es' ? ct.labelEs : ct.labelEn}
                </button>
              ))}
            </div>
          </div>

          {/* Date Range (simulated) */}
          <div className="text-xs text-stone-500 font-mono">
            {lang === 'es' ? 'Rango de fechas: ' : 'Date range: '}
            <span className="text-gold">2024 - 2026</span>
          </div>
        </div>
      )}

      {/* Results Summary */}
      <div className="flex items-center justify-between text-xs font-mono text-stone-500 mt-3 pt-3 border-t border-white/5">
        <span>
          {lang === 'es' 
            ? `Mostrando ${Math.min(visibleCount, processedPostsCount)} de ${processedPostsCount} noticias` 
            : `Showing ${Math.min(visibleCount, processedPostsCount)} of ${processedPostsCount} articles`}
        </span>
        {searchTerm && (
          <button
            onClick={() => {
              setSearchTerm('');
              setActiveCategory('all');
            }}
            className="text-gold hover:underline text-xs"
          >
            {lang === 'es' ? 'Limpiar búsqueda' : 'Clear search'}
          </button>
        )}
      </div>
    </div>
  );
}