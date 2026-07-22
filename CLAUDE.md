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
2. `generate-rss` — genera public/rss.xml (13 artículos)
3. `generate-sitemap` — genera public/sitemap.xml (36 URLs)
4. `vite build` — compila el bundle
5. `generate-pages` — pre-renderiza 36 páginas HTML estáticas en dist/

## Project Structure
```
src/
  components/     — UI components (PortfolioGrid, BlogDetail, Chatbot, etc.)
  lib/            — Firebase, analytics, structuredData
  translations.ts — TODOS los datos: portfolioItems, caseStudies, blogPosts, servicios, etc.
  types.ts        — TypeScript interfaces
  App.tsx         — Router principal + todas las páginas
  index.css       — Tailwind + animaciones CSS custom
public/
  images/
    portfolio/    — Fotos reales organizadas por proyecto
    blog/         — Imágenes de artículos
    behind-scenes/
  sitemap.xml     — 36 URLs
  rss.xml         — 13 artículos
fotos comprimidas/ — Fotos originales (no commiteadas a git)
scripts/
  generate-pages.js   — Pre-renderizado estático
  generate-sitemap.js — Generación de sitemap
  generate-rss.js     — Generación de RSS
```

## Portfolio — 9 Items Reales

| # | ID | Cliente | Año | Fotos |
|---|-----|---------|-----|-------|
| 1 | documental-tipnis | Abya Yala TV | 2016 | 7 (reales TIPNIS) |
| 2 | brasil-la-poderosa | Abya Yala TV | 2018 | 6 |
| 3 | la-estrella | Abya Yala TV | 2017 | 4 (Premio Eduardo Abaroa) |
| 4 | gran-poder | RTP | 2015-2019 | 10 |
| 5 | world-atomic-week | Bolivia TV | 2024 | 7 (Moscú) |
| 6 | aniversario-potosi | Abya Yala TV | 2017 | 8 |
| 7 | che-la-higuera | Abya Yala TV | 2017 | 6 |
| 8 | trinidad-bolivia | Abya Yala TV | 2018 | 6 |
| 9 | plantas-energia | RTP | 2014-2019 | 7 |

### Portfolio UI:
- Grid 3 columnas (responsive: 1→2→3)
- Cada card: thumbnail (object-contain, sin crop) + metadatos + tech tags
- Click abre lightbox modal con: hero image + descripción + tech details + galería completa de fotos
- `images: string[]` — todas las fotos se muestran en grilla debajo de la descripción
- Sin videos (todos los videoUrl eliminados)
- Filtros por categoría + búsqueda

## Blog & Noticias — 13 Artículos
- ids 1-2: Blog posts (detrás de cámaras, evolución TV)
- ids 3-13: Noticias reales de medios bolivianos
- Cada artículo tiene `source` + `sourceUrl` → link clickeable
- `marked.parse()` renderiza Markdown como HTML

### Fuentes de noticias:
- La Razón, Los Tiempos, Opinión, La Octava, Abya Yala TV (cobertura propia FENAVID), reflexión personal

## TypeScript Key Types
- `PortfolioItem`: id, title, titleEn, category, role, year, client, description, imageUrl, images[], videoUrl?, isCaseStudy?, caseStudyId?, techDetails[]
- `CaseStudy`: id, title, context, challenges, solutions, result, role, team, hardware, software, award, imageUrl, btsImages[]
- `BlogPost`: id, slug, title, excerpt, content (Markdown), date, readTime, imageUrl, images[], category, source, sourceUrl, videoUrl?, enableComments, font?, breaking?, featured?, location?

## Key Decisions & Pitfalls
1. **lucide-react@0.546.0** — v1.25.0+ elimina iconos de marca (Linkedin, Facebook, Twitter, Youtube)
2. **typescript@5.8.3** — TS 7.0.2 rompe build de Vite/Rolldown (`Cannot read properties of undefined (reading 'readFile')`)
3. **Sin SSR** — El pre-renderizado en build genera HTML estático por ruta (36 páginas)
4. **Portfolio con datos reales** — Todos los items y fotos son reales del trabajo de Freddy
5. **No hay videos** — Ningún portfolio item tiene videoUrl; se muestran fotos en su lugar
6. **aggregateRating eliminado** del schema LocalBusiness (Google lo marcaba error crítico)
7. **Firebase merge por slug** — No sobreescribe artículos locales definidos en translations.ts

## Work Log (Resumen)
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

## Git
- Branch: main
- Remote: origin/main (GitHub)
- Auto-deploy a Vercel en cada push
- No commitear: `fotos comprimidas/` (solo las copias en `public/images/portfolio/`)
