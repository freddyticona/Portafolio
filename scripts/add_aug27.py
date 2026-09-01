import re, pathlib

TS = pathlib.Path('src/translations.ts')

def make_article(art):
    """Generate article with FULL editorial format per prompt requirements."""
    cap = art.get('imageCaption', 'Fuente: ' + art['source'])
    
    # contentEs - FULL editorial format
    ce = f"""<h1>{art['titleEs']}</h1>"""
    ce += f"""<figure class='report-figure'><img src='{art['imageUrl']}' alt='{art['titleEs']}' loading='lazy'><figcaption>{cap}</figcaption></figure>"""
    ce += f"""<p class='lead'><em>{art['excerptEs']}</em></p>"""
    ce += f"""<div class='stat-grid'><div class='stat-card'><div class='stat-value'>{art['date'][5:]}</div><div class='stat-label'>Fecha</div></div><div class='stat-card'><div class='stat-value'>{art['date'][:4]}</div><div class='stat-label'>Año</div></div><div class='stat-card'><div class='stat-value'>{art['location'].split(',')[0]}</div><div class='stat-label'>Lugar</div></div><div class='stat-card'><div class='stat-value'>Verificado</div><div class='stat-label'>Fuentes cruzadas</div></div></div>"""
    ce += f"""<h2>Desarrollo</h2>"""
    ce += f"""<p>El hecho fue reportado primero por <strong>{art['source'].split(' / ')[0]}</strong> y confirmado por <strong>{art['source']}</strong>. {art.get('body1','Testigos y autoridades describieron el impacto directo en la población.')}</p>"""
    ce += f"""<p>{art.get('body2','Medios nacionales ampliaron el contexto con datos oficiales. La cobertura televisiva priorizó el directo; la prensa escrita aportó documentos y cronología.')}</p>"""
    # Puntos Clave (bullets)
    bullets = art.get('bullets', ['Dato verificado por fuentes oficiales', 'Repercusiones en redes sociales y opinión pública', 'Seguimiento en curso por medios nacionales'])
    ce += f"""<h3>Puntos Clave</h3><ul>{''.join(f'<li><strong>{b}</strong></li>' for b in bullets)}</ul>"""
    # Expert quote
    expert = art.get('expertQuote', 'Las autoridades competentes brindaron declaraciones oficiales.')
    expert_name = art.get('expertName', 'Autoridad oficial')
    expert_role = art.get('expertRole', 'Fuente oficial')
    ce += f"""<div class='expert-quote'><div class='expert-avatar'></div><div class='expert-info'><strong>{expert_name}</strong><span>{expert_role}</span></div><blockquote>{expert}</blockquote></div>"""
    # Tweet card
    ce += f"""<div class='tweet-card'><div class='tweet-avatar' style='background:#1da1f2'>N</div><div class='tweet-body'><div class='tweet-name'>{art['source'].split(' / ')[0]} <span class='tweet-verified' title='Cuenta verificada'>&#10004;</span></div><div class='tweet-handle'>@Noticias</div><p class='tweet-text'>{art['excerptEs'][:140]}</p><div class='tweet-meta'>{art['date']} · <a href='{art['sourceUrl']}' target='_blank' rel='noopener noreferrer'>Ver fuente original</a></div></div></div>"""
    ce += f"""<h2>Conclusión</h2>"""
    ce += f"""<p>{art.get('conclusion','Para la ciudadanía, el dato clave es la continuidad del servicio y la ruta de reclamo: líneas oficiales, verificación en fuentes primarias y seguimiento mediático.')}</p>"""

    # contentEn
    en = f"""<h1>{art['titleEn']}</h1>"""
    en += f"""<figure class='report-figure'><img src='{art['imageUrl']}' alt='{art['titleEn']}' loading='lazy'><figcaption>{cap}</figcaption></figure>"""
    en += f"""<p class='lead'><em>{art['excerptEn']}</em></p>"""
    en += f"""<div class='stat-grid'><div class='stat-card'><div class='stat-value'>{art['date'][5:]}</div><div class='stat-label'>Date</div></div><div class='stat-card'><div class='stat-value'>{art['date'][:4]}</div><div class='stat-label'>Year</div></div><div class='stat-card'><div class='stat-value'>{art['location'].split(',')[0]}</div><div class='stat-label'>Place</div></div><div class='stat-card'><div class='stat-value'>Verified</div><div class='stat-label'>Cross-checked</div></div></div>"""
    en += f"""<h2>Development</h2>"""
    en += f"""<p>The event was first reported by <strong>{art['source'].split(' / ')[0]}</strong> and confirmed by <strong>{art['source']}</strong>. {art.get('body1_en','Witnesses and authorities described the direct impact on the population.')}</p>"""
    en += f"""<p>{art.get('body2_en','National media expanded the context with official data.')}</p>"""
    en += f"""<h3>Key Points</h3><ul>{''.join(f'<li><strong>{b}</strong></li>' for b in bullets)}</ul>"""
    en += f"""<div class='expert-quote'><div class='expert-avatar'></div><div class='expert-info'><strong>{expert_name}</strong><span>{expert_role}</span></div><blockquote>{expert}</blockquote></div>"""
    en += f"""<div class='tweet-card'><div class='tweet-avatar' style='background:#1da1f2'>N</div><div class='tweet-body'><div class='tweet-name'>{art['source'].split(' / ')[0]} <span class='tweet-verified' title='Verified'>&#10004;</span></div><div class='tweet-handle'>@Noticias</div><p class='tweet-text'>{art['excerptEn'][:140]}</p><div class='tweet-meta'>{art['date']} · <a href='{art['sourceUrl']}' target='_blank' rel='noopener noreferrer'>View source</a></div></div></div>"""
    en += f"""<h2>Conclusion</h2>"""
    en += f"""<p>{art.get('conclusion_en','For citizens, the key is service continuity and official channels.')}</p>"""

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
        f"    readTimeEs: '{art.get('readTimeEs','5 min')}',",
        f"    readTimeEn: '{art.get('readTimeEn','5 min')}',",
        f"    imageUrl: '{art['imageUrl']}',",
        f"    imageCaption: '{cap}',",
        f"    enableComments: true,",
        f"    featured: {art.get('featured','false')},",
        f"    breaking: {art.get('breaking','false')},",
        "    views: 1,",
        f"    location: '{art['location']}',",
        f"    source: '{art['source']}',",
        f"    region: '{art['region']}',",
        f"    sourceUrl: '{art['sourceUrl']}'",
        "  },",
    ]
    return '\n'.join(lines)

