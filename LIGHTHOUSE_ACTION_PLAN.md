# Lighthouse Action Plan - freddydev.net

**Fecha:** 2026-07-21
**Performance Score:** 62/100

---

## 🔴 Problemas Críticos

### 1. LCP: 10.5s ❌ (objetivo: <2.5s)
**Causa:** Imagen hero de fondo tardando demasiado en cargar

**Solución Inmediata:**
- Crear versión low-res de la imagen hero
- Implementar Blur-up technique
- Agregar preload con prioridad máxima
- Considerar usar JPEG progresivo

### 2. Render-blocking Requests: 500ms
**Causa:** Fonts y CSS bloqueando el render

**Solución:**
- Ya tenemos preload de fonts ✅
- Considerar inline CSS crítico
- Usar font-display: swap

### 3. Image Delivery: 1.72KB savings
**Solución:**
- Implementar responsive images (srcset)
- Usar formatos modernos (ya usamos WebP ✅)
- Lazy load para imágenes fuera del viewport

### 4. Network Payload: 2.6MB
**Solución:**
- Eliminar JavaScript no usado (234KB savings)
- Minificar JavaScript (51KB savings)
- Code splitting ya implementado ✅

---

## 🎯 Plan de Acción Inmediato

### Fase 1: Reducir LCP a <3s (Crítico)

**1.1 Crear imagen hero optimizada**
```bash
# Generar versión pequeña de la hero image
# Small: ~30KB, Medium: ~80KB, Large: ~200KB
```

**1.2 Implementar Blur-up**
```tsx
// Hero con imagen pequeña de carga rápida + blur
<img
  src="/images/hero-small.webp"  // ~30KB, carga instantánea
  srcSet="/images/hero-medium.webp 800w,
          /images/hero-large.webp 1920w"
  sizes="(max-width: 800px) 800px, 1920px"
  style={{ filter: 'blur(10px)' }}
  onLoad={(e) => {
    // Cargar versión HD en background
    const hdImg = new Image();
    hdImg.src = '/images/behind-scenes/DSC_2994.webp';
    hdImg.onload = () => {
      e.target.style.filter = 'none';
      e.target.src = hdImg.src;
    };
  }}
/>
```

### Fase 2: Eliminar Render-blocking

**2.1 Inline CSS crítico**
```html
<style>
  /* CSS mínimo para above-the-fold */
  .hero { min-height: 95vh; display: flex; }
  /* ... más CSS crítico ... */
</style>
```

### Fase 3: Optimizar payload

**3.1 Eliminar imports no usados**
**3.2 Tree-shaking de lucide-react**
**3.3 Eliminar Firebase si no es crítico**

---

## 📊 Métricas Objetivo

| Métrica | Actual | Objetivo | Acción |
|---------|--------|----------|--------|
| LCP | 10.5s | <2.5s | Hero blur-up + preload |
| FCP | 3.7s | <1.8s | Inline CSS crítico |
| Payload | 2.6MB | <1.5MB | Eliminar JS no usado |
| Score | 62 | 85+ | Todas las anteriores |

---

## 🔧 Implementación Prioritaria

**PRIORIDAD 1 (Ahora mismo):**
1. Crear versión optimizada de imagen hero
2. Implementar blur-up loading
3. Agregar preload prioritario

**PRIORIDAD 2:**
1. Implementar srcset responsive
2. Eliminar render-blocking CSS
3. Optimizar JavaScript payload

---

