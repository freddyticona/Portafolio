const fs = require('fs');
const path = require('path');

const slugs = [
  'artcraft-estudio-ia-guia-completa',
  'instalar-artcraft-launcher-apps-clon-adobe-windows',
  'photocraft-vs-photoshop-editar-imagenes-ia',
  'filmcraft-editor-video-clon-premiere-gratis',
  'effectcraft-motion-graphics-vfx-clon-after-effects',
  'vectorcraft-designcraft-storyboards-graficos-ia',
  'artcraft-canvas-2d-editor-3d-componer-escenas',
  'higgsfield-soul-cinema-soul-id-personajes-consistentes',
  'higgsfield-cinema-studio-dop-camara-lente-movimiento',
  'higgsfield-seedance-kling-veo-generacion-video',
];

let problems = 0;
for (const slug of slugs) {
  const file = path.join('dist', 'blog', slug, 'index.html');
  if (!fs.existsSync(file)) {
    console.log('MISSING', file);
    problems++;
    continue;
  }
  const html = fs.readFileSync(file, 'utf8');
  const h1 = (html.match(/<h1[ >]/g) || []).length;
  const checks = {
    h1: h1 === 1,
    figure: html.includes('report-figure'),
    stats: html.includes('stat-grid'),
    quote: html.includes('expert-quote-text'),
    doc: html.includes('doc-card'),
    chapters: (html.match(/report-chapter/g) || []).length >= 4,
    image: html.includes('/images/blog/tutoriales-ia-2026/'),
    es: html.includes('lang="es"') || html.includes('hreflang="es"'),
    en: html.includes('lang="en"') || html.includes('hreflang="en"'),
    noFffd: !html.includes('\uFFFD'),
    blogposting: html.includes('BlogPosting'),
  };
  const failed = Object.entries(checks).filter(([, v]) => !v).map(([k]) => k);
  if (failed.length) {
    problems++;
    console.log(`FAIL ${slug}: ${failed.join(', ')} (h1=${h1})`);
  } else {
    console.log(`OK   ${slug}`);
  }
}
console.log(problems === 0 ? 'ALL ROUTES OK' : `PROBLEMS: ${problems}`);
