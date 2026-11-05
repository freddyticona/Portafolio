/**
 * Artículos de blog — tutoriales de ArtCraft, Crafting Apps, Higgsfield y video IA.
 * Parte 2: vectores y maquetación, canvas 2D/3D, Soul, Cinema Studio y modelos de video.
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

export const part2 = [
  {
    id: '1385',
    slug: 'vectorcraft-designcraft-storyboards-graficos-ia',
    publishedAt: '2026-11-04T11:00:00-04:00',
    titleEs: 'VectorCraft y DesignCraft: del boceto al PDF maquetado sin salir del ecosistema',
    titleEn: 'VectorCraft and DesignCraft: from sketch to laid-out PDF without leaving the ecosystem',
    excerptEs:
      'VectorCraft cubre ilustración vectorial, trazado de imágenes, SVG/PDF y automatización por MCP; DesignCraft resuelve la maquetación editorial de varias páginas. Juntas permiten convertir un render de IA en un storyboard limpio y un dossier listo para imprimir, sin pasar por Illustrator ni InDesign.',
    excerptEn:
      'VectorCraft covers vector illustration, image tracing, SVG/PDF and MCP automation; DesignCraft handles multi-page editorial layout. Together they turn an AI render into a clean storyboard and a print-ready dossier without going through Illustrator or InDesign.',
    date: '2026-11-04',
    readTimeEs: '9 min de lectura',
    readTimeEn: '9 min read',
    imageUrl: `${IMG}/vectorcraft-designcraft-storyboards-graficos-ia.jpg`,
    imageCaption: 'VectorCraft con mesa de trabajo, texto y panel de apariencia. Imagen: ArtCraft',
    categoryEs: CAT_ES,
    categoryEn: CAT_EN,
    contentEs: `<h1>VectorCraft y DesignCraft: del boceto al PDF maquetado sin salir del ecosistema</h1>
<p class="lead"><em>La generación de imágenes resuelve el arranque, pero no el acabado. Para un storyboard, un dossier o un manual de marca hace falta vector limpio y maquetación estable. Ahí entran VectorCraft y DesignCraft: dos apps de ArtCraft que cubren la ilustración y la página, con exportación a SVG y PDF y sin la cuota de Illustrator o InDesign.</em></p>
${figure(
  `${IMG}/vectorcraft-designcraft-storyboards-graficos-ia.jpg`,
  'VectorCraft con una ilustración vectorial, texto y panel de apariencia',
  'VectorCraft trabaja con mesas de trabajo, pluma, texto y paneles de apariencia. Imagen: ArtCraft'
)}
${stats([
  ['SVG/PDF', 'exportación vectorial'],
  ['MCP', 'automatización'],
  ['60 fps', 'interfaz fluida'],
  ['Multipágina', 'maquetación en DesignCraft'],
])}
<h2 class="report-chapter">Dos apps, un flujo</h2>
<p><strong>VectorCraft</strong> es la herramienta de dibujo: pluma y curvas Bézier, operaciones booleanas, trazado de imágenes, mesas de trabajo, texto en trazado y exportación a SVG y PDF. También corre en el navegador y expone un servidor MCP para que un asistente de IA pueda automatizar tareas repetitivas.</p>
<p><strong>DesignCraft</strong> es la herramienta de página: documentos de varias páginas, columnas, estilos de párrafo y carácter, páginas maestras, muestras de color y exportación a PDF. No compite con InDesign en funciones avanzadas, pero cubre folletos, memorias, dossieres y manuales sencillos.</p>
<p>El flujo natural es: generar o bocetar en Studio, limpiar la geometría en VectorCraft, maquetar en DesignCraft y exportar el PDF. Cada app hace una cosa y la hace sin pedirte una suscripción.</p>
<h2 class="report-chapter">VectorCraft: lo esencial</h2>
<ul>
<li><strong>Pluma y Bézier:</strong> dibuja con precisión, convierte puntos de esquina en suaves y usa el panel de nodos para ajustar.</li>
<li><strong>Booleanos:</strong> une, resta, intersecta y divide formas para construir iconos y logotipos.</li>
<li><strong>Trazado de imágenes:</strong> convierte un mapa de bits en vectores; úsalo con imágenes de alto contraste y limpia los nodos después.</li>
<li><strong>Texto:</strong> texto en punto y en área, con control de interlineado, tracking y conversión a contornos.</li>
<li><strong>Exportación:</strong> SVG para web, PDF para impresión y PNG para vistas previas.</li>
</ul>
<h2 class="report-chapter">Tutorial: storyboard de seis viñetas</h2>
<ol>
<li><strong>Define la mesa de trabajo.</strong> 1920×1080 o la relación del proyecto. Crea una cuadrícula de 3×2 con guías para que las viñetas respiren.</li>
<li><strong>Boceta las formas grandes.</strong> No empieces por el detalle: bloquea fondos, sujetos y líneas de horizonte con formas simples.</li>
<li><strong>Trae el render de IA.</strong> Si una viñeta necesita textura o iluminación, genera una imagen en Studio y colócala como referencia bloqueada.</li>
<li><strong>Vectoriza lo justo.</strong> Traza solo los contornos que necesitas. Un storyboard no es una ilustración final: la claridad importa más que el acabado.</li>
<li><strong>Añade texto y flechas.</strong> Numera los planos, indica movimiento de cámara con flechas y escribe una línea de acción por viñeta.</li>
<li><strong>Exporta un SVG por viñeta.</strong> Nombra los archivos con el número de plano y la versión. Luego maqueta el conjunto en DesignCraft.</li>
</ol>
<h2 class="report-chapter">DesignCraft: maquetar el dossier</h2>
<p>En DesignCraft, crea un documento A4 vertical con márgenes de 15 mm. Define una retícula de dos columnas y estilos de párrafo para título, subtítulo, cuerpo y pie. Coloca las viñetas en la primera mitad y reserva la segunda para la descripción, el tratamiento de cámara y las notas de producción. Usa páginas maestras para repetir el encabezado y el número de página sin copiar y pegar.</p>
<p>Exporta primero un PDF de baja resolución para revisar y después el PDF final con las fuentes incrustadas. Si el dossier va a web, exporta también una versión con imágenes comprimidas.</p>
${quote(
  'Vector illustration, reimagined in pure Rust. The pen, panels and shortcuts working illustrators expect, in a native app that keeps up with you.',
  'AC',
  'ArtCraft',
  'VectorCraft, página oficial'
)}
<h2 class="report-chapter">Del render de IA al vector</h2>
<p>El trazado automático no hace magia: interpreta bordes y agrupa colores. Para obtener un vector limpio, empieza con una imagen de alto contraste, elimina fondos ruidosos y reduce la paleta antes de trazar. Después, en VectorCraft, simplifica los nodos, corrige curvas y unifica trazos. Un logotipo trazado sin limpieza se ve sucio a tamaño grande.</p>
<p>La combinación más eficiente es usar la IA para explorar y el vector para producir. Genera diez variantes, elige una, vectoriza solo la que funcione y reconstruye a mano las partes críticas: tipografía, iconos y marcas.</p>
<h2 class="report-chapter">MCP: automatizar lo repetitivo</h2>
<p>VectorCraft incluye soporte MCP, el protocolo que permite a asistentes de IA interactuar con aplicaciones. En la práctica sirve para tareas concretas: renombrar capas, exportar variantes, generar duplicados con medidas distintas o revisar coherencia de nombres. No lo uses para decidir el diseño final; úsalo para quitar trabajo mecánico y liberar tiempo de criterio.</p>
<p>Antes de conectar un asistente, limita los permisos y trabaja sobre copias. La automatización es útil cuando el archivo está ordenado; sobre un documento caótico, multiplica el caos.</p>
<table class="spec-table">
<thead><tr><th>Necesidad</th><th>VectorCraft</th><th>DesignCraft</th></tr></thead>
<tbody>
<tr><td>Ilustración e iconos</td><td>Sí</td><td>No es su función</td></tr>
<tr><td>Trazado de imágenes</td><td>Sí</td><td>No</td></tr>
<tr><td>Documento de varias páginas</td><td>Limitado</td><td>Sí</td></tr>
<tr><td>Estilos y páginas maestras</td><td>Básico</td><td>Sí</td></tr>
<tr><td>Exportación</td><td>SVG, PDF, PNG</td><td>PDF</td></tr>
</tbody>
</table>
${doc(
  'https://getartcraft.com/apps/vectorcraft',
  'VEC',
  'VectorCraft — página oficial',
  'Pluma, booleanos, trazado y exportación SVG/PDF.'
)}
${doc(
  'https://getartcraft.com/apps/designcraft',
  'PAG',
  'DesignCraft — página oficial',
  'Maquetación multipágina, columnas, estilos y PDF.'
)}
${doc(
  'https://github.com/storytold/vectorcraft',
  'GIT',
  'VectorCraft en GitHub',
  'Código fuente, incidencias y documentación del proyecto.'
)}
<p><strong>Veredicto:</strong> VectorCraft y DesignCraft no reemplazan Illustrator e InDesign para un estudio con flujos de impresión complejos, pero cubren el trabajo editorial y de ilustración de la mayoría de los proyectos independientes. Úsalos cuando el presupuesto manda y el archivo es tuyo; vuelve a Adobe cuando el cliente exija un formato o una integración que estas apps aún no tienen.</p>`,
    contentEn: `<h1>VectorCraft and DesignCraft: from sketch to laid-out PDF without leaving the ecosystem</h1>
<p class="lead"><em>Image generation solves the start, not the finish. A storyboard, a dossier or a brand manual needs clean vectors and stable layout. That is where VectorCraft and DesignCraft come in: two ArtCraft apps that cover illustration and the page, with SVG and PDF export and without the Illustrator or InDesign subscription.</em></p>
${figure(
  `${IMG}/vectorcraft-designcraft-storyboards-graficos-ia.jpg`,
  'VectorCraft with a vector illustration, text and appearance panel',
  'VectorCraft works with artboards, pen, text and appearance panels. Image: ArtCraft'
)}
${stats([
  ['SVG/PDF', 'vector export'],
  ['MCP', 'automation'],
  ['60 fps', 'fluid interface'],
  ['Multi-page', 'layout in DesignCraft'],
])}
<h2 class="report-chapter">Two apps, one workflow</h2>
<p><strong>VectorCraft</strong> is the drawing tool: pen and Bézier curves, boolean operations, image tracing, artboards, text on path and SVG/PDF export. It also runs in the browser and exposes an MCP server so an AI assistant can automate repetitive tasks.</p>
<p><strong>DesignCraft</strong> is the page tool: multi-page documents, columns, paragraph and character styles, master pages, color swatches and PDF export. It does not compete with InDesign on advanced features, but it covers brochures, reports, dossiers and simple manuals.</p>
<p>The natural flow is: generate or sketch in Studio, clean the geometry in VectorCraft, lay out in DesignCraft and export the PDF. Each app does one thing without asking for a subscription.</p>
<h2 class="report-chapter">VectorCraft: the essentials</h2>
<ul>
<li><strong>Pen and Bézier:</strong> draw precisely, turn corner points into smooth ones and use the node panel to adjust.</li>
<li><strong>Booleans:</strong> unite, subtract, intersect and divide shapes to build icons and logos.</li>
<li><strong>Image tracing:</strong> convert a bitmap into vectors; use high-contrast images and clean the nodes afterwards.</li>
<li><strong>Text:</strong> point and area text, with leading, tracking and convert-to-outlines.</li>
<li><strong>Export:</strong> SVG for web, PDF for print and PNG for previews.</li>
</ul>
<h2 class="report-chapter">Tutorial: a six-panel storyboard</h2>
<ol>
<li><strong>Define the artboard.</strong> 1920×1080 or the project ratio. Create a 3×2 grid with guides so the panels can breathe.</li>
<li><strong>Sketch the big shapes.</strong> Do not start with detail: block backgrounds, subjects and horizon lines with simple shapes.</li>
<li><strong>Bring in the AI render.</strong> If a panel needs texture or lighting, generate an image in Studio and place it as a locked reference.</li>
<li><strong>Vectorise only what you need.</strong> Trace only the outlines you need. A storyboard is not a final illustration: clarity matters more than finish.</li>
<li><strong>Add text and arrows.</strong> Number the shots, indicate camera movement with arrows and write one line of action per panel.</li>
<li><strong>Export one SVG per panel.</strong> Name files with the shot number and version. Then lay out the set in DesignCraft.</li>
</ol>
<h2 class="report-chapter">DesignCraft: laying out the dossier</h2>
<p>In DesignCraft, create an A4 portrait document with 15 mm margins. Define a two-column grid and paragraph styles for title, subtitle, body and caption. Place the panels in the first half and reserve the second for the description, camera treatment and production notes. Use master pages to repeat the header and page number without copying and pasting.</p>
<p>Export a low-resolution PDF for review first, then the final PDF with embedded fonts. If the dossier is for web, also export a version with compressed images.</p>
${quote(
  'Vector illustration, reimagined in pure Rust. The pen, panels and shortcuts working illustrators expect, in a native app that keeps up with you.',
  'AC',
  'ArtCraft',
  'VectorCraft, official page'
)}
<h2 class="report-chapter">From AI render to vector</h2>
<p>Automatic tracing is not magic: it interprets edges and groups colors. For a clean vector, start with a high-contrast image, remove noisy backgrounds and reduce the palette before tracing. Then, in VectorCraft, simplify nodes, correct curves and unify strokes. A traced logo without cleanup looks dirty at large sizes.</p>
<p>The most efficient combination is to use AI to explore and vectors to produce. Generate ten variations, pick one, vectorise only the one that works and rebuild the critical parts by hand: typography, icons and marks.</p>
<h2 class="report-chapter">MCP: automating the repetitive</h2>
<p>VectorCraft includes MCP support, the protocol that lets AI assistants interact with applications. In practice it is useful for concrete tasks: renaming layers, exporting variants, generating duplicates at different sizes or checking naming consistency. Do not use it to decide the final design; use it to remove mechanical work and free up judgement time.</p>
<p>Before connecting an assistant, limit permissions and work on copies. Automation is useful when the file is organised; on a chaotic document, it multiplies the chaos.</p>
<table class="spec-table">
<thead><tr><th>Need</th><th>VectorCraft</th><th>DesignCraft</th></tr></thead>
<tbody>
<tr><td>Illustration and icons</td><td>Yes</td><td>Not its job</td></tr>
<tr><td>Image tracing</td><td>Yes</td><td>No</td></tr>
<tr><td>Multi-page document</td><td>Limited</td><td>Yes</td></tr>
<tr><td>Styles and master pages</td><td>Basic</td><td>Yes</td></tr>
<tr><td>Export</td><td>SVG, PDF, PNG</td><td>PDF</td></tr>
</tbody>
</table>
${doc(
  'https://getartcraft.com/apps/vectorcraft',
  'VEC',
  'VectorCraft — official page',
  'Pen, booleans, tracing and SVG/PDF export.'
)}
${doc(
  'https://getartcraft.com/apps/designcraft',
  'PAG',
  'DesignCraft — official page',
  'Multi-page layout, columns, styles and PDF.'
)}
${doc(
  'https://github.com/storytold/vectorcraft',
  'GIT',
  'VectorCraft on GitHub',
  'Source code, issues and project documentation.'
)}
<p><strong>Verdict:</strong> VectorCraft and DesignCraft do not replace Illustrator and InDesign for a studio with complex print workflows, but they cover the editorial and illustration work of most independent projects. Use them when the budget matters and the file is yours; go back to Adobe when the client demands a format or integration these apps do not yet have.</p>`,
  },
  {
    id: '1386',
    slug: 'artcraft-canvas-2d-editor-3d-componer-escenas',
    publishedAt: '2026-11-04T12:00:00-04:00',
    titleEs: 'El canvas 2D y el editor 3D de ArtCraft: cómo dirigir la IA en vez de pedirle suerte',
    titleEn: "ArtCraft's 2D canvas and 3D editor: how to direct AI instead of asking for luck",
    excerptEs:
      'La diferencia entre una imagen aceptable y una imagen útil suele estar antes del prompt: en la composición. El canvas 2D permite dibujar y enmascarar; el editor 3D permite colocar cámara, sujeto y luces. Esta guía muestra un flujo de tres planos con Image to Location, Image to 3D Mesh y Mixed Assets.',
    excerptEn:
      'The difference between an acceptable image and a useful one usually comes before the prompt: in the composition. The 2D canvas lets you draw and mask; the 3D editor lets you place camera, subject and lights. This guide shows a three-shot workflow with Image to Location, Image to 3D Mesh and Mixed Assets.',
    date: '2026-11-04',
    readTimeEs: '10 min de lectura',
    readTimeEn: '10 min read',
    imageUrl: `${IMG}/artcraft-canvas-2d-editor-3d-componer-escenas.jpg`,
    imageCaption: 'Escena 3D de ArtCraft con personaje posado, cámara y prompt. Imagen: ArtCraft',
    categoryEs: CAT_ES,
    categoryEn: CAT_EN,
    contentEs: `<h1>El canvas 2D y el editor 3D de ArtCraft: cómo dirigir la IA en vez de pedirle suerte</h1>
<p class="lead"><em>Los generadores de imagen fallan por una razón predecible: el prompt describe una intención, pero no una composición. ArtCraft ataca ese problema con dos herramientas que van antes del modelo: un canvas 2D para dibujar y enmascarar, y un editor 3D para colocar cámara, sujeto y luces. Cuando los usas, dejas de rezar y empiezas a dirigir.</em></p>
${figure(
  `${IMG}/artcraft-canvas-2d-editor-3d-componer-escenas.jpg`,
  'Escena 3D de ArtCraft con un personaje corriendo por un pasillo y el campo de prompt',
  'El editor 3D permite posar al personaje, elegir cámara y generar manteniendo el encuadre. Imagen: ArtCraft'
)}
${stats([
  ['2D + 3D', 'dos capas de control'],
  ['Location', 'imagen a escenario'],
  ['Mesh', 'imagen a objeto 3D'],
  ['MCP', 'automatización'],
])}
<h2 class="report-chapter">Por qué el control importa</h2>
<p>Un modelo de imagen trabaja con lo que le das. Si solo le das texto, inventará la composición, la escala, la perspectiva y la luz. Si le das una máscara o una escena 3D, conserva la estructura y se concentra en la fidelidad. Esa es la diferencia entre “un barco en el mar” y “un barco pesquero a 35 mm, escorado a babor, con el horizonte a un tercio del encuadre y luz de tormenta desde el oeste”.</p>
<h2 class="report-chapter">Canvas 2D: dibujar primero, generar después</h2>
<p>El canvas es una herramienta ligera de dibujo y maquetación que el modelo respeta. Dibuja formas, bloquea el fondo y pinta máscaras para proteger o cambiar zonas. Al generar, la estructura que dibujaste se mantiene y solo mejora la fidelidad. Sirve para storyboards, thumbnails, mockups de producto y reemplazos de elementos sin mover el resto de la escena.</p>
<p>Reglas prácticas: usa bocetos de alto contraste, enmascara áreas pequeñas para ediciones locales —logos, ojos, manos, reflejos— y mantén los prompts cortos. El canvas ya aporta la estructura; no necesitas describirla otra vez con palabras.</p>
<h2 class="report-chapter">Editor 3D: componer como en un set</h2>
<p>El editor 3D te deja colocar sujetos, objetos y cámaras en una escena en tiempo real. Puedes partir de un preset, importar imágenes o construir desde cero. Ajusta la altura de cámara y la distancia focal, posa al personaje y orbita hasta que el plano funcione. Al generar, la IA mantiene el encuadre y la pose.</p>
<p>Su ventaja real es la consistencia: puedes mover la cámara 30 grados, cambiar la lente de 35 a 50 mm y volver a generar sin perder la identidad del sujeto ni la geometría del espacio. Eso es imposible con prompts aislados.</p>
<h2 class="report-chapter">Tutorial: una escena de tres planos</h2>
<div class="news-timeline">
<div class="timeline-item"><span class="timeline-time">Plano 1</span><p class="timeline-text"><strong>Plano general.</strong> Crea la escena, elige un preset o importa una imagen de referencia. Coloca al sujeto y una cámara a 35 mm, a la altura de los ojos. Genera con un prompt de estilo breve: época, luz, material.</p></div>
<div class="timeline-item"><span class="timeline-time">Plano 2</span><p class="timeline-text"><strong>Plano medio.</strong> Acerca la cámara sin mover al sujeto. Cambia a 50 mm y baja un poco la altura. Guarda el frame y genera de nuevo: la identidad y el fondo deben coincidir.</p></div>
<div class="timeline-item"><span class="timeline-time">Plano 3</span><p class="timeline-text"><strong>Contraplano.</strong> Orbita 120 grados, coloca una luz de contra y ajusta la exposición. Genera. Si el fondo cambia demasiado, vuelve a la escena y fija los objetos grandes antes de repetir.</p></div>
</div>
<h2 class="report-chapter">Image to Location y Image to 3D Mesh</h2>
<p><strong>Image to Location</strong> convierte una imagen en un escenario explorable: útil para previsualizar cómo se vería un set desde otro ángulo antes de generar el plano final. <strong>Image to 3D Mesh</strong> convierte una imagen en una malla 3D; sirve para blocking y para colocar objetos, no para producción de alta fidelidad. Trata ambos como herramientas de previsualización, no como assets finales.</p>
<p><strong>Mixed Assets</strong> combina primitivas 3D, imágenes y texto en una misma escena. Es la vía para añadir un cartel, una pantalla o un objeto que el modelo debe integrar con la iluminación correcta.</p>
<h2 class="report-chapter">Checklist de consistencia</h2>
<ul>
<li>Fija la altura de cámara y la distancia focal antes de generar la primera variante.</li>
<li>Guarda el frame aprobado y reutilízalo como referencia para los siguientes planos.</li>
<li>Mantén el mismo vocabulario de luz y materiales en todos los prompts.</li>
<li>No cambies de modelo a mitad de secuencia sin volver a probar una toma.</li>
<li>Registra la semilla y los ajustes de cada plano que funcione.</li>
</ul>
${quote(
  'Build shots like a game, then render them consistently across angles and takes.',
  'AC',
  'ArtCraft',
  'FAQ — 3D Editor'
)}
${doc(
  'https://getartcraft.com/faq/2d-canvas',
  '2D',
  '2D Canvas — dibujar y generar',
  'Guía oficial de dibujo, máscaras e inpaint sobre el canvas.'
)}
${doc(
  'https://getartcraft.com/faq/3d-editor',
  '3D',
  '3D Editor — posar, componer y generar',
  'Guía oficial de cámaras, personajes y consistencia entre planos.'
)}
${doc(
  'https://getartcraft.com/tutorials/3d-editor-basics',
  'VID',
  '3D Editor Basics (video)',
  'Recorrido en video por la interfaz y el flujo de composición 3D.'
)}
<p><strong>Conclusión:</strong> el canvas 2D y el editor 3D no son funciones accesorias: son la ventaja competitiva de ArtCraft frente a los generadores de solo texto. Aprende a bloquear una escena en cinco minutos y ahorrarás créditos, correcciones y horas de edición. El prompt sigue importando, pero deja de ser el único control.</p>`,
    contentEn: `<h1>ArtCraft's 2D canvas and 3D editor: how to direct AI instead of asking for luck</h1>
<p class="lead"><em>Image generators fail for a predictable reason: a prompt describes an intention, not a composition. ArtCraft tackles that problem with two tools that come before the model: a 2D canvas for drawing and masking, and a 3D editor for placing camera, subject and lights. When you use them, you stop praying and start directing.</em></p>
${figure(
  `${IMG}/artcraft-canvas-2d-editor-3d-componer-escenas.jpg`,
  'ArtCraft 3D scene with a character running down a corridor and the prompt field',
  'The 3D editor lets you pose the character, choose the camera and generate while keeping the framing. Image: ArtCraft'
)}
${stats([
  ['2D + 3D', 'two layers of control'],
  ['Location', 'image to set'],
  ['Mesh', 'image to 3D object'],
  ['MCP', 'automation'],
])}
<h2 class="report-chapter">Why control matters</h2>
<p>An image model works with what you give it. If you only give it text, it invents composition, scale, perspective and light. If you give it a mask or a 3D scene, it preserves structure and focuses on fidelity. That is the difference between “a boat at sea” and “a fishing boat at 35 mm, listing to port, horizon on the lower third, storm light from the west”.</p>
<h2 class="report-chapter">2D canvas: draw first, generate second</h2>
<p>The canvas is a lightweight drawing and layout tool that the model respects. Draw shapes, block the background and paint masks to protect or change areas. When you generate, the structure you drew stays intact and only fidelity improves. It is useful for storyboards, thumbnails, product mockups and element replacement without moving the rest of the scene.</p>
<p>Practical rules: use high-contrast sketches, mask small areas for local edits —logos, eyes, hands, reflections— and keep prompts short. The canvas already supplies structure; you do not need to describe it again in words.</p>
<h2 class="report-chapter">3D editor: compose like on a set</h2>
<p>The 3D editor lets you place subjects, objects and cameras in a real-time scene. You can start from a preset, import images or build from scratch. Adjust camera height and focal length, pose the character and orbit until the shot works. When you generate, the AI keeps framing and pose.</p>
<p>Its real advantage is consistency: you can move the camera 30 degrees, change the lens from 35 to 50 mm and regenerate without losing the subject's identity or the geometry of the space. That is impossible with isolated prompts.</p>
<h2 class="report-chapter">Tutorial: a three-shot scene</h2>
<div class="news-timeline">
<div class="timeline-item"><span class="timeline-time">Shot 1</span><p class="timeline-text"><strong>Wide shot.</strong> Create the scene, choose a preset or import a reference image. Place the subject and a 35 mm camera at eye level. Generate with a short style prompt: era, light, material.</p></div>
<div class="timeline-item"><span class="timeline-time">Shot 2</span><p class="timeline-text"><strong>Medium shot.</strong> Move the camera closer without moving the subject. Switch to 50 mm and lower the height slightly. Save the frame and generate again: identity and background should match.</p></div>
<div class="timeline-item"><span class="timeline-time">Shot 3</span><p class="timeline-text"><strong>Reverse shot.</strong> Orbit 120 degrees, add a backlight and adjust exposure. Generate. If the background changes too much, return to the scene and lock the large objects before repeating.</p></div>
</div>
<h2 class="report-chapter">Image to Location and Image to 3D Mesh</h2>
<p><strong>Image to Location</strong> turns an image into an explorable set: useful for previewing how a location would look from another angle before generating the final shot. <strong>Image to 3D Mesh</strong> turns an image into a 3D mesh; it is useful for blocking and object placement, not for high-fidelity production. Treat both as previsualisation tools, not final assets.</p>
<p><strong>Mixed Assets</strong> combines 3D primitives, images and text in the same scene. It is the way to add a sign, a screen or an object that the model must integrate with the correct lighting.</p>
<h2 class="report-chapter">Consistency checklist</h2>
<ul>
<li>Lock camera height and focal length before generating the first variation.</li>
<li>Save the approved frame and reuse it as a reference for the following shots.</li>
<li>Keep the same vocabulary for light and materials across all prompts.</li>
<li>Do not switch models mid-sequence without testing one shot again.</li>
<li>Record the seed and settings of every shot that works.</li>
</ul>
${quote(
  'Build shots like a game, then render them consistently across angles and takes.',
  'AC',
  'ArtCraft',
  'FAQ — 3D Editor'
)}
${doc(
  'https://getartcraft.com/faq/2d-canvas',
  '2D',
  '2D Canvas — draw and generate',
  'Official guide to drawing, masks and inpainting on the canvas.'
)}
${doc(
  'https://getartcraft.com/faq/3d-editor',
  '3D',
  '3D Editor — pose, compose and generate',
  'Official guide to cameras, characters and shot-to-shot consistency.'
)}
${doc(
  'https://getartcraft.com/tutorials/3d-editor-basics',
  'VID',
  '3D Editor Basics (video)',
  'Video walkthrough of the interface and the 3D composition workflow.'
)}
<p><strong>Conclusion:</strong> the 2D canvas and 3D editor are not accessories: they are ArtCraft's competitive advantage over text-only generators. Learn to block a scene in five minutes and you will save credits, corrections and hours of editing. The prompt still matters, but it is no longer the only control.</p>`,
  },
  {
    id: '1387',
    slug: 'higgsfield-soul-cinema-soul-id-personajes-consistentes',
    publishedAt: '2026-11-04T13:00:00-04:00',
    titleEs: 'Higgsfield Soul Cinema y Soul ID: personajes que no cambian de cara entre tomas',
    titleEn: "Higgsfield Soul Cinema and Soul ID: characters that don't change faces between shots",
    excerptEs:
      'Soul Cinema aporta textura cinematográfica; Soul ID entrena una identidad con 20 a 80 fotos para que el mismo rostro aparezca en cada generación; Soul HEX fija la paleta de marca. Esta guía explica cómo entrenar el personaje, generar keyframes coherentes y animarlos sin perder la cara.',
    excerptEn:
      'Soul Cinema adds cinematic texture; Soul ID trains an identity from 20 to 80 photos so the same face appears in every generation; Soul HEX locks the brand palette. This guide explains how to train the character, generate coherent keyframes and animate them without losing the face.',
    date: '2026-11-04',
    readTimeEs: '10 min de lectura',
    readTimeEn: '10 min read',
    imageUrl: `${IMG}/higgsfield-soul-cinema-soul-id-personajes-consistentes.jpg`,
    imageCaption: 'Fotograma de Soul Cinema: textura de piel, grano y reflejo en el iris. Imagen: Higgsfield',
    categoryEs: CAT_ES,
    categoryEn: CAT_EN,
    contentEs: `<h1>Higgsfield Soul Cinema y Soul ID: personajes que no cambian de cara entre tomas</h1>
<p class="lead"><em>El problema número uno de la ficción generada no es la calidad de un frame: es la identidad. El personaje del plano 1 no se parece al del plano 4, la nariz cambia, el color de piel deriva. Higgsfield ataca ese problema con tres piezas: Soul Cinema para la textura cinematográfica, Soul ID para entrenar un rostro y Soul HEX para fijar la paleta. Juntas convierten una colección de imágenes en un personaje.</em></p>
${figure(
  `${IMG}/higgsfield-soul-cinema-soul-id-personajes-consistentes.jpg`,
  'Primer plano de un ojo generado con Soul Cinema de Higgsfield',
  'Soul Cinema prioriza piel, grano y reflejos con una textura de película. Imagen: Higgsfield'
)}
${stats([
  ['20–80', 'fotos para Soul ID'],
  ['4–5 meses', 'variedad recomendada'],
  ['Minutos', 'entrenamiento'],
  ['50+', 'presets de Soul'],
])}
<h2 class="report-chapter">Qué es la familia Soul</h2>
<p><strong>Soul</strong> es el modelo de imagen de Higgsfield orientado a retrato y moda: piel realista, iluminación de estudio y una biblioteca de presets estéticos. <strong>Soul Cinema</strong> lleva esa base al terreno del cine: grano, contraste, texturas de película y una paleta más contenida. <strong>Soul ID</strong> es la capa de identidad: entrenas un rostro y lo reutilizas en cualquier generación. <strong>Soul HEX</strong> fija colores de marca para que la paleta no derive entre tomas.</p>
<h2 class="report-chapter">Soul Cinema: la textura antes que el prompt</h2>
<p>Soul Cinema no es un modelo de “foto bonita”; es un modelo de <em>look</em>. Funciona mejor cuando piensas como director de fotografía: define la fuente de luz, la relación de contraste, la temperatura y el grano. Los prompts largos y literarios ayudan menos que una referencia visual clara y un preset coherente.</p>
<p>Úsalo para keyframes de escenas, conceptos de vestuario, pruebas de iluminación y frames que luego animarás con un modelo de video. Es más fuerte en primeros planos y planos medios que en grandes multitudes.</p>
<h2 class="report-chapter">Soul ID: entrenar una identidad</h2>
<p>El entrenamiento pide entre 20 y 80 fotos de una sola persona, tomadas idealmente a lo largo de 4 o 5 meses, con variedad de ángulos, expresiones e iluminación. Incluye al menos una foto de cuerpo entero. Evita poses repetidas, gafas de sol, sombreros que oculten la cara y sombras duras. El proceso tarda pocos minutos y luego seleccionas el personaje en la pestaña <em>Character</em> al generar.</p>
<p>Un Soul ID no es un filtro: es una identidad entrenada. Cuanto más limpio y variado sea el set, más estable será el resultado. Si el personaje se ve distinto en cada toma, reentrena con un set mejor antes de culpar al prompt.</p>
<h2 class="report-chapter">Soul HEX: fijar la paleta</h2>
<p>Soul HEX permite introducir referencias de color concretas para que la marca, el vestuario o la dirección de arte no cambien entre frames. Úsalo cuando trabajes con una identidad visual definida: un tono corporativo, una paleta de temporada o el color de un producto. La consistencia cromática es tan importante como la del rostro; sin ella, la secuencia se siente armada con piezas sueltas.</p>
<h2 class="report-chapter">Tutorial: de keyframe a secuencia</h2>
<div class="news-timeline">
<div class="timeline-item"><span class="timeline-time">Paso 1</span><p class="timeline-text"><strong>Escribe el guion y el shot list.</strong> Define cuántos planos necesitas, qué dice el personaje y qué cambia entre tomas. Sin guion, la consistencia no sirve de nada.</p></div>
<div class="timeline-item"><span class="timeline-time">Paso 2</span><p class="timeline-text"><strong>Entrena el Soul ID.</strong> Reúne 20–80 fotos limpias, revisa que sea la misma persona y lanza el entrenamiento. Nombra el personaje con claridad.</p></div>
<div class="timeline-item"><span class="timeline-time">Paso 3</span><p class="timeline-text"><strong>Genera tres keyframes con Soul Cinema.</strong> Usa el mismo preset, la misma lente y la misma lógica de luz. Cambia solo el encuadre y la acción.</p></div>
<div class="timeline-item"><span class="timeline-time">Paso 4</span><p class="timeline-text"><strong>Fija la paleta con Soul HEX.</strong> Introduce los colores de marca o de la escena y compara los tres frames en una hoja de contactos.</p></div>
<div class="timeline-item"><span class="timeline-time">Paso 5</span><p class="timeline-text"><strong>Anima el mejor frame.</strong> Llévalo a Seedance, Kling o DoP. En Seedance puedes usar el Soul ID como <em>Element</em> para mantener la cara durante el movimiento.</p></div>
<div class="timeline-item"><span class="timeline-time">Paso 6</span><p class="timeline-text"><strong>Añade voz y edita.</strong> Usa Lipsync Studio si el personaje habla y Audio para la voz. Monta en FilmCraft y revisa la identidad plano a plano.</p></div>
</div>
${quote(
  'Every frame tells a story. Generate cinematic-grade images with the richness and detail of a real film set.',
  'HF',
  'Higgsfield',
  'Soul Cinema'
)}
<h2 class="report-chapter">Errores que arruinan la identidad</h2>
<ul>
<li><strong>Entrenar con fotos de varias personas.</strong> El modelo aprende un promedio; el rostro se vuelve genérico.</li>
<li><strong>Usar solo selfies frontales.</strong> Sin variedad de ángulos, el personaje falla al girar la cara.</li>
<li><strong>Cambiar de preset en cada plano.</strong> La textura y la luz también construyen la identidad.</li>
<li><strong>Animar sin referencia.</strong> Si el modelo de video no recibe el keyframe o el Element, inventará la cara.</li>
<li><strong>Ignorar el color.</strong> Un rostro coherente con una paleta incoherente sigue pareciendo otro personaje.</li>
</ul>
<h2 class="report-chapter">Costos, consentimiento y límites</h2>
<p>Soul ID consume créditos de entrenamiento y cada generación consume créditos según el modelo y la resolución. No es una herramienta de deepfake: úsala con personas que hayan dado su consentimiento y con material que tengas derecho a usar. La consistencia no es perfecta en movimiento rápido, y los modelos de video pueden degradar el rostro en planos largos; revisa cada toma antes de escalar.</p>
${doc(
  'https://higgsfield.ai/soul-cinema',
  'SC',
  'Soul Cinema — Higgsfield',
  'Presets, ejemplos y acceso al modelo cinematográfico.'
)}
${doc(
  'https://higgsfield.ai/creator-hub/help-center/ai-models/how-do-i-create-and-use-a-soul-id-character',
  'ID',
  'Cómo crear y usar un Soul ID',
  'Guía oficial de fotos, entrenamiento y uso del personaje.'
)}
${doc(
  'https://higgsfield.ai/blog/Soul-ID-AI-Character-Consistency',
  'BLOG',
  'Soul ID y consistencia de personajes',
  'Artículo de Higgsfield sobre el entrenamiento y sus límites.'
)}
<p><strong>Veredicto:</strong> Soul Cinema + Soul ID + Soul HEX es el flujo más completo para ficción corta con personajes recurrentes. La calidad depende menos del prompt que del set de entrenamiento y de la disciplina para mantener luz, lente y paleta. Si cuidas esas tres variables, el personaje sobrevive al cambio de plano, de modelo y de formato.</p>`,
    contentEn: `<h1>Higgsfield Soul Cinema and Soul ID: characters that don't change faces between shots</h1>
<p class="lead"><em>The number one problem in generated fiction is not the quality of a single frame: it is identity. The character in shot 1 does not look like the one in shot 4, the nose changes, the skin tone drifts. Higgsfield tackles that problem with three pieces: Soul Cinema for cinematic texture, Soul ID to train a face and Soul HEX to lock the palette. Together they turn a collection of images into a character.</em></p>
${figure(
  `${IMG}/higgsfield-soul-cinema-soul-id-personajes-consistentes.jpg`,
  'Close-up of an eye generated with Higgsfield Soul Cinema',
  'Soul Cinema prioritises skin, grain and reflections with a film-like texture. Image: Higgsfield'
)}
${stats([
  ['20–80', 'photos for Soul ID'],
  ['4–5 months', 'recommended variety'],
  ['Minutes', 'training time'],
  ['50+', 'Soul presets'],
])}
<h2 class="report-chapter">What the Soul family is</h2>
<p><strong>Soul</strong> is Higgsfield's image model for portrait and fashion: realistic skin, studio lighting and a library of aesthetic presets. <strong>Soul Cinema</strong> takes that base into film territory: grain, contrast, film textures and a more restrained palette. <strong>Soul ID</strong> is the identity layer: train a face and reuse it in any generation. <strong>Soul HEX</strong> locks brand colors so the palette does not drift between shots.</p>
<h2 class="report-chapter">Soul Cinema: texture before prompt</h2>
<p>Soul Cinema is not a “pretty photo” model; it is a <em>look</em> model. It works best when you think like a cinematographer: define the light source, contrast ratio, temperature and grain. Long, literary prompts help less than a clear visual reference and a consistent preset.</p>
<p>Use it for scene keyframes, costume concepts, lighting tests and frames you will later animate with a video model. It is stronger in close-ups and medium shots than in large crowds.</p>
<h2 class="report-chapter">Soul ID: training an identity</h2>
<p>Training asks for 20 to 80 photos of a single person, ideally taken over 4 or 5 months, with a variety of angles, expressions and lighting. Include at least one full-body photo. Avoid repeated poses, sunglasses, hats that hide the face and harsh shadows. The process takes a few minutes, and then you select the character in the <em>Character</em> tab when generating.</p>
<p>A Soul ID is not a filter: it is a trained identity. The cleaner and more varied the set, the more stable the result. If the character looks different in every shot, retrain with a better set before blaming the prompt.</p>
<h2 class="report-chapter">Soul HEX: locking the palette</h2>
<p>Soul HEX lets you introduce specific color references so the brand, wardrobe or art direction do not change between frames. Use it when you work with a defined visual identity: a corporate tone, a seasonal palette or a product color. Color consistency is as important as facial consistency; without it, the sequence feels assembled from loose pieces.</p>
<h2 class="report-chapter">Tutorial: from keyframe to sequence</h2>
<div class="news-timeline">
<div class="timeline-item"><span class="timeline-time">Step 1</span><p class="timeline-text"><strong>Write the script and shot list.</strong> Define how many shots you need, what the character says and what changes between takes. Without a script, consistency is useless.</p></div>
<div class="timeline-item"><span class="timeline-time">Step 2</span><p class="timeline-text"><strong>Train the Soul ID.</strong> Gather 20–80 clean photos, check that it is the same person and start training. Name the character clearly.</p></div>
<div class="timeline-item"><span class="timeline-time">Step 3</span><p class="timeline-text"><strong>Generate three keyframes with Soul Cinema.</strong> Use the same preset, lens and lighting logic. Change only framing and action.</p></div>
<div class="timeline-item"><span class="timeline-time">Step 4</span><p class="timeline-text"><strong>Lock the palette with Soul HEX.</strong> Add the brand or scene colors and compare the three frames on a contact sheet.</p></div>
<div class="timeline-item"><span class="timeline-time">Step 5</span><p class="timeline-text"><strong>Animate the best frame.</strong> Take it to Seedance, Kling or DoP. In Seedance you can use the Soul ID as an <em>Element</em> to keep the face during motion.</p></div>
<div class="timeline-item"><span class="timeline-time">Step 6</span><p class="timeline-text"><strong>Add voice and edit.</strong> Use Lipsync Studio if the character speaks and Audio for voice. Edit in FilmCraft and review identity shot by shot.</p></div>
</div>
${quote(
  'Every frame tells a story. Generate cinematic-grade images with the richness and detail of a real film set.',
  'HF',
  'Higgsfield',
  'Soul Cinema'
)}
<h2 class="report-chapter">Mistakes that ruin identity</h2>
<ul>
<li><strong>Training with photos of several people.</strong> The model learns an average; the face becomes generic.</li>
<li><strong>Using only frontal selfies.</strong> Without angle variety, the character fails when the face turns.</li>
<li><strong>Changing the preset in every shot.</strong> Texture and light also build identity.</li>
<li><strong>Animating without a reference.</strong> If the video model does not receive the keyframe or the Element, it will invent the face.</li>
<li><strong>Ignoring color.</strong> A coherent face with an incoherent palette still looks like another character.</li>
</ul>
<h2 class="report-chapter">Costs, consent and limits</h2>
<p>Soul ID consumes training credits and every generation costs credits depending on model and resolution. It is not a deepfake tool: use it with people who have given consent and with material you have the right to use. Consistency is not perfect in fast motion, and video models can degrade the face in long shots; review every take before scaling up.</p>
${doc(
  'https://higgsfield.ai/soul-cinema',
  'SC',
  'Soul Cinema — Higgsfield',
  'Presets, examples and access to the cinematic model.'
)}
${doc(
  'https://higgsfield.ai/creator-hub/help-center/ai-models/how-do-i-create-and-use-a-soul-id-character',
  'ID',
  'How to create and use a Soul ID',
  'Official guide to photos, training and using the character.'
)}
${doc(
  'https://higgsfield.ai/blog/Soul-ID-AI-Character-Consistency',
  'BLOG',
  'Soul ID and character consistency',
  'Higgsfield article on training and its limits.'
)}
<p><strong>Verdict:</strong> Soul Cinema + Soul ID + Soul HEX is the most complete workflow for short fiction with recurring characters. Quality depends less on the prompt than on the training set and the discipline to keep light, lens and palette consistent. If you take care of those three variables, the character survives a change of shot, model and format.</p>`,
  },
  {
    id: '1388',
    slug: 'higgsfield-cinema-studio-dop-camara-lente-movimiento',
    publishedAt: '2026-11-04T14:00:00-04:00',
    titleEs: 'Cinema Studio 4.0 y DoP: cámara, lente y movimiento sin adivinar',
    titleEn: 'Cinema Studio 4.0 and DoP: camera, lens and movement without guessing',
    excerptEs:
      'Cinema Studio 4.0 lleva a Higgsfield a clips de hasta 60 segundos y 4K, con AI Cast, localizaciones, 50 referencias y audio nativo. DoP sigue siendo la vía rápida para animar una imagen con un preset de cámara. Esta guía explica qué controla cada uno y cómo escribir un movimiento que no cambie en cada intento.',
    excerptEn:
      'Cinema Studio 4.0 takes Higgsfield to clips up to 60 seconds and 4K, with AI Cast, locations, 50 references and native audio. DoP remains the fast route to animate an image with a camera preset. This guide explains what each one controls and how to write movement that does not change on every attempt.',
    date: '2026-11-04',
    readTimeEs: '11 min de lectura',
    readTimeEn: '11 min read',
    imageUrl: `${IMG}/higgsfield-cinema-studio-dop-camara-lente-movimiento.jpg`,
    imageCaption: 'Cinema Studio 4.0 de Higgsfield. Imagen: Higgsfield',
    categoryEs: CAT_ES,
    categoryEn: CAT_EN,
    contentEs: `<h1>Cinema Studio 4.0 y DoP: cámara, lente y movimiento sin adivinar</h1>
<p class="lead"><em>Pedir “un dolly in” no es dirigir. El modelo no sabe a qué velocidad, con qué lente ni dónde termina el plano, así que improvisa en cada intento. Cinema Studio 4.0 y DoP existen para convertir esa ambigüedad en parámetros. Uno es un espacio de producción completo; el otro, un motor de imagen a video con presets de cámara. Esta guía explica cuándo usar cada uno y cómo escribir movimiento reproducible.</em></p>
${figure(
  `${IMG}/higgsfield-cinema-studio-dop-camara-lente-movimiento.jpg`,
  'Tarjeta oficial de Cinema Studio 4.0 de Higgsfield',
  'Cinema Studio 4.0 incorpora control de género, cámara, tempo, reparto y localizaciones. Imagen: Higgsfield'
)}
${stats([
  ['60 s', 'duración máxima'],
  ['4K', 'resolución nativa'],
  ['50', 'referencias'],
  ['6', 'géneros cinematográficos'],
])}
<h2 class="report-chapter">Dos herramientas distintas</h2>
<p><strong>Cinema Studio 4.0</strong> es el espacio de dirección: eliges género, control de cámara, tempo, reparto, localización, emoción y paleta; el sistema combina varios modelos para producir un clip largo con audio nativo. Está pensado para secuencias, no para un único plano aislado.</p>
<p><strong>DoP</strong> (Director of Photography) es el motor nativo de imagen a video de Higgsfield. Le das un keyframe, eliges un preset que define el movimiento o el efecto, ajustas duración, semilla y pasos, y generas. En el selector de modelos aparece como <strong>Higgsfield Standard</strong>. Es la vía más rápida para animar una imagen con una intención cinematográfica concreta.</p>
<h2 class="report-chapter">Cinema Studio 4.0: qué cambió</h2>
<ul>
<li><strong>Duración y resolución:</strong> clips de hasta 60 segundos y 4K nativo, sin costuras visibles entre planos.</li>
<li><strong>Montage Pacing:</strong> controla el ritmo del montaje, no solo el movimiento de cámara.</li>
<li><strong>AI Cast:</strong> reparto consistente de personajes a lo largo de la secuencia.</li>
<li><strong>Cinematic Locations:</strong> localizaciones coherentes con la geografía y la luz de la escena.</li>
<li><strong>50 referencias:</strong> imágenes de estilo, vestuario, props y paleta en una sola generación.</li>
<li><strong>Géneros y emoción:</strong> seis géneros y una rueda de emoción para orientar la actuación y el tono.</li>
<li><strong>Color y audio:</strong> más de 50 presets de color y audio generado en la misma pasada.</li>
</ul>
<h2 class="report-chapter">DoP: presets con intención</h2>
<p>El flujo de DoP es corto: abre <em>Video → Create Video</em>, selecciona un preset de Higgsfield DoP, añade la imagen keyframe, elige duración de 3 o 5 segundos, ajusta semilla y pasos, y activa <em>Enhance</em> si necesitas más detalle. Los presets se agrupan en familias: <em>Effects</em>, <em>Basic Camera Control</em>, <em>Epic Camera Control</em>, <em>Catch the Pulse</em> y <em>Mix</em>.</p>
<p>La clave es no acumular presets. Un movimiento claro funciona mejor que tres capas de efecto. Si el plano necesita una acción concreta —un giro de cabeza, una puerta que se abre—, descríbela en el prompt y deja que el preset resuelva solo la cámara.</p>
<h2 class="report-chapter">El lenguaje de cámara</h2>
<table class="spec-table">
<thead><tr><th>Término</th><th>Qué hace</th><th>Cómo pedirlo</th></tr></thead>
<tbody>
<tr><td>Dolly in</td><td>La cámara avanza físicamente</td><td>“Slow dolly in, constant speed, from medium to close-up”.</td></tr>
<tr><td>Zoom</td><td>Cambia la distancia focal, no la posición</td><td>“Slow zoom in, 35 to 50 mm, no camera movement”.</td></tr>
<tr><td>Truck</td><td>La cámara se desplaza lateralmente</td><td>“Lateral truck right, 24 mm, steady”.</td></tr>
<tr><td>Pan / tilt</td><td>Rota sobre el eje vertical u horizontal</td><td>“Slow pan left, stops on the window”.</td></tr>
<tr><td>Orbit</td><td>Rodea al sujeto</td><td>“30-degree orbit, constant speed, subject centered”.</td></tr>
<tr><td>Crane</td><td>Sube o baja en vertical</td><td>“Crane up, revealing the city, 35 mm”.</td></tr>
<tr><td>Handheld</td><td>Micro-movimiento orgánico</td><td>“Subtle handheld, breathing camera, no shake”.</td></tr>
</tbody>
</table>
<h2 class="report-chapter">Plantillas de prompt</h2>
<p><strong>Retrato:</strong> “Slow dolly in, 50 mm, f/2.0, from medium shot to close-up, subject still, soft window light from the left, shallow depth of field, no zoom”.</p>
<p><strong>Producto:</strong> “30-degree orbit around the product, 85 mm, constant speed, seamless background, hard key light, soft fill, no camera shake”.</p>
<p><strong>Paisaje:</strong> “Crane up and tilt down, 24 mm, golden hour, slow constant speed, reveal the valley, no cuts”.</p>
<p>En español funcionan igual, pero sé consistente: si escribes “dolly in” en un plano, no escribas “zoom” en el siguiente. La terminología mezclada produce movimientos contradictorios.</p>
${quote(
  'Become an AI Director.',
  'HF',
  'Higgsfield',
  'Cinema Studio 4.0'
)}
<h2 class="report-chapter">Errores típicos</h2>
<ul>
<li><strong>No definir el punto final.</strong> “Dolly in” sin distancia produce un movimiento distinto en cada ejecución.</li>
<li><strong>Confundir zoom con dolly.</strong> El zoom aplana la perspectiva; el dolly cambia la relación con el fondo.</li>
<li><strong>Pedir velocidad y emoción a la vez.</strong> “Rápido y melancólico” es contradictorio; elige una intención.</li>
<li><strong>Usar 4K para probar.</strong> Itera a 720p y sube solo cuando el movimiento esté resuelto.</li>
<li><strong>Ignorar el audio.</strong> En Cinema Studio, el sonido forma parte del clip; revisa si el audio nativo coincide con la acción.</li>
</ul>
<h2 class="report-chapter">Costos y estrategia</h2>
<p>En el plan Plus de 49 dólares al mes, un clip de 10 segundos en 720p con Cinema Studio ronda los 70 créditos; 30 segundos en 1080p pueden acercarse a 480. DoP suele ser más barato porque trabaja con clips de 3 o 5 segundos. La estrategia sensata es prueba corta y barata, ajuste de prompt y generación final solo del plano aprobado.</p>
${doc(
  'https://higgsfield.ai/cinematic-video-generator',
  'CS',
  'Cinema Studio 4.0',
  'Géneros, control de cámara, AI Cast y localizaciones.'
)}
${doc(
  'https://higgsfield.ai/creator-hub/help-center/ai-models/how-do-i-use-dop',
  'DOP',
  'Cómo usar Higgsfield DoP',
  'Guía oficial de presets, duración, semilla y Enhance.'
)}
${doc(
  'https://higgsfield.ai/blog/ai-video-camera-control',
  'CAM',
  'Control de cámara en video IA',
  'Movimiento, ángulo y lente: qué se controla con prompt y qué con parámetros.'
)}
<p><strong>Veredicto:</strong> usa DoP cuando tengas una imagen aprobada y necesites un plano corto con movimiento controlado. Usa Cinema Studio 4.0 cuando la pieza tenga varios planos, reparto recurrente, localizaciones y audio. En ambos casos, la calidad sube cuando escribes como director de fotografía: movimiento, velocidad, lente, encuadre inicial y final. Lo demás es suerte.</p>`,
    contentEn: `<h1>Cinema Studio 4.0 and DoP: camera, lens and movement without guessing</h1>
<p class="lead"><em>Asking for “a dolly in” is not directing. The model does not know at what speed, with what lens or where the shot ends, so it improvises on every attempt. Cinema Studio 4.0 and DoP exist to turn that ambiguity into parameters. One is a full production space; the other is an image-to-video engine with camera presets. This guide explains when to use each and how to write reproducible movement.</em></p>
${figure(
  `${IMG}/higgsfield-cinema-studio-dop-camara-lente-movimiento.jpg`,
  'Official Cinema Studio 4.0 card from Higgsfield',
  'Cinema Studio 4.0 adds genre, camera, tempo, cast and location controls. Image: Higgsfield'
)}
${stats([
  ['60 s', 'maximum duration'],
  ['4K', 'native resolution'],
  ['50', 'references'],
  ['6', 'cinematic genres'],
])}
<h2 class="report-chapter">Two different tools</h2>
<p><strong>Cinema Studio 4.0</strong> is the directing space: choose genre, camera control, tempo, cast, location, emotion and palette; the system combines several models to produce a long clip with native audio. It is designed for sequences, not for a single isolated shot.</p>
<p><strong>DoP</strong> (Director of Photography) is Higgsfield's native image-to-video engine. You give it a keyframe, choose a preset that defines the motion or effect, adjust duration, seed and steps, and generate. It appears as <strong>Higgsfield Standard</strong> in the model selector. It is the fastest route to animate an image with a specific cinematic intention.</p>
<h2 class="report-chapter">Cinema Studio 4.0: what changed</h2>
<ul>
<li><strong>Duration and resolution:</strong> clips up to 60 seconds and native 4K, without visible seams between shots.</li>
<li><strong>Montage Pacing:</strong> controls the rhythm of the edit, not just camera movement.</li>
<li><strong>AI Cast:</strong> consistent character casting across the sequence.</li>
<li><strong>Cinematic Locations:</strong> locations coherent with the geography and light of the scene.</li>
<li><strong>50 references:</strong> style images, wardrobe, props and palette in a single generation.</li>
<li><strong>Genres and emotion:</strong> six genres and an emotion wheel to guide performance and tone.</li>
<li><strong>Color and audio:</strong> more than 50 color presets and audio generated in the same pass.</li>
</ul>
<h2 class="report-chapter">DoP: presets with intention</h2>
<p>The DoP flow is short: open <em>Video → Create Video</em>, select a Higgsfield DoP preset, add the keyframe image, choose 3 or 5 seconds, adjust seed and steps, and enable <em>Enhance</em> if you need more detail. Presets are grouped into families: <em>Effects</em>, <em>Basic Camera Control</em>, <em>Epic Camera Control</em>, <em>Catch the Pulse</em> and <em>Mix</em>.</p>
<p>The key is not to stack presets. One clear move works better than three layers of effect. If the shot needs a specific action —a head turn, a door opening— describe it in the prompt and let the preset handle only the camera.</p>
<h2 class="report-chapter">The language of camera</h2>
<table class="spec-table">
<thead><tr><th>Term</th><th>What it does</th><th>How to ask for it</th></tr></thead>
<tbody>
<tr><td>Dolly in</td><td>The camera moves physically forward</td><td>“Slow dolly in, constant speed, from medium to close-up”.</td></tr>
<tr><td>Zoom</td><td>Changes focal length, not position</td><td>“Slow zoom in, 35 to 50 mm, no camera movement”.</td></tr>
<tr><td>Truck</td><td>The camera moves sideways</td><td>“Lateral truck right, 24 mm, steady”.</td></tr>
<tr><td>Pan / tilt</td><td>Rotates on the vertical or horizontal axis</td><td>“Slow pan left, stops on the window”.</td></tr>
<tr><td>Orbit</td><td>Moves around the subject</td><td>“30-degree orbit, constant speed, subject centered”.</td></tr>
<tr><td>Crane</td><td>Moves vertically up or down</td><td>“Crane up, revealing the city, 35 mm”.</td></tr>
<tr><td>Handheld</td><td>Organic micro-movement</td><td>“Subtle handheld, breathing camera, no shake”.</td></tr>
</tbody>
</table>
<h2 class="report-chapter">Prompt templates</h2>
<p><strong>Portrait:</strong> “Slow dolly in, 50 mm, f/2.0, from medium shot to close-up, subject still, soft window light from the left, shallow depth of field, no zoom”.</p>
<p><strong>Product:</strong> “30-degree orbit around the product, 85 mm, constant speed, seamless background, hard key light, soft fill, no camera shake”.</p>
<p><strong>Landscape:</strong> “Crane up and tilt down, 24 mm, golden hour, slow constant speed, reveal the valley, no cuts”.</p>
<p>Spanish works just as well, but be consistent: if you write “dolly in” in one shot, do not write “zoom” in the next. Mixed terminology produces contradictory movement.</p>
${quote(
  'Become an AI Director.',
  'HF',
  'Higgsfield',
  'Cinema Studio 4.0'
)}
<h2 class="report-chapter">Typical mistakes</h2>
<ul>
<li><strong>Not defining the end point.</strong> “Dolly in” without distance produces a different move on every run.</li>
<li><strong>Confusing zoom with dolly.</strong> Zoom flattens perspective; dolly changes the relationship with the background.</li>
<li><strong>Asking for speed and emotion at once.</strong> “Fast and melancholic” is contradictory; choose one intention.</li>
<li><strong>Testing in 4K.</strong> Iterate at 720p and go up only when the movement is resolved.</li>
<li><strong>Ignoring audio.</strong> In Cinema Studio, sound is part of the clip; check that native audio matches the action.</li>
</ul>
<h2 class="report-chapter">Costs and strategy</h2>
<p>On the 49-dollar Plus plan, a 10-second 720p Cinema Studio clip costs around 70 credits; 30 seconds at 1080p can approach 480. DoP is usually cheaper because it works with 3 or 5-second clips. The sensible strategy is a short, cheap test, prompt adjustment and a final generation only of the approved shot.</p>
${doc(
  'https://higgsfield.ai/cinematic-video-generator',
  'CS',
  'Cinema Studio 4.0',
  'Genres, camera control, AI Cast and locations.'
)}
${doc(
  'https://higgsfield.ai/creator-hub/help-center/ai-models/how-do-i-use-dop',
  'DOP',
  'How to use Higgsfield DoP',
  'Official guide to presets, duration, seed and Enhance.'
)}
${doc(
  'https://higgsfield.ai/blog/ai-video-camera-control',
  'CAM',
  'Camera control in AI video',
  'Movement, angle and lens: what is controlled by prompt and what by parameters.'
)}
<p><strong>Verdict:</strong> use DoP when you have an approved image and need a short shot with controlled movement. Use Cinema Studio 4.0 when the piece has several shots, recurring cast, locations and audio. In both cases, quality rises when you write like a cinematographer: movement, speed, lens, start and end framing. The rest is luck.</p>`,
  },
  {
    id: '1389',
    slug: 'higgsfield-seedance-kling-veo-generacion-video',
    publishedAt: '2026-11-04T15:00:00-04:00',
    titleEs: 'Seedance, Kling y Veo: qué modelo elegir y cómo cerrar un video de 30 segundos',
    titleEn: 'Seedance, Kling and Veo: which model to choose and how to finish a 30-second video',
    excerptEs:
      'Seedance 2.5 apuesta por clips largos y multi-shot con audio; Kling 3.0 y 4.0 por duración y referencias; Veo 3.1 por realismo y sonido. Esta guía compara los modelos de Higgsfield, explica cuál usar en cada escena y cierra un flujo completo de 30 segundos con presupuesto de créditos.',
    excerptEn:
      'Seedance 2.5 bets on long, multi-shot clips with audio; Kling 3.0 and 4.0 on duration and references; Veo 3.1 on realism and sound. This guide compares Higgsfield models, explains which one to use for each scene, and closes a complete 30-second workflow with a credit budget.',
    date: '2026-11-04',
    readTimeEs: '11 min de lectura',
    readTimeEn: '11 min read',
    imageUrl: `${IMG}/higgsfield-seedance-kling-veo-generacion-video.jpg`,
    imageCaption: 'Fotograma de una pieza generada con modelos de video de Higgsfield. Imagen: Higgsfield',
    categoryEs: CAT_ES,
    categoryEn: CAT_EN,
    contentEs: `<h1>Seedance, Kling y Veo: qué modelo elegir y cómo cerrar un video de 30 segundos</h1>
<p class="lead"><em>La pregunta “¿cuál es el mejor modelo de video?” no tiene una respuesta útil. La pregunta correcta es “¿cuál es el mejor modelo para este plano?”. Seedance, Kling y Veo tienen fortalezas distintas: duración, movimiento realista, audio, referencias o control de cámara. Esta guía ordena el mapa y muestra un flujo completo de 30 segundos sin quemar créditos.</em></p>
${figure(
  `${IMG}/higgsfield-seedance-kling-veo-generacion-video.jpg`,
  'Fotograma cinematográfico generado con un modelo de video de Higgsfield',
  'Los modelos de video de Higgsfield comparten keyframes, referencias y audio, pero rinden distinto según la escena. Imagen: Higgsfield'
)}
${stats([
  ['30 s', 'clips multi-shot'],
  ['1080p', 'resolución habitual'],
  ['Audio', 'nativo en varios modelos'],
  ['1.000', 'créditos en el plan Plus'],
])}
<h2 class="report-chapter">El modelo no es el proyecto</h2>
<p>Antes de elegir marca, define cuatro cosas: cuántos planos necesita la pieza, cuánto dura cada uno, si hay diálogo o voz en off y cuántas referencias visuales son imprescindibles. Esas respuestas descartan modelos más rápido que cualquier comparativa. Un clip de 30 segundos no es un plano de 30 segundos: casi siempre son seis planos de cinco segundos unidos en edición.</p>
<h2 class="report-chapter">Mapa de modelos 2026</h2>
<table class="spec-table">
<thead><tr><th>Modelo</th><th>Duración</th><th>Fortaleza</th><th>Mejor para</th></tr></thead>
<tbody>
<tr><td>Seedance 2.5</td><td>Hasta 30 s</td><td>Multi-shot, audio, movimiento realista</td><td>Secuencias con varias acciones y diálogo.</td></tr>
<tr><td>Kling 3.0</td><td>Hasta 15 s</td><td>Audio, buen equilibrio calidad/costo</td><td>Planos medios, publicidad y redes.</td></tr>
<tr><td>Kling 4.0</td><td>Hasta 30 s</td><td>1080p, hasta 10 referencias</td><td>Personajes recurrentes y producto.</td></tr>
<tr><td>Veo 3.1</td><td>Hasta 8 s</td><td>Realismo, audio nativo</td><td>Diálogo, primeros planos, detalle.</td></tr>
<tr><td>Wan 2.7</td><td>Corto</td><td>Primer y último frame</td><td>Transiciones controladas y loops.</td></tr>
<tr><td>Hailuo 2.3</td><td>Corto</td><td>Movimiento estilizado</td><td>Anime, acción y efectos.</td></tr>
</tbody>
</table>
<h2 class="report-chapter">Elegir por escena, no por marca</h2>
<ul>
<li><strong>Diálogo o voz:</strong> Veo 3.1 o Kling 3.0 si el audio nativo importa; Lipsync Studio si necesitas control exacto de la boca.</li>
<li><strong>Secuencia larga:</strong> Seedance 2.5 o Kling 4.0, que sostienen varios segundos y cambios de acción.</li>
<li><strong>Personaje recurrente:</strong> Kling 4.0 con referencias o Seedance con Soul ID como Element.</li>
<li><strong>Transición entre dos imágenes:</strong> Wan 2.7 con primer y último frame.</li>
<li><strong>Estilo anime o acción:</strong> Hailuo 2.3; para fotorrealismo, Veo o Seedance.</li>
</ul>
<h2 class="report-chapter">Tutorial: video de 30 segundos en siete pasos</h2>
<div class="news-timeline">
<div class="timeline-item"><span class="timeline-time">Paso 1</span><p class="timeline-text"><strong>Guion y shot list.</strong> Seis planos de cinco segundos con una acción clara cada uno. Escribe qué entra y qué sale de cuadro.</p></div>
<div class="timeline-item"><span class="timeline-time">Paso 2</span><p class="timeline-text"><strong>Keyframes.</strong> Genera cada plano con Soul Cinema, Nano Banana o el modelo de imagen que mejor responda. Reutiliza el mismo personaje y la misma paleta.</p></div>
<div class="timeline-item"><span class="timeline-time">Paso 3</span><p class="timeline-text"><strong>Prueba barata.</strong> Anima cada keyframe a 720p y 5 segundos con el modelo elegido. Descarta los planos que no funcionan antes de escalar.</p></div>
<div class="timeline-item"><span class="timeline-time">Paso 4</span><p class="timeline-text"><strong>Ajusta el prompt.</strong> Sujeto, acción, cámara, luz y negativo. Un cambio por iteración. Guarda la semilla de los aciertos.</p></div>
<div class="timeline-item"><span class="timeline-time">Paso 5</span><p class="timeline-text"><strong>Genera a 1080p.</strong> Solo los planos aprobados. Si el modelo ofrece audio nativo, revísalo antes de dar el plano por bueno.</p></div>
<div class="timeline-item"><span class="timeline-time">Paso 6</span><p class="timeline-text"><strong>Audio y voz.</strong> Usa audio nativo, Lipsync Studio o Audio (texto a voz, cambio de voz, traducción a 18 idiomas). Iguala niveles.</p></div>
<div class="timeline-item"><span class="timeline-time">Paso 7</span><p class="timeline-text"><strong>Edita y exporta.</strong> Monta en FilmCraft, normaliza a −14 LUFS para web y exporta un master. Revisa en un reproductor externo.</p></div>
</div>
<h2 class="report-chapter">Presupuesto de créditos</h2>
<p>Con el plan Plus de 49 dólares al mes obtienes 1.000 créditos. Un clip de 10 segundos con Seedance 2.5 en 1080p y audio ronda los 160 créditos; un plano de 10 segundos en 720p con Cinema Studio, unos 70; 30 segundos en 1080p pueden llegar a 480. La diferencia entre probar en baja y probar en alta es la diferencia entre terminar el proyecto y quedarte sin créditos a mitad.</p>
<p>Regla práctica: reserva el 60% del presupuesto para pruebas y el 40% para las versiones finales. Si un plano no funciona tras tres intentos, cambia de modelo o de keyframe; insistir con el mismo prompt rara vez arregla el problema.</p>
${quote(
  'Many weak outputs trace back to a decision made before hitting generate: a vague prompt, a blurry source image, the wrong model for the job, or generating at full resolution before confirming the prompt works.',
  'HF',
  'Higgsfield',
  'Guía para principiantes, 2026'
)}
<h2 class="report-chapter">Checklist de prompt</h2>
<ul>
<li><strong>Sujeto:</strong> quién o qué, con edad, vestuario y expresión si importan.</li>
<li><strong>Acción:</strong> un verbo principal; evita dos acciones simultáneas.</li>
<li><strong>Cámara:</strong> movimiento, velocidad, lente y encuadre inicial y final.</li>
<li><strong>Luz:</strong> dirección, calidad, hora del día y contraste.</li>
<li><strong>Negativo:</strong> qué no quieres: texto, marcas de agua, manos extra, cambios de cara.</li>
</ul>
<h2 class="report-chapter">Errores que cuestan créditos</h2>
<ul>
<li>Generar en 1080p antes de validar el prompt.</li>
<li>Cambiar tres variables a la vez y no saber qué funcionó.</li>
<li>Usar un keyframe borroso o con poca luz.</li>
<li>Pedir un movimiento que el modelo no puede resolver en la duración elegida.</li>
<li>Olvidar el audio hasta el final y tener que rehacer los planos con diálogo.</li>
</ul>
${doc(
  'https://higgsfield.ai/ai/video',
  'VID',
  'Generador de video de Higgsfield',
  'Acceso a Seedance, Kling, Veo, Wan, Hailuo y DoP.'
)}
${doc(
  'https://higgsfield.ai/blog/how-to-make-ai-videos-beginners-guide',
  'GUIA',
  'Cómo hacer videos con IA en 2026',
  'Guía paso a paso con un ejemplo real de Seedance 2.5 y costos.'
)}
${doc(
  'https://higgsfield.ai/creator-hub/help-center/ai-models/which-ai-model-should-i-use',
  'MOD',
  'Qué modelo de Higgsfield usar',
  'Comparativa oficial de familias de imagen, video y audio.'
)}
<p><strong>Conclusión:</strong> el mejor modelo es el que resuelve tu plano dentro de tu presupuesto. Empieza con una prueba corta, mide el resultado y escala solo lo que funciona. Seedance brilla en secuencias largas, Kling en equilibrio y duración, Veo en realismo y diálogo, Wan en transiciones y Hailuo en estilo. Dominar esa matriz vale más que memorizar versiones.</p>`,
    contentEn: `<h1>Seedance, Kling and Veo: which model to choose and how to finish a 30-second video</h1>
<p class="lead"><em>The question “which is the best video model?” has no useful answer. The right question is “which is the best model for this shot?”. Seedance, Kling and Veo have different strengths: duration, realistic motion, audio, references or camera control. This guide orders the map and shows a complete 30-second workflow without burning credits.</em></p>
${figure(
  `${IMG}/higgsfield-seedance-kling-veo-generacion-video.jpg`,
  'Cinematic frame generated with a Higgsfield video model',
  'Higgsfield video models share keyframes, references and audio, but perform differently depending on the scene. Image: Higgsfield'
)}
${stats([
  ['30 s', 'multi-shot clips'],
  ['1080p', 'typical resolution'],
  ['Audio', 'native in several models'],
  ['1,000', 'credits on the Plus plan'],
])}
<h2 class="report-chapter">The model is not the project</h2>
<p>Before choosing a brand, define four things: how many shots the piece needs, how long each one lasts, whether there is dialogue or voice-over and how many visual references are essential. Those answers rule out models faster than any comparison. A 30-second clip is not a 30-second shot: it is almost always six five-second shots joined in the edit.</p>
<h2 class="report-chapter">2026 model map</h2>
<table class="spec-table">
<thead><tr><th>Model</th><th>Duration</th><th>Strength</th><th>Best for</th></tr></thead>
<tbody>
<tr><td>Seedance 2.5</td><td>Up to 30 s</td><td>Multi-shot, audio, realistic motion</td><td>Sequences with several actions and dialogue.</td></tr>
<tr><td>Kling 3.0</td><td>Up to 15 s</td><td>Audio, good quality/cost balance</td><td>Medium shots, advertising and social.</td></tr>
<tr><td>Kling 4.0</td><td>Up to 30 s</td><td>1080p, up to 10 references</td><td>Recurring characters and product.</td></tr>
<tr><td>Veo 3.1</td><td>Up to 8 s</td><td>Realism, native audio</td><td>Dialogue, close-ups, detail.</td></tr>
<tr><td>Wan 2.7</td><td>Short</td><td>First and last frame</td><td>Controlled transitions and loops.</td></tr>
<tr><td>Hailuo 2.3</td><td>Short</td><td>Stylised motion</td><td>Anime, action and effects.</td></tr>
</tbody>
</table>
<h2 class="report-chapter">Choose by scene, not by brand</h2>
<ul>
<li><strong>Dialogue or voice:</strong> Veo 3.1 or Kling 3.0 if native audio matters; Lipsync Studio if you need exact mouth control.</li>
<li><strong>Long sequence:</strong> Seedance 2.5 or Kling 4.0, which sustain several seconds and action changes.</li>
<li><strong>Recurring character:</strong> Kling 4.0 with references or Seedance with a Soul ID as an Element.</li>
<li><strong>Transition between two images:</strong> Wan 2.7 with first and last frame.</li>
<li><strong>Anime or action style:</strong> Hailuo 2.3; for photorealism, Veo or Seedance.</li>
</ul>
<h2 class="report-chapter">Tutorial: a 30-second video in seven steps</h2>
<div class="news-timeline">
<div class="timeline-item"><span class="timeline-time">Step 1</span><p class="timeline-text"><strong>Script and shot list.</strong> Six five-second shots with one clear action each. Write what enters and leaves the frame.</p></div>
<div class="timeline-item"><span class="timeline-time">Step 2</span><p class="timeline-text"><strong>Keyframes.</strong> Generate each shot with Soul Cinema, Nano Banana or the image model that responds best. Reuse the same character and palette.</p></div>
<div class="timeline-item"><span class="timeline-time">Step 3</span><p class="timeline-text"><strong>Cheap test.</strong> Animate each keyframe at 720p and 5 seconds with the chosen model. Discard shots that do not work before scaling up.</p></div>
<div class="timeline-item"><span class="timeline-time">Step 4</span><p class="timeline-text"><strong>Adjust the prompt.</strong> Subject, action, camera, light and negative. One change per iteration. Save the seed of successful runs.</p></div>
<div class="timeline-item"><span class="timeline-time">Step 5</span><p class="timeline-text"><strong>Generate at 1080p.</strong> Only approved shots. If the model offers native audio, review it before accepting the shot.</p></div>
<div class="timeline-item"><span class="timeline-time">Step 6</span><p class="timeline-text"><strong>Audio and voice.</strong> Use native audio, Lipsync Studio or Audio (text to speech, voice change, translation into 18 languages). Match levels.</p></div>
<div class="timeline-item"><span class="timeline-time">Step 7</span><p class="timeline-text"><strong>Edit and export.</strong> Assemble in FilmCraft, normalise to −14 LUFS for web and export a master. Check it in an external player.</p></div>
</div>
<h2 class="report-chapter">Credit budget</h2>
<p>With the 49-dollar Plus plan you get 1,000 credits. A 10-second Seedance 2.5 clip at 1080p with audio costs around 160 credits; a 10-second 720p Cinema Studio shot about 70; 30 seconds at 1080p can reach 480. The difference between testing low and testing high is the difference between finishing the project and running out of credits halfway.</p>
<p>Rule of thumb: reserve 60% of the budget for tests and 40% for final versions. If a shot does not work after three attempts, change the model or the keyframe; insisting with the same prompt rarely fixes the problem.</p>
${quote(
  'Many weak outputs trace back to a decision made before hitting generate: a vague prompt, a blurry source image, the wrong model for the job, or generating at full resolution before confirming the prompt works.',
  'HF',
  'Higgsfield',
  'Beginner guide, 2026'
)}
<h2 class="report-chapter">Prompt checklist</h2>
<ul>
<li><strong>Subject:</strong> who or what, with age, wardrobe and expression if they matter.</li>
<li><strong>Action:</strong> one main verb; avoid two simultaneous actions.</li>
<li><strong>Camera:</strong> movement, speed, lens and start and end framing.</li>
<li><strong>Light:</strong> direction, quality, time of day and contrast.</li>
<li><strong>Negative:</strong> what you do not want: text, watermarks, extra hands, face changes.</li>
</ul>
<h2 class="report-chapter">Mistakes that cost credits</h2>
<ul>
<li>Generating at 1080p before validating the prompt.</li>
<li>Changing three variables at once and not knowing what worked.</li>
<li>Using a blurry or poorly lit keyframe.</li>
<li>Asking for movement the model cannot resolve within the chosen duration.</li>
<li>Leaving audio until the end and having to redo dialogue shots.</li>
</ul>
${doc(
  'https://higgsfield.ai/ai/video',
  'VID',
  'Higgsfield video generator',
  'Access to Seedance, Kling, Veo, Wan, Hailuo and DoP.'
)}
${doc(
  'https://higgsfield.ai/blog/how-to-make-ai-videos-beginners-guide',
  'GUIDE',
  'How to make AI videos in 2026',
  'Step-by-step guide with a real Seedance 2.5 example and costs.'
)}
${doc(
  'https://higgsfield.ai/creator-hub/help-center/ai-models/which-ai-model-should-i-use',
  'MOD',
  'Which Higgsfield model to use',
  'Official comparison of image, video and audio families.'
)}
<p><strong>Conclusion:</strong> the best model is the one that solves your shot within your budget. Start with a short test, measure the result and scale only what works. Seedance shines in long sequences, Kling in balance and duration, Veo in realism and dialogue, Wan in transitions and Hailuo in style. Mastering that matrix is worth more than memorising versions.</p>`,
  },
];
