/**
 * Script para verificar imágenes del proyecto
 * Ejecutar con: npm run check-images
 */

const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '../public/images');
const REPORT_FILE = path.join(__dirname, '../images-report.json');

// Imágenes que deberían existir
const expectedImages = [
  // Imágenes principales
  '/images/freddy_profile.webp',
  '/images/freddy_studio.webp',
  '/images/freddy_working.webp',
  '/images/freddy_ticona_studio_1784470304205.webp',
  '/images/cinematic_la_paz_filming_1784468956760.webp',
  '/images/editing_suite_bolivia_1784468988125.webp',
  '/images/la_estrella_documentary_1784468976770.webp',

  // QR y pagos
  '/images/qr-mercantil.jpg',
  '/images/qr-freddy-ticona.jpg',

  // Behind scenes
  '/images/behind-scenes/',
];

const report = {
  timestamp: new Date().toISOString(),
  totalExpected: expectedImages.length,
  found: [],
  missing: [],
  oversized: [],
  warnings: []
};

function checkFile(filePath) {
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    report.found.push({ path: filePath, size: `${sizeKB} KB` });

    // Alertar si es muy grande
    if (stats.size > 500 * 1024) { // > 500KB
      report.oversized.push({ path: filePath, size: `${sizeKB} KB` });
      report.warnings.push(`${filePath} es muy grande (${sizeKB} KB)`);
    }

    return true;
  }
  return false;
}

function checkDirectory(dirPath) {
  if (fs.existsSync(dirPath)) {
    const files = fs.readdirSync(dirPath);
    return { exists: true, count: files.length };
  }
  return { exists: false, count: 0 };
}

// Verificar archivos individuales
expectedImages.forEach(imagePath => {
  const fullPath = path.join(__dirname, '..', 'public', imagePath);

  if (imagePath.endsWith('/')) {
    // Es un directorio
    const result = checkDirectory(fullPath);
    if (result.exists) {
      report.found.push({ path: imagePath, type: 'directory', count: result.count });
    } else {
      report.missing.push(imagePath);
    }
  } else {
    // Es un archivo
    if (!checkFile(fullPath)) {
      report.missing.push(imagePath);
    }
  }
});

// Guardar reporte
fs.writeFileSync(REPORT_FILE, JSON.stringify(report, null, 2));

// Mostrar resumen
console.log('\n=== 📊 Reporte de Imágenes ===\n');
console.log(`✅ Encontradas: ${report.found.length}`);
console.log(`❌ Faltantes: ${report.missing.length}`);
console.log(`⚠️ Muy grandes: ${report.oversized.length}`);

if (report.missing.length > 0) {
  console.log('\n❌ Imágenes faltantes:');
  report.missing.forEach(img => console.log(`  - ${img}`));
}

if (report.warnings.length > 0) {
  console.log('\n⚠️ Advertencias:');
  report.warnings.forEach(warning => console.log(`  - ${warning}`));
}

console.log(`\n📄 Reporte completo guardado en: ${REPORT_FILE}\n`);
