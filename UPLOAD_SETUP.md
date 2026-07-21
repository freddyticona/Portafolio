# Configuración de Subida de Imágenes - Vercel Blob Storage

**Fecha:** 21 julio 2026
**Proyecto:** Portafolio Freddy Ticona

---

## Resumen

Vercel Blob Storage permite almacenar hasta **10GB gratis** por mes con:
- CDN global integrado
- SDK oficial (`@vercel/blob`)
- Almacenamiento persistente

---

## Configuración en Vercel Dashboard

### Paso 1: Ir a Vercel Dashboard
1. Visita: https://vercel.com/dashboard
2. Selecciona el proyecto: `freddy-ticona-portafolio`

### Paso 2: Activar Vercel Blob Storage
1. Ve a **Storage** → **Create Database**
2. Selecciona **Blob**
3. Sigue las instrucciones
4. Una vez creado, copia el `BLOB_READ_WRITE_TOKEN`

### Paso 3: Configurar Variables de Entorno
1. Ve a **Settings** → **Environment Variables**
2. Agrega la variable:

| Variable | Valor | Entornos |
|----------|-------|----------|
| `BLOB_READ_WRITE_TOKEN` | (el token copiado de Storage) | Production, Preview, Development |

---

## Código Implementado

### Endpoint API: `api/upload-image.ts`
- Usa `@vercel/blob` SDK (`put()`)
- Acepta imagen en base64
- Valida tipo (JPEG, PNG, WebP, GIF) y tamaño (máximo 5MB)
- Sube a Vercel Blob Storage y devuelve URL pública real

### Frontend: `AdminPanel.tsx`
- Convierte archivo a base64 (FileReader)
- Envía al endpoint `/api/upload-image`
- Muestra progreso de subida
- Actualiza URL de imagen en el post

---

## Uso en Admin Panel

1. Ve a **https://freddydev.net/admin**
2. Crea o edita un post
3. Haz clic en **"Choose File"** para seleccionar imagen
4. La imagen se sube automáticamente a Vercel Blob Storage
5. La URL se actualiza en el campo de imagen

---

## Limitaciones

| Límite | Valor |
|--------|-------|
| Tamaño máximo por imagen | 5MB |
| Tipos permitidos | JPEG, PNG, WebP, GIF |
| Storage total gratuito | 10GB/mes |

---

## Troubleshooting

### Error: "BLOB_READ_WRITE_TOKEN is missing"
**Solución:** Configura `BLOB_READ_WRITE_TOKEN` en Vercel Dashboard → Settings → Environment Variables

### Error: "Failed to upload to Vercel Blob Storage"
**Solución:**
- Verifica que el token esté configurado
- Verifica que el proyecto tenga Blob Storage activado
- Re-deploy después de configurar las variables

### Error: "Image too large"
**Solución:** Comprime la imagen antes de subir (máximo 5MB)

---

## Desarrollo Local

El endpoint `/api/upload-image` es una **función serverless de Vercel** y no funciona con `npm run dev` (Vite).

Para probar localmente:
- Usa `npx vercel dev` (inicia Vite + Serverless Functions)
- O configura un proxy en `vite.config.ts` para desarrollo

---

## Estado

| Componente | Estado |
|------------|--------|
| Endpoint API | ✅ Usando `@vercel/blob` SDK |
| Frontend Upload | ✅ Implementado |
| Vercel Blob Storage | Activarlo en Vercel Dashboard |
| Env var `BLOB_READ_WRITE_TOKEN` | Configurar en Vercel Dashboard |

---

## Próximos Pasos

1. **Activar Vercel Blob** en Vercel Dashboard → Storage
2. **Copiar `BLOB_READ_WRITE_TOKEN`** y configurarlo en Environment Variables
3. **Hacer re-deploy** del proyecto
4. **Probar subida de imagen** en /admin

---

*Última actualización: 21 julio 2026*
