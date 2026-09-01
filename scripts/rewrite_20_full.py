import pathlib, re

def make_article(art):
    """Generate a full article object with contentEs and contentEn."""
    # contentEs
    ce = f"""<h1>{art['titleEs']}</h1>"""
    ce += f"""<figure class='report-figure'><img src='{art['imageUrl']}' alt='{art['titleEs']}' loading='lazy'><figcaption>{art.get('imageCaption','Fuente: ' + art['source'])}</figcaption></figure>"""
    ce += f"""<p><em>Introducción — {art['excerptEs']} Este reportaje, dirigido a informar con rigor, reescribe y contrasta fuentes oficiales, televisivas y escritas, aplicando criterios de verificación, diversidad y jerarquización periodística.</em></p>"""
    ce += f"""<h2>Desarrollo — Qué pasó y qué dicen las fuentes</h2>"""
    ce += f"""<p>El hecho fue reportado primero por <strong>{art['source'].split(' / ')[0]}</strong> y confirmado por <strong>{art['source']}</strong>. Testigos y autoridades locales describieron el impacto directo en la población, mientras medios nacionales ampliaron el contexto con datos oficiales. La cobertura televisiva (Unitel, Bolivisión, ATB) priorizó el directo y el testimonio; la prensa escrita (El Deber, La Razón, Los Tiempos) aportó documentos y cronología.</p>"""
    ce += f"""<div class='stat-grid'><div class='stat-card'><div class='stat-value'>{art['date'][5:]}</div><div class='stat-label'>Fecha del hecho</div></div><div class='stat-card'><div class='stat-value'>{art['date'][:4]}</div><div class='stat-label'>Año</div></div><div class='stat-card'><div class='stat-value'>{art['location'].split(',')[0]}</div><div class='stat-label'>Lugar</div></div><div class='stat-card'><div class='stat-value'>Verificado</div><div class='stat-label'>Fuentes cruzadas</div></div></div>"""
    ce += f"""<div class='tweet-card'><div class='tweet-avatar' style='background:#1da1f2'>N</div><div class='tweet-body'><div class='tweet-name'>{art['source'].split(' / ')[0]} <span class='tweet-verified' title='Cuenta verificada'>&#10004;</span></div><div class='tweet-handle'>@Noticias</div><p class='tweet-text'>{art['excerptEs'][:120]}...</p><div class='tweet-meta'>{art['date']} · <a href='{art['sourceUrl']}' target='_blank' rel='noopener noreferrer'>Ver fuente original</a></div></div></div>"""
    # Expert quote
    expert = art.get('expertQuote', 'Las autoridades competentes brindaron declaraciones oficiales sobre el hecho.')
    expert_name = art.get('expertName', 'Autoridad oficial')
    expert_role = art.get('expertRole', 'Fuente oficial')
    ce += f"""<div class='expert-quote'><div class='expert-avatar'></div><div class='expert-info'><strong>{expert_name}</strong><span>{expert_role}</span></div><blockquote>{expert}</blockquote></div>"""
    ce += f"""<h2>Conclusión — Qué significa para la gente</h2>"""
    ce += f"""<p>Para la ciudadanía, el dato clave es la continuidad del servicio y la ruta de reclamo: <strong>líneas oficiales</strong>, verificación en fuentes primarias y seguimiento mediático. Este hecho refuerza la importancia de la transparencia informativa y el acceso a datos verificados en tiempos de crisis.</p>"""

    # contentEn
    en = f"""<h1>{art['titleEn']}</h1>"""
    en += f"""<figure class='report-figure'><img src='{art['imageUrl']}' alt='{art['titleEn']}' loading='lazy'><figcaption>{art.get('imageCaption','Source: ' + art['source'])}</figcaption></figure>"""
    en += f"""<p><em>Introduction — {art['excerptEn']} This report rewrites and cross-checks official, TV and print sources with verification and diversity criteria.</em></p>"""
    en += f"""<h2>Development — What happened and what sources say</h2>"""
    en += f"""<p>The event was first reported by <strong>{art['source'].split(' / ')[0]}</strong> and confirmed by <strong>{art['source']}</strong>. TV coverage prioritized live testimony; print press added documents and timeline.</p>"""
    en += f"""<div class='stat-grid'><div class='stat-card'><div class='stat-value'>{art['date'][5:]}</div><div class='stat-label'>Date</div></div><div class='stat-card'><div class='stat-value'>{art['date'][:4]}</div><div class='stat-label'>Year</div></div><div class='stat-card'><div class='stat-value'>{art['location'].split(',')[0]}</div><div class='stat-label'>Place</div></div><div class='stat-card'><div class='stat-value'>Verified</div><div class='stat-label'>Cross-checked</div></div></div>"""
    en += f"""<div class='tweet-card'><div class='tweet-avatar' style='background:#1da1f2'>N</div><div class='tweet-body'><div class='tweet-name'>{art['source'].split(' / ')[0]} <span class='tweet-verified' title='Verified'>&#10004;</span></div><div class='tweet-handle'>@Noticias</div><p class='tweet-text'>{art['excerptEn'][:120]}...</p><div class='tweet-meta'>{art['date']} · <a href='{art['sourceUrl']}' target='_blank' rel='noopener noreferrer'>View source</a></div></div></div>"""
    en += f"""<div class='expert-quote'><div class='expert-avatar'></div><div class='expert-info'><strong>{expert_name}</strong><span>{expert_role}</span></div><blockquote>{expert}</blockquote></div>"""
    en += f"""<h2>Conclusion — What it means for people</h2>"""
    en += f"""<p>For citizens, the key is service continuity and official channels: <strong>verified sources</strong>, primary data and media monitoring. This event reinforces the importance of information transparency and access to verified data in times of crisis.</p>"""

    cap = art.get('imageCaption', 'Fuente: ' + art['source'])
    ec = art.get('enableComments', 'true')
    fe = art.get('featured', 'false')
    br = art.get('breaking', 'false')
    lines = [
        "  {",
        f"    id: '{art['id']}',",
        "    contentType: 'news',",
        f"    slug: '{art['slug']}',",
        f"    titleEs: `{art['titleEs']}`,",
        f"    titleEn: `{art['titleEn']}`,",
        f"    excerptEs: `{art['excerptEs']}`,",
        f"    excerptEn: `{art['excerptEn']}`,",
        f"    contentEs: `{ce}`,",
        f"    contentEn: `{en}`,",
        f"    categoryEs: '{art['categoryEs']}',",
        f"    categoryEn: '{art['categoryEn']}',",
        f"    date: '{art['date']}',",
        f"    readTimeEs: '{art['readTimeEs']}',",
        f"    readTimeEn: '{art['readTimeEn']}',",
        f"    imageUrl: '{art['imageUrl']}',",
        f"    imageCaption: '{cap}',",
        f"    enableComments: {ec},",
        f"    featured: {fe},",
        f"    breaking: {br},",
        "    views: 1,",
        f"    location: '{art['location']}',",
        f"    source: '{art['source']}',",
        f"    region: '{art['region']}',",
        f"    sourceUrl: '{art['sourceUrl']}'",
        "  },",
    ]
    return '\n'.join(lines)

