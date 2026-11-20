# CLAUDE.md — Freddy Ticona Portfolio (freddydev.net)

## Stack
- **Framework:** React 19 + Vite 8 (SPA, no SSR)
- **Language:** TypeScript 5.8.3
- **Styling:** Tailwind CSS v4 (@tailwindcss/vite)
- **Routing:** react-router-dom v7 (BrowserRouter)
- **SEO:** react-helmet-async (meta tags, canonical, OG, Twitter Cards)
- **Icons:** lucide-react@0.546.0 (NO actualizar a v1.25.0+, elimina iconos de marca)
- **Animation:** framer-motion
- **Markdown:** marked (npm) — `marked.parse(content, { breaks: true })`
- **Database:** Firebase Firestore (posts collection, merge por slug)
- **Analytics:** Google Analytics 4 (G-XRW2HZHB69)
- **Sentry:** @sentry/react (monitoreo de errores)
- **Hosting:** Vercel (auto-deploy desde main)
- **Domain:** https://freddydev.net

## Build Pipeline
`npm run build` ejecuta en orden:
1. `generate-icons` — genera favicons y PWA icons
2. `generate-rss` — genera public/rss.xml (104 artículos)
3. `generate-sitemap` — genera public/sitemap.xml (116 URLs)
4. `generate-image-dimensions` — genera src/lib/imageDimensions.ts
5. `vite build` — compila el bundle
6. `generate-pages` — pre-renderiza páginas HTML estáticas en dist/ (121 rutas)
7. `prerender` — renderiza con Puppeteer (se salta en CI: `process.env.CI`)

> **Nota:** El número de URLs/artículos se calcula dinámicamente desde `src/data/blogPosts.ts`
> (ver scripts `generate-rss.js`, `generate-sitemap.js`, `generate-pages.js`). No hardcodear conteos.
> Ya no existe `generate-news-sitemap` (la sección de noticias fue retirada).

## Project Structure
```
src/
  components/     — UI components (PortfolioGrid, BlogDetail, BlogLayout, Chatbot, etc.)
  data/
    blogPosts.ts  — Metadatos de los 104 artículos (fuente única)
    blogContent/  — Cuerpos HTML troceados por grupos (carga diferida)
    loader.ts     — Carga asíncrona: metadatos + grupo del artículo abierto
    servicesPricing.json — Catálogo de servicios y precios reales (fuente única)
  hooks/          — useScrollTracking, useGsapAnimations, useServiceWorker, etc.
  lib/            — Firebase, analytics, seo, structuredData, summary
  pages/          — Páginas modulares (HomePage, AboutPage, PortfolioPage, CVPage, BlogPages, GuiasPage, OtherPages)
  translations.ts — Textos de UI (es/en) y datos del portafolio
  types.ts        — TypeScript interfaces
  types.translation.ts — Tipo inferido para traducciones
  App.tsx         — Router/shell modular (lazy loading por ruta)
  index.css       — Tailwind v4 + animaciones CSS custom
public/
  images/
    portfolio/    — Fotos reales organizadas por proyecto
    blog/         — Imágenes de artículos
    behind-scenes/
  404.html        — 404 estático con rutas útiles (WhatsApp + horario)
  sitemap.xml     — 116 URLs
  rss.xml         — 104 artículos
fotos comprimidas/ — Fotos originales (no commiteadas a git)
scripts/
  generate-pages.js   — Pre-renderizado estático (+ schema de servicios/FAQ)
  generate-sitemap.js — Generación de sitemap
  generate-rss.js     — Generación de RSS
  generate-icons.js   — Favicons/PWA icons
  prerender.mjs       — Puppeteer (se salta en CI)
```

## Portfolio — 8 Items Reales

