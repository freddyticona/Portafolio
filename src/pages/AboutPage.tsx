/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import { TranslationT } from '../types.translation';
import { timelineEvents, testimonials } from '../translations';
import { Film, Monitor, ShieldCheck, BadgeCheck } from 'lucide-react';

const Timeline = lazy(() => import('../components/Timeline'));
const BehindScenesGallery = lazy(() => import('../components/BehindScenesGallery'));
const LocationsMap = lazy(() => import('../components/LocationsMap'));

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="skeleton w-full h-32 rounded" aria-busy="true" aria-label="Cargando..." />
    </div>
  );
}

interface AboutPageProps {
  lang: 'es' | 'en';
  t: TranslationT;
}

export default function AboutPage({ lang, t }: AboutPageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-20 md:space-y-28 animate-fadeIn">

      {/* 1. NARRATIVE BIOGRAPHY & PROFILE PICTURE */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
        {/* Profile/Studio visual background (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="aspect-[4/5] rounded-sm overflow-hidden border border-white/5 bg-[#020202] relative shadow-2xl group">
            <img
              src="/images/freddy_profile.webp"
              alt="Freddy Ticona Guzmán - Camarógrafo Profesional"
              className="w-full h-full object-cover brightness-[0.9] group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />

            {/* Floating credentials */}
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#050505]/95 border border-white/10 backdrop-blur-md rounded-sm space-y-1">
              <div className="text-xs font-mono text-gold font-bold uppercase tracking-widest">Freddy Ticona Guzmán</div>
              <div className="text-[10px] text-stone-400 font-mono leading-relaxed">
                {lang === 'es' ? 'Camarógrafo de Prensa y Realizador Audiovisual' : 'Press Cameraman & Video Producer'}
              </div>
            </div>
          </div>

          {/* Mini galería de fotos reales trabajando */}
          <div className="grid grid-cols-3 gap-2">
            <div className="aspect-square rounded-sm overflow-hidden border border-white/5 bg-[#020202] group">
              <img src="/images/behind-scenes/DSC_2990.webp" alt="Cobertura periodística en campo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="aspect-square rounded-sm overflow-hidden border border-white/5 bg-[#020202] group">
              <img src="/images/behind-scenes/DSC_2189.webp" alt="Trabajo en set de grabación" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="aspect-square rounded-sm overflow-hidden border border-white/5 bg-[#020202] group">
              <img src="/images/graduacion/_DSC0129.webp" alt="Colación de grado - Licenciatura en Comunicación" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
            </div>
          </div>
        </div>

        {/* Storytelling Text (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest block">
              {lang === 'es' ? 'Biografía Narrativa' : 'Narrative Bio'}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display">
              {t.aboutBioTitle}
            </h1>
          </div>

          <div className="text-stone-300 text-sm md:text-base space-y-5 leading-relaxed font-light font-sans">
            <p>{t.aboutBioStory}</p>
            <p className="bg-white/[0.02] p-5 rounded-sm border-l-2 border-gold border-y border-r border-white/5 font-sans">
              {t.aboutBioExtra}
            </p>
          </div>
        </div>
      </section>

{/* 2. SPECIALTIES AREA */}
       <section className="space-y-12">
         <div className="text-center space-y-3 animate-fade-in-up">
          <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest">
            {lang === 'es' ? 'Destrezas Clave' : 'Key Skills'}
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-display">
            {t.specialtiesTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-white/[0.02] border border-white/5 p-6 rounded-sm space-y-4 hover:border-gold/20 transition-all duration-300">
            <div className="w-12 h-12 bg-gold/10 rounded-sm flex items-center justify-center border border-gold/20 text-gold">
              <Film className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white tracking-tight font-display">{t.specCamTitle}</h3>
            <p className="text-stone-400 text-xs leading-relaxed font-light">{t.specCamDesc}</p>
          </div>

          <div className="bg-white/[0.02] border border-white/5 p-6 rounded-sm space-y-4 hover:border-gold/20 transition-all duration-300">
            <div className="w-12 h-12 bg-gold/10 rounded-sm flex items-center justify-center border border-gold/20 text-gold">
              <Monitor className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white tracking-tight font-display">{t.specEditTitle}</h3>
            <p className="text-stone-400 text-xs leading-relaxed font-light">{t.specEditDesc}</p>
          </div>

          <div className="bg-white/[0.02] border border-white/5 p-6 rounded-sm space-y-4 hover:border-gold/20 transition-all duration-300">
            <div className="w-12 h-12 bg-gold/10 rounded-sm flex items-center justify-center border border-gold/20 text-gold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white tracking-tight font-display">{t.specTechTitle}</h3>
            <p className="text-stone-400 text-xs leading-relaxed font-light">{t.specTechDesc}</p>
          </div>
        </div>
      </section>

      {/* 2.5. LATEST CERTIFICATION — AIAM Certiprof */}
      <section className="space-y-10">
        <div className="text-center space-y-3 animate-fade-in-up">
          <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest">
            {lang === 'es' ? 'Certificación Reciente' : 'Latest Certification'}
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-display">
            {lang === 'es' ? 'AI Agent Manager (AIAM™)' : 'AI Agent Manager (AIAM™)'}
          </h2>
          <p className="max-w-2xl mx-auto text-xs text-stone-400 leading-relaxed font-light">
            {lang === 'es'
              ? 'Certificación profesional de Certiprof® en gestión de agentes de IA: diseño, supervisión y orquestación de asistentes autónomos con protocolos como MCP, aplicados a la producción audiovisual.'
              : 'Certiprof® professional certification in AI agent management: designing, supervising and orchestrating autonomous assistants with protocols like MCP, applied to audiovisual production.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Certificate image (clickable, opens PDF) */}
          <a
            href="/certificados/aiam-certiprof-2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
            aria-label={lang === 'es' ? 'Abrir certificado AIAM en PDF' : 'Open AIAM certificate PDF'}
          >
            <div className="rounded-sm overflow-hidden border border-white/5 bg-[#020202] shadow-2xl group-hover:border-gold/40 transition-all duration-300">
              <img
                src="/images/certificados/aiam-certiprof-2026.webp"
                alt="Certificado AI Agent Manager (AIAM™) de Certiprof emitido a Freddy Ticona Guzmán"
                className="w-full h-auto group-hover:scale-102 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </a>

          {/* Details */}
          <div className="space-y-5">
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-sm space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-white/5">
                <div className="w-10 h-10 bg-gold/10 rounded-sm flex items-center justify-center border border-gold/20 text-gold shrink-0">
                  <BadgeCheck className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-stone-300 font-bold uppercase tracking-widest">
                  {lang === 'es' ? 'Certificación Profesional Vigente' : 'Active Professional Certification'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="space-y-1">
                  <div className="font-mono text-[10px] text-stone-400 uppercase tracking-widest">{lang === 'es' ? 'Emisor' : 'Issuer'}</div>
                  <div className="text-stone-200 font-bold">Certiprof®</div>
                </div>
                <div className="space-y-1">
                  <div className="font-mono text-[10px] text-stone-400 uppercase tracking-widest">{lang === 'es' ? 'Fecha de emisión' : 'Issued'}</div>
                  <div className="text-stone-200 font-bold">{lang === 'es' ? '13 de noviembre de 2026' : 'November 13, 2026'}</div>
                </div>
                <div className="space-y-1">
                  <div className="font-mono text-[10px] text-stone-400 uppercase tracking-widest">{lang === 'es' ? 'ID de credencial' : 'Credential ID'}</div>
                  <div className="text-stone-200 font-bold font-mono">CP934708090</div>
                </div>
                <div className="space-y-1">
                  <div className="font-mono text-[10px] text-stone-400 uppercase tracking-widest">{lang === 'es' ? 'Vigente hasta' : 'Valid until'}</div>
                  <div className="text-stone-200 font-bold">{lang === 'es' ? '13 de noviembre de 2029' : 'November 13, 2029'}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-white/5">
                <a
                  href="/certificados/aiam-certiprof-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-gold hover:bg-gold-hover text-black font-mono font-bold uppercase text-[10px] tracking-wider rounded-sm transition-colors"
                >
                  {lang === 'es' ? 'Ver certificado (PDF)' : 'View certificate (PDF)'}
                </a>
                <a
                  href="/cv"
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState(null, '', '/cv');
                    window.dispatchEvent(new PopStateEvent('popstate'));
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 rounded-sm text-xs font-mono font-bold tracking-widest uppercase text-stone-300 hover:text-white transition-colors"
                >
                  {lang === 'es' ? 'Ver trayectoria completa' : 'View full trajectory'}
                </a>
              </div>
            </div>

            <p className="text-[10px] text-stone-400 font-mono leading-relaxed px-1">
              {lang === 'es'
                ? 'La credencial se verifica en el sitio de Certiprof con el código CP934708090.'
                : 'The credential can be verified on the Certiprof website using code CP934708090.'}
            </p>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE TIMELINE OF EXPERIENCE */}
      <section className="space-y-12">
        <div className="text-center space-y-3 animate-fade-in-up">
          <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest">
            {lang === 'es' ? 'Recorrido Profesional' : 'Professional Timeline'}
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-display">
            {t.timelineTitle}
          </h2>
          <p className="max-w-2xl mx-auto text-xs text-stone-500 leading-relaxed font-light">
            {t.timelineSubtitle}
          </p>
        </div>
        <Suspense fallback={<LoadingFallback />}>
          <Timeline events={timelineEvents} lang={lang} t={t} />
        </Suspense>
      </section>

      {/* 3.5. BEHIND THE SCENES GALLERY */}
      <section className="space-y-12">
        <Suspense fallback={<LoadingFallback />}>
          <BehindScenesGallery lang={lang} t={t} />
        </Suspense>
      </section>

      {/* 4. TESTIMONIALS & RECOMMENDATIONS */}
      <section className="space-y-12 pb-8">
        <div className="text-center space-y-3 animate-fade-in-up">
          <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest">
            {lang === 'es' ? 'Referencias' : 'References'}
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-display">
            {t.testimonialsTitle}
          </h2>
          <p className="max-w-2xl mx-auto text-xs text-stone-500 leading-relaxed font-light">
            {t.testimonialsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {testimonials.map((test) => (
            <div
              key={test.id}
              id={`testimonial-card-${test.id}`}
              className="bg-[#020202] border border-white/5 p-6 rounded-sm flex flex-col justify-between hover:border-gold/20 transition-all duration-300"
            >
              <p className="text-stone-300 text-xs md:text-sm font-sans italic leading-relaxed font-light">
                &quot;{lang === 'es' ? test.textEs : test.textEn}&quot;
              </p>
              <div className="pt-6 border-t border-white/5 mt-6 space-y-1">
                <div className="font-bold text-white text-sm">{test.name}</div>
                <div className="text-[10px] font-mono text-gold font-bold uppercase tracking-widest">
                  {lang === 'es' ? test.roleEs : test.roleEn}
                </div>
                <div className="text-[10px] font-mono text-stone-500">
                  {lang === 'es' ? test.companyEs : test.companyEn}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FILMING LOCATIONS MAP */}
      <section className="space-y-12 pb-8">
        <Suspense fallback={<LoadingFallback />}>
          <LocationsMap lang={lang} />
        </Suspense>
      </section>

    </div>
  );
}
