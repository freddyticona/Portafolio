/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Filter, X, ChevronDown, Calendar, Award, Clock } from 'lucide-react';

interface PortfolioFiltersProps {
  lang?: 'es' | 'en';
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  category: string;
  year: string;
  status: string;
  searchTerm: string;
}

const CATEGORIES = {
  es: [
    { id: 'all', label: 'Todos los proyectos' },
    { id: 'documentary', label: 'Documentales' },
    { id: 'news', label: 'Noticias / TV' },
    { id: 'corporate', label: 'Corporativo' },
    { id: 'commercial', label: 'Publicidad' },
    { id: 'event', label: 'Eventos' }
  ],
  en: [
    { id: 'all', label: 'All Projects' },
    { id: 'documentary', label: 'Documentaries' },
    { id: 'news', label: 'News / TV' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'event', label: 'Events' }
  ]
};

const YEARS = {
  es: ['Todos', '2024', '2023', '2022', '2021', '2020', '2019'],
  en: ['All', '2024', '2023', '2022', '2021', '2020', '2019']
};

const STATUSES = {
  es: [
    { id: 'all', label: 'Todos los estados', icon: null },
    { id: 'published', label: 'Publicado', icon: Award },
    { id: 'award', label: 'Premiado', icon: Award },
    { id: 'wip', label: 'En producción', icon: Clock }
  ],
  en: [
    { id: 'all', label: 'All Status', icon: null },
    { id: 'published', label: 'Published', icon: Award },
    { id: 'award', label: 'Awarded', icon: Award },
    { id: 'wip', label: 'In Production', icon: Clock }
  ]
};

