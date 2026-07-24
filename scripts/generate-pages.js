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
  'guias': {
    title: 'Guías de Trámites Bolivia | SEGIP, SOAT, Licencias, Pasaportes y más',
    desc: 'Guías actualizadas para realizar trámites en Bolivia: cédula de identidad SEGIP, SOAT, licencia de conducir, pasaporte, NIT, RUAT, certificados y visas. Paso a paso, costos y requisitos oficiales.',
    path: '/guias'
  },
  'galeria': {
    title: 'Galería de Coberturas | Freddy Ticona',
    desc: 'Galería de fotos de coberturas periodísticas, documentales y producciones televisivas de Freddy Ticona en toda Bolivia.',
    path: '/galeria'
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
  { slug: 'messi-bombon-asesino-himno-argentino', title: '¡Messi quedó en shock! Pusieron "Bombón Asesino" en vez del himno argentino', desc: 'Un insólito error técnico reemplazó el himno argentino por la popular cumbia santafesina, desatando risas y memes.' },
  { slug: 'morsa-abdominales-viral', title: 'Morsa sorprende al hacer abdominales como toda una atleta', desc: 'Una morsa se volvió viral realizando abdominales con una técnica "mejor que la de varios humanos".' },
  { slug: 'chucky-micro-el-torno', title: '¡Chucky rumbo a El Torno! El famoso muñeco sorprendió a pasajeros', desc: 'Un pasajero viajaba en micro con un muñeco de Chucky, moviéndole los brazos como si fuera un pasajero más.' },
  { slug: 'abuelita-invento-casero-bicicleta', title: 'Abuelita conquista las redes con ingenioso invento casero', desc: 'Un invento que combina bicicleta y caminadora creado por un "genio inventor" para su esposa se volvió viral.' },
  { slug: 'gatito-maullidos-michael-jackson', title: 'Gatito conquista las redes con maullidos al estilo de Michael Jackson', desc: 'Un pequeño felino emite maullidos comparados con los sonidos del Rey del Pop, convirtiéndose en sensación viral.' },
  { slug: 'nvidia-gb300-moe-world-record', title: 'NVIDIA establece récord mundial en pre-entrenamiento MoE con GB300 NVL72', desc: 'NVIDIA logra 1,648 TFLOPs por GPU en pre-entrenamiento de DeepSeek-V3 671B con el sistema rack-scale GB300 NVL72.' },
  { slug: 'nvidia-rubin-gpu-architecture', title: 'Arquitectura NVIDIA Rubin GPU: impulsando la era de la IA agéntica', desc: 'La GPU NVIDIA Rubin, con 336 mil millones de transistores y memoria HBM4, ofrece hasta 10x más rendimiento agéntico.' },
  { slug: 'nvidia-vera-cpu-olympus', title: 'NVIDIA Vera CPU: núcleos Olympus para máximo rendimiento en IA agéntica', desc: 'La CPU NVIDIA Vera, con núcleos Olympus diseñados desde cero, ofrece hasta 1.8x más rendimiento que CPUs x86.' },
  { slug: 'nvidia-nvlink-scale-up-network', title: 'NVIDIA NVLink: la red de escalado vertical para fábricas de IA', desc: 'NVLink 6 proporciona 3.6 TB/s por GPU y 260 TB/s de ancho de banda a nivel de rack.' },
  { slug: 'nvidia-deepstream-9-1-tracking', title: 'DeepStream 9.1: seguimiento 3D multicámara con skills de IA agéntica', desc: 'DeepStream 9.1 introduce AutoMagicCalib y seguimiento 3D multivista para rastrear objetos consistentemente entre cámaras.' },
  { slug: 'nvidia-ising-decoding-quantum', title: 'NVIDIA Ising Decoding reduce 300x la tasa de error lógico en códigos de color cuánticos', desc: 'El decoder Ising ColorCode 1 Fast logra 347.7x mejor tasa de error lógico y 7.3x más velocidad.' },
  { slug: 'nvidia-omniverse-rtx-sensor', title: 'Integra simulación de sensores RTX de Omniverse en tus aplicaciones existentes', desc: 'La librería ovrtx de NVIDIA permite agregar simulación de sensores RTX a aplicaciones existentes usando OpenUSD.' },
  { slug: 'comision-europea-multa-google-890-millones', title: 'Bruselas multa a Google con 890 millones de euros por incumplir la Ley de Mercados Digitales', desc: 'La Comisión Europea impone a Google una multa histórica de 890 millones por incumplir la DSA.' },
  { slug: 'via-lactea-proyectiles-gas-32-millones-kmh', title: 'Una extraña estructura en la Vía Láctea dispara proyectiles de gas a 32 millones de km/h', desc: 'La NASA estudia V445 Puppis, la única nova de helio confirmada, que expulsa balas de gas a velocidad extrema.' },
  { slug: 'agencias-representantes-influencers-250-millones', title: 'Ellos mueven los hilos de los influencers (y manejan un mercado de 250 millones de euros)', desc: 'Entrevistamos a las agencias que mueven a El Rubius, Xuso Jones y Cristinini en un mercado de 245 millones de euros.' },
  { slug: 'rapamicina-autismo-nueva-via-tratamiento', title: 'Un fármaco contra el envejecimiento abre una nueva vía para tratar el autismo', desc: 'Una dosis de rapamicina revirtió en dos horas alteraciones asociadas al TEA en ratones según estudio de UCLA.' },
  { slug: 'c212-aviocar-transporte-militar-espanol', title: 'Lecciones del C212 Aviocar: el exitoso "600" español del transporte militar', desc: 'El CASA C212 Aviocar es uno de los mayores éxitos de la industria aeronáutica española con 480 unidades vendidas.' },
  { slug: 'japon-rompe-leyes-fisica-calor-programable', title: 'Japón rompe las reglas de la física: crea calor programable', desc: 'Japón sortea la ley de Kirchhoff y crea calor programable con precisión milimétrica usando metamateriales.' },
  { slug: 'tormentas-solares-subestimadas-estudio-nature', title: 'Estamos subestimando el poder destructivo de las tormentas solares', desc: 'Un estudio de Nature revela que el poder destructivo de las tormentas solares podría ser el doble de lo previsto.' },
  { slug: 'amd-advancing-ai-2026-helios-epyc-instinct', title: 'AMD presenta Helios, EPYC Venice e Instinct MI400 en su evento Advancing AI 2026', desc: 'AMD lanzó su cartera de próxima generación para IA agéntica, incluyendo Helios, EPYC 9006 e Instinct MI400.' },
  { slug: 'amd-rackspace-30mw-ia-empresarial', title: 'AMD y Rackspace firman acuerdo para desplegar 30 MW de computación IA para empresas reguladas', desc: 'AMD y Rackspace desplegarán 30 MW de GPUs Instinct y CPUs EPYC para infraestructura IA gobernada.' },
  { slug: 'amd-computacion-cuantica-hibrida', title: 'AMD impulsa el futuro híbrido de la computación cuántica con CPUs, GPUs y FPGAs', desc: 'AMD detalla su estrategia cuántica: arquitecturas híbridas que aceleran el rendimiento general.' },
  { slug: 'amd-gartner-lider-cpus-ia-empresarial', title: 'Gartner nombra a AMD como la empresa a vencer en CPUs para servidores de IA empresarial', desc: 'Gartner posiciona a AMD como líder en CPUs para servidores de IA empresarial.' },
  { slug: 'amd-epyc-venice-tsmc-2nm', title: 'AMD inicia producción del EPYC Venice en tecnología de 2 nanómetros de TSMC', desc: 'El EPYC Venice con Zen 6 es el primer producto HPC en producción en 2nm de TSMC.' },
  { slug: 'amd-instinct-mi400-gpus-ia', title: 'AMD lanza las GPUs Instinct MI400 con rendimiento 34x superior para IA generativa', desc: 'AMD presentó la familia Instinct MI400 para entrenamiento de modelos frontera e inferencia.' },
  { slug: 'amd-kria-ryzen-ai-embedded-robotica', title: 'AMD lanza plataforma robótica abierta Kria AI con procesadores Ryzen AI Embedded', desc: 'AMD presentó los Ryzen AI Embedded X100 y la plataforma Kria AI para robótica autónoma.' },
  { slug: 'mlb-trade-deadline-2026', title: 'MLB Trade Deadline 2026: los movimientos más impactantes antes del cierre', desc: 'La fecha límite de cambios de la MLB 2026 dejó intercambios sorprendentes.' },
  { slug: 'nfl-training-camps-2026', title: 'NFL Training Camps 2026: las historias que dominan la pretemporada', desc: 'Los campos de entrenamiento de la NFL 2026 están en pleno apogeo.' },
  { slug: 'nba-offseason-grades-2026', title: 'NBA Offseason Grades 2026: evaluamos cada movimiento de la agencia libre', desc: 'La agencia libre de la NBA 2026 movió miles de millones en contratos.' },
  { slug: 'fifa-world-cup-2026-changes', title: 'Mundial 2026: los cambios de formato que transformarán el fútbol global', desc: 'La FIFA confirma cambios radicales para el Mundial 2026 con formato expandido a 48 equipos.' },
  { slug: 'spain-dominance-football-2026', title: 'España domina el fútbol mundial: el legado de una generación dorada', desc: 'España continúa su reinado en el fútbol internacional con títulos consecutivos.' },
  { slug: 'mlb-labor-battle-2026', title: 'MLB 2026: la batalla laboral que amenaza con paralizar el béisbol', desc: 'Las negociaciones entre la MLB y el sindicato de jugadores entran en terreno peligroso.' },
  { slug: 'barcelona-adeyemi-fichaje-2026', title: 'Barcelona ficha a Karim Adeyemi: el delantero que promete goles en el Camp Nou', desc: 'El FC Barcelona cierra el fichaje del delantero alemán Karim Adeyemi.' },
  { slug: 'inter-miami-autogol-hilarante', title: 'Inter Miami protagoniza el autogol más insólito de la temporada en la MLS', desc: 'Un error garrafal en defensa del Inter Miami terminó en autogol viral.' },
  { slug: 'wnba-midseason-2026-caitlin-clark', title: 'WNBA 2026: revisión de mitad de temporada con Caitlin Clark como protagonista', desc: 'Caitlin Clark rompe récords en la temporada más exitosa de la WNBA.' },
  { slug: 'lebron-james-free-agency-2026', title: 'LeBron James: el futuro de la estrella que mantiene en vilo a la NBA', desc: 'LeBron James enfrenta la decisión más importante de su carrera en la agencia libre.' },
  { slug: 'ops-voluntarias-onu-gestion-informacion-salud', title: 'Voluntarias de la ONU y OPS fortalecen la gestión de información de salud en Bolivia', desc: 'La OPS y el Programa de Voluntarios de Naciones Unidas desplegaron un equipo profesional para mitigar el impacto de la crisis sanitaria por bloqueos y conflictos sociales en Bolivia.' },
  { slug: 'paro-72-horas-suspende-consultas-hospitales-santa-cruz', title: 'Paro de 72 horas suspende consultas externas en hospitales cruceños', desc: 'Los trabajadores de salud de Santa Cruz iniciaron un paro de 72 horas que mantiene suspendida la atención en consulta externa de los hospitales públicos del departamento.' },
  { slug: 'plan-nacional-cancer-fondo-financiamiento-sostenible', title: 'Plan nacional propone crear un fondo para fortalecer la lucha contra el cáncer', desc: 'El Plan Nacional de Respuesta contra el Cáncer 2026-2030 busca asegurar un financiamiento sostenible para diversificar los recursos y garantizar tratamientos oportunos.' },
  { slug: 'automedicacion-resistencia-antibioticos-bolivia', title: 'Especialistas advierten que la automedicación acelera la resistencia a los antibióticos en Bolivia', desc: 'Muchos bolivianos prefieren seguir recomendaciones de familiares antes que acudir al médico, agravando el problema de la resistencia bacteriana en el país.' },
  { slug: 'salud-masculina-relegada-bolivia-prevencion', title: 'Salud masculina sigue relegada en Bolivia por falta de prevención y programas específicos', desc: 'Especialistas advierten que los hombres bolivianos enfrentan barreras culturales y estructurales para acceder a servicios de salud mental y física.' },
  { slug: 'atencion-materno-neonatal-equipamiento-santa-cruz', title: 'Ministerio de Salud fortalece atención materno-neonatal con equipamiento en tres municipios cruceños', desc: 'El Ministerio de Salud entregó equipamiento médico especializado para reducir la mortalidad materna y perinatal en Santa Cruz, con una inversión de Bs 750.000.' },
  { slug: 'recomendaciones-salud-incendios-forestales', title: 'Ministerio de Salud emite recomendaciones ante incendios forestales y despliega brigadas', desc: 'Ante los incendios forestales activos en Tarija y otros departamentos, el Ministerio de Salud desplegó brigadas de atención y emitió recomendaciones para la población.' },
  { slug: 'cancer-jovenes-habitos-vida-contaminacion', title: 'Especialistas atribuyen el aumento del cáncer en jóvenes a hábitos de vida y contaminación', desc: 'Los casos de cáncer en menores de 40 años han aumentado significativamente en Bolivia, según alertan especialistas del Instituto Oncológico Nacional.' },
  { slug: 'ministerio-salud-fortalece-sistema-cochabamba', title: 'Ministra de Salud verifica atención sanitaria y consolida alianzas en Cochabamba', desc: 'La ministra Marcela Flores cumple agenda en Cochabamba para verificar la calidad de atención y fortalecer el sistema sanitario en el marco del plan nacional de salud.' },
  { slug: 'plan-nacional-enfermedades-no-transmisibles-atencion-primaria', title: 'Plan Nacional prioriza la atención primaria para enfrentar diabetes, cáncer y enfermedades cardiovasculares', desc: 'Las enfermedades no transmisibles representan el 73% de las muertes en Bolivia. El nuevo Plan de Salud 2026-2030 pone énfasis en la prevención y el primer nivel de atención.' },
  { slug: 'linea-roja-hijo-linfangitis-peligro', title: 'Si ves esta línea roja en tu hijo, llévalo al médico el mismo día', desc: 'Una línea roja que avanza desde una herida hacia el tronco del cuerpo puede ser linfangitis, una infección que requiere antibiótico urgente. Cada hora cuenta.' },
  { slug: 'curso-verano-seguridad-ninos-padres', title: 'Tragedia en curso de verano: las 7 reglas que todo padre debe conocer antes de inscribir a sus hijos', desc: 'Una niña falleció durante un curso de verano en México. Expertos en seguridad infantil comparten 7 puntos clave que los padres deben verificar antes de inscribir a sus hijos.' },
  { slug: 'pecado-tomar-alcohol-biblia-respuesta', title: '¿Es pecado tomar alcohol? Esto es lo que realmente dice la Biblia', desc: 'Un análisis de los pasajes bíblicos sobre el alcohol revela que la Escritura no condena la copa, sino el exceso. La diferencia es clave.' },
  { slug: 'charro-gonzalez-mundial-embajador-mexico', title: 'El mexicano que conquistó el Mundial vestido de charro sin patear un balón', desc: 'Llegó al Mundial 2026 vestido de charro con su guitarra y se convirtió en el embajador más querido de México.' },
  { slug: 'afganistan-mujeres-golpes-legal-taliban', title: 'Afganistán: golpear a mujeres ahora es legal siempre que "no se rompan huesos"', desc: 'El régimen talibán aprobó un código penal que permite a los maridos castigar físicamente a sus esposas.' },
  { slug: 'cuatro-preguntas-hijo-manejar-seguridad', title: 'Antes de que tu hijo maneje solo, hazle estas 4 preguntas que pueden salvarle la vida', desc: 'Saber manejar no es suficiente. Cuatro preguntas clave que todo padre debe hacer a su hijo antes de darle las llaves del auto.' },
  { slug: 'nino-ciego-mundial-padre-manos', title: 'Un niño ciego "vio" el Mundial a través de las manos de su padre', desc: 'Alireza Babajani, de 9 años, nació ciego. Su padre le narró cada jugada del Mundial 2026 sobre la palma de sus manos.' },
  { slug: 'colombia-protege-animales-petroleo-renuncia', title: 'Colombia prefiere proteger la vida de millones de animales antes que ganar más dinero con petróleo', desc: 'Colombia decidió proteger humedales y vida silvestre en lugar de expandir explotación petrolera.' },
  { slug: 'estudiantes-reparan-autos-madres-solteras', title: 'Estudiantes reparan autos usados y los regalan a madres solteras: la historia que inspira a Latinoamérica', desc: 'Un grupo de estudiantes de mecánica comenzó un proyecto: reparar autos donados para madres solteras.' },
  { slug: 'mujer-arregla-sale-sin-pareja-explicacion', title: '¿Por qué tu mujer se arregla guapísima cuando sale sin ti? La ciencia responde', desc: 'La psicología evolutiva revela que las mujeres se arreglan para sí mismas, no para buscar atención masculina.' },
  { slug: 'guia-cedula-identidad-segip-bolivia-2026', title: 'Cómo sacar la Cédula de Identidad en Bolivia 2026 — Requisitos, costos y pasos en SEGIP', desc: 'Guía completa y actualizada para obtener o renovar tu cédula de identidad boliviana en 2026: requisitos, costos oficiales, paso a paso del trámite, horarios, oficinas SEGIP y cómo activar la cédula digital.' },
  { slug: 'guia-soat-bolivia-2026', title: 'SOAT 2026 en Bolivia — Precios, cómo comprarlo, requisitos y multas', desc: 'Guía completa del SOAT en Bolivia para 2026. Precios actualizados por tipo de vehículo, dónde comprarlo, documentos necesarios, multas por no tenerlo y cómo verificar tu póliza en línea.' },
  { slug: 'guia-licencia-conducir-bolivia-2026', title: 'Cómo sacar la Licencia de Conducir en Bolivia 2026 — Requisitos, costos y categorías', desc: 'Guía completa para obtener o renovar tu licencia de conducir en Bolivia. Categorías, requisitos, costos por categoría, paso a paso de los exámenes y el nuevo sistema SEGIP.' },
  { slug: 'guia-pasaporte-boliviano-2026', title: 'Cómo sacar el Pasaporte Boliviano 2026 — Requisitos, costos y tiempos de entrega', desc: 'Guía completa para obtener o renovar tu pasaporte boliviano. Tipos, requisitos, costos oficiales, paso a paso en SEGIP, tiempos de entrega y consulta de estado.' },
  { slug: 'guia-nit-sin-bolivia-2026', title: 'Cómo sacar el NIT en Bolivia 2026 — Requisitos, costos y pasos en Impuestos Nacionales', desc: 'Guía completa para obtener tu NIT en Bolivia. Requisitos para personas naturales y jurídicas, costo gratuito, paso a paso en el SIN y cómo inscribirte en el régimen simplificado.' },
  { slug: 'guia-ruat-transferencia-vehicular-bolivia-2026', title: 'Cómo hacer la Transferencia Vehicular y sacar el RUAT en Bolivia 2026', desc: 'Guía completa del RUAT en Bolivia. Cómo transferir un vehículo, requisitos para compra-venta, costos actualizados, paso a paso en SEGIP y cómo consultar la deuda vehicular.' },
  { slug: 'guia-certificado-nacimiento-online-bolivia-2026', title: 'Cómo sacar el Certificado de Nacimiento en línea Bolivia 2026 — SEGIP Digital', desc: 'Guía completa para obtener tu certificado de nacimiento en línea desde el SEGIP. Costo, requisitos, paso a paso para descargar el PDF y qué hacer si tu registro no aparece.' },
  { slug: 'guia-antecedentes-policiales-reap-bolivia-2026', title: 'Cómo sacar el Certificado de Antecedentes Policiales (REAP) en Bolivia 2026', desc: 'Guía completa del REAP en Bolivia. Requisitos, costo, paso a paso presencial, vigencia del certificado y para qué trámites se requiere.' },
  { slug: 'guia-antecedentes-penales-bolivia-2026', title: 'Cómo sacar el Certificado de Antecedentes Penales en Bolivia 2026', desc: 'Guía completa de Antecedentes Penales en Bolivia. Emitido por el Tribunal de Justicia, requisitos, costo, paso a paso, vigencia y diferencias con el REAP.' },
  { slug: 'guia-visa-bolivia-extranjeros-2026', title: 'Visa para Bolivia 2026 — Requisitos, tipos y cómo tramitarla para extranjeros', desc: 'Guía completa de visas para extranjeros en Bolivia. Tipos de visa, requisitos por país, costos, paso a paso consular, prórroga de estadía y regularización migratoria.' },
];

