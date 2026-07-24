/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * App.tsx — Componente raíz refactorizado
 *
 * Este archivo actúa como router/shell de la aplicación.
 * Cada página está en su propio archivo dentro de src/pages/
 * para facilitar el mantenimiento y el code splitting.
 *
 * Páginas:
 *  - src/pages/HomePage.tsx      → /
 *  - src/pages/AboutPage.tsx     → /sobre-mi
 *  - src/pages/PortfolioPage.tsx → /portafolio
 *  - src/pages/CVPage.tsx        → /cv
 *  - src/pages/BlogPages.tsx     → /blog, /noticias
 *  - src/pages/OtherPages.tsx    → /contacto, /reservas, /servicios, /admin
 */

import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageId, BlogPost, PortfolioItem } from './types';
import { blogPosts as defaultBlogPosts, portfolioItems, translations } from './translations';
import type { FilterState } from './components/PortfolioFilters';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { CONTACT_INFO } from './config';
import { updateMetaTags } from './lib/seo';

// Layout components — siempre cargados (críticos para el LCP)
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SkipLink from './components/SkipLink';
import CookieConsent from './components/CookieConsent';
import PrivacyModal from './components/PrivacyModal';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import { UpdatePrompt, OnlineStatus } from './hooks/useServiceWorker';

