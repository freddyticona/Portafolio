import io, re, json

TS = 'src/translations.ts'
s = io.open(TS, encoding='utf-8').read()

# publishedAt real (hora de publicación en el sitio)
PUB = {
    '1164': '2026-08-31T09:09:00-04:00',
    '1165': '2026-08-31T09:10:00-04:00',
    '1166': '2026-08-31T09:11:00-04:00',
    '1167': '2026-08-31T09:12:00-04:00',
    '1168': '2026-08-31T09:13:00-04:00',
    '1169': '2026-08-31T09:14:00-04:00',
    '1170': '2026-08-31T09:15:00-04:00',
    '1171': '2026-08-31T09:16:00-04:00',
}

ARTICLES = []

# 1 — Bloqueo San Pablo
ARTICLES.append({
'id': '1164', 'slug': 'bloqueo-puente-san-pablo-mesa-dialogo-justiniano-eguez-ds-5676',
'categoryEs': 'Bolivia', 'categoryEn': 'Bolivia',
'titleEs': "Mesa de diálogo en San Pablo busca levantar el bloqueo en la ruta Santa Cruz-Beni por el DS 5676",
'titleEn': "Dialogue table at San Pablo seeks to lift the blockade on the Santa Cruz-Beni route over Decree 5676",
'excerptEs': "El ministro de Defensa y el gobernador del Beni negociaron la noche del sábado con los productores movilizados para restablecer el tránsito en la carretera interdepartamental.",
'excerptEn': "The Defense Minister and the Beni governor negotiated Saturday night with mobilized producers to restore traffic on the interdepartmental highway.",
'imageUrl': '/images/blog/noticias-2026/1138-puente-san-pablo-bloqueo.jpg',
'imageCaption': 'Puente San Pablo, en la ruta Santa Cruz-Beni. Fuente: archivo de prensa.',
'source': 'eju.tv', 'sourceUrl': 'https://eju.tv/', 'region': 'Bolivia',
'location': 'Puente San Pablo, Santa Cruz-Beni',
'contentEs': "<h1>Mesa de diálogo en San Pablo busca levantar el bloqueo en la ruta Santa Cruz-Beni por el DS 5676</h1><figure class='report-figure'><img src='/images/blog/noticias-2026/1138-puente-san-pablo-bloqueo.jpg' alt='Puente San Pablo, en la ruta Santa Cruz-Beni' loading='lazy'><figcaption>Puente San Pablo, en la ruta Santa Cruz-Beni. Fuente: archivo de prensa.</figcaption></figure><p><em>El bloqueo en el puente San Pablo, iniciado el miércoles 26 de agosto, mantiene cortada la carretera que une Santa Cruz con el Beni. La noche del sábado 29, el ministro de Defensa y el gobernador del Beni instalaron una mesa de diálogo con los productores movilizados para intentar restablecer el tránsito.</em></p><h2>El bloqueo y su origen</h2><p>La protesta comenzó el 26 de agosto en el puente San Pablo. Los productores movilizados rechazan el Decreto Supremo 5676, promulgado el 17 de agosto, que fija una tarifa de 18 bolivianos por litro de diésel para los grandes consumidores.</p><h2>La mesa de diálogo del sábado</h2><p>La mesa se instaló la noche del sábado 29 de agosto con la presencia del ministro de Defensa, Ernesto Justiniano, y del gobernador del Beni, Jesús Egüez. Justiniano declaró que el propósito es <blockquote>\"retornar a un estado de normalidad\"</blockquote> y calificó la situación como perjudicial para la región.</p><h2>Qué sigue</h2><p>Las partes buscan acuerdos sobre el abastecimiento y la tarifa del diésel para reabrir la vía. La continuidad del diálogo es clave para evitar que la medida de presión se extienda a otros tramos de la red vial del oriente boliviano.</p><p><strong>Fuente: eju.tv — nota de portada, 30 de agosto de 2026.</strong></p>",
'contentEn': "<h1>Dialogue table at San Pablo seeks to lift the blockade on the Santa Cruz-Beni route over Decree 5676</h1><figure class='report-figure'><img src='/images/blog/noticias-2026/1138-puente-san-pablo-bloqueo.jpg' alt='San Pablo bridge, on the Santa Cruz-Beni route' loading='lazy'><figcaption>San Pablo bridge, on the Santa Cruz-Beni route. Source: press archive.</figcaption></figure><p><em>The blockade at the San Pablo bridge, which began Wednesday August 26, keeps the Santa Cruz-Beni highway cut. On Saturday night, the Defense Minister and the Beni governor set up a dialogue table with mobilized producers to restore traffic.</em></p><h2>The blockade and its origin</h2><p>The protest began August 26 at the San Pablo bridge. Mobilized producers reject Supreme Decree 5676, enacted August 17, which sets a rate of 18 bolivianos per liter of diesel for large consumers.</p><h2>Saturday's dialogue table</h2><p>The table convened Saturday night, August 29, with Defense Minister Ernesto Justiniano and Beni governor Jesús Egüez. Justiniano said the goal is <blockquote>\"to return to a state of normality\"</blockquote> and called the situation harmful to the region.</p><h2>What comes next</h2><p>The parties seek agreements on diesel supply and pricing to reopen the road. Continuing dialogue is key to preventing the protest from spreading to other routes in eastern Bolivia.</p><p><strong>Source: eju.tv — front page note, August 30, 2026.</strong></p>",
})

