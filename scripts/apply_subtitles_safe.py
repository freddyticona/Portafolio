import io, re

TS_PATH = r'src/translations.ts'

with io.open(TS_PATH, 'r', encoding='utf-8') as f:
    src = f.read()

# ---------------------------------------------------------------------------
# SUBTITLE REPLACEMENT DATA
# Each entry: article_id -> list of (original_inner_text, new_inner_text)
# We match the FULL h2 tag but replace using safe [^<]* so it never spans
# multiple h2 tags. Separator varies (&mdash; vs literal em-dash), so we use
# a regex that matches the h2 tag whose inner text starts with Cap/Chapter N.
# ---------------------------------------------------------------------------

# New subtitles (ES list then EN list) per article, in document order.
SUBTITLES = {
    '1121': {
        'es': ['El vuelo C-17 de la CIA: rastreo y confirmación',
               'El precedente Burns 2021: canal backchannel con el Kremlin',
               'Objetivos de Ratcliffe: inteligencia, Ucrania y canales diplomáticos',
               'Contexto semanal: escalada Rusia-Ucrania y diplomacia oculta'],
        'en': ['The CIA C-17 flight: tracking and confirmation',
               'The 2021 Burns precedent: backchannel with the Kremlin',
               "Ratcliffe's objectives: intelligence, Ukraine and diplomatic channels",
               'Weekly context: Russia-Ukraine escalation and covert diplomacy'],
    },
    '1131': {
        'es': ['El ataque del 18 de agosto: reconstrucción por video',
               'Detención e imputación formal: 48 horas después',
               'Declaración de Beller desde el hospital: "fui emboscada"',
               'Posiciones oficiales: Fiscalía, Policía, Gobierno y oposición',
               'La trama digital: chats de junio a agosto que antecedieron al caso'],
        'en': ['The August 18 attack: video reconstruction',
               'Detention and formal indictment: 48 hours later',
               "Beller's statement from hospital: \"I was ambushed\"",
               'Official positions: Prosecution, Police, Government and opposition',
               'The digital trail: June-to-August chats that preceded the case'],
    },
    '1132': {
        'es': ['El debate real: disuasión vs. preparación para guerra',
               'El "Escudo Oriental" polaco: Tarcza Wschód y gasto del 4% PIB',
               'Amenazas híbridas y operación Eastern Sentry: ciber, migración y sabotaje',
               'Compromiso de EE. UU.: rotaciones, defensa aérea y Artículo 5',
               'Flanco nórdico-báltico: Finlandia, minas terrestres y frontera con Rusia',
               'Escenarios de conflicto: de incidente a guerra generalizada',
               'Narrativa rusa: "amenaza existencial" y líneas rojas',
               'Análisis de repercusiones: defensa europea, gasto y seguridad',
               'Conclusión: disuasión creíble o espiral de escalada'],
        'en': ['The real debate: deterrence vs. preparation for war',
               'Poland\'s "Eastern Shield": Tarcza Wschód and 4% GDP spending',
               'Hybrid threats and Operation Eastern Sentry: cyber, migration and sabotage',
               'US commitment: rotational forces, air defense and Article 5',
               'Nordic-Baltic flank: Finland, landmines and the Russian border',
               'Conflict scenarios: from border incident to full-scale war',
               'Russian narrative: "existential threat" and red lines',
               'Repercussions analysis: European defense, spending and security',
               'Conclusion: credible deterrence or escalation spiral'],
    },
    '1133': {
        'es': ['La alocución de Paz: tres frases clave textuales',
               'Por qué la mención a Cerimedo-Beller detonó la crisis política',
               'Réplica de Beller desde la clínica: "no soy testaferro, fui emboscada"',
               'En juego: credibilidad presidencial, investigación fiscal y coalición',
               'Próximos pasos: citación fiscal, comisión legislativa y plazo de 72 horas'],
        'en': ["Paz's address: three key verbatim statements",
               'Why mentioning Cerimedo-Beller ignited the political crisis',
               "Beller's rebuttal from clinic: \"I am no front-woman, I was ambushed\"",
               'At stake: presidential credibility, fiscal investigation and coalition',
               'Next steps: prosecutor summons, legislative committee and 72-hour deadline'],
    },
    '1134': {
        'es': ['Asamblea cívica de Santa Cruz: agro, transporte y juntas vecinales',
               'Advertencia de paro: "tolerancia agotada" — Fernando Larach',
               'Escenarios: diálogo en 72 horas o escalada a bloqueos nacionales'],
        'en': ['Santa Cruz civic assembly: agriculture, transport and neighborhood boards',
               'Strike warning: "tolerance exhausted" — Fernando Larach',
               'Scenarios: 72-hour dialogue or escalation to nationwide blockades'],
    },
    '1135': {
        'es': ['Defensa técnica: peritaje de audios y cadena de custodia',
               'Demanda civil por $5.2M: consorcio agroindustrial vs. Cerimedo',
               'Investigación fiscal: 180 días preventiva y legitimación de ganancias ilícitas'],
        'en': ['Technical defense: audio forensics and chain of custody',
               '$5.2M civil lawsuit: agroindustrial consortium vs. Cerimedo',
               'Fiscal investigation: 180 days preventive detention and illicit enrichment'],
    },
    '1136': {
        'es': ['Paz: "modelo energético agotado" — diagnóstico y cifras del déficit',
               'Proyecto de ley Velasco: desburocratización ANH, importación directa y biocombustibles',
               'Hoja de ruta legislativa: comisión de energía y consenso opositor'],
        'en': ['Paz: "exhausted energy model" — diagnosis and deficit figures',
               'Velasco bill: ANH deregulation, direct import and biofuels',
               'Legislative roadmap: energy committee and opposition consensus'],
    },
    '1137': {
        'es': ['$1.850 millones de inyección fiscal: desglose y fuentes',
               'YPFB vs. Economía: criterios divergentes en precio, volumen y plazo',
               'Logística de importación: 12 buques y normalización escalonada'],
        'en': ['$1.85 billion fiscal injection: breakdown and sources',
               'YPFB vs. Economy Ministry: divergent criteria on price, volume and timing',
               'Import logistics: 12 vessels and phased normalization'],
    },
    '1138': {
        'es': ['Reactivación del cerco en Guarayos: 72 horas de bloqueo carretero',
               'Voces del conflicto: transportistas, comunarios y Policía',
               'Impacto: pérdidas económicas y desabastecimiento regional'],
        'en': ['Resumption of Guarayos blockade: 72 hours of highway disruption',
               'Voices of conflict: truckers, local residents and Police',
               'Impact: economic losses and regional supply shortages'],
    },
    '1139': {
        'es': ['Ley de emergencia departamental: competencias exclusivas y fondo de 90 días',
               'Gobernador Aguilera: "la autonomía no puede ser meramente discursiva"',
               'Ruta legislativa: Asamblea Departamental y reacción gubernamental'],
        'en': ['Departmental emergency law: exclusive powers and 90-day fund',
               'Governor Aguilera: "autonomy cannot be merely rhetorical"',
               'Legislative path: Departmental Assembly and government response'],
    },
    '1140': {
        'es': ['Agenda Bolivia-China: litio, soya, infraestructura y financiamiento',
               'Acuerdos preliminares: tres memorandos y línea de crédito',
               'Próximos pasos: comisión mixta y ratificación legislativa'],
        'en': ['Bolivia-China agenda: lithium, soy, infrastructure and financing',
               'Preliminary agreements: three memorandums and credit line',
               'Next steps: joint commission and legislative ratification'],
    },
    '1141': {
        'es': ['Temporal severo: granizo de 4cm, -5°C y quince barrios afectados',
               'Operativos de emergencia: rescates, cuadrillas y balance municipal',
               'Alerta meteorológica SENAMHI: riesgo persistente y recomendaciones'],
        'en': ['Severe storm: 4cm hail, -5°C and fifteen neighborhoods hit',
               'Emergency operations: rescues, utility crews and municipal report',
               'SENAMHI weather alert: persistent risk and safety advisory'],
    },
    '1142': {
        'es': ['Eclipse anular con 84% de cobertura: registro en altiplano y valles',
               'Vigilia científica: Planetario UMSA y observatorios astronómicos',
               'Calendario astronómico: próximos fenómenos visibles en la región'],
        'en': ['Annular eclipse with 84% coverage: observation in highlands and valleys',
               'Scientific vigil: UMSA Planetarium and astronomical observatories',
               'Astronomical calendar: upcoming celestial events in the region'],
    },
    '1143': {
        'es': ['Pilares normativos: máxima publicidad y datos abiertos obligatorios',
               'Régimen sancionatorio: falta grave por silencio administrativo',
               'Trámite legislativo: debate y votación en la Cámara Baja'],
        'en': ['Regulatory pillars: maximum disclosure and mandatory open data',
               'Sanctions regime: administrative silence classified as severe infraction',
               'Legislative path: floor debate and vote in the Lower Chamber'],
    },
    '1144': {
        'es': ['Devastación en Sindhupalchok: 20 aldeas arrasadas y vía cortada',
               'Operativo de rescate: despliegue militar y ayuda de emergencia',
               'Respuesta internacional: coordinación con India, China y UN OCHA'],
        'en': ['Devastation in Sindhupalchok: 20 villages swept away and highway severed',
               'Rescue operation: military deployment and emergency relief',
               'International response: coordination with India, China and UN OCHA'],
    },
    '1145': {
        'es': ['Legado de Harald V: 35 años de reinado y cohesión democrática',
               'Transición constitucional: regencia del príncipe Haakon en el Storting',
               'Honras de Estado: protocolo oficial y duelo nacional'],
        'en': ["Harald V's legacy: 35-year reign and democratic cohesion",
               "Constitutional transition: Crown Prince Haakon's regency in the Storting",
               'State honors: official protocol and national mourning'],
    },
    '1146': {
        'es': ['Tensión en Ceuta: centros saturados e incidentes en el perímetro',
               'Plan del Ministerio del Interior: traslados y refuerzo policial',
               'Canal diplomático: cooperación técnica y fronteriza con Marruecos'],
        'en': ['Tension in Ceuta: overcrowded centers and perimeter incidents',
               'Interior Ministry plan: expedited transfers and police reinforcement',
               'Diplomatic channel: technical and border cooperation with Morocco'],
    },
    '1147': {
        'es': ['Aceleración del IPC al 4,3%: impacto de electricidad y carburantes',
               'Inflación subyacente y encarecimiento de la cesta de alimentos',
               'Posición de los agentes sociales: patronal y sindicatos frente a los precios'],
        'en': ['CPI accelerates to 4.3%: impact of electricity and fuel costs',
               'Core inflation and persistent rise in grocery basket prices',
               "Social partners' stance: employers and unions on pricing pressure"],
    },
    '1148': {
        'es': ['Estancamiento táctico: líneas de frente fijas y guerra de desgaste',
               'Coste humanitario: 1,4 millones de desplazados y daño a infraestructuras',
               'Bloqueo diplomático: discrepancias entre Kyiv, Moscú y mediadores'],
        'en': ['Tactical stalemate: static frontlines and war of attrition',
               'Humanitarian toll: 1.4 million displaced and damaged infrastructure',
               'Diplomatic deadlock: disagreements between Kyiv, Moscow and mediators'],
    },
    '1149': {
        'es': ['Orden ejecutiva sobre aguas limítrofes: alcance y justificación',
               'Rechazo de Canadá: apelación al Tratado de Aguas Fronterizas de 1909',
               'Mecanismo de controversias: funciones de la Comisión Mixta Internacional'],
        'en': ['Executive order on boundary waters: scope and rationale',
               "Canada's rejection: invocation of the 1909 Boundary Waters Treaty",
               'Dispute mechanism: role of the International Joint Commission'],
    },
    '1150': {
        'es': ['Medidas técnicas obligatorias: cuentas hiperprotegidas y verificación IA',
               'Supervisión externa: auditoría técnica y herramientas para tutores',
               'Despliegue escalonado: adecuación a normativas de la UE y EE. UU.'],
        'en': ['Mandatory technical controls: protected teen accounts and AI age verification',
               'External oversight: independent technical audit and parental tools',
               'Phased rollout: compliance with EU and US regulatory frameworks'],
    },
    '1151': {
        'es': ['Frentes de fuego en Cabilia: cuarenta focos y miles de evacuados',
               'Respuesta estatal: duelo oficial y movilización de bomberos',
               'Apoyo internacional: activación del Mecanismo Europeo de Protección Civil'],
        'en': ['Firefronts across Kabylie: forty active blazes and thousands evacuated',
               'State response: official mourning and mobilization of firefighters',
               'International support: activation of the European Civil Protection Mechanism'],
    },
    '1152': {
        'es': ['Recreación de Vice City: dimensiones del mapa y ambientación en Leonida',
               'Avances técnicos: comportamiento de IA y dinámica narrativa dual',
               'Impacto en la industria: proyecciones comerciales y recepción del mercado'],
        'en': ['Recreating Vice City: map scale and Leonida setting',
               'Technical milestones: NPC artificial intelligence and dual narrative',
               'Industry reception: commercial projections and market response'],
    },
    '1153': {
        'es': ['Expedición aislada en Langtang: 18 senderistas en alta montaña',
               'Gestión consular: comunicación satelital y apoyo a familiares',
               'Operativo de evacuación: ventana meteorológica y transporte aéreo'],
        'en': ['Isolated expedition in Langtang: 18 mountaineers in high altitude',
               'Consular management: satellite communication and support for families',
               'Evacuation operation: weather window and air rescue'],
    },
    '1154': {
        'es': ['Operativo policial en San Pablo: despliegue y despeje de la vía',
               'Balance de seguridad: detenidos, fluidez del transporte y control',
               'Postura dirigencial: reclamos del sector y exigencia de diálogo'],
        'en': ['Police operation at San Pablo: deployment and highway clearance',
               'Security report: arrests, restored traffic flow and perimeter control',
               'Community leadership stance: local demands and call for dialogue'],
    },
    '1155': {
        'es': ['Allanamiento en Torre Titanium: incautación de material y peritaje',
               'Diligencias sobre testimonios: situación jurídica de Nadia Beller',
               'Avance procesal: plazos periciales e informes del Ministerio Público'],
        'en': ['Raid at Titanium Tower: evidence seizure and forensic analysis',
               'Testimony inquiries: legal standing of Nadia Beller',
               'Procedural progress: forensic timelines and Public Ministry reports'],
    },
    '1156': {
        'es': ['Debate sobre el DS 5676: equilibrio entre fiscalización y suministro',
               'Propuesta de reforma: articulación técnica y cupos productivos',
               'Convocatoria sectorial: mesas de trabajo con gremios afectados'],
        'en': ['Debate on Supreme Decree 5676: balancing enforcement and fuel supply',
               'Reform proposals: technical adjustments and commercial quotas',
               'Sectoral convening: working tables with affected economic sectors'],
    },
    '1157': {
        'es': ['Destino del crédito del BID: ampliación de la Línea Café y mejoras',
               'Planificación de Mi Teleférico: capacidad operativa y nuevos tramos',
               'Fase de ejecución: cronograma de obras y fiscalización pública'],
        'en': ['IDB loan allocation: Brown Line expansion and system upgrades',
               'Mi Teleférico planning: operational capacity and new transit sections',
               'Execution phase: construction schedule and public oversight'],
    },
    '1158': {
        'es': ['Expediente de investigación: antecedentes y contratos indagados',
               'Estrategia de defensa: memoriales y descargo de responsabilidades',
               'Calendario judicial: audiencia de declaración y medidas cautelares'],
        'en': ['Investigation file: background and scrutinized procurement contracts',
               'Defense strategy: legal filings and response to allegations',
               'Judicial calendar: formal deposition hearing and cautionary measures'],
    },
    '1159': {
        'es': ['Avenida torrencial en valles ribereños: impacto del aluvión',
               'Coordinación transfronteriza: tareas de rescate entre Nepal y China',
               'Evaluación geológica: monitoreo satelital de lagos glaciares'],
        'en': ['Torrential surge in river valleys: impact of the glacial outburst',
               'Cross-border coordination: rescue operations between Nepal and China',
               'Geological assessment: satellite monitoring of glacial lakes'],
    },
    '1160': {
        'es': ['Cuadro médico de Harald V: tratamiento hospitalario y evolución',
               'Marco constitucional: regencia del príncipe Haakon y despacho de Estado',
               'Reacciones políticas: pronunciamiento parlamentario y apoyo ciudadano'],
        'en': ["Harald V's clinical condition: hospital treatment and recovery",
               "Constitutional framework: Crown Prince Haakon's regency and affairs of state",
               'Political reactions: parliamentary statements and public support'],
    },
    '1161': {
        'es': ['Disturbios nocturnos en Ceuta: daños en campamentos y detenidos',
               'Condena institucional: declaraciones de la Delegación y Cruz Roja',
               'Dispositivo de seguridad: refuerzo policial y vigilancia fronteriza'],
        'en': ['Overnight unrest in Ceuta: camp damage and arrests',
               'Institutional condemnation: statements from Government Delegation and Red Cross',
               'Security deployment: police reinforcement and border surveillance'],
    },
    '1162': {
        'es': ['Cronología de seis meses: fases militares y evolución del conflicto',
               'Análisis estratégico: dispersión de fuerzas y balance regional',
               'Perspectivas diplomáticas: escenarios futuros y condiciones de paz'],
        'en': ['Six-month chronology: military phases and conflict trajectory',
               'Strategic assessment: force dispersion and regional power balance',
               'Diplomatic outlook: future scenarios and terms for de-escalation'],
    },
    '1163': {
        'es': ['Declaraciones en campaña: propuesta de cambio de denominación',
               'Reacciones en Canadá: rechazo parlamentario y fundamentos del tratado',
               'Estatus cartográfico: navegación internacional y cartas náuticas'],
        'en': ['Campaign statements: proposal to rename Lake Ontario',
               'Reactions in Canada: parliamentary pushback and treaty foundations',
               'Cartographic status: international navigation and official nautical charts'],
    },
}

