/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Search, X, FileText, FolderOpen, Calendar, User } from 'lucide-react';

interface SearchResult {
  id: string;
  type: 'blog' | 'portfolio' | 'timeline' | 'certificate';
  title: string;
  description: string;
  category?: string;
  year?: string;
  onClick: () => void;
}

interface GlobalSearchProps {
  lang?: 'es' | 'en';
  onNavigate?: (pageId: string) => void;
}

export default function GlobalSearch({ lang = 'es', onNavigate }: GlobalSearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Datos de ejemplo (después conectar con datos reales)
  const allSearchData: SearchResult[] = [
    {
      id: 'blog-1',
      type: 'blog',
      title: lang === 'es' ? 'La importancia del ritmo en el montaje' : 'The importance of pacing in editing',
      description: lang === 'es' ? 'Técnicas de edición para mantener la audiencia comprometida' : 'Editing techniques to keep the audience engaged',
      onClick: () => onNavigate?.('blog')
    },
    {
      id: 'blog-2',
      type: 'blog',
      title: lang === 'es' ? 'Capturando la luz en el Altiplano' : 'Capturing light in the Altiplano',
      description: lang === 'es' ? 'Desafíos de filmación en grandes alturas' : 'Challenges of filming at high altitudes',
      onClick: () => onNavigate?.('blog')
    },
    {
      id: 'portfolio-1',
      type: 'portfolio',
      title: 'Documental: "Raíces de la Tierra"',
      description: lang === 'es' ? 'Documental sobre culturas ancestrales bolivianas' : 'Documentary about Bolivian ancestral cultures',
      category: lang === 'es' ? 'Documental' : 'Documentary',
      onClick: () => onNavigate?.('portafolio')
    },
    {
      id: 'portfolio-2',
      type: 'portfolio',
      title: 'Cobertura: Elecciones 2024',
      description: lang === 'es' ? 'Dirección de cámaras para cobertura electoral nacional' : 'Camera direction for national election coverage',
      category: lang === 'es' ? 'TV en Vivo' : 'Live TV',
      onClick: () => onNavigate?.('portafolio')
    },
    {
      id: 'timeline-1',
      type: 'timeline',
      title: 'Bolivia TV (2021 - Presente)',
      description: lang === 'es' ? 'Camarógrafo principal de noticias nacionales' : 'Lead cameraman for national news',
      year: '2021',
      onClick: () => onNavigate?.('sobre-mi')
    },
    {
      id: 'certificate-1',
      type: 'certificate',
      title: lang === 'es' ? 'Certificación en Edición Avid Media Composer' : 'Avid Media Composer Editing Certification',
      description: lang === 'es' ? 'Certificación profesional en edición de video' : 'Professional certification in video editing',
      year: '2022',
      onClick: () => onNavigate?.('cv')
    }
  ];

  // Búsqueda
  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }

    const filtered = allSearchData.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      (item.category && item.category.toLowerCase().includes(query.toLowerCase()))
    );

    setResults(filtered);
    setSelectedIndex(0);
  }, [query]);

  // Atajos de teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + K para abrir
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(!isOpen);
      }

      // Esc para cerrar
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        setQuery('');
      }

      // Navegación con flechas
      if (isOpen) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex(prev => (prev + 1) % results.length);
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex(prev => prev === 0 ? results.length - 1 : prev - 1);
        }
        if (e.key === 'Enter' && results.length > 0) {
          e.preventDefault();
          results[selectedIndex].onClick();
          setIsOpen(false);
          setQuery('');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex]);

  // Focus en input al abrir
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Cerrar al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const getTypeIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'blog': return FileText;
      case 'portfolio': return FolderOpen;
      case 'timeline': return Calendar;
      case 'certificate': return User;
      default: return Search;
    }
  };

  const getTypeColor = (type: SearchResult['type']) => {
    switch (type) {
      case 'blog': return 'text-purple-400';
      case 'portfolio': return 'text-blue-400';
      case 'timeline': return 'text-green-400';
      case 'certificate': return 'text-amber-400';
      default: return 'text-stone-400';
    }
  };

  const getTypeLabel = (type: SearchResult['type']) => {
    const labels = {
      es: { blog: 'Blog', portfolio: 'Portafolio', timeline: 'Experiencia', certificate: 'Certificación' },
      en: { blog: 'Blog', portfolio: 'Portfolio', timeline: 'Experience', certificate: 'Certification' }
    };
    return labels[lang][type];
  };

  return (
    <div ref={searchRef}>
      {/* Botón de búsqueda flotante */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 left-6 z-50 w-12 h-12 bg-[#0a0a0a] border border-white/10 hover:border-gold/30 rounded-full shadow-lg flex items-center justify-center text-stone-400 hover:text-gold transition-all duration-300 cursor-pointer"
        aria-label={lang === 'es' ? 'Buscar (⌘K)' : 'Search (⌘K)'}
      >
        <Search className="w-5 h-5" />
      </button>

      {/* Modal de búsqueda */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Search Modal */}
          <div className="relative w-full max-w-2xl mx-4">
            <div className="bg-[#0a0a0a] border border-white/10 rounded-sm shadow-2xl overflow-hidden">
              {/* Input */}
              <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10">
                <Search className="w-5 h-5 text-stone-500" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={lang === 'es' ? 'Buscar en el portafolio...' : 'Search portfolio...'}
                  className="flex-1 bg-transparent text-white placeholder-stone-500 outline-none text-sm"
                />
                {query && (
                  <button
                    onClick={() => setQuery('')}
                    className="p-1 hover:bg-white/5 rounded-sm transition-colors"
                  >
                    <X className="w-4 h-4 text-stone-500" />
                  </button>
                )}
                <kbd className="flex items-center gap-1 px-2 py-1 bg-white/5 rounded text-xs text-stone-500 font-mono">
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div className="max-h-[60vh] overflow-y-auto">
                {query.length < 2 ? (
                  <div className="py-12 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/5 rounded-full mb-4">
                      <Search className="w-8 h-8 text-stone-500" />
                    </div>
                    <p className="text-stone-400 text-sm">
                      {lang === 'es' ? 'Empieza a escribir para buscar...' : 'Start typing to search...'}
                    </p>
                    <p className="text-stone-500 text-xs mt-2 font-mono">
                      {lang === 'es' ? 'Mínimo 2 caracteres' : 'Minimum 2 characters'}
                    </p>
                  </div>
                ) : results.length === 0 ? (
                  <div className="py-12 text-center">
                    <p className="text-stone-400 text-sm">
                      {lang === 'es' ? 'No se encontraron resultados' : 'No results found'}
                    </p>
                  </div>
                ) : (
                  <div className="p-2">
                    <div className="px-2 py-1.5 text-xs font-mono text-stone-500 uppercase tracking-widest">
                      {results.length} {lang === 'es' ? 'resultados' : 'results'}
                    </div>
                    {results.map((result, index) => {
                      const Icon = getTypeIcon(result.type);
                      return (
                        <button
                          key={result.id}
                          onClick={() => {
                            result.onClick();
                            setIsOpen(false);
                            setQuery('');
                          }}
                          className={`w-full text-left px-4 py-3 rounded-sm transition-all duration-150 ${
                            index === selectedIndex
                              ? 'bg-gold/10 border border-gold/20'
                              : 'hover:bg-white/5 border border-transparent'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`mt-0.5 ${getTypeColor(result.type)}`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-white text-sm font-medium truncate">
                                  {result.title}
                                </span>
                                {result.year && (
                                  <span className="text-xs text-stone-500 font-mono">
                                    {result.year}
                                  </span>
                                )}
                              </div>
                              <p className="text-stone-400 text-xs truncate">
                                {result.description}
                              </p>
                              {result.category && (
                                <span className={`inline-block mt-1.5 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded-sm ${getTypeColor(result.type)} bg-current/10`}>
                                  {getTypeLabel(result.type)}
                                  {result.category && ` • ${result.category}`}
                                </span>
                              )}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-4 py-2 border-t border-white/10 flex items-center justify-between text-xs text-stone-500">
                <div className="flex items-center gap-3">
                  <kbd className="flex items-center gap-1 px-1.5 py-0.5 bg-white/5 rounded font-mono">
                    ↑↓
                  </kbd>
                  <span>{lang === 'es' ? 'para navegar' : 'to navigate'}</span>
                </div>
                <div className="flex items-center gap-3">
                  <kbd className="flex items-center gap-1 px-1.5 py-0.5 bg-white/5 rounded font-mono">
                    ↵
                  </kbd>
                  <span>{lang === 'es' ? 'para seleccionar' : 'to select'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
