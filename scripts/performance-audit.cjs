/**
 * Performance Audit Script
 * Analiza el rendimiento del sitio y genera recomendaciones
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Performance Audit - Portafolio Freddy Ticona\n');
console.log('Analizando archivos de build...\n');

const distPath = path.join(__dirname, '../dist');

// Colores
const green = (text) => `\x1b[32m${text}\x1b[0m`;
const red = (text) => `\x1b[31m${text}\x1b[0m`;
const yellow = (text) => `\x1b[33m${text}\x1b[0m`;
const blue = (text) => `\x1b[36m${text}\x1b[0m`;

let issues = [];
let warnings = [];
let passes = [];

// 1. Verificar tamaño de archivos
console.log(blue('1. Análisis de Tamaño de Archivos:\n'));

if (fs.existsSync(distPath)) {
  const assetsPath = path.join(distPath, 'assets');
  const files = fs.readdirSync(assetsPath);

  let totalSize = 0;
  let jsSize = 0;
  let cssSize = 0;

  files.forEach(file => {
    const filePath = path.join(assetsPath, file);
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    totalSize += stats.size;

    if (file.endsWith('.js')) {
      jsSize += stats.size;
      console.log(`JS: ${file} - ${sizeKB} KB`);
    } else if (file.endsWith('.css')) {
      cssSize += stats.size;
      console.log(`CSS: ${file} - ${sizeKB} KB`);
    }
  });

  console.log(`\nTotal JS: ${(jsSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total CSS: ${(cssSize / 1024).toFixed(2)} KB`);
  console.log(`Total Assets: ${(totalSize / 1024 / 1024).toFixed(2)} MB\n`);

  // Verificar límites recomendados
  if (jsSize > 500 * 1024) {
    issues.push('JS bundle > 500KB - Considerar code splitting');
  } else if (jsSize > 250 * 1024) {
    warnings.push('JS bundle > 250KB - Se puede optimizar más');
  } else {
    passes.push('Tamaño de JS bundle aceptable');
  }

  if (cssSize > 100 * 1024) {
    warnings.push('CSS > 100KB - Considerar purgar CSS no usado');
  } else {
    passes.push('Tamaño de CSS aceptable');
  }
} else {
  console.log(red('⚠ Directorio dist/ no encontrado. Ejecuta npm run build primero.\n'));
}

// 2. Verificar imágenes
console.log(blue('2. Análisis de Imágenes:\n'));

const publicImagesPath = path.join(__dirname, '../public/images');
let totalImages = 0;
let webpCount = 0;
let jpgCount = 0;
let pngCount = 0;
let largeImages = 0;

if (fs.existsSync(publicImagesPath)) {
  const countImages = (dir) => {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    items.forEach(item => {
      if (item.isDirectory()) {
        countImages(path.join(dir, item.name));
      } else if (item.name.match(/\.(jpg|jpeg|png|webp|gif)$/i)) {
        totalImages++;
        const filePath = path.join(dir, item.name);
        const stats = fs.statSync(filePath);
        const sizeKB = stats.size / 1024;

        if (item.name.endsWith('.webp')) webpCount++;
        if (item.name.match(/\.jpe?g$/i)) jpgCount++;
        if (item.name.endsWith('.png')) pngCount++;

        if (sizeKB > 500) {
          largeImages++;
        }
      }
    });
  };

  countImages(publicImagesPath);

  console.log(`Total imágenes: ${totalImages}`);
  console.log(`WebP: ${webpCount} (${((webpCount/totalImages)*100).toFixed(1)}%)`);
  console.log(`JPG: ${jpgCount} (${((jpgCount/totalImages)*100).toFixed(1)}%)`);
  console.log(`PNG: ${pngCount} (${((pngCount/totalImages)*100).toFixed(1)}%)`);
  console.log(`Imágenes > 500KB: ${largeImages}\n`);

  if (jpgCount + pngCount > webpCount) {
    warnings.push(`${jpgCount + pngCount} imágenes sin convertir a WebP`);
  } else {
    passes.push('Imágenes optimizadas en formato WebP');
  }

  if (largeImages > 0) {
    warnings.push(`${largeImages} imágenes pesadas (> 500KB)`);
  }
} else {
  console.log(yellow('⚠ Directorio public/images no encontrado.\n'));
}

// 3. Recomendaciones de Core Web Vitals
console.log(blue('3. Core Web Vitals Objetivos:\n'));

const vitals = [
  { name: 'LCP (Largest Contentful Paint)', target: '< 2.5s', current: 'Desconocido' },
  { name: 'FID (First Input Delay)', target: '< 100ms', current: 'Desconocido' },
  { name: 'CLS (Cumulative Layout Shift)', target: '< 0.1', current: 'Desconocido' },
  { name: 'FCP (First Contentful Paint)', target: '< 1.8s', current: 'Desconocido' },
  { name: 'TTFB (Time to First Byte)', target: '< 600ms', current: 'Desconocido' }
];

vitals.forEach(vital => {
  console.log(`${vital.name}: Objetivo ${vital.target}`);
});

console.log(yellow('\n💡 Ejecuta Lighthouse en Chrome DevTools para valores reales:\n'));
console.log('1. Abre https://freddydev.net');
console.log('2. Presiona F12 (DevTools)');
console.log('3. Ve a la pestaña "Lighthouse"');
console.log('4. Click "Analyze page load"');
console.log('5. Revisa los scores y recomendaciones\n');

// 4. Recomendaciones específicas
console.log(blue('4. Recomendaciones Específicas:\n'));

const recommendations = [
  {
    priority: 'Alta',
    title: 'Implementar Code Splitting',
    description: 'Dividir el bundle de JavaScript en chunks más pequeños'
  },
  {
    priority: 'Alta',
    title: 'Lazy Loading de Imágenes',
    description: 'Implementar loading="lazy" en imágenes fuera del viewport'
  },
  {
    priority: 'Media',
    title: 'Optimizar Critical CSS',
    description: 'Extraer CSS crítico para above-the-fold'
  },
  {
    priority: 'Media',
    title: 'Implementar HTTP/2 Server Push',
    description: 'Push de recursos críticos (si Vercel lo soporta)'
  },
  {
    priority: 'Baja',
    title: 'Considerar CDN para Videos',
    description: 'Usar CDN especializado para videos (Mux, Cloudflare)'
  }
];

recommendations.forEach(rec => {
  const priority = rec.priority === 'Alta' ? red(rec.priority) : rec.priority === 'Media' ? yellow(rec.priority) : rec.priority;
  console.log(`${priority} - ${rec.title}`);
  console.log(`   ${rec.description}\n`);
});

// Resumen
console.log(blue('📊 RESUMEN:\n'));
if (passes.length > 0) passes.forEach(p => console.log(green(`✓ ${p}`)));
if (warnings.length > 0) warnings.forEach(w => console.log(yellow(`⚠ ${w}`)));
if (issues.length > 0) issues.forEach(i => console.log(red(`✗ ${i}`)));

console.log(`\n${green('✓')} Pasados: ${passes.length}`);
console.log(`${yellow('⚠')} Advertencias: ${warnings.length}`);
console.log(`${red('✗')} Problemas: ${issues.length}\n`);

console.log(blue('💡 Próximos pasos sugeridos:\n'));
console.log('1. Ejecutar Lighthouse en el sitio de producción');
console.log('2. Implementar code splitting para componentes pesados');
console.log('3. Optimizar imágenes restantes a WebP');
console.log('4. Configurar monitoring de rendimiento');
console.log('5. Revisar y actualizar dependencias\n');
