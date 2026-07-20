/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Search, Filter, X } from 'lucide-react';

interface SearchBarProps {
  items: any[];
  onFilteredItems: (items: any[]) => void;
  searchFields?: string[];
  placeholder?: string;
  lang?: 'es' | 'en';
}

export default function SearchBar({
  items,
  onFilteredItems,
  searchFields = ['title', 'titleEn', 'descriptionEs', 'descriptionEn', 'category'],
  placeholder = 'Buscar...',
  lang = 'es'
}: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set(items.map(item => item.category));
    return ['all', ...Array.from(cats)];
  }, [items]);

  // Get unique years
  const years = useMemo(() => {
    const yrs = new Set(items.map(item => item.year).filter(Boolean));
    return ['all', ...Array.from(yrs).sort().reverse()];
  }, [items]);

  // Filter items
  const filteredItems = useMemo(() => {
    return items.filter(item => {
      // Search term filter
      const matchesSearch = searchTerm === '' || searchFields.some(field => {
        const value = item[field];
        if (typeof value === 'string') {
          return value.toLowerCase().includes(searchTerm.toLowerCase());
        }
        return false;
      });

      // Category filter
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;

      // Year filter
      const matchesYear = selectedYear === 'all' || item.year === selectedYear;

      return matchesSearch && matchesCategory && matchesYear;
    });
  }, [items, searchTerm, selectedCategory, selectedYear, searchFields]);

  // Notify parent of filtered items
  React.useEffect(() => {
    onFilteredItems(filteredItems);
  }, [filteredItems, onFilteredItems]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedYear('all');
  };

  const hasActiveFilters = searchTerm !== '' || selectedCategory !== 'all' || selectedYear !== 'all';

  const categoryLabels: Record<string, { es: string; en: string }> = {
    all: { es: 'Todas las categorías', en: 'All categories' },
    documental: { es: 'Documental', en: 'Documentary' },
    cultural: { es: 'Cultural', en: 'Cultural' },
    politica: { es: 'Política', en: 'Politics' },
    'cobertura-int': { es: 'Internacional', en: 'International' }
  };

  return (
    <div className="w-full space-y-4">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-500" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-12 pr-12 py-4 bg-[#0a0a0a] border border-white/10 rounded-sm text-white placeholder-stone-500 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-stone-500" />
          </button>
        )}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 items-center">
        {/* Category Filter */}
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-gold" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 bg-[#0a0a0a] border border-white/10 rounded-sm text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all cursor-pointer"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {categoryLabels[cat]?.[lang] || cat}
              </option>
            ))}
          </select>
        </div>

        {/* Year Filter */}
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="px-4 py-2 bg-[#0a0a0a] border border-white/10 rounded-sm text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all cursor-pointer"
        >
          <option value="all">{lang === 'es' ? 'Todos los años' : 'All years'}</option>
          {years.filter(y => y !== 'all').map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="px-4 py-2 bg-gold/10 hover:bg-gold/20 border border-gold/30 text-gold rounded-sm transition-all text-sm font-mono"
          >
            {lang === 'es' ? 'Limpiar filtros' : 'Clear filters'}
          </button>
        )}

        {/* Results Count */}
        <div className="ml-auto text-sm font-mono text-stone-500">
          {filteredItems.length} {lang === 'es' ? 'resultados' : 'results'}
        </div>
      </div>

      {/* Active Filters Tags */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 pt-2">
          {searchTerm && (
            <span className="px-3 py-1 bg-gold/10 border border-gold/30 text-gold rounded-full text-sm flex items-center gap-2">
              "{searchTerm}"
              <button onClick={() => setSearchTerm('')} className="hover:text-gold-hover">
                <X className="w-4 h-4" />
              </button>
            </span>
          )}
          {selectedCategory !== 'all' && (
            <span className="px-3 py-1 bg-gold/10 border border-gold/30 text-gold rounded-full text-sm flex items-center gap-2">
              {categoryLabels[selectedCategory]?.[lang] || selectedCategory}
              <button onClick={() => setSelectedCategory('all')} className="hover:text-gold-hover">
                <X className="w-4 h-4" />
              </button>
            </span>
          )}
          {selectedYear !== 'all' && (
            <span className="px-3 py-1 bg-gold/10 border border-gold/30 text-gold rounded-full text-sm flex items-center gap-2">
              {selectedYear}
              <button onClick={() => setSelectedYear('all')} className="hover:text-gold-hover">
                <X className="w-4 h-4" />
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  );
}

// Quick Search Component for inline use
export function QuickSearch({
  items,
  onFilteredItems,
  lang = 'es'
}: {
  items: any[];
  onFilteredItems: (items: any[]) => void;
  lang?: 'es' | 'en';
}) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = useMemo(() => {
    if (!searchTerm) return items;
    return items.filter(item =>
      (item.title || item.titleEn || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.descriptionEs || item.descriptionEn || '').toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]);

  React.useEffect(() => {
    onFilteredItems(filteredItems);
  }, [filteredItems, onFilteredItems]);

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={lang === 'es' ? 'Buscar...' : 'Search...'}
        className="w-full pl-10 pr-4 py-2 bg-[#0a0a0a] border border-white/10 rounded-sm text-white placeholder-stone-500 text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
      />
    </div>
  );
}
