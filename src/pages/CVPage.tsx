/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, Suspense, lazy } from 'react';
import { TranslationT } from '../types.translation';
import { certificates, timelineEvents } from '../translations';
import {
  Award,
  Briefcase,
  GraduationCap,
  Printer,
  CheckCircle,
  Cpu,
  Video,
  Layers,
  Wrench,
} from 'lucide-react';

const Timeline = lazy(() => import('../components/Timeline'));

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
        </div>
      </div>

      {/* Professional Timeline */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gold font-mono flex items-center gap-2 pb-2 border-b border-white/5">
            <Briefcase className="w-4.5 h-4.5" />
            <span>{lang === 'es' ? 'Trayectoria Profesional' : 'Professional Experience'}</span>
          </h3>
          <p className="text-xs text-stone-500 font-mono">
            {lang === 'es' ? 'Más de 15 años de experiencia en televisión boliviana' : 'Over 15 years of experience in Bolivian television'}
          </p>
        </div>
        <Suspense fallback={<div className="text-stone-500 text-xs p-4">{lang === 'es' ? 'Cargando...' : 'Loading...'}</div>}>
          <Timeline events={timelineEvents} lang={lang} t={t} />
        </Suspense>
      </section>

      {/* Technical Skills & Software (Inspired by Gilber / Salimov CV templates) */}
      <section className="space-y-8 pt-4">
        <div className="space-y-2">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gold font-mono flex items-center gap-2 pb-2 border-b border-white/5">
            <Cpu className="w-4.5 h-4.5" />
            <span>{lang === 'es' ? 'Habilidades Técnicas y Software' : 'Technical Skills & Software'}</span>
          </h3>
          <p className="text-xs text-stone-500 font-mono">
            {lang === 'es' ? 'Dominio de herramientas de edición, postproducción y equipo técnico broadcast' : 'Proficiency in editing, post-production software & broadcast hardware'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Software & Postproduction */}
          <div className="p-5 bg-[#020202] border border-white/5 rounded-sm space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white flex items-center gap-2 pb-2 border-b border-white/5">
              <Layers className="w-4 h-4 text-gold" />
              <span>{lang === 'es' ? 'Edición & Postproducción' : 'Editing & Post-production'}</span>
            </h4>
            
            <div className="space-y-3.5 text-xs">
              <div>
                <div className="flex justify-between font-mono mb-1">
                  <span className="text-stone-300 font-bold">Adobe Premiere Pro</span>
                  <span className="text-gold font-bold">95%</span>
                </div>
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-gold/70 to-gold h-full rounded-full" style={{ width: '95%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-mono mb-1">
                  <span className="text-stone-300 font-bold">DaVinci Resolve (Color & Edición)</span>
                  <span className="text-gold font-bold">90%</span>
                </div>
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-gold/70 to-gold h-full rounded-full" style={{ width: '90%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-mono mb-1">
                  <span className="text-stone-300 font-bold">Adobe After Effects (Motion Graphics)</span>
                  <span className="text-gold font-bold">85%</span>
                </div>
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-gold/70 to-gold h-full rounded-full" style={{ width: '85%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-mono mb-1">
                  <span className="text-stone-300 font-bold">Adobe Photoshop & Lightroom</span>
                  <span className="text-gold font-bold">88%</span>
                </div>
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-gold/70 to-gold h-full rounded-full" style={{ width: '88%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-mono mb-1">
                  <span className="text-stone-300 font-bold">Adobe Audition (Audio Restoration)</span>
                  <span className="text-gold font-bold">85%</span>
                </div>
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-gold/70 to-gold h-full rounded-full" style={{ width: '85%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Hardware & Broadcast Equipment */}
          <div className="p-5 bg-[#020202] border border-white/5 rounded-sm space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white flex items-center gap-2 pb-2 border-b border-white/5">
              <Video className="w-4 h-4 text-gold" />
              <span>{lang === 'es' ? 'Equipamiento & Operación' : 'Hardware & Field Operations'}</span>
            </h4>

            <div className="space-y-3.5 text-xs">
              <div>
                <div className="flex justify-between font-mono mb-1">
                  <span className="text-stone-300 font-bold">{lang === 'es' ? 'Cámaras Broadcast & Cine (Sony FX, RED, Blackmagic)' : 'Broadcast & Cinema Cameras (Sony FX, RED, Blackmagic)'}</span>
                  <span className="text-gold font-bold">95%</span>
                </div>
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-gold/70 to-gold h-full rounded-full" style={{ width: '95%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-mono mb-1">
                  <span className="text-stone-300 font-bold">{lang === 'es' ? 'Unidades Móviles & Transmisión Satelital (SNG)' : 'Mobile Units & Satellite Transmission (SNG)'}</span>
                  <span className="text-gold font-bold">92%</span>
                </div>
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-gold/70 to-gold h-full rounded-full" style={{ width: '92%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-mono mb-1">
                  <span className="text-stone-300 font-bold">{lang === 'es' ? 'Iluminación de Estudio y Exteriores' : 'Studio & Outdoor Lighting'}</span>
                  <span className="text-gold font-bold">90%</span>
                </div>
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-gold/70 to-gold h-full rounded-full" style={{ width: '90%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-mono mb-1">
                  <span className="text-stone-300 font-bold">{lang === 'es' ? 'Operación de Cámaras Full HD (Nikon)' : 'Full HD Camera Operations (Nikon)'}</span>
                  <span className="text-gold font-bold">90%</span>
                </div>
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-gold/70 to-gold h-full rounded-full" style={{ width: '90%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-mono mb-1">
                  <span className="text-stone-300 font-bold">{lang === 'es' ? 'Gestión y Catalogación de Archivo Digital' : 'Digital Archiving & Cataloging Management'}</span>
                  <span className="text-gold font-bold">95%</span>
                </div>
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-gold/70 to-gold h-full rounded-full" style={{ width: '95%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Badge */}
        <div className="p-4 bg-gold/5 border border-gold/20 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
            <span className="text-stone-300 font-mono">
              {lang === 'es'
                ? 'Disponible para contrataciones, proyectos documentales y coberturas especiales en toda Bolivia e internacionalmente.'
                : 'Available for hire, documentary projects, and special broadcast coverage across Bolivia and internationally.'}
            </span>
          </div>
          <a
            href="/contacto"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState(null, '', '/contacto');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
            className="px-4 py-2 bg-gold hover:bg-gold-hover text-black font-mono font-bold uppercase text-[10px] tracking-wider rounded-sm shrink-0 transition-colors"
          >
            {lang === 'es' ? 'Contactar' : 'Get in touch'}
          </a>
        </div>
      </section>

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
              <div className="flex items-start gap-4">
                <img src="/images/graduacion/_DSC0162.webp" alt="Colación de grado - Licenciatura en Comunicación" className="w-20 h-20 rounded-sm object-cover shrink-0 border border-white/5" loading="lazy" />
                <div className="space-y-1 min-w-0">
                  <div className="text-xs font-mono text-stone-500">2018 - 2022</div>
                  <h4 className="text-sm font-bold text-white leading-snug">
                    {lang === 'es' ? 'Licenciatura en Comunicación (Título en Provisión Nacional)' : 'Bachelor Degree in Communication (National Degree)'}
                  </h4>
                  <p className="text-xs text-gold/90 font-mono font-bold tracking-wider">Universidad de Aquino Bolivia (UDABOL) - La Paz</p>
                </div>
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
                {cert.credentialUrl && (
                  <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-[10px] font-mono text-gold hover:text-gold-hover underline mt-1">
                    {lang === 'es' ? 'Ver credencial' : 'View credential'}
                  </a>
                )}
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
                  {cert.credentialUrl && (
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-[10px] font-mono text-gold hover:text-gold-hover underline mt-1">
                      {lang === 'es' ? 'Ver credencial' : 'View credential'}
                    </a>
                  )}
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
              <h4 className="font-bold text-white text-sm">{t.cvMemoBtv2024Title}</h4>
              <p className="leading-relaxed font-light">{t.cvMemoBtv2024Desc}</p>
            </div>
            <div className="p-5 bg-white/[0.01] border border-white/5 rounded-sm space-y-2 text-left text-xs text-stone-400">
              <h4 className="font-bold text-white text-sm">{t.cvMemoBtv2022Title}</h4>
              <p className="leading-relaxed font-light">{t.cvMemoBtv2022Desc}</p>
            </div>
            <div className="p-5 bg-white/[0.01] border border-white/5 rounded-sm space-y-2 text-left text-xs text-stone-400">
              <h4 className="font-bold text-white text-sm">{t.cvMemoBtv2021Title}</h4>
              <p className="leading-relaxed font-light">{t.cvMemoBtv2021Desc}</p>
            </div>
            <a href="https://www.credly.com/users/freddy-ticona-guzman" target="_blank" rel="noopener noreferrer" className="block p-5 bg-white/[0.01] border border-white/5 hover:border-gold/40 rounded-sm transition-all duration-300 text-left text-xs text-stone-400 group">
              <h4 className="font-bold text-white text-sm group-hover:text-gold transition-colors">
                <span className="flex items-center gap-2">
                  Credly
                  <svg className="w-3 h-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </span>
              </h4>
              <p className="mt-1 leading-relaxed">
                {lang === 'es' ? 'Insignias y certificaciones digitales verificables' : 'Verifiable digital badges and certifications'}
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className="pb-8" />
    </div>
  );
}
