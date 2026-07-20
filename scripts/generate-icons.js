/**
 * SCRIPT PARA GENERAR FAVICONS E ICONOS
 *
 * Este script genera todos los tamaños de iconos necesarios
 * a partir de una imagen base.
 *
 * REQUISITOS:
 * npm install --save-dev sharp
 *
 * USO:
 * node scripts/generate-icons.js
 */

import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Imagen base (puedes cambiarla por tu preferida)
const INPUT_IMAGE = path.join(__dirname, '../src/assets/images/freddy_profile.jpg');

// Directorio de salida
const OUTPUT_DIR = path.join(__dirname, '../public');

// Asegurar que el directorio existe
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Tamaños a generar
const SIZES = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'icon-192.png', size: 192 },
  { name: 'icon-512.png', size: 512 },
  { name: 'apple-touch-icon.png', size: 180 }
];

// Función para generar iconos
async function generateIcons() {
  console.log('🎨 Generando iconos...');

  try {
    for (const { name, size } of SIZES) {
      const outputPath = path.join(OUTPUT_DIR, name);

      await sharp(INPUT_IMAGE)
        .resize(size, size, {
          fit: 'cover',
          position: 'center'
        })
        .png({ quality: 90 })
        .toFile(outputPath);

      console.log(`✅ ${name} (${size}x${size})`);
    }

    // Generar favicon.ico (múltiples tamaños en un archivo)
    await sharp(INPUT_IMAGE)
      .resize(32, 32, { fit: 'cover', position: 'center' })
      .toFile(path.join(OUTPUT_DIR, 'favicon.ico'));

    console.log('✅ favicon.ico');

    console.log('\n🎉 ¡Iconos generados exitosamente!');
    console.log('📁 Ubicación: public/');

  } catch (error) {
    console.error('❌ Error generando iconos:', error);
    process.exit(1);
  }
}

// Ejecutar
generateIcons();
