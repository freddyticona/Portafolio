/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import { TranslationT } from '../types.translation';
import { timelineEvents, testimonials } from '../translations';
import { Film, Monitor, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

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
              <img src="/images/behind-scenes/DSC07483.webp" alt="Grabación en campo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-3"
        >
          <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest">
            {lang === 'es' ? 'Destrezas Clave' : 'Key Skills'}
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-display">
            {t.specialtiesTitle}
          </h2>
        </motion.div>

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

      {/* 3. INTERACTIVE TIMELINE OF EXPERIENCE */}
      <section className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-3"
        >
          <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest">
            {lang === 'es' ? 'Recorrido Profesional' : 'Professional Timeline'}
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-display">
            {t.timelineTitle}
          </h2>
          <p className="max-w-2xl mx-auto text-xs text-stone-500 leading-relaxed font-light">
            {t.timelineSubtitle}
          </p>
        </motion.div>
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-3"
        >
          <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest">
            {lang === 'es' ? 'Referencias' : 'References'}
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-display">
            {t.testimonialsTitle}
          </h2>
          <p className="max-w-2xl mx-auto text-xs text-stone-500 leading-relaxed font-light">
            {t.testimonialsSubtitle}
          </p>
        </motion.div>

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
