# Plan de Optimización - freddydev.net

**Fecha:** 2026-07-21
**Objetivo:** Mejorar Core Web Vitals (LCP, FID, CLS)

---

## 🔍 Análisis Actual

### Imágenes principales (problema LCP detectado):

| Archivo | Tamaño | Problema |
|---------|--------|----------|
| `freddy_profile.webp` | 740KB | ⚠️ Muy grande para LCP |
| `freddy_working.webp` | 689KB | ⚠️ Muy grande para LCP |
| `freddy_studio.webp` | 551KB | ⚠️ Grande |

**Recomendación:** Imágenes hero deberían ser <200KB idealmente.

### Estructura de portfolio:
- ✅ 9 proyectos reales con imágenes WebP
- ⚠️ Algunas imágenes mezcladas (JPG/WebP)
- ⚠️ Carpetas de "fotos comprimidas" no están en public/

---

## 🎯 Plan de Optimización

### Fase 1: Optimización de imágenes hero (Alto impacto)

**Archivos objetivo:**
```
public/images/freddy_profile.webp   (740KB → target ~150KB)
public/images/freddy_working.webp   (689KB → target ~150KB)
public/images/freddy_studio.webp    (551KB → target ~150KB)
```

**Acciones:**
1. Comprimir imágenes más agresivamente (quality 75-80%)
2. Redimensionar a dimensiones máximas necesarias (1200px width suficiente para web)
3. Considerar usar `fetchpriority="high"` en imagen hero

**Código a implementar:**
```tsx
// En CinematicHero o donde se carga la imagen principal
<img
  src="/images/freddy_profile.webp"
  fetchPriority="high"  // Priorizar carga
  width={1200}           // Prevenir CLS
  height={800}
  decoding="async"       // Decodificación asíncrona
/>
```

---

### Fase 2: Agregar dimensiones a todas las imágenes (Prevenir CLS)

**Problema:** CLS ocurre cuando las imágenes no tienen reservado su espacio.

**Solución:** Agregar `width` y `height` a todas las imágenes del portfolio.

```tsx
// Antes:
<img src="/images/portfolio/...webp" alt="..." />

// Después:
<img
  src="/images/portfolio/...webp"
  alt="..."
  width={800}
  height={600}
/>
```

---

### Fase 3: Optimización de carga (Lazy loading mejorado)

**Mejoras:**
1. `loading="eager"` solo para imagen hero
2. `loading="lazy"` para todas las demás
3. `decoding="async"` para imágenes fuera del viewport

---

### Fase 4: Source sets responsive

Para mejorar en móviles:

```tsx
<img
  src="/images/freddy_profile.webp"
  srcSet="
    /images/freddy_profile_small.webp 480w,
    /images/freddy_profile.webp 800w,
    /images/freddy_profile_large.webp 1200w
  "
  sizes="(max-width: 600px) 480px, 800px"
/>
```

---

## 📊 Métricas objetivo

| Métrica | Actual (estimado) | Objetivo |
|---------|-------------------|----------|
| **LCP** | ~3.5s | <2.5s ✅ |
| **FID** | ~150ms | <100ms ✅ |
| **CLS** | ~0.15 | <0.1 ✅ |
| **TBT** | ~600ms | <300ms |

---

## 🛠️ Script de optimización

Podemos crear un script para optimizar imágenes automáticamente:

```javascript
// scripts/optimize-images-pro.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const TARGET_WIDTH = 1200;
const QUALITY = 75;

const imagesToOptimize = [
  'public/images/freddy_profile.webp',
  'public/images/freddy_working.webp',
  'public/images/freddy_studio.webp'
];

imagesToOptimize.forEach(async (imagePath) => {
  const input = path.join(__dirname, '..', imagePath);
  const output = input.replace('.webp', '_opt.webp');

  await sharp(input)
    .resize(TARGET_WIDTH, null, { withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(output);

  console.log(`Optimized: ${imagePath}`);
});
```

---

## ✅ Checklist de implementación

- [ ] Optimizar imágenes hero (740KB → <200KB)
- [ ] Agregar width/height a todas las imágenes
- [ ] Implementar fetchpriority="high" en hero
- [ ] Crear versiones responsive de imágenes principales
- [ ] Verificar Lighthouse score post-optimización
- [ ] Configurar source sets para móvil
- [ ] Comprimir imágenes del portfolio

---

