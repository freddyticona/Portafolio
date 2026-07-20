# 🔷 CLAUDE CONTEXT - PORTAFOLIO FREDDY TICONA

**IMPORTANTE:** Este documento es para dar contexto a una NUEVA instancia de Claude cuando se reinicie la terminal. No necesitas revisar todo el código - usa este documento para entender el estado actual del proyecto.

---

## 🚀 INICIO RÁPIDO

**Cuando te pida continuar con este proyecto:**

1. Lee este documento completo
2. NO revises todos los archivos innecesariamente
3. Pregunta qué mejora o tarea específica quiere el usuario
4. Usa `cd "C:\Users\Asus\Downloads\portafolio cv studio"` para entrar al directorio

---

## 👤 USUARIO

**Nombre:** Freddy Ticona Guzmán
**Profesión:** Camarógrafo y Realizador Audiovisual
**Ubicación:** La Paz, Bolivia
**Contacto:** freddyticona62@gmail.com | +591 62408420

**Repositorio GitHub:** https://github.com/freddyticona/Portafolio
**Sitio web:** https://freddy-ticona-portafolio.vercel.app
**Carpeta local:** `C:\Users\Asus\Downloads\portafolio cv studio`

**Google Analytics ID:** G-401629974

---

## 📊 ESTADO ACTUAL DEL PROYECTO

### ✅ COMPLETADO (Última actualización: 20 julio 2026 - Commit: 3ff05b0)

El proyecto fue transformado de un portafolio simple a una **PLATAFORMA PREMIUM** con múltiples commits:

#### HISTORIAL DE COMMITS RECIENTES:

| Commit | Fecha | Descripción | Archivos |
|--------|-------|-------------|----------|
| 3ff05b0 | 20 jul 2026 | Fase 2 - Funcionalidades profesionales | 7 archivos |
| bfcc1de | 20 jul 2026 | Documentación CLAUDE_CONTEXT actualizada | 1 archivo |
| 66589e7 | 20 jul 2026 | Google Analytics ID (G-401629974) | 1 archivo |
| 828b08d | 20 jul 2026 | Fase 1 - SEO y rendimiento | 9 archivos |
| 102e379 | 20 jul 2026 | Mejoras UX y accesibilidad | 9 archivos |
| d3a7182 | - | Commit base anterior | - |

#### 1. Experiencia Visual Premium (Commit 102e379)
- **CinematicHero.tsx** - Hero con efectos parallax, partículas, animaciones escalonadas
- **MicroInteractions.tsx** - Componentes reutilizables con efectos (ripple, hover, shine)
- **LocationsMap.tsx** - Mapa interactivo de 8 ubicaciones de filmación en Bolivia

#### 2. Funcionalidades Avanzadas (Commit 102e379)
- **GlobalSearch.tsx** - Búsqueda global (Ctrl/Cmd+K) con navegación por teclado
- **WhatsAppButton.tsx** - Botón flotante con chat preview
- **PortfolioFilters.tsx** - Filtros avanzados (categoría, año, estado, búsqueda)
- **SkipLink.tsx** - Accesibilidad para saltar al contenido principal

#### 3. Sistema de Contenido CMS
- **CMSPanel.tsx** - Panel completo para gestionar blog y proyectos
- Editor bilingüe (español/inglés)
- Publicación (borrador, publicado, destacado)

#### 4. Profesionalización Técnica
- **analytics/index.ts** - Sistema de analytics local
- **AnalyticsDashboard.tsx** - Dashboard con estadísticas en Admin
- **LazyImage.tsx** - Lazy loading con Intersection Observer

#### 5. Accesibilidad (Commit 102e379)
- **SkipLink.tsx** - Permite a lectores de pantalla saltar al contenido
- **Navbar.tsx** - ARIA labels, roles, aria-current completos
- **index.css** - Clases .sr-only, .skip-link para accesibilidad

#### 6. Skeleton Loaders (Commit 102e379)
- **Skeleton.tsx** - Hero, Stats, Testimonial, About, CV skeletons
- **LoadingScreen** - Pantalla de carga animada
- **InlineLoading** - Carga en línea con soporte bilingüe

