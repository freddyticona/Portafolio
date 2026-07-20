# 🚀 Guía de Despliegue y SEO
## Portafolio Freddy Ticona Guzmán

---

## 📋 TABLA DE CONTENIDOS

1. [Pre-despliegue](#pre-despliegue)
2. [Despliegue en Vercel](#despliegue-en-vercel)
3. [Configuración de Google Analytics](#configuración-de-google-analytics)
4. [Google Search Console](#google-search-console)
5. [SEO Post-despliegue](#seo-post-despliegue)
6. [Actualizaciones de contenido](#actualizaciones-de-contenido)

---

## 🛠️ PRE-DESPLIEGUE

### 1. Generar Favicons e Iconos

```bash
# Instalar dependencia
npm install --save-dev sharp

# Ejecutar script
node scripts/generate-icons.js
```

### 2. Actualizar IDs de YouTube

Editar `src/config.ts` (líneas 70-77):

```typescript
export const YOUTUBE_VIDEOS = {
  showreel: 'TU_VIDEO_ID_REAL',      // Reemplazar con ID real
  placeholder: 'TU_VIDEO_ID_REAL'     // Reemplazar con ID real
};
```

**¿Cómo obtener el ID?**
- Abre tu video en YouTube
- El ID está después de `v=` en la URL
- Ejemplo: `https://www.youtube.com/watch?v=abc123XYZ` → ID: `abc123XYZ`

### 3. Actualizar URLs en Meta Tags

En `index.html`, reemplaza:
- `https://freddy-ticona-portafolio.vercel.app/` con tu dominio real
- Imágenes OG con URLs reales después del despliegue

---

## 🌐 DESPLIEGUE EN VERCEL

### Opción 1: Vía CLI (Recomendado)

```bash
# Instalar Vercel CLI
npm install -g vercel

# Iniciar sesión en Vercel
vercel login

# Desplegar desde el directorio del proyecto
cd "C:/Users/Asus/Downloads/portafolio cv studio"
vercel

# Seguir las instrucciones:
# - ✓ Link to existing project? No
# - ✓ Project name: freddy-ticona-portafolio
# - ✓ In which directory is your code located? ./
# - ✓ Want to override settings? No
```

### Opción 2: Vía GitHub (Más profesional)

1. **Subir código a GitHub:**

```bash
# Inicializar git (si no está inicializado)
git init
git add .
git commit -m "Initial commit: Portafolio Freddy Ticona"

# Crear repositorio en GitHub: github.com/new
# Seguir instrucciones para conectar:
git remote add origin https://github.com/TU-USUARIO/freddy-ticona-portafolio.git
git branch -M main
git push -u origin main
```

2. **Conectar en Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Importa desde GitHub
   - Vercel detectará automáticamente la configuración
   - Click "Deploy"

### Dominio Personalizado (Opcional)

1. Compra dominio (ejemplo: freddyticona.bo)
2. En Vercel Dashboard → Settings → Domains
3. Agrega tu dominio
4. Configura DNS según instrucciones de Vercel

---

## 📊 CONFIGURACIÓN DE GOOGLE ANALYTICS

### 1. Crear cuenta de GA4

1. Ve a [analytics.google.com](https://analytics.google.com)
2. Click "Empezar a medir"
3. Configura:
   - **Nombre de cuenta:** Portafolio Freddy Ticona
   - **Nombre de propiedad:** Portafolio Web
   - **URL de propiedad:** tu-dominio.com
   - **Categoría del sector:** Arte y entretenimiento

### 2. Obtener el ID de medición

GA4 te dará un ID como: `G-XXXXXXXXXX`

### 3. Integrar en el sitio

Crea un archivo `src/analytics.ts`:

```typescript
export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

// Inicializar Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && !window.GA_INITIALIZED) {
    // Agregar script de Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Configurar gtag
    const configScript = document.createElement('script');
    configScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}');
    `;
    document.head.appendChild(configScript);

    window.GA_INITIALIZED = true;
  }
};

// Rastrear vista de página
export const trackPageView = (path: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'page_view', {
      page_path: path,
      page_title: document.title,
    });
  }
};

// Rastrear eventos personalizados
export const trackEvent = (action: string, category: string, label?: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
    });
  }
};
```

### 4. Usar en la aplicación

En tu componente principal (`src/main.tsx` o App.tsx):

```typescript
import { initGA, trackPageView } from './analytics';

