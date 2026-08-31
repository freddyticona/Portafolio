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
2. `generate-rss` — genera public/rss.xml (89 artículos)
3. `generate-sitemap` — genera public/sitemap.xml (197 URLs)
4. `generate-news-sitemap` — genera public/sitemap-news.xml
5. `vite build` — compila el bundle
6. `generate-pages` — pre-renderiza páginas HTML estáticas en dist/

> **Nota:** El número de URLs/artículos se calcula dinámicamente desde `src/translations.ts`
> (ver scripts `generate-rss.js`, `generate-sitemap.js`, `generate-pages.js`). No hardcodear conteos.

## Project Structure
```
src/
  components/     — UI components (PortfolioGrid, BlogDetail, Chatbot, NewsPortal, etc.)
  lib/            — Firebase, analytics, seo, structuredData
  pages/          — Páginas modulares (HomePage, AboutPage, PortfolioPage, CVPage, BlogPages, OtherPages)
  translations.ts — TODOS los datos: portfolioItems, caseStudies, blogPosts, servicios, etc.
  types.ts        — TypeScript interfaces
  types.translation.ts — Tipo inferido para traducciones
  App.tsx         — Router/shell modular (~307 líneas, lazy loading por ruta)
  index.css       — Tailwind v4 + animaciones CSS custom
public/
  images/
    portfolio/    — Fotos reales organizadas por proyecto
    blog/         — Imágenes de artículos
    behind-scenes/
  sitemap.xml     — 197 URLs
  rss.xml         — 89 artículos
fotos comprimidas/ — Fotos originales (no commiteadas a git)
scripts/
  generate-pages.js   — Pre-renderizado estático
  generate-sitemap.js — Generación de sitemap
  generate-rss.js     — Generación de RSS
  generate-news-sitemap.js — Sitemap de noticias
  generate-icons.js   — Favicons/PWA icons
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

## Blog & Noticias — 89 Artículos
- ids 1-2: Blog posts (detrás de cámaras, evolución TV)
- ids 3-22: Noticias reales de medios bolivianos (La Razón, Los Tiempos, Opinión, El Deber, Unitel, ATB)
- ids 23-27: Noticias virales (ATB Digital, Unitel)
- ids 28+: Artículos de tecnología (NVIDIA, El Confidencial, AMD), deportes (ESPN), salud (OPS), guías trámites bolivianos (ids 79-88) y blog post técnico (id 89: Sistema de Gestión de Prensa)
- Cada artículo tiene `source` + `sourceUrl` → link clickeable
- Algunos artículos usan HTML puro (`contentHtml`) en vez de Markdown según formato SEO
- BlogPosts ordenados por fecha descendente
- Categorías dinámicas extraídas de los posts

### Fuentes de noticias:
- La Razón, Los Tiempos, Opinión, La Octava, El Deber, Unitel, ATB Digital, PRODU, VivePotosí, EntreCruzar, Revista Nómadas
- Abya Yala TV (cobertura propia FENAVID), reflexión personal

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
3. **Sin SSR** — El pre-renderizado en build genera HTML estático por ruta (64 páginas)
4. **Portfolio con datos reales** — Todos los items y fotos son reales del trabajo de Freddy
5. **No hay videos** — Ningún portfolio item tiene videoUrl; se muestran fotos en su lugar
6. **aggregateRating eliminado** del schema LocalBusiness (Google lo marcaba error crítico)
7. **Firebase merge por slug** — No sobreescribe artículos locales definidos en translations.ts
8. **NewsPortal sin categorías hardcodeadas** — Las categorías se extraen dinámicamente de los posts reales (12 categorías)
9. **Contenido HTML en artículos virales** — ids 23-27 usan HTML puro (h1, p em, h2, blockquote, ul) en vez de Markdown
10. **Documentación sensible local-only** — Contextos IA, handoffs y resúmenes viven en `.opencode/archive/` (gitignored). Solo `CLAUDE.md` y `README.md` están en git.

## Work Log (Resumen)
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
