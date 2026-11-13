/**
 * Noticias verificadas del 10 y 11 de noviembre de 2026 (IDs 1420-1429).
 * Fuentes: La Razón, Urgente.bo/ABI, BBC, CNN, Time, NPR, Al Jazeera y OMS.
 * Cada objeto incluye metadatos, cuerpo ES/EN y atribución de fuente.
 */

const IMG = '/images/news';

const figure = (src, alt, caption) =>
  `<figure class="report-figure"><img src="${src}" alt="${alt}" loading="lazy"><figcaption>${caption}</figcaption></figure>`;

const quote = (text, cite) =>
  `<blockquote class="expert-quote">&ldquo;${text}&rdquo;<cite>${cite}</cite></blockquote>`;

const source = (label, url) =>
  `<p>Con informaci&oacute;n de <a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>.</p>`;

export const noticias = [
  {
    id: '1420',
    slug: 'intervencion-policial-arrestos-instituto-pedro-domingo-murillo',
    publishedAt: '2026-11-10T21:00:00-04:00',
    date: '2026-11-10',
    titleEs: 'La Policía arresta a más de 30 maestros y estudiantes de un instituto técnico en La Paz durante las protestas del magisterio',
    titleEn: 'Police arrest more than 30 teachers and students at a La Paz technical institute during teacher protests',
    excerptEs:
      'La intervención al Instituto Técnico Pedro Domingo Murillo dejó al menos 15 arrestados, según la Policía, y una vigilia de padres frente a la FELCC. Los docentes rechazan la transferencia de los institutos técnicos a gobernaciones y municipios.',
    excerptEn:
      'The intervention at the Pedro Domingo Murillo Technical Institute left at least 15 arrested, according to police, and a parents\' vigil outside the FELCC. Teachers oppose transferring technical institutes to regional and municipal governments.',
    readTimeEs: '4 min',
    readTimeEn: '4 min',
    imageUrl: `${IMG}/2026-11-10/intervencion-policial-pedro-domingo-murillo.jpg`,
    imageCaption: 'Los arrestos se produjeron durante el bloqueo de la autopista La Paz–El Alto. Foto: Urgente.bo',
    categoryEs: 'Seguridad',
    categoryEn: 'Security',
    region: 'Bolivia',
    location: 'La Paz, Bolivia',
    source: 'La Razón / Urgente.bo',
    sourceUrl:
      'https://larazon.bo/sociedad/2026/11/10/intervencion-policial-deja-mas-de-30-maestros-y-estudiantes-arrestados-en-la-paz/',
    contentEs: `<h1>La Policía arresta a más de 30 maestros y estudiantes de un instituto técnico en La Paz durante las protestas del magisterio</h1>
<p class="lead"><em>La intervención al Instituto Técnico Pedro Domingo Murillo dejó este martes más de 30 maestros y estudiantes arrestados, según La Razón, en medio del paro de 48 horas que cumple el magisterio urbano. La Policía confirma 15 detenciones y asegura que actuó conforme al estado de excepción; los padres de familia mantienen una vigilia frente a la FELCC exigiendo la liberación de los jóvenes.</em></p>
${figure(
  `${IMG}/2026-11-10/intervencion-policial-pedro-domingo-murillo.jpg`,
  'Docentes y estudiantes arrestados durante la intervención del instituto técnico',
  'La Policía dispersó con gases a los movilizados en la autopista La Paz–El Alto. Foto: Urgente.bo'
)}
<h2 class="report-chapter">Qué ocurrió en la autopista</h2>
<p>Cerca del mediodía, un grupo de estudiantes bloqueó el carril de subida de la autopista La Paz–El Alto, a la altura de Achachicala, en rechazo a la transferencia de los institutos técnicos a las gobernaciones y municipios. Efectivos de la Unidad Táctica de Operaciones Policiales (UTOP) lanzaron gases lacrimógenos para dispersar a los movilizados, informó el comandante departamental de la Policía de La Paz, Ricardo Terrazas.</p>
<p>"Cumpliendo con el estado de excepción lo que hemos hecho ha sido dispersar y, por ese motivo, tenemos en la actualidad 15 arrestados del Instituto Técnico Pedro Domingo Murillo, que han sido llevados a dependencias de la Fuerza Especial de Lucha Contra el Crimen (FELCC)", dijo el coronel Terrazas.</p>
<p>Un docente del instituto, José Leoncio Choque, afirmó a Urgente.bo que la gasificación fue "violenta" y que la Policía detuvo a personas que estaban dentro del plantel. Otro maestro, Víctor Nina, sostuvo que la marcha era pacífica y que varios estudiantes que pasaban clases terminaron arrestados: "La Policía ingresó, había estudiantes que estaban pasando clases y los han sacado", relató. Según su recuento preliminar, son unos 35 los arrestados entre estudiantes y docentes, y hay heridos.</p>
${quote(
  'Realmente estamos indignadas por lo que ha pasado hoy: ingresaron y sacaron a nuestros hijos como si fueran delincuentes.',
  'Madre de un estudiante arrestado, a Urgente.bo'
)}
<h2 class="report-chapter">La vigilia frente a la FELCC</h2>
<p>Desde la tarde, familiares y maestros se congregaron en las puertas de la FELCC para exigir la liberación de los arrestados. Los padres denunciaron que los estudiantes fueron trasladados en al menos cuatro patrullas y criticaron que la detención se prolongara por más de ocho horas. "Queremos que les den libertad pura y simple a estos jóvenes", dijo una madre al medio citado.</p>
<p>La Razón contabilizó más de 30 arrestados en la jornada y recordó que el conflicto se enmarca en el paro de 48 horas decretado por el magisterio urbano para el 9 y 10 de noviembre. El mismo medio reporta que unas 200 maestras y maestros iniciaron una huelga de hambre, mientras el Ministerio de Educación denunció amenazas contra docentes que no acatan la medida.</p>
<h2 class="report-chapter">El fondo del conflicto</h2>
<p>El reclamo central del magisterio urbano es la propuesta de transferir la administración de los institutos técnicos y otras responsabilidades educativas a los gobiernos autónomos sin garantizar el financiamiento correspondiente. Las reuniones entre la Federación de Maestros Urbanos y el Gobierno no llegaron a un acuerdo y las protestas comenzaron el 3 de noviembre con piquetes de huelga.</p>
<p>La Policía no informó sobre la situación jurídica de los arrestados ni anunció cargos formales. El lunes 11, día siguiente de la intervención, el conflicto seguía abierto y sin una nueva mesa de negociación convocada.</p>
${source('La Razón', 'https://larazon.bo/sociedad/2026/11/10/intervencion-policial-deja-mas-de-30-maestros-y-estudiantes-arrestados-en-la-paz/')}
${source('Urgente.bo', 'https://www.urgente.bo/noticia/arrestan-al-menos-15-personas-tras-gasificacion-docentes-y-estudiantes-que-intentaban')}`,
    contentEn: `<h1>Police arrest more than 30 teachers and students at a La Paz technical institute during teacher protests</h1>
<p class="lead"><em>The intervention at the Pedro Domingo Murillo Technical Institute left more than 30 teachers and students arrested on Tuesday, according to La Razón, as the urban teachers' union carried out a 48-hour strike. Police confirm 15 detentions and say they acted under the state of exception; parents are keeping a vigil outside the FELCC demanding the students' release.</em></p>
${figure(
  `${IMG}/2026-11-10/intervencion-policial-pedro-domingo-murillo.jpg`,
  'Teachers and students arrested during the intervention at the technical institute',
  'Police dispersed demonstrators with tear gas on the La Paz–El Alto highway. Photo: Urgente.bo'
)}
<h2 class="report-chapter">What happened on the highway</h2>
<p>Around midday, a group of students blocked the upward lane of the La Paz–El Alto highway near Achachicala, rejecting the transfer of technical institutes to regional and municipal governments. Officers of the Tactical Police Operations Unit (UTOP) fired tear gas to disperse the demonstrators, said Ricardo Terrazas, commander of the La Paz police.</p>
<p>"Complying with the state of exception, what we have done is disperse them, and for that reason we currently have 15 people arrested from the Pedro Domingo Murillo Technical Institute, taken to the Special Force to Fight Crime (FELCC)," said Colonel Terrazas.</p>
<p>Teacher José Leoncio Choque told Urgente.bo that police fired gas "violently" and that people inside the school were detained. Another teacher, Víctor Nina, said the march was peaceful and that several students attending classes ended up arrested: "The police came in — there were students in class and they took them out," he said. His preliminary count put the arrests at about 35, including teachers and students, with some injured.</p>
${quote(
  'We are truly outraged by what happened today: they came in and took our children out as if they were criminals.',
  'Mother of an arrested student, to Urgente.bo'
)}
<h2 class="report-chapter">The vigil outside the FELCC</h2>
<p>From the afternoon, relatives and teachers gathered outside the FELCC to demand the release of those arrested. Parents said the students were transported in at least four patrol cars and criticized detentions lasting more than eight hours. "We want these young people given their freedom, pure and simple," one mother told the outlet.</p>
<p>La Razón counted more than 30 arrests during the day and noted the unrest is part of the 48-hour strike called by the urban teachers' federation for November 9 and 10. The same outlet reports that about 200 teachers have begun a hunger strike, while the Ministry of Education denounced threats against teachers not joining the stoppage.</p>
<h2 class="report-chapter">The dispute underneath</h2>
<p>The union's core complaint is a proposal to transfer the administration of technical institutes and other educational responsibilities to autonomous governments without guaranteed funding. Meetings between the Urban Teachers Federation and the government failed to reach an agreement, and protests began on November 3 with strike pickets.</p>
<p>Police did not report the legal status of those arrested or announce formal charges. The day after the intervention, the conflict remained open with no new negotiating table convened.</p>
${source('La Razón', 'https://larazon.bo/sociedad/2026/11/10/intervencion-policial-deja-mas-de-30-maestros-y-estudiantes-arrestados-en-la-paz/')}
${source('Urgente.bo', 'https://www.urgente.bo/noticia/arrestan-al-menos-15-personas-tras-gasificacion-docentes-y-estudiantes-que-intentaban')}`,
  },
  {
    id: '1421',
    slug: 'potosi-lidera-exportaciones-bolivia-4011-millones-2026',
    publishedAt: '2026-11-10T19:00:00-04:00',
    date: '2026-11-10',
    titleEs: 'Potosí lidera las exportaciones de Bolivia con $us 4.011 millones y un crecimiento del 65,5%',
    titleEn: 'Potosí leads Bolivia\'s exports with $4.01 billion and 65.5% growth',
    excerptEs:
      'El departamento concentró el 38,8% de las ventas externas entre enero y septiembre de 2026, según el INE, impulsado por la minería. China, Japón y Bélgica-Luxemburgo fueron los principales destinos. La Paz creció 143,5% y Santa Cruz se ubicó tercera.',
    excerptEn:
      'The department concentrated 38.8% of export sales between January and September 2026, according to the INE, driven by mining. China, Japan and Belgium-Luxembourg were the main destinations. La Paz grew 143.5% and Santa Cruz ranked third.',
    readTimeEs: '4 min',
    readTimeEn: '4 min',
    imageUrl: `${IMG}/2026-11-10/potosi-lidera-exportaciones-4011-millones.jpg`,
    imageCaption: 'La minería explica el salto exportador de Potosí. Foto: Urgente.bo',
    categoryEs: 'Economía',
    categoryEn: 'Economy',
    region: 'Bolivia',
    location: 'Potosí, Bolivia',
    source: 'Urgente.bo / INE',
    sourceUrl:
      'https://www.urgente.bo/noticia/potosi-lidera-las-exportaciones-de-bolivia-con-mas-de-us-4-000-millones-y-un-crecimiento-del',
    contentEs: `<h1>Potosí lidera las exportaciones de Bolivia con $us 4.011 millones y un crecimiento del 65,5%</h1>
<p class="lead"><em>Potosí se consolidó como el principal departamento exportador de Bolivia entre enero y septiembre de 2026, según un boletín del Instituto Nacional de Estadística (INE) difundido este martes. El departamento acumuló ventas externas por $us 4.011,1 millones, equivalentes al 38,8% del total del país y un crecimiento interanual del 65,5%.</em></p>
${figure(
  `${IMG}/2026-11-10/potosi-lidera-exportaciones-4011-millones.jpg`,
  'Paisaje minero y productivo de Potosí',
  'El departamento concentra casi cuatro de cada diez dólares exportados por Bolivia. Foto: Urgente.bo'
)}
<h2 class="report-chapter">Los números del ranking</h2>
<p>El informe del INE, citado por Urgente.bo, muestra que en el mismo periodo de 2025 Potosí exportó $us 2.423,3 millones. En un año, sus ventas crecieron al menos $us 1.587,8 millones. Le sigue La Paz con $us 2.320,6 millones (22,4% del total), aunque con un crecimiento porcentual mayor, del 143,5%. Santa Cruz quedó tercera con $us 1.967,6 millones (19,0%).</p>
<p>Completan el ranking Oruro con $us 591,4 millones (5,7%), Tarija con $us 463,9 millones, Beni con $us 433,2 millones, Cochabamba con $us 399,4 millones y Chuquisaca con $us 68,7 millones.</p>
<h2 class="report-chapter">Minería y destinos de las ventas</h2>
<p>La actividad exportadora de Potosí está vinculada a la minería. Según el Sistema Integrado de Información Productiva, el principal destino fue China con $us 1.453,15 millones, seguido de Japón con $us 658,4 millones, Bélgica-Luxemburgo con $us 597,96 millones, Corea del Sur con $us 452,82 millones y Australia con $us 307,3 millones.</p>
<p>El dato llega en una semana en la que el propio Gobierno destaca el desempeño comercial del país: Bolivia superó los $us 10.000 millones en exportaciones hasta septiembre de 2026 y se encamina a igualar o superar el récord histórico de 2022, según reportó La Razón el domingo 8.</p>
${quote(
  'Potosí concentra el 38,8% de las exportaciones bolivianas: cuatro de cada diez dólares que ingresan por ventas externas salen de su tierra.',
  'Boletín del INE citado por Urgente.bo'
)}
<h2 class="report-chapter">Qué implica para la economía</h2>
<p>El superávit comercial nacional, que pasó de un déficit de $us 524 millones a un superávit de $us 2.236 millones entre enero y septiembre, según análisis difundidos esta semana, se apoya en buena medida en el desemcompaso minero de Potosí y en el aumento del precio de los minerales.</p>
<p>La dependencia de la minería también es un riesgo: el desempeño exportador del departamento está atado al ciclo de precios internacionales y a la logística de exportación, con cuellos de botella documentados en puertos chilenos y peruanos. La diversificación de la canasta exportadora sigue pendiente en la agenda económica del país.</p>
${source('Urgente.bo', 'https://www.urgente.bo/noticia/potosi-lidera-las-exportaciones-de-bolivia-con-mas-de-us-4-000-millones-y-un-crecimiento-del')}`,
    contentEn: `<h1>Potosí leads Bolivia's exports with $4.01 billion and 65.5% growth</h1>
<p class="lead"><em>Potosí became Bolivia's leading exporting department between January and September 2026, according to a National Statistics Institute (INE) bulletin released on Tuesday. The department accumulated $4,011.1 million in external sales, equivalent to 38.8% of the national total and a 65.5% year-on-year increase.</em></p>
${figure(
  `${IMG}/2026-11-10/potosi-lidera-exportaciones-4011-millones.jpg`,
  'Mining and productive landscape of Potosí',
  'The department concentrates nearly four of every ten dollars Bolivia exports. Photo: Urgente.bo'
)}
<h2 class="report-chapter">The ranking in numbers</h2>
<p>The INE report, cited by Urgente.bo, shows that in the same period of 2025 Potosí exported $2,423.3 million. In one year, its sales grew by at least $1,587.8 million. It is followed by La Paz with $2,320.6 million (22.4% of the total), though with a higher percentage growth of 143.5%. Santa Cruz ranked third with $1,967.6 million (19.0%).</p>
<p>The ranking continues with Oruro at $591.4 million (5.7%), Tarija at $463.9 million, Beni at $433.2 million, Cochabamba at $399.4 million and Chuquisaca at $68.7 million.</p>
<h2 class="report-chapter">Mining and export destinations</h2>
<p>Potosí's exporting activity is linked to mining. According to the Integrated Productive Information System, the main destination was China with $1,453.15 million, followed by Japan with $658.4 million, Belgium-Luxembourg with $597.96 million, South Korea with $452.82 million and Australia with $307.3 million.</p>
<p>The figure comes in a week when the government itself highlights the country's trade performance: Bolivia surpassed $10 billion in exports through September 2026 and is on track to match or exceed the 2022 historical record, La Razón reported on Sunday the 8th.</p>
${quote(
  'Potosí concentrates 38.8% of Bolivian exports: four of every ten dollars coming in from external sales come from its land.',
  'INE bulletin cited by Urgente.bo'
)}
<h2 class="report-chapter">What it means for the economy</h2>
<p>The national trade surplus — which swung from a deficit of $524 million to a surplus of $2,236 million between January and September, according to analyses released this week — leans heavily on Potosí's mining output and rising mineral prices.</p>
<p>The dependence on mining is also a risk: the department's export performance is tied to the international price cycle and to export logistics, with documented bottlenecks in Chilean and Peruvian ports. Diversifying the export basket remains pending on the country's economic agenda.</p>
${source('Urgente.bo', 'https://www.urgente.bo/noticia/potosi-lidera-las-exportaciones-de-bolivia-con-mas-de-us-4-000-millones-y-un-crecimiento-del')}`,
  },
  {
    id: '1422',
    slug: 'caso-mariaca-secuestran-375000-dolares-inmueble-mayor-aparicio',
    publishedAt: '2026-11-10T20:00:00-04:00',
    date: '2026-11-10',
    titleEs: 'Caso Mariaca: la Fiscalía secuestra $us 375.000 y una caja fuerte en un inmueble del mayor Aparicio',
    titleEn: 'Mariaca case: prosecutors seize $375,000 and a safe in a property linked to Major Aparicio',
    excerptEs:
      'Tras dos allanamientos, la Policía secuestró el dinero en un inmueble del mayor de Policía Rubén Aparicio, detenido preventivamente junto al exfiscal Alberto Zeballos y el exfiscal superior Martín Irusta. La DEA apoya la investigación, según el Ministerio Público.',
    excerptEn:
      'After two raids, police seized the money at a property of Police Major Rubén Aparicio, held in preventive detention along with former prosecutor Alberto Zeballos and former superior prosecutor Martín Irusta. The DEA is supporting the investigation, according to the Attorney General\'s Office.',
    readTimeEs: '4 min',
    readTimeEn: '4 min',
    imageUrl: `${IMG}/2026-11-10/caso-mariaca-caja-fuerte-375000-aparicio.jpg`,
    imageCaption: 'Los allanamientos se realizaron con la Fiscalía de Cochabamba. Foto: Urgente.bo',
    categoryEs: 'Seguridad',
    categoryEn: 'Security',
    region: 'Bolivia',
    location: 'Cochabamba, Bolivia',
    source: 'Urgente.bo',
    sourceUrl:
      'https://www.urgente.bo/noticia/caso-mariaca-secuestran-una-caja-fuerte-y-us-375-000-en-inmueble-del-mayor-aparicio',
    contentEs: `<h1>Caso Mariaca: la Fiscalía secuestra $us 375.000 y una caja fuerte en un inmueble del mayor Aparicio</h1>
<p class="lead"><em>Dos allanamientos realizados la semana pasada permitieron a la Policía secuestrar $us 375.000 y una caja fuerte en un inmueble del mayor de Policía Rubén Aparicio, en el marco del caso Mariaca. El fiscal departamental Eddy Ordoñez informó este martes que no se descarta que se hayan retirado otras cantidades de dinero antes de la intervención.</em></p>
${figure(
  `${IMG}/2026-11-10/caso-mariaca-caja-fuerte-375000-aparicio.jpg`,
  'Operación policial en el marco del caso Mariaca',
  'Los allanamientos se hicieron en cooperación con la Fiscalía Departamental de Cochabamba. Foto: Urgente.bo'
)}
<h2 class="report-chapter">Qué se secuestró y dónde</h2>
<p>Los allanamientos se realizaron la semana pasada en cooperación de la Fiscalía Departamental de Cochabamba con las investigaciones que se efectúan en La Paz. El dinero y la caja fuerte fueron hallados en un inmueble vinculado al mayor Rubén Aparicio Villarroel, quien cumple detención preventiva.</p>
<p>"Asimismo, no se descarta que, incluso antes, en la intervención policial se hubieran retirado otras cantidades de dinero; actualmente se están desplegando los esfuerzos para esclarecer el caso", sostuvo el fiscal departamental Eddy Ordoñez este 10 de noviembre.</p>
<h2 class="report-chapter">Los investigados y los delitos</h2>
<p>El caso involucra, además del mayor Aparicio, a Alberto Zeballos, exfiscal departamental de Santa Cruz, y a Martín Daniel Irusta Flores, exfiscal superior, todos con detención preventiva. Los delitos imputados son tráfico de sustancias controladas y organización criminal, según el recordatorio de la Fiscalía difundido por Urgente.bo.</p>
<p>La causa lleva el nombre del exfiscal general Roger Mariaca, aprehendido en octubre, y se ha convertido en el frente más sensible de la crisis judicial boliviana, con ramificaciones que alcanzan al Tribunal Supremo de Justicia y al caso maletas.</p>
${quote(
  'No se descarta que en la intervención policial se hubieran retirado otras cantidades de dinero. Los esfuerzos se despliegan para esclarecer el caso.',
  'Eddy Ordoñez, fiscal departamental de Cochabamba'
)}
<h2 class="report-chapter">Cooperación internacional y nuevas medidas</h2>
<p>El mismo martes, el fiscal general del Estado, River Oviedo, confirmó que la DEA de Estados Unidos apoya la investigación del caso Mariaca-Saucedo, según reportó La Razón. Horas antes se conoció el allanamiento de la oficina de Romer Saucedo, expresidente del Tribunal Supremo de Justicia declarado en el exilio, en el edificio judicial de Sucre.</p>
<p>La Fiscalía también pidió incluir a la esposa de Mariaca en la investigación, y la Sala Plena del TSJ definía este miércoles la continuidad de Saucedo en el tribunal. El caso sigue expandiéndose por la cúpula judicial y policial del país.</p>
<h2 class="report-chapter">Qué viene</h2>
<p>La Fiscalía no precisó el origen del dinero secuestrado ni su relación exacta con la red de extorsión y narcotráfico que se investiga. El esclarecimiento dependerá de la cooperación internacional y del análisis financiero de los inmuebles y cuentas vinculados a los procesados.</p>
${source('Urgente.bo', 'https://www.urgente.bo/noticia/caso-mariaca-secuestran-una-caja-fuerte-y-us-375-000-en-inmueble-del-mayor-aparicio')}
${source('La Razón', 'https://larazon.bo/nacional/2026/11/10/la-dea-apoya-en-el-caso-mariaca-saucedo-segun-oviedo/')}`,
    contentEn: `<h1>Mariaca case: prosecutors seize $375,000 and a safe in a property linked to Major Aparicio</h1>
<p class="lead"><em>Two raids carried out last week allowed police to seize $375,000 and a safe at a property of Police Major Rubén Aparicio, as part of the Mariaca case. Departmental prosecutor Eddy Ordoñez reported on Tuesday that the withdrawal of other sums of money before the intervention cannot be ruled out.</em></p>
${figure(
  `${IMG}/2026-11-10/caso-mariaca-caja-fuerte-375000-aparicio.jpg`,
  'Police operation in the Mariaca case',
  'The raids were carried out in cooperation with the Cochabamba departmental prosecutor\'s office. Photo: Urgente.bo'
)}
<h2 class="report-chapter">What was seized and where</h2>
<p>The raids took place last week in a joint operation between the Cochabamba departmental prosecutor's office and investigators working in La Paz. The money and the safe were found at a property linked to Major Rubén Aparicio Villarroel, who is being held in preventive detention.</p>
<p>"It also cannot be ruled out that even earlier, during the police intervention, other amounts of money were withdrawn; efforts are currently being deployed to clarify the case," departmental prosecutor Eddy Ordoñez said on November 10.</p>
<h2 class="report-chapter">The suspects and the charges</h2>
<p>Besides Major Aparicio, the case involves Alberto Zeballos, former departmental prosecutor of Santa Cruz, and Martín Daniel Irusta Flores, a former superior prosecutor, all in preventive detention. The charges are trafficking in controlled substances and criminal organization, according to the prosecutor's office reminder carried by Urgente.bo.</p>
<p>The case is named after former attorney general Roger Mariaca, arrested in October, and has become the most sensitive front of Bolivia's judicial crisis, with branches reaching the Supreme Court and the suitcase case.</p>
${quote(
  'It cannot be ruled out that other amounts of money were withdrawn during the police intervention. Efforts are being deployed to clarify the case.',
  'Eddy Ordoñez, Cochabamba departmental prosecutor'
)}
<h2 class="report-chapter">International cooperation and new measures</h2>
<p>That same Tuesday, Attorney General River Oviedo confirmed that the US DEA is supporting the Mariaca-Saucedo investigation, La Razón reported. Hours earlier it became known that the office of Romer Saucedo, the exiled former chief justice of the Supreme Court, was searched at the courthouse in Sucre.</p>
<p>Prosecutors also asked to include Mariaca's wife in the investigation, and the Supreme Court's full chamber was set to decide this Wednesday on Saucedo's continuation on the bench. The case keeps expanding across the country's judicial and police leadership.</p>
<h2 class="report-chapter">What comes next</h2>
<p>Prosecutors did not specify the origin of the seized money or its exact link to the extortion and drug-trafficking network under investigation. Clarification will depend on international cooperation and on the financial analysis of the properties and accounts linked to the defendants.</p>
${source('Urgente.bo', 'https://www.urgente.bo/noticia/caso-mariaca-secuestran-una-caja-fuerte-y-us-375-000-en-inmueble-del-mayor-aparicio')}
${source('La Razón', 'https://larazon.bo/nacional/2026/11/10/la-dea-apoya-en-el-caso-mariaca-saucedo-segun-oviedo/')}`,
  },
  {
    id: '1423',
    slug: 'waskiri-sat-primer-nanosatelite-boliviano-ucb-abe',
    publishedAt: '2026-11-10T18:00:00-04:00',
    date: '2026-11-10',
    titleEs: 'Waskiri-Sat: Bolivia presenta su primer nanosatélite universitario, con lanzamiento previsto para 2028',
    titleEn: 'Waskiri-Sat: Bolivia presents its first university nanosatellite, with launch planned for 2028',
    excerptEs:
      'Estudiantes y docentes de la Universidad Católica Boliviana desarrollan el Waskiri-Sat junto a la Agencia Boliviana Espacial. Obtendrá imágenes de la Tierra para investigación ambiental y prevención de desastres, y las Naciones Unidas financiarán su lanzamiento.',
    excerptEn:
      'Students and faculty of the Bolivian Catholic University are building Waskiri-Sat with the Bolivian Space Agency. It will capture Earth images for environmental research and disaster prevention, and the United Nations will fund its launch.',
    readTimeEs: '5 min',
    readTimeEn: '5 min',
    imageUrl: `${IMG}/2026-11-10/waskiri-sat-nanosatelite-ucb-abe.jpg`,
    imageCaption: 'Presentación del proyecto Waskiri-Sat en la Estación Terrena de Amachuma. Foto: Urgente.bo / ABI',
    categoryEs: 'Ciencia',
    categoryEn: 'Science',
    region: 'Bolivia',
    location: 'La Paz, Bolivia',
    source: 'Urgente.bo / ABI',
    sourceUrl:
      'https://www.urgente.bo/noticia/estudiantes-de-la-ucb-trabajan-en-el-primer-nanosatelite-boliviano-y-planean-lanzarlo-el',
    contentEs: `<h1>Waskiri-Sat: Bolivia presenta su primer nanosatélite universitario, con lanzamiento previsto para 2028</h1>
<p class="lead"><em>El nanosatélite Waskiri-Sat, desarrollado por estudiantes y docentes de la Universidad Católica Boliviana (UCB), tiene previsto su lanzamiento para noviembre de 2028 y será operado por ingenieros de esa casa de estudios y de la Agencia Boliviana Espacial (ABE), según un reporte de la agencia estatal ABI difundido este martes.</em></p>
${figure(
  `${IMG}/2026-11-10/waskiri-sat-nanosatelite-ucb-abe.jpg`,
  'Presentación del proyecto Waskiri-Sat',
  'El proyecto fue presentado en la Estación Terrena de Amachuma, a unos 4.000 metros de altura. Foto: Urgente.bo / ABI'
)}
<h2 class="report-chapter">Un cubo de 10 centímetros con misión ambiental</h2>
<p>Waskiri-Sat tendrá una estructura cúbica de 10 centímetros por lado e integrará sistemas de alimentación eléctrica, una computadora a bordo, comunicaciones y mecanismos de orientación y control, explicó el director de la carrera de Ingeniería Mecatrónica de la UCB, Gabriel Rojas.</p>
<p>La misión permitirá obtener y procesar imágenes de la superficie terrestre para estudiar fenómenos ambientales y contribuir a la prevención de desastres naturales. El equipo desarrollará además pruebas en órbita de tecnologías de orientación y estabilización mediante actuadores magnéticos que interactúan con el campo magnético terrestre.</p>
<p>Los datos obtenidos podrán contribuir al intercambio de información para apoyar acciones de lucha contra los incendios forestales, uno de los problemas ambientales más severos de Bolivia.</p>
<h2 class="report-chapter">Financiamiento de la ONU y trabajo conjunto</h2>
<p>El director de la ABE, Alexis Andrade, informó que el proyecto universitario recibió un reconocimiento internacional de la Oficina de las Naciones Unidas, que financiará el lanzamiento del nanosatélite. El proyecto fue presentado en la Estación Terrena de Amachuma, ubicada a unos 4.000 metros sobre el nivel del mar, donde ambas instituciones suscribieron acuerdos de cooperación para el desarrollo de tecnología espacial y la formación de profesionales bolivianos.</p>
${quote(
  'Waskiri-Sat busca desarrollar y operar un nanosatélite universitario que permita obtener y procesar imágenes de la Tierra para la investigación y la prevención de desastres naturales.',
  'José Fuentes Cano, rector de la UCB'
)}
<h2 class="report-chapter">Formación y una ley espacial en ciernes</h2>
<p>El convenio establece que la ABE facilitará el acceso a su infraestructura terrestre, estaciones de seguimiento y asistencia técnica especializada, además de pasantías, talleres y trabajos dirigidos para estudiantes. Para el rector de la UCB, José Fuentes Cano, el proyecto permite que los universitarios apliquen sus conocimientos en situaciones reales y fortalezcan la investigación y el desarrollo tecnológico del país.</p>
<p>En el mismo acto, la ABE y la UCB suscribieron un segundo convenio para elaborar una ley marco de política espacial civil, iniciativa declarada prioritaria por la Asamblea Legislativa Plurinacional. La propuesta busca promover inversiones, proteger las capacidades tecnológicas nacionales y mejorar el aprovechamiento de los activos espaciales del país.</p>
<h2 class="report-chapter">De Tupac Katari a Waskiri-Sat</h2>
<p>Bolivia puso en órbita el satélite de telecomunicaciones Túpac Katari en 2013, pero el país no había desarrollado hasta ahora un programa propio de construcción satelital con participación universitaria. Waskiri-Sat, si cumple su cronograma, será el primer nanosatélite boliviano en órbita y una prueba de capacidad técnica para la UCB y la ABE.</p>
${source('Urgente.bo / ABI', 'https://www.urgente.bo/noticia/estudiantes-de-la-ucb-trabajan-en-el-primer-nanosatelite-boliviano-y-planean-lanzarlo-el')}`,
    contentEn: `<h1>Waskiri-Sat: Bolivia presents its first university nanosatellite, with launch planned for 2028</h1>
<p class="lead"><em>Waskiri-Sat, a nanosatellite developed by students and faculty of the Bolivian Catholic University (UCB), is scheduled for launch in November 2028 and will be operated by engineers from the university and the Bolivian Space Agency (ABE), according to a report by state news agency ABI released on Tuesday.</em></p>
${figure(
  `${IMG}/2026-11-10/waskiri-sat-nanosatelite-ucb-abe.jpg`,
  'Presentation of the Waskiri-Sat project',
  'The project was presented at the Amachuma ground station, some 4,000 meters above sea level. Photo: Urgente.bo / ABI'
)}
<h2 class="report-chapter">A 10-centimeter cube with an environmental mission</h2>
<p>Waskiri-Sat will have a cubic structure 10 centimeters per side and will integrate power systems, an onboard computer, communications and attitude control mechanisms, explained Gabriel Rojas, head of the UCB Mechatronics Engineering program.</p>
<p>The mission will capture and process images of the Earth's surface to study environmental phenomena and help prevent natural disasters. The team will also run in-orbit tests of attitude determination and stabilization technologies using magnetic actuators that interact with Earth's magnetic field.</p>
<p>The data obtained can contribute to information sharing in support of wildfire response, one of Bolivia's most severe environmental problems.</p>
<h2 class="report-chapter">UN funding and joint work</h2>
<p>ABE director Alexis Andrade reported that the university project received an international recognition from the United Nations Office, which will fund the nanosatellite's launch. The project was presented at the Amachuma ground station, located about 4,000 meters above sea level, where the two institutions signed cooperation agreements for the development of space technology and the training of Bolivian professionals.</p>
${quote(
  'Waskiri-Sat aims to develop and operate a university nanosatellite capable of capturing and processing Earth images for research and natural disaster prevention.',
  'José Fuentes Cano, UCB rector'
)}
<h2 class="report-chapter">Training and a space law in the making</h2>
<p>The agreement states that ABE will provide access to its ground infrastructure, tracking stations and specialized technical assistance, plus internships, workshops and supervised work for students. For UCB rector José Fuentes Cano, the project lets university students apply their knowledge to real situations and strengthens the country's research and technological development.</p>
<p>At the same event, ABE and UCB signed a second agreement to draft a framework law on civil space policy, an initiative declared a priority by the Plurinational Legislative Assembly. The proposal aims to promote investment, protect national technological capabilities and improve the use of the country's space assets.</p>
<h2 class="report-chapter">From Túpac Katari to Waskiri-Sat</h2>
<p>Bolivia put the Túpac Katari telecommunications satellite into orbit in 2013, but the country had not until now developed its own satellite construction program with university participation. If it meets its schedule, Waskiri-Sat will be the first Bolivian nanosatellite in orbit and a test of technical capability for UCB and ABE.</p>
${source('Urgente.bo / ABI', 'https://www.urgente.bo/noticia/estudiantes-de-la-ucb-trabajan-en-el-primer-nanosatelite-boliviano-y-planean-lanzarlo-el')}`,
  },
  {
    id: '1424',
    slug: 'usd-mint-propuesta-moneda-digital-ingreso-basico-bolivia',
    publishedAt: '2026-11-10T22:00:00-04:00',
    date: '2026-11-10',
    titleEs: 'USD Mint: diputados conocen una propuesta de "dólar digital" con ingreso básico universal que aún no tiene proyecto de ley',
    titleEn: 'USD Mint: lawmakers hear a "digital dollar" proposal with universal basic income that has no bill yet',
    excerptEs:
      'La diputada Sonia Siñani (PDC) socializó la iniciativa USD Mint, que plantea distribuir dólares digitales bajo un modelo de ingreso básico universal. La propuesta se presentó como insumo para un eventual proyecto de ley y abre un debate técnico y regulatorio.',
    excerptEn:
      'Representative Sonia Siñani (PDC) presented the USD Mint initiative, which proposes distributing digital dollars under a universal basic income model. The proposal was introduced as input for a possible bill and opens a technical and regulatory debate.',
    readTimeEs: '4 min',
    readTimeEn: '4 min',
    imageUrl: `${IMG}/2026-11-10/usd-mint-moneda-digital-propuesta-ley.jpg`,
    imageCaption: 'La propuesta se socializó en la Cámara de Diputados. Foto: La Razón',
    categoryEs: 'Economía',
    categoryEn: 'Economy',
    region: 'Bolivia',
    location: 'La Paz, Bolivia',
    source: 'La Razón',
    sourceUrl:
      'https://larazon.bo/economia-y-empresa/2026/11/10/socializan-propuesta-de-moneda-digital-como-base-para-proyecto-de-ley/',
    contentEs: `<h1>USD Mint: diputados conocen una propuesta de "dólar digital" con ingreso básico universal que aún no tiene proyecto de ley</h1>
<p class="lead"><em>La diputada Sonia Siñani Callisaya, del Partido Demócrata Cristiano (PDC), socializó este lunes una propuesta para implementar USD Mint, una iniciativa de moneda digital con el fin de recoger criterios que sirvan como insumo para elaborar un eventual proyecto de ley, según reportó La Razón este martes 10 de noviembre.</em></p>
${figure(
  `${IMG}/2026-11-10/usd-mint-moneda-digital-propuesta-ley.jpg`,
  'Representación de una moneda digital',
  'La propuesta plantea distribuir dólares digitales bajo el concepto de ingreso básico universal. Foto: La Razón'
)}
<h2 class="report-chapter">Qué propone USD Mint</h2>
<p>La propuesta legislativa plantea introducir un mecanismo de distribución de dólares digitales bajo el concepto de ingreso básico universal. USD Mint opera mediante una plataforma y una aplicación digital que se presenta como un supuesto "banco de beneficio público" o institución financiera, según la información difundida por la Cámara de Diputados.</p>
<p>La iniciativa se respalda en operaciones en otros países de Latinoamérica, entre ellos Ecuador y Perú, según la información que difundió la propia Cámara. El encuentro reunió a varios legisladores nacionales, quienes conocieron las características técnicas, el funcionamiento de la plataforma y los posibles beneficios que sus impulsores atribuyen a la propuesta.</p>
<h2 class="report-chapter">Las preguntas que la propuesta no responde</h2>
<p>La socialización abre un debate que va más allá del entusiasmo por la innovación: ¿con qué respaldo se emitiría cada dólar digital?, ¿quién regula la plataforma?, ¿cómo se evita el uso ilícito y qué garantías tienen los usuarios si la entidad falla? La propia La Razón señala que la presentación constituye por ahora una etapa de socialización y recopilación de insumos técnicos, mientras que la elaboración de un proyecto de ley es solo una posibilidad posterior.</p>
<p>En un país que atravesó una escasez de divisas severa y que mantiene controles cambiarios, cualquier promesa de "dólares digitales" de distribución masiva merece un escrutinio técnico especialmente riguroso: el respaldo de los activos, la auditoría de las reservas y la supervisión de la autoridad monetaria son condiciones previas, no detalles operativos.</p>
${quote(
  'La propuesta requerirá precisar las condiciones de emisión, el respaldo de los activos digitales y las garantías para los potenciales usuarios.',
  'La Razón, sobre el estado de la iniciativa'
)}
<h2 class="report-chapter">El contexto: una agenda de moneda digital más amplia</h2>
<p>La propuesta llega cuando el Banco Central de Bolivia ya explora su propia vía: el BCB propuso una moneda digital mayorista para modernizar el sistema financiero, un enfoque distinto al del ingreso básico universal que promueve USD Mint. Ambos proyectos conviven con la realidad de una economía donde el efectivo y las transferencias bancarias dominan el día a día.</p>
<p>El debate parlamentario apenas comienza. Que una propuesta así llegue a ser ley dependerá de su sustento técnico, del análisis de la autoridad monetaria y de la capacidad del Legislativo para distinguir una innovación financiera viable de un proyecto de marketing con terminología tecnológica.</p>
${source('La Razón', 'https://larazon.bo/economia-y-empresa/2026/11/10/socializan-propuesta-de-moneda-digital-como-base-para-proyecto-de-ley/')}`,
    contentEn: `<h1>USD Mint: lawmakers hear a "digital dollar" proposal with universal basic income that has no bill yet</h1>
<p class="lead"><em>Representative Sonia Siñani Callisaya of the Christian Democratic Party (PDC) presented on Monday a proposal to implement USD Mint, a digital currency initiative aimed at gathering input for a possible bill, La Razón reported on Tuesday, November 10.</em></p>
${figure(
  `${IMG}/2026-11-10/usd-mint-moneda-digital-propuesta-ley.jpg`,
  'Representation of a digital currency',
  'The proposal calls for distributing digital dollars under a universal basic income concept. Photo: La Razón'
)}
<h2 class="report-chapter">What USD Mint proposes</h2>
<p>The legislative proposal calls for introducing a mechanism to distribute digital dollars under a universal basic income concept. USD Mint operates through a platform and a digital app presented as a supposed "public benefit bank" or financial institution, according to information released by the Chamber of Deputies.</p>
<p>The initiative cites operations in other Latin American countries, including Ecuador and Peru, according to the Chamber's own information. The meeting brought together several lawmakers, who learned about the technical features, the platform's operation and the possible benefits its promoters attribute to the proposal.</p>
<h2 class="report-chapter">The questions the proposal does not answer</h2>
<p>The presentation opens a debate that goes beyond enthusiasm for innovation: what backs each digital dollar, who regulates the platform, how illicit use is prevented, and what guarantees users have if the entity fails? La Razón itself notes that, for now, the presentation is merely a stage of socialization and gathering of technical input, while drafting a bill is only a later possibility.</p>
<p>In a country that went through a severe shortage of dollars and still maintains exchange controls, any promise of mass-distributed "digital dollars" deserves especially rigorous scrutiny: backing of the assets, audits of reserves and oversight by the monetary authority are preconditions, not operational details.</p>
${quote(
  'The proposal will need to specify issuance conditions, the backing of digital assets and guarantees for potential users.',
  'La Razón, on the state of the initiative'
)}
<h2 class="report-chapter">The context: a broader digital currency agenda</h2>
<p>The proposal arrives as the Central Bank of Bolivia explores its own path: the BCB has proposed a wholesale digital currency to modernize the financial system, an approach distinct from the universal basic income model promoted by USD Mint. Both projects coexist with the reality of an economy where cash and bank transfers still dominate daily life.</p>
<p>The parliamentary debate is just beginning. Whether such a proposal becomes law will depend on its technical foundation, the monetary authority's analysis and the legislature's ability to distinguish a viable financial innovation from a marketing project dressed in technology terminology.</p>
${source('La Razón', 'https://larazon.bo/economia-y-empresa/2026/11/10/socializan-propuesta-de-moneda-digital-como-base-para-proyecto-de-ley/')}`,
  },
  {
    id: '1425',
    slug: 'nvidia-investigacion-independiente-junta-jensen-huang',
    publishedAt: '2026-11-10T17:00:00-04:00',
    date: '2026-11-10',
    titleEs: 'Nvidia abre una investigación independiente sobre su CEO Jensen Huang tras el escándalo de espionaje, y sus acciones caen',
    titleEn: 'Nvidia opens an independent investigation into CEO Jensen Huang after the spy scandal, and its shares slide',
    excerptEs:
      'La junta directiva investiga si el CEO fue objetivo de un esfuerzo de inteligencia extranjera por su relación con Alice Huang, una empresaria señalada como espía china. Trump confirmó que el FBI también indaga el caso. Las acciones cayeron más del 4% el lunes.',
    excerptEn:
      'The board is investigating whether the CEO was the target of a foreign intelligence effort over his relationship with Alice Huang, a businesswoman accused of being a Chinese spy. Trump confirmed the FBI is also probing the case. Shares fell more than 4% on Monday.',
    readTimeEs: '5 min',
    readTimeEn: '5 min',
    imageUrl: `${IMG}/2026-11-10/nvidia-investigacion-junta-huang.jpg`,
    imageCaption: 'Jensen Huang, CEO de Nvidia, frente al escándalo más severo de su gestión. Foto: BBC',
    categoryEs: 'Tecnología',
    categoryEn: 'Technology',
    region: 'US',
    location: 'Santa Clara, EE.UU.',
    source: 'BBC / Reuters',
    sourceUrl:
      'https://www.bbc.com/news/articles/c3dxw10rjn9no',
    contentEs: `<h1>Nvidia abre una investigación independiente sobre su CEO Jensen Huang tras el escándalo de espionaje, y sus acciones caen</h1>
<p class="lead"><em>Nvidia, la empresa más valiosa del mundo dedicada al hardware de la inteligencia artificial, abrió una investigación independiente tras los reportes de que su CEO y fundador, Jensen Huang, mantuvo una relación con una empresaria china sospechosa de ser espía. La junta aseguró que no hay razón para creer que la seguridad nacional o los secretos de la empresa estuvieran comprometidos, pero el caso sacude al sector tecnológico.</em></p>
${figure(
  `${IMG}/2026-11-10/nvidia-investigacion-junta-huang.jpg`,
  'Jensen Huang, CEO de Nvidia',
  'El ejecutivo admitió la relación y se comprometió a cooperar con la investigación. Foto: BBC'
)}
<h2 class="report-chapter">Qué se sabe del caso</h2>
<p>Según la BBC, funcionarios de inteligencia de Estados Unidos creen que la empresaria china Alice Huang, que tenía una relación cercana con Jensen Huang, era espía de Pekín. El escándalo estalló hace unos días y este lunes el presidente Donald Trump confirmó ante la prensa que el FBI investiga el caso, en medio de crecientes preguntas sobre los posibles riesgos de seguridad nacional.</p>
<p>En un mensaje a los empleados, Jensen Huang admitió haber sido infiel a su esposa y pidió disculpas por el daño causado a ella y a sus hijos. "No hay excusa por lo que hice. Lo siento profundamente", escribió. Sobre las alertas de seguridad, afirmó que la junta inició la investigación independiente y que él la apoya y cooperará plenamente.</p>
<h2 class="report-chapter">La junta: proteger a la empresa y al país</h2>
<p>En un comunicado separado, la junta directiva de Nvidia anunció la investigación "a la luz de los reportes recientes de que el fundador y CEO Jensen Huang ha sido objetivo de un esfuerzo de inteligencia extranjera". El directorio subrayó que "prioriza la seguridad nacional y económica de Estados Unidos, que es primordial para los intereses de Nvidia y de sus accionistas", y aunque "no tiene razón alguna para creer que la seguridad nacional o los secretos de Nvidia estuvieran comprometidos", examinará toda la información disponible.</p>
<p>El mercado reaccionó con nerviosismo: las acciones de Nvidia cerraron el lunes con una caída de más del 4%, según Reuters, en una semana en la que el sector tecnológico ya arrastraba las consecuencias de la corrección bursátil de la semana pasada.</p>
${quote(
  'Amo a nuestro país y a nuestra empresa. Estoy comprometido a proteger a Nvidia y a apoyar la seguridad nacional de Estados Unidos.',
  'Jensen Huang, CEO de Nvidia, en su comunicado'
)}
<h2 class="report-chapter">Un escándalo con consecuencias de industria</h2>
<p>Nvidia es vista como central para el desarrollo de la IA: sus GPU sostienen la mayor parte del entrenamiento de modelos en el mundo, y Huang la dirige desde hace más de 30 años. Un caso de posible espionaje en la cima de la empresa obliga a repreguntarse por los controles de seguridad en las cadenas de suministro y en los accesos a información sensible.</p>
<p>El escándalo también llegó a la Web Summit de Lisboa, donde se discutió esta semana el impacto del caso en el ecosistema tecnológico, según reportó La Razón. Para los creadores y estudios que dependen del hardware de Nvidia, el caso no cambia la disponibilidad de los productos a corto plazo, pero sí introduce un factor de incertidumbre corporativa y política que conviene seguir de cerca.</p>
${source('BBC', 'https://www.bbc.com/news/articles/c3dxw10rjn9no')}
${source('Reuters', 'https://www.reuters.com/world/asia-pacific/south-korea-says-nvidia-issues-wont-affect-contracted-gpu-supplies-2026-11-09/')}`,
    contentEn: `<h1>Nvidia opens an independent investigation into CEO Jensen Huang after the spy scandal, and its shares slide</h1>
<p class="lead"><em>Nvidia, the world's most valuable AI hardware company, has opened an independent investigation after reports that its founder and CEO, Jensen Huang, had a relationship with a businesswoman suspected of being a Chinese spy. The board said it has no reason to believe national security or company secrets were compromised, but the case is shaking the tech sector.</em></p>
${figure(
  `${IMG}/2026-11-10/nvidia-investigacion-junta-huang.jpg`,
  'Nvidia CEO Jensen Huang',
  'The executive admitted the relationship and pledged to cooperate with the investigation. Photo: BBC'
)}
<h2 class="report-chapter">What is known so far</h2>
<p>According to the BBC, US intelligence officials believe Chinese businesswoman Alice Huang, who had a close relationship with Jensen Huang, was a spy for Beijing. The scandal broke days ago, and on Monday President Donald Trump confirmed to reporters that the FBI is investigating the case, amid mounting questions over potential national security risks.</p>
<p>In a message to employees, Jensen Huang admitted he had been unfaithful to his wife and apologized for hurting her and their children. "There is no excuse for what I did. I am deeply sorry," he wrote. On the security concerns, he said the board had initiated an independent investigation, which he supports and will fully cooperate with.</p>
<h2 class="report-chapter">The board: protecting the company and the country</h2>
<p>In a separate statement, Nvidia's board announced the investigation "in light of recent reporting that founder and CEO Jensen Huang has been the target of a foreign intelligence effort." The board stressed that it "prioritizes US national and economic security, which is paramount to the interests of Nvidia and its shareholders," and while it "has no reason to believe that either national security or Nvidia secrets were compromised," it will examine all available information.</p>
<p>Markets reacted nervously: Nvidia shares closed on Monday down more than 4%, according to Reuters, in a week when the tech sector was still absorbing the fallout from last week's market correction.</p>
${quote(
  'I love our country and our company. I am committed to protecting Nvidia and supporting America\'s national security.',
  'Jensen Huang, Nvidia CEO, in his statement'
)}
<h2 class="report-chapter">A scandal with industry-wide consequences</h2>
<p>Nvidia is seen as central to AI development: its GPUs power most of the world's model training, and Huang has led the company for more than 30 years. A possible espionage case at the top forces new questions about security controls in supply chains and access to sensitive information.</p>
<p>The scandal also reached the Web Summit in Lisbon, where this week participants discussed its impact on the tech ecosystem, La Razón reported. For creators and studios that depend on Nvidia hardware, the case does not change product availability in the short term, but it does introduce corporate and political uncertainty worth watching closely.</p>
${source('BBC', 'https://www.bbc.com/news/articles/c3dxw10rjn9no')}
${source('Reuters', 'https://www.reuters.com/world/asia-pacific/south-korea-says-nvidia-issues-wont-affect-contracted-gpu-supplies-2026-11-09/')}`,
  },
  {
    id: '1426',
    slug: 'camara-bloquea-juicio-politico-hegseth-211-204',
    publishedAt: '2026-11-10T23:00:00-04:00',
    date: '2026-11-10',
    titleEs: 'La Cámara de EE.UU. bloquea el juicio político contra Hegseth por la guerra de Irán: 211 votos contra 204',
    titleEn: 'US House blocks Hegseth impeachment over the Iran war: 211-204',
    excerptEs:
      'Los republicanos frenaron el impulso del representante Thomas Massie de someter a juicio político al secretario de Defensa por hostilidades militares no autorizadas en Irán, Venezuela y Yemen. Con los demócratas controlando la Cámara desde enero, el frente podría reabrirse.',
    excerptEn:
      'Republicans stopped Representative Thomas Massie\'s push to impeach the defense secretary over unauthorized military hostilities in Iran, Venezuela and Yemen. With Democrats controlling the House from January, the front could reopen.',
    readTimeEs: '5 min',
    readTimeEn: '5 min',
    imageUrl: `${IMG}/2026-11-10/hegseth-camara-bloquea-juicio-politico.jpg`,
    imageCaption: 'Pete Hegseth, secretario de Defensa de EE.UU., enfrenta ocho artículos de impeachment. Foto: Reuters / CNN',
    categoryEs: 'Política Internacional',
    categoryEn: 'International Politics',
    region: 'US',
    location: 'Washington, EE.UU.',
    source: 'Time / CNN / Reuters',
    sourceUrl:
      'https://www.reuters.com/world/pentagon-chief-hegseth-calls-moves-impeach-him-farce-that-will-fail-2026-11-10/',
    contentEs: `<h1>La Cámara de EE.UU. bloquea el juicio político contra Hegseth por la guerra de Irán: 211 votos contra 204</h1>
<p class="lead"><em>La Cámara de Representantes de Estados Unidos, de mayoría republicana, frenó este martes por 211 votos contra 204 el impulso para someter a juicio político al secretario de Defensa, Pete Hegseth, por las hostilidades militares no autorizadas en Irán, Venezuela y Yemen. La votación envió los ocho artículos de impeachment a un comité, aplazando sin enterrar el enfrentamiento político.</em></p>
${figure(
  `${IMG}/2026-11-10/hegseth-camara-bloquea-juicio-politico.jpg`,
  'Pete Hegseth, secretario de Defensa de Estados Unidos',
  'Hegseth calificó el impulso de "congresista resentido y derrotado". Foto: Reuters / CNN'
)}
<h2 class="report-chapter">Los ocho artículos de Massie</h2>
<p>El esfuerzo fue liderado por el representante republicano Thomas Massie, de Kentucky, que presentó el lunes ocho artículos de impeachment que acusan a Hegseth de violar la Constitución, conducir operaciones militares no autorizadas y abusar de los poderes de su cargo. "No lo acusamos de ser malo en su trabajo", dijo Massie. "El argumento aquí es que rompió leyes y violó la Constitución", afirmó, según recogió Time.</p>
<p>La votación del martes impidió que la Cámara considerara los artículos y los derivó a un estudio de comité, una salida procedural que otorga un respiro temporal al secretario de Defensa. CNN destacó que la votación fue una "sorprendente muestra de unidad" de un partido golpeado tras la derrota en las elecciones legislativas de la semana pasada.</p>
${quote(
  'No lo acusamos de ser malo en su trabajo. El argumento aquí es que rompió leyes y violó la Constitución.',
  'Thomas Massie, representante republicano por Kentucky'
)}
<h2 class="report-chapter">Hegseth y Trump: resistentes y ofensivos</h2>
<p>Hegseth rechazó las acusaciones como políticamente motivadas y afirmó que no tiene intención de renunciar. En una conferencia de prensa el martes por la mañana, calificó el esfuerzo de impeachment como obra de un "congresista resentido y derrotado". Su portavoz, Sean Parnell, sostuvo que el Pentágono actuó conforme a la ley y que Hegseth pretende permanecer en el cargo hasta el final del mandato de Trump.</p>
<p>El presidente Donald Trump respaldó al secretario incluso después de la derrota republicana en las midterms. En una publicación instó a los legisladores a defender a Hegseth —"Congreso, ¡respeten a Pete!"— y llamó a Massie "perdedor de primera clase", según CNN.</p>
<h2 class="report-chapter">Enero de 2027: el frente puede reabrirse</h2>
<p>El escenario político cambia radicalmente en enero: los demócratas ganaron el control de ambas cámaras en las elecciones y asumen el 3 de enero de 2027. Con mayoría simple en la Cámara podrían aprobar artículos de impeachment sin apoyo republicano, lo que convertiría a Hegseth en el tercer secretario de gabinete en la historia de EE.UU. sometido a juicio político, tras William Belknap en 1876 y Alejandro Mayorkas en 2024, recuerda Time.</p>
<p>La condena en el Senado requeriría una mayoría de dos tercios, pero el juicio político en sí forzaría un examen público de la conducción de la guerra de Irán, que se ha convertido en la principal carga política de la Casa Blanca. El voto del martes, lejos de cerrar el episodio, deja la decisión en manos del próximo Congreso.</p>
${source('Time', 'https://time.com/article/2026/11/10/hegseth-impeachment-procedural-vote-house/')}
${source('Reuters', 'https://www.reuters.com/world/pentagon-chief-hegseth-calls-moves-impeach-him-farce-that-will-fail-2026-11-10/')}`,
    contentEn: `<h1>US House blocks Hegseth impeachment over the Iran war: 211-204</h1>
<p class="lead"><em>The Republican-led US House of Representatives on Tuesday stopped, 211-204, a push to impeach Defense Secretary Pete Hegseth over unauthorized military hostilities in Iran, Venezuela and Yemen. The vote sent the eight impeachment articles to a committee, postponing rather than burying the political showdown.</em></p>
${figure(
  `${IMG}/2026-11-10/hegseth-camara-bloquea-juicio-politico.jpg`,
  'US Defense Secretary Pete Hegseth',
  'Hegseth dismissed the effort as the work of a "disgruntled and defeated congressman." Photo: Reuters / CNN'
)}
<h2 class="report-chapter">Massie's eight articles</h2>
<p>The effort was led by Republican Representative Thomas Massie of Kentucky, who introduced eight articles of impeachment on Monday accusing Hegseth of violating the Constitution, conducting unauthorized military operations and abusing the powers of his office. "We're not indicting him for being bad at his job," Massie said. "The argument here is that he's broken laws and he's violated the Constitution," Time reported.</p>
<p>Tuesday's vote prevented the House from considering the articles and referred them to committee study, a procedural outcome that buys the defense secretary a temporary reprieve. CNN noted the vote was a "surprising show of unity" from a party battered after last week's midterm drubbing.</p>
${quote(
  'We\'re not indicting him for being bad at his job. The argument here is that he\'s broken laws and he\'s violated the Constitution.',
  'Thomas Massie, Republican representative from Kentucky'
)}
<h2 class="report-chapter">Hegseth and Trump: defiant and on the offensive</h2>
<p>Hegseth rejected the allegations as politically motivated and said he has no intention of resigning. At a Tuesday morning news conference, he dismissed the impeachment push as the work of a "disgruntled and defeated congressman." His spokesman, Sean Parnell, said the Pentagon had acted lawfully and that Hegseth intends to remain in office through the end of Trump's term.</p>
<p>President Donald Trump stood firmly behind the secretary even after the Republican midterm losses. In a social media post, he urged lawmakers to defend Hegseth — "Congress, stand up for Pete!!!" — and called Massie a "major loser," according to CNN.</p>
<h2 class="report-chapter">January 2027: the front may reopen</h2>
<p>The political landscape changes dramatically in January: Democrats won control of both chambers in the elections and take office on January 3, 2027. With a simple majority in the House, they could approve impeachment articles without Republican support, potentially making Hegseth the third Cabinet secretary in US history to be impeached, after William Belknap in 1876 and Alejandro Mayorkas in 2024, Time notes.</p>
<p>Senate conviction would require a two-thirds majority, but the impeachment itself would force a public examination of the conduct of the Iran war, which has become the White House's biggest political liability. Far from closing the episode, Tuesday's vote hands the decision to the next Congress.</p>
${source('Time', 'https://time.com/article/2026/11/10/hegseth-impeachment-procedural-vote-house/')}
${source('Reuters', 'https://www.reuters.com/world/pentagon-chief-hegseth-calls-moves-impeach-him-farce-that-will-fail-2026-11-10/')}`,
  },
  {
    id: '1427',
    slug: 'rusia-ucrania-conversaciones-abu-dabi-primer-dia',
    publishedAt: '2026-11-11T08:00:00-04:00',
    date: '2026-11-11',
    titleEs: 'Rusia y Ucrania sostienen en Abu Dabi sus primeras conversaciones mediadas por EE.UU. en nueve meses',
    titleEn: 'Russia and Ukraine hold first US-mediated talks in nine months in Abu Dhabi',
    excerptEs:
      'Las delegaciones conversaron cerca de cuatro horas este martes, con Kushner y Witkoff por Washington. Zelenski calificó la jornada de "constructiva" y Rubio de "muy productiva". La segunda ronda se inicia este miércoles con Europa en la sala.',
    excerptEn:
      'The delegations talked for nearly four hours on Tuesday, with Kushner and Witkoff for Washington. Zelenskyy called the session "constructive" and Rubio "very productive." The second round begins Wednesday with Europe in the room.',
    readTimeEs: '5 min',
    readTimeEn: '5 min',
    imageUrl: `${IMG}/2026-11-10/rusia-ucrania-abu-dabi-conversaciones.jpg`,
    imageCaption: 'Las delegaciones rusa y ucraniana negociaron casi cuatro horas en Abu Dabi. Foto: AFP / Al Jazeera',
    categoryEs: 'Política Internacional',
    categoryEn: 'International Politics',
    region: 'International',
    location: 'Abu Dabi, Emiratos Árabes Unidos',
    source: 'NPR / Al Jazeera',
    sourceUrl:
      'https://www.aljazeera.com/news/2026/11/10/russia-ukraine-and-us-to-meet-as-zelenskyy-claims-battlefield-successes',
    contentEs: `<h1>Rusia y Ucrania sostienen en Abu Dabi sus primeras conversaciones mediadas por EE.UU. en nueve meses</h1>
<p class="lead"><em>Rusia y Ucrania celebraron este martes sus primeras conversaciones directas mediadas por Estados Unidos en nueve meses para buscar el fin de una guerra que lleva más de cuatro años y medio. La sesión duró cerca de cuatro horas y una segunda ronda está prevista para este miércoles en la capital de Emiratos Árabes Unidos.</em></p>
${figure(
  `${IMG}/2026-11-10/rusia-ucrania-abu-dabi-conversaciones.jpg`,
  'Delegaciones de Rusia y Ucrania en las conversaciones de Abu Dabi',
  'La delegación rusa estuvo encabezada por el ayudante del Kremlin Vladímir Medinski. Foto: AFP / Al Jazeera'
)}
<h2 class="report-chapter">Quién se sentó a la mesa</h2>
<p>Por Rusia participaron el ayudante del Kremlin Vladímir Medinski, el director del servicio de inteligencia militar GRU, Igor Kostyukov, y el general Alexander Zorin. La delegación ucraniana fue encabezada por Rustem Umerov, jefe del servicio de inteligencia exterior de Ucrania, según las imágenes de las reuniones difundidas por Al Jazeera.</p>
<p>Estados Unidos estuvo representado por Jared Kushner, yerno del presidente Donald Trump, y por el enviado especial Steve Witkoff. Ni el secretario de Estado Marco Rubio ni el presidente Volodímir Zelenski viajaron a Abu Dabi para la primera jornada.</p>
<h2 class="report-chapter">Qué se conversó</h2>
<p>Zelenski, que informó del avance desde Copenhague, calificó la sesión de "constructiva y bastante sustancial" y explicó que la conversación se concentró en temas humanitarios —intercambios de prisioneros, devolución de civiles retenidos y de niños deportados— y en las garantías de seguridad, reportó NPR.</p>
<p>Rubio, desde París donde participa en la reunión del G7, calificó las conversaciones de "muy productivas", aunque pidió paciencia: "Hay mucho trabajo por hacer. No es algo que esté a punto de resolverse en las próximas 24 horas", dijo, según NPR. Kushner afirmó en sus palabras de apertura que el objetivo es "crear un nuevo marco y un nuevo entendimiento" que conduzca "a décadas de paz, si no a siglos".</p>
${quote(
  'Tomamos lo que funcionó, identificamos lo que falló, por qué estamos en esta posición, y creamos con suerte un nuevo marco que nos lleve a décadas, si no siglos, de paz.',
  'Jared Kushner, representante de EE.UU. en las conversaciones'
)}
<h2 class="report-chapter">Expectativas moderadas</h2>
<p>NPR recuerda que las esperanzas se temperan por la ausencia de avances significativos en las tres rondas de conversaciones de comienzos de este año. El contexto, sin embargo, cambió: el resultado de las elecciones legislativas de EE.UU. y la presión creciente sobre la economía de guerra rusa modifican los incentivos de ambas partes, mientras Moscú intensifica sus ataques contra la red eléctrica ucraniana de cara al invierno.</p>
<p>Este miércoles continúa la segunda ronda, esta vez con la participación de representantes europeos pese a los reclamos de Moscú, según reportó France 24. El deshielo del diálogo es un paso, pero la distancia entre las posiciones de fondo —territorio, seguridad y adhesión de Ucrania a Occidente— sigue siendo enorme.</p>
${source('NPR', 'https://www.npr.org/2026/11/10/g-s1-152773/russia-ukraine-war-talks')}
${source('Al Jazeera', 'https://www.aljazeera.com/news/2026/11/10/russia-ukraine-and-us-to-meet-as-zelenskyy-claims-battlefield-successes')}`,
    contentEn: `<h1>Russia and Ukraine hold first US-mediated talks in nine months in Abu Dhabi</h1>
<p class="lead"><em>Russia and Ukraine held their first direct US-mediated talks in nine months on Tuesday, seeking to end a war now in its fourth and a half year. The session lasted nearly four hours, and a second round is scheduled for Wednesday in the capital of the United Arab Emirates.</em></p>
${figure(
  `${IMG}/2026-11-10/rusia-ucrania-abu-dabi-conversaciones.jpg`,
  'Russian and Ukrainian delegations at the Abu Dhabi talks',
  'The Russian delegation was led by Kremlin aide Vladimir Medinsky. Photo: AFP / Al Jazeera'
)}
<h2 class="report-chapter">Who sat at the table</h2>
<p>Russia was represented by Kremlin aide Vladimir Medinsky, military intelligence (GRU) director Igor Kostyukov and General Alexander Zorin. The Ukrainian delegation was headed by Rustem Umerov, chief of Ukraine's foreign intelligence service, according to images of the meetings carried by Al Jazeera.</p>
<p>The United States was represented by Jared Kushner, President Donald Trump's son-in-law, and special envoy Steve Witkoff. Neither Secretary of State Marco Rubio nor President Volodymyr Zelenskyy traveled to Abu Dhabi for the first day.</p>
<h2 class="report-chapter">What was discussed</h2>
<p>Zelenskyy, speaking from Copenhagen, called the session "constructive and quite substantive" and said the conversation focused on humanitarian issues — prisoner exchanges, the return of detained civilians and deported children — and on security guarantees, NPR reported.</p>
<p>Rubio, in Paris for the G7 meeting, described the talks as "very productive" while urging patience: "There's a lot of work to be done. It's not like something that's on the verge of being solved in the next 24 hours," he said, according to NPR. Kushner said in his opening remarks that the goal is to "create a new framework and a new understanding" leading "to decades, if not centuries, of peace."</p>
${quote(
  'We take what\'s worked, we identify what\'s failed, why we\'re in this position, and hopefully create a new framework that leads us for decades, if not centuries, of peace.',
  'Jared Kushner, US representative at the talks'
)}
<h2 class="report-chapter">Tempered expectations</h2>
<p>NPR notes that hopes are tempered by the absence of significant breakthroughs in the three earlier rounds of talks at the start of this year. The context has changed, however: the outcome of the US midterm elections and mounting pressure on Russia's war economy are shifting both sides' incentives, while Moscow ramps up strikes on Ukraine's power grid as winter sets in.</p>
<p>The second round continues this Wednesday, this time with European representatives joining despite Moscow's objections, France 24 reported. The thaw in dialogue is a step, but the gap between the core positions — territory, security and Ukraine's Western alignment — remains enormous.</p>
${source('NPR', 'https://www.npr.org/2026/11/10/g-s1-152773/russia-ukraine-war-talks')}
${source('Al Jazeera', 'https://www.aljazeera.com/news/2026/11/10/russia-ukraine-and-us-to-meet-as-zelenskyy-claims-battlefield-successes')}`,
  },
  {
    id: '1428',
    slug: 'novaya-gazeta-cierra-tras-mas-de-30-anos',
    publishedAt: '2026-11-11T07:00:00-04:00',
    date: '2026-11-11',
    titleEs: 'Novaya Gazeta cierra tras más de 30 años: las luces se apagan en el último gran periódico independiente de Rusia',
    titleEn: 'Novaya Gazeta closes after more than 30 years: the lights go out at Russia\'s last great independent newspaper',
    excerptEs:
      'El diario cerró sus oficinas de Moscú el lunes tras que el propietario del edificio no renovara el arriendo y los bancos dejaran de procesar sus pagos. Etiquetado "agente extranjero", el medio del Nobel Dmitri Murátov terminó sus operaciones tras décadas de presión estatal.',
    excerptEn:
      'The newspaper closed its Moscow offices on Monday after the building\'s owner refused to renew the lease and banks stopped processing its payments. Labeled a "foreign agent," the paper of Nobel laureate Dmitri Muratov ended operations after decades of state pressure.',
    readTimeEs: '5 min',
    readTimeEn: '5 min',
    imageUrl: `${IMG}/2026-11-10/novaya-gazeta-cierra.jpg`,
    imageCaption: 'La sede de Novaya Gazeta en el callejón Potápovski, Moscú, de noche. Foto: Акутагава / Wikimedia Commons (CC0)',
    categoryEs: 'Mundo',
    categoryEn: 'World',
    region: 'International',
    location: 'Moscú, Rusia',
    source: 'NPR / Reuters',
    sourceUrl:
      'https://www.npr.org/2026/11/10/nx-s1-6034460/russias-most-famous-independent-newspaper-has-shut-down-after-more-than-30-years',
    contentEs: `<h1>Novaya Gazeta cierra tras más de 30 años: las luces se apagan en el último gran periódico independiente de Rusia</h1>
<p class="lead"><em>Novaya Gazeta, el periódico independiente más célebre de Rusia, cerró este lunes sus operaciones después de más de tres décadas de periodismo de investigación, tras lo que describió como una campaña de presión estatal que hizo imposible continuar. Sus periodistas apagaron las luces de la redacción de Moscú ante testigos de medios internacionales.</em></p>
${figure(
  `${IMG}/2026-11-10/novaya-gazeta-cierra.jpg`,
  'Edificio de la sede de Novaya Gazeta en el callejón Potápovski, Moscú',
  'El periódico cerró tras más de 30 años de reporteos sobre corrupción y derechos humanos. Foto: Акутагава / Wikimedia Commons (CC0)'
)}
<h2 class="report-chapter">Una muerte en tres actos</h2>
<p>Según reportaron NPR y The New York Times, el cierre se concretó cuando el propietario del edificio se negó a renovar el arriendo de las oficinas del callejón Potápovski y los bancos anunciaron que dejarían de procesar los pagos del medio. A eso se suma el etiquetamiento del periódico como "agente extranjero" por parte de las autoridades rusas y una orden de desalojo de su sala de redacción, como detalla DW.</p>
<p>La cadena NBC presenció el cierre el lunes y documentó la última jornada del diario. El propio medio lo anunció antes: la decisión de terminar las operaciones se tomó "por la presión de las autoridades", según su comunicado.</p>
<h2 class="report-chapter">Una redacción con historia</h2>
<p>Novaya Gazeta nació en 1993 con periodistas provenientes de Komsomolskaya Pravda y se convirtió en el bastión del periodismo de investigación ruso: corrupción, abusos militares, Chechenia, derechos humanos. Entre sus firmas estuvo Ana Politkovskaya, asesinada en 2006. Su director emérito, Dmitri Murátov, recibió el Premio Nobel de la Paz en 2021 por su defensa de la libertad de expresión.</p>
<p>El diario ya había suspendido su publicación en Rusia tras la invasión de Ucrania en 2022 y continuó operando desde el exilio con ediciones europeas. El cierre de esta semana termina, al menos simbólicamente, con la existencia física del periódico dentro de Rusia.</p>
${quote(
  'Ningún periódico debería tener que apagar las luces para poder contar la verdad.',
  'Reflexión de la redacción de Novaya Gazeta al cerrar'
)}
<h2 class="report-chapter">Qué significa para el periodismo</h2>
<p>Para quienes trabajamos en medios y comunicación, el caso Novaya Gazeta es un recordatorio incómodo: la independencia editorial no solo se destruye con censuras espectaculares, sino con mecanismos administrativos —arriendos, cuentas bancarias, etiquetas legales— que estrangulan la operación cotidiana de una redacción sin necesidad de un acto público.</p>
<p>La presión sobre la prensa rusa no es un fenómeno aislado: organizaciones internacionales de periodistas documentan desde hace años el aumento de restricciones, encarcelamientos y cierres de medios en varios países. La desaparición de Novaya Gazeta deja sin su principal referencia al periodismo de investigación ruso y redistribuye la responsabilidad de contar esa historia a los medios exiliados y a las corresponsalías internacionales.</p>
${source('NPR', 'https://www.npr.org/2026/11/10/nx-s1-6034460/russias-most-famous-independent-newspaper-has-shut-down-after-more-than-30-years')}
${source('Reuters', 'https://www.reuters.com/world/europe/lights-go-out-russias-novaya-gazeta-independent-newspaper-known-its-fearless-2026-11-09/')}`,
    contentEn: `<h1>Novaya Gazeta closes after more than 30 years: the lights go out at Russia's last great independent newspaper</h1>
<p class="lead"><em>Novaya Gazeta, Russia's most celebrated independent newspaper, ended operations on Monday after more than three decades of investigative journalism, citing what it described as a state pressure campaign that made continuing impossible. Its journalists turned off the lights at the Moscow newsroom before witnesses from international media.</em></p>
${figure(
  `${IMG}/2026-11-10/novaya-gazeta-cierra.jpg`,
  'Building housing the Novaya Gazeta offices on Potapovsky Lane, Moscow',
  'The paper closed after more than 30 years of reporting on corruption and human rights. Photo: Акутагава / Wikimedia Commons (CC0)'
)}
<h2 class="report-chapter">A death in three acts</h2>
<p>As NPR and The New York Times reported, the closure was sealed when the building's owner refused to renew the lease on the Potapovsky Lane offices and banks said they would stop processing the paper's payments. Add to that the paper's designation as a "foreign agent" by Russian authorities and an eviction order for its newsroom, as DW details.</p>
<p>NBC News witnessed the closure on Monday and documented the paper's final day. The paper had announced the decision itself: operations were ending "due to pressure from the authorities," according to its statement.</p>
<h2 class="report-chapter">A newsroom with history</h2>
<p>Novaya Gazeta was founded in 1993 by journalists from Komsomolskaya Pravda and became the bastion of Russian investigative journalism: corruption, military abuses, Chechnya, human rights. Among its bylines was Anna Politkovskaya, assassinated in 2006. Its emeritus editor, Dmitri Muratov, was awarded the 2021 Nobel Peace Prize for defending freedom of expression.</p>
<p>The paper had already suspended print publication in Russia after the 2022 invasion of Ukraine and kept operating from exile with European editions. This week's closure ends, at least symbolically, the paper's physical existence inside Russia.</p>
${quote(
  'No newspaper should have to turn off the lights in order to tell the truth.',
  'Reflection from the Novaya Gazeta newsroom upon closing'
)}
<h2 class="report-chapter">What it means for journalism</h2>
<p>For those of us working in media and communication, the Novaya Gazeta case is an uncomfortable reminder: editorial independence is destroyed not only by spectacular censorship but by administrative mechanisms — leases, bank accounts, legal labels — that strangle a newsroom's daily operation without requiring a single public act.</p>
<p>The pressure on the Russian press is not an isolated phenomenon: international journalism organizations have documented for years the growth of restrictions, imprisonments and outlet closures across several countries. Novaya Gazeta's disappearance leaves Russian investigative journalism without its main reference and shifts the responsibility for telling that story to exiled outlets and international correspondents.</p>
${source('NPR', 'https://www.npr.org/2026/11/10/nx-s1-6034460/russias-most-famous-independent-newspaper-has-shut-down-after-more-than-30-years')}
${source('Reuters', 'https://www.reuters.com/world/europe/lights-go-out-russias-novaya-gazeta-independent-newspaper-known-its-fearless-2026-11-09/')}`,
  },
  {
    id: '1429',
    slug: 'oms-lanza-movimiento-juntos-ciencia-y-salud',
    publishedAt: '2026-11-11T09:00:00-04:00',
    date: '2026-11-11',
    titleEs: 'La OMS lanza "Juntos por la Ciencia y la Salud", un movimiento global con más de 240 organizaciones contra la desinformación',
    titleEn: 'WHO launches "Together for Science and Health", a global movement of 240+ organizations against misinformation',
    excerptEs:
      'La iniciativa, liderada por Tedros Adhanom Ghebreyesus y Emmanuel Macron, busca acercar la ciencia a la sociedad, fortalecer el uso de evidencia en políticas de salud y mejorar su comunicación, en un contexto de rápido cambio tecnológico e irrupción de la IA.',
    excerptEn:
      'The initiative, led by Tedros Adhanom Ghebreyesus and Emmanuel Macron, aims to bring science closer to society, strengthen the use of evidence in health policy and improve its communication, amid rapid technological change and the rise of AI.',
    readTimeEs: '4 min',
    readTimeEn: '4 min',
    imageUrl: `${IMG}/2026-11-10/oms-together-for-science-and-health.jpg`,
    imageCaption: 'Identidad oficial del movimiento "Together for Science and Health". Imagen: OMS',
    categoryEs: 'Salud',
    categoryEn: 'Health',
    region: 'International',
    location: 'Ginebra, Suiza',
    source: 'OMS',
    sourceUrl:
      'https://www.who.int/news/item/10-11-2026-who-launches-together-for-science-and-health-movement-to-strengthen-trust-worldwide',
    contentEs: `<h1>La OMS lanza "Juntos por la Ciencia y la Salud", un movimiento global con más de 240 organizaciones contra la desinformación</h1>
<p class="lead"><em>La Organización Mundial de la Salud lanzó este martes 10 de noviembre el movimiento "Together for Science and Health" (Juntos por la Ciencia y la Salud), que reúne a más de 240 organizaciones detrás de un compromiso compartido: fortalecer la confianza en la ciencia y aprovecharla para mejorar la salud y el desarrollo, según la propia OMS.</em></p>
${figure(
  `${IMG}/2026-11-10/oms-together-for-science-and-health.jpg`,
  'Identidad gráfica del movimiento Together for Science and Health',
  'El lanzamiento incluyó 12 eventos en distintos países y regiones. Imagen: OMS'
)}
<h2 class="report-chapter">Quién encabeza el movimiento</h2>
<p>El lanzamiento está liderado por el director general de la OMS, Tedros Adhanom Ghebreyesus, y por el presidente de Francia, Emmanuel Macron, con 12 eventos en distintos países y regiones para marcar la ocasión. La iniciativa está además asociada a la Plataforma para la Paz y la Franqueza (PPF), una de las plataformas insignia de la diplomacia multilateral francesa.</p>
<p>"La ciencia es una de las herramientas más poderosas de la humanidad y siempre ha sido el motor de una mejor salud", dijo Tedros. "La ciencia ha permitido que las personas vivan más tiempo y con mejor salud mediante vacunas, medicamentos, prevención de enfermedades y respuesta a brotes", añadió el director general.</p>
<h2 class="report-chapter">Las tres prioridades</h2>
<p>El movimiento impulsará acción colectiva en tres prioridades: acercar la ciencia a la sociedad; fortalecer el uso de evidencia en la formulación de políticas de salud; y mejorar cómo se comunica y se discute la ciencia. Las organizaciones participantes compartirán enfoques efectivos, recursos y lecciones, y construirán colaboraciones prácticas que refuercen la confianza.</p>
<p>La OMS subrayó que el cambio tecnológico acelerado y la inteligencia artificial están transformando la forma en que las personas acceden, interpretan y comparten información científica y sanitaria. En ese escenario, el movimiento busca ayudar a la gente a relacionarse con la evidencia y a usarla con confianza.</p>
${quote(
  'Ninguna institución, país o comunidad puede construir y sostener la confianza sola. El movimiento ofrece un espacio de diálogo y colaboración, no de polarización.',
  'Sylvie Briand, científica jefe de la OMS'
)}
<h2 class="report-chapter">Por qué importa para comunicadores</h2>
<p>Para quienes producimos contenido audiovisual y periodístico, el movimiento puede leerse como una agenda de trabajo: verificar fuentes, explicar el método detrás de cada dato y no tratar el consenso científico como una opinión más. La OMS dejó abierta la invitación a que organizaciones e instituciones de todo el mundo se sumen al movimiento y aporten sus redes y experiencia.</p>
<p>El lanzamiento se asocia además al lema del Día Mundial de la Salud 2026, "Juntos por la salud. De pie con la ciencia", que marca una campaña de un año para destacar la ciencia como base de la protección de la salud mundial. La prueba real será si el movimiento traduce sus 240 adherentes en cambios concretos de política y comunicación.</p>
${source('OMS', 'https://www.who.int/news/item/10-11-2026-who-launches-together-for-science-and-health-movement-to-strengthen-trust-worldwide')}`,
    contentEn: `<h1>WHO launches "Together for Science and Health", a global movement of 240+ organizations against misinformation</h1>
<p class="lead"><em>The World Health Organization launched the "Together for Science and Health" movement on Tuesday, November 10, uniting more than 240 organizations behind a shared commitment: strengthening trust in science and harnessing it to improve health and development, according to WHO itself.</em></p>
${figure(
  `${IMG}/2026-11-10/oms-together-for-science-and-health.jpg`,
  'Branding of the Together for Science and Health movement',
  'The launch included 12 events across countries and regions. Image: WHO'
)}
<h2 class="report-chapter">Who leads the movement</h2>
<p>The launch is led by WHO Director-General Tedros Adhanom Ghebreyesus and French President Emmanuel Macron, with 12 events across countries and regions to mark the occasion. The initiative is also associated with the Paris Peace Forum (PPF), one of France's flagship platforms for multilateral diplomacy.</p>
<p>"Science is one of humanity's most powerful tools, and has always been the engine of better health," Tedros said. "Science has enabled people to live longer, healthier lives through vaccines, medicines, disease prevention and outbreak response," the director-general added.</p>
<h2 class="report-chapter">The three priorities</h2>
<p>The movement will drive collective action around three priorities: bringing science and society closer together; strengthening the use of evidence in health policy-making; and improving how science is communicated and discussed. Participating organizations will share effective approaches, resources and lessons, and build practical collaborations that strengthen trust.</p>
<p>WHO stressed that rapid technological change and artificial intelligence are transforming how people access, interpret and share scientific and health information. In that scenario, the movement aims to help people engage with evidence and use it with confidence.</p>
${quote(
  'No institution, country or community can build and sustain trust alone. The movement offers a space for dialogue and collaboration, not polarization.',
  'Sylvie Briand, WHO Chief Scientist'
)}
<h2 class="report-chapter">Why it matters for communicators</h2>
<p>For those of us producing audiovisual and journalistic content, the movement can be read as a work agenda: verify sources, explain the method behind every figure and never treat scientific consensus as just another opinion. WHO left the invitation open for organizations and institutions worldwide to join the movement and contribute their networks and expertise.</p>
<p>The launch is also tied to the theme of World Health Day 2026, "Together for health. Stand with science," which marks a year-long campaign highlighting science as the foundation for protecting health worldwide. The real test will be whether the movement turns its 240 adherents into concrete changes in policy and communication.</p>
${source('WHO', 'https://www.who.int/news/item/10-11-2026-who-launches-together-for-science-and-health-movement-to-strengthen-trust-worldwide')}`,
  },
];
