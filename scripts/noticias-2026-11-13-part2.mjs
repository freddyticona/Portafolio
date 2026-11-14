/**
 * Noticias verificadas del 13 y 14 de noviembre de 2026 (IDs 1445-1449).
 * Fuentes: La RazÃ³n (COP31), Red Uno (sismo e incendios), CasosDeUsoIA
 * y iaparahoy/TechCrunch (IA).
 */

const IMG = '/images/news/2026-11-13';

const figure = (src, alt, caption) =>
  `<figure class="report-figure"><img src="${src}" alt="${alt}" loading="lazy"><figcaption>${caption}</figcaption></figure>`;

const quote = (text, cite) =>
  `<blockquote class="expert-quote">&ldquo;${text}&rdquo;<cite>${cite}</cite></blockquote>`;

const source = (label, url) =>
  `<p>Con informaci&oacute;n de <a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>.</p>`;

export const noticiasPart2 = [
  {
    id: '1445',
    slug: 'cop31-rodrigo-paz-fondos-verdes-tfff',
    publishedAt: '2026-11-14T18:31:00-04:00',
    date: '2026-11-14',
    titleEs: 'COP31: Rodrigo Paz pide fondos verdes y tecnologÃ­a, y anuncia el interÃ©s boliviano en el fondo de bosques TFFF',
    titleEn: 'COP31: Rodrigo Paz asks for green funds and technology, and announces Bolivia\u2019s interest in the TFFF forest fund',
    excerptEs:
      'En la cumbre climÃ¡tica de Antalya, el presidente pidiÃ³ financiamiento climÃ¡tico, transferencia de tecnologÃ­a y alianzas para convertir la riqueza natural en proyectos de conservaciÃ³n. Su Gobierno aprobÃ³ la Estrategia Nacional de ConservaciÃ³n de la Biodiversidad y presentÃ³ dos proyectos de ley de financiamiento climÃ¡tico y crÃ©ditos de carbono.',
    excerptEn:
      'At the Antalya climate summit, the president requested climate financing, technology transfer and partnerships to turn natural wealth into conservation projects. His Government approved the National Biodiversity Conservation Strategy and presented two bills on climate financing and carbon credits.',
    readTimeEs: '5 min',
    readTimeEn: '5 min',
    imageUrl: `${IMG}/cop31-rodrigo-paz-fondos-verdes-tfff.jpg`,
    imageCaption: 'El presidente Rodrigo Paz hablÃ³ en la COP31 de Antalya, TurquÃ­a. Foto: La RazÃ³n',
    categoryEs: 'Medio Ambiente',
    categoryEn: 'Environment',
    region: 'International',
    location: 'Antalya, TurquÃ­a',
    source: 'La RazÃ³n',
    sourceUrl:
      'https://larazon.bo/energias-negocios/2026/11/14/cop31-el-presidente-rodrigo-paz-pide-fondos-verdes-y-tecnologia/',
    contentEs: `<h1>COP31: Rodrigo Paz pide fondos verdes y tecnologÃ­a, y anuncia el interÃ©s boliviano en el fondo de bosques TFFF</h1>
<p class="lead"><em>El presidente Rodrigo Paz Pereira pidiÃ³ en la COP31 de Antalya, TurquÃ­a, acceso a financiamiento climÃ¡tico, transferencia de tecnologÃ­a y alianzas internacionales para convertir la riqueza natural de Bolivia en proyectos de conservaciÃ³n y desarrollo econÃ³mico. El mandatario anunciÃ³ ademÃ¡s el interÃ©s del paÃ­s en incorporarse al Fondo Bosques Tropicales para Siempre (TFFF), impulsado por Brasil.</em></p>
${figure(
  `${IMG}/cop31-rodrigo-paz-fondos-verdes-tfff.jpg`,
  'El presidente Rodrigo Paz durante su intervenciÃ³n en la COP31 de Antalya',
  'Bolivia aspira a sumarse al Fondo Bosques Tropicales para Siempre (TFFF). Foto: La RazÃ³n'
)}
<h2 class="report-chapter">"Un bosque en pie debe valer mÃ¡s que un bosque talado"</h2>
<p>"No venimos a pedir nuevos discursos, queremos ser parte de las soluciones", afirmÃ³ Paz ante la cumbre, donde planteÃ³ pasar de los compromisos a iniciativas con resultados medibles en los territorios. PresentÃ³ al paÃ­s como estratÃ©gico por su patrimonio hÃ­drico, forestal y de biodiversidad, y destacÃ³ las cuencas del Amazonas y del Plata, cuya conservaciÃ³n beneficia a otros paÃ­ses sudamericanos.</p>
${quote(
  'Un bosque en pie debe valer mÃ¡s que un bosque talado.',
  'Rodrigo Paz, presidente de Bolivia, en la COP31'
)}
<h2 class="report-chapter">Estrategia nacional y dos proyectos de ley</h2>
<p>InformÃ³ que su Gobierno aprobÃ³ una Estrategia Nacional de ConservaciÃ³n de la Biodiversidad y presentÃ³ dos proyectos de ley: uno de financiamiento climÃ¡tico y otro sobre crÃ©ditos de carbono. "La naturaleza no se protege con promesas, sino con hechos", sostuvo el mandatario, segÃºn La RazÃ³n.</p>
<p>La aspiraciÃ³n boliviana de sumarse al TFFF enfrenta, no obstante, una prueba de elegibilidad tÃ©cnica que el propio Gobierno reconoce haber estado encaminando. Para acceder a los fondos, los paÃ­ses deben acreditar una tasa de deforestaciÃ³n inferior al 0,5% anual en un promedio trienal, parÃ¡metro que el Ministerio de ProducciÃ³n Sostenible y Medio Ambiente sostiene que Bolivia cumple con base en datos tÃ©cnicos.</p>
<h2 class="report-chapter">La defensa boliviana en Nueva York</h2>
<p>El ministro Ã“scar Mario Justiniano expuso estos avances en septiembre pasado ante la Alianza de Liderazgo para los Bosques y el Clima en Nueva York, donde destacÃ³ la reducciÃ³n de Ã¡reas afectadas por incendios. La COP31 de Antalya reÃºne a las delegaciones de la ConvenciÃ³n Marco de las Naciones Unidas sobre el Cambio ClimÃ¡tico en una ediciÃ³n marcada por la discusiÃ³n sobre la financiaciÃ³n de la conservaciÃ³n en paÃ­ses con bosques tropicales.</p>
<p>La agenda del presidente en TurquÃ­a continuÃ³ en Estambul, donde este sÃ¡bado se reuniÃ³ con el presidente Recep Tayyip Erdogan y anunciÃ³ reformas a las leyes de inversiÃ³n, minerÃ­a e hidrocarburos para atraer inversiones internacionales.</p>
${source('La RazÃ³n', 'https://larazon.bo/energias-negocios/2026/11/14/cop31-el-presidente-rodrigo-paz-pide-fondos-verdes-y-tecnologia/')}`,
    contentEn: `<h1>COP31: Rodrigo Paz asks for green funds and technology, and announces Bolivia\u2019s interest in the TFFF forest fund</h1>
<p class="lead"><em>President Rodrigo Paz Pereira requested at COP31 in Antalya, TÃ¼rkiye, access to climate financing, technology transfer and international partnerships to turn Bolivia\u2019s natural wealth into conservation and economic development projects. The president also announced the country\u2019s interest in joining the Tropical Forest Forever Facility (TFFF), promoted by Brazil.</em></p>
${figure(
  `${IMG}/cop31-rodrigo-paz-fondos-verdes-tfff.jpg`,
  'President Rodrigo Paz during his address at COP31 in Antalya',
  'Bolivia aspires to join the Tropical Forest Forever Facility (TFFF). Photo: La RazÃ³n'
)}
<h2 class="report-chapter">"A standing forest must be worth more than a felled one"</h2>
<p>"We are not here to ask for new speeches; we want to be part of the solutions," Paz told the summit, proposing to move from commitments to initiatives with measurable results in the territories. He presented the country as strategic for its water, forest and biodiversity heritage, and highlighted the Amazon and Plata river basins, whose conservation benefits other South American countries.</p>
${quote(
  'A standing forest must be worth more than a felled one.',
  'Rodrigo Paz, President of Bolivia, at COP31'
)}
<h2 class="report-chapter">National strategy and two bills</h2>
<p>He reported that his Government approved a National Biodiversity Conservation Strategy and presented two bills: one on climate financing and another on carbon credits. "Nature is not protected with promises, but with facts," the president said, according to La RazÃ³n.</p>
<p>Bolivia\u2019s aspiration to join the TFFF faces, however, a technical eligibility test the Government itself acknowledges it has been working on. To access the funds, countries must prove a deforestation rate below 0.5% annually on a three-year average, a parameter the Ministry of Sustainable Production and Environment claims Bolivia meets based on technical data.</p>
<h2 class="report-chapter">The Bolivian defense in New York</h2>
<p>Minister Ã“scar Mario Justiniano presented these advances last September before the Forest and Climate Leaders\u2019 Partnership in New York, where he highlighted the reduction of areas affected by fires. COP31 in Antalya gathers delegations of the United Nations Framework Convention on Climate Change in an edition marked by the debate on financing conservation in countries with tropical forests.</p>
<p>The president\u2019s agenda in TÃ¼rkiye continued in Istanbul, where on Saturday he met President Recep Tayyip Erdogan and announced reforms to investment, mining and hydrocarbons laws to attract international investment.</p>
${source('La RazÃ³n', 'https://larazon.bo/energias-negocios/2026/11/14/cop31-el-presidente-rodrigo-paz-pide-fondos-verdes-y-tecnologia/')}`,
  },
  {
    id: '1446',
    slug: 'sismo-magnitud-50-tarija-aniceto-arce',
    publishedAt: '2026-11-14T15:55:00-04:00',
    date: '2026-11-14',
    titleEs: 'Sismo de magnitud 5,0 y 583 kilÃ³metros de profundidad sacude la provincia Aniceto Arce de Tarija',
    titleEn: 'Magnitude 5.0 earthquake, 583 kilometers deep, shakes the Aniceto Arce province of Tarija',
    excerptEs:
      'El Observatorio San Calixto registrÃ³ este sÃ¡bado a las 14:03 un sismo de magnitud 5,0 con epicentro en la provincia Aniceto Arce, a 63 kilÃ³metros al suroeste de CaraparÃ­. Por su profundidad hipocentral de 583,3 kilÃ³metros fue clasificado como sismo profundo y no se reportaron daÃ±os personales ni materiales.',
    excerptEn:
      'The San Calixto Observatory recorded this Saturday at 14:03 a magnitude 5.0 earthquake centered in the Aniceto Arce province, 63 kilometers southwest of CaraparÃ­. With a hypocentral depth of 583.3 kilometers it was classified as a deep earthquake, with no personal or material damage reported.',
    readTimeEs: '3 min',
    readTimeEn: '3 min',
    imageUrl: `${IMG}/sismo-magnitud-50-tarija-aniceto-arce.jpg`,
    imageCaption: 'Mapa del epicentro del sismo de magnitud 5,0 registrado en Tarija. Foto: Red Uno',
    categoryEs: 'Ciencia',
    categoryEn: 'Science',
    region: 'Bolivia',
    location: 'Tarija, Bolivia',
    source: 'Red Uno / Observatorio San Calixto',
    sourceUrl:
      'https://www.reduno.com.bo/noticias/sismo-de-magnitud-5-0-sacude-la-provincia-aniceto-arce-de-tarija-20261114155241',
    contentEs: `<h1>Sismo de magnitud 5,0 y 583 kilÃ³metros de profundidad sacude la provincia Aniceto Arce de Tarija</h1>
<p class="lead"><em>El Observatorio San Calixto informÃ³ que este sÃ¡bado 14 de noviembre, a las 14:03:54, se registrÃ³ un sismo de magnitud 5,0 en Bolivia, con epicentro en la provincia Aniceto Arce del departamento de Tarija. El movimiento fue clasificado como sismo profundo y, hasta el momento, no se reportaron daÃ±os personales ni materiales.</em></p>
${figure(
  `${IMG}/sismo-magnitud-50-tarija-aniceto-arce.jpg`,
  'Mapa del epicentro del sismo de magnitud 5,0 en la provincia Aniceto Arce, Tarija',
  'El hipocentro se ubicÃ³ a 583,3 kilÃ³metros de profundidad. Foto: Red Uno'
)}
<h2 class="report-chapter">Un sismo profundo, a mÃ¡s de 500 kilÃ³metros</h2>
<p>De acuerdo con el reporte de la Red SismolÃ³gica del Observatorio San Calixto (RS-OSC), el movimiento telÃºrico tuvo una profundidad hipocentral de 583,3 kilÃ³metros, por lo que fue clasificado como un sismo profundo. El epicentro fue localizado a 63 kilÃ³metros al suroeste de CaraparÃ­, a 68 kilÃ³metros al suroeste de El Palmar y a 73 kilÃ³metros al sureste de Padcaya.</p>
${quote(
  'Debido a que el sismo tuvo una profundidad superior a los 500 kilÃ³metros, existe la posibilidad de que sea percibido por la poblaciÃ³n, dependiendo de su magnitud.',
  'Informe del Observatorio San Calixto (RS-OSC)'
)}
<h2 class="report-chapter">Por quÃ© los sismos profundos se sienten distinto</h2>
<p>Los sismos de profundidad intermedia y profunda son caracterÃ­sticos del sur de Bolivia, donde la placa de Nazca subduce bajo la placa Sudamericana y se hunde cientos de kilÃ³metros antes de generar rupturas. Al liberar energÃ­a tan lejos de la superficie, el movimiento suele percibirse como una sacudida amplia y prolongada en un Ã¡rea extensa, pero con menor intensidad en el epicentro que la de un sismo superficial equivalente.</p>
<h2 class="report-chapter">Sin daÃ±os ni rÃ©plicas</h2>
<p>Hasta el cierre de esta nota, el Observatorio San Calixto no reportÃ³ rÃ©plicas relevantes ni daÃ±os asociados, y las autoridades departamentales de Tarija no activaron protocolos de emergencia. El organismo mantiene la vigilancia sismolÃ³gica permanente en todo el territorio nacional.</p>
${source('Red Uno de Bolivia', 'https://www.reduno.com.bo/noticias/sismo-de-magnitud-5-0-sacude-la-provincia-aniceto-arce-de-tarija-20261114155241')}`,
    contentEn: `<h1>Magnitude 5.0 earthquake, 583 kilometers deep, shakes the Aniceto Arce province of Tarija</h1>
<p class="lead"><em>The San Calixto Observatory reported that this Saturday, November 14, at 14:03:54, a magnitude 5.0 earthquake was recorded in Bolivia, centered in the Aniceto Arce province of the Tarija department. The event was classified as a deep earthquake and, so far, no personal or material damage has been reported.</em></p>
${figure(
  `${IMG}/sismo-magnitud-50-tarija-aniceto-arce.jpg`,
  'Map of the epicenter of the magnitude 5.0 earthquake in the Aniceto Arce province, Tarija',
  'The hypocenter was located 583.3 kilometers deep. Photo: Red Uno'
)}
<h2 class="report-chapter">A deep quake, more than 500 kilometers down</h2>
<p>According to the report of the Seismological Network of the San Calixto Observatory (RS-OSC), the quake had a hypocentral depth of 583.3 kilometers, which classified it as a deep earthquake. The epicenter was located 63 kilometers southwest of CaraparÃ­, 68 kilometers southwest of El Palmar and 73 kilometers southeast of Padcaya.</p>
${quote(
  'Because the earthquake had a depth greater than 500 kilometers, there is a possibility it was felt by the population, depending on its magnitude.',
  'San Calixto Observatory report (RS-OSC)'
)}
<h2 class="report-chapter">Why deep quakes feel different</h2>
<p>Intermediate and deep earthquakes are characteristic of southern Bolivia, where the Nazca plate subducts under the South American plate and sinks hundreds of kilometers before generating ruptures. Releasing energy so far from the surface, the motion is usually felt as a broad, prolonged shake over a wide area, but with lower intensity at the epicenter than an equivalent shallow quake.</p>
<h2 class="report-chapter">No damage, no aftershocks</h2>
<p>As of the close of this story, the San Calixto Observatory reported no significant aftershocks or associated damage, and the departmental authorities of Tarija did not activate emergency protocols. The observatory maintains permanent seismic monitoring across the national territory.</p>
${source('Red Uno de Bolivia', 'https://www.reduno.com.bo/noticias/sismo-de-magnitud-5-0-sacude-la-provincia-aniceto-arce-de-tarija-20261114155241')}`,
  },
  {
    id: '1447',
    slug: 'incendios-chiquitania-549-focos-calor-taperas',
    publishedAt: '2026-11-14T17:45:00-04:00',
    date: '2026-11-14',
    titleEs: 'Santa Cruz registra 549 focos de calor y combate un incendio de 8.000 hectÃ¡reas en la ChiquitanÃ­a',
    titleEn: 'Santa Cruz records 549 heat spots and fights an 8,000-hectare fire in the ChiquitanÃ­a',
    excerptEs:
      'La GobernaciÃ³n de Santa Cruz informÃ³ que este sÃ¡bado se registraron 549 focos de calor en el departamento, con un acumulado de 12.864 en lo que va de noviembre. El foco mÃ¡s preocupante estÃ¡ en Taperas, San JosÃ© de Chiquitos, donde el fuego afectÃ³ unas 8.000 hectÃ¡reas con un frente principal de 16 kilÃ³metros.',
    excerptEn:
      'The Santa Cruz Governor\u2019s Office reported 549 heat spots in the department this Saturday, with 12,864 accumulated so far in November. The most concerning focus is in Taperas, San JosÃ© de Chiquitos, where fire has burned about 8,000 hectares with a 16-kilometer main front.',
    readTimeEs: '4 min',
    readTimeEn: '4 min',
    imageUrl: `${IMG}/incendios-chiquitania-549-focos-calor-taperas.jpg`,
    imageCaption: 'El incendio en la zona de Taperas ya afectÃ³ aproximadamente 8.000 hectÃ¡reas. Foto: Red Uno',
    categoryEs: 'Medio Ambiente',
    categoryEn: 'Environment',
    region: 'Bolivia',
    location: 'San JosÃ© de Chiquitos, Santa Cruz, Bolivia',
    source: 'Red Uno de Bolivia',
    sourceUrl:
      'https://www.reduno.com.bo/noticias/santa-cruz-registra-549-focos-de-calor-este-14-de-noviembre-20261114164649',
    contentEs: `<h1>Santa Cruz registra 549 focos de calor y combate un incendio de 8.000 hectÃ¡reas en la ChiquitanÃ­a</h1>
<p class="lead"><em>Los incendios forestales mantienen en alerta a las autoridades de Santa Cruz. Este sÃ¡bado 14 de noviembre se registraron 549 focos de calor en el departamento, segÃºn el vocero de la GobernaciÃ³n, Rolando Schrupp, y el fuego ya afectÃ³ aproximadamente 8.000 hectÃ¡reas en la zona de Taperas, al sur de IpiÃ¡ y ChochÃ­s, en el municipio de San JosÃ© de Chiquitos.</em></p>
${figure(
  `${IMG}/incendios-chiquitania-549-focos-calor-taperas.jpg`,
  'Incendio forestal en la ChiquitanÃ­a, Santa Cruz',
  'El fuego avanza en una extensiÃ³n de pampa que facilita la propagaciÃ³n. Foto: Red Uno'
)}
<h2 class="report-chapter">Un frente de 16 kilÃ³metros en Taperas</h2>
<p>Schrupp indicÃ³ que en lo que va del mes se acumularon 12.864 focos de calor en el departamento, y que durante los Ãºltimos dÃ­as se atendieron cinco incendios forestales, de los cuales cuatro ya fueron controlados. El incendio en San JosÃ© de Chiquitos continÃºa siendo motivo de preocupaciÃ³n por su rÃ¡pida expansiÃ³n: segÃºn el monitoreo aÃ©reo, presenta un frente principal de aproximadamente 16 kilÃ³metros, una retaguardia de 14 kilÃ³metros y costados de 10 kilÃ³metros, con desplazamiento hacia el sur.</p>
<p>El vocero seÃ±alÃ³ que el fuego avanza en una zona alejada, donde no existen comunidades ni cultivos cercanos, debido a que se trata de una extensiÃ³n de pampa, una caracterÃ­stica que facilita la propagaciÃ³n de las llamas. Los equipos de emergencia trabajan para evitar que el incendio alcance zonas habitadas.</p>
${quote(
  'El operativo busca frenar el avance del incendio y evitar que las llamas lleguen a las nacientes del rÃ­o San Miguel y a los matorrales de Guapoy.',
  'Reporte de la GobernaciÃ³n de Santa Cruz, vÃ­a Red Uno'
)}
<h2 class="report-chapter">Operativo con Bambi Bucket y maquinaria pesada</h2>
<p>El operativo cuenta con la participaciÃ³n de Defensa Civil, las Fuerzas Armadas, bomberos y personal de la GobernaciÃ³n y del municipio. Entre las medidas previstas se encuentran la apertura de brechas con maquinaria pesada y el uso de equipos Bambi Bucket para combatir el fuego desde el aire. Las autoridades estiman que los trabajos de extinciÃ³n podrÃ­an extenderse entre cuatro y cinco dÃ­as.</p>
<h2 class="report-chapter">El acumulado de la temporada</h2>
<p>La ChiquitanÃ­a, una de las regiones con mayor biodiversidad de Bolivia, sufre episodios recurrentes de incendios en la temporada seca. Los focos de calor monitoreados por satÃ©lite son el principal indicador de alerta temprana para el despliegue de brigadas, y el acumulado mensual de noviembre ya supera ampliamente el ritmo de otros meses de gestiÃ³n.</p>
${source('Red Uno de Bolivia', 'https://www.reduno.com.bo/noticias/santa-cruz-registra-549-focos-de-calor-este-14-de-noviembre-20261114164649')}`,
    contentEn: `<h1>Santa Cruz records 549 heat spots and fights an 8,000-hectare fire in the ChiquitanÃ­a</h1>
<p class="lead"><em>Wildfires keep Santa Cruz authorities on alert. This Saturday, November 14, 549 heat spots were recorded in the department, according to the Governor\u2019s Office spokesman Rolando Schrupp, and fire has already burned approximately 8,000 hectares in the Taperas area, south of IpiÃ¡ and ChochÃ­s, in the municipality of San JosÃ© de Chiquitos.</em></p>
${figure(
  `${IMG}/incendios-chiquitania-549-focos-calor-taperas.jpg`,
  'Wildfire in the ChiquitanÃ­a, Santa Cruz',
  'The fire spreads through open savanna terrain that favors propagation. Photo: Red Uno'
)}
<h2 class="report-chapter">A 16-kilometer front in Taperas</h2>
<p>Schrupp stated that 12,864 heat spots have accumulated in the department so far this month, and that five wildfires were attended in recent days, four of them already controlled. The San JosÃ© de Chiquitos fire remains a concern due to its rapid expansion: according to aerial monitoring, it shows a main front of approximately 16 kilometers, a 14-kilometer rear and 10-kilometer flanks, moving south.</p>
<p>The spokesman noted the fire advances in a remote area with no nearby communities or crops, as it is open savanna terrain, a feature that facilitates the spread of flames. Emergency teams are working to keep the fire from reaching inhabited areas.</p>
${quote(
  'The operation seeks to stop the fire\u2019s advance and keep the flames from reaching the headwaters of the San Miguel river and the Guapoy shrublands.',
  'Santa Cruz Governor\u2019s Office report, via Red Uno'
)}
<h2 class="report-chapter">Operation with Bambi Bucket and heavy machinery</h2>
<p>The operation involves Civil Defense, the Armed Forces, firefighters and personnel from the Governor\u2019s Office and the municipality. Planned measures include opening firebreaks with heavy machinery and using Bambi Bucket equipment to fight the fire from the air. Authorities estimate extinction work could last four to five days.</p>
<h2 class="report-chapter">The season\u2019s accumulated toll</h2>
<p>The ChiquitanÃ­a, one of Bolivia\u2019s most biodiverse regions, suffers recurrent fires during the dry season. Satellite-monitored heat spots are the main early warning indicator for brigade deployment, and November\u2019s monthly total already far exceeds the pace of other months this year.</p>
${source('Red Uno de Bolivia', 'https://www.reduno.com.bo/noticias/santa-cruz-registra-549-focos-de-calor-este-14-de-noviembre-20261114164649')}`,
  },
  {
    id: '1448',
    slug: 'gemini-4-hydrogen-google-search-gratis',
    publishedAt: '2026-11-13T09:00:00-04:00',
    date: '2026-11-13',
    titleEs: 'Google lanza Gemini 4 Hydrogen: el modelo rÃ¡pido llega gratis a Search, la API y AI Studio a 1,50 dÃ³lares por millÃ³n de tokens',
    titleEn: 'Google launches Gemini 4 Hydrogen: the fast model arrives free to Search, the API and AI Studio at $1.50 per million tokens',
    excerptEs:
      'Google puso su nuevo modelo Gemini 4 Hydrogen a disposiciÃ³n de todos los usuarios: ya responde en Google Search, en la app de Gemini, en la API (1,50 dÃ³lares por millÃ³n de tokens de entrada y 7,50 de salida) y en el tier gratuito de AI Studio. Google lo posiciona como el complemento veloz de los modelos de frontera Gemini 4 Carbon y Argon.',
    excerptEn:
      'Google made its new model Gemini 4 Hydrogen available to everyone: it now answers in Google Search, the Gemini app, the API ($1.50 per million input tokens, $7.50 output) and AI Studio\u2019s free tier. Google positions it as the fast complement to its frontier models Gemini 4 Carbon and Argon.',
    readTimeEs: '5 min',
    readTimeEn: '5 min',
    imageUrl: `${IMG}/gemini-4-hydrogen-google-search-gratis.jpg`,
    imageCaption: 'Gemini 4 Hydrogen ya responde en Google Search para todos los usuarios del mundo. Foto: archivo',
    categoryEs: 'TecnologÃ­a',
    categoryEn: 'Technology',
    region: 'International',
    location: 'Mountain View, Estados Unidos',
    source: 'CasosDeUsoIA / Radar IA',
    sourceUrl: 'https://casosdeusoia.ai/noticias/2026-11-13',
    contentEs: `<h1>Google lanza Gemini 4 Hydrogen: el modelo rÃ¡pido llega gratis a Search, la API y AI Studio a 1,50 dÃ³lares por millÃ³n de tokens</h1>
<p class="lead"><em>Google lanzÃ³ Gemini 4 Hydrogen, el modelo rÃ¡pido de la familia Gemini 4 pensado para ejecuciÃ³n veloz y flujos de trabajo de agentes, no para razonamiento profundo. El 12 y 13 de noviembre empezÃ³ a responder en Google Search para todos los usuarios del mundo, en la app de Gemini, en la API y en el tier gratuito de AI Studio, con un precio plano en todo su contexto de un millÃ³n de tokens.</em></p>
${figure(
  `${IMG}/gemini-4-hydrogen-google-search-gratis.jpg`,
  'Lanzamiento de Gemini 4 Hydrogen en la app de Gemini y Google Search',
  'El modelo llega gratis a todos los tiers de AI Studio y a la API. Foto: archivo'
)}
<h2 class="report-chapter">Precio y benchmarks</h2>
<p>Hydrogen cuesta 1,50 dÃ³lares por millÃ³n de tokens de entrada y 7,50 por millÃ³n de salida, segÃºn Google, y tiene cuatro niveles de razonamiento (low, medium, high y xhigh). En el Artificial Analysis Intelligence Index supera a Gemini 4 Argon en su nivel de razonamiento por defecto (51 contra 50) y llega a 54 en su nivel xhigh.</p>
<p>Frente a Gemini 3.8 Flash, termina tareas 2,5 veces mÃ¡s rÃ¡pido, triplica su puntaje en Terminal-Bench 4.1 (57% contra 18,2%) y recorta las afirmaciones fabricadas en mÃ¡s de cinco veces, segÃºn los datos difundidos por la compaÃ±Ã­a.</p>
${quote(
  'Hydrogen estÃ¡ pensado para ejecuciÃ³n rÃ¡pida y workflows de agentes, no para razonamiento profundo: es el complemento de Carbon y Argon.',
  'SÃ­ntesis de la presentaciÃ³n de Google, vÃ­a CasosDeUsoIA'
)}
<h2 class="report-chapter">DÃ³nde estÃ¡ disponible</h2>
<p>El modelo llega gratis a todos los tiers de AI Studio, a la app de Gemini, a Gemini API, a Google Search â€”donde reemplaza progresivamente al modelo que respondÃ­a el buscadorâ€” y a Antigravity para suscriptores Pro y Ultra. La BÃºsqueda pasa asÃ­ a usar Hydrogen en todo el mundo, con respuestas visuales reforzadas para preguntas complejas.</p>
<h2 class="report-chapter">Una semana movida en IA</h2>
<p>El lanzamiento cierra una semana intensa: Anthropic presentÃ³ el lunes 9 Claude Fable 5.2 y Mythos 5.2 a 8 dÃ³lares por millÃ³n de tokens de entrada (20% menos que la versiÃ³n anterior), Notion revelÃ³ el 12 que su proveedor Fireworks AI habÃ­a expuesto transcripciones de chats de menos del 1% de los espacios de trabajo, y OpenAI estrenÃ³ el 10 los perfiles de negocios en ChatGPT. TambiÃ©n Meta habilitÃ³ que su asistente Muse llame por telÃ©fono a negocios de Estados Unidos en nombre de sus usuarios.</p>
${source('CasosDeUsoIA', 'https://casosdeusoia.ai/noticias/2026-11-13')}
${source('Radar IA (sergiocuadros.dev)', 'https://sergiocuadros.dev/blog/radar-ia-6-13-noviembre-2026/')}`,
    contentEn: `<h1>Google launches Gemini 4 Hydrogen: the fast model arrives free to Search, the API and AI Studio at $1.50 per million tokens</h1>
<p class="lead"><em>Google launched Gemini 4 Hydrogen, the fast model of the Gemini 4 family designed for quick execution and agentic workflows, not deep reasoning. On November 12 and 13 it began answering in Google Search for all users worldwide, in the Gemini app, in the API and in AI Studio\u2019s free tier, with a flat price across its one-million-token context.</em></p>
${figure(
  `${IMG}/gemini-4-hydrogen-google-search-gratis.jpg`,
  'Launch of Gemini 4 Hydrogen in the Gemini app and Google Search',
  'The model arrives free to all AI Studio tiers and the API. Photo: archive'
)}
<h2 class="report-chapter">Price and benchmarks</h2>
<p>Hydrogen costs $1.50 per million input tokens and $7.50 per million output tokens, according to Google, and has four reasoning levels (low, medium, high and xhigh). On the Artificial Analysis Intelligence Index it beats Gemini 4 Argon at its default reasoning level (51 versus 50) and reaches 54 at its xhigh level.</p>
<p>Against Gemini 3.8 Flash, it completes tasks 2.5 times faster, triples its Terminal-Bench 4.1 score (57% versus 18.2%) and cuts fabricated claims by more than five times, according to figures released by the company.</p>
${quote(
  'Hydrogen is built for fast execution and agentic workflows, not deep reasoning: it complements Carbon and Argon.',
  'Summary of Google\u2019s announcement, via CasosDeUsoIA'
)}
<h2 class="report-chapter">Where it is available</h2>
<p>The model arrives free to all AI Studio tiers, the Gemini app, the Gemini API, Google Search â€”where it progressively replaces the model answering the search engineâ€” and Antigravity for Pro and Ultra subscribers. Search thus moves to Hydrogen worldwide, with reinforced visual answers for complex questions.</p>
<h2 class="report-chapter">A busy week in AI</h2>
<p>The launch caps a busy week: Anthropic released Claude Fable 5.2 and Mythos 5.2 on Monday the 9th at $8 per million input tokens (20% less than the previous version), Notion revealed on the 12th that its provider Fireworks AI had exposed chat transcripts from less than 1% of workspaces, and OpenAI launched business profiles in ChatGPT on the 10th. Meta also enabled its Muse assistant to call businesses in the United States on users\u2019 behalf.</p>
${source('CasosDeUsoIA', 'https://casosdeusoia.ai/noticias/2026-11-13')}
${source('Radar IA (sergiocuadros.dev)', 'https://sergiocuadros.dev/blog/radar-ia-6-13-noviembre-2026/')}`,
  },
  {
    id: '1449',
    slug: 'openai-chatgpt-wallet-agentes-compras',
    publishedAt: '2026-11-14T12:00:00-04:00',
    date: '2026-11-14',
    titleEs: 'OpenAI estrena ChatGPT Wallet: los agentes de IA ya completan compras con autorizaciÃ³n biomÃ©trica del usuario',
    titleEn: 'OpenAI launches ChatGPT Wallet: AI agents now complete purchases with biometric user approval',
    excerptEs:
      'OpenAI presentÃ³ ChatGPT Wallet, una cartera para que los agentes de ChatGPT Work, Codex y dots completen compras con la aprobaciÃ³n del usuario y las protecciones de tarjeta existentes. El acceso inicial se limita a suscriptores Pro de Estados Unidos; cada compra exige revisar el pedido y una autorizaciÃ³n biomÃ©trica, en colaboraciÃ³n con American Express, Mastercard y Visa.',
    excerptEn:
      'OpenAI introduced ChatGPT Wallet, a wallet allowing agents in ChatGPT Work, Codex and dots to complete purchases with user approval and existing card protections. Initial access is limited to US Pro subscribers; every purchase requires reviewing the order and biometric approval, in partnership with American Express, Mastercard and Visa.',
    readTimeEs: '5 min',
    readTimeEn: '5 min',
    imageUrl: `${IMG}/openai-chatgpt-wallet-agentes-compras.jpg`,
    imageCaption: 'ChatGPT Wallet permite a los agentes completar compras con autorizaciÃ³n biomÃ©trica. Foto: archivo',
    categoryEs: 'TecnologÃ­a',
    categoryEn: 'Technology',
    region: 'International',
    location: 'San Francisco, Estados Unidos',
    source: 'TechCrunch / IA para Hoy',
    sourceUrl: 'https://iaparahoy.com/hoy/2026-11-14',
    contentEs: `<h1>OpenAI estrena ChatGPT Wallet: los agentes de IA ya completan compras con autorizaciÃ³n biomÃ©trica del usuario</h1>
<p class="lead"><em>OpenAI lanzÃ³ en Estados Unidos, para parte de los usuarios Pro, una cartera que permite a sus agentes completar compras con validaciÃ³n por Face ID o huella y pagos tokenizados, en colaboraciÃ³n con American Express, Mastercard y Visa. Es el salto del asistente que recomienda al agente que compra, con impacto directo en comercio y medios de pago.</em></p>
${figure(
  `${IMG}/openai-chatgpt-wallet-agentes-compras.jpg`,
  'ChatGPT Wallet: la cartera con la que los agentes de IA completan compras',
  'Cada compra exige revisar el pedido y una autorizaciÃ³n biomÃ©trica. Foto: archivo'
)}
<h2 class="report-chapter">CÃ³mo funciona la cartera</h2>
<p>ChatGPT Wallet es una forma segura para que los agentes en ChatGPT Work, Codex y dots completen compras con la aprobaciÃ³n del usuario y las protecciones de tarjeta existentes. El acceso inicial se limita a algunos suscriptores Pro adultos de Estados Unidos con tarjetas elegibles. Cada compra exige revisar el pedido y una autorizaciÃ³n biomÃ©trica; los lÃ­mites para compras autÃ³nomas quedan para mÃ¡s adelante, segÃºn TechCrunch.</p>
<p>Los pagos se procesan con tokenizaciÃ³n â€”los datos reales de la tarjeta nunca viajan al comercioâ€”, en colaboraciÃ³n con American Express, Mastercard y Visa. La compaÃ±Ã­a presenta el producto como la transiciÃ³n del asistente que recomienda productos al agente que ejecuta la compra.</p>
${quote(
  'Ejecutar un pago exige separar preparaciÃ³n, autorizaciÃ³n y justificante: la tokenizaciÃ³n protege la tarjeta, pero no sustituye el control del gasto.',
  'AnÃ¡lisis de Intelia AI Report sobre ChatGPT Wallet'
)}
<h2 class="report-chapter">La carrera del agente con dinero</h2>
<p>La jugada de OpenAI llega una semana despuÃ©s de que Google habilitara el 13 de noviembre que Gemini lea los movimientos de tarjetas y cuentas bancarias de sus usuarios en Estados Unidos a travÃ©s de Google Wallet y de la integradora Plaid: el usuario etiqueta "@Google Wallet" en una conversaciÃ³n y recibe respuestas sobre sus gastos. Gemini solo puede leer la informaciÃ³n, no mover ni invertir el dinero, segÃºn la pÃ¡gina de ayuda del producto.</p>
<h2 class="report-chapter">El contexto de mercado</h2>
<p>El contexto de mercado tambiÃ©n explica el movimiento: la salida a bolsa de Anthropic acumula pedidos por seis veces las acciones disponibles en una oferta de 64.000 millones de dÃ³lares con precio previsto para el 18 de noviembre, mientras Nvidia afronta la marcha de su fundador Jensen Huang y una caÃ­da del 35% en bolsa. El dinero de los agentes de IA ya es un negocio, y los laboratorios se disputan quiÃ©n lo custodia.</p>
${source('IA para Hoy (resumen del 14/11/2026)', 'https://iaparahoy.com/hoy/2026-11-14')}
${source('Intelia AI Report', 'https://noscomelaia.com/14-nov-2026-el-agente-ya-tiene-cartera-la-autorizacion-sigue-siendo-tuya/')}
${source('Infobae (Gemini + Google Wallet)', 'https://www.infobae.com/estados-unidos/2026/11/14/google-habilito-que-gemini-lea-las-compras-y-cuentas-bancarias-de-sus-usuarios-en-estados-unidos/')}`,
    contentEn: `<h1>OpenAI launches ChatGPT Wallet: AI agents now complete purchases with biometric user approval</h1>
<p class="lead"><em>OpenAI launched in the United States, for part of its Pro users, a wallet allowing its agents to complete purchases with Face ID or fingerprint validation and tokenized payments, in partnership with American Express, Mastercard and Visa. It is the leap from the recommending assistant to the purchasing agent, with direct impact on commerce and payment rails.</em></p>
${figure(
  `${IMG}/openai-chatgpt-wallet-agentes-compras.jpg`,
  'ChatGPT Wallet: the wallet with which AI agents complete purchases',
  'Every purchase requires reviewing the order and biometric approval. Photo: archive'
)}
<h2 class="report-chapter">How the wallet works</h2>
<p>ChatGPT Wallet is a secure way for agents in ChatGPT Work, Codex and dots to complete purchases with user approval and existing card protections. Initial access is limited to some adult Pro subscribers in the United States with eligible cards. Every purchase requires reviewing the order and biometric approval; limits for autonomous purchases are left for later, according to TechCrunch.</p>
<p>Payments are processed with tokenization â€”actual card data never travels to the merchantâ€” in partnership with American Express, Mastercard and Visa. The company frames the product as the transition from the assistant that recommends products to the agent that executes the purchase.</p>
${quote(
  'Executing a payment requires separating preparation, approval and receipt: tokenization protects the card but does not replace spending control.',
  'Intelia AI Report analysis of ChatGPT Wallet'
)}
<h2 class="report-chapter">The agent-with-money race</h2>
<p>OpenAI\u2019s move comes a week after Google enabled on November 13 Gemini to read card and bank account activity of its users in the United States through Google Wallet and the connector Plaid: the user tags "@Google Wallet" in a conversation and gets answers about their spending. Gemini can only read the information, not move or invest the money, according to the product help page.</p>
<h2 class="report-chapter">The market context</h2>
<p>The market context also explains the move: Anthropic\u2019s IPO has gathered orders for six times the available shares in a 64-billion-dollar offering with pricing expected on November 18, while Nvidia faces founder Jensen Huang\u2019s departure and a 35% stock decline. Agents\u2019 money is now a business, and the labs are competing over who safeguards it.</p>
${source('IA para Hoy (11/14/2026 digest)', 'https://iaparahoy.com/hoy/2026-11-14')}
${source('Intelia AI Report', 'https://noscomelaia.com/14-nov-2026-el-agente-ya-tiene-cartera-la-autorizacion-sigue-siendo-tuya/')}
${source('Infobae (Gemini + Google Wallet)', 'https://www.infobae.com/estados-unidos/2026/11/14/google-habilito-que-gemini-lea-las-compras-y-cuentas-bancarias-de-sus-usuarios-en-estados-unidos/')}`,
  },
];
