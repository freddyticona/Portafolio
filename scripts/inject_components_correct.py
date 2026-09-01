import io, re

TS_PATH = r'src/translations.ts'

with io.open(TS_PATH, 'r', encoding='utf-8') as f:
    src = f.read()

def tweet_card(name, handle, initials, text_es, text_en, date_str, bg='#1d9bf0'):
    es = ("<div class='tweet-card'>\n  <div class='tweet-card-header'>\n"
          f"    <div class='tweet-card-avatar' style='background-color: {bg};'>{initials}</div>\n"
          "    <div class='tweet-card-names'>\n"
          f"      <span class='tweet-card-name'>{name} <span class='tweet-card-verified'>&#10004;</span></span>\n"
          f"      <span class='tweet-card-handle'>{handle}</span>\n"
          "    </div>\n  </div>\n"
          f"  <p class='tweet-card-body'>{text_es}</p>\n"
          "  <div class='tweet-card-footer'>\n"
          f"    <span>{date_str}</span>\n"
          f"    <a href='https://x.com/{handle.lstrip('@')}' target='_blank' rel='noopener noreferrer' class='tweet-card-link'>Ver en X &rarr;</a>\n"
          "  </div>\n</div>")
    en = ("<div class='tweet-card'>\n  <div class='tweet-card-header'>\n"
          f"    <div class='tweet-card-avatar' style='background-color: {bg};'>{initials}</div>\n"
          "    <div class='tweet-card-names'>\n"
          f"      <span class='tweet-card-name'>{name} <span class='tweet-card-verified'>&#10004;</span></span>\n"
          f"      <span class='tweet-card-handle'>{handle}</span>\n"
          "    </div>\n  </div>\n"
          f"  <p class='tweet-card-body'>{text_en}</p>\n"
          "  <div class='tweet-card-footer'>\n"
          f"    <span>{date_str}</span>\n"
          f"    <a href='https://x.com/{handle.lstrip('@')}' target='_blank' rel='noopener noreferrer' class='tweet-card-link'>View on X &rarr;</a>\n"
          "  </div>\n</div>")
    return es, en

def expert_quote(name, initials, role_es, role_en, quote_es, quote_en):
    es = ("<div class='expert-quote'>\n"
          f"  <p class='expert-quote-text'>\"{quote_es}\"</p>\n"
          "  <div class='expert-quote-author'>\n"
          f"    <div class='expert-quote-initial'>{initials}</div>\n"
          "    <div>\n"
          f"      <div class='expert-quote-name'>{name}</div>\n"
          f"      <div class='expert-quote-role'>{role_es}</div>\n"
          "    </div>\n  </div>\n</div>")
    en = ("<div class='expert-quote'>\n"
          f"  <p class='expert-quote-text'>\"{quote_en}\"</p>\n"
          "  <div class='expert-quote-author'>\n"
          f"    <div class='expert-quote-initial'>{initials}</div>\n"
          "    <div>\n"
          f"      <div class='expert-quote-name'>{name}</div>\n"
          f"      <div class='expert-quote-role'>{role_en}</div>\n"
          "    </div>\n  </div>\n</div>")
    return es, en