#### 7. Mapa de Ubicaciones (Commit 102e379)
- **LocationsMap.tsx** - Mapa SVG interactivo de Bolivia
- 8 ubicaciones con coordenadas y proyectos filmados
- Controles de zoom, leyenda, enlaces a Google Maps
- Versión compacta: `LocationsMapCompact`

#### 8. SEO - Fase 1 (Commit 828b08d)
- **Sitemap.xml** - Actualizado con rutas correctas, hreflang, fechas
- **Robots.txt** - Control de crawlers, bloques de admin/api
- **Google Analytics 4** - Sistema completo de tracking (lib/analytics.ts)
- **Optimización WebP** - Script y componente para imágenes optimizadas

#### 9. PWA - Fase 2 (Commit 3ff05b0)
- **Service Worker v2.0** - Caché inteligente, offline-first
- **PWAInstallPrompt** - Instalación nativa, estado offline
- **Notificaciones push** - Soporte completo
- **Sincronización background** - Para cuando vuelve la conexión

#### 10. CV PDF - Fase 2 (Commit 3ff05b0)
- **pdfGenerator.ts** - Generación completa de CV en PDF
- **CVDownloadButton** - 2 variantes (default, compact)
- **Datos pre-cargados** - Experiencia, educación, habilidades, premios

#### 11. Social Sharing - Fase 2 (Commit 3ff05b0)
- **ShareButtons** - 4 variantes (default, compact, floating, dropdown)
- **Web Share API** - Nativo en móviles
- **GA4 Tracking** - Eventos de compartir
- **ShareProject** - Para proyectos específicos

#### 12. Newsletter - Fase 2 (Commit 3ff05b0)
- **NewsletterSignup** - 4 variantes (default, compact, footer, modal)
- **Validación de email** - Formato correcto
- **Almacenamiento local** - Demo de suscriptores
- **Estados de carga** - UX completa

---

## ⚠️ PENDIENTES / FUTURO

- Videos de YouTube son placeholders (necesita IDs reales)
- Imágenes grandes (9-17MB) necesitan optimización: `npm run optimize-images`
- **Fase 1:** ✅ COMPLETADA (Sitemap, Robots, GA4, WebP)
- **Fase 2:** ✅ COMPLETADA (PWA, CV PDF, Newsletter, Sharing)
- **Fase 3:** 🔄 EN PROGRESO (Sistema de citas, Chatbot, Comentarios)

---

## 📁 ESTRUCTURA CLAVE COMPLETA

