# 🖼️ Configuración de Subida de Imágenes - Vercel Blob Storage

**Fecha:** 21 julio 2026
**Proyecto:** Portafolio Freddy Ticona

---

## 📋 Resumen

Vercel Blob Storage permite almacenar hasta **10GB gratis** por mes con:
- CDN global integrado
- Sin costo adicional
- Almacenamiento persistente

---

## 🔧 Configuración en Vercel Dashboard

### Paso 1: Ir a Vercel Dashboard
1. Visita: https://vercel.com/dashboard
2. Selecciona el proyecto: `freddy-ticona-portafolio`

### Paso 2: Configurar Variables de Entorno
1. Ve a **Settings** → **Environment Variables**
2. Agrega las siguientes variables:

| Variable | Valor | Entornos |
|----------|-------|----------|
| `VERCEL_BLOB_READ_WRITE_KEY` | (generada automáticamente) | Production, Preview, Development |

**Nota:** La variable `VERCEL_BLOB_READ_WRITE_KEY` se genera automáticamente cuando se activa Vercel Blob Storage.

### Paso 3: Activar Vercel Blob Storage (si no está activo)

Si no ves la variable `VERCEL_BLOB_READ_WRITE_KEY`:

1. Ve a **Storage** → **Create Database**
2. Selecciona **Blob**
3. Sigue las instrucciones

---

## 📝 Código Implementado

### Endpoint API: `api/upload-image.ts`

```typescript
// Características:
- Acepta imagen en base64
- Valida tipo (JPEG, PNG, WebP, GIF)
- Valida tamaño (máximo 5MB)
- Sube a Vercel Blob Storage
- Devuelve URL pública
```

### Frontend: `AdminPanel.tsx`

```typescript
// Características:
- Convierte archivo a base64 (FileReader)
- Envía al endpoint /api/upload-image
- Muestra progreso de subida
- Actualiza URL de imagen en el post
```

---

## 🚀 Uso en Admin Panel

1. Ve a **https://freddydev.net/admin**
2. Contraseña: `admin123`
3. Crea o edita un post
4. Haz clic en **"Choose File"** para seleccionar imagen
5. La imagen se sube automáticamente a Vercel Blob Storage
6. La URL se actualiza en el campo de imagen

---

## ⚠️ Limitaciones

| Límite | Valor |
|--------|-------|
| Tamaño máximo por imagen | 5MB |
| Tipos permitidos | JPEG, PNG, WebP, GIF |
| Storage total gratuito | 10GB/mes |

---

## 🔍 Troubleshooting

### Error: "Missing VERCEL_BLOB_READ_WRITE_KEY"
**Solución:** Configura la variable en Vercel Dashboard

### Error: "Failed to upload to Vercel Blob Storage"
**Solución:**
- Verifica que la variable esté configurada
- Verifica que el proyecto tenga Blob Storage activado
- Re-deploy después de configurar las variables

### Error: "Image too large"
**Solución:** Comprime la imagen antes de subir (máximo 5MB)

---

## 📊 Estado

| Componente | Estado |
|------------|--------|
| Endpoint API | ✅ Implementado |
| Frontend Upload | ✅ Implementado |
| Vercel Blob Storage | ⚠️ Requiere configuración manual |
| Deploy | ⏳ Pendiente después de configurar variables |

---

## 🔄 Próximos Pasos

1. **Configurar variables en Vercel Dashboard** (manual)
2. **Re-deploy** para aplicar cambios
3. **Probar subida de imagen** en /admin
4. **Verificar que la imagen se cargue** en el blog

---

*Última actualización: 21 julio 2026*