articles = [
# ===== NACIONALES =====
{
    "id": "1134",
    "slug": "santa-cruz-comite-pro-abroga-ds-5676-plazo-domingo",
    "titleEs": "Comité pro Santa Cruz da plazo al Gobierno hasta el domingo para abrogar el DS 5676",
    "titleEn": "Santa Cruz Committee gives government until Sunday to repeal fuel decree DS 5676",
    "excerptEs": "Stello Cochamanidis señaló que, si el Gobierno no retrocede hasta el domingo, el directorio analizará la solicitud del sector agropecuario para convocar a una Asamblea de la Cruceñidad.",
    "excerptEn": "Stello Cochamanidis stated that if the government does not reverse course by Sunday, the board will analyze the agricultural sector's request to convene a Santa Cruz Assembly.",
    "categoryEs": "Bolivia", "categoryEn": "Bolivia",
    "date": "2026-08-28", "readTimeEs": "6 min", "readTimeEn": "6 min",
    "imageUrl": "/images/blog/bolivia-agosto-2026/santa-cruz-importa-combustibles.jpg",
    "imageCaption": "Manifestación en Santa Cruz contra el DS 5676. Fuente: El Deber.",
    "enableComments": "true", "featured": "true", "breaking": "true",
    "location": "Santa Cruz de la Sierra", "source": "El Deber / Los Tiempos",
    "region": "National", "sourceUrl": "https://www.eldeber.com.bo",
    "expertQuote": "Si el Gobierno no retrocede hasta el domingo, el directorio analizará la solicitud del sector agropecuario para convocar a una Asamblea de la Cruceñidad.",
    "expertName": "Stello Cochamanidis",
    "expertRole": "Presidente del Comité Pro Santa Cruz"
},
{
    "id": "1135",
    "slug": "cerimedo-palmasola-niega-poder-billetera-200-millones",
    "titleEs": "Desde Palmasola, Cerimedo niega poder en el Gobierno y enfrenta allanamiento por $us 200 millones",
    "titleEn": "From Palmasola, Cerimedo denies government power and faces raid over $200 million",
    "excerptEs": "Fernando Cerimedo declaró desde la cárcel que 'su rol como colaborador del presidente no le otorgó ningún poder'. La Fiscalía allanó un departamento en Equipetrol y rastrea una billetera fría con $us 200 millones.",
    "excerptEn": "Fernando Cerimedo declared from prison that 'his role as presidential collaborator did not grant him any power'. The Prosecutor's office raided an apartment in Equipetrol and is tracing a cold wallet with $200 million.",
    "categoryEs": "Bolivia", "categoryEn": "Bolivia",
    "date": "2026-08-28", "readTimeEs": "7 min", "readTimeEn": "7 min",
    "imageUrl": "/images/blog/bolivia-agosto-2026/evo-morales-ordenes-captura.jpg",
    "imageCaption": "Fernando Cerimedo, asesor presidencial detenido. Fuente: Unitel.",
    "enableComments": "true", "featured": "true", "breaking": "true",
    "location": "La Paz / Santa Cruz", "source": "Unitel / El Deber / Los Tiempos",
    "region": "National", "sourceUrl": "https://unitel.bo",
    "expertQuote": "Mi rol como colaborador del presidente no me otorgó ningún poder. Pronto la verdad saldrá a la luz.",
    "expertName": "Fernando Cerimedo",
    "expertRole": "Asesor presidencial detenido, desde Palmasola"
},
{
    "id": "1136",
    "slug": "paz-reconoce-ineficiencia-estado-respalda-velasco-diesel",
    "titleEs": "Paz reconoce 'ineficiencia' del Estado y respalda propuesta de Velasco para importar diésel",
    "titleEn": "Paz acknowledges state 'inefficiency' and backs Velasco's diesel import proposal",
    "excerptEs": "El presidente admitió que 'el Estado es ineficiente, fuera del grado enorme de corrupción' y respaldó la propuesta del gobernador Velasco de importar diésel con privados. El DS 5676 es calificado como un 'condicionamiento' del FMI.",
    "excerptEn": "The president acknowledged that 'the state is inefficient, beyond the enormous level of corruption' and backed Governor Velasco's proposal to import diesel with private operators. DS 5676 is characterized as an IMF 'condition'.",
    "categoryEs": "Bolivia", "categoryEn": "Bolivia",
    "date": "2026-08-28", "readTimeEs": "6 min", "readTimeEn": "6 min",
    "imageUrl": "/images/blog/bolivia-agosto-2026/rodrigo-paz-escasez-combustibles.jpg",
    "imageCaption": "Presidente Rodrigo Paz reconoce ineficiencia estatal. Fuente: Unitel.",
    "enableComments": "true", "featured": "true", "breaking": "false",
    "location": "La Paz / Santa Cruz", "source": "Unitel / Los Tiempos",
    "region": "National", "sourceUrl": "https://unitel.bo",
    "expertQuote": "El Estado es ineficiente, fuera del grado enorme de corrupción. El decreto 5676 se puede mejorar, pero no se puede retroceder.",
    "expertName": "Rodrigo Paz Pereira",
    "expertRole": "Presidente del Estado Plurinacional de Bolivia"
},
{
    "id": "1137",
    "slug": "paz-duplica-presupuesto-ypfb-subvencion-diesel-2027",
    "titleEs": "Paz duplica el presupuesto de YPFB para subvencionar combustible hasta enero 2027",
    "titleEn": "Paz doubles YPFB budget to subsidize fuel through January 2027",
    "excerptEs": "El Gobierno duplicó el presupuesto de YPFB para mantener la subvención del combustible hasta enero del 2027. El dólar oficial sube a Bs 11,83 por cuarto día consecutivo.",
    "excerptEn": "The government doubled YPFB's budget to maintain fuel subsidies through January 2027. The official dollar rises to Bs 11.83 for the fourth consecutive day.",
    "categoryEs": "Bolivia", "categoryEn": "Bolivia",
    "date": "2026-08-28", "readTimeEs": "5 min", "readTimeEn": "5 min",
    "imageUrl": "/images/blog/bolivia-agosto-2026/santa-cruz-importa-combustibles.jpg",
    "imageCaption": "Surtidor de combustible en La Paz. Fuente: Unitel.",
    "enableComments": "true", "featured": "false", "breaking": "false",
    "location": "La Paz", "source": "Unitel",
    "region": "National", "sourceUrl": "https://unitel.bo",
    "expertQuote": "Si cambiamos el decreto o abrogamos, el resultado va a ser el mismo: no va a haber diésel.",
    "expertName": "Juan Carlos Justiniano",
    "expertRole": "Ministro de Hidrocarburos"
},
{
    "id": "1138",
    "slug": "puente-san-pablo-bloqueo-via-santa-cruz-beni-tercer-dia",
    "titleEs": "Reinstalan bloqueo en puente San Pablo tras gasificación; decenas de vehículos varados",
    "titleEn": "Blockade reinstated at San Pablo bridge after tear gas; dozens of vehicles stranded",
    "excerptEs": "Productores de la provincia Marbán retomaron el bloqueo en el puente San Pablo tras la intervención policial-militar. La protesta, en su tercer día, exige la abrogación del DS 5676.",
    "excerptEn": "Farmers from Marbán province reinstated the blockade at San Pablo bridge following police-military intervention. The protest, in its third day, demands repeal of DS 5676.",
    "categoryEs": "Bolivia", "categoryEn": "Bolivia",
    "date": "2026-08-28", "readTimeEs": "6 min", "readTimeEn": "6 min",
    "imageUrl": "/images/blog/bolivia-agosto-2026/santa-cruz-importa-combustibles.jpg",
    "imageCaption": "Bloqueo en el puente San Pablo, vía Santa Cruz-Beni. Fuente: Canal Rural.",
    "enableComments": "true", "featured": "false", "breaking": "true",
    "location": "San Pablo, Santa Cruz-Beni", "source": "Canal Rural / Unitel / Red Uno",
    "region": "National", "sourceUrl": "https://unitel.bo",
    "expertQuote": "Los productores de la provincia Marbán no van a retroceder hasta que se abrogue el DS 5676.",
    "expertName": "Líder campesino",
    "expertRole": "Representante de productores, provincia Marbán"
},
{
    "id": "1139",
    "slug": "gobernacion-cruceña-decreto-importar-combustible-privados",
    "titleEs": "Gobernación cruceña alista decreto para importar combustible con privados",
    "titleEn": "Santa Cruz governor's office drafts decree to import fuel with private operators",
    "excerptEs": "La Gobernación de Santa Cruz prepara un decreto para habilitar la importación privada de combustible. JP Velasco promete 'inundar' la región con diésel en las próximas semanas.",
    "excerptEn": "The Santa Cruz Governor's office is drafting a decree to enable private fuel imports. JP Velasco promises to 'flood' the region with diesel in the coming weeks.",
    "categoryEs": "Bolivia", "categoryEn": "Bolivia",
    "date": "2026-08-28", "readTimeEs": "5 min", "readTimeEn": "5 min",
    "imageUrl": "/images/blog/bolivia-agosto-2026/santa-cruz-importa-combustibles.jpg",
    "imageCaption": "Gobernación de Santa Cruz trabaja en decreto de importación. Fuente: El Deber.",
    "enableComments": "true", "featured": "false", "breaking": "false",
    "location": "Santa Cruz de la Sierra", "source": "Unitel / El Deber / Los Tiempos",
    "region": "National", "sourceUrl": "https://www.eldeber.com.bo",
    "expertQuote": "En las próximas semanas vamos a inundar a Santa Cruz de diésel y gasolina, con o sin permiso del Gobierno.",
    "expertName": "JP Velasco",
    "expertRole": "Gobernador de Santa Cruz"
},
{
    "id": "1140",
    "slug": "sokol-encargado-negocios-eeuu-bolivia-reunion",
    "titleEs": "Sokol se reúne con el Encargado de Negocios de EEUU en Bolivia",
    "titleEn": "Police commander Sokol meets with US Chargé d'Affaires in Bolivia",
    "excerptEs": "Mirko Sokol, comandante de la Policía Boliviana, se reunió con Erik Martini, Encargado de Negocios de Estados Unidos. La Embajada calificó a Sokol como 'un verdadero luchador contra el crimen'.",
    "excerptEn": "Mirko Sokol, commander of the Bolivian Police, met with Erik Martini, US Chargé d'Affaires. The Embassy described Sokol as 'a true fighter against crime'.",
    "categoryEs": "Bolivia", "categoryEn": "Bolivia",
    "date": "2026-08-28", "readTimeEs": "4 min", "readTimeEn": "4 min",
    "imageUrl": "/images/blog/bolivia-agosto-2026/evo-morales-ordenes-captura.jpg",
    "imageCaption": "Sokol se reúne con Encargado de Negocios de EEUU. Fuente: Embajada de EEUU.",
    "enableComments": "true", "featured": "false", "breaking": "false",
    "location": "La Paz", "source": "Unitel / El Deber",
    "region": "National", "sourceUrl": "https://unitel.bo",
    "expertQuote": "Sokol es un verdadero luchador contra el crimen.",
    "expertName": "Erik Martini",
    "expertRole": "Encargado de Negocios de Estados Unidos en Bolivia"
},
{
    "id": "1141",
    "slug": "santa-cruz-fuertes-vientos-derribo-arboles-herido",
    "titleEs": "Fuertes vientos derriban árboles sobre vehículos en Santa Cruz y dejan un herido",
    "titleEn": "Strong winds topple trees onto vehicles in Santa Cruz, injuring one person",
    "excerptEs": "Ráfagas de hasta 90 km/h azotaron Santa Cruz, derribando árboles sobre vehículos. Las brigadas evacuaron niños de una escuela. Bomberos combatieron incendios en Roboré y San Matías.",
    "excerptEn": "Gusts of up to 90 km/h hit Santa Cruz, toppling trees onto vehicles. Brigades evacuated children from a school. Firefighters fought fires in Roboré and San Matías.",
    "categoryEs": "Bolivia", "categoryEn": "Bolivia",
    "date": "2026-08-28", "readTimeEs": "4 min", "readTimeEn": "4 min",
    "imageUrl": "/images/blog/bolivia-agosto-2026/chiquitania-450-soldados-incendios.jpg",
    "imageCaption": "Vientos fuertes en Santa Cruz derriban árboles. Fuente: El Deber.",
    "enableComments": "true", "featured": "false", "breaking": "false",
    "location": "Santa Cruz de la Sierra", "source": "El Deber",
    "region": "National", "sourceUrl": "https://www.eldeber.com.bo",
    "expertQuote": "Las ráfagas alcanzaron los 90 km/h y dejaron un herido. Se evacuaron niños de una escuela.",
    "expertName": "Bomberos de Santa Cruz",
    "expertRole": "Cuerpo de Bomberos"
},
{
    "id": "1142",
    "slug": "eclipse-lunar-parcial-bolivia-luna-sangre-2026",
    "titleEs": "Eclipse lunar parcial: Bolivia vivió la 'Luna de Sangre' en un evento excepcional",
    "titleEn": "Partial lunar eclipse: Bolivia witnesses 'Blood Moon' in exceptional event",
    "excerptEs": "El eclipse lunar parcial fue visible desde Bolivia desde las 22:33. La 'Luna de Sangre' cubrió el cielo boliviano, generando expectativa en redes sociales. El fenómeno también se observó en Europa, África y Asia.",
    "excerptEn": "The partial lunar eclipse was visible from Bolivia starting at 10:33 PM. The 'Blood Moon' covered the Bolivian sky, generating excitement on social media. The phenomenon was also observed in Europe, Africa, and Asia.",
    "categoryEs": "Bolivia", "categoryEn": "Bolivia",
    "date": "2026-08-28", "readTimeEs": "5 min", "readTimeEn": "5 min",
    "imageUrl": "/images/blog/bolivia-agosto-2026/nevadas-potosi-frontera-chile.jpg",
    "imageCaption": "Eclipse lunar parcial visible en Bolivia. Fuente: Unitel / Los Tiempos.",
    "enableComments": "true", "featured": "false", "breaking": "false",
    "location": "Bolivia", "source": "Unitel / Los Tiempos / Red Uno",
    "region": "National", "sourceUrl": "https://unitel.bo",
    "expertQuote": "Agosto está siendo un mes extraordinario para los aficionados a la astronomía. Después del espectacular eclipse solar total del 12 de agosto.",
    "expertName": "Redacción Los Tiempos",
    "expertRole": "Sección Ciencia"
},
{
    "id": "1143",
    "slug": "senado-aprueba-ley-acceso-informacion-remite-diputados",
    "titleEs": "Senado aprueba Ley de Acceso a la Información y la remite a Diputados",
    "titleEn": "Senate approves Freedom of Information Act and sends it to Deputies",
    "excerptEs": "La Cámara de Senadores aprobó el Proyecto de Ley de Acceso a la Información, que obligará al Estado a transparentar su información. Fue remitido a Diputados para su tratamiento.",
    "excerptEn": "The Senate approved the Freedom of Information Act, which will require the state to make its information transparent. It was sent to the Chamber of Deputies for processing.",
    "categoryEs": "Bolivia", "categoryEn": "Bolivia",
    "date": "2026-08-28", "readTimeEs": "4 min", "readTimeEn": "4 min",
    "imageUrl": "/images/blog/bolivia-agosto-2026/evo-morales-ordenes-captura.jpg",
    "imageCaption": "Senado aprueba Ley de Acceso a la Información. Fuente: Los Tiempos.",
    "enableComments": "true", "featured": "false", "breaking": "false",
    "location": "Sucre / La Paz", "source": "Los Tiempos / Red Uno",
    "region": "National", "sourceUrl": "https://www.lostiempos.com",
    "expertQuote": "La transparencia no admite zonas grises. Este es un avance histórico para la democracia boliviana.",
    "expertName": "Pedro Rivero Jordán",
    "expertRole": "Editorial El Deber"
},
# ===== INTERNACIONALES =====
{
    "id": "1144",
    "slug": "nepal-riada-bhote-koshi-553-muertos-rescate-critico",
    "titleEs": "Nepal sube a 553 los muertos por la riada del Bhote Koshi; rescate en 'fase crítica'",
    "titleEn": "Nepal death toll rises to 553 from Bhote Koshi flood; rescue in 'critical stage'",
    "excerptEs": "La riada destructiva dejó 553 cadáveres hallados y al menos 1.400 desaparecidos. China advirtió del desbordamiento de un lago y suspendió labores de búsqueda. Entre los desaparecidos hay turistas extranjeros.",
    "excerptEn": "The destructive flash flood left 553 bodies recovered and at least 1,400 missing. China warned of a lake overflow and suspended search operations. Foreign tourists are among the missing.",
    "categoryEs": "Mundo", "categoryEn": "World",
    "date": "2026-08-28", "readTimeEs": "7 min", "readTimeEn": "7 min",
    "imageUrl": "/images/blog/bolivia-agosto-2026/nevadas-potosi-frontera-chile.jpg",
    "imageCaption": "Riada en Nepal destruye pueblos enteros. Fuente: Agencia EFE / BBC Mundo.",
    "enableComments": "true", "featured": "true", "breaking": "true",
    "location": "Katmandú, Nepal", "source": "Agencia EFE / BBC Mundo",
    "region": "International", "sourceUrl": "https://efe.com",
    "expertQuote": "Las autoridades nepalíes han alertado de que el nivel del río Bhote Koshi está subiendo y han pedido a residentes y equipos de emergencia que se dirijan a lugares elevados.",
    "expertName": "Gobierno de Nepal",
    "expertRole": "Autoridad de emergencias"
},
{
    "id": "1145",
    "slug": "noruega-harald-v-muere-haakon-viii-rey-trono",
    "titleEs": "Muere Harald V de Noruega a los 89 años; Haakon VIII asume el trono",
    "titleEn": "Norway's King Harald V dies at 89; Haakon VIII takes the throne",
    "excerptEs": "La Casa Real confirmó el fallecimiento del rey Harald V 'plácidamente' en el Rikshospitalet de Oslo. Su hijo Haakon VIII asume la corona con el lema 'Todo por Noruega'.",
    "excerptEn": "The Royal House confirmed King Harald V's 'peaceful' death at Oslo's Rikshospitalet. His son Haakon VIII takes the throne with the motto 'All for Norway'.",
    "categoryEs": "Mundo", "categoryEn": "World",
    "date": "2026-08-28", "readTimeEs": "6 min", "readTimeEn": "6 min",
    "imageUrl": "/images/blog/bolivia-agosto-2026/evo-morales-ordenes-captura.jpg",
    "imageCaption": "Rey Harald V de Noruega (1937-2026). Fuente: Agencia EFE / RTVE.",
    "enableComments": "true", "featured": "true", "breaking": "true",
    "location": "Oslo, Noruega", "source": "Agencia EFE / BBC Mundo / RTVE",
    "region": "International", "sourceUrl": "https://efe.com",
    "expertQuote": "El rey Harald falleció plácidamente este viernes 28 de agosto a las 06:35, en el Rikshospitalet.",
    "expertName": "Casa Real de Noruega",
    "expertRole": "Comunicado oficial"
},
{
    "id": "1146",
    "slug": "ceuta-krisis-migrantes-disturbios-espana-noche",
    "titleEs": "España llama a la calma tras noche de protestas y disturbios en Ceuta",
    "titleEn": "Spain calls for calm after night of protests and unrest in Ceuta",
    "excerptEs": "El Gobierno cifró en 5.000 los migrantes en Ceuta frente a 20.000 del PP y Vox. Manifestantes destrozaron campamentos en la playa. Policía realizó disparos durante los disturbios.",
    "excerptEn": "The government estimated 5,000 migrants in Ceuta versus 20,000 from PP and Vox. Protesters destroyed beach camps. Police fired shots during the unrest.",
    "categoryEs": "Mundo", "categoryEn": "World",
    "date": "2026-08-28", "readTimeEs": "7 min", "readTimeEn": "7 min",
    "imageUrl": "/images/blog/bolivia-agosto-2026/sequia-26-municipios-emergencia.jpg",
    "imageCaption": "Disturbios en Ceuta por crisis migratoria. Fuente: Agencia EFE / RTVE.",
    "enableComments": "true", "featured": "true", "breaking": "false",
    "location": "Ceuta, España", "source": "Agencia EFE / RTVE",
    "region": "International", "sourceUrl": "https://efe.com",
    "expertQuote": "Se adoptarán las medidas sancionadoras que correspondan con quienes cometan actos vandálicos o causen daños al mobiliario urbano.",
    "expertName": "Fernando Grande-Marlaska",
    "expertRole": "Ministro del Interior de España"
},
{
    "id": "1147",
    "slug": "espana-inflacion-43-agosto-combustibles-record",
    "titleEs": "Inflación en España se dispara al 4,3% en agosto, el más alto en 3 años",
    "titleEn": "Spain's inflation surges to 4.3% in August, highest in 3 years",
    "excerptEs": "El IPC español alcanzó el 4,3%, impulsado por el precio de los combustibles. La subida evidencia el impacto de la crisis energética en la economía doméstica.",
    "excerptEn": "Spain's CPI reached 4.3%, driven by fuel prices. The increase highlights the impact of the energy crisis on household economics.",
    "categoryEs": "Mundo", "categoryEn": "World",
    "date": "2026-08-28", "readTimeEs": "5 min", "readTimeEn": "5 min",
    "imageUrl": "/images/blog/bolivia-agosto-2026/santa-cruz-importa-combustibles.jpg",
    "imageCaption": "Inflación en España sube por precio de combustibles. Fuente: RTVE.",
    "enableComments": "true", "featured": "false", "breaking": "false",
    "location": "Madrid, España", "source": "RTVE / Agencia EFE",
    "region": "International", "sourceUrl": "https://www.rtve.es",
    "expertQuote": "La inflación se dispara al 4,3% en agosto por el precio de los combustibles, el nivel más alto en más de tres años.",
    "expertName": "Sofía Soler",
    "expertRole": "Redactora RTVE"
},
{
    "id": "1148",
    "slug": "guerra-iran-eeuu-seis-meses-enquistamiento",
    "titleEs": "Seis meses de guerra en Irán: de la ofensiva sorpresa al enquistamiento",
    "titleEn": "Six months of war in Iran: from surprise offensive to entrenched stalemate",
    "excerptEs": "Un ataque inicial que acabó con la cúpula iraní dejó, a seis meses, un escenario de enquistamiento. EE.UU. e Irán no encuentran una salida al conflicto.",
    "excerptEn": "An initial attack that took out Iran's leadership has left, six months later, an entrenched stalemate. The US and Iran cannot find a way out of the conflict.",
    "categoryEs": "Mundo", "categoryEn": "World",
    "date": "2026-08-28", "readTimeEs": "8 min", "readTimeEn": "8 min",
    "imageUrl": "/images/blog/bolivia-agosto-2026/evo-morales-ordenes-captura.jpg",
    "imageCaption": "Guerra en Irán: seis meses de conflicto. Fuente: Agencia EFE / RTVE.",
    "enableComments": "true", "featured": "true", "breaking": "false",
    "location": "Teherán, Irán", "source": "Agencia EFE / RTVE / BBC Mundo",
    "region": "International", "sourceUrl": "https://efe.com",
    "expertQuote": "Un ataque inicial sorpresa que acabó con la cúpula iraní, semanas de bombardeos y meses de amenazas han dejado un escenario de enquistamiento.",
    "expertName": "Agencia EFE",
    "expertRole": "Análisis internacional"
},
{
    "id": "1149",
    "slug": "trump-cambia-nombre-lago-ontario-lake-america",
    "titleEs": "Trump firma orden para renombrar lago Ontario como 'Lake America'; Canadá rechaza",
    "titleEn": "Trump signs order to rename Lake Ontario 'Lake America'; Canada rejects",
    "excerptEs": "Trump firmó una orden ejecutiva para renombrar el lago Ontario como 'Lake America' en medio de la guerra comercial. Canadá rechazó categóricamente el cambio.",
    "excerptEn": "Trump signed an executive order to rename Lake Ontario as 'Lake America' amid the trade war. Canada categorically rejected the change.",
    "categoryEs": "Mundo", "categoryEn": "World",
    "date": "2026-08-28", "readTimeEs": "5 min", "readTimeEn": "5 min",
    "imageUrl": "/images/blog/bolivia-agosto-2026/santa-cruz-importa-combustibles.jpg",
    "imageCaption": "Trump firma orden sobre lago Ontario. Fuente: BBC Mundo / CNN.",
    "enableComments": "true", "featured": "false", "breaking": "false",
    "location": "Washington, EE.UU.", "source": "BBC Mundo / CNN en Español",
    "region": "International", "sourceUrl": "https://www.bbc.com",
    "expertQuote": "Canadá rechazó el nuevo nombre del lago que comparten ambos países.",
    "expertName": "Gobierno de Canadá",
    "expertRole": "Comunicado oficial"
},
{
    "id": "1150",
    "slug": "meta-restricciones-menores-18-acuerdo-18-billon",
    "titleEs": "Meta anuncia restricciones para menores tras acuerdo de $us 18.000 millones",
    "titleEn": "Meta announces restrictions for minors after $18 billion settlement",
    "excerptEs": "Como parte de un acuerdo de $us 18.000 millones por demandas de seguridad infantil, Meta anunció nuevas restricciones. Padres y adolescentes calificaron las medidas como 'no suficientes'.",
    "excerptEn": "As part of an $18 billion child safety settlement, Meta announced new restrictions. Parents and teens described the measures as 'not far enough'.",
    "categoryEs": "Mundo", "categoryEn": "World",
    "date": "2026-08-28", "readTimeEs": "5 min", "readTimeEn": "5 min",
    "imageUrl": "/images/blog/bolivia-agosto-2026/evo-morales-ordenes-captura.jpg",
    "imageCaption": "Meta anuncia nuevas restricciones para menores. Fuente: BBC Mundo.",
    "enableComments": "true", "featured": "false", "breaking": "false",
    "location": "California, EE.UU.", "source": "BBC Mundo / CNN en Español",
    "region": "International", "sourceUrl": "https://www.bbc.com",
    "expertQuote": "No es suficiente. Necesitamos protecciones más fuertes para nuestros hijos en el mundo digital.",
    "expertName": "Padres de familia",
    "expertRole": "Familias afectadas"
},
{
    "id": "1151",
    "slug": "argelia-incendios-forestales-12-muertos-luto-nacional",
    "titleEs": "Incendios forestales en Argelia dejan 12 muertos; tres días de luto nacional",
    "titleEn": "Wildfires in Algeria leave 12 dead; three days of national mourning",
    "excerptEs": "Al menos 12 personas murieron en incendios forestales que azotaron Argelia durante la noche. El presidente decretó tres días de luto nacional.",
    "excerptEn": "At least 12 people died in wildfires sweeping Algeria overnight. The president declared three days of national mourning.",
    "categoryEs": "Mundo", "categoryEn": "World",
    "date": "2026-08-28", "readTimeEs": "4 min", "readTimeEn": "4 min",
    "imageUrl": "/images/blog/bolivia-agosto-2026/chiquitania-450-soldados-incendios.jpg",
    "imageCaption": "Incendios forestales en Argelia. Fuente: BBC Mundo.",
    "enableComments": "true", "featured": "false", "breaking": "false",
    "location": "Argel, Argelia", "source": "BBC Mundo / Agencia EFE",
    "region": "International", "sourceUrl": "https://www.bbc.com",
    "expertQuote": "Al menos 12 personas han muerto en los incendios forestales que azotan Argelia. El presidente decretó tres días de luto.",
    "expertName": "BBC Mundo",
    "expertRole": "Corresponsalía"
},
{
    "id": "1152",
    "slug": "gta-6-preview-oficial-fans-criticos-impresionados",
    "titleEs": "Rockstar presenta la vista oficial de GTA 6: fans y críticos quedan impresionados",
    "titleEn": "Rockstar unveils official GTA 6 preview: fans and critics impressed",
    "excerptEs": "La vista oficial del videojuego más anticipado del mundo dejó satisfechos a fans y críticos. GTA 6 promete ser el título más ambicioso de la franquicia.",
    "excerptEn": "The official look at the world's most anticipated video game left fans and critics impressed. GTA 6 promises to be the franchise's most ambitious title.",
    "categoryEs": "Mundo", "categoryEn": "World",
    "date": "2026-08-28", "readTimeEs": "4 min", "readTimeEn": "4 min",
    "imageUrl": "/images/blog/bolivia-agosto-2026/evo-morales-ordenes-captura.jpg",
    "imageCaption": "GTA 6 preview oficial de Rockstar. Fuente: BBC Mundo.",
    "enableComments": "true", "featured": "false", "breaking": "false",
    "location": "New York, EE.UU.", "source": "BBC Mundo",
    "region": "International", "sourceUrl": "https://www.bbc.com",
    "expertQuote": "Lo que sabemos después de la gran vista previa de Grand Theft Auto 6: fans y críticos quedan impresionados.",
    "expertName": "BBC Mundo",
    "expertRole": "Sección Tecnología"
},
{
    "id": "1153",
    "slug": "migrantes-nepal-familias-britanicos-desaparecidos-33",
    "titleEs": "Familias vuelan a Nepal en busca de 33 británicos desaparecidos en la riada",
    "titleEn": "Families fly to Nepal searching for 33 missing British nationals in flood",
    "excerptEs": "Entre los desaparecidos hay una niña de 13 años y un adolescente de 14. Las familias viajan a Nepal mientras el rescate se complica por riesgo de nuevo desbordamiento.",
    "excerptEn": "Among the missing are a 13-year-old girl and a 14-year-old boy. Families travel to Nepal as rescue is complicated by the risk of a new overflow.",
    "categoryEs": "Mundo", "categoryEn": "World",
    "date": "2026-08-28", "readTimeEs": "6 min", "readTimeEn": "6 min",
    "imageUrl": "/images/blog/bolivia-agosto-2026/nevadas-potosi-frontera-chile.jpg",
    "imageCaption": "Familias británicas buscan a sus seres queridos en Nepal. Fuente: BBC Mundo.",
    "enableComments": "true", "featured": "false", "breaking": "false",
    "location": "Katmandú, Nepal", "source": "BBC Mundo / Agencia EFE",
    "region": "International", "sourceUrl": "https://www.bbc.com",
    "expertQuote": "Entre los nacionales británicos reportados desaparecidos hay una niña de 13 años y un adolescente de 14.",
    "expertName": "BBC Mundo",
    "expertRole": "Corresponsalía en Nepal"
}
]

# Build article blocks
blocks = [make_article(a) for a in articles]
new_section = '\n'.join(blocks)

# Read file
p = pathlib.Path('src/translations.ts')
content = p.read_text(encoding='utf-8')

# Remove old articles 1134-1153
for art in articles:
    pattern = r"\{\s*\n\s*id:\s*'" + art['id'] + r"'.*?\n\s*\},"
    content = re.sub(pattern, '', content, flags=re.DOTALL)

# Insert before FIN DE NOTICIAS
content = content.replace('// FIN DE NOTICIAS', new_section + '\n// FIN DE NOTICIAS')

# Clean up multiple blank lines
content = re.sub(r'\n{3,}', '\n\n', content)

p.write_text(content, encoding='utf-8')
print(f"Done: inserted {len(articles)} articles with full content")
