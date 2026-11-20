/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Google Analytics 4 Integration
 *
 * Para usar:
 * 1. Reemplaza 'G-XXXXXXXXXX' con tu Measurement ID real de GA4
 * 2. Ve a https://analytics.google.com para obtener tu ID
 */

export const GA_MEASUREMENT_ID = 'G-XRW2HZHB69'; // Freddy Ticona Portafolio GA4

/**
 * Última combinación ruta+título enviada como page_view.
 * Evita duplicados cuando una navegación cambia de sección y de artículo.
 */
let lastPageViewKey = '';

/**
 * Inicializar Google Analytics 4
 */
export const initGA = () => {
  // Solo en producción
  if (import.meta.env.DEV) {
    console.log('[GA] Development mode - GA4 disabled');
    return;
  }

  // Las pruebas locales (vite preview / http.server) no deben contar como
  // visitas reales en GA4: contaminan el informe con rutas de desarrollo.
  if (typeof window !== 'undefined' && ['localhost', '127.0.0.1', '0.0.0.0'].includes(window.location.hostname)) {
    console.log('[GA] Localhost - GA4 disabled');
    return;
  }

  try {
    // Cargar gtag.js
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Configurar gtag
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).gtag = function() {
      (window as any).dataLayer.push(arguments);
    };

    (window as any).gtag('js', new Date());
    // La navegación es SPA (pushState). Desactivamos el page_view automático
    // de Enhanced Measurement: con él, cada vista interna se registraba con el
    // título de la home (134 vistas de la home con 4 usuarios en el informe del
    // 22/10 al 18/11) porque React actualiza el <title> después del pushState.
    // En su lugar enviamos un page_view manual con el título ya correcto.
    (window as any).gtag('config', GA_MEASUREMENT_ID, {
      send_page_view: false,
      page_location: window.location.href,
      page_path: window.location.pathname || '/',
      page_title: document.title
    });

    // La vista de página NO se envía aquí: la emite src/lib/seo.ts en el
    // momento en que el <title> de la ruta ya es el correcto. Enviarla en
    // este punto registraría el título por defecto del index.html.

    console.log('[GA] Google Analytics 4 inicializado');
  } catch (error) {
    console.error('[GA] Error inicializando GA4:', error);
  }
};

/**
 * Rastrear vista de página
 *
 * Deduplica por ruta+título: una navegación que cambia a la vez de sección y
 * de artículo no debe generar dos page_view.
 */
export const trackPageView = (path: string, title: string) => {
  if (import.meta.env.DEV) return;
  if (typeof window === 'undefined') return;

  // Si gtag todavía no está listo (script en vuelo) no se marca la clave como
  // enviada: así el siguiente intento no se descarta por el dedupe.
  if (typeof (window as any).gtag !== 'function') return;

  const key = `${path}|${title}`;
  if (key === lastPageViewKey) return;
  lastPageViewKey = key;

  try {
    (window as any).gtag('event', 'page_view', {
      page_path: path,
      page_title: title,
      page_location: window.location.href
    });
  } catch (error) {
    console.error('[GA] Error tracking page view:', error);
  }
};

/**
 * Rastrear eventos personalizados
 */
export const trackEvent = (
  eventName: string,
  parameters?: {
    [key: string]: string | number | boolean;
  }
) => {
  if (import.meta.env.DEV) {
    console.log('[GA] Event:', eventName, parameters);
    return;
  }

  try {
    (window as any).gtag('event', eventName, parameters);
  } catch (error) {
    console.error('[GA] Error tracking event:', error);
  }
};

/**
 * Eventos específicos para el portafolio
 */
export const PortfolioEvents = {
  // Contacto
  contactFormSubmit: () => trackEvent('generate_lead', {
    form_name: 'Contact Form',
    category: 'Contact'
  }),

  whatsappClick: () => trackEvent('contact', {
    method: 'whatsapp',
    category: 'Contact'
  }),

  emailClick: () => trackEvent('contact', {
    method: 'email',
    category: 'Contact'
  }),

  phoneClick: () => trackEvent('contact', {
    method: 'phone',
    category: 'Contact'
  }),

  // Portafolio
  portfolioView: (projectTitle: string) => trackEvent('view_item', {
    item_name: projectTitle,
    category: 'Portfolio'
  }),

  portfolioFilter: (filter: string) => trackEvent('filter_portfolio', {
    filter_type: filter,
    category: 'Portfolio'
  }),

  // Blog
  blogPostView: (postTitle: string) => trackEvent('view_item', {
    item_name: postTitle,
    category: 'Blog'
  }),

  blogPostShare: (platform: string, postTitle: string) => trackEvent('share', {
    method: platform,
    content_type: 'blog_post',
    item_id: postTitle,
    category: 'Blog'
  }),

  // Suscripción al blog (lead Email)
  newsletterSubscribe: (source: string) => trackEvent('generate_lead', {
    form_name: 'Newsletter',
    category: 'Newsletter',
    label: source
  }),

  // Interest in a specific service (click on a service card CTA)
  selectService: (serviceName: string, price?: number) => trackEvent('select_service', {
    item_name: serviceName,
    ...(price ? { value: price, currency: 'BOB' } : {}),
    category: 'Services'
  }),

  // Depth of scroll on the current page (engagement signal)
  scrollDepth: (percent: number, pagePath: string) => trackEvent('scroll_depth', {
    percent,
    page_path: pagePath,
    category: 'Engagement'
  }),

  // Visit to the services page (top of the funnel)
  viewServices: () => trackEvent('view_services', {
    category: 'Services'
  }),

  // Descargas
  cvDownload: () => trackEvent('file_download', {
    file_name: 'CV_Freddy_Ticona',
    file_extension: 'PDF',
    category: 'Download'
  }),

  // Navegación
  navClick: (page: string) => trackEvent('navigation', {
    destination: page,
    category: 'Navigation'
  }),

  languageToggle: (lang: 'es' | 'en') => trackEvent('language_change', {
    language: lang,
    category: 'Settings'
  }),

  // Búsqueda
  searchQuery: (query: string) => trackEvent('search', {
    search_term: query,
    category: 'Search'
  }),

  // Mapa
  mapLocationClick: (location: string) => trackEvent('map_interaction', {
    location_name: location,
    category: 'Map'
  })
};

/**
 * Rastrear errores
 */
export const trackError = (error: Error, context?: string) => {
  trackEvent('exception', {
    description: error.message,
    fatal: false,
    context: context || 'unknown'
  });
};

/**
 * Types para TypeScript
 */
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
