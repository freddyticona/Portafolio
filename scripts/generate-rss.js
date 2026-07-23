/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Datos estáticos del blog (mismos que en translations.ts)
const blogPosts = [
  {
    id: '1',
    slug: 'detras-de-camaras-la-estrella',
    title: 'Detrás de cámaras de "La Estrella": Cómo grabamos bajo cero en el Altiplano',
    date: '2026-05-12',
    excerpt: 'Reflexiones y trucos técnicos sobre cómo proteger el equipamiento cinematográfico del frío extremo...'
  },
  {
    id: '2',
    slug: 'evolucion-televisiva-bolivia-analogo-digital',
    title: '15 Años en la TV Boliviana: Mi viaje del formato análogo al flujo digital e IP',
    date: '2026-06-24',
    excerpt: 'Una mirada reflexiva sobre la transformación de las salas de prensa en La Paz...'
  },
  {
    id: '3',
    slug: 'premio-eduardo-abaroa-2026',
    title: 'Premio Eduardo Abaroa 2026: entregaron más de Bs 1,3 millones a 79 ganadores',
    date: '2026-07-11',
    excerpt: 'El Ministerio de Culturas premió a 79 ganadores de la versión 2026 del galardón más importante de las artes...'
  },
  {
    id: '4',
    slug: 'larga-noche-museos-2026',
    title: 'XX Larga Noche de Museos: miles de personas colmaron espacios culturales en La Paz y El Alto',
    date: '2026-07-11',
    excerpt: 'Más de 100 espacios culturales abrieron sus puertas de forma gratuita en la vigésima edición...'
  },
  {
    id: '5',
    slug: 'festival-cine-santa-cruz-2026',
    title: 'Festival de Cine de Santa Cruz 2026: lo mejor del audiovisual boliviano en cartelera',
    date: '2026-07-10',
    excerpt: 'La décima edición del FENAVID trajo 48 producciones nacionales y una delegación internacional récord.'
  },
  {
    id: '6',
    slug: 'bolivia-puesto-91-rsf',
    title: 'RSF: Bolivia se ubica en el puesto 91 de alto riesgo para periodistas en el mundo',
    date: '2026-05-18',
    excerpt: 'El informe 2026 de Reporteros Sin Fronteras ubica a Bolivia en la categoría de "alto riesgo"...'
  },
  {
    id: '7',
    slug: 'cinemateca-217-anos-la-paz',
    title: 'Cinemateca Boliviana celebra 217 años de La Paz con ciclo de cine nacional gratuito',
    date: '2026-07-15',
    excerpt: 'Desde clásicos restaurados hasta estrenos contemporáneos, la Cinemateca programó una semana de funciones gratuitas...'
  },
  {
    id: '8',
    slug: 'fallece-tito-de-la-vina',
    title: 'Fallece Tito de la Viña, leyenda del periodismo deportivo boliviano, a los 87 años',
    date: '2026-07-18',
    excerpt: 'El reconocido periodista deportivo, con más de seis décadas de trayectoria en radio y televisión...'
  },
  {
    id: '9',
    slug: 'nolan-odisea-reparto',
    title: 'Christopher Nolan lleva "La Odisea" al cine: el reparto incluye a Matt Damon y Tom Holland',
    date: '2026-07-14',
    excerpt: 'El aclamado director británico confirmó el reparto de su próxima epopeya basada en el clásico de Homero.'
  },
  {
    id: '10',
    slug: 'reflexion-comparativa-cultura-audiovisual-bolivia-mundo',
    title: 'Bolivia en el espejo del mundo: reflexión comparativa sobre cultura audiovisual y periodismo',
    date: '2026-07-21',
    excerpt: 'Un análisis que contrasta las noticias bolivianas con sus equivalentes internacionales en acceso cultural, libertad de prensa y preservación audiovisual.'
  },
  {
    id: '11',
    slug: 'cinemateca-50-anos-todo-lo-que-era-posible',
    title: 'Cinemateca Boliviana: 50 Años Preservando la Memoria Audiovisual',
    date: '2026-07-19',
    excerpt: 'El expresidente y fundador de la Cinemateca Boliviana, Carlos D. Mesa, escribe un emotivo relato sobre el nacimiento de la institución.'
  },
  {
    id: '12',
    slug: 'pianista-daniel-alvarez-gana-premio-sur-musica-nueva',
    title: 'Pianista Daniel Álvarez gana Premio Sur de Música Nueva Latinoamericana',
    date: '2026-07-17',
    excerpt: 'El compositor orureño Daniel Álvarez Veizaga conquistó el máximo galardón en la primera edición del certamen internacional.'
  },
  {
    id: '13',
    slug: 'nova-vuelve-sinfonia-de-historias-inolvidables',
    title: 'NOVA Filarmónica vuelve con la "Sinfonía de historias inolvidables"',
    date: '2026-07-19',
    excerpt: 'La NOVA Filarmónica presenta el segundo programa de su temporada 2026 fusionando bandas sonoras del cine con obras maestras sinfónicas.'
  },
  {
    id: '14',
    slug: 'bolivia-lab-18-edicion-industria-cine',
    title: 'Bolivia Lab 2026: Dos filmes son la previa del encuentro de la industria del cine iberoamericano',
    date: '2026-07-19',
    excerpt: 'La décimo octava edición de Bolivia Lab se desarrollará en La Paz, Cochabamba, Santa Cruz y Sucre con actividades para profesionales del audiovisual.'
  },
  {
    id: '15',
    slug: 'cortometraje-yatichana-galardones-internacionales',
    title: 'Cortometraje boliviano "Yatichana" conquista dos galardones internacionales',
    date: '2026-07-03',
    excerpt: 'El documental del cineasta cochabambino Mauricio Panozo alcanzó el primer lugar en My Hero International Film Festival.'
  },
  {
    id: '16',
    slug: 'detras-epica-aventura-nolan-la-odisea',
    title: 'Detrás de la épica aventura de Christopher Nolan para llevar "La Odisea" al cine',
    date: '2026-07-14',
    excerpt: 'Nolan viajó a seis países, usó barcos reales en mares reales y rodó íntegramente en película IMAX.'
  },
  {
    id: '17',
    slug: 'incentivo-produccion-audiovisual-cultural-2026',
    title: 'Abren convocatoria para incentivar la producción audiovisual y cultural en Bolivia',
    date: '2026-06-19',
    excerpt: 'El Viceministerio de Culturas lanzó seis líneas de incentivo económico, incluyendo una específica para creación y producción audiovisual.'
  },
  {
    id: '18',
    slug: 'festival-cine-salar-uyuni-2026',
    title: 'Festival de Cine de Uyuni: seis filmes y concurso de cortos en pleno salar',
    date: '2026-07-09',
    excerpt: 'El Salar de Uyuni será sede del primer Salar International Film Festival con seis filmes, concurso de cortos con premio de $us 5.000 y talleres.'
  },
  {
    id: '19',
    slug: 'red-uno-xona-streaming',
    title: 'Red Uno lanza Xona Streaming: nuevo canal digital con estudio propio',
    date: '2026-05-11',
    excerpt: 'Red Uno de Bolivia lanzó Xona Streaming, nueva señal digital con programación original, estudio independiente y control central propio.'
  },
  {
    id: '20',
    slug: 'documental-travesia-tierra-cinemateca',
    title: '"A través de la tierra": documental sobre migración boliviana se estrena en la Cinemateca',
    date: '2026-02-26',
    excerpt: 'Coproducción Argentina-Bolivia filmada durante 6 años sobre dos mujeres bolivianas migrantes, se estrenó en la Cinemateca Boliviana.'
  },
  {
    id: '21',
    slug: 'documental-mi-cuerpo-mi-territorio-youtube',
    title: '"Mi cuerpo, mi territorio": documental premiado se libera gratis en YouTube',
    date: '2026-02-04',
    excerpt: 'Cortometraje ganador del FENAVID 2025 sobre la resistencia de mujeres chiquitanas frente a incendios forestales, ahora disponible gratuitamente.'
  },
  {
    id: '22',
    slug: 'serie-boliviana-inteligencia-artificial',
    title: 'Estrenan "En el nombre de Pío": primera serie boliviana creada íntegramente con IA',
    date: '2026-07-07',
    excerpt: 'El publicista Fernando Revollo lanzó la primera serie boliviana desarrollada completamente con Inteligencia Artificial generativa.'
  },
  {
    id: '23',
    slug: 'messi-bombon-asesino-himno-argentino',
    title: '¡Messi quedó en shock! Pusieron "Bombón Asesino" en vez del himno argentino',
    date: '2026-06-17',
    excerpt: 'Un insólito error técnico reemplazó el himno argentino por la popular cumbia santafesina, desatando risas y memes en todo el mundo.'
  },
  {
    id: '24',
    slug: 'morsa-abdominales-viral',
    title: 'Morsa sorprende al hacer abdominales como toda una atleta',
    date: '2026-06-17',
    excerpt: 'Una morsa se volvió viral realizando abdominales con una técnica "mejor que la de varios humanos".'
  },
  {
    id: '25',
    slug: 'chucky-micro-el-torno',
    title: '¡Chucky rumbo a El Torno! El famoso muñeco sorprendió a pasajeros',
    date: '2026-07-21',
    excerpt: 'Un pasajero viajaba en micro con un muñeco de Chucky moviéndole los brazos como si fuera un pasajero más.'
  },
  {
    id: '26',
    slug: 'abuelita-invento-casero-bicicleta',
    title: 'Abuelita conquista las redes con ingenioso invento casero',
    date: '2026-06-17',
    excerpt: 'Un invento que combina bicicleta y caminadora creado por un "genio inventor" para su esposa se volvió viral.'
  },
  {
    id: '27',
    slug: 'gatito-maullidos-michael-jackson',
    title: 'Gatito conquista las redes con maullidos al estilo de Michael Jackson',
    date: '2026-06-17',
    excerpt: 'Un pequeño felino emite maullidos comparados con los sonidos del Rey del Pop, convirtiéndose en sensación viral.'
  },
  {
    id: '28',
    slug: 'nvidia-gb300-moe-world-record',
    title: 'NVIDIA establece récord mundial en pre-entrenamiento MoE con GB300 NVL72',
    date: '2026-07-23',
    excerpt: 'NVIDIA logra 1,648 TFLOPs por GPU en pre-entrenamiento de DeepSeek-V3 671B con el sistema rack-scale GB300 NVL72.'
  },
  {
    id: '29',
    slug: 'nvidia-rubin-gpu-architecture',
    title: 'Arquitectura NVIDIA Rubin GPU: impulsando la era de la IA agéntica',
    date: '2026-07-23',
    excerpt: 'La GPU NVIDIA Rubin, con 336 mil millones de transistores y memoria HBM4, ofrece hasta 10x más rendimiento agéntico.'
  },
  {
    id: '30',
    slug: 'nvidia-vera-cpu-olympus',
    title: 'NVIDIA Vera CPU: núcleos Olympus para máximo rendimiento en IA agéntica',
    date: '2026-07-23',
    excerpt: 'La CPU NVIDIA Vera, con núcleos Olympus diseñados desde cero, ofrece hasta 1.8x más rendimiento que CPUs x86.'
  },
  {
    id: '31',
    slug: 'nvidia-nvlink-scale-up-network',
    title: 'NVIDIA NVLink: la red de escalado vertical para fábricas de IA',
    date: '2026-07-23',
    excerpt: 'NVLink 6 proporciona 3.6 TB/s por GPU y 260 TB/s de ancho de banda a nivel de rack.'
  },
  {
    id: '32',
    slug: 'nvidia-deepstream-9-1-tracking',
    title: 'DeepStream 9.1: seguimiento 3D multicámara con skills de IA agéntica',
    date: '2026-07-24',
    excerpt: 'DeepStream 9.1 introduce AutoMagicCalib y seguimiento 3D multivista para rastrear objetos consistentemente entre cámaras.'
  },
  {
    id: '33',
    slug: 'nvidia-ising-decoding-quantum',
    title: 'NVIDIA Ising Decoding reduce 300x la tasa de error lógico en códigos de color cuánticos',
    date: '2026-07-24',
    excerpt: 'El decoder Ising ColorCode 1 Fast logra 347.7x mejor tasa de error lógico y 7.3x más velocidad.'
  },
  {
    id: '34',
    slug: 'nvidia-omniverse-rtx-sensor',
    title: 'Integra simulación de sensores RTX de Omniverse en tus aplicaciones existentes',
    date: '2026-07-24',
    excerpt: 'La librería ovrtx de NVIDIA permite agregar simulación de sensores RTX a aplicaciones existentes usando OpenUSD.'
  },
  {
    id: '35',
    slug: 'comision-europea-multa-google-890-millones',
    title: 'Bruselas multa a Google con 890 millones de euros por incumplir la Ley de Mercados Digitales',
    date: '2026-07-23',
    excerpt: 'La Comisión Europea ha impuesto a Google una multa histórica de 890 millones de euros por incumplir la DSA.'
  },
  {
    id: '36',
    slug: 'via-lactea-proyectiles-gas-32-millones-kmh',
    title: 'Una extraña estructura en la Vía Láctea dispara proyectiles de gas a 32 millones de km/h',
    date: '2026-07-22',
    excerpt: 'La NASA estudia V445 Puppis, la única nova de helio confirmada en la Vía Láctea, que lleva 20 años expulsando misteriosas balas de gas.'
  },
  {
    id: '37',
    slug: 'agencias-representantes-influencers-250-millones',
    title: 'Ellos mueven los hilos de los influencers (y manejan un mercado de 250 millones de euros)',
    date: '2026-07-23',
    excerpt: 'El negocio de los creadores de contenido mueve 245 millones de euros en inversión publicitaria anual en España.'
  },
  {
    id: '38',
    slug: 'rapamicina-autismo-nueva-via-tratamiento',
    title: 'Un fármaco contra el envejecimiento abre una nueva vía para tratar el autismo',
    date: '2026-07-23',
    excerpt: 'Una única dosis de rapamicina revirtió alteraciones asociadas al TEA en ratones adultos en dos horas, según un estudio de UCLA.'
  },
  {
    id: '39',
    slug: 'c212-aviocar-transporte-militar-espanol',
    title: 'Lecciones del C212 Aviocar: el exitoso "600" español del transporte militar',
    date: '2026-07-23',
    excerpt: 'El CASA C212 Aviocar es uno de los mayores éxitos de la industria aeronáutica española con más de 480 unidades vendidas.'
  },
  {
    id: '40',
    slug: 'japon-rompe-leyes-fisica-calor-programable',
    title: 'Japón rompe las reglas de la física: sortea una ley de hace 160 años y consigue crear calor programable',
    date: '2026-07-23',
    excerpt: 'Investigadores japoneses han creado calor programable que desafía las leyes de la termodinámica con precisión milimétrica.'
  },
  {
    id: '41',
    slug: 'tormentas-solares-subestimadas-estudio-nature',
    title: 'Estamos subestimando el poder destructivo de las tormentas solares, dice un estudio de Nature',
    date: '2026-07-22',
    excerpt: 'Un estudio de Nature revela que hemos subestimado el poder de la actividad solar extrema por un error matemático.'
  }
];