// Extraer imageUrl de cada artículo desde translations.ts
const translationSrc = fs.readFileSync(path.join(__dirname, '..', 'src', 'translations.ts'), 'utf-8');
const blogMatch = translationSrc.match(/export const blogPosts: BlogPost\[\] = \[([\s\S]*?)\];/);
const imageMap = {};
if (blogMatch) {
  let currentSlug = '';
  for (const line of blogMatch[1].split('\n')) {
    const slugM = line.match(/^\s+slug:\s*'([^']+)'/);
    if (slugM) currentSlug = slugM[1];
    const imgM = line.match(/^\s+imageUrl:\s*'([^']+)'/);
    if (imgM && currentSlug) imageMap[currentSlug] = imgM[1];
  }
}

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
  html = html.replace(/<meta property="og:image" content=".*?"/, `<meta property="og:image" content="${imageMap[article.slug] || 'https://freddydev.net/og-image.jpg'}"`);
  html = html.replace(/<meta name="twitter:image" content=".*?"/, `<meta name="twitter:image" content="${imageMap[article.slug] || 'https://freddydev.net/og-image.jpg'}"`);
  fs.writeFileSync(path.join(blogDir, 'index.html'), html, 'utf-8');
  console.log(`✅ /blog/${article.slug}`);

  // News article (same content, different URL path)
  const newsDir = path.join(distDir, 'noticias', article.slug);
  fs.mkdirSync(newsDir, { recursive: true });
  html = html.replace(/<link rel="canonical" href=".*?"/, `<link rel="canonical" href="${SITE}/noticias/${article.slug}"`);
  html = html.replace(/<meta property="og:url" content=".*?"/, `<meta property="og:url" content="${SITE}/noticias/${article.slug}"`);
  fs.writeFileSync(path.join(newsDir, 'index.html'), html, 'utf-8');
  console.log(`✅ /noticias/${article.slug}`);

  // Guía article (only for slugs starting with "guia-")
  if (article.slug.startsWith('guia-')) {
    const guiaDir = path.join(distDir, 'guias', article.slug);
    fs.mkdirSync(guiaDir, { recursive: true });
    html = html.replace(/<link rel="canonical" href=".*?"/, `<link rel="canonical" href="${SITE}/guias/${article.slug}"`);
    html = html.replace(/<meta property="og:url" content=".*?"/, `<meta property="og:url" content="${SITE}/guias/${article.slug}"`);
    fs.writeFileSync(path.join(guiaDir, 'index.html'), html, 'utf-8');
    console.log(`✅ /guias/${article.slug}`);
  }
}

const guiaCount = articles.filter(a => a.slug.startsWith('guia-')).length;
const total = Object.keys(pages).length + articles.length * 2 + guiaCount;
console.log(`\n🎉 ${total} páginas pre-renderizadas en dist/`);
