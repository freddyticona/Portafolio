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

---

## 📊 ESTADO ACTUAL DEL PROYECTO

### ✅ COMPLETADO (Última actualización: 20 julio 2026 - Commit: 102e379)

El proyecto fue transformado de un portafolio simple a una **PLATAFORMA PREMIUM** con:

#### 1. Experiencia Visual Premium
- **CinematicHero.tsx** - Hero con efectos parallax, partículas, animaciones escalonadas
- **MicroInteractions.tsx** - Componentes reutilizables con efectos (ripple, hover, shine)
- **LocationsMap.tsx** - Mapa interactivo de 8 ubicaciones de filmación en Bolivia

#### 2. Funcionalidades Avanzadas
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

#### 5. Accesibilidad (NUEVO - Commit 102e379)
- **SkipLink.tsx** - Permite a lectores de pantalla saltar al contenido
- **Navbar.tsx** - ARIA labels, roles, aria-current completos
- **index.css** - Clases .sr-only, .skip-link para accesibilidad

#### 6. Skeleton Loaders (NUEVO - Commit 102e379)
- **Skeleton.tsx** - Hero, Stats, Testimonial, About, CV skeletons
- **LoadingScreen** - Pantalla de carga animada
- **InlineLoading** - Carga en línea con soporte bilingüe

#### 7. Mapa de Ubicaciones (NUEVO - Commit 102e379)
- **LocationsMap.tsx** - Mapa SVG interactivo de Bolivia
- 8 ubicaciones con coordenadas y proyectos filmados
- Controles de zoom, leyenda, enlaces a Google Maps
- Versión compacta: `LocationsMapCompact`

---

## ⚠️ PENDIENTES / FUTURO

- Videos de YouTube son placeholders (necesita IDs reales)
- Imágenes grandes (9-17MB) podrían optimizarse más
- PWA no está completamente implementado
- Fase 1 de escalado: Sitemap.xml, Robots.txt, GA4, WebP
- Fase 2: PWA completo, CV PDF, Newsletter
- Fase 3: Sistema de citas, Chatbot, Quechua/Aymara

---

## 📁 ESTRUCTURA CLAVE

```
src/
├── App.tsx                      # ⭐ COMPONENTE PRINCIPAL
├── main.tsx                     # Entry point
├── config.ts                    # ⭐ CONFIGURACIÓN CENTRAL (contacto, redes, videos)
├── translations.ts              # Contenido bilingüe
├── types.ts                     # TypeScript types
├── index.css                    # Estilos globales + accesibilidad
├── components/
│   ├── CinematicHero.tsx        # Hero mejorado
│   ├── GlobalSearch.tsx         # Búsqueda Ctrl+K
│   ├── WhatsAppButton.tsx      # WhatsApp flotante
│   ├── PortfolioFilters.tsx    # Filtros de portafolio
│   ├── CMSPanel.tsx             # Gestión de contenido
│   ├── AnalyticsDashboard.tsx  # Dashboard de estadísticas
│   ├── AdminPanel.tsx           # Panel de administración
│   ├── LazyImage.tsx            # ⭐ NUEVO: Lazy loading imágenes
│   ├── SkipLink.tsx             # ⭐ NUEVO: Accesibilidad
│   ├── LocationsMap.tsx         # ⭐ NUEVO: Mapa de ubicaciones
│   ├── Skeleton.tsx             # ⭐ NUEVO: Skeleton loaders
│   ├── BlogCard.tsx             # Tarjetas de blog
│   ├── BlogDetail.tsx           # Detalle de post
│   ├── CaseStudyDetail.tsx     # Detalle de caso de estudio
│   ├── ContactForm.tsx          # Formulario Web3Forms
│   ├── Footer.tsx               # Footer del sitio
│   ├── Lightbox.tsx             # Lightbox para imágenes
│   ├── MicroInteractions.tsx   # Micro-interacciones
│   ├── Navbar.tsx               # Navegación principal
│   ├── PDFExport.tsx            # Exportar a PDF
│   ├── PortfolioGrid.tsx       # Grid de portafolio
│   ├── SearchBar.tsx            # Barra de búsqueda
│   ├── SocialShare.tsx          # Compartir en redes
│   ├── Timeline.tsx              # Timeline de experiencia
│   └── BehindScenesGallery.tsx  # Galería detrás de cámaras (INACTIVO)
├── hooks/
│   ├── useDarkMode.ts           # Hook para tema oscuro/claro
│   └── useServiceWorker.ts      # Hook para service worker
└── analytics/
    └── index.ts                 # Sistema de analytics local

public/images/
└── behind-scenes/              # 56 fotos de coberturas
```

---

## 🔗 GIT & VERCEL

- **Repositorio:** https://github.com/freddyticona/Portafolio.git
- **Usuario GitHub:** freddyticona
- **Email GitHub:** freddyticona62@gmail.com
- **Proyecto Vercel:** freddy-ticona-portafolio
- **Estado:** ✅ Conectado a GitHub (deploy automático)
- **Último Commit:** 102e379 - "feat: implementar mejoras completas de UX y accesibilidad"

