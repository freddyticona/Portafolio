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
 * Catálogo de servicios con precios
 * Los precios pueden ser en BOB (Bolivianos) o USD
 */
export const SERVICES_PRICING = [
  {
    id: 'filmacion-basica',
    type: 'filmacion',
    nameEs: 'Filmación Básica',
    nameEn: 'Basic Filming',
    descriptionEs: 'Servicio de filmación con camarógrafo profesional, equipo básico de cámaras y audio.',
    descriptionEn: 'Professional filming service with cameraman, basic camera and audio equipment.',
    basePrice: 500,
    currency: 'BOB',
    duration: '2 horas',
    featuresEs: [
      'Camarógrafo profesional',
      'Equipo 4K profesional',
      'Grabación de audio inalámbrico',
      'Entrega en 48 horas',
      '1 revisión incluida'
    ],
    featuresEn: [
      'Professional cameraman',
      '4K professional equipment',
      'Wireless audio recording',
      '48-hour delivery',
      '1 revision included'
    ],
    icon: 'Camera'
  },
  {
    id: 'filmacion-completa',
    type: 'filmacion',
    nameEs: 'Filmación Completa',
    nameEn: 'Full Filming',
    descriptionEs: 'Paquete completo con camarógrafo, asistente, iluminación profesional y múltiples cámaras.',
    descriptionEn: 'Complete package with cameraman, assistant, professional lighting and multiple cameras.',
    basePrice: 1200,
    currency: 'BOB',
    duration: '4 horas',
    popular: true,
    featuresEs: [
      'Camarógrafo + Asistente',
      'Hasta 3 cámaras 4K',
      'Iluminación profesional completa',
      'Audio multi-canal',
      'Drone (opcional)',
      'Entrega en 72 horas',
      '2 revisiones incluidas'
    ],
    featuresEn: [
      'Cameraman + Assistant',
      'Up to 3 4K cameras',
      'Complete professional lighting',
      'Multi-channel audio',
      'Drone (optional)',
      '72-hour delivery',
      '2 revisions included'
    ],
    icon: 'Video'
  },
  {
    id: 'edicion-basica',
    type: 'edicion',
    nameEs: 'Edición Básica',
    nameEn: 'Basic Editing',
    descriptionEs: 'Edición de video con cortes, transiciones básicas y corrección de color.',
    descriptionEn: 'Video editing with cuts, basic transitions and color correction.',
    basePrice: 300,
    currency: 'BOB',
    duration: 'por minuto de video',
    featuresEs: [
      'Corte y ensamble',
      'Transiciones suaves',
      'Corrección de color básica',
      'Audio mixing',
      'Export en múltiples formatos'
    ],
    featuresEn: [
      'Cut and assembly',
      'Smooth transitions',
      'Basic color correction',
      'Audio mixing',
      'Multi-format export'
    ],
    icon: 'Scissors'
  },
  {
    id: 'edicion-profesional',
    type: 'edicion',
    nameEs: 'Edición Profesional',
    nameEn: 'Professional Editing',
    descriptionEs: 'Edición avanzada con motion graphics, efectos especiales y masterización.',
    descriptionEn: 'Advanced editing with motion graphics, special effects and mastering.',
    basePrice: 600,
    currency: 'BOB',
    duration: 'por minuto de video',
    popular: true,
    featuresEs: [
      'Todo lo de edición básica',
      'Motion graphics',
      'Efectos visuales',
      'Color grading profesional',
      'Sound design',
      'Versión para redes sociales'
    ],
    featuresEn: [
      'All basic editing features',
      'Motion graphics',
      'Visual effects',
      'Professional color grading',
      'Sound design',
      'Social media version'
    ],
    icon: 'Wrench'
  },
  {
    id: 'documental-corto',
    type: 'documental',
    nameEs: 'Documental Corto',
    nameEn: 'Short Documentary',
    descriptionEs: 'Producción de documental corto de hasta 15 minutos con investigación y guion.',
    descriptionEn: 'Short documentary production up to 15 minutes with research and script.',
    basePrice: 3500,
    currency: 'BOB',
    duration: '2 semanas',
    featuresEs: [
      'Investigación y guion',
      'Filmación en locación',
      'Entrevistas con iluminación',
      'B-roll cinematográfico',
      'Narración profesional',
      'Edición completa',
      'Música con licencia'
    ],
    featuresEn: [
      'Research and script',
      'Location filming',
      'Interviews with lighting',
      'Cinematic B-roll',
      'Professional narration',
      'Complete editing',
      'Licensed music'
    ],
    icon: 'Film'
  },
  {
    id: 'documental-completo',
    type: 'documental',
    nameEs: 'Documental Completo',
    nameEn: 'Full Documentary',
    descriptionEs: 'Producción de documental completo de 30-60 minutos con posproducción profesional.',
    descriptionEn: 'Full documentary production 30-60 minutes with professional post-production.',
    basePrice: 8000,
    currency: 'BOB',
    duration: '4-6 semanas',
    popular: true,
    featuresEs: [
      'Todo lo de documental corto',
      'Hasta 60 minutos finales',
      'Producción multi-locación',
      'Grabación de audio profesional',
      'Color grading cinematográfico',
      'Sound design completo',
      'Mezcla 5.1 surround',
      'Distribución en múltiples plataformas'
    ],
    featuresEn: [
      'All short documentary features',
      'Up to 60 final minutes',
      'Multi-location production',
      'Professional audio recording',
      'Cinematic color grading',
      'Complete sound design',
      '5.1 surround mix',
      'Multi-platform distribution'
    ],
    icon: 'Clapperboard'
  },
  {
    id: 'consultoria',
    type: 'consultoria',
    nameEs: 'Consultoría Técnica',
    nameEn: 'Technical Consulting',
    descriptionEs: 'Asesoría especializada en producción, equipo o técnicas de filmación.',
    descriptionEn: 'Specialized consulting on production, equipment or filming techniques.',
    basePrice: 200,
    currency: 'BOB',
    duration: 'por hora',
    featuresEs: [
      'Asesoría personalizada',
      'Revisión de equipo',
      'Recomendaciones técnicas',
      'Capacitación',
      'Soporte por email'
    ],
    featuresEn: [
      'Personalized consulting',
      'Equipment review',
      'Technical recommendations',
      'Training',
      'Email support'
    ],
    icon: 'MessageCircle'
  },
  {
    id: 'cobertura-evento',
    type: 'cobertura',
    nameEs: 'Cobertura de Evento',
    nameEn: 'Event Coverage',
    descriptionEs: 'Cobertura completa de eventos (conferencias, conciertos, ceremonias).',
    descriptionEn: 'Complete event coverage (conferences, concerts, ceremonies).',
    basePrice: 1500,
    currency: 'BOB',
    duration: 'por evento (hasta 6 horas)',
    popular: true,
    featuresEs: [
      'Hasta 2 camarógrafos',
      'Equipo 4K múltiple',
      'Audio del evento',
      'Streaming en vivo (opcional)',
      'Highlight reel',
      'Entrega completa en 1 semana'
    ],
    featuresEn: [
      'Up to 2 cameramen',
      'Multiple 4K equipment',
      'Event audio',
      'Live streaming (optional)',
      'Highlight reel',
      'Complete delivery in 1 week'
    ],
    icon: 'Radio'
  },
  {
    id: 'paquete-corporativo',
    type: 'paquete-completo',
    nameEs: 'Paquete Corporativo',
    nameEn: 'Corporate Package',
    descriptionEs: 'Solución completa para empresas: videos corporativos, capacitaciones y eventos.',
    descriptionEn: 'Complete solution for companies: corporate videos, trainings and events.',
    basePrice: 5000,
    currency: 'BOB',
    duration: 'por mes',
    featuresEs: [
      'Hasta 4 videos por mes',
      'Filmación en locación',
      'Edición completa',
      'Graficado corporativo',
      'Gestión de proyecto dedicada',
      'Almacenamiento en la nube',
      'Revisiones ilimitadas'
    ],
    featuresEn: [
      'Up to 4 videos per month',
      'Location filming',
      'Complete editing',
      'Corporate graphics',
      'Dedicated project management',
      'Cloud storage',
      'Unlimited revisions'
    ],
    icon: 'Briefcase'
  },
  {
    id: 'paquete-wedding',
    type: 'paquete-completo',
    nameEs: 'Paquete Wedding/Boda',
    nameEn: 'Wedding Package',
    descriptionEs: 'Cobertura cinematográfica completa de bodas y eventos especiales.',
    descriptionEn: 'Complete cinematic coverage of weddings and special events.',
    basePrice: 3000,
    currency: 'BOB',
    duration: 'por evento',
    popular: true,
    featuresEs: [
      'Filmación de 8 horas',
      '2 camarógrafos',
      'Drone cinematográfico',
      'Edición cinemática',
      'Highlight reel de 3-5 min',
      'Video completo',
      'Tráiler en 48 horas',
      'Música con licencia'
    ],
    featuresEn: [
      '8 hours filming',
      '2 cameramen',
      'Cinematic drone',
      'Cinematic editing',
      '3-5 min highlight reel',
      'Full video',
      '48-hour trailer',
      'Licensed music'
    ],
    icon: 'Heart'
  }
] as const;

// ==========================================
// CONFIGURACIÓN DE PAGOS
// ==========================================

/**
 * Configuración de Stripe y métodos de pago
 *
 * IMPORTANTE: Para usar Stripe en producción necesitas:
 * 1. Crear cuenta en https://dashboard.stripe.com/
 * 2. Obtener las claves de tu cuenta
 * 3. Configurar webhooks para notificaciones de pago
 *
 * En modo test/prueba usa las claves de test.
 * Para Bolivia, también aceptamos transferencias y QR.
 */
export const PAYMENT_CONFIG = {
  // Stripe (actualizar con tus claves reales)
  stripe: {
    publishableKey: 'pk_test_YOUR_KEY_HERE', // Clave pública (frontend)
    secretKey: 'sk_test_YOUR_KEY_HERE', // Clave secreta (backend - NO usar en frontend)
    webhookSecret: 'whsec_YOUR_WEBHOOK_SECRET', // Secreto del webhook
    enabled: true, // Habilitar/deshabilitar Stripe
    testMode: true // true = modo prueba, false = producción
  },

  // Métodos de pago disponibles
  availableMethods: ['stripe', 'transferencia', 'qr', 'efectivo'] as const,

  // Configuración de transferencia bancaria (Bolivia)
  bankTransfer: {
    bankName: 'Banco Mercantil Santa Cruz',
    accountName: 'Freddy Ticona Guzmán',
    accountNumber: '1000555157',
    accountType: 'Caja de Ahorro',
    idNumber: '4786901LP',
    currency: 'BOB',
    phone: '+591 62408420',
    instructionsEs: 'Realiza la transferencia a la cuenta de ahorros y envía el comprobante por WhatsApp.',
    instructionsEn: 'Make the transfer to the savings account and send the receipt via WhatsApp.'
  },

  // Configuración de QR (Bolivia)
  qrPayment: {
    provider: 'Banco Mercantil Santa Cruz',
    phoneNumber: '+591 62408420',
    qrImage: '/images/qr-mercantil.jpg', // Imagen del QR code real
    instructionsEs: 'Escanea el código QR desde la app de Banco Mercantil o envía el monto al número de celular.',
    instructionsEn: 'Scan the QR code from Banco Mercantil app or send the amount to the cell phone number.'
  },

  // Impuestos (Bolivia: IVA 13%)
  taxRate: 0.13,

  // Moneda predeterminada
  defaultCurrency: 'BOB' as const,

  // Tasa de cambio (actualizable)
  exchangeRate: {
    BOB_TO_USD: 0.14, // 1 BOB ≈ 0.14 USD
    USD_TO_BOB: 6.97  // 1 USD ≈ 6.97 BOB
  }
} as const;
