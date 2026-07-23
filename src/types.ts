/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId = 'inicio' | 'sobre-mi' | 'portafolio' | 'cv' | 'blog' | 'noticias' | 'contacto' | 'reservas' | 'servicios' | 'admin';

export interface PortfolioItem {
  id: string;
  title: string;
  titleEn: string;
  category: 'cultural' | 'politica' | 'documental' | 'cobertura-int';
  categoryLabelEs: string;
  categoryLabelEn: string;
  roleEs: string;
  roleEn: string;
  year: string;
  clientEs?: string;
  clientEn?: string;
  descriptionEs: string;
  descriptionEn: string;
  imageUrl: string;
  images?: string[]; // All photos for the project gallery
  videoUrl?: string; // YouTube or Vimeo embed url
  isCaseStudy?: boolean;
  caseStudyId?: string;
  techDetailsEs: string[];
  techDetailsEn: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  titleEn: string;
  subtitleEs: string;
  subtitleEn: string;
  contextEs: string;
  contextEn: string;
  challengesEs: string;
  challengesEn: string;
  solutionsEs: string;
  solutionsEn: string;
  resultEs: string;
  resultEn: string;
  roleEs: string;
  roleEn: string;
  teamEs: string;
  teamEn: string;
  hardwareEs: string[];
  hardwareEn: string[];
  softwareEs: string[];
  softwareEn: string[];
  awardEs?: string;
  awardEn?: string;
  imageUrl: string;
  videoUrl?: string;
  btsImages: { url: string; captionEs: string; captionEn: string }[];
}

export interface TimelineEvent {
  id: string;
  period: string;
  company: string;
  roleEs: string;
  roleEn: string;
  descriptionEs: string;
  descriptionEn: string;
  achievementsEs: string[];
  achievementsEn: string[];
  logoPlaceholder: string;
}

export type ContentType = 'news' | 'analysis' | 'opinion' | 'reportage' | 'behind-scenes';

export interface BlogPost {
  id: string;
  slug: string;
  titleEs: string;
  titleEn: string;
  excerptEs: string;
  excerptEn: string;
  contentEs: string; // Markdown or HTML representation
  contentEn: string;
  date: string;
  readTimeEs: string;
  readTimeEn: string;
  imageUrl: string;
  imageCaption?: string; // Fuente o pie de la fotografía
  images?: string[]; // Galería de imágenes adicional
  categoryEs: string;
  categoryEn: string;
  videoUrl?: string; // Video de YouTube
  enableComments: boolean; // Habilitar/deshabilitar comentarios
  font?: string; // Fuente personalizada para este post
  breaking?: boolean; // Noticia de última hora
  featured?: boolean; // Noticia destacada en portada
  contentType?: ContentType; // Trust Project: type of work classification
  views?: number; // Número de lecturas
  location?: string; // Ubicación de la noticia
  source?: string; // Fuente de la noticia (medio)
  sourceUrl?: string; // URL de la fuente original
}

export interface Testimonial {
  id: string;
  name: string;
  roleEs: string;
  roleEn: string;
  companyEs: string;
  companyEn: string;
  textEs: string;
  textEn: string;
  avatarUrl?: string;
}

export interface Certificate {
  id: string;
  titleEs: string;
  titleEn: string;
  issuer: string;
  year: string;
  isPrimary: boolean;
  credentialUrl?: string;
}

export interface Comment {
  id: string;
  postId: string;
  author: string;
  email: string;
  content: string;
  date: string;
  status: 'pending' | 'approved';
}

export interface User {
  id: string;
  name: string;
  email: string;
  // NOTA DE SEGURIDAD: Las contraseñas NUNCA se almacenan aquí.
  // La autenticación se gestiona exclusivamente por Firebase Auth.
  registeredAt: string;
}

// ==========================================
// TIPOS DE SERVICIOS
// ==========================================

export type ServiceType = 'filmacion' | 'edicion' | 'documental' | 'consultoria' | 'cobertura' | 'paquete-completo';

export type Currency = 'BOB' | 'USD';

export interface ServicePricing {
  id: string;
  type: ServiceType;
  nameEs: string;
  nameEn: string;
  descriptionEs: string;
  descriptionEn: string;
  basePrice: number;
  currency: Currency;
  duration: string; // "2 horas", "1 día", "por proyecto"
  popular?: boolean;
  featuresEs: string[];
  featuresEn: string[];
  icon: string;
}
