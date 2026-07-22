/**
 * Optimización de imágenes hero para mejorar LCP
 * Recompresión sin redimensionar para mantener calidad pero reducir tamaño
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuración de optimización
const CONFIG = {
  // Ancho máximo para imágenes hero
  maxWidth: 1920,
  // Calidad WebP - valores más bajos = menor tamaño
  quality: 70,
  // Imágenes a optimizar
  targets: [
    'public/images/behind-scenes/DSC_2994.webp',
    'public/images/freddy_profile.webp',
    'public/images/freddy_working.webp',
    'public/images/freddy_studio.webp'
  ]
};

async function optimizeImage(inputPath) {
  const fullPath = path.resolve(__dirname, '..', inputPath);

  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  No encontrado: ${inputPath}`);
    return { success: false, input: inputPath };
  }

  try {
    const metadata = await sharp(fullPath).metadata();
    const originalSize = fs.statSync(fullPath).size;

    console.log(`\n📷 ${path.basename(inputPath)}`);
    console.log(`   Original: ${Math.round(originalSize / 1024)}KB | ${metadata.width}x${metadata.height}`);

    // Determinar si necesitamos redimensionar
    const needsResize = metadata.width > CONFIG.maxWidth;
    let processor = sharp(fullPath);

    if (needsResize) {
      processor = processor.resize(CONFIG.maxWidth, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
      console.log(`   ↪ Redimensionando a ${CONFIG.maxWidth}px de ancho`);
    }

    // Crear versión optimizada
    const outputPath = fullPath.replace('.webp', '_optimized.webp');

    await processor
      .webp({
        quality: CONFIG.quality,
        effort: 6, // Mayor esfuerzo de compresión
        smartSubsample: true,
        nearLossless: true
      })
      .toFile(outputPath);

    const optimizedSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    const savingsKB = Math.round((originalSize - optimizedSize) / 1024);

    if (optimizedSize < originalSize) {
      console.log(`   ✅ Optimizado: ${Math.round(optimizedSize / 1024)}KB (ahorro ${savings}% / ${savingsKB}KB)`);

      // Backup y reemplazar
      const backupPath = fullPath + '.backup';
      fs.copyFileSync(fullPath, backupPath);
      fs.copyFileSync(outputPath, fullPath);
      fs.unlinkSync(outputPath);

      console.log(`   🔄 Original reemplazado (backup en ${path.basename(backupPath)})`);
      return { success: true, input: inputPath, originalSize, optimizedSize, savings };
    } else {
      console.log(`   ⚠️  Optimizado resultó más grande (${Math.round(optimizedSize / 1024)}KB), manteniendo original`);
      fs.unlinkSync(outputPath);
      return { success: false, input: inputPath, reason: 'larger' };
    }

  } catch (error) {
    console.error(`   ❌ Error: ${error.message}`);
    return { success: false, input: inputPath, error: error.message };
  }
}

async function main() {
  console.log('🚀 Optimización de imágenes hero\n');
  console.log(`Configuración: Ancho máx ${CONFIG.maxWidth}px | Calidad WebP ${CONFIG.quality}%\n`);

  const results = [];
  for (const target of CONFIG.targets) {
    const result = await optimizeImage(target);
    results.push(result);
  }

  // Resumen
  console.log('\n📊 Resumen:\n');
  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);

  if (successful.length > 0) {
    console.log(`✅ Optimizadas: ${successful.length}`);
    let totalSavings = 0;
    successful.forEach(r => {
      totalSavings += (r.originalSize - r.optimizedSize);
    });
    console.log(`   Ahorro total: ${Math.round(totalSavings / 1024)}KB`);
  }

  if (failed.length > 0) {
    console.log(`⚠️  Fallaron/No mejoraron: ${failed.length}`);
  }

  console.log('\n💡 Para revertir cambios, elimina los archivos .backup\n');
}

main().catch(console.error);
