/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import { PageId } from '../types';
import { TranslationT } from '../types.translation';
import { portfolioItems, caseStudies } from '../translations';
import PortfolioFilters, { FilterState } from '../components/PortfolioFilters';

const PortfolioGrid = lazy(() => import('../components/PortfolioGrid'));
const CaseStudyDetail = lazy(() => import('../components/CaseStudyDetail'));

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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12 md:space-y-16 animate-fadeIn">

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
        <div className="space-y-12">
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

      <div className="pb-8" />
    </div>
  );
}
