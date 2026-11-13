/**
 * Blog editorial, 6 de noviembre de 2026 (IDs 1415-1419).
 */

const IMG = '/images/blog';

const figure = (src, alt, caption) =>
  `<figure class="report-figure"><img src="${src}" alt="${alt}" loading="lazy"><figcaption>${caption}</figcaption></figure>`;

const stats = (items) =>
  `<div class="stat-grid">${items
    .map(
      ([value, label]) =>
        `<div class="stat-card"><div class="stat-value">${value}</div><div class="stat-label">${label}</div></div>`
    )
    .join('')}</div>`;

const quote = (text, cite) =>
  `<div class="expert-quote"><p class="expert-quote-text">&ldquo;${text}&rdquo;</p><div class="expert-quote-author"><div class="expert-quote-initial">EC</div><div><div class="expert-quote-name">${cite}</div><div class="expert-quote-role">Criterio editorial</div></div></div></div>`;

const doc = (href, icon, title, desc) =>
  `<a class="doc-card" href="${href}" target="_blank" rel="noopener noreferrer"><div class="doc-card-icon blue">${icon}</div><div><div class="doc-card-title">${title}</div><div class="doc-card-desc">${desc}</div></div></a>`;

export const blogPart2 = [
  {
    id: '1415',
    slug: 'cinemateca-boliviana-50-anos-preservacion-digital',
    publishedAt: '2026-11-06T06:00:00-04:00',
    date: '2026-11-06',
    titleEs: 'La Cinemateca Boliviana cumple 50 años: qué significa preservar un archivo audiovisual en la era digital',
    titleEn: 'The Cinemateca Boliviana turns 50: what preserving an audiovisual archive means in the digital age',
    excerptEs:
      'Fundada en 1976, la Cinemateca Boliviana llega a sus 50 años conservando la Bolivia que quedó filmada. La digitalización no basta: un archivo vive si tiene metadatos, verificaciones, copias y un plan de migración. Esto es lo que enseña medio siglo de memoria audiovisual.',
    excerptEn:
      'Founded in 1976, the Cinemateca Boliviana reaches its 50th anniversary preserving the Bolivia that was captured on film. Digitization is not enough: an archive lives only with metadata, checksums, copies and a migration plan. Here is what half a century of audiovisual memory teaches.',
    readTimeEs: '9 min de lectura',
    readTimeEn: '9 min read',
    imageUrl: `${IMG}/2026-11/cinemateca-boliviana.jpg`,
    imageCaption: 'Público en la Cinemateca Boliviana durante el III Festival de Cine Radical (2016). Foto: FestivalRadical / Wikimedia Commons (CC BY-SA 4.0)',
    categoryEs: 'Producción Audiovisual',
    categoryEn: 'Audiovisual Production',
    contentEs: `<h1>La Cinemateca Boliviana cumple 50 años: qué significa preservar un archivo audiovisual en la era digital</h1>
<p class="lead"><em>En 1976, un grupo de cinéfilos y realizadores empezó a reunir películas que estaban a punto de perderse. Cincuenta años después, la Cinemateca Boliviana es una de las instituciones que sostiene la memoria audiovisual del país. Su aniversario es una buena excusa para preguntar qué implica conservar imágenes cuando el soporte cambia cada década.</em></p>
${figure(
  `${IMG}/2026-11/cinemateca-boliviana.jpg`,
  'Sala de la Cinemateca Boliviana durante una proyección',
  'La Cinemateca cumple 50 años preservando registros fílmicos, fotográficos y sonoros. Foto: FestivalRadical / Wikimedia Commons (CC BY-SA 4.0)'
)}
${stats([
  ['1976', 'año de fundación'],
  ['50', 'años de archivo en 2026'],
  ['3', 'soportes: fílmico, video y digital'],
  ['2', 'copias y verificación por obra'],
])}
<h2 class="report-chapter">Medio siglo de imágenes</h2>
<p>La Cinemateca Boliviana fue creada en 1976 y desde entonces reúne películas, cortometrajes, noticieros, fotografías y documentos que documentan distintas etapas de la historia nacional. Su archivo no es solo una colección de películas: es un registro de cómo el país se vio a sí mismo, en pantalla y fuera de ella.</p>
<p>El trabajo de conservación tiene una parte visible —las proyecciones, los ciclos, las restauraciones— y otra que casi nadie ve: inventariar, catalogar, limpiar, medir humedad y temperatura, y decidir qué se conserva en su soporte original y qué se migra. Esa rutina es la que permite que dentro de otros cincuenta años alguien pueda volver a mirar.</p>
<h2 class="report-chapter">El mito de la digitalización</h2>
<p>Digitalizar no es preservar por sí solo. Un escaneo sin metadatos, sin control de calidad y sin copias es un archivo condenado a desaparecer en un disco que nadie sabe dónde está. La preservación digital es un proceso continuo: implica verificar que los archivos se abren, que los hashes coinciden y que el soporte sigue siendo legible.</p>
<p>La práctica internacional recomienda al menos dos copias en soportes distintos y una en una ubicación diferente, con verificaciones periódicas. A eso se suma un plan de migración: los formatos y los discos cambian, y un archivo que hoy se lee sin problemas puede ser ilegible en una década.</p>
${quote(
  'Un archivo no se conserva cuando se guarda, sino cuando se vuelve a comprobar. La preservación es una rutina, no un acto único.',
  'Regla de archivo'
)}
<h2 class="report-chapter">Metadatos: la memoria del archivo</h2>
<p>Cada cinta, cada negativo y cada archivo digital necesita contexto: quién lo filmó, cuándo, dónde, con qué equipo, en qué soporte y en qué estado. Sin esos datos, la imagen existe pero no se puede interpretar ni citar. Los metadatos son la diferencia entre una película y un fragmento huérfano.</p>
<p>En un archivo audiovisual conviene registrar también el proceso: qué se limpió, qué se empalmó, qué se digitalizó y con qué parámetros. Esa trazabilidad es la misma lógica de cadena de custodia que se usa en periodismo y en verificación de contenido.</p>
<h2 class="report-chapter">Qué puede aprender un realizador</h2>
<p>La lección de la Cinemateca sirve para cualquier proyecto, incluso para uno pequeño. Nombra los archivos con criterios consistentes, guarda una copia de los originales, documenta las decisiones de edición y verifica los respaldos cada cierto tiempo. La memoria de un rodaje no está solo en el video: está en las notas, los permisos y las versiones.</p>
<p>También sirve para pensar el valor de lo que se graba. Lo que hoy parece material descartado —una calle, una entrevista, un ensayo— puede ser dentro de décadas un documento irreemplazable. Los archivos no se construyen solo con obras maestras; se construyen con la vida cotidiana que alguien decidió registrar.</p>
<h2 class="report-chapter">Los desafíos del próximo medio siglo</h2>
<p>El archivo enfrenta tres presiones simultáneas: la fragilidad de los soportes, el costo de la infraestructura y la velocidad del cambio tecnológico. A eso se suma un desafío político: quién decide qué se conserva y qué se olvida. Ninguna institución puede guardarlo todo, y cada selección es también una interpretación de la historia.</p>
<p>La Cinemateca llega a sus 50 años con un archivo vivo y con la tarea de digitalizar, describir y abrir sus fondos. Su aniversario no es solo una celebración: es un recordatorio de que la memoria audiovisual de un país se sostiene con presupuesto, oficio y tiempo.</p>
${doc(
  'https://abi.bo/a-50-anos-de-su-creacion-la-cinemateca-conserva-la-bolivia-que-quedo-filmada',
  'ABI',
  'A 50 años de su creación, la Cinemateca conserva la Bolivia que quedó filmada',
  'Reportaje de la Agencia Boliviana de Información sobre el archivo y su aniversario.'
)}
${doc(
  'https://www.archivogeneral.gob.bo/',
  'AGB',
  'Archivo General de la Nación',
  'Referencia institucional para la gestión documental en Bolivia.'
)}`,
    contentEn: `<h1>The Cinemateca Boliviana turns 50: what preserving an audiovisual archive means in the digital age</h1>
<p class="lead"><em>In 1976, a group of film lovers and filmmakers began gathering movies that were about to be lost. Fifty years later, the Cinemateca Boliviana is one of the institutions that sustains the country's audiovisual memory. Its anniversary is a good excuse to ask what it means to preserve images when the medium changes every decade.</em></p>
${figure(
  `${IMG}/2026-11/cinemateca-boliviana.jpg`,
  'Audience at the Cinemateca Boliviana during a screening',
  'The Cinemateca turns 50 preserving film, photographic and sound records. Photo: FestivalRadical / Wikimedia Commons (CC BY-SA 4.0)'
)}
${stats([
  ['1976', 'founding year'],
  ['50', 'years of archive in 2026'],
  ['3', 'media: film, video and digital'],
  ['2', 'copies and verification per work'],
])}
<h2 class="report-chapter">Half a century of images</h2>
<p>The Cinemateca Boliviana was created in 1976 and has since gathered films, shorts, newsreels, photographs and documents that record different stages of national history. Its archive is not just a collection of movies: it is a record of how the country saw itself, on screen and off it.</p>
<p>Conservation work has a visible part —screenings, retrospectives, restorations— and another that almost nobody sees: inventorying, cataloging, cleaning, measuring humidity and temperature, and deciding what stays in its original medium and what is migrated. That routine is what allows someone to watch it again fifty years from now.</p>
<h2 class="report-chapter">The digitization myth</h2>
<p>Digitizing is not preserving by itself. A scan without metadata, quality control and copies is an archive condemned to disappear on a disk no one knows where to find. Digital preservation is a continuous process: it involves verifying that files open, that hashes match and that the medium remains readable.</p>
<p>International practice recommends at least two copies on different media and one in a different location, with periodic verification. Add to that a migration plan: formats and drives change, and a file that reads without problems today may be unreadable in a decade.</p>
${quote(
  'An archive is not preserved when it is stored, but when it is checked again. Preservation is a routine, not a single act.',
  'Archive rule'
)}
<h2 class="report-chapter">Metadata: the archive's memory</h2>
<p>Every tape, negative and digital file needs context: who filmed it, when, where, with what equipment, on what medium and in what condition. Without that data, the image exists but cannot be interpreted or cited. Metadata is the difference between a film and an orphaned fragment.</p>
<p>In an audiovisual archive it is also worth recording the process: what was cleaned, what was spliced, what was digitized and with what parameters. That traceability follows the same chain-of-custody logic used in journalism and content verification.</p>
<h2 class="report-chapter">What a filmmaker can learn</h2>
<p>The Cinemateca's lesson applies to any project, even a small one. Name files consistently, keep a copy of the originals, document editing decisions and verify backups periodically. The memory of a shoot is not only in the video: it is in the notes, the permits and the versions.</p>
<p>It also helps rethink the value of what is recorded. What today looks like discarded material —a street, an interview, a rehearsal— may be an irreplaceable document decades from now. Archives are not built only with masterpieces; they are built with the everyday life someone decided to record.</p>
<h2 class="report-chapter">The challenges of the next half century</h2>
<p>The archive faces three simultaneous pressures: the fragility of media, the cost of infrastructure and the speed of technological change. Add a political challenge: who decides what is preserved and what is forgotten. No institution can keep everything, and every selection is also an interpretation of history.</p>
<p>The Cinemateca reaches its 50th year with a living archive and the task of digitizing, describing and opening its collections. Its anniversary is not only a celebration: it is a reminder that a country's audiovisual memory is sustained by budget, craft and time.</p>
${doc(
  'https://abi.bo/a-50-anos-de-su-creacion-la-cinemateca-conserva-la-bolivia-que-quedo-filmada',
  'ABI',
  '50 years on, the Cinemateca preserves the Bolivia that was filmed',
  'Agencia Boliviana de Información report on the archive and its anniversary.'
)}
${doc(
  'https://www.archivogeneral.gob.bo/',
  'AGB',
  'General Archive of the Nation',
  'Institutional reference for records management in Bolivia.'
)}`,
  },
  {
    id: '1416',
    slug: 'documental-20-minutos-del-guion-al-timeline',
    publishedAt: '2026-11-06T07:00:00-04:00',
    date: '2026-11-06',
    titleEs: 'Del guion al timeline: cómo planificar un documental de 20 minutos sin ahogarte en material',
    titleEn: 'From script to timeline: how to plan a 20-minute documentary without drowning in footage',
    excerptEs:
      'Un documental de 20 minutos no es un documental largo recortado. Exige una pregunta central, un tratamiento breve, secuencias con función narrativa y un paper edit antes de tocar el timeline. Este es un método de trabajo para llegar al corte con criterio.',
    excerptEn:
      'A 20-minute documentary is not a long documentary cut down. It requires a central question, a short treatment, sequences with a narrative function and a paper edit before touching the timeline. This is a working method to reach the cut with judgment.',
    readTimeEs: '9 min de lectura',
    readTimeEn: '9 min read',
    imageUrl: '/images/behind-scenes/DSC_0739.webp',
    imageCaption: 'Rodaje de campo con cámara y trípode en embarcación. Foto: archivo del autor',
    categoryEs: 'Producción Audiovisual',
    categoryEn: 'Audiovisual Production',
    contentEs: `<h1>Del guion al timeline: cómo planificar un documental de 20 minutos sin ahogarte en material</h1>
<p class="lead"><em>Veinte minutos parecen poco hasta que se tiene veinte horas de material. La diferencia entre un documental que respira y un collage de buenas tomas no está en la edición, sino en las decisiones que se toman antes: qué pregunta guía la historia, qué secuencias la sostienen y qué se deja afuera.</em></p>
${figure(
  '/images/behind-scenes/DSC_0739.webp',
  'Equipo de rodaje con cámara y trípode en una embarcación',
  'El material de campo se organiza antes de editar: sin mapa, el timeline se vuelve una acumulación. Foto: archivo del autor'
)}
${stats([
  ['20 min', 'duración objetivo'],
  ['1', 'pregunta central'],
  ['8–12', 'secuencias con función'],
  ['1/3', 'material que sobrevive al corte'],
])}
<h2 class="report-chapter">La pregunta antes que el tema</h2>
<p>&ldquo;Un documental sobre la migración&rdquo; no es una pregunta, es un tema. La pregunta es lo que el espectador quiere responder al final: ¿qué pierde una familia cuando uno de sus miembros se va? ¿Cómo cambia un pueblo cuando llega la carretera? Sin esa pregunta, cada escena compite por atención y el corte se vuelve una suma.</p>
<p>Escribe la pregunta en una frase y úsala como filtro. Si una secuencia no aporta a responderla, no entra. Si dos secuencias dicen lo mismo, sobra una. La pregunta también define el tono: no es lo mismo una investigación de denuncia que un retrato íntimo.</p>
<h2 class="report-chapter">El tratamiento: una página, no un guion</h2>
<p>En documental, el guion suele escribirse después del rodaje. Lo que se escribe antes es un tratamiento: dos o tres párrafos que describen el arco, los personajes, el conflicto y el final posible. Debe caber en una página y ser lo bastante concreto como para decidir qué grabar y qué no.</p>
<p>El tratamiento incluye también las limitaciones: acceso, permisos, tiempos de viaje, presupuesto. Un documental de 20 minutos con cuatro entrevistados y dos locaciones puede ser más fuerte que uno con veinte personajes que no alcanzan a desarrollarse.</p>
${quote(
  'Si no puedes contar tu documental en una página, tampoco vas a poder contarlo en veinte minutos.',
  'Regla de tratamiento'
)}
<h2 class="report-chapter">Secuencias, no escenas sueltas</h2>
<p>Una secuencia es una unidad con principio, desarrollo y cierre: alguien quiere algo, encuentra un obstáculo y sale cambiado. Organizar el material por secuencias —y no por carpetas de fechas o lugares— permite ver qué falta y qué sobra antes de editar.</p>
<p>Para 20 minutos, un documental suele necesitar entre ocho y doce secuencias. Cada una debe tener una función: presentar al personaje, instalar el conflicto, mostrar un giro, dar contexto o cerrar. Si una secuencia no cumple ninguna, es candidata a salir.</p>
<h2 class="report-chapter">El paper edit</h2>
<p>Antes de abrir el software, escribe el documental en papel: una línea por toma, con la transcripción del audio y la duración estimada. Ese documento permite ver el ritmo, detectar repeticiones y calcular si el corte llega a los 20 minutos sin relleno.</p>
<p>El paper edit también revela los huecos narrativos. Si una transición depende de una frase que nadie dijo, hay que grabarla o cambiar la estructura. Detectar eso en papel cuesta minutos; detectarlo en el timeline cuesta días.</p>
<h2 class="report-chapter">Ritmo y respiración</h2>
<p>Veinte minutos no son veinte minutos de información. El espectador necesita pausas, silencios y planos de transición para procesar lo que ve. Un corte que no respira se vuelve ansioso; uno que respira demasiado se vuelve lento. La clave está en alternar densidad y descanso.</p>
<p>Mide el ritmo en bloques de tres a cinco minutos. Cada bloque debería tener un pequeño arco y terminar con una pregunta o un cambio. Esa estructura ayuda a sostener la atención sin recurrir a música constante.</p>
<h2 class="report-chapter">Checklist de planificación</h2>
<ul>
<li>Una pregunta central escrita en una frase.</li>
<li>Un tratamiento de una página con arco y final posible.</li>
<li>Ocho a doce secuencias con función narrativa.</li>
<li>Transcripciones y paper edit antes del timeline.</li>
<li>Plan de rodaje con accessos, permisos y tiempos.</li>
<li>Presupuesto de postproducción: música, color, mezcla y subtítulos.</li>
</ul>
${doc(
  'https://www.sundance.org/programs/documentary-film-program/',
  'DOC',
  'Sundance Documentary Film Program',
  'Recursos y referencias sobre desarrollo de documentales.'
)}
${doc(
  'https://www.idfa.nl/en/',
  'IDFA',
  'International Documentary Film Festival Amsterdam',
  'Catálogo de referencia para estudiar estructuras y tratamientos.'
)}`,
    contentEn: `<h1>From script to timeline: how to plan a 20-minute documentary without drowning in footage</h1>
<p class="lead"><em>Twenty minutes seems short until you have twenty hours of material. The difference between a documentary that breathes and a collage of good shots is not in the edit but in the decisions made beforehand: which question guides the story, which sequences sustain it and what is left out.</em></p>
${figure(
  '/images/behind-scenes/DSC_0739.webp',
  'Film crew with camera and tripod on a boat',
  'Field material is organized before editing: without a map, the timeline becomes an accumulation. Photo: author’s archive'
)}
${stats([
  ['20 min', 'target runtime'],
  ['1', 'central question'],
  ['8–12', 'sequences with a function'],
  ['1/3', 'footage that survives the cut'],
])}
<h2 class="report-chapter">The question before the topic</h2>
<p>&ldquo;A documentary about migration&rdquo; is not a question, it is a topic. The question is what the viewer wants answered at the end: what does a family lose when one of its members leaves? How does a town change when the road arrives? Without that question, every scene competes for attention and the cut becomes a sum.</p>
<p>Write the question in one sentence and use it as a filter. If a sequence does not help answer it, it does not go in. If two sequences say the same thing, one is redundant. The question also defines the tone: an investigative exposé is not the same as an intimate portrait.</p>
<h2 class="report-chapter">The treatment: one page, not a script</h2>
<p>In documentary, the script is usually written after shooting. What is written before is a treatment: two or three paragraphs describing the arc, the characters, the conflict and a possible ending. It should fit on one page and be concrete enough to decide what to shoot and what not to.</p>
<p>The treatment also includes constraints: access, permits, travel time, budget. A 20-minute documentary with four interviewees and two locations can be stronger than one with twenty characters who never get developed.</p>
${quote(
  'If you cannot tell your documentary on one page, you will not be able to tell it in twenty minutes either.',
  'Treatment rule'
)}
<h2 class="report-chapter">Sequences, not loose scenes</h2>
<p>A sequence is a unit with a beginning, development and ending: someone wants something, meets an obstacle and comes out changed. Organizing material by sequences —not by date or location folders— makes it possible to see what is missing and what is surplus before editing.</p>
<p>For 20 minutes, a documentary usually needs eight to twelve sequences. Each must have a function: introduce the character, establish the conflict, show a turn, provide context or close. If a sequence fulfills none, it is a candidate for removal.</p>
<h2 class="report-chapter">The paper edit</h2>
<p>Before opening the software, write the documentary on paper: one line per shot, with the audio transcript and estimated duration. That document lets you see rhythm, detect repetition and calculate whether the cut reaches 20 minutes without filler.</p>
<p>The paper edit also reveals narrative gaps. If a transition depends on a sentence no one said, you must record it or change the structure. Catching that on paper costs minutes; catching it in the timeline costs days.</p>
<h2 class="report-chapter">Rhythm and breathing</h2>
<p>Twenty minutes are not twenty minutes of information. The viewer needs pauses, silences and transition shots to process what they see. A cut that does not breathe becomes anxious; one that breathes too much becomes slow. The key is alternating density and rest.</p>
<p>Measure rhythm in blocks of three to five minutes. Each block should have a small arc and end with a question or a change. That structure helps sustain attention without resorting to constant music.</p>
<h2 class="report-chapter">Planning checklist</h2>
<ul>
<li>A central question written in one sentence.</li>
<li>A one-page treatment with an arc and a possible ending.</li>
<li>Eight to twelve sequences with a narrative function.</li>
<li>Transcripts and a paper edit before the timeline.</li>
<li>A shooting plan with access, permits and timing.</li>
<li>A post-production budget: music, color, mix and subtitles.</li>
</ul>
${doc(
  'https://www.sundance.org/programs/documentary-film-program/',
  'DOC',
  'Sundance Documentary Film Program',
  'Resources and references on documentary development.'
)}
${doc(
  'https://www.idfa.nl/en/',
  'IDFA',
  'International Documentary Film Festival Amsterdam',
  'Reference catalog for studying structures and treatments.'
)}`,
  },
  {
    id: '1417',
    slug: 'ia-en-postproduccion-limites-reales-2026',
    publishedAt: '2026-11-06T08:00:00-04:00',
    date: '2026-11-06',
    titleEs: 'IA en postproducción: las cuatro tareas donde ya ahorra horas y los tres límites que siguen firmes',
    titleEn: 'AI in post-production: four tasks where it already saves hours and three limits that still hold',
    excerptEs:
      'La IA dejó de ser una promesa en postproducción: roscopia, escalado, reparación de audio y traducción ya ahorran tiempo real. Pero la consistencia temporal, los derechos y la verificación siguen siendo tareas humanas. Un mapa honesto de lo que funciona y lo que no.',
    excerptEn:
      'AI is no longer a promise in post-production: rotoscoping, upscaling, audio repair and translation already save real time. But temporal consistency, rights and verification remain human tasks. An honest map of what works and what does not.',
    readTimeEs: '9 min de lectura',
    readTimeEn: '9 min read',
    imageUrl: `${IMG}/tutoriales-ia-2026/higgsfield-cinema-studio-dop-camara-lente-movimiento.jpg`,
    imageCaption: 'Interfaz de generación de video con control de cámara y lente. Imagen: Higgsfield',
    categoryEs: 'Tecnología y Creación',
    categoryEn: 'Technology & Creation',
    contentEs: `<h1>IA en postproducción: las cuatro tareas donde ya ahorra horas y los tres límites que siguen firmes</h1>
<p class="lead"><em>La conversación sobre IA en video suele dividirse entre el entusiasmo y el rechazo. En la práctica, la herramienta ya se usa en tareas concretas y acotadas: quitar un micrófono de un plano, escalar material antiguo, limpiar un diálogo o traducir una entrevista. El problema aparece cuando se le pide lo que todavía no puede dar.</em></p>
${figure(
  `${IMG}/tutoriales-ia-2026/higgsfield-cinema-studio-dop-camara-lente-movimiento.jpg`,
  'Interfaz de generación de video con controles de cámara y lente',
  'Los modelos actuales permiten dirigir cámara y lente, pero no garantizan continuidad entre planos. Imagen: Higgsfield'
)}
${stats([
  ['4', 'tareas donde ya ahorra horas'],
  ['3', 'límites que siguen firmes'],
  ['1', 'regla: revisar fotograma a fotograma'],
  ['0', 'decisiones de derechos delegadas'],
])}
<h2 class="report-chapter">1. Rotoscopia y limpieza de planos</h2>
<p>Separar un sujeto del fondo fue durante años un trabajo de horas por plano. Los modelos de segmentación actuales permiten hacerlo en minutos y con bordes razonables, sobre todo en planos limpios y con buen contraste. Sirve para quitar un micrófono, reemplazar un fondo o aislar a un entrevistado para un ajuste de color.</p>
<p>El límite aparece en el detalle fino: cabello al viento, telas transparentes, movimiento rápido o bordes que se cruzan. Ahí el resultado necesita corrección manual. La IA acelera el primer 80%; el 20% restante sigue siendo oficio.</p>
<h2 class="report-chapter">2. Escalado y restauración</h2>
<p>El upscaling permite llevar material de menor resolución a un timeline 4K sin que se vea tan blando. También ayuda a recuperar archivos antiguos, reducir ruido y estabilizar tomas. En documentales con material de archivo es una herramienta valiosa, siempre que se declare en los créditos y no se presente como imagen original.</p>
<p>El riesgo es la invención: el modelo puede añadir texturas, rostros o detalles que no estaban en la fuente. Para material periodístico, conviene usar modos conservadores y conservar el original como referencia. Un plano &ldquo;mejorado&rdquo; que cambia el contenido deja de ser un documento.</p>
${quote(
  'La IA puede mejorar cómo se ve un archivo, pero no puede convertir una inferencia en evidencia. Si el modelo inventa un detalle, el documento cambia.',
  'Regla de restauración'
)}
<h2 class="report-chapter">3. Reparación de audio</h2>
<p>La reducción de ruido, la eliminación de clics y la separación de voz y música ya funcionan bien en muchos casos. También la nivelación automática y la transcripción con marcas de tiempo, que ahorran horas de trabajo en entrevistas largas. Para un documental con material de campo ruidoso, es una de las aplicaciones más rentables.</p>
<p>El abuso se escucha: voces metálicas, consonantes borradas y un fondo que parece una sala de conciertos vacía. El audio reparado debe compararse siempre con el original, y conviene preservar una versión sin procesar por si el resultado no convence.</p>
<h2 class="report-chapter">4. Traducción y subtítulos</h2>
<p>Los modelos de voz y traducción permiten subtitular una entrevista en otro idioma en una fracción del tiempo que tomaba antes. Son útiles para versiones de festival, para redes y para audiencias internacionales. La calidad depende de la claridad del audio, del acento y del vocabulario técnico.</p>
<p>La revisión humana sigue siendo obligatoria. Un matiz político, un nombre propio o una ironía pueden cambiar el sentido. En contextos de derechos humanos o judiciales, un subtítulo mal traducido no es un detalle: es un riesgo.</p>
<h2 class="report-chapter">Los tres límites que siguen firmes</h2>
<ol>
<li><strong>Consistencia temporal.</strong> Mantener el mismo rostro, vestuario e iluminación entre planos sigue siendo frágil. Los modelos mejoran, pero el cine se sostiene en la continuidad y la IA todavía falla en secuencias largas.</li>
<li><strong>Derechos y consentimiento.</strong> Clonar una voz, un rostro o un estilo exige permisos claros. La ley y los contratos van más lento que la tecnología, y la responsabilidad recae en quien publica.</li>
<li><strong>Verificación.</strong> Una herramienta que genera o modifica imágenes no puede certificar que el resultado sea verdadero. La procedencia se documenta con credenciales, archivos originales y fuentes, no con un botón.</li>
</ol>
<h2 class="report-chapter">Cómo integrarla sin perder el criterio</h2>
<p>La regla práctica es asignar la IA a tareas repetitivas y medibles, y reservar las decisiones narrativas para el equipo. Documenta qué se usó, guarda los originales, revisa fotograma a fotograma y declara el uso cuando corresponda. La transparencia no resta valor: protege al proyecto y a la audiencia.</p>
${doc(
  'https://www.adobe.com/products/premiere/ai-video-editing.html',
  'IA',
  'Funciones de IA en edición de video',
  'Panorama de herramientas de transcripción, limpieza y ajuste.'
)}
${doc(
  'https://c2pa.org/',
  'C2PA',
  'Procedencia de contenido',
  'Estándar para documentar origen y ediciones de material audiovisual.'
)}`,
    contentEn: `<h1>AI in post-production: four tasks where it already saves hours and three limits that still hold</h1>
<p class="lead"><em>The conversation about AI in video tends to split between enthusiasm and rejection. In practice, the tool is already used for concrete, bounded tasks: removing a microphone from a shot, upscaling old material, cleaning dialogue or translating an interview. The problem appears when it is asked for what it cannot yet deliver.</em></p>
${figure(
  `${IMG}/tutoriales-ia-2026/higgsfield-cinema-studio-dop-camara-lente-movimiento.jpg`,
  'Video generation interface with camera and lens controls',
  'Current models allow directing camera and lens, but do not guarantee continuity between shots. Image: Higgsfield'
)}
${stats([
  ['4', 'tasks where it already saves hours'],
  ['3', 'limits that still hold'],
  ['1', 'rule: review frame by frame'],
  ['0', 'rights decisions delegated'],
])}
<h2 class="report-chapter">1. Rotoscoping and shot cleanup</h2>
<p>Separating a subject from the background was once hours of work per shot. Current segmentation models do it in minutes with reasonable edges, especially in clean, high-contrast shots. It is useful for removing a microphone, replacing a background or isolating an interviewee for color work.</p>
<p>The limit appears in fine detail: hair in the wind, sheer fabrics, fast movement or crossing edges. There the result needs manual correction. AI accelerates the first 80%; the remaining 20% is still craft.</p>
<h2 class="report-chapter">2. Upscaling and restoration</h2>
<p>Upscaling can bring lower-resolution material into a 4K timeline without looking overly soft. It also helps recover old files, reduce noise and stabilize shots. In documentaries with archive material it is a valuable tool, as long as it is disclosed in the credits and not presented as original footage.</p>
<p>The risk is invention: the model may add textures, faces or details that were not in the source. For journalistic material, use conservative modes and keep the original as a reference. An &ldquo;enhanced&rdquo; shot that changes the content stops being a document.</p>
${quote(
  'AI can improve how an archive looks, but it cannot turn an inference into evidence. If the model invents a detail, the document changes.',
  'Restoration rule'
)}
<h2 class="report-chapter">3. Audio repair</h2>
<p>Noise reduction, click removal and voice/music separation already work well in many cases. So do automatic leveling and transcription with timecodes, which save hours on long interviews. For a documentary with noisy field material, it is one of the most profitable applications.</p>
<p>Overuse is audible: metallic voices, erased consonants and a background that sounds like an empty concert hall. Repaired audio should always be compared with the original, and an unprocessed version should be kept in case the result does not convince.</p>
<h2 class="report-chapter">4. Translation and subtitles</h2>
<p>Voice and translation models make it possible to subtitle an interview in another language in a fraction of the time it used to take. They are useful for festival versions, social media and international audiences. Quality depends on audio clarity, accent and technical vocabulary.</p>
<p>Human review remains mandatory. A political nuance, a proper name or an irony can change the meaning. In human rights or judicial contexts, a mistranslated subtitle is not a detail: it is a risk.</p>
<h2 class="report-chapter">The three limits that still hold</h2>
<ol>
<li><strong>Temporal consistency.</strong> Keeping the same face, wardrobe and lighting across shots remains fragile. Models improve, but cinema rests on continuity and AI still fails in long sequences.</li>
<li><strong>Rights and consent.</strong> Cloning a voice, a face or a style requires clear permissions. Law and contracts move slower than technology, and responsibility falls on whoever publishes.</li>
<li><strong>Verification.</strong> A tool that generates or modifies images cannot certify that the result is true. Provenance is documented with credentials, original files and sources, not with a button.</li>
</ol>
<h2 class="report-chapter">How to integrate it without losing judgment</h2>
<p>The practical rule is to assign AI to repetitive, measurable tasks and reserve narrative decisions for the team. Document what was used, keep the originals, review frame by frame and disclose the use when appropriate. Transparency does not subtract value: it protects the project and the audience.</p>
${doc(
  'https://www.adobe.com/products/premiere/ai-video-editing.html',
  'AI',
  'AI features in video editing',
  'Overview of transcription, cleanup and adjustment tools.'
)}
${doc(
  'https://c2pa.org/',
  'C2PA',
  'Content provenance',
  'Standard for documenting the origin and edits of audiovisual material.'
)}`,
  },
  {
    id: '1418',
    slug: 'backup-3-2-1-rodajes',
    publishedAt: '2026-11-06T09:00:00-04:00',
    date: '2026-11-06',
    titleEs: 'Respaldo 3-2-1 en rodajes: el protocolo que evita perder el documental en una tarjeta',
    titleEn: '3-2-1 backup on shoots: the protocol that keeps you from losing the documentary on a card',
    excerptEs:
      'Tres copias, dos soportes y una fuera del set. La regla 3-2-1 sigue siendo la base de cualquier respaldo serio, pero en rodaje hay que sumarle verificación de hashes, control de tarjetas y una prueba de restauración. Esta es la rutina completa.',
    excerptEn:
      'Three copies, two media types and one off set. The 3-2-1 rule remains the basis of any serious backup, but on a shoot you must add hash verification, card control and a restore test. This is the full routine.',
    readTimeEs: '8 min de lectura',
    readTimeEn: '8 min read',
    imageUrl: `${IMG}/2026-11/backup-discos-rodaje.jpg`,
    imageCaption: 'Disco duro abierto: el soporte físico también falla y necesita verificación. Foto: Eric Gaba / Wikimedia Commons (CC BY-SA 3.0)',
    categoryEs: 'Tutoriales',
    categoryEn: 'Tutorials',
    contentEs: `<h1>Respaldo 3-2-1 en rodajes: el protocolo que evita perder el documental en una tarjeta</h1>
<p class="lead"><em>La escena más cara de un rodaje no es la que requiere grúa: es la que se pierde porque nadie copió la tarjeta. La regla 3-2-1 existe desde hace años y sigue siendo la mejor defensa contra el error humano, el robo y la falla del disco.</em></p>
${figure(
  `${IMG}/2026-11/backup-discos-rodaje.jpg`,
  'Disco duro abierto con sus platos y cabezales',
  'Ningún soporte es eterno: la copia redundante es la única protección real. Foto: Eric Gaba / Wikimedia Commons (CC BY-SA 3.0)'
)}
${stats([
  ['3', 'copias del material'],
  ['2', 'soportes distintos'],
  ['1', 'copia fuera del set'],
  ['0', 'confianza en una sola tarjeta'],
])}
<h2 class="report-chapter">La regla, explicada sin adornos</h2>
<p>3-2-1 significa: tres copias de los datos, en dos tipos de soporte distintos, con una copia fuera de la ubicación principal. En un rodaje, la primera copia puede ser la tarjeta original; la segunda, un SSD en el set; la tercera, un disco o un servicio en la nube que se guarda en otro lugar.</p>
<p>La regla no es una superstición: cubre fallas distintas. Un SSD puede morir por un golpe; un disco externo puede corromperse por una desconexión; una nube puede tener una cuenta bloqueada. Tres copias en dos tecnologías reducen la probabilidad de que un solo evento borre todo.</p>
<h2 class="report-chapter">El offload: el momento crítico</h2>
<p>El traspaso de la tarjeta al disco es el punto más vulnerable. Usa un programa que copie y verifique, no el explorador de archivos a ciegas. Herramientas como ShotPut Pro, Hedge o rsync calculan hashes y avisan si un archivo llegó distinto.</p>
<p>Nunca formatees la tarjeta en el set. Espera a tener al menos dos copias verificadas y, si es posible, una tercera. Rotula las tarjetas con fecha, cámara y número de rollo. Una tarjeta sin etiqueta es una tarjeta que alguien va a reutilizar por error.</p>
${quote(
  'La tarjeta no se formatea hasta que la copia verificada existe en dos lugares. Esa espera de diez minutos puede salvar todo el rodaje.',
  'Regla de offload'
)}
<h2 class="report-chapter">Hashes: la prueba de que la copia es idéntica</h2>
<p>Un hash es una huella digital del archivo. Si el hash del original y el de la copia coinciden, es muy probable que el contenido sea idéntico. El proceso se conoce como checksum y es la diferencia entre &ldquo;copié&rdquo; y &ldquo;verifiqué que copié bien&rdquo;.</p>
<p>Guarda el registro de hashes junto con el proyecto. Sirve para auditorías, para entregas a un cliente y para detectar corrupción meses después. En producciones pequeñas, una hoja de cálculo con nombre de archivo, tamaño y hash es suficiente.</p>
<h2 class="report-chapter">La copia fuera del set</h2>
<p>La tercera copia debe salir del lugar donde se guardan las otras dos. Puede ser un disco que se lleva otra persona, un NAS en la oficina o un servicio en la nube. Si el rodaje es en exteriores, conviene subir los archivos más críticos al final de cada jornada, aunque sea de forma parcial.</p>
<p>La nube no es infinita ni gratuita: calcula el volumen y la velocidad de subida antes de depender de ella. Para material 4K, una conexión lenta puede convertir la copia en una tarea de días.</p>
<h2 class="report-chapter">Prueba de restauración</h2>
<p>Un respaldo que nunca se probó es una hipótesis. Cada cierto tiempo, restaura una carpeta al azar y comprueba que los archivos se abren y que el proyecto los reconoce. La prueba debe incluir los metadatos y la estructura de carpetas, no solo el video.</p>
<p>Documenta la prueba con fecha y resultado. Si falla, mejor descubrirlo ahora que cuando el cliente pida el corte final.</p>
<h2 class="report-chapter">Checklist de rodaje</h2>
<ul>
<li>Tarjetas rotuladas y formateadas en la cámara antes de salir.</li>
<li>Dos discos de offload y un cable de repuesto.</li>
<li>Software de copia con verificación de hash.</li>
<li>Registro de hashes por jornada.</li>
<li>Tercera copia fuera del set al final del día.</li>
<li>Prueba de restauración antes de archivar el proyecto.</li>
</ul>
${doc(
  'https://www.backblaze.com/blog/the-3-2-1-backup-strategy/',
  '321',
  'La estrategia de respaldo 3-2-1',
  'Explicación práctica de copias, soportes y ubicaciones.'
)}
${doc(
  'https://rsync.samba.org/',
  'SYNC',
  'rsync',
  'Herramienta libre para copiar y verificar archivos entre discos y servidores.'
)}`,
    contentEn: `<h1>3-2-1 backup on shoots: the protocol that keeps you from losing the documentary on a card</h1>
<p class="lead"><em>The most expensive scene on a shoot is not the one that requires a crane: it is the one lost because no one copied the card. The 3-2-1 rule has existed for years and remains the best defense against human error, theft and drive failure.</em></p>
${figure(
  `${IMG}/2026-11/backup-discos-rodaje.jpg`,
  'Opened hard drive showing its platters and heads',
  'No medium is eternal: a redundant copy is the only real protection. Photo: Eric Gaba / Wikimedia Commons (CC BY-SA 3.0)'
)}
${stats([
  ['3', 'copies of the material'],
  ['2', 'different media types'],
  ['1', 'copy off set'],
  ['0', 'trust in a single card'],
])}
<h2 class="report-chapter">The rule, without embellishment</h2>
<p>3-2-1 means three copies of the data, on two different types of media, with one copy outside the primary location. On a shoot, the first copy can be the original card; the second, an SSD on set; the third, a drive or cloud service stored elsewhere.</p>
<p>The rule is not superstition: it covers different failures. An SSD can die from a knock; an external drive can be corrupted by a disconnect; a cloud account can be locked. Three copies across two technologies reduce the chance that a single event erases everything.</p>
<h2 class="report-chapter">Offload: the critical moment</h2>
<p>Transferring from card to drive is the most vulnerable point. Use software that copies and verifies, not blind File Explorer. Tools such as ShotPut Pro, Hedge or rsync calculate hashes and warn if a file arrived different.</p>
<p>Never format the card on set. Wait until you have at least two verified copies and, if possible, a third. Label cards with date, camera and roll number. An unlabeled card is a card someone will reuse by mistake.</p>
${quote(
  'The card is not formatted until a verified copy exists in two places. That ten-minute wait can save the entire shoot.',
  'Offload rule'
)}
<h2 class="report-chapter">Hashes: proof that the copy is identical</h2>
<p>A hash is a digital fingerprint of the file. If the hash of the original and the copy match, the content is very likely identical. The process is called checksum and it is the difference between &ldquo;I copied&rdquo; and &ldquo;I verified that I copied correctly.&rdquo;</p>
<p>Keep the hash log with the project. It is useful for audits, client deliveries and detecting corruption months later. On small productions, a spreadsheet with file name, size and hash is enough.</p>
<h2 class="report-chapter">The copy off set</h2>
<p>The third copy must leave the place where the other two are stored. It can be a drive carried by another person, an office NAS or a cloud service. If the shoot is outdoors, upload the most critical files at the end of each day, even partially.</p>
<p>The cloud is neither infinite nor free: calculate volume and upload speed before depending on it. For 4K material, a slow connection can turn the copy into a multi-day task.</p>
<h2 class="report-chapter">Restore test</h2>
<p>A backup that was never tested is a hypothesis. Periodically restore a random folder and check that files open and that the project recognizes them. The test should include metadata and folder structure, not just the video.</p>
<p>Document the test with date and result. If it fails, better to find out now than when the client asks for the final cut.</p>
<h2 class="report-chapter">Shoot checklist</h2>
<ul>
<li>Cards labeled and formatted in the camera before leaving.</li>
<li>Two offload drives and a spare cable.</li>
<li>Copy software with hash verification.</li>
<li>A hash log for each shooting day.</li>
<li>A third copy off set at the end of the day.</li>
<li>A restore test before archiving the project.</li>
</ul>
${doc(
  'https://www.backblaze.com/blog/the-3-2-1-backup-strategy/',
  '321',
  'The 3-2-1 backup strategy',
  'Practical explanation of copies, media and locations.'
)}
${doc(
  'https://rsync.samba.org/',
  'SYNC',
  'rsync',
  'Free tool to copy and verify files between drives and servers.'
)}`,
  },
  {
    id: '1419',
    slug: 'teleprompter-casero-leer-a-camara',
    publishedAt: '2026-11-06T10:00:00-04:00',
    date: '2026-11-06',
    titleEs: 'Teleprompter casero: cómo leer a cámara sin sonar robot',
    titleEn: 'A DIY teleprompter: how to read on camera without sounding like a robot',
    excerptEs:
      'Un soporte, una tablet y un cristal bastan para montar un teleprompter funcional. Lo difícil no es el hardware: es escribir un guion que se pueda leer en voz alta y encontrar un ritmo que parezca conversación. Esta es la guía completa.',
    excerptEn:
      'A mount, a tablet and a piece of glass are enough to build a working teleprompter. The hard part is not the hardware: it is writing a script that can be read aloud and finding a rhythm that sounds like conversation. This is the complete guide.',
    readTimeEs: '8 min de lectura',
    readTimeEn: '8 min read',
    imageUrl: '/images/behind-scenes/DSC_2994.webp',
    imageCaption: 'Cámara de estudio con teleprompter en un set de televisión. Foto: archivo del autor',
    categoryEs: 'Tutoriales',
    categoryEn: 'Tutorials',
    contentEs: `<h1>Teleprompter casero: cómo leer a cámara sin sonar robot</h1>
<p class="lead"><em>El teleprompter tiene fama de herramienta de noticiero, pero sirve para cualquier video hablado a cámara: tutoriales, presentaciones, mensajes institucionales. La versión casera cuesta menos de lo que parece y obliga a algo que ningún equipo resuelve solo: escribir para el oído.</em></p>
${figure(
  '/images/behind-scenes/DSC_2994.webp',
  'Cámara de estudio con teleprompter y operador',
  'Un teleprompter bien alineado permite mirar a la lente sin perder el texto. Foto: archivo del autor'
)}
${stats([
  ['130–150', 'palabras por minuto'],
  ['1', 'tablet o monitor'],
  ['50%', 'reflexión del cristal'],
  ['3', 'pasadas de ensayo'],
])}
<h2 class="report-chapter">Qué necesitas</h2>
<p>El montaje básico tiene cuatro piezas: un soporte que fije la tablet frente a la cámara, un cristal o acrílico semirreflectante a 45 grados, una cámara detrás del cristal y una app de teleprompter que invierta el texto. El cristal refleja la pantalla y deja pasar la imagen de la cámara; el resultado es que el presentador mira a la lente mientras lee.</p>
<p>Puedes usar un marco de madera o una impresión 3D. Lo importante es que el cristal quede perpendicular al eje de la cámara y que no entre luz parásita entre la tablet y el vidrio. Un cartón o una tela negra alrededor mejora el contraste.</p>
<h2 class="report-chapter">La app y el texto espejado</h2>
<p>La mayoría de las apps permiten invertir el texto horizontal y verticalmente. Si no lo hacen, puedes espejar el video en edición, pero es más trabajo. Ajusta el tamaño de fuente, el interlineado y la velocidad antes de grabar; cambiar esos parámetros a mitad de una toma se nota.</p>
<p>Coloca la tablet en modo avión y baja el brillo si el reflejo molesta. Un fondo negro con texto blanco o ámbar reduce el cansancio visual y mejora la lectura.</p>
${quote(
  'El teleprompter no se lee: se acompaña. Si el texto exige toda la atención, el guion está mal escrito para el formato.',
  'Regla de conducción'
)}
<h2 class="report-chapter">Escribir para el oído</h2>
<p>Un guion de teleprompter no es un ensayo. Usa frases cortas, una idea por línea y palabras que se puedan pronunciar sin tropiezo. Evita paréntesis, siglas sin desarrollar y construcciones subordinadas largas. Si una frase no se puede decir de una respiración, córtala.</p>
<p>Marca las pausas con barras o líneas en blanco y destaca las palabras que deben llevar énfasis. Esas marcas son para ti, no para el espectador. El objetivo es que el texto desaparezca detrás de una idea clara.</p>
<h2 class="report-chapter">Ritmo y naturalidad</h2>
<p>La velocidad cómoda para una locución informativa ronda las 130 a 150 palabras por minuto. Si lees más rápido, el espectador no procesa; si lees más lento, el video se arrastra. Ajusta la velocidad de desplazamiento a tu ritmo real, no al ritmo que crees que deberías tener.</p>
<p>Para sonar natural, no leas palabra por palabra: mira el bloque, memoriza la idea y di la frase con tus palabras si hace falta. El teleprompter es una red de seguridad, no una camisa de fuerza.</p>
<h2 class="report-chapter">Errores frecuentes</h2>
<ul>
<li><strong>Mirar el texto y no la lente:</strong> los ojos se mueven de lado a lado. Mantén la mirada en el centro de la lente.</li>
<li><strong>Cristal mal alineado:</strong> el texto se ve doble o fuera de foco. Ajusta el ángulo y la distancia.</li>
<li><strong>Fuente demasiado pequeña:</strong> obliga a entrecerrar los ojos. Sube el tamaño antes de bajar la velocidad.</li>
<li><strong>Guion literario:</strong> frases que se leen bien en papel y se tropiezan en voz alta.</li>
<li><strong>Sin ensayo:</strong> la primera toma no es la buena. Haz al menos tres pasadas.</li>
</ul>
<h2 class="report-chapter">Checklist de montaje</h2>
<ul>
<li>Cristal a 45 grados y centrado con la lente.</li>
<li>Tablet en modo avión y con brillo controlado.</li>
<li>Texto espejado y fuente legible a un metro.</li>
<li>Guion con pausas marcadas y frases cortas.</li>
<li>Velocidad ajustada a una lectura natural.</li>
<li>Tres pasadas de ensayo y una toma de respaldo.</li>
</ul>
${doc(
  'https://www.descript.com/blog/article/teleprompter',
  'TP',
  'Guía de teleprompter',
  'Buenas prácticas de montaje, lectura y ritmo.'
)}
${doc(
  'https://www.youtube.com/@vistacreate',
  'REF',
  'Referencias de locución a cámara',
  'Ejemplos de lectura natural con y sin teleprompter.'
)}`,
    contentEn: `<h1>A DIY teleprompter: how to read on camera without sounding like a robot</h1>
<p class="lead"><em>The teleprompter has a newsroom reputation, but it works for any on-camera talk: tutorials, presentations, institutional messages. The DIY version costs less than it seems and forces something no equipment solves on its own: writing for the ear.</em></p>
${figure(
  '/images/behind-scenes/DSC_2994.webp',
  'Studio camera with teleprompter and operator',
  'A well-aligned teleprompter lets you look into the lens without losing the text. Photo: author’s archive'
)}
${stats([
  ['130–150', 'words per minute'],
  ['1', 'tablet or monitor'],
  ['50%', 'glass reflectivity'],
  ['3', 'rehearsal passes'],
])}
<h2 class="report-chapter">What you need</h2>
<p>The basic setup has four parts: a mount that holds the tablet in front of the camera, a semi-reflective glass or acrylic at 45 degrees, the camera behind the glass and a teleprompter app that mirrors the text. The glass reflects the screen and lets the camera image through, so the presenter looks into the lens while reading.</p>
<p>You can use a wooden frame or a 3D print. What matters is that the glass sits perpendicular to the camera axis and that no stray light enters between tablet and glass. Cardboard or black cloth around the edges improves contrast.</p>
<h2 class="report-chapter">The app and mirrored text</h2>
<p>Most apps can flip text horizontally and vertically. If they cannot, you can mirror the video in post, but that is more work. Adjust font size, line spacing and speed before recording; changing those parameters mid-take is noticeable.</p>
<p>Put the tablet in airplane mode and lower brightness if the reflection bothers you. A black background with white or amber text reduces visual fatigue and improves reading.</p>
${quote(
  'A teleprompter is not read: it is accompanied. If the text demands all your attention, the script is badly written for the format.',
  'Delivery rule'
)}
<h2 class="report-chapter">Writing for the ear</h2>
<p>A teleprompter script is not an essay. Use short sentences, one idea per line and words that can be pronounced without stumbling. Avoid parentheses, unexplained acronyms and long subordinate clauses. If a sentence cannot be said in one breath, cut it.</p>
<p>Mark pauses with slashes or blank lines and highlight words that need emphasis. Those marks are for you, not the viewer. The goal is for the text to disappear behind a clear idea.</p>
<h2 class="report-chapter">Rhythm and naturalness</h2>
<p>A comfortable pace for informational delivery is around 130 to 150 words per minute. Read faster and the viewer cannot process; read slower and the video drags. Set the scroll speed to your real pace, not the pace you think you should have.</p>
<p>To sound natural, do not read word by word: look at the block, memorize the idea and say the sentence in your own words if needed. The teleprompter is a safety net, not a straitjacket.</p>
<h2 class="report-chapter">Common mistakes</h2>
<ul>
<li><strong>Looking at the text, not the lens:</strong> your eyes move side to side. Keep your gaze at the center of the lens.</li>
<li><strong>Misaligned glass:</strong> text looks doubled or out of focus. Adjust angle and distance.</li>
<li><strong>Font too small:</strong> forces squinting. Increase size before lowering speed.</li>
<li><strong>Literary script:</strong> sentences that read well on paper but stumble out loud.</li>
<li><strong>No rehearsal:</strong> the first take is not the good one. Do at least three passes.</li>
</ul>
<h2 class="report-chapter">Setup checklist</h2>
<ul>
<li>Glass at 45 degrees and centered with the lens.</li>
<li>Tablet in airplane mode with controlled brightness.</li>
<li>Mirrored text and font legible at one meter.</li>
<li>Script with marked pauses and short sentences.</li>
<li>Speed adjusted to a natural read.</li>
<li>Three rehearsal passes and one backup take.</li>
</ul>
${doc(
  'https://www.descript.com/blog/article/teleprompter',
  'TP',
  'Teleprompter guide',
  'Best practices for setup, reading and rhythm.'
)}
${doc(
  'https://www.youtube.com/@vistacreate',
  'REF',
  'On-camera delivery references',
  'Examples of natural reading with and without a teleprompter.'
)}`,
  },
];