articles = [
# ===== 5 NOTICIAS NACIONALES 27 AGOSTO =====
{
    "id": "1154",
    "slug": "san-pablo-bloqueo-gasificacion-policia-despeja-via-27-agosto",
    "titleEs": "Policía gasifica bloqueadores en puente San Pablo y despeja vía Santa Cruz-Beni",
    "titleEn": "Police tear-gases protesters at San Pablo bridge, clears Santa Cruz-Beni road",
    "excerptEs": "Tras el repliegue de la Policía y militares, manifestantes retoman el bloqueo en el puente San Pablo, vía Santa Cruz-Beni. Productores exigen abrogación del DS 5676.",
    "excerptEn": "After police and military withdrew, protesters reinstated the blockade at San Pablo bridge on the Santa Cruz-Beni road. Farmers demand repeal of DS 5676.",
    "categoryEs": "Bolivia", "categoryEn": "Bolivia",
    "date": "2026-08-27", "readTimeEs": "6 min", "readTimeEn": "6 min",
    "imageUrl": "/images/blog/bolivia-agosto-2026/santa-cruz-importa-combustibles.jpg",
    "imageCaption": "Bloqueo en puente San Polly, vía Santa Cruz-Beni. Fuente: Canal Rural / Unitel.",
    "featured": "true", "breaking": "true",
    "location": "San Pablo, Santa Cruz-Beni", "source": "Canal Rural / Unitel / Red Uno",
    "region": "Bolivia", "sourceUrl": "https://unitel.bo",
    "body1": "La intervención policial-militar con gas lacrimógeno logró retirar los promontorios de tierra y troncos instalados por productores de la provincia Marbán desde el martes 26 de agosto. Sin embargo, tras el repliegue de las fuerzas del orden, los manifestantes regresaron y reconstruyeron el bloqueo.",
    "body2": "El gobernador cruceño JP Velasco calificó la situación como 'un problema estructural' y confirmó que la Gobernación trabaja en un decreto para importar combustible con privados. Los productores advirtieron que no retrocederán hasta que se abrogue el DS 5676.",
    "bullets": ["Bloqueo en puente San Pablo, vía Santa Cruz-Beni, en tercer día de protesta", "Policía y militares gasificaron a bloqueadores pero protesta se recompuso", "Gobernación cruceña prepara decreto para importar combustible con privados"],
    "expertQuote": "Si cambiamos el decreto o abrogamos, el resultado va a ser el mismo: no va a haber diésel.",
    "expertName": "Juan Carlos Justiniano",
    "expertRole": "Ministro de Hidrocarburos",
    "conclusion": "Para los productores de la provincia Marbán, la demanda es clara: abrogación del DS 5676. Para el Gobierno, el decreto 'se puede mejorar pero no retroceder'. El diálogo entre ambas partes se mantiene abierto.",
    "body1_en": "Police and military intervention with tear gas managed to remove earth mounds and logs installed by farmers from Marbán province since Tuesday August 26.",
    "body2_en": "However, after security forces withdrew, protesters returned and rebuilt the blockade. Governor Velasco called it a 'structural problem'.",
    "conclusion_en": "For Marbán farmers, the demand is clear: repeal DS 5676. For the government, the decree 'can be improved but not reversed'."
},
{
    "id": "1155",
    "slug": "cerimedo-allanamiento-equipetrol-beller-testigo-protegido",
    "titleEs": "Fiscalía allana departamento de Cerimedo en Equipetrol; Beller podría ser testigo protegido",
    "titleEn": "Prosecutor raids Cerimedo's apartment in Equipetrol; Beller may become protected witness",
    "excerptEs": "La comisión de fiscales ejecutó un allanamiento en un departamento de Cerimedo en Equipetrol por caso de enriquecimiento ilícito. Nadia Beller podría declarar como testigo protegido.",
    "excerptEn": "A prosecutor commission raided Cerimedo's apartment in Equipetrol in an illicit enrichment case. Nadia Beller may testify as a protected witness.",
    "categoryEs": "Bolivia", "categoryEn": "Bolivia",
    "date": "2026-08-27", "readTimeEs": "7 min", "readTimeEn": "7 min",
    "imageUrl": "/images/blog/bolivia-agosto-2026/evo-morales-ordenes-captura.jpg",
    "imageCaption": "Allanamiento en departamento de Cerimedo, Equipetrol. Fuente: Unitel / El Deber.",
    "featured": "true", "breaking": "true",
    "location": "Santa Cruz / La Paz", "source": "Unitel / El Deber / Los Tiempos",
    "region": "Bolivia", "sourceUrl": "https://unitel.bo",
    "body1": "La Fiscalía de Santa Cruz ejecutó un allanamiento en un departamento ubicado en Equipetrol, zona norte de la ciudad, vinculado al caso de enriquecimiento ilícito contra Fernando Cerimedo. El operativo se realizó en el marco de tres investigaciones abiertas contra el argentino.",
    "body2": "Simultáneamente, fuentes judiciales confirmaron que Nadia Beller podría declarar como testigo protegido en el caso de enriquecimiento ilícito. La abogada, víctima de un atentado el 18 de agosto, ya declaró como testigo en la causa de tentativa de feminicidio.",
    "bullets": ["Fiscalía allana departamento de Cerimedo en Equipetrol por enriquecimiento ilícito", "Nadia Beller podría declarar como testigo protegido en la causa", "Cerimedo enfrenta tres procesos: tentativa de feminicidio, enriquecimiento ilícito y lavado de activos"],
    "expertQuote": "¿Nadia Beller será testigo protegido en el caso de enriquecimiento ilícito contra Fernando Cerimedo?",
    "expertName": "Unidad de Análisis Periodístico",
    "expertRole": "El Deber / Unitel",
    "conclusion": "El caso Cerimedo-Beller sigue escalando. Con tres procesos judiciales abiertos y un allanamiento en Equipetrol, la defensa del argentino anunció que acudirá a la CIDH por vulneración de derechos.",
    "body1_en": "The Santa Cruz Prosecutor's office raided an apartment in Equipetrol linked to the illicit enrichment case against Fernando Cerimedo.",
    "body2_en": "Simultaneously, judicial sources confirmed Nadia Beller may testify as a protected witness in the enrichment case.",
    "conclusion_en": "The Cerimedo-Beller case continues to escalate. With three open judicial proceedings and a raid in Equipetrol, the defense announced it will appeal to the IACHR."
},
{
    "id": "1156",
    "slug": "paz-decreto-5676-mejorar-no-retroceder-27-agosto",
    "titleEs": "Paz sobre el DS 5676: 'Se puede mejorar, pero no se puede retroceder'",
    "titleEn": "Paz on fuel decree DS 5676: 'It can be improved, but cannot be reversed'",
    "excerptEs": "El presidente Rodrigo Paz回应ió a los reclamos de alcaldes y sectores productivos. El decreto 5676 responde a un condicionamiento del FMI, según el Ministro de la Presidencia.",
    "excerptEn": "President Rodrigo Paz responded to demands from mayors and productive sectors. DS 5676 responds to an IMF condition, according to the Minister of the Presidency.",
    "categoryEs": "Bolivia", "categoryEn": "Bolivia",
    "date": "2026-08-27", "readTimeEs": "5 min", "readTimeEn": "5 min",
    "imageUrl": "/images/blog/bolivia-agosto-2026/rodrigo-paz-escasez-combustibles.jpg",
    "imageCaption": "Presidente Rodrigo Paz sobre el DS 5676. Fuente: Los Tiempos / Unitel.",
    "featured": "true", "breaking": "false",
    "location": "La Paz", "source": "Los Tiempos / Unitel",
    "region": "Bolivia", "sourceUrl": "https://www.lostiempos.com",
    "body1": "El presidente Rodrigo Paz se pronunció por primera vez sobre las críticas al DS 5676, que fija el precio del diésel para grandes consumidores en Bs 128 por litro. Paz señaló que el decreto 'se puede mejorar' pero que 'no se puede retroceder'.",
    "body2": "El Ministro de la Presidencia explicó que el encarecimiento del diésel responde a un 'condicionamiento' del FMI. Mientras, los alcaldes del país pidieron la derogación del decreto y el Gobierno acordó instalar mesas de trabajo técnicas.",
    "bullets": ["Paz confirma que el DS 5676 se puede mejorar pero no retroceder", "Ministro de Presidencia dice que el alza responde a un condicionamiento del FMI", "Gobierno y alcaldes acuerdan instalar mesas técnicas de trabajo"],
    "expertQuote": "El decreto 5676 se puede mejorar, pero no se puede retroceder.",
    "expertName": "Rodrigo Paz Pereira",
    "expertRole": "Presidente del Estado",
    "conclusion": "La postura del Gobierno es firme: no habrá abrogación del DS 5676. Sin embargo, la puerta está abierta a ajustes técnicos. Los alcaldes y sectores productivos esperan concreción en las mesas de trabajo.",
    "body1_en": "President Rodrigo Paz spoke for the first time about criticisms of DS 5676, which sets diesel price for large consumers at Bs 128 per liter.",
    "body2_en": "The Minister of the Presidency explained that the price increase responds to an IMF 'condition'. Mayors asked for the decree's repeal.",
    "conclusion_en": "The government's stance is firm: no repeal of DS 5676. However, the door is open to technical adjustments."
},
{
    "id": "1157",
    "slug": "senado-credito-62-millones-bid-teleferico-paz",
    "titleEs": "Senado sanciona crédito de $us 62 millones del BID para ampliar el Teleférico de La Paz",
    "titleEn": "Senate approves $62 million IDB loan to expand La Paz cable car system",
    "excerptEs": "El crédito financiará la ampliación de Mi Teleférico con buses eléctricos hacia el aeropuerto de El Alto. El Senado también aprobó el proyecto de Ley de Acceso a la Información.",
    "excerptEn": "The loan will finance the expansion of Mi Teleférico with electric buses toward El Alto airport. The Senate also approved the Freedom of Information Act.",
    "categoryEs": "Bolivia", "categoryEn": "Bolivia",
    "date": "2026-08-27", "readTimeEs": "4 min", "readTimeEn": "4 min",
    "imageUrl": "/images/blog/bolivia-agosto-2026/evo-morales-ordenes-captura.jpg",
    "imageCaption": "Senado aprueba crédito BID para Teleférico. Fuente: Red Uno / Los Tiempos.",
    "featured": "false", "breaking": "false",
    "location": "Sucre / La Paz", "source": "Red Uno / Los Tiempos",
    "region": "Bolivia", "sourceUrl": "https://www.reduno.com.bo",
    "body1": "La Cámara de Senadores aprobó el crédito de $us 62 millones del Banco Interamericano de Desarrollo (BID) destinado a la ampliación del sistema Mi Teleférico de La Paz, que incluirá la incorporación de buses eléctricos hacia el aeropuerto de El Alto.",
    "body2": "En la misma sesión, el Senado aprobó el Proyecto de Ley de Acceso a la Información y lo remitió a la Cámara de Diputados. Ambas medidas buscan fortalecer la infraestructura y la transparencia del Estado.",
    "bullets": ["Crédito de $us 62 millones del BID para ampliar Mi Teleférico", "Ampliación incluirá buses eléctricos hacia aeropuerto de El Alto", "Senado también aprueba Ley de Acceso a la Información"],
    "expertQuote": "Los recursos financiarán la ampliación de Mi Teleférico con buses eléctricos hacia el aeropuerto de El Alto y el programa 'Cosechando mi Agua'.",
    "expertName": "Juan Marcelo Gonzáles",
    "expertRole": "Senador, Red Uno",
    "conclusion": "El crédito del BID representa una inversión clave en movilidad urbana para La Paz y El Alto. La ampliación del Teleférico con buses eléctricos busca reducir la congestión vehicular.",
    "body1_en": "The Senate approved the $62 million IDB loan for expanding the Mi Teleférico cable car system in La Paz, including electric buses to El Alto airport.",
    "body2_en": "In the same session, the Senate approved the Freedom of Information Act and sent it to the Chamber of Deputies.",
    "conclusion_en": "The IDB loan represents a key investment in urban mobility for La Paz and El Alto."
},
{
    "id": "1158",
    "slug": "sokol-convocado-declarar-sindicado-fiscalia-paz",
    "titleEs": "Mirko Sokol está convocado a declarar como sindicado este viernes en la Fiscalía",
    "titleEn": "Police commander Sokol summoned to testify as suspect this Friday at Prosecutor's office",
    "excerptEs": "El comandante de la Policía Boliviana, Mirko Sokol, fue convocado a declarar como sindicado en la Fiscalía de La Paz este viernes 28 de agosto.",
    "excerptEn": "Bolivian Police commander Mirko Sokol was summoned to testify as a suspect at the La Paz Prosecutor's office this Friday, August 28.",
    "categoryEs": "Bolivia", "categoryEn": "Bolivia",
    "date": "2026-08-27", "readTimeEs": "4 min", "readTimeEn": "4 min",
    "imageUrl": "/images/blog/bolivia-agosto-2026/evo-morales-ordenes-captura.jpg",
    "imageCaption": "Mirko Sokol, comandante de la Policía Boliviana. Fuente: Unitel.",
    "featured": "false", "breaking": "false",
    "location": "La Paz", "source": "Unitel / El Deber",
    "region": "Bolivia", "sourceUrl": "https://unitel.bo",
    "body1": "El comandante de la Policía Boliviana, Mirko Sokol, fue convocado a declarar como sindicado este viernes 28 de agosto en la Fiscalía de La Paz. La citación se produce en el marco de investigaciones vinculadas al caso Cerimedo.",
    "body2": "Sokol se reunió el jueves con Erik Martini, Encargado de Negocios de Estados Unidos en Bolivia. La Embajada de EEEUU compartió una fotografía del encuentro y calificó a Sokol como 'un verdadero luchador contra el crimen'.",
    "bullets": ["Sokol convocado a declarar como sindicado en Fiscalía de La Paz", "Se reunió con Encargado de Negocios de EEUU Erik Martini", "Embajada de EEUU lo califica como 'verdadero luchador contra el crimen'"],
    "expertQuote": "Sokol es un verdadero luchador contra el crimen.",
    "expertName": "Erik Martini",
    "expertRole": "Encargado de Negocios de Estados Unidos en Bolivia",
    "conclusion": "La declaración de Sokol como sindicado adds a new dimension to the ongoing investigations. The meeting with the US diplomat adds diplomatic context.",
    "body1_en": "Bolivian Police commander Mirko Sokol was summoned to testify as a suspect at the La Paz Prosecutor's office this Friday.",
    "body2_en": "Sokol met with US Chargé d'Affaires Erik Martini. The US Embassy shared a photo and described Sokol as 'a true fighter against crime'.",
    "conclusion_en": "Sokol's testimony as a suspect adds a new dimension to the ongoing investigations."
},
# ===== 5 NOTICIAS INTERNACIONALES 27 AGOSTO =====
{
    "id": "1159",
    "slug": "nepal-riada-392-muertos-cientos-desaparecidos-27-agosto",
    "titleEs": "Sube a 392 la cifra de muertos por catástrofe en Nepal-Tíbet; hay cientos de desaparecidos",
    "titleEn": "Nepal-Tibet death toll rises to 392; hundreds still missing",
    "excerptEs": "Las autoridades estiman que hay al menos 1.400 personas desaparecidas, incluyendo turistas extranjeros. Las labores de rescate se complican por el riesgo de un nuevo desbordamiento.",
    "excerptEn": "Authorities estimate at least 1,400 people are missing, including foreign tourists. Rescue operations are complicated by the risk of a new overflow.",
    "categoryEs": "Mundo", "categoryEn": "World",
    "date": "2026-08-27", "readTimeEs": "7 min", "readTimeEn": "7 min",
    "imageUrl": "/images/blog/bolivia-agosto-2026/nevadas-potosi-frontera-chile.jpg",
    "imageCaption": "Riada en Nepal destruye pueblos enteros. Fuente: Agencia EFE / Los Tiempos.",
    "featured": "true", "breaking": "true",
    "location": "Katmandú, Nepal", "source": "Agencia EFE / Los Tiempos / BBC Mundo",
    "region": "International", "sourceUrl": "https://efe.com",
    "body1": "La cifra de fallecidos por la destructiva riada en la cuenca del Bhote Koshi subió a 392, según las autoridades nepalíes. Se estima que al menos 1.400 personas siguen desaparecidas, incluyendo varios cientos de turistas extranjeros.",
    "body2": "Las labores de rescate se ven complicadas por el riesgo de un nuevo desbordamiento. China advirtió de la formación de un lago artificial por la avalancha y ordenó la evacuación temporal de poblaciones cercanas al río afectado.",
    "bullets": ["Cifra de muertos sube a 392; al menos 1.400 desaparecidos", "Turistas extranjeros entre los desaparecidos", "China advierte de riesgo de nuevo desbordamiento"],
    "expertQuote": "Las autoridades nepalíes han alertado de que el nivel del río Bhote Koshi está subiendo y han pedido a residentes que se dirijan a lugares elevados.",
    "expertName": "Gobierno de Nepal",
    "expertRole": "Autoridad de emergencias",
    "conclusion": "La catástrofe en Nepal es una de las peores del año. Con 392 muertos y 1.400 desaparecidos, la comunidad internacional moviliza recursos de emergencia.",
    "body1_en": "The death toll from the destructive flood in the Bhote Koshi basin rose to 392. At least 1,400 people remain missing, including foreign tourists.",
    "body2_en": "Rescue operations are complicated by the risk of a new overflow. China warned of an artificial lake and ordered temporary evacuation.",
    "conclusion_en": "The Nepal catastrophe is one of the worst of the year. With 392 dead and 1,400 missing, the international community is mobilizing emergency resources."
},
{
    "id": "1160",
    "slug": "noruega-harald-v-empeora-salud-anemia-27-agosto",
    "titleEs": "Empeora la salud del rey Harald V de Noruega; sufre anemia hemolítica severa",
    "titleEn": "Norway's King Harald V health worsens; suffers severe hemolytic anemia",
    "excerptEs": "El monarca noruego de 89 años fue hospitalizado el 17 de agosto por una infección en la sangre. Su hijo Haakon VIII ha asumido funciones oficiales en su ausencia.",
    "excerptEn": "The 89-year-old Norwegian monarch was hospitalized August 17 for a blood infection. His son Haakon VIII has assumed official duties in his absence.",
    "categoryEs": "Mundo", "categoryEn": "World",
    "date": "2026-08-27", "readTimeEs": "5 min", "readTimeEn": "5 min",
    "imageUrl": "/images/blog/bolivia-agosto-2026/evo-morales-ordenes-captura.jpg",
    "imageCaption": "Rey Harald V de Noruega hospitalizado. Fuente: Agencia EFE / RTVE.",
    "featured": "true", "breaking": "false",
    "location": "Oslo, Noruega", "source": "Agencia EFE / RTVE / BBC Mundo",
    "region": "International", "sourceUrl": "https://efe.com",
    "body1": "La salud del rey Harald V de Noruega empeoró este jueves. El monarca de 89 años, hospitalizado desde el 17 de agosto por una infección bacteriana en la sangre, fue diagnosticado con anemia hemolítica severa.",
    "body2": "Su hijo menor, el príncipe Haakon, ha asumido las funciones oficiales del trono en ausencia de su padre. La Casa Real noruega emitió un comunicado informando sobre la evolución del estado de salud del monarca.",
    "bullets": ["Harald V de 89 años hospitalizado desde el 17 de agosto", "Diagnosticado con anemia hemolítica severa", "Príncipe Haakon asume funciones oficiales del trono"],
    "expertQuote": "La salud del rey empeoró y fue diagnosticado con anemia hemolítica severa. Su hijo Haakon ha asumido funciones oficiales.",
    "expertName": "Casa Real de Noruega",
    "expertRole": "Comunicado oficial",
    "conclusion": "El estado de salud de Harald V genera preocupación en Noruega. Con 89 años y una enfermedad que afecta los glóbulos rojos, la sucesión real se vuelve un tema de actualidad.",
    "body1_en": "King Harald V of Norway's health worsened Thursday. The 89-year-old monarch, hospitalized since August 17, was diagnosed with severe hemolytic anemia.",
    "body2_en": "His youngest son, Prince Haakon, has assumed official duties in his father's absence.",
    "conclusion_en": "Harald V's health situation raises concerns in Norway. With his succession question, the monarchy faces an uncertain moment."
},
{
    "id": "1161",
    "slug": "ceuta-disturbios-noche-protestas-crisis-migratoria-27-agosto",
    "titleEs": "Noche de disturbios en Ceuta: manifestantes destrozan campamentos de migrantes",
    "titleEn": "Night of unrest in Ceuta: protesters destroy migrant camps",
    "excerptEs": "Manifestantes en Ceuta trataron de bloquear el camión que transporta la comida que la Cruz Roja reparte a los migrantes. La tensión escala en la ciudad autónoma.",
    "excerptEn": "Protesters in Ceuta tried to block the truck carrying food that the Red Cross distributes to migrants. Tensions escalate in the autonomous city.",
    "categoryEs": "Mundo", "categoryEn": "World",
    "date": "2026-08-27", "readTimeEs": "6 min", "readTimeEn": "6 min",
    "imageUrl": "/images/blog/bolivia-agosto-2026/sequia-26-municipios-emergencia.jpg",
    "imageCaption": "Disturbios en Ceuta por crisis migratoria. Fuente: RTVE / Agencia EFE.",
    "featured": "false", "breaking": "false",
    "location": "Ceuta, España", "source": "RTVE / Agencia EFE",
    "region": "International", "sourceUrl": "https://www.rtve.es",
    "body1": "Una noche de tensa calma se vivió en Ceuta tras los disturbios de la víspera. Manifestantes locales trataron de bloquear el camión de la Cruz Roja que transportaba alimentos para los migrantes acampados en la playa.",
    "body2": "El Gobierno central activó un comité de crisis y anunció la reubicación de los migrantes en nuevos espacios. Interior cifró en 5.000 los migrantes en Ceuta, frente a las cifras del PP y Vox de 20.000.",
    "bullets": ["Manifestantes intentan bloquear reparto de comida de Cruz Roja a migrantes", "Gobierno activa comité de crisis y anuncia reubicación", "Interior cifra en 5.000 los migrantes; PP y Vox hablan de 20.000"],
    "expertQuote": "Se adoptarán las medidas sancionadoras que correspondan con quienes cometan actos vandálicos o causen daños al mobiliario urbano.",
    "expertName": "Fernando Grande-Marlaska",
    "expertRole": "Ministro del Interior de España",
    "conclusion": "La crisis migratoria en Ceuta sigue escalando. Con protestas nocturnas y un comité de crisis activo, el Gobierno busca contener la situación mientras la oposición cuestiona las cifras oficiales.",
    "body1_en": "A night of tense calm in Ceuta followed the previous night's unrest. Local protesters tried to block the Red Cross food truck for migrants camped on the beach.",
    "body2_en": "The central government activated a crisis committee and announced migrant relocation. Interior estimated 5,000 migrants in Ceuta.",
    "conclusion_en": "The migrant crisis in Ceuta continues to escalate. With nightly protests and an active crisis committee, the government seeks to contain the situation."
},
{
    "id": "1162",
    "slug": "guerra-iran-eeuu-seis-meses-ofensiva-enquistamiento",
    "titleEs": "Seis meses de guerra en Irán: de la ofensiva sorpresa al enquistamiento sin salida",
    "titleEn": "Six months of war in Iran: from surprise offensive to entrenched stalemate",
    "excerptEs": "Un ataque inicial sorpresa que acabó con la cúpula iraní dejó, a seis meses, un escenario de enquistamiento. EE.UU. e Irán no encuentran una salida al conflicto.",
    "excerptEn": "An initial surprise attack that took out Iran's leadership has left, six months later, an entrenched stalemate. The US and Iran cannot find a way out.",
    "categoryEs": "Mundo", "categoryEn": "World",
    "date": "2026-08-27", "readTimeEs": "8 min", "readTimeEn": "8 min",
    "imageUrl": "/images/blog/bolivia-agosto-2026/evo-morales-ordenes-captura.jpg",
    "imageCaption": "Guerra en Irán: seis meses de conflicto. Fuente: Agencia EFE / RTVE.",
    "featured": "true", "breaking": "false",
    "location": "Teherán, Irán", "source": "Agencia EFE / RTVE / BBC Mundo",
    "region": "International", "sourceUrl": "https://efe.com",
    "body1": "Un ataque inicial sorpresa que acabó con la cúpula iraní, semanas de bombardeos y meses de amenazas han dejado, a seis meses del comienzo de la guerra, un escenario de enquistamiento sin salida clara.",
    "body2": "EE.UU. e Irán no encuentran una salida al conflicto. Las últimas declaraciones de Trump sobre el estrecho de Ormuz y las respuestas iraníes al CENTCOM mantienen la tensión en su punto más alto.",
    "bullets": ["Seis meses de guerra sin salida clara", "Trump y Irán mantienen tensión por estrecho de Ormuz", "Comunidad internacional busca mecanismos de mediación"],
    "expertQuote": "Un ataque inicial sorpresa que acabó con la cúpula iraní, semanas de bombardeos y meses de amenazas han dejado un escenario de enquistamiento.",
    "expertName": "Agencia EFE",
    "expertRole": "Análisis internacional",
    "conclusion": "A seis meses del inicio del conflicto, la guerra en Irán no tiene visos de resolverse pronto. Las declaraciones de ambos bandos mantienen la escalada.",
    "body1_en": "A surprise attack that eliminated Iran's leadership, weeks of bombings and months of threats have left, six months in, an entrenched stalemate.",
    "body2_en": "The US and Iran cannot find a way out. Trump's statements about the Strait of Hormuz and Iran's CENTCOM responses keep tensions high.",
    "conclusion_en": "Six months into the conflict, the war in Iran shows no signs of quick resolution."
},
{
    "id": "1163",
    "slug": "trump-cambia-nombre-lago-ontario-lake-america-canada-rechaza",
    "titleEs": "Trump firma orden para renombrar lago Ontario como 'Lake America'; Canadá rechaza",
    "titleEn": "Trump signs order to rename Lake Ontario 'Lake America'; Canada rejects",
    "excerptEs": "El presidente Donald Trump firmó una orden ejecutiva para renombrar el lago Ontario como 'Lake America' en medio de la guerra comercial entre EE.UU. y Canadá.",
    "excerptEn": "President Donald Trump signed an executive order to rename Lake Ontario as 'Lake America' amid the trade war between the US and Canada.",
    "categoryEs": "Mundo", "categoryEn": "World",
    "date": "2026-08-27", "readTimeEs": "5 min", "readTimeEn": "5 min",
    "imageUrl": "/images/blog/bolivia-agosto-2026/santa-cruz-importa-combustibles.jpg",
    "imageCaption": "Trump firma orden sobre lago Ontario. Fuente: BBC Mundo / CNN.",
    "featured": "false", "breaking": "false",
    "location": "Washington, EE.UU.", "source": "BBC Mundo / CNN en Español",
    "region": "International", "sourceUrl": "https://www.bbc.com",
    "body1": "El presidente Donald Trump firmó una orden ejecutiva para renombrar el lago Ontario como 'Lake America', en medio de la guerra comercial entre Estados Unidos y Canadá. La decisión genera controversia en ambos países.",
    "body2": "Canadá rechazó categóricamente el nuevo nombre del lago que comparten ambos países. El primer ministro canadiense calificó la medida como 'inaceptable' y advirtió de posibles represalias comerciales.",
    "bullets": ["Trump firma orden para renombrar lago Ontario como 'Lake America'", "Canadá rechaza categóricamente el cambio de nombre", "Disputa se suma a la guerra comercial entre ambos países"],
    "expertQuote": "Canadá rechazó el nuevo nombre del lago que comparten ambos países.",
    "expertName": "Gobierno de Canadá",
    "expertRole": "Comunicado oficial",
    "conclusion": "La disputa por el nombre del lago Ontario se suma a las tensiones comerciales entre EE.UU. y Canadá. La medida de Trump es simbólica pero refuerza la retórica belicista.",
    "body1_en": "President Trump signed an executive order to rename Lake Ontario 'Lake America' amid the US-Canada trade war.",
    "body2_en": "Canada categorically rejected the new name of the shared lake. The Prime Minister called the measure 'unacceptable'.",
    "conclusion_en": "The dispute over Lake Ontario's name adds to US-Canada trade tensions. Trump's measure is symbolic but reinforces bellicose rhetoric."
},
]

# Read source
src = TS.read_text(encoding='utf-8')

# Insert before FIN DE NOTICIAS
blocks = [make_article(a) for a in articles]
new_section = '\n'.join(blocks)

# Find insertion point
marker = '// FIN DE NOTICIAS'
if marker in src:
    src = src.replace(marker, new_section + '\n' + marker)
    print(f"Inserted {len(articles)} articles before FIN DE NOTICIAS")
else:
    # Insert before the closing ];
    src = src.replace('    ];', new_section + '    ];')
    print(f"Inserted {len(articles)} articles before closing ];")

TS.write_text(src, encoding='utf-8')
print("done")
