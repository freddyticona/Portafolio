/**
 * Script de verificación de SEO
 * Verifica que todos los meta tags y structured data estén correctamente implementados
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verificación de SEO - Portafolio Freddy Ticona\n');

// Colores para terminal
const green = (text) => `\x1b[32m${text}\x1b[0m`;
const red = (text) => `\x1b[31m${text}\x1b[0m`;
const yellow = (text) => `\x1b[33m${text}\x1b[0m`;
const blue = (text) => `\x1b[36m${text}\x1b[0m`;

let errors = 0;
let warnings = 0;
let passed = 0;

// 1. Verificar dominio en archivos
console.log(blue('1. Verificando dominio freddydev.net en archivos...\n'));

const filesToCheck = [
  { path: 'public/sitemap.xml', expected: 'freddydev.net' },
  { path: 'public/robots.txt', expected: 'freddydev.net' },
  { path: 'src/lib/seo.ts', expected: 'freddydev.net' },
  { path: 'src/lib/structuredData.ts', expected: 'freddydev.net' }
];

filesToCheck.forEach(({ path: filePath, expected }) => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes(expected)) {
      console.log(green(`✓ ${filePath} - Dominio correcto`));
      passed++;
    } else {
      console.log(red(`✗ ${filePath} - Dominio NO encontrado`));
      errors++;
    }
  } catch (err) {
    console.log(red(`✗ ${filePath} - Error al leer archivo`));
    errors++;
  }
});

// 2. Verificar meta tags en index.html
console.log(blue('\n2. Verificando meta tags en index.html...\n'));

try {
  const html = fs.readFileSync('index.html', 'utf8');

  const metaTags = [
    { name: 'geo.region', expected: 'BO-LP' },
    { name: 'geo.placename', expected: 'La Paz' },
    { name: 'geo.position', expected: '-16.5;-68.15' },
    { name: 'ICBM', expected: '-16.5, -68.15' },
    { name: 'og:image:width', expected: '1200' },
    { name: 'og:image:height', expected: '630' }
  ];

  metaTags.forEach(({ name, expected }) => {
    const pattern = new RegExp(`name="${name}"\\s+content="([^"]*)"|property="${name}"\\s+content="([^"]*)|"${name}"\\s+content="([^"]*)`);
    const match = html.match(pattern);
    if (match && (match[1] || match[2] || match[3])) {
      const value = match[1] || match[2] || match[3];
      if (value.includes(expected)) {
        console.log(green(`✓ ${name} - ${value}`));
        passed++;
      } else {
        console.log(yellow(`⚠ ${name} - ${value} (esperado: ${expected})`));
        warnings++;
      }
    } else {
      console.log(red(`✗ ${name} - NO encontrado`));
      errors++;
    }
  });
} catch (err) {
  console.log(red('Error al leer index.html'));
  errors++;
}

// 3. Verificar sitemap.xml
console.log(blue('\n3. Verificando sitemap.xml...\n'));

try {
  const sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');

  const requiredPages = ['#inicio', '#sobre-mi', '#portafolio', '#cv', '#blog', '#servicios', '#reservas', '#contacto'];

  requiredPages.forEach(page => {
    if (sitemap.includes(page)) {
      console.log(green(`✓ ${page} - En sitemap`));
      passed++;
    } else {
      console.log(red(`✗ ${page} - NO en sitemap`));
      errors++;
    }
  });

  if (sitemap.includes('xmlns:image=')) {
    console.log(green('✓ Image namespace presente'));
    passed++;
  } else {
    console.log(yellow('⚠ Image namespace NO encontrado'));
    warnings++;
  }
} catch (err) {
  console.log(red('Error al leer sitemap.xml'));
  errors++;
}

// 4. Verificar robots.txt
console.log(blue('\n4. Verificando robots.txt...\n'));

try {
  const robots = fs.readFileSync('public/robots.txt', 'utf8');

  if (robots.includes('Sitemap: https://freddydev.net/sitemap.xml')) {
    console.log(green('✓ Sitemap correcto en robots.txt'));
    passed++;
  } else {
    console.log(red('✗ Sitemap incorrecto en robots.txt'));
    errors++;
  }

  if (robots.includes('Disallow: /admin')) {
    console.log(green('✓ /admin bloqueado'));
    passed++;
  } else {
    console.log(yellow('⚠ /admin NO bloqueado'));
    warnings++;
  }
} catch (err) {
  console.log(red('Error al leer robots.txt'));
  errors++;
}

// 5. Verificar structured data
console.log(blue('\n5. Verificando structured data...\n'));

try {
  const structuredData = fs.readFileSync('src/lib/structuredData.ts', 'utf8');

  const schemas = ['Person', 'LocalBusiness', 'Article', 'VideoObject', 'BreadcrumbList'];

  schemas.forEach(schema => {
    if (structuredData.includes(`'@type': '${schema}'`) || structuredData.includes(`"@type": "${schema}"`)) {
      console.log(green(`✓ ${schema} schema implementado`));
      passed++;
    } else {
      console.log(red(`✗ ${schema} schema NO encontrado`));
      errors++;
    }
  });
} catch (err) {
  console.log(red('Error al leer structuredData.ts'));
  errors++;
}

// 6. Verificar títulos optimizados
console.log(blue('\n6. Verificando títulos optimizados...\n'));

try {
  const seo = fs.readFileSync('src/lib/seo.ts', 'utf8');

  const keywords = ['camarógrafo La Paz', 'filmación 4K', 'Bolivia', 'La Paz'];

  keywords.forEach(keyword => {
    if (seo.includes(keyword)) {
      console.log(green(`✓ "${keyword}" en títulos/descripciones`));
      passed++;
    } else {
      console.log(yellow(`⚠ "${keyword}" NO encontrado`));
      warnings++;
    }
  });
} catch (err) {
  console.log(red('Error al leer seo.ts'));
  errors++;
}

// Resumen
console.log(blue('\n📊 RESUMEN:\n'));
console.log(green(`✓ Pasados: ${passed}`));
console.log(yellow(`⚠ Advertencias: ${warnings}`));
console.log(red(`✗ Errores: ${errors}`));

if (errors === 0) {
  console.log(green('\n🎉 SEO verification PASSED!\n'));
  process.exit(0);
} else {
  console.log(red('\n❌ SEO verification FAILED!\n'));
  process.exit(1);
}
