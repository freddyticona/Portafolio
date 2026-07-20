/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CaseStudy } from '../types';
import { ArrowLeft, Award, Cpu, Heart, CheckCircle2, ShieldAlert, Compass, Image, MonitorPlay } from 'lucide-react';

interface CaseStudyDetailProps {
  caseStudy: CaseStudy;
  lang: 'es' | 'en';
  t: any;
  onBack: () => void;
}

export default function CaseStudyDetail({ caseStudy, lang, t, onBack }: CaseStudyDetailProps) {
  return (
    <article className="space-y-12 animate-fadeIn max-w-5xl mx-auto text-left">
      {/* Back button */}
      <div>
        <button
          onClick={onBack}
          id="back-to-portfolio-button"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 hover:border-gold/50 hover:bg-white/10 text-stone-300 hover:text-white rounded-sm text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-gold" />
          <span>{t.backToPortfolio}</span>
        </button>
      </div>

      {/* Header Card */}
      <div className="relative overflow-hidden bg-white/[0.02] border border-white/5 rounded-sm p-6 md:p-10 space-y-4">
        <div className="absolute top-0 right-0 p-6 opacity-5 hidden sm:block">
          <Award className="w-40 h-40 text-gold" />
        </div>

        {caseStudy.awardEs && (
          <div className="inline-flex items-center gap-2 bg-gold text-[#050505] px-3 py-1 rounded-sm text-xs font-mono font-bold uppercase tracking-widest">
            <Award className="w-4 h-4" />
            <span>{lang === 'es' ? caseStudy.awardEs : caseStudy.awardEn}</span>
          </div>
        )}

        <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight leading-tight max-w-3xl font-display">
          {lang === 'es' ? caseStudy.title : caseStudy.titleEn}
        </h1>
        <p className="text-gold font-mono text-sm md:text-base font-bold uppercase tracking-wider">
          {lang === 'es' ? caseStudy.subtitleEs : caseStudy.subtitleEn}
        </p>

        {/* Technical quick badges */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 text-xs text-stone-400 font-mono border-t border-white/5">
          <div>
            <span className="text-stone-500 mr-1 uppercase font-bold">{lang === 'es' ? 'Rol:' : 'Role:'}</span>
            <span className="text-white font-semibold">{lang === 'es' ? caseStudy.roleEs : caseStudy.roleEn}</span>
          </div>
          <div className="hidden sm:block text-stone-800">|</div>
          <div>
            <span className="text-stone-500 mr-1 uppercase font-bold">{lang === 'es' ? 'Equipo:' : 'Team:'}</span>
            <span className="text-white font-semibold">{lang === 'es' ? caseStudy.teamEs : caseStudy.teamEn}</span>
          </div>
        </div>
      </div>

      {/* Showreel / Video Embed */}
      {caseStudy.videoUrl && (
        <div className="space-y-3">
          <h3 className="text-xs font-mono font-bold text-stone-500 uppercase tracking-widest flex items-center gap-1.5">
            <MonitorPlay className="w-4 h-4 text-gold" />
            <span>{lang === 'es' ? 'Video Reportaje Completo' : 'Complete Video Report'}</span>
          </h3>
          <div className="aspect-video w-full rounded-sm overflow-hidden bg-[#050505] border border-white/5 shadow-2xl">
            <iframe
              src={caseStudy.videoUrl}
              title={lang === 'es' ? caseStudy.title : caseStudy.titleEn}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Side: Storytelling Narrative (Context, Challenges, Solutions, Results) */}
        <div className="lg:col-span-2 space-y-10">
          
          {/* Section: Context */}
          <section className="space-y-3.5">
            <h2 className="text-lg md:text-xl font-bold text-white tracking-tight flex items-center gap-2 border-b border-white/5 pb-2 font-display">
              <Compass className="w-5 h-5 text-gold" />
              <span>{t.caseStudyContext}</span>
            </h2>
            <p className="text-stone-300 text-sm md:text-base leading-relaxed whitespace-pre-line font-light">
              {lang === 'es' ? caseStudy.contextEs : caseStudy.contextEn}
            </p>
          </section>

          {/* Section: Challenges */}
          <section className="space-y-3.5 bg-rose-500/5 p-6 rounded-sm border border-rose-500/10">
            <h2 className="text-lg md:text-xl font-bold tracking-tight flex items-center gap-2 border-b border-rose-500/10 pb-2 text-rose-400 font-display">
              <ShieldAlert className="w-5 h-5" />
              <span>{t.caseStudyChallenges}</span>
            </h2>
            <p className="text-stone-300 text-sm md:text-base leading-relaxed whitespace-pre-line font-light">
              {lang === 'es' ? caseStudy.challengesEs : caseStudy.challengesEn}
            </p>
          </section>

          {/* Section: Solutions */}
          <section className="space-y-3.5">
            <h2 className="text-lg md:text-xl font-bold text-white tracking-tight flex items-center gap-2 border-b border-white/5 pb-2 font-display">
              <CheckCircle2 className="w-5 h-5 text-gold" />
              <span>{t.caseStudySolutions}</span>
            </h2>
            <p className="text-stone-300 text-sm md:text-base leading-relaxed whitespace-pre-line font-light">
              {lang === 'es' ? caseStudy.solutionsEs : caseStudy.solutionsEn}
            </p>
          </section>

          {/* Section: Result */}
          <section className="space-y-3.5 bg-gold/5 p-6 rounded-sm border border-gold/10">
            <h2 className="text-lg md:text-xl font-bold text-gold tracking-tight flex items-center gap-2 border-b border-gold/10 pb-2 font-display">
              <Award className="w-5 h-5" />
              <span>{t.caseStudyResult}</span>
            </h2>
            <p className="text-stone-300 text-sm md:text-base leading-relaxed whitespace-pre-line font-semibold font-serif italic">
              {lang === 'es' ? caseStudy.resultEs : caseStudy.resultEn}
            </p>
          </section>

        </div>

        {/* Right Side: Technical Specs Sidebar */}
        <div className="space-y-6">
          {/* Hardware list */}
          <div className="bg-white/[0.02] border border-white/5 p-6 rounded-sm space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold flex items-center gap-2 pb-2 border-b border-white/5 font-mono">
              <Cpu className="w-4 h-4" />
              <span>{t.caseStudyHardware}</span>
            </h3>
            <ul className="space-y-2.5 text-xs font-mono text-stone-300">
              {(lang === 'es' ? caseStudy.hardwareEs : caseStudy.hardwareEn).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Software list */}
          <div className="bg-white/[0.02] border border-white/5 p-6 rounded-sm space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold flex items-center gap-2 pb-2 border-b border-white/5 font-mono">
              <MonitorPlay className="w-4 h-4" />
              <span>{t.caseStudySoftware}</span>
            </h3>
            <ul className="space-y-2.5 text-xs font-mono text-stone-300">
              {(lang === 'es' ? caseStudy.softwareEs : caseStudy.softwareEn).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Section: BTS Image Gallery */}
      {caseStudy.btsImages && caseStudy.btsImages.length > 0 && (
        <section className="space-y-6 pt-6 border-t border-white/5">
          <h2 className="text-lg md:text-xl font-bold text-white tracking-tight flex items-center gap-2 font-display">
            <Image className="w-5 h-5 text-gold" />
            <span>{t.caseStudyBts}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudy.btsImages.map((img, idx) => (
              <figure key={idx} className="bg-white/[0.02] border border-white/5 p-3 rounded-sm overflow-hidden space-y-3">
                <div className="aspect-video bg-[#050505] rounded-sm overflow-hidden border border-white/5">
                  <img
                    src={img.url}
                    alt={lang === 'es' ? img.captionEs : img.captionEn}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-102 transition-transform duration-500"
                  />
                </div>
                <figcaption className="text-xs text-stone-400 font-mono leading-relaxed text-left pl-1 border-l border-gold/50 font-bold uppercase tracking-wider">
                  {lang === 'es' ? img.captionEs : img.captionEn}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* Bottom Back Button */}
      <div className="pt-8 text-center border-t border-white/5">
        <button
          onClick={onBack}
          id="back-to-portfolio-bottom-button"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:border-gold hover:bg-white/10 text-stone-300 hover:text-white rounded-sm text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-gold" />
          <span>{t.backToPortfolio}</span>
        </button>
      </div>
    </article>
  );
}
