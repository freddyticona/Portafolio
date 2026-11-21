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
 *  - src/pages/BlogPages.tsx     → /blog
 *  - src/pages/OtherPages.tsx    → /contacto, /reservas, /servicios, /admin
 */

import React, { useState, useEffect, useRef, useCallback, lazy, Suspense } from 'react';
import { PageId, BlogPost, PortfolioItem, QuoteRequestContext } from './types';
import { portfolioItems, translations } from './translations';
import { loadBlogPosts } from './data/loader';
import type { FilterState } from './components/PortfolioFilters';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { CONTACT_INFO } from './config';
import { updateMetaTags } from './lib/seo';
import { PortfolioEvents } from './lib/analytics';
import { useGsapAnimations } from './hooks/useGsapAnimations';
import { useScrollTracking } from './hooks/useScrollTracking';
import CustomCursor from './components/CustomCursor';
import ScrollProgressBtn from './components/ScrollProgressBtn';

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
const GuiasPage = lazy(() => import('./pages/GuiasPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));

const Eclipse2026Page = lazy(() => import('./pages/Eclipse2026Page'));
const IranReportPage = lazy(() => import('./pages/IranReportPage'));
const GazaReportPage = lazy(() => import('./pages/GazaReportPage'));
const UkraineReportPage = lazy(() => import('./pages/UkraineReportPage'));
const MalvinasReportPage = lazy(() => import('./pages/MalvinasReportPage'));

const ContactPage = lazy(() => import('./pages/OtherPages').then(m => ({ default: m.ContactPage })));
const BookingPage = lazy(() => import('./pages/OtherPages').then(m => ({ default: m.BookingPage })));
const ServicesPage = lazy(() => import('./pages/OtherPages').then(m => ({ default: m.ServicesPage })));
const AdminPage = lazy(() => import('./pages/OtherPages').then(m => ({ default: m.AdminPage })));

// Componentes flotantes globales — lazy loaded
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'));
const Chatbot = lazy(() => import('./components/Chatbot'));

// ─── Rutas ───────────────────────────────────────────────────────────────
// Lista de secciones que la SPA reconoce. Se usa para resolver la ruta al
// montar (evita el "flash" de la home cuando se entra directo a un artículo
// o a /servicios) y para validar el popstate.
const VALID_PAGES: PageId[] = [
  'inicio', 'sobre-mi', 'portafolio', 'cv',
  'blog', 'guias', 'galeria', 'contacto', 'reservas', 'servicios', 'admin',
  'eclipse-2026', 'reportaje-iran-furia-epica', 'reportaje-gaza-desarme', 'reportaje-ucrania-estancamiento', 'reportaje-malvinas-historia',
];

/** Resuelve la sección de la SPA a partir del pathname actual. */
function pageFromPath(pathname: string): PageId {
  const parts = pathname.split('/').filter(Boolean);
  const pageStr = parts[0] || 'inicio';
  return VALID_PAGES.includes(pageStr as PageId) ? (pageStr as PageId) : 'inicio';
}

/**
 * ¿La ruta actual es el detalle de un artículo (/blog/slug, /guias/slug)?
 * En ese caso el detalle actualiza su propio <title>, canonical y JSON-LD:
 * si el shell lo hiciera, pondría el título de la sección y pisaría el del
 * artículo (y mediría una vista con el título equivocado).
 */
function isArticlePath(pathname: string = window.location.pathname): boolean {
  return /^\/(blog|guias)\/[^/]+\/?$/.test(pathname);
}

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
  const [activePage, setActivePage] = useState<PageId>(() =>
    typeof window !== 'undefined' ? pageFromPath(window.location.pathname) : 'inicio'
  );
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

  // Servicio preseleccionado que se traslada al formulario de cotización
  const [quoteRequest, setQuoteRequest] = useState<QuoteRequestContext | null>(null);
  const clearQuoteRequest = useCallback(() => setQuoteRequest(null), []);

  // Posts del blog — se cargan en un chunk aparte para no bloquear el primer render
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [postsReady, setPostsReady] = useState(false);

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

  // ─── Carga diferida del contenido editorial (624 artículos) ───────────────
  useEffect(() => {
    let alive = true;

    const load = async () => {
      try {
        const posts = await loadBlogPosts();
        if (!alive) return;
        setBlogPosts(posts);
      } catch (err) {
        console.error('No se pudo cargar la base de artículos', err);
      }
      if (alive) setPostsReady(true);
    };

    load();

    return () => { alive = false; };
  }, []);

  // ─── Persistir idioma en localStorage ─────────────────────────────────────
  const handleSetLang = (next: 'es' | 'en') => {
    setLang(next);
    localStorage.setItem('lang', next);
  };

  // ─── Sincronizar URL con estado en mount y popstate ───────────────────────
  useEffect(() => {
    const handlePopState = () => {
      const parts = window.location.pathname.split('/').filter(Boolean);

      if (parts.length === 2 && (parts[0] === 'blog' || parts[0] === 'guias')) {
        const post = blogPostsRef.current.find(p => p.slug === parts[1]);
        if (post) {
          setActivePage(parts[0] as PageId);
          setActiveBlogPostId(post.id);
          setActiveCaseStudyId(null);
          return;
        }
      }

      const pageStr = parts[0] || 'inicio';
      if (VALID_PAGES.includes(pageStr as PageId)) {
        setActivePage(pageStr as PageId);
        setActiveCaseStudyId(null);
        setActiveBlogPostId(null);
      }
    };

    handlePopState();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [postsReady]);

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
    // En el detalle de un artículo manda el componente de la página: él pone
    // el <title> del artículo, su canonical y su JSON-LD. Si el shell lo
    // actualizara aquí, sobreescribiría el título del artículo con el de la
    // sección y GA4 registraría la vista con el título incorrecto.
    if (isArticlePath()) return;

    updateMetaTags(activePage, lang);
  }, [activePage, lang]);

  // ─── Medición: profundidad de lectura + visita a servicios ────────────────
  useScrollTracking(window.location.pathname || '/');
  useEffect(() => {
    if (activePage === 'servicios') PortfolioEvents.viewServices();
  }, [activePage]);

  // ─── GSAP Animations (scroll reveal, counters, etc.) ────────────────────
  useGsapAnimations();

  // ─── Helpers de navegación ────────────────────────────────────────────────
  const t = translations[lang];

  const handleNavToTab = (pageId: PageId) => {
    setActivePage(pageId);
    window.history.pushState(null, '', pageId === 'inicio' ? '/' : `/${pageId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveCaseStudyId(null);
    setActiveBlogPostId(null);
  };

  const handleCatalogo = () => {
    window.history.pushState(null, '', '/portafolio?seccion=diseno');
    window.dispatchEvent(new CustomEvent('portafolio:seccion', { detail: 'diseno' }));
    setActivePage('portafolio');
    setActiveCaseStudyId(null);
    setActiveBlogPostId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const primaryRoute = (post: BlogPost): PageId => {
    if (post.categoryEs === 'Guías y Trámites') return 'guias';
    return 'blog';
  };

  const handleArticleClick = (post: BlogPost, page?: PageId) => {
    const route = page || primaryRoute(post);
    setActivePage(route);
    setActiveBlogPostId(post.id);
    window.history.pushState(null, '', `/${route}/${post.slug}`);
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
        case 'galeria':
          return <GalleryPage lang={lang} t={t} />;
        case 'eclipse-2026':
          return (
            <Eclipse2026Page
              lang={lang}
              t={t}
              blogPosts={blogPosts}
              handleArticleClick={handleArticleClick}
              onBackToNews={() => handleNavToTab('blog')}
            />
          );
        case 'reportaje-iran-furia-epica':
          return (
            <IranReportPage
              lang={lang}
              onBackToNews={() => handleNavToTab('blog')}
              onNavigate={(p) => handleNavToTab(p)}
            />
          );
        case 'reportaje-gaza-desarme':
          return (
            <GazaReportPage
              lang={lang}
              onBackToNews={() => handleNavToTab('blog')}
              onNavigate={(p) => handleNavToTab(p)}
            />
          );
        case 'reportaje-ucrania-estancamiento':
          return (
            <UkraineReportPage
              lang={lang}
              onBackToNews={() => handleNavToTab('blog')}
              onNavigate={(p) => handleNavToTab(p)}
            />
          );
        case 'reportaje-malvinas-historia':
          return (
            <MalvinasReportPage
              lang={lang}
              onBackToNews={() => handleNavToTab('blog')}
              onNavigate={(p) => handleNavToTab(p)}
            />
          );
        case 'contacto':
          return (
            <ContactPage
              lang={lang}
              t={t}
              quoteRequest={quoteRequest}
              onQuoteConsumed={clearQuoteRequest}
            />
          );
        case 'reservas':
          return <BookingPage lang={lang} t={t} />;
        case 'servicios':
          return (
            <ServicesPage
              lang={lang}
              t={t}
              onContact={(context?: QuoteRequestContext) => {
                setQuoteRequest(context ?? null);
                handleNavToTab('contacto');
              }}
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
      <div className="page-transition" key={activePage}>
        {pageContent}
      </div>
    );
  };

  const pageSkeleton = activePage === 'portafolio' ? 'portfolio' : (activePage === 'blog' || activePage === 'guias' ? 'blog' : 'default');

  return (
    <div className={`min-h-screen bg-[#050505] font-sans text-stone-300 selection:bg-gold selection:text-black flex flex-col justify-between transition-all duration-500 ${dimmed ? 'cinema-dim' : ''}`}>

      {/* Skip Link para accesibilidad */}
      <SkipLink lang={lang} />

      {/* Sticky Top Header / Navigation */}
        <Navbar
          activePage={activePage}
          handleNavToTab={handleNavToTab}
          onCatalogo={handleCatalogo}
        lang={lang}
        setLang={handleSetLang}
        t={t}
        dimmed={dimmed}
        setDimmed={setDimmed}
      />

      {/* Main Page Area */}
      <main id="main-content" className="flex-grow" tabIndex={-1}>
        <Suspense fallback={<PageSkeleton variant={pageSkeleton} />}>
          {!postsReady && (activePage === 'blog' || activePage === 'guias')
            ? <PageSkeleton variant="blog" />
            : renderPage()}
        </Suspense>
      </main>

      {/* Persistent Footer */}
      <Footer handleNavToTab={handleNavToTab} lang={lang} t={t} onOpenPrivacy={() => setShowPrivacy(true)} />

      {/* Componentes flotantes globales */}
      <Suspense fallback={null}>
        <WhatsAppButton phoneNumber={CONTACT_INFO.phoneNumber} lang={lang} />
      </Suspense>
      <Suspense fallback={null}>
        <Chatbot lang={lang} t={t} onNavigate={handleNavToTab} />
      </Suspense>

      {/* Efectos visuales globales */}
      <CustomCursor />
      <ScrollProgressBtn />

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
