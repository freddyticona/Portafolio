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

// Artículos del blog y noticias (mismos que en translations.ts)
const articles = [
  { slug: 'detras-de-camaras-la-estrella', title: 'Detrás de cámaras de "La Estrella": Cómo grabamos bajo cero en el Altiplano', desc: 'Reflexiones y trucos técnicos sobre cómo proteger el equipamiento cinematográfico del frío extremo en el Altiplano boliviano.' },
  { slug: 'evolucion-televisiva-bolivia-analogo-digital', title: '15 Años en la TV Boliviana: Mi viaje del formato análogo al flujo digital e IP', desc: 'Una mirada reflexiva sobre la transformación de las salas de prensa en La Paz, de Betacam a transmisión IP 4G/5G.' },
  { slug: 'premio-eduardo-abaroa-2026', title: 'Premio Eduardo Abaroa 2026: entregaron más de Bs 1,3 millones a 79 ganadores', desc: 'El Ministerio de Culturas premió a 79 ganadores de la versión 2026 del galardón más importante de las artes y la cultura boliviana.' },
  { slug: 'larga-noche-museos-2026', title: 'XX Larga Noche de Museos: miles de personas colmaron espacios culturales en La Paz y El Alto', desc: 'Más de 100 espacios culturales abrieron sus puertas de forma gratuita en la vigésima edición de este evento emblemático.' },
  { slug: 'festival-cine-santa-cruz-2026', title: 'Festival de Cine de Santa Cruz 2026: lo mejor del audiovisual boliviano en cartelera', desc: 'La décima edición del FENAVID trajo 48 producciones nacionales y una delegación internacional récord.' },
  { slug: 'bolivia-puesto-91-rsf', title: 'RSF: Bolivia se ubica en el puesto 91 de alto riesgo para periodistas en el mundo', desc: 'El informe 2026 de Reporteros Sin Fronteras ubica a Bolivia en la categoría de "alto riesgo" para el ejercicio del periodismo.' },
  { slug: 'cinemateca-217-anos-la-paz', title: 'Cinemateca Boliviana celebra 217 años de La Paz con ciclo de cine nacional gratuito', desc: 'Desde clásicos restaurados hasta estrenos contemporáneos, la Cinemateca programó una semana de funciones gratuitas.' },
  { slug: 'fallece-tito-de-la-vina', title: 'Fallece Tito de la Viña, leyenda del periodismo deportivo boliviano, a los 87 años', desc: 'El reconocido periodista deportivo, con más de seis décadas de trayectoria en radio y televisión, falleció dejando un legado imborrable.' },
  { slug: 'nolan-odisea-reparto', title: 'Christopher Nolan lleva "La Odisea" al cine: el reparto incluye a Matt Damon y Tom Holland', desc: 'El aclamado director británico confirmó el reparto de su próxima epopeya basada en el clásico de Homero.' },
  { slug: 'reflexion-comparativa-cultura-audiovisual-bolivia-mundo', title: 'Bolivia en el espejo del mundo: reflexión comparativa sobre cultura audiovisual y periodismo', desc: 'Un análisis que contrasta las noticias bolivianas con sus equivalentes internacionales en acceso cultural, libertad de prensa y preservación audiovisual.' },
  { slug: 'cinemateca-50-anos-todo-lo-que-era-posible', title: 'Cinemateca Boliviana: 50 Años Preservando la Memoria Audiovisual', desc: 'El expresidente y fundador de la Cinemateca Boliviana escribe un emotivo relato sobre el nacimiento de la institución que ha preservado la memoria audiovisual de Bolivia durante medio siglo.' },
  { slug: 'pianista-daniel-alvarez-gana-premio-sur-musica-nueva', title: 'Pianista Daniel Álvarez gana Premio Sur de Música Nueva Latinoamericana', desc: 'El compositor orureño Daniel Álvarez Veizaga conquistó el máximo galardón en la primera edición del certamen internacional con su sonata para piano "Periférica".' },
  { slug: 'nova-vuelve-sinfonia-de-historias-inolvidables', title: 'NOVA Filarmónica vuelve con la "Sinfonía de historias inolvidables"', desc: 'La NOVA Filarmónica presenta el segundo programa de su temporada 2026 con un concierto que fusiona las bandas sonoras más emblemáticas del cine con obras maestras del repertorio sinfónico.' },
  { slug: 'bolivia-lab-18-edicion-industria-cine', title: 'Bolivia Lab 2026: Dos filmes son la previa del encuentro de la industria del cine iberoamericano', desc: 'La décimo octava edición de Bolivia Lab se desarrollará en La Paz, Cochabamba, Santa Cruz y Sucre con actividades de formación, laboratorios y exhibiciones para profesionales del audiovisual.' },
  { slug: 'cortometraje-yatichana-galardones-internacionales', title: 'Cortometraje boliviano "Yatichana" conquista dos galardones internacionales', desc: 'El documental del cineasta cochabambino Mauricio Panozo alcanzó el primer lugar en My Hero International Film Festival y fue reconocido en los Telly Awards por su impacto social.' },
  { slug: 'detras-epica-aventura-nolan-la-odisea', title: 'Detrás de la épica aventura de Christopher Nolan para llevar "La Odisea" al cine', desc: 'Nolan viajó a seis países, usó barcos reales en mares reales y rodó íntegramente en película IMAX para su adaptación del poema homérico.' },
  { slug: 'incentivo-produccion-audiovisual-cultural-2026', title: 'Abren convocatoria para incentivar la producción audiovisual y cultural en Bolivia', desc: 'El Viceministerio de Culturas lanzó seis líneas de incentivo económico para trabajadores de las culturas, incluyendo una específica para creación y producción audiovisual.' },
  { slug: 'festival-cine-salar-uyuni-2026', title: 'Festival de Cine de Uyuni: seis filmes y concurso de cortos en pleno salar', desc: 'El Salar de Uyuni será sede del primer Salar International Film Festival con seis filmes, concurso de cortometrajes y talleres internacionales.' },
  { slug: 'red-uno-xona-streaming', title: 'Red Uno lanza Xona Streaming: nuevo canal digital con estudio propio', desc: 'Red Uno de Bolivia lanzó Xona Streaming con programación original, estudio independiente y control central propio para audiencia joven.' },
  { slug: 'documental-travesia-tierra-cinemateca', title: '"A través de la tierra": documental sobre migración boliviana se estrena en la Cinemateca', desc: 'Coproducción Argentina-Bolivia filmada durante 6 años sobre dos mujeres bolivianas migrantes, se estrenó en la Cinemateca Boliviana.' },
  { slug: 'documental-mi-cuerpo-mi-territorio-youtube', title: '"Mi cuerpo, mi territorio": documental premiado se libera gratis en YouTube', desc: 'El cortometraje ganador del FENAVID 2025 sobre la resistencia de mujeres chiquitanas frente a los incendios ya está disponible gratuitamente.' },
  { slug: 'serie-boliviana-inteligencia-artificial', title: 'Estrenan "En el nombre de Pío": primera serie boliviana creada íntegramente con IA', desc: 'El publicista Fernando Revollo lanzó la primera serie boliviana desarrollada completamente con Inteligencia Artificial generativa.' },
];

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

