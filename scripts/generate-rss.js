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
  },
  {
    id: '42',
    slug: 'amd-advancing-ai-2026-helios-epyc-instinct',
    title: 'AMD presenta Helios, EPYC Venice e Instinct MI400 en su evento Advancing AI 2026',
    date: '2026-07-23',
    excerpt: 'AMD lanzó su cartera de próxima generación para IA agéntica, incluyendo Helios, EPYC 9006 e Instinct MI400. OpenAI y Anthropic ya adoptan la plataforma.'
  },
  {
    id: '43',
    slug: 'amd-rackspace-30mw-ia-empresarial',
    title: 'AMD y Rackspace firman acuerdo para desplegar 30 MW de computación IA para empresas reguladas',
    date: '2026-06-16',
    excerpt: 'AMD y Rackspace desplegarán 30 MW de GPUs Instinct y CPUs EPYC para crear infraestructura IA gobernada para industrias reguladas.'
  },
  {
    id: '44',
    slug: 'amd-computacion-cuantica-hibrida',
    title: 'AMD impulsa el futuro híbrido de la computación cuántica con CPUs, GPUs y FPGAs',
    date: '2026-06-19',
    excerpt: 'AMD detalla su estrategia cuántica: no reemplazará a la computación clásica sino que la acelerará mediante arquitecturas híbridas.'
  },
  {
    id: '45',
    slug: 'amd-gartner-lider-cpus-ia-empresarial',
    title: 'Gartner nombra a AMD como la empresa a vencer en CPUs para servidores de IA empresarial',
    date: '2026-07-15',
    excerpt: 'Gartner posiciona a AMD como el líder actual en CPUs para servidores de IA empresarial, destacando el rendimiento de EPYC.'
  },
  {
    id: '46',
    slug: 'amd-epyc-venice-tsmc-2nm',
    title: 'AMD inicia producción del EPYC Venice en tecnología de 2 nanómetros de TSMC',
    date: '2026-05-21',
    excerpt: 'El EPYC Venice con Zen 6 es el primer producto HPC en producción en el nodo de 2nm de TSMC.'
  },
  {
    id: '47',
    slug: 'amd-instinct-mi400-gpus-ia',
    title: 'AMD lanza las GPUs Instinct MI400 con rendimiento 34x superior para IA generativa',
    date: '2026-07-23',
    excerpt: 'AMD presentó la familia Instinct MI400 con la MI455X, MI430X y MI350P para entrenamiento de modelos frontera e inferencia.'
  },
  {
    id: '48',
    slug: 'amd-kria-ryzen-ai-embedded-robotica',
    title: 'AMD lanza plataforma robótica abierta Kria AI con procesadores Ryzen AI Embedded',
    date: '2026-07-23',
    excerpt: 'AMD presentó los Ryzen AI Embedded X100 y la plataforma Kria AI para robótica autónoma combinando CPU, GPU, NPU y FPGA.'
  },
  {
    id: '49',
    slug: 'mlb-trade-deadline-2026',
    title: 'MLB Trade Deadline 2026: los movimientos más impactantes antes del cierre',
    date: '2026-07-23',
    excerpt: 'La fecha límite de cambios de la MLB 2026 dejó intercambios sorprendentes.'
  },
  {
    id: '50',
    slug: 'nfl-training-camps-2026',
    title: 'NFL Training Camps 2026: las historias que dominan la pretemporada',
    date: '2026-07-22',
    excerpt: 'Los campos de entrenamiento de la NFL 2026 están en pleno apogeo con batallas de quarterbacks.'
  },
  {
    id: '51',
    slug: 'nba-offseason-grades-2026',
    title: 'NBA Offseason Grades 2026: evaluamos cada movimiento de la agencia libre',
    date: '2026-07-21',
    excerpt: 'La agencia libre de la NBA 2026 movió miles de millones en contratos.'
  },
  {
    id: '52',
    slug: 'fifa-world-cup-2026-changes',
    title: 'Mundial 2026: los cambios de formato que transformarán el fútbol global',
    date: '2026-07-20',
    excerpt: 'La FIFA confirma cambios radicales para el Mundial 2026 con un formato expandido a 48 equipos.'
  },
  {
    id: '53',
    slug: 'spain-dominance-football-2026',
    title: 'España domina el fútbol mundial: el legado de una generación dorada',
    date: '2026-07-19',
    excerpt: 'España continúa su reinado en el fútbol internacional con títulos consecutivos.'
  },
  {
    id: '54',
    slug: 'mlb-labor-battle-2026',
    title: 'MLB 2026: la batalla laboral que amenaza con paralizar el béisbol',
    date: '2026-07-18',
    excerpt: 'Las negociaciones entre la MLB y el sindicato de jugadores entran en terreno peligroso.'
  },
  {
    id: '55',
    slug: 'barcelona-adeyemi-fichaje-2026',
    title: 'Barcelona ficha a Karim Adeyemi: el delantero que promete goles en el Camp Nou',
    date: '2026-07-17',
    excerpt: 'El FC Barcelona cierra el fichaje del delantero alemán Karim Adeyemi.'
  },
  {
    id: '56',
    slug: 'inter-miami-autogol-hilarante',
    title: 'Inter Miami protagoniza el autogol más insólito de la temporada en la MLS',
    date: '2026-07-16',
    excerpt: 'Un error garrafal en defensa del Inter Miami terminó en autogol viral.'
  },
  {
    id: '57',
    slug: 'wnba-midseason-2026-caitlin-clark',
    title: 'WNBA 2026: revisión de mitad de temporada con Caitlin Clark como protagonista',
    date: '2026-07-15',
    excerpt: 'La temporada 2026 de la WNBA llega a su ecuador con Caitlin Clark rompiendo récords.'
  },
  {
    id: '58',
    slug: 'lebron-james-free-agency-2026',
    title: 'LeBron James: el futuro de la estrella que mantiene en vilo a la NBA',
    date: '2026-07-14',
    excerpt: 'LeBron James enfrenta la decisión más importante de su carrera al entrar en la agencia libre.'
  },
  {
    id: '59',
    slug: 'ops-voluntarias-onu-gestion-informacion-salud',
    title: 'Voluntarias de la ONU y OPS fortalecen la gestión de información de salud en Bolivia',
    date: '2026-07-23',
    excerpt: 'La OPS y el Programa de Voluntarios de Naciones Unidas desplegaron un equipo profesional para mitigar el impacto de la crisis sanitaria por bloqueos y conflictos sociales en Bolivia.'
  },
  {
    id: '60',
    slug: 'paro-72-horas-suspende-consultas-hospitales-santa-cruz',
    title: 'Paro de 72 horas suspende consultas externas en hospitales cruceños',
    date: '2026-07-22',
    excerpt: 'Los trabajadores de salud de Santa Cruz iniciaron un paro de 72 horas que mantiene suspendida la atención en consulta externa de los hospitales públicos del departamento.'
  },
  {
    id: '61',
    slug: 'plan-nacional-cancer-fondo-financiamiento-sostenible',
    title: 'Plan nacional propone crear un fondo para fortalecer la lucha contra el cáncer',
    date: '2026-07-22',
    excerpt: 'El Plan Nacional de Respuesta contra el Cáncer 2026-2030 busca asegurar un financiamiento sostenible para diversificar los recursos y garantizar tratamientos oportunos.'
  },
  {
    id: '62',
    slug: 'automedicacion-resistencia-antibioticos-bolivia',
    title: 'Especialistas advierten que la automedicación acelera la resistencia a los antibióticos en Bolivia',
    date: '2026-07-21',
    excerpt: 'Muchos bolivianos prefieren seguir recomendaciones de familiares antes que acudir al médico, agravando el problema de la resistencia bacteriana en el país.'
  },
  {
    id: '63',
    slug: 'salud-masculina-relegada-bolivia-prevencion',
    title: 'Salud masculina sigue relegada en Bolivia por falta de prevención y programas específicos',
    date: '2026-07-21',
    excerpt: 'Especialistas advierten que los hombres bolivianos enfrentan barreras culturales y estructurales para acceder a servicios de salud mental y física.'
  },
  {
    id: '64',
    slug: 'atencion-materno-neonatal-equipamiento-santa-cruz',
    title: 'Ministerio de Salud fortalece atención materno-neonatal con equipamiento en tres municipios cruceños',
    date: '2026-07-21',
    excerpt: 'El Ministerio de Salud entregó equipamiento médico especializado para reducir la mortalidad materna y perinatal en Santa Cruz, con una inversión de Bs 750.000.'
  },
  {
    id: '65',
    slug: 'recomendaciones-salud-incendios-forestales',
    title: 'Ministerio de Salud emite recomendaciones ante incendios forestales y despliega brigadas',
    date: '2026-07-21',
    excerpt: 'Ante los incendios forestales activos en Tarija y otros departamentos, el Ministerio de Salud desplegó brigadas de atención y emitió recomendaciones para la población.'
  },
  {
    id: '66',
    slug: 'cancer-jovenes-habitos-vida-contaminacion',
    title: 'Especialistas atribuyen el aumento del cáncer en jóvenes a hábitos de vida y contaminación',
    date: '2026-07-20',
    excerpt: 'Los casos de cáncer en menores de 40 años han aumentado significativamente en Bolivia, según alertan especialistas del Instituto Oncológico Nacional.'
  },
  {
    id: '67',
    slug: 'ministerio-salud-fortalece-sistema-cochabamba',
    title: 'Ministra de Salud verifica atención sanitaria y consolida alianzas en Cochabamba',
    date: '2026-07-21',
    excerpt: 'La ministra Marcela Flores cumple agenda en Cochabamba para verificar la calidad de atención y fortalecer el sistema sanitario en el marco del plan nacional de salud.'
  },
  {
    id: '68',
    slug: 'plan-nacional-enfermedades-no-transmisibles-atencion-primaria',
    title: 'Plan Nacional prioriza la atención primaria para enfrentar diabetes, cáncer y enfermedades cardiovasculares',
    date: '2026-07-14',
    excerpt: 'Las enfermedades no transmisibles representan el 73% de las muertes en Bolivia. El nuevo Plan de Salud 2026-2030 pone énfasis en la prevención y el primer nivel de atención.'
  },
  {
    id: '69',
    slug: 'linea-roja-hijo-linfangitis-peligro',
    title: 'Si ves esta línea roja en tu hijo, llévalo al médico el mismo día',
    date: '2026-07-23',
    excerpt: 'Una línea roja que avanza desde una herida hacia el tronco del cuerpo puede ser linfangitis, una infección que requiere antibiótico urgente. Cada hora cuenta.'
  },
  {
    id: '70',
    slug: 'curso-verano-seguridad-ninos-padres',
    title: 'Tragedia en curso de verano: las 7 reglas que todo padre debe conocer antes de inscribir a sus hijos',
    date: '2026-07-23',
    excerpt: 'Una niña falleció durante un curso de verano en México. Expertos en seguridad infantil comparten 7 puntos clave que los padres deben verificar antes de inscribir a sus hijos.'
  },
  {
    id: '71',
    slug: 'pecado-tomar-alcohol-biblia-respuesta',
    title: '¿Es pecado tomar alcohol? Esto es lo que realmente dice la Biblia',
    date: '2026-07-23',
    excerpt: 'Un análisis de los pasajes bíblicos sobre el alcohol revela que la Escritura no condena la copa, sino el exceso. La diferencia es clave.'
  },
  {
    id: '72',
    slug: 'charro-gonzalez-mundial-embajador-mexico',
    title: 'El mexicano que conquistó el Mundial vestido de charro sin patear un balón',
    date: '2026-07-23',
    excerpt: 'Llegó al Mundial 2026 vestido de charro con su guitarra y se convirtió en el embajador más querido de México, acaparando reflectores junto a las grandes estrellas del fútbol.'
  },
  {
    id: '73',
    slug: 'afganistan-mujeres-golpes-legal-taliban',
    title: 'Afganistán: golpear a mujeres ahora es legal siempre que "no se rompan huesos"',
    date: '2026-07-21',
    excerpt: 'El régimen talibán aprobó un código penal que permite a los maridos castigar físicamente a sus esposas. Organizaciones de derechos humanos lo califican como un retroceso histórico.'
  },
  {
    id: '74',
    slug: 'cuatro-preguntas-hijo-manejar-seguridad',
    title: 'Antes de que tu hijo maneje solo, hazle estas 4 preguntas que pueden salvarle la vida',
    date: '2026-07-23',
    excerpt: 'Saber manejar no es suficiente. Cuatro preguntas clave que todo padre debe hacer a su hijo antes de darle las llaves del auto por primera vez.'
  },
  {
    id: '75',
    slug: 'nino-ciego-mundial-padre-manos',
    title: 'Un niño ciego "vio" el Mundial a través de las manos de su padre',
    date: '2026-07-21',
    excerpt: 'Alireza Babajani, de 9 años, nació ciego. Su padre le narró cada jugada del Mundial 2026 sobre la palma de sus manos con una maqueta táctil.'
  },
  {
    id: '76',
    slug: 'colombia-protege-animales-petroleo-renuncia',
    title: 'Colombia prefiere proteger la vida de millones de animales antes que ganar más dinero con petróleo',
    date: '2026-07-22',
    excerpt: 'En lugar de expandir la explotación petrolera en una zona de biodiversidad única, Colombia decidió proteger los humedales y la vida silvestre que depende de ellos.'
  },
  {
    id: '77',
    slug: 'estudiantes-reparan-autos-madres-solteras',
    title: 'Estudiantes reparan autos usados y los regalan a madres solteras: la historia que inspira a Latinoamérica',
    date: '2026-07-22',
    excerpt: 'Un grupo de estudiantes de mecánica comenzó un proyecto: tomar autos donados, repararlos y regalarlos a madres que necesitan transporte para trabajar y llevar a sus hijos a la escuela.'
  },
  {
    id: '78',
    slug: 'mujer-arregla-sale-sin-pareja-explicacion',
    title: '¿Por qué tu mujer se arregla guapísima cuando sale sin ti? La ciencia responde',
    date: '2026-07-22',
    excerpt: 'Muchos hombres interpretan que su pareja se arregla para otros cuando sale sola. La psicología evolutiva revela una explicación muy distinta.'
  },
  {
    id: '79',
    slug: 'guia-cedula-identidad-segip-bolivia-2026',
    title: 'Cómo sacar la Cédula de Identidad en Bolivia 2026 — Requisitos, costos y pasos en SEGIP',
    date: '2026-07-24',
    excerpt: 'Guía completa y actualizada para obtener o renovar tu cédula de identidad boliviana en 2026. Requisitos, costos oficiales, paso a paso del trámite presencial, horarios, oficinas SEGIP y cómo activar la cédula digital desde tu celular.'
  },
  {
    id: '80',
    slug: 'guia-soat-bolivia-2026',
    title: 'SOAT 2026 en Bolivia — Precios, cómo comprarlo, requisitos y multas',
    date: '2026-07-24',
    excerpt: 'Guía completa del Seguro Obligatorio de Accidentes de Tránsito (SOAT) en Bolivia para 2026. Precios actualizados por tipo de vehículo, dónde comprarlo, documentos necesarios, multas por no tenerlo y cómo verificar tu póliza en línea.'
  },
  {
    id: '81',
    slug: 'guia-licencia-conducir-bolivia-2026',
    title: 'Cómo sacar la Licencia de Conducir en Bolivia 2026 — Requisitos, costos y categorías',
    date: '2026-07-24',
    excerpt: 'Guía completa para obtener o renovar tu licencia de conducir en Bolivia. Categorías (A, B, C, D, E, F), requisitos actualizados, costos por categoría, paso a paso de los exámenes médicos, psicológicos, escrito y práctico, y todo sobre el nuevo sistema SEGIP.'
  },
  {
    id: '82',
    slug: 'guia-pasaporte-boliviano-2026',
    title: 'Cómo sacar el Pasaporte Boliviano 2026 — Requisitos, costos y tiempos de entrega',
    date: '2026-07-24',
    excerpt: 'Guía completa para obtener o renovar tu pasaporte boliviano. Tipos de pasaporte (ordinario, emergencia), requisitos actualizados, costos oficiales, paso a paso del trámite en SEGIP, tiempos de entrega y cómo consultar el estado de tu solicitud.'
  },
  {
    id: '83',
    slug: 'guia-nit-sin-bolivia-2026',
    title: 'Cómo sacar el NIT en Bolivia 2026 — Requisitos, costos y pasos en Impuestos Nacionales',
    date: '2026-07-24',
    excerpt: 'Guía completa para obtener tu Número de Identificación Tributaria (NIT) en Bolivia. Requisitos para personas naturales y jurídicas, costo gratuito, paso a paso del trámite en el SIN, cómo obtener tu certificado electrónico y cómo inscribirte en el régimen simplificado.'
  },
  {
    id: '84',
    slug: 'guia-ruat-transferencia-vehicular-bolivia-2026',
    title: 'Cómo hacer la Transferencia Vehicular y sacar el RUAT en Bolivia 2026',
    date: '2026-07-24',
    excerpt: 'Guía completa del Registro Único de Automotores (RUAT) en Bolivia. Cómo transferir un vehículo, requisitos para compra-venta, costos actualizados, paso a paso en SEGIP, cómo obtener el RUAT por primera vez y cómo consultar la deuda vehicular.'
  },
  {
    id: '85',
    slug: 'guia-certificado-nacimiento-online-bolivia-2026',
    title: 'Cómo sacar el Certificado de Nacimiento en línea Bolivia 2026 — SEGIP Digital',
    date: '2026-07-24',
    excerpt: 'Guía completa para obtener tu certificado de nacimiento en línea desde la página del SEGIP. Costo, requisitos, paso a paso para descargar el PDF, cómo pagar con Tigo Money o Banco Unión, y qué hacer si tu registro no aparece en el sistema.'
  },
  {
    id: '86',
    slug: 'guia-antecedentes-policiales-reap-bolivia-2026',
    title: 'Cómo sacar el Certificado de Antecedentes Policiales (REAP) en Bolivia 2026',
    date: '2026-07-24',
    excerpt: 'Guía completa para obtener el Registro de Antecedentes Policiales (REAP) en Bolivia. Requisitos, costo aproximado, paso a paso presencial y en línea, vigencia del certificado y para qué trámites se requiere.'
  },
  {
    id: '87',
    slug: 'guia-antecedentes-penales-bolivia-2026',
    title: 'Cómo sacar el Certificado de Antecedentes Penales en Bolivia 2026',
    date: '2026-07-24',
    excerpt: 'Guía completa para obtener el Certificado de Antecedentes Penales en Bolivia. Emitido por el Tribunal Departamental de Justicia, requisitos, costo, paso a paso presencial, vigencia del documento y para qué trámites se requiere.'
  },
  {
    id: '88',
    slug: 'guia-visa-bolivia-extranjeros-2026',
    title: 'Visa para Bolivia 2026 — Requisitos, tipos y cómo tramitarla para extranjeros',
    date: '2026-07-24',
    excerpt: 'Guía completa de visas para extranjeros que desean viajar o residir en Bolivia. Tipos de visa (turista, negocios, residencia), requisitos por país de origen, costos actualizados, paso a paso del trámite consular, prórroga de estadía y cómo regularizar tu situación migratoria.'
  },

  // Artículos de guerras y conflictos globales (ids 89-98)
  {
    id: '89',
    slug: 'guerra-eeuu-iran-escalada-julio-2026',
    title: 'Guerra EE.UU.-Irán: escalada de bombardeos y ataques en el estrecho de Ormuz',
    date: '2026-07-22',
    excerpt: 'Estados Unidos reanudó ataques masivos contra Irán tras romperse la tregua. El tráfico en Ormuz cayó a solo 8 buques diarios y crece el temor a una guerra regional.'
  },
  {
    id: '90',
    slug: 'analisis-estrategia-trump-iran-escalada',
    title: 'El vacío estratégico de Trump en Irán: más bombardeos sin un objetivo claro',
    date: '2026-07-20',
    excerpt: 'Análisis: la nueva escalada revela la ausencia de una estrategia definida por parte de la Casa Blanca, mientras aumentan las bajas y el costo económico.'
  },
  {
    id: '91',
    slug: 'guerra-iran-arsenal-militar-eeuu-riesgo',
    title: 'La guerra con Irán agota el arsenal militar de EE.UU. y pone en riesgo futuros conflictos',
    date: '2026-07-13',
    excerpt: 'El Pentágono ha utilizado la mitad de sus interceptores THAAD y Patriot y el 30% de sus misiles Tomahawk. Reponer tomará entre dos y cinco años.'
  },
  {
    id: '92',
    slug: 'claves-guerra-estados-unidos-iran',
    title: '¿Qué está pasando en la guerra de EE.UU. con Irán? Las claves del conflicto',
    date: '2026-03-03',
    excerpt: 'El conflicto que comenzó el 28 de febrero de 2026 ha transformado Medio Oriente. Más de 555 muertos en Irán y una crisis energética global.'
  },
  {
    id: '93',
    slug: 'rusia-ataque-masivo-misiles-ucrania-julio',
    title: 'Rusia lanza uno de los mayores ataques con misiles balísticos de la guerra en Ucrania',
    date: '2026-07-19',
    excerpt: 'Rusia disparó más de 40 misiles balísticos y 120 drones contra Ucrania. Kyiv fue el principal objetivo. Al menos un muerto y 16 heridos.'
  },
  {
    id: '94',
    slug: 'ucrania-ataca-refineria-petroleo-moscu',
    title: 'Ucrania ataca refinería de petróleo clave en la región de Moscú e interrumpe vuelos',
    date: '2026-06-18',
    excerpt: 'Ucrania lanzó un ataque con drones contra una refinería en Moscú, provocando un incendio de gran magnitud e interrumpiendo vuelos comerciales.'
  },
  {
    id: '95',
    slug: 'resumen-guerra-israel-hamas-gaza-julio',
    title: 'Guerra en Gaza: resumen del conflicto entre Israel y Hamas y las negociaciones de paz',
    date: '2026-07-22',
    excerpt: 'Más de dos años de guerra en Gaza continúan mientras las negociaciones de paz mediadas por EE.UU. permanecen estancadas.'
  },
  {
    id: '96',
    slug: 'netanyahu-control-setenta-gaza',
    title: 'Netanyahu ordena al ejército de Israel tomar el control del 70% de Gaza',
    date: '2026-05-29',
    excerpt: 'El primer ministro israelí ordenó ocupar el 70% de Gaza, ignorando los términos del alto el fuego, en medio de una crisis humanitaria que empeora.'
  },
  {
    id: '97',
    slug: 'hospitales-sudan-crisis-guerra',
    title: 'Los hospitales en Sudán luchan por atender pacientes mientras la guerra se intensifica',
    date: '2026-07-18',
    excerpt: 'El 37% de los centros de salud en Sudán están inoperativos. Brotes de cólera, sarampión y malaria azotan a 34 millones de personas.'
  },
  {
    id: '98',
    slug: 'tres-anos-guerra-sudan-crisis-desplazamiento',
    title: 'Tres años de guerra en Sudán: la mayor crisis de desplazamiento del mundo',
    date: '2026-04-15',
    excerpt: '11,6 millones de personas han sido desplazadas. 6,8 millones son desplazados internos y 4,4 millones han huido a países vecinos.'
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