# 2 — Denuncia Urquidi/Cerimedo
ARTICLES.append({
'id': '1165', 'slug': 'denuncia-primera-dama-maria-elena-urquidi-cerimedo-lucas-torres',
'categoryEs': 'Bolivia', 'categoryEn': 'Bolivia',
'titleEs': "Abogado Lucas Torres presenta denuncia contra la primera dama María Elena Urquidi y Fernando Cerimedo",
'titleEn': "Lawyer Lucas Torres files complaint against first lady María Elena Urquidi and Fernando Cerimedo",
'excerptEs': "La Fiscalía evaluará si admite, observa o desestima la denuncia presentada el 27 de agosto.",
'excerptEn': "The Prosecutor's Office will decide whether to admit, observe or dismiss the complaint filed August 27.",
'imageUrl': '/images/blog/caso-nadia-beller/cerimedo-efe.jpg',
'imageCaption': 'Fernando Cerimedo. Fuente: EFE / archivo.',
'source': 'Los Tiempos', 'sourceUrl': 'https://www.lostiempos.com/', 'region': 'Bolivia',
'location': 'La Paz',
'contentEs': "<h1>Abogado Lucas Torres presenta denuncia contra la primera dama María Elena Urquidi y Fernando Cerimedo</h1><figure class='report-figure'><img src='/images/blog/caso-nadia-beller/cerimedo-efe.jpg' alt='Fernando Cerimedo' loading='lazy'><figcaption>Fernando Cerimedo. Fuente: EFE / archivo.</figcaption></figure><p><em>El abogado Lucas Torres presentó el 27 de agosto una denuncia penal contra la primera dama, María Elena Urquidi, y contra Fernando Cerimedo, en el marco del caso que vincula al entorno presidencial.</em></p><h2>La denuncia formal</h2><p>Torres formalizó la denuncia ante el Ministerio Público, apuntando a la esposa del presidente y al excolaborador Cerimedo. El escrito abarca hechos relacionados con la investigación abierta contra este último.</p><h2>La respuesta de la Fiscalía</h2><p>La Fiscalía informó que evaluará la denuncia y determinará si la admite, la observa o la desestima. No precisó plazos ni la probable tipificación de los hechos denunciados.</p><h2>Contexto del caso</h2><p>La denuncia amplía la atención sobre el círculo cercano al presidente Rodrigo Paz, en un expediente que ya comprende a Cerimedo y a la abogada Nadia Beller.</p><p><strong>Fuente: Los Tiempos — nota de portada, 27 de agosto de 2026.</strong></p>",
'contentEn': "<h1>Lawyer Lucas Torres files complaint against first lady María Elena Urquidi and Fernando Cerimedo</h1><figure class='report-figure'><img src='/images/blog/caso-nadia-beller/cerimedo-efe.jpg' alt='Fernando Cerimedo' loading='lazy'><figcaption>Fernando Cerimedo. Source: EFE / archive.</figcaption></figure><p><em>Lawyer Lucas Torres filed a criminal complaint August 27 against first lady María Elena Urquidi and Fernando Cerimedo, in the case linking the presidential entourage.</em></p><h2>The formal complaint</h2><p>Torres formalized the complaint before the Public Prosecutor's Office, targeting the president's wife and former collaborator Cerimedo. The filing covers facts related to the open investigation against the latter.</p><h2>The Prosecutor's response</h2><p>The Prosecutor's Office said it will evaluate the complaint and decide whether to admit, observe or dismiss it, without specifying deadlines or the probable classification of the reported facts.</p><h2>Case background</h2><p>The complaint widens scrutiny of the circle around President Rodrigo Paz, in a case that already includes Cerimedo and lawyer Nadia Beller.</p><p><strong>Source: Los Tiempos — front page note, August 27, 2026.</strong></p>",
})