export default function PortfolioFilters({ lang = 'es', onFilterChange }: PortfolioFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<FilterState>({
    category: 'all',
    year: 'Todos',
    status: 'all',
    searchTerm: ''
  });
  const [expandedSection, setExpandedSection] = useState<'category' | 'year' | 'status' | null>(null);

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...activeFilters, [key]: value };
    setActiveFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearAllFilters = () => {
    const clearedFilters: FilterState = {
      category: 'all',
      year: lang === 'es' ? 'Todos' : 'All',
      status: 'all',
      searchTerm: ''
    };
    setActiveFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  const hasActiveFilters =
    activeFilters.category !== 'all' ||
    activeFilters.year !== (lang === 'es' ? 'Todos' : 'All') ||
    activeFilters.status !== 'all' ||
    activeFilters.searchTerm !== '';

  const activeFilterCount =
    (activeFilters.category !== 'all' ? 1 : 0) +
    (activeFilters.year !== (lang === 'es' ? 'Todos' : 'All') ? 1 : 0) +
    (activeFilters.status !== 'all' ? 1 : 0) +
    (activeFilters.searchTerm !== '' ? 1 : 0);

  return (
    <div className="space-y-4">
      {/* Filter Toggle Button */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold/30 rounded-sm text-stone-400 hover:text-gold transition-all duration-300 text-sm font-mono"
        >
          <Filter className="w-4 h-4" />
          <span>{lang === 'es' ? 'Filtros' : 'Filters'}</span>
          {activeFilterCount > 0 && (
            <span className="px-2 py-0.5 bg-gold text-black text-xs font-bold rounded-full">
              {activeFilterCount}
            </span>
          )}
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-stone-400 hover:text-red-400 transition-colors"
          >
            <X className="w-3 h-3" />
            <span>{lang === 'es' ? 'Limpiar' : 'Clear'}</span>
          </button>
        )}
      </div>

      {/* Filter Panel */}
      {isOpen && (
        <div className="bg-[#0a0a0a] border border-white/10 rounded-sm p-4 space-y-4 animate-fadeIn">
          {/* Search */}
          <div>
            <input
              type="text"
              value={activeFilters.searchTerm}
              onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
              placeholder={lang === 'es' ? 'Buscar proyectos...' : 'Search projects...'}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-sm text-white placeholder-stone-500 text-sm focus:border-gold focus:outline-none transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div>
            <button
              onClick={() => setExpandedSection(expandedSection === 'category' ? null : 'category')}
              className="w-full flex items-center justify-between px-2 py-1.5 text-sm font-mono text-stone-400 hover:text-white transition-colors"
            >
              <span>{lang === 'es' ? 'Categoría' : 'Category'}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${expandedSection === 'category' ? 'rotate-180' : ''}`} />
            </button>

            {expandedSection === 'category' && (
              <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
                {CATEGORIES[lang].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleFilterChange('category', cat.id)}
                    className={`px-3 py-1.5 text-xs font-mono rounded-sm transition-all ${
                      activeFilters.category === cat.id
                        ? 'bg-gold text-black font-bold'
                        : 'bg-white/5 text-stone-400 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Year Filter */}
          <div>
            <button
              onClick={() => setExpandedSection(expandedSection === 'year' ? null : 'year')}
              className="w-full flex items-center justify-between px-2 py-1.5 text-sm font-mono text-stone-400 hover:text-white transition-colors"
            >
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {lang === 'es' ? 'Año' : 'Year'}
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform ${expandedSection === 'year' ? 'rotate-180' : ''}`} />
            </button>

            {expandedSection === 'year' && (
              <div className="mt-2 flex flex-wrap gap-2">
                {YEARS[lang].map((year) => (
                  <button
                    key={year}
                    onClick={() => handleFilterChange('year', year)}
                    className={`px-3 py-1.5 text-xs font-mono rounded-sm transition-all ${
                      activeFilters.year === year
                        ? 'bg-gold text-black font-bold'
                        : 'bg-white/5 text-stone-400 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Status Filter */}
          <div>
            <button
              onClick={() => setExpandedSection(expandedSection === 'status' ? null : 'status')}
              className="w-full flex items-center justify-between px-2 py-1.5 text-sm font-mono text-stone-400 hover:text-white transition-colors"
            >
              <span>{lang === 'es' ? 'Estado' : 'Status'}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${expandedSection === 'status' ? 'rotate-180' : ''}`} />
            </button>

            {expandedSection === 'status' && (
              <div className="mt-2 grid grid-cols-2 gap-2">
                {STATUSES[lang].map((status) => {
                  const Icon = status.icon;
                  return (
                    <button
                      key={status.id}
                      onClick={() => handleFilterChange('status', status.id)}
                      className={`inline-flex items-center gap-2 px-3 py-2 text-xs font-mono rounded-sm transition-all ${
                        activeFilters.status === status.id
                          ? 'bg-gold text-black font-bold'
                          : 'bg-white/5 text-stone-400 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {Icon && <Icon className="w-3.5 h-3.5" />}
                      {status.label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Active Filters Summary */}
          {hasActiveFilters && (
            <div className="pt-3 border-t border-white/10">
              <div className="flex flex-wrap gap-2">
                {activeFilters.category !== 'all' && (
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-gold/10 border border-gold/20 rounded-sm text-xs text-gold">
                    {CATEGORIES[lang].find(c => c.id === activeFilters.category)?.label}
                    <button onClick={() => handleFilterChange('category', 'all')} className="hover:text-gold-hover">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {activeFilters.year !== (lang === 'es' ? 'Todos' : 'All') && (
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-gold/10 border border-gold/20 rounded-sm text-xs text-gold">
                    {activeFilters.year}
                    <button onClick={() => handleFilterChange('year', lang === 'es' ? 'Todos' : 'All')} className="hover:text-gold-hover">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {activeFilters.status !== 'all' && (
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-gold/10 border border-gold/20 rounded-sm text-xs text-gold">
                    {STATUSES[lang].find(s => s.id === activeFilters.status)?.label}
                    <button onClick={() => handleFilterChange('status', 'all')} className="hover:text-gold-hover">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
