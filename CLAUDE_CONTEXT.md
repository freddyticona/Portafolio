# 🔷 CLAUDE CONTEXT - PORTAFOLIO FREDDY TICONA

**IMPORTANTE:** Este documento es para dar contexto a una NUEVA instancia de Claude cuando se reinicie la terminal. No necesitas revisar todo el código - usa este documento para entender el estado actual del proyecto.

---

## 🚀 INICIO RÁPIDO

**Cuando te pida continuar con este proyecto:**

1. Lee este documento completo
2. NO revises todos los archivos innecesariamente
3. Pregunta qué mejora o tarea específica quiere el usuario
4. Usa `cd "C:\Users\Asus\Downloads\portafolio cv studio"` para entrar al directorio

---

## 👤 USUARIO

**Nombre:** Freddy Ticona Guzmán  
**Profesión:** Camarógrafo y Realizador Audiovisual  
**Ubicación:** La Paz, Bolivia  
**Contacto:** freddyticona62@gmail.com | +591 62408420  

**Repositorio GitHub:** https://github.com/freddyticona/Portafolio  
**Sitio web:** https://freddy-ticona-portafolio.vercel.app  
**Carpeta local:** `C:\Users\Asus\Downloads\portafolio cv studio`

---

## 📊 ESTADO ACTUAL DEL PROYECTO

### ✅ COMPLETADO (Última actualización: 20 julio 2026)

El proyecto fue transformado de un portafolio simple a una **PLATAFORMA COMPLETA** con:

#### 1. Experiencia Visual Premium
- **CinematicHero.tsx** - Hero con efectos parallax, partículas, animaciones escalonadas
- **BehindScenesGallery.tsx** - Galería de fotos de coberturas (6 fotos optimizadas)
- **MicroInteractions.tsx** - Componentes reutilizables con efectos (ripple, hover, shine)

#### 2. Funcionalidades Avanzadas
- **GlobalSearch.tsx** - Búsqueda global (Ctrl/Cmd+K) con navegación por teclado
- **WhatsAppButton.tsx** - Botón flotante con chat preview
- **PortfolioFilters.tsx** - Filtros avanzados (categoría, año, estado, búsqueda)

#### 3. Sistema de Contenido CMS
- **CMSPanel.tsx** - Panel completo para gestionar blog y proyectos
- Editor bilingüe (español/inglés)
- Publicación (borrador, publicado, destacado)

#### 4. Profesionalización Técnica
- **analytics/index.ts** - Sistema de analytics local
- **AnalyticsDashboard.tsx** - Dashboard con estadísticas en Admin

### ⚠️ PENDIENTES

- Videos de YouTube son placeholders (necesita IDs reales)
- Imágenes grandes (9-17MB) podrían optimizarse más
- PWA no está completamente implementado

---

## 📁 ESTRUCTURA CLAVE

```
src/
├── App.tsx                      # ⭐ COMPONENTE PRINCIPAL
├── main.tsx                     # Entry point
├── config.ts                    # ⭐ CONFIGURACIÓN CENTRAL (contacto, redes, videos)
├── translations.ts              # Contenido bilingüe
├── types.ts                     # TypeScript types
├── components/
│   ├── CinematicHero.tsx        # Hero mejorado
│   ├── BehindScenesGallery.tsx  # Galería detrás de cámaras
│   ├── GlobalSearch.tsx         # Búsqueda Ctrl+K
│   ├── WhatsAppButton.tsx      # WhatsApp flotante
│   ├── PortfolioFilters.tsx    # Filtros de portafolio
│   ├── CMSPanel.tsx             # Gestión de contenido
│   ├── AnalyticsDashboard.tsx  # Dashboard de estadísticas
│   └── ... (otros componentes)
└── analytics/
    └── index.ts                 # Sistema de analytics local

public/images/
└── behind-scenes/              # 56 fotos de coberturas
```

---

## 🔗 GIT & VERCEL

- **Repositorio:** https://github.com/freddyticona/Portafolio.git
- **Usuario GitHub:** freddyticona
- **Email GitHub:** freddyticona62@gmail.com
- **Proyecto Vercel:** freddy-ticona-portafolio
- **Estado:** ✅ Conectado a GitHub (deploy automático)