# 3 — Cerimedo desde la cárcel
ARTICLES.append({
'id': '1166', 'slug': 'cerimedo-declaracion-prision-caso-beller-tres-investigaciones',
'categoryEs': 'Bolivia', 'categoryEn': 'Bolivia',
'titleEs': "Cerimedo difunde declaración desde prisión: \"mi rol como colaborador del presidente no me otorgó ningún poder\"",
'titleEn': "Cerimedo releases statement from prison: \"my role as the president's collaborator gave me no power\"",
'excerptEs': "El excolaborador presidencial está investigado en tres casos, incluido el de intento de feminicidio contra Nadia Beller.",
'excerptEn': "The former presidential collaborator is under investigation in three cases, including attempted femicide against Nadia Beller.",
'imageUrl': '/images/blog/caso-nadia-beller/cerimedo-aprehendido.webp',
'imageCaption': 'Fernando Cerimedo tras su aprehensión. Fuente: archivo de prensa.',
'source': 'Los Tiempos', 'sourceUrl': 'https://www.lostiempos.com/', 'region': 'Bolivia',
'location': 'Santa Cruz',
'contentEs': "<h1>Cerimedo difunde declaración desde prisión: \"mi rol como colaborador del presidente no me otorgó ningún poder\"</h1><figure class='report-figure'><img src='/images/blog/caso-nadia-beller/cerimedo-aprehendido.webp' alt='Fernando Cerimedo tras su aprehensión' loading='lazy'><figcaption>Fernando Cerimedo tras su aprehensión. Fuente: archivo de prensa.</figcaption></figure><p><em>Fernando Cerimedo enfrenta tres investigaciones, entre ellas la de intento de feminicidio contra Nadia Beller. El 27 de agosto difundió una declaración desde prisión, en la que se desmarca de las acusaciones que lo vinculan con el entorno presidencial.</em></p><h2>Investigado en tres casos</h2><p>El excolaborador del presidente Rodrigo Paz acumula tres procesos abiertos. El más grave es el de intento de feminicidio contra la abogada Nadia Beller, por el que se encuentra recluido.</p><h2>La declaración textual</h2><p>Cerimedo afirmó:<blockquote>\"Mi rol como colaborador del presidente no me otorgó ningún poder\"</blockquote>, en un intento de distanciarse de las operaciones que le atribuye la Fiscalía.</p><h2>Qué sigue en el caso</h2><p>El Ministerio Público continúa las diligencias del proceso, mientras la defensa busca modificar su situación procesal y cuestionar la imputación en su contra.</p><p><strong>Fuente: Los Tiempos — nota de portada, 27 de agosto de 2026.</strong></p>",
'contentEn': "<h1>Cerimedo releases statement from prison: \"my role as the president's collaborator gave me no power\"</h1><figure class='report-figure'><img src='/images/blog/caso-nadia-beller/cerimedo-aprehendido.webp' alt='Fernando Cerimedo after his detention' loading='lazy'><figcaption>Fernando Cerimedo after his detention. Source: press archive.</figcaption></figure><p><em>Fernando Cerimedo faces three investigations, including attempted femicide against Nadia Beller. On August 27 he released a statement from prison distancing himself from the accusations linking him to the presidential entourage.</em></p><h2>Under investigation in three cases</h2><p>The former collaborator of President Rodrigo Paz has three open proceedings. The most serious is the attempted femicide of lawyer Nadia Beller, for which he is detained.</p><h2>The verbatim statement</h2><p>Cerimedo stated:<blockquote>\"My role as the president's collaborator gave me no power\"</blockquote>, in an effort to distance himself from the operations attributed to him by prosecutors.</p><h2>What comes next</h2><p>The Public Prosecutor's Office continues proceedings, while the defense seeks to modify his procedural status and challenge the indictment.</p><p><strong>Source: Los Tiempos — front page note, August 27, 2026.</strong></p>",
})

