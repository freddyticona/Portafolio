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

---

## Sesión: Showreel YouTube con nuevo video (julio 2026)

### Cambio
Showreel actualizado al video `MK4au-qQcsw` en YouTube (mismo contenido que `VIDEO FREDDY.mp4`). Se descartó el video local por el tamaño (56 MB).

### Archivos modificados
- `src/config.ts` — `YOUTUBE_VIDEOS.showreel` actualizado de `6CL4rVpVOYU` a `MK4au-qQcsw`
- `public/videos/` — eliminado del repo (video local no necesario)

### Commit
`de5e8db` — feat: actualizar showreel a nuevo video YouTube (MK4au-qQcsw)

---

## Sesión: Service Worker reparado (julio 2026)

### Problema
Pantalla negra al navegar entre páginas. Error en consola: `ServiceWorker script evaluation failed` por `const IMAGE_CACHE` declarado 2 veces en `sw.js`. Además, chunks JS del build anterior daban 404 porque el SW los servía de caché con Cache First.

### Solución
1. **Duplicate const eliminado** — línea 30 `const IMAGE_CACHE = 'freddy-ticona-images-v1'` eliminada (ya declarado en línea 12)
2. **JS/CSS: Cache First → Network First** — evita que el SW sirva chunks obsoletos tras un deploy
3. **offline.html creado** — fallback offline para cuando no hay conexión

### Archivos modificados
- `public/sw.js` — fix duplicate const + Network First para assets
- `public/offline.html` — nuevo (fallback offline)

### Commit
`5a27f20` — fix: reparar Service Worker (duplicado IMAGE_CACHE + Network First para assets)

---

## Sesión: 5 nuevas noticias (julio 2026)

### Nuevos artículos (ids 18-22)

| ID | Slug | Fuente | Categoría |
|----|------|--------|-----------|
| 18 | festival-cine-salar-uyuni-2026 | El Deber | Festivales |
| 19 | red-uno-xona-streaming | PRODU | Televisión |
| 20 | documental-travesia-tierra-cinemateca | EntreCruzar | Documental |
| 21 | documental-mi-cuerpo-mi-territorio-youtube | Revista Nómadas | Documental |
| 22 | serie-boliviana-inteligencia-artificial | VivePotosí | Tecnología |

### Archivos modificados
- `src/translations.ts` — +5 artículos (21 post total)
- `scripts/generate-pages.js` — +5 artículos (23 slugs, 54 páginas)
- `scripts/generate-rss.js` — +5 artículos (22 en RSS)

### Commit
`35e0fe8` — feat: agregar 5 nuevas noticias al portal (ids 18-22)
