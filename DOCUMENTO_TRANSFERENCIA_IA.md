# 📑 Documento de Transferencia para la Siguiente IA / Desarrollador

> **Proyecto:** Portafolio CV Studio — Freddy Ticona Guzmán  
> **Fecha de Actualización:** 23 de Julio, 2026  
> **Estado:** 🟢 Estable — Build de Producción Verificado (64 páginas pre-renderizadas)

---

## 1. 🎯 Visión General del Proyecto

Este proyecto es el portafolio profesional, plataforma de servicios y portal de noticias de **Freddy Ticona Guzmán**, camarógrafo de prensa y realizador audiovisual galardonado con el Premio Nacional Eduardo Abaroa 2017 en La Paz, Bolivia.

### Stack Tecnológico Principal:
* **Frontend Core:** React 19 + TypeScript + Vite 8
* **Estilos:** TailwindCSS v4 + Vanilla CSS con variables de diseño personalizadas (Colores: `#050505` background dark, `#D4AF37` Gold accent)
* **Base de Datos & Auth:** Firebase Firestore & Auth (cargado dinámicamente)
* **Despliegue & Analíticas:** Vercel (Hosting, Analytics, Speed Insights)
* **Monitoreo:** Sentry (`@sentry/react`, `@sentry/vite-plugin`)
* **Procesamiento de Assets:** Scripts Node.js para SEO, Sitemap, RSS y Pre-rendering estático HTML.

---

## 2. 📊 Estado de la Auditoría y Mejoras Realizadas

### 🟢 Problemas Resueltos en esta Sesión:

1. **🏗️ Refactorización de `App.tsx` (Monolito → Arquitectura de Páginas):**
   - **Antes:** `App.tsx` tenía 1,061 líneas con JSX inline de 9 páginas.
   - **Ahora:** `App.tsx` es un router/shell limpio de ~300 líneas.
   - **Archivos creados en `src/pages/`:**
     - [`HomePage.tsx`](file:///c:/Users/Asus/Downloads/portafolio%20cv%20studio/src/pages/HomePage.tsx): Portada, Hero cinemático, Showreel, Stats, Resumen de blog y noticias.
     - [`AboutPage.tsx`](file:///c:/Users/Asus/Downloads/portafolio%20cv%20studio/src/pages/AboutPage.tsx): Biografía narrativa, Destrezas, Timeline interactivo, Galería BTS, Mapa de locaciones.
     - [`PortfolioPage.tsx`](file:///c:/Users/Asus/Downloads/portafolio%20cv%20studio/src/pages/PortfolioPage.tsx): Galería de proyectos con filtros y detalle de Case Studies.
     - [`CVPage.tsx`](file:///c:/Users/Asus/Downloads/portafolio%20cv%20studio/src/pages/CVPage.tsx): Trayectoria académica, certificados colapsables e impresión/descarga.
     - [`BlogPages.tsx`](file:///c:/Users/Asus/Downloads/portafolio%20cv%20studio/src/pages/BlogPages.tsx): Vistas de `BlogPage` y `NoticiasPage` con lectura de post completo (`BlogDetail`).
     - [`OtherPages.tsx`](file:///c:/Users/Asus/Downloads/portafolio%20cv%20studio/src/pages/OtherPages.tsx): `ContactPage`, `BookingPage`, `ServicesPage` y `AdminPage`.

2. **🔒 Seguridad de Tipos de Usuario (`types.ts`):**
   - Se removió el campo `password` del tipo `User` en `src/types.ts` para evitar almacenamiento inapropiado en Firestore.

3. **📝 Type Safety para Traducciones (`types.translation.ts`):**
   - Se creó `src/types.translation.ts` con el tipo `TranslationT = typeof translations['es']`.
   - Se actualizó `Navbar.tsx` y `Footer.tsx` para usar tipos estrictos en lugar de `t: any`.

4. **⚡ Optimización de Build (`package.json` & `vite.config.ts`):**
   - Se eliminó la doble ejecución de `generate-icons` en el script `prebuild`.
   - Se configuró `esbuildOptions: { drop: ['console', 'debugger'] }` en `vite.config.ts` para limpiar logs en producción.

5. **🌐 SEO Dinámico y URLs Canónicas (`seo.ts`):**
   - Se corrigieron los enlaces canónicos y de `hreflang` en `src/lib/seo.ts` para usar URLs limpias (`https://freddydev.net/sobre-mi`) en lugar de rutas con `#`.
   - Se configuró la actualización automática de `og:url`.

6. **📱 Meta Tags para PWA en iOS (`index.html`):**
   - Se agregaron las etiquetas meta de `apple-mobile-web-app-capable`, `apple-mobile-web-app-status-bar-style` y `apple-mobile-web-app-title`.

7. **⌨️ Accesibilidad (`Navbar.tsx`):**
   - Se cambió el evento deprecado `onKeyPress` por `onKeyDown`.

8. **📰 Portal de Noticias (`NewsPortal.tsx` & `NewsCard.tsx`):**
   - **Corrección de Bug de Filtros:** Se implementó normalización Unicode insensible a diacríticos (tildes) para que categorías como 'País', 'Economía' y 'Cultura & Entretenimiento' se filtren correctamente.
   - **Búsqueda Dinámica:** Agregada barra de búsqueda por texto libre (título, contenido, fuente, ubicación).
   - **Selector de Ordenamiento:** Filtro por 'Más Recientes', 'Más Leídas' (vistas) y 'Más Antiguas'.
   - **Paginación:** Carga progresiva con botón 'Cargar más noticias'.
   - **Accesibilidad:** Soporte completo de teclado (`role="button"`, `tabIndex={0}`, `onKeyDown`).

---

## 3. ⚠️ Acción Manual Requerida por el Usuario (Seguridad)

> [!CAUTION]
> **Rotación de Claves Firebase (`.env`):**
> El archivo `.env` fue detectado en el repositorio con las claves reales de Firebase:
> - `VITE_FIREBASE_API_KEY`
> - `VITE_FIREBASE_PROJECT_ID`
> - etc.
> 
> **Recomendación para el usuario:**
> 1. Ir a la Consola de Firebase (`portafolio-freddy-fa33c`) -> Project Settings.
> 2. Regenerar la API Key pública o aplicar restricciones de dominio HTTP Referrer para permitir solo `https://freddydev.net` y `http://localhost:3000`.
> 3. Asegurar que `.env` esté ignorado correctamente en Git antes de hacer push.

---

## 4. 📁 Estructura del Proyecto

```
portafolio cv studio/
├── dist/                      # Salida del build (64 páginas pre-renderizadas)
├── public/                    # Assets estáticos (og-image.jpg, favicons, manifest.json, sw.js)
├── scripts/                   # Scripts de generación estática (sitemap, rss, icons, pages)
├── src/
│   ├── analytics/             # Lógica interna de tracking
│   ├── assets/                # Imágenes y fuentes
│   ├── components/            # Componentes UI reutilizables (38 componentes)
│   ├── hooks/                 # Custom hooks (useServiceWorker, etc.)
│   ├── lib/                   # Librerías (firebase.ts, seo.ts, pdfGenerator.ts, etc.)
│   ├── pages/                 # 🆕 PÁGINAS MODULARES DE LA APLICACIÓN
│   │   ├── AboutPage.tsx
│   │   ├── BlogPages.tsx
│   │   ├── CVPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── OtherPages.tsx
│   │   └── PortfolioPage.tsx
│   ├── App.tsx                # 🟢 Router/Shell modular limpio
│   ├── config.ts              # Configuración centralizada de datos y precios
│   ├── index.css              # CSS global con Tailwind v4
│   ├── main.tsx               # Entry point de React
│   ├── translations.ts        # Datos de traducción y contenido por defecto
│   ├── types.ts               # Modelos de TypeScript
│   └── types.translation.ts   # 🆕 Tipo inferido para traducciones
├── index.html                 # HTML base con Schema.org y critical CSS
├── package.json               # Dependencias y scripts de build
├── vercel.json                # Configuración de cabeceras HTTP de Vercel
└── vite.config.ts             # Configuración de Vite, Sentry y manualChunks
```

---

## 5. 🛠️ Guía de Comandos para la Siguiente IA

Si necesitas ejecutar pruebas o builds en este proyecto, usa los siguientes comandos desde la terminal en el directorio raíz:

| Operación | Comando | Propósito |
|---|---|---|
| **Servidor de Desarrollo** | `npm run dev` | Inicia Vite en `http://localhost:3000` |
| **Verificación de Tipos** | `npx tsc --noEmit` | Verifica que no existan errores de TypeScript |
| **Build de Producción** | `npm run build` | Ejecuta icon-gen, sitemap, rss, vite build y static page generator |
| **Pruebas Unitarias** | `npm test` | Ejecuta Vitest |
| **Optimización de Imágenes**| `npm run optimize-images` | Script de compresión con Sharp |

---

## 6. 🗺️ Roadmap de Siguiente Fase (Tareas Pendientes)

Para la siguiente IA que tome este proyecto, se recomiendan los siguientes pasos:

1. **Traducciones Modularizadas:**
   - Actualmente `translations.ts` pesa 181KB porque contiene artículos completos del blog.
   - *Sugerencia:* Extraer los posts a archivos JSON/TS independientes (`src/data/posts/`) o delegar su carga completa a Firestore para reducir el bundle inicial.

2. **Reemplazo de `t: any` restante:**
   - Quedan algunos componentes secundarios con `t: any` (ej. `BlogDetail`, `BookingSystem`, `CaseStudyDetail`). Reemplazar por `t: TranslationT` importado de `@/types.translation`.

3. **Optimización de Bundle de Firebase:**
   - Firebase actualmente pesa ~565KB en el vendor bundle. Ya está aislado en su propio chunk, pero se puede evaluar tree-shaking adicional si no se usan todas las utilidades de Firestore.

---

*Documento generado automáticamente durante la sesión de auditoría y optimización del Portafolio.*
