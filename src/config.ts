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
  youtube: 'https://www.youtube.com/@freddyticonaguzman3551',
  linkedin: 'https://www.linkedin.com/in/freddy-ticona-guzman-4161287',
  x: 'https://x.com/Freddy_21407',
  facebook: 'https://www.facebook.com/share/1BYqTdK7BM/'
} as const;

// ==========================================
// FORMULARIO DE CONTACTO (Web3Forms)
// ==========================================

export const CONTACT_FORM = {
  // Access key de Web3Forms
  // TODO: Regístrate gratis en https://web3forms.com/ y crea un formulario nuevo
  // Access key configurada de Web3Forms
  accessKey: '615518f4-395e-4f3f-b535-37cd9e054590',

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
  // Showreel principal (video de demostración)
  showreel: 'dQw4w9WgXcQ',

  // IDs de videos para proyectos específicos del portafolio
  // Estos se usarán como placeholders hasta que subas tus videos reales
  placeholder: 'dQw4w9WgXcQ'
} as const;

// ==========================================
// SEO Y METADATOS
// ==========================================

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
