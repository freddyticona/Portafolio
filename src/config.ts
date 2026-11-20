/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * CONFIGURACIÓN DEL PORTAFOLIO
 *
 * Este archivo centraliza todos los datos configurables del sitio.
 * Actualiza estos valores según necesites.
 */

import servicesPricingData from './data/servicesPricing.json';

// ==========================================
// INFORMACIÓN DE CONTACTO
// ==========================================

export const CONTACT_INFO = {
  // Número de teléfono/WhatsApp (con código de país)
  // Puedes usar cualquiera de tus dos números:
  phoneNumber: '+591 62408420',  // O alternativamente: +591 70139357

  // Correo electrónico
  email: 'freddyticona62@gmail.com',

  // Ubicación
  location: 'La Paz, Bolivia',

  // Coordenadas para el mapa (opcional, formato: S xx°xx'xx" / W xx°xx'xx")
  coordinates: 'S 16°30\'0" / W 68°9\'0"'
} as const;

// ==========================================
// REDES SOCIALES
// ==========================================

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/freddyticonaguzman',
  x: 'https://x.com/Freddy_21407'
} as const;

// ==========================================
// FORMULARIO DE CONTACTO (Web3Forms)
// ==========================================

export const CONTACT_FORM = {
  // Access key de Web3Forms (desde variable de entorno)
  accessKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '',

  // Asunto del correo
  subject: 'Contacto Portafolio Profesional',

  // Nombre del remitente
  fromName: 'Portafolio Freddy Ticona'
} as const;

// ==========================================
// VIDEOS DE YOUTUBE (Showreel y Portafolio)
// ==========================================

/**
 * Videos de YouTube para el showreel y portafolio
 * Formato: ID del video de YouTube (ejemplo: 'dQw4w9WgXcQ' para https://www.youtube.com/watch?v=dQw4w9WgXcQ)
 *
 * TODO: Reemplaza estos IDs con los videos reales de tu showreel y proyectos
 */
export const YOUTUBE_VIDEOS = {
  // Videos reales del portafolio
  videos: [
    {
      id: '6CL4rVpVOYU',
      title: 'Showreel Principal',
      description: 'Video principal del portafolio'
    },
    {
      id: 'UmimDWaK61I',
      title: 'Proyecto 2',
      description: 'Segundo video del portafolio'
    },
    {
      id: 'INagReojtOM',
      title: 'Proyecto 3',
      description: 'Tercer video del portafolio'
    }
  ]
} as const;

// ==========================================
// SEO Y METADATOS
// ==========================================

export const SITE_CONFIG = {
  domain: 'https://freddydev.net',
  name: 'Freddy Dev',
  title: 'Freddy Ticona Guzmán | Camarógrafo y Realizador Audiovisual'
} as const;

export const SEO = {
  title: 'Freddy Ticona Guzmán | Camarógrafo y Realizador Audiovisual - La Paz, Bolivia',
  description: 'Portafolio profesional de Freddy Ticona Guzmán, camarógrafo y realizador audiovisual con más de 15 años de experiencia en televisión, documentales y cobertura periodística en Bolivia.',
  keywords: ['camarógrafo', 'realizador audiovisual', 'video editor', 'documentales', 'Bolivia', 'La Paz', 'televisión', 'periodismo']
} as const;

// ==========================================
// CONFIGURACIÓN DE LA APLICACIÓN
// ==========================================

export const APP_CONFIG = {
  // Idioma por defecto
  defaultLanguage: 'es' as const,

  // Habilitar/deshabilitar animaciones
  enableAnimations: true,

  // Página por defecto
  defaultPage: 'inicio' as const
} as const;

// ==========================================
// SERVICIOS Y PRECIOS
// ==========================================

/**
 * Catálogo de servicios con precios reales.
 *
 * La tabla vive en `src/data/servicesPricing.json` para que la aplicación
 * (componentes), el schema de servicios (src/lib/structuredData.ts) y los
 * scripts de build (scripts/generate-pages.js) compartan UNA sola fuente de
 * verdad: cambiar un precio en el JSON lo actualiza en la web, en el JSON-LD
 * y en el HTML estático que lee Googlebot.
 *
 * Los precios pueden ser en BOB (Bolivianos) o USD.
 */
export const SERVICES_PRICING = servicesPricingData;

// ==========================================
// CONTACTO PARA SERVICIOS
// ==========================================

/**
 * Canales de contacto para solicitar servicios y cotizaciones
 */
export const SERVICE_CONTACT = {
  // WhatsApp con mensaje predefinido
  whatsappUrl: 'https://wa.me/59162408420',
  whatsappMessageEs: 'Hola Freddy, me interesa cotizar un servicio audiovisual.',
  whatsappMessageEn: 'Hi Freddy, I\'m interested in getting a quote for an audiovisual service.',

  // Email para cotizaciones
  emailSubjectEs: 'Cotización de Servicio Audiovisual',
  emailSubjectEn: 'Audiovisual Service Quote',

  // Horario de atención
  hoursEs: 'Lun - Vie: 9:00 AM - 7:00 PM · Sáb: 9:00 AM - 2:00 PM (GMT-4)',
  hoursEn: 'Mon - Fri: 9:00 AM - 7:00 PM · Sat: 9:00 AM - 2:00 PM (GMT-4)',

  // Tiempo de respuesta
  responseTimeEs: 'Respuesta en menos de 24 horas',
  responseTimeEn: 'Response within 24 hours'
} as const;