# Apply subtitle replacements using safe [^<]* regex per h2 tag
total_sub = 0
for aid, data in SUBTITLES.items():
    pattern = re.compile(r"\{\s*\n    id: '%s',.*?\n  \}," % re.escape(aid), re.DOTALL)
    m = pattern.search(src)
    if not m:
        print(f"ERROR: {aid} not found")
        continue
    block = m.group(0)

    # Replace ES chapters (Capítulo N ...) in order
    es_list = data['es']
    en_list = data['en']

    # Find all report-chapter h2 tags that contain Capítulo/Chapter + digit
    h2_all = list(re.finditer(r"<h2[^>]*class=['\"](?:report-chapter|report-section)['\"][^>]*>([^<]*)</h2>", block))

    es_idx = 0
    en_idx = 0
    replaced_this = 0
    new_block = block
    offset = 0

    for h2m in h2_all:
        inner = h2m.group(1)
        tag_start = h2m.start()
        tag_end = h2m.end()
        # Determine if ES or EN chapter
        if re.search(r'Cap[ií\?]+tulo\s*\d+', inner):
            if es_idx < len(es_list):
                new_inner = es_list[es_idx]
                es_idx += 1
            else:
                continue
        elif re.search(r'Chapter\s*\d+', inner):
            if en_idx < len(en_list):
                new_inner = en_list[en_idx]
                en_idx += 1
            else:
                continue
        else:
            continue  # skip Conclusión/Conclusion (already thematic)

        # Rebuild the tag: keep opening and closing, replace inner text
        # Use the full tag text but with new inner
        full_tag = h2m.group(0)
        # replace inner content between > and </h2>
        new_tag = re.sub(r'>[^<]*</h2>', '>' + new_inner + '</h2>', full_tag, count=1)

        # Apply to new_block with offset
        idx = new_block.find(full_tag, offset)
        if idx == -1:
            print(f"  WARNING {aid}: could not locate tag for '{inner[:40]}'")
            continue
        new_block = new_block[:idx] + new_tag + new_block[idx+len(full_tag):]
        offset = idx + len(new_tag)
        replaced_this += 1

    src = src[:m.start()] + new_block + src[m.end():]
    total_sub += replaced_this
    print(f"{aid}: replaced {replaced_this} subtitles (es={es_idx}, en={en_idx})")

print(f"\nTotal subtitle replacements: {total_sub}")

with io.open(TS_PATH, 'w', encoding='utf-8') as f:
    f.write(src)

print("Saved subtitles.")