// Generate individual article pages
for (const article of articles) {
  // Blog article
  const blogDir = path.join(distDir, 'blog', article.slug);
  fs.mkdirSync(blogDir, { recursive: true });
  let html = indexHtml;
  html = html.replace(/<title>.*?<\/title>/, `<title>${article.title} | Freddy Ticona</title>`);
  html = html.replace(/<meta name="description" content=".*?"/, `<meta name="description" content="${article.desc}"`);
  html = html.replace(/<meta property="og:title" content=".*?"/, `<meta property="og:title" content="${article.title}"`);
  html = html.replace(/<meta property="og:description" content=".*?"/, `<meta property="og:description" content="${article.desc}"`);
  html = html.replace(/<meta property="og:url" content=".*?"/, `<meta property="og:url" content="${SITE}/blog/${article.slug}"`);
  html = html.replace(/<meta name="twitter:title" content=".*?"/, `<meta name="twitter:title" content="${article.title}"`);
  html = html.replace(/<meta name="twitter:description" content=".*?"/, `<meta name="twitter:description" content="${article.desc}"`);
  html = html.replace(/<link rel="canonical" href=".*?"/, `<link rel="canonical" href="${SITE}/blog/${article.slug}"`);
  fs.writeFileSync(path.join(blogDir, 'index.html'), html, 'utf-8');
  console.log(`✅ /blog/${article.slug}`);

  // News article (same content, different URL path)
  const newsDir = path.join(distDir, 'noticias', article.slug);
  fs.mkdirSync(newsDir, { recursive: true });
  html = html.replace(/<link rel="canonical" href=".*?"/, `<link rel="canonical" href="${SITE}/noticias/${article.slug}"`);
  html = html.replace(/<meta property="og:url" content=".*?"/, `<meta property="og:url" content="${SITE}/noticias/${article.slug}"`);
  fs.writeFileSync(path.join(newsDir, 'index.html'), html, 'utf-8');
  console.log(`✅ /noticias/${article.slug}`);
}

const total = Object.keys(pages).length + articles.length * 2;
console.log(`\n🎉 ${total} páginas pre-renderizadas en dist/`);
