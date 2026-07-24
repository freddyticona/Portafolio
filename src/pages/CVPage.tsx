/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TranslationT } from '../types.translation';
import { certificates } from '../translations';
import {
  Award,
  Briefcase,
  GraduationCap,
  Printer,
  CheckCircle,
} from 'lucide-react';

interface CVPageProps {
  lang: 'es' | 'en';
  t: TranslationT;
}

export default function CVPage({ lang, t }: CVPageProps) {
  const [showMoreCerts, setShowMoreCerts] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16 animate-fadeIn text-left printable-cv">

      {/* Header & Quick actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-white/5 pb-8">
        <div className="space-y-2">
          <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest block">
            {lang === 'es' ? 'Trayectoria y Certificaciones' : 'Education & Credentials'}
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display">
            {t.cvTitle}
          </h1>
          <p className="text-sm text-stone-400 leading-relaxed max-w-xl font-light">
            {t.cvSubtitle}
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2.5 shrink-0 self-start sm:self-center">
          <button
            onClick={handlePrint}
            id="print-cv-button"
            className="inline-flex items-center gap-1.5 px-4.5 py-3.5 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 rounded-sm text-xs font-mono font-bold tracking-widest uppercase text-stone-300 hover:text-white transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4 text-gold" />
            <span>{t.cvPrint}</span>
          </button>
          <a
            href="mailto:freddyticona62@gmail.com?subject=Solicitud de CV en PDF&body=Hola Freddy, vi tu portafolio y me gustaría solicitar tu currículum completo en formato PDF."
            id="download-cv-pdf-button"
            className="inline-flex items-center gap-1.5 px-5 py-3.5 bg-gold hover:bg-gold-hover text-black font-bold rounded-sm text-xs font-mono tracking-widest uppercase transition-all duration-300 hover:shadow-lg hover:shadow-gold/10 cursor-pointer"
          >
            <Award className="w-4 h-4 shrink-0" />
            <span>{t.cvDownloadPdf}</span>
          </a>
        </div>
      </div>

      {/* CV Two-Column layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

        {/* Left Column: Education & Honors (1/3) */}
        <div className="space-y-10 md:col-span-1">

          {/* 1. Academic Education */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gold font-mono flex items-center gap-2 pb-2 border-b border-white/5">
              <GraduationCap className="w-4.5 h-4.5" />
              <span>{t.cvAcademicTitle}</span>
            </h3>

            <div className="space-y-4">
              <div className="space-y-1 text-left">
                <div className="text-xs font-mono text-stone-500">2018 - 2022</div>
                <h4 className="text-sm font-bold text-white leading-snug">
                  {lang === 'es' ? 'Licenciatura en Comunicación (Título en Provisión Nacional)' : 'Bachelor Degree in Communication (National Degree)'}
                </h4>
                <p className="text-xs text-gold/90 font-mono font-bold tracking-wider">Universidad de Aquino Bolivia (UDABOL) - La Paz</p>
              </div>

              <div className="space-y-1 text-left pt-3 border-t border-white/5">
                <div className="text-xs font-mono text-stone-500">2017</div>
                <h4 className="text-sm font-bold text-white leading-snug">
                  {lang === 'es' ? 'Técnico en Cinematografía' : 'Cinematography Technician'}
                </h4>
                <p className="text-xs text-gold/90 font-mono font-bold tracking-wider">Escuela Andina de Cinematografía - Fundación Ukamau</p>
              </div>
            </div>
          </div>

          {/* 2. Key Achievements / Distinctions */}
          <div className="space-y-6 pt-2">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gold font-mono flex items-center gap-2 pb-2 border-b border-white/5">
              <Award className="w-4.5 h-4.5" />
              <span>{lang === 'es' ? 'Reconocimientos' : 'Recognitions'}</span>
            </h3>

            <div className="space-y-5 text-xs text-stone-400 text-left">
              <div className="space-y-1.5 p-4 bg-gold/5 rounded-sm border border-gold/15">
                <h4 className="font-bold text-white text-sm">{t.cvAwardAbaroaTitle}</h4>
                <p className="leading-relaxed font-light">{t.cvAwardAbaroaDesc}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Certifications with Accordion (2/3) */}
        <div className="md:col-span-2 space-y-8">
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gold font-mono flex items-center gap-2 pb-2 border-b border-white/5">
              <Briefcase className="w-4.5 h-4.5" />
              <span>{t.cvCertificationsTitle}</span>
            </h3>
            <p className="text-xs text-stone-500 font-mono">{t.cvCertificationsSubtitle}</p>
          </div>

          {/* Primary certifications (always visible) */}
          <div className="space-y-4 text-left">
            {certificates.filter(c => c.isPrimary).map((cert) => (
              <div key={cert.id} className="p-4 bg-[#020202] border border-white/5 rounded-sm space-y-1">
                <div className="flex items-center justify-between gap-4 text-xs font-mono text-stone-500">
                  <span>{cert.issuer}</span>
                  <span>{cert.year}</span>
                </div>
                <h4 className="text-sm font-bold text-white leading-snug">
                  {lang === 'es' ? cert.titleEs : cert.titleEn}
                </h4>
              </div>
            ))}
          </div>

          {/* Extra certifications (collapsible) */}
          {showMoreCerts && (
            <div className="space-y-4 animate-fadeIn text-left">
              {certificates.filter(c => !c.isPrimary).map((cert) => (
                <div key={cert.id} className="p-4 bg-white/[0.01] border border-white/5 rounded-sm space-y-1">
                  <div className="flex items-center justify-between gap-4 text-xs font-mono text-stone-500">
                    <span>{cert.issuer}</span>
                    <span>{cert.year}</span>
                  </div>
                  <h4 className="text-sm font-bold text-stone-300 leading-snug">
                    {lang === 'es' ? cert.titleEs : cert.titleEn}
                  </h4>
                </div>
              ))}
            </div>
          )}

          {/* Accordion toggle button */}
          <div className="text-center pt-2">
            <button
              onClick={() => setShowMoreCerts(!showMoreCerts)}
              id="toggle-additional-certs-button"
              aria-expanded={showMoreCerts}
              className="inline-flex items-center gap-2 px-5 py-3 border border-white/5 hover:border-gold bg-white/[0.02] hover:bg-white/[0.05] rounded-sm text-xs font-mono font-bold tracking-widest uppercase text-gold hover:text-white transition-all duration-300 cursor-pointer"
            >
              <span>{showMoreCerts ? t.cvShowLessCerts : t.cvShowMoreCerts}</span>
            </button>
          </div>

          {/* Official Letters / Congratulations */}
          <div className="space-y-4 pt-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gold font-mono flex items-center gap-2 pb-2 border-b border-white/5">
              <CheckCircle className="w-4.5 h-4.5" />
              <span>{lang === 'es' ? 'Otros Distintivos Profesionales' : 'Other Professional Honors'}</span>
            </h3>

            <div className="p-5 bg-white/[0.01] border border-white/5 rounded-sm space-y-2 text-left text-xs text-stone-400">
              <h4 className="font-bold text-white text-sm">{t.cvMemoTitle}</h4>
              <p className="leading-relaxed font-light">{t.cvMemoDesc}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-8" />
    </div>
  );
}
