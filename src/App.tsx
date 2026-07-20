/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { BlogPost } from './types';
import {
  timelineEvents,
  testimonials,
  certificates,
  portfolioItems,
  caseStudies,
  blogPosts as defaultBlogPosts,
  translations
} from './translations';

import { CONTACT_INFO, YOUTUBE_VIDEOS } from './config';
import { updateMetaTags, generatePageSchema } from './lib/seo';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SkipLink from './components/SkipLink';
import Timeline from './components/Timeline';
import PortfolioGrid from './components/PortfolioGrid';
import CaseStudyDetail from './components/CaseStudyDetail';
import ContactForm from './components/ContactForm';
import BlogCard from './components/BlogCard';
import BlogDetail from './components/BlogDetail';
import AdminPanel from './components/AdminPanel';
import CinematicHero from './components/CinematicHero';
import GlobalSearch from './components/GlobalSearch';
import WhatsAppButton from './components/WhatsAppButton';
import PortfolioFilters, { FilterState } from './components/PortfolioFilters';
import LocationsMap from './components/LocationsMap';
import BookingSystem from './components/BookingSystem';
import Chatbot from './components/Chatbot';
import CommentSystem from './components/CommentSystem';
import ServiceLanding from './components/ServiceLanding';

import { 
  Award, 
  Calendar, 
  Clock, 
  Film, 
  Play, 
  Briefcase, 
  GraduationCap, 
  ChevronRight, 
  Printer, 
  CheckCircle, 
  TrendingUp, 
  Monitor, 
  Volume2, 
  VolumeX, 
  Tv, 
  ShieldCheck, 
  Globe 
} from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('inicio');
  const [lang, setLang] = useState<'es' | 'en'>('es');

  // Sub-navigation states
  const [activeCaseStudyId, setActiveCaseStudyId] = useState<string | null>(null);
  const [activeBlogPostId, setActiveBlogPostId] = useState<string | null>(null);

  // CV accordion state
  const [showMoreCerts, setShowMoreCerts] = useState<boolean>(false);

  // Showreel mockup video playing state
  const [reelPlaying, setReelPlaying] = useState<boolean>(false);
  const [reelMuted, setReelMuted] = useState<boolean>(true);

  // Blog posts state (from localStorage or defaults)
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(defaultBlogPosts);

  // Portfolio filters state
  const [portfolioFilters, setPortfolioFilters] = useState<FilterState>({
    category: 'all',
    year: lang === 'es' ? 'Todos' : 'All',
    status: 'all',
    searchTerm: ''
  });

  // Load blog posts from localStorage on mount
  useEffect(() => {
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
      try {
        setBlogPosts(JSON.parse(savedPosts));
      } catch (e) {
        console.error('Error loading blog posts:', e);
      }
    }
  }, []);

  // Sync state with URL hash on mount and hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = ['inicio', 'sobre-mi', 'portafolio', 'cv', 'blog', 'contacto', 'reservas', 'servicios', 'admin'];
      if (validPages.includes(hash)) {
        setActivePage(hash);
        // Clear sub-views on page change
        setActiveCaseStudyId(null);
        setActiveBlogPostId(null);
      }
    };

    // Run on mount
    if (window.location.hash) {
      handleHashChange();
    } else {
      window.location.hash = 'inicio';
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Actualizar meta tags cuando cambia la página o el idioma
  useEffect(() => {
    updateMetaTags(activePage, lang);

    // Agregar structured data específico de la página si existe
    const schema = generatePageSchema(activePage, lang);
    if (Object.keys(schema).length > 0) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      script.id = 'page-schema';
      const existingSchema = document.getElementById('page-schema');
      if (existingSchema) {
        existingSchema.replaceWith(script);
      } else {
        document.head.appendChild(script);
      }
    }
  }, [activePage, lang]);

  // Helper translation getter
  const t = translations[lang];

  const handlePrint = () => {
    window.print();
  };

  const handleNavToTab = (pageId: PageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveCaseStudyId(null);
    setActiveBlogPostId(null);
  };

  return (
    <div className="min-h-screen bg-[#050505] font-sans text-stone-300 selection:bg-gold selection:text-black flex flex-col justify-between">

      {/* Skip Link para accesibilidad */}
      <SkipLink lang={lang} />

      {/* Sticky Top Header / Navigation */}
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        lang={lang} 
        setLang={setLang} 
        t={t} 
      />

      {/* Main Page Area */}
      <main className="flex-grow">
        
        {/* ==================================================================== */}
        {/* PAGE 1: INICIO (HOME) */}
        {/* ==================================================================== */}
        {activePage === 'inicio' && (
          <div className="space-y-16 md:space-y-24 animate-fadeIn">

            {/* 1. CINEMATIC HERO (New Version) */}
            <section>
              <CinematicHero
                onPortfolioClick={() => handleNavToTab('portafolio')}
                onCvClick={() => handleNavToTab('cv')}
                lang={lang}
                t={t}
              />
            </section>

            {/* 2. SUMMARY & SHOWREEL SECTION */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center text-left">
                
                {/* Text summary (2 cols) */}
                <div className="lg:col-span-2 space-y-5">
                  <div className="space-y-2">
                    <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest block">
                      {lang === 'es' ? 'Presentación' : 'Introduction'}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-display">
                      {lang === 'es' ? 'Fidelidad Visual e Impacto Humano' : 'Visual Fidelity & Human Connection'}
                    </h2>
                  </div>
                  <p className="text-stone-400 text-sm md:text-base leading-relaxed font-light">
                    {lang === 'es' 
                      ? 'Freddy Ticona Guzmán cuenta con más de una década y media recorriendo las laderas, valles, selvas y el Altiplano boliviano. Su lente no solo filma; documenta la riqueza social y las realidades políticas de Bolivia con la precisión técnica requerida por las principales televisoras nacionales y la sensibilidad estética propia de un documentalista galardonado.'
                      : 'Freddy Ticona Guzmán has spent over a decade and a half traversing Bolivia\'s steep mountain slopes, humid jungles, and high plains. His lens does not merely capture footage; it documents the rich social identity and complex political scenes of Bolivia with the technical rigor expected by major national networks.'}
                  </p>
                  <div className="pt-3">
                    <button
                      onClick={() => handleNavToTab('sobre-mi')}
                      id="intro-read-more"
                      className="inline-flex items-center gap-1 text-sm font-mono font-bold text-gold hover:text-gold-hover hover:translate-x-1 transition-all duration-300 cursor-pointer"
                    >
                      <span>{lang === 'es' ? 'Leer más sobre su trayectoria' : 'Read more about his journey'}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Showreel embed/mockup container (3 cols) */}
                <div className="lg:col-span-3 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-stone-500 px-1">
                    <span className="flex items-center gap-1.5 uppercase font-bold text-gold/90 tracking-widest">
                      <Film className="w-4 h-4" />
                      <span>{t.heroShowreelTitle} (60-90s)</span>
                    </span>
                    <span>1:30 MIN</span>
                  </div>

                  {/* Showreel frame */}
                  <div className="aspect-video w-full rounded-sm overflow-hidden bg-[#020202] border border-white/5 shadow-2xl relative group">
                    {reelPlaying ? (
                      <div className="w-full h-full relative">
                        <iframe
                          src={`https://www.youtube.com/embed/${YOUTUBE_VIDEOS.showreel}?autoplay=1&mute=${reelMuted ? '1' : '0'}`}
                          title="Freddy Ticona Showreel"
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                        {/* Audio toggler floating overlay */}
                        <button
                          onClick={() => setReelMuted(!reelMuted)}
                          className="absolute bottom-4 right-4 z-20 p-2 rounded-sm bg-[#050505]/90 border border-white/10 text-gold hover:text-white transition-colors cursor-pointer"
                        >
                          {reelMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        </button>
                      </div>
                    ) : (
                      <div className="w-full h-full relative cursor-pointer" onClick={() => setReelPlaying(true)}>
                        <img
                          src="/images/freddy_studio.webp"
                          alt="Showreel Thumbnail - Freddy Ticona en estudio"
                          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 brightness-50"
                        />
                        <div className="absolute inset-0 bg-[#050505]/40 group-hover:bg-[#050505]/60 transition-colors" />
                        
                        {/* Huge play button overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-gold text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-7 h-7 fill-black ml-1" />
                          </div>
                        </div>

                        {/* Audio wave decorative element */}
                        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-[#050505]/90 border border-white/10 px-3 py-1.5 rounded-sm text-[10px] font-mono text-stone-300">
                          <div className="flex gap-0.5 items-end h-3">
                            <div className="w-0.5 h-2.5 bg-gold animate-pulse" />
                            <div className="w-0.5 h-1.5 bg-gold animate-pulse" />
                            <div className="w-0.5 h-3 bg-gold animate-pulse" />
                            <div className="w-0.5 h-2 bg-gold animate-pulse" />
                          </div>
                          <span className="font-bold tracking-wider">DEMO REEL AUDIOVISUAL</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </section>

            {/* 3. QUICK HIGHLIGHTS / STATS COUNTERS */}
            <section className="bg-white/[0.01] border-y border-white/5 py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  
                  {/* Stat 1 */}
                  <div className="space-y-1">
                    <div className="text-3xl md:text-5xl font-black text-gold font-display tracking-tight">
                      15+
                    </div>
                    <div className="text-xs md:text-sm font-mono font-bold text-stone-400 uppercase tracking-widest">
                      {t.statYears}
                    </div>
                  </div>

                  {/* Stat 2 */}
                  <div className="space-y-1">
                    <div className="text-3xl md:text-5xl font-black text-gold font-display tracking-tight">
                      7+
                    </div>
                    <div className="text-xs md:text-sm font-mono font-bold text-stone-400 uppercase tracking-widest">
                      {t.statChannels}
                    </div>
                  </div>

                  {/* Stat 3 */}
                  <div className="space-y-1">
                    <div className="text-3xl md:text-5xl font-black text-gold font-display tracking-tight">
                      30+
                    </div>
                    <div className="text-xs md:text-sm font-mono font-bold text-stone-400 uppercase tracking-widest">
                      {t.statDocs}
                    </div>
                  </div>

                  {/* Stat 4 */}
                  <div className="space-y-1">
                    <div className="text-3xl md:text-5xl font-black text-gold font-display tracking-tight">
                      2017
                    </div>
                    <div className="text-xs md:text-sm font-mono font-bold text-stone-400 uppercase tracking-widest">
                      {t.statAwards}
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* 4. PREVIEW OF LATEST BLOG POSTS */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div className="text-center space-y-3">
                <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest">
                  {lang === 'es' ? 'Nuestras Reflexiones' : 'Our Thoughts'}
                </span>
                <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight font-display">
                  {t.latestBlogTitle}
                </h2>
                <p className="max-w-2xl mx-auto text-sm text-stone-400 leading-relaxed font-light">
                  {t.latestBlogSubtitle}
                </p>
              </div>

              {/* Grid with last 2 articles */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.slice(0, 2).map((post) => (
                  <BlogCard
                    key={post.id}
                    post={post}
                    lang={lang}
                    t={t}
                    onClick={() => {
                      setActivePage('blog');
                      setActiveBlogPostId(post.id);
                      window.location.hash = 'blog';
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  />
                ))}
              </div>

              <div className="text-center pt-2">
                <button
                  onClick={() => handleNavToTab('blog')}
                  id="view-all-blog-posts-button"
                  className="px-6 py-3.5 border border-white/5 hover:border-gold bg-white/[0.02] hover:bg-gold text-stone-300 hover:text-black rounded-sm text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer"
                >
                  {lang === 'es' ? 'Ver Todos los Artículos' : 'View All Articles'}
                </button>
              </div>
            </section>

            {/* Spacer */}
            <div className="pb-16" />
          </div>
        )}

        {/* ==================================================================== */}
        {/* PAGE 2: SOBRE MÍ (ABOUT ME) */}
        {/* ==================================================================== */}
        {activePage === 'sobre-mi' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-20 md:space-y-28 animate-fadeIn">
            
            {/* 1. NARRATIVE BIOGRAPHY & PROFILE PICTURE */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
              {/* Profile/Studio visual background (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                <div className="aspect-[4/5] rounded-sm overflow-hidden border border-white/5 bg-[#020202] relative shadow-2xl group">
                  <img
                    src="/images/freddy_profile.webp"
                    alt="Freddy Ticona Guzmán"
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
              <div className="text-center space-y-3">
                <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest">
                  {lang === 'es' ? 'Destrezas Clave' : 'Key Skills'}
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-display">
                  {t.specialtiesTitle}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                {/* Specialty 1 */}
                <div className="bg-white/[0.02] border border-white/5 p-6 rounded-sm space-y-4 hover:border-gold/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-gold/10 rounded-sm flex items-center justify-center border border-gold/20 text-gold">
                    <Film className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight font-display">
                    {t.specCamTitle}
                  </h3>
                  <p className="text-stone-400 text-xs leading-relaxed font-light">
                    {t.specCamDesc}
                  </p>
                </div>

                {/* Specialty 2 */}
                <div className="bg-white/[0.02] border border-white/5 p-6 rounded-sm space-y-4 hover:border-gold/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-gold/10 rounded-sm flex items-center justify-center border border-gold/20 text-gold">
                    <Monitor className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight font-display">
                    {t.specEditTitle}
                  </h3>
                  <p className="text-stone-400 text-xs leading-relaxed font-light">
                    {t.specEditDesc}
                  </p>
                </div>

                {/* Specialty 3 */}
                <div className="bg-white/[0.02] border border-white/5 p-6 rounded-sm space-y-4 hover:border-gold/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-gold/10 rounded-sm flex items-center justify-center border border-gold/20 text-gold">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight font-display">
                    {t.specTechTitle}
                  </h3>
                  <p className="text-stone-400 text-xs leading-relaxed font-light">
                    {t.specTechDesc}
                  </p>
                </div>
              </div>
            </section>

            {/* 3. INTERACTIVE TIMELINE OF EXPERIENCE */}
            <section className="space-y-12">
              <div className="text-center space-y-3">
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

              <Timeline events={timelineEvents} lang={lang} t={t} />
            </section>

            {/* 4. TESTIMONIALS & RECOMMENDATIONS */}
            <section className="space-y-12 pb-8">
              <div className="text-center space-y-3">
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
                      <div className="font-bold text-white text-sm">
                        {test.name}
                      </div>
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
              <LocationsMap lang={lang} />
            </section>

          </div>
        )}

        {/* ==================================================================== */}
        {/* PAGE 3: PORTAFOLIO / GALERÍA */}
        {/* ==================================================================== */}
        {activePage === 'portafolio' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12 md:space-y-16 animate-fadeIn">
            
            {activeCaseStudyId ? (
              // Case Study Detail Sub-route view
              <CaseStudyDetail 
                caseStudy={caseStudies[activeCaseStudyId]} 
                lang={lang} 
                t={t} 
                onBack={() => {
                  setActiveCaseStudyId(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
              />
            ) : (
              // Standard Portfolio Grid & Filters
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

                {/* Advanced Filters */}
                <PortfolioFilters
                  lang={lang}
                  onFilterChange={(filters) => setPortfolioFilters(filters)}
                />

                <PortfolioGrid 
                  items={portfolioItems} 
                  lang={lang} 
                  t={t} 
                  onViewCaseStudy={(id) => {
                    setActiveCaseStudyId(id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }} 
                />
              </div>
            )}

            <div className="pb-8" />
          </div>
        )}

        {/* ==================================================================== */}
        {/* PAGE 4: CV / CURRÍCULUM */}
        {/* ==================================================================== */}
        {activePage === 'cv' && (
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

              {/* Action buttons (Print and simulated PDF download) */}
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
                      <div className="text-xs font-mono text-stone-500">2010 - 2014</div>
                      <h4 className="text-sm font-bold text-white leading-snug">
                        {lang === 'es' ? 'Licenciatura en Ciencias de la Comunicación Social' : 'Bachelor of Science in Social Communication'}
                      </h4>
                      <p className="text-xs text-gold/90 font-mono font-bold tracking-wider">UDABOL - La Paz</p>
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

              {/* Right Column: Certifications with Two-level Accordion (2/3) */}
              <div className="md:col-span-2 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-gold font-mono flex items-center gap-2 pb-2 border-b border-white/5">
                    <Briefcase className="w-4.5 h-4.5" />
                    <span>{t.cvCertificationsTitle}</span>
                  </h3>
                  <p className="text-xs text-stone-500 font-mono">
                    {t.cvCertificationsSubtitle}
                  </p>
                </div>

                {/* List of primary certifications (always visible) */}
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

                {/* Collapsible section for extra certifications */}
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
        )}

        {/* ==================================================================== */}
        {/* PAGE 5: BLOG (NEWS / DIARIES) */}
        {/* ==================================================================== */}
        {activePage === 'blog' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12 animate-fadeIn">
            
            {activeBlogPostId ? (
              // Full BlogPost reader view
              <BlogDetail 
                post={blogPosts.find(p => p.id === activeBlogPostId)!} 
                lang={lang} 
                t={t} 
                onBack={() => {
                  setActiveBlogPostId(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
              />
            ) : (
              // Article grid list
              <div className="space-y-12">
                <div className="text-center space-y-3">
                  <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest">
                    {lang === 'es' ? 'Apuntes de Rodaje' : 'Filming Diaries'}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display">
                    {t.blogTitle}
                  </h1>
                  <p className="max-w-2xl mx-auto text-sm text-stone-400 leading-relaxed font-light">
                    {t.blogSubtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {blogPosts.map((post) => (
                    <BlogCard
                      key={post.id}
                      post={post}
                      lang={lang}
                      t={t}
                      onClick={() => {
                        setActiveBlogPostId(post.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="pb-8" />
          </div>
        )}

        {/* ==================================================================== */}
        {/* PAGE 6: CONTACTO */}
        {/* ==================================================================== */}
        {activePage === 'contacto' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12 animate-fadeIn">
            
            <div className="text-center space-y-3">
              <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest">
                {lang === 'es' ? 'Trabajemos Juntos' : 'Work with me'}
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display">
                {t.contactTitle}
              </h1>
              <p className="max-w-2xl mx-auto text-sm text-stone-400 leading-relaxed font-light">
                {t.contactSubtitle}
              </p>
            </div>

            <ContactForm lang={lang} t={t} />

            <div className="pb-8" />
          </div>
        )}

        {/* ==================================================================== */}
        {/* PAGE 7: RESERVAS / CITAS */}
        {/* ==================================================================== */}
        {activePage === 'reservas' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12 animate-fadeIn">
            <BookingSystem
              lang={lang}
              t={t}
              onSuccess={(booking) => {
                // Track booking event
                console.log('Booking created:', booking);
              }}
            />
            <div className="pb-8" />
          </div>
        )}

        {/* ==================================================================== */}
        {/* PAGE 8: SERVICIOS (Landing Pages) */}
        {/* ==================================================================== */}
        {activePage === 'servicios' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fadeIn">
            <ServiceLanding
              lang={lang}
              t={t}
              onContact={() => handleNavToTab('contacto')}
              onBooking={() => handleNavToTab('reservas')}
            />
          </div>
        )}

        {/* ==================================================================== */}
        {/* PAGE 9: ADMIN (Hidden Panel) */}
        {/* ==================================================================== */}
        {activePage === 'admin' && (
          <AdminPanel lang={lang} onBack={() => handleNavToTab('inicio')} />
        )}

      </main>

      {/* Persistent Footer */}
      <Footer
        setActivePage={setActivePage}
        lang={lang}
        t={t}
      />

      {/* Global Components */}
      <WhatsAppButton phoneNumber={CONTACT_INFO.phoneNumber} lang={lang} />
      <GlobalSearch lang={lang} onNavigate={handleNavToTab} />
      <Chatbot lang={lang} t={t} />

    </div>
  );
}
