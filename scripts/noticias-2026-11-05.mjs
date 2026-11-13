/**
 * Noticias verificadas del 5 y 6 de noviembre de 2026 (IDs 1400-1409).
 * Fuentes: La Razón, eju.tv, Visión 360, Bolivia.com/EFE, CNBC y Reuters.
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
    id: '1400',
    slug: 'inflacion-bolivia-603-por-ciento-octubre-2026',
    publishedAt: '2026-11-05T22:00:00-04:00',
    date: '2026-11-05',
    titleEs: 'La inflación acumulada en Bolivia llega al 6,03% y octubre cierra con un alza mensual de 2,07%',
    titleEn: "Bolivia's inflation reaches 6.03% as October prices climb 2.07% in a single month",
    excerptEs:
      'El INE reportó que los precios acumulan un alza de 6,03% entre enero y octubre. Solo en octubre el IPC subió 2,07%, impulsado por el transporte público (+14,55%) y alimentos como la cebolla (+21,61%) y la papa (+16,12%). La inflación a doce meses llegó a 7,08%.',
    excerptEn:
      'The INE reported prices are up 6.03% between January and October. In October alone the CPI rose 2.07%, driven by public transport (+14.55%) and food such as onions (+21.61%) and potatoes (+16.12%). Twelve-month inflation reached 7.08%.',
    readTimeEs: '4 min',
    readTimeEn: '4 min',
    imageUrl: `${IMG}/2026-11-05/inflacion-bolivia-603-octubre-2026.jpg`,
    imageCaption: 'Venta de alimentos de la canasta familiar en el mercado Rodríguez, La Paz. Foto: La Razón',
    categoryEs: 'Economía',
    categoryEn: 'Economy',
    region: 'Bolivia',
    location: 'La Paz, Bolivia',
    source: 'La Razón / INE',
    sourceUrl:
      'https://larazon.bo/economia-y-empresa/2026/11/05/la-inflacion-acumulada-llega-al-603-hasta-octubre-segun-el-ine/',
    contentEs: `<h1>La inflación acumulada en Bolivia llega al 6,03% y octubre cierra con un alza mensual de 2,07%</h1>
<p class="lead"><em>El Instituto Nacional de Estadística (INE) informó este jueves 5 de noviembre que la inflación acumulada de Bolivia entre enero y octubre de 2026 alcanzó el 6,03%. Solo en octubre, el Índice de Precios al Consumidor (IPC) subió 2,07% respecto a septiembre, uno de los registros mensuales más altos del año. La variación a doce meses llegó al 7,08%.</em></p>
${figure(
  `${IMG}/2026-11-05/inflacion-bolivia-603-octubre-2026.jpg`,
  'Puesto de venta de alimentos en el mercado Rodríguez de La Paz',
  'La canasta familiar volvió a ser el centro de la presión inflacionaria en octubre. Foto: La Razón'
)}
<h2 class="report-chapter">Transporte y alimentos explican el salto</h2>
<p>El rubro que más incidió fue el transporte. La tarifa del servicio en micro, bus o colectivo subió 14,55% en octubre, según los datos del INE. Por divisiones, transporte registró un incremento de 3,50%, alimentos y bebidas no alcohólicas 3,39%, y alimentos y bebidas consumidos fuera del hogar 1,43%.</p>
<p>Entre los alimentos, la cebolla aumentó 21,61%, la papa 16,12% y el tomate 12,56%. El almuerzo subió 1,76% y la carne de res sin hueso 1,37%. Son los productos que más contribuyeron al resultado mensual de 2,07%.</p>
<p>El comportamiento no fue uniforme: el informe también registra bajas en quesos, arveja verde, vainita, achojcha, cepillo de dientes y cocina a gas.</p>
<h2 class="report-chapter">Un año marcado por los bloqueos</h2>
<p>Octubre se ubicó como el segundo mes con mayor inflación de 2026, por debajo de junio (2,15%) y por encima de mayo (2,13%). La Razón recuerda que ambos meses estuvieron marcados por los efectos de los 53 días de bloqueo, que alteraron el abastecimiento y el costo de distintos productos y servicios.</p>
<p>La inflación acumulada es uno de los indicadores que definirán el cierre económico de la gestión. El dato llega además en una semana en la que los nueve gobernadores rechazaron el 1% de coparticipación propuesto por el Gobierno y en la que el Ejecutivo ratificó su previsión de que 2027 sea el año del despegue.</p>
${quote(
  'El incremento de los precios continúa presionando el costo de los bienes y servicios que forman parte del consumo de los hogares bolivianos.',
  'Reporte del INE citado por La Razón'
)}
<h2 class="report-chapter">Qué mirar en los próximos meses</h2>
<p>El dato de octubre confirma que la presión sobre los precios no se agotó con el fin de los bloqueos. La evolución del transporte, la energía y los alimentos de la canasta básica será clave para medir el impacto real sobre el poder adquisitivo de las familias antes del cierre de año.</p>
${source('La Razón', 'https://larazon.bo/economia-y-empresa/2026/11/05/la-inflacion-acumulada-llega-al-603-hasta-octubre-segun-el-ine/')}`,
    contentEn: `<h1>Bolivia's inflation reaches 6.03% as October prices climb 2.07% in a single month</h1>
<p class="lead"><em>Bolivia's National Statistics Institute (INE) reported on Thursday, November 5, that accumulated inflation between January and October 2026 reached 6.03%. In October alone, the Consumer Price Index rose 2.07% from September, one of the highest monthly readings of the year. Twelve-month inflation reached 7.08%.</em></p>
${figure(
  `${IMG}/2026-11-05/inflacion-bolivia-603-octubre-2026.jpg`,
  'Food stall at the Rodríguez market in La Paz',
  'The household basket was once again at the center of inflationary pressure in October. Photo: La Razón'
)}
<h2 class="report-chapter">Transport and food explain the jump</h2>
<p>Transport had the largest impact. Fares for minibuses, buses and shared taxis rose 14.55% in October, according to INE data. By division, transport rose 3.50%, food and non-alcoholic beverages 3.39%, and food consumed outside the home 1.43%.</p>
<p>Among food items, onions rose 21.61%, potatoes 16.12% and tomatoes 12.56%. The price of a set lunch rose 1.76% and boneless beef 1.37%. These were the items that contributed most to the 2.07% monthly result.</p>
<p>The behavior was not uniform: the report also records declines in cheese, green peas, green beans, achojcha, toothbrushes and gas stoves.</p>
<h2 class="report-chapter">A year marked by blockades</h2>
<p>October was the second-highest inflation month of 2026, below June (2.15%) and above May (2.13%). La Razón notes that both months were marked by the effects of the 53-day blockades, which disrupted supply and the cost of goods and services.</p>
<p>Accumulated inflation is one of the indicators that will define the economic close of the year. The figure comes in the same week that the country's nine governors rejected the government's 1% revenue-sharing proposal and the executive reiterated its forecast that 2027 will be the year of economic takeoff.</p>
${quote(
  "The rise in prices continues to pressure the cost of goods and services that are part of Bolivian households' consumption.",
  'INE report cited by La Razón'
)}
<h2 class="report-chapter">What to watch in the coming months</h2>
<p>October's reading confirms that price pressure did not end with the blockades. The evolution of transport, energy and basic food prices will be key to measuring the real impact on families' purchasing power before the end of the year.</p>
${source('La Razón', 'https://larazon.bo/economia-y-empresa/2026/11/05/la-inflacion-acumulada-llega-al-603-hasta-octubre-segun-el-ine/')}`,
  },
  {
    id: '1401',
    slug: 'gobernadores-rechazan-1-por-ciento-coparticipacion',
    publishedAt: '2026-11-06T08:00:00-04:00',
    date: '2026-11-06',
    titleEs: 'Los nueve gobernadores rechazan el 1% de coparticipación y exigen un porcentaje mayor',
    titleEn: 'All nine governors reject the 1% revenue-sharing offer and demand a bigger share',
    excerptEs:
      'Las autoridades departamentales dejaron de lado sus diferencias y acordaron una propuesta conjunta para reabrir la negociación con el Gobierno. El Ejecutivo había oficializado la asignación del 1% de las recaudaciones tributarias, estimada en más de Bs 500 millones.',
    excerptEn:
      'Departmental authorities set aside their differences and agreed on a joint proposal to reopen negotiations with the government. The executive had formalized a 1% allocation of tax revenue, estimated at more than Bs 500 million.',
    readTimeEs: '4 min',
    readTimeEn: '4 min',
    imageUrl: `${IMG}/2026-11-06/gobernadores-rechazan-1-por-ciento-coparticipacion.jpg`,
    imageCaption: 'Los gobernadores unificaron criterios sobre la coparticipación tributaria. Foto: eju.tv',
    categoryEs: 'Economía',
    categoryEn: 'Economy',
    region: 'Bolivia',
    location: 'Santa Cruz, Bolivia',
    source: 'eju.tv',
    sourceUrl:
      'https://eju.tv/2026/11/inflacion-llega-al-603-y-los-nueve-gobernadores-rechazan-el-1-de-coparticipacion/',
    contentEs: `<h1>Los nueve gobernadores rechazan el 1% de coparticipación y exigen un porcentaje mayor</h1>
<p class="lead"><em>Los nueve gobernadores de Bolivia acordaron este viernes rechazar el 1% de coparticipación tributaria planteado por el Gobierno y reabrir las negociaciones para conseguir un porcentaje mayor. La decisión unifica posiciones que hasta hace días eran divergentes y abre un nuevo capítulo en la discusión por los recursos departamentales.</em></p>
${figure(
  `${IMG}/2026-11-06/gobernadores-rechazan-1-por-ciento-coparticipacion.jpg`,
  'Reunión de autoridades departamentales sobre coparticipación',
  'Los gobernadores buscan presentar una propuesta conjunta al Ejecutivo. Foto: eju.tv'
)}
<h2 class="report-chapter">Una postura común</h2>
<p>El gobernador de Santa Cruz, Juan Pablo Velasco, informó que las autoridades departamentales dejaron de lado sus diferencias y unificaron criterios para presentar una propuesta conjunta al Ejecutivo. &ldquo;Vamos a lograr un porcentaje distinto a ese y, por supuesto, mucho más elevado&rdquo;, afirmó.</p>
<p>La Paz y Beni habían considerado positiva la propuesta oficial, mientras que otras regiones la rechazaban o mantenían reservas. El acuerdo de este viernes cambia ese escenario: el rechazo ya no es aislado, sino una posición de bloque.</p>
<h2 class="report-chapter">El 1% y los Bs 500 millones</h2>
<p>El Gobierno había oficializado la asignación del 1% de las recaudaciones tributarias a los departamentos, un monto estimado en más de Bs 500 millones. Para las gobernaciones, ese porcentaje no refleja el peso de las regiones en la generación de recursos ni cubre las demandas acumuladas.</p>
<p>La discusión por la coparticipación no es nueva, pero llega en un momento de presión fiscal: la inflación acumulada alcanzó el 6,03% entre enero y octubre y el Ejecutivo negocia simultáneamente el presupuesto y la reforma del sistema tributario.</p>
${quote(
  'Vamos a lograr un porcentaje distinto a ese y, por supuesto, mucho más elevado.',
  'Juan Pablo Velasco, gobernador de Santa Cruz'
)}
<h2 class="report-chapter">Qué sigue</h2>
<p>Los gobernadores preparan una propuesta técnica que será presentada al Ministerio de Economía. No hay todavía una fecha confirmada para la reunión, pero el bloque departamental busca llegar con una sola voz y con cálculos propios sobre la distribución de los recursos.</p>
<p>La negociación definirá el margen de inversión de las gobernaciones en 2027 y su capacidad para atender salud, infraestructura y programas sociales en un año que el Gobierno ya describió como el del &ldquo;despegue&rdquo;.</p>
${source('eju.tv', 'https://eju.tv/2026/11/inflacion-llega-al-603-y-los-nueve-gobernadores-rechazan-el-1-de-coparticipacion/')}`,
    contentEn: `<h1>All nine governors reject the 1% revenue-sharing offer and demand a bigger share</h1>
<p class="lead"><em>Bolivia's nine governors agreed on Friday to reject the government's proposed 1% share of tax revenue and to reopen negotiations for a larger percentage. The decision unifies positions that had diverged in recent days and opens a new chapter in the dispute over departmental resources.</em></p>
${figure(
  `${IMG}/2026-11-06/gobernadores-rechazan-1-por-ciento-coparticipacion.jpg`,
  'Meeting of departmental authorities on revenue sharing',
  'Governors aim to present a joint proposal to the executive. Photo: eju.tv'
)}
<h2 class="report-chapter">A common position</h2>
<p>Santa Cruz governor Juan Pablo Velasco said departmental authorities set aside their differences and unified criteria to present a joint proposal to the executive. &ldquo;We are going to achieve a percentage different from that one and, of course, much higher,&rdquo; he said.</p>
<p>La Paz and Beni had viewed the official proposal favorably, while other regions rejected it or kept reservations. Friday's agreement changes that scenario: the rejection is no longer isolated but a bloc position.</p>
<h2 class="report-chapter">The 1% and Bs 500 million</h2>
<p>The government had formalized the allocation of 1% of tax collections to the departments, an amount estimated at more than Bs 500 million. For the governors, that percentage does not reflect the regions' weight in generating resources or cover accumulated demands.</p>
<p>The revenue-sharing debate is not new, but it arrives at a moment of fiscal pressure: accumulated inflation reached 6.03% between January and October, and the executive is negotiating the budget and a tax reform at the same time.</p>
${quote(
  'We are going to achieve a percentage different from that one and, of course, much higher.',
  'Juan Pablo Velasco, governor of Santa Cruz'
)}
<h2 class="report-chapter">What comes next</h2>
<p>The governors are preparing a technical proposal to present to the Ministry of Economy. No date has been confirmed for the meeting, but the departmental bloc aims to arrive with a single voice and its own calculations on resource distribution.</p>
<p>The negotiation will define the investment margin of the governorates in 2027 and their ability to fund health, infrastructure and social programs in a year the government has already described as one of &ldquo;takeoff.&rdquo;</p>
${source('eju.tv', 'https://eju.tv/2026/11/inflacion-llega-al-603-y-los-nueve-gobernadores-rechazan-el-1-de-coparticipacion/')}`,
  },
  {
    id: '1402',
    slug: 'manaco-cierre-irrevocable-550-trabajadores',
    publishedAt: '2026-11-05T17:00:00-04:00',
    date: '2026-11-05',
    titleEs: 'Manaco ratifica el cierre irrevocable de su planta y se compromete a pagar los beneficios de 550 trabajadores',
    titleEn: 'Manaco confirms irrevocable plant closure and pledges benefits for 550 workers',
    excerptEs:
      'La empresa cochabambina informó que cuenta con los recursos para cumplir con sus 550 trabajadores, entre operarios, administrativos y ejecutivos. El directorio atribuyó la decisión a pérdidas acumuladas de Bs 150 millones y abrió la puerta a dialogar con el sindicato sobre las condiciones de salida.',
    excerptEn:
      'The Cochabamba-based company said it has the resources to meet obligations to its 550 workers, including operators, administrative staff and executives. The board attributed the decision to accumulated losses of Bs 150 million and offered to discuss exit conditions with the union.',
    readTimeEs: '4 min',
    readTimeEn: '4 min',
    imageUrl: `${IMG}/2026-11-05/manaco-cierre-irrevocable-550-trabajadores.jpg`,
    imageCaption: 'César Vargas, miembro del directorio de Manaco, en conferencia de prensa. Foto: La Razón',
    categoryEs: 'Economía',
    categoryEn: 'Economy',
    region: 'Bolivia',
    location: 'Cochabamba, Bolivia',
    source: 'La Razón',
    sourceUrl:
      'https://larazon.bo/economia-y-empresa/2026/11/05/manaco-ratifica-cierre-irrevocable-y-se-compromete-a-pagar-beneficios-a-550-trabajadores',
    contentEs: `<h1>Manaco ratifica el cierre irrevocable de su planta y se compromete a pagar los beneficios de 550 trabajadores</h1>
<p class="lead"><em>Manufactura Nacional Cochabamba (Manaco) ratificó este jueves el carácter irrevocable del cierre de sus operaciones productivas y aseguró que cuenta con los recursos necesarios para pagar los beneficios de sus 550 trabajadores, entre operarios, administrativos y ejecutivos.</em></p>
${figure(
  `${IMG}/2026-11-05/manaco-cierre-irrevocable-550-trabajadores.jpg`,
  'César Vargas, directivo de Manaco, durante una conferencia de prensa',
  'La empresa dijo que la decisión busca proteger los recursos para pagar a los trabajadores. Foto: La Razón'
)}
<h2 class="report-chapter">Pérdidas acumuladas y una decisión sin marcha atrás</h2>
<p>César Vargas, miembro del directorio, explicó que la determinación responde a las pérdidas acumuladas durante los últimos años, que alcanzan los Bs 150 millones. Según señaló, continuar con la producción implicaba poner en riesgo los recursos que ahora permitirán atender las obligaciones pendientes.</p>
<p>&ldquo;Les agradezco a todos los trabajadores por el esfuerzo, pero llegó un momento en que pedirles que siguieran significaba poner en riesgo algo que hoy podemos proteger: los recursos para que cada trabajador cobre lo que le corresponde&rdquo;, declaró.</p>
${quote(
  'Quiero manifestar claramente que la decisión de cerrar las operaciones productivas es irrevocable.',
  'César Vargas, directorio de Manaco'
)}
<h2 class="report-chapter">Diálogo con el sindicato</h2>
<p>Vargas sostuvo que la empresa decidió detener la producción para garantizar el cumplimiento de sus compromisos con trabajadores, proveedores y otros acreedores. Aunque descartó revertir el cierre, abrió la posibilidad de retomar conversaciones con el sindicato para definir cómo se desarrollará el proceso y atender las preocupaciones de las familias.</p>
<p>&ldquo;Quiero invitar al sindicato a retomar el diálogo sobre cómo llevaremos este cierre y cómo atenderemos las inquietudes de los trabajadores y sus familias&rdquo;, expresó.</p>
<h2 class="report-chapter">El peso de una industria centenaria</h2>
<p>Manaco es una de las firmas más antiguas del calzado boliviano y su planta de Quillacollo fue durante décadas un símbolo del empleo industrial en Cochabamba. El cierre no solo afecta a los 550 trabajadores directos: también impacta a proveedores, distribuidores y a la cadena de valor que dependía de la fábrica.</p>
<p>La empresa no informó una fecha exacta para el fin de las operaciones ni el calendario de pagos. El sindicato, que en días previos rechazó la medida y exigió explicaciones, deberá definir su posición frente a la mesa de diálogo propuesta por el directorio.</p>
${source('La Razón', 'https://larazon.bo/economia-y-empresa/2026/11/05/manaco-ratifica-cierre-irrevocable-y-se-compromete-a-pagar-beneficios-a-550-trabajadores')}`,
    contentEn: `<h1>Manaco confirms irrevocable plant closure and pledges benefits for 550 workers</h1>
<p class="lead"><em>Manufactura Nacional Cochabamba (Manaco) confirmed on Thursday that the closure of its production operations is irrevocable and said it has the resources to pay benefits to its 550 workers, including operators, administrative staff and executives.</em></p>
${figure(
  `${IMG}/2026-11-05/manaco-cierre-irrevocable-550-trabajadores.jpg`,
  'César Vargas, a Manaco board member, at a press conference',
  'The company said the decision aims to protect the funds needed to pay workers. Photo: La Razón'
)}
<h2 class="report-chapter">Accumulated losses and a decision with no way back</h2>
<p>Board member César Vargas said the decision responds to accumulated losses in recent years that amount to Bs 150 million. Continuing production, he said, would have put at risk the resources that will now cover outstanding obligations.</p>
<p>&ldquo;I thank all the workers for their effort, but there came a point when asking them to continue meant putting at risk something we can protect today: the resources so that each worker receives what corresponds to them,&rdquo; he said.</p>
${quote(
  'I want to state clearly that the decision to close production operations is irrevocable.',
  'César Vargas, Manaco board member'
)}
<h2 class="report-chapter">Dialogue with the union</h2>
<p>Vargas said the company decided to stop production to guarantee its commitments to workers, suppliers and other creditors. Although he ruled out reversing the closure, he opened the door to resuming talks with the union to define how the process will unfold and address families' concerns.</p>
<p>&ldquo;I want to invite the union to resume dialogue on how we will carry out this closure and how we will address the concerns of workers and their families,&rdquo; he said.</p>
<h2 class="report-chapter">The weight of a decades-old industry</h2>
<p>Manaco is one of Bolivia's oldest footwear companies, and its Quillacollo plant was for decades a symbol of industrial employment in Cochabamba. The closure affects not only the 550 direct workers but also suppliers, distributors and the value chain that depended on the factory.</p>
<p>The company did not announce an exact date for the end of operations or a payment schedule. The union, which rejected the measure in previous days and demanded explanations, must now define its position on the dialogue table proposed by the board.</p>
${source('La Razón', 'https://larazon.bo/economia-y-empresa/2026/11/05/manaco-ratifica-cierre-irrevocable-y-se-compromete-a-pagar-beneficios-a-550-trabajadores')}`,
  },
  {
    id: '1403',
    slug: 'magisterio-urbano-marcha-nacional-6-noviembre-paro-48-horas',
    publishedAt: '2026-11-06T07:00:00-04:00',
    date: '2026-11-06',
    titleEs: 'El magisterio urbano marcha este viernes y prepara un paro de 48 horas para el 9 y 10 de noviembre',
    titleEn: 'Urban teachers march on Friday and prepare a 48-hour strike for November 9 and 10',
    excerptEs:
      'La Federación de Maestros Urbanos mantiene su calendario de protestas tras no alcanzar un acuerdo con el Gobierno. El sector rechaza que se transfieran responsabilidades educativas a gobernaciones y alcaldías sin garantizar los recursos para los ítems docentes.',
    excerptEn:
      'The Urban Teachers Federation is keeping its protest schedule after failing to reach an agreement with the government. The sector rejects transferring educational responsibilities to regional and municipal governments without guaranteeing funding for teaching positions.',
    readTimeEs: '4 min',
    readTimeEn: '4 min',
    imageUrl: `${IMG}/2026-11-06/magisterio-urbano-marcha-nacional-6-noviembre.jpg`,
    imageCaption: 'El magisterio urbano mantiene piquetes, marcha nacional y paro de 48 horas. Foto: Visión 360 / Red Uno',
    categoryEs: 'País',
    categoryEn: 'Nation',
    region: 'Bolivia',
    location: 'La Paz, Bolivia',
    source: 'Visión 360 / Red Uno',
    sourceUrl:
      'https://www.vision360.bo/noticias/2026/11/02/75264-magisterio-urbano-endurece-sus-protestas-y-anuncia-huelgas-marchas-y-paro-nacional',
    contentEs: `<h1>El magisterio urbano marcha este viernes y prepara un paro de 48 horas para el 9 y 10 de noviembre</h1>
<p class="lead"><em>La Federación de Maestros Urbanos confirmó una marcha nacional para este viernes 6 de noviembre y un paro de actividades de 48 horas para el lunes 9 y el martes 10. La medida se mantiene después de que las reuniones con el Gobierno no llegaran a un acuerdo sobre la administración del sistema educativo.</em></p>
${figure(
  `${IMG}/2026-11-06/magisterio-urbano-marcha-nacional-6-noviembre.jpg`,
  'Movilización de maestros urbanos en Bolivia',
  'El sector cumple un calendario escalonado de piquetes, marcha y paro. Foto: Visión 360 / Red Uno'
)}
<h2 class="report-chapter">El calendario de protestas</h2>
<p>El secretario ejecutivo de la Federación de Maestros Urbanos, Lorenzo Chávez, explicó que las protestas se desarrollarán de manera escalonada. El plan incluye la instalación de piquetes de huelga, una movilización nacional este viernes y un paro de 48 horas los días 9 y 10 de noviembre.</p>
<p>Las movilizaciones comenzaron el martes 3 de noviembre. Hasta ahora no se produjo un acercamiento que permita suspender las medidas.</p>
<h2 class="report-chapter">El punto de fondo: recursos e ítems</h2>
<p>Uno de los principales motivos del rechazo es la propuesta de trasladar responsabilidades educativas a las gobernaciones y alcaldías sin garantizar los recursos económicos necesarios para asumirlas. Chávez cuestionó en particular la posibilidad de que los gobiernos subnacionales deban hacerse cargo del pago de los ítems docentes, cuando ya enfrentan dificultades para atender otras necesidades.</p>
<p>El dirigente advirtió que el magisterio no permitirá que el Gobierno transfiera sus responsabilidades constitucionales a otras instancias sin el presupuesto correspondiente.</p>
${quote(
  'No vamos a permitir que se transfieran responsabilidades sin los recursos que las acompañan.',
  'Lorenzo Chávez, Federación de Maestros Urbanos'
)}
<h2 class="report-chapter">Un conflicto sin solución inmediata</h2>
<p>La falta de entendimiento en las reuniones con las autoridades llevó al sector a mantener su calendario. El conflicto entre el magisterio urbano y el Gobierno continúa abierto, mientras las familias y los estudiantes se preparan para una nueva interrupción de clases.</p>
<p>El Ministerio de Educación no se pronunció públicamente sobre la marcha de este viernes. La expectativa está puesta en si el paro de 48 horas se cumple y en qué medida el Gobierno retoma la mesa de negociación antes del lunes.</p>
${source('Visión 360 / Red Uno', 'https://www.vision360.bo/noticias/2026/11/02/75264-magisterio-urbano-endurece-sus-protestas-y-anuncia-huelgas-marchas-y-paro-nacional')}`,
    contentEn: `<h1>Urban teachers march on Friday and prepare a 48-hour strike for November 9 and 10</h1>
<p class="lead"><em>The Urban Teachers Federation confirmed a national march for Friday, November 6, and a 48-hour work stoppage for Monday the 9th and Tuesday the 10th. The measure stands after meetings with the government failed to produce an agreement on the administration of the education system.</em></p>
${figure(
  `${IMG}/2026-11-06/magisterio-urbano-marcha-nacional-6-noviembre.jpg`,
  'Urban teachers mobilize in Bolivia',
  'The sector is carrying out a staggered schedule of pickets, a march and a strike. Photo: Visión 360 / Red Uno'
)}
<h2 class="report-chapter">The protest schedule</h2>
<p>Federation executive secretary Lorenzo Chávez said protests will unfold in stages. The plan includes strike pickets, a national mobilization this Friday and a 48-hour strike on November 9 and 10.</p>
<p>Mobilizations began on Tuesday, November 3. So far there has been no rapprochement that would allow the measures to be suspended.</p>
<h2 class="report-chapter">The core issue: funding and teaching posts</h2>
<p>One of the main reasons for the rejection is a proposal to transfer educational responsibilities to regional and municipal governments without guaranteeing the economic resources needed to assume them. Chávez specifically questioned the possibility that subnational governments would have to cover teaching positions when they already struggle to meet other needs.</p>
<p>The leader warned that teachers will not allow the government to transfer its constitutional responsibilities to other levels without the corresponding budget.</p>
${quote(
  'We will not allow responsibilities to be transferred without the resources that go with them.',
  'Lorenzo Chávez, Urban Teachers Federation'
)}
<h2 class="report-chapter">A conflict without an immediate solution</h2>
<p>The lack of understanding in meetings with authorities led the sector to keep its schedule. The conflict between urban teachers and the government remains open, while families and students prepare for a new interruption of classes.</p>
<p>The Ministry of Education did not publicly comment on Friday's march. Attention now turns to whether the 48-hour strike goes ahead and how quickly the government returns to the negotiating table before Monday.</p>
${source('Visión 360 / Red Uno', 'https://www.vision360.bo/noticias/2026/11/02/75264-magisterio-urbano-endurece-sus-protestas-y-anuncia-huelgas-marchas-y-paro-nacional')}`,
  },
  {
    id: '1404',
    slug: 'rodrigo-paz-cumbre-iberoamericana-actuar-juntos',
    publishedAt: '2026-11-05T18:00:00-04:00',
    date: '2026-11-05',
    titleEs: 'Rodrigo Paz en la Cumbre Iberoamericana: “No necesitamos pensar igual, sino actuar juntos”',
    titleEn: 'Rodrigo Paz at the Ibero-American Summit: “We do not need to think alike, we need to act together”',
    excerptEs:
      'En la sesión plenaria de la XXX Cumbre Iberoamericana, celebrada en Madrid, el presidente boliviano llamó a superar las distancias entre Europa y América Latina. Puso la tecnología en el centro del nuevo encuentro y advirtió que la comunidad no puede quedarse en una palabra.',
    excerptEn:
      'At the plenary session of the 30th Ibero-American Summit in Madrid, the Bolivian president called for closing the distance between Europe and Latin America. He placed technology at the center of a new encounter and warned that the community cannot remain just a word.',
    readTimeEs: '5 min',
    readTimeEn: '5 min',
    imageUrl: `${IMG}/2026-11-05/rodrigo-paz-cumbre-iberoamericana.jpg`,
    imageCaption: 'El presidente Rodrigo Paz durante su intervención en la Cumbre Iberoamericana de Madrid. Foto: EFE',
    categoryEs: 'Política Internacional',
    categoryEn: 'International Politics',
    region: 'International',
    location: 'Madrid, España',
    source: 'Bolivia.com / EFE',
    sourceUrl:
      'https://www.bolivia.com/actualidad/internacionales/rodrigo-paz-ante-lideres-iberoamericanos-no-necesitamos-pensar-igual-610334',
    contentEs: `<h1>Rodrigo Paz en la Cumbre Iberoamericana: “No necesitamos pensar igual, sino actuar juntos”</h1>
<p class="lead"><em>El presidente de Bolivia, Rodrigo Paz, intervino este jueves 5 de noviembre en la sesión plenaria de la XXX Cumbre Iberoamericana, celebrada en Madrid, con un mensaje que desafió las divisiones ideológicas y puso el acento en la cooperación práctica. &ldquo;Nuestros pueblos no necesitan pensar igual. Lo que necesitan es que seamos capaces de actuar juntos&rdquo;, dijo ante representantes de los países de la comunidad.</em></p>
${figure(
  `${IMG}/2026-11-05/rodrigo-paz-cumbre-iberoamericana.jpg`,
  'Rodrigo Paz habla en la sesión plenaria de la Cumbre Iberoamericana',
  'El mandatario boliviano intervino ante los líderes de la comunidad iberoamericana en Madrid. Foto: EFE'
)}
<h2 class="report-chapter">Una comunidad que no puede quedarse en la palabra</h2>
<p>Paz recordó que Iberoamérica a veces parece dividirse entre &ldquo;Ibero&rdquo; y &ldquo;América&rdquo;. Puso como ejemplo al joven que encuentra dificultades para estudiar al otro lado del Atlántico por un visado o al emprendedor que descubre que comerciar entre países con historia compartida sigue siendo extraordinariamente difícil.</p>
<p>&ldquo;¿De qué sirve sabernos tan cerca en la historia si continuamos tan distantes al momento de aprovechar las oportunidades?&rdquo;, preguntó.</p>
${quote(
  'Nuestros pueblos no necesitan pensar igual. Lo que necesitan es que seamos capaces de actuar juntos.',
  'Rodrigo Paz, presidente de Bolivia'
)}
<h2 class="report-chapter">Guadalajara 1991 y la deuda tecnológica</h2>
<p>Como otros oradores, el presidente boliviano tomó como referencia la primera cumbre, celebrada en Guadalajara (México) en 1991. Recordó que en aquel encuentro ya se habló de la &ldquo;derrota tecnológica&rdquo; de Europa y América Latina, un tema que, dijo, sigue vigente.</p>
<p>En esa línea, consideró que la tecnología debe ser parte del nuevo encuentro entre las naciones y un punto fundamental para cerrar brechas. La cumbre reúne a representantes de los países iberoamericanos en un contexto de recomposición comercial y de disputa por la inversión tecnológica.</p>
<h2 class="report-chapter">Potosí, la plata y el futuro</h2>
<p>Paz también reivindicó el papel histórico de Bolivia en la economía global. &ldquo;La plata de Potosí llegó a España, recorrió Europa y alcanzó Asia. Hoy Bolivia es un país que aporta riqueza para que otros construyan su futuro. Y ese futuro también lo quiere Bolivia&rdquo;, afirmó.</p>
<p>El discurso se produce días antes de que el mandatario cumpla su primer año de gestión, el 8 de noviembre, y en medio de una agenda de reuniones con empresarios españoles y europeos para atraer inversiones en minería, hidrocarburos y comercio.</p>
<h2 class="report-chapter">Una cumbre con acentos distintos</h2>
<p>La intervención de Paz no anunció acuerdos concretos, pero marcó una posición: Bolivia busca presentarse como un socio confiable y como puente entre regiones, más allá de las afinidades ideológicas. La próxima cita de la comunidad y la letra pequeña de los documentos finales dirán si esa retórica se traduce en compromisos.</p>
${source('Bolivia.com / EFE', 'https://www.bolivia.com/actualidad/internacionales/rodrigo-paz-ante-lideres-iberoamericanos-no-necesitamos-pensar-igual-610334')}`,
    contentEn: `<h1>Rodrigo Paz at the Ibero-American Summit: “We do not need to think alike, we need to act together”</h1>
<p class="lead"><em>Bolivian President Rodrigo Paz addressed the plenary session of the 30th Ibero-American Summit in Madrid on Thursday, November 5, with a message that challenged ideological divisions and emphasized practical cooperation. &ldquo;Our peoples do not need to think alike. What they need is for us to be able to act together,&rdquo; he told representatives of the community's countries.</em></p>
${figure(
  `${IMG}/2026-11-05/rodrigo-paz-cumbre-iberoamericana.jpg`,
  'Rodrigo Paz speaks at the plenary session of the Ibero-American Summit',
  'The Bolivian leader addressed the Ibero-American community in Madrid. Photo: EFE'
)}
<h2 class="report-chapter">A community that cannot remain just a word</h2>
<p>Paz recalled that Ibero-America sometimes seems split between &ldquo;Ibero&rdquo; and &ldquo;America.&rdquo; He cited the young person who struggles to study across the Atlantic because of a visa, or the entrepreneur who finds that trading between countries with shared history remains extraordinarily difficult.</p>
<p>&ldquo;What is the point of knowing ourselves so close in history if we remain so distant when it comes to seizing opportunities?&rdquo; he asked.</p>
${quote(
  'Our peoples do not need to think alike. What they need is for us to be able to act together.',
  'Rodrigo Paz, president of Bolivia'
)}
<h2 class="report-chapter">Guadalajara 1991 and the technology gap</h2>
<p>Like other speakers, the Bolivian president referenced the first summit, held in Guadalajara, Mexico, in 1991. He recalled that the meeting already discussed Europe and Latin America's &ldquo;technological defeat,&rdquo; a issue he said remains current.</p>
<p>In that vein, he argued that technology must be part of a new encounter among nations and a fundamental point for closing gaps. The summit brings together representatives of Ibero-American countries amid a reshuffling of trade and competition for technology investment.</p>
<h2 class="report-chapter">Potosí, silver and the future</h2>
<p>Paz also invoked Bolivia's historical role in the global economy. &ldquo;The silver of Potosí reached Spain, crossed Europe and reached Asia. Today Bolivia is a country that contributes wealth so others can build their future. And Bolivia wants that future too,&rdquo; he said.</p>
<p>The speech comes days before the president completes his first year in office on November 8, and amid a schedule of meetings with Spanish and European business leaders to attract investment in mining, hydrocarbons and trade.</p>
<h2 class="report-chapter">A summit with different accents</h2>
<p>Paz's intervention announced no concrete agreements, but it staked out a position: Bolivia seeks to present itself as a reliable partner and a bridge between regions, beyond ideological affinities. The community's next meeting and the fine print of the final documents will show whether that rhetoric translates into commitments.</p>
${source('Bolivia.com / EFE', 'https://www.bolivia.com/actualidad/internacionales/rodrigo-paz-ante-lideres-iberoamericanos-no-necesitamos-pensar-igual-610334')}`,
  },
  {
    id: '1405',
    slug: 'santiago-pena-renuncia-paraguay-juicio-politico-ueno-bank',
    publishedAt: '2026-11-05T19:00:00-04:00',
    date: '2026-11-05',
    titleEs: 'Santiago Peña renuncia a la presidencia de Paraguay en medio del escándalo de Ueno Bank',
    titleEn: 'Santiago Peña resigns as Paraguay’s president amid the Ueno Bank scandal',
    excerptEs:
      'El mandatario presentó su renuncia este jueves, horas antes de que la Cámara de Diputados aprobara someterlo a juicio político. La crisis estalló tras la intervención del Ueno Bank, con 2,9 millones de clientes, cuyos ahorros quedaron congelados.',
    excerptEn:
      'The president resigned on Thursday, hours before the Chamber of Deputies approved an impeachment trial. The crisis erupted after the intervention of Ueno Bank, which has 2.9 million clients whose savings were frozen.',
    readTimeEs: '5 min',
    readTimeEn: '5 min',
    imageUrl: `${IMG}/2026-11-05/santiago-pena-renuncia-paraguay.jpg`,
    imageCaption: 'Santiago Peña, presidente saliente de Paraguay, en una imagen de archivo. Foto: EFE',
    categoryEs: 'Internacional',
    categoryEn: 'International',
    region: 'International',
    location: 'Asunción, Paraguay',
    source: 'Bolivia.com / EFE',
    sourceUrl:
      'https://www.bolivia.com/actualidad/internacionales/pena-renuncia-a-la-presidencia-de-paraguay-y-aprueban-juicio-politico-en-su-contra-610359',
    contentEs: `<h1>Santiago Peña renuncia a la presidencia de Paraguay en medio del escándalo de Ueno Bank</h1>
<p class="lead"><em>El presidente de Paraguay, Santiago Peña, renunció este jueves 5 de noviembre en medio del conflicto desatado por la intervención del Ueno Bank. Lo hizo horas antes de que la Cámara de Diputados aprobara someterlo a juicio político. &ldquo;He tomado la decisión de presentar mi renuncia a la Presidencia de la República, lo hago pensando en la estabilidad de nuestro país, en la paz social y en la necesidad de preservar nuestras instituciones democráticas&rdquo;, declaró en un video difundido en sus redes.</em></p>
${figure(
  `${IMG}/2026-11-05/santiago-pena-renuncia-paraguay.jpg`,
  'Santiago Peña durante una aparición pública',
  'Peña dejó la presidencia antes de que el Congreso avanzara con el juicio político. Foto: EFE'
)}
<h2 class="report-chapter">La quiebra que desató la crisis</h2>
<p>El Banco Central del Paraguay intervino el Ueno Bank después de detectar que la solvencia de la entidad cayó por debajo del 50% del mínimo exigido. La entidad tenía unos 2,9 millones de clientes en un país de 6,1 millones de habitantes, y los ahorros de miles de usuarios quedaron congelados.</p>
<p>Ueno Bank no solo administraba depósitos: también patrocinaba equipos de fútbol, a la selección paraguaya y eventos como la etapa final del Mundial de Rally. Su caída arrastró consigo una parte de la vida pública y deportiva del país.</p>
<h2 class="report-chapter">Los fondos públicos</h2>
<p>El conflicto creció porque, durante la gestión de Peña, la entidad recibió millonarios recursos de organismos públicos, entre ellos el Instituto de Previsión Social (IPS), que administra las pensiones de la mayoría de los trabajadores. La oposición y sectores de la sociedad cuestionaron esa exposición.</p>
${quote(
  'También quiero pedir disculpas al pueblo. Si en algún momento he fallado, nunca fue mi intención defraudar la confianza que depositaron en mí.',
  'Santiago Peña, en su mensaje de renuncia'
)}
<h2 class="report-chapter">Renuncia y juicio político</h2>
<p>La Cámara de Diputados aceptó someter a Peña a juicio político aun después de su renuncia, lo que mantiene abierta la discusión sobre su responsabilidad en el manejo de la crisis bancaria. El ahora expresidente pidió que el Fondo de Garantía de Depósitos cumpla su finalidad y que se protejan los fondos públicos.</p>
<p>La salida de Peña abre la puerta a la sucesión constitucional. Paraguay, socio de Bolivia en el Mercosur y en la agenda fronteriza, entra en una etapa de incertidumbre política mientras intenta estabilizar su sistema financiero.</p>
<h2 class="report-chapter">Qué se sabe del futuro inmediato</h2>
<p>No hay todavía un cronograma público para la asunción del nuevo presidente ni para la continuidad del juicio político. La prioridad declarada por el gobierno saliente es la &ldquo;tranquilidad de los paraguayos&rdquo; y la protección de los ahorros. La oposición, en tanto, exige transparencia sobre los recursos públicos que llegaron al banco intervenido.</p>
${source('Bolivia.com / EFE', 'https://www.bolivia.com/actualidad/internacionales/pena-renuncia-a-la-presidencia-de-paraguay-y-aprueban-juicio-politico-en-su-contra-610359')}`,
    contentEn: `<h1>Santiago Peña resigns as Paraguay’s president amid the Ueno Bank scandal</h1>
<p class="lead"><em>Paraguayan President Santiago Peña resigned on Thursday, November 5, amid the conflict triggered by the intervention of Ueno Bank. He stepped down hours before the Chamber of Deputies approved an impeachment trial. &ldquo;I have decided to submit my resignation to the Presidency of the Republic, thinking about the stability of our country, social peace and the need to preserve our democratic institutions,&rdquo; he said in a video posted on social media.</em></p>
${figure(
  `${IMG}/2026-11-05/santiago-pena-renuncia-paraguay.jpg`,
  'Santiago Peña during a public appearance',
  'Peña left the presidency before Congress moved forward with impeachment. Photo: EFE'
)}
<h2 class="report-chapter">The collapse that triggered the crisis</h2>
<p>Paraguay's Central Bank intervened in Ueno Bank after detecting that the institution's solvency had fallen below 50% of the required minimum. The bank had about 2.9 million clients in a country of 6.1 million people, and the savings of thousands of users were frozen.</p>
<p>Ueno Bank did not only manage deposits: it also sponsored football teams, the Paraguayan national team and events such as the final stage of the Rally World Championship. Its collapse dragged part of the country's public and sporting life with it.</p>
<h2 class="report-chapter">Public funds</h2>
<p>The conflict grew because, during Peña's administration, the entity received millions in public funds, including from the Social Security Institute (IPS), which manages pensions for most workers. The opposition and parts of society questioned that exposure.</p>
${quote(
  'I also want to apologize to the people. If at some point I failed, it was never my intention to betray the trust they placed in me.',
  'Santiago Peña, in his resignation message'
)}
<h2 class="report-chapter">Resignation and impeachment</h2>
<p>The Chamber of Deputies agreed to subject Peña to an impeachment trial even after his resignation, keeping open the question of his responsibility in handling the banking crisis. The former president asked that the Deposit Guarantee Fund fulfill its purpose and that public funds be protected.</p>
<p>Peña's departure opens the door to constitutional succession. Paraguay, a partner of Bolivia in Mercosur and on the border agenda, enters a period of political uncertainty while trying to stabilize its financial system.</p>
<h2 class="report-chapter">What is known about the immediate future</h2>
<p>There is still no public timetable for the new president's inauguration or for the continuation of the impeachment process. The outgoing government's stated priority is the &ldquo;tranquility of Paraguayans&rdquo; and the protection of savings. The opposition, meanwhile, demands transparency about the public funds that reached the intervened bank.</p>
${source('Bolivia.com / EFE', 'https://www.bolivia.com/actualidad/internacionales/pena-renuncia-a-la-presidencia-de-paraguay-y-aprueban-juicio-politico-en-su-contra-610359')}`,
  },
  {
    id: '1406',
    slug: 'caso-maletas-laura-rojas-senala-romer-saucedo',
    publishedAt: '2026-11-05T20:00:00-04:00',
    date: '2026-11-05',
    titleEs: 'Caso maletas: Laura Rojas señala a Romer Saucedo como dueño del equipaje que ingresó de forma irregular',
    titleEn: 'Suitcase case: Laura Rojas points to Romer Saucedo as owner of the luggage that entered illegally',
    excerptEs:
      'La exdiputada declaró ante la Fiscalía y aseguró que las maletas no eran suyas. El caso investiga el ingreso irregular de unas 32 maletas procedentes de Estados Unidos a través de un vuelo chárter que llegó a Viru Viru en noviembre de 2025.',
    excerptEn:
      'The former deputy testified before prosecutors and said the suitcases were not hers. The case investigates the irregular entry of about 32 suitcases from the United States on a charter flight that arrived at Viru Viru in November 2025.',
    readTimeEs: '4 min',
    readTimeEn: '4 min',
    imageUrl: `${IMG}/2026-11-05/caso-maletas-laura-rojas.jpg`,
    imageCaption: 'Laura Rojas tras ampliar su declaración por el caso maletas. Foto: Bolivia.com',
    categoryEs: 'Seguridad',
    categoryEn: 'Security',
    region: 'Bolivia',
    location: 'Santa Cruz, Bolivia',
    source: 'Bolivia.com',
    sourceUrl:
      'https://www.bolivia.com/actualidad/nacionales/laura-rojas-involucra-a-romer-saucedo-en-el-caso-maletas-610379',
    contentEs: `<h1>Caso maletas: Laura Rojas señala a Romer Saucedo como dueño del equipaje que ingresó de forma irregular</h1>
<p class="lead"><em>La exdiputada Laura Rojas aseguró este jueves 5 de noviembre, tras ampliar su declaración ante la Fiscalía, que el dueño de las maletas del caso conocido como &ldquo;narcomaletas&rdquo; sería el presidente del Tribunal Supremo de Justicia (TSJ), Romer Saucedo, quien hace un par de días se declaró en el exilio. &ldquo;El dueño de las maletas era el señor Romer Saucedo Gómez, alias El Alemán&rdquo;, dijo ante los medios.</em></p>
${figure(
  `${IMG}/2026-11-05/caso-maletas-laura-rojas.jpg`,
  'Laura Rojas al salir de la Fiscalía',
  'La exdiputada amplió su declaración y responsabilizó a Romer Saucedo. Foto: Bolivia.com'
)}
<h2 class="report-chapter">El origen del caso</h2>
<p>La investigación indaga el ingreso irregular de alrededor de 32 maletas procedentes de Estados Unidos a través de un vuelo chárter que llegó al aeropuerto internacional de Viru Viru, en Santa Cruz, en noviembre de 2025. Durante meses se especuló con el contenido del equipaje: se habló de dinero en efectivo y de sustancias controladas, sin confirmación oficial.</p>
<p>Rojas fue captada por las cámaras de seguridad de la terminal usando un pasaporte diplomático para evadir controles, a pesar de que ya no ejercía como diputada. Por eso está investigada en dos procesos: el caso maletas y otro por portación de armas.</p>
<h2 class="report-chapter">“Si callé fue porque temía por mi seguridad”</h2>
<p>La exdiputada sostuvo que las maletas no eran suyas y que su silencio respondió al miedo. &ldquo;Si callé fue porque temía por mi seguridad, por la seguridad de mi hija y por mi familia. Esas maletas no eran mías. Él sabe lo que hace, él tenía poder&rdquo;, afirmó.</p>
<p>Su defensa aseguró que Rojas desconoce qué había dentro del equipaje. La declaración, sin embargo, reabre el vínculo entre el caso y la cúpula judicial.</p>
${quote(
  'El dueño de las maletas era el señor Romer Saucedo Gómez, alias El Alemán, el que se dio a la fuga.',
  'Laura Rojas, exdiputada'
)}
<h2 class="report-chapter">La salida de Saucedo</h2>
<p>Saucedo dejó Bolivia esta semana y anunció que se declaraba en el exilio. Afirmó que su vida y su libertad estaban en peligro y que se le iniciarían procesos con pruebas plantadas. Las autoridades han vinculado al expresidente del TSJ con el exfiscal Roger Mariaca, también investigado.</p>
<p>El Gobierno evitó pronunciarse sobre las circunstancias de la salida y sostuvo que la Fiscalía debe esclarecer el caso. La presidenta temporal del TSJ, Rosmery Ruiz, dijo que evalúa adelantar la asunción de Carlos Ortega en la presidencia del tribunal.</p>
<h2 class="report-chapter">Qué falta esclarecer</h2>
<p>La Fiscalía no confirmó el contenido de las maletas ni la veracidad de la declaración de Rojas. Tampoco existe una resolución sobre la situación migratoria o judicial de Saucedo. El caso sigue abierto y se ha convertido en uno de los frentes más sensibles de la crisis judicial boliviana.</p>
${source('Bolivia.com', 'https://www.bolivia.com/actualidad/nacionales/laura-rojas-involucra-a-romer-saucedo-en-el-caso-maletas-610379')}`,
    contentEn: `<h1>Suitcase case: Laura Rojas points to Romer Saucedo as owner of the luggage that entered illegally</h1>
<p class="lead"><em>Former deputy Laura Rojas said on Thursday, November 5, after expanding her testimony before prosecutors, that the owner of the suitcases in the case known as the &ldquo;narco-suitcases&rdquo; would be Supreme Court president Romer Saucedo, who declared himself in exile a couple of days earlier. &ldquo;The owner of the suitcases was Mr. Romer Saucedo Gómez, alias El Alemán,&rdquo; she told reporters.</em></p>
${figure(
  `${IMG}/2026-11-05/caso-maletas-laura-rojas.jpg`,
  'Laura Rojas leaving the prosecutor’s office',
  'The former deputy expanded her testimony and pointed to Romer Saucedo. Photo: Bolivia.com'
)}
<h2 class="report-chapter">The origin of the case</h2>
<p>The investigation examines the irregular entry of about 32 suitcases from the United States on a charter flight that arrived at Viru Viru international airport in Santa Cruz in November 2025. For months there was speculation about the contents: cash and controlled substances were mentioned, without official confirmation.</p>
<p>Rojas was captured by terminal security cameras using a diplomatic passport to bypass controls even though she was no longer a deputy. She is therefore under investigation in two cases: the suitcase case and a weapons-carrying case.</p>
<h2 class="report-chapter">“If I stayed silent, it was because I feared for my safety”</h2>
<p>The former deputy maintained that the suitcases were not hers and that her silence was driven by fear. &ldquo;If I stayed silent, it was because I feared for my safety, for the safety of my daughter and my family. Those suitcases were not mine. He knows what he does; he had power,&rdquo; she said.</p>
<p>Her defense said Rojas does not know what was inside the luggage. The testimony, however, reopens the link between the case and the judicial leadership.</p>
${quote(
  'The owner of the suitcases was Mr. Romer Saucedo Gómez, alias El Alemán, the one who fled.',
  'Laura Rojas, former deputy'
)}
<h2 class="report-chapter">Saucedo's departure</h2>
<p>Saucedo left Bolivia this week and announced he was declaring himself in exile. He said his life and freedom were in danger and that cases would be built against him with planted evidence. Authorities have linked the former Supreme Court president to former prosecutor Roger Mariaca, also under investigation.</p>
<p>The government avoided commenting on the circumstances of his departure and said prosecutors must clarify the case. Interim Supreme Court president Rosmery Ruiz said she is evaluating whether to bring forward Carlos Ortega's assumption of the court's presidency.</p>
<h2 class="report-chapter">What remains to be clarified</h2>
<p>Prosecutors have not confirmed the contents of the suitcases or the veracity of Rojas's statement. There is also no ruling on Saucedo's immigration or judicial status. The case remains open and has become one of the most sensitive fronts in Bolivia's judicial crisis.</p>
${source('Bolivia.com', 'https://www.bolivia.com/actualidad/nacionales/laura-rojas-involucra-a-romer-saucedo-en-el-caso-maletas-610379')}`,
  },
  {
    id: '1407',
    slug: 'papa-leon-xiv-viaje-uruguay-argentina-peru',
    publishedAt: '2026-11-06T09:00:00-04:00',
    date: '2026-11-06',
    titleEs: 'El papa León XIV inicia un viaje de 12 días por Uruguay, Argentina y Perú un mes después de su operación',
    titleEn: 'Pope Leo XIV begins a 12-day trip to Uruguay, Argentina and Peru a month after surgery',
    excerptEs:
      'El pontífice, de 71 años, tomará 14 vuelos y pronunciará unos 40 discursos menos de un mes después de que le extirparan parte de un pulmón por un cáncer. El Vaticano aseguró que no se tomaron medidas médicas adicionales y que afronta el viaje con “buena salud”.',
    excerptEn:
      'The 71-year-old pontiff will take 14 flights and deliver about 40 speeches less than a month after part of a lung was removed due to cancer. The Vatican said no additional medical measures were taken and that he is in “good health.”',
    readTimeEs: '4 min',
    readTimeEn: '4 min',
    imageUrl: `${IMG}/2026-11-06/papa-leon-xiv-viaje-latinoamerica.jpg`,
    imageCaption: 'El papa León XIV antes de emprender su viaje a Latinoamérica. Foto: eju.tv / EFE',
    categoryEs: 'Internacional',
    categoryEn: 'International',
    region: 'International',
    location: 'Ciudad del Vaticano / Montevideo',
    source: 'eju.tv / EFE',
    sourceUrl:
      'https://eju.tv/2026/11/el-papa-emprende-el-viaje-a-uruguay-argentina-y-peru-tras-su-operacion-por-un-cancer/',
    contentEs: `<h1>El papa León XIV inicia un viaje de 12 días por Uruguay, Argentina y Perú un mes después de su operación</h1>
<p class="lead"><em>El papa León XIV emprendió este viernes 6 de noviembre su viaje a Latinoamérica para visitar Uruguay, Argentina y regresar a Perú, el país donde vivió 20 años. Serán 12 días, 14 vuelos y unos 40 discursos, menos de un mes después de la operación en la que le extirparon parte de un pulmón por un cáncer.</em></p>
${figure(
  `${IMG}/2026-11-06/papa-leon-xiv-viaje-latinoamerica.jpg`,
  'El papa León XIV',
  'El pontífice de 71 años afronta una gira de 12 días con 14 vuelos. Foto: eju.tv / EFE'
)}
<h2 class="report-chapter">Una prueba de resistencia</h2>
<p>El vuelo papal de Ita Airways despegó esta mañana con la delegación vaticana y 80 periodistas de medios de todo el mundo. Está previsto que llegue al aeropuerto internacional de Montevideo a las 16:30 (15:30 en Bolivia), donde será recibido por el presidente uruguayo, Yamandú Orsi.</p>
<p>El Vaticano confirmó que no se tomaron medidas médicas adicionales pese a la operación, porque el papa es &ldquo;una persona de 71 años con buena salud&rdquo;. Aun así, la gira será una prueba para medir su resistencia ante una carga de trabajo intensa.</p>
<h2 class="report-chapter">Uruguay, la primera escala</h2>
<p>Tras casi 13 horas de vuelo, el pontífice participará en la ceremonia oficial de bienvenida en la Plaza Independencia y se reunirá con autoridades, representantes de la sociedad civil y el cuerpo diplomático. Por la tarde celebrará vísperas en la catedral con obispos, sacerdotes, diáconos, religiosos y seminaristas.</p>
<p>El sábado se trasladará a Paysandú, donde celebrará una misa en el Parque París Londres. El cardenal secretario de Estado, Pietro Parolin, describió el contexto uruguayo, donde más del 40% de la población se declara sin religión, como &ldquo;una realidad lamentable&rdquo;, pero subrayó que no altera la misión de la Iglesia.</p>
${quote(
  'Incluso en América Latina existe más que nunca la necesidad de superar las profundas polarizaciones sociales. La misión primordial de la Iglesia es dar testimonio de la unidad.',
  'Pietro Parolin, cardenal secretario de Estado'
)}
<h2 class="report-chapter">Argentina y el recuerdo de Francisco</h2>
<p>En Argentina, León XIV llegará a una tierra que guarda un recuerdo vivo del papa Francisco. Parolin señaló que el pontífice querrá rendirle homenaje y cumplir un anhelo arraigado de los argentinos: recibir por primera vez al sucesor de Pedro.</p>
<p>El regreso a Perú tendrá un tono distinto: el papa vivió allí 20 años y vuelve como Obispo de Roma y Pastor de la Iglesia universal.</p>
<h2 class="report-chapter">Agenda y expectativas</h2>
<p>La gira incluye encuentros con autoridades, comunidades religiosas y organizaciones sociales. El Vaticano no anunció medidas médicas especiales ni cambios en el programa por la salud del pontífice. La atención estará puesta en su resistencia física y en los mensajes que lleve a una región marcada por la polarización política y la pérdida de peso de la religión en la vida pública.</p>
${source('eju.tv / EFE', 'https://eju.tv/2026/11/el-papa-emprende-el-viaje-a-uruguay-argentina-y-peru-tras-su-operacion-por-un-cancer/')}`,
    contentEn: `<h1>Pope Leo XIV begins a 12-day trip to Uruguay, Argentina and Peru a month after surgery</h1>
<p class="lead"><em>Pope Leo XIV set off on Friday, November 6, for Latin America to visit Uruguay and Argentina before returning to Peru, the country where he lived for 20 years. The trip will span 12 days, 14 flights and about 40 speeches, less than a month after surgery to remove part of a lung due to cancer.</em></p>
${figure(
  `${IMG}/2026-11-06/papa-leon-xiv-viaje-latinoamerica.jpg`,
  'Pope Leo XIV',
  'The 71-year-old pontiff faces a 12-day tour with 14 flights. Photo: eju.tv / EFE'
)}
<h2 class="report-chapter">A test of endurance</h2>
<p>The Ita Airways papal flight took off this morning with the Vatican delegation and 80 journalists from media around the world. It is scheduled to arrive at Montevideo international airport at 16:30 (15:30 Bolivia time), where Uruguayan President Yamandú Orsi will receive him.</p>
<p>The Vatican confirmed that no additional medical measures were taken despite the surgery, because the pope is &ldquo;a 71-year-old person in good health.&rdquo; Still, the tour will test his endurance under a heavy workload.</p>
<h2 class="report-chapter">Uruguay, the first stop</h2>
<p>After nearly 13 hours in the air, the pontiff will take part in the official welcome ceremony at Plaza Independencia and meet with authorities, civil society representatives and the diplomatic corps. In the afternoon he will celebrate vespers at the cathedral with bishops, priests, deacons, religious and seminarians.</p>
<p>On Saturday he will travel to Paysandú, where he will celebrate Mass at Parque París Londres. Cardinal Secretary of State Pietro Parolin described the Uruguayan context, where more than 40% of the population declares no religion, as &ldquo;a regrettable reality,&rdquo; but stressed that it does not alter the Church's mission.</p>
${quote(
  'Even in Latin America there is, more than ever, a need to overcome deep social polarizations. The Church’s primary mission is to bear witness to unity.',
  'Pietro Parolin, Cardinal Secretary of State'
)}
<h2 class="report-chapter">Argentina and the memory of Francis</h2>
<p>In Argentina, Leo XIV will arrive in a land that keeps a vivid memory of Pope Francis. Parolin said the pontiff will want to pay tribute to him and fulfill a deep-seated desire of Argentines: to welcome the successor of Peter for the first time.</p>
<p>The return to Peru will have a different tone: the pope lived there for 20 years and returns as Bishop of Rome and Pastor of the universal Church.</p>
<h2 class="report-chapter">Agenda and expectations</h2>
<p>The tour includes meetings with authorities, religious communities and social organizations. The Vatican announced no special medical measures or changes to the program due to the pontiff's health. Attention will be on his physical endurance and on the messages he brings to a region marked by political polarization and the declining weight of religion in public life.</p>
${source('eju.tv / EFE', 'https://eju.tv/2026/11/el-papa-emprende-el-viaje-a-uruguay-argentina-y-peru-tras-su-operacion-por-un-cancer/')}`,
  },
  {
    id: '1408',
    slug: 'nasdaq-cae-55-por-ciento-correccion-acciones-ia',
    publishedAt: '2026-11-05T21:00:00-04:00',
    date: '2026-11-05',
    titleEs: 'El Nasdaq cae 5,5% y entra en corrección: el comercio de la IA sufre su peor día desde abril de 2025',
    titleEn: 'Nasdaq falls 5.5% into correction as the AI trade suffers its worst day since April 2025',
    excerptEs:
      'El índice tecnológico cerró más de 11% por debajo de su récord de octubre. El S&P 500 perdió 4,4% y el Dow Jones cayó 1.833 puntos (3,4%). Los inversionistas temen que el impulso de los centros de datos se enfríe tras las elecciones legislativas.',
    excerptEn:
      'The tech index closed more than 11% below its October record. The S&P 500 lost 4.4% and the Dow Jones fell 1,833 points (3.4%). Investors fear the data-center buildout could slow after the midterm elections.',
    readTimeEs: '4 min',
    readTimeEn: '4 min',
    imageUrl: `${IMG}/2026-11-05/nasdaq-correccion-acciones-ia.jpg`,
    imageCaption: 'Operadores en el parqué de la Bolsa de Nueva York. Foto: Getty Images / CNBC',
    categoryEs: 'Economía',
    categoryEn: 'Economy',
    region: 'US',
    location: 'Nueva York, EE.UU.',
    source: 'CNBC / Reuters',
    sourceUrl: 'https://www.cnbc.com/2026/11/05/stock-market-selloff-ai-fears.html',
    contentEs: `<h1>El Nasdaq cae 5,5% y entra en corrección: el comercio de la IA sufre su peor día desde abril de 2025</h1>
<p class="lead"><em>El Nasdaq Composite cayó cerca de 5,5% este jueves 5 de noviembre y cerró en territorio de corrección, más de 11% por debajo de su récord de octubre. El S&amp;P 500 perdió alrededor de 4,4% y el Dow Jones industrial promedio retrocedió unos 1.833 puntos, o 3,4%. Los tres índices registraron su peor jornada desde el 4 de abril de 2025.</em></p>
${figure(
  `${IMG}/2026-11-05/nasdaq-correccion-acciones-ia.jpg`,
  'Operadores en la Bolsa de Nueva York',
  'La venta se concentró en chips y empresas ligadas a los centros de datos. Foto: Getty Images / CNBC'
)}
<h2 class="report-chapter">El detonante: elecciones y centros de datos</h2>
<p>La caída se produjo un día después de una fuerte subida postelectoral. Los inversionistas interpretaron que los resultados de las elecciones legislativas podrían traer más regulación y resistencia local a los grandes centros de datos, justo cuando el mercado había apostado por un crecimiento acelerado de la infraestructura de inteligencia artificial.</p>
<p>El temor no es que la IA desaparezca, sino que el despliegue físico que sostiene el negocio se vuelva más lento y más caro. Ese cambio de expectativa golpeó primero a los fabricantes de chips y a los proveedores de equipos.</p>
<h2 class="report-chapter">Los números de la jornada</h2>
<p>El índice de semiconductores de Filadelfia cayó alrededor de 12%, según CNBC y Yahoo Finance. Nvidia y Qualcomm perdieron más de 9% en la sesión. Las llamadas &ldquo;Magnificent 7&rdquo; borraron cerca de un billón de dólares en valor de mercado, de acuerdo con la cadena financiera.</p>
<p>El retroceso también alcanzó a utilities y proveedores de equipos expuestos al auge de los centros de datos. Los pequeños inversionistas vendieron unos 265 millones de dólares en acciones, su mayor jornada de ventas desde 2020, según Yahoo Finance.</p>
${quote(
  'Esto es pánico puro. Esto es 100% sobre las acciones de chips y la posible desaceleración del comercio de la IA.',
  'Jay Hatfield, Infrastructure Capital Advisors, citado por The Wall Street Journal'
)}
<h2 class="report-chapter">Corrección no significa fin del ciclo</h2>
<p>Una corrección se define como una caída de al menos 10% desde un máximo reciente; una caída de 20% marca un mercado bajista. El Nasdaq ya está en el primer terreno. La historia muestra que las recuperaciones desde los mínimos de una corrección no permiten identificar el piso de este mercado: en enero de 2022, la corrección tecnológica continuó profundizándose.</p>
<p>Para los usuarios de herramientas de IA, una jornada bursátil no cambia los planes de suscripción ni la disponibilidad de los modelos. Para las empresas que financian infraestructura, en cambio, el costo del capital y el apetito por riesgo sí pueden moverse en las próximas semanas.</p>
<h2 class="report-chapter">Qué observar</h2>
<p>La atención estará en los resultados de las grandes tecnológicas, en las señales de regulación sobre centros de datos y en si la venta se extiende a otros sectores. La Reserva Federal y el mercado laboral también pesan: el viernes se publica el informe de empleo de octubre, otro dato clave para calibrar el rumbo de las tasas.</p>
${source('CNBC', 'https://www.cnbc.com/2026/11/05/stock-market-selloff-ai-fears.html')}
${source('Reuters', 'https://www.reuters.com/business/sp-500-futures-steady-after-midterm-rally-nasdaq-lags-chip-weakness-2026-11-05')}`,
    contentEn: `<h1>Nasdaq falls 5.5% into correction as the AI trade suffers its worst day since April 2025</h1>
<p class="lead"><em>The Nasdaq Composite fell about 5.5% on Thursday, November 5, and closed in correction territory, more than 11% below its October record. The S&amp;P 500 lost about 4.4% and the Dow Jones Industrial Average dropped roughly 1,833 points, or 3.4%. All three indexes posted their worst day since April 4, 2025.</em></p>
${figure(
  `${IMG}/2026-11-05/nasdaq-correccion-acciones-ia.jpg`,
  'Traders on the New York Stock Exchange floor',
  'Selling concentrated in chips and data-center-related companies. Photo: Getty Images / CNBC'
)}
<h2 class="report-chapter">The trigger: elections and data centers</h2>
<p>The drop came a day after a strong post-election rally. Investors interpreted the midterm results as a possible source of more regulation and local resistance to large data centers, just as the market had bet on accelerated growth in artificial intelligence infrastructure.</p>
<p>The fear is not that AI disappears, but that the physical buildout supporting the business becomes slower and more expensive. That shift in expectations hit chipmakers and equipment suppliers first.</p>
<h2 class="report-chapter">The day's numbers</h2>
<p>The Philadelphia Semiconductor Index fell about 12%, according to CNBC and Yahoo Finance. Nvidia and Qualcomm each lost more than 9% in the session. The so-called &ldquo;Magnificent 7&rdquo; erased roughly $1 trillion in market value, according to the financial network.</p>
<p>The decline also hit utilities and equipment suppliers exposed to the data-center boom. Retail investors sold about $265 million in equities, their biggest selling day since 2020, according to Yahoo Finance.</p>
${quote(
  'This is true panic. This is 100% about the chip stocks and the potential slowdown in the AI trade.',
  'Jay Hatfield, Infrastructure Capital Advisors, quoted by The Wall Street Journal'
)}
<h2 class="report-chapter">A correction is not the end of the cycle</h2>
<p>A correction is defined as a decline of at least 10% from a recent high; a 20% drop marks a bear market. The Nasdaq is already in the first territory. History shows that recoveries from correction lows do not identify this market's bottom: in January 2022, the tech correction continued to deepen.</p>
<p>For users of AI tools, one trading day does not change subscription plans or model availability. For companies financing infrastructure, however, the cost of capital and risk appetite may move in the coming weeks.</p>
<h2 class="report-chapter">What to watch</h2>
<p>Attention will be on big tech earnings, signals of regulation on data centers and whether the selloff spreads to other sectors. The Federal Reserve and the labor market also matter: October's employment report is due on Friday, another key data point for calibrating the path of interest rates.</p>
${source('CNBC', 'https://www.cnbc.com/2026/11/05/stock-market-selloff-ai-fears.html')}
${source('Reuters', 'https://www.reuters.com/business/sp-500-futures-steady-after-midterm-rally-nasdaq-lags-chip-weakness-2026-11-05')}`,
  },
  {
    id: '1409',
    slug: 'policia-oruro-patrullaje-aereo-drones-carnaval',
    publishedAt: '2026-11-06T10:00:00-04:00',
    date: '2026-11-06',
    titleEs: 'La Policía de Oruro activa patrullaje aéreo con drones antes del primer convite del Carnaval',
    titleEn: 'Oruro police launch drone patrols ahead of the first Carnival pre-parade',
    excerptEs:
      'El comandante departamental, coronel Miguel Ángel Zambrana, presentó el plan de seguridad ciudadana y activó operativos del Grupo de Reacción Inmediata. La estrategia combina tecnología aérea no tripulada con unidades tácticas especializadas.',
    excerptEn:
      'Departmental commander Colonel Miguel Ángel Zambrana presented the public safety plan and activated Immediate Reaction Group operations. The strategy combines unmanned aerial technology with specialized tactical units.',
    readTimeEs: '3 min',
    readTimeEn: '3 min',
    imageUrl: `${IMG}/2026-11-06/policia-oruro-patrullaje-aereo.jpg`,
    imageCaption: 'Drones incorporados al patrullaje aéreo de la Policía en Oruro. Foto: Policía Boliviana / eju.tv',
    categoryEs: 'Seguridad',
    categoryEn: 'Security',
    region: 'Bolivia',
    location: 'Oruro, Bolivia',
    source: 'eju.tv / Policía Boliviana',
    sourceUrl:
      'https://eju.tv/2026/11/la-policia-de-oruro-activa-patrullaje-aereo-y-refuerza-operativo-en-previas-del-primer-convite-del-carnaval/',
    contentEs: `<h1>La Policía de Oruro activa patrullaje aéreo con drones antes del primer convite del Carnaval</h1>
<p class="lead"><em>La Policía de Oruro presentó un plan de seguridad ciudadana que incorpora patrullaje aéreo con drones y activó los operativos del Grupo de Reacción Inmediata (GRI) de cara al primer convite del Carnaval. El despliegue fue anunciado por el comandante departamental, coronel Miguel Ángel Zambrana.</em></p>
${figure(
  `${IMG}/2026-11-06/policia-oruro-patrullaje-aereo.jpg`,
  'Drones de la Policía Boliviana para patrullaje aéreo en Oruro',
  'La tecnología aérea no tripulada se suma a los operativos del GRI. Foto: Policía Boliviana / eju.tv'
)}
<h2 class="report-chapter">Vigilancia desde el aire</h2>
<p>Según el comunicado policial, la estrategia busca fortalecer los planes de prevención, optimizar los patrullajes de vigilancia y elevar la capacidad de respuesta ante cualquier contingencia. Se trata del despliegue de tecnología aérea no tripulada junto con el accionar coordinado de unidades tácticas especializadas.</p>
<p>El evento contó con la presencia del general Lucio Jiménez, inspector general de la Policía Boliviana, lo que da cuenta del carácter departamental y nacional del operativo.</p>
<h2 class="report-chapter">El primer convite como fecha clave</h2>
<p>La medida llega en puertas del primer convite del Carnaval de Oruro, una de las festividades más multitudinarias del país. La Policía afirmó que refuerza su presencia en las calles &ldquo;para brindar mayor tranquilidad, resguardo y seguridad integral a todas las familias orureñas&rdquo;.</p>
<p>Los convites concentran bailarines, bandas, comerciantes y visitantes en el centro histórico. La gestión del flujo de personas y la prevención de incidentes son los principales desafíos para las autoridades.</p>
${quote(
  'Esta nueva y moderna estrategia institucional se enmarca en las acciones orientadas a fortalecer los planes de prevención, optimizar los patrullajes y elevar la capacidad de respuesta oportuna.',
  'Comunicado de la Policía Boliviana'
)}
<h2 class="report-chapter">Tecnología y derechos: la otra discusión</h2>
<p>El uso de drones para vigilancia plantea preguntas sobre privacidad, almacenamiento de imágenes y protocolos de uso. La Policía no detalló cuántos equipos se despliegan, qué autonomía tienen ni cómo se resguardan los datos captados. Tampoco informó si habrá coordinación con el municipio para el control del espacio aéreo.</p>
<p>En Bolivia, el uso de aeronaves pilotadas a distancia requiere autorización de la autoridad aeronáutica y el cumplimiento de normas de seguridad operacional. El operativo policial se presenta como una herramienta de prevención, pero su implementación concreta será observada por su impacto en la vida cotidiana de la ciudad.</p>
<h2 class="report-chapter">Qué sigue</h2>
<p>El plan de patrullaje aéreo se mantendrá durante la temporada de Carnaval. La Policía no anunció un balance inicial ni un calendario de evaluación. La expectativa está puesta en si el despliegue reduce incidentes y en cómo se compatibiliza con las libertades de quienes participan de la fiesta.</p>
${source('eju.tv / Policía Boliviana', 'https://eju.tv/2026/11/la-policia-de-oruro-activa-patrullaje-aereo-y-refuerza-operativo-en-previas-del-primer-convite-del-carnaval/')}`,
    contentEn: `<h1>Oruro police launch drone patrols ahead of the first Carnival pre-parade</h1>
<p class="lead"><em>Oruro police presented a public safety plan that incorporates drone patrols and activated Immediate Reaction Group (GRI) operations ahead of the first Carnival pre-parade. The deployment was announced by departmental commander Colonel Miguel Ángel Zambrana.</em></p>
${figure(
  `${IMG}/2026-11-06/policia-oruro-patrullaje-aereo.jpg`,
  'Bolivian police drones used for aerial patrols in Oruro',
  'Unmanned aerial technology joins GRI operations. Photo: Bolivian Police / eju.tv'
)}
<h2 class="report-chapter">Surveillance from the air</h2>
<p>According to the police statement, the strategy aims to strengthen prevention plans, optimize surveillance patrols and increase response capacity to any contingency. It involves the deployment of unmanned aerial technology alongside the coordinated action of specialized tactical units.</p>
<p>The event was attended by General Lucio Jiménez, inspector general of the Bolivian Police, underscoring the departmental and national scope of the operation.</p>
<h2 class="report-chapter">The first pre-parade as a key date</h2>
<p>The measure comes ahead of the first pre-parade of the Oruro Carnival, one of the country's largest festivities. Police said they are reinforcing their presence on the streets &ldquo;to provide greater tranquility, protection and comprehensive security to all Oruro families.&rdquo;</p>
<p>Pre-parades bring together dancers, bands, vendors and visitors in the historic center. Managing crowd flow and preventing incidents are the main challenges for authorities.</p>
${quote(
  'This new and modern institutional strategy is part of actions aimed at strengthening prevention plans, optimizing patrols and increasing timely response capacity.',
  'Bolivian Police statement'
)}
<h2 class="report-chapter">Technology and rights: the other debate</h2>
<p>The use of drones for surveillance raises questions about privacy, image storage and usage protocols. Police did not detail how many devices are deployed, what autonomy they have or how captured data is safeguarded. They also did not say whether there will be coordination with the municipality on airspace control.</p>
<p>In Bolivia, the use of remotely piloted aircraft requires authorization from the aeronautical authority and compliance with operational safety rules. The police operation is presented as a prevention tool, but its implementation will be watched for its impact on daily life in the city.</p>
<h2 class="report-chapter">What comes next</h2>
<p>The aerial patrol plan will remain in place during the Carnival season. Police did not announce an initial assessment or an evaluation schedule. The expectation is whether the deployment reduces incidents and how it is reconciled with the freedoms of those taking part in the festivities.</p>
${source('eju.tv / Policía Boliviana', 'https://eju.tv/2026/11/la-policia-de-oruro-activa-patrullaje-aereo-y-refuerza-operativo-en-previas-del-primer-convite-del-carnaval/')}`,
  },
];