### Comandos Git útiles:
```bash
cd "C:\Users\Asus\Downloads\portafolio cv studio"
git status
git add .
git commit -m "mensaje"
git push origin main
```

---

## 🎯 PÁGINAS DEL SITIO

1. **inicio** - Hero, estadísticas, galería detrás de cámaras, preview blog
2. **sobre-mi** - Biografía, especialidades, timeline, testimonios
3. **portafolio** - Grid de proyectos con filtros
4. **cv** - Currículum, educación, certificaciones
5. **blog** - Artículos con CMS
6. **contacto** - Formulario Web3Forms
7. **admin** - Panel de administración (contraseña: `admin123`)

---

## 🔧 TECNOLOGÍAS

- React 19 + TypeScript
- Vite 6.2
- Tailwind CSS 4.1
- Motion/Framer Motion (animaciones)
- Lucide React (iconos)
- Web3Forms (formularios)

---

## 📱 CONTACTO CONFIGURADO

```typescript
phoneNumber: '+591 62408420'
email: 'freddyticona62@gmail.com'
location: 'La Paz, Bolivia'

// Web3Forms accessKey
accessKey: '615518f4-395e-4f3f-b535-37cd9e054590'

// Redes sociales
youtube: 'https://www.youtube.com/@freddyticonaguzman3551'
linkedin: 'https://www.linkedin.com/in/freddy-ticona-guzman-4161287'
x: 'https://x.com/Freddy_21407'
facebook: 'https://www.facebook.com/share/1BYqTdK7BM/'
```

---

## 🖼️ FOTOS DE COBERTURAS

**Ubicación:** `public/images/behind-scenes/`
**Total:** 56 fotos
**Mostradas en galería:** 6 fotos optimizadas

Las fotos usadas actualmente son:
- DSC_2994.jpg (9.8 MB - podría optimizarse)
- 28082012255.jpg (216 KB)
- 24072012043.jpg (317 KB)
- DSC_0044.jpg (617 KB)
- 08092012536.jpg (653 KB)
- 1428941048045(1).jpg (47 KB)

---

## 📺 VIDEOS PENDIENTES

Los videos de YouTube son placeholders. Necesita:
1. Subir videos reales a YouTube
2. Obtener los IDs (ejemplo: de `https://youtube.com/watch?v=abc123` el ID es `abc123`)
3. Actualizar en `src/config.ts`:

```typescript
export const YOUTUBE_VIDEOS = {
  showreel: 'TU_REAL_ID',
  placeholder: 'TU_REAL_ID'
};
```

---

## 🚀 COMANDOS IMPORTANTES

```bash
# Entrar al proyecto
cd "C:\Users\Asus\Downloads\portafolio cv studio"

# Desarrollo
npm run dev          # Inicia servidor en puerto 3000
npm run build        # Compila para producción
npm run preview      # Previsualiza producción

# Git
git status
git add .
git commit -m "mensaje"
git push origin main
```

---

## ⚠️ PROBLEMAS CONOCIDOS

1. **useDarkMode.ts** y **useServiceWorker.ts** tienen errores de sintaxis pero NO afectan el funcionamiento principal
2. Imágenes grandes (9-17MB) pueden optimizarse a WebP
3. Videos de YouTube son placeholders

---

## 💡 MEJORAS POSIBLES (FUTURAS)

1. Optimizar imágenes pesadas (9-17MB → 500KB WebP)
2. Subir videos reales a YouTube
3. Implementar lazy loading de imágenes
4. Completar PWA (Service Worker mejorado)
5. Agregar más proyectos al portafolio
6. Escribir más posts para el blog
7. Sistema de comentarios en blog
8. Mapa interactivo de locaciones

---

## 🔑 ACCESO ADMIN

**URL:** Ir a `/admin` en el sitio  
**Contraseña:** `admin123`  
**Pestañas disponibles:** Posts, Comments, Users, CMS, Analytics

---

## 📝 PARA EMPEZAR A TRABAJAR

Cuando el usuario diga "continuemos con este proyecto":

1. NO revises todo el código innecesariamente
2. Pregunta: "¿Qué quieres mejorar o agregar?"
3. Usa este documento como referencia
4. Enfócate en la tarea específica

---

*Documento creado para nuevas instancias de Claude - 20 julio 2026*