# 4 — Rodrigo Paz DS 5676
ARTICLES.append({
'id': '1167', 'slug': 'rodrigo-paz-decreto-5676-se-puede-mejorar-no-retroceder',
'categoryEs': 'Bolivia', 'categoryEn': 'Bolivia',
'titleEs': "Paz sobre el DS 5676: \"se puede mejorar\", pero \"no se puede retroceder\"",
'titleEn': "Paz on Decree 5676: \"it can be improved\", but \"there is no turning back\"",
'excerptEs': "El presidente fijó su posición el 27 de agosto sobre el decreto que regula la tarifa del diésel para grandes consumidores.",
'excerptEn': "The president set his position August 27 on the decree regulating the diesel rate for large consumers.",
'imageUrl': '/images/blog/bolivia-agosto-2026/rodrigo-paz-escasez-combustibles.jpg',
'imageCaption': 'El presidente Rodrigo Paz. Fuente: archivo de prensa.',
'source': 'Los Tiempos', 'sourceUrl': 'https://www.lostiempos.com/', 'region': 'Bolivia',
'location': 'La Paz',
'contentEs': "<h1>Paz sobre el DS 5676: \"se puede mejorar\", pero \"no se puede retroceder\"</h1><figure class='report-figure'><img src='/images/blog/bolivia-agosto-2026/rodrigo-paz-escasez-combustibles.jpg' alt='El presidente Rodrigo Paz' loading='lazy'><figcaption>El presidente Rodrigo Paz. Fuente: archivo de prensa.</figcaption></figure><p><em>El presidente Rodrigo Paz se refirió el 27 de agosto al Decreto Supremo 5676. Reconoció que la norma puede ajustarse, pero fue categórico sobre su vigencia.</em></p><h2>La postura del presidente</h2><p>En medio de las protestas del sector productivo y agropecuario, el mandatario sostuvo que el decreto, que fija la tarifa del diésel para grandes consumidores, admite mejoras pero no una derogación.</p><h2>La cita textual</h2><p>Paz declaró:<blockquote>\"El decreto 5676 se puede mejorar\"</blockquote> pero<blockquote>\"no se puede retroceder\"</blockquote>, en referencia a la norma promulgada el 17 de agosto.</p><h2>El contexto</h2><p>La declaración llega días después de que el sector productivo retomara las medidas de presión en puntos como el puente San Pablo, exigiendo la revisión de la tarifa del diésel.</p><p><strong>Fuente: Los Tiempos — nota de portada, 27 de agosto de 2026.</strong></p>",
'contentEn': "<h1>Paz on Decree 5676: \"it can be improved\", but \"there is no turning back\"</h1><figure class='report-figure'><img src='/images/blog/bolivia-agosto-2026/rodrigo-paz-escasez-combustibles.jpg' alt='President Rodrigo Paz' loading='lazy'><figcaption>President Rodrigo Paz. Source: press archive.</figcaption></figure><p><em>President Rodrigo Paz addressed Supreme Decree 5676 on August 27. He acknowledged the rule can be adjusted, but was emphatic about keeping it in force.</em></p><h2>The president's stance</h2><p>Amid protests from the productive and agricultural sectors, the president argued that the decree, which sets the diesel rate for large consumers, allows for improvements but not repeal.</p><h2>The verbatim quote</h2><p>Paz stated:<blockquote>\"Decree 5676 can be improved\"</blockquote> but <blockquote>\"there is no turning back\"</blockquote>, referring to the rule enacted August 17.</p><h2>The context</h2><p>The statement comes days after the productive sector resumed pressure measures at points like the San Pablo bridge, demanding a revision of the diesel rate.</p><p><strong>Source: Los Tiempos — front page note, August 27, 2026.</strong></p>",
})

