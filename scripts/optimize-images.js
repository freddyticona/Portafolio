#!/usr/bin/env node

/**
 * Script para optimizar imágenes y convertirlas a WebP
 *
 * Uso:
 * npm run optimize-images
 * node scripts/optimize-images.js
 *
 * Requisitos:
 * - ImageMagick o sharp instalado
 * - npm install sharp
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Directorios
const SOURCE_DIR = path.join(__dirname, '../public/images');
const OUTPUT_DIR = path.join(__dirname, '../public/images-optimized');

// Extensiones a procesar
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'];

// Calidad WebP (0-100)
const WEBP_QUALITY = 85;

/**
 * Verificar si sharp está instalado
 */
function checkSharp() {
  try {
    require.resolve('sharp');
    return true;
  } catch {
    console.log('⚠️  sharp no está instalado. Instala con: npm install sharp');
    return false;
  }
}

/**
 * Obtener todas las imágenes del directorio
 */
function getImages(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getImages(filePath, fileList);
    } else if (IMAGE_EXTENSIONS.includes(path.extname(file))) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

/**
 * Optimizar imagen usando sharp
 */
async function optimizeImage(inputPath, outputPath) {
  if (!checkSharp()) return;

  try {
    const sharp = require('sharp');

    await sharp(inputPath)
      .webp({ quality: WEBP_QUALITY })
      .toFile(outputPath);

    // Obtener tamaños
    const inputSize = fs.statSync(inputPath).size / 1024; // KB
    const outputSize = fs.statSync(outputPath).size / 1024; // KB
    const savings = ((1 - outputSize / inputSize) * 100).toFixed(1);

    console.log(`✅ ${path.basename(inputPath)}: ${inputSize.toFixed(1)}KB → ${outputSize.toFixed(1)}KB (${savings}% reduction)`);
  } catch (error) {
    console.error(`❌ Error procesando ${inputPath}:`, error.message);
  }
}

/**
 * Crear directorio si no existe
 */
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

/**
 * Procesar todas las imágenes
 */
async function processImages() {
  console.log('🔍 Buscando imágenes...\n');

  const images = getImages(SOURCE_DIR);
  console.log(`📁 Encontradas ${images.length} imágenes\n`);

  if (images.length === 0) {
    console.log('No se encontraron imágenes para procesar.');
    return;
  }

  // Crear directorio de salida
  ensureDir(OUTPUT_DIR);

  let processed = 0;
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  for (const imagePath of images) {
    const relativePath = path.relative(SOURCE_DIR, imagePath);
    const outputPath = path.join(OUTPUT_DIR, relativePath.replace(/\.(jpg|jpeg|png)$/i, '.webp'));

    // Crear subdirectorios si es necesario
    ensureDir(path.dirname(outputPath));

    await optimizeImage(imagePath, outputPath);

    // Acumular estadísticas
    try {
      totalOriginalSize += fs.statSync(imagePath).size;
      totalOptimizedSize += fs.statSync(outputPath).size;
      processed++;
    } catch {}
  }

  console.log('\n' + '='.repeat(50));
  console.log(`📊 RESUMEN:`);
  console.log(`   Procesadas: ${processed}/${images.length} imágenes`);
  console.log(`   Tamaño original: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Tamaño optimizado: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Ahorro: ${((1 - totalOptimizedSize / totalOriginalSize) * 100).toFixed(1)}%`);
  console.log('='.repeat(50));
  console.log(`\n✅ Imágenes optimizadas guardadas en: ${OUTPUT_DIR}`);
}

// Ejecutar
processImages().catch(console.error);

module.exports = { processImages, optimizeImage };