TWEETS = {
    '1136': tweet_card('Rodrigo Paz Pereira', '@RodrigoPazPeru', 'RP',
        'El modelo energético está agotado: el 40% de déficit diésel pone en riesgo 1,2 millones de hectáreas de soya. Convoco a una mesa técnica nacional del 15 al 20 de septiembre.',
        'The energy model is exhausted: the 40% diesel deficit puts 1.2 million hectares of soy at risk. I call a national technical table from Sept 15-20.', '28 ago 2026', '#0284c7'),
    '1137': tweet_card('YPFB Corporación', '@YPFB_Bolivia', 'YP',
        'Informamos al país que se programaron 12 buques petroleros en puertos del Pacífico para normalizar el abastecimiento nacional en 45 días, respaldados por la inyección de $us 1.850 millones.',
        'We inform the nation that 12 fuel tankers have been scheduled at Pacific ports to normalize nationwide supply within 45 days, backed by a $1.85 billion injection.', '28 ago 2026', '#16a34a'),
    '1139': tweet_card('Gobierno Autónomo Departamental de Santa Cruz', '@GobSantaCruz', 'SC',
        'Promulgamos la Ley de Emergencia Departamental: activamos competencias exclusivas y un fondo de contingencia por 90 días para proteger la cosecha y garantizar combustible a los sectores productivos.',
        'We enacted the Departmental Emergency Law: activating exclusive powers and a 90-day contingency fund to protect the harvest and secure fuel for producers.', '28 ago 2026', '#059669'),
    '1142': tweet_card('Planetario Max Schreier UMSA', '@PlanetarioUMSA', 'MS',
        '¡Registro histórico! El eclipse anular alcanzó su punto máximo a las 04:18 HB con 84% de cobertura visible desde La Paz. Más de 5.000 personas compartieron la vigilia científica con enlace a la NASA.',
        'Historic observation! The annular eclipse peaked at 04:18 local time with 84% coverage over La Paz. Over 5,000 attended the vigil with a live NASA feed.', '28 ago 2026', '#4338ca'),
    '1144': tweet_card('UN OCHA Nepal', '@UNOCHA_Nepal', 'UN',
        'Lanzamos el llamamiento de emergencia flash por $us 15M ante la catástrofe en Sindhupalchok: 392 fallecidos y más de 20 aldeas arrasadas. Equipos de Nepal, China e India coordinan el rescate.',
        'We launch a $15M flash emergency appeal after the Sindhupalchok catastrophe: 392 confirmed deaths and over 20 villages destroyed. Teams from Nepal, China and India coordinate rescue.', '28 ago 2026', '#0284c7'),
    '1147': tweet_card('Instituto Nacional de Estadística', '@INE_es', 'INE',
        'Indicador adelantado del IPC agosto 2026: la tasa anual se sitúa en el 4,3%, medio punto superior a la de julio. La electricidad (+12,4%) y los carburantes (+8,1%) explican el repunte.',
        'Flash CPI August 2026: the annual rate stands at 4.3%, half a point above July. Electricity (+12.4%) and automotive fuels (+8.1%) explain the monthly uptick.', '28 ago 2026', '#b91c1c'),
    '1148': tweet_card('Institute for the Study of War', '@TheStudyofWar', 'ISW',
        'Evaluación del frente: con avances territoriales inferiores a 5 km mensuales en el Donbás, el conflicto se asienta en una guerra de desgaste dominada por drones FPV y artillería masiva.',
        'Frontline assessment: with monthly gains under 5 km in the Donbas, the conflict is locked in attrition warfare dominated by FPV drones and heavy artillery.', '28 ago 2026', '#1e293b'),
    '1155': tweet_card('Ministerio Público de Bolivia', '@FiscaliaBolivia', 'MP',
        'La comisión de fiscales concluyó el allanamiento en Torre Titanium, Santa Cruz: se secuestraron 5 discos duros, 3 terminales móviles y un servidor bajo estricta cadena de custodia para peritaje.',
        'The prosecutorial commission concluded the search at Titanium Tower, Santa Cruz: 5 hard drives, 3 mobile terminals and a server were seized under strict chain of custody for forensics.', '27 ago 2026', '#1e3a8a'),
    '1156': tweet_card('Rodrigo Paz Pereira', '@RodrigoPazPeru', 'RP',
        'El DS 5676 puede perfeccionarse, pero no podemos retroceder en el control del contrabando. La prioridad es garantizar el suministro a los verdaderos productores de alimentos y transportistas.',
        'Supreme Decree 5676 can be improved but we cannot retreat on anti-smuggling controls. The priority is securing fuel for genuine food producers and truckers.', '27 ago 2026', '#0284c7'),
    '1161': tweet_card('Delegación del Gobierno en Ceuta', '@DelGobCeuta', 'DG',
        'Condenamos enérgicamente los actos vandálicos de la pasada noche contra instalaciones humanitarias. Se ha reforzado el contingente policial con 300 efectivos para garantizar la convivencia.',
        'We strongly condemn last night\'s vandalism against humanitarian facilities. Police deployment has been reinforced with 300 officers to ensure civil order.', '27 ago 2026', '#0284c7'),
    '1162': tweet_card('Center for Strategic and International Studies', '@CSIS', 'CS',
        'A seis meses del inicio del conflicto en Irán, la dispersión de instalaciones subterráneas impide una resolución militar concluyente, forzando la apertura de canales diplomáticos indirectos.',
        'Six months into the Iran conflict, underground dispersal precludes a decisive military victory, forcing indirect diplomatic backchannels.', '27 ago 2026', '#0f172a'),
}