# 5 — Nevada Cochabamba
ARTICLES.append({
'id': '1168', 'slug': 'emergencia-nevada-cochabamba-1300-camelidos-muertos-familias-afectadas',
'categoryEs': 'Bolivia', 'categoryEn': 'Bolivia',
'titleEs': "Nevadas en Cochabamba dejan más de 1.300 camélidos muertos y 1.200 familias afectadas",
'titleEn': "Snowfall in Cochabamba leaves over 1,300 dead camelids and 1,200 affected families",
'excerptEs': "La Gobernación llevó ayuda humanitaria a las zonas altas, donde persisten carencias tras la emergencia climática.",
'excerptEn': "The Governor's Office brought humanitarian aid to the highlands, where shortages persist after the weather emergency.",
'imageUrl': '/images/blog/bolivia-agosto-2026/nevadas-potosi-frontera-chile.jpg',
'imageCaption': 'Nevadas en el altiplano boliviano (imagen de archivo). Fuente: archivo de prensa.',
'source': 'Opinión', 'sourceUrl': 'https://www.opinion.com.bo/', 'region': 'Bolivia',
'location': 'Cochabamba',
'contentEs': "<h1>Nevadas en Cochabamba dejan más de 1.300 camélidos muertos y 1.200 familias afectadas</h1><figure class='report-figure'><img src='/images/blog/bolivia-agosto-2026/nevadas-potosi-frontera-chile.jpg' alt='Nevadas en el altiplano boliviano' loading='lazy'><figcaption>Nevadas en el altiplano boliviano (imagen de archivo). Fuente: archivo de prensa.</figcaption></figure><p><em>La nevada registrada en las zonas altas de Cochabamba dejó más de 1.300 camélidos muertos y más de 1.200 familias afectadas, según el balance actualizado al 30 de agosto.</em></p><h2>El impacto de la nevada</h2><p>Las comunidades altoandinas del departamento reportaron la muerte masiva de ganado camélido y la afectación de viviendas y cultivos. La cifra ascendió a más de 1.300 camélidos muertos y 1.200 familias damnificadas.</p><h2>La respuesta de la Gobernación</h2><p>La Gobernación de Cochabamba trasladó ayuda humanitaria a las zonas afectadas. Sin embargo, en varias comunidades persisten carencias de forraje y alimentos para sostener al ganado sobreviviente.</p><h2>Qué sigue</h2><p>Las autoridades evalúan ampliar la asistencia ante la continuidad de las condiciones climáticas y la afectación a la actividad ganadera altoandina.</p><p><strong>Fuente: Opinión Bolivia — nota de portada, actualizado 30 de agosto de 2026.</strong></p>",
'contentEn': "<h1>Snowfall in Cochabamba leaves over 1,300 dead camelids and 1,200 affected families</h1><figure class='report-figure'><img src='/images/blog/bolivia-agosto-2026/nevadas-potosi-frontera-chile.jpg' alt='Snowfall in the Bolivian highlands' loading='lazy'><figcaption>Snowfall in the Bolivian highlands (archive image). Source: press archive.</figcaption></figure><p><em>The snowfall recorded in Cochabamba's highlands left more than 1,300 camelids dead and over 1,200 families affected, according to the tally updated to August 30.</em></p><h2>The impact of the snowfall</h2><p>High-altitude communities reported mass deaths of camelid livestock and damage to homes and crops. The figure rose to more than 1,300 dead camelids and 1,200 affected families.</p><h2>The Governor's Office response</h2><p>The Cochabamba Governor's Office delivered humanitarian aid to the affected areas. Yet several communities still lack forage and food to sustain the surviving livestock.</p><h2>What comes next</h2><p>Authorities are assessing whether to expand assistance given the continuing weather conditions and damage to highland livestock activity.</p><p><strong>Source: Opinión Bolivia — front page note, updated August 30, 2026.</strong></p>",
})

