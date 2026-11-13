/**
 * Blog editorial, 5 de noviembre de 2026 (IDs 1410-1414).
 * Línea: producción audiovisual, IA, tutoriales y tecnología.
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
    id: '1410',
    slug: 'verificar-video-ia-content-credentials-c2pa',
    publishedAt: '2026-11-05T06:00:00-04:00',
    date: '2026-11-05',
    titleEs: 'Cómo verificar un video hecho con IA antes de publicarlo: Content Credentials, C2PA y cadena de custodia',
    titleEn: 'How to verify an AI-made video before publishing it: Content Credentials, C2PA and chain of custody',
    excerptEs:
      'Las credenciales de contenido firmadas ayudan a saber quién produjo un archivo y qué ediciones recibió, pero no prueban que lo que muestra sea verdad. Esta guía explica qué aporta el estándar C2PA, dónde falla y cómo montar un protocolo de verificación en una redacción pequeña.',
    excerptEn:
      'Signed content credentials help establish who produced a file and what edits it received, but they do not prove that what it shows is true. This guide explains what the C2PA standard offers, where it fails and how to set up a verification protocol in a small newsroom.',
    readTimeEs: '9 min de lectura',
    readTimeEn: '9 min read',
    imageUrl: `${IMG}/marca-agua-claude/portada-watermark.jpg`,
    imageCaption: 'Marca de agua y credenciales de contenido son capas distintas de verificación. Imagen: archivo del autor',
    categoryEs: CAT_ES,
    categoryEn: CAT_EN,
    contentEs: `<h1>Cómo verificar un video hecho con IA antes de publicarlo: Content Credentials, C2PA y cadena de custodia</h1>
<p class="lead"><em>La pregunta ya no es si un video puede ser generado con IA, sino si podemos demonstrar de dónde salió. Las credenciales de contenido firmadas se presentan como parte de la respuesta, aunque conviene entenderlas antes de confiarles una portada. No reemplazan al periodismo: lo ordenan.</em></p>
${figure(
  `${IMG}/marca-agua-claude/portada-watermark.jpg`,
  'Ilustración sobre marcas de agua y procedencia de contenido',
  'Una marca visible y una firma criptográfica cumplen funciones distintas y se pierden de formas distintas. Imagen: archivo del autor'
)}
${stats([
  ['C2PA', 'estándar abierto de procedencia'],
  ['2', 'capas: credencial firmada y huella'],
  ['1', 'clic para inspeccionar en herramientas compatibles'],
  ['0', 'garantías absolutas'],
])}
<h2 class="report-chapter">Qué es una credencial de contenido</h2>
<p>Content Credentials es el nombre comercial de un conjunto de metadatos firmados que se adhieren a una imagen, un video o un audio. El estándar técnico detrás es C2PA, una especificación abierta impulsada por un consorcio de empresas de medios, cámaras, software y plataformas. La idea es sencilla: que el archivo lleve consigo un registro verificable de su origen y de las modificaciones que sufrió.</p>
<p>Ese registro puede incluir la cámara o la aplicación que creó el archivo, la fecha, el software de edición y una declaración de que se usó un modelo generativo. Cuando la cadena está completa, un verificador puede comprobar que la firma corresponde al contenido y que nadie alteró los metadatos sin dejar rastro.</p>
<h2 class="report-chapter">Qué prueba y qué no prueba</h2>
<p>Una credencial válida responde a la pregunta &ldquo;¿quién firmó esto y qué dice que hizo?&rdquo;. No responde a &ldquo;¿esto ocurrió realmente?&rdquo;. Un video auténtico puede estar firmado por una fuente que miente; un video falso puede llevar una credencial legítima si el estudio que lo generó la emitió declarando el uso de IA.</p>
<p>Por eso la credencial es una pieza de la cadena de custodia, no su reemplazo. Sirve para descartar manipulaciones posteriores, para rastrear el dispositivo de origen y para distinguir un archivo salido de una cámara de uno generado por un modelo. La verificación periodística sigue dependiendo de las fuentes, la geolocalización y la corroboración.</p>
${quote(
  'La credencial prueba quién firmó y qué declaró. La verdad del contenido sigue siendo una pregunta aparte.',
  'Regla de verificación'
)}
<h2 class="report-chapter">Cómo comprobarlo en la práctica</h2>
<ol>
<li><strong>Conserva el archivo original.</strong> No trabajes sobre capturas de pantalla ni sobre versiones reenviadas por mensajería: la re-codificación suele eliminar los metadatos.</li>
<li><strong>Inspecciona la credencial.</strong> Herramientas compatibles muestran un panel con el emisor, la fecha de firma y el historial de ediciones. Si no hay credencial, no significa que el archivo sea falso: significa que no hay evidencia incrustada.</li>
<li><strong>Verifica la firma, no solo el logo.</strong> Un icono de &ldquo;contenido verificado&rdquo; puede dibujarse en cualquier parte. La comprobación criptográfica se hace con la herramienta oficial o con el visor del navegador.</li>
<li><strong>Contrasta con la fuente.</strong> Llama a quien dice haber grabado, pide el material original, revisa los metadatos EXIF y busca otras tomas del mismo evento.</li>
<li><strong>Geolocaliza y sincroniza.</strong> Cruza puntos de referencia, sombras, carteles y audio con imágenes satelitales o con otras grabaciones del mismo lugar.</li>
</ol>
<h2 class="report-chapter">El punto débil: la cadena se corta fácil</h2>
<p>Las credenciales viven dentro del archivo. Si el video pasa por una captura de pantalla, una compresión agresiva, un cambio de contenedor o una plataforma que reescribe los metadatos, la firma puede desaparecer. También puede ocurrir lo contrario: una plataforma puede añadir su propia credencial al recomprimir, y entonces conviene distinguir la firma original de la del intermediario.</p>
<p>Hay una segunda fragilidad, menos técnica: la credencial solo es tan confiable como el emisor. Si un estudio firma un video generado y declara que es ficción, la credencial funciona; si una cuenta se hace pasar por un medio y firma con una identidad falsa, la criptografía no lo impide. La verificación del emisor sigue siendo trabajo humano.</p>
<h2 class="report-chapter">Protocolo para una redacción pequeña</h2>
<p>No hace falta un equipo de forense digital para ordenar el flujo. Con cinco reglas se cubre la mayoría de los casos: guardar el original en un repositorio con fecha y hash; registrar quién lo envió y por qué canal; inspeccionar credenciales antes de editar; anotar qué se recortó o reencodificó; y dejar por escrito qué parte de la historia está confirmada y cuál no.</p>
<p>Ese último punto es el más importante. La transparencia editorial no consiste en afirmar que un video es verdadero, sino en explicar qué sabemos, qué no y cómo lo comprobamos. La credencial ayuda a redactar esa frase con precisión.</p>
${doc(
  'https://c2pa.org/',
  'C2PA',
  'Coalition for Content Provenance and Authenticity',
  'Especificación técnica, implementaciones y documentación del estándar.'
)}
${doc(
  'https://contentcredentials.org/verify',
  'VER',
  'Verificador de Content Credentials',
  'Herramienta para inspeccionar la firma y el historial de un archivo compatible.'
)}
${doc(
  'https://contentauthenticity.org/',
  'CAI',
  'Content Authenticity Initiative',
  'Casos de uso, adopción en medios y guías de implementación.'
)}
<h2 class="report-chapter">Conclusión</h2>
<p>Content Credentials es una buena noticia para el periodismo, siempre que no se convierta en un sello decorativo. Su valor está en hacer explícita la procedencia y en dificultar la manipulación silenciosa. El resto —la pregunta por lo que realmente ocurrió— sigue necesitando teléfono, archivo y calle.</p>`,
    contentEn: `<h1>How to verify an AI-made video before publishing it: Content Credentials, C2PA and chain of custody</h1>
<p class="lead"><em>The question is no longer whether a video can be generated with AI, but whether we can demonstrate where it came from. Signed content credentials are presented as part of the answer, though it is worth understanding them before trusting them with a front page. They do not replace journalism: they organize it.</em></p>
${figure(
  `${IMG}/marca-agua-claude/portada-watermark.jpg`,
  'Illustration about watermarks and content provenance',
  'A visible watermark and a cryptographic signature serve different purposes and fail in different ways. Image: author’s archive'
)}
${stats([
  ['C2PA', 'open provenance standard'],
  ['2', 'layers: signed credential and fingerprint'],
  ['1', 'click to inspect in compatible tools'],
  ['0', 'absolute guarantees'],
])}
<h2 class="report-chapter">What a content credential is</h2>
<p>Content Credentials is the commercial name for a set of signed metadata attached to an image, video or audio file. The technical standard behind it is C2PA, an open specification driven by a consortium of media companies, camera makers, software vendors and platforms. The idea is simple: the file should carry a verifiable record of its origin and the modifications it underwent.</p>
<p>That record can include the camera or application that created the file, the date, the editing software and a declaration that a generative model was used. When the chain is complete, a verifier can confirm that the signature matches the content and that no one altered the metadata without leaving a trace.</p>
<h2 class="report-chapter">What it proves and what it does not</h2>
<p>A valid credential answers the question &ldquo;who signed this and what did they say they did?&rdquo; It does not answer &ldquo;did this really happen?&rdquo; A genuine video can be signed by a source that lies; a fake video can carry a legitimate credential if the studio that generated it issued one declaring the use of AI.</p>
<p>That is why the credential is one piece of the chain of custody, not its replacement. It helps rule out later manipulation, trace the originating device and distinguish a file from a camera from one generated by a model. Journalistic verification still depends on sources, geolocation and corroboration.</p>
${quote(
  'The credential proves who signed and what they declared. The truth of the content remains a separate question.',
  'Verification rule'
)}
<h2 class="report-chapter">How to check it in practice</h2>
<ol>
<li><strong>Keep the original file.</strong> Do not work from screenshots or versions forwarded through messaging apps: re-encoding usually removes metadata.</li>
<li><strong>Inspect the credential.</strong> Compatible tools show a panel with the issuer, signing date and edit history. If there is no credential, it does not mean the file is fake: it means there is no embedded evidence.</li>
<li><strong>Verify the signature, not just the logo.</strong> A &ldquo;verified content&rdquo; icon can be drawn anywhere. Cryptographic verification is done with the official tool or the browser viewer.</li>
<li><strong>Cross-check with the source.</strong> Call the person who claims to have recorded it, request the original material, review EXIF metadata and look for other shots of the same event.</li>
<li><strong>Geolocate and synchronize.</strong> Cross-reference landmarks, shadows, signs and audio with satellite imagery or other recordings from the same place.</li>
</ol>
<h2 class="report-chapter">The weak point: the chain breaks easily</h2>
<p>Credentials live inside the file. If a video passes through a screenshot, aggressive compression, a container change or a platform that rewrites metadata, the signature may disappear. The opposite can also happen: a platform may add its own credential when recompressing, and then it is worth distinguishing the original signature from the intermediary's.</p>
<p>There is a second, less technical fragility: a credential is only as trustworthy as the issuer. If a studio signs an AI-generated video and declares it is fiction, the credential works; if an account impersonates a news outlet and signs with a false identity, cryptography does not stop it. Verifying the issuer remains human work.</p>
<h2 class="report-chapter">A protocol for a small newsroom</h2>
<p>You do not need a digital forensics team to organize the workflow. Five rules cover most cases: store the original in a repository with date and hash; record who sent it and through which channel; inspect credentials before editing; note what was cropped or re-encoded; and write down which part of the story is confirmed and which is not.</p>
<p>That last point matters most. Editorial transparency does not consist of asserting that a video is true, but of explaining what we know, what we do not and how we checked it. The credential helps write that sentence precisely.</p>
${doc(
  'https://c2pa.org/',
  'C2PA',
  'Coalition for Content Provenance and Authenticity',
  'Technical specification, implementations and standard documentation.'
)}
${doc(
  'https://contentcredentials.org/verify',
  'VER',
  'Content Credentials Verifier',
  'Tool to inspect the signature and history of a compatible file.'
)}
${doc(
  'https://contentauthenticity.org/',
  'CAI',
  'Content Authenticity Initiative',
  'Use cases, media adoption and implementation guides.'
)}
<h2 class="report-chapter">Conclusion</h2>
<p>Content Credentials is good news for journalism, as long as it does not become a decorative seal. Its value lies in making provenance explicit and making silent manipulation harder. The rest —the question of what actually happened— still requires a phone, an archive and the street.</p>`,
  },
  {
    id: '1411',
    slug: 'iluminar-entrevista-con-una-sola-luz',
    publishedAt: '2026-11-05T07:00:00-04:00',
    date: '2026-11-05',
    titleEs: 'Iluminar una entrevista con una sola luz: posición, tamaño y fondo',
    titleEn: 'Lighting an interview with a single light: position, size and background',
    excerptEs:
      'Una fuente bien colocada puede resolver más que un kit completo mal usado. Esta guía práctica explica cómo ubicar la luz principal, qué tamaño de modificador elegir, cómo separar al sujeto del fondo y qué errores arruinan una entrevista aunque la cámara sea buena.',
    excerptEn:
      'One well-placed source can solve more than a full kit used badly. This practical guide explains how to position the key light, choose a modifier size, separate the subject from the background and which mistakes ruin an interview even with a good camera.',
    readTimeEs: '8 min de lectura',
    readTimeEn: '8 min read',
    imageUrl: `${IMG}/2026-11/iluminacion-entrevista-una-luz.jpg`,
    imageCaption: 'Retrato iluminado con una sola fuente suave. Foto: Lies Thru a Lens / Wikimedia Commons (CC BY 2.0)',
    categoryEs: 'Producción Audiovisual',
    categoryEn: 'Audiovisual Production',
    contentEs: `<h1>Iluminar una entrevista con una sola luz: posición, tamaño y fondo</h1>
<p class="lead"><em>La iluminación de entrevistas tiene mala fama por culpa de los kits enormes. En realidad, la mayor parte del resultado se decide con una sola fuente: dónde está, qué tan grande es y qué tan lejos queda del fondo. El resto es control del contraste y del color.</em></p>
${figure(
  `${IMG}/2026-11/iluminacion-entrevista-una-luz.jpg`,
  'Retrato con una sola fuente de luz suave',
  'Una fuente grande y cercana produce una transición suave entre luz y sombra. Foto: Lies Thru a Lens / Wikimedia Commons (CC BY 2.0)'
)}
${stats([
  ['45°', 'posición lateral de la luz principal'],
  ['1,5–2 m', 'distancia típica al rostro'],
  ['1:4', 'contraste de fondo recomendado'],
  ['5600 K', 'referencia de luz día'],
])}
<h2 class="report-chapter">La regla que importa: tamaño relativo</h2>
<p>La suavidad de la luz no depende del precio del modificador, sino de su tamaño respecto al sujeto. Cuanto más grande sea la fuente en relación con la cara, más suave será la transición entre luz y sombra. Un softbox de 60 cm a un metro del rostro puede ser más suave que uno de 120 cm a cuatro metros.</p>
<p>Por eso la primera decisión no es &ldquo;qué luz compro&rdquo;, sino &ldquo;dónde la pongo&rdquo;. Acercar la fuente suaviza, pero también reduce la cobertura y aumenta la caída de intensidad. Alejarla cubre más espacio, pero endurece. El equilibrio está en la distancia mínima que permita encuadrar sin que la luz entre en cuadro.</p>
<h2 class="report-chapter">Dónde colocar la luz principal</h2>
<p>La posición clásica es a unos 45 grados del eje de la cámara y ligeramente por encima de los ojos. Esa altura evita la sombra de la nariz sobre el labio y mantiene la mirada con volumen. Si el sujeto usa lentes, conviene subir un poco más la fuente y pedirle que gire levemente la cabeza para alejar el reflejo.</p>
<p>El lado hacia el que mira el entrevistado debe recibir la luz. Si mira a cámara, la fuente puede quedar a cualquiera de los dos lados; si mira a un entrevistador fuera de cuadro, la luz va del lado de ese entrevistador para que la sombra no caiga sobre la zona visible del rostro.</p>
${quote(
  'Antes de añadir una segunda luz, mueve la primera. La mayoría de los problemas de una entrevista se resuelven cambiando la distancia, no comprando equipo.',
  'Regla de set'
)}
<h2 class="report-chapter">El fondo: separar sin distraer</h2>
<p>Con una sola fuente, el fondo suele quedar más oscuro que el sujeto. Eso no es un defecto: es lo que crea profundidad. Lo importante es que la caída sea gradual y que el fondo no compita con la cara. Una pared a dos metros del sujeto recibe más luz que una a cinco; si queda demasiado brillante, acerca al entrevistado a la cámara o aleja la pared.</p>
<p>Si el fondo tiene ventanas, carteles o luces propias, conviene encuadrar de modo que esos elementos queden fuera o muy desenfocados. La profundidad de campo es una herramienta de iluminación: un fondo limpio y ligeramente fuera de foco perdona mucho.</p>
<h2 class="report-chapter">Exposición, balance y contraste</h2>
<p>Expón para la piel, no para el fondo. Con una fuente suave, el rostro debería quedar en el rango medio alto sin llegar a quemarse; las altas luces de la frente y la nariz son el primer lugar donde se pierde detalle. Si el monitor tiene herramientas de waveform o falsa cámara, úsalas para comprobar que la piel no está al límite.</p>
<p>El balance de blancos debe fijarse según la fuente. Si mezclas luz día con una lámpara cálida, el rostro quedará con dos temperaturas distintas. Corrige en el set con gelatina o en edición, pero no dejes la mezcla sin control: es uno de los errores más difíciles de disimular.</p>
<h2 class="report-chapter">Cinco errores frecuentes</h2>
<ul>
<li><strong>Luz frontal plana:</strong> elimina el volumen y aplana el rostro. Desplaza la fuente aunque sea 20 grados.</li>
<li><strong>Fuente demasiado alta:</strong> produce ojeras y sombras profundas. Baja hasta la altura de los ojos o un poco por encima.</li>
<li><strong>Fondo más iluminado que el sujeto:</strong> el ojo va al fondo. Controla la caída o apaga luces de la pared.</li>
<li><strong>Mezcla de temperaturas:</strong> ventana fría y lámpara cálida sobre la misma cara. Unifica o corrige con gelatina.</li>
<li><strong>Sin margen de exposición:</strong> piel al límite. Deja medio paso de reserva para no perder detalle.</li>
</ul>
<h2 class="report-chapter">Checklist de una sola luz</h2>
<p>Antes de grabar: fuente a 45 grados y a la altura de los ojos; distancia mínima que permita encuadrar; fondo al menos dos pasos más oscuro que el rostro; balance fijado; piel sin quemar; y una toma de referencia con el entrevistado en su posición final. Con eso, una sola luz alcanza para una entrevista que se vea profesional.</p>
${doc(
  'https://www.adobe.com/creativecloud/video/discover/three-point-lighting.html',
  'LUZ',
  'Fundamentos de iluminación de tres puntos',
  'Referencia de Adobe sobre luz principal, de relleno y de fondo.'
)}
${doc(
  'https://www.youtube.com/@vistacreate',
  'REF',
  'Referencias visuales de retrato',
  'Ejemplos de esquemas de una sola fuente para comparar posiciones.'
)}`,
    contentEn: `<h1>Lighting an interview with a single light: position, size and background</h1>
<p class="lead"><em>Interview lighting has a bad reputation because of enormous kits. In reality, most of the result is decided by one source: where it is, how large it is and how far it sits from the background. The rest is contrast and color control.</em></p>
${figure(
  `${IMG}/2026-11/iluminacion-entrevista-una-luz.jpg`,
  'Portrait lit with a single soft source',
  'A large, close source produces a soft transition between light and shadow. Photo: Lies Thru a Lens / Wikimedia Commons (CC BY 2.0)'
)}
${stats([
  ['45°', 'lateral key light position'],
  ['1.5–2 m', 'typical distance to the face'],
  ['1:4', 'recommended background contrast'],
  ['5600 K', 'daylight reference'],
])}
<h2 class="report-chapter">The rule that matters: relative size</h2>
<p>Softness does not depend on the modifier's price but on its size relative to the subject. The larger the source compared with the face, the softer the transition between light and shadow. A 60 cm softbox one meter from the face can be softer than a 120 cm one four meters away.</p>
<p>So the first decision is not &ldquo;which light do I buy?&rdquo; but &ldquo;where do I put it?&rdquo; Moving the source closer softens it but also reduces coverage and increases falloff. Moving it away covers more space but hardens it. The balance is the minimum distance that allows framing without the light entering the shot.</p>
<h2 class="report-chapter">Where to place the key light</h2>
<p>The classic position is about 45 degrees off the camera axis and slightly above eye level. That height avoids the nose shadow falling over the lip and keeps volume in the face. If the subject wears glasses, raise the source a little more and ask them to turn their head slightly to move the reflection away.</p>
<p>The side the interviewee faces should receive the light. If they look at the camera, the source can be on either side; if they look at an off-camera interviewer, the light goes on that interviewer's side so the shadow does not fall across the visible part of the face.</p>
${quote(
  'Before adding a second light, move the first one. Most interview problems are solved by changing distance, not by buying gear.',
  'Set rule'
)}
<h2 class="report-chapter">The background: separate without distracting</h2>
<p>With a single source, the background usually ends up darker than the subject. That is not a defect: it is what creates depth. What matters is that the falloff is gradual and the background does not compete with the face. A wall two meters from the subject receives more light than one five meters away; if it is too bright, move the interviewee closer to the camera or the wall farther away.</p>
<p>If the background has windows, posters or lights of its own, frame so those elements are out of shot or heavily blurred. Depth of field is a lighting tool: a clean, slightly out-of-focus background forgives a lot.</p>
<h2 class="report-chapter">Exposure, white balance and contrast</h2>
<p>Expose for the skin, not the background. With a soft source, the face should sit in the upper midrange without clipping; highlights on the forehead and nose are the first place where detail is lost. If the monitor has a waveform or false color, use it to confirm the skin is not at the limit.</p>
<p>Set white balance according to the source. If you mix daylight with a warm lamp, the face will have two different temperatures. Correct it on set with gel or in post, but do not leave the mix uncontrolled: it is one of the hardest mistakes to disguise.</p>
<h2 class="report-chapter">Five common mistakes</h2>
<ul>
<li><strong>Flat frontal light:</strong> removes volume and flattens the face. Move the source even 20 degrees.</li>
<li><strong>Source too high:</strong> creates eye bags and deep shadows. Lower it to eye level or slightly above.</li>
<li><strong>Background brighter than the subject:</strong> the eye goes to the background. Control falloff or turn off wall lights.</li>
<li><strong>Mixed temperatures:</strong> cool window and warm lamp on the same face. Unify or correct with gel.</li>
<li><strong>No exposure headroom:</strong> skin at the limit. Leave half a stop of reserve to preserve detail.</li>
</ul>
<h2 class="report-chapter">Single-light checklist</h2>
<p>Before recording: source at 45 degrees and at eye level; minimum distance that allows framing; background at least two stops darker than the face; white balance set; skin not clipping; and a reference shot with the interviewee in their final position. With that, one light is enough for an interview that looks professional.</p>
${doc(
  'https://www.adobe.com/creativecloud/video/discover/three-point-lighting.html',
  'LIGHT',
  'Three-point lighting fundamentals',
  'Adobe reference on key, fill and background light.'
)}
${doc(
  'https://www.youtube.com/@vistacreate',
  'REF',
  'Visual portrait references',
  'Examples of single-source setups to compare positions.'
)}`,
  },
  {
    id: '1412',
    slug: 'audio-profesional-con-celular-microfonos-niveles',
    publishedAt: '2026-11-05T08:00:00-04:00',
    date: '2026-11-05',
    titleEs: 'Audio profesional con el celular: micrófonos, niveles y ruido',
    titleEn: 'Professional audio with a phone: microphones, levels and noise',
    excerptEs:
      'El celular puede grabar audio de entrevista si se elige bien el micrófono y se controla la ganancia. Esta guía cubre lavalier y corbatero, distancia, ajustes de grabación, tratamiento acústico básico y sincronización con la cámara.',
    excerptEn:
      'A phone can record interview audio if the microphone is chosen well and gain is controlled. This guide covers lavalier and shotgun mics, distance, recording settings, basic acoustic treatment and syncing with the camera.',
    readTimeEs: '8 min de lectura',
    readTimeEn: '8 min read',
    imageUrl: `${IMG}/2026-11/audio-celular-microfonos.jpg`,
    imageCaption: 'Micrófono de solapa, la opción más directa para grabar voz con un celular. Foto: 多多123 / Wikimedia Commons (CC BY 4.0)',
    categoryEs: 'Tutoriales',
    categoryEn: 'Tutorials',
    contentEs: `<h1>Audio profesional con el celular: micrófonos, niveles y ruido</h1>
<p class="lead"><em>El audio es la mitad de un video y, sin embargo, suele resolverse al final. Un celular moderno puede entregar voz limpia si se elige el micrófono correcto y se evita la ganancia automática. Lo demás es distancia, sala y una toma de referencia.</em></p>
${figure(
  `${IMG}/2026-11/audio-celular-microfonos.jpg`,
  'Micrófono de solapa con clip y espuma',
  'Un lavalier con conector compatible evita depender del micrófono interno del teléfono. Foto: 多多123 / Wikimedia Commons (CC BY 4.0)'
)}
${stats([
  ['48 kHz', 'frecuencia de muestreo'],
  ['24 bits', 'profundidad recomendada'],
  ['−12 dBFS', 'pico objetivo'],
  ['1', 'toma de referencia por escena'],
])}
<h2 class="report-chapter">Qué micrófono usar</h2>
<p>Para una entrevista sentada o caminando, el lavalier es la opción más consistente: va cerca de la boca, aísla relativamente el entorno y no obliga a apuntar. Para exteriores con viento o para captar ambiente, un micrófono de cañón fuera de cuadro puede sonar más natural, pero exige un operador y un brazo.</p>
<p>Si el celular no tiene entrada de 3,5 mm, hay dos caminos: un adaptador USB-C o Lightning con conversor analógico-digital, o un micrófono inalámbrico que graba por su cuenta. Los modelos baratos suelen tener un preamplificador ruidoso; en ese caso conviene subir la señal en la fuente y no en la app.</p>
<h2 class="report-chapter">Distancia y colocación</h2>
<p>La regla es simple: cuanto más cerca, menos sala. Un lavalier a 20 centímetros de la boca suena más seco y consistente que el micrófono interno a un metro. Colócalo en el pecho, ligeramente por debajo del mentón, y asegúrate de que la ropa no roce la cápsula.</p>
<p>Evita el contacto con botones, cierres y collares. Un roce produce golpes de baja frecuencia que no se corrigieron en el set y que en edición obligan a recortar la voz. Usa cinta de papel o un clip con alivio de tensión para fijar el cable.</p>
${quote(
  'Si el audio se grabó mal, ninguna edición lo arregla. Si se grabó bien, la edición casi no se nota.',
  'Regla de sonido'
)}
<h2 class="report-chapter">Ajustes de grabación</h2>
<p>Graba en WAV o en el formato sin compresión que permita la app. Si solo hay AAC, usa la tasa más alta disponible. Fija 48 kHz y 24 bits cuando sea posible: el margen extra ayuda a recuperar picos sin ruido de cuantización.</p>
<p>Desactiva la ganancia automática y el filtro de voz de la app si comprime en exceso. Ajusta la ganancia manual para que los picos queden alrededor de −12 dBFS y las partes normales entre −18 y −24 dBFS. Ese margen protege los gritos y las risas sin acercarse al cero digital.</p>
<h2 class="report-chapter">La sala también graba</h2>
<p>El ruido no siempre viene del equipo: una habitación con paredes desnudas, ventanas y ventilador añade reflexiones y zumbidos. Busca una sala con alfombra, cortinas, libros o sofás. Apaga el aire acondicionado y el refrigerador si es posible, y elige la hora del día con menos tráfico.</p>
<p>Si no hay alternativa, acerca el micrófono y baja la ganancia. Un plano cerrado con sonido directo suena mejor que un plano amplio con reverb. Para exteriores, usa protección contra viento aunque no sople fuerte: el aire sobre la cápsula genera ruido de baja frecuencia.</p>
<h2 class="report-chapter">Sincronización y respaldo</h2>
<p>Graba siempre audio en la cámara además del celular. Ese canal de referencia permite sincronizar en edición y salva la toma si el celular falla. Antes de cada escena, haz una palmada visible y audible: es el método más rápido y no depende de software.</p>
<p>Nombra los archivos con fecha, escena y toma. Copia el material a dos destinos antes de borrar la tarjeta. El audio pesa poco y se respalda fácil; perderlo por no copiar es uno de los errores más caros del rodaje.</p>
<h2 class="report-chapter">Checklist antes de grabar</h2>
<ul>
<li>Micrófono conectado y probado con la app elegida.</li>
<li>Ganancia manual fijada; picos alrededor de −12 dBFS.</li>
<li>Modo avión activado para evitar notificaciones y radiofrecuencia.</li>
<li>Ventilador, aire y notificaciones apagados.</li>
<li>Palmada de sincronización al inicio de cada toma.</li>
<li>Copia de seguridad antes de salir del set.</li>
</ul>
${doc(
  'https://www.adobe.com/creativecloud/video/discover/audio-recording-tips.html',
  'AUD',
  'Consejos de grabación de audio',
  'Niveles, micrófonos y buenas prácticas de captura.'
)}
${doc(
  'https://www.audacityteam.org/',
  'EDIT',
  'Audacity',
  'Editor libre para limpiar, normalizar y revisar el audio antes de montar.'
)}`,
    contentEn: `<h1>Professional audio with a phone: microphones, levels and noise</h1>
<p class="lead"><em>Audio is half of a video and yet it is often left for last. A modern phone can deliver clean voice if the right microphone is chosen and automatic gain is avoided. The rest is distance, room and a reference take.</em></p>
${figure(
  `${IMG}/2026-11/audio-celular-microfonos.jpg`,
  'Lavalier microphone with clip and foam',
  'A compatible lavalier avoids relying on the phone’s internal microphone. Photo: 多多123 / Wikimedia Commons (CC BY 4.0)'
)}
${stats([
  ['48 kHz', 'sample rate'],
  ['24-bit', 'recommended depth'],
  ['−12 dBFS', 'target peak'],
  ['1', 'reference take per scene'],
])}
<h2 class="report-chapter">Which microphone to use</h2>
<p>For a seated or walking interview, the lavalier is the most consistent option: it sits close to the mouth, relatively isolates the environment and does not require aiming. Outdoors with wind or for ambience, an off-camera shotgun can sound more natural, but it needs an operator and a boom.</p>
<p>If the phone has no 3.5 mm input, there are two paths: a USB-C or Lightning adapter with an analog-to-digital converter, or a wireless microphone that records on its own. Cheap models often have a noisy preamp; in that case, raise the signal at the source, not in the app.</p>
<h2 class="report-chapter">Distance and placement</h2>
<p>The rule is simple: closer means less room. A lavalier 20 centimeters from the mouth sounds drier and more consistent than the internal mic at one meter. Place it on the chest, slightly below the chin, and make sure clothing does not rub the capsule.</p>
<p>Avoid contact with buttons, zippers and necklaces. Rubbing produces low-frequency thumps that were not fixed on set and force you to cut the voice in editing. Use paper tape or a clip with strain relief to secure the cable.</p>
${quote(
  'If audio was recorded badly, no edit fixes it. If it was recorded well, the edit barely shows.',
  'Sound rule'
)}
<h2 class="report-chapter">Recording settings</h2>
<p>Record in WAV or the uncompressed format the app allows. If only AAC is available, use the highest rate. Set 48 kHz and 24-bit when possible: the extra headroom helps recover peaks without quantization noise.</p>
<p>Disable automatic gain and the app's voice filter if it compresses too much. Set gain manually so peaks land around −12 dBFS and normal passages between −18 and −24 dBFS. That margin protects shouts and laughter without approaching digital zero.</p>
<h2 class="report-chapter">The room records too</h2>
<p>Noise does not always come from the gear: a room with bare walls, windows and a fan adds reflections and hum. Look for a room with a rug, curtains, books or sofas. Turn off air conditioning and the refrigerator if possible, and choose the time of day with less traffic.</p>
<p>If there is no alternative, move the microphone closer and lower the gain. A tight shot with direct sound beats a wide shot with reverb. Outdoors, use wind protection even if it is not very windy: air over the capsule generates low-frequency noise.</p>
<h2 class="report-chapter">Sync and backup</h2>
<p>Always record audio on the camera as well as the phone. That reference channel allows syncing in editing and saves the take if the phone fails. Before each scene, clap visibly and audibly: it is the fastest method and does not depend on software.</p>
<p>Name files with date, scene and take. Copy the material to two destinations before erasing the card. Audio is small and easy to back up; losing it by not copying is one of the most expensive mistakes on a shoot.</p>
<h2 class="report-chapter">Checklist before recording</h2>
<ul>
<li>Microphone connected and tested with the chosen app.</li>
<li>Manual gain set; peaks around −12 dBFS.</li>
<li>Airplane mode on to avoid notifications and radio interference.</li>
<li>Fan, air conditioning and notifications off.</li>
<li>Sync clap at the start of each take.</li>
<li>Backup copy before leaving the set.</li>
</ul>
${doc(
  'https://www.adobe.com/creativecloud/video/discover/audio-recording-tips.html',
  'AUD',
  'Audio recording tips',
  'Levels, microphones and capture best practices.'
)}
${doc(
  'https://www.audacityteam.org/',
  'EDIT',
  'Audacity',
  'Free editor to clean, normalize and review audio before editing.'
)}`,
  },
  {
    id: '1413',
    slug: 'youtube-shorts-medidas-zonas-seguras-2026',
    publishedAt: '2026-11-05T09:00:00-04:00',
    date: '2026-11-05',
    titleEs: 'YouTube Shorts en 2026: medidas, zonas seguras y un flujo vertical que no arruine el encuadre',
    titleEn: 'YouTube Shorts in 2026: dimensions, safe zones and a vertical workflow that protects the framing',
    excerptEs:
      'El lienzo vertical estándar es 1080 × 1920 y la interfaz se come buena parte del cuadro. Esta guía ordena las medidas, las márgenes seguras que usan las herramientas de terceros y un método para rodar una vez y exportar en horizontal y vertical.',
    excerptEn:
      'The standard vertical canvas is 1080 × 1920 and the interface eats a large part of the frame. This guide organizes the dimensions, the safe margins used by third-party tools and a method to shoot once and export both horizontal and vertical.',
    readTimeEs: '7 min de lectura',
    readTimeEn: '7 min read',
    imageUrl: `${IMG}/2026-11/youtube-shorts-vertical.jpg`,
    imageCaption: 'Diagrama de la zona segura de un Short de 1080 × 1920. Ilustración: archivo del autor',
    categoryEs: 'Tutoriales',
    categoryEn: 'Tutorials',
    contentEs: `<h1>YouTube Shorts en 2026: medidas, zonas seguras y un flujo vertical que no arruine el encuadre</h1>
<p class="lead"><em>Grabar en vertical no es recortar un video horizontal. La interfaz de YouTube tapa el borde superior y el inferior con títulos, botones y descripciones, y el centro útil es más pequeño de lo que parece. Estas son las medidas que conviene tener a mano antes de encuadrar.</em></p>
${figure(
  `${IMG}/2026-11/youtube-shorts-vertical.jpg`,
  'Diagrama de zonas seguras para un video vertical de 1080 por 1920',
  'El área central de 900 × 1160 px es la referencia práctica para texto y rostros. Ilustración: archivo del autor'
)}
${stats([
  ['1080 × 1920', 'lienzo vertical'],
  ['9:16', 'relación de aspecto'],
  ['900 × 1160', 'zona segura central'],
  ['380 px', 'margen superior e inferior'],
])}
<h2 class="report-chapter">Las medidas de partida</h2>
<p>El estándar para Shorts es un lienzo de 1080 × 1920 píxeles, con relación de aspecto 9:16. Es la misma proporción que usan TikTok, Reels y la mayoría de las historias. Exportar en 1080p es suficiente para la mayoría de los casos; subir en 4K puede ayudar a la compresión de la plataforma, pero no es obligatorio.</p>
<p>La tasa de fotogramas puede ser 24, 25, 30, 50 o 60 fps. Para contenido con movimiento rápido, 50 o 60 fps dan más margen; para entrevistas y planos quietos, 24 o 25 fps mantienen una textura más cinematográfica. Lo importante es no mezclar tasas en el mismo timeline sin intención.</p>
<h2 class="report-chapter">Qué tapa la interfaz</h2>
<p>Las mediciones de herramientas de terceros coinciden en un patrón: la interfaz ocupa aproximadamente 380 píxeles arriba y 380 abajo, con márgenes laterales menores. Eso deja un área central segura de unos 900 × 1160 píxeles para rostros, texto y logos.</p>
<p>YouTube no publica un documento único con estas cifras como especificación oficial, así que conviene tratarlas como una guía conservadora. Si el texto queda dentro de ese rectángulo, es muy probable que se lea en la app; si queda en los bordes, puede quedar debajo del título, del nombre del canal o de los botones.</p>
${quote(
  'Diseña para el centro y exporta para el borde. Lo que importa no es llenar el cuadro, sino que el mensaje sobreviva a la interfaz.',
  'Regla de formato vertical'
)}
<h2 class="report-chapter">Encuadre: el sujeto no siempre va al centro</h2>
<p>En vertical, el rostro suele funcionar mejor en el tercio superior, con aire abajo para el texto o para las manos. Si el video lleva subtítulos, reserva una franja inferior estable y no los muevas de lugar entre tomas. La consistencia visual importa más que la simetría.</p>
<p>Si ruedas una entrevista pensando en horizontal y vertical, deja aire lateral en el plano horizontal. Después, el reencuadre vertical puede seguir al sujeto sin cortarle la cabeza ni perder la mirada. Rodar solo para vertical y después recortar a horizontal casi nunca funciona.</p>
<h2 class="report-chapter">Un flujo para dos formatos</h2>
<ol>
<li><strong>Rodaje:</strong> graba en la máxima resolución horizontal que permita la cámara y deja margen a los lados.</li>
<li><strong>Guion:</strong> escribe una versión de 60 segundos y otra de 8 minutos; no pidas al mismo corte que haga las dos cosas.</li>
<li><strong>Edición vertical:</strong> trabaja en una secuencia 1080 × 1920 y coloca los elementos dentro de la zona segura.</li>
<li><strong>Exportación:</strong> H.264, 1080 × 1920, 30 o 60 fps, audio AAC a 48 kHz.</li>
<li><strong>Control:</strong> revisa el resultado en el teléfono, no solo en el monitor. La app es el destino real.</li>
</ol>
<h2 class="report-chapter">Texto, subtítulos y legibilidad</h2>
<p>El texto en vertical necesita tamaño generoso y contraste alto. Un cuerpo de 48 a 64 píxeles sobre 1080 de ancho es un punto de partida razonable para subtítulos; los títulos pueden ser mayores. Evita tipografías finas y sombras suaves: en una pantalla de 6 pulgadas se pierden.</p>
<p>Los subtítulos automáticos son un buen punto de partida, pero conviene corregirlos a mano. Un error de una palabra puede cambiar el sentido y, en un Short, no hay contexto para desambiguar. Revisa nombres propios, cifras y términos técnicos.</p>
<h2 class="report-chapter">Checklist de exportación</h2>
<ul>
<li>Lienzo 1080 × 1920 y relación 9:16.</li>
<li>Rostros y texto dentro de la zona central de 900 × 1160 px.</li>
<li>Márgenes superior e inferior de 380 px libres de información crítica.</li>
<li>Audio a 48 kHz, sin picos por encima de −1 dBFS.</li>
<li>Subtítulos revisados y sincronizados.</li>
<li>Reproducción de prueba en el teléfono antes de publicar.</li>
</ul>
${doc(
  'https://support.google.com/youtube/answer/10059070',
  'YT',
  'Crear YouTube Shorts',
  'Requisitos y flujo oficial de publicación de Shorts.'
)}
${doc(
  'https://support.google.com/youtube/answer/1722171',
  'ENC',
  'Configuración recomendada de codificación',
  'Bitrates, resoluciones y formatos sugeridos por YouTube.'
)}`,
    contentEn: `<h1>YouTube Shorts in 2026: dimensions, safe zones and a vertical workflow that protects the framing</h1>
<p class="lead"><em>Shooting vertical is not cropping a horizontal video. YouTube's interface covers the top and bottom edges with titles, buttons and descriptions, and the usable center is smaller than it looks. These are the measurements to keep in mind before framing.</em></p>
${figure(
  `${IMG}/2026-11/youtube-shorts-vertical.jpg`,
  'Safe-zone diagram for a 1080 by 1920 vertical video',
  'The central 900 × 1160 px area is the practical reference for text and faces. Illustration: author’s archive'
)}
${stats([
  ['1080 × 1920', 'vertical canvas'],
  ['9:16', 'aspect ratio'],
  ['900 × 1160', 'central safe area'],
  ['380 px', 'top and bottom margin'],
])}
<h2 class="report-chapter">Starting dimensions</h2>
<p>The standard for Shorts is a 1080 × 1920 pixel canvas with a 9:16 aspect ratio. It is the same proportion used by TikTok, Reels and most stories. Exporting at 1080p is enough for most cases; uploading in 4K may help with platform compression, but it is not mandatory.</p>
<p>Frame rate can be 24, 25, 30, 50 or 60 fps. For fast movement, 50 or 60 fps provides more headroom; for interviews and static shots, 24 or 25 fps keep a more cinematic texture. What matters is not mixing rates in the same timeline without intent.</p>
<h2 class="report-chapter">What the interface covers</h2>
<p>Measurements from third-party tools agree on a pattern: the interface occupies roughly 380 pixels at the top and 380 at the bottom, with smaller side margins. That leaves a central safe area of about 900 × 1160 pixels for faces, text and logos.</p>
<p>YouTube does not publish a single document with these figures as an official specification, so treat them as a conservative guide. If text stays inside that rectangle, it is very likely to be readable in the app; if it sits at the edges, it may end up under the title, channel name or buttons.</p>
${quote(
  'Design for the center and export for the edge. What matters is not filling the frame, but making the message survive the interface.',
  'Vertical format rule'
)}
<h2 class="report-chapter">Framing: the subject is not always centered</h2>
<p>In vertical, the face usually works best in the upper third, with space below for text or hands. If the video has subtitles, reserve a stable lower band and do not move it between shots. Visual consistency matters more than symmetry.</p>
<p>If you shoot an interview with both horizontal and vertical in mind, leave lateral room in the horizontal shot. The vertical reframe can then follow the subject without cutting off the head or losing the eyeline. Shooting only for vertical and then cropping to horizontal almost never works.</p>
<h2 class="report-chapter">A workflow for two formats</h2>
<ol>
<li><strong>Shooting:</strong> record at the highest horizontal resolution the camera allows and leave room on the sides.</li>
<li><strong>Script:</strong> write a 60-second version and an 8-minute version; do not ask the same cut to do both.</li>
<li><strong>Vertical edit:</strong> work in a 1080 × 1920 sequence and place elements inside the safe area.</li>
<li><strong>Export:</strong> H.264, 1080 × 1920, 30 or 60 fps, AAC audio at 48 kHz.</li>
<li><strong>Check:</strong> review the result on the phone, not only on the monitor. The app is the real destination.</li>
</ol>
<h2 class="report-chapter">Text, subtitles and legibility</h2>
<p>Vertical text needs generous size and high contrast. A body size of 48 to 64 pixels on a 1080-wide canvas is a reasonable starting point for subtitles; titles can be larger. Avoid thin typefaces and soft shadows: they disappear on a 6-inch screen.</p>
<p>Automatic subtitles are a good starting point, but correct them by hand. A one-word error can change the meaning and, in a Short, there is no context to disambiguate. Review proper names, figures and technical terms.</p>
<h2 class="report-chapter">Export checklist</h2>
<ul>
<li>1080 × 1920 canvas and 9:16 ratio.</li>
<li>Faces and text inside the central 900 × 1160 px area.</li>
<li>Top and bottom margins of 380 px free of critical information.</li>
<li>Audio at 48 kHz, with no peaks above −1 dBFS.</li>
<li>Subtitles reviewed and synchronized.</li>
<li>Test playback on the phone before publishing.</li>
</ul>
${doc(
  'https://support.google.com/youtube/answer/10059070',
  'YT',
  'Create YouTube Shorts',
  'Official requirements and publishing workflow for Shorts.'
)}
${doc(
  'https://support.google.com/youtube/answer/1722171',
  'ENC',
  'Recommended encoding settings',
  'Bitrates, resolutions and formats suggested by YouTube.'
)}`,
  },
  {
    id: '1414',
    slug: 'editar-4k-ram-gpu-discos-proxies',
    publishedAt: '2026-11-05T10:00:00-04:00',
    date: '2026-11-05',
    titleEs: 'Editar 4K sin morir en el intento: cuánta RAM, qué GPU y por qué el disco importa más de lo que crees',
    titleEn: 'Editing 4K without dying: how much RAM, which GPU and why storage matters more than you think',
    excerptEs:
      'La guía de Adobe recomienda 32 GB de RAM para flujos 4K y advierte que 16 GB se queda corto. Pero la memoria no lo es todo: la GPU acelera efectos, el disco sostiene la reproducción y los proxies salvan proyectos que ninguna máquina mueve en crudo.',
    excerptEn:
      'Adobe’s guidance recommends 32 GB of RAM for 4K workflows and warns that 16 GB is not enough. But memory is not everything: the GPU accelerates effects, storage sustains playback and proxies rescue projects no machine can play raw.',
    readTimeEs: '9 min de lectura',
    readTimeEn: '9 min read',
    imageUrl: `${IMG}/nvidia/04-vera-rubin-nvl72.png`,
    imageCaption: 'Hardware de cómputo acelerado: la GPU pesa cada vez más en la edición. Imagen: NVIDIA',
    categoryEs: 'Tutoriales',
    categoryEn: 'Tutorials',
    contentEs: `<h1>Editar 4K sin morir en el intento: cuánta RAM, qué GPU y por qué el disco importa más de lo que crees</h1>
<p class="lead"><em>El 4K dejó de ser un lujo de cine y se volvió el formato por defecto de muchas cámaras y teléfonos. También se volvió la causa más común de timelines que se arrastran. La buena noticia es que el cuello de botella casi nunca es uno solo: se reparte entre memoria, procesador, GPU y almacenamiento.</em></p>
${figure(
  `${IMG}/nvidia/04-vera-rubin-nvl72.png`,
  'Sistema de cómputo acelerado para cargas de trabajo intensivas',
  'La aceleración por GPU se volvió central para efectos, escalado y exportación. Imagen: NVIDIA'
)}
${stats([
  ['32 GB', 'RAM recomendada para 4K'],
  ['16 GB', 'mínimo que se queda corto'],
  ['SSD', 'para caché y medios'],
  ['1:1', 'tamaño de proxies respecto al original'],
])}
<h2 class="report-chapter">La RAM: el error más caro</h2>
<p>Adobe recomienda 32 GB de memoria para flujos de 4K o superiores y advierte que editar 4K con menos de 16 GB genera cuellos de botella. La razón es simple: el timeline mantiene en memoria fotogramas, cachés y capas de efectos. Cuando la memoria se llena, el sistema empieza a usar el disco como respaldo y la reproducción se vuelve impredecible.</p>
<p>Si el presupuesto es limitado, es mejor priorizar 32 GB de RAM antes que una GPU de gama alta. Una máquina con buena memoria y una GPU discreta media suele editar mejor que una con poca memoria y una tarjeta potente. La excepción son los flujos con muchos efectos y color: ahí la GPU pesa más.</p>
<h2 class="report-chapter">GPU: dónde sí acelera</h2>
<p>La GPU acelera la decodificación, los efectos, el escalado, el ruido y la exportación en los códecs compatibles. No reemplaza a la RAM ni al procesador: si el timeline no puede mantenerse en memoria, la GPU espera. Para edición 4K, una tarjeta de gama media con buenos drivers suele ser suficiente; para 6K, 8K o efectos intensivos, conviene subir.</p>
<p>Verifica la compatibilidad con el software antes de comprar. Algunos códecs se decodifican por hardware en una generación y no en otra, y los drivers importan tanto como los teraflops. La lista de requisitos del fabricante es más útil que cualquier benchmark genérico.</p>
${quote(
  'El equipo no se elige por el número más grande, sino por el cuello de botella que aparece primero en tu flujo real.',
  'Regla de hardware'
)}
<h2 class="report-chapter">Discos: el eslabón silencioso</h2>
<p>Un proyecto 4K puede mover cientos de gigabytes. Si los medios están en un disco lento o fragmentado, la reproducción se corta aunque haya RAM de sobra. La recomendación práctica es separar el sistema, los proyectos y los medios, y usar SSD para la caché y para el material que se está editando.</p>
<p>Los HDD siguen siendo útiles para archivo y para copias de seguridad, pero no para editar en caliente. Un NAS conectado por red también puede funcionar si la red es rápida y estable; si no, el timeline lo va a notar en cada búsqueda.</p>
<h2 class="report-chapter">Proxies: el atajo que no es trampa</h2>
<p>Los proxies son versiones ligeras del material original que se usan para editar y se sustituyen por los archivos completos al exportar. Permiten trabajar con 4K, 6K u 8K en equipos modestos sin sacrificar la calidad final. La clave es generarlos con un códec intraframe y mantener la misma duración y nombre de archivo.</p>
<p>Configura el timeline para alternar entre proxies y originales. Si el software lo permite, activa la creación automática al importar. Revisa siempre una exportación de prueba con los originales para confirmar que el cambio se hizo bien.</p>
<h2 class="report-chapter">Configuración recomendada por nivel</h2>
<table class="spec-table">
<thead><tr><th>Uso</th><th>RAM</th><th>GPU</th><th>Almacenamiento</th></tr></thead>
<tbody>
<tr><td>4K ocasional, redes sociales</td><td>16–32 GB</td><td>Integrada o gama media</td><td>SSD para caché + HDD para archivo</td></tr>
<tr><td>4K frecuente, entrevistas y documental</td><td>32 GB</td><td>Gama media con decodificación</td><td>SSD para medios + NAS</td></tr>
<tr><td>6K/8K, color y VFX</td><td>64 GB o más</td><td>Gama alta</td><td>NVMe + RAID + archivo</td></tr>
</tbody>
</table>
<h2 class="report-chapter">Checklist antes de comprar</h2>
<ul>
<li>Revisa los requisitos oficiales del software que usas, no solo los del sistema operativo.</li>
<li>Confirma que tu códec principal se decodifica por hardware.</li>
<li>Reserva al menos 20% de espacio libre en el disco de caché.</li>
<li>Evalúa proxies antes de gastar en hardware.</li>
<li>Mide con tu propio material: un proyecto de prueba vale más que una reseña.</li>
</ul>
${doc(
  'https://helpx.adobe.com/premiere-pro/system-requirements.html',
  'REQ',
  'Requisitos de sistema de Premiere Pro',
  'Memoria, GPU y almacenamiento recomendados por Adobe.'
)}
${doc(
  'https://helpx.adobe.com/premiere-pro/using/proxies.html',
  'PRX',
  'Trabajar con proxies',
  'Guía oficial para crear y alternar proxies en edición.'
)}`,
    contentEn: `<h1>Editing 4K without dying: how much RAM, which GPU and why storage matters more than you think</h1>
<p class="lead"><em>4K stopped being a cinema luxury and became the default format for many cameras and phones. It also became the most common cause of timelines that crawl. The good news is that the bottleneck is almost never a single component: it is split between memory, processor, GPU and storage.</em></p>
${figure(
  `${IMG}/nvidia/04-vera-rubin-nvl72.png`,
  'Accelerated computing system for intensive workloads',
  'GPU acceleration became central for effects, upscaling and export. Image: NVIDIA'
)}
${stats([
  ['32 GB', 'recommended RAM for 4K'],
  ['16 GB', 'minimum that falls short'],
  ['SSD', 'for cache and media'],
  ['1:1', 'proxy size relative to original'],
])}
<h2 class="report-chapter">RAM: the most expensive mistake</h2>
<p>Adobe recommends 32 GB of memory for 4K and higher workflows and warns that editing 4K with less than 16 GB creates bottlenecks. The reason is simple: the timeline keeps frames, caches and effect layers in memory. When memory fills up, the system starts using the disk as a fallback and playback becomes unpredictable.</p>
<p>If the budget is limited, prioritize 32 GB of RAM over a high-end GPU. A machine with good memory and a mid-range discrete GPU usually edits better than one with little memory and a powerful card. The exception is effects- and color-heavy work, where the GPU matters more.</p>
<h2 class="report-chapter">GPU: where it actually accelerates</h2>
<p>The GPU accelerates decoding, effects, scaling, noise reduction and export in supported codecs. It does not replace RAM or the processor: if the timeline cannot be held in memory, the GPU waits. For 4K editing, a mid-range card with good drivers is usually enough; for 6K, 8K or heavy effects, go higher.</p>
<p>Check software compatibility before buying. Some codecs are hardware-decoded on one generation and not another, and drivers matter as much as teraflops. The manufacturer's requirements list is more useful than any generic benchmark.</p>
${quote(
  'You do not choose a machine by the biggest number, but by the bottleneck that appears first in your real workflow.',
  'Hardware rule'
)}
<h2 class="report-chapter">Storage: the silent link</h2>
<p>A 4K project can move hundreds of gigabytes. If media sits on a slow or fragmented drive, playback stutters even with plenty of RAM. The practical recommendation is to separate system, projects and media, and use SSDs for cache and for the material being edited.</p>
<p>HDDs remain useful for archive and backups, but not for hot editing. A network-attached storage system can also work if the network is fast and stable; if not, the timeline will feel it on every search.</p>
<h2 class="report-chapter">Proxies: the shortcut that is not cheating</h2>
<p>Proxies are lightweight versions of the original material used for editing and replaced by full files on export. They let you work with 4K, 6K or 8K on modest machines without sacrificing final quality. The key is to generate them with an intraframe codec and keep the same duration and file name.</p>
<p>Configure the timeline to switch between proxies and originals. If the software allows it, enable automatic creation on import. Always review a test export with the originals to confirm the switch worked.</p>
<h2 class="report-chapter">Recommended configuration by use</h2>
<table class="spec-table">
<thead><tr><th>Use</th><th>RAM</th><th>GPU</th><th>Storage</th></tr></thead>
<tbody>
<tr><td>Occasional 4K, social media</td><td>16–32 GB</td><td>Integrated or mid-range</td><td>SSD for cache + HDD for archive</td></tr>
<tr><td>Frequent 4K, interviews and documentary</td><td>32 GB</td><td>Mid-range with decoding</td><td>SSD for media + NAS</td></tr>
<tr><td>6K/8K, color and VFX</td><td>64 GB or more</td><td>High-end</td><td>NVMe + RAID + archive</td></tr>
</tbody>
</table>
<h2 class="report-chapter">Checklist before buying</h2>
<ul>
<li>Review the official requirements of the software you use, not just the operating system's.</li>
<li>Confirm that your main codec is hardware-decoded.</li>
<li>Keep at least 20% free space on the cache drive.</li>
<li>Evaluate proxies before spending on hardware.</li>
<li>Measure with your own footage: a test project is worth more than a review.</li>
</ul>
${doc(
  'https://helpx.adobe.com/premiere-pro/system-requirements.html',
  'REQ',
  'Premiere Pro system requirements',
  'Memory, GPU and storage recommended by Adobe.'
)}
${doc(
  'https://helpx.adobe.com/premiere-pro/using/proxies.html',
  'PRX',
  'Working with proxies',
  'Official guide to creating and switching proxies in editing.'
)}`,
  },
];
