/**
 * OPTIMIZAR IMÁGENES A WEBP
 *
 * Convierte imágenes JPG a WebP para mejor rendimiento web.
 * Reduce el tamaño en 80-90% manteniendo la calidad visual.
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SOURCE_DIR = path.join(__dirname, '../public/images/behind-scenes');
const OUTPUT_DIR = path.join(__dirname, '../public/images/behind-scenes-webp');

// Crear directorio de salida si no existe
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Configuración de WebP
const webpConfig = {
  quality: 85, // Balance calidad/tamaño
  effort: 6,    // Esfuerzo de compresión (0-6, mayor = mejor pero más lento)
  nearLossless: true // Casi sin pérdida
};

// Archivos a optimizar (solo los más pesados)
const filesToOptimize = [
  'DSC_2994.jpg',
  'DSC_3001.jpg',
  'DSC_2987.jpg',
  '20190302_133138.jpg',
  '20190208_221221.jpg',
  '20190228_190246.jpg',
  '20190302_203628.jpg'
];

console.log('🖼️ Optimizando imágenes a WebP...\n');

let totalOriginalSize = 0;
let totalWebpSize = 0;

async function optimizeImage(filename) {
  const inputPath = path.join(SOURCE_DIR, filename);
  const outputPath = path.join(OUTPUT_DIR, filename.replace(/\.(jpg|JPG)$/, '.webp'));

  try {
    // Verificar que el archivo existe
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  ${filename} - No encontrado, saltando...`);
      return;
    }

    // Obtener tamaño original
    const originalStats = fs.statSync(inputPath);
    const originalSize = originalStats.size;
    totalOriginalSize += originalSize;

    // Convertir a WebP
    await sharp(inputPath)
      .webp(webpConfig)
      .toFile(outputPath);

    // Obtener tamaño WebP
    const webpStats = fs.statSync(outputPath);
    const webpSize = webpStats.size;
    totalWebpSize += webpSize;

    // Calcular reducción
    const reduction = ((1 - webpSize / originalSize) * 100).toFixed(1);

    console.log(`✅ ${filename}`);
    console.log(`   ${formatBytes(originalSize)} → ${formatBytes(webpSize)} (${reduction}% reducción)\n`);
  } catch (error) {
    console.error(`❌ Error optimizando ${filename}:`, error.message);
  }
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

async function main() {
  console.log(`Directorio origen: ${SOURCE_DIR}`);
  console.log(`Directorio destino: ${OUTPUT_DIR}\n`);

  // Procesar cada imagen
  for (const filename of filesToOptimize) {
    await optimizeImage(filename);
  }

  // Resumen
  console.log('────────────────────────────────────');
  console.log(`📊 RESUMEN:`);
  console.log(`   Tamaño original: ${formatBytes(totalOriginalSize)}`);
  console.log(`   Tamaño WebP: ${formatBytes(totalWebpSize)}`);
  console.log(`   Reducción total: ${((1 - totalWebpSize / totalOriginalSize) * 100).toFixed(1)}%`);
  console.log('────────────────────────────────────');
  console.log('\n✨ Imágenes optimizadas en: public/images/behind-scenes-webp/');
}

main().catch(console.error);
