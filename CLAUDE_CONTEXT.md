# CLAUDE CONTEXT - PORTAFOLIO FREDDY TICONA

**IMPORTANTE:** Este documento es para dar contexto a una NUEVA instancia de Claude cuando se reinicie la terminal. No necesitas revisar todos los archivos - usa este documento para entender el estado actual del proyecto.

---

## INICIO RÁPIDO

**Cuando te pida continuar con este proyecto:**

1. Lee este documento completo
2. Lee también `CLAUDE.md` (contexto técnico detallado)
3. NO revises todos los archivos innecesariamente
4. Pregunta qué mejora o tarea específica quiere el usuario
5. Working directory: `C:\Users\Asus\Downloads\portafolio cv studio`

---

## USUARIO

**Nombre:** Freddy Ticona Guzmán
**Profesión:** Camarógrafo y Realizador Audiovisual
**Ubicación:** La Paz, Bolivia
**Contacto:** freddyticona62@gmail.com | +591 62408420

**Repositorio GitHub:** https://github.com/freddyticona/Portafolio
**Sitio web:** https://freddydev.net ✅ (DOMINIO ACTIVO)
**Carpeta local:** `C:\Users\Asus\Downloads\portafolio cv studio`

**Google Analytics ID:** G-XRW2HZHB69

---

## ESTADO ACTUAL DEL PROYECTO

**Última actualización:** Julio 2026 - Portfolio con fotos reales

### RESUMEN GENERAL

El sitio es una **plataforma premium completa** con:
- 9 items de portafolio con fotos reales del trabajo de Freddy
- 13 artículos de blog/noticias (10 reales de medios bolivianos + 3 propios)
- 36 páginas pre-renderizadas en build
- SEO optimizado (sitemap, RSS, JSON-LD, react-helmet-async)
- Deploy automático en Vercel desde main

---

## PORTFOLIO - 9 ITEMS REALES (con fotos)

| # | ID | Cliente | Año | Fotos |
|---|-----|---------|-----|-------|
| 1 | documental-tipnis | Abya Yala TV | 2016 | 7 (reales TIPNIS) |
| 2 | brasil-la-poderosa | Abya Yala TV | 2018 | 6 (main: aeropuerto) |
| 3 | la-estrella | Abya Yala TV | 2017 | 4 (Premio Eduardo Abaroa) |
| 4 | gran-poder | RTP | 2015-2019 | 10 |
| 5 | world-atomic-week | Bolivia TV | 2024 | 7 (Moscú) |
| 6 | aniversario-potosi | Abya Yala TV | 2017 | 8 |
| 7 | che-la-higuera | Abya Yala TV | 2017 | 6 |
| 8 | trinidad-bolivia | Abya Yala TV | 2018 | 6 |
| 9 | plantas-energia | RTP | 2014-2019 | 7 |

### Items eliminados (sin fotos reales o inventados):
- Carnaval de Oruro, Cobertura Electoral, Conflictos Sociales
- Fronteriza Chile, Rugir Sajama, Mineros Cerro Rico, Salar Uyuni
- Spots Publicitarios, Videoclip Musical, Urkupiña

### Portfolio features:
- `imageUrl`: foto principal (thumbnail)
- `images: string[]`: todas las fotos del proyecto, se muestran en galería en el lightbox
- `object-contain` en cards (no crop de cabezas)
- Lightbox modal con galería completa de fotos debajo de la descripción
- Sin videos (todos los videoUrl eliminados)
- `isCaseStudy: true` solo en La Estrella (tiene case study completo)
- Filtros por categoría + búsqueda

---

## BLOG & NOTICIAS - 13 ARTÍCULOS

- ids 1-2: Blog posts (detrás de cámaras, evolución TV)
- ids 3-13: Noticias reales de medios bolivianos
- Cada artículo tiene `source` + `sourceUrl` → link clickeable
- `marked.parse()` renderiza Markdown como HTML
- Fuentes: La Razón, Los Tiempos, Opinión, La Octava, Abya Yala TV, reflexión personal

---

## DECISIONES CRÍTICAS