// Páginas — lazy loaded para code splitting por ruta
const AboutPage = lazy(() => import('./pages/AboutPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const CVPage = lazy(() => import('./pages/CVPage'));
const BlogPage = lazy(() => import('./pages/BlogPages').then(m => ({ default: m.BlogPage })));
const NoticiasPage = lazy(() => import('./pages/BlogPages').then(m => ({ default: m.NoticiasPage })));
const GuiasPage = lazy(() => import('./pages/GuiasPage'));
const ContactPage = lazy(() => import('./pages/OtherPages').then(m => ({ default: m.ContactPage })));
const BookingPage = lazy(() => import('./pages/OtherPages').then(m => ({ default: m.BookingPage })));
const ServicesPage = lazy(() => import('./pages/OtherPages').then(m => ({ default: m.ServicesPage })));
const AdminPage = lazy(() => import('./pages/OtherPages').then(m => ({ default: m.AdminPage })));

// Componentes flotantes globales — lazy loaded
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'));
const Chatbot = lazy(() => import('./components/Chatbot'));

// ─── Skeleton loaders por tipo de página ─────────────────────────────────
function PageSkeleton({ variant = 'default' }: { variant?: 'default' | 'blog' | 'portfolio' }) {
  if (variant === 'portfolio') {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 animate-pulse" role="status" aria-label="Cargando portafolio...">
        <div className="flex gap-3"><div className="skeleton h-9 w-28 rounded" /><div className="skeleton h-9 w-28 rounded" /><div className="skeleton h-9 w-28 rounded" /></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="bg-white/[0.02] border border-white/5 rounded-sm overflow-hidden">
              <div className="skeleton aspect-video w-full" />
              <div className="p-5 space-y-3">
                <div className="skeleton h-3 w-24 rounded" />
                <div className="skeleton h-5 w-3/4 rounded" />
                <div className="skeleton h-3 w-full rounded" />
                <div className="flex gap-2"><div className="skeleton h-5 w-14 rounded" /><div className="skeleton h-5 w-14 rounded" /></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (variant === 'blog') {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 animate-pulse" role="status" aria-label="Cargando artículos...">
        <div className="flex gap-3"><div className="skeleton h-9 w-28 rounded" /><div className="skeleton h-9 w-28 rounded" /></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <div key={i} className="bg-white/[0.02] border border-white/5 rounded-sm overflow-hidden">
              <div className="skeleton aspect-video w-full" />
              <div className="p-5 space-y-3">
                <div className="skeleton h-3 w-32 rounded" />
                <div className="skeleton h-5 w-full rounded" />
                <div className="skeleton h-3 w-5/6 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center min-h-[50vh] animate-pulse" role="status" aria-label="Cargando...">
      <div className="space-y-4 w-full max-w-md px-8">
        <div className="skeleton h-6 w-3/4 rounded mx-auto" />
        <div className="skeleton h-4 w-full rounded" />
        <div className="skeleton h-4 w-5/6 rounded" />
        <div className="skeleton h-4 w-2/3 rounded" />
      </div>
    </div>
  );
}

export default function App() {
  // ─── Estado global de la aplicación ─────────────────────────────────────
  const [activePage, setActivePage] = useState<PageId>('inicio');
  const [lang, setLang] = useState<'es' | 'en'>(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('lang') : null;
    return (saved === 'es' || saved === 'en') ? saved : 'es';
  });
  const [dimmed, setDimmed] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  // Sub-navegación dentro de páginas
  const [activeCaseStudyId, setActiveCaseStudyId] = useState<string | null>(null);
  const [activeBlogPostId, setActiveBlogPostId] = useState<string | null>(null);

  // Estado del showreel (se mantiene en App para preservarlo entre navegaciones)
  const [reelPlaying, setReelPlaying] = useState(false);
  const [reelMuted, setReelMuted] = useState(true);

  // Posts del blog (mergeados con Firebase al cargar)
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(defaultBlogPosts);

  // Filtros del portafolio
  const [portfolioFilters, setPortfolioFilters] = useState<FilterState>({
    category: 'all',
    year: 'Todos',
    status: 'all',
    searchTerm: '',
  });

  // Firebase no se carga en inicio — solo en AdminPanel (lazy load)

  // Ref para el handler de popstate (evita stale closure)
  const blogPostsRef = useRef(blogPosts);
  blogPostsRef.current = blogPosts;

  // ─── Persistir idioma en localStorage ─────────────────────────────────────
  const handleSetLang = (next: 'es' | 'en') => {
    setLang(next);
    localStorage.setItem('lang', next);
  };

  // ─── Sincronizar URL con estado en mount y popstate ───────────────────────
  useEffect(() => {
    const handlePopState = () => {
      const parts = window.location.pathname.split('/').filter(Boolean);

      if (parts.length === 2 && (parts[0] === 'blog' || parts[0] === 'noticias' || parts[0] === 'guias')) {
        const post = blogPostsRef.current.find(p => p.slug === parts[1]);
        if (post) {
          setActivePage(parts[0] as PageId);
          setActiveBlogPostId(post.id);
          setActiveCaseStudyId(null);
          return;
        }
      }

      const pageStr = parts[0] || 'inicio';
      const validPages: PageId[] = [
        'inicio', 'sobre-mi', 'portafolio', 'cv', 'noticias',
        'blog', 'guias', 'contacto', 'reservas', 'servicios', 'admin',
      ];
      if (validPages.includes(pageStr as PageId)) {
        setActivePage(pageStr as PageId);
        setActiveCaseStudyId(null);
        setActiveBlogPostId(null);
      }
    };

    handlePopState();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // ─── Accesibilidad: sincronizar lang con el documento ────────────────────
  useEffect(() => {
    document.documentElement.lang = lang === 'es' ? 'es-BO' : 'en';
  }, [lang]);

  // ─── Fix Edge black screen al volver de otra pestaña ─────────────────────
  useEffect(() => {
    const handleVisibility = () => {
      if (!document.hidden) {
        // Forzar reflow para restaurar contexto GPU perdido
        document.body.style.transform = 'translateZ(0)';
        requestAnimationFrame(() => {
          document.body.style.transform = '';
        });
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  // ─── SEO: actualizar meta tags en cada cambio de página/idioma ───────────
  useEffect(() => {
    updateMetaTags(activePage, lang);
  }, [activePage, lang]);

  // ─── Helpers de navegación ────────────────────────────────────────────────
  const t = translations[lang];

  const handleNavToTab = (pageId: PageId) => {
    setActivePage(pageId);
    window.history.pushState(null, '', pageId === 'inicio' ? '/' : `/${pageId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveCaseStudyId(null);
    setActiveBlogPostId(null);
  };

  const handleArticleClick = (post: BlogPost, page: PageId) => {
    setActivePage(page);
    setActiveBlogPostId(post.id);
    window.history.pushState(null, '', `/${page}/${post.slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveCaseStudyId(null);
  };

  // ─── Renderizar página activa con transiciones ────────────────────────────
  const renderPage = () => {
    const pageContent = (() => {
      switch (activePage) {
        case 'inicio':
          return (
            <HomePage
              lang={lang}
              t={t}
              blogPosts={blogPosts}
              portfolioItems={portfolioItems}
              handleNavToTab={handleNavToTab}
              handleArticleClick={handleArticleClick}
              reelPlaying={reelPlaying}
              setReelPlaying={setReelPlaying}
              reelMuted={reelMuted}
              setReelMuted={setReelMuted}
            />
          );
        case 'sobre-mi':
          return <AboutPage lang={lang} t={t} />;
        case 'portafolio':
          return (
            <PortfolioPage
              lang={lang}
              t={t}
              activeCaseStudyId={activeCaseStudyId}
              setActiveCaseStudyId={setActiveCaseStudyId}
              portfolioFilters={portfolioFilters}
              setPortfolioFilters={setPortfolioFilters}
            />
          );
        case 'cv':
          return <CVPage lang={lang} t={t} />;
        case 'blog':
          return (
            <BlogPage
              lang={lang}
              t={t}
              blogPosts={blogPosts}
              activeBlogPostId={activeBlogPostId}
              setActiveBlogPostId={setActiveBlogPostId}
              handleArticleClick={handleArticleClick}
            />
          );
        case 'noticias':
          return (
            <NoticiasPage
              lang={lang}
              t={t}
              blogPosts={blogPosts}
              activeBlogPostId={activeBlogPostId}
              setActiveBlogPostId={setActiveBlogPostId}
              handleArticleClick={handleArticleClick}
            />
          );
        case 'guias':
          return (
            <GuiasPage
              lang={lang}
              t={t}
              blogPosts={blogPosts}
              activeBlogPostId={activeBlogPostId}
              setActiveBlogPostId={setActiveBlogPostId}
              handleArticleClick={handleArticleClick}
            />
          );
        case 'contacto':
          return <ContactPage lang={lang} t={t} />;
        case 'reservas':
          return <BookingPage lang={lang} t={t} />;
        case 'servicios':
          return (
            <ServicesPage
              lang={lang}
              t={t}
              onContact={() => handleNavToTab('contacto')}
              onBooking={() => handleNavToTab('reservas')}
            />
          );
        case 'admin':
          return <AdminPage lang={lang} onBack={() => handleNavToTab('inicio')} />;
        default:
          return <NotFoundPage lang={lang} onHome={() => handleNavToTab('inicio')} />;
      }
    })();

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={activePage}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          {pageContent}
        </motion.div>
      </AnimatePresence>
    );
  };

  const pageSkeleton = activePage === 'portafolio' ? 'portfolio' : (activePage === 'blog' || activePage === 'noticias' || activePage === 'guias' ? 'blog' : 'default');

  return (
    <div className={`min-h-screen bg-[#050505] font-sans text-stone-300 selection:bg-gold selection:text-black flex flex-col justify-between transition-all duration-500 ${dimmed ? 'cinema-dim' : ''}`}>

      {/* Skip Link para accesibilidad */}
      <SkipLink lang={lang} />

      {/* Sticky Top Header / Navigation */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        lang={lang}
        setLang={handleSetLang}
        t={t}
        dimmed={dimmed}
        setDimmed={setDimmed}
      />

      {/* Main Page Area */}
      <main id="main-content" className="flex-grow" tabIndex={-1}>
        <Suspense fallback={<PageSkeleton variant={pageSkeleton} />}>
          {renderPage()}
        </Suspense>
      </main>

      {/* Persistent Footer */}
      <Footer setActivePage={setActivePage} lang={lang} t={t} onOpenPrivacy={() => setShowPrivacy(true)} />

      {/* Componentes flotantes globales */}
      <Suspense fallback={null}>
        <WhatsAppButton phoneNumber={CONTACT_INFO.phoneNumber} lang={lang} />
      </Suspense>
      <Suspense fallback={null}>
        <Chatbot lang={lang} t={t} onNavigate={handleNavToTab} />
      </Suspense>

      {/* PWA */}
      <OnlineStatus lang={lang} />
      <UpdatePrompt />

      {/* Vercel Analytics & Speed Insights */}
      <Analytics />
      <SpeedInsights />

      {/* Cookie Consent Banner (GDPR + Ley 164) */}
      <CookieConsent lang={lang} onOpenPrivacy={() => setShowPrivacy(true)} />

      {/* Privacy & Cookies Policy Modal */}
      {showPrivacy && (
        <PrivacyModal lang={lang} onClose={() => setShowPrivacy(false)} />
      )}

    </div>
  );
}