# 6 — Tipo de cambio
ARTICLES.append({
'id': '1169', 'slug': 'tipo-cambio-bolivia-banco-central-30-agosto-2026',
'categoryEs': 'Economía', 'categoryEn': 'Economy',
'titleEs': "Tipo de cambio oficial: el Banco Central cotiza el dólar a 11,92 para la compra y 12,02 para la venta",
'titleEn': "Official exchange rate: Central Bank quotes the dollar at 11.92 buy and 12.02 sell",
'excerptEs': "La cotización oficial del 30 de agosto refleja la presión sobre la divisa en el mercado nacional.",
'excerptEn': "The August 30 official quote reflects pressure on the currency in the domestic market.",
'imageUrl': '/images/blog/bolivia-agosto-2026/combustibles-filas-surtidores.jpg',
'imageCaption': 'Filas en surtidores de combustible (imagen de archivo). Fuente: archivo de prensa.',
'source': 'El Día', 'sourceUrl': 'https://eldia.com.bo/', 'region': 'Bolivia',
'location': 'La Paz',
'contentEs': "<h1>Tipo de cambio oficial: el Banco Central cotiza el dólar a 11,92 para la compra y 12,02 para la venta</h1><figure class='report-figure'><img src='/images/blog/bolivia-agosto-2026/combustibles-filas-surtidores.jpg' alt='Filas en surtidores de combustible' loading='lazy'><figcaption>Filas en surtidores de combustible (imagen de archivo). Fuente: archivo de prensa.</figcaption></figure><p><em>Al 30 de agosto de 2026, el Banco Central de Bolivia fijó la cotización oficial del dólar estadounidense en 11,92 bolivianos para la compra y 12,02 bolivianos para la venta, por unidad.</em></p><h2>La cotización oficial</h2><p>La banda oficial del 30 de agosto se ubica en un contexto de escasez de divisas que ya generó tensiones en el abastecimiento de combustibles y en los sectores productivo e importador.</p><h2>El contexto económico</h2><p>La presión sobre el tipo de cambio oficial se refleja en los costos de importación y en la disponibilidad de dólares para las actividades económicas, en particular para la compra de carburantes.</p><h2>Qué está en juego</h2><p>La evolución de la cotización es seguida de cerca por los agentes económicos por su impacto directo en los precios al consumidor y en la planificación de las empresas.</p><p><strong>Fuente: El Día — nota de portada, 30 de agosto de 2026.</strong></p>",
'contentEn': "<h1>Official exchange rate: Central Bank quotes the dollar at 11.92 buy and 12.02 sell</h1><figure class='report-figure'><img src='/images/blog/bolivia-agosto-2026/combustibles-filas-surtidores.jpg' alt='Queues at fuel stations' loading='lazy'><figcaption>Queues at fuel stations (archive image). Source: press archive.</figcaption></figure><p><em>As of August 30, 2026, the Central Bank of Bolivia set the official exchange rate of the US dollar at 11.92 bolivianos for buying and 12.02 bolivianos for selling, per unit.</em></p><h2>The official rate</h2><p>The August 30 official band sits within a context of currency shortages that has already strained fuel supplies and the productive and import sectors.</p><h2>The economic context</h2><p>Pressure on the official rate shows up in import costs and in the availability of dollars for economic activity, particularly fuel purchases.</p><h2>What is at stake</h2><p>The rate's evolution is closely watched by economic agents for its direct impact on consumer prices and business planning.</p><p><strong>Source: El Día — front page note, August 30, 2026.</strong></p>",
})

