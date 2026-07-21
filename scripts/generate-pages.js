import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE = 'https://freddydev.net';

const pages = {
  '': {
    title: 'Freddy Ticona Guzmán | Camarógrafo Profesional en La Paz, Bolivia',
    desc: 'Camarógrafo profesional en La Paz, Bolivia. Freddy Ticona Guzmán, realizador audiovisual con 15+ años en televisión, documentales y cobertura periodística. Premio Nacional Eduardo Abaroa 2017.',
    ogTitle: 'Freddy Ticona Guzmán | Camarógrafo y Realizador Audiovisual',
    path: '/'
  },
  'inicio': {
    title: 'Freddy Ticona Guzmán | Camarógrafo Profesional La Paz Bolivia | Filmación 4K y Documentales',
    desc: 'Portafolio de Freddy Ticona, camarógrafo experto en La Paz, Bolivia. Más de 15 años filmando documentales, cobertura periodística y televisión 4K. Premio Eduardo Abaroa 2017.',
    path: '/inicio'
  },
  'sobre-mi': {
    title: 'Sobre Mí - Freddy Ticona | Camarógrafo Profesional en Bolivia',
    desc: 'Conoce la trayectoria de Freddy Ticona Guzmán: 15 años en televisión boliviana, camarógrafo en Bolivia TV, Red Uno y RTP. Especialista en cinematografía y producción documental.',
    path: '/sobre-mi'
  },
  'portafolio': {
    title: 'Portafolio de Proyectos Audiovisuales | Documentales y Cobertura Televisiva',
    desc: 'Galería de proyectos de Freddy Ticona: documentales culturales, cobertura periodística nacional e internacional, y producción de video corporativo 4K en Bolivia.',
    path: '/portafolio'
  },
  'cv': {
    title: 'Currículum Camarógrafo Bolivia | Freddy Ticona Guzmán',
    desc: 'Currículum profesional de Freddy Ticona. Licenciado en Comunicación Social, Técnico en Cinematografía. Certificaciones en producción audiovisual y ciberseguridad.',
    path: '/cv'
  },
  'blog': {
    title: 'Blog de Producción Audiovisual y Cinematografía Bolivia | Tips de Filmación',
    desc: 'Blog profesional de Freddy Ticona sobre técnicas de filmación 4K, edición de video, documentales y la evolución de la televisión en Bolivia.',
    path: '/blog'
  },
  'noticias': {
    title: 'Noticias Audiovisuales Bolivia | Cobertura Periodística y Análisis',
    desc: 'Cobertura periodística del acontecer nacional e historias del mundo audiovisual en Bolivia. Crónicas, reportajes y análisis desde la mirada de un camarógrafo con 15 años de experiencia.',
    path: '/noticias'
  },
  'servicios': {
    title: 'Servicios Audiovisuales La Paz Bolivia | Filmación 4K, Edición y Documentales',
    desc: 'Contrata servicios profesionales de filmación 4K, edición de video, producción de documentales y consultoría audiovisual en La Paz, Bolivia. Cotiza tu proyecto.',
    path: '/servicios'
  },
  'reservas': {
    title: 'Reservar Camarógrafo La Paz Bolivia | Agendar Filmación y Edición Online',
    desc: 'Sistema de reservas online para agendar sesiones de filmación 4K, edición de video y producción audiovisual con Freddy Ticona en La Paz, Bolivia.',
    path: '/reservas'
  },
  'contacto': {
    title: 'Contacto - Contrata Camarógrafo en La Paz Bolivia | Filmación y Edición de Video',
    desc: 'Contacta a Freddy Ticona, camarógrafo profesional en La Paz, Bolivia. Solicita cotizaciones para filmación 4K, edición de video, documentales y cobertura periodística.',
    path: '/contacto'
  }
};

const distDir = path.join(__dirname, '..', 'dist');

if (!fs.existsSync(distDir)) {
  console.error('❌ dist/ no encontrado. Ejecuta "npm run build" primero.');
  process.exit(1);
}

const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

for (const [key, meta] of Object.entries(pages)) {
  let html = indexHtml;

  // Replace title
  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${meta.title}</title>`
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description" content=".*?"/,
    `<meta name="description" content="${meta.desc}"`
  );

  // Replace OG title
  html = html.replace(
    /<meta property="og:title" content=".*?"/,
    `<meta property="og:title" content="${meta.ogTitle || meta.title}"`
  );

  // Replace OG description
  html = html.replace(
    /<meta property="og:description" content=".*?"/,
    `<meta property="og:description" content="${meta.desc}"`
  );

  // Replace OG url
  html = html.replace(
    /<meta property="og:url" content=".*?"/,
    `<meta property="og:url" content="${SITE}${meta.path}"`
  );

  // Replace Twitter title
  html = html.replace(
    /<meta name="twitter:title" content=".*?"/,
    `<meta name="twitter:title" content="${meta.ogTitle || meta.title}"`
  );

  // Replace Twitter description
  html = html.replace(
    /<meta name="twitter:description" content=".*?"/,
    `<meta name="twitter:description" content="${meta.desc}"`
  );

  // Replace canonical URL
  html = html.replace(
    /<link rel="canonical" href=".*?"/,
    `<link rel="canonical" href="${SITE}${meta.path}"`
  );

  // Write the file
  if (key === '') {
    // Root page — overwrite index.html
    fs.writeFileSync(path.join(distDir, 'index.html'), html, 'utf-8');
    console.log(`✅ / → ${meta.title}`);
  } else {
    const dir = path.join(distDir, key);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf-8');
    console.log(`✅ /${key} → ${meta.title}`);
  }
}

console.log(`\n🎉 ${Object.keys(pages).length} páginas pre-renderizadas en dist/`);
