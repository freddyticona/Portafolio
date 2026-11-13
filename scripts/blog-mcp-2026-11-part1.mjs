/**
 * Blog editorial sobre MCP para edición de video, 10-11 de noviembre de 2026 (IDs 1430-1434).
 * Línea: producción audiovisual, IA y automatización.
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

const CAT_ES = 'Tecnología y Creación';
const CAT_EN = 'Technology & Creation';

export const blogPart1 = [
  {
    id: '1430',
    slug: 'que-es-mcp-editores-de-video-guia',
    publishedAt: '2026-11-10T06:00:00-04:00',
    date: '2026-11-10',
    titleEs: 'Qué es MCP y por qué debería importarte si editas video: la guía sin humo',
    titleEn: 'What MCP is and why it should matter if you edit video: a no-hype guide',
    excerptEs:
      'El Model Context Protocol estandariza cómo un asistente de IA se conecta a herramientas y datos. Para un editor de video eso significa poder pedir, con controles, tareas concretas: proxies, cortes, subtítulos, entregas. Explicamos qué es, qué no es y por dónde empezar.',
    excerptEn:
      'The Model Context Protocol standardizes how an AI assistant connects to tools and data. For a video editor, that means requesting concrete tasks — proxies, cuts, subtitles, deliveries — with controls. We explain what it is, what it is not and where to start.',
    readTimeEs: '9 min de lectura',
    readTimeEn: '9 min read',
    imageUrl: `${IMG}/tutoriales-ia-2026/higgsfield-seedance-kling-veo-generacion-video.jpg`,
    imageCaption: 'La automatización con IA dejó de ser solo generación de clips: ahora puede operar tu estación de trabajo. Imagen: archivo del sitio',
    categoryEs: CAT_ES,
    categoryEn: CAT_EN,
    contentEs: `<h1>Qué es MCP y por qué debería importarte si editas video: la guía sin humo</h1>
<p class="lead"><em>El Model Context Protocol (MCP) es un estándar abierto que define cómo una aplicación de IA se conecta a fuentes de datos y herramientas externas. Suena a tema de ingenieros de plataforma, pero tiene una consecuencia directa para quienes producimos audiovisual: convierte al asistente de chat en un operador de tu estación de edición, con reglas claras sobre qué puede y qué no puede hacer.</em></p>
${figure(
  `${IMG}/tutoriales-ia-2026/higgsfield-seedance-kling-veo-generacion-video.jpg`,
  'Ilustración sobre generación de video con IA',
  'La IA aplicada al video ya no es solo generar clips: también puede operar tu flujo de trabajo. Imagen: archivo del sitio'
)}
${stats([
  ['1', 'protocolo abierto, muchos proveedores'],
  ['3', 'primitivas: tools, resources y prompts'],
  ['N+M', 'integraciones en vez de N por M'],
  ['0', 'magia: sigue habiendo que revisar'],
])}
<h2 class="report-chapter">El problema que resuelve</h2>
<p>Cualquier estudio pequeño acumula automatizaciones sueltas: un script de FFmpeg para proxies, una plantilla de subtítulos, un flujo de exportación documentado en un documento de texto que nadie actualiza. Cada herramienta habla su idioma y cada integración nueva exige trabajo a medida. Si además quieres que un asistente de IA participe, tendrías que construir un conector distinto para cada combinación de asistente y herramienta: el clásico problema N por M.</p>
<p>MCP sustituye esa matriz por un estándar: las herramientas exponen un servidor MCP y las aplicaciones de IA incluyen un cliente MCP. Conectar asistentes con herramientas pasa de N por M a N más M. Para un estudio de video, la promesa práctica es escribir —o instalar— una vez la integración con FFmpeg, con tu NAS o con tu editor, y poder usarla desde distintos asistentes sin rehacerla.</p>
<h2 class="report-chapter">Cómo funciona en una frase</h2>
<p>En tu computadora vive una aplicación anfitriona (host): un asistente de escritorio, un IDE o tu propio programa. Ese host ejecuta clientes MCP, y cada cliente mantiene una sesión con un servidor MCP, un proceso especializado que expone capacidades concretas: convertir un archivo, leer los metadatos de una carpeta, aplicar una plantilla de subtítulos. El protocolo define cómo se descubren esas capacidades, cómo se llaman y cómo se comunican los resultados.</p>
<p>Los servidores pueden correr localmente como procesos (transporte stdio) o como servicios remotos accesibles por HTTP. Para edición de video, lo habitual será lo primero: el servidor vive en tu estación, con acceso a los discos donde está el metraje, y no sube nada a ninguna parte salvo que tú lo decidas.</p>
${quote(
  'MCP no convierte al asistente en un editor: convierte al asistente en un operador con permisos definidos y acciones registrables.',
  'Regla de adopción'
)}
<h2 class="report-chapter">Qué puede hacer en un flujo de edición</h2>
<p>Las tareas que mejor funcionan son las que ya tenías scriptificadas o te gustaría tener: generar proxies en cola, normalizar audio con parámetros fijos, leer la duración y los códecs de una carpeta de dailies, preparar estructuras de carpetas para una entrega, transcribir entrevistas y exportar SRT. En cada caso el patrón es el mismo: el asistente decide qué herramienta llamar y con qué parámetros, el servidor ejecuta la acción sobre tus archivos y devuelve un resultado verificable.</p>
<p>La diferencia con un chatbot que sugiere comandos es sustancial: aquí no copias y pegas, el asistente invoca la herramienta de verdad, con los parámetros registrados. Eso abre la puerta a flujos repetibles y audibles —en el sentido de que queda registro—, algo que a un estudio le importa más que cualquier demostración espectacular.</p>
<h2 class="report-chapter">Qué no es</h2>
<p>MCP no es un producto, no es un plugin oficial de tu editor y no es una promesa de autonomía sin consecuencias. Si un servidor expone una herramienta que borra archivos, el asistente puede borrar archivos si tú se lo permites. La seguridad del conjunto depende de diseñar servidores con permisos mínimos, arrancar con acciones de solo lectura y mantener al humano en el bucle para todo lo que escribe o elimina. En esta serie de artículos recorreremos exactamente eso: la arquitectura, FFmpeg, DaVinci Resolve, subtítulos, gestión de metraje, seguridad y la construcción de tu propio servidor.</p>
${doc(
  'https://modelcontextprotocol.io/',
  'MCP',
  'Documentación oficial del Model Context Protocol',
  'Introducción, especificación y guías para clientes y servidores.'
)}
${doc(
  'https://modelcontextprotocol.io/specification',
  'SPEC',
  'Especificación del protocolo',
  'Definición formal de host, cliente, servidor, primitivas y transportes.'
)}
${doc(
  'https://www.anthropic.com/news/model-context-protocol',
  'ANT',
  'Anuncio original de MCP',
  'Contexto del lanzamiento del protocolo como estándar abierto.'
)}
<h2 class="report-chapter">Conclusión</h2>
<p>MCP es infraestructura, y la infraestructura buena es aburrida: se nota cuando deja de hacer falta pegar comandos a mano, cuando el flujo queda registrado y cuando cambiar de asistente no obliga a rehacer las integraciones. Para un editor de video, el punto de partida recomendado es modesto: un servidor de solo lectura que liste archivos y lea metadatos. Sobre esa base se construye todo lo demás.</p>`,
    contentEn: `<h1>What MCP is and why it should matter if you edit video: a no-hype guide</h1>
<p class="lead"><em>The Model Context Protocol (MCP) is an open standard that defines how an AI application connects to external data sources and tools. It sounds like platform-engineering material, but it has a direct consequence for those of us producing video: it turns a chat assistant into an operator of your editing workstation, with clear rules about what it can and cannot do.</em></p>
${figure(
  `${IMG}/tutoriales-ia-2026/higgsfield-seedance-kling-veo-generacion-video.jpg`,
  'Illustration about AI video generation',
  'AI applied to video is no longer just generating clips: it can also run your workflow. Image: site archive'
)}
${stats([
  ['1', 'open protocol, many vendors'],
  ['3', 'primitives: tools, resources and prompts'],
  ['N+M', 'integrations instead of N times M'],
  ['0', 'magic: you still have to review'],
])}
<h2 class="report-chapter">The problem it solves</h2>
<p>Any small studio accumulates loose automations: an FFmpeg script for proxies, a subtitle template, an export flow documented in a text file nobody updates. Every tool speaks its own language and every new integration requires custom work. If you also want an AI assistant to take part, you would have to build a different connector for each assistant-tool combination: the classic N-times-M problem.</p>
<p>MCP replaces that matrix with a standard: tools expose an MCP server and AI applications include an MCP client. Connecting assistants to tools goes from N times M to N plus M. For a video studio, the practical promise is to write — or install — the integration with FFmpeg, your NAS or your editor once, and use it from different assistants without rebuilding it.</p>
<h2 class="report-chapter">How it works in one sentence</h2>
<p>On your computer lives a host application: a desktop assistant, an IDE or your own program. That host runs MCP clients, and each client maintains a session with an MCP server, a specialized process that exposes concrete capabilities: converting a file, reading the metadata of a folder, applying a subtitle template. The protocol defines how those capabilities are discovered, how they are called and how results are communicated.</p>
<p>Servers can run locally as processes (stdio transport) or as remote services reachable over HTTP. For video editing, the former is the usual case: the server lives on your workstation, with access to the drives where your footage is, and uploads nothing anywhere unless you decide otherwise.</p>
${quote(
  'MCP does not turn the assistant into an editor: it turns the assistant into an operator with defined permissions and loggable actions.',
  'Adoption rule'
)}
<h2 class="report-chapter">What it can do in an editing workflow</h2>
<p>The tasks that work best are the ones you already scripted or wish you had: generating proxies in a queue, normalizing audio with fixed parameters, reading the duration and codecs of a folder of dailies, preparing folder structures for a delivery, transcribing interviews and exporting SRT. In each case the pattern is the same: the assistant decides which tool to call and with which parameters, the server executes the action on your files and returns a verifiable result.</p>
<p>The difference from a chatbot that suggests commands is substantial: you do not copy and paste — the assistant actually invokes the tool, with the parameters on record. That opens the door to repeatable, auditable workflows, which matters to a studio more than any spectacular demo.</p>
<h2 class="report-chapter">What it is not</h2>
<p>MCP is not a product, not an official plugin for your editor and not a promise of autonomy without consequences. If a server exposes a tool that deletes files, the assistant can delete files if you allow it. The security of the whole depends on designing servers with least privilege, starting with read-only actions and keeping the human in the loop for anything that writes or deletes. This article series covers exactly that: architecture, FFmpeg, DaVinci Resolve, subtitles, footage management, security and building your own server.</p>
${doc(
  'https://modelcontextprotocol.io/',
  'MCP',
  'Official Model Context Protocol documentation',
  'Introduction, specification and guides for clients and servers.'
)}
${doc(
  'https://modelcontextprotocol.io/specification',
  'SPEC',
  'Protocol specification',
  'Formal definition of host, client, server, primitives and transports.'
)}
${doc(
  'https://www.anthropic.com/news/model-context-protocol',
  'ANT',
  'The original MCP announcement',
  'Context on the launch of the protocol as an open standard.'
)}
<h2 class="report-chapter">Conclusion</h2>
<p>MCP is infrastructure, and good infrastructure is boring: you notice it when you stop pasting commands by hand, when the workflow leaves a record, and when switching assistants does not force you to rebuild integrations. For a video editor, the recommended starting point is modest: a read-only server that lists files and reads metadata. Everything else builds on that.</p>`,
  },
  {
    id: '1431',
    slug: 'arquitectura-servidor-mcp-video-host-cliente-primitivas',
    publishedAt: '2026-11-10T07:30:00-04:00',
    date: '2026-11-10',
    titleEs: 'Arquitectura MCP para video: host, clientes, servidores y las tres primitivas que debes dominar',
    titleEn: 'MCP architecture for video: host, clients, servers and the three primitives you must master',
    excerptEs:
      'Antes de instalar nada conviene entender el mapa: qué es el host, por qué existe un cliente por servidor, qué diferencia hay entre tools, resources y prompts y cuándo usar stdio o HTTP. Un recorrido por la arquitectura con ejemplos de un estudio de edición.',
    excerptEn:
      'Before installing anything it helps to understand the map: what the host is, why there is one client per server, the difference between tools, resources and prompts, and when to use stdio or HTTP. A tour of the architecture with examples from an editing studio.',
    readTimeEs: '10 min de lectura',
    readTimeEn: '10 min read',
    imageUrl: `${IMG}/2026-11/mcp-arquitectura-diagrama.jpg`,
    imageCaption: 'Mapa de una arquitectura MCP aplicada a la edición de video. Imagen: archivo del autor',
    categoryEs: CAT_ES,
    categoryEn: CAT_EN,
    contentEs: `<h1>Arquitectura MCP para video: host, clientes, servidores y las tres primitivas que debes dominar</h1>
<p class="lead"><em>Los conceptos de MCP caben en un diagrama, y entenderlos bien evita errores caros: servidores con más permisos de los necesarios, herramientas que deberían ser recursos y transporte remoto donde bastaba un proceso local. Este es el mapa completo aplicado a un estudio de edición.</em></p>
${figure(
  `${IMG}/2026-11/mcp-arquitectura-diagrama.jpg`,
  'Diagrama de arquitectura MCP con host, clientes, servidores y primitivas',
  'El host orquesta; cada servidor expone herramientas con permisos mínimos. Imagen: archivo del autor'
)}
${stats([
  ['1', 'host por estación de trabajo'],
  ['1:1', 'cada cliente MCP se conecta a un servidor'],
  ['3', 'primitivas: tools, resources, prompts'],
  ['2', 'transportes habituales: stdio y HTTP'],
])}
<h2 class="report-chapter">El host: quién manda</h2>
<p>El host es la aplicación donde vive la inteligencia: un asistente de escritorio, un entorno de desarrollo o tu propio software. Es quien decide qué servidor consultar, qué herramienta llamar y con qué argumentos, siempre dentro de los límites que tú configuras. En un estudio de video, el host es la superficie de control: si algo sale mal, la pregunta no es qué hizo la IA, sino qué permisos le diste al host.</p>
<p>El host no habla directamente con los servidores: entre medias están los clientes MCP. Cada cliente mantiene una sesión con un servidor, y esa separación 1 a 1 es la que permite combinar, por ejemplo, un servidor de FFmpeg con uno de archivos sin que se pisen.</p>
<h2 class="report-chapter">Los servidores: especialistas, no todólogos</h2>
<p>Un servidor MCP expone capacidades de un dominio acotado. Para edición de video, la división natural son tres: un servidor de archivos que lista y lee el metraje; un servidor de procesamiento que envuelve FFmpeg; y, si tu editor lo permite, un servidor que habla con su API de scripting. Mantenerlos separados tiene una razón de seguridad tanto como de orden: puedes darle al asistente acceso de lectura al catálogo sin exponer todavía la capacidad de reencodear, y puedes autorizar el reencodeo sin permitir borrar nada.</p>
<p>Los transportes habituales son dos: stdio, donde el servidor es un proceso local que se comunica por entrada y salida estándar —el caso idóneo para FFmpeg y archivos—, y HTTP, pensado para servicios remotos o compartidos entre equipos. Para un estudio pequeño, arrancar todo en stdio es más simple y mantiene los datos dentro de la máquina.</p>
<h2 class="report-chapter">Las tres primitivas</h2>
<p><strong>Tools</strong> son acciones que el modelo puede invocar y que tienen efectos: convertir, normalizar, escribir un archivo de subtítulos. Son el verbo del sistema y conviene que devuelvan resultados verificables: ruta generada, hash, duración, registro de parámetros.</p>
<p><strong>Resources</strong> son datos que el host puede leer: catálogos de clips, metadatos de archivos, informes de estado. Son el sustantivo. Muchas tareas de exploración —saber qué hay en una carpeta de dailies— deberían ser recursos de solo lectura y no herramientas con efectos.</p>
<p><strong>Prompts</strong> son plantillas de tarea que el servidor ofrece al usuario: instrucciones preparadas y parametrizables, como preparar la entrega de un capítulo o generar la lista de cortes de una entrevista. Son el modo de empaquetar el conocimiento del estudio para que se use igual todos los días.</p>
${quote(
  'Si una capacidad lee, hazla resource. Si transforma o mueve archivos, hazla tool. Si repites la instrucción cada semana, hazla prompt.',
  'Regla de diseño'
)}
<h2 class="report-chapter">Capacidades del protocolo que conviene conocer</h2>
<p>Además de las tres primitivas centrales, la especificación incluye mecanismos que en edición de video resultan útiles: el muestreo (sampling) permite a un servidor pedir al modelo una generación de texto, útil para redactar informes a partir de metadatos; las raíces (roots) delimitan el directorio de trabajo que el cliente entrega al servidor, y las notificaciones mantienen al host al tanto de cambios, como una lista de clips que se actualiza. No todas las capacidades están implementadas igual en todos los clientes, así que revisa la compatibilidad antes de depender de ellas.</p>
<h2 class="report-chapter">Un ejemplo montado con piezas reales</h2>
<p>Imagina la tarea de preparar proxies para una entrevista de dos horas. El host, apoyado en el servidor de archivos, lee el recurso que lista los dailies con sus códecs y duraciones. El usuario invoca la plantilla de prompt preparar-proxies, que trae instrucciones fijas del estudio: formato intermedio, tasa objetivo, nomenclatura. El asistente llama a la tool de FFmpeg por cada clip, el servidor ejecuta y devuelve rutas y hashes, y el informe queda registrado. En ese flujo cada pieza cumple su rol: resource para leer, prompt para estandarizar, tool para transformar.</p>
${doc(
  'https://modelcontextprotocol.io/docs/concepts/architecture',
  'ARC',
  'Arquitectura en la documentación de MCP',
  'Descripción formal de host, clientes, servidores y sesiones.'
)}
${doc(
  'https://modelcontextprotocol.io/docs/concepts/tools',
  'TLS',
  'Conceptos: tools, resources y prompts',
  'Cómo se definen y descubren las capacidades de un servidor.'
)}
<h2 class="report-chapter">Conclusión</h2>
<p>La arquitectura de MCP es simple a propósito: un host que decide, servidores especializados que ejecutan y tres primitivas para organizar capacidades. Diseñar con ese mapa en la cabeza —permisos por servidor, lectura y escritura separadas, plantillas para lo repetible— es lo que separa una integración profesional de una demo frágil.</p>`,
    contentEn: `<h1>MCP architecture for video: host, clients, servers and the three primitives you must master</h1>
<p class="lead"><em>MCP concepts fit in one diagram, and understanding them well avoids costly mistakes: servers with more permissions than needed, tools that should be resources, and remote transport where a local process was enough. Here is the full map applied to an editing studio.</em></p>
${figure(
  `${IMG}/2026-11/mcp-arquitectura-diagrama.jpg`,
  'MCP architecture diagram with host, clients, servers and primitives',
  'The host orchestrates; every server exposes tools with least privilege. Image: author’s archive'
)}
${stats([
  ['1', 'host per workstation'],
  ['1:1', 'each MCP client connects to one server'],
  ['3', 'primitives: tools, resources, prompts'],
  ['2', 'common transports: stdio and HTTP'],
])}
<h2 class="report-chapter">The host: who is in charge</h2>
<p>The host is the application where the intelligence lives: a desktop assistant, a development environment or your own software. It decides which server to consult, which tool to call and with which arguments, always within the limits you configure. In a video studio, the host is the control surface: if something goes wrong, the question is not what the AI did, but what permissions you gave the host.</p>
<p>The host does not talk to servers directly: MCP clients sit in between. Each client holds a session with one server, and that one-to-one separation is what lets you combine, say, an FFmpeg server with a files server without them stepping on each other.</p>
<h2 class="report-chapter">Servers: specialists, not generalists</h2>
<p>An MCP server exposes capabilities from a bounded domain. For video editing, the natural split is three: a files server that lists and reads footage; a processing server that wraps FFmpeg; and, if your editor allows it, a server that speaks to its scripting API. Keeping them apart is a matter of security as much as order: you can give the assistant read access to the catalog without exposing re-encoding yet, and authorize re-encoding without allowing any deletions.</p>
<p>The common transports are two: stdio, where the server is a local process communicating over standard input and output — the ideal case for FFmpeg and files — and HTTP, meant for remote services or setups shared across machines. For a small studio, starting everything on stdio is simpler and keeps data inside the machine.</p>
<h2 class="report-chapter">The three primitives</h2>
<p><strong>Tools</strong> are actions the model can invoke that have effects: convert, normalize, write a subtitle file. They are the verbs of the system and should return verifiable results: generated path, hash, duration, logged parameters.</p>
<p><strong>Resources</strong> are data the host can read: clip catalogs, file metadata, status reports. They are the nouns. Many exploration tasks — knowing what is in a dailies folder — should be read-only resources rather than tools with effects.</p>
<p><strong>Prompts</strong> are task templates the server offers to the user: prepared, parameterizable instructions, such as preparing a chapter delivery or generating the cut list for an interview. They are how a studio packages its knowledge so it gets used the same way every day.</p>
${quote(
  'If a capability reads, make it a resource. If it transforms or moves files, make it a tool. If you repeat the instruction weekly, make it a prompt.',
  'Design rule'
)}
<h2 class="report-chapter">Protocol capabilities worth knowing</h2>
<p>Beyond the three central primitives, the specification includes mechanisms useful in video editing: sampling lets a server ask the model for a text generation, handy for writing reports from metadata; roots delimit the working directory the client hands to the server; and notifications keep the host aware of changes, such as a clip list being updated. Not every capability is implemented equally across clients, so check compatibility before depending on them.</p>
<h2 class="report-chapter">An example assembled from real parts</h2>
<p>Picture preparing proxies for a two-hour interview. The host, leaning on the files server, reads the resource that lists dailies with codecs and durations. The user invokes the prepare-proxies prompt template, which carries the studio’s fixed instructions: intermediate format, target bitrate, naming convention. The assistant calls the FFmpeg tool for each clip, the server executes and returns paths and hashes, and the report is logged. In that flow every part plays its role: resource to read, prompt to standardize, tool to transform.</p>
${doc(
  'https://modelcontextprotocol.io/docs/concepts/architecture',
  'ARC',
  'Architecture in the MCP documentation',
  'Formal description of host, clients, servers and sessions.'
)}
${doc(
  'https://modelcontextprotocol.io/docs/concepts/tools',
  'TLS',
  'Concepts: tools, resources and prompts',
  'How a server’s capabilities are defined and discovered.'
)}
<h2 class="report-chapter">Conclusion</h2>
<p>MCP’s architecture is simple on purpose: a host that decides, specialized servers that execute, and three primitives to organize capabilities. Designing with that map in mind — permissions per server, reading and writing separated, templates for the repeatable — is what separates a professional integration from a fragile demo.</p>`,
  },
  {
    id: '1432',
    slug: 'mcp-ffmpeg-proxies-normalizacion-entregas-automaticas',
    publishedAt: '2026-11-10T09:00:00-04:00',
    date: '2026-11-10',
    titleEs: 'MCP y FFmpeg: proxies, normalización de audio y entregas sin vivir en la terminal',
    titleEn: 'MCP and FFmpeg: proxies, audio normalization and deliveries without living in the terminal',
    excerptEs:
      'FFmpeg es la navaja suiza del audiovisual y el candidato perfecto para un primer servidor MCP. Cómo envolverlo en herramientas seguras: generación de proxies, normalización con parámetros fijos, lectura de metadatos y modos de prueba que evitan desastres.',
    excerptEn:
      'FFmpeg is the Swiss Army knife of audiovisual work and the perfect candidate for a first MCP server. How to wrap it in safe tools: proxy generation, normalization with fixed parameters, metadata reading and dry-run modes that prevent disasters.',
    readTimeEs: '11 min de lectura',
    readTimeEn: '11 min read',
    imageUrl: `${IMG}/2026-11/mcp-video-edicion-timeline.jpg`,
    imageCaption: 'Las tareas repetibles de la edición son el terreno ideal para automatizar con FFmpeg. Foto: Kinanthi Nugroho / Wikimedia Commons (CC BY-SA 3.0)',
    categoryEs: CAT_ES,
    categoryEn: CAT_EN,
    contentEs: `<h1>MCP y FFmpeg: proxies, normalización de audio y entregas sin vivir en la terminal</h1>
<p class="lead"><em>Si solo pudieras automatizar una cosa de tu flujo de edición, probablemente sería la cola de conversión: proxies para el corte, audio normalizado para la web y versiones de entrega con nombres coherentes. Un servidor MCP que envuelva FFmpeg convierte esas recetas en herramientas con nombre, parámetros controlados y resultados verificables.</em></p>
${figure(
  `${IMG}/2026-11/mcp-video-edicion-timeline.jpg`,
  'Estación de edición con línea de tiempo abierta',
  'Proxies, normalización y entregas son las tareas que más tiempo consumen y menos talento exigen. Foto: Kinanthi Nugroho / Wikimedia Commons (CC BY-SA 3.0)'
)}
${stats([
  ['1', 'servidor MCP basta para empezar'],
  ['3', 'tools recomendadas: leer, convertir, normalizar'],
  ['2', 'frascos de paciencia ahorrados por lote'],
  ['100%', 'de los originales intactos, siempre'],
])}
<h2 class="report-chapter">Por qué FFmpeg es el candidato ideal</h2>
<p>FFmpeg es un binario de línea de comandos, deterministic, documentado y disponible en todas las plataformas. Esa combinación es perfecta para MCP: un servidor que ejecuta FFmpeg no tiene que interpretar nada arriesgado, solo construir comandos con parámetros validados y devolver la salida del proceso. Además, la mayoría de los estudios ya usa FFmpeg en algún punto, de modo que el servidor viene a reemplazar una libreta de comandos, no a inventar un flujo nuevo.</p>
<p>El diseño recomendado es conservador: pocas tools, cada una con una responsabilidad clara. Leer metadatos (duración, códecs, resolución, velocidad de fotogramas) es la herramienta de solo lectura que conviene exponer primero. Generar proxies y normalizar audio son las dos de escritura razonables para empezar.</p>
<h2 class="report-chapter">Las tres tools con las que arrancar</h2>
<p><strong>Leer metadatos.</strong> Una tool que corre FFprobe sobre un archivo o una carpeta y devuelve un resumen estructurado. Es la base de todo: con ella el asistente puede razonar sobre tus dailies —códecs raros, duraciones imposibles, archivos huérfanos— sin tocar nada.</p>
<p><strong>Generar proxies.</strong> Una tool que recibe una lista de archivos y produce versiones intermedias ligeras, en una carpeta de salida fija y con nomenclatura fija. Los parámetros técnicos deben vivir dentro del servidor o en una plantilla del estudio, no ser dictados por el asistente en cada llamada: así evitas que una sesión desatinada produzca veinte códecs distintos.</p>
<p><strong>Normalizar audio.</strong> Una tool que aplica el filtro de normalización de FFmpeg con valores objetivo fijos —el mismo nivel de loudness para todo el material web— y registra los valores medidos antes y después. Es el tipo de tarea tediosa y objetiva donde la automatización brilla.</p>
${quote(
  'Los parámetros pertenecen a la casa, no al asistente: el servidor decide cómo se codifica y el asistente decide cuándo y sobre qué archivos.',
  'Principio de diseño de tools'
)}
<h2 class="report-chapter">El modo prueba que te ahorra disgustos</h2>
<p>La función más valiosa que puedes darle a un servidor de FFmpeg no convierte nada: la llama imagina y devuelve el comando que ejecutaría, sin ejecutarlo. Trabajar en dos pasos —primero el plan, después la aprobación— convierte al asistente en un asistente de verdad: propone, tú validas, el servidor ejecuta. Compleméntalo con reglas fijas: nunca escribir dentro de la carpeta de originales, nunca sobrescribir sin sufijo versionado y registrar cada comando ejecutado con su salida.</p>
<p>Ese registro es el otro superpoder del conjunto: cada conversión queda con su comando, sus parámetros y su resultado. Cuando dentro de seis meses alguien pregunte con qué ajuste se generó un proxy, la respuesta estará en el registro y no en la memoria de nadie.</p>
<h2 class="report-chapter">Del servidor a la rutina semanal</h2>
<p>Con las tres tools en pie, la práctica natural es convertir las tareas periódicas en plantillas de prompt del servidor: preparar los proxies del rodaje del martes, normalizar el audio de la entrevista pendiente, generar la carpeta de entrega con las versiones web. El asistente deja de ser una ventana de chat y se convierte en la interfaz de tu pipeline, con la terminal trabajando por debajo y fuera de la vista.</p>
${doc(
  'https://ffmpeg.org/documentation.html',
  'FFM',
  'Documentación oficial de FFmpeg',
  'Filtros, códecs y la referencia de FFprobe para metadatos.'
)}
${doc(
  'https://modelcontextprotocol.io/docs/tools-inspector',
  'INSP',
  'MCP Inspector',
  'Herramienta oficial para probar un servidor antes de conectarlo a un asistente.'
)}
<h2 class="report-chapter">Conclusión</h2>
<p>Un servidor MCP de FFmpeg es el primer escalón perfecto: tareas conocidas, resultados medibles y riesgo controlable. Empieza por leer metadatos, agrega conversión con parámetros de la casa, mantén el modo prueba como puerta obligatoria y deja que el registro haga el trabajo de memoria del estudio.</p>`,
    contentEn: `<h1>MCP and FFmpeg: proxies, audio normalization and deliveries without living in the terminal</h1>
<p class="lead"><em>If you could automate just one thing in your editing workflow, it would probably be the conversion queue: proxies for the cut, normalized audio for the web and delivery versions with consistent names. An MCP server wrapping FFmpeg turns those recipes into named tools, controlled parameters and verifiable results.</em></p>
${figure(
  `${IMG}/2026-11/mcp-video-edicion-timeline.jpg`,
  'Editing station with an open timeline',
  'Proxies, normalization and deliveries are the tasks that eat the most time and require the least talent. Photo: Kinanthi Nugroho / Wikimedia Commons (CC BY-SA 3.0)'
)}
${stats([
  ['1', 'MCP server is enough to start'],
  ['3', 'recommended tools: read, convert, normalize'],
  ['2', 'coffee mugs saved per batch'],
  ['100%', 'of originals untouched, always'],
])}
<h2 class="report-chapter">Why FFmpeg is the ideal candidate</h2>
<p>FFmpeg is a command-line binary, deterministic, documented and available on every platform. That combination is perfect for MCP: a server running FFmpeg does not have to interpret anything risky, only build commands with validated parameters and return the process output. On top of that, most studios already use FFmpeg somewhere, so the server replaces a command notebook rather than inventing a new workflow.</p>
<p>The recommended design is conservative: few tools, each with a clear responsibility. Reading metadata (duration, codecs, resolution, frame rate) is the read-only tool to expose first. Generating proxies and normalizing audio are the two reasonable write tools to start with.</p>
<h2 class="report-chapter">The three tools to start with</h2>
<p><strong>Read metadata.</strong> A tool that runs FFprobe on a file or folder and returns a structured summary. It is the foundation of everything: with it, the assistant can reason about your dailies — odd codecs, impossible durations, orphan files — without touching anything.</p>
<p><strong>Generate proxies.</strong> A tool that receives a list of files and produces lightweight intermediate versions, into a fixed output folder with a fixed naming scheme. Technical parameters must live inside the server or in a studio template, not be dictated by the assistant on every call: that keeps a wild session from producing twenty different codecs.</p>
<p><strong>Normalize audio.</strong> A tool that applies FFmpeg’s normalization filter with fixed target values — the same loudness level for all web material — and logs the measured values before and after. It is the kind of tedious, objective task where automation shines.</p>
${quote(
  'Parameters belong to the house, not the assistant: the server decides how things are encoded, the assistant decides when and on which files.',
  'Tool design principle'
)}
<h2 class="report-chapter">The dry-run mode that saves you headaches</h2>
<p>The most valuable feature you can give an FFmpeg server converts nothing: call it imagine, and it returns the command it would run without running it. Working in two steps — plan first, approval second — turns the assistant into an actual assistant: it proposes, you validate, the server executes. Complement it with fixed rules: never write inside the originals folder, never overwrite without a versioned suffix, and log every executed command with its output.</p>
<p>That log is the pairing’s other superpower: every conversion is stored with its command, parameters and result. When someone asks six months from now which settings generated a proxy, the answer is in the log, not in anyone’s memory.</p>
<h2 class="report-chapter">From server to weekly routine</h2>
<p>With the three tools in place, the natural next step is turning recurring tasks into the server’s prompt templates: prepare proxies for Tuesday’s shoot, normalize the pending interview’s audio, generate the delivery folder with web versions. The assistant stops being a chat window and becomes the interface to your pipeline, with the terminal working underneath, out of sight.</p>
${doc(
  'https://ffmpeg.org/documentation.html',
  'FFM',
  'Official FFmpeg documentation',
  'Filters, codecs and the FFprobe reference for metadata.'
)}
${doc(
  'https://modelcontextprotocol.io/docs/tools-inspector',
  'INSP',
  'MCP Inspector',
  'Official tool for testing a server before connecting it to an assistant.'
)}
<h2 class="report-chapter">Conclusion</h2>
<p>An MCP server for FFmpeg is the perfect first rung: known tasks, measurable results and controllable risk. Start by reading metadata, add conversion with house parameters, keep the dry-run mode as a mandatory gate and let the log do the studio’s memory work.</p>`,
  },
  {
    id: '1433',
    slug: 'davinci-resolve-mcp-api-scripting-timeline',
    publishedAt: '2026-11-10T11:00:00-04:00',
    date: '2026-11-10',
    titleEs: 'DaVinci Resolve y MCP: controlar proyectos y líneas de tiempo con la API de scripting',
    titleEn: 'DaVinci Resolve and MCP: controlling projects and timelines with the scripting API',
    excerptEs:
      'DaVinci Resolve incluye una API de scripting en Python y Lua que permite abrir proyectos, importar medios, crear líneas de tiempo y lanzar renders. Envuelta en un servidor MCP, se convierte en la puerta para que un asistente prepare material con supervisión humana.',
    excerptEn:
      'DaVinci Resolve ships with a Python and Lua scripting API that can open projects, import media, create timelines and launch renders. Wrapped in an MCP server, it becomes the gateway for an assistant to prep material under human supervision.',
    readTimeEs: '11 min de lectura',
    readTimeEn: '11 min read',
    imageUrl: `${IMG}/tutoriales-ia-2026/filmcraft-editor-video-clon-premiere-gratis.jpg`,
    imageCaption: 'La línea de tiempo es el territorio más delicado: automatizar la preparación, no el criterio. Imagen: archivo del sitio',
    categoryEs: CAT_ES,
    categoryEn: CAT_EN,
    contentEs: `<h1>DaVinci Resolve y MCP: controlar proyectos y líneas de tiempo con la API de scripting</h1>
<p class="lead"><em>Del lado de FFmpeg hay conversión; del lado de la edición con criterio, el terreno es más delicado. DaVinci Resolve ofrece una vía intermedia: su API de scripting expone operaciones de proyecto —abrir, importar, armar, renderizar— que un servidor MCP puede poner a disposición de un asistente. La regla de oro: automatizar la preparación, no el criterio.</em></p>
${figure(
  `${IMG}/tutoriales-ia-2026/filmcraft-editor-video-clon-premiere-gratis.jpg`,
  'Interfaz de edición de video',
  'La API de scripting de Resolve existe desde hace años; MCP le agrega una capa de orquestación. Imagen: archivo del sitio'
)}
${stats([
  ['2', 'lenguajes de scripting: Python y Lua'],
  ['0', 'plugins oficiales MCP: aquí se construye el puente'],
  ['1', 'regla: versionar el proyecto antes de cada lote'],
  ['∞', 'paciencia que ahorra el render en cola'],
])}
<h2 class="report-chapter">Qué expone la API de scripting</h2>
<p>Resolve incluye, junto a su instalación, una API de scripting accesible desde Python y Lua. A través de ella un script puede obtener el administrador de proyectos, abrir un proyecto por nombre, recorrer los contenedores (bins), importar medios, crear líneas de tiempo y secuencias, consultar y añadir marcadores, y configurar y enviar trabajos a la cola de render. Es la misma superficie que usan los estudios para automatizaciones internas, y no depende de trucos de interfaz ni de simulación de teclas.</p>
<p>Para nuestro propósito, la pieza clave es que las operaciones son invocables desde un proceso externo: exactamente lo que un servidor MCP necesita. El servidor carga la librería de scripting, mantiene la referencia al proyecto abierto y expone un puñado de tools acotadas.</p>
<h2 class="report-chapter">Las tools que valen la pena</h2>
<p><strong>Leer el estado del proyecto.</strong> Una tool de solo lectura que devuelve la estructura: nombre del proyecto, contenedores, número de líneas de tiempo, medios importados con sus duraciones. Es la herramienta con mayor retorno y cero riesgo: con ella el asistente puede responder preguntas del tipo qué falta por importar sin abrir la interfaz.</p>
<p><strong>Importar y organizar medios.</strong> Una tool que recibe rutas y crea los contenedores necesarios siguiendo la convención del estudio. La organización previa al corte es tediosa, objetiva y perfectamente automatizable, con revisión posterior.</p>
<p><strong>Armar una línea de tiempo preliminar.</strong> Aquí conviene ir con cuidado: una tool que recibe una lista ordenada de clips —por ejemplo, las tomas seleccionadas de una transcripción— y construye una secuencia nueva en un contenedor separado. Nunca sobre la línea de tiempo del editor: siempre en una copia con nombre.</p>
<p><strong>Encolar renders.</strong> Una tool que configura un preset de entrega existente y agrega el trabajo a la cola, sin iniciarlo. Que el asistente prepare el render y un humano pulse el botón final es una frontera saludable.</p>
${quote(
  'Que el asistente construya la secuencia de trabajo y el editor decida el corte: la automatización prepara la mesa, no cocina el plato.',
  'Frontera de automatización'
)}
<h2 class="report-chapter">Versionado y archivo de las decisiones</h2>
<p>Trabajar con un asistente sobre tu proyecto de edición exige disciplina de versionado: guardar el proyecto antes de cada lote de operaciones, trabajar con líneas de tiempo duplicadas y registrar qué tools se ejecutaron y con qué argumentos. El registro del servidor MCP es una parte; el hábito de duplicar antes de automatizar es la otra. Ningún flujo inteligente reemplaza la clásica copia de seguridad del proyecto con fecha.</p>
<h2 class="report-chapter">Por dónde empezar esta semana</h2>
<p>El camino sugerido: instala y prueba la API de scripting por fuera de MCP —la documentación llega con la instalación de Resolve—, escribe un script que abra tu proyecto de pruebas y liste contenedores; después envuélvelo en un servidor MCP con esa única tool de lectura; conéctalo al asistente y deja que responda preguntas sobre el estado del proyecto durante unos días. Solo cuando esa lectura confiable sea rutina, agrega la tool de importación y, más adelante, la de secuencias preliminares. La pendiente de adopción es la misma que con FFmpeg, con margenes de error más caros.</p>
${doc(
  'https://www.blackmagicdesign.com/products/davinciresolve',
  'BMD',
  'DaVinci Resolve — Blackmagic Design',
  'Página oficial del producto; la guía de scripting se incluye con la instalación.'
)}
${doc(
  'https://modelcontextprotocol.io/docs/tutorials/building-a-simple-server',
  'MCP',
  'Tutorial: construir un servidor MCP sencillo',
  'Estructura básica para envolver una API como la de Resolve en un servidor.'
)}
<h2 class="report-chapter">Conclusión</h2>
<p>La combinación de Resolve y MCP no reemplaza el oficio: lo acelera donde el oficio no está. Leer el estado del proyecto, organizar medios y preparar colas de render son tareas perfectas para un asistente supervisado; el corte, la musicalización y el ritmo siguen siendo tuyos.</p>`,
    contentEn: `<h1>DaVinci Resolve and MCP: controlling projects and timelines with the scripting API</h1>
<p class="lead"><em>On the FFmpeg side there is conversion; on the editorial-judgment side, the ground is trickier. DaVinci Resolve offers a middle path: its scripting API exposes project operations — open, import, assemble, render — that an MCP server can make available to an assistant. The golden rule: automate preparation, not judgment.</em></p>
${figure(
  `${IMG}/tutoriales-ia-2026/filmcraft-editor-video-clon-premiere-gratis.jpg`,
  'Video editing interface',
  'Resolve’s scripting API has been around for years; MCP adds an orchestration layer. Image: site archive'
)}
${stats([
  ['2', 'scripting languages: Python and Lua'],
  ['0', 'official MCP plugins: the bridge is built here'],
  ['1', 'rule: version the project before every batch'],
  ['∞', 'patience saved by queued renders'],
])}
<h2 class="report-chapter">What the scripting API exposes</h2>
<p>Resolve ships, alongside its installation, with a scripting API reachable from Python and Lua. Through it, a script can get the project manager, open a project by name, walk the bins, import media, create timelines and sequences, read and add markers, and configure and submit render jobs to the queue. It is the same surface studios use for internal automation, and it does not rely on UI tricks or key emulation.</p>
<p>For our purposes, the key part is that operations are invocable from an external process: exactly what an MCP server needs. The server loads the scripting library, keeps the reference to the open project and exposes a handful of bounded tools.</p>
<h2 class="report-chapter">The tools that are worth it</h2>
<p><strong>Read project state.</strong> A read-only tool returning the structure: project name, bins, number of timelines, imported media with durations. It has the highest return and zero risk: with it, the assistant can answer questions like what is left to import without opening the UI.</p>
<p><strong>Import and organize media.</strong> A tool that receives paths and creates the bins the studio’s convention requires. Pre-cut organization is tedious, objective and perfectly automatable, with later review.</p>
<p><strong>Assemble a preliminary timeline.</strong> Proceed carefully here: a tool that receives an ordered list of clips — for instance, the selected takes from a transcript — and builds a new sequence in a separate bin. Never on the editor’s timeline: always in a named copy.</p>
<p><strong>Queue renders.</strong> A tool that configures an existing delivery preset and adds the job to the queue, without starting it. Let the assistant prep the render and a human press the final button: that is a healthy boundary.</p>
${quote(
  'Let the assistant build the working sequence and the editor decide the cut: automation sets the table, it does not cook the dish.',
  'Automation boundary'
)}
<h2 class="report-chapter">Versioning and recording decisions</h2>
<p>Working with an assistant inside your editing project demands versioning discipline: save the project before every batch of operations, work on duplicated timelines, and log which tools ran with which arguments. The MCP server’s log is one half; the habit of duplicating before automating is the other. No smart flow replaces the classic dated backup of the project file.</p>
<h2 class="report-chapter">Where to start this week</h2>
<p>The suggested path: install and try the scripting API outside MCP — the documentation comes with the Resolve installation — write a script that opens your test project and lists bins; then wrap it in an MCP server with that single read tool; connect it to the assistant and let it answer questions about project state for a few days. Only once that reliable read is routine, add the import tool and, later, the preliminary-sequence tool. The adoption slope is the same as with FFmpeg, with more expensive mistakes.</p>
${doc(
  'https://www.blackmagicdesign.com/products/davinciresolve',
  'BMD',
  'DaVinci Resolve — Blackmagic Design',
  'Official product page; the scripting guide is included with the installation.'
)}
${doc(
  'https://modelcontextprotocol.io/docs/tutorials/building-a-simple-server',
  'MCP',
  'Tutorial: building a simple MCP server',
  'Basic structure for wrapping an API like Resolve’s in a server.'
)}
<h2 class="report-chapter">Conclusion</h2>
<p>The Resolve-MCP pairing does not replace the craft: it accelerates it where the craft is not. Reading project state, organizing media and prepping render queues are perfect supervised-assistant tasks; the cut, the music and the rhythm remain yours.</p>`,
  },
  {
    id: '1434',
    slug: 'subtitulos-automatizados-mcp-whisper-srt-revision',
    publishedAt: '2026-11-10T14:00:00-04:00',
    date: '2026-11-10',
    titleEs: 'Subtítulos automatizados con MCP: del reconocimiento de voz al SRT revisado en tres pasos',
    titleEn: 'Automated subtitles with MCP: from speech recognition to a reviewed SRT in three steps',
    excerptEs:
      'Los subtítulos son el caso de uso más maduro de la IA en postproducción: transcripción automática, corrección asistida y exportación a SRT. Cómo montarlo con MCP manteniendo la revisión humana como etapa obligatoria y no como formalidad.',
    excerptEn:
      'Subtitles are AI’s most mature use case in post-production: automatic transcription, assisted correction and SRT export. How to build it with MCP while keeping human review a mandatory stage, not a formality.',
    readTimeEs: '10 min de lectura',
    readTimeEn: '10 min read',
    imageUrl: `${IMG}/2026-11/mcp-subtitulos-srt.jpg`,
    imageCaption: 'Los subtítulos requieren una revisión seria: la transcripción automática es el borrador, no la entrega. Foto: State of Rhode Island / Wikimedia Commons (public domain)',
    categoryEs: CAT_ES,
    categoryEn: CAT_EN,
    contentEs: `<h1>Subtítulos automatizados con MCP: del reconocimiento de voz al SRT revisado en tres pasos</h1>
<p class="lead"><em>Si hay una tarea de postproducción donde la IA ya cumple, es en la primera pasada de subtítulos. El modelo de reconocimiento de voz produce un borrador en minutos; la calidad profesional vive en la corrección. Un flujo con MCP organiza ambas cosas: la máquina transcribe y formatea, el humano corrige criterio y nombres, y el servidor registra cada versión.</em></p>
${figure(
  `${IMG}/2026-11/mcp-subtitulos-srt.jpg`,
  'Pantalla de subtítulos en un monitor',
  'Transcribir es lo fácil; subtitular bien exige criterio editorial. Foto: State of Rhode Island / Wikimedia Commons (public domain)'
)}
${stats([
  ['3', 'etapas: transcribir, corregir, exportar'],
  ['2', 'idiomas mínimos para una entrega regional'],
  ['1', 'regla: nadie publica un SRT sin leerlo'],
  ['0', 'costo por minuto del borrador automático'],
])}
<h2 class="report-chapter">Paso uno: transcribir con una tool del servidor</h2>
<p>El corazón del flujo es una tool de transcripción dentro de un servidor MCP: recibe la ruta del audio o del video y devuelve un archivo de subtítulos con marcas de tiempo. Existen modelos de reconocimiento de voz abiertos que corren en una estación de trabajo y se integran bien: Whisper es el más citado, con modelos de distintos tamaños y soporte para varios idiomas. El servidor se encarga de la ejecución, de elegir el modelo según el idioma y de devolver la ruta del SRT generado.</p>
<p>El detalle que separa un borrador útil de uno inútil está en los parámetros de la casa: longitud máxima de línea, ritmo de lectura, puntuación preferida y tratamiento de los títulos y nombres propios. Como con FFmpeg, esos parámetros pertenecen a la plantilla del estudio, no a la improvisación de cada sesión.</p>
<h2 class="report-chapter">Paso dos: la corrección asistida, sin delegarla entera</h2>
<p>Aquí MCP aporta su segunda primitiva útil: una plantilla de prompt de corrección que recibe el SRT y las reglas del estudio y propone una pasada de ajustes —puntuación, mayúsculas, términos repetidos— dejando las decisiones dudosas marcadas para el humano. El asistente puede además contrastar el texto con materiales de contexto que el servidor expone como recursos: la lista de nombres del proyecto, el glosario de la serie, los guiones de referencia.</p>
<p>La revisión humana no es negociable por una razón técnica, no solo de principios: los errores de un modelo de transcripción son plausibles. Confunde un nombre por otro, inventa una palabra que encaja fonéticamente y el resultado se lee perfectamente —y está mal. Un corrector que no conoce el contexto de la entrevista no puede detectarlo; quien grabó, sí.</p>
${quote(
  'El SRT automático es un borrador con marcas de tiempo: publicarlo sin leerlo es como publicar el primer corte de una entrevista.',
  'Regla de control de calidad'
)}
<h2 class="report-chapter">Paso tres: exportar, doblar idiomas y registrar</h2>
<p>La exportación final pasa por una tool que valida el formato —sincronía de las marcas, caracteres aceptados, longitud de líneas— y produce el archivo de entrega junto a una copia de trabajo. Para entregas bilingües, el mismo flujo se repite con la pista traducida: la traducción automática puede generar el segundo borrador, y la revisión de un hablante confirma las decisiones de sentido. El registro del servidor deja constancia de qué modelo produjo cada versión, con qué parámetros y quién la aprobó, que es exactamente la información que se echa de menos cuando un cliente pregunta por una corrección hecha hace tres meses.</p>
<h2 class="report-chapter">Dónde entra MCP y dónde no hace falta</h2>
<p>Nada de esto exige MCP: un script también transcribe y exporta. Lo que aporta el protocolo es el orden y la integración: el asistente coordina las tres etapas en una conversación con contexto —qué entrevista, qué glosario, qué formato de entrega—, las plantillas estandarizan la calidad y las tools ejecutan con parámetros registrados. Para un estudio con volumen constante de entrevistas, esa diferencia entre colección de scripts y flujo orquestado es la que decide si los subtítulos se hacen o se postergan.</p>
${doc(
  'https://github.com/openai/whisper',
  'WHP',
  'Whisper',
  'Modelo de reconocimiento de voz abierto, con soporte multilingüe.'
)}
${doc(
  'https://ffmpeg.org/ffmpeg-filters.html#subtitles-1',
  'FFM',
  'Filtro de subtítulos de FFmpeg',
  'Para grabar los subtítulos sobre el video o verificar el formato.'
)}
${doc(
  'https://modelcontextprotocol.io/docs/concepts/prompts',
  'MCP',
  'Plantillas de prompts en MCP',
  'Cómo empaquetar las reglas de estilo del estudio como plantillas.'
)}
<h2 class="report-chapter">Conclusión</h2>
<p>Subtítulos con MCP es el proyecto piloto recomendable para cualquier estudio: tarea repetible, resultado medible y riesgo bajo cuando la revisión humana está en el centro. La máquina acelera el borrador; la reputación del estudio sigue dependiendo de quién lee el texto antes de publicarlo.</p>`,
    contentEn: `<h1>Automated subtitles with MCP: from speech recognition to a reviewed SRT in three steps</h1>
<p class="lead"><em>If there is one post-production task where AI already delivers, it is the first pass of subtitles. A speech recognition model produces a draft in minutes; professional quality lives in the correction. An MCP flow organizes both: the machine transcribes and formats, the human fixes judgment and names, and the server logs every version.</em></p>
${figure(
  `${IMG}/2026-11/mcp-subtitulos-srt.jpg`,
  'Subtitles on a monitor screen',
  'Transcribing is the easy part; subtitling well requires editorial judgment. Photo: State of Rhode Island / Wikimedia Commons (public domain)'
)}
${stats([
  ['3', 'stages: transcribe, correct, export'],
  ['2', 'minimum languages for a regional delivery'],
  ['1', 'rule: nobody ships an SRT without reading it'],
  ['0', 'cost per minute of the automatic draft'],
])}
<h2 class="report-chapter">Step one: transcribe with a server tool</h2>
<p>The heart of the flow is a transcription tool inside an MCP server: it receives the audio or video path and returns a subtitle file with timecodes. Open speech recognition models run on a workstation and integrate well: Whisper is the most cited, with models of various sizes and multilingual support. The server handles execution, picks the model per language and returns the generated SRT path.</p>
<p>The detail separating a useful draft from a useless one is in house parameters: maximum line length, reading pace, preferred punctuation, handling of titles and proper names. As with FFmpeg, those parameters belong to the studio template, not to each session’s improvisation.</p>
<h2 class="report-chapter">Step two: assisted correction, never fully delegated</h2>
<p>This is where MCP contributes its second useful primitive: a correction prompt template that receives the SRT and the studio rules and proposes a pass of adjustments — punctuation, capitalization, repeated terms — leaving doubtful decisions flagged for the human. The assistant can also cross-check the text against context materials the server exposes as resources: the project’s name list, the series glossary, reference scripts.</p>
<p>Human review is not negotiable for a technical reason, not only a principled one: speech-model errors are plausible. It swaps one name for another, invents a phonetically fitting word, and the result reads perfectly — and is wrong. A corrector without the interview’s context cannot catch it; whoever recorded it, can.</p>
${quote(
  'The automatic SRT is a draft with timecodes: publishing it unread is like publishing the first cut of an interview.',
  'Quality-control rule'
)}
<h2 class="report-chapter">Step three: export, mirror languages and log</h2>
<p>Final export goes through a tool that validates the format — marker sync, accepted characters, line lengths — and produces the delivery file alongside a working copy. For bilingual deliveries, the same flow repeats for the translated track: machine translation can produce the second draft, and a native-speaker review confirms the sense decisions. The server log records which model produced each version, with which parameters and who approved it — exactly the information missing when a client asks about a correction made three months ago.</p>
<h2 class="report-chapter">Where MCP fits and where it is not needed</h2>
<p>None of this requires MCP: a script can also transcribe and export. What the protocol adds is order and integration: the assistant coordinates the three stages in a contextual conversation — which interview, which glossary, which delivery format —, templates standardize quality, and tools execute with logged parameters. For a studio with a constant volume of interviews, the difference between a script collection and an orchestrated flow is what decides whether subtitles get done or postponed.</p>
${doc(
  'https://github.com/openai/whisper',
  'WHP',
  'Whisper',
  'Open speech recognition model with multilingual support.'
)}
${doc(
  'https://ffmpeg.org/ffmpeg-filters.html#subtitles-1',
  'FFM',
  'FFmpeg subtitles filter',
  'For burning subtitles onto video or verifying the format.'
)}
${doc(
  'https://modelcontextprotocol.io/docs/concepts/prompts',
  'MCP',
  'Prompt templates in MCP',
  'How to package studio style rules as templates.'
)}
<h2 class="report-chapter">Conclusion</h2>
<p>Subtitles with MCP is the recommended pilot project for any studio: repeatable task, measurable result and low risk when human review sits at the center. The machine speeds up the draft; the studio’s reputation still depends on who reads the text before it ships.</p>`,
  },
];