# 7 — Nepal/China inundaciones
ARTICLES.append({
'id': '1170', 'slug': 'inundaciones-nepal-china-1300-desaparecidos-rescate-tuneles',
'categoryEs': 'Internacional', 'categoryEn': 'International',
'titleEs': "Más de 1.300 desaparecidos en inundaciones que golpean Nepal y China",
'titleEn': "More than 1,300 missing in floods battering Nepal and China",
'excerptEs': "El balance agregado incluye la riada del río Bhote Koshi y nuevos reportes de trabajadores rescatados de túneles hidroeléctricos inundados.",
'excerptEn': "The aggregate tally includes the Bhote Koshi flooding and new reports of workers rescued from flooded hydroelectric tunnels.",
'imageUrl': '/images/blog/noticias-2026/1144-nepal-bhote-koshi.jpg',
'imageCaption': 'Zona afectada por las inundaciones en Nepal. Fuente: Reuters / AP.',
'source': 'CNN en Español', 'sourceUrl': 'https://cnnespanol.cnn.com/', 'region': 'International',
'location': 'Nepal, China',
'contentEs': "<h1>Más de 1.300 desaparecidos en inundaciones que golpean Nepal y China</h1><figure class='report-figure'><img src='/images/blog/noticias-2026/1144-nepal-bhote-koshi.jpg' alt='Zona afectada por las inundaciones en Nepal' loading='lazy'><figcaption>Zona afectada por las inundaciones en Nepal. Fuente: Reuters / AP.</figcaption></figure><p><em>Más de 1.300 personas permanecen desaparecidas por las inundaciones que afectan a Nepal y China, según el balance agregado posterior a la riada del río Bhote Koshi ya reportada.</em></p><h2>La magnitud de la catástrofe</h2><p>La cifra agregada de desaparecidos supera las 1.300 personas. Las autoridades de ambos países mantienen operativos de búsqueda en zonas de difícil acceso y con pronóstico climático desfavorable.</p><h2>Los rescates en los túneles</h2><p>Los reportes incluyen relatos de trabajadores rescatados de túneles hidroeléctricos inundados en Nepal, rescatados por cuadrillas locales y equipos internacionales.</p><h2>El escenario transfronterizo</h2><p>La coordinación entre Nepal y China continúa activa en las tareas de búsqueda y asistencia a las comunidades, mientras las cifras de desaparecidos siguen en revisión.</p><p><strong>Fuente: CNN en Español — nota de portada, 30 de agosto de 2026.</strong></p>",
'contentEn': "<h1>More than 1,300 missing in floods battering Nepal and China</h1><figure class='report-figure'><img src='/images/blog/noticias-2026/1144-nepal-bhote-koshi.jpg' alt='Flood-affected area in Nepal' loading='lazy'><figcaption>Flood-affected area in Nepal. Source: Reuters / AP.</figcaption></figure><p><em>More than 1,300 people remain missing from the floods affecting Nepal and China, according to the aggregate tally following the Bhote Koshi river flooding already reported.</em></p><h2>The scale of the catastrophe</h2><p>The aggregate missing count surpasses 1,300. Authorities in both countries continue search operations in hard-to-reach areas with unfavorable weather forecasts.</p><h2>Rescues in the tunnels</h2><p>Reports include accounts of workers rescued from flooded hydroelectric tunnels in Nepal by local crews and international teams.</p><h2>The cross-border scenario</h2><p>Coordination between Nepal and China remains active in search and community assistance efforts, while the missing toll is still under review.</p><p><strong>Source: CNN en Español — front page note, August 30, 2026.</strong></p>",
})

