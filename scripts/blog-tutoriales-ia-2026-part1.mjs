/**
 * Artículos de blog — tutoriales de ArtCraft, Crafting Apps, Higgsfield y video IA.
 * Parte 1: panorama, instalación, PhotoCraft, FilmCraft y EffectCraft.
 *
 * Cada objeto incluye metadatos + contenido ES/EN. El contenido usa los
 * componentes canónicos del sitio (report-figure, stat-grid, expert-quote,
 * doc-card, report-chapter, spec-table).
 */

const IMG = '/images/blog/tutoriales-ia-2026';

const figure = (src, alt, caption) =>
  `<figure class="report-figure"><img src="${src}" alt="${alt}" loading="lazy"><figcaption>${caption}</figcaption></figure>`;

const stats = (items) =>
  `<div class="stat-grid">${items
    .map(
      ([value, label]) =>
        `<div class="stat-card"><div class="stat-value">${value}</div><div class="stat-label">${label}</div></div>`
    )
    .join('')}</div>`;

const quote = (text, initials, name, role) =>
  `<div class="expert-quote"><p class="expert-quote-text">&ldquo;${text}&rdquo;</p><div class="expert-quote-author"><div class="expert-quote-initial">${initials}</div><div><div class="expert-quote-name">${name}</div><div class="expert-quote-role">${role}</div></div></div></div>`;

const doc = (href, icon, title, desc) =>
  `<a class="doc-card" href="${href}" target="_blank" rel="noopener noreferrer"><div class="doc-card-icon blue">${icon}</div><div><div class="doc-card-title">${title}</div><div class="doc-card-desc">${desc}</div></div></a>`;

const CAT_ES = 'Tecnología y Creación';
const CAT_EN = 'Technology & Creation';

