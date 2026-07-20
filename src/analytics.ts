/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * MÓDULO DE GOOGLE ANALYTICS 4
 *
 * Este módulo proporciona funciones para rastrear eventos y vistas de página
 * en Google Analytics 4.
 *
 * CONFIGURACIÓN:
 * 1. Crea una cuenta en https://analytics.google.com
 * 2. Obtén tu Measurement ID (formato: G-XXXXXXXXXX)
 * 3. Reemplaza GA_MEASUREMENT_ID abajo
 * 4. Llama a initGA() en tu componente principal
 */

// ==========================================
// CONFIGURACIÓN
// ==========================================

/**
 * Tu Measurement ID de Google Analytics 4
 * Formato: G-XXXXXXXXXX
 *
 * TODO: Reemplaza con tu ID real de GA4
 */
export const GA_MEASUREMENT_ID = 'G-N463NRKM4J'; // ID de medición de Freddy Ticona

/**
 * Habilitar/deshabilitar Google Analytics
 * Útil para desarrollo o pruebas
 */
export const GA_ENABLED = true;

// ==========================================
// TIPOS
// ==========================================

interface GAEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  nonInteraction?: boolean;
}

interface GAPageView {
  page_path: string;
  page_title: string;
  page_location?: string;
}

// ==========================================
// FUNCIONES PRINCIPALES
// ==========================================

/**
 * Inicializa Google Analytics 4
 * Debe llamarse una vez al cargar la aplicación
 */
export const initGA = (): void => {
  if (typeof window === 'undefined') return;

  // Verificar si ya está inicializado
  if ((window as any).GA_INITIALIZED) {
    return;
  }

  // Verificar si GA está habilitado
  if (!GA_ENABLED || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
    console.warn('Google Analytics no está configurado. Reemplaza GA_MEASUREMENT_ID con tu ID real.');
    return;
  }

  try {
    // Agregar script de gtag.js
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Configurar gtag
    const configScript = document.createElement('script');
    configScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        'anonymize_ip': true,
        'send_page_view': false
      });
    `;
    document.head.appendChild(configScript);

    (window as any).GA_INITIALIZED = true;
    console.log('✅ Google Analytics inicializado');
  } catch (error) {
    console.error('Error inicializando Google Analytics:', error);
  }
};

/**
 * Rastrea una vista de página
 * Úsalo al navegar entre secciones
 */
export const trackPageView = (path: string, title?: string): void => {
  if (!isGtagAvailable()) return;

  try {
    const pageView: GAPageView = {
      page_path: path,
      page_title: title || document.title,
      page_location: window.location.href
    };

    (window as any).gtag('event', 'page_view', pageView);
  } catch (error) {
    console.error('Error rastreando vista de página:', error);
  }
};

/**
 * Rastrea un evento personalizado
 */
export const trackEvent = (event: GAEvent): void => {
  if (!isGtagAvailable()) return;

  try {
    (window as any).gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
      non_interaction: event.nonInteraction || false
    });
  } catch (error) {
    console.error('Error rastreando evento:', error);
  }
};

/**
 * Rastrea clics en enlaces externos
 */
export const trackOutboundLink = (url: string): void => {
  if (!isGtagAvailable()) return;

  try {
    (window as any).gtag('event', 'click', {
      event_category: 'outbound',
      event_label: url,
      transport_type: 'beacon'
    });
  } catch (error) {
    console.error('Error rastreando enlace saliente:', error);
  }
};

/**
 * Rastrea descargas de archivos
 */
export const trackDownload = (filename: string, category: string = 'download'): void => {
  trackEvent({
    action: 'download',
    category: category,
    label: filename
  });
};

/**
 * Rastrea visualización de videos
 */
export const trackVideoPlay = (videoTitle: string): void => {
  trackEvent({
    action: 'play',
    category: 'video',
    label: videoTitle
  });
};

/**
 * Rastrea envíos de formulario
 */
export const trackFormSubmit = (formName: string): void => {
  trackEvent({
    action: 'submit',
    category: 'form',
    label: formName,
    nonInteraction: false
  });
};

/**
 * Rastrea scrolls profundos (engagement)
 */
export const trackScrollDepth = (depth: '25%' | '50%' | '75%' | '100%'): void => {
  trackEvent({
    action: 'scroll',
    category: 'engagement',
    label: depth,
    nonInteraction: true
  });
};

// ==========================================
// UTILIDADES
// ==========================================

/**
 * Verifica si gtag está disponible
 */
function isGtagAvailable(): boolean {
  if (typeof window === 'undefined') return false;
  if (!GA_ENABLED) return false;
  if (GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') return false;

  const gtag = (window as any).gtag;
  return typeof gtag === 'function';
}

/**
 * Configura el rastreo de scroll depth
 * Llama esto una vez para rastrear cuánto scroll hace el usuario
 */
export const setupScrollTracking = (): void => {
  if (typeof window === 'undefined') return;

  let tracked25 = false;
  let tracked50 = false;
  let tracked75 = false;
  let tracked100 = false;

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const percentage = (scrolled / documentHeight) * 100;

    if (!tracked25 && percentage >= 25) {
      trackScrollDepth('25%');
      tracked25 = true;
    }
    if (!tracked50 && percentage >= 50) {
      trackScrollDepth('50%');
      tracked50 = true;
    }
    if (!tracked75 && percentage >= 75) {
      trackScrollDepth('75%');
      tracked75 = true;
    }
    if (!tracked100 && percentage >= 100) {
      trackScrollDepth('100%');
      tracked100 = true;
      window.removeEventListener('scroll', handleScroll);
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
};

/**
 * Rastrea errores de JavaScript
 * Útil para monitorear problemas en producción
 */
export const trackError = (error: Error, context?: string): void => {
  trackEvent({
    action: 'javascript_error',
    category: 'error',
    label: `${context || 'unknown'}: ${error.message}`
  });
};

// ==========================================
// EJEMPLOS DE USO
// ==========================================

/**
 * Ejemplos de cómo usar las funciones de Analytics:
 *
 * // En tu componente principal (App.tsx o main.tsx):
 * import { initGA, trackPageView, setupScrollTracking } from './analytics';
 *
 * useEffect(() => {
 *   initGA();
 *   setupScrollTracking();
 * }, []);
 *
 * // Para rastrear navegación:
 * useEffect(() => {
 *   trackPageView(location.pathname);
 * }, [location]);
 *
 * // Para rastrear clics en enlaces de redes sociales:
 * <a
 *   href={linkedinUrl}
 *   onClick={() => trackOutboundLink(linkedinUrl)}
 * >
 *   LinkedIn
 * </a>
 *
 * // Para rastrear visualización de video:
 * <YouTubeVideo
 *   onPlay={() => trackVideoPlay('La Estrella - Showreel')}
 * />
 *
 * // Para rastrear envío de formulario:
 * <ContactForm
 *   onSubmit={() => trackFormSubmit('contacto')}
 * />
 *
 * // Para rastrear descarga de CV:
 * <button
 *   onClick={() => trackDownload('cv-freddy-ticona.pdf', 'cv')}
 * >
 *   Descargar CV
 * </button>
 */