EXPERTS = {
    '1135': expert_quote('Williams Bascopé', 'WB',
        'Abogado constitucionalista y especialista en derecho procesal penal', 'Constitutional lawyer and criminal procedural law specialist',
        'La prisión preventiva de 180 días contra Cerimedo responde a indicios periciales de riesgo procesal. La cadena de custodia de las grabaciones será determinante para sostener la imputación por legitimación de ganancias ilícitas.',
        'The 180-day preventive detention against Cerimedo rests on forensic evidence of procedural risk. The chain of custody of the seized recordings will be decisive for the illicit-enrichment indictment.'),
    '1138': expert_quote('Gonzalo Chávez', 'GC',
        'Economista y docente de la Universidad Católica Boliviana', 'Economist and Professor at Universidad Católica Boliviana',
        'El bloqueo carretero en Guarayos genera un impacto económico directo de más de $us 12 millones por jornada en la cadena agroexportadora, además de asfixiar el abastecimiento alimentario en cuatro departamentos.',
        'The highway blockade in Guarayos inflicts a direct economic loss exceeding $12 million per day on the agro-export chain, while strangling food supplies across four departments.'),
    '1140': expert_quote('Fernando Andrés', 'FA',
        'Analista en relaciones internacionales y comercio con Asia-Pacífico', 'International relations and Asia-Pacific trade analyst',
        'La firma de los tres memorandos con Pekín abre una línea de crédito de $us 500 millones enfocada en la industrialización del litio en Uyuni, consolidando una alianza con el principal demandante global de minerales críticos.',
        'The signing of three memorandums with Beijing unlocks a $500 million credit line focused on lithium industrialization in Uyuni, solidifying a partnership with the world\'s leading consumer of critical minerals.'),
    '1141': expert_quote('Marisol Portugal', 'MP',
        'Jefa de la Unidad de Pronósticos del SENAMHI', 'Head of Forecasts Unit at SENAMHI Bolivia',
        'El fenómeno registrado combinó una masa de aire polar con alta humedad en valles interandinos, produciendo granizo severo de hasta 4 centímetros y un desplome térmico a -5°C con alta inestabilidad convectiva.',
        'The storm combined a polar airmass with high humidity in inter-Andean valleys, generating severe hail up to 4 centimeters and a sudden thermal plunge to -5°C with severe convective instability.'),
    '1143': expert_quote('José Luis Exeni', 'JE',
        'Especialista en gobernanza, transparencia y gestión pública', 'Governance, transparency and public administration specialist',
        'Tipificar el silencio administrativo como falta grave con inhabilitación de hasta 5 años y multas de 100 salarios constituye el avance institucional más significativo en dos décadas contra la opacidad en contrataciones.',
        'Classifying administrative silence as a severe infraction with up to 5-year disqualification and 100-wage fines is the most significant institutional leap against procurement opacity in two decades.'),
    '1145': expert_quote('Trond Norén Isaksen', 'TI',
        'Historiador de las monarquías escandinavas y biógrafo real', 'Historian of Scandinavian monarchies and royal biographer',
        'Harald V redefinió la corona noruega durante 35 años como un ancla moral y de inclusión democrática. La regencia del príncipe Haakon bajo el artículo 44 constitucional garantiza una transición impecable.',
        'Harald V redefined the Norwegian crown over 35 years as a moral anchor of democratic inclusion. Crown Prince Haakon\'s regency under Article 44 guarantees an impeccable transition.'),
    '1146': expert_quote('Carlos Echeverría Jesús', 'CE',
        'Profesor de Relaciones Internacionales (UNED) y analista del Magreb', 'Professor of International Relations (UNED) and Maghreb analyst',
        'La saturación del centro de estancia temporal en Ceuta con 1.200 personas triplicando el aforo de 400 plazas exige un corredor humanitario hacia la península y la reactivación de los protocolos de readmisión con Rabat.',
        'Overcrowding at the Ceuta reception center with 1,200 occupants tripling its 400-bed capacity requires a humanitarian corridor to the mainland and full reactivation of readmission protocols with Rabat.'),
    '1149': expert_quote('Noah Hall', 'NH',
        'Catedrático de Derecho Ambiental y Aguas Transfronterizas (Wayne State)', 'Professor of Environmental Law and Transboundary Waters (Wayne State)',
        'El Tratado de Aguas Fronterizas de 1909 prohíbe taxativamente cualquier desvío unilateral que afecte los niveles naturales de los Grandes Lagos. La Comisión Mixta Internacional tiene facultades vinculantes para bloquear la medida.',
        'The 1909 Boundary Waters Treaty strictly prohibits any unilateral diversion altering natural Great Lakes levels. The International Joint Commission holds binding authority to stay unilateral measures.'),
    '1150': expert_quote('Sonia Livingstone', 'SL',
        'Catedrática de Psicología Social y Medios Digitales (LSE)', 'Professor of Social Psychology and Digital Media (LSE)',
        'La privacidad estricta por defecto para menores de 18 y la prohibición algorítmica de contenidos nocivos en Reels marcan el estándar que Europa y EE. UU. exigían bajo la DSA y KOSA.',
        'Default strict privacy for users under 18 and algorithmic bans on harmful content in Reels establish the standard required across Europe and the US under DSA and KOSA.'),
    '1151': expert_quote('Víctor Resco de Dios', 'VR',
        'Catedrático de Incendios Forestales y Cambio Global (Universidad de Lleida)', 'Professor of Wildland Fire and Global Change (University of Lleida)',
        'La simultaneidad de más de 40 focos en la Cabilia, combinada con ráfagas de siroco y temperaturas de 45°C, creó tormentas de fuego de sexto orden que superaron la capacidad de extinción convencional.',
        'The simultaneous ignition of over 40 blazes in Kabylie, coupled with sirocco gusts and 45°C heat, produced sixth-order firestorms surpassing conventional suppression capacities.'),
    '1152': expert_quote('Mat Piscatella', 'MP',
        'Director ejecutivo y analista principal de videojuegos en Circana', 'Executive Director and Video Game Industry Advisor at Circana',
        'Con más de $us 2.000 millones en inversión y 10 millones de reservas estimadas, GTA VI representa el mayor evento de entretenimiento de la década, impulsando un salto generacional en hardware.',
        'With over $2 billion in development investment and 10 million pre-orders, GTA VI represents the decade\'s largest entertainment event, driving a generational hardware upgrade cycle.'),
    '1153': expert_quote('Mingma Sherpa', 'MS',
        'Guía internacional de alta montaña UIAGM y jefe de expediciones en el Himalaya', 'IFMGA certified mountain guide and Himalayan expedition leader',
        'En Langtang, a 4.500 metros y con -15°C, las ventanas climáticas para rescates con helicóptero ALH son de apenas 6 horas. Mantener la comunicación satelital y el racionamiento fue clave para preservar las 18 vidas.',
        'In Langtang at 4,500 meters and -15°C, flight windows for ALH helicopter extraction are barely 6 hours. Satellite communication and rationing were decisive in preserving all 18 lives.'),
    '1154': expert_quote('Alejandro Núñez', 'AN',
        'Consultor en seguridad ciudadana y resolución de conflictos sociales', 'Citizen security and social conflict resolution consultant',
        'El desbloqueo en San Pablo despejó la ruta Santa Cruz-Beni en tres horas y media, pero sin mesas técnicas de abastecimiento de diésel el riesgo de nuevos cortes carreteros permanece latente.',
        'The highway clearing at San Pablo restored the Santa Cruz-Beni corridor in three and a half hours, yet without technical tables on diesel supply the risk of recurring blockades remains high.'),
    '1157': expert_quote('Juan Carlos Núñez', 'JN',
        'Economista y consultor en infraestructura y transporte urbano', 'Economist and urban infrastructure consultant',
        'El crédito de $us 62 millones del BID con plazo de 30 años consolida la red por cable más extensa del mundo en La Paz. El 80% asignado al Tramo II de la Línea Café resolverá la saturación entre Miraflores y Pampahasi.',
        'The 30-year $62 million IDB loan cements the world\'s largest urban cable car network in La Paz. Allocating 80% to Brown Line Section II will resolve bottlenecks between Miraflores and Pampahasi.'),
    '1158': expert_quote('Williams Bascopé', 'WB',
        'Abogado penalista y docente de derecho procesal', 'Criminal lawyer and procedural law professor',
        'La citación formal a Mirko Sokol en calidad de sindicado exige que el Ministerio Público presente pruebas fehacientes antes de formular una imputación. La defensa buscará desvirtuar cualquier riesgo de fuga u obstaculización.',
        'The formal summons of Mirko Sokol as a designated suspect requires the Prosecution to present conclusive evidence before formal indictment. His defense will focus on refuting flight and obstruction risks.'),
    '1159': expert_quote('Tenzing Chogyal Sherpa', 'TS',
        'Glaciólogo e investigador del Centro Internacional ICIMOD', 'Glaciologist and researcher at ICIMOD',
        'El aluvión glacial originado en el lago morrénico del Tíbet liberó más de 8 millones de metros cúbicos de agua en menos de una hora. El monitoreo satelital de otros tres lagos inestables es vital para evitar una tragedia en cadena.',
        'The glacial outburst from the Tibetan moraine released over 8 million cubic meters of water in under an hour. Satellite monitoring of three adjacent unstable lakes is critical to prevent cascading disasters.'),
    '1160': expert_quote('Henning Jakhelln', 'HJ',
        'Catedrático emérito de Derecho Constitucional (Universidad de Oslo)', 'Professor Emeritus of Constitutional Law (University of Oslo)',
        'El artículo 41 de la Constitución noruega prevé la delegación de las prerrogativas reales en el príncipe heredero cuando el monarca está impedido por salud, garantizando la plena continuidad institucional.',
        'Article 41 of the Norwegian Constitution provides for delegation of royal prerogatives to the Crown Prince during medical incapacitation, preserving institutional continuity.'),
    '1163': expert_quote('Mark Monmonier', 'MM',
        'Catedrático emérito de Geografía y Cartografía (Syracuse University)', 'Distinguished Professor Emeritus of Geography and Cartography (Syracuse University)',
        'Los nombres de cuerpos de agua transfronterizos como el Lago Ontario están regidos por el Tratado de 1909 y la Organización Hidrográfica Internacional. Ningún país puede alterar unilateralmente las cartas náuticas reconocidas.',
        'Names of shared transboundary water bodies like Lake Ontario are governed by the 1909 Treaty and the International Hydrographic Organization. No single nation can unilaterally alter internationally recognized nautical charts.'),
}

