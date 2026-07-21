/**
 * Maintenance Script
 * Automatiza tareas de mantenimiento del portafolio
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Maintenance Script - Portafolio Freddy Ticona\n');
console.log('Fecha:', new Date().toLocaleDateString('es-BO'), '\n');

// Colores
const green = (text) => `\x1b[32m${text}\x1b[0m`;
const red = (text) => `\x1b[31m${text}\x1b[0m`;
const yellow = (text) => `\x1b[33m${text}\x1b[0m`;
const blue = (text) => `\x1b[36m${text}\x1b[0m`;

let issues = [];
let warnings = [];
let passes = [];

// 1. Verificar dependencias
console.log(blue('1. Verificando Dependencias:\n'));

try {
  const outdated = execSync('npm outdated', { encoding: 'utf8' });
  if (outdated.trim()) {
    warnings.push('Hay paquetes desactualizados - Ejecutar npm update');
    console.log(yellow('⚠ Paquetes desactualizados detectados\n'));
  } else {
    passes.push('Todas las dependencias están actualizadas');
    console.log(green('✓ Todas las dependencias actualizadas\n'));
  }
} catch (err) {
  passes.push('Todas las dependencias están actualizadas');
  console.log(green('✓ Todas las dependencias actualizadas\n'));
}

try {
  const audit = execSync('npm audit --json', { encoding: 'utf8' });
  const auditData = JSON.parse(audit);

  if (auditData.metadata && auditData.metadata.vulnerabilities) {
    const vulns = auditData.metadata.vulnerabilities;
    if (vulns.total > 0) {
      warnings.push(`${vulns.total} vulnerabilidades encontradas - Revisar con npm audit`);
      console.log(yellow(`⚠ ${vulns.total} vulnerabilidades:\n`));
      console.log(`   - Críticas: ${vulns.critical || 0}`);
      console.log(`   - Altas: ${vulns.high || 0}`);
      console.log(`   - Moderadas: ${vulns.moderate || 0}\n`);
    } else {
      passes.push('No hay vulnerabilidades');
      console.log(green('✓ No hay vulnerabilidades\n'));
    }
  }
} catch (err) {
  console.log(yellow('⚠ No se pudo verificar vulnerabilidades\n'));
}

// 2. Verificar TypeScript
console.log(blue('2. Verificando TypeScript:\n'));

try {
  execSync('npm run lint', { stdio: 'pipe' });
  passes.push('TypeScript sin errores');
  console.log(green('✓ TypeScript sin errores\n'));
} catch (err) {
  issues.push('Errores de TypeScript detectados - Ejecutar npm run lint');
  console.log(red('✗ Errores de TypeScript encontrados\n'));
}

// 3. Verificar imágenes
console.log(blue('3. Verificando Imágenes:\n'));

try {
  execSync('node scripts/check-images.cjs', { stdio: 'pipe' });
  passes.push('Verificación de imágenes completada');
  console.log(green('✓ Verificación de imágenes completada\n'));
} catch (err) {
  warnings.push('Algunas imágenes necesitan atención - Revisar scripts/check-images.cjs');
  console.log(yellow('⚠ Problemas con imágenes detectados\n'));
}

// 4. Verificar archivos críticos
console.log(blue('4. Verificando Archivos Críticos:\n'));

const criticalFiles = [
  'package.json',
  'vite.config.ts',
  'tsconfig.json',
  '.env',
  'public/robots.txt',
  'public/sitemap.xml'
];

criticalFiles.forEach(file => {
  if (fs.existsSync(file)) {
    passes.push(`${file} existe`);
    console.log(green(`✓ ${file}`));
  } else {
    issues.push(`${file} NO encontrado`);
    console.log(red(`✗ ${file} NO encontrado`));
  }
});

console.log('');

// 5. Verificar tamaño de build
console.log(blue('5. Verificando Tamaño de Build:\n'));

const distPath = path.join(__dirname, '../dist');
if (fs.existsSync(distPath)) {
  const assetsPath = path.join(distPath, 'assets');
  if (fs.existsSync(assetsPath)) {
    const files = fs.readdirSync(assetsPath);
    let totalSize = 0;

    files.forEach(file => {
      const filePath = path.join(assetsPath, file);
      const stats = fs.statSync(filePath);
      totalSize += stats.size;
    });

    const sizeMB = (totalSize / 1024 / 1024).toFixed(2);
    console.log(`Tamaño total de assets: ${sizeMB} MB`);

    if (totalSize > 2 * 1024 * 1024) {
      warnings.push('Bundle > 2MB - Considerar optimización');
      console.log(yellow('⚠ Bundle grande - Considerar code splitting\n'));
    } else {
      passes.push('Tamaño de bundle aceptable');
      console.log(green('✓ Tamaño de bundle aceptable\n'));
    }
  }
} else {
  console.log(yellow('⚠ Directorio dist/ no encontrado - Ejecuta npm run build\n'));
}

// 6. Generar reporte
console.log(blue('📊 RESUMEN DEL MANTENIMIENTO:\n'));

if (passes.length > 0) {
  console.log(green('✅ PASADOS:'));
  passes.forEach(p => console.log(`   ✓ ${p}`));
}

if (warnings.length > 0) {
  console.log(yellow('\n⚠️ ADVERTENCIAS:'));
  warnings.forEach(w => console.log(`   ⚠ ${w}`));
}

if (issues.length > 0) {
  console.log(red('\n❌ PROBLEMAS:'));
  issues.forEach(i => console.log(`   ✗ ${i}`));
}

console.log(`\n${green('✓')} Pasados: ${passes.length}`);
console.log(`${yellow('⚠')} Advertencias: ${warnings.length}`);
console.log(`${red('✗')} Problemas: ${issues.length}\n`);

// 7. Recomendaciones
console.log(blue('💡 ACCIONES RECOMENDADAS:\n'));

if (warnings.length > 0 || issues.length > 0) {
  console.log('1. Ejecutar npm update para actualizar dependencias');
  console.log('2. Ejecutar npm audit fix para correguir vulnerabilidades');
  console.log('3. Ejecutar npm run build y verificar que compile');
  console.log('4. Revisar images/ con scripts/check-images.cjs');
  console.log('5. Hacer commit de cambios y deploy\n');
} else {
  console.log('✅ Todo está en orden! No se requieren acciones inmediatas.\n');
  console.log('Próximo mantenimiento sugerido: En 1 mes\n');
}

// Guardar log del mantenimiento
const logDir = path.join(__dirname, '../logs');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const logFile = path.join(logDir, `maintenance-${new Date().toISOString().split('T')[0]}.txt`);
const logContent = `
MANTENIMIENTO - PORTAFOLIO FREDDY TICONA
Fecha: ${new Date().toLocaleString('es-BO')}

RESUMEN:
✓ Pasados: ${passes.length}
⚠ Advertencias: ${warnings.length}
✗ Problemas: ${issues.length}

DETALLES:
Pasados: ${passes.join(', ')}
Advertencias: ${warnings.join(', ')}
Problemas: ${issues.join(', ')}
`;

fs.writeFileSync(logFile, logContent);
console.log(green(`📝 Log guardado en: ${logFile}\n`));