| # | ID | Cliente | Año | Fotos |
|---|-----|---------|-----|-------|
| 1 | documental-tipnis | Abya Yala TV | 2016 | 7 (reales TIPNIS) |
| 2 | brasil-la-poderosa | Abya Yala TV | 2018 | 6 |
| 3 | gran-poder | RTP | 2015-2019 | 10 |
| 4 | world-atomic-week | Bolivia TV | 2024 | 7 (Moscú) |
| 5 | aniversario-potosi | Abya Yala TV | 2017 | 8 |
| 6 | che-la-higuera | Abya Yala TV | 2017 | 6 |
| 7 | trinidad-bolivia | Abya Yala TV | 2018 | 6 |
| 8 | plantas-energia | RTP | 2014-2019 | 7 |

> Item "la-estrella" fue removido (commit `e543f86`). Título de sección renombrado a "Coberturas y Documentales".

### Portfolio UI:
- Grid 3 columnas (responsive: 1→2→3)
- Cada card: thumbnail (object-contain, sin crop) + metadatos + tech tags
- Click abre lightbox modal con: hero image + descripción + tech details + galería completa de fotos
- `images: string[]` — todas las fotos se muestran en grilla debajo de la descripción
- Sin videos (todos los videoUrl eliminados)
- Filtros por categoría + búsqueda

## Blog & Guías — 104 Artículos (sin noticias)
- **73 artículos de blog** (reflexiones, tutoriales, análisis técnico, detrás de cámaras) + **31 guías de trámites** en Bolivia
- La sección de noticias fue **retirada** (commit `719b0fe`): `/noticias` y `/noticias/*` devuelven 308 a `/blog`
- Metadatos en `src/data/blogPosts.ts`; cuerpos HTML en `src/data/blogContent/group-XX.ts` (carga diferida por grupo)
- Rutas: `/blog` (listado), `/blog/<slug>` (artículo), `/guias`, `/guias/<slug>`
- Guías de trámites: categoría `Guías y Trámites` → schema `TechArticle`; el resto, `BlogPosting`
- Body de todos los artículos es HTML (no Markdown); `src/lib/summary.ts` extrae los "3 puntos" del HTML
- Artículos con `source` + `sourceUrl` conservan la atribución original visible en el cuerpo

## Certificaciones — 18 credenciales
- 5 primarias (grado académico, competencias, cinematografía, fullstack, ciberseguridad) — siempre visibles en CV
- 13 secundarias (Cisco, Alura Latam, Google Actívate, Coursera, Replit, etc.) — colapsables
- Logos en hero section: Cisco, Alura Latam, Google Actívate, Coursera

## TypeScript Key Types
- `PortfolioItem`: id, title, titleEn, category, role, year, client, description, imageUrl, images[], videoUrl?, isCaseStudy?, caseStudyId?, techDetails[]
- `CaseStudy`: id, title, context, challenges, solutions, result, role, team, hardware, software, award, imageUrl, btsImages[]
- `BlogPost`: id, slug, title, excerpt, content (Markdown), date, readTime, imageUrl, images[], category, source, sourceUrl, videoUrl?, enableComments, font?, breaking?, featured?, location?

