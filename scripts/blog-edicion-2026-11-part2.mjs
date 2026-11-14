/**
 * Blog: 10 tecnicas de edicion de video (IDs 1450-1459). Parte 2: 1455-1459.
 * Serie editorial propia del autor (FreddyDev), sin fuente externa.
 */

const IMG = '/images/blog/2026-11/edicion';

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

const CAT_ES = 'Tecnología y Creación';
const CAT_EN = 'Technology & Creation';
const LOC = 'La Paz, Bolivia';

export const blogPart2 = [
  {
    id: '1455',
    slug: 'keyframes-easing-animacion-curvas-video',
    publishedAt: '2026-11-14T09:00:00-04:00',
    date: '2026-11-14',
    titleEs: 'Keyframes y easing: por qué tus animaciones se ven robóticas y cómo arreglarlo con las curvas',
    titleEn: 'Keyframes and easing: why your animations look robotic and how the curves fix it',
    excerptEs:
      'Un movimiento lineal entre dos keyframes delata al editor amateur en medio segundo. El easing —la aceleración y desaceleración de cada propiedad— es lo que separa el movimiento natural del robótico. Esta guía desarma el graph editor: curvas de posición, escala y opacidad, y cuándo exagerarlas.',
    excerptEn:
      'A linear movement between two keyframes betrays the amateur editor in half a second. Easing —the acceleration and deceleration of each property— is what separates natural from robotic motion. This guide takes apart the graph editor: position, scale and opacity curves, and when to exaggerate them.',
    readTimeEs: '10 min de lectura',
    readTimeEn: '10 min read',
    imageUrl: `${IMG}/keyframes-easing-animacion-curvas.jpg`,
    imageCaption: 'Graph editor con curva ease-in-out frente a un movimiento lineal. Imagen: archivo del autor',
    categoryEs: CAT_ES,
    categoryEn: CAT_EN,
    location: LOC,
    region: 'Bolivia',
    enableComments: true,
    featured: false,
    breaking: false,
    views: 1,
    contentEs: `<h1>Keyframes y easing: por qué tus animaciones se ven robóticas y cómo arreglarlo con las curvas</h1>
<p class="lead"><em>Casi toda animación casera comparte el mismo defecto: los valores van de A a B a velocidad constante, como un ascensor de feria. En el mundo físico nada se mueve así: todo arranca acelerando y termina frenando. El easing es la traducción de esa física a la timeline, y el graph editor —el editor de curvas que existe en After Effects, Resolve, Premiere y hasta en CSS— es el taller donde se practica.</em></p>
${figure(
  `${IMG}/keyframes-easing-animacion-curvas.jpg`,
  'Editor de curvas con curva ease-in-out marcada frente a un movimiento lineal comparado',
  'Cada propiedad con su curva: posición, escala y opacidad no comparten easing. Imagen: archivo del autor'
)}
<h2 class="report-chapter">El problema del lineal</h2>
<p>Un keyframe solo dice "en el frame 10 vale cero, en el frame 50 vale cien". La interpolación por defecto (lineal) reparte el cambio en partes iguales: el movimiento entra a velocidad máxima y sale a velocidad máxima, sin transición. El ojo humano está entrenado por la física para leer eso como falso. En interfaces se nota cuando un menú "salta"; en video se nota cuando un título aparece como si lo hubieran pegado con cinta.</p>
<p>El ease-in-out clásico (aceleración suave al entrar, desaceleración suave al salir) resuelve el 80% de los casos. Pero el detalle profesional está en no usar la misma curva para todo: la posición suele llevar un ease-out marcado (llega rápido y se asienta), la escala pide symmetría, y la opacidad tolera ser casi lineal porque el ojo no percibe su velocidad, solo su presencia.</p>
${stats([
  ['2', 'keyframes mínimos, pero el easing vive en la curva entre ellos'],
  ['3', 'propiedades comunes con curvas distintas: posición, escala, opacidad'],
  ['12-20', 'frames de entrada estándar para un título en pantalla'],
])}
<h2 class="report-chapter">Exagerar con intención: overshoot y anticipation</h2>
<p>El movimiento natural incluye imperfecciones útiles. El overshoot (sobrepasar el destino y volver) vende elasticidad: un logo que cae, rebasa su posición 5% y se asienta parece tener masa. La anticipation (moverse ligeramente en dirección contraria antes de arrancar) vende intención: un elemento que "toma impulso" antes de salir de cuadro. Ambas son palabras del léxico de la animación tradicional que funcionan igual en motion graphics de video editorial.</p>
<p>Mi regla en títulos de documental: entrada con anticipation sutil, lectura estable sin movimiento (el texto se lee, no baila), salida rápida con ease-in. El movimiento es el marco; la información, el cuadro.</p>
${quote(
  'El espectador no sabe leer curvas de bézier, pero sabe reconocer el peso de las cosas: el easing es física, no decoración.',
  'Criterio editorial'
)}
<h2 class="report-chapter">Anatomía del graph editor</h2>
<p>El graph editor muestra el valor de la propiedad en el tiempo. Los mangos de cada keyframe controlan la velocidad de entrada y salida; separarlos (curva más plana a la salida del primer keyframe) produce arranques suaves. Tres diagnósticos rápidos: picos angulosos en la curva = movimientos bruscos; mesetas planas largas = pausas muertas; ondas regulares = "wobble" de rebote mal calibrado. La curva ideal para la mayoría de los movimientos de cámara simulados es una S suave y asimétrica: entrada más lenta que la salida.</p>
${doc(
  '/blog/titulos-motion-graphics-tipografia-pantalla',
  '🎞️',
  'Títulos y motion graphics',
  'Las curvas del easing son la mitad; el diseño del título, la otra.'
)}
<h2 class="report-chapter">Rutina: las tres curvas de cada movimiento</h2>
<p>Para internalizar el hábito, cualquier animación que construyas debe pasar por esta lista: (1) ¿la posición tiene ease-out asimétrico?; (2) ¿la escala se mueve en proporción visible con la posición (parallax de escala)?; (3) ¿la opacidad no compite con el movimiento (fade más corto que el desplazamiento)? Cuando las tres responden bien, el movimiento se siente "caro" aunque sea gratis. Y ese es el secreto del oficio: el easing no cuesta dinero ni plugins, cuesta mirar la curva una vez más.</p>
<p>Guarda tus curvas favoritas como presets: la biblioteca de easings propia —tres o cuatro curvas de cabecera que aplicas con criterio— vale más que cualquier pack de transiciones comprado.</p>`,
    contentEn: `<h1>Keyframes and easing: why your animations look robotic and how the curves fix it</h1>
<p class="lead"><em>Almost every homemade animation shares the same flaw: values go from A to B at constant speed, like a fairground elevator. In the physical world nothing moves that way: everything starts by accelerating and ends by braking. Easing translates that physics to the timeline, and the graph editor —the curve editor found in After Effects, Resolve, Premiere and even CSS— is the workshop where it is practiced.</em></p>
${figure(
  `${IMG}/keyframes-easing-animacion-curvas.jpg`,
  'Curve editor with an ease-in-out curve marked against a compared linear motion',
  'Every property with its own curve: position, scale and opacity do not share easing. Image: author\u2019s archive'
)}
<h2 class="report-chapter">The linear problem</h2>
<p>A keyframe only says "at frame 10 the value is zero, at frame 50 it is one hundred". Default interpolation (linear) distributes the change evenly: the movement enters at top speed and exits at top speed, with no transition. The human eye, trained by physics, reads that as fake. In interfaces you notice it when a menu "jumps"; in video you notice it when a title appears as if taped on.</p>
<p>The classic ease-in-out (soft acceleration entering, soft deceleration exiting) solves 80% of cases. But the professional detail is not using the same curve for everything: position usually takes a pronounced ease-out (arrives fast and settles), scale asks for symmetry, and opacity tolerates near-linearity because the eye does not perceive its speed, only its presence.</p>
${stats([
  ['2', 'minimum keyframes, but easing lives on the curve between them'],
  ['3', 'common properties with different curves: position, scale, opacity'],
  ['12-20', 'standard entrance frames for an on-screen title'],
])}
<h2 class="report-chapter">Exaggerating on purpose: overshoot and anticipation</h2>
<p>Natural movement includes useful imperfections. Overshoot (passing the destination and returning) sells elasticity: a logo that falls, overshoots its position by 5% and settles seems to have mass. Anticipation (moving slightly opposite before starting) sells intention: an element that "takes a wind-up" before exiting frame. Both are words from traditional animation that work the same in editorial video motion graphics.</p>
<p>My rule for documentary titles: subtle anticipated entrance, stable reading without movement (text is read, not danced), fast ease-in exit. Movement is the frame; information, the picture.</p>
${quote(
  'The viewer cannot read bézier curves, but can recognize the weight of things: easing is physics, not decoration.',
  'Editorial criterion'
)}
<h2 class="report-chapter">Anatomy of the graph editor</h2>
<p>The graph editor shows the property value over time. Each keyframe\u2019s handles control entry and exit speed; separating them (a flatter curve leaving the first keyframe) produces soft starts. Three quick diagnoses: angular peaks on the curve = jerky movements; long flat plateaus = dead pauses; regular waves = badly calibrated bounce "wobble". The ideal curve for most simulated camera moves is a soft asymmetric S: slower entering than exiting.</p>
${doc(
  '/blog/titulos-motion-graphics-tipografia-pantalla',
  '🎞️',
  'Titles and motion graphics',
  'The easing curves are half; the title design, the other.'
)}
<h2 class="report-chapter">Routine: the three curves of every movement</h2>
<p>To internalize the habit, every animation you build must pass this list: (1) does position have an asymmetric ease-out?; (2) does scale move in visible proportion to position (scale parallax)?; (3) does opacity not compete with the movement (fade shorter than the displacement)? When all three answer well, the movement feels "expensive" even though it is free. And that is the craft\u2019s secret: easing costs no money or plugins, it costs looking at the curve one more time.</p>
<p>Save your favorite curves as presets: your own easing library —three or four house curves applied with judgment— is worth more than any purchased transition pack.</p>`,
  },
  {
    id: '1456',
    slug: 'speed-ramping-slow-motion-interpolacion-frames',
    publishedAt: '2026-11-14T11:30:00-04:00',
    date: '2026-11-14',
    titleEs: 'Speed ramping y cámara lenta: cómo cambiar la velocidad de un plano sin que se vea barato',
    titleEn: 'Speed ramping and slow motion: how to change a shot\u2019s speed without making it look cheap',
    excerptEs:
      'El cambio de velocidad es una de las técnicas más efectivas y más mal ejecutadas del montaje: un slow motion con frames duplicados tiembla, un ramp brusco corta la respiración. Esta guía explica los métodos de interpolación (optical flow, frame blending), cómo construir el ramp con el speed graph y cuándo la cámara lenta es narrativa y cuándo es disfraz.',
    excerptEn:
      'Speed changes are among editing\u2019s most effective and worst-executed techniques: slow motion with duplicated frames shudders, an abrupt ramp cuts the breath. This guide explains interpolation methods (optical flow, frame blending), how to build the ramp with the speed graph, and when slow motion is narrative and when it is a disguise.',
    readTimeEs: '10 min de lectura',
    readTimeEn: '10 min read',
    imageUrl: `${IMG}/speed-ramping-slow-motion-interpolacion.jpg`,
    imageCaption: 'Speed graph con transición 0.25x - 1.00x - 4.00x y métodos de interpolación. Imagen: archivo del autor',
    categoryEs: CAT_ES,
    categoryEn: CAT_EN,
    location: LOC,
    region: 'Bolivia',
    enableComments: true,
    featured: false,
    breaking: false,
    views: 1,
    contentEs: `<h1>Speed ramping y cámara lenta: cómo cambiar la velocidad de un plano sin que se vea barato</h1>
<p class="lead"><em>El slow motion es el efecto favorito de dos públicos opuestos: el espectador casual, que lo ama, y el editor veterano, que desconfía. La diferencia está en la ejecución. Una cámara lenta bien construida revela lo que el ojo no alcanzó a ver y reordena el tiempo dramático; una mal construida tiembla, jerguea y se ve como un filtro de celular. Esta guía recorre la física del re-timing y el oficio del speed ramp.</em></p>
${figure(
  `${IMG}/speed-ramping-slow-motion-interpolacion.jpg`,
  'Speed graph con rampa de velocidades 0.25x a 4.00x y lista de métodos de interpolación',
  'El ramp vende emoción: acelera la acción y frena el golpe. Imagen: archivo del autor'
)}
<h2 class="report-chapter">La física del re-timing</h2>
<p>Cambiar la velocidad de un clip obliga al software a inventar o descartar frames. A 30 fps, un clip reproducido a 50% necesita 60 frames por segundo: el editor debe crear la mitad. Los tres métodos clásicos: el frame blending (mezcla dos frames adyacentes: barato, produce un leve "barrido"), la interpolación óptica u optical flow (analiza el movimiento píxel por píxel y sintetiza frames intermedios: elegante, pero falla con movimiento complejo, agua o transparencias) y el nearest/duplicado (repite frames: el "efecto balado" que delata al amateur).</p>
<p>La regla de oro es elegir según el contenido: movimiento de cámara y personas en fondo neutro, optical flow; texturas densas como agua, humo o multitudes caóticas, frame blending; y si el material lo permite, la mejor solución es siempre la nativa: filmar a 60 o 120 fps y re-timinear sin inventar nada.</p>
${stats([
  ['2x', 'frames que exige un slow motion al 50%: la mitad debe inventarse'],
  ['60-120 fps', 'cadencia de captura recomendada para slow motion limpio'],
  ['3', 'métodos de interpolación: optical flow, frame blending, duplicado'],
])}
<h2 class="report-chapter">El speed ramp: velocidad con narrativa</h2>
<p>El speed ramping es el cambio de velocidad dentro del mismo plano, construido con el speed graph: el clip corre a 1x, frena a 0.25x en el momento clave y vuelve a acelerar a 2x al salir. La diferencia entre un ramp amateur y uno profesional está en la zona de transición: en el amateur, la velocidad salta de un valor a otro en un frame; en el profesional, la transición ocupa 6-12 frames con curva suave (sí, otra vez el easing), de modo que el cambio de ritmo se siente como una respiración y no como un tirón.</p>
<p>Los usos que mejor funcionan: en deportes y acción, el ramp frena el instante del impacto y acelera el resto para comprimir tiempo; en cocina y manualidades, acelera lo repetitivo y frena el gesto revelador; en narrativa, una desaceleración breve marca "mira esto" sin necesidad de inserto.</p>
${quote(
  'La cámara lenta no estira el tiempo: lo reordena. Si no cambia lo que el espectador entiende, es solo un filtro.',
  'Criterio editorial'
)}
<h2 class="report-chapter">Los defectos del optical flow y sus parches</h2>
<p>La interpolación óptica es espectacular hasta que falla: agua salpicando, tejidos en movimiento, caras girando rápido producen las famosas "jelly faces" y artefactos fantasma. Parches de oficio: renderizar el segmento con interpolación y revisarlo frame por frame (los defectos aparecen en frames aislados), recortar los frames dañados con un paste de frame vecino, o degradar la zona problemática a frame blending. En After Effects y Resolve, la máscara de zona permite mezclar métodos dentro del mismo plano: optical flow en el sujeto, blending en el fondo.</p>
${doc(
  '/blog/keyframes-easing-animacion-curvas-video',
  '⏱️',
  'Keyframes y easing',
  'El speed graph es un graph editor: las curvas mandan aquí también.'
)}
<h2 class="report-chapter">Checklist antes de rendir</h2>
<p>Antes de dar por bueno un re-timing: (1) ¿el motion blur se mantiene coherente (el slow motion exagera el blur si se genera mal)?; (2) ¿el audio del clip se re-sincronizó (los ramps rompen el sonido: lo habitual es cortar el audio original y sustituirlo con diseño sonoro o música)?; (3) ¿la velocidad final no supera el límite del material (más allá de 4x, los frames faltantes se notan)?; (4) ¿el ramp está justificado dramáticamente o es decoración? Cuatro respuestas afirmativas y el plano está listo para la timeline final.</p>
<p>La técnica, bien usada, es de las que más valor percibe un cliente en un reel de servicios, y de las que más se nota cuando se hace con el botón por defecto. Como todo en el oficio: la herramienta es la misma; la diferencia es el criterio.</p>`,
    contentEn: `<h1>Speed ramping and slow motion: how to change a shot\u2019s speed without making it look cheap</h1>
<p class="lead"><em>Slow motion is the favorite effect of two opposite audiences: the casual viewer, who loves it, and the veteran editor, who distrusts it. The difference lies in execution. A well-built slow motion reveals what the eye could not catch and reorders dramatic time; a badly built one shudders, jitters and looks like a phone filter. This guide covers the physics of re-timing and the craft of the speed ramp.</em></p>
${figure(
  `${IMG}/speed-ramping-slow-motion-interpolacion.jpg`,
  'Speed graph with a 0.25x to 4.00x speed ramp and a list of interpolation methods',
  'The ramp sells emotion: it accelerates the action and brakes the hit. Image: author\u2019s archive'
)}
<h2 class="report-chapter">The physics of re-timing</h2>
<p>Changing a clip\u2019s speed forces the software to invent or discard frames. At 30 fps, a clip played at 50% needs 60 frames per second: the editor must create half. The three classic methods: frame blending (blends two adjacent frames: cheap, produces a slight "smear"), optical flow interpolation (analyzes motion pixel by pixel and synthesizes in-between frames: elegant, but fails with complex motion, water or transparencies) and nearest/duplication (repeats frames: the "stepped" effect that betrays the amateur).</p>
<p>The golden rule is to choose by content: camera motion and people against neutral backgrounds, optical flow; dense textures like water, smoke or chaotic crowds, frame blending; and if the material allows it, the best solution is always native: shoot at 60 or 120 fps and re-time without inventing anything.</p>
${stats([
  ['2x', 'frames a 50% slow motion demands: half must be invented'],
  ['60-120 fps', 'recommended capture rate for clean slow motion'],
  ['3', 'interpolation methods: optical flow, frame blending, duplication'],
])}
<h2 class="report-chapter">The speed ramp: velocity with narrative</h2>
<p>Speed ramping is a speed change within the same shot, built with the speed graph: the clip runs at 1x, brakes to 0.25x at the key moment and accelerates back to 2x on the way out. The difference between an amateur and a professional ramp is the transition zone: in the amateur, speed jumps from one value to another in one frame; in the professional, the transition takes 6-12 frames with a soft curve (yes, easing again), so the rhythm change feels like a breath instead of a yank.</p>
<p>The uses that work best: in sports and action, the ramp brakes the impact instant and accelerates the rest to compress time; in cooking and crafts, it accelerates the repetitive and brakes the revealing gesture; in narrative, a brief deceleration marks "look at this" with no need for an insert.</p>
${quote(
  'Slow motion does not stretch time: it reorders it. If it does not change what the viewer understands, it is just a filter.',
  'Editorial criterion'
)}
<h2 class="report-chapter">Optical flow\u2019s flaws and their patches</h2>
<p>Optical interpolation is spectacular until it fails: splashing water, moving fabrics, fast-turning faces produce the famous "jelly faces" and ghost artifacts. Craft patches: render the segment with interpolation and review frame by frame (defects show on isolated frames), patch damaged frames with a neighboring frame, or downgrade the problem zone to frame blending. In After Effects and Resolve, zone masks allow mixing methods within the same shot: optical flow on the subject, blending on the background.</p>
${doc(
  '/blog/keyframes-easing-animacion-curvas-video',
  '⏱️',
  'Keyframes and easing',
  'The speed graph is a graph editor: curves rule here too.'
)}
<h2 class="report-chapter">Checklist before rendering</h2>
<p>Before calling a re-timing done: (1) is motion blur consistent (slow motion exaggerates blur when badly generated)?; (2) was the clip\u2019s audio re-synced (ramps break sound: the usual move is to cut the original audio and replace it with sound design or music)?; (3) does the final speed not exceed the material\u2019s limit (beyond 4x, missing frames show)?; (4) is the ramp dramatically justified or just decoration? Four yeses and the shot is ready for the final timeline.</p>
<p>Well used, this is one of the techniques clients perceive as most valuable in a services reel, and one of the most obvious when done with the default button. As with everything in the craft: the tool is the same; the difference is judgment.</p>`,
  },
  {
    id: '1457',
    slug: 'organizacion-proyecto-video-proxies-backup-321',
    publishedAt: '2026-11-14T13:00:00-04:00',
    date: '2026-11-14',
    titleEs: 'Organiza el proyecto antes de cortar: estructura de carpetas, proxies y la regla 3-2-1 que salva entregas',
    titleEn: 'Organize the project before cutting: folder structure, proxies and the 3-2-1 rule that saves deliveries',
    excerptEs:
      'Ningún editor pierde proyectos por falta de talento: los pierde por desorden. Estructura de carpetas numerada, proxies antes de cortar y respaldos 3-2-1 son la infraestructura invisible de toda entrega a tiempo. Esta guía propone un esqueleto de proyecto que sobrevive a discos llenos, cortes de luz y clientes que cambian el brief en la mitad del trabajo.',
    excerptEn:
      'No editor loses projects for lack of talent: they lose them to disorder. A numbered folder structure, proxies before cutting and 3-2-1 backups are the invisible infrastructure of every on-time delivery. This guide proposes a project skeleton that survives full disks, power cuts and clients who change the brief halfway through.',
    readTimeEs: '10 min de lectura',
    readTimeEn: '10 min read',
    imageUrl: `${IMG}/organizacion-proyecto-proxies-backup-321.jpg`,
    imageCaption: 'Estructura de carpetas numerada y esquema de proxies con respaldo 3-2-1. Imagen: archivo del autor',
    categoryEs: CAT_ES,
    categoryEn: CAT_EN,
    location: LOC,
    region: 'Bolivia',
    enableComments: true,
    featured: false,
    breaking: false,
    views: 1,
    contentEs: `<h1>Organiza el proyecto antes de cortar: estructura de carpetas, proxies y la regla 3-2-1 que salva entregas</h1>
<p class="lead"><em>La pregunta incómoda del oficio: ¿cuántas horas de tu vida has perdido buscando un plano "que estaba en alguna carpeta"? El desorden no se paga en molestias, se paga en entregas: el proyecto desorganizado es el que no llega a tiempo cuando el cliente pide un cambio la noche anterior. Esta guía compacta la infraestructura que aprendí a la fuerza en años de coberturas: una estructura que cabe en una plantilla y se copia a cada proyecto nuevo en treinta segundos.</em></p>
${figure(
  `${IMG}/organizacion-proyecto-proxies-backup-321.jpg`,
  'Estructura de carpetas numeradas del proyecto y panel con esquema de proxies y regla 3-2-1',
  'Un proyecto ordenado se entrega rápido; uno desordenado, nunca. Imagen: archivo del autor'
)}
<h2 class="report-chapter">El esqueleto de carpetas</h2>
<p>Mi estructura estándar, con prefijos numéricos para que el orden no dependa del explorador: <code>01_metraje/</code> (con subcarpetas por cámara y por día: <code>A_cam/</code>, <code>B_cam/</code>, <code>dron/</code>), <code>02_audio/</code>, <code>03_proyecto/</code> (los archivos del NLE, con versionado: <code>v01</code>, <code>v02</code>...), <code>04_proxies/</code>, <code>05_exports/</code> (con una subcarpeta por versión entregada) y <code>06_assets/</code> (música, logos, LUTs, tipografías). Los nombres de archivo nunca llevan espacios ni eñes: los acentos y espacios rompen rutas entre Windows y Mac, y con ellos, los proyectos.</p>
<p>La disciplina que sostiene la estructura: todo entra a su carpeta el día que llega, con nombre autodescriptivo (<code>2026-11-14_entrevista-sanjines_B-cam_003.MP4</code>). Renombrar metraje a mitad de proyecto rompe los vínculos del NLE: si hay que renombrar, se hace con el "relink" del editor, nunca a mano en el explorador.</p>
${stats([
  ['3-2-1', 'tres copias, dos medios distintos, una fuera del estudio'],
  ['30 s', 'lo que cuesta copiar la plantilla de proyecto a un trabajo nuevo'],
  ['1', 'carpeta de proxies: la diferencia entre editar fluido y pelear con el software'],
])}
<h2 class="report-chapter">Proxies: editar fluido con cualquier máquina</h2>
<p>El 4K 10-bit de cámaras modernas y drones juega en contra de la edición: las máquinas de rango medio se arrastran. La solución es el proxy: una copia liviana del metraje (960x540 o 1280x720, ProRes Proxy o H.264 ligero) que el NLE usa para editar y cambia automáticamente por el original al renderizar. La regla práctica: generar todos los proxies antes de armar la primera secuencia, no "cuando el programa empiece a trabarse", porque a esa altura ya se perdió el día.</p>
<p>En coberturas largas donde genero proxies en el mismo disco de trabajo, la relación original/proxy queda registrada en el proyecto; al trasladar el proyecto entre máquinas, la única carpeta que se lleva siempre es <code>04_proxies/</code> junto a <code>01_metraje/</code>, y el NLE relinkea sin drama. Un detalle que ahorra horas: al hacer proxy, conservar el nombre exacto del archivo original cambiando solo la extensión.</p>
${quote(
  'Tres copias, en dos medios distintos, con una fuera del estudio: el día que el disco principal muera, tendrás una mala tarde, no una pérdida.',
  'Regla 3-2-1 de respaldo'
)}
<h2 class="report-chapter">Respaldos y versionado: la regla 3-2-1</h2>
<p>El estándar de la industria traducido a la práctica de un editor independiente: tres copias del proyecto (la de trabajo, una en disco externo, una en la nube), en al menos dos medios distintos, con una copia fuera del lugar de trabajo. En Bolivia, donde los cortes de luz no avisan y los discos externos no son baratos, la copia en la nube nocturna (solo la carpeta <code>03_proyecto/</code> y <code>06_assets/</code>: los metrajes pesan demasiado) es el seguro mínimo.</p>
<p>El versionado del proyecto complementa el respaldo: guardar <code>v01</code>, <code>v02</code>... con incrementos al cierre de cada sesión de trabajo, y nunca sobreescribir la versión enviada al cliente: la versión entregada es sagrada porque es la que el cliente vio y comentó. Cuando pide "la anterior pero con el logo más grande", "la anterior" debe existir.</p>
${doc(
  '/blog/exportacion-codecs-bitrate-entrega-plataformas',
  '🗂️',
  'Exportación y entrega',
  'La última etapa del proyecto también merece estructura.'
)}
<h2 class="report-chapter">La plantilla que se hereda</h2>
<p>El paso final: convertir la estructura en plantilla. Una carpeta base vacía con el esqueleto y un documento de una página (dónde van las cosas, cómo se nombran, cuándo se hace proxy, qué se respalda) vive junto a tus herramientas; cada proyecto nuevo empieza copiándola. El dia que un colega o un editor asistente tome tu proyecto —y ese día llega—, la plantilla es la diferencia entre heredar un taller y heredar un vertedero.</p>
<p>El orden no es virtud moral: es infraestructura. Y la infraestructura invisible es la que decide si el día de la entrega el editor está creando o buscando archivos.</p>`,
    contentEn: `<h1>Organize the project before cutting: folder structure, proxies and the 3-2-1 rule that saves deliveries</h1>
<p class="lead"><em>The craft\u2019s uncomfortable question: how many hours of your life have you lost looking for a shot "that was in some folder"? Disorder is not paid in annoyances, it is paid in deliveries: the disorganized project is the one that misses the deadline when the client asks for a change the night before. This guide condenses the infrastructure I learned the hard way over years of coverage: a structure that fits in a template and is copied to every new project in thirty seconds.</em></p>
${figure(
  `${IMG}/organizacion-proyecto-proxies-backup-321.jpg`,
  'Numbered project folder structure and a panel with the proxy scheme and 3-2-1 rule',
  'An organized project delivers fast; a disorganized one, never. Image: author\u2019s archive'
)}
<h2 class="report-chapter">The folder skeleton</h2>
<p>My standard structure, with numeric prefixes so the order does not depend on the file browser: <code>01_metraje/</code> (with subfolders per camera and per day: <code>A_cam/</code>, <code>B_cam/</code>, <code>dron/</code>), <code>02_audio/</code>, <code>03_proyecto/</code> (the NLE files, versioned: <code>v01</code>, <code>v02</code>...), <code>04_proxies/</code>, <code>05_exports/</code> (one subfolder per delivered version) and <code>06_assets/</code> (music, logos, LUTs, fonts). File names never carry spaces or accents: spaces and diacritics break paths between Windows and Mac, and with them, projects.</p>
<p>The discipline that holds the structure: everything enters its folder the day it arrives, with a self-descriptive name (<code>2026-11-14_interview-sanjines_B-cam_003.MP4</code>). Renaming footage mid-project breaks the NLE\u2019s links: if renaming is needed, it is done with the editor\u2019s "relink", never by hand in the browser.</p>
${stats([
  ['3-2-1', 'three copies, two different media, one off-site'],
  ['30 s', 'what it costs to copy the project template to a new job'],
  ['1', 'proxy folder: the difference between fluid editing and fighting the software'],
])}
<h2 class="report-chapter">Proxies: fluid editing on any machine</h2>
<p>Modern cameras\u2019 and drones\u2019 4K 10-bit works against editing: mid-range machines crawl. The solution is the proxy: a lightweight copy of the footage (960x540 or 1280x720, ProRes Proxy or light H.264) that the NLE uses for editing and automatically swaps for the original at render time. The practical rule: generate all proxies before building the first sequence, not "when the program starts stuttering", because by then the day is already lost.</p>
<p>In long coverages where I generate proxies on the same working disk, the original/proxy relationship is registered in the project; when moving the project between machines, the only folders always carried are <code>04_proxies/</code> alongside <code>01_metraje/</code>, and the NLE relinks without drama. One detail that saves hours: when proxying, keep the original file\u2019s exact name changing only the extension.</p>
${quote(
  'Three copies, on two different media, one off-site: the day the main disk dies, you will have a bad afternoon, not a loss.',
  '3-2-1 backup rule'
)}
<h2 class="report-chapter">Backups and versioning: the 3-2-1 rule</h2>
<p>The industry standard translated to an independent editor\u2019s practice: three copies of the project (the working one, one on an external disk, one in the cloud), on at least two different media, with one copy off the workplace. In Bolivia, where power cuts give no warning and external disks are not cheap, the nightly cloud copy (only <code>03_proyecto/</code> and <code>06_assets/</code>: footage weighs too much) is the minimum insurance.</p>
<p>Project versioning complements backup: save <code>v01</code>, <code>v02</code>... with increments at the close of each working session, and never overwrite the version sent to the client: the delivered version is sacred because it is the one the client saw and commented on. When they ask for "the previous one but with a bigger logo", "the previous one" must exist.</p>
${doc(
  '/blog/exportacion-codecs-bitrate-entrega-plataformas',
  '🗂️',
  'Export and delivery',
  'The project\u2019s last stage deserves structure too.'
)}
<h2 class="report-chapter">The template that gets inherited</h2>
<p>The final step: turning the structure into a template. An empty base folder with the skeleton and a one-page document (where things go, how they are named, when proxying happens, what gets backed up) lives next to your tools; every new project starts by copying it. The day a colleague or assistant editor takes over your project —and that day comes—, the template is the difference between inheriting a workshop and inheriting a dump.</p>
<p>Order is not a moral virtue: it is infrastructure. And invisible infrastructure is what decides whether, on delivery day, the editor is creating or searching for files.</p>`,
  },
  {
    id: '1458',
    slug: 'titulos-motion-graphics-tipografia-en-movimiento',
    publishedAt: '2026-11-14T15:30:00-04:00',
    date: '2026-11-14',
    titleEs: 'Títulos y motion graphics: tipografía en movimiento que informa, no que decora',
    titleEn: 'Titles and motion graphics: typography in motion that informs, does not decorate',
    excerptEs:
      'Un título mal diseñado pierde al espectador en el tiempo que tarda en leerse. Reglas de tipografía en pantalla: máximo dos familias tipográficas, 12-20 frames de entrada con easing, cuatro segundos mínimos de lectura, contraste garantizado contra cualquier fondo. Y el principio de todos los motion graphics editoriales: el título informa, no decora.',
    excerptEn:
      'A badly designed title loses the viewer in the time it takes to be read. Rules of on-screen typography: maximum two type families, 12-20 frame entrance with easing, four second minimum reading time, guaranteed contrast against any background. And the principle of all editorial motion graphics: the title informs, does not decorate.',
    readTimeEs: '9 min de lectura',
    readTimeEn: '9 min read',
    imageUrl: `${IMG}/titulos-motion-graphics-tipografia-pantalla.jpg`,
    imageCaption: 'Marco de título seguro con jerarquía tipográfica: título, subtítulo y datos. Imagen: archivo del autor',
    categoryEs: CAT_ES,
    categoryEn: CAT_EN,
    location: LOC,
    region: 'Bolivia',
    enableComments: true,
    featured: false,
    breaking: false,
    views: 1,
    contentEs: `<h1>Títulos y motion graphics: tipografía en movimiento que informa, no que decora</h1>
<p class="lead"><em>El título es el único elemento del video que el espectador lee conscientemente, y por eso es el que más se nota cuando está mal. Un nombre mal elegido, una entrada que baila más de lo que informa o un texto sobre un fondo claro sin protección arruinan la percepción de todo el proyecto. Esta guía fija las reglas que uso en documentales y comerciales, donde el motion graphics trabaja para la información.</em></p>
${figure(
  `${IMG}/titulos-motion-graphics-tipografia-pantalla.jpg`,
  'Área de título seguro con jerarquía: título principal, subtítulo descriptivo y línea de datos',
  'El título informa, no decora: entra, se lee y sale. Imagen: archivo del autor'
)}
<h2 class="report-chapter">La jerarquía primero, la animación después</h2>
<p>Antes de animar nada, el título necesita jerarquía: qué es lo primero que se lee (el dato principal), qué es lo segundo (el contexto) y qué es lo accesorio (la línea de crédito o la fecha). En mi plantilla de documental son tres niveles: título en peso bold, subtítulo en regular y datos en mono o small caps. Con la jerarquía clara, la animación se limita a presentarla en orden: primero el dato, después el contexto. Animar los tres niveles a la vez es como gritar tres frases simultáneamente.</p>
<p>La regla tipográfica de base: máximo dos familias por proyecto (una para títulos, otra para datos y créditos), con pesos para crear contraste. En pantalla, las fuentes con demasiado carácter —scripts decorativas, condensadas extremas— pelean contra el fondo y envejecen rápido; las familias de trabajo neutras con buen tracking sobreviven a la moda.</p>
${stats([
  ['2', 'familias tipográficas máximas por proyecto'],
  ['4 s', 'tiempo mínimo en pantalla para un título que se debe leer'],
  ['12-20', 'frames de entrada estándar con easing suave'],
])}
<h2 class="report-chapter">Entradas, salidas y el ritmo de la lectura</h2>
<p>La entrada estándar: 12-20 frames con ease-out (el texto llega y se asienta), desplazamiento corto (no más de un cuarto del ancho del texto) o un fade con leve subida de posición. La salida: más rápida que la entrada, 8-12 frames. El tiempo total en pantalla se calcula por lectura, no por diseño: un título de tres palabras necesita unos tres segundos para lectoras promedio; con cinco o más palabras, cuatro segundos o más. Si el título compite con el audio de una frase importante, se extiende o se repite en la salida de la escena.</p>
<p>El detalle que distingue: los títulos persistentes (lower thirds) nunca desaparecen del todo entre apariciones si el personaje sigue en pantalla; se reducen a su línea de datos. Y los títulos nunca se superponen a rostros ni a zonas de acción: el marco de título seguro existe porque los bordes del encuadre son territorio del movimiento, no de la información.</p>
${quote(
  'Si un título obliga a pausar el video para leerse, no es un título: es una tarea.',
  'Criterio editorial'
)}
<h2 class="report-chapter">Contraste y protección del texto</h2>
<p>El texto sobre video vive en el entorno más hostigoso posible: fondos que cambian de luminancia frame a frame. Protecciones de oficio, de más discreta a más visible: sombra proyectada suave (con blur del 30-50% del tamaño de la letra), una barra o degradado detrás del texto en fondos claros, y el blindaje completo para documental: una franja de color sólido con el texto encima. La barra no es una concesión estética: es la diferencia entre legible en un celular bajo el sol y legible solo en estudio.</p>
${doc(
  '/blog/keyframes-easing-animacion-curvas-video',
  '🔤',
  'Keyframes y easing',
  'La animación del título debe obedecer a la lectura, nunca al revés.'
)}
<h2 class="report-chapter">Los errores que delatan</h2>
<p>Lista de delaciones frecuentes: títulos centrados que coinciden con caras en pantalla (se mueven de lado, no se pelean con el sujeto); animaciones de "typewriter" en textos largos (sirven para dos palabras, no para frases); kerning automático sin revisar en los tamaños grandes (los pares problemáticos se ven en 80 px); y el clásico latín de relleno que llega a la entrega final porque nadie reemplazó el placeholder. El checklist final de títulos se hace siempre a resolución completa y en el dispositivo de destino.</p>
<p>El motion graphics editorial se mide por una sola variable: ¿el espectador obtuvo la información sin esfuerzo? Si sí, nadie recordará el diseño; si no, nadie olvidará el error. Esa es la naturaleza del trabajo bien hecho en esta disciplina: invisible, eficiente y sin segundos perdidos.</p>`,
    contentEn: `<h1>Titles and motion graphics: typography in motion that informs, does not decorate</h1>
<p class="lead"><em>The title is the only element of the video the viewer consciously reads, and therefore the one most noticed when wrong. A badly chosen font, an entrance that dances more than it informs, or text over a light background without protection ruin the perception of the whole project. This guide sets the rules I use in documentaries and commercials, where motion graphics works for information.</em></p>
${figure(
  `${IMG}/titulos-motion-graphics-tipografia-pantalla.jpg`,
  'Title-safe area with hierarchy: main title, descriptive subtitle and data line',
  'The title informs, does not decorate: it enters, is read and exits. Image: author\u2019s archive'
)}
<h2 class="report-chapter">Hierarchy first, animation later</h2>
<p>Before animating anything, the title needs hierarchy: what is read first (the main datum), second (context) and accessory (credit line or date). In my documentary template there are three levels: title in bold weight, subtitle in regular, data in mono or small caps. With clear hierarchy, animation is limited to presenting it in order: datum first, context after. Animating all three levels at once is like shouting three sentences simultaneously.</p>
<p>The base typographic rule: maximum two families per project (one for titles, another for data and credits), with weights creating contrast. On screen, fonts with too much character —decorative scripts, extreme condensed— fight the background and age fast; neutral working families with good tracking survive fashion.</p>
${stats([
  ['2', 'maximum type families per project'],
  ['4 s', 'minimum on-screen time for a title that must be read'],
  ['12-20', 'standard entrance frames with soft easing'],
])}
<h2 class="report-chapter">Entrances, exits and the rhythm of reading</h2>
<p>The standard entrance: 12-20 frames with ease-out (text arrives and settles), short displacement (no more than a quarter of the text width) or a fade with a slight upward position shift. The exit: faster than the entrance, 8-12 frames. Total screen time is calculated by reading, not by design: a three-word title needs about three seconds for average readers; with five or more words, four seconds or more. If the title competes with the audio of an important line, it extends or repeats at the scene\u2019s exit.</p>
<p>The distinguishing detail: persistent titles (lower thirds) never fully disappear between appearances if the person is still on screen; they reduce to their data line. And titles never overlap faces or action zones: the title-safe frame exists because frame edges are movement territory, not information territory.</p>
${quote(
  'If a title forces the viewer to pause the video to be read, it is not a title: it is homework.',
  'Editorial criterion'
)}
<h2 class="report-chapter">Contrast and text protection</h2>
<p>Text over video lives in the most hostile environment possible: backgrounds changing luminance frame by frame. Craft protections, from most discreet to most visible: a soft drop shadow (blur 30-50% of letter size), a bar or gradient behind text on light backgrounds, and full armor for documentary: a solid color strip with text on top. The bar is not an aesthetic concession: it is the difference between legible on a phone under the sun and legible only in a studio.</p>
${doc(
  '/blog/keyframes-easing-animacion-curvas-video',
  '🔤',
  'Keyframes and easing',
  'Title animation must obey reading, never the other way around.'
)}
<h2 class="report-chapter">The mistakes that betray</h2>
<p>A list of frequent betrayals: centered titles coinciding with faces on screen (move them aside, do not fight the subject); "typewriter" animations on long texts (they serve two words, not sentences); unreviewed auto-kerning at large sizes (problematic pairs show at 80 px); and the classic filler Latin that reaches final delivery because nobody replaced the placeholder. The final title checklist is always done at full resolution and on the target device.</p>
<p>Editorial motion graphics is measured by a single variable: did the viewer get the information without effort? If yes, nobody will remember the design; if not, nobody will forget the mistake. That is the nature of well-done work in this discipline: invisible, efficient and with no seconds wasted.</p>`,
  },
  {
    id: '1459',
    slug: 'exportacion-codecs-bitrate-entrega-plataformas',
    publishedAt: '2026-11-14T17:00:00-04:00',
    date: '2026-11-14',
    titleEs: 'Exportar bien: codecs, bitrate y recetas de entrega para que lo que editaste sea lo que se ve',
    titleEn: 'Export right: codecs, bitrate and delivery recipes so what you edited is what gets seen',
    excerptEs:
      'Toda la edición, el color y el audio se comprimen en un último clic, y ese clic decide si el trabajo llega como se construyó. Esta guía ordena la exportación: H.264 vs H.265, bitrate por plataforma (12 Mb/s para YouTube 1080p, 8 para Instagram, 50-100 para máster), VBR de dos pasadas, audio AAC a -14 LUFS y la checklist final anti-sorpresa.',
    excerptEn:
      'All the editing, color and audio compress into one last click, and that click decides whether the work arrives as it was built. This guide organizes export: H.264 vs H.265, bitrate per platform (12 Mb/s for YouTube 1080p, 8 for Instagram, 50-100 for master), two-pass VBR, AAC audio at -14 LUFS and the final anti-surprise checklist.',
    readTimeEs: '11 min de lectura',
    readTimeEn: '11 min read',
    imageUrl: `${IMG}/exportacion-codecs-bitrate-entrega-plataformas.jpg`,
    imageCaption: 'Barras de bitrate por plataforma y receta estándar de exportación web. Imagen: archivo del autor',
    categoryEs: CAT_ES,
    categoryEn: CAT_EN,
    location: LOC,
    region: 'Bolivia',
    enableComments: true,
    featured: false,
    breaking: false,
    views: 1,
    contentEs: `<h1>Exportar bien: codecs, bitrate y recetas de entrega para que lo que editaste sea lo que se ve</h1>
<p class="lead"><em>La exportación es la última decisión creativa del proyecto y la que casi nadie revisa: se elige un preset, se rinde y se reza. El problema es que la plataforma final recomprime tu archivo con sus propias reglas, y si tu master no está bien construido, la doble compresión degrada exactamente lo que trabajaste: el color fino, las sombras, la voz. Esta guía convierte la exportación en un procedimiento con recetas.</em></p>
${figure(
  `${IMG}/exportacion-codecs-bitrate-entrega-plataformas.jpg`,
  'Comparativa de bitrate por plataforma y panel con la receta estándar de exportación web',
  'La exportación no es un botón final: es la última decisión creativa. Imagen: archivo del autor'
)}
<h2 class="report-chapter">Codec: H.264, H.265 y cuándo importa la diferencia</h2>
<p>Para la web, el estándar sigue siendo H.264: compatibilidad universal, calidad predecible y hardware de decodificación en cualquier dispositivo. El H.265/HEVC comprime mejor (misma calidad a la mitad del bitrate) y tiene sentido para másters de archivo y para entregas 4K/HDR; su riesgo es la compatibilidad en navegadores y dispositivos antiguos, y en algunos softwares de pago por licencia. La regla práctica de cabina: entrega web en H.264, máster y archivo en la mejor calidad disponible (ProRes 422 o H.265 alto bitrate), y pregúntale al cliente por qué reproductor va a ver el video si hay duda.</p>
<p>Detalle que importa: la resolución y la cadencia se exportan 1:1 con el proyecto. Reescalar en la exportación (renderizar un proyecto de 1080p a 720p con el escalador del encoder) es la receta del aliasing; si se necesita otra resolución, se reencuadra en el timeline o se re-escala en dos pasos con un scaler de calidad.</p>
${stats([
  ['12 Mb/s', 'bitrate de video recomendado para YouTube 1080p30'],
  ['8 Mb/s', 'bitrate orientativo para Instagram feed 1080p'],
  ['50-100 Mb/s', 'rango de máster local 1080p para re-comprimir después'],
])}
<h2 class="report-chapter">Bitrate: el presupuesto de calidad por segundo</h2>
<p>El bitrate es cuántos bits por segundo recibe el decodificador para dibujar tu video: muy bajo, aparecen los bloques en movimiento; muy alto, el archivo crece sin ganancia visible. Para H.264 a 1080p30, los valores de cabecera: 12 Mb/s para YouTube (que recomprime a su estándar), 8 Mb/s para Instagram feed, 6 Mb/s para web general, y 50-100 Mb/s para el máster local que se guardará para re-entregas. En VBR de dos pasadas, el encoder analiza primero la complejidad del material y distribuye el presupuesto donde hace falta: es siempre preferible a CBR para el mismo peso de archivo.</p>
<p>El truco del oficio es entregarle a la plataforma mejor de lo que ella entrega: si YouTube recomprime a ~8 Mb/s, un master de 12-16 Mb/s con más detalle del que la plataforma guardará le da a su compresor margen para trabajar sin degradar; entregar exactamente el bitrate final equivale a dejar que otra persona edite tu color.</p>
${quote(
  'La exportación no es un botón final: es la última decisión creativa, y la única que el espectador vive completa.',
  'Criterio editorial'
)}
<h2 class="report-chapter">Audio y la receta estándar web</h2>
<p>El audio se entrega en AAC 320 kb/s (o 256 como mínimo) con el loudness calibrado a -14 LUFS y techo de -1 dBTP, como cubrimos en la guía de mezcla. La receta estándar de cabina para entrega web queda así: H.264, VBR 2 pasadas, bitrate según plataforma, keyframes automáticos o cada 2 segundos, audio AAC 320 kb/s, resolución nativa del proyecto, sin LUT de monitor activado en el render (error clásico: entregar con el LUT de visualización "quemado" dos veces).</p>
${doc(
  '/blog/audio-mezcla-eq-compresion-loudness-video',
  '📦',
  'Mezcla y loudness',
  'El -14 LUFS del audio es la mitad del checklist de entrega.'
)}
<h2 class="report-chapter">La checklist anti-sorpresa</h2>
<p>Antes de soltar el archivo al mundo: (1) revisar el primero, el medio y el último segundo del archivo exportado, frame a frame, buscando artefactos y desincronía de audio; (2) verificar el tamaño y la duración contra lo esperado (un video de 5 minutos a 12 Mb/s debe pesar ~450 MB; un número raro revela un ajuste perdido); (3) escuchar los primeros 30 segundos sin mirar la pantalla: si el audio falla, la imagen ya no importa; (4) confirmar que el archivo se llama como se entrega, no <code>render_final_v7_FINAL_bueno.mp4</code>; y (5) guardar el máster y la configuración de exportación con el proyecto, porque la re-entrega más cara es la que se re-construye desde cero.</p>
<p>Con esas recetas, el día que el cliente diga "se ve igual de bien que en tu computadora", sabrás que el trabajo terminó donde debía: intacto.</p>`,
    contentEn: `<h1>Export right: codecs, bitrate and delivery recipes so what you edited is what gets seen</h1>
<p class="lead"><em>Export is the project\u2019s last creative decision and the one almost nobody reviews: a preset is chosen, it renders and one prays. The problem is that the final platform recompresses your file under its own rules, and if your master is not well built, double compression degrades exactly what you worked on: fine color, shadows, voice. This guide turns export into a procedure with recipes.</em></p>
${figure(
  `${IMG}/exportacion-codecs-bitrate-entrega-plataformas.jpg`,
  'Bitrate comparison per platform and a panel with the standard web export recipe',
  'Export is not a final button: it is the last creative decision. Image: author\u2019s archive'
)}
<h2 class="report-chapter">Codec: H.264, H.265 and when the difference matters</h2>
<p>For the web, the standard is still H.264: universal compatibility, predictable quality and decoding hardware on any device. H.265/HEVC compresses better (same quality at half the bitrate) and makes sense for archive masters and 4K/HDR deliveries; its risk is compatibility on browsers and older devices, plus licensing costs in some software. The practical booth rule: web delivery in H.264, master and archive in the best quality available (ProRes 422 or high-bitrate H.265), and ask the client which player they will use if in doubt.</p>
<p>A detail that matters: resolution and frame rate export 1:1 with the project. Rescaling at export (rendering a 1080p project to 720p with the encoder\u2019s scaler) is the recipe for aliasing; if another resolution is needed, reframe on the timeline or rescale in two passes with a quality scaler.</p>
${stats([
  ['12 Mb/s', 'recommended video bitrate for YouTube 1080p30'],
  ['8 Mb/s', 'guideline bitrate for Instagram feed 1080p'],
  ['50-100 Mb/s', 'local 1080p master range for later re-compression'],
])}
<h2 class="report-chapter">Bitrate: the per-second quality budget</h2>
<p>Bitrate is how many bits per second the decoder receives to draw your video: too low, blocks appear in motion; too high, the file grows with no visible gain. For H.264 at 1080p30, the house values: 12 Mb/s for YouTube (which recompresses to its standard), 8 Mb/s for Instagram feed, 6 Mb/s for general web, and 50-100 Mb/s for the local master kept for re-deliveries. In two-pass VBR, the encoder first analyzes the material\u2019s complexity and distributes the budget where needed: always preferable to CBR for the same file weight.</p>
<p>The craft\u2019s trick is to deliver to the platform better than what it delivers: if YouTube recompresses to ~8 Mb/s, a 12-16 Mb/s master with more detail than the platform will keep gives its compressor room to work without degrading; delivering exactly the final bitrate equals letting someone else edit your color.</p>
${quote(
  'Export is not a final button: it is the last creative decision, and the only one the viewer experiences complete.',
  'Editorial criterion'
)}
<h2 class="report-chapter">Audio and the standard web recipe</h2>
<p>Audio is delivered in AAC 320 kb/s (or 256 minimum) with loudness calibrated to -14 LUFS and a -1 dBTP ceiling, as covered in the mixing guide. The standard booth recipe for web delivery goes: H.264, 2-pass VBR, bitrate per platform, automatic keyframes or every 2 seconds, AAC 320 kb/s audio, native project resolution, no monitor LUT active on the render (classic mistake: delivering with the display LUT "burned in" twice).</p>
${doc(
  '/blog/audio-mezcla-eq-compresion-loudness-video',
  '📦',
  'Mix and loudness',
  'The audio\u2019s -14 LUFS is half the delivery checklist.'
)}
<h2 class="report-chapter">The anti-surprise checklist</h2>
<p>Before releasing the file to the world: (1) review the first, middle and last second of the exported file, frame by frame, looking for artifacts and audio desync; (2) check size and duration against expectations (a 5-minute video at 12 Mb/s should weigh ~450 MB; an odd number reveals a lost setting); (3) listen to the first 30 seconds without watching the screen: if audio fails, the picture no longer matters; (4) confirm the file is named as it is delivered, not <code>render_final_v7_FINAL_bueno.mp4</code>; and (5) save the master and the export settings with the project, because the most expensive re-delivery is the one rebuilt from scratch.</p>
<p>With these recipes, the day the client says "it looks as good as on your computer", you will know the work ended where it should: intact.</p>`,
  },
];