// Inicializar al cargar
initGA();

// Rastrear cambios de página
trackPageView(window.location.pathname);
```

---

## 🔍 GOOGLE SEARCH CONSOLE

### 1. Verificar propiedad

1. Ve a [search.google.com/search-console](https://search.google.com/search-console)
2. Click "Agregar propiedad"
3. Selecciona "Prefijo de URL"
4. Ingresa tu dominio

### 2. Obtener meta tag de verificación

Google te dará un meta tag como:

```html
<meta name="google-site-verification" content="XXXXXXXXXXXXXXXXXXXXXXXXXXX" />
```

3. **Agrégalo a `index.html`** (línea 75, ya está comentado)

### 3. Enviar Sitemap

1. En Search Console → Sitemaps
2. Ingresa: `sitemap.xml`
3. Click "Enviar"

---

## 📈 SEO POST-DESPLIEGUE

### Acciones inmediatas (primeros días)

1. **Indexar en Google:**
   - Search Console → Inspección de URL
   - Solicitar indexación para página principal
   - Hacer lo mismo para páginas principales

2. **Verificar meta tags:**
   - Usa [metatags.io](https://www.metatags.io/) para previsualizar
   - Comparte en Facebook para verificar Open Graph
   - Comparte en Twitter para verificar Twitter Cards

3. **Test de velocidad:**
   - [PageSpeed Insights](https://pagespeed.web.dev/) - Debe ser >90
   - [GTmetrix](https://gtmetrix.com/) - Análisis detallado

4. **Test de móvil:**
   - [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

### Acciones semanales/mensuales

1. **Monitorear Analytics:**
   - Revisar visitas, fuentes de tráfico
   - Identificar páginas más populares

2. **Actualizar contenido:**
   - Agregar nuevos proyectos al portafolio
   - Publicar nuevos artículos en blog

3. **Backlinks (enlaces externos):**
   - Agregar enlace en LinkedIn
   - Agregar enlace en CVs en línea
   - Comentar en foros con tu firma (con enlace)

---

## 📝 ACTUALIZACIONES DE CONTENIDO

### Agregar nuevo proyecto al portafolio

1. Edita `src/translations.ts`
2. Agrega nuevo item a `portfolioItems`
3. Si tiene caso de estudio, agrégalo a `caseStudies`

### Agregar artículo al blog

1. Edita `src/translations.ts`
2. Agrega nuevo item a `blogPosts`

### Actualizar timeline laboral

1. Edita `src/translations.ts`
2. Agrega nuevo item a `timelineEvents`

---

## 🎯 CHECKLIST DE LANZAMIENTO

### Antes de publicar

- [ ] IDs de YouTube actualizados
- [ ] Favicons generados
- [ ] URLs en meta tags verificadas
- [ ] Código subido a GitHub (opcional pero recomendado)
- [ ] Google Analytics configurado

### Después de publicar

- [ ] Verificar en Google Search Console
- [ ] Enviar sitemap
- [ ] Solicitar indexación de URLs principales
- [ ] Probar en múltiples dispositivos
- [ ] Verificar velocidad en PageSpeed Insights
- [ ] Compartir en redes personales
- [ ] Agregar enlace a firma de email

### Mantenimiento mensual

- [ ] Revisar Analytics
- [ ] Actualizar contenido si hay nuevos proyectos
- [ ] Verificar enlaces rotos
- [ ] Monitorear posición en búsquedas

---

## 🌟 RECOMENDACIONES ADICIONALES

### Local SEO (Bolivia/La Paz)

1. **Google My Business:**
   - Registra tu negocio profesional
   - Agrega fotos de tu trabajo
   - Pide reseñas a clientes

2. **Directorios locales:**
   - Agrega a directorios de profesionales de Bolivia
   - Paginas Amarillas, etc.

### Palabras clave objetivo

- Camarógrafo La Paz
- Realizador audiovisual Bolivia
- Producción de video Bolivia
- Documentalista Bolivia
- Editor de video profesional

---

## 📞 AYUDA

Para preguntas sobre:
- **Vercel:** vercel.com/docs
- **Google Analytics:** support.google.com/analytics
- **Search Console:** support.google.com/webmasters
- **Este proyecto:** Revisa los comentarios en el código

---

**¡Mucho éxito con tu portafolio profesional! 🎬**