export const part1 = [
  {
    id: '1380',
    slug: 'artcraft-estudio-ia-guia-completa',
    publishedAt: '2026-11-04T06:00:00-04:00',
    titleEs: 'ArtCraft: la suite de IA que cabe en tu escritorio y no te cobra por abrirla',
    titleEn: "ArtCraft: the AI suite that lives on your desktop and doesn't charge you to open it",
    excerptEs:
      'ArtCraft Studio y las 16 Crafting Apps son dos productos distintos que se complementan: una cabina de generación con canvas 2D y escenas 3D, y una colección de clones open source de Photoshop, Premiere, After Effects e Illustrator escritos en Rust. Esta guía explica qué hace cada uno, cuánto cuesta y por dónde empezar.',
    excerptEn:
      'ArtCraft Studio and the 16 Crafting Apps are two different products that complement each other: a generation booth with a 2D canvas and 3D scenes, and a collection of open-source clones of Photoshop, Premiere, After Effects and Illustrator written in Rust. This guide explains what each one does, what it costs and where to start.',
    date: '2026-11-04',
    readTimeEs: '11 min de lectura',
    readTimeEn: '11 min read',
    imageUrl: `${IMG}/artcraft-estudio-ia-guia-completa.jpg`,
    imageCaption: 'Interfaz del editor 3D de ArtCraft Studio. Imagen: ArtCraft',
    categoryEs: CAT_ES,
    categoryEn: CAT_EN,
    contentEs: `<h1>ArtCraft: la suite de IA que cabe en tu escritorio y no te cobra por abrirla</h1>
<p class="lead"><em>ArtCraft no es una sola aplicación. Es un estudio de generación de imágenes y video —ArtCraft Studio— y una colección de dieciséis apps nativas, open source y escritas en Rust que replican las herramientas del día a día: edición de fotos, montaje, motion graphics, vectores, maquetación, audio y hasta CAD. Entender esa división es la diferencia entre instalar algo y saber para qué sirve.</em></p>
${figure(
  `${IMG}/artcraft-estudio-ia-guia-completa.jpg`,
  'Editor 3D de ArtCraft Studio con una escena vacía y el campo de prompt',
  'El editor 3D de ArtCraft Studio permite colocar cámara, sujeto y luces antes de generar. Imagen: ArtCraft'
)}
${stats([
  ['16', 'Crafting Apps open source'],
  ['0.41.0', 'versión de Studio'],
  ['8 GB', 'RAM mínima en Windows'],
  ['0', 'suscripción obligatoria'],
])}
<h2 class="report-chapter">Dos productos que se complementan</h2>
<p><strong>ArtCraft Studio</strong> es la cabina generativa. Se instala como app de escritorio en Windows y macOS, o se usa directamente en el navegador. Dentro conviven un canvas 2D para dibujar, maquetar referencias y hacer inpaint; un editor 3D para componer escenas, posar personajes y mover la cámara; y un catálogo de modelos de imagen y video que se ejecutan en la nube de ArtCraft. Su versión actual es la 0.41.0.</p>
<p><strong>Las Crafting Apps</strong> son otra cosa: dieciséis aplicaciones independientes, gratuitas y de código abierto, escritas en Rust, que imitan la lógica de los programas de Adobe y de otras suites. PhotoCraft edita imágenes con capas y ajustes; FilmCraft monta video con timeline; EffectCraft hace motion graphics; VectorCraft dibuja vectores; DesignCraft maqueta páginas. No necesitan una suscripción y muchas funcionan sin conexión.</p>
<p>La confusión habitual es buscarlas dentro de Studio. No están allí. Se instalan y actualizan con <strong>ArtCraft Launcher</strong>, un gestor aparte que hoy va por la versión 0.13.0.</p>
<h2 class="report-chapter">Qué puedes generar en Studio</h2>
<p>Studio trabaja con dos flujos. El primero es el <strong>canvas 2D</strong>: dibujas formas, bloqueas el fondo, proteges zonas con máscaras y escribes un prompt corto. El modelo respeta la estructura y mejora la fidelidad. Sirve para storyboards, thumbnails, mockups de producto y reemplazos puntuales sin mover el resto de la escena.</p>
<p>El segundo es el <strong>editor 3D</strong>: colocas sujetos, objetos y cámaras en una escena en tiempo real, posas al personaje, ajustas altura de cámara y distancia focal, y generas. La ventaja no es la calidad de un frame aislado, sino la consistencia entre ángulos y tomas. Es la diferencia entre pedir “una mujer en una nave” y dirigir un plano concreto.</p>
<p>Studio también incluye <em>Image to Video</em>, <em>Image to Location</em>, <em>Image to 3D Mesh</em> y un flujo de assets mixtos que combina primitivas 3D, imágenes y texto. La documentación oficial lo resume en tres pasos: elegir un preset o importar imágenes, colocar el sujeto y la cámara, y añadir un prompt conciso de estilo y materiales.</p>
${quote(
  'Capable tools for artists. ArtCraft builds open source tools for artists. We pride ourselves on freedom of control and expression.',
  'AC',
  'Equipo de ArtCraft',
  'getartcraft.com'
)}
<h2 class="report-chapter">Las 16 Crafting Apps, de un vistazo</h2>
<ul>
<li><strong>PhotoCraft</strong> — edición de imágenes con capas, máscaras, capas de ajuste, estilos de capa, texto y vectores; abre PSD y PSB.</li>
<li><strong>FilmCraft</strong> — edición de video con monitores de fuente y programa, timeline, modos de recorte, códecs nativos y mezcla de audio.</li>
<li><strong>EffectCraft</strong> — composición, keyframes, expresiones, 259 efectos, cámaras y luces 3D, cola de render y Lottie.</li>
<li><strong>VectorCraft</strong> — ilustración vectorial con pluma, booleanos, trazado de imágenes, SVG/PDF y soporte MCP.</li>
<li><strong>DesignCraft</strong> — maquetación editorial de varias páginas, columnas, estilos y exportación a PDF.</li>
<li><strong>LightCraft</strong> — corrección de color y etalonaje con herramientas de máscara y granulación.</li>
<li><strong>SoundCraft</strong> — edición y mezcla de audio, MIDI, automatización y sonido envolvente.</li>
<li><strong>TextureCraft</strong> — pintura de texturas 3D, horneado y exportación de mapas.</li>
<li><strong>MaterialCraft</strong> — materiales procedurales basados en nodos.</li>
<li><strong>PdfCraft</strong>, <strong>WordCraft</strong>, <strong>DeckCraft</strong>, <strong>FigCraft</strong>, <strong>CadCraft</strong>, <strong>GridCraft</strong> y <strong>Craft Anything</strong> completan la caja: PDF, documentos, presentaciones, interfaces, CAD, hojas de cálculo y prototipos.</li>
</ul>
<h2 class="report-chapter">Modelos disponibles</h2>
<p>ArtCraft no entrena modelos propios: actúa como una capa de control sobre proveedores externos. La lista cambia con frecuencia, así que conviene revisar la página de modelos antes de planificar un proyecto.</p>
<table class="spec-table">
<thead><tr><th>Familia</th><th>Modelos principales</th><th>Uso recomendado</th></tr></thead>
<tbody>
<tr><td>Imagen</td><td>Nano Banana y Nano Banana Pro, GPT Image 1.5, Seedream 4.5, Flux Pro 1.1 Ultra, Midjourney, Grok</td><td>Keyframes, texturas, ilustración y variaciones de estilo.</td></tr>
<tr><td>Edición</td><td>Flux Pro Kontext Max, Flux Pro Inpaint, Flux Dev Juggernaut Inpaint</td><td>Inpaint, reemplazo de objetos y correcciones localizadas.</td></tr>
<tr><td>Video</td><td>Seedance 2.0, Kling 2.6 Pro, Veo 3.1 y 3.1 Fast, Sora 2 y 2 Pro, Grok Video</td><td>Image-to-video, planos cortos y animación de keyframes.</td></tr>
</tbody>
</table>
<h2 class="report-chapter">Cuánto cuesta de verdad</h2>
<p>El software es gratuito y open source. Lo que se paga son los créditos de generación, porque cada imagen o segundo de video consume cómputo en la nube. Al cierre de esta guía, el plan Basic cuesta 8 dólares al mes con facturación anual —1.000 créditos, equivalentes a unas 250 imágenes de Nano Banana— y el plan Pro arranca en 28 dólares al mes. La web aplica además un descuento temporal del 20%. Los precios cambian; la lógica no: <strong>la app es tuya para siempre, los créditos son un consumo</strong>.</p>
<p>Si tu trabajo es sobre todo retoque, montaje o vectores, puedes usar las Crafting Apps sin pagar nada y reservar Studio para las tareas que de verdad necesitan un modelo generativo. Ese es el uso más racional del ecosistema.</p>
<h2 class="report-chapter">Requisitos y primer arranque</h2>
<p>Studio pide Windows 10 de 64 bits o superior, 8 GB de RAM y 2 GB de disco; en macOS requiere la versión 12 o posterior. La versión web evita la instalación, pero depende de la conexión y de las limitaciones del navegador. Para las Crafting Apps, el Launcher se encarga de descargar solo lo que elijas y de mantenerlo actualizado.</p>
${doc(
  'https://getartcraft.com/',
  'WEB',
  'ArtCraft — sitio oficial',
  'Descarga de Studio, acceso web, Crafting Apps y documentación.'
)}
${doc(
  'https://getartcraft.com/pricing',
  'USD',
  'Planes y créditos de ArtCraft',
  'Precios vigentes, equivalencias de créditos y descuentos.'
)}
${doc(
  'https://getartcraft.com/faq/models-supported',
  'FAQ',
  'Modelos de imagen y video soportados',
  'Lista oficial actualizada de modelos disponibles dentro de Studio.'
)}
<h2 class="report-chapter">Un flujo de trabajo realista</h2>
<ol>
<li><strong>Ideas y referencias:</strong> reúne un moodboard y escribe el guion o el shot list. La IA acelera la ejecución, no la dirección.</li>
<li><strong>Bloqueo:</strong> dibuja la composición en el canvas 2D o monta la escena en 3D. Define encuadre, lente y posición antes de gastar créditos.</li>
<li><strong>Keyframe:</strong> genera una imagen con el modelo que mejor responda al estilo. Itera a baja resolución y guarda las semillas que funcionen.</li>
<li><strong>Movimiento:</strong> lleva el keyframe a Image to Video o a un modelo externo. Mantén el prompt de cámara corto y coherente entre tomas.</li>
<li><strong>Post:</strong> edita en PhotoCraft o FilmCraft, corrige color en LightCraft y exporta. El ecosistema evita el ida y vuelta entre suscripciones.</li>
</ol>
<h2 class="report-chapter">Dónde están los límites</h2>
<p>Varias Crafting Apps están en fase alpha o en desarrollo: PhotoCraft se presenta como “early alpha”, FilmCraft y EffectCraft como “in development”. Eso significa funciones incompletas, cambios de formato y bugs. No es un reemplazo maduro de Adobe para un estudio con plazos críticos, pero sí una alternativa real para aprender, prototipar y trabajar sin cuotas.</p>
<p>Studio, por su parte, depende de la nube y de la disponibilidad de modelos de terceros. Si un proveedor cambia precios o retira un modelo, el flujo se resiente. La recomendación es documentar prompts y ajustes, guardar los frames aprobados y no encadenar un proyecto entero a una sola versión.</p>
<p><strong>Veredicto:</strong> ArtCraft vale la pena por dos razones concretas. Primero, porque el control 2D/3D reduce el ensayo y error típico de los generadores de caja negra. Segundo, porque las Crafting Apps te devuelven herramientas de escritorio que no dependen de una suscripción. Empieza por Studio para generar, por PhotoCraft o FilmCraft para editar, y por el Launcher para mantener todo al día.</p>`,
    contentEn: `<h1>ArtCraft: the AI suite that lives on your desktop and doesn't charge you to open it</h1>
<p class="lead"><em>ArtCraft is not a single application. It is an image and video generation studio —ArtCraft Studio— plus a collection of sixteen native, open-source apps written in Rust that replicate everyday tools: photo editing, video editing, motion graphics, vector illustration, page layout, audio and even CAD. Understanding that split is the difference between installing something and knowing what it is for.</em></p>
${figure(
  `${IMG}/artcraft-estudio-ia-guia-completa.jpg`,
  'ArtCraft Studio 3D editor with an empty scene and the prompt field',
  'The ArtCraft Studio 3D editor lets you place the camera, subject and lights before generating. Image: ArtCraft'
)}
${stats([
  ['16', 'open-source Crafting Apps'],
  ['0.41.0', 'Studio version'],
  ['8 GB', 'minimum Windows RAM'],
  ['0', 'mandatory subscription'],
])}
<h2 class="report-chapter">Two products that complement each other</h2>
<p><strong>ArtCraft Studio</strong> is the generative booth. It installs as a desktop app on Windows and macOS, or runs directly in the browser. Inside you will find a 2D canvas for drawing, laying out references and inpainting; a 3D editor for composing scenes, posing characters and moving the camera; and a catalogue of image and video models that run on ArtCraft's cloud. The current version is 0.41.0.</p>
<p><strong>The Crafting Apps</strong> are something else: sixteen independent, free, open-source applications written in Rust that imitate the logic of Adobe and other suites. PhotoCraft edits images with layers and adjustments; FilmCraft cuts video on a timeline; EffectCraft handles motion graphics; VectorCraft draws vectors; DesignCraft lays out pages. They do not require a subscription, and many work offline.</p>
<p>The usual confusion is looking for them inside Studio. They are not there. They are installed and updated with <strong>ArtCraft Launcher</strong>, a separate manager now at version 0.13.0.</p>
<h2 class="report-chapter">What you can generate in Studio</h2>
<p>Studio supports two workflows. The first is the <strong>2D canvas</strong>: draw shapes, block the background, protect areas with masks and write a short prompt. The model respects the structure and improves fidelity. It is useful for storyboards, thumbnails, product mockups and targeted replacements without moving the rest of the scene.</p>
<p>The second is the <strong>3D editor</strong>: place subjects, objects and cameras in a real-time scene, pose the character, adjust camera height and focal length, and generate. The advantage is not the quality of a single frame but consistency across angles and takes. It is the difference between asking for “a woman on a spaceship” and directing a specific shot.</p>
<p>Studio also includes <em>Image to Video</em>, <em>Image to Location</em>, <em>Image to 3D Mesh</em> and a mixed-asset workflow that combines 3D primitives, images and text. The official documentation sums it up in three steps: choose a preset or import images, place the subject and camera, and add a concise style-and-material prompt.</p>
${quote(
  'Capable tools for artists. ArtCraft builds open source tools for artists. We pride ourselves on freedom of control and expression.',
  'AC',
  'ArtCraft team',
  'getartcraft.com'
)}
<h2 class="report-chapter">The 16 Crafting Apps at a glance</h2>
<ul>
<li><strong>PhotoCraft</strong> — image editing with layers, masks, adjustment layers, layer styles, type and vectors; opens PSD and PSB.</li>
<li><strong>FilmCraft</strong> — video editing with source and program monitors, a timeline, trim modes, native codecs and audio mixing.</li>
<li><strong>EffectCraft</strong> — compositing, keyframes, expressions, 259 effects, 3D cameras and lights, render queue and Lottie.</li>
<li><strong>VectorCraft</strong> — vector illustration with pen, booleans, image tracing, SVG/PDF and MCP support.</li>
<li><strong>DesignCraft</strong> — multi-page editorial layout, columns, styles and PDF export.</li>
<li><strong>LightCraft</strong> — color correction and grading with masking and grain tools.</li>
<li><strong>SoundCraft</strong> — audio editing and mixing, MIDI, automation and surround.</li>
<li><strong>TextureCraft</strong> — 3D texture painting, baking and map export.</li>
<li><strong>MaterialCraft</strong> — node-based procedural materials.</li>
<li><strong>PdfCraft</strong>, <strong>WordCraft</strong>, <strong>DeckCraft</strong>, <strong>FigCraft</strong>, <strong>CadCraft</strong>, <strong>GridCraft</strong> and <strong>Craft Anything</strong> complete the box: PDFs, documents, presentations, interfaces, CAD, spreadsheets and prototypes.</li>
</ul>
<h2 class="report-chapter">Available models</h2>
<p>ArtCraft does not train its own models: it acts as a control layer over external providers. The list changes often, so check the models page before planning a project.</p>
<table class="spec-table">
<thead><tr><th>Family</th><th>Main models</th><th>Recommended use</th></tr></thead>
<tbody>
<tr><td>Image</td><td>Nano Banana and Nano Banana Pro, GPT Image 1.5, Seedream 4.5, Flux Pro 1.1 Ultra, Midjourney, Grok</td><td>Keyframes, textures, illustration and style variations.</td></tr>
<tr><td>Editing</td><td>Flux Pro Kontext Max, Flux Pro Inpaint, Flux Dev Juggernaut Inpaint</td><td>Inpainting, object replacement and local corrections.</td></tr>
<tr><td>Video</td><td>Seedance 2.0, Kling 2.6 Pro, Veo 3.1 and 3.1 Fast, Sora 2 and 2 Pro, Grok Video</td><td>Image-to-video, short shots and keyframe animation.</td></tr>
</tbody>
</table>
<h2 class="report-chapter">What it really costs</h2>
<p>The software is free and open source. What you pay for are generation credits, because every image or second of video consumes cloud compute. At the time of writing, the Basic plan costs 8 dollars a month billed annually —1,000 credits, roughly 250 Nano Banana images— and Pro starts at 28 dollars a month. The website also applies a temporary 20% discount. Prices change; the logic does not: <strong>the app is yours forever, the credits are consumption</strong>.</p>
<p>If your work is mostly retouching, editing or vectors, you can use the Crafting Apps for free and reserve Studio for tasks that genuinely need a generative model. That is the most rational use of the ecosystem.</p>
<h2 class="report-chapter">Requirements and first launch</h2>
<p>Studio requires Windows 10 64-bit or newer, 8 GB of RAM and 2 GB of disk space; on macOS it needs version 12 or later. The web version avoids installation but depends on the connection and browser limits. For the Crafting Apps, the Launcher downloads only what you choose and keeps it updated.</p>
${doc(
  'https://getartcraft.com/',
  'WEB',
  'ArtCraft — official site',
  'Studio downloads, web access, Crafting Apps and documentation.'
)}
${doc(
  'https://getartcraft.com/pricing',
  'USD',
  'ArtCraft plans and credits',
  'Current prices, credit equivalents and discounts.'
)}
${doc(
  'https://getartcraft.com/faq/models-supported',
  'FAQ',
  'Supported image and video models',
  'Official, updated list of models available inside Studio.'
)}
<h2 class="report-chapter">A realistic workflow</h2>
<ol>
<li><strong>Ideas and references:</strong> gather a moodboard and write the script or shot list. AI accelerates execution, not direction.</li>
<li><strong>Blocking:</strong> draw the composition on the 2D canvas or build the scene in 3D. Define framing, lens and position before spending credits.</li>
<li><strong>Keyframe:</strong> generate an image with the model that best matches the style. Iterate at low resolution and save the seeds that work.</li>
<li><strong>Motion:</strong> take the keyframe to Image to Video or an external model. Keep the camera prompt short and consistent across shots.</li>
<li><strong>Post:</strong> edit in PhotoCraft or FilmCraft, grade in LightCraft and export. The ecosystem avoids bouncing between subscriptions.</li>
</ol>
<h2 class="report-chapter">Where the limits are</h2>
<p>Several Crafting Apps are in alpha or in development: PhotoCraft is labelled “early alpha”, FilmCraft and EffectCraft “in development”. That means incomplete features, format changes and bugs. It is not a mature Adobe replacement for a studio with critical deadlines, but it is a real alternative for learning, prototyping and working without subscriptions.</p>
<p>Studio, for its part, depends on the cloud and on third-party model availability. If a provider changes prices or retires a model, the workflow suffers. The recommendation is to document prompts and settings, save approved frames, and never chain an entire project to a single version.</p>
<p><strong>Verdict:</strong> ArtCraft is worth it for two concrete reasons. First, because 2D/3D control reduces the trial and error typical of black-box generators. Second, because the Crafting Apps give you desktop tools that do not depend on a subscription. Start with Studio to generate, PhotoCraft or FilmCraft to edit, and the Launcher to keep everything up to date.</p>`,
  },
  {
    id: '1381',
    slug: 'instalar-artcraft-launcher-apps-clon-adobe-windows',
    publishedAt: '2026-11-04T07:00:00-04:00',
    titleEs: 'Cómo instalar ArtCraft Launcher y las 16 apps en Windows sin romper nada',
    titleEn: 'How to install ArtCraft Launcher and all 16 apps on Windows without breaking anything',
    excerptEs:
      'El Launcher es la puerta de entrada a PhotoCraft, FilmCraft, EffectCraft y las demás Crafting Apps. Esta guía cubre requisitos, descarga, instalación, primer arranque, actualizaciones y los problemas típicos de Windows: SmartScreen, permisos, GPU y espacio en disco.',
    excerptEn:
      'The Launcher is the gateway to PhotoCraft, FilmCraft, EffectCraft and the other Crafting Apps. This guide covers requirements, download, installation, first launch, updates and the usual Windows problems: SmartScreen, permissions, GPU and disk space.',
    date: '2026-11-04',
    readTimeEs: '9 min de lectura',
    readTimeEn: '9 min read',
    imageUrl: `${IMG}/instalar-artcraft-launcher-apps-clon-adobe-windows.jpg`,
    imageCaption: 'Fotograma de la campaña oficial de ArtCraft. Imagen: ArtCraft',
    categoryEs: CAT_ES,
    categoryEn: CAT_EN,
    contentEs: `<h1>Cómo instalar ArtCraft Launcher y las 16 apps en Windows sin romper nada</h1>
<p class="lead"><em>Instalar ArtCraft no es descargar un solo programa. Studio y las Crafting Apps viven en paquetes separados, y el Launcher es el encargado de descargar, actualizar y ordenar las dieciséis aplicaciones nativas. Esta guía recorre el proceso completo en Windows, desde la verificación del sistema hasta el primer proyecto, con las trampas que suelen aparecer por el camino.</em></p>
${figure(
  `${IMG}/instalar-artcraft-launcher-apps-clon-adobe-windows.jpg`,
  'Campaña oficial de ArtCraft con personajes generados',
  'La campaña oficial resume el ecosistema: Studio para generar y las Crafting Apps para editar. Imagen: ArtCraft'
)}
${stats([
  ['16', 'apps en el catálogo'],
  ['0.13.0', 'versión del Launcher'],
  ['2 GB', 'disco para Studio'],
  ['3', 'sistemas: Windows, macOS, Linux'],
])}
<h2 class="report-chapter">Antes de descargar: qué necesitas</h2>
<p>El Launcher funciona en Windows 10 de 64 bits o superior, macOS y Linux. Para Studio, los requisitos oficiales son Windows 10 de 64 bits, 8 GB de RAM y 2 GB de disco libre; en macOS, versión 12 o posterior. Las Crafting Apps son más ligeras, pero conviene reservar espacio: PhotoCraft, FilmCraft y TextureCraft crecen rápido con cachés y proyectos.</p>
<p>También necesitas una cuenta de ArtCraft solo si vas a generar imágenes o video en Studio. Las apps de escritorio se pueden usar sin iniciar sesión. Si trabajas con material de clientes, crea una carpeta de proyectos fuera de la carpeta de instalación y otra para cachés, preferiblemente en un SSD.</p>
<h2 class="report-chapter">Paso a paso</h2>
<div class="news-timeline">
<div class="timeline-item"><span class="timeline-time">Paso 1</span><p class="timeline-text"><strong>Descarga el Launcher desde GitHub Releases.</strong> La versión estable es la 0.13.0. Evita los sitios de descargas de terceros: el binario oficial está firmado y publicado por el equipo de ArtCraft.</p></div>
<div class="timeline-item"><span class="timeline-time">Paso 2</span><p class="timeline-text"><strong>Ejecuta el instalador.</strong> Windows SmartScreen puede mostrar una advertencia porque el editor es independiente. Comprueba que el archivo venga del repositorio oficial y usa “Más información” → “Ejecutar de todas formas”. No desactives SmartScreen de forma global.</p></div>
<div class="timeline-item"><span class="timeline-time">Paso 3</span><p class="timeline-text"><strong>Elige la carpeta de instalación.</strong> Deja la ruta por defecto si no tienes una razón concreta. Si usas un disco secundario, instala allí las apps, pero mantén el Launcher en el disco del sistema para que encuentre las actualizaciones.</p></div>
<div class="timeline-item"><span class="timeline-time">Paso 4</span><p class="timeline-text"><strong>Abre el Launcher y revisa el catálogo.</strong> Verás las dieciséis apps con su estado: instalada, disponible o con actualización pendiente. No hace falta instalar todo el primer día.</p></div>
<div class="timeline-item"><span class="timeline-time">Paso 5</span><p class="timeline-text"><strong>Marca las apps que necesitas.</strong> Para empezar: PhotoCraft, FilmCraft, EffectCraft y VectorCraft. Añade DesignCraft si maquetas, SoundCraft si mezclas audio y LightCraft si haces color.</p></div>
<div class="timeline-item"><span class="timeline-time">Paso 6</span><p class="timeline-text"><strong>Instala y actualiza.</strong> El Launcher descarga en paralelo y avisa cuando hay una versión nueva. Cierra las apps antes de actualizar para evitar archivos bloqueados.</p></div>
</div>
<h2 class="report-chapter">Studio va aparte</h2>
<p>ArtCraft Studio no se instala desde el Launcher. Se descarga desde la página oficial: hay un instalador para Windows de 64 bits, una build universal para macOS y una versión web. El instalador actual corresponde a la versión 0.41.0. Si solo quieres probar la generación, la web es la vía más rápida; si necesitas estabilidad y archivos locales, usa la app de escritorio.</p>
${doc(
  'https://github.com/storytold/craft-launcher/releases/tag/v0.13.0',
  'APP',
  'ArtCraft Launcher 0.13.0',
  'Descarga oficial y notas de la versión del gestor de Crafting Apps.'
)}
${doc(
  'https://getartcraft.com/download',
  'EXE',
  'Descargar ArtCraft Studio',
  'Instalador de Windows, build de macOS y acceso a la versión web.'
)}
${doc(
  'https://github.com/storytold',
  'GIT',
  'Código fuente en GitHub',
  'Repositorios de Studio, el Launcher y cada Crafting App.'
)}
<h2 class="report-chapter">Primer arranque: ajustes que conviene tocar</h2>
<ul>
<li><strong>Carpeta de proyectos:</strong> define una ruta clara y con espacio. PhotoCraft y FilmCraft generan archivos temporales grandes.</li>
<li><strong>Caché de medios:</strong> si editas video en 4K, mueve la caché a un SSD y borra la carpeta al terminar cada proyecto.</li>
<li><strong>Aceleración por GPU:</strong> comprueba que los drivers estén actualizados. Si la app se cierra al abrir un proyecto, prueba primero sin aceleración y aísla el problema.</li>
<li><strong>Autoguardado:</strong> actívalo si la versión lo permite. Las apps están en desarrollo y un cierre inesperado no debería costarte una tarde.</li>
<li><strong>Idioma y unidades:</strong> revisa que la app use píxeles y no pulgadas en documentos nuevos, y que la tasa de fotogramas coincida con la del proyecto.</li>
</ul>
<h2 class="report-chapter">Problemas frecuentes y cómo salir de ellos</h2>
<table class="spec-table">
<thead><tr><th>Síntoma</th><th>Causa probable</th><th>Solución</th></tr></thead>
<tbody>
<tr><td>SmartScreen bloquea el instalador</td><td>Editor independiente sin reputación acumulada</td><td>Verifica el origen y usa “Ejecutar de todas formas”.</td></tr>
<tr><td>El Launcher no descarga</td><td>Proxy, firewall o antivirus</td><td>Añade una excepción para el Launcher y permite las descargas HTTPS.</td></tr>
<tr><td>Una app se cierra al abrir</td><td>Driver GPU o caché corrupta</td><td>Actualiza drivers, borra la caché y reinicia.</td></tr>
<tr><td>El video va a tirones</td><td>Proxies o códecs no nativos</td><td>Genera proxies, baja la reproducción a media resolución y usa archivos intra-frame.</td></tr>
<tr><td>Falta espacio en disco</td><td>Cachés y proyectos antiguos</td><td>Limpia temporales y mueve proyectos terminados a otro disco.</td></tr>
</tbody>
</table>
<h2 class="report-chapter">Cómo mantener el ecosistema sano</h2>
<p>Actualiza el Launcher primero y las apps después. Si una versión nueva rompe un proyecto, conserva la anterior hasta terminar el trabajo y actualiza al cerrar. Para producciones largas, congela versiones: no actualices en mitad de un montaje. Y no mezcles carpetas de instalación entre usuarios de Windows; los permisos pueden impedir que las apps escriban en sus cachés.</p>
${quote(
  'Open-source tools for artists: the Craft Apps and ArtCraft Studio, our AI image and video app.',
  'AC',
  'Equipo de ArtCraft',
  'getartcraft.com'
)}
<p><strong>Conclusión:</strong> el orden correcto es Launcher → apps de edición → Studio. Si empiezas por Studio y buscas PhotoCraft dentro, perderás tiempo. Si empiezas por el Launcher y eliges solo las apps que necesitas, tendrás un estudio funcional en menos de media hora y sin pagar una suscripción.</p>`,
    contentEn: `<h1>How to install ArtCraft Launcher and all 16 apps on Windows without breaking anything</h1>
<p class="lead"><em>Installing ArtCraft is not a single download. Studio and the Crafting Apps live in separate packages, and the Launcher is responsible for downloading, updating and organising the sixteen native applications. This guide walks through the full process on Windows, from checking your system to your first project, including the traps that usually appear along the way.</em></p>
${figure(
  `${IMG}/instalar-artcraft-launcher-apps-clon-adobe-windows.jpg`,
  'Official ArtCraft campaign with generated characters',
  'The official campaign sums up the ecosystem: Studio to generate, the Crafting Apps to edit. Image: ArtCraft'
)}
${stats([
  ['16', 'apps in the catalogue'],
  ['0.13.0', 'Launcher version'],
  ['2 GB', 'disk space for Studio'],
  ['3', 'systems: Windows, macOS, Linux'],
])}
<h2 class="report-chapter">Before downloading: what you need</h2>
<p>The Launcher runs on Windows 10 64-bit or newer, macOS and Linux. For Studio, the official requirements are Windows 10 64-bit, 8 GB of RAM and 2 GB of free disk space; on macOS, version 12 or later. The Crafting Apps are lighter, but you should still reserve space: PhotoCraft, FilmCraft and TextureCraft grow quickly with caches and projects.</p>
<p>You only need an ArtCraft account if you plan to generate images or video in Studio. The desktop apps can be used without signing in. If you work with client material, create a project folder outside the installation folder and another for caches, preferably on an SSD.</p>
<h2 class="report-chapter">Step by step</h2>
<div class="news-timeline">
<div class="timeline-item"><span class="timeline-time">Step 1</span><p class="timeline-text"><strong>Download the Launcher from GitHub Releases.</strong> The stable version is 0.13.0. Avoid third-party download sites: the official binary is signed and published by the ArtCraft team.</p></div>
<div class="timeline-item"><span class="timeline-time">Step 2</span><p class="timeline-text"><strong>Run the installer.</strong> Windows SmartScreen may show a warning because the publisher is independent. Check that the file comes from the official repository and use “More info” → “Run anyway”. Do not disable SmartScreen globally.</p></div>
<div class="timeline-item"><span class="timeline-time">Step 3</span><p class="timeline-text"><strong>Choose the installation folder.</strong> Keep the default path unless you have a specific reason. If you use a secondary drive, install the apps there but keep the Launcher on the system drive so it can find updates.</p></div>
<div class="timeline-item"><span class="timeline-time">Step 4</span><p class="timeline-text"><strong>Open the Launcher and review the catalogue.</strong> You will see the sixteen apps with their status: installed, available or update pending. You do not need to install everything on day one.</p></div>
<div class="timeline-item"><span class="timeline-time">Step 5</span><p class="timeline-text"><strong>Select the apps you need.</strong> To start: PhotoCraft, FilmCraft, EffectCraft and VectorCraft. Add DesignCraft for layout, SoundCraft for audio and LightCraft for color.</p></div>
<div class="timeline-item"><span class="timeline-time">Step 6</span><p class="timeline-text"><strong>Install and update.</strong> The Launcher downloads in parallel and notifies you when a new version is available. Close the apps before updating to avoid locked files.</p></div>
</div>
<h2 class="report-chapter">Studio is separate</h2>
<p>ArtCraft Studio is not installed from the Launcher. It is downloaded from the official page: there is a Windows 64-bit installer, a universal macOS build and a web version. The current installer is version 0.41.0. If you only want to test generation, the web is the fastest route; if you need stability and local files, use the desktop app.</p>
${doc(
  'https://github.com/storytold/craft-launcher/releases/tag/v0.13.0',
  'APP',
  'ArtCraft Launcher 0.13.0',
  'Official download and release notes for the Crafting Apps manager.'
)}
${doc(
  'https://getartcraft.com/download',
  'EXE',
  'Download ArtCraft Studio',
  'Windows installer, macOS build and access to the web version.'
)}
${doc(
  'https://github.com/storytold',
  'GIT',
  'Source code on GitHub',
  'Repositories for Studio, the Launcher and every Crafting App.'
)}
<h2 class="report-chapter">First launch: settings worth touching</h2>
<ul>
<li><strong>Project folder:</strong> define a clear path with space. PhotoCraft and FilmCraft generate large temporary files.</li>
<li><strong>Media cache:</strong> if you edit 4K video, move the cache to an SSD and clear the folder at the end of each project.</li>
<li><strong>GPU acceleration:</strong> make sure drivers are up to date. If the app crashes when opening a project, test without acceleration first and isolate the problem.</li>
<li><strong>Autosave:</strong> enable it if the version supports it. The apps are in development and an unexpected close should not cost you an afternoon.</li>
<li><strong>Language and units:</strong> check that the app uses pixels rather than inches for new documents, and that the frame rate matches the project.</li>
</ul>
<h2 class="report-chapter">Common problems and how to get out of them</h2>
<table class="spec-table">
<thead><tr><th>Symptom</th><th>Likely cause</th><th>Fix</th></tr></thead>
<tbody>
<tr><td>SmartScreen blocks the installer</td><td>Independent publisher without accumulated reputation</td><td>Verify the source and use “Run anyway”.</td></tr>
<tr><td>The Launcher does not download</td><td>Proxy, firewall or antivirus</td><td>Add an exception for the Launcher and allow HTTPS downloads.</td></tr>
<tr><td>An app closes on open</td><td>GPU driver or corrupt cache</td><td>Update drivers, clear the cache and restart.</td></tr>
<tr><td>Video playback stutters</td><td>Proxies or non-native codecs</td><td>Generate proxies, lower playback resolution and use intra-frame files.</td></tr>
<tr><td>Disk space is running out</td><td>Caches and old projects</td><td>Clean temporary files and move finished projects to another drive.</td></tr>
</tbody>
</table>
<h2 class="report-chapter">Keeping the ecosystem healthy</h2>
<p>Update the Launcher first and the apps afterwards. If a new version breaks a project, keep the previous one until the work is finished and update when you close it. For long productions, freeze versions: do not update in the middle of an edit. And do not mix installation folders between Windows users; permissions can prevent the apps from writing to their caches.</p>
${quote(
  'Open-source tools for artists: the Craft Apps and ArtCraft Studio, our AI image and video app.',
  'AC',
  'ArtCraft team',
  'getartcraft.com'
)}
<p><strong>Conclusion:</strong> the right order is Launcher → editing apps → Studio. If you start with Studio and look for PhotoCraft inside it, you will waste time. If you start with the Launcher and install only the apps you need, you will have a working studio in under half an hour and without paying a subscription.</p>`,
  },
  {
    id: '1382',
    slug: 'photocraft-vs-photoshop-editar-imagenes-ia',
    publishedAt: '2026-11-04T08:00:00-04:00',
    titleEs: 'PhotoCraft: editar un PSD como en Photoshop, sin suscripción y con IA al lado',
    titleEn: 'PhotoCraft: edit a PSD like Photoshop, without a subscription and with AI next door',
    excerptEs:
      'PhotoCraft abre PSD y PSB, trabaja con capas, máscaras, 16 capas de ajuste y más de 70 filtros, y está escrito en Rust. Esta guía explica cómo retocar un retrato paso a paso, cómo hacer el ida y vuelta con el inpaint de ArtCraft Studio y en qué se diferencia todavía de Photoshop.',
    excerptEn:
      'PhotoCraft opens PSD and PSB, works with layers, masks, 16 adjustment layers and more than 70 filters, and is written in Rust. This guide explains how to retouch a portrait step by step, how to round-trip with ArtCraft Studio inpainting, and where it still differs from Photoshop.',
    date: '2026-11-04',
    readTimeEs: '10 min de lectura',
    readTimeEn: '10 min read',
    imageUrl: `${IMG}/photocraft-vs-photoshop-editar-imagenes-ia.jpg`,
    imageCaption: 'PhotoCraft con capas, curvas y estilos de capa. Imagen: ArtCraft',
    categoryEs: CAT_ES,
    categoryEn: CAT_EN,
    contentEs: `<h1>PhotoCraft: editar un PSD como en Photoshop, sin suscripción y con IA al lado</h1>
<p class="lead"><em>PhotoCraft es la apuesta de ArtCraft por la edición de imágenes de escritorio: capas, máscaras, capas de ajuste, estilos, texto y vectores en una app nativa escrita en Rust. Está en fase alpha y no pretende ser Photoshop todavía, pero ya cubre el 80% del trabajo diario de un fotógrafo o un diseñador. La clave está en usarla para lo que hace bien y pasar el resto a Studio.</em></p>
${figure(
  `${IMG}/photocraft-vs-photoshop-editar-imagenes-ia.jpg`,
  'PhotoCraft editando La gran ola de Kanagawa con capas de ajuste',
  'PhotoCraft sobre una imagen de dominio público: capas, curvas y estilos de capa en una app nativa. Imagen: ArtCraft'
)}
${stats([
  ['PSD/PSB', 'formatos de Photoshop'],
  ['16', 'capas de ajuste'],
  ['70+', 'filtros'],
  ['0', 'suscripción'],
])}
<h2 class="report-chapter">Qué es PhotoCraft (y qué no)</h2>
<p>PhotoCraft es un editor de imágenes de escritorio, open source y offline, con una interfaz deliberadamente familiar para quien viene de Photoshop: barra de herramientas a la izquierda, panel de capas a la derecha, menús de ajustes y filtros. Abre archivos PSD y PSB, conserva capas y máscaras, y permite exportar a los formatos habituales. La versión actual se presenta como <em>early alpha</em>: funciona, pero no está terminada.</p>
<p>No es un clon completo. No esperes la biblioteca de plugins de Adobe, la integración con Lightroom o todas las herramientas de selección automática. Tampoco tiene todavía la madurez de un editor con décadas de desarrollo. Lo que sí ofrece es una base sólida, rápida y sin cuota, que se complementa con el inpaint de ArtCraft Studio.</p>
<h2 class="report-chapter">La interfaz que ya conoces</h2>
<ul>
<li><strong>Capas y grupos:</strong> ordena el documento como en cualquier editor profesional; renombra, bloquea y agrupa.</li>
<li><strong>Máscaras de capa:</strong> pinta en blanco y negro para ocultar o revelar sin destruir píxeles.</li>
<li><strong>Capas de ajuste:</strong> curvas, niveles, vibrancia, equilibrio de color, exposición y más, con opción de recortar a la capa inferior.</li>
<li><strong>Estilos de capa:</strong> sombra, resplandor, trazo y bisel para logotipos y títulos.</li>
<li><strong>Texto y vectores:</strong> capas de texto editables y formas vectoriales dentro del mismo documento.</li>
<li><strong>Pinceles:</strong> ajusta tamaño, dureza y opacidad; usa tabletas con presión si el controlador lo permite.</li>
</ul>
<h2 class="report-chapter">Tutorial: retoque de un retrato en siete pasos</h2>
<ol>
<li><strong>Abre el archivo y revisa el color.</strong> Confirma el perfil incrustado y el espacio de color. Si el PSD viene de una cámara o de un cliente, duplica el documento antes de tocar nada.</li>
<li><strong>Duplica la capa base</strong> con Ctrl+J. Trabaja siempre en capas separadas: así puedes comparar antes y después con el ojo de la capa.</li>
<li><strong>Corrige la exposición</strong> con una capa de Curvas o Niveles recortada al retrato. Sube las sombras sin aplastar los negros y baja las altas luces sin volver gris la piel.</li>
<li><strong>Limpia imperfecciones</strong> en una capa vacía con el pincel y la máscara. Para zonas grandes, usa parches o duplica una zona limpia y mezcla con baja opacidad.</li>
<li><strong>Separa el sujeto del fondo</strong> con una máscara. Revisa el pelo con un pincel suave y amplía al 200% para detectar halos.</li>
<li><strong>Ajusta el color</strong> con Vibrancia y Equilibrio de color. Si el retrato es para video, iguala el look con el resto de los planos antes de exportar.</li>
<li><strong>Guarda el PSD y exporta</strong> una copia en TIFF o PNG para conservar la máxima calidad. No exportes JPEG hasta el final.</li>
</ol>
<h2 class="report-chapter">El ida y vuelta con ArtCraft Studio</h2>
<p>El flujo más potente no es editar todo en PhotoCraft, sino combinarlo con Studio. Exporta el plano o el retrato como PNG, ábrelo en el <strong>canvas 2D</strong> de ArtCraft y usa <em>Edit Image</em> o <em>Inpaint</em> para cambiar solo una zona: un logo en la ropa, una mano, un reflejo, un objeto que distrae. La regla es sencilla: máscaras pequeñas, prompts cortos y una sola intención por pasada.</p>
<p>Cuando el resultado te convenza, vuelve a PhotoCraft y colócalo como capa nueva. Conserva la versión original oculta para poder comparar. Este ida y vuelta es más rápido que reconstruir el retoque entero y evita que la IA reinterprete toda la imagen.</p>
${quote(
  'The image editor you already know how to use.',
  'AC',
  'ArtCraft',
  'PhotoCraft, página oficial'
)}
<h2 class="report-chapter">PhotoCraft frente a Photoshop</h2>
<table class="spec-table">
<thead><tr><th>Criterio</th><th>PhotoCraft</th><th>Photoshop</th></tr></thead>
<tbody>
<tr><td>Precio</td><td>Gratis y open source</td><td>Suscripción mensual</td></tr>
<tr><td>Licencia</td><td>Código abierto</td><td>Propietaria</td></tr>
<tr><td>PSD/PSB</td><td>Sí, con capas y máscaras</td><td>Sí, formato nativo</td></tr>
<tr><td>Capas de ajuste</td><td>16</td><td>Catálogo amplio</td></tr>
<tr><td>Filtros</td><td>Más de 70</td><td>Más de 100, con plugins</td></tr>
<tr><td>IA integrada</td><td>Vía ArtCraft Studio (inpaint, generación)</td><td>Firefly y modelos asociados</td></tr>
<tr><td>Ecosistema</td><td>En crecimiento, alpha</td><td>Maduro, con plugins y servicios</td></tr>
</tbody>
</table>
<h2 class="report-chapter">Consejos de rendimiento</h2>
<p>Trabaja con documentos de 8 y 16 bits según el destino. Si el archivo supera los 100 megapíxeles, usa capas inteligentes y evita duplicar imágenes completas: duplica ajustes, no píxeles. Cierra documentos que no estés usando y mantén la caché en un SSD. En equipos con poca RAM, reduce el número de pasos de historia y guarda versiones intermedias.</p>
${doc(
  'https://getartcraft.com/apps/photocraft',
  'IMG',
  'PhotoCraft — página oficial',
  'Funciones, capturas y descarga mediante el Launcher.'
)}
${doc(
  'https://github.com/storytold/photocraft',
  'GIT',
  'PhotoCraft en GitHub',
  'Código fuente, incidencias y notas de versión.'
)}
${doc(
  'https://getartcraft.com/faq/edit-image',
  'IA',
  'Edit Image — inpaint y reemplazo',
  'Cómo usar máscaras y prompts para cambiar solo una zona de la imagen.'
)}
<p><strong>Veredicto:</strong> PhotoCraft ya sirve para retoque, composición y preparación de archivos. No sustituye a Photoshop en un estudio con flujos complejos, pero elimina la suscripción para tareas que no necesitan plugins. Úsalo como editor principal si tu trabajo es directo; úsalo como segundo editor si dependes de Adobe. En ambos casos, el inpaint de Studio es el complemento que justifica tener las dos apps abiertas.</p>`,
    contentEn: `<h1>PhotoCraft: edit a PSD like Photoshop, without a subscription and with AI next door</h1>
<p class="lead"><em>PhotoCraft is ArtCraft's bet on desktop image editing: layers, masks, adjustment layers, styles, type and vectors in a native app written in Rust. It is in alpha and does not pretend to be Photoshop yet, but it already covers 80% of a photographer's or designer's daily work. The key is to use it for what it does well and pass the rest to Studio.</em></p>
${figure(
  `${IMG}/photocraft-vs-photoshop-editar-imagenes-ia.jpg`,
  'PhotoCraft editing The Great Wave off Kanagawa with adjustment layers',
  'PhotoCraft on a public-domain image: layers, curves and layer styles in a native app. Image: ArtCraft'
)}
${stats([
  ['PSD/PSB', 'Photoshop formats'],
  ['16', 'adjustment layers'],
  ['70+', 'filters'],
  ['0', 'subscription'],
])}
<h2 class="report-chapter">What PhotoCraft is (and is not)</h2>
<p>PhotoCraft is a desktop image editor, open source and offline, with an interface deliberately familiar to anyone coming from Photoshop: toolbar on the left, layers panel on the right, adjustment and filter menus. It opens PSD and PSB files, preserves layers and masks, and exports to the usual formats. The current version is labelled <em>early alpha</em>: it works, but it is not finished.</p>
<p>It is not a complete clone. Do not expect Adobe's plugin library, Lightroom integration or every automatic selection tool. Nor does it yet have the maturity of an editor with decades of development. What it does offer is a solid, fast, subscription-free base that complements ArtCraft Studio's inpainting.</p>
<h2 class="report-chapter">The interface you already know</h2>
<ul>
<li><strong>Layers and groups:</strong> order the document like any professional editor; rename, lock and group.</li>
<li><strong>Layer masks:</strong> paint in black and white to hide or reveal without destroying pixels.</li>
<li><strong>Adjustment layers:</strong> curves, levels, vibrance, color balance, exposure and more, with the option to clip to the layer below.</li>
<li><strong>Layer styles:</strong> shadow, glow, stroke and bevel for logos and titles.</li>
<li><strong>Type and vectors:</strong> editable text layers and vector shapes inside the same document.</li>
<li><strong>Brushes:</strong> adjust size, hardness and opacity; use pressure-sensitive tablets if the driver allows it.</li>
</ul>
<h2 class="report-chapter">Tutorial: retouching a portrait in seven steps</h2>
<ol>
<li><strong>Open the file and check color.</strong> Confirm the embedded profile and color space. If the PSD comes from a camera or a client, duplicate the document before touching anything.</li>
<li><strong>Duplicate the base layer</strong> with Ctrl+J. Always work on separate layers so you can compare before and after with the layer eye.</li>
<li><strong>Fix exposure</strong> with a Curves or Levels layer clipped to the portrait. Lift the shadows without crushing blacks and lower highlights without turning skin gray.</li>
<li><strong>Clean imperfections</strong> on an empty layer with the brush and mask. For large areas, use patches or duplicate a clean area and blend at low opacity.</li>
<li><strong>Separate the subject from the background</strong> with a mask. Check the hair with a soft brush and zoom to 200% to catch halos.</li>
<li><strong>Adjust color</strong> with Vibrance and Color Balance. If the portrait is for video, match the look to the rest of the shots before exporting.</li>
<li><strong>Save the PSD and export</strong> a copy as TIFF or PNG to preserve maximum quality. Do not export JPEG until the end.</li>
</ol>
<h2 class="report-chapter">The round trip with ArtCraft Studio</h2>
<p>The most powerful workflow is not to edit everything in PhotoCraft, but to combine it with Studio. Export the shot or portrait as PNG, open it in ArtCraft's <strong>2D canvas</strong> and use <em>Edit Image</em> or <em>Inpaint</em> to change only one area: a logo on clothing, a hand, a reflection, a distracting object. The rule is simple: small masks, short prompts and one intention per pass.</p>
<p>When the result convinces you, return to PhotoCraft and place it as a new layer. Keep the original version hidden so you can compare. This round trip is faster than rebuilding the whole retouch and prevents the AI from reinterpreting the entire image.</p>
${quote(
  'The image editor you already know how to use.',
  'AC',
  'ArtCraft',
  'PhotoCraft, official page'
)}
<h2 class="report-chapter">PhotoCraft versus Photoshop</h2>
<table class="spec-table">
<thead><tr><th>Criterion</th><th>PhotoCraft</th><th>Photoshop</th></tr></thead>
<tbody>
<tr><td>Price</td><td>Free and open source</td><td>Monthly subscription</td></tr>
<tr><td>License</td><td>Open source</td><td>Proprietary</td></tr>
<tr><td>PSD/PSB</td><td>Yes, with layers and masks</td><td>Yes, native format</td></tr>
<tr><td>Adjustment layers</td><td>16</td><td>Broad catalogue</td></tr>
<tr><td>Filters</td><td>More than 70</td><td>More than 100, plus plugins</td></tr>
<tr><td>Built-in AI</td><td>Via ArtCraft Studio (inpaint, generation)</td><td>Firefly and associated models</td></tr>
<tr><td>Ecosystem</td><td>Growing, alpha</td><td>Mature, with plugins and services</td></tr>
</tbody>
</table>
<h2 class="report-chapter">Performance tips</h2>
<p>Work in 8 or 16 bits depending on the destination. If the file exceeds 100 megapixels, use smart objects and avoid duplicating full images: duplicate adjustments, not pixels. Close documents you are not using and keep the cache on an SSD. On machines with little RAM, reduce history steps and save intermediate versions.</p>
${doc(
  'https://getartcraft.com/apps/photocraft',
  'IMG',
  'PhotoCraft — official page',
  'Features, screenshots and download through the Launcher.'
)}
${doc(
  'https://github.com/storytold/photocraft',
  'GIT',
  'PhotoCraft on GitHub',
  'Source code, issues and release notes.'
)}
${doc(
  'https://getartcraft.com/faq/edit-image',
  'AI',
  'Edit Image — inpaint and replace',
  'How to use masks and prompts to change only one area of the image.'
)}
<p><strong>Verdict:</strong> PhotoCraft is already useful for retouching, compositing and file preparation. It does not replace Photoshop in a studio with complex workflows, but it removes the subscription for tasks that do not need plugins. Use it as your main editor if your work is straightforward; use it as a second editor if you depend on Adobe. Either way, Studio's inpainting is the complement that justifies having both apps open.</p>`,
  },
  {
    id: '1383',
    slug: 'filmcraft-editor-video-clon-premiere-gratis',
    publishedAt: '2026-11-04T09:00:00-04:00',
    titleEs: 'FilmCraft: montar video como en Premiere, con códecs propios y sin cuota mensual',
    titleEn: 'FilmCraft: cut video like Premiere, with its own codecs and no monthly fee',
    excerptEs:
      'FilmCraft es el editor de video de ArtCraft: monitores de fuente y programa, timeline, todos los modos de recorte, atajos J/K/L, 55 efectos, 30 transiciones y normalización EBU R128. Esta guía recorre un montaje completo y explica dónde todavía no llega.',
    excerptEn:
      "FilmCraft is ArtCraft's video editor: source and program monitors, a timeline, every trim mode, J/K/L shortcuts, 55 effects, 30 transitions and EBU R128 loudness normalisation. This guide walks through a complete edit and explains where it still falls short.",
    date: '2026-11-04',
    readTimeEs: '10 min de lectura',
    readTimeEn: '10 min read',
    imageUrl: `${IMG}/filmcraft-editor-video-clon-premiere-gratis.jpg`,
    imageCaption: 'FilmCraft con monitores de fuente y programa, timeline y controles de color. Imagen: ArtCraft',
    categoryEs: CAT_ES,
    categoryEn: CAT_EN,
    contentEs: `<h1>FilmCraft: montar video como en Premiere, con códecs propios y sin cuota mensual</h1>
<p class="lead"><em>FilmCraft es el intento más ambicioso de ArtCraft: un editor de video nativo, escrito en Rust, con la disposición clásica de Premiere —monitor de fuente, monitor de programa, timeline y panel de propiedades— y códecs propios. Está en desarrollo, pero ya permite montar, recortar, etalonar y exportar sin pagar una suscripción. Aquí está el flujo completo y los límites que conviene conocer.</em></p>
${figure(
  `${IMG}/filmcraft-editor-video-clon-premiere-gratis.jpg`,
  'FilmCraft con timeline, monitores y panel de propiedades',
  'FilmCraft reproduce la lógica de Premiere: fuente, programa, timeline y propiedades. Imagen: ArtCraft'
)}
${stats([
  ['55', 'efectos de video'],
  ['30', 'transiciones'],
  ['EBU R128', 'normalización de audio'],
  ['0', 'cuota mensual'],
])}
<h2 class="report-chapter">Qué trae la beta</h2>
<p>La estructura es la que ya conoces: proyecto, bandeja de medios, monitor de fuente para revisar clips, monitor de programa para ver el corte y una timeline con pistas de video y audio. FilmCraft implementa los modos de recorte habituales —ripple, roll, slip y slide—, atajos de transporte J/K/L y un panel de propiedades con transformación, opacidad, recorte y controles de color.</p>
<p>Además de los 55 efectos y las 30 transiciones, incluye medidores de audio y normalización EBU R128, algo que muchos editores gratuitos dejan para el final. Los códecs son propios, no una envoltura sobre FFmpeg: eso permite leer y escribir archivos sin depender de librerías externas, aunque también significa que algunos formatos exóticos todavía fallen.</p>
<h2 class="report-chapter">Tutorial: del ingreso a la exportación</h2>
<div class="news-timeline">
<div class="timeline-item"><span class="timeline-time">Paso 1</span><p class="timeline-text"><strong>Crea el proyecto y la carpeta de medios.</strong> Copia las tarjetas a un disco de trabajo, no edites desde la tarjeta. Define la tasa de fotogramas y la resolución antes de importar.</p></div>
<div class="timeline-item"><span class="timeline-time">Paso 2</span><p class="timeline-text"><strong>Ingesta y organiza.</strong> Crea bandejas por escena o por día, etiqueta los clips buenos y marca los descartes. Un proyecto ordenado ahorra horas de búsqueda.</p></div>
<div class="timeline-item"><span class="timeline-time">Paso 3</span><p class="timeline-text"><strong>Ensambla con insert y overwrite.</strong> Usa J/K/L para revisar a velocidad variable: J retrocede, K pausa, L avanza; pulsa varias veces para acelerar. Marca entradas y salidas con I y O.</p></div>
<div class="timeline-item"><span class="timeline-time">Paso 4</span><p class="timeline-text"><strong>Ajusta el ritmo con los modos de recorte.</strong> Ripple cambia la duración y desplaza lo demás; roll mueve el punto de corte; slip y slide ajustan el contenido sin mover la posición en la timeline.</p></div>
<div class="timeline-item"><span class="timeline-time">Paso 5</span><p class="timeline-text"><strong>Corrige el color.</strong> Iguala exposición y balance de blancos antes de añadir un look. Usa los monitores de forma y los medidores para no quemar altas luces.</p></div>
<div class="timeline-item"><span class="timeline-time">Paso 6</span><p class="timeline-text"><strong>Mezcla el audio.</strong> Normaliza la locución y la música por separado. Para publicación web, apunta a −14 LUFS; para televisión, a −23 LUFS según EBU R128.</p></div>
<div class="timeline-item"><span class="timeline-time">Paso 7</span><p class="timeline-text"><strong>Exporta y verifica.</strong> Genera un master de alta calidad y una copia H.264 para revisión. Comprueba el archivo en otro reproductor antes de entregarlo.</p></div>
</div>
<h2 class="report-chapter">Atajos que ahorran horas</h2>
<table class="spec-table">
<thead><tr><th>Atajo</th><th>Función</th><th>Cuándo usarlo</th></tr></thead>
<tbody>
<tr><td>J / K / L</td><td>Retroceder, pausar, avanzar</td><td>Revisión rápida de tomas largas.</td></tr>
<tr><td>I / O</td><td>Marcar entrada y salida</td><td>Definir el fragmento antes de insertarlo.</td></tr>
<tr><td>Q / W</td><td>Insertar o sobrescribir</td><td>Montar sin arrastrar clips.</td></tr>
<tr><td>, / .</td><td>Recortar un fotograma</td><td>Ajustes finos de sincronización.</td></tr>
<tr><td>Ctrl/Cmd + Z</td><td>Deshacer</td><td>Probar variantes sin miedo.</td></tr>
</tbody>
</table>
<h2 class="report-chapter">FilmCraft frente a Premiere</h2>
<table class="spec-table">
<thead><tr><th>Criterio</th><th>FilmCraft</th><th>Premiere Pro</th></tr></thead>
<tbody>
<tr><td>Precio</td><td>Gratis y open source</td><td>Suscripción mensual</td></tr>
<tr><td>Timeline</td><td>Sí, con modos de recorte</td><td>Sí, estándar de la industria</td></tr>
<tr><td>Códecs</td><td>Propios, en Rust</td><td>Amplio soporte y plugins</td></tr>
<tr><td>Efectos</td><td>55</td><td>Cientos, con ecosistema de terceros</td></tr>
<tr><td>Audio</td><td>EBU R128 integrado</td><td>Sí, con Essential Sound</td></tr>
<tr><td>Madurez</td><td>En desarrollo</td><td>Maduro, con integración Adobe</td></tr>
</tbody>
</table>
<h2 class="report-chapter">Límites honestos</h2>
<p>FilmCraft no es todavía un reemplazo de Premiere para una productora con entregas semanales. No tiene el ecosistema de plugins, la colaboración en la nube ni la integración con After Effects y Audition. Algunos códecs y archivos con metadatos complejos pueden fallar. Si el proyecto es crítico, trabaja con copias y exporta masters intermedios.</p>
<p>Dicho eso, para un canal de YouTube, un documental corto o una pieza corporativa, la combinación de FilmCraft con EffectCraft y SoundCraft cubre el ciclo completo. La ventaja de no pagar suscripción compensa la falta de funciones avanzadas si tu flujo es sencillo.</p>
${quote(
  'Professional video editing, rebuilt from scratch. Source and program monitors, a real timeline and every trim mode, in a native editor written in pure Rust — down to its own codecs.',
  'AC',
  'ArtCraft',
  'FilmCraft, página oficial'
)}
${doc(
  'https://getartcraft.com/apps/filmcraft',
  'VID',
  'FilmCraft — página oficial',
  'Funciones, capturas y descarga mediante el Launcher.'
)}
${doc(
  'https://github.com/storytold/filmcraft',
  'GIT',
  'FilmCraft en GitHub',
  'Código fuente, incidencias y estado del desarrollo.'
)}
<p><strong>Recomendación:</strong> instala FilmCraft, monta una pieza corta y decide con evidencia. Si el proyecto depende de plugins o de un equipo grande, quédate en Premiere por ahora. Si tu cuello de botella es la cuota mensual y tu flujo cabe en una timeline lineal, FilmCraft ya es una alternativa seria.</p>`,
    contentEn: `<h1>FilmCraft: cut video like Premiere, with its own codecs and no monthly fee</h1>
<p class="lead"><em>FilmCraft is ArtCraft's most ambitious attempt yet: a native video editor written in Rust, with Premiere's classic layout —source monitor, program monitor, timeline and properties panel— and its own codecs. It is in development, but it already lets you assemble, trim, grade and export without paying a subscription. Here is the full workflow and the limits you should know.</em></p>
${figure(
  `${IMG}/filmcraft-editor-video-clon-premiere-gratis.jpg`,
  'FilmCraft with timeline, monitors and properties panel',
  'FilmCraft reproduces Premiere logic: source, program, timeline and properties. Image: ArtCraft'
)}
${stats([
  ['55', 'video effects'],
  ['30', 'transitions'],
  ['EBU R128', 'audio normalisation'],
  ['0', 'monthly fee'],
])}
<h2 class="report-chapter">What the beta includes</h2>
<p>The structure is familiar: project, media bin, source monitor to review clips, program monitor to watch the cut and a timeline with video and audio tracks. FilmCraft implements the usual trim modes —ripple, roll, slip and slide—, J/K/L transport shortcuts and a properties panel with transform, opacity, crop and color controls.</p>
<p>In addition to 55 effects and 30 transitions, it includes audio meters and EBU R128 normalisation, something many free editors leave for last. The codecs are its own, not a wrapper around FFmpeg: that allows it to read and write files without external libraries, although it also means some exotic formats still fail.</p>
<h2 class="report-chapter">Tutorial: from ingest to export</h2>
<div class="news-timeline">
<div class="timeline-item"><span class="timeline-time">Step 1</span><p class="timeline-text"><strong>Create the project and media folder.</strong> Copy cards to a working drive; do not edit from the card. Set frame rate and resolution before importing.</p></div>
<div class="timeline-item"><span class="timeline-time">Step 2</span><p class="timeline-text"><strong>Ingest and organise.</strong> Create bins by scene or day, tag the good clips and mark the rejects. An organised project saves hours of searching.</p></div>
<div class="timeline-item"><span class="timeline-time">Step 3</span><p class="timeline-text"><strong>Assemble with insert and overwrite.</strong> Use J/K/L to review at variable speed: J rewinds, K pauses, L plays forward; press repeatedly to speed up. Mark in and out with I and O.</p></div>
<div class="timeline-item"><span class="timeline-time">Step 4</span><p class="timeline-text"><strong>Shape the rhythm with trim modes.</strong> Ripple changes duration and shifts the rest; roll moves the cut point; slip and slide adjust content without moving its timeline position.</p></div>
<div class="timeline-item"><span class="timeline-time">Step 5</span><p class="timeline-text"><strong>Correct color.</strong> Match exposure and white balance before adding a look. Use scopes and meters so you do not blow out highlights.</p></div>
<div class="timeline-item"><span class="timeline-time">Step 6</span><p class="timeline-text"><strong>Mix audio.</strong> Normalise voice and music separately. For web publishing, aim for −14 LUFS; for television, −23 LUFS per EBU R128.</p></div>
<div class="timeline-item"><span class="timeline-time">Step 7</span><p class="timeline-text"><strong>Export and verify.</strong> Generate a high-quality master and an H.264 review copy. Check the file in another player before delivery.</p></div>
</div>
<h2 class="report-chapter">Shortcuts that save hours</h2>
<table class="spec-table">
<thead><tr><th>Shortcut</th><th>Function</th><th>When to use it</th></tr></thead>
<tbody>
<tr><td>J / K / L</td><td>Rewind, pause, play</td><td>Fast review of long takes.</td></tr>
<tr><td>I / O</td><td>Mark in and out</td><td>Define the fragment before inserting it.</td></tr>
<tr><td>Q / W</td><td>Insert or overwrite</td><td>Assemble without dragging clips.</td></tr>
<tr><td>, / .</td><td>Trim one frame</td><td>Fine sync adjustments.</td></tr>
<tr><td>Ctrl/Cmd + Z</td><td>Undo</td><td>Try variations without fear.</td></tr>
</tbody>
</table>
<h2 class="report-chapter">FilmCraft versus Premiere</h2>
<table class="spec-table">
<thead><tr><th>Criterion</th><th>FilmCraft</th><th>Premiere Pro</th></tr></thead>
<tbody>
<tr><td>Price</td><td>Free and open source</td><td>Monthly subscription</td></tr>
<tr><td>Timeline</td><td>Yes, with trim modes</td><td>Yes, industry standard</td></tr>
<tr><td>Codecs</td><td>Own, in Rust</td><td>Broad support and plugins</td></tr>
<tr><td>Effects</td><td>55</td><td>Hundreds, with third-party ecosystem</td></tr>
<tr><td>Audio</td><td>EBU R128 built in</td><td>Yes, with Essential Sound</td></tr>
<tr><td>Maturity</td><td>In development</td><td>Mature, with Adobe integration</td></tr>
</tbody>
</table>
<h2 class="report-chapter">Honest limits</h2>
<p>FilmCraft is not yet a Premiere replacement for a production company with weekly deliveries. It lacks the plugin ecosystem, cloud collaboration and integration with After Effects and Audition. Some codecs and files with complex metadata may fail. If the project is critical, work with copies and export intermediate masters.</p>
<p>That said, for a YouTube channel, a short documentary or a corporate piece, the combination of FilmCraft with EffectCraft and SoundCraft covers the full cycle. The advantage of not paying a subscription compensates for the lack of advanced features if your workflow is simple.</p>
${quote(
  'Professional video editing, rebuilt from scratch. Source and program monitors, a real timeline and every trim mode, in a native editor written in pure Rust — down to its own codecs.',
  'AC',
  'ArtCraft',
  'FilmCraft, official page'
)}
${doc(
  'https://getartcraft.com/apps/filmcraft',
  'VID',
  'FilmCraft — official page',
  'Features, screenshots and download through the Launcher.'
)}
${doc(
  'https://github.com/storytold/filmcraft',
  'GIT',
  'FilmCraft on GitHub',
  'Source code, issues and development status.'
)}
<p><strong>Recommendation:</strong> install FilmCraft, cut a short piece and decide with evidence. If the project depends on plugins or a large team, stay on Premiere for now. If your bottleneck is the monthly fee and your workflow fits a linear timeline, FilmCraft is already a serious alternative.</p>`,
  },
  {
    id: '1384',
    slug: 'effectcraft-motion-graphics-vfx-clon-after-effects',
    publishedAt: '2026-11-04T10:00:00-04:00',
    titleEs: 'EffectCraft: motion graphics y VFX en Rust, con 259 efectos y cámaras 3D',
    titleEn: 'EffectCraft: motion graphics and VFX in Rust, with 259 effects and 3D cameras',
    excerptEs:
      'EffectCraft es el compositor de ArtCraft: composiciones, capas, keyframes, expresiones, 259 efectos, cámaras y luces 3D, cola de render y exportación Lottie. Esta guía explica cómo construir un lower third animado y cómo pensar la animación sin depender de plugins.',
    excerptEn:
      "EffectCraft is ArtCraft's compositor: compositions, layers, keyframes, expressions, 259 effects, 3D cameras and lights, a render queue and Lottie export. This guide explains how to build an animated lower third and how to think about animation without relying on plugins.",
    date: '2026-11-04',
    readTimeEs: '9 min de lectura',
    readTimeEn: '9 min read',
    imageUrl: `${IMG}/effectcraft-motion-graphics-vfx-clon-after-effects.jpg`,
    imageCaption: 'Composición de títulos en EffectCraft con capas, texto y animación. Imagen: ArtCraft',
    categoryEs: CAT_ES,
    categoryEn: CAT_EN,
    contentEs: `<h1>EffectCraft: motion graphics y VFX en Rust, con 259 efectos y cámaras 3D</h1>
<p class="lead"><em>EffectCraft es el compositor de ArtCraft y el pariente más cercano a After Effects dentro del ecosistema. Trabaja con composiciones, capas, keyframes, expresiones, cámaras y luces 3D, y trae 259 efectos de fábrica. Está en desarrollo, pero ya sirve para títulos, lower thirds, animación de logos y composiciones 3D sencillas. La clave es no pedirle lo que aún no tiene.</em></p>
${figure(
  `${IMG}/effectcraft-motion-graphics-vfx-clon-after-effects.jpg`,
  'EffectCraft con una composición de títulos y capas animadas',
  'EffectCraft muestra la composición, la timeline y el panel de propiedades en una sola ventana. Imagen: ArtCraft'
)}
${stats([
  ['259', 'efectos incluidos'],
  ['3D', 'cámaras y luces'],
  ['Sí', 'expresiones y keyframes'],
  ['Lottie', 'exportación para web'],
])}
<h2 class="report-chapter">Qué es EffectCraft</h2>
<p>EffectCraft sigue el modelo de composición por capas: creas una composición con una resolución y una tasa de fotogramas, añades capas de forma, texto, sólidos o medios, y animas sus propiedades con keyframes. El panel de proyecto, la timeline y el visor están separados, como en After Effects, y el panel de propiedades permite ajustar transformación, opacidad, texto y efectos sin salir de la composición.</p>
<p>El motor incluye expresiones, cámaras 3D y luces, y una cola de render para trabajos largos. La exportación a Lottie es especialmente útil para animaciones web: un lower third o un icono animado puede salir de EffectCraft y reproducirse en una página sin video.</p>
<h2 class="report-chapter">Tutorial: un lower third en ocho pasos</h2>
<ol>
<li><strong>Crea la composición.</strong> 1920×1080, 29,97 fps, duración de 8 segundos. Nombra las capas desde el principio: “fondo”, “barra”, “nombre”, “cargo”.</li>
<li><strong>Prepara el fondo.</strong> Usa un sólido oscuro con una máscara suave o un clip de video. Si el lower third va sobre imagen real, añade una capa de ajuste para igualar el color.</li>
<li><strong>Dibuja la barra.</strong> Una forma rectangular con esquinas redondeadas y relleno dorado. Duplica la barra y desplázala para crear profundidad.</li>
<li><strong>Añade el texto.</strong> Nombre en mayúsculas, cargo en una línea inferior. Usa dos capas separadas para animarlas con ritmos distintos.</li>
<li><strong>Anima la entrada.</strong> Keyframe de posición y opacidad en el fotograma 0 y en el 12. Aplica una curva de aceleración suave para que no se sienta mecánico.</li>
<li><strong>Añade un detalle.</strong> Un destello o una línea que recorre la barra. Un solo acento es suficiente; más elementos compiten con el texto.</li>
<li><strong>Prueba una expresión.</strong> En la opacidad del destello, un <code>wiggle(2, 8)</code> añade vida sin animar fotograma a fotograma. Si el resultado es errático, baja la frecuencia.</li>
<li><strong>Renderiza y revisa.</strong> Exporta una versión con alfa para editar en FilmCraft y una versión Lottie si va a web. Comprueba el resultado a tamaño real, no solo en el visor.</li>
</ol>
<h2 class="report-chapter">Expresiones sin miedo</h2>
<p>Las expresiones son pequeñas instrucciones que sustituyen a los keyframes. No necesitas programar: basta con copiar patrones probados y ajustar dos o tres números.</p>
<ul>
<li><code>wiggle(2, 20)</code> — vibración orgánica; el primer número es la frecuencia y el segundo la amplitud.</li>
<li><code>loopOut("cycle")</code> — repite los keyframes existentes sin volver a dibujarlos.</li>
<li><code>linear(time, 0, 2, 0, 100)</code> — interpola un valor entre el segundo 0 y el 2.</li>
<li><code>thisComp.layer("Control").effect("Slider")("Slider")</code> — conecta una propiedad a un control central.</li>
</ul>
<h2 class="report-chapter">Cámaras y luces 3D</h2>
<p>Activa la casilla 3D de una capa para colocarla en el espacio. Añade una cámara y anima su posición y punto de interés para crear paralaje. Con una luz puntual o direccional puedes simular volumen en formas planas, aunque el resultado no es un render físico: es una aproximación para motion graphics. Para escenas complejas, usa el editor 3D de ArtCraft Studio y trae el render como capa.</p>
${quote(
  'Motion graphics and visual effects, in pure Rust. Compositions, layers, keyframes, 259 effects, expressions, 3D cameras and lights, and a render queue in a native compositor written in pure Rust.',
  'AC',
  'ArtCraft',
  'EffectCraft, página oficial'
)}
<h2 class="report-chapter">EffectCraft frente a After Effects</h2>
<table class="spec-table">
<thead><tr><th>Criterio</th><th>EffectCraft</th><th>After Effects</th></tr></thead>
<tbody>
<tr><td>Precio</td><td>Gratis y open source</td><td>Suscripción mensual</td></tr>
<tr><td>Composición por capas</td><td>Sí</td><td>Sí</td></tr>
<tr><td>Efectos</td><td>259</td><td>Cientos, con plugins</td></tr>
<tr><td>Expresiones</td><td>Sí, patrones habituales</td><td>Sí, JavaScript completo</td></tr>
<tr><td>Cámaras y luces 3D</td><td>Sí</td><td>Sí, con Cinema 4D</td></tr>
<tr><td>Exportación Lottie</td><td>Sí</td><td>Vía plugins</td></tr>
<tr><td>Ecosistema</td><td>En desarrollo</td><td>Maduro, estándar de la industria</td></tr>
</tbody>
</table>
<h2 class="report-chapter">Errores comunes</h2>
<ul>
<li><strong>Animar demasiadas propiedades a la vez.</strong> Elige una idea por elemento: posición, escala o color, no las tres.</li>
<li><strong>Usar interpolación lineal por defecto.</strong> Aplica curvas de aceleración; el movimiento lineal se siente robótico.</li>
<li><strong>Olvidar el espacio de color.</strong> Si el render se ve lavado al volver a FilmCraft, revisa la interpretación del material.</li>
<li><strong>Renderizar sin alfa.</strong> Para composición sobre video, exporta con canal alfa y comprueba el borde en un fondo claro y otro oscuro.</li>
</ul>
${doc(
  'https://getartcraft.com/apps/effectcraft',
  'FX',
  'EffectCraft — página oficial',
  'Funciones, capturas y descarga mediante el Launcher.'
)}
${doc(
  'https://github.com/storytold/effectcraft',
  'GIT',
  'EffectCraft en GitHub',
  'Código fuente, incidencias y notas de versión.'
)}
<p><strong>Veredicto:</strong> EffectCraft es ideal para motion graphics de duración corta, títulos y animaciones para web. No sustituye a After Effects en composición de VFX complejos ni en integración con Cinema 4D, pero cubre el trabajo que la mayoría de los creadores hace a diario. Si vienes de After Effects, empieza por una composición pequeña y replica un proyecto conocido: aprenderás el motor sin pelear con una pieza nueva.</p>`,
    contentEn: `<h1>EffectCraft: motion graphics and VFX in Rust, with 259 effects and 3D cameras</h1>
<p class="lead"><em>EffectCraft is ArtCraft's compositor and the closest relative to After Effects in the ecosystem. It works with compositions, layers, keyframes, expressions, 3D cameras and lights, and ships with 259 built-in effects. It is in development, but it already handles titles, lower thirds, logo animation and simple 3D compositions. The key is not to ask for what it does not have yet.</em></p>
${figure(
  `${IMG}/effectcraft-motion-graphics-vfx-clon-after-effects.jpg`,
  'EffectCraft with a title composition and animated layers',
  'EffectCraft shows the composition, timeline and properties panel in one window. Image: ArtCraft'
)}
${stats([
  ['259', 'built-in effects'],
  ['3D', 'cameras and lights'],
  ['Yes', 'expressions and keyframes'],
  ['Lottie', 'web export'],
])}
<h2 class="report-chapter">What EffectCraft is</h2>
<p>EffectCraft follows the layer-composition model: create a composition with a resolution and frame rate, add shape, text, solid or media layers, and animate their properties with keyframes. The project panel, timeline and viewer are separate, as in After Effects, and the properties panel lets you adjust transform, opacity, text and effects without leaving the composition.</p>
<p>The engine includes expressions, 3D cameras and lights, and a render queue for long jobs. Lottie export is especially useful for web animation: a lower third or animated icon can leave EffectCraft and play on a page without video.</p>
<h2 class="report-chapter">Tutorial: a lower third in eight steps</h2>
<ol>
<li><strong>Create the composition.</strong> 1920×1080, 29.97 fps, 8 seconds long. Name layers from the start: “background”, “bar”, “name”, “role”.</li>
<li><strong>Prepare the background.</strong> Use a dark solid with a soft mask or a video clip. If the lower third sits over live action, add an adjustment layer to match color.</li>
<li><strong>Draw the bar.</strong> A rounded rectangle with a gold fill. Duplicate the bar and offset it to create depth.</li>
<li><strong>Add the text.</strong> Name in uppercase, role on a lower line. Use two separate layers so you can animate them at different rhythms.</li>
<li><strong>Animate the entrance.</strong> Keyframe position and opacity at frame 0 and frame 12. Apply a smooth easing curve so it does not feel mechanical.</li>
<li><strong>Add one detail.</strong> A glint or a line travelling across the bar. One accent is enough; more elements compete with the text.</li>
<li><strong>Try an expression.</strong> On the glint's opacity, <code>wiggle(2, 8)</code> adds life without frame-by-frame animation. If the result is erratic, lower the frequency.</li>
<li><strong>Render and review.</strong> Export an alpha version for FilmCraft and a Lottie version for web. Check the result at actual size, not only in the viewer.</li>
</ol>
<h2 class="report-chapter">Expressions without fear</h2>
<p>Expressions are small instructions that replace keyframes. You do not need to program: copy proven patterns and adjust two or three numbers.</p>
<ul>
<li><code>wiggle(2, 20)</code> — organic vibration; the first number is frequency and the second is amplitude.</li>
<li><code>loopOut("cycle")</code> — repeats existing keyframes without redrawing them.</li>
<li><code>linear(time, 0, 2, 0, 100)</code> — interpolates a value between second 0 and second 2.</li>
<li><code>thisComp.layer("Control").effect("Slider")("Slider")</code> — connects a property to a central control.</li>
</ul>
<h2 class="report-chapter">3D cameras and lights</h2>
<p>Enable a layer's 3D checkbox to place it in space. Add a camera and animate its position and point of interest to create parallax. With a point or directional light you can simulate volume on flat shapes, although the result is not a physical render: it is an approximation for motion graphics. For complex scenes, use ArtCraft Studio's 3D editor and bring the render back as a layer.</p>
${quote(
  'Motion graphics and visual effects, in pure Rust. Compositions, layers, keyframes, 259 effects, expressions, 3D cameras and lights, and a render queue in a native compositor written in pure Rust.',
  'AC',
  'ArtCraft',
  'EffectCraft, official page'
)}
<h2 class="report-chapter">EffectCraft versus After Effects</h2>
<table class="spec-table">
<thead><tr><th>Criterion</th><th>EffectCraft</th><th>After Effects</th></tr></thead>
<tbody>
<tr><td>Price</td><td>Free and open source</td><td>Monthly subscription</td></tr>
<tr><td>Layer composition</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Effects</td><td>259</td><td>Hundreds, with plugins</td></tr>
<tr><td>Expressions</td><td>Yes, common patterns</td><td>Yes, full JavaScript</td></tr>
<tr><td>3D cameras and lights</td><td>Yes</td><td>Yes, with Cinema 4D</td></tr>
<tr><td>Lottie export</td><td>Yes</td><td>Via plugins</td></tr>
<tr><td>Ecosystem</td><td>In development</td><td>Mature, industry standard</td></tr>
</tbody>
</table>
<h2 class="report-chapter">Common mistakes</h2>
<ul>
<li><strong>Animating too many properties at once.</strong> Choose one idea per element: position, scale or color, not all three.</li>
<li><strong>Using linear interpolation by default.</strong> Apply easing curves; linear motion feels robotic.</li>
<li><strong>Forgetting color space.</strong> If the render looks washed out when back in FilmCraft, check the footage interpretation.</li>
<li><strong>Rendering without alpha.</strong> For compositing over video, export with an alpha channel and check the edge on both a light and a dark background.</li>
</ul>
${doc(
  'https://getartcraft.com/apps/effectcraft',
  'FX',
  'EffectCraft — official page',
  'Features, screenshots and download through the Launcher.'
)}
${doc(
  'https://github.com/storytold/effectcraft',
  'GIT',
  'EffectCraft on GitHub',
  'Source code, issues and release notes.'
)}
<p><strong>Verdict:</strong> EffectCraft is ideal for short motion graphics, titles and web animation. It does not replace After Effects for complex VFX compositing or Cinema 4D integration, but it covers the work most creators do every day. If you come from After Effects, start with a small composition and rebuild a project you know: you will learn the engine without fighting a new piece.</p>`,
  },
];