# 8 — Acuerdo petrolero Venezuela
ARTICLES.append({
'id': '1171', 'slug': 'acuerdo-petrolero-eeuu-venezuela-reaccion-gonzalez-urrutia',
'categoryEs': 'Internacional', 'categoryEn': 'International',
'titleEs': "González Urrutia reacciona al acuerdo petrolero entre EE.UU. y Venezuela: \"la recuperación no puede medirse solo por los barriles\"",
'titleEn': "González Urrutia reacts to the US-Venezuela oil deal: \"recovery cannot be measured in barrels alone\"",
'excerptEs': "El opositor venezolano se pronunció el 30 de agosto tras el entendimiento energético anunciado entre Washington y Caracas.",
'excerptEn': "The Venezuelan opposition leader spoke August 30 after the energy deal announced between Washington and Caracas.",
'imageUrl': '/images/blog/venezuela-terremotos-junio-2026-catia-la-mar.jpg',
'imageCaption': 'Venezuela (imagen de archivo). Fuente: AP / EFE.',
'source': 'CNN en Español', 'sourceUrl': 'https://cnnespanol.cnn.com/', 'region': 'International',
'location': 'Caracas, Washington',
'contentEs': "<h1>González Urrutia reacciona al acuerdo petrolero entre EE.UU. y Venezuela: \"la recuperación no puede medirse solo por los barriles\"</h1><figure class='report-figure'><img src='/images/blog/venezuela-terremotos-junio-2026-catia-la-mar.jpg' alt='Venezuela (imagen de archivo)' loading='lazy'><figcaption>Venezuela (imagen de archivo). Fuente: AP / EFE.</figcaption></figure><p><em>Estados Unidos y Venezuela alcanzaron un acuerdo petrolero, en un contexto que reaviva el interés internacional por el crudo venezolano. El 30 de agosto, el líder opositor Edmundo González Urrutia fijó posición.</em></p><h2>El acuerdo energético</h2><p>El entendimiento entre Washington y Caracas abre la puerta a una nueva etapa en la relación energética bilateral, con el crudo venezolano nuevamente en el centro de la negociación.</p><h2>La reacción del opositor</h2><p>González Urrutia declaró que<blockquote>\"la recuperación no puede medirse solo por los barriles\"</blockquote>, subrayando que la democracia y los derechos humanos no pueden quedar al margen del entendimiento.</p><h2>El debate de fondo</h2><p>La declaración expone la tensión entre los intereses energéticos inmediatos y las demandas políticas de la oposición venezolana, que exige garantías democráticas.</p><p><strong>Fuente: CNN en Español — nota de portada, 30 de agosto de 2026.</strong></p>",
'contentEn': "<h1>González Urrutia reacts to the US-Venezuela oil deal: \"recovery cannot be measured in barrels alone\"</h1><figure class='report-figure'><img src='/images/blog/venezuela-terremotos-junio-2026-catia-la-mar.jpg' alt='Venezuela (archive image)' loading='lazy'><figcaption>Venezuela (archive image). Source: AP / EFE.</figcaption></figure><p><em>The United States and Venezuela reached an oil agreement, in a context that rekindles international interest in Venezuelan crude. On August 30, opposition leader Edmundo González Urrutia took a position.</em></p><h2>The energy agreement</h2><p>The understanding between Washington and Caracas opens a new chapter in the bilateral energy relationship, with Venezuelan crude again at the center of negotiations.</p><h2>The opposition leader's reaction</h2><p>González Urrutia stated that <blockquote>\"recovery cannot be measured in barrels alone\"</blockquote>, stressing that democracy and human rights cannot be left out of the understanding.</p><h2>The underlying debate</h2><p>The statement exposes the tension between immediate energy interests and the political demands of the Venezuelan opposition, which seeks democratic guarantees.</p><p><strong>Source: CNN en Español — front page note, August 30, 2026.</strong></p>",
})

# Build the TS block strings and insert
total = 0
for a in ARTICLES:
    pid = a['id']
    block = f"""  {{
    id: '{pid}',
    contentType: 'news',
    slug: '{a['slug']}',
    titleEs: `{a['titleEs']}`,
    titleEn: `{a['titleEn']}`,
    excerptEs: `{a['excerptEs']}`,
    excerptEn: `{a['excerptEn']}`,
    contentEs: `{a['contentEs']}`,
    contentEn: `{a['contentEn']}`,
    date: '2026-08-31',
    publishedAt: '{PUB[pid]}',
    dateModified: '{PUB[pid]}',
    readTimeEs: '3 min de lectura',
    readTimeEn: '3 min read',
    imageUrl: '{a['imageUrl']}',
    imageCaption: '{a['imageCaption']}',
    categoryEs: '{a['categoryEs']}',
    categoryEn: '{a['categoryEn']}',
    enableComments: true,
    featured: true,
    breaking: false,
    views: 1,
    location: '{a['location']}',
    source: '{a['source']}',
    sourceUrl: '{a['sourceUrl']}',
    region: '{a['region']}',
  }},"""
    # Insertar antes del marcador '// FIN DE NOTICIAS' (dentro del array blogPosts).
    anchor = '// FIN DE NOTICIAS'
    idx = s.find(anchor)
    if idx == -1:
        raise SystemExit('No se encontró el marcador // FIN DE NOTICIAS')
    s = s[:idx] + block + '\n' + s[idx:]
    total += 1

io.open(TS, 'w', encoding='utf-8').write(s)
print(f"Inserted {total} articles")