1. **lucide-react@0.546.0** — NO actualizar a v1.25.0+ (elimina iconos de marca: Linkedin, Facebook, Twitter, Youtube)
2. **typescript@5.8.3** — NO actualizar a TS 7.0.2 (rompe build de Vite/Rolldown)
3. **Sin SSR** — El pre-renderizado en build genera HTML estático por ruta (36 páginas)
4. **Portfolio con datos reales** — Todos los items y fotos son reales del trabajo de Freddy
5. **No hay videos** — Ningún portfolio item tiene videoUrl; se muestran fotos en su lugar
6. **aggregateRating eliminado** del schema LocalBusiness (Google lo marcaba error crítico)
7. **Firebase merge por slug** — No sobreescribe artículos locales definidos en translations.ts
8. **build: sin errores TS** — Verificar siempre con `npm run build` antes de commit

---

## WORK LOG (HISTORIAL COMPLETO)

### Sesiones 1-7: Fundación, Blog, SEO, Firebase, UI, Noticias reales
- React+Vite+Tailwind setup, 6 páginas base, i18n es/en
- Blog/Noticias con 13 artículos (10 reales + 3 propios)
- SEO: react-helmet-async, sitemap 36 URLs, robots.txt, RSS, JSON-LD
- Firebase Firestore para comentarios/posts
- Google My Business + GA4 (G-XRW2HZHB69) + Sentry
- Dominio freddydev.net configurado en Vercel

### Sesión 8: Optimización Lighthouse Performance
- Firebase lazy load (bundle reducido 36%)
- Componentes lazy load: Timeline, PortfolioGrid, BlogCard, etc.
- Preload imagen hero con fetchpriority high
- Commit: `8deb631`

### Sesión Mejoras Integrales
- CI/CD: workflow corregido (lighthouse, e2e smoke tests)
- Rendimiento: vite.config chunks, sourcemaps, preloads fonts
- Accesibilidad WCAG AA: contraste, focus-visible, skip-link, lang dinámico
- SEO: hreflang, rel="me", FAQ schema (generateFAQStructuredData)
- Commit: `83ab99e`

### Sesión Portfolio Real (julio 2026):
- Reemplazados TODOS los items inventados por experiencias reales de Freddy
- Eliminados items falsos: Fronteriza Chile, Rugir Sajama, Mineros Potosí, Salar Uyuni, Spots, Videoclip, Urkupiña, Carnaval Oruro, Cobertura Electoral, Conflictos Sociales
- Agregados items reales: TIPNIS, Brasil La Poderosa, La Estrella (Premio Eduardo Abaroa), Gran Poder, World Atomic Week Moscú, Potosí, Che Higuera, Trinidad, Plantas Energía
- Integradas fotos reales desde `fotos comprimidas/` a `public/images/portfolio/`
- Agregado `images: string[]` al type PortfolioItem
- Galería completa de fotos en lightbox (images[])
- Fix crop de fotos (object-contain en vez de object-cover)
- Eliminados todos los videoUrl (no hay videos reales)
- Case study de La Estrella reescrito con historia real (escultor/pintor alteño)
- Build exitoso: 36 páginas

---

## ARCHIVOS RELEVANTES

- `src/translations.ts` — TODOS los datos: portfolioItems (9), caseStudies (1), blogPosts (13)
- `src/components/PortfolioGrid.tsx` — grid + lightbox con galería de fotos
- `src/components/BlogDetail.tsx` — marked.parse() + source links
- `src/types.ts` — PortfolioItem (con images[]), CaseStudy, BlogPost
- `src/lib/analytics.ts` — GA4 ID
- `public/images/portfolio/` — fotos reales por proyecto
- `public/sitemap.xml` — 36 URLs
- `scripts/generate-pages.js` — 36 páginas pre-renderizadas
- `scripts/generate-rss.js` — RSS con 13 artículos

---

## COMANDOS

```bash
# Build (generate icons, rss, sitemap, vite build, prerender pages)
npm run build

# Dev server
npm run dev

# Type check
npm run lint

# Deploy a Vercel (automático con git push)
git push

# Lighthouse CLI
lighthouse https://freddydev.net --output html --output-path lighthouse-report.html --view
```

---

## GIT

- Branch: main
- Remote: origin/main (GitHub)
- Auto-deploy a Vercel en cada push
- **NO commitear:** `fotos comprimidas/` (solo las copias en `public/images/portfolio/`)
- Siempre verificar build sin errores antes de commit

---

*Última actualización: Julio 2026 - Portfolio con fotos reales*
