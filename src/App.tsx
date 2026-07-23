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
import { PageId, BlogPost } from './types';
import { blogPosts as defaultBlogPosts, translations } from './translations';
import type { FilterState } from './components/PortfolioFilters';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { CONTACT_INFO } from './config';
import { updateMetaTags } from './lib/seo';

// Layout components — siempre cargados (críticos para el LCP)
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SkipLink from './components/SkipLink';
import { UpdatePrompt, OnlineStatus } from './hooks/useServiceWorker';

// Páginas — lazy loaded para code splitting por ruta
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const CVPage = lazy(() => import('./pages/CVPage'));
const BlogPage = lazy(() => import('./pages/BlogPages').then(m => ({ default: m.BlogPage })));
const NoticiasPage = lazy(() => import('./pages/BlogPages').then(m => ({ default: m.NoticiasPage })));
const ContactPage = lazy(() => import('./pages/OtherPages').then(m => ({ default: m.ContactPage })));
const BookingPage = lazy(() => import('./pages/OtherPages').then(m => ({ default: m.BookingPage })));
const ServicesPage = lazy(() => import('./pages/OtherPages').then(m => ({ default: m.ServicesPage })));
const AdminPage = lazy(() => import('./pages/OtherPages').then(m => ({ default: m.AdminPage })));

// Componentes flotantes globales — lazy loaded
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'));
const GlobalSearch = lazy(() => import('./components/GlobalSearch'));
const Chatbot = lazy(() => import('./components/Chatbot'));

/**
 * Fallback de carga universal — se muestra mientras Suspense espera
 */
function LoadingFallback() {
  return (
    <div className="flex items-center justify-center p-8" role="status">
      <div
        className="skeleton w-full h-32 rounded"
        aria-busy="true"
        aria-label="Cargando contenido..."
      />
    </div>
  );
}

export default function App() {
  // ─── Estado global de la aplicación ─────────────────────────────────────
  const [activePage, setActivePage] = useState<PageId>('inicio');
  const [lang, setLang] = useState<'es' | 'en'>('es');

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

  // ─── Cargar posts de Firebase (dynamic import para reducir bundle) ────────
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { db: firestoreDb } = await import('./lib/firebase');
        const { collection, getDocs } = await import('firebase/firestore');
        const querySnapshot = await getDocs(collection(firestoreDb, 'posts'));

        const firebasePosts: BlogPost[] = [];
        querySnapshot.forEach((doc) => {
          firebasePosts.push({ id: doc.id, ...doc.data() } as BlogPost);
        });

        if (firebasePosts.length > 0) {
          const defaultSlugs = new Set(defaultBlogPosts.map(p => p.slug));
          const merged = [...defaultBlogPosts];
          for (const fp of firebasePosts) {
            if (!defaultSlugs.has(fp.slug)) merged.push(fp);
          }
          merged.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
          setBlogPosts(merged);
        }
      } catch (e) {
        console.error('Error loading blog posts from Firebase:', e);
      }
    };

    fetchPosts();
  }, []);

  // Ref para el handler de popstate (evita stale closure)
  const blogPostsRef = useRef(blogPosts);
  blogPostsRef.current = blogPosts;

  // ─── Sincronizar URL con estado en mount y popstate ───────────────────────
  useEffect(() => {
    const handlePopState = () => {
      const parts = window.location.pathname.split('/').filter(Boolean);

      if (parts.length === 2 && (parts[0] === 'blog' || parts[0] === 'noticias')) {
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
        'blog', 'contacto', 'reservas', 'servicios', 'admin',
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

  // ─── Renderizar página activa ─────────────────────────────────────────────
  const renderPage = () => {
    switch (activePage) {
      case 'inicio':
        return (
          <HomePage
            lang={lang}
            t={t}
            blogPosts={blogPosts}
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
        return null;
    }
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
      <main id="main-content" className="flex-grow" tabIndex={-1}>
        <Suspense fallback={<LoadingFallback />}>
          {renderPage()}
        </Suspense>
      </main>

      {/* Persistent Footer */}
      <Footer setActivePage={setActivePage} lang={lang} t={t} />

      {/* Componentes flotantes globales */}
      <Suspense fallback={null}>
        <WhatsAppButton phoneNumber={CONTACT_INFO.phoneNumber} lang={lang} />
      </Suspense>
      <Suspense fallback={null}>
        <GlobalSearch lang={lang} onNavigate={handleNavToTab} />
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

    </div>
  );
}
