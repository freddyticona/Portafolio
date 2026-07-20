# PORTAFOLIO FREDDY TICONA GUZMÁN - CONTEXTO DEL PROYECTO

## 📋 INFORMACIÓN BÁSICA

**Usuario:** Freddy Ticona Guzmán
**Profesión:** Camarógrafo y Realizador Audiovisual
**Ubicación:** La Paz, Bolivia
**Contacto:** freddyticona62@gmail.com | +591 62408420

**Sitio web:** https://freddy-ticona-portafolio.vercel.app
**GitHub:** https://github.com/freddyticona/Portafolio
**Carpeta local:** `C:\Users\Asus\Downloads\portafolio cv studio`

---

## 🏆 LOGROS RECIENTES (JULIO 2026)

El portafolio fue escalado de un sitio simple a una **Plataforma Completa**:

### Experiencia Visual Premium
- Hero cinematográfico con efectos parallax y partículas flotantes
- Galería "Detrás de Cámaras" con filtros (set, equipment, location, team)
- Micro-interacciones reutilizables (ripple, hover, shine effects)
- Animaciones escalonadas en hero y transiciones suaves

### Funcionalidades Avanzadas
- Búsqueda global (Ctrl/Cmd+K) con navegación por teclado
- WhatsApp flotante con chat preview
- Filtros de portafolio (categoría, año, estado, búsqueda)
- Icons y componentes mejorados

### Sistema de Contenido CMS
- Panel CMS integrado en Admin para gestionar blog y proyectos
- Editor bilingüe (español/inglés)
- Sistema de publicación (borrador, publicado, destacado)
- Categorías, tags, thumbnails

### Profesionalización Técnica
- Sistema de analytics local (sin dependencias externas)
- Dashboard de analytics con estadísticas
- Exportación de datos en JSON

---

## 📁 ESTRUCTURA DEL PROYECTO

```
portafolio cv studio/
├── src/
│   ├── components/           # Componentes React
│   │   ├── AdminPanel.tsx           # Panel de administración
│   │   ├── AnalyticsDashboard.tsx   # Dashboard de estadísticas
│   │   ├── BehindScenesGallery.tsx  # Galería detrás de cámaras
│   │   ├── BlogCard.tsx              # Tarjetas de blog
│   │   ├── BlogDetail.tsx            # Detalle de post
│   │   ├── CMSPanel.tsx              # Panel de gestión de contenido
│   │   ├── CinematicHero.tsx         # Hero mejorado con efectos
│   │   ├── ContactForm.tsx           # Formulario de contacto
│   │   ├── Footer.tsx                # Footer del sitio
│   │   ├── GlobalSearch.tsx          # Búsqueda global
│   │   ├── Lightbox.tsx              # Visor de imágenes
│   │   ├── MicroInteractions.tsx    # Componentes con micro-interacciones
│   │   ├── Navbar.tsx                # Navegación principal
│   │   ├── PDFExport.tsx             # Exportación a PDF
│   │   ├── PortfolioFilters.tsx     # Filtros de portafolio
│   │   ├── PortfolioGrid.tsx         # Grid de proyectos
│   │   ├── SearchBar.tsx             # Barra de búsqueda
│   │   ├── Skeleton.tsx              # Skeletons de carga
│   │   ├── SocialShare.tsx           # Compartir en redes sociales
│   │   ├── Timeline.tsx              # Timeline de experiencia
│   │   └── WhatsAppButton.tsx        # Botón flotante de WhatsApp
│   ├── analytics/
│   │   └── index.ts                  # Sistema de analytics local
│   ├── config.ts                     # Configuración centralizada
│   ├── translations.ts               # Contenido bilingüe
│   ├── types.ts                      # TypeScript types
│   ├── App.tsx                      # Componente principal
│   ├── main.tsx                     # Entry point
│   └── index.css                    # Estilos globales
├── public/
│   ├── images/
│   │   ├── behind-scenes/            # Fotos de coberturas (56 fotos)
│   │   ├── freddy_profile.jpg        # Foto de perfil
│   │   ├── freddy_studio.jpg         # Foto en estudio
│   │   ├── freddy_working.jpg        # Foto trabajando
│   │   └── ...                       # Otras imágenes
│   ├── favicon.ico, manifest.json, etc.
│   └── sw.js                         # Service Worker
├── scripts/
│   ├── generate-icons.js             # Generación de iconos
│   ├── generate-rss.js               # Generación de RSS
│   └── optimize-images.cjs          # Optimización de imágenes
├── archivos/                         # Documentos y fotos originales
├── index.html                        # HTML principal
├── package.json                      # Dependencias
├── vite.config.ts                    # Configuración de Vite
├── tsconfig.json                     # Configuración de TypeScript
└── vercel.json                       # Configuración de Vercel

```

---