## Key Decisions & Pitfalls
1. **lucide-react@0.546.0** — v1.25.0+ elimina iconos de marca (Linkedin, Facebook, Twitter, Youtube)
2. **typescript@5.8.3** — TS 7.0.2 rompe build de Vite/Rolldown (`Cannot read properties of undefined (reading 'readFile')`)
3. **Sin SSR** — El pre-renderizado en build genera HTML estático por ruta (121 rutas); el texto completo de los artículos lo añade `prerender.mjs` (Puppeteer), que **no corre en CI/Vercel**
4. **Portfolio con datos reales** — Todos los items y fotos son reales del trabajo de Freddy
5. **No hay videos** — Ningún portfolio item tiene videoUrl; se muestran fotos en su lugar
6. **aggregateRating eliminado** del schema LocalBusiness (Google lo marcaba error crítico)
7. **Precios en una sola fuente** — `src/data/servicesPricing.json` → `src/config.ts` (`SERVICES_PRICING`) → schema JSON-LD (`src/lib/structuredData.ts`) y schema estático (`scripts/generate-pages.js`). Cambiar un precio ahí lo actualiza en web, JSON-LD y HTML
8. **GA4: `send_page_view: false` + page_view manual** — `src/lib/seo.ts` emite el `page_view` cuando el `<title>` ya es correcto; si se midiera en el click o en `initGA`, todas las vistas de la SPA quedarían con el título de la sección anterior (134 vistas de home con 4 usuarios). Deduplicado por `path|título` en `src/lib/analytics.ts`
9. **El shell no pisa el meta del artículo** — `App.tsx` hace `if (isArticlePath()) return;` en el efecto de SEO; el detalle (`BlogPages`/`GuiasPage`/`BlogDetail`) pone su `<title>`, canonical y JSON-LD
10. **Un solo JSON-LD en el DOM** — `injectStructuredData()` borra todos los `ld+json` previos (el del HTML prerenderizado y el de la página anterior) para no dejar grafos contradictorios
11. **Newsletter real** — `NewsletterSignup` envía a Web3Forms (misma key que el formulario de contacto) y dispara `generate_lead`; antes era un `alert()` sin persistencia
12. **Documentación sensible local-only** — Contextos IA, handoffs y resúmenes viven en `.opencode/archive/` (gitignored). Solo `CLAUDE.md` y `README.md` están en git.
13. **Pruebas locales no cuentan en GA4** — `initGA` desactiva GA en `localhost`/`127.0.0.1` para no contaminar el informe
14. **No commitear** — `hoja de vida/`, `fotos comprimidas/`, scripts temporales `_*`, `*.err`, `*.xlsx`, `build*.log`

## Medición GA4 (eventos disponibles)
- `page_view` (manual, con path y título correctos)
- `contact` (method: whatsapp|email|phone) y `generate_lead` (form_name: Contact Form|Newsletter)
- `select_service` (item_name, value, currency), `view_services`, `scroll_depth` (25/50/75/100), `share`, `view_item`, `file_download`, `language_change`
- Los eventos clave se marcan con ⭐ en la interfaz de GA4 (la plataforma no permite desmarcar `purchase`)

## Work Log (Resumen)
### Sesión retención + conversión + medición GA4 (noviembre 2026):
- **Blog**: carga progresiva (18 por página + "Cargar más"), sección "Empieza aquí" con 3 rutas de aprendizaje, guías destacadas, chips de categorías con contador; artículo con bloque "En 3 puntos" (extracción automática del HTML, `src/lib/summary.ts`), TOC visible por defecto y comentarios en `lazy()` con `showComments=false`
- **Conversión**: CTA de WhatsApp precargado con el título del artículo en cada artículo, caja de autor (E-E-A-T), newsletter real vía Web3Forms (antes `alert()`), CTA de servicio con evento `select_service`
- **Medición**: `page_view` manual desde `src/lib/seo.ts` (un view por navegación, con el título correcto), `scroll_depth` 25/50/75/100, `view_services`; GA4 deshabilitado en localhost
- **Bug corregido**: el efecto de SEO del shell pisaba el `<title>` del artículo con el de la sección (y el JSON-LD de la home quedaba en el DOM de `/servicios`, con un `Article` inexistente)
- **SEO**: schema de servicios con los 16 servicios y precios reales + `FAQPage` (6 preguntas), horario corregido (Lun–Vie 09:00–19:00, Sáb 09:00–14:00), 404 estático con rutas útiles
- **Verificado en producción**: 1 page_view por ruta con título correcto, `contact`/`select_service`/`view_services`/`scroll_depth` en el dataLayer, schema ItemList:16 + FAQPage:6, e2e + accesibilidad 10/10
- **Commit**: `f319dc7`

### Sesión artículo técnico SmartSub (julio 2026):
- Agregado artículo técnico (id 160, contentType analysis) sobre **SmartSub** (buxuku/SmartSub, MIT, 4k+ stars): pipeline completa de subtítulos con IA (descarga de video → transcripción → traducción → corrección → doblaje con clonación de voz → quemado de subtítulos)
- Contenido: origen del proyecto, 7 motores ASR, 20 servicios de traducción, instalación paso a paso (Windows/macOS/Homebrew/Linux), flujo 100% gratuito, privacidad, GPU y casos de uso para creadores/medios — con imágenes del repo descargadas localmente en `public/images/blog/smartsub/`
- Build: 160 páginas pre-renderizadas (159→160), 148 artículos (147→148)
- **Commit**: `cb6f9d7`