# Inject components at correct field boundaries.
# contentEs ends right before: `,\n    contentEn:
# contentEn ends right before: `,\n    imageUrl:
total_injected = 0

for aid, (es, en) in TWEETS.items():
    pattern = re.compile(r"\{\s*\n    id: '%s',.*?\n  \}," % re.escape(aid), re.DOTALL)
    m = pattern.search(src)
    if not m:
        print(f"ERROR tweet {aid}")
        continue
    block = m.group(0)
    # ES: insert before contentEn closing of contentEs
    en_field = block.find("contentEn:`")
    if en_field == -1:
        en_field = block.find("contentEn: `")
    if en_field == -1:
        print(f"  tweet {aid}: no contentEn marker")
        continue
    # insert ES before the backtick that closes contentEs (which is right before contentEn marker)
    insert_es = block.rfind("`", 0, en_field)
    block = block[:insert_es] + "\n\n" + es + block[insert_es:]
    # EN: insert before imageUrl closing of contentEn
    img_field = block.find("imageUrl:")
    if img_field != -1:
        insert_en = block.rfind("`", 0, img_field)
        block = block[:insert_en] + "\n\n" + en + block[insert_en:]
    src = src[:m.start()] + block + src[m.end():]
    total_injected += 2
    print(f"tweet injected {aid}")

for aid, (es, en) in EXPERTS.items():
    pattern = re.compile(r"\{\s*\n    id: '%s',.*?\n  \}," % re.escape(aid), re.DOTALL)
    m = pattern.search(src)
    if not m:
        print(f"ERROR expert {aid}")
        continue
    block = m.group(0)
    en_field = block.find("contentEn:`")
    if en_field == -1:
        en_field = block.find("contentEn: `")
    if en_field == -1:
        print(f"  expert {aid}: no contentEn marker")
        continue
    insert_es = block.rfind("`", 0, en_field)
    block = block[:insert_es] + "\n\n" + es + block[insert_es:]
    img_field = block.find("imageUrl:")
    if img_field != -1:
        insert_en = block.rfind("`", 0, img_field)
        block = block[:insert_en] + "\n\n" + en + block[insert_en:]
    src = src[:m.start()] + block + src[m.end():]
    total_injected += 2
    print(f"expert injected {aid}")

print(f"\nTotal components injected: {total_injected}")

with io.open(TS_PATH, 'w', encoding='utf-8') as f:
    f.write(src)
print("Saved.")