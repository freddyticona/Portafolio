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

## 6. 🗺️ Sesión Actual — Mejoras en Sección de Noticias (Julio 2026)

### 🟢 Cambios Realizados:

1. **🖼️ Imágenes Reales (Fin de Placeholders):**
   - Reemplazadas las últimas 10 imágenes `picsum.photos` por fotos reales de Unsplash.
   - Cada artículo tiene ahora una imagen única y relevante visualmente.

2. **🏷️ Categorías Dinámicas en NewsPortal:**
   - **Antes:** 7 categorías hardcodeadas (`pais`, `santa-cruz`, `mundo`, `economia`, `deportes`, `cultura`, `tecnologia`) que NO coincidían con los datos reales.
   - **Ahora:** Las categorías se extraen automáticamente de los 27 posts reales (12 categorías: Cine, Cultura y Entretenimiento, Deportes, Detrás de Cámaras, Documental, Festivales, Mundo, Música, Reflexiones, Tecnología, Televisión, Virales).
   - Filtro por coincidencia exacta en lugar de normalización Unicode propensa a errores.
   - Las etiquetas de los tabs se traducen automáticamente según el idioma (ES/EN).

3. **📝 Estilos de Contenido en Artículos (Fix Crítico):**
   - **Problema:** `@tailwindcss/typography` no estaba instalado → las clases `prose` eran inertes → el contenido se veía como un muro de texto sin márgenes ni diferenciación entre títulos, subtítulos y párrafos.
   - **Solución:** Reemplazado `prose prose-invert prose-sm md:prose-base max-w-none prose-headings:...` por la clase `article-content` que ya existía en `index.css` con estilos CSS reales para h1-h4, p, strong, a, blockquote, ul/ol, hr y small.

4. **📚 Documentación Actualizada:**
   - `CLAUDE.md`: 27 artículos, 64 URLs, 64 páginas, estructura modular con `src/pages/`, NewsPortal con categorías dinámicas, contenido HTML en artículos virales.
   - `RESUMEN-TECNICO.md`: Mismas correcciones, más sección de decisiones clave actualizada.
   - `DOCUMENTO_TRANSFERENCIA_IA.md`: Este documento mantiene el estado actual.

### Archivos modificados:
- `src/translations.ts` — 10 URLs de imágenes reemplazadas
- `src/components/NewsPortal.tsx` — Categorías dinámicas, filtro exacto
- `src/components/BlogDetail.tsx` — `prose` → `article-content`
- `src/index.css` — Estilos para etiqueta `small`
- `CLAUDE.md` — Actualizado
- `RESUMEN-TECNICO.md` — Actualizado

### Commits:
- `2e50622` — docs: update transfer document with news portal improvements
- `ee4e497` — fix(news): categorías dinámicas, reemplazar picsum, docs
- `7b635f3` — fix(blog): prose inertes → article-content con CSS real

---

## 7. 🚀 Recomendaciones para Mejorar la Sección de Noticias

### 🟢 PRIORIDAD ALTA (Implementación rápida, alto impacto)

1. **Artículos Relacionados al Final:**
   ```jsx
   // En BlogDetail.tsx, después del contenido
   const relatedPosts = posts.filter(
     p => p.id !== post.id && 
     (p.categoryEs === post.categoryEs || p.categoryEn === post.categoryEn)
   ).slice(0, 3);
   ```
   - Muestra 3 artículos de la misma categoría al final de cada lectura.
   - Aumenta páginas vistas y tiempo en el sitio.

2. **Barra de Progreso de Lectura:**
   ```jsx
   const [scrollProgress, setScrollProgress] = useState(0);
   useEffect(() => {
     const handleScroll = () => {
       const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
       const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
       setScrollProgress((winScroll / height) * 100);
     };
     window.addEventListener('scroll', handleScroll);
     return () => window.removeEventListener('scroll', handleScroll);
   }, []);
   ```
   - Barra delgada dorada en la parte superior que indica el progreso.
   - Mejora UX y percepción de profesionalismo.

3. **Imagen OG Personalizada por Artículo:**
   - Actualmente `generate-pages.js` no reemplaza `og:image`. Agregar:
   ```js
   html = html.replace(
     /<meta property="og:image" content=".*?"/,
     `<meta property="og:image" content="${article.imageUrl}"`
   );
   ```
   - Cada artículo compartido en redes mostrará su imagen correcta.

### 🟡 PRIORIDAD MEDIA (Buen impacto, esfuerzo moderado)

4. **Tiempo de Lectura Dinámico:**
   - Calcular automáticamente basado en la longitud del contenido:
   ```js
   const calculateReadTime = (content: string): string => {
     const wordsPerMinute = 200;
     const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
     const minutes = Math.ceil(words / wordsPerMinute);
     return `${minutes} min de lectura`;
   };
   ```
   - Elimina la necesidad de `readTimeEs`/`readTimeEn` hardcodeados en cada artículo.