### Sesión 5 artículos crisis de Ceuta (julio 2026):
- Agregados 5 artículos nuevos (ids 145-149) en `src/translations.ts`: 60.000 migrantes en Ceuta (France 24/AP), pacto España-Marruecos de devolución (Europa Press/EFE), Sánchez visita Ceuta + sentencia del Supremo + boyas en el mar (Expansión), emergencia nacional rechazada (ABC/Vozpópuli), papel de las redes sociales en la viralidad del cruce (Expansión)
- Fotos originales de AP, Reuters, EFE extraídas de og:image de France 24 y Expansión
- Build: 149 páginas pre-renderizadas (144→149), 137 artículos (132→137)
- **Commit**: `94c001d`

### Sesión 5 nuevas noticias (julio 2026):
- Agregados 5 artículos nuevos (ids 18-22): Festival Cine Uyuni (El Deber), Xona Streaming Red Uno (PRODU), "A través de la tierra" documental (EntreCruzar), "Mi cuerpo, mi territorio" en YouTube (Nómadas), Serie boliviana con IA (VivePotosí)
- 54 páginas pre-renderizadas (44→54), RSS 22 artículos (17→22)
- Archivos: `src/translations.ts`, `scripts/generate-pages.js`, `scripts/generate-rss.js`
- **Commit**: `35e0fe8`

### Sesión 5 noticias virales + refactor (julio 2026):
- Agregados 5 artículos virales (ids 23-27): Messi bombón asesino, morsa abdominales, Chucky El Torno, abuelita invento casero, gatito Michael Jackson
- Reescritos en formato HTML según prompt SEO
- Refactor App.tsx monolito (~1061 líneas) → arquitectura modular en src/pages/ (~307 líneas)
- Creado src/types.translation.ts con tipo inferido TranslationT
- Optimizado build: drop console/debugger en producción
- SEO: corregidos hreflang, URLs canónicas, meta tags PWA iOS
- Accesibilidad: onKeyPress → onKeyDown en Navbar
- 64 páginas pre-renderizadas, RSS 27 artículos, sitemap 64 URLs
- **Commits**: `cc9757e`, `a77e85f`, `756a70b`, `1bef0a3`, `9c35135`

### Sesiones iniciales: Fundación, Blog, SEO, Firebase, UI
- React+Vite+Tailwind setup, 6 páginas base, i18n es/en
- Blog/Noticias con 13 artículos (10 reales + 3 propios)
- SEO: react-helmet-async, sitemap 36 URLs, robots.txt, RSS, JSON-LD
- Firebase Firestore para comentarios/posts
- Google My Business + GA4 + Sentry

### Sesión portfolio (julio 2026):
- Reemplazados todos los items inventados por experiencias reales
- Eliminados items falsos: Fronteriza Chile, Rugir Sajama, Mineros Potosí, Salar Uyuni, Spots, Videoclip, Urkupiña, Carnaval Oruro, Cobertura Electoral, Conflictos Sociales
- Agregados items reales: TIPNIS, Brasil La Poderosa, Moscú, Potosí, Che Higuera, Trinidad, Plantas Energía, Gran Poder
- Integradas fotos reales desde `fotos comprimidas/` a `public/images/portfolio/`
- Galería completa de fotos en lightbox (images[])
- Fix crop de fotos (object-contain)
- Eliminados todos los videoUrl (no hay videos reales)
- Build exitoso: 36 páginas

### Sesión mejoras integrales (julio 2026):
#### CI/CD Fixes:
- Corregido workflow CI: lighthouse (npm ci sintaxis → npx), e2e (smoke tests vs producción)
- Desactivados tests de API que no existen en sitio estático
- Commit: `83ab99e` - CI failures resolved

