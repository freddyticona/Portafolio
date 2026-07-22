/**
 * Genera versión optimizada de imagen hero para LCP
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const HERO_IMAGE = 'public/images/behind-scenes/DSC_2994.webp';
const SIZES = [
  { name: 'small', width: 480, quality: 50 },
  { name: 'medium', width: 960, quality: 65 },
  { name: 'large', width: 1920, quality: 75 }
];

async function generateHeroVariants() {
  console.log('🚀 Generando variantes de imagen hero...\n');

  const inputPath = path.resolve(__dirname, '..', HERO_IMAGE);

  if (!fs.existsSync(inputPath)) {
    console.error('❌ Imagen hero no encontrada:', HERO_IMAGE);
    return;
  }

  const metadata = await sharp(inputPath).metadata();
  console.log(`📷 Original: ${metadata.width}x${metadata.height}\n`);

  for (const size of SIZES) {
    const outputPath = inputPath.replace('.webp', `-${size.name}.webp`);

    await sharp(inputPath)
      .resize(size.width, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({
        quality: size.quality,
        effort: 6
      })
      .toFile(outputPath);

    const stats = fs.statSync(outputPath);
    console.log(`✅ ${size.name.padEnd(6)} ${size.width}px → ${Math.round(stats.size / 1024)}KB`);
  }

  console.log('\n💡 Ahora implementa srcset en CinematicHero.tsx');
}

generateHeroVariants().catch(console.error);