## 🔧 TECNOLOGÍAS

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 6.2
- **Estilos:** Tailwind CSS 4.1 + Motion/Framer Motion
- **Iconos:** Lucide React
- **Despliegue:** Vercel
- **Control de Versiones:** GitHub
- **Formularios:** Web3Forms (accessKey: 615518f4-395e-4f3f-b535-37cd9e054590)

---

## 📊 ESTADO ACTUAL

### ✅ Completado
- Sitio funcional en Vercel
- Conectado a GitHub para deploys automáticos
- 56 fotos de coberturas integradas
- 6 fotos optimizadas mostradas en galería
- Sistema de analytics local funcionando
- Panel de administración completo

### ⚠️ Pendientes/Mejoras posibles
- Las imágenes grandes (9-17MB) necesitan optimización real
- Los videos siguen siendo placeholders de YouTube
- El access_key de Web3Forms ya está configurado
- PWA completo no está totalmente implementado

---

## 🔗 ENLACES IMPORTANTES

- **GitHub:** https://github.com/freddyticona/Portafolio
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Proyecto en Vercel:** freddy-ticona-portafolio
- **Credenciales Contacto:** freddyticona62@gmail.com, +591 62408420

---

## 📝 COMANDOS ÚTILES

```bash
# Entrar al directorio
cd "C:\Users\Asus\Downloads\portafolio cv studio"

# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Ver producción localmente
npm run preview

# Linter TypeScript
npm run lint

# Generar iconos
npm run generate-icons

# Generar RSS
npm run generate-rss

# Git status
git status

# Hacer commit
git add .
git commit -m "mensaje"
git push origin main
```

---

## 🎨 COMPONENTES PRINCIPALES

### Páginas del sitio
- `inicio` - Hero cinemático, estadísticas, preview blog, galería detrás de cámaras
- `sobre-mi` - Biografía, especialidades, timeline de experiencia, testimonios
- `portafolio` - Grid de proyectos con filtros avanzados
- `cv` - Currículum con educación, certificaciones, descarga PDF
- `blog` - Artículos con CMS
- `contacto` - Formulario Web3Forms
- `admin` - Panel de administración (CMS + Analytics)

### Componentes Globales
- `Navbar` - Navegación con cambio de idioma
- `Footer` - Footer con enlaces y redes sociales
- `GlobalSearch` - Búsqueda global (Ctrl+K)
- `WhatsAppButton` - Botón flotante de WhatsApp

---

## 🌐 REDIS SOCIALES CONFIGURADAS

- YouTube: https://www.youtube.com/@freddyticonaguzman3551
- LinkedIn: https://www.linkedin.com/in/freddy-ticona-guzman-4161287
- X (Twitter): https://x.com/Freddy_21407
- Facebook: https://www.facebook.com/share/1BYqTdK7BM/

---

## 📚 CONTENIDO BILINGÜE

El sitio tiene soporte completo para:
- Español (ES) - Idioma principal
- Inglés (EN) - Traducciones en `src/translations.ts`

---

## 🚨 PROBLEMAS CONOCIDOS

1. **Imágenes pesadas:** Las fotos originales de coberturas son muy grandes (9-17MB). Ya se seleccionaron versiones más ligeras pero podría optimizarse más.
2. **Videos placeholders:** Los videos de YouTube son placeholders (dQw4w9WgXcQ - Rick Roll). Pendiente subir videos reales.
3. **Hooks con errores:** `useDarkMode.ts` y `useServiceWorker.ts` tienen errores de sintaxis que no afectan el funcionamiento principal.

---

## 📋 TAREAS PENDIENTES SUGERIDAS

1. Optimizar imágenes pesadas a formatos web modernos (WebP/AVIF)
2. Subir videos reales a YouTube y actualizar IDs en config.ts
3. Implementar lazy loading para imágenes
4. Completar PWA (Service Worker, manifest.json)
5. Agregar más proyectos al portafolio
6. Escribir más posts para el blog
7. Implementar sistema de comentarios en blog
8. Agregar mapa interactivo de locaciones
9. Optimizar SEO con structured data mejorado
10. Implementar sistema de multi-idioma completo

---

## 💡 IDEAS FUTURAS

- Portafolio interactivo con filtros 3D
- Sección de "Técnicas de rodaje" con tips profesionales
- Blog con categorías (Cinematografía, Edición, Historias)
- Tienda de presets/bordes de video
- Cursos online o talleres
- Galería de clientes/projects por año
- Sección de premios y reconocimientos detallada
- Chatbot de asistencia básica

---

## 🎫 PREMIOS Y RECONOCIMIENTOS

- **Premio Nacional Eduardo Abaroa 2017** - Periodismo Cultural

---

## 📞 CONTACTO ACTUAL

- **Email:** freddyticona62@gmail.com
- **WhatsApp:** +591 62408420 (o alternativo: +591 70139357)
- **Ubicación:** La Paz, Bolivia
- **Coordenadas:** S 16°30'0" / W 68°9'0"

---

*Última actualización: 20 de julio de 2026*
*Versión del proyecto: Plataforma Completa v2.0*
