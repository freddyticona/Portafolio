# FreddyDev.net — Resumen Técnico

## Stack
- **Framework:** React 19 + Vite 8 (SPA, sin SSR)
- **Language:** TypeScript 5.8.3
- **Styling:** Tailwind CSS v4 (@tailwindcss/vite)
- **Routing:** react-router-dom v7 (BrowserRouter)
- **SEO:** react-helmet-async, sitemap 36 URLs, RSS, JSON-LD
- **Icons:** lucide-react@0.546.0 (NO actualizar a v1+)
- **Animation:** framer-motion
- **Markdown:** marked (npm) — `marked.parse(content, { breaks: true })`
- **Database:** Firebase Firestore (posts collection, merge por slug)
- **Monitoring:** GA4 (G-XRW2HZHB69) + @sentry/react
- **Hosting:** Vercel (auto-deploy desde main)
- **Domain:** https://freddydev.net

## Build Pipeline
`npm run build` ejecuta en orden:
1. `generate-icons` — favicons + PWA icons
2. `generate-rss` — public/rss.xml (17 artículos)
3. `generate-sitemap` — public/sitemap.xml (36 URLs)
4. `vite build` — bundle de producción
5. `generate-pages` — pre-renderiza 44 páginas HTML estáticas en dist/

## Estructura
```
src/
  components/    — UI components (PortfolioGrid, BlogDetail, Chatbot, ContactForm, etc.)
  lib/           — Firebase, analytics, seo, structuredData
  translations.ts — TODOS los datos (portfolio, blog, servicios, etc.)
  types.ts       — TypeScript interfaces
  App.tsx        — Router + todas las páginas
  index.css      — Tailwind + animaciones custom
public/
  images/portfolio/ — Fotos reales por proyecto
  images/blog/      — Imágenes de artículos
scripts/
  generate-pages.js   — Pre-renderizado estático
  generate-sitemap.js — Generación de sitemap
  generate-rss.js     — Generación de RSS
```

## Portfolio — 9 Items Reales
TIPNIS, Brasil La Poderosa, La Estrella, Gran Poder, Moscú, Potosí, Che Higuera, Trinidad, Plantas Energía

## Blog & Noticias — 17 Artículos
- ids 1-2: Blog posts (detrás de cámaras, evolución TV)
- ids 3-17: Noticias reales de medios bolivianos

## Decisiones Clave & Pitfalls
1. **lucide-react@0.546.0** — v1.25.0+ elimina iconos de marca
2. **typescript@5.8.3** — TS 7.0.2 rompe build de Vite/Rolldown
3. **Sin SSR** — Pre-renderizado en build genera HTML estático por ruta
4. **Google Fonts** — NO usar `@import` en CSS (render-blocking). Cargar con `media="print" onload="this.media='all'"`
5. **Firebase merge por slug** — No sobreescribe artículos locales de translations.ts

## Última Sesión: Eliminar Render-Blocking (julio 2026)

### Problema
Lighthouse detectó 490ms de render-blocking: CSS principal (120ms) + Google Fonts CSS (230ms)

### Solución
1. **Google Fonts** — Eliminado `@import` de `index.css`. Agregado `<link media="print" onload>` en `index.html` con inline `@font-face` para latin subset (Inter 400/700, Space Grotesk 400/700)
2. **Main CSS** — Plugin custom `makeCssNonBlocking` en `vite.config.ts` convierte `<link rel="stylesheet">` → `<link rel="preload" as="style" onload>`
3. **Critical CSS inline** — `body { background, color, margin }` en `<style>` en `<head>`

### Archivos modificados
- `index.html` — +26 líneas (critical CSS, Google Fonts async)
- `src/index.css` — eliminado `@import` de Google Fonts
- `vite.config.ts` — +plugin makeCssNonBlocking
- `public/rss.xml` — actualizado por build

### Commit
`681c36f` — fix: eliminar render-blocking de CSS y Google Fonts
