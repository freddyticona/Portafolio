/**
 * Blog: 10 tecnicas de edicion de video (IDs 1450-1459). Parte 1: 1450-1454.
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

export const blogPart1 = [
  {
    id: '1450',
    slug: 'corte-ritmo-video-tecnica-narrativa',
    publishedAt: '2026-11-13T06:00:00-04:00',
    date: '2026-11-13',
    titleEs: 'El corte como decisión narrativa: cómo controlar el ritmo de tu edición sin reloj',
    titleEn: 'The cut as a narrative decision: how to control your edit\u2019s rhythm without a stopwatch',
    excerptEs:
      'El corte no es un empalme técnico: es la unidad mínima de significado del montaje. Esta guía reparte el tiempo de los planos en función de la emoción —acción, diálogo, contemplación— y te da criterios concretos para decidir cuándo cortar y cuándo resistirte.',
    excerptEn:
      'A cut is not a technical splice: it is the smallest unit of meaning in editing. This guide distributes shot lengths according to emotion —action, dialogue, contemplation— and gives you concrete criteria for deciding when to cut and when to hold.',
    readTimeEs: '11 min de lectura',
    readTimeEn: '11 min read',
    imageUrl: `${IMG}/tecnicas-corte-ritmo.jpg`,
    imageCaption: 'El ritmo de una edición se lee en la duración de sus planos. Imagen: archivo del autor',
    categoryEs: CAT_ES,
    categoryEn: CAT_EN,
    location: LOC,
    region: 'Bolivia',
    enableComments: true,
    featured: false,
    breaking: false,
    views: 1,
    contentEs: `<h1>El corte como decisión narrativa: cómo controlar el ritmo de tu edición sin reloj</h1>
<p class="lead"><em>La pregunta que define una edición no es "¿dónde corta el software?" sino "¿qué le pasa al espectador en este segundo?". El corte es la herramienta más barata y más poderosa del montaje: no cuesta nada, pero decide si tu secuencia respira o se ahoga. Esta guía ordena los criterios que uso para repartir la duración de los planos según la emoción que busco, con ejercicios para entrenar el ojo.</em></p>
${figure(
  `${IMG}/tecnicas-corte-ritmo.jpg`,
  'Timeline de edición con cortes marcados y comparación de duración de dos planos',
  'La duración de cada plano es una decisión emocional antes que técnica. Imagen: archivo del autor'
)}
<h2 class="report-chapter">El corte motiva: la regla de la causa</h2>
<p>Antes de preguntarte cuánto dura un plano, pregúntate por qué se corta. Un corte bien motivado ocurre cuando algo dentro del plano termina: una mirada se completa, una mano llega al objeto, una frase cierra su idea. El espectador procesa el corte sin notarlo porque su atención ya estaba en movimiento. El corte mal motivado, en cambio, corta la atención a mitad del gesto y produce esa sensación vaga de "algo tropezó".</p>
<p>En la práctica, edito con el playhead detenido un segundo antes de cada punto de corte candidato y me pregunto: si corto aquí, ¿qué pierde el espectador? Si la respuesta es "nada", el corte está motivado. Si la respuesta es "la reacción del personaje", el corte debe esperar. Ese micro-test evita el 80% de los cortes prematuros.</p>
${stats([
  ['1-2 s', 'plano de detalle en secuencia rápida'],
  ['3-4 s', 'plano medio de diálogo estándar'],
  ['5-8 s', 'plano general para establecer espacio'],
  ['+10 s', 'plano contemplativo o de montaña rusa emocional'],
])}
<h2 class="report-chapter">El ritmo tiene capas, no un solo número</h2>
<p>El error más común del editor principiante es pensar el ritmo como un tempo constante. Un buen montaje funciona como la música: alterna frases largas y cortas. En una secuencia de acción de 90 segundos, tengo tres capas de ritmo: la macro (la secuencia completa sube en tensión hasta un pico), la media (cada "frase" de planos tiene su pequeño arco) y la micro (cada corte responde al plano anterior). Si las tres capas suben siempre, el espectador se anestesia: la escalada constante es lo mismo que no haber escalada.</p>
<p>La técnica que más me sirve es la del "acelerón de reacción": en el pico de acción, corto plano y contraplano en tiempos casi iguales y breves; en el instante posterior al golpe, dejo un plano más largo, casi inmóvil, para que el impacto asiente. La calma después del pico es la que vende el pico.</p>
${quote(
  'Cuando dudas entre dos duraciones para un plano, elige la más corta en la acción y la más larga en la emoción.',
  'Regla práctica de cabecera'
)}
<h2 class="report-chapter">Diálogo: cortar con la respiración</h2>
<p>En el diálogo, el corte tiene un aliado invisible: la respiración. Cada vez que un personaje termina una frase, hay un microdescanso natural donde el corte no duele. Editar conversaciones sin respetar ese ciclo produce escenas de teleprompter. Mi flujo: coloco primero los cortes de la pista de audio en las respiraciones, y después ajusto los cortes de video a esos puntos con J-cut o L-cut, que veremos en su propio artículo de esta serie.</p>
<p>Otro criterio útil en el diálogo es el plano de reacción. El instinto inicial del principiante es cortar siempre al que habla; el espectador, sin embargo, lee la escena en el que escucha. Sostener el plano del oyente dos beats extra suele mejorar la escena sin tocar una sola línea de audio.</p>
${doc(
  '/blog/j-cut-l-cut-sonido-cruza-corte',
  '✂️',
  'J-cut y L-cut: el audio que cruza el corte',
  'La técnica de continuidad sonora que suaviza cualquier cambio de plano.'
)}
<h2 class="report-chapter">El plano largo no es lento</h2>
<p>Existe un prejuicio moderno contra los planos largos, heredado del video corto y del scroll. Pero el plano largo sostenido —un rostro procesando una noticia, un paisaje que cambia de luz— es la única herramienta que le da al espectador tiempo de sentir. En mis documentales, los planos que la gente recuerda nunca duran menos de ocho segundos. El truco: dentro del plano largo, algo debe cambiar (una gota, una sombra, un parpadeo) para que la atención tenga a qué asirse.</p>
<h2 class="report-chapter">Ejercicio de entrenamiento: re-corte ciego</h2>
<p>Toma una escena terminada tuya de 60 segundos y reconstrúyela desde cero sin ver la versión anterior, con la regla de que cada plano debe durar al menos 20% más o 20% menos que en la original. Compara ambas a pantalla partida. No se trata de que una gane: se trata de que veas, en números concretos, cómo tu instinto de ritmo tiene patrones (cortas siempre tarde, o siempre pronto). Una vez identificado el patrón, puedes corregirlo deliberadamente en cada nuevo proyecto.</p>
<p>El ritmo es la técnica más barata de pulir porque no requiere plugins ni render: solo decisiones. Y es la que más distingue a un editor de un operador de timeline.</p>`,
    contentEn: `<h1>The cut as a narrative decision: how to control your edit\u2019s rhythm without a stopwatch</h1>
<p class="lead"><em>The question that defines an edit is not "where does the software cut?" but "what happens to the viewer in this second?". The cut is the cheapest and most powerful editing tool: it costs nothing, but it decides whether your sequence breathes or drowns. This guide organizes the criteria I use to distribute shot length according to the emotion I want, with exercises to train the eye.</em></p>
${figure(
  `${IMG}/tecnicas-corte-ritmo.jpg`,
  'Editing timeline with marked cuts and a duration comparison of two shots',
  'Every shot length is an emotional decision before a technical one. Image: author\u2019s archive'
)}
<h2 class="report-chapter">The motivated cut: the rule of cause</h2>
<p>Before asking how long a shot lasts, ask why it cuts. A well-motivated cut happens when something inside the shot finishes: a glance completes itself, a hand reaches the object, a sentence closes its idea. The viewer processes the cut without noticing because their attention was already moving. The poorly motivated cut interrupts attention mid-gesture and produces that vague feeling of "something stumbled".</p>
<p>In practice, I park the playhead one second before each candidate cut and ask: if I cut here, what does the viewer lose? If the answer is "nothing", the cut is motivated. If the answer is "the character\u2019s reaction", the cut must wait. That micro-test avoids 80% of premature cuts.</p>
${stats([
  ['1-2 s', 'detail shot in a fast sequence'],
  ['3-4 s', 'standard medium dialogue shot'],
  ['5-8 s', 'wide shot to establish space'],
  ['+10 s', 'contemplative or emotional rollercoaster shot'],
])}
<h2 class="report-chapter">Rhythm has layers, not a single number</h2>
<p>The most common beginner mistake is thinking of rhythm as a constant tempo. A good edit works like music: it alternates long and short phrases. In a 90-second action sequence, I manage three rhythm layers: macro (the whole sequence builds tension to a peak), medium (each "phrase" of shots has its own small arc) and micro (every cut answers the previous shot). If all three layers always rise, the viewer goes numb: constant escalation is the same as no escalation.</p>
<p>The technique that helps me most is the "reaction brake": at the action peak, I cut shot and reverse at almost equal, brief lengths; right after the hit, I hold a longer, nearly still shot so the impact settles. The calm after the peak is what sells the peak.</p>
${quote(
  'When in doubt between two durations for a shot, choose the shorter one in action and the longer one in emotion.',
  'Practical house rule'
)}
<h2 class="report-chapter">Dialogue: cut with the breath</h2>
<p>In dialogue, the cut has an invisible ally: breathing. Every time a character finishes a line, there is a natural micro-pause where the cut does not hurt. Editing conversations without respecting that cycle produces teleprompter scenes. My flow: I first place audio-track cuts at the breaths, then align video cuts to those points with J-cuts or L-cuts, covered in their own article in this series.</p>
<p>Another useful dialogue criterion is the reaction shot. The beginner\u2019s instinct is to always cut to the speaker; the viewer, however, reads the scene in the one who listens. Holding the listener\u2019s shot two extra beats usually improves the scene without touching a single audio line.</p>
${doc(
  '/blog/j-cut-l-cut-sonido-cruza-corte',
  '✂️',
  'J-cuts and L-cuts: the audio that crosses the cut',
  'The sound continuity technique that smooths any shot change.'
)}
<h2 class="report-chapter">The long take is not slow</h2>
<p>There is a modern prejudice against long shots, inherited from short-video feeds and scrolling. But the held long take —a face processing news, a landscape changing light— is the only tool that gives the viewer time to feel. In my documentaries, the shots people remember never last less than eight seconds. The trick: inside the long shot, something must change (a drop, a shadow, a blink) so attention has something to hold onto.</p>
<h2 class="report-chapter">Training exercise: blind re-cut</h2>
<p>Take a finished 60-second scene of yours and rebuild it from scratch without watching the old version, with the rule that every shot must last at least 20% more or 20% less than in the original. Compare both side by side. It is not about one winning: it is about seeing, in concrete numbers, how your rhythm instinct has patterns (you always cut late, or always early). Once identified, you can correct the pattern deliberately in every new project.</p>
<p>Rhythm is the cheapest technique to polish because it requires no plugins or rendering: only decisions. And it is what most distinguishes an editor from a timeline operator.</p>`,
  },
  {
    id: '1451',
    slug: 'montaje-continuo-eje-accion-180-grados',
    publishedAt: '2026-11-13T08:30:00-04:00',
    date: '2026-11-13',
    titleEs: 'El eje de acción y los 180 grados: la regla de continuidad que tu espectador siente pero no ve',
    titleEn: 'The axis of action and 180 degrees: the continuity rule your viewer feels but never sees',
    excerptEs:
      'Cruzar el eje de acción es el error invisible más caro del montaje: los personajes cambian de lado en pantalla y el espectador pierde el mapa espacial. Esta guía explica la regla de los 180 grados, cuándo conviene cruzar el eje de forma deliberada y cómo salvar tomas que ya lo cruzaron.',
    excerptEn:
      'Crossing the axis of action is editing\u2019s most expensive invisible mistake: characters flip sides on screen and the viewer loses the spatial map. This guide explains the 180-degree rule, when crossing the line deliberately helps, and how to rescue shots that already crossed it.',
    readTimeEs: '10 min de lectura',
    readTimeEn: '10 min read',
    imageUrl: `${IMG}/montaje-continuo-eje-accion-180.jpg`,
    imageCaption: 'Esquema del eje de acción: todas las cámaras de un mismo lado conservan la geografía. Imagen: archivo del autor',
    categoryEs: CAT_ES,
    categoryEn: CAT_EN,
    location: LOC,
    region: 'Bolivia',
    enableComments: true,
    featured: false,
    breaking: false,
    views: 1,
    contentEs: `<h1>El eje de acción y los 180 grados: la regla de continuidad que tu espectador siente pero no ve</h1>
<p class="lead"><em>Nadie sale de una sala de cine quejándose de que cruzaste el eje de acción. Pero todos la salen desorientados si lo hiciste. La regla de los 180 grados es el contrato espacial más antiguo del montaje: mientras la cámara no cruce la línea imaginaria que une a dos sujetos en acción, cada personaje conserva su lado de la pantalla y el espectador mantiene el mapa de la escena. Esta guía la explica, la problematiza y te da salidas prácticas cuando el metraje ya está rodado.</em></p>
${figure(
  `${IMG}/montaje-continuo-eje-accion-180.jpg`,
  'Diagrama del eje de acción de 180 grados con posiciones correctas de cámara y un salto de eje',
  'Todas las cámaras de un mismo lado del eje = continuidad espacial. Imagen: archivo del autor'
)}
<h2 class="report-chapter">Qué es exactamente el eje</h2>
<p>Imagina dos personajes mirándose. Traza una línea imaginaria que los une: esa es la línea de acción. Todo el sistema de cámaras de la escena debe permanecer en un mismo semicírculo de 180 grados alrededor de esa línea. Si la cámara A filma desde el norte y la cámara B salta al sur, en el montaje los personajes intercambian lados de la pantalla como por arte de magia: el que miraba a la izquierda ahora mira a la derecha. En planos de conversación es un dolor de cabeza; en un partido de fútbol o una pelea, es un desastre total.</p>
<p>La regla se extiende a cualquier dirección de movimiento: un auto que viaja hacia la derecha conserva esa dirección en todos los planos; si lo filmas desde el otro lado del eje de su trayectoria, en pantalla irá hacia la izquierda y parecerá que regresó. Lo mismo aplica a una mirada, una pelota o una bala.</p>
${stats([
  ['180°', 'semicírculo donde viven todas tus cámaras'],
  ['30°', 'mínimo de cambio de ángulo entre planos para evitar el "salto"'],
  ['0', 'cruces de eje en una escena de diálogo convencional'],
])}
<h2 class="report-chapter">Cruzar el eje a propósito (y cómo avisar)</h2>
<p>La regla no es una ley natural: es una convención que se puede romper con efecto. Directores la cruzan deliberadamente para marcar desorientación, un giro de lealtad o el paso del tiempo. La condición para que funcione es avisar: se cruza el eje con un plano que lo justifica visualmente —un travelling que rodea al sujeto, un plano cenital que muestra la nueva geografía, un corte de mano o de objeto en primer plano que reinicia el mapa—. Cruzar el eje sin avisar es un error; cruzarlo con transición es una decisión.</p>
<p>Mi caso favorito: en una escena de discusión, cruzo el eje justo en el momento en que un personaje miente. El espectador no sabe qué cambió, pero sabe que algo cambió. La geografía inestable traduce la inestabilidad moral.</p>
${quote(
  'El espectador no necesita entender la regla de los 180 grados: necesita que su sentido de orientación nunca sea traicionado sin permiso.',
  'Criterio editorial'
)}
<h2 class="report-chapter">Rescatar material que ya cruzó el eje</h2>
<p>Llega el día en que recibes metraje filmado sin control de eje —material de archivo, cobertura de evento, dos cámaras que nadie coordinó—. Herramientas de rescate, en orden de preferencia: primero, insertos neutros (detalles de manos, objetos, la mesa) que reinician el espacio antes de volver al diálogo; segundo, planos frontales o cenitales, que son "ciegos" respecto al lado; tercero, un flash de fundido o de movimiento rápido que disimule el intercambio; cuarto, reencuadrar en postproducción volteando horizontalmente un plano (con cuidado con textos y logos).</p>
${doc(
  '/blog/corte-ritmo-video-tecnica-narrativa',
  '🎬',
  'El corte como decisión narrativa',
  'Antes de preocuparte por el eje, domina el porqué de cada corte.'
)}
<h2 class="report-chapter">Checklist de eje en el set y en la edición</h2>
<p>En el set, dibuja el eje en el plano de cámara antes del primer take y anótalo junto a cada toma en el informe de sonografía. En la edición, arma primero los planos generales: son los que revelan si la geografía funciona. Y cuando dos planos contiguos "peleman" de lado, prueba la regla de los 30 grados: si la cámara cambió al menos 30 grados de ángulo y de tamaño de plano, el corte se siente natural aunque ambos estén del mismo lado.</p>
<p>El eje de acción es de esas técnicas que parecen academicismo hasta el día en que una escena tuya "no se entiende" y nadie sabe por qué. Entonces lo entiendes: la pantalla es un mapa, y el editor es su cartógrafo.</p>`,
    contentEn: `<h1>The axis of action and 180 degrees: the continuity rule your viewer feels but never sees</h1>
<p class="lead"><em>Nobody leaves a theater complaining that you crossed the axis of action. But everyone leaves disoriented if you did. The 180-degree rule is editing\u2019s oldest spatial contract: as long as the camera does not cross the imaginary line joining two subjects in action, every character keeps their screen side and the viewer keeps the scene\u2019s map. This guide explains it, problematizes it, and gives practical exits when the footage is already shot.</em></p>
${figure(
  `${IMG}/montaje-continuo-eje-accion-180.jpg`,
  'Diagram of the 180-degree axis of action with correct camera positions and an axis jump',
  'All cameras on one side of the line = spatial continuity. Image: author\u2019s archive'
)}
<h2 class="report-chapter">What the axis actually is</h2>
<p>Picture two characters facing each other. Draw an imaginary line joining them: that is the line of action. The whole camera system of the scene must stay within one 180-degree semicircle around that line. If camera A films from the north and camera B jumps to the south, in the edit the characters swap screen sides as if by magic: whoever looked left now looks right. In conversation shots it is a headache; in a soccer match or a fight, it is total disaster.</p>
<p>The rule extends to any direction of movement: a car traveling right keeps that direction in every shot; if you film it from the other side of its trajectory\u2019s axis, on screen it will move left and seem to have turned back. The same applies to a glance, a ball or a bullet.</p>
${stats([
  ['180°', 'semicircle where all your cameras live'],
  ['30°', 'minimum angle change between shots to avoid a "jump"'],
  ['0', 'axis crossings in a conventional dialogue scene'],
])}
<h2 class="report-chapter">Crossing the line on purpose (and how to announce it)</h2>
<p>The rule is not a natural law: it is a convention that can be broken for effect. Directors cross it deliberately to mark disorientation, a shift in loyalty or the passage of time. The condition for it to work is warning: cross the axis with a shot that justifies it visually —a dolly circling the subject, an overhead shot showing the new geography, a hand or object close-up that resets the map—. Crossing the axis unannounced is a mistake; crossing it with a transition is a decision.</p>
<p>My favorite case: in an argument scene, I cross the axis exactly when a character lies. The viewer does not know what changed, but knows something changed. Unstable geography translates moral instability.</p>
${quote(
  'The viewer does not need to understand the 180-degree rule: they need their sense of orientation never betrayed without permission.',
  'Editorial criterion'
)}
<h2 class="report-chapter">Rescuing material that already crossed the line</h2>
<p>Someday you will receive footage shot without axis control —archive material, event coverage, two cameras nobody coordinated—. Rescue tools, in order of preference: first, neutral inserts (hands, objects, the table) that reset the space before returning to dialogue; second, frontal or overhead shots, which are "blind" to sides; third, a quick dissolve or whip-pan to disguise the swap; fourth, reframing in post by horizontally flipping a shot (careful with text and logos).</p>
${doc(
  '/blog/corte-ritmo-video-tecnica-narrativa',
  '🎬',
  'The cut as a narrative decision',
  'Before worrying about the axis, master the why of every cut.'
)}
<h2 class="report-chapter">Axis checklist on set and in the edit</h2>
<p>On set, draw the axis on the camera plan before the first take and note it next to each take in the sound report. In the edit, lay down the wide shots first: they reveal whether the geography works. And when two adjacent shots "fight" over sides, try the 30-degree rule: if the camera moved at least 30 degrees of angle and shot size, the cut feels natural even if both are on the same side.</p>
<p>The axis of action is one of those techniques that look academic until the day one of your scenes "does not read" and nobody knows why. Then you get it: the screen is a map, and the editor is its cartographer.</p>`,
  },
  {
    id: '1452',
    slug: 'color-gradacion-scopes-luts-orden',
    publishedAt: '2026-11-13T11:00:00-04:00',
    date: '2026-11-13',
    titleEs: 'Del balance de blancos al look: el orden correcto de la cadena de color que casi todos editan al revés',
    titleEn: 'From white balance to the look: the correct order of the color chain that most editors get backwards',
    excerptEs:
      'Aplicar un LUT antes de corregir es el error número uno del color en video. Esta guía ordena la cadena —balance de blancos, exposición, LUT técnico, look creativo— y explica por qué los scopes (waveform y vectorscope) son más confiables que tus ojos, que se adaptan a todo en 90 segundos.',
    excerptEn:
      'Applying a LUT before correcting is mistake number one in video color. This guide orders the chain —white balance, exposure, technical LUT, creative look— and explains why scopes (waveform and vectorscope) are more reliable than your eyes, which adapt to everything within 90 seconds.',
    readTimeEs: '11 min de lectura',
    readTimeEn: '11 min read',
    imageUrl: `${IMG}/color-gradacion-scopes-luts.jpg`,
    imageCaption: 'Waveform y cadena de color: primero se corrige, después se estiliza. Imagen: archivo del autor',
    categoryEs: CAT_ES,
    categoryEn: CAT_EN,
    location: LOC,
    region: 'Bolivia',
    enableComments: true,
    featured: false,
    breaking: false,
    views: 1,
    contentEs: `<h1>Del balance de blancos al look: el orden correcto de la cadena de color que casi todos editan al revés</h1>
<p class="lead"><em>El error de color más repetido en YouTube no es un look feo: es un look aplicado sobre material desbalanceado. Un LUT creativo multiplica lo que encuentra debajo; si debajo hay piel verde y piel magenta en el mismo plano, el look multiplica el desastre. Esta guía ordena la cadena de color en sus cuatro pasos reales y te convence de editar mirando los scopes, no la pantalla.</em></p>
${figure(
  `${IMG}/color-gradacion-scopes-luts.jpg`,
  'Waveform y cadena de cuatro pasos: balance de blancos, exposición, LUT técnico y look creativo',
  'El orden de la cadena de color importa más que cualquier preset. Imagen: archivo del autor'
)}
<h2 class="report-chapter">Paso 1 y 2: balance y exposición antes que nada</h2>
<p>El balance de blancos corrige la temperatura: si el plano de interior quedó naranja por las bombillas, primero se neutraliza con los controles de temperatura y tinte, o con un selector de blanco real en la escena. La exposición se ajusta después, y aquí el waveform es la ley: la piel debe vivir alrededor de los dos tercios superiores de la escala IRE (aproximadamente 55-70%), las luces especulares pueden tocar el tope, y las sombras informativas no deben aplastarse a negro absoluto salvo decisión estilística.</p>
<p>El orden importa porque la exposición y el balance son correcciones globales que cambian la señal completa; el look creativo se aplica al final precisamente para trabajar sobre una base neutra y predecible. LUT primero y corrección después es como maquillar antes de lavarse la cara.</p>
${stats([
  ['55-70%', 'rango IRE donde debe vivir la piel en el waveform'],
  ['90 s', 'tiempo que tarda tu ojo en "normalizarse" y dejar de ser confiable'],
  ['2', 'pasos obligatorios antes de cualquier LUT creativo'],
])}
<h2 class="report-chapter">Los scopes no opinan</h2>
<p>El truco sucio de la calibración de color es que tu cerebro se adapta: tras 90 segundos mirando un plano azulado, ese azul se vuelve "normal". Los scopes son inmunes al cansancio y a la sala: el vectorscope muestra los tonos de piel sobre la línea de piel (el eje entre rojo y amarillo, la "skin tone line") y el waveform muestra la distribución de luminancia sin emociones. Mi flujo: panel de scopes siempre abierto, correcciones de balance y exposición con nodos dedicados, y solo entonces estilización.</p>
<p>En proyectos largos, la constancia entre planos importa más que la belleza de cualquier plano individual. Para eso sirven las referencias: se copia el nodo de corrección base del plano "maestro" (el mejor expuesto y balanceado de la escena) a los demás con match color, y se ajusta de plano en plano. El objetivo del primer pase es que una escena parezca filmada en el mismo día y a la misma hora.</p>
${quote(
  'Primero se corrige, después se estiliza: un look sobre material desbalanceado es un filtro sobre un error.',
  'Criterio editorial'
)}
<h2 class="report-chapter">LUT técnicos y LUT creativos no son lo mismo</h2>
<p>Existen dos familias de LUT y confundirlas arruina materiales. El LUT técnico (como los de conversión log a Rec.709 de tu cámara) simplemente decodifica la señal plana del perfil logarítmico a un espacio display: no es creativo, no se ajusta, y debe ir al inicio de la cadena. El LUT creativo (los "cinematic looks" de venta libre) agrega una interpretación: contraste, teal-and-orange, film emulation, y va al final, con intensidad moderada (30-60% de mezcla en general) y después de decidir la exposición.</p>
<p>Si un LUT creativo te deja el plano lavado o las caras naranjas, no es culpa del LUT: casi siempre significa que la base no estaba corregida o que el material no era log. Y ojo con el detalle técnico: los LUT diseñados para material log aplicados sobre Rec.709 (o viceversa) producen ese contraste roto inconfundible.</p>
${doc(
  '/blog/exportacion-codecs-bitrate-entrega-plataformas',
  '🎨',
  'Exportar bien: codecs y bitrate',
  'Toda la corrección de color se pierde si la exportación la aplasta.'
)}
<h2 class="report-chapter">Rutina de un pase de color en 20 minutos</h2>
<p>Para trabajos con presupuesto de tiempo, esta rutina es suficiente: (1) ordenar planos por escena y elegir el plano maestro; (2) balance y exposición del maestro mirando scopes; (3) copiar y ajustar el resto de la escena; (4) LUT técnico si material log, LUT creativo al 40%; (5) revisión final en pantalla dividida contra el plano de referencia de la escena anterior; (6) chequeo de skin en vectorscope de los primeros planos. Con esa disciplina, incluso un proyecto de una sola jornada sale parejo.</p>
<p>El color es la técnica que más "profesionalismo" percibe el cliente, porque es la primera que se ve y la última que se olvida. Y a diferencia del hardware, es gratis: solo requiere orden.</p>`,
    contentEn: `<h1>From white balance to the look: the correct order of the color chain that most editors get backwards</h1>
<p class="lead"><em>The most repeated color mistake on YouTube is not an ugly look: it is a look applied on unbalanced footage. A creative LUT multiplies whatever sits underneath; if underneath there is green skin and magenta skin in the same shot, the look multiplies the disaster. This guide orders the color chain into its four real steps and convinces you to edit watching scopes, not the screen.</em></p>
${figure(
  `${IMG}/color-gradacion-scopes-luts.jpg`,
  'Waveform and four-step chain: white balance, exposure, technical LUT and creative look',
  'The order of the color chain matters more than any preset. Image: author\u2019s archive'
)}
<h2 class="report-chapter">Steps 1 and 2: balance and exposure before anything</h2>
<p>White balance fixes temperature: if the indoor shot turned orange from the bulbs, it is neutralized first with temperature and tint controls, or with a true-white picker in the scene. Exposure is adjusted next, and here the waveform is law: skin should live around the upper two-thirds of the IRE scale (roughly 55-70%), specular highlights may touch the top, and informative shadows should not crush to absolute black except as a stylistic decision.</p>
<p>Order matters because exposure and balance are global corrections changing the whole signal; the creative look is applied at the end precisely to work on a neutral, predictable base. LUT first and correction after is like applying makeup before washing your face.</p>
${stats([
  ['55-70%', 'IRE range where skin should live on the waveform'],
  ['90 s', 'time your eye takes to "normalize" and stop being reliable'],
  ['2', 'mandatory steps before any creative LUT'],
])}
<h2 class="report-chapter">Scopes do not have opinions</h2>
<p>The dirty trick of color grading is that your brain adapts: after 90 seconds looking at a bluish shot, that blue becomes "normal". Scopes are immune to fatigue and to the room: the vectorscope shows skin tones against the skin line (the axis between red and yellow), and the waveform shows luminance distribution without emotions. My flow: scopes panel always open, balance and exposure corrections on dedicated nodes, and only then stylization.</p>
<p>In long projects, consistency between shots matters more than the beauty of any single shot. That is what references are for: the base correction node of the "master" shot (the best exposed and balanced of the scene) is copied to the rest with color match, adjusted shot by shot. The goal of the first pass is for a scene to look filmed on the same day at the same hour.</p>
${quote(
  'Correct first, stylize later: a look on unbalanced footage is a filter over a mistake.',
  'Editorial criterion'
)}
<h2 class="report-chapter">Technical and creative LUTs are not the same thing</h2>
<p>There are two LUT families and confusing them ruins footage. The technical LUT (like your camera\u2019s log-to-Rec.709 conversion) simply decodes the flat logarithmic signal into a display space: it is not creative, it is not adjusted, and it belongs at the start of the chain. The creative LUT (the "cinematic looks" on sale) adds an interpretation: contrast, teal-and-orange, film emulation, and it goes at the end, at moderate intensity (30-60% mix in general) and after exposure is decided.</p>
<p>If a creative LUT leaves your shot washed out or faces orange, it is not the LUT\u2019s fault: it almost always means the base was not corrected or the footage was not log. And mind the technical detail: LUTs designed for log material applied to Rec.709 (or the other way around) produce that unmistakable broken contrast.</p>
${doc(
  '/blog/exportacion-codecs-bitrate-entrega-plataformas',
  '🎨',
  'Export right: codecs and bitrate',
  'All your color work is lost if the export crushes it.'
)}
<h2 class="report-chapter">A 20-minute color pass routine</h2>
<p>For time-budgeted jobs, this routine is enough: (1) sort shots by scene and pick the master shot; (2) balance and exposure of the master watching scopes; (3) copy and adjust the rest of the scene; (4) technical LUT if log material, creative LUT at 40%; (5) final check split-screen against the previous scene\u2019s reference shot; (6) skin check on vectorscope for close-ups. With that discipline, even a one-day project comes out even.</p>
<p>Color is the technique clients perceive as most "professional", because it is the first seen and the last forgotten. And unlike hardware, it is free: it only requires order.</p>`,
  },
  {
    id: '1453',
    slug: 'audio-mezcla-eq-compresion-loudness-video',
    publishedAt: '2026-11-13T15:00:00-04:00',
    date: '2026-11-13',
    titleEs: 'La mitad invisible: EQ, compresión y loudness para que tu video suene profesional en cualquier dispositivo',
    titleEn: 'The invisible half: EQ, compression and loudness so your video sounds professional on any device',
    excerptEs:
      'El espectador perdona una imagen borrosa pero abandona un audio ininteligible. Esta guía recorre la mezcla mínima profesional —EQ del diálogo, compresión, ducking de música y objetivos de loudness (-14 LUFS web, -23 LUFS broadcast)— y los errores que arruinan el sonido en los parlantes del celular.',
    excerptEn:
      'Viewers forgive a blurry image but abandon unintelligible audio. This guide walks through the minimal professional mix —dialogue EQ, compression, music ducking and loudness targets (-14 LUFS web, -23 LUFS broadcast)— and the mistakes that ruin sound on phone speakers.',
    readTimeEs: '12 min de lectura',
    readTimeEn: '12 min read',
    imageUrl: `${IMG}/audio-mezcla-eq-compresion-loudness.jpg`,
    imageCaption: 'Curva de EQ y faders de mezcla: el diálogo manda sobre todo lo demás. Imagen: archivo del autor',
    categoryEs: CAT_ES,
    categoryEn: CAT_EN,
    location: LOC,
    region: 'Bolivia',
    enableComments: true,
    featured: false,
    breaking: false,
    views: 1,
    contentEs: `<h1>La mitad invisible: EQ, compresión y loudness para que tu video suene profesional en cualquier dispositivo</h1>
<p class="lead"><em>Hay una asimetría brutal en la percepción del público: una imagen ligeramente fuera de foco se "ve bien igual", pero un audio con la voz apagada se abandona en cinco segundos. Y sin embargo, la mayoría de los editores dedica el 90% del tiempo a la imagen y deja el audio para el final, con el render ya programado. Esta guía ordena la mezcla mínima que hace que cualquier proyecto —un documental, un comercial, un video de YouTube— suene consistente desde parlantes de estudio hasta el altavoz del celular.</em></p>
${figure(
  `${IMG}/audio-mezcla-eq-compresion-loudness.jpg`,
  'Curva de EQ y faders de una mezcla: diálogo, música, ambiente y efectos',
  'Si el diálogo no se entiende, nada del resto importa. Imagen: archivo del autor'
)}
<h2 class="report-chapter">Primero el diálogo: EQ y limpieza</h2>
<p>La voz es el canal prioritario de casi todo contenido audiovisual. Antes de cualquier gesto creativo: limpiar. Un high-pass filter entre 80 y 120 Hz elimina el ruido de viento y los golpes de mesa sin tocar la voz; un corte quirúrgico en las frecuencias resonantes (entre 200-400 Hz si suena "caja", alrededor de 3-5 kHz si suena áspera) desatornilla el sonido de sala. Después, un boost suave de presencia entre 2-5 kHz hace que la voz "corte" sin gritar.</p>
<p>La compresión del diálogo busca un objetivo distinto al de la música: no dar "pegamento" sino uniformidad. Ratio 3:1 a 4:1, ataque rápido, release medio, y ganancia de compensación hasta que las frases más bajas del interlocutor se entiendan igual que las del protagonista. Si el micrófono cambió entre escenas (muy común en cobertura de eventos), ese es el trabajo que hace invisible la diferencia.</p>
${stats([
  ['-14 LUFS', 'objetivo de loudness integrado para web y YouTube'],
  ['-23 LUFS', 'objetivo de broadcast europeo (EBU R128)'],
  ['80-120 Hz', 'punto de high-pass seguro para voz humana'],
])}
<h2 class="report-chapter">Música y ambiente: el arte del ducking</h2>
<p>La música debe estar bajo la voz, no junto a ella. El ducking automático (sidechain) baja la música 3-6 dB cada vez que entra el diálogo y la recupera suavemente al salir; el ducking manual con keyframes da más control en escenas donde la música cuenta la emoción. Regla práctica de niveles en la mezcla final: diálogo al 0 de referencia, música 12-18 dB debajo cuando hay voz, ambiente 18-24 dB debajo, efectos según su rol dramático.</p>
<p>El ambiente (room tone, ruido de fondo) es el pegamento que evita que los cortes de audio se oigan como "agujeros". Cuando cambio de toma de audio entre planos, medio segundo de crossfade de ambiente disimula la soldadura mejor que cualquier plugin.</p>
${quote(
  'Si el diálogo no se entiende, nada del resto importa: el espectador no razona el audio, lo abandona.',
  'Criterio editorial'
)}
<h2 class="report-chapter">Loudness: mezclar con números, entregar sin sorpresas</h2>
<p>El loudness integrado (LUFS) es la medida que normaliza plataformas: YouTube normaliza a -14 LUFS, el broadcast europeo exige -23 LUFS, y las plataformas de streaming social suelen aceptar -14 a -16. Mezclar con un medidor de loudness activo evita las dos caras del error: entregar un video callado (que las plataformas subirán con ruido de fondo incluido) o uno aplastado (que sonará fatigoso y será bajado). El limitador va al final de la cadena, con techo a -1 dBTP para evitar el clipping en la conversión a MP4/AAC.</p>
${doc(
  '/blog/exportacion-codecs-bitrate-entrega-plataformas',
  '🔊',
  'Exportación: audio AAC y bitrate',
  'La mezcla perfecta muere en una exportación mal configurada.'
)}
<h2 class="report-chapter">La prueba del celular (y del parlante de la laptop)</h2>
<p>Antes de dar por terminada una mezcla, la reviso en tres dispositivos malos a propósito: el parlante del celular (donde los graves desaparecen y las voces nasalizadas se delatan), un par de audífonos de gama baja, y la laptop a volumen medio. Si el diálogo se entiende en los tres, la mezcla sobrevivirá al mundo real. Esta "prueba de pobre" detecta el 90% de los problemas que el monitoreo de estudio disimula por supuesto.</p>
<p>Y una advertencia de cabecera para quien edita solo: el oído también se adapta, y tras una hora de sesión una mezcla "suena bien" siempre. Los descansos cortos cada 30-40 minutos y la comparación con un video de referencia (un documental o comercial que admiras) devuelven el criterio. El audio es la mitad invisible del video, pero es la mitad que decide si alguien termina de verlo.</p>`,
    contentEn: `<h1>The invisible half: EQ, compression and loudness so your video sounds professional on any device</h1>
<p class="lead"><em>There is a brutal asymmetry in audience perception: a slightly out-of-focus image "still looks fine", but audio with muffled voice gets abandoned in five seconds. Yet most editors spend 90% of their time on the image and leave sound for the end, with the render already scheduled. This guide organizes the minimal mix that makes any project —a documentary, a commercial, a YouTube video— sound consistent from studio monitors to a phone speaker.</em></p>
${figure(
  `${IMG}/audio-mezcla-eq-compresion-loudness.jpg`,
  'EQ curve and mix faders: dialogue, music, ambience and effects',
  'If the dialogue is not intelligible, nothing else matters. Image: author\u2019s archive'
)}
<h2 class="report-chapter">Dialogue first: EQ and cleanup</h2>
<p>Voice is the priority channel of almost all audiovisual content. Before any creative gesture: clean up. A high-pass filter between 80 and 120 Hz removes wind and table thumps without touching the voice; a surgical cut on resonant frequencies (200-400 Hz if it sounds "boxy", around 3-5 kHz if harsh) unscrews room sound. Then a gentle presence boost between 2-5 kHz makes the voice cut through without shouting.</p>
<p>Dialogue compression pursues a different goal than music: not "glue" but uniformity. Ratio 3:1 to 4:1, fast attack, medium release, and makeup gain until the quieter interlocutor\u2019s lines are as intelligible as the protagonist\u2019s. If the microphone changed between scenes (very common in event coverage), that is the job that makes the difference invisible.</p>
${stats([
  ['-14 LUFS', 'integrated loudness target for web and YouTube'],
  ['-23 LUFS', 'European broadcast target (EBU R128)'],
  ['80-120 Hz', 'safe high-pass point for human voice'],
])}
<h2 class="report-chapter">Music and ambience: the art of ducking</h2>
<p>Music must sit under the voice, not beside it. Automatic ducking (sidechain) drops music 3-6 dB whenever dialogue enters and gently restores it when dialogue exits; manual keyframe ducking gives more control in scenes where music carries the emotion. Practical level rule in the final mix: dialogue at 0 reference, music 12-18 dB below when voice is present, ambience 18-24 dB below, effects per their dramatic role.</p>
<p>Ambience (room tone, background noise) is the glue preventing audio cuts from sounding like "holes". When I switch audio takes between shots, half a second of ambience crossfade hides the weld better than any plugin.</p>
${quote(
  'If the dialogue is not intelligible, nothing else matters: the viewer does not reason about audio, they leave.',
  'Editorial criterion'
)}
<h2 class="report-chapter">Loudness: mix with numbers, deliver without surprises</h2>
<p>Integrated loudness (LUFS) is the metric platforms normalize by: YouTube normalizes to -14 LUFS, European broadcast requires -23 LUFS, and social streaming platforms usually accept -14 to -16. Mixing with an active loudness meter avoids both error faces: delivering a quiet video (which platforms will boost, noise floor included) or a crushed one (which sounds fatiguing and gets turned down). The limiter goes at the end of the chain, ceiling at -1 dBTP to prevent clipping in the MP4/AAC conversion.</p>
${doc(
  '/blog/exportacion-codecs-bitrate-entrega-plataformas',
  '🔊',
  'Export: AAC audio and bitrate',
  'A perfect mix dies in a badly configured export.'
)}
<h2 class="report-chapter">The phone test (and the laptop speaker)</h2>
<p>Before calling a mix finished, I check it on three deliberately bad devices: the phone speaker (where bass disappears and nasal voices betray themselves), a pair of low-end earbuds, and the laptop at medium volume. If the dialogue is intelligible on all three, the mix will survive the real world. This "poor test" catches 90% of the problems studio monitoring politely hides.</p>
<p>And a standing warning for those who edit alone: the ear adapts too, and after an hour of session a mix "sounds good" always. Short breaks every 30-40 minutes and comparing against a reference video (a documentary or commercial you admire) restore judgment. Audio is the invisible half of video, but it is the half that decides whether anyone finishes watching.</p>`,
  },
  {
    id: '1454',
    slug: 'j-cut-l-cut-sonido-cruza-corte',
    publishedAt: '2026-11-14T07:30:00-04:00',
    date: '2026-11-14',
    titleEs: 'J-cut y L-cut: la técnica de sonido que hace que tus cortes fluyan sin que nadie sepa por qué',
    titleEn: 'J-cuts and L-cuts: the sound technique that makes your cuts flow and nobody knows why',
    excerptEs:
      'Cuando el audio no corta exactamente donde corta la imagen, la edición respira. Los J-cut y L-cut son la técnica de continuidad sonora que usa todo editor profesional: el sonido entra antes del corte o se extiende después de él. Aquí va el mapa completo, con casos de uso y errores comunes.',
    excerptEn:
      'When audio does not cut exactly where the picture cuts, the edit breathes. J-cuts and L-cuts are the sound continuity technique every professional editor uses: audio enters before the cut or extends past it. Here is the full map, with use cases and common mistakes.',
    readTimeEs: '9 min de lectura',
    readTimeEn: '9 min read',
    imageUrl: `${IMG}/j-cut-l-cut-sonido-cruza-corte.jpg`,
    imageCaption: 'J-cut: el audio entra antes que la imagen. L-cut: el audio sigue después del corte. Imagen: archivo del autor',
    categoryEs: CAT_ES,
    categoryEn: CAT_EN,
    location: LOC,
    region: 'Bolivia',
    enableComments: true,
    featured: false,
    breaking: false,
    views: 1,
    contentEs: `<h1>J-cut y L-cut: la técnica de sonido que hace que tus cortes fluyan sin que nadie sepa por qué</h1>
<p class="lead"><em>Hay una diferencia inconfundible entre la edición de un aficionado y la de un profesional, y casi nunca está en la imagen: está en el audio. En el montaje amateur, el sonido corta exactamente donde corta el video, como un ascensor con puertas que cierran a golpes. En el montaje profesional, el audio se desliza sobre los cortes: entra antes, se queda después. Esa técnica tiene nombre —J-cut y L-cut, por la forma que dibujan en la timeline— y es la más rentable que aprenderás este año.</em></p>
${figure(
  `${IMG}/j-cut-l-cut-sonido-cruza-corte.jpg`,
  'Diagrama de timeline mostrando J-cut (audio antes del corte de video) y L-cut (audio después)',
  'El corte fluye cuando la pista de audio no corta con la imagen. Imagen: archivo del autor'
)}
<h2 class="report-chapter">J-cut: el sonido que llega antes</h2>
<p>En el J-cut, el audio del plano siguiente entra antes que la imagen de ese plano. La forma en la timeline parece una J porque la cola de audio cuelga hacia el clip anterior. Es la herramienta natural para transiciones de escena: escuchamos el tráfico y las voces del mercado antes de verlo, y cuando la imagen llega, ya "estamos ahí". El cine documental lo usa desde siempre y el cine de ficción lo usa para las entradas de escena que no se sienten como entradas.</p>
<p>El J-cut también resuelve el problema clásico de los cutaways en entrevista: si el plano de recurso (las manos tejiendo, la fábrica, el paisaje) entra con su propio sonido ambiente, el corte se siente como un cambio de canal; si entra mientras la voz del entrevistado sigue hablando, se siente como parte del relato.</p>
${stats([
  ['12-24', 'frames de adelanto típicos del audio en un J-cut de escena'],
  ['0', 'cortes donde audio e imagen deben cortar exactamente juntos (salvo golpe musical)'],
  ['1', 'regla: el audio nunca debe delatar la soldadura'],
])}
<h2 class="report-chapter">L-cut: el sonido que se queda</h2>
<p>En el L-cut, el audio del plano actual continúa después de que la imagen ya cortó al siguiente. La forma en la timeline parece una L. Es la técnica estándar del diálogo multi-plano: mientras la cámara corta al rostro del que escucha, la voz del que habla sigue sonando. El espectador lee la reacción y recibe la información a la vez, y el corte deja de ser un muro para convertirse en un pasillo.</p>
<p>El L-cut también es la herramienta para cerrar secuencias: la imagen termina, pero la voz en off o la frase clave se sostiene dos segundos sobre el plano siguiente, conectando bloques que de otro modo quedarían aislados. En mis documentales, casi todas las transiciones entre capítulos son L-cuts de la narración.</p>
${quote(
  'El ojo es perezoso y el oído es detallista: si el audio corta limpio, el espectador cree que nada se cortó.',
  'Criterio editorial'
)}
<h2 class="report-chapter">Cómo se hace en la práctica</h2>
<p>Mecánica en cualquier NLE moderno: se separa el audio del video (en Premiere con Alt al arrastrar, en Resolve con el enlace desactivado, en Final Cut creando clips independientes), se estira el extremo del audio hacia el clip vecino y se refina el punto con el scrubbing. Dos ajustes que separan el J/L-cut amateur del profesional: el crossfade de audio en la unión (5-10 frames, nunca cero, porque el corte de onda seca se oye como "clic" de empalme) y la continuidad del ambiente: si el room tone cambia al cruzar el corte, el hechizo se rompe.</p>
${doc(
  '/blog/audio-mezcla-eq-compresion-loudness-video',
  '🎚️',
  'La mitad invisible: mezcla de audio',
  'J-cuts y L-cuts son la mitad de la historia; la mezcla es la otra.'
)}
<h2 class="report-chapter">Cuándo NO usarlos</h2>
<p>La técnica tiene límites. En un golpe de efecto (un golpe de caja, una campana de campanario, un estribillo musical) audio e imagen deben cortar juntos: el punto de sincronía es el golpe. En el montaje musical puro (video clips, montajes al beat), los J/L-cuts diluyen el punch del corte a compás. Y en entrevistas dobladas o subtitled content, cuidar que la voz que persiste en el L-cut coincida con el idioma del plano en pantalla, o el espectador percibirá el desfase como error.</p>
<p>La forma de internalizar la técnica es audaz y simple: en tu próximo corte, desactiva mentalmente la imagen y escucha solo el audio de principio a fin. Si el relato sonoro tiene su propia lógica y fluidez, tu video funcionará incluso con los ojos cerrados. Esa es la prueba que ningún espectador hará, y la que todos sentirán.</p>`,
    contentEn: `<h1>J-cuts and L-cuts: the sound technique that makes your cuts flow and nobody knows why</h1>
<p class="lead"><em>There is an unmistakable difference between amateur and professional editing, and it is almost never in the picture: it is in the sound. In amateur edits, audio cuts exactly where video cuts, like an elevator with doors slamming. In professional edits, audio glides across cuts: it enters earlier, lingers after. That technique has a name —J-cut and L-cut, for the shape they draw on the timeline— and it is the most cost-effective one you will learn this year.</em></p>
${figure(
  `${IMG}/j-cut-l-cut-sonido-cruza-corte.jpg`,
  'Timeline diagram showing a J-cut (audio before the video cut) and an L-cut (audio after)',
  'The cut flows when the audio track does not cut with the picture. Image: author\u2019s archive'
)}
<h2 class="report-chapter">J-cut: the sound that arrives first</h2>
<p>In a J-cut, the next shot\u2019s audio enters before that shot\u2019s image. On the timeline it looks like a J because the audio tail hangs over the previous clip. It is the natural tool for scene transitions: we hear the traffic and the market\u2019s voices before seeing it, and when the image arrives, we are "already there". Documentary cinema has always used it, and fiction uses it for scene entrances that do not feel like entrances.</p>
<p>The J-cut also solves the classic problem of cutaways in interviews: if the B-roll shot (hands knitting, the factory, the landscape) enters with its own ambience, the cut feels like a channel change; if it enters while the interviewee\u2019s voice keeps talking, it feels part of the story.</p>
${stats([
  ['12-24', 'frames of typical audio lead-in for a scene J-cut'],
  ['0', 'cuts where audio and picture should cut exactly together (except on a musical hit)'],
  ['1', 'rule: the audio must never betray the weld'],
])}
<h2 class="report-chapter">L-cut: the sound that stays</h2>
<p>In an L-cut, the current shot\u2019s audio continues after the picture has already cut to the next. On the timeline it looks like an L. It is the standard technique of multi-shot dialogue: while the camera cuts to the listener\u2019s face, the speaker\u2019s voice keeps sounding. The viewer reads the reaction and receives the information at once, and the cut stops being a wall to become a corridor.</p>
<p>The L-cut is also the tool to close sequences: the picture ends, but the voice-over or key line holds for two seconds over the next shot, connecting blocks that would otherwise stay isolated. In my documentaries, almost every chapter transition is an L-cut of the narration.</p>
${quote(
  'The eye is lazy and the ear is meticulous: if the audio cuts clean, the viewer believes nothing was cut.',
  'Editorial criterion'
)}
<h2 class="report-chapter">How it is done in practice</h2>
<p>Mechanics in any modern NLE: unlink audio from video (in Premiere with Alt while dragging, in Resolve with linking off, in Final Cut creating independent clips), stretch the audio edge toward the neighboring clip and refine the point with scrubbing. Two adjustments separate the amateur J/L-cut from the professional one: the audio crossfade at the joint (5-10 frames, never zero, because a dry waveform cut sounds like a "click") and ambience continuity: if the room tone changes across the cut, the spell breaks.</p>
${doc(
  '/blog/audio-mezcla-eq-compresion-loudness-video',
  '🎚️',
  'The invisible half: audio mixing',
  'J-cuts and L-cuts are half the story; the mix is the other.'
)}
<h2 class="report-chapter">When NOT to use them</h2>
<p>The technique has limits. On an effect hit (a box punch, a church bell, a musical hook) audio and picture must cut together: the sync point is the hit. In pure music editing (music videos, beat-synced edits), J/L-cuts dilute the punch of the downbeat cut. And in dubbed or subtitled content, make sure the voice persisting in the L-cut matches the language of the on-screen shot, or the viewer will read the mismatch as an error.</p>
<p>The way to internalize the technique is bold and simple: in your next edit, mentally turn off the picture and listen to the audio alone from start to finish. If the sound story has its own logic and flow, your video will work even with closed eyes. That is the test no viewer will run, and the one everyone will feel.</p>`,
  },
];