#### Rendimiento:
- vite.config.ts: chunkSizeWarningLimit 600→300kb, sourcemap hidden, chunks optimizados
- index.html: preloads de fonts críticas (Inter, Space Grotesk)
- App.tsx: React.lazy() para AdminPanel, Chatbot, BookingSystem, ServiceLanding, etc.
- Suspense con LoadingFallback para componentes lazy
- Estimado: bundle size -20-30%, TTI mejorado

#### Accesibilidad (WCAG AA):
- index.css: contraste mejorado #e0e0e0→#d4d4d4, focus-visible 3px
- App.tsx: lang attribute dinámico (es-BO/en), id="main-content" con tabIndex={-1}
- Navbar: ya tenía aria-expanded, aria-controls (verificado)
- SkipLink: ya implementado correctamente

#### SEO:
- seo.ts: hreflang implementado (es, en, x-default) para i18n
- index.html: rel="me" agregado (YouTube, LinkedIn, X, Facebook)
- structuredData.ts: generateFAQStructuredData() con 5 FAQs
- FAQ schema integrado en páginas servicios y contacto (rich snippets potenciales)

#### Archivos modificados:
- .github/workflows/ci.yml, playwright.config.ts
- e2e/smoke.spec.ts (nuevo), e2e/upload.spec.ts.disabled
- vite.config.ts, index.html
- src/App.tsx, src/index.css, src/lib/seo.ts, src/lib/structuredData.ts
- IMPROVEMENTS.md (nuevo documento de seguimiento)

### Sesión render-blocking + showreel (julio 2026):
#### Render-Blocking eliminado (~490ms):
- **Google Fonts**: eliminado `@import` de `index.css` → `<link media="print" onload>` en `index.html` con inline `@font-face` (latin subset)
- **Main CSS**: plugin Vite `makeCssNonBlocking` convierte `<link rel="stylesheet">` → `rel="preload" as="style"` con `onload`
- **Critical CSS**: `body { background, color, margin }` inline en `<head>`
- **Archivos**: `index.html`, `src/index.css`, `vite.config.ts`
- **Commit**: `681c36f`

#### Showreel actualizado:
- Video ID cambiado de `6CL4rVpVOYU` a `MK4au-qQcsw` en `src/config.ts`
- Se intentó video local `VIDEO FREDDY.mp4` (56 MB) pero se revirtió a YouTube por tamaño
- `.gitignore` actualizado con `public/videos/` y `VIDEO FREDDY.mp4`
- **Commit**: `de5e8db`

#### Service Worker reparado:
- `public/sw.js` tenía `const IMAGE_CACHE` declarado 2 veces → crash al registrarse (pantalla negra al navegar)
- Cambiada estrategia de assets JS/CSS de Cache First → Network First (evita servir chunks obsoletos tras deploy)
- Creado `public/offline.html` para fallback offline
- **Commit**: `5a27f20`

### Sesión 10 noticias virales Badabun (agosto 2026):
- Agregados 10 artículos nuevos (ids 978-987) reescritos y ampliados desde badabun.com (prestar cuenta bancaria, accidente vial, visa EU, asbesto, deudas Coppel, frases a policía, acta de nacimiento, niño con síndrome de Down, traileros, juez anti-maltrato)
- Fotos originales descargadas de `/assets/notas/` de cada artículo a `public/images/blog/badabun/` (jpg + webp optimizado)
- **Disclaimers**: cada artículo incluye "Nota editorial" aclarando qué afirmaciones carecen de fuente independiente verificada y señalando las verificables (artículos 16/17/400 Bis, OMS/IARC, CBP, caso Cicconetti)
- Categorías: Sociedad, Salud, Seguridad, Internacional | región 'International' | fuente BADABUN con sourceUrl original
- Build: 304 páginas pre-renderizadas (294→304), 290 artículos (280→290), RSS 290 items, sitemap 303 URLs
- **Commits**: (agregar tras push)

## Editorial Workflow — Artículos de Noticias

Al crear o reescribir un artículo para el sector de noticias, seguir este flujo editorial + SEO:

### 1. Reescritura Total
- No copiar y pegar. Sintetizar, parafrasear y reestructurar con tono periodístico, claro, imparcial y profesional.
- Aplicar pirámide invertida: el primer párrafo (lead) debe responder a ¿Qué?, ¿Quién?, ¿Cuándo?, ¿Dónde? y ¿Por qué es importante?

### 2. Estructura del Artículo
- **H1**: Título llamativo, directo, veraz y optimizado para SEO (evitar clickbait).
- **H2 / H3**: Subtítulos que dividan bloques temáticos.
- **Viñetas o listas**: Para resaltar datos, cifras clave o conclusiones.

### 3. Atribución Transparente (JTI)
- Identificar la fuente explícitamente en el cuerpo: *"Según el comunicado emitido por..."* o *"De acuerdo con reportes oficiales de..."*
- Sección final: `Con información de: [Fuente Original]` con enlace.

### 4. Valor Agregado
- Un párrafo breve contextualizando: por qué afecta al ciudadano común o antecedentes del tema.

### 5. SEO
- **Meta Título**: Máximo 60 caracteres.
- **Meta Descripción**: 140–160 caracteres con llamada a la acción implícita.
- **Keywords**: 3–5 palabras clave.
- **Prompt para imagen de portada**: Descriptivo para generador de imágenes IA.

### 6. Formato en translations.ts
- Los artículos se agregan al array `blogPosts` en `src/translations.ts`.
- Si el contenido lleva HTML (no Markdown), usar `contentHtml` en vez de `content`.
- Incrementar el contador en `generate-rss.js`, `generate-sitemap.js`, `generate-pages.js`.

### 7. Estándar Interactivo (obligatorio desde agosto 2026)
TODOS los artículos y reportajes deben integrar las fuentes como elementos visuales e interactivos embebidos en el cuerpo — **nunca como listas de enlaces**. Componentes CSS disponibles en `src/index.css` (clases `.embed-video`, `.tweet-card`, `.expert-quote`, `.stat-grid`/`.stat-card`, `.doc-card`, `.report-figure`, `.report-chapter`):

- **Reproductor de video 16:9** (`.embed-video`): iframes de YouTube con IDs verificados (nunca inventar IDs).
- **Tarjetas de tuit** (`.tweet-card`): avatar con color de marca, nombre, insignia de verificación, @handle, texto, fecha y botón "Ver en X →" a la cuenta real. Si se tiene el ID real del tuit, usar el widget oficial: `<blockquote class="twitter-tweet">...<a href="https://x.com/USER/status/ID">...</a></blockquote>` (BlogDetail.tsx lo convierte en embed interactivo real).
- **Citas de expertos** (`.expert-quote`): pull-quote con avatar de gradiente, nombre, cargo e institución.
- **Infografías de datos** (`.stat-grid`/`.stat-card`): tarjetas con cifras grandes y hover.
- **Tarjetas de documentos oficiales** (`.doc-card`): clickeables hacia informes, boletines, leyes, PDFs.
- **Fotografías** (`.report-figure`): figuras con caption; imágenes reales descargadas de Wikimedia Commons (verificar tema, nunca reutilizar fotos ajenas al tema).
- **Capítulos** (`h2.report-chapter`): separadores temáticos para reportajes extensos.

Estructura de reportaje especial: lead 5W+1H en cursiva → capítulos H2 con multimedia distribuido → análisis comunicacional → cronología en infografía → cierre con atribución múltiple. Contenido siempre reescrito y conceptualizado, en español y en inglés.

## Git
- Branch: main
- Remote: origin/main (GitHub)
- Auto-deploy a Vercel en cada push
- No commitear: `fotos comprimidas/`, `fotos articulos/`, `fotos colacion de grado licenciatur/`, `fotos trabajo/` (solo las copias en `public/images/portfolio/`)
- No commitear: `.opencode/` (contexto IA, handoffs, resúmenes con info sensible)
- No commitear: documentos `.md` de contexto (ver `.gitignore`) — viven locales en `.opencode/archive/`
