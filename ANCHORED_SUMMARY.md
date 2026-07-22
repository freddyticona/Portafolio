# ANCHORED SUMMARY — Freddy Ticona Portfolio

## Objective
- Posicionar el sitio en Google para búsquedas como "camarógrafo La Paz", "editor audiovisual Bolivia" y "Freddy Ticona" mediante SEO técnico + contenido real + noticias reales de medios bolivianos citando fuente

## Important Details
- Sitio SPA (React+Vite) sin SSR — el pre-renderizado en build genera HTML estático por ruta
- 36 páginas pre-renderizadas en build
- Firebase `posts` collection merge por `slug` con defaults (no sobreescribe artículos locales)
- `marked` integrado en `BlogDetail.tsx` — `marked.parse(rawContent, { breaks: true })` renderiza Markdown como HTML
- 10 noticias reales de La Razón, Los Tiempos, Opinión, La Octava + 1 cobertura propia (FENAVID) + 1 reflexión personal + 3 artículos de Los Tiempos
- Cada artículo tiene `source` + `sourceUrl`, renderizado como link clickeable en BlogDetail
- Dominio: https://freddydev.net (Vercel)
- GA4: `G-XRW2HZHB69`
- `lucide-react@0.546.0` (v1.25.0 eliminaba íconos de marca)
- `typescript@5.8.3` (TS 7.0.2 rompía build)

## Portfolio — 9 Items (todos reales, con fotos reales)

### Items activos:
1. **Documental TIPNIS** (Abya Yala, 2016) — 7 fotos reales del TIPNIS
2. **Brasil - La Poderosa** (Abya Yala, 2018) — 6 fotos, main: aeropuerto
3. **La Estrella** (Abya Yala, 2017) — Premio Eduardo Abaroa, 4 fotos, main: DSC_2990
4. **Gran Poder** (RTP, 2015-2019) — 10 fotos
5. **World Atomic Week - Moscú** (Bolivia TV, 2024) — 7 fotos
6. **Documental Aniversario de Potosí** (Abya Yala, 2017) — 8 fotos
7. **50 Años del Che en La Higuera** (Abya Yala, 2017) — 6 fotos
8. **Trinidad - Aniversario de Bolivia** (Abya Yala, 2018) — 6 fotos
9. **Inauguraciones Plantas de Energía y Gas** (RTP, 2014-2019) — 7 fotos

### Items eliminados (sin fotos reales):
- ~~Carnaval de Oruro~~ (eliminado)
- ~~Cobertura Electoral~~ (eliminado)
- ~~Conflictos Sociales~~ (eliminado)
- ~~Fronteriza Chile~~ (era inventado, eliminado)
- ~~Rugir del Sajama~~ (era inventado, eliminado)
- ~~Mineros Cerro Rico~~ (era inventado, eliminado)
- ~~Salar de Uyuni~~ (era inventado, eliminado)
- ~~Spots Publicitarios~~ (eliminado)
- ~~Videoclip Musical~~ (eliminado)
- ~~Urkupiña~~ (nunca fue, reemplazado)

### Portfolio features:
- `imageUrl`: string (main thumbnail)
- `images: string[]` — todas las fotos del proyecto, se muestran en galería en el lightbox
- `object-contain` en cards (no crop de cabezas)
- Lightbox modal con galería completa de fotos
- Sin videos (todos los `videoUrl` eliminados porque no hay videos reales)
- `isCaseStudy: true` solo en La Estrella (tiene case study completo)

## Type: PortfolioItem (types.ts)
```
imageUrl: string;
images?: string[];  // All photos for gallery
videoUrl?: string;  // removed from all items
isCaseStudy?: boolean;
caseStudyId?: string;
techDetailsEs: string[];
techDetailsEn: string[];
```

## Images
- Todas las fotos están en `public/images/portfolio/<id>/`
- Fotos originales en `fotos comprimidas/` (no se commitearon)
- Formatos: .webp y .jpg

## Relevant Files
- `src/translations.ts` — portfolioItems (9 items), caseStudies (1), blogPosts (13)
- `src/components/PortfolioGrid.tsx` — grid + lightbox con galería
- `src/components/PortfolioFilters.tsx` — filtros
- `src/components/BlogDetail.tsx` — `marked.parse()` + source links
- `src/types.ts` — PortfolioItem, CaseStudy, BlogPost
- `src/lib/analytics.ts` — GA4 ID
- `public/images/portfolio/` — fotos reales por proyecto
- `public/sitemap.xml` — 36 URLs
- `scripts/generate-pages.js` — 36 páginas pre-renderizadas
- `scripts/generate-rss.js` — RSS con 13 artículos
