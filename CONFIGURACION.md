# Configuración del Portafolio

Este archivo te guía sobre cómo personalizar tu portafolio.

## Archivo de Configuración Centralizada

Todos los datos configurables del sitio se encuentran en **`src/config.ts`**. Este archivo centraliza:

- Información de contacto (teléfono, email, ubicación)
- Enlaces de redes sociales
- Configuración del formulario de contacto (Web3Forms)
- Videos de YouTube
- Metadatos SEO

## Cómo Actualizar la Configuración

### 1. Información de Contacto

Edita `src/config.ts`:

```typescript
export const CONTACT_INFO = {
  phoneNumber: '+591 76842107',  // Tu número real
  email: 'freddyticona62@gmail.com',
  location: 'La Paz, Bolivia',
  coordinates: 'S 16°30\'0" / W 68°9\'0"'
};
```

### 2. Redes Sociales

Edita `src/config.ts`:

```typescript
export const SOCIAL_LINKS = {
  youtube: 'https://www.youtube.com/@tu-canal',
  linkedin: 'https://www.linkedin.com/in/tu-perfil',
  x: 'https://x.com/tu-usuario',
  facebook: 'https://www.facebook.com/tu-pagina'
};
```

### 3. Formulario de Contacto (Web3Forms)

Para que el formulario funcione, necesitas una **access_key** de Web3Forms:

1. Ve a [web3forms.com](https://web3forms.com/)
2. Regístrate gratuitamente
3. Crea un nuevo formulario
4. Copia tu **Access Key**
5. Actualiza `src/config.ts`:

```typescript
export const CONTACT_FORM = {
  accessKey: 'TU_ACCESS_KEY_AQUI',  // Reemplaza esto
  subject: 'Contacto Portafolio Profesional',
  fromName: 'Portafolio Freddy Ticona'
};
```

### 4. Videos de YouTube

Cuando subas tus videos a YouTube:

1. Sube tu showreel y videos del portafolio
2. Copia los IDs de los videos (la parte después de `v=` en la URL)
3. Actualiza `src/config.ts`:

```typescript
export const YOUTUBE_VIDEOS = {
  showreel: 'TU_VIDEO_ID',      // ID de tu showreel
  placeholder: 'TU_VIDEO_ID'    // ID para videos del portafolio
};
```

Ejemplo: Si tu video está en `https://www.youtube.com/watch?v=abc123`, el ID es `abc123`.

### 5. Título y SEO

El título del sitio está en `index.html`:

```html
<title>Freddy Ticona Guzmán | Camarógrafo y Realizador Audiovisual - La Paz, Bolivia</title>
```

Los metadatos SEO adicionales están en `src/config.ts`:

```typescript
export const SEO = {
  title: '...',
  description: '...',
  keywords: ['...']
};
```

## Instalación y Ejecución

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar producción
npm run preview
```

## Estructura del Proyecto

```
portafolio cv studio/
├── src/
│   ├── config.ts          # ⭐ CONFIGURACIÓN CENTRALIZADA
│   ├── components/        # Componentes React
│   ├── translations.ts    # Contenido bilingüe
│   ├── types.ts          # TypeScript interfaces
│   └── assets/           # Imágenes
├── index.html            # Título de la página
├── package.json
└── README.md
```

## ¿Qué falta por personalizar?

| Item | Ubicación | Estado |
|------|----------|--------|
| Número WhatsApp | `src/config.ts` | ✅ Actualizado |
| Email | `src/config.ts` | ✅ Actualizado |
| Redes sociales | `src/config.ts` | ✅ Actualizadas |
| Web3Forms access_key | `src/config.ts` | ⚠️ Requiere tu key |
| Videos YouTube | `src/config.ts` | ⚠️ Requiere tus IDs |
| Título HTML | `index.html` | ✅ Actualizado |

## Recursos Útiles

- **Web3Forms**: https://web3forms.com/ - Formularios gratuitos
- **Tailwind CSS**: https://tailwindcss.com/ - Framework de estilos
- **Vite**: https://vitejs.dev/ - Build tool

---

¿Necesitas ayuda? Revisa los comentarios TODO en el código o consulta la documentación oficial.
