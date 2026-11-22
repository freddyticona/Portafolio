# AGENTS.md — Freddy Ticona Portfolio (freddydev.net)

> Este archivo es la guía de trabajo para agentes en este repositorio.
> La documentación editorial completa vive en `CLAUDE.md` (fuente de verdad).

## Stack

- React 19 + Vite 8 (SPA, sin SSR) · TypeScript 5.8.3 · Tailwind CSS v4
- react-router-free: enrutado por estado en `src/App.tsx` (`activePage` + `pushState`)
- SEO: `react-helmet-async`, JSON-LD propio (`src/lib/structuredData.ts`), pre-renderizado estático
- Datos editoriales: `src/data/blogPosts.ts` (metadatos) + `src/data/blogContent/group-XX.ts` (cuerpo, carga diferida)
- Servicios y precios: **única fuente** `src/data/servicesPricing.json`
- Analytics: GA4 (`send_page_view: false` + `page_view` manual desde `src/lib/seo.ts`)
- Hosting: Vercel (Hobby), dominio `https://freddydev.net`

## Comandos

```bash
npm run dev                      # servidor local
npx tsc --noEmit                 # comprobación de tipos
npx vite build                   # bundling rápido
node scripts/generate-pages.js   # pre-renderiza HTML estático en dist/
node scripts/generate-sitemap.js # regenera public/sitemap.xml
node scripts/generate-rss.js     # regenera public/rss.xml
npm run build                    # pipeline completo (incluye Puppeteer, saltar en CI)
opencode mcp list                # comprobar servidores MCP conectados
```

Regenera contenido con `npm run split-content` / `npm run chunk-content` si cambias `blogPosts.ts`.

## Estructura relevante

```
src/
  App.tsx                    router/shell, rutas: /blog/:slug, /guias/:slug, /servicios/:id
  pages/                     HomePage, AboutPage, PortfolioPage, CVPage, BlogPages,
                             GuiasPage, ServiceDetailPage, OtherPages, reportajes
  components/                BlogDetail, ServiceLanding, PortfolioShowcase, Navbar, etc.
  data/                      blogPosts.ts, blogContent/, proyectos.json, servicesPricing.json
  lib/                       seo.ts, structuredData.ts, analytics.ts, summary.ts
scripts/                     generate-pages.js, generate-sitemap.js, generate-rss.js, ...
public/                      images/, portfolio/, rss.xml, sitemap.xml, robots.txt
```

## Convenciones críticas

1. **Nunca dos títulos distintos para la misma ruta.** El `<title>` del home está unificado en `index.html`, `src/lib/seo.ts` y `scripts/generate-pages.js`.
2. **El detalle manda su propio SEO.** En rutas `/blog/:slug`, `/guias/:slug` y `/servicios/:id`, el shell NO llama a `updateMetaTags` (ver `isArticlePath()` / `isServicePath()` en `App.tsx`).
3. **Un solo JSON-LD en el DOM.** Usar siempre `injectStructuredData()`, que limpia scripts previos.
4. **Filtros derivados de datos.** Las categorías del catálogo de diseño salen de `src/data/proyectos.ts`, no de listas hardcodeadas.
5. **Portadas con `object-contain`** y fondo desde la paleta del proyecto, sin recortes.
6. **Sin videos en el catálogo de diseño**; el reel de Vértice se muestra como slide dentro del modal cuando está publicado.
7. **Rutas `/noticias/*` retiradas**: redirigen 308 a `/blog`. No reintroducir la sección.
8. **`.opencode/` es local**: no commitear salvo que se pida explícitamente.

## Skills del proyecto

- `monetizacion-hibrida` — reglas de anuncios/afiliados/checkout por tipo de página.
- `seo-y-alcance` — nombres de multimedia, metadatos, JSON-LD, sitemap y robots.

Cárgalas con la herramienta `skill` cuando el trabajo encaje con su descripción.

## MCP configurados en `opencode.json`

`playwright`, `context7`, `fetch` (locales, vía `npx`). Verificar con `opencode mcp list`.
