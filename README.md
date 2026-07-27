# Freddy Ticona — Portafolio Profesional

> **[freddydev.net](https://freddydev.net)** — Sitio web profesional de Freddy Ticona Guzman. Director de TV, realizador audiovisual y desarrollador Full Stack en Bolivia.

## Tech Stack

| Tecnología | Uso |
|------------|-----|
| React 19 + TypeScript 5.8 | Framework SPA |
| Vite 8 | Build tooling |
| Tailwind CSS v4 | Estilos |
| Firebase Firestore | Base de datos (posts, comentarios) |
| Vercel | Hosting + CI/CD |
| Sentry | Monitoreo de errores |
| Google Analytics 4 | Analíticas |

## Secciones

- **Inicio** — Hero cinematográfico, showreel, artículos destacados
- **Sobre Mí** — Biografía, habilidades, experiencia
- **Portafolio** — 8 coberturas/documentales reales (TIPNIS, Gran Poder, Moscú, etc.)
- **CV / Trayectoria** — Timeline profesional, 18 certificaciones
- **Blog** — Artículos de tecnología y producción audiovisual
- **Noticias** — 83+ artículos de medios bolivianos e internacionales
- **Guías** — Trámites y servicios en Bolivia
- **Galería** — Detrás de cámaras
- **Contacto / Reservas** — Formulario + WhatsApp

## Scripts

```bash
npm run dev          # Servidor local (puerto 3000)
npm run build        # Build de producción (189 páginas estáticas)
npm run test         # Tests unitarios (Vitest)
npm run test:e2e     # Tests E2E (Playwright)
npm run lint         # Typecheck (tsc --noEmit)
npm run preview      # Preview del build
```

## Estructura

```
src/
  components/    # UI components (57 archivos)
  pages/         # Páginas modulares (HomePage, AboutPage, CVPage, etc.)
  translations.ts # Datos: portfolio, blog, noticias, servicios
  lib/           # Firebase, SEO, structured data, analytics
  hooks/         # useGsapAnimations, useDarkMode, useServiceWorker
public/
  images/        # Portfolio, blog, behind-scenes (webp optimizadas)
scripts/
  generate-pages.js      # Pre-renderizado HTML estático
  generate-sitemap.js    # Sitemap XML
  generate-rss.js        # Feed RSS
```

## i18n

Soporte español (es-BO) e inglés. El idioma se persiste en localStorage.

## Licencia

SPDX-License-Identifier: Apache-2.0