const siteConfig = {
  title: 'Portafolio Freddy Ticona Guzmán',
  description: 'Camerógrafo y Realizador Audiovisual - Blog de reflexiones y técnicas audiovisuales',
  url: 'https://freddydev.net',
  language: 'es',
  author: {
    name: 'Freddy Ticona Guzmán',
    email: 'freddyticona62@gmail.com'
  }
};

// Generar RSS items
const rssItems = blogPosts.map(post => {
  const link = `${siteConfig.url}/blog/${post.slug}`;
  const guid = link;

  return `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${link}</link>
      <guid isPermaLink="true">${guid}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>${siteConfig.author.email} (${siteConfig.author.name})</author>
    </item>`;
}).join('\n');

// Generar RSS completo
const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${siteConfig.title}]]></title>
    <link>${siteConfig.url}/</link>
    <atom:link href="${siteConfig.url}/rss.xml" rel="self" type="application/rss+xml" />
    <description><![CDATA[${siteConfig.description}]]></description>
    <language>${siteConfig.language}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <managingEditor>${siteConfig.author.email} (${siteConfig.author.name})</managingEditor>
    <webMaster>${siteConfig.author.email} (${siteConfig.author.name})</webMaster>
${rssItems}
  </channel>
</rss>`;

// Escribir archivo RSS
const rssPath = path.join(__dirname, '../public/rss.xml');
fs.writeFileSync(rssPath, rss, 'utf-8');

console.log('✅ RSS feed generado:', rssPath);
console.log(`📡 ${blogPosts.length} artículos incluidos`);
console.log(`🔗 URL: ${siteConfig.url}/rss.xml`);
