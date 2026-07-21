# 🛠️ Guía de Mantenimiento y Monitoreo

**Portafolio Freddy Ticona Guzmán**
**Sitio:** https://freddydev.net
**Última actualización:** 21 julio 2026

---

## 📋 Checklist Mensual de Mantenimiento

### ✅ Semanal (5 minutos)
- [ ] Verificar que el sitio esté online
- [ ] Revisar Google Analytics 4 - tráfico inusual
- [ ] Verificar formulario de contacto funciona
- [ ] Revisar errores en consola del navegador

### ✅ Mensual (30 minutos)
- [ ] Ejecutar `npm outdated` para ver actualizaciones
- [ ] Ejecutar `npm audit` para verificar vulnerabilidades
- [ ] Revisar Google Search Console - errores de rastreo
- [ ] Verificar Core Web Vitals en PageSpeed Insights
- [ ] Revisar analytics - páginas más visitadas
- [ ] Respaldar contenido importante (blog, proyectos)

### ✅ Trimestral (1 hora)
- [ ] Actualizar dependencias principales (React, Vite, Firebase)
- [ ] Revisar y optimizar imágenes grandes
- [ ] Limpiar cachés (Vercel, CDN, Service Worker)
- [ ] Revisar SEO - posiciones en buscadores
- [ ] Actualizar contenido estacional
- [ ] Revisar enlaces rotos (broken links)

### ✅ Semestral (2 horas)
- [ ] Auditoría completa de seguridad
- [ ] Revisar y actualizar documentación
- [ ] Optimizar base de código (refactorización)
- [ ] Revisar costos de hosting (Vercel, Firebase)
- [ ] Actualizar certificados SSL (automático en Vercel)
- [ ] Planificar nuevas features

---

## 🚨 Alertas y Monitoreo

### Herramientas de Monitoreo Recomendadas

| Herramienta | Uso | Costo | Configuración |
|-------------|-----|-------|---------------|
| **Vercel Analytics** | Uptime, deploy, errores | Gratis | Automático |
| **Google Analytics 4** | Tráfico, conversiones | Gratis | ID: G-401629974 |
| **Google Search Console** | SEO, errores de rastreo | Gratis | Verificar propiedad |
| **UptimeRobot** | Monitoreo de uptime | Gratis | https://uptimerobot.com |
| **PageSpeed Insights** | Performance | Gratis | Manual |

### Configuración de Alertas

#### 1. Vercel (Automático)
- Email en cada deploy
- Email si hay errores en producción
- Slack/Discord webhook disponible

#### 2. UptimeRobot
```
URL: https://freddydev.net
Check interval: 5 minutos
Alert: Email + SMS si cae el sitio
```

#### 3. Google Analytics
Configurar alertas personalizadas:
- Tráfico < 10 usuarios/día (anómalo)
- Tasa de rebote > 80%
- Sesiones > 1000 (éxito)

---

## 🔒 Seguridad

### Dependencias Vulnerables

**Estado actual (21 julio 2026):**
- ⚠️ `dompurify` (vía jspdf) - 2 vulnerabilidades (moderate, critical)
- Recomendación: Actualizar jspdf cuando se pruebe compatibilidad

### Headers de Seguridad

Configurados en `vercel.json`:
```json
{
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "X-XSS-Protection": "1; mode=block",
  "Strict-Transport-Security": "max-age=31536000",
  "Permissions-Policy": "camera=(self), microphone=(self)"
}
```

### Accesos y Credenciales

| Servicio | URL/Acceso | Contraseña/Nota |
|----------|-------------|-----------------|
| Admin Panel | /admin | admin123 |
| Firebase | Configurado en .env | Revisar console |
| Vercel | GitHub conectado | Deploy automático |
| GitHub | freddyticona/Portafolio | 2FA recomendado |

---

## 📊 Performance Monitoring

### Core Web Vitals Objetivos

| Métrica | Objetivo | Actual | Estado |
|---------|----------|--------|--------|
| LCP | < 2.5s | ? | ⏳ Pendiente medición |
| FID | < 100ms | ? | ⏳ Pendiente medición |
| CLS | < 0.1 | ? | ⏳ Pendiente medición |

