/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Clapperboard, Palette } from 'lucide-react';
import { PageId } from '../types';
import { TranslationT } from '../types.translation';
import { portfolioItems, caseStudies } from '../translations';
import PortfolioFilters, { FilterState } from '../components/PortfolioFilters';
import PortfolioShowcase from '../components/PortfolioShowcase';

const PortfolioGrid = lazy(() => import('../components/PortfolioGrid'));
const CaseStudyDetail = lazy(() => import('../components/CaseStudyDetail'));

type Seccion = 'audiovisual' | 'diseno';

function seccionDesdeUrl(): Seccion {
  return new URLSearchParams(window.location.search).get('seccion') === 'diseno' ? 'diseno' : 'audiovisual';
}

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="skeleton w-full h-32 rounded" aria-busy="true" aria-label="Cargando..." />
    </div>
  );
}

interface PortfolioPageProps {
  lang: 'es' | 'en';
  t: TranslationT;
  activeCaseStudyId: string | null;
  setActiveCaseStudyId: (id: string | null) => void;
  portfolioFilters: FilterState;
  setPortfolioFilters: (f: FilterState) => void;
}

export default function PortfolioPage({
  lang,
  t,
  activeCaseStudyId,
  setActiveCaseStudyId,
  portfolioFilters,
  setPortfolioFilters,
}: PortfolioPageProps) {
  const activeCaseStudy = activeCaseStudyId ? caseStudies[activeCaseStudyId] : null;
  const [seccion, setSeccion] = useState<Seccion>(seccionDesdeUrl);

  // Sincroniza la pestaña con el URL (?seccion=diseno) y con el enlace del navbar
  useEffect(() => {
    const sincronizar = (e?: Event) => {
      const detail = e instanceof CustomEvent ? e.detail : undefined;
      if (detail === 'diseno' || detail === 'audiovisual') {
        setSeccion(detail);
      } else {
        setSeccion(seccionDesdeUrl());
      }
    };
    window.addEventListener('portafolio:seccion', sincronizar as EventListener);
    window.addEventListener('popstate', sincronizar);
    return () => {
      window.removeEventListener('portafolio:seccion', sincronizar as EventListener);
      window.removeEventListener('popstate', sincronizar);
    };
  }, []);

  const seleccionarSeccion = (siguiente: Seccion) => {
    if (siguiente === seccion) return;
    setSeccion(siguiente);
    window.history.pushState(
      null,
      '',
      siguiente === 'diseno' ? '/portafolio?seccion=diseno' : '/portafolio'
    );
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const botonTab = (activo: boolean) =>
    `group relative flex-1 min-w-0 flex items-center gap-3 px-5 py-4 sm:px-7 sm:py-5 rounded-lg text-left transition-all duration-300 cursor-pointer border ${
      activo
        ? 'bg-gold text-black border-gold shadow-[0_0_30px_rgba(212,175,55,0.18)]'
        : 'bg-white/[0.02] text-stone-400 border-white/10 hover:border-gold/50 hover:text-gold'
    }`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-10 md:space-y-12 animate-fadeIn">

      {activeCaseStudy ? (
        <Suspense fallback={<LoadingFallback />}>
          <CaseStudyDetail
            caseStudy={activeCaseStudy}
            lang={lang}
            t={t}
            onBack={() => {
              setActiveCaseStudyId(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </Suspense>
      ) : (
        <>
          <div className="text-center space-y-3">
            <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest">
              {lang === 'es' ? 'Archivo Seleccionado' : 'Selected Archive'}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display">
              {t.portfolioTitle}
            </h1>
            <p className="max-w-2xl mx-auto text-sm text-stone-400 leading-relaxed font-light">
              {t.portfolioSubtitle}
            </p>
          </div>

          {/* Pestañas principales: visibles sin scrollear */}
          <div role="tablist" aria-label={lang === 'es' ? 'Secciones del portafolio' : 'Portfolio sections'}
            className="flex flex-col sm:flex-row gap-2 sm:gap-3 p-1.5 rounded-xl border border-white/10 bg-white/[0.02] shadow-2xl">
            <button
              id="tab-audiovisual"
              role="tab"
              aria-selected={seccion === 'audiovisual'}
              aria-controls="panel-audiovisual"
              onClick={() => seleccionarSeccion('audiovisual')}
              className={botonTab(seccion === 'audiovisual')}
            >
              <Clapperboard className={`w-6 h-6 sm:w-7 sm:h-7 shrink-0 ${seccion === 'audiovisual' ? 'text-black' : 'text-gold'}`} />
              <span className="min-w-0">
                <span className="block text-sm sm:text-base font-extrabold font-display uppercase tracking-tight">
                  {lang === 'es' ? 'Producción Audiovisual' : 'Audiovisual Production'}
                </span>
                <span className={`block text-[10px] sm:text-xs font-mono tracking-widest uppercase mt-0.5 ${seccion === 'audiovisual' ? 'text-black/70' : 'text-stone-500'}`}>
                  {lang === 'es' ? 'Coberturas y Documentales' : 'Coverage & Documentaries'}
                </span>
              </span>
            </button>

            <button
              id="tab-diseno"
              role="tab"
              aria-selected={seccion === 'diseno'}
              aria-controls="panel-diseno"
              onClick={() => seleccionarSeccion('diseno')}
              className={botonTab(seccion === 'diseno')}
            >
              <Palette className={`w-6 h-6 sm:w-7 sm:h-7 shrink-0 ${seccion === 'diseno' ? 'text-black' : 'text-gold'}`} />
              <span className="min-w-0">
                <span className="block text-sm sm:text-base font-extrabold font-display uppercase tracking-tight">
                  {lang === 'es' ? 'Diseño Gráfico & Identidad' : 'Graphic Design & Identity'}
                </span>
                <span className={`block text-[10px] sm:text-xs font-mono tracking-widest uppercase mt-0.5 ${seccion === 'diseno' ? 'text-black/70' : 'text-stone-500'}`}>
                  {lang === 'es' ? 'Catálogo de Diseño' : 'Design Catalog'}
                </span>
              </span>
            </button>
          </div>

          <div id="panel-audiovisual" role="tabpanel" aria-labelledby="tab-audiovisual" hidden={seccion !== 'audiovisual'}>
            {seccion === 'audiovisual' && (
              <div className="space-y-10 md:space-y-12">
                <PortfolioFilters
                  lang={lang}
                  onFilterChange={(filters) => setPortfolioFilters(filters)}
                />

                <Suspense fallback={<LoadingFallback />}>
                  <PortfolioGrid
                    items={portfolioItems}
                    lang={lang}
                    t={t}
                    onViewCaseStudy={(id) => {
                      setActiveCaseStudyId(id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  />
                </Suspense>
              </div>
            )}
          </div>

          <div id="panel-diseno" role="tabpanel" aria-labelledby="tab-diseno" hidden={seccion !== 'diseno'}>
            {seccion === 'diseno' && <PortfolioShowcase />}
          </div>
        </>
      )}

      <div className="pb-8" />
    </div>
  );
}
