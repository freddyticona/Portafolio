/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { PortfolioItem } from '../types';
import { Filter, Search, Film, Eye, X, Award, ExternalLink, Cpu, Tag, Calendar, User, Briefcase } from 'lucide-react';
import LazyImage from './LazyImage';

interface PortfolioGridProps {
  items: PortfolioItem[];
  lang: 'es' | 'en';
  t: any;
  onViewCaseStudy: (caseStudyId: string) => void;
}

export default function PortfolioGrid({ items, lang, t, onViewCaseStudy }: PortfolioGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  const categories = useMemo(() => {
    return [
      { id: 'all', label: t.all },
      { id: 'cultural', label: t.catCultural },
      { id: 'politica', label: t.catPolitica },
      { id: 'documental', label: t.catDocumental },
      { id: 'cobertura-int', label: t.catCoberturaInt }
    ];
  }, [t]);

  // Filter items based on selected category and search query
  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        item.title.toLowerCase().includes(query) ||
        item.titleEn.toLowerCase().includes(query) ||
        item.descriptionEs.toLowerCase().includes(query) ||
        item.descriptionEn.toLowerCase().includes(query) ||
        item.roleEs.toLowerCase().includes(query) ||
        item.roleEn.toLowerCase().includes(query) ||
        item.techDetailsEs.some(tech => tech.toLowerCase().includes(query)) ||
        item.techDetailsEn.some(tech => tech.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [items, selectedCategory, searchQuery]);

  const handleOpenLightbox = (item: PortfolioItem) => {
    setActiveItem(item);
  };

  const handleCloseLightbox = () => {
    setActiveItem(null);
  };

  return (
    <div className="space-y-8">
      {/* Category Filters and Search Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/5">
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`filter-category-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-sm text-xs font-mono tracking-widest uppercase border transition-all duration-300 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gold border-gold text-black font-bold shadow-lg shadow-gold/10'
                  : 'bg-white/[0.02] border-white/5 text-stone-400 hover:text-white hover:border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative w-full lg:max-w-xs shrink-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
          <input
            type="text"
            id="portfolio-search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full pl-9 pr-4 py-2.5 bg-[#020202] border border-white/10 rounded-sm text-sm text-stone-300 placeholder-stone-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 hover:text-stone-300 text-xs font-mono font-bold cursor-pointer"
            >
              CLEAR
            </button>
          )}
        </div>
      </div>

      {/* Portfolio Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`portfolio-item-${item.id}`}
              onClick={() => handleOpenLightbox(item)}
              className="group cursor-pointer bg-white/[0.02] border border-white/5 rounded-sm overflow-hidden hover:border-gold/30 transition-all duration-300 hover:shadow-xl hover:shadow-gold/2"
            >
              {/* Card Image Thumbnail */}
              <div className="aspect-video relative overflow-hidden bg-[#050505]">
                <LazyImage
                  src={item.imageUrl}
                  alt={lang === 'es' ? item.title : item.titleEn}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Category Badge overlay */}
                <div className="absolute top-3 left-3">
                  <span className="bg-[#050505]/90 backdrop-blur-sm border border-white/10 text-[10px] font-mono tracking-widest font-bold uppercase text-gold px-2.5 py-1 rounded-sm">
                    {lang === 'es' ? item.categoryLabelEs : item.categoryLabelEn}
                  </span>
                </div>

                {/* Hover overlay with Icon */}
                <div className="absolute inset-0 bg-[#050505]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gold text-black flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                {/* Case Study Indicator Badge */}
                {item.isCaseStudy && (
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-gold text-black px-2.5 py-0.5 rounded-sm text-[10px] font-mono font-bold tracking-widest uppercase">
                    <Award className="w-3 h-3" />
                    <span>CASE STUDY</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 text-left space-y-2">
                <div className="flex items-center justify-between gap-2 text-[11px] font-mono text-stone-500 font-bold">
                  <span>{item.year}</span>
                  <span className="truncate max-w-[150px] uppercase">{lang === 'es' ? item.clientEs : item.clientEn}</span>
                </div>
                <h3 className="text-base font-bold text-white tracking-tight group-hover:text-gold transition-colors duration-200 line-clamp-1 font-display">
                  {lang === 'es' ? item.title : item.titleEn}
                </h3>
                <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed font-light">
                  {lang === 'es' ? item.descriptionEs : item.descriptionEn}
                </p>

                {/* Tech Tags preview */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {(lang === 'es' ? item.techDetailsEs : item.techDetailsEn).slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="bg-[#020202] text-[10px] font-mono text-stone-400 px-2 py-0.5 rounded-sm border border-white/5">
                      {tech}
                    </span>
                  ))}
                  {(lang === 'es' ? item.techDetailsEs : item.techDetailsEn).length > 3 && (
                    <span className="text-[10px] font-mono text-stone-600 self-center font-bold">
                      +{(lang === 'es' ? item.techDetailsEs : item.techDetailsEn).length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white/[0.01] rounded-sm border border-white/5">
          <p className="text-stone-400 font-mono text-sm font-light">{t.emptyPortfolio}</p>
          <button
            onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
            className="mt-4 px-4 py-2.5 bg-white/5 hover:bg-gold hover:text-black border border-white/10 rounded-sm text-xs font-mono font-bold uppercase tracking-widest transition-colors cursor-pointer"
          >
            {lang === 'es' ? 'Mostrar Todos los Trabajos' : 'Show All Works'}
          </button>
        </div>
      )}

      {/* Lightbox / Details Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#050505]/95 flex items-center justify-center p-4 md:p-6 backdrop-blur-sm animate-fadeIn">
          <div 
            id="portfolio-lightbox"
            className="bg-[#050505] border border-white/10 rounded-sm w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
          >
            {/* Header / Sticky Close */}
            <div className="sticky top-0 right-0 left-0 bg-[#050505] border-b border-white/5 px-6 py-4 flex items-center justify-between z-10">
              <span className="bg-gold/10 text-gold border border-gold/20 px-2.5 py-0.5 rounded-sm text-xs font-mono font-bold tracking-widest uppercase">
                {lang === 'es' ? activeItem.categoryLabelEs : activeItem.categoryLabelEn}
              </span>
              <button
                onClick={handleCloseLightbox}
                id="close-lightbox-button"
                className="p-1.5 rounded-sm bg-[#020202] hover:bg-white/5 border border-white/10 text-stone-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

              {/* Modal Body */}
            <div className="p-6 md:p-8 space-y-6 md:space-y-8">
              
              {/* Media Container - Show first image from gallery */}
              <div className="w-full rounded-sm overflow-hidden border border-white/5 bg-[#020202]">
                <LazyImage
                  src={activeItem.images?.[0] || activeItem.imageUrl}
                  alt={lang === 'es' ? activeItem.title : activeItem.titleEn}
                  className="w-full max-h-[500px] object-contain mx-auto"
                />
              </div>

              {/* Details Content */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
                {/* Left side: Narrative & CTA */}
                <div className="lg:col-span-2 space-y-4">
                  <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight font-display">
                    {lang === 'es' ? activeItem.title : activeItem.titleEn}
                  </h2>
                  <p className="text-stone-300 text-sm md:text-base leading-relaxed font-light">
                    {lang === 'es' ? activeItem.descriptionEs : activeItem.descriptionEn}
                  </p>

                  {activeItem.isCaseStudy && activeItem.caseStudyId && (
                    <div className="pt-4">
                      <button
                        onClick={() => {
                          handleCloseLightbox();
                          onViewCaseStudy(activeItem.caseStudyId!);
                        }}
                        id="view-case-study-from-lightbox"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold hover:bg-gold-hover text-black font-bold rounded-sm text-xs uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:shadow-gold/10 cursor-pointer"
                      >
                        <Award className="w-4 h-4" />
                        <span>{t.viewCaseStudy}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Right side: Project Attributes Metadata */}
                <div className="bg-[#020202] border border-white/5 p-5 rounded-sm space-y-4 font-mono text-xs">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gold flex items-center gap-1.5 pb-2 border-b border-white/5">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>{t.technicalDetails}</span>
                  </h4>
                  
                  <div className="space-y-3.5">
                    <div className="flex items-start gap-2 text-stone-400">
                      <Briefcase className="w-4 h-4 text-stone-500 shrink-0" />
                      <div>
                        <div className="font-bold text-stone-300 uppercase tracking-widest text-[9px]">{t.role}</div>
                        <div className="text-stone-400 mt-0.5 text-xs font-medium">{lang === 'es' ? activeItem.roleEs : activeItem.roleEn}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 text-stone-400">
                      <User className="w-4 h-4 text-stone-500 shrink-0" />
                      <div>
                        <div className="font-bold text-stone-300 uppercase tracking-widest text-[9px]">{t.client}</div>
                        <div className="text-stone-400 mt-0.5 text-xs font-medium">{lang === 'es' ? activeItem.clientEs : activeItem.clientEn}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 text-stone-400">
                      <Calendar className="w-4 h-4 text-stone-500 shrink-0" />
                      <div>
                        <div className="font-bold text-stone-300 uppercase tracking-widest text-[9px]">{t.year}</div>
                        <div className="text-stone-400 mt-0.5 text-xs font-medium">{activeItem.year}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 text-stone-400 pt-2 border-t border-white/5">
                      <Tag className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-gold uppercase tracking-widest text-[9px]">{lang === 'es' ? 'Equipos y Software' : 'Gear & Software'}</div>
                        <div className="flex flex-wrap gap-1 mt-1.5">
                          {(lang === 'es' ? activeItem.techDetailsEs : activeItem.techDetailsEn).map((tech, idx) => (
                            <span key={idx} className="bg-[#050505] border border-white/5 text-[9px] text-stone-300 px-2 py-0.5 rounded-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Photo Gallery */}
              {activeItem.images && activeItem.images.length > 1 && (
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-gold mb-4 flex items-center gap-2">
                    <span>{lang === 'es' ? `Galería (${activeItem.images.length} fotos)` : `Gallery (${activeItem.images.length} photos)`}</span>
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {activeItem.images.map((img, idx) => (
                      <div key={idx} className="aspect-video rounded-sm overflow-hidden bg-[#020202] border border-white/5 hover:border-gold/30 transition-all duration-300">
                        <LazyImage
                          src={img}
                          alt={`${lang === 'es' ? activeItem.title : activeItem.titleEn} - ${idx + 1}`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