### Comandos Git útiles:
```bash
cd "C:\Users\Asus\Downloads\portafolio cv studio"
git status
git add .
git commit -m "mensaje"
git push origin main
```

---

## 🎯 PÁGINAS DEL SITIO

1. **inicio** - Hero, estadísticas, preview blog, mapa NO (en sobre-mí)
2. **sobre-mi** - Biografía, especialidades, timeline, testimonios, **mapa de ubicaciones**
3. **portafolio** - Grid de proyectos con filtros
4. **cv** - Currículum, educación, certificaciones
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
- Intersection Observer API (lazy loading)

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

## 🖼️ FOTOS DE COBERTURAS

**Ubicación:** `public/images/behind-scenes/`
**Total:** 56 fotos
**Estado:** INACTIVO - SecciónBehindScenesGallery no está en uso

---

## 📺 VIDEOS PENDIENTES

Los videos de YouTube son placeholders. Necesita:
1. Subir videos reales a YouTube
2. Obtener los IDs (ejemplo: de `https://youtube.com/watch?v=abc123` el ID es `abc123`)
3. Actualizar en `src/config.ts`:

```typescript
export const YOUTUBE_VIDEOS = {
  showreel: 'TU_REAL_ID',
  placeholder: 'TU_REAL_ID'
};
```

---

## 🚀 COMANDOS IMPORTANTES

```bash
# Entrar al proyecto
cd "C:\Users\Asus\Downloads\portafolio cv studio"

# Desarrollo
npm run dev          # Inicia servidor en puerto 3000
npm run build        # Compila para producción
npm run preview      # Previsualiza producción

# Git
git status
git add .
git commit -m "mensaje"
git push origin main
```

---

## ⚠️ PROBLEMAS CONOCIDOS

**RESUELTOS en Commit 102e379:**
- ✅ useDarkMode.ts y useServiceWorker.ts - NO tenían errores reales

**PENDIENTES:**
1. Imágenes grandes (9-17MB) pueden optimizarse a WebP
2. Videos de YouTube son placeholders
3. PWA incompleto

---

## 💡 MEJORAS IMPLEMENTADAS (Commit 102e379)

### Accesibilidad
- SkipLink para saltar al contenido principal
- Navbar con ARIA labels, roles, aria-current
- Clases .sr-only y .skip-link en CSS

### Rendimiento
- LazyImage con Intersection Observer
- Skeleton loaders para mejor UX
- Lazy loading en PortfolioGrid y BlogCard

### Funcionalidades
- LocationsMap con 8 ubicaciones en Bolivia
- Controles de zoom interactivos
- Enlaces a Google Maps

---

## 📋 ROADMAP - MEJORAS PENDIENTES

### Fase 1 - Inmediata (1-2 horas)
```
1. Sitemap.xml dinámico
2. Robots.txt
3. Google Analytics 4
4. Optimización de imágenes (WebP)
```

### Fase 2 - Corto Plazo (1-2 días)
```
5. PWA completo (Service Worker)
6. Descarga de CV PDF automática
7. Botones de compartir mejorados
8. Newsletter signup
```

### Fase 3 - Medio Plazo (1 semana)
```
9. Sistema de citas/agendamiento
10. Chatbot básico
11. Quechua/Aymara
12. Sistema de comentarios
```

---

## 🔑 ACCESO ADMIN

**URL:** Ir a `/admin` en el sitio
**Contraseña:** `admin123`
**Pestañas disponibles:** Posts, Comments, Users, CMS, Analytics

---

## 📝 PARA EMPEZAR A TRABAJAR

Cuando el usuario diga "continuemos con este proyecto":

1. NO revises todo el código innecesariamente
2. Pregunta: "¿Qué quieres mejorar o agregar?"
3. Usa este documento como referencia
4. Enfócate en la tarea específica

---

## 🎨 PALETA DE COLORES

```css
--color-gold: #D4AF37;
--color-gold-hover: #c9a52f;
--color-gold-light: #e8c847;
--color-gold-dark: #a68f2d;
```

---

## 🌐 UBICACIONES DE FILMACIÓN (Mapa)

8 ubicaciones mapeadas en `LocationsMap.tsx`:

1. La Paz - 15 proyectos (urban)
2. El Alto - 8 proyectos (urban)
3. Copacabana - 6 proyectos (ceremonial)
4. Sorata - 4 proyectos (rural)
5. Yungas - 5 proyectos (natural)
6. Oruro - 7 proyectos (ceremonial)
7. Potosí - 6 proyectos (rural)
8. Sucre - 4 proyectos (urban)

---

*Documento actualizado - 20 julio 2026 - Commit 102e379*
*Última actualización: Mejoras de UX y accesibilidad implementadas*