### Cómo Medir Performance

**Opción 1: Lighthouse Manual**
1. Abrir https://freddydev.net
2. F12 → DevTools → Lighthouse
3. Ejecutar audit
4. Revisar scores

**Opción 2: PageSpeed Insights**
1. https://pagespeed.web.dev
2. Ingresar URL: freddydev.net
3. Analizar resultados

### Optimizaciones Implementadas

- ✅ Code splitting configurado (vite.config.ts)
- ✅ Lazy loading en imágenes (LazyImage.tsx)
- ✅ Imágenes WebP (52.9% de imágenes)
- ✅ Minificación con Terser
- ✅ Cache headers optimizados (vercel.json)

---

## 🔄 Backup y Recovery

### Lo que Necesita Respaldar

1. **Contenido del Blog** (Firebase Firestore)
   - Entradas: `/posts`
   - Comentarios: `/comments`

2. **Imágenes Originales**
   - Carpeta local: `fotos articulos/`
   - Carpeta local: `fotos comprimidas/`

3. **Configuración**
   - `src/config.ts`
   - `src/translations.ts`
   - `.env`

### Método de Backup

**Automático (Firebase):**
```javascript
// Firebase tiene respaldo automático
// Revisar: Firebase Console → Firestore → Data
```

**Manual (Recomendado mensual):**
```bash
# Exportar posts de Firestore
# Desde Firebase Console: Database → Export JSON

# Respaldar imágenes
# Copiar carpetas de fotos a Google Drive/Dropbox
```

---

## 🚀 Comandos de Mantenimiento

```bash
# Entrar al directorio
cd "C:\Users\Asus\Downloads\portafolio cv studio"

# Actualizar dependencias
npm update

# Verificar vulnerabilidades
npm audit

# Build de prueba
npm run build

# Verificar TypeScript
npm run lint

# Optimizar imágenes
npm run optimize-images

# Verificar imágenes
npm run check-images

# Deploy a producción
npx vercel --prod
```

---

## 📝 Registro de Cambios

### Versiones Recientes

| Fecha | Versión | Cambio |
|-------|---------|--------|
| 21 jul 2026 | SEO v2.0 | Optimización SEO completa |
| 20 jul 2026 | v1.9 | Galería behind-the-scenes activada |
| 20 jul 2026 | v1.8 | Migración a Vercel Blob Storage |
| 20 jul 2026 | v1.7 | Videos reales de YouTube integrados |
| 20 jul 2026 | v1.6 | Eliminación de pasarela de pagos |

### Próximas Actualizaciones Planeadas

- [ ] Actualizar jspdf para corregir vulnerabilidades
- [ ] Implementar PWA completo
- [ ] Agregar más proyectos al portafolio
- [ ] Escribir artículos de blog
- [ ] Optimizar bundle size

---

## 🆘 Troubleshooting

### Problemas Comunes

#### 1. Deploy falla
```
Solución:
- Verificar que npm run build funcione localmente
- Limpiar caché: rm -rf node_modules && npm install
- Verificar logs en Vercel Dashboard
```

#### 2. Imágenes no cargan
```
Solución:
- Ejecutar npm run check-images
- Verificar rutas en código
- Limpiar caché del navegador
```

#### 3. Formulario no funciona
```
Solución:
- Verificar accessKey de Web3Forms
- Revisar console del navegador
- Verificar CORS en Web3Forms
```

#### 4. Lentitud del sitio
```
Solución:
- Ejecutar Lighthouse para identificar problema
- Verificar tamaño de imágenes
- Revisar bundle size en build
```

---

## 📞 Contacto de Soporte

**Desarrollador:** Claude (AI Assistant)
**Repositorio:** https://github.com/freddyticona/Portafolio
**Documentación:** `CLAUDE_CONTEXT.md`

Para problemas técnicos:
1. Revisar esta guía
2. Buscar en `CLAUDE_CONTEXT.md`
3. Verificar logs de error
4. Consultar documentación de Vercel/React

---

*Última actualización: 21 julio 2026*
*Próxima revisión programada: 21 agosto 2026*