```
src/
├── App.tsx                      # ⭐ COMPONENTE PRINCIPAL
├── main.tsx                     # Entry point + GA4 init
├── config.ts                    # ⭐ CONFIGURACIÓN CENTRAL
├── translations.ts              # Contenido bilingüe
├── types.ts                     # TypeScript types
├── index.css                    # Estilos globales + accesibilidad
├── lib/
│   ├── analytics.ts            # ⭐ NUEVO: Google Analytics 4
│   └── pdfGenerator.ts         # ⭐ NUEVO: Generador de CV PDF
├── components/
│   ├── CinematicHero.tsx        # Hero mejorado
│   ├── GlobalSearch.tsx         # Búsqueda Ctrl+K
│   ├── WhatsAppButton.tsx      # WhatsApp flotante
│   ├── PortfolioFilters.tsx    # Filtros de portafolio
│   ├── CMSPanel.tsx             # Gestión de contenido
│   ├── AnalyticsDashboard.tsx  # Dashboard de estadísticas
│   ├── AdminPanel.tsx           # Panel de administración
│   ├── LazyImage.tsx            # ⭐ NUEVO: Lazy loading
│   ├── OptimizedImage.tsx      # ⭐ NUEVO: WebP/AVIF support
│   ├── SkipLink.tsx             # ⭐ NUEVO: Accesibilidad
│   ├── LocationsMap.tsx         # ⭐ NUEVO: Mapa de ubicaciones
│   ├── Skeleton.tsx             # ⭐ NUEVO: Skeleton loaders
│   ├── PWAInstallPrompt.tsx    # ⭐ NUEVO: PWA install
│   ├── CVDownloadButton.tsx    # ⭐ NUEVO: CV PDF download
│   ├── ShareButtons.tsx        # ⭐ NUEVO: Social sharing
│   ├── NewsletterSignup.tsx   # ⭐ NUEVO: Newsletter
│   ├── BlogCard.tsx             # Tarjetas de blog
│   ├── BlogDetail.tsx           # Detalle de post
│   ├── CaseStudyDetail.tsx     # Detalle de caso de estudio
│   ├── ContactForm.tsx          # Formulario Web3Forms
│   ├── Footer.tsx               # Footer del sitio
│   ├── Lightbox.tsx             # Lightbox para imágenes
│   ├── MicroInteractions.tsx   # Micro-interacciones
│   ├── Navbar.tsx               # Navegación + ARIA
│   ├── PDFExport.tsx            # Exportar a PDF
│   ├── PortfolioGrid.tsx       # Grid de portafolio
│   ├── SearchBar.tsx            # Barra de búsqueda
│   ├── SocialShare.tsx          # Compartir en redes
│   ├── Timeline.tsx             # Timeline de experiencia
│   └── BehindScenesGallery.tsx  # Galería (INACTIVO)
├── hooks/
│   ├── useDarkMode.ts           # Tema oscuro/claro
│   ├── useServiceWorker.ts      # Service Worker
│   └── useAnalytics.ts         # ⭐ NUEVO: GA4 events
└── analytics/
    └── index.ts                 # Analytics local

scripts/
├── generate-icons.js            # Generación de iconos
├── generate-rss.js              # Generación de RSS
└── optimize-images.js          # ⭐ NUEVO: Optimización WebP

public/
├── sitemap.xml                  # ⭐ NUEVO: Sitemap dinámico
├── robots.txt                   # ⭐ NUEVO: Control crawlers
├── manifest.json               # PWA manifest
├── sw.js                        # ⭐ NUEVO: Service Worker v2.0
└── images/
    ├── behind-scenes/           # 56 fotos de coberturas
    └── freddy_profile.jpg       # Foto principal
```

---

## 🔗 GIT & VERCEL

- **Repositorio:** https://github.com/freddyticona/Portafolio.git
- **Usuario GitHub:** freddyticona
- **Email GitHub:** freddyticona62@gmail.com
- **Proyecto Vercel:** freddy-ticona-portafolio
- **Estado:** ✅ Conectado a GitHub (deploy automático)
- **Último Commit:** 3ff05b0 - "feat: Fase 2 - Implementar funcionalidades profesionales"

### Comandos Git útiles:
```bash
cd "C:\Users\Asus\Downloads\portafolio cv studio"
git status
git add .
git commit -m "mensaje"
git push origin main
```

### Comandos NPM:
```bash
npm run dev              # Inicia servidor en puerto 3000
npm run build            # Compila para producción
npm run preview          # Previsualiza producción
npm run optimize-images  # Optimiza imágenes a WebP ⭐
```

---

## 🎯 PÁGINAS DEL SITIO

1. **inicio** - Hero, estadísticas, preview blog
2. **sobre-mi** - Biografía, especialidades, timeline, testimonios, mapa de ubicaciones
3. **portafolio** - Grid de proyectos con filtros
4. **cv** - Currículum, educación, certificaciones, descarga PDF
5. **blog** - Artículos con CMS
6. **contacto** - Formulario Web3Forms
7. **admin** - Panel de administración (contraseña: `admin123`)

---

## 🔧 TECNOLOGÍAS

- React 19 + TypeScript
- Vite 6.2
- Tailwind CSS 4.1
- Motion/Framer Motion (animaciones)
- Lucide React (iconos)
- Web3Forms (formularios)
- jsPDF (generación PDF)
- Intersection Observer API (lazy loading)
- Google Analytics 4 (tracking)
- Service Worker API (PWA)

---

## 📱 CONTACTO CONFIGURADO

```typescript
phoneNumber: '+591 62408420'
email: 'freddyticona62@gmail.com'
location: 'La Paz, Bolivia'

// Web3Forms accessKey
accessKey: '615518f4-395e-4f3f-b535-37cd9e054590'

// Redes sociales
youtube: 'https://www.youtube.com/@freddyticonaguzman3551'
linkedin: 'https://www.linkedin.com/in/freddy-ticona-guzman-4161287'
x: 'https://x.com/Freddy_21407'
facebook: 'https://www.facebook.com/share/1BYqTdK7BM/'
```

---

## 📺 GOOGLE ANALYTICS 4 CONFIGURADO

**Measurement ID:** G-401629974
**Archivo:** `src/lib/analytics.ts`

**Eventos Implementados:**
- `page_view` - Vistas de página automáticas
- `generate_lead` - Formularios de contacto
- `contact` - Clicks en WhatsApp
- `view_item` - Vistas de proyectos/blog
- `filter_portfolio` - Filtros aplicados
- `share` - Compartir en redes
- `file_download` - Descarga de CV
- `navigation` - Cambios de página
- `language_change` - Cambio de idioma
- `search` - Búsquedas realizadas
- `map_interaction` - Clicks en ubicaciones

**Hook Personalizado:** `useAnalytics.ts`

---

## 🖼️ FOTOS DE COBERTURAS

**Ubicación:** `public/images/behind-scenes/`
**Total:** 56 fotos
**Estado:** INACTIVO - Sección no está en uso

**Optimización Pendiente:**
```bash
npm run optimize-images
```
Convierte JPG/PNG a WebP con calidad 85%, reduciendo tamaño ~60-80%.

---

## 📺 VIDEOS PENDIENTES

Los videos de YouTube son placeholders. Necesita:
1. Subir videos reales a YouTube
2. Obtener los IDs (de `https://youtube.com/watch?v=abc123` → `abc123`)
3. Actualizar en `src/config.ts`:

```typescript
export const YOUTUBE_VIDEOS = {
  showreel: 'TU_REAL_ID',
  placeholder: 'TU_REAL_ID'
};
```

---

## 🌐 UBICACIONES DE FILMACIÓN (Mapa)

8 ubicaciones mapeadas en `LocationsMap.tsx`:

| # | Ubicación | Proyectos | Tipo |
|---|-----------|-----------|------|
| 1 | La Paz | 15 | urban |
| 2 | El Alto | 8 | urban |
| 3 | Copacabana | 6 | ceremonial |
| 4 | Sorata | 4 | rural |
| 5 | Yungas | 5 | natural |
| 6 | Oruro | 7 | ceremonial |
| 7 | Potosí | 6 | rural |
| 8 | Sucre | 4 | urban |

---

## 📋 ROADMAP - MEJORAS

### ✅ Fase 1 - COMPLETADA (20 julio 2026)
```
✅ 1. Sitemap.xml dinámico
✅ 2. Robots.txt
✅ 3. Google Analytics 4 (G-401629974)
✅ 4. Optimización WebP (script + componente)
```

### ✅ Fase 2 - COMPLETADA (20 julio 2026)
```
✅ 5. PWA completo (Service Worker v2.0)
✅ 6. Descarga de CV PDF automática
✅ 7. Botones de compartir mejorados
✅ 8. Newsletter signup
```

### 🔄 Fase 3 - EN PROGRESO
```
⏳ 9. Sistema de citas/agendamiento
⏳ 10. Chatbot básico
⏳ 11. Sistema de comentarios
❌ 12. Quechua/Aymara (NO REQUERIDO)
```

---

## 🔑 ACCESO ADMIN

**URL:** `/admin` en el sitio
**Contraseña:** `admin123`
**Pestañas:** Posts, Comments, Users, CMS, Analytics

---

## 🎨 PALETA DE COLORES

```css
--color-gold: #D4AF37;
--color-gold-hover: #c9a52f;
--color-gold-light: #e8c847;
--color-gold-dark: #a68f2d;
```

---

## 📝 PARA EMPEZAR A TRABAJAR

Cuando el usuario diga "continuemos con este proyecto":

1. NO revises todo el código innecesariamente
2. Pregunta: "¿Qué quieres mejorar o agregar?"
3. Usa este documento como referencia
4. Revisa el roadmap para ver qué está pendiente
5. Prioriza: Optimización → Chatbot → Fase 3

---

*Documento actualizado - 20 julio 2026 - Commit 3ff05b0*
*Fases 1 y 2 completadas, Fase 3 en progreso*
