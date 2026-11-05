const fs = require('fs');
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
let bad = 0;
for (const slug of slugs) {
  const f = `dist/blog/${slug}/index.html`;
  const html = fs.readFileSync(f, 'utf8');
  const checks = {
    fffd: !html.includes('\uFFFD'),
    title: /<title>ArtCraft|<title>How to|<title>PhotoCraft|<title>FilmCraft|<title>EffectCraft|<title>VectorCraft|<title>Higgsfield|<title>Cinema|<title>Seedance/.test(html),
    desc: /<meta name="description" content="[^"]{80,}"/.test(html),
    canonical: html.includes(`https://freddydev.net/blog/${slug}`),
    schema: html.includes('BlogPosting'),
    esAccents: /ó|á|é|í|ñ/.test(html),
  };
  const failed = Object.entries(checks).filter(([, v]) => !v).map(([k]) => k);
  if (failed.length) { bad++; console.log(`FAIL ${slug}: ${failed.join(', ')}`); }
}
const sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');
const rss = fs.readFileSync('public/rss.xml', 'utf8');
const inSitemap = slugs.filter(s => sitemap.includes(`/blog/${s}`)).length;
const inRss = slugs.filter(s => rss.includes(`/blog/${s}`)).length;
console.log(`static failures: ${bad}`);
console.log(`sitemap: ${inSitemap}/10 · rss: ${inRss}/10`);