5. **Botón "Volver Arriba":**
   - Aparece al hacer scroll hacia abajo en artículos largos.
   - Scroll suave al top con `window.scrollTo({ top: 0, behavior: 'smooth' })`.

6. **Tabla de Contenidos (TOC) para Artículos Largos:**
   - Extraer `h2` del contenido y generar enlaces de navegación rápida.
   - Útil para los artículos de >5 min como "Bolivia en el espejo del mundo".

7. **Contador de Visitas Visible:**
   - Mostrar el campo `views` existente en las cards y detalle del artículo.
   - Factor social: "1,234 lecturas" incentiva a leer.

### 🔴 PRIORIDAD BAJA (Mejora progresiva, esfuerzo alto)

8. **Suscripción por Email / Newsletter:**
   - Formulario simple al final de cada artículo: "Recibe noticias en tu correo".
   - Integración con servicio gratuito como Mailchimp o Buttondown.

9. **Comentarios con Notificaciones:**
   - Actualmente `CommentSystem` existe pero sin notificaciones de respuestas.
   - Agregar email de notificación cuando alguien responde a un comentario.

10. **Resaltado de Términos de Búsqueda:**
    - Cuando se llega a un artículo desde el buscador, resaltar las palabras buscadas en el contenido.
    - Usar `window.location.search` para detectar el término.

11. **Imagen en Galería Dentro del Artículo:**
    - Soporte para múltiples imágenes inline usando el campo `images[]` del BlogPost.
    - Lightbox inline para fotos adicionales.

12. **Feed RSS por Categoría:**
    - Generar RSS filters: `/rss/cine.xml`, `/rss/viral.xml`
    - Google News valora feeds especializados.

13. **Modo Impresión:**
    ```css
    @media print {
      .navbar, .footer, .comments-section, .share-buttons { display: none; }
      .article-content { color: #000; }
    }
    ```

---

*Documento actualizado el 23 de Julio, 2026 — sesión de mejora de sección de noticias.*

---

## 8. ✨ Última Sesión — Mejoras UX en Artículos (Julio 2026)

### 🟢 Cambios Realizados:

1. **🖼️ OG:Image Personalizada por Artículo:**
   - `scripts/generate-pages.js` ahora extrae `imageUrl` de cada post en `translations.ts` y la inyecta en las meta tags `og:image` y `twitter:image` de cada página pre-renderizada.
   - Al compartir en redes sociales, cada artículo muestra su imagen correcta.

2. **📊 Barra de Progreso de Lectura:**
   - Barra dorada delgada (`0.5px`) fija en el top del viewport.
   - Avanza proporcionalmente al scroll del usuario.
   - Atributos ARIA (`role="progressbar"`, `aria-valuenow`) para accesibilidad.

3. **📑 Tabla de Contenidos (TOC):**
   - Se activa automáticamente cuando el artículo tiene 2 o más `<h2>`.
   - Extrae los encabezados del HTML renderizado y genera enlaces de navegación rápida.
   - Colapsable para no ocupar espacio innecesario.
   - IDs auto-generados en cada `<h2>` para scroll suave.

4. **🔗 Artículos Relacionados:**
   - Al final de cada artículo, muestra 3 posts de la misma categoría.
   - Cada card tiene thumbnail, título y extracto.
   - Navegación directa al hacer clic.
   - Recibe `allPosts` como prop desde `BlogPages.tsx` y `NoticiasPage`.

5. **⏱️ Tiempo de Lectura Dinámico:**
   - Calcula automáticamente basado en la longitud real del contenido (200 palabras/min).
   - Strip de HTML antes de contar palabras.
   - Reemplaza el `readTimeEs`/`readTimeEn` hardcodeado en el detalle del artículo.

6. **⬆️ Botón Volver Arriba:**
   - Aparece al hacer scroll más de 400px.
   - Posición fija inferior derecha (`bottom-8 right-8`).
   - Scroll suave al top.

7. **👁️ Contador de Visitas Visible:**
   - Ya existía en `NewsCard.tsx` (hero y default variants).
   - Ahora también se muestra en el header del `BlogDetail.tsx` junto a fecha, tiempo y categoría.

### Archivos modificados:
- `scripts/generate-pages.js` — +16 líneas (extracción imageUrl + og:image/twitter:image)
- `src/components/BlogDetail.tsx` — +191 líneas (barra progreso, TOC, tiempo dinámico, related posts, back to top, views)
- `src/pages/BlogPages.tsx` — +2 líneas (pasar `allPosts` prop a BlogDetail)

### Commits:
- `1500d59` — feat(news): OG:image por artículo, barra progreso, TOC, artículos relacionados, tiempo dinámico, volver arriba, vistas visibles
