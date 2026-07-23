/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import { BlogPost, PortfolioItem, PageId } from '../types';
import { TranslationT } from '../types.translation';
import { Film, ChevronRight, Calendar, Play, Volume2, VolumeX, Image as ImageIcon, Newspaper, MapPin, Camera as CameraIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { YOUTUBE_VIDEOS } from '../config';
import CinematicHero from '../components/CinematicHero';

const BlogCard = lazy(() => import('../components/BlogCard'));

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="skeleton w-full h-32 rounded" aria-busy="true" aria-label="Cargando contenido..." />
    </div>
  );
}

interface HomePageProps {
  lang: 'es' | 'en';
  t: TranslationT;
  blogPosts: BlogPost[];
  portfolioItems: PortfolioItem[];
  handleNavToTab: (pageId: PageId) => void;
  handleArticleClick: (post: BlogPost, page: PageId) => void;
  reelPlaying: boolean;
  setReelPlaying: (v: boolean) => void;
  reelMuted: boolean;
  setReelMuted: (v: boolean) => void;
}

export default function HomePage({
  lang,
  t,
  blogPosts,
  portfolioItems,
  handleNavToTab,
  handleArticleClick,
  reelPlaying,
  setReelPlaying,
  reelMuted,
  setReelMuted,
}: HomePageProps) {
  // Solo posts personales (sin fuente externa)
  const personalPosts = blogPosts.filter(p => !p.source);
  // Noticias (con fuente externa)
  const newsPosts = blogPosts.filter(p => p.source);
  return (
    <div className="space-y-16 md:space-y-24 animate-fadeIn">

      {/* 1. CINEMATIC HERO */}
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-2"
            >
              <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest block">
                {lang === 'es' ? 'Presentación' : 'Introduction'}
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-display">
                {lang === 'es' ? 'Fidelidad Visual e Impacto Humano' : 'Visual Fidelity & Human Connection'}
              </h2>
            </motion.div>
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
                  <button
                    onClick={() => setReelMuted(!reelMuted)}
                    aria-label={reelMuted ? 'Activar sonido' : 'Silenciar'}
                    className="absolute bottom-4 right-4 z-20 p-2 rounded-sm bg-[#050505]/90 border border-white/10 text-gold hover:text-white transition-colors cursor-pointer"
                  >
                    {reelMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>
              ) : (
                <div
                  className="w-full h-full relative cursor-pointer"
                  onClick={() => setReelPlaying(true)}
                  role="button"
                  tabIndex={0}
                  aria-label={lang === 'es' ? 'Reproducir showreel' : 'Play showreel'}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setReelPlaying(true); }}
                >
                  <img
                    src="/images/freddy_studio.webp"
                    alt="Showreel Thumbnail - Freddy Ticona en estudio"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 brightness-50"
                    loading="lazy"
                    decoding="async"
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
            <div className="space-y-1">
              <div className="text-3xl md:text-5xl font-black text-gold font-display tracking-tight">15+</div>
              <div className="text-xs md:text-sm font-mono font-bold text-stone-400 uppercase tracking-widest">{t.statYears}</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-5xl font-black text-gold font-display tracking-tight">7+</div>
              <div className="text-xs md:text-sm font-mono font-bold text-stone-400 uppercase tracking-widest">{t.statChannels}</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-5xl font-black text-gold font-display tracking-tight">30+</div>
              <div className="text-xs md:text-sm font-mono font-bold text-stone-400 uppercase tracking-widest">{t.statDocs}</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-5xl font-black text-gold font-display tracking-tight">2017</div>
              <div className="text-xs md:text-sm font-mono font-bold text-stone-400 uppercase tracking-widest">{t.statAwards}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PREVIEW OF LATEST BLOG POSTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-3"
        >
          <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest">
            {lang === 'es' ? 'Nuestras Reflexiones' : 'Our Thoughts'}
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight font-display">
            {t.latestBlogTitle}
          </h2>
          <p className="max-w-2xl mx-auto text-sm text-stone-400 leading-relaxed font-light">
            {t.latestBlogSubtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personalPosts.slice(0, 2).map((post) => (
            <Suspense key={post.id} fallback={<LoadingFallback />}>
              <BlogCard
                post={post}
                lang={lang}
                t={t}
                onClick={() => handleArticleClick(post, 'blog')}
              />
            </Suspense>
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

      {/* 5. PORTFOLIO PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-3"
        >
          <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest">
            {lang === 'es' ? 'Trabajos Destacados' : 'Featured Work'}
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight font-display">
            {lang === 'es' ? 'Proyectos Audiovisuales' : 'Audiovisual Projects'}
          </h2>
          <p className="max-w-2xl mx-auto text-sm text-stone-400 leading-relaxed font-light">
            {lang === 'es'
              ? 'Documentales, coberturas internacionales y producciones galardonadas.'
              : 'Documentaries, international coverage, and award-winning productions.'}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioItems.slice(0, 3).map((item) => (
            <div
              key={item.id}
              onClick={() => handleNavToTab('portafolio')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') handleNavToTab('portafolio'); }}
              className="group cursor-pointer bg-white/[0.02] border border-white/5 rounded-sm overflow-hidden hover:border-gold/30 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden bg-[#0a0a0a] relative">
                <img
                  src={item.imageUrl}
                  alt={lang === 'es' ? item.title : item.titleEn}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                {item.isCaseStudy && (
                  <span className="absolute top-2 left-2 bg-gold text-black text-[8px] font-mono font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-sm">
                    {lang === 'es' ? 'CASO DE ESTUDIO' : 'CASE STUDY'}
                  </span>
                )}
              </div>
              <div className="p-4 space-y-2">
                <div className="flex items-center gap-2 text-[9px] font-mono text-stone-500">
                  <span>{item.year}</span>
                  <span>•</span>
                  <span>{lang === 'es' ? item.categoryLabelEs : item.categoryLabelEn}</span>
                </div>
                <h3 className="text-sm font-bold text-white leading-snug line-clamp-2 group-hover:text-gold transition-colors font-display">
                  {lang === 'es' ? item.title : item.titleEn}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center pt-2">
          <button
            onClick={() => handleNavToTab('portafolio')}
            className="px-6 py-3.5 border border-white/5 hover:border-gold bg-white/[0.02] hover:bg-gold text-stone-300 hover:text-black rounded-sm text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer"
          >
            {lang === 'es' ? 'Ver Portafolio Completo' : 'View Full Portfolio'}
          </button>
        </div>
      </section>

      {/* 6. PRESS AGENCY / CORRESPONSAL */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="bg-gradient-to-br from-gold/[0.04] via-[#020202] to-gold/[0.02] border border-gold/20 rounded-xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 border border-gold/20 rounded-sm text-gold text-[10px] font-mono font-bold uppercase tracking-widest">
                  <Newspaper className="w-3.5 h-3.5" />
                  {lang === 'es' ? 'Corresponsal de Prensa Independiente' : 'Independent Press Correspondent'}
                </div>
                <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight font-display leading-tight">
                  {lang === 'es'
                    ? 'Cobertura periodística freelance para medios y agencias internacionales'
                    : 'Freelance press coverage for international media and agencies'}
                </h2>
                <p className="text-stone-400 text-sm leading-relaxed max-w-lg">
                  {lang === 'es'
                    ? 'Disponible como corresponsal en La Paz para asignaciones de prensa escrita, fotográfica y televisiva. Experiencia en coberturas políticas, sociales, culturales y de conflictos. Transmisión en vivo, crónica inmediata y desplazamiento a todo el territorio boliviano.'
                    : 'Available as a La Paz correspondent for print, photo, and TV press assignments. Experience in political, social, cultural, and conflict coverage. Live transmission, immediate reporting, and travel throughout Bolivia.'}
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-xs text-stone-400">
                    <CameraIcon className="w-4 h-4 text-gold" />
                    <span>{lang === 'es' ? 'Foto y video para agencias' : 'Photo & video for agencies'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-stone-400">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span>{lang === 'es' ? 'Cobertura en todo Bolivia' : 'Coverage throughout Bolivia'}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => handleNavToTab('servicios')}
                    className="px-6 py-3 bg-gold hover:bg-gold-hover text-black text-xs font-mono font-bold tracking-widest uppercase rounded-sm transition-all duration-300 cursor-pointer"
                  >
                    {lang === 'es' ? 'Contratar Cobertura' : 'Hire for Coverage'}
                  </button>
                  <button
                    onClick={() => handleNavToTab('contacto')}
                    className="px-6 py-3 border border-white/10 hover:border-gold/50 bg-white/[0.02] hover:bg-gold/10 text-stone-300 hover:text-white text-xs font-mono font-bold tracking-widest uppercase rounded-sm transition-all duration-300 cursor-pointer"
                  >
                    {lang === 'es' ? 'Solicitar Cotización' : 'Request Quote'}
                  </button>
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <div className="w-48 h-48 rounded-full border border-gold/20 bg-gold/[0.03] flex items-center justify-center">
                  <Newspaper className="w-24 h-24 text-gold/30" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. NEWS PREVIEW */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center space-y-3"
          >
            <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest">
              {lang === 'es' ? 'Cobertura Periodística' : 'Press Coverage'}
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight font-display">
              {t.newsHomeTitle}
            </h2>
            <p className="max-w-2xl mx-auto text-sm text-stone-400 leading-relaxed font-light">
              {t.newsHomeSubtitle}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsPosts.slice(0, 4).map((post) => (
              <div
                key={post.id}
                onClick={() => handleNavToTab('noticias')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') handleNavToTab('noticias'); }}
                className="group cursor-pointer bg-white/[0.02] border border-white/5 rounded-sm overflow-hidden hover:border-gold/30 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden bg-[#0a0a0a] relative">
                  <img
                    src={post.imageUrl}
                    alt={lang === 'es' ? post.titleEs : post.titleEn}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {post.breaking && (
                    <span className="absolute top-2 left-2 bg-red-600 text-white text-[8px] font-mono font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-sm">
                      {t.newsBreaking}
                    </span>
                  )}
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex items-center gap-2 text-[9px] font-mono text-stone-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span>{lang === 'es' ? post.categoryEs : post.categoryEn}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white leading-snug line-clamp-2 group-hover:text-gold transition-colors">
                    {lang === 'es' ? post.titleEs : post.titleEn}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center pt-2">
            <button
              onClick={() => handleNavToTab('noticias')}
              className="px-6 py-3.5 border border-white/5 hover:border-gold bg-white/[0.02] hover:bg-gold text-stone-300 hover:text-black rounded-sm text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer"
            >
              {lang === 'es' ? 'Ver todas las noticias' : 'View All News'}
            </button>
          </div>
        </section>

      <div className="pb-16" />
    </div>
  );
}
