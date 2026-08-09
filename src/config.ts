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
  // Showreel principal (video de demostración)
  showreel: 'MK4au-qQcsw',

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
 * Catálogo de servicios con precios
 * Los precios pueden ser en BOB (Bolivianos) o USD
 */
export const SERVICES_PRICING = [
  {
    id: 'video-historia-de-vida',
    type: 'video',
    nameEs: 'Video Historia de Vida',
    nameEn: 'Life Story Video',
    descriptionEs: 'Grabación multicámara de entrevistas y material de apoyo con narrativa emotiva e impacto humano. Audio con micrófono inalámbrico Rode Wireless GO 3.',
    descriptionEn: 'Multi-camera interviews and supporting footage with an emotional narrative and human impact. Wireless microphone audio (Rode Wireless GO 3).',
    basePrice: 1200,
    currency: 'BOB',
    duration: 'video Full HD 1080p (2-3 min)',
    featuresEs: [
      'Grabación multicámara (2 cámaras Nikon D5100)',
      'Entrevistas en profundidad',
      'B-roll y material de apoyo',
      'Audio con micrófono inalámbrico Rode Wireless GO 3',
      'Entrega en 3-5 días hábiles'
    ],
    featuresEn: [
      'Multi-camera shooting (2 Nikon D5100 cameras)',
      'In-depth interviews',
      'B-roll and supporting footage',
      'Wireless microphone audio (Rode Wireless GO 3)',
      'Delivery in 3-5 business days'
    ],
    icon: 'Heart'
  },
  {
    id: 'cobertura-evento',
    type: 'video',
    nameEs: 'Cobertura de Evento',
    nameEn: 'Event Coverage',
    descriptionEs: 'Registro multicámara de actividades, eventos institucionales o talleres con edición dinámica y testimonios.',
    descriptionEn: 'Multi-camera coverage of activities, institutional events or workshops with dynamic editing and testimonials.',
    basePrice: 850,
    currency: 'BOB',
    duration: 'video Full HD 1080p (2-3 min)',
    featuresEs: [
      '2 cámaras simultáneas (Nikon D5100)',
      'Testimonios de participantes',
      'Edición dinámica con música',
      'Textos y gráfica institucional',
      'Entrega en 3-5 días hábiles'
    ],
    featuresEn: [
      '2 simultaneous cameras (Nikon D5100)',
      'Participant testimonials',
      'Dynamic editing with music',
      'Institutional text and graphics',
      'Delivery in 3-5 business days'
    ],
    icon: 'Radio'
  },
  {
    id: 'video-noticioso',
    type: 'video',
    nameEs: 'Video Noticioso / Cápsula Ágil',
    nameEn: 'News Video / Quick Capsule',
    descriptionEs: 'Cobertura periodística rápida y edición ágil optimizada para redes sociales. Audio con micrófono inalámbrico Rode Wireless GO 3.',
    descriptionEn: 'Fast press coverage and agile editing optimized for social media. Wireless microphone audio (Rode Wireless GO 3).',
    basePrice: 650,
    currency: 'BOB',
    duration: 'cápsula Full HD 1080p (1-2 min)',
    featuresEs: [
      'Grabación rápida de 1 entrevista principal',
      '2-3 tomas de apoyo',
      'Cortes directos y titulares en pantalla',
      'Música de fondo',
      'Optimizado para Facebook, Instagram y WhatsApp'
    ],
    featuresEn: [
      'Quick shooting of 1 main interview',
      '2-3 supporting shots',
      'Direct cuts and on-screen headlines',
      'Background music',
      'Optimized for Facebook, Instagram and WhatsApp'
    ],
    icon: 'Newspaper'
  },
  {
    id: 'noticiero-corporativo',
    type: 'video',
    nameEs: 'Noticiero Corporativo',
    nameEn: 'Corporate Newscast',
    descriptionEs: 'Gestión y montaje multicámara de clips de distintas sedes con identidad y gráfica corporativa.',
    descriptionEn: 'Multi-camera management and editing of clips from different locations with corporate identity and graphics.',
    basePrice: 1100,
    currency: 'BOB',
    duration: 'video Full HD 1080p (3-5 min)',
    featuresEs: [
      'Montaje de material de varias sedes',
      'Titulares animados con identidad corporativa',
      'Separadores de sección',
      'Música corporativa y logo',
      'Entrega en 3-5 días hábiles'
    ],
    featuresEn: [
      'Editing of footage from multiple locations',
      'Animated headlines with corporate identity',
      'Section dividers',
      'Corporate music and logo',
      'Delivery in 3-5 business days'
    ],
    icon: 'Briefcase'
  },
  {
    id: 'reportaje-impacto',
    type: 'video',
    nameEs: 'Reportaje Audiovisual de Impacto',
    nameEn: 'Impact Audiovisual Report',
    descriptionEs: 'Producción en profundidad con guionismo, investigación visual y rodaje multicámara. Audio profesional inalámbrico Rode Wireless GO 3.',
    descriptionEn: 'In-depth production with scriptwriting, visual research and multi-camera shooting. Professional wireless audio (Rode Wireless GO 3).',
    basePrice: 2200,
    currency: 'BOB',
    duration: 'video Full HD 1080p (3-5 min)',
    popular: true,
    featuresEs: [
      'Preproducción con guion narrativo',
      '2-3 entrevistas en profundidad',
      'Cámara en trípode + cámara en movimiento',
      'B-roll de entorno y detalles',
      'Narrativa con llamado a la acción',
      'Apto para TV, YouTube y cooperantes'
    ],
    featuresEn: [
      'Pre-production with narrative script',
      '2-3 in-depth interviews',
      'Tripod camera + moving camera',
      'B-roll of environment and details',
      'Narrative with call to action',
      'Suitable for TV, YouTube and donors'
    ],
    icon: 'Film'
  },
  {
    id: 'edicion-preexistente',
    type: 'edicion',
    nameEs: 'Edición de Material Preexistente',
    nameEn: 'Editing of Existing Footage',
    descriptionEs: 'Montaje de video con archivo existente, limpieza de audio, corrección de color y gráficos institucionales.',
    descriptionEn: 'Video editing with existing footage, audio cleaning, color correction and institutional graphics.',
    basePrice: 600,
    currency: 'BOB',
    duration: 'video Full HD 1080p (2-3 min)',
    featuresEs: [
      'Selección y montaje del material',
      'Limpieza de audio',
      'Corrección de color',
      'Titulares y gráfica institucional',
      'Entrega en 3-5 días hábiles'
    ],
    featuresEn: [
      'Footage selection and editing',
      'Audio cleaning',
      'Color correction',
      'Headlines and institutional graphics',
      'Delivery in 3-5 business days'
    ],
    icon: 'Scissors'
  },
  {
    id: 'cobertura-fotografica',
    type: 'fotografia',
    nameEs: 'Cobertura Fotográfica Profesional',
    nameEn: 'Professional Photo Coverage',
    descriptionEs: 'Registro fotográfico profesional de eventos o proyectos con sensor CMOS de alta calidad (Nikon D5100, 16.2 MP).',
    descriptionEn: 'Professional photo coverage of events or projects with high-quality CMOS sensor (Nikon D5100, 16.2 MP).',
    basePrice: 450,
    currency: 'BOB',
    duration: 'pack 20-30 fotos editadas',
    featuresEs: [
      'Fotografía de momentos representativos',
      'Retratos y detalles simbólicos',
      'Edición de exposición, contraste y color',
      '20-30 fotos en alta resolución',
      'Entrega por enlace descargable'
    ],
    featuresEn: [
      'Photography of key moments',
      'Portraits and symbolic details',
      'Exposure, contrast and color editing',
      '20-30 high-resolution photos',
      'Delivery via download link'
    ],
    icon: 'Camera'
  },
  {
    id: 'fotoreportaje-impacto',
    type: 'fotografia',
    nameEs: 'Fotoreportaje de Impacto Social',
    nameEn: 'Social Impact Photo Story',
    descriptionEs: 'Serie fotográfica narrativa que cuenta una historia visual completa: retratos de familias y su entorno cotidiano.',
    descriptionEn: 'Narrative photo series telling a complete visual story: portraits of families and their daily environment.',
    basePrice: 850,
    currency: 'BOB',
    duration: 'pack 50 fotos editadas',
    featuresEs: [
      'Visita al hogar o comunidad',
      'Retratos ambientales',
      'Fotografía de vida cotidiana',
      'Secuencia con coherencia narrativa',
      '50 fotos editadas en alta resolución'
    ],
    featuresEn: [
      'Home or community visit',
      'Environmental portraits',
      'Everyday life photography',
      'Sequence with narrative coherence',
      '50 high-resolution edited photos'
    ],
    icon: 'Camera'
  },
  {
    id: 'reel-vertical',
    type: 'redes',
    nameEs: 'Reel / Video Vertical para Redes',
    nameEn: 'Reel / Vertical Video for Social Media',
    descriptionEs: 'Grabación o edición de contenido vertical optimizado para Instagram Reels, TikTok y Facebook Stories. Incluye música, textos animados y subtítulos.',
    descriptionEn: 'Shooting or editing of vertical content optimized for Instagram Reels, TikTok and Facebook Stories. Includes music, animated text and subtitles.',
    basePrice: 300,
    currency: 'BOB',
    duration: '1 reel vertical (15-60 seg)',
    featuresEs: [
      'Formato vertical 9:16',
      'Música con buen ritmo',
      'Textos animados y subtítulos',
      'Mensaje captado en los primeros 3 segundos',
      'Listo para Instagram, TikTok y Facebook'
    ],
    featuresEn: [
      'Vertical 9:16 format',
      'Upbeat music',
      'Animated text and subtitles',
      'Message captured in the first 3 seconds',
      'Ready for Instagram, TikTok and Facebook'
    ],
    icon: 'Video'
  },
  {
    id: 'pack-reels-mensual',
    type: 'redes',
    nameEs: 'Pack Mensual de Reels (8 piezas)',
    nameEn: 'Monthly Reels Pack (8 pieces)',
    descriptionEs: 'Producción mensual de 8 Reels verticales con línea gráfica institucional, subtítulos y música. Ideal para mantener presencia constante en redes.',
    descriptionEn: 'Monthly production of 8 vertical Reels with institutional graphic line, subtitles and music. Ideal for constant social media presence.',
    basePrice: 1800,
    currency: 'BOB',
    duration: '8 reels/mes',
    featuresEs: [
      'Línea gráfica mensual unificada',
      '2 Reels por semana con temáticas variadas',
      'Testimonios, datos y efemérides',
      'Subtítulos y música incluidos',
      'Entrega semanal o al inicio del mes'
    ],
    featuresEn: [
      'Unified monthly graphic line',
      '2 Reels per week with varied themes',
      'Testimonials, data and anniversaries',
      'Subtitles and music included',
      'Weekly or monthly delivery'
    ],
    icon: 'Video'
  },
  {
    id: 'animacion-ia',
    type: 'ia',
    nameEs: 'Animación con IA (pieza individual)',
    nameEn: 'AI Animation (single piece)',
    descriptionEs: 'Video animado generado con inteligencia artificial (motion graphics, personajes o escenas ilustradas) con edición y posproducción profesional.',
    descriptionEn: 'Animated video generated with artificial intelligence (motion graphics, characters or illustrated scenes) with professional editing and post-production.',
    basePrice: 500,
    currency: 'BOB',
    duration: '1 pieza animada (15-30 seg)',
    featuresEs: [
      'Escenas animadas generadas con IA',
      'Narración o voz en off',
      'Música y textos',
      'Corrección de color y edición final',
      'Alto impacto visual'
    ],
    featuresEn: [
      'AI-generated animated scenes',
      'Narration or voice-over',
      'Music and text',
      'Color correction and final editing',
      'High visual impact'
    ],
    icon: 'Wrench'
  },
  {
    id: 'pack-animaciones-ia',
    type: 'ia',
    nameEs: 'Pack Animaciones IA para Campaña',
    nameEn: 'AI Animations Pack for Campaign',
    descriptionEs: 'Producción de 4 piezas animadas con IA para campañas de sensibilización o difusión, con identidad visual unificada y música.',
    descriptionEn: 'Production of 4 AI animated pieces for awareness or dissemination campaigns, with unified visual identity and music.',
    basePrice: 1500,
    currency: 'BOB',
    duration: '4 videos animados (15-30 seg c/u)',
    featuresEs: [
      'Concepto y identidad visual de campaña',
      '4 piezas complementarias',
      'Música, textos y llamado a la acción',
      'Uso individual o como secuencia',
      'Ideal para sensibilización y recaudación'
    ],
    featuresEn: [
      'Campaign concept and visual identity',
      '4 complementary pieces',
      'Music, text and call to action',
      'Standalone use or as a sequence',
      'Ideal for awareness and fundraising'
    ],
    icon: 'Wrench'
  },
  {
    id: 'plan-capsulas-difusion',
    type: 'plan',
    nameEs: 'PLAN 1: Cápsulas y Difusión Rápida',
    nameEn: 'PLAN 1: Capsules and Quick Dissemination',
    descriptionEs: '2 Videos Historias de Vida Full HD + 1 Cobertura Fotográfica Profesional. Precio regular por separado: Bs. 2.850 — Ahorro real: Bs. 500.',
    descriptionEn: '2 Full HD Life Story Videos + 1 Professional Photo Coverage. Regular price separately: Bs. 2,850 — Real savings: Bs. 500.',
    basePrice: 2350,
    currency: 'BOB',
    duration: 'paquete institucional',
    featuresEs: [
      '2 Videos Historias de Vida Full HD (2 x Bs. 1.200)',
      '1 Cobertura Fotográfica Profesional (Bs. 450)',
      'Ahorro real de Bs. 500'
    ],
    featuresEn: [
      '2 Full HD Life Story Videos (2 x Bs. 1,200)',
      '1 Professional Photo Coverage (Bs. 450)',
      'Real savings of Bs. 500'
    ],
    icon: 'Clapperboard'
  },
  {
    id: 'plan-cobertura-impacto',
    type: 'plan',
    nameEs: 'PLAN 2: Cobertura e Historias de Impacto',
    nameEn: 'PLAN 2: Coverage and Impact Stories',
    descriptionEs: '1 Historia de Vida + 1 Cobertura de Evento + 1 Cápsula + 1 Pack Fotográfico. Precio regular por separado: Bs. 3.150 — Ahorro real: Bs. 650.',
    descriptionEn: '1 Life Story + 1 Event Coverage + 1 Capsule + 1 Photo Pack. Regular price separately: Bs. 3,150 — Real savings: Bs. 650.',
    basePrice: 2500,
    currency: 'BOB',
    duration: 'paquete institucional',
    popular: true,
    featuresEs: [
      '1 Video Historia de Vida Full HD (Bs. 1.200)',
      '1 Cobertura de Evento en Video (Bs. 850)',
      '1 Video Noticioso / Cápsula (Bs. 650)',
      '1 Pack Fotográfico 30 fotos (Bs. 450)',
      'Ahorro real de Bs. 650'
    ],
    featuresEn: [
      '1 Full HD Life Story Video (Bs. 1,200)',
      '1 Event Coverage Video (Bs. 850)',
      '1 News Video / Capsule (Bs. 650)',
      '1 Photo Pack 30 photos (Bs. 450)',
      'Real savings of Bs. 650'
    ],
    icon: 'Clapperboard'
  },
  {
    id: 'plan-campana-completa',
    type: 'plan',
    nameEs: 'PLAN 3: Campaña Audiovisual Completa',
    nameEn: 'PLAN 3: Complete Audiovisual Campaign',
    descriptionEs: '1 Reportaje de Impacto + 2 Historias de Vida + 1 Fotoreportaje 50 fotos. Precio regular por separado: Bs. 5.450 — Ahorro real: Bs. 1.250.',
    descriptionEn: '1 Impact Report + 2 Life Stories + 1 Photo Story 50 photos. Regular price separately: Bs. 5,450 — Real savings: Bs. 1,250.',
    basePrice: 4200,
    currency: 'BOB',
    duration: 'paquete institucional',
    featuresEs: [
      '1 Reportaje Audiovisual de Impacto (Bs. 2.200)',
      '2 Videos Historias de Vida (2 x Bs. 1.200)',
      '1 Fotoreportaje de Impacto Social 50 fotos (Bs. 850)',
      'Ahorro real de Bs. 1.250'
    ],
    featuresEn: [
      '1 Impact Audiovisual Report (Bs. 2,200)',
      '2 Life Story Videos (2 x Bs. 1,200)',
      '1 Social Impact Photo Story 50 photos (Bs. 850)',
      'Real savings of Bs. 1,250'
    ],
    icon: 'Clapperboard'
  },
  {
    id: 'plan-redes-animaciones',
    type: 'plan',
    nameEs: 'PLAN 4: Redes Sociales + Animaciones IA',
    nameEn: 'PLAN 4: Social Media + AI Animations',
    descriptionEs: '1 Pack Mensual de 8 Reels + 4 Animaciones IA para campaña. Precio regular por separado: Bs. 3.300 — Ahorro real: Bs. 500.',
    descriptionEn: '1 Monthly Pack of 8 Reels + 4 AI Animations for campaign. Regular price separately: Bs. 3,300 — Real savings: Bs. 500.',
    basePrice: 2800,
    currency: 'BOB',
    duration: 'paquete institucional',
    featuresEs: [
      '1 Pack Mensual de 8 Reels verticales (Bs. 1.800)',
      '4 Animaciones con IA para campaña (Bs. 1.500)',
      'Ahorro real de Bs. 500'
    ],
    featuresEn: [
      '1 Monthly Pack of 8 vertical Reels (Bs. 1,800)',
      '4 AI Animations for campaign (Bs. 1,500)',
      'Real savings of Bs. 500'
    ],
    icon: 'Clapperboard'
  }
] as const;

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
  hoursEs: 'Lun - Sáb: 8:00 AM - 7:00 PM (GMT-4)',
  hoursEn: 'Mon - Sat: 8:00 AM - 7:00 PM (GMT-4)',

  // Tiempo de respuesta
  responseTimeEs: 'Respuesta en menos de 24 horas',
  responseTimeEn: 'Response within 24 hours'
} as const;
