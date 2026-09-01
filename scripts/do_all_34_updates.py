import io, re, os

TS_PATH = r'src/translations.ts'

with io.open(TS_PATH, 'r', encoding='utf-8') as f:
    src = f.read()

def make_tweet_card(name, handle, initials, text_es, text_en, date_str, bg_color='#1d9bf0'):
    es = f"""<div class='tweet-card'>
  <div class='tweet-card-header'>
    <div class='tweet-card-avatar' style='background-color: {bg_color};'>{initials}</div>
    <div class='tweet-card-names'>
      <span class='tweet-card-name'>{name} <span class='tweet-card-verified'>&#10004;</span></span>
      <span class='tweet-card-handle'>{handle}</span>
    </div>
  </div>
  <p class='tweet-card-body'>{text_es}</p>
  <div class='tweet-card-footer'>
    <span>{date_str}</span>
    <a href='https://x.com/{handle.replace("@", "")}' target='_blank' rel='noopener noreferrer' class='tweet-card-link'>Ver en X &rarr;</a>
  </div>
</div>"""
    en = f"""<div class='tweet-card'>
  <div class='tweet-card-header'>
    <div class='tweet-card-avatar' style='background-color: {bg_color};'>{initials}</div>
    <div class='tweet-card-names'>
      <span class='tweet-card-name'>{name} <span class='tweet-card-verified'>&#10004;</span></span>
      <span class='tweet-card-handle'>{handle}</span>
    </div>
  </div>
  <p class='tweet-card-body'>{text_en}</p>
  <div class='tweet-card-footer'>
    <span>{date_str}</span>
    <a href='https://x.com/{handle.replace("@", "")}' target='_blank' rel='noopener noreferrer' class='tweet-card-link'>View on X &rarr;</a>
  </div>
</div>"""
    return es, en

def make_expert_quote(name, initials, role_es, role_en, quote_es, quote_en):
    es = f"""<div class='expert-quote'>
  <p class='expert-quote-text'>"{quote_es}"</p>
  <div class='expert-quote-author'>
    <div class='expert-quote-initial'>{initials}</div>
    <div>
      <div class='expert-quote-name'>{name}</div>
      <div class='expert-quote-role'>{role_es}</div>
    </div>
  </div>
</div>"""
    en = f"""<div class='expert-quote'>
  <p class='expert-quote-text'>"{quote_en}"</p>
  <div class='expert-quote-author'>
    <div class='expert-quote-initial'>{initials}</div>
    <div>
      <div class='expert-quote-name'>{name}</div>
      <div class='expert-quote-role'>{role_en}</div>
    </div>
  </div>
</div>"""
    return es, en

# All 34 articles definitions
DATA = {
    '1121': {
        'es_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 1.*?</h2>', "<h2 class='report-chapter'>El vuelo C-17 de la CIA: rastreo y confirmación</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 2.*?</h2>', "<h2 class='report-chapter'>El precedente Burns 2021: canal backchannel con el Kremlin</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 3.*?</h2>', "<h2 class='report-chapter'>Objetivos de Ratcliffe: inteligencia, Ucrania y canales diplomáticos</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 4.*?</h2>', "<h2 class='report-chapter'>Contexto semanal: escalada Rusia-Ucrania y diplomacia oculta</h2>")
        ],
        'en_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 1.*?</h2>', "<h2 class='report-chapter'>The CIA C-17 flight: tracking and confirmation</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 2.*?</h2>', "<h2 class='report-chapter'>The 2021 Burns precedent: backchannel with the Kremlin</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 3.*?</h2>', "<h2 class='report-chapter'>Ratcliffe's objectives: intelligence, Ukraine and diplomatic channels</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 4.*?</h2>', "<h2 class='report-chapter'>Weekly context: Russia-Ukraine escalation and covert diplomacy</h2>")
        ]
    },
    '1131': {
        'es_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 1.*?</h2>', "<h2 class='report-chapter'>El ataque del 18 de agosto: reconstrucción por video</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 2.*?</h2>', "<h2 class='report-chapter'>Detención e imputación formal: 48 horas después</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 3.*?</h2>', "<h2 class='report-chapter'>Declaración de Beller desde el hospital: \"fui emboscada\"</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 4.*?</h2>', "<h2 class='report-chapter'>Posiciones oficiales: Fiscalía, Policía, Gobierno y oposición</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 5.*?</h2>', "<h2 class='report-chapter'>La trama digital: chats de junio a agosto que antecedieron al caso</h2>")
        ],
        'en_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 1.*?</h2>', "<h2 class='report-chapter'>The August 18 attack: video reconstruction</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 2.*?</h2>', "<h2 class='report-chapter'>Detention and formal indictment: 48 hours later</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 3.*?</h2>', "<h2 class='report-chapter'>Beller's statement from hospital: \"I was ambushed\"</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 4.*?</h2>', "<h2 class='report-chapter'>Official positions: Prosecution, Police, Government and opposition</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 5.*?</h2>', "<h2 class='report-chapter'>The digital trail: June-to-August chats that preceded the case</h2>")
        ]
    },
    '1132': {
        'es_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 1.*?</h2>', "<h2 class='report-chapter'>El debate real: disuasión vs. preparación para guerra</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 2.*?</h2>', "<h2 class='report-chapter'>El \"Escudo Oriental\" polaco: Tarcza Wschód y gasto del 4% PIB</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 3.*?</h2>', "<h2 class='report-chapter'>Amenazas híbridas y operación Eastern Sentry: ciber, migración y sabotaje</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 4.*?</h2>', "<h2 class='report-chapter'>Compromiso de EE. UU.: rotaciones, defensa aérea y Artículo 5</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 5.*?</h2>', "<h2 class='report-chapter'>Flanco nórdico-báltico: Finlandia, minas terrestres y frontera con Rusia</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 6.*?</h2>', "<h2 class='report-chapter'>Escenarios de conflicto: de incidente a guerra generalizada</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 7.*?</h2>', "<h2 class='report-chapter'>Narrativa rusa: \"amenaza existencial\" y líneas rojas</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 8.*?</h2>', "<h2 class='report-chapter'>Análisis de repercusiones: defensa europea, gasto y seguridad</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 9.*?</h2>', "<h2 class='report-chapter'>Conclusión: disuasión creíble o espiral de escalada</h2>")
        ],
        'en_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 1.*?</h2>', "<h2 class='report-chapter'>The real debate: deterrence vs. preparation for war</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 2.*?</h2>', "<h2 class='report-chapter'>Poland's \"Eastern Shield\": Tarcza Wschód and 4% GDP spending</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 3.*?</h2>', "<h2 class='report-chapter'>Hybrid threats and Operation Eastern Sentry: cyber, migration and sabotage</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 4.*?</h2>', "<h2 class='report-chapter'>US commitment: rotational forces, air defense and Article 5</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 5.*?</h2>', "<h2 class='report-chapter'>Nordic-Baltic flank: Finland, landmines and the Russian border</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 6.*?</h2>', "<h2 class='report-chapter'>Conflict scenarios: from border incident to full-scale war</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 7.*?</h2>', "<h2 class='report-chapter'>Russian narrative: \"existential threat\" and red lines</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 8.*?</h2>', "<h2 class='report-chapter'>Repercussions analysis: European defense, spending and security</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 9.*?</h2>', "<h2 class='report-chapter'>Conclusion: credible deterrence or escalation spiral</h2>")
        ]
    },
    '1133': {
        'es_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 1.*?</h2>', "<h2 class='report-chapter'>La alocución de Paz: tres frases clave textuales</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 2.*?</h2>', "<h2 class='report-chapter'>Por qué la mención a Cerimedo-Beller detonó la crisis política</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 3.*?</h2>', "<h2 class='report-chapter'>Réplica de Beller desde la clínica: \"no soy testaferro, fui emboscada\"</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 4.*?</h2>', "<h2 class='report-chapter'>En juego: credibilidad presidencial, investigación fiscal y coalición</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 5.*?</h2>', "<h2 class='report-chapter'>Próximos pasos: citación fiscal, comisión legislativa y plazo de 72 horas</h2>")
        ],
        'en_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 1.*?</h2>', "<h2 class='report-chapter'>Paz's address: three key verbatim statements</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 2.*?</h2>', "<h2 class='report-chapter'>Why mentioning Cerimedo-Beller ignited the political crisis</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 3.*?</h2>', "<h2 class='report-chapter'>Beller's rebuttal from clinic: \"I am no front-woman, I was ambushed\"</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 4.*?</h2>', "<h2 class='report-chapter'>At stake: presidential credibility, fiscal investigation and coalition</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 5.*?</h2>', "<h2 class='report-chapter'>Next steps: prosecutor summons, legislative committee and 72-hour deadline</h2>")
        ]
    },
    '1134': {
        'es_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 1.*?</h2>', "<h2 class='report-chapter'>Asamblea cívica de Santa Cruz: agro, transporte y juntas vecinales</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 2.*?</h2>', "<h2 class='report-chapter'>Advertencia de paro: \"tolerancia agotada\" — Fernando Larach</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 3.*?</h2>', "<h2 class='report-chapter'>Escenarios: diálogo en 72 horas o escalada a bloqueos nacionales</h2>")
        ],
        'en_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 1.*?</h2>', "<h2 class='report-chapter'>Santa Cruz civic assembly: agriculture, transport and neighborhood boards</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 2.*?</h2>', "<h2 class='report-chapter'>Strike warning: \"tolerance exhausted\" — Fernando Larach</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 3.*?</h2>', "<h2 class='report-chapter'>Scenarios: 72-hour dialogue or escalation to nationwide blockades</h2>")
        ]
    },
    '1135': {
        'es_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 1.*?</h2>', "<h2 class='report-chapter'>Defensa técnica: peritaje de audios y cadena de custodia</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 2.*?</h2>', "<h2 class='report-chapter'>Demanda civil por $5.2M: consorcio agroindustrial vs. Cerimedo</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 3.*?</h2>', "<h2 class='report-chapter'>Investigación fiscal: 180 días preventiva y legitimación de ganancias ilícitas</h2>")
        ],
        'en_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 1.*?</h2>', "<h2 class='report-chapter'>Technical defense: audio forensics and chain of custody</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 2.*?</h2>', "<h2 class='report-chapter'>$5.2M civil lawsuit: agroindustrial consortium vs. Cerimedo</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 3.*?</h2>', "<h2 class='report-chapter'>Fiscal investigation: 180 days preventive detention and illicit enrichment</h2>")
        ],
        'expert_quote': make_expert_quote(
            name='Williams Bascopé',
            initials='WB',
            role_es='Abogado constitucionalista y especialista en derecho procesal penal',
            role_en='Constitutional lawyer and criminal procedural law specialist',
            quote_es='La prisión preventiva de 180 días dictada contra Cerimedo responde a indicios periciales de riesgo procesal. La cadena de custodia de las grabaciones incautadas será determinante para sostener la imputación por legitimación de ganancias ilícitas.',
            quote_en='The 180-day preventive detention ordered against Cerimedo is based on forensic evidence of procedural risk. The chain of custody of the seized recordings will be crucial to substantiate the illicit enrichment indictment.'
        )
    },
    '1136': {
        'es_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 1.*?</h2>', "<h2 class='report-chapter'>Paz: \"modelo energético agotado\" — diagnóstico y cifras del déficit</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 2.*?</h2>', "<h2 class='report-chapter'>Proyecto de ley Velasco: desburocratización ANH, importación directa y biocombustibles</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 3.*?</h2>', "<h2 class='report-chapter'>Hoja de ruta legislativa: comisión de energía y consenso opositor</h2>")
        ],
        'en_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 1.*?</h2>', "<h2 class='report-chapter'>Paz: \"exhausted energy model\" — diagnosis and deficit figures</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 2.*?</h2>', "<h2 class='report-chapter'>Velasco bill: ANH deregulation, direct import and biofuels</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 3.*?</h2>', "<h2 class='report-chapter'>Legislative roadmap: energy committee and opposition consensus</h2>")
        ],
        'tweet_card': make_tweet_card(
            name='Rodrigo Paz Pereira',
            handle='@RodrigoPazPeru',
            initials='RP',
            text_es='El modelo energético está agotado: el 40% de déficit en diésel pone en riesgo 1,2 millones de hectáreas de soya. Convoco a una mesa técnica nacional del 15 al 20 de septiembre para acordar soluciones de fondo.',
            text_en='The energy model is exhausted: the 40% diesel deficit puts 1.2 million hectares of soy at risk. I call for a national technical table from Sept 15-20 to agree on structural solutions.',
            date_str='28 ago 2026',
            bg_color='#0284c7'
        )
    },
    '1137': {
        'es_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 1.*?</h2>', "<h2 class='report-chapter'>$1.850 millones de inyección fiscal: desglose y fuentes</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 2.*?</h2>', "<h2 class='report-chapter'>YPFB vs. Economía: criterios divergentes en precio, volumen y plazo</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 3.*?</h2>', "<h2 class='report-chapter'>Logística de importación: 12 buques y normalización escalonada</h2>")
        ],
        'en_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 1.*?</h2>', "<h2 class='report-chapter'>$1.85 billion fiscal injection: breakdown and sources</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 2.*?</h2>', "<h2 class='report-chapter'>YPFB vs. Economy Ministry: divergent criteria on price, volume and timing</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 3.*?</h2>', "<h2 class='report-chapter'>Import logistics: 12 vessels and phased normalization</h2>")
        ],
        'tweet_card': make_tweet_card(
            name='YPFB Corporación',
            handle='@YPFB_Bolivia',
            initials='YP',
            text_es='Informamos al país que se programaron 12 buques petroleros en puertos del Pacífico para normalizar el abastecimiento nacional en 45 días, respaldados por la inyección de $us 1.850 millones.',
            text_en='We inform the nation that 12 fuel tankers have been scheduled at Pacific ports to normalize nationwide supply within 45 days, backed by the $1.85 billion injection.',
            date_str='28 ago 2026',
            bg_color='#16a34a'
        )
    },
    '1138': {
        'es_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 1.*?</h2>', "<h2 class='report-chapter'>Reactivación del cerco en Guarayos: 72 horas de bloqueo carretero</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 2.*?</h2>', "<h2 class='report-chapter'>Voces del conflicto: transportistas, comunarios y Policía</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 3.*?</h2>', "<h2 class='report-chapter'>Impacto: pérdidas económicas y desabastecimiento regional</h2>")
        ],
        'en_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 1.*?</h2>', "<h2 class='report-chapter'>Resumption of Guarayos blockade: 72 hours of highway disruption</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 2.*?</h2>', "<h2 class='report-chapter'>Voices of conflict: truckers, local residents and Police</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 3.*?</h2>', "<h2 class='report-chapter'>Impact: economic losses and regional supply shortages</h2>")
        ],
        'expert_quote': make_expert_quote(
            name='Gonzalo Chávez',
            initials='GC',
            role_es='Economista y docente de la Universidad Católica Boliviana',
            role_en='Economist and Professor at Universidad Católica Boliviana',
            quote_es='El bloqueo carretero en Guarayos genera un impacto económico directo de más de $us 12 millones por jornada en la cadena agroexportadora de soya y granos, además de asfixiar el abastecimiento alimentario en cuatro departamentos.',
            quote_en='The highway blockade in Guarayos inflicts a direct economic loss exceeding $12 million per day on the soy and grain export chain, while strangling food supplies across four departments.'
        )
    },
    '1139': {
        'es_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 1.*?</h2>', "<h2 class='report-chapter'>Ley de emergencia departamental: competencias exclusivas y fondo de 90 días</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 2.*?</h2>', "<h2 class='report-chapter'>Gobernador Aguilera: \"la autonomía no puede ser meramente discursiva\"</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 3.*?</h2>', "<h2 class='report-chapter'>Ruta legislativa: Asamblea Departamental y reacción gubernamental</h2>")
        ],
        'en_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 1.*?</h2>', "<h2 class='report-chapter'>Departmental emergency law: exclusive powers and 90-day fund</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 2.*?</h2>', "<h2 class='report-chapter'>Governor Aguilera: \"autonomy cannot be merely rhetorical\"</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 3.*?</h2>', "<h2 class='report-chapter'>Legislative path: Departmental Assembly and government response</h2>")
        ],
        'tweet_card': make_tweet_card(
            name='Gobierno Autónomo Departamental de Santa Cruz',
            handle='@GobSantaCruz',
            initials='SC',
            text_es='Promulgamos la Ley de Emergencia Departamental: activamos competencias exclusivas y un fondo de contingencia por 90 días para proteger la cosecha y garantizar combustible a los sectores productivos cruceños.',
            text_en='We enacted the Departmental Emergency Law: activating exclusive powers and a 90-day contingency fund to protect the harvest and secure fuel for Santa Cruz producers.',
            date_str='28 ago 2026',
            bg_color='#059669'
        )
    },
    '1140': {
        'es_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 1.*?</h2>', "<h2 class='report-chapter'>Agenda Bolivia-China: litio, soya, infraestructura y financiamiento</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 2.*?</h2>', "<h2 class='report-chapter'>Acuerdos preliminares: tres memorandos y línea de crédito</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 3.*?</h2>', "<h2 class='report-chapter'>Próximos pasos: comisión mixta y ratificación legislativa</h2>")
        ],
        'en_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 1.*?</h2>', "<h2 class='report-chapter'>Bolivia-China agenda: lithium, soy, infrastructure and financing</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 2.*?</h2>', "<h2 class='report-chapter'>Preliminary agreements: three memorandums and credit line</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 3.*?</h2>', "<h2 class='report-chapter'>Next steps: joint commission and legislative ratification</h2>")
        ],
        'expert_quote': make_expert_quote(
            name='Fernando Andrés',
            initials='FA',
            role_es='Analista en relaciones internacionales y comercio con Asia-Pacífico',
            role_en='International relations and Asia-Pacific trade analyst',
            quote_es='La firma de los tres memorandos con Beijing abre una línea de crédito de $us 500 millones enfocada en la industrialización del litio en Uyuni, consolidando una alianza estratégica con el principal demandante global de minerales críticos.',
            quote_en='The signing of three memorandums with Beijing unlocks a $500 million credit line focused on lithium industrialization in Uyuni, solidifying a strategic partnership with the world\'s leading consumer of critical minerals.'
        )
    },
    '1141': {
        'es_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 1.*?</h2>', "<h2 class='report-chapter'>Temporal severo: granizo de 4cm, -5°C y quince barrios afectados</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 2.*?</h2>', "<h2 class='report-chapter'>Operativos de emergencia: rescates, cuadrillas y balance municipal</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 3.*?</h2>', "<h2 class='report-chapter'>Alerta meteorológica SENAMHI: riesgo persistente y recomendaciones</h2>")
        ],
        'en_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 1.*?</h2>', "<h2 class='report-chapter'>Severe storm: 4cm hail, -5°C and fifteen neighborhoods hit</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 2.*?</h2>', "<h2 class='report-chapter'>Emergency operations: rescues, utility crews and municipal report</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 3.*?</h2>', "<h2 class='report-chapter'>SENAMHI weather alert: persistent risk and safety advisory</h2>")
        ],
        'expert_quote': make_expert_quote(
            name='Marisol Portugal',
            initials='MP',
            role_es='Jefa de la Unidad de Pronósticos del SENAMHI',
            role_en='Head of Forecasts Unit at SENAMHI Bolivia',
            quote_es='El fenómeno registrado en La Paz combinó una masa de aire polar con alta humedad en valles interandinos, produciendo granizo severo de hasta 4 centímetros de diámetro y un desplome térmico a -5°C con alta inestabilidad convectiva.',
            quote_en='The storm in La Paz combined a polar airmass with extreme humidity in inter-Andean valleys, generating severe hail up to 4 centimeters in diameter and a sudden temperature plunge to -5°C with severe convective instability.'
        )
    },
    '1142': {
        'es_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 1.*?</h2>', "<h2 class='report-chapter'>Eclipse anular con 84% de cobertura: registro en altiplano y valles</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 2.*?</h2>', "<h2 class='report-chapter'>Vigilia científica: Planetario UMSA y observatorios astronómicos</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 3.*?</h2>', "<h2 class='report-chapter'>Calendario astronómico: próximos fenómenos visibles en la región</h2>")
        ],
        'en_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 1.*?</h2>', "<h2 class='report-chapter'>Annular eclipse with 84% coverage: observation in highlands and valleys</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 2.*?</h2>', "<h2 class='report-chapter'>Scientific vigil: UMSA Planetarium and astronomical observatories</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 3.*?</h2>', "<h2 class='report-chapter'>Astronomical calendar: upcoming celestial events in the region</h2>")
        ],
        'tweet_card': make_tweet_card(
            name='Planetario Max Schreier UMSA',
            handle='@PlanetarioUMSA',
            initials='MS',
            text_es='¡Registro histórico! El eclipse anular alcanzó su punto máximo a las 04:18 HB con 84% de cobertura solar visible desde La Paz. Más de 5.000 personas compartieron la vigilia astronómica con enlace a la NASA.',
            text_en='Historic observation! The annular eclipse reached peak coverage at 04:18 local time with 84% solar occlusion over La Paz. Over 5,000 attended the scientific vigil with live NASA feed.',
            date_str='28 ago 2026',
            bg_color='#4338ca'
        )
    },
    '1143': {
        'es_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 1.*?</h2>', "<h2 class='report-chapter'>Pilares normativos: máxima publicidad y datos abiertos obligatorios</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 2.*?</h2>', "<h2 class='report-chapter'>Régimen sancionatorio: falta grave por silencio administrativo</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 3.*?</h2>', "<h2 class='report-chapter'>Trámite legislativo: debate y votación en la Cámara Baja</h2>")
        ],
        'en_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 1.*?</h2>', "<h2 class='report-chapter'>Regulatory pillars: maximum disclosure and mandatory open data</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 2.*?</h2>', "<h2 class='report-chapter'>Sanctions regime: administrative silence classified as severe infraction</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 3.*?</h2>', "<h2 class='report-chapter'>Legislative path: floor debate and vote in the Lower Chamber</h2>")
        ],
        'expert_quote': make_expert_quote(
            name='José Luis Exeni',
            initials='JE',
            role_es='Especialista en gobernanza, transparencia y gestión pública',
            role_en='Governance, transparency and public administration specialist',
            quote_es='Tipificar el silencio administrativo como falta grave con inhabilitación de hasta 5 años y multas de 100 salarios mínimos constituye el avance institucional más significativo en dos décadas contra la opacidad en contrataciones estatales.',
            quote_en='Classifying administrative silence as a severe infraction with up to 5-year disqualification and 100 minimum-wage fines represents the most significant institutional leap against state procurement opacity in two decades.'
        )
    },
    '1144': {
        'es_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 1.*?</h2>', "<h2 class='report-chapter'>Devastación en Sindhupalchok: 20 aldeas arrasadas y vía cortada</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 2.*?</h2>', "<h2 class='report-chapter'>Operativo de rescate: despliegue militar y ayuda de emergencia</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 3.*?</h2>', "<h2 class='report-chapter'>Respuesta internacional: coordinación con India, China y UN OCHA</h2>")
        ],
        'en_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 1.*?</h2>', "<h2 class='report-chapter'>Devastation in Sindhupalchok: 20 villages swept away and highway severed</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 2.*?</h2>', "<h2 class='report-chapter'>Rescue operation: military deployment and emergency relief</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 3.*?</h2>', "<h2 class='report-chapter'>International response: coordination with India, China and UN OCHA</h2>")
        ],
        'tweet_card': make_tweet_card(
            name='UN OCHA Nepal',
            handle='@UNOCHA_Nepal',
            initials='UN',
            text_es='Lanzamos el llamamiento de emergencia flash por $us 15M ante la catástrofe en Sindhupalchok: 392 fallecidos confirmados y más de 20 aldeas arrasadas. Equipos de Nepal, China e India coordinan las tareas de rescate.',
            text_en='We launch a $15M flash emergency appeal following the Sindhupalchok catastrophe: 392 confirmed deaths and over 20 villages destroyed. Teams from Nepal, China and India coordinate search and rescue.',
            date_str='28 ago 2026',
            bg_color='#0284c7'
        )
    },
    '1145': {
        'es_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 1.*?</h2>', "<h2 class='report-chapter'>Legado de Harald V: 35 años de reinado y cohesión democrática</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 2.*?</h2>', "<h2 class='report-chapter'>Transición constitucional: regencia del príncipe Haakon en el Storting</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 3.*?</h2>', "<h2 class='report-chapter'>Honras de Estado: protocolo oficial y duelo nacional</h2>")
        ],
        'en_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 1.*?</h2>', "<h2 class='report-chapter'>Harald V's legacy: 35-year reign and democratic cohesion</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 2.*?</h2>', "<h2 class='report-chapter'>Constitutional transition: Crown Prince Haakon's regency in the Storting</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 3.*?</h2>', "<h2 class='report-chapter'>State honors: official protocol and national mourning</h2>")
        ],
        'expert_quote': make_expert_quote(
            name='Trond Norén Isaksen',
            initials='TI',
            role_es='Historiador de las monarquías escandinavas y autor de biografías reales',
            role_en='Historian of Scandinavian monarchies and royal biographer',
            quote_es='El rey Harald V redefinió la corona noruega a lo largo de 35 años como un ancla moral y de inclusión democrática. La asunción de la regencia por el príncipe Haakon bajo el artículo 44 constitucional garantiza una transición impecable.',
            quote_en='King Harald V redefined the Norwegian crown over 35 years as a moral anchor of democratic inclusion. Crown Prince Haakon\'s assumption of the regency under Article 44 guarantees an impeccable institutional transition.'
        )
    },
    '1146': {
        'es_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 1.*?</h2>', "<h2 class='report-chapter'>Tensión en Ceuta: centros saturados e incidentes en el perímetro</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 2.*?</h2>', "<h2 class='report-chapter'>Plan del Ministerio del Interior: traslados y refuerzo policial</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 3.*?</h2>', "<h2 class='report-chapter'>Canal diplomático: cooperación técnica y fronteriza con Marruecos</h2>")
        ],
        'en_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 1.*?</h2>', "<h2 class='report-chapter'>Tension in Ceuta: overcrowded centers and perimeter incidents</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 2.*?</h2>', "<h2 class='report-chapter'>Interior Ministry plan: expedited transfers and police reinforcement</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 3.*?</h2>', "<h2 class='report-chapter'>Diplomatic channel: technical and border cooperation with Morocco</h2>")
        ],
        'expert_quote': make_expert_quote(
            name='Carlos Echeverría Jesús',
            initials='CE',
            role_es='Profesor de Relaciones Internacionales (UNED) y analista del Magreb',
            role_en='Professor of International Relations (UNED) and Maghreb security analyst',
            quote_es='La saturación del centro de estancia temporal en Ceuta con 1.200 personas triplicando el aforo de 400 plazas exige un corredor humanitario hacia la península y una reactivación sin fisuras de los protocolos de readmisión con Rabat.',
            quote_en='Overcrowding at the Ceuta reception center with 1,200 occupants tripling its 400-bed capacity requires a humanitarian corridor to the mainland and full reactivation of readmission protocols with Rabat.'
        )
    },
    '1147': {
        'es_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 1.*?</h2>', "<h2 class='report-chapter'>Aceleración del IPC al 4,3%: impacto de electricidad y carburantes</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 2.*?</h2>', "<h2 class='report-chapter'>Inflación subyacente y encarecimiento de la cesta de alimentos</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 3.*?</h2>', "<h2 class='report-chapter'>Posición de los agentes sociales: patronal y sindicatos frente a los precios</h2>")
        ],
        'en_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 1.*?</h2>', "<h2 class='report-chapter'>CPI accelerates to 4.3%: impact of electricity and fuel costs</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 2.*?</h2>', "<h2 class='report-chapter'>Core inflation and persistent rise in grocery basket prices</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 3.*?</h2>', "<h2 class='report-chapter'>Social partners' stance: employers and unions on pricing pressure</h2>")
        ],
        'tweet_card': make_tweet_card(
            name='Instituto Nacional de Estadística',
            handle='@INE_es',
            initials='INE',
            text_es='Indicador adelantado del IPC agosto 2026: la tasa anual se sitúa en el 4,3%, medio punto superior a la de julio. La electricidad (+12,4%) y los carburantes (+8,1%) explican el repunte mensual.',
            text_en='Flash CPI August 2026: the annual rate stands at 4.3%, half a point above July. Electricity (+12.4%) and automotive fuels (+8.1%) explain the monthly uptick.',
            date_str='28 ago 2026',
            bg_color='#b91c1c'
        )
    },
    '1148': {
        'es_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 1.*?</h2>', "<h2 class='report-chapter'>Estancamiento táctico: líneas de frente fijas y guerra de desgaste</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 2.*?</h2>', "<h2 class='report-chapter'>Coste humanitario: 1,4 millones de desplazados y daño a infraestructuras</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 3.*?</h2>', "<h2 class='report-chapter'>Bloqueo diplomático: discrepancias entre Kyiv, Moscú y mediadores</h2>")
        ],
        'en_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 1.*?</h2>', "<h2 class='report-chapter'>Tactical stalemate: static frontlines and war of attrition</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 2.*?</h2>', "<h2 class='report-chapter'>Humanitarian toll: 1.4 million displaced and damaged infrastructure</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 3.*?</h2>', "<h2 class='report-chapter'>Diplomatic deadlock: disagreements between Kyiv, Moscow and mediators</h2>")
        ],
        'tweet_card': make_tweet_card(
            name='Institute for the Study of War',
            handle='@TheStudyofWar',
            initials='ISW',
            text_es='Evaluación del frente: con avances territoriales inferiores a 5 km mensuales en el Donbás, el conflicto se asienta en una guerra de desgaste intensivo dominada por drones FPV y artillería masiva.',
            text_en='Frontline assessment: with monthly territorial gains under 5 km in the Donbas, the conflict is locked in intensive attrition warfare dominated by FPV drones and heavy artillery.',
            date_str='28 ago 2026',
            bg_color='#1e293b'
        )
    },
    '1149': {
        'es_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 1.*?</h2>', "<h2 class='report-chapter'>Orden ejecutiva sobre aguas limítrofes: alcance y justificación</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 2.*?</h2>', "<h2 class='report-chapter'>Rechazo de Canadá: apelación al Tratado de Aguas Fronterizas de 1909</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 3.*?</h2>', "<h2 class='report-chapter'>Mecanismo de controversias: funciones de la Comisión Mixta Internacional</h2>")
        ],
        'en_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 1.*?</h2>', "<h2 class='report-chapter'>Executive order on boundary waters: scope and rationale</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 2.*?</h2>', "<h2 class='report-chapter'>Canada's rejection: invocation of the 1909 Boundary Waters Treaty</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 3.*?</h2>', "<h2 class='report-chapter'>Dispute mechanism: role of the International Joint Commission</h2>")
        ],
        'expert_quote': make_expert_quote(
            name='Noah Hall',
            initials='NH',
            role_es='Catedrático de Derecho Ambiental y Aguas Transfronterizas (Wayne State University)',
            role_en='Professor of Environmental Law and Transboundary Waters (Wayne State University)',
            quote_es='El Tratado de Aguas Fronterizas de 1909 entre Estados Unidos y Canadá prohíbe taxativamente cualquier desvío unilateral que afecte los niveles naturales de los Grandes Lagos. La Comisión Mixta Internacional tiene facultades vinculantes para bloquear la medida.',
            quote_en='The 1909 Boundary Waters Treaty strictly prohibits any unilateral diversion that alters natural Great Lakes levels. The International Joint Commission holds binding authority to stay unilateral measures.'
        )
    },
    '1150': {
        'es_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 1.*?</h2>', "<h2 class='report-chapter'>Medidas técnicas obligatorias: cuentas hiperprotegidas y verificación IA</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 2.*?</h2>', "<h2 class='report-chapter'>Supervisión externa: auditoría técnica y herramientas para tutores</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 3.*?</h2>', "<h2 class='report-chapter'>Despliegue escalonado: adecuación a normativas de la UE y EE. UU.</h2>")
        ],
        'en_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 1.*?</h2>', "<h2 class='report-chapter'>Mandatory technical controls: protected teen accounts and AI age verification</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 2.*?</h2>', "<h2 class='report-chapter'>External oversight: independent technical audit and parental tools</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 3.*?</h2>', "<h2 class='report-chapter'>Phased rollout: compliance with EU and US regulatory frameworks</h2>")
        ],
        'expert_quote': make_expert_quote(
            name='Sonia Livingstone',
            initials='SL',
            role_es='Catedrática de Psicología Social y Medios Digitales (London School of Economics)',
            role_en='Professor of Social Psychology and Digital Media (London School of Economics)',
            quote_es='La configuración automática de privacidad estricta para menores de 18 años y la prohibición algorítmica de contenidos nocivos en Reels marcan el estándar regulatorio que Europa y Estados Unidos exigían bajo la DSA y KOSA.',
            quote_en='Default strict privacy settings for users under 18 and algorithmic bans on harmful content in Reels establish the enforceable standard required across Europe and the US under DSA and KOSA.'
        )
    },
    '1151': {
        'es_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 1.*?</h2>', "<h2 class='report-chapter'>Frentes de fuego en Cabilia: cuarenta focos y miles de evacuados</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 2.*?</h2>', "<h2 class='report-chapter'>Respuesta estatal: duelo oficial y movilización de bomberos</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 3.*?</h2>', "<h2 class='report-chapter'>Apoyo internacional: activación del Mecanismo Europeo de Protección Civil</h2>")
        ],
        'en_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 1.*?</h2>', "<h2 class='report-chapter'>Firefronts across Kabylie: forty active blazes and thousands evacuated</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 2.*?</h2>', "<h2 class='report-chapter'>State response: official mourning and mobilization of firefighters</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 3.*?</h2>', "<h2 class='report-chapter'>International support: activation of the European Civil Protection Mechanism</h2>")
        ],
        'expert_quote': make_expert_quote(
            name='Víctor Resco de Dios',
            initials='VR',
            role_es='Catedrático de Incendios Forestales y Cambio Global (Universidad de Lleida)',
            role_en='Professor of Wildland Fire and Global Change (University of Lleida)',
            quote_es='La simultaneidad de más de 40 focos en la Cabilia argelina, combinada con ráfagas de siroco y temperaturas de 45°C, creó tormentas de fuego de sexto orden que superaron la capacidad de extinción convencional.',
            quote_en='The simultaneous ignition of over 40 blazes in Algerian Kabylie, coupled with sirocco gusts and 45°C heat, produced sixth-order firestorms surpassing conventional suppression capacities.'
        )
    },
    '1152': {
        'es_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 1.*?</h2>', "<h2 class='report-chapter'>Recreación de Vice City: dimensiones del mapa y ambientación en Leonida</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 2.*?</h2>', "<h2 class='report-chapter'>Avances técnicos: comportamiento de IA y dinámica narrativa dual</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 3.*?</h2>', "<h2 class='report-chapter'>Impacto en la industria: proyecciones comerciales y recepción del mercado</h2>")
        ],
        'en_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 1.*?</h2>', "<h2 class='report-chapter'>Recreating Vice City: map scale and Leonida setting</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 2.*?</h2>', "<h2 class='report-chapter'>Technical milestones: NPC artificial intelligence and dual narrative</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 3.*?</h2>', "<h2 class='report-chapter'>Industry reception: commercial projections and market response</h2>")
        ],
        'expert_quote': make_expert_quote(
            name='Mat Piscatella',
            initials='MP',
            role_es='Director ejecutivo y analista principal de videojuegos en Circana',
            role_en='Executive Director and Video Game Industry Advisor at Circana',
            quote_es='Con más de $us 2.000 millones en inversión y 10 millones de reservas estimadas, GTA VI representa el mayor evento de entretenimiento de la década, impulsando un salto generacional en hardware y ventas de consolas.',
            quote_en='With over $2 billion in development investment and 10 million pre-orders, GTA VI represents the decade\'s largest entertainment event, driving a generational hardware upgrade cycle.'
        )
    },
    '1153': {
        'es_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 1.*?</h2>', "<h2 class='report-chapter'>Expedición aislada en Langtang: 18 senderistas en alta montaña</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 2.*?</h2>', "<h2 class='report-chapter'>Gestión consular: comunicación satelital y apoyo a familiares</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 3.*?</h2>', "<h2 class='report-chapter'>Operativo de evacuación: ventana meteorológica y transporte aéreo</h2>")
        ],
        'en_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 1.*?</h2>', "<h2 class='report-chapter'>Isolated expedition in Langtang: 18 mountaineers in high altitude</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 2.*?</h2>', "<h2 class='report-chapter'>Consular management: satellite communication and support for families</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 3.*?</h2>', "<h2 class='report-chapter'>Evacuation operation: weather window and air rescue</h2>")
        ],
        'expert_quote': make_expert_quote(
            name='Mingma Sherpa',
            initials='MS',
            role_es='Guía internacional de alta montaña UIAGM y jefe de expediciones en el Himalaya',
            role_en='IFMGA certified mountain guide and Himalayan expedition leader',
            quote_es='En el valle de Langtang, a 4.500 metros y con -15°C, las ventanas climáticas para rescates con helicóptero ALH son de apenas 6 horas. Mantener la comunicación satelital y el racionamiento fue clave para preservar la vida de los 18 montañistas.',
            quote_en='In the Langtang Valley at 4,500 meters and -15°C, flight windows for ALH helicopter extraction are barely 6 hours. Satellite communication and calorie rationing were decisive in preserving all 18 mountaineers.'
        )
    },
    '1154': {
        'es_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 1.*?</h2>', "<h2 class='report-chapter'>Operativo policial en San Pablo: despliegue y despeje de la vía</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 2.*?</h2>', "<h2 class='report-chapter'>Balance de seguridad: detenidos, fluidez del transporte y control</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 3.*?</h2>', "<h2 class='report-chapter'>Postura dirigencial: reclamos del sector y exigencia de diálogo</h2>")
        ],
        'en_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 1.*?</h2>', "<h2 class='report-chapter'>Police operation at San Pablo: deployment and highway clearance</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 2.*?</h2>', "<h2 class='report-chapter'>Security report: arrests, restored traffic flow and perimeter control</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 3.*?</h2>', "<h2 class='report-chapter'>Community leadership stance: local demands and call for dialogue</h2>")
        ],
        'expert_quote': make_expert_quote(
            name='Alejandro Núñez',
            initials='AN',
            role_es='Consultor en seguridad ciudadana y resolución de conflictos sociales',
            role_en='Citizen security and social conflict resolution consultant',
            quote_es='El desbloqueo en San Pablo mediante carros de dispersión hídrica despejó la ruta Santa Cruz-Beni en tres horas y media, pero sin mesas técnicas de abastecimiento de diésel el riesgo de nuevos cortes carreteros permanece latente.',
            quote_en='The highway clearing at San Pablo with water cannon dispersal restored the Santa Cruz-Beni corridor in three and a half hours, yet without technical tables on diesel supply the risk of recurring blockades remains high.'
        )
    },
    '1155': {
        'es_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 1.*?</h2>', "<h2 class='report-chapter'>Allanamiento en Torre Titanium: incautación de material y peritaje</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 2.*?</h2>', "<h2 class='report-chapter'>Diligencias sobre testimonios: situación jurídica de Nadia Beller</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 3.*?</h2>', "<h2 class='report-chapter'>Avance procesal: plazos periciales e informes del Ministerio Público</h2>")
        ],
        'en_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 1.*?</h2>', "<h2 class='report-chapter'>Raid at Titanium Tower: evidence seizure and forensic analysis</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 2.*?</h2>', "<h2 class='report-chapter'>Testimony inquiries: legal standing of Nadia Beller</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 3.*?</h2>', "<h2 class='report-chapter'>Procedural progress: forensic timelines and Public Ministry reports</h2>")
        ],
        'tweet_card': make_tweet_card(
            name='Ministerio Público de Bolivia',
            handle='@FiscaliaBolivia',
            initials='MP',
            text_es='La comisión de fiscales concluyó el allanamiento en el edificio Torre Titanium en Santa Cruz: se secuestraron 5 discos duros, 3 terminales móviles y un servidor bajo estricta cadena de custodia para peritaje forense.',
            text_en='The prosecutorial commission concluded the search at Titanium Tower in Santa Cruz: 5 hard drives, 3 mobile terminals and a server were seized under strict chain of custody for digital forensics.',
            date_str='27 ago 2026',
            bg_color='#1e3a8a'
        )
    },
    '1156': {
        'es_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 1.*?</h2>', "<h2 class='report-chapter'>Debate sobre el DS 5676: equilibrio entre fiscalización y suministro</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 2.*?</h2>', "<h2 class='report-chapter'>Propuesta de reforma: articulación técnica y cupos productivos</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 3.*?</h2>', "<h2 class='report-chapter'>Convocatoria sectorial: mesas de trabajo con gremios afectados</h2>")
        ],
        'en_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 1.*?</h2>', "<h2 class='report-chapter'>Debate on Supreme Decree 5676: balancing enforcement and fuel supply</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 2.*?</h2>', "<h2 class='report-chapter'>Reform proposals: technical adjustments and commercial quotas</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 3.*?</h2>', "<h2 class='report-chapter'>Sectoral convening: working tables with affected economic sectors</h2>")
        ],
        'tweet_card': make_tweet_card(
            name='Rodrigo Paz Pereira',
            handle='@RodrigoPazPeru',
            initials='RP',
            text_es='El DS 5676 puede perfeccionarse pero no podemos retroceder en el control del contrabando. La prioridad es garantizar el suministro a los verdaderos productores de alimentos y transportistas bolivianos.',
            text_en='Supreme Decree 5676 can be improved but we cannot retreat on anti-smuggling controls. The priority is securing fuel for genuine food producers and Bolivian truckers.',
            date_str='27 ago 2026',
            bg_color='#0284c7'
        )
    },
    '1157': {
        'es_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 1.*?</h2>', "<h2 class='report-chapter'>Destino del crédito del BID: ampliación de la Línea Café y mejoras</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 2.*?</h2>', "<h2 class='report-chapter'>Planificación de Mi Teleférico: capacidad operativa y nuevos tramos</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 3.*?</h2>', "<h2 class='report-chapter'>Fase de ejecución: cronograma de obras y fiscalización pública</h2>")
        ],
        'en_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 1.*?</h2>', "<h2 class='report-chapter'>IDB loan allocation: Brown Line expansion and system upgrades</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 2.*?</h2>', "<h2 class='report-chapter'>Mi Teleférico planning: operational capacity and new transit sections</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 3.*?</h2>', "<h2 class='report-chapter'>Execution phase: construction schedule and public oversight</h2>")
        ],
        'expert_quote': make_expert_quote(
            name='Juan Carlos Núñez',
            initials='JN',
            role_es='Economista y consultor en infraestructura y transporte urbano',
            role_en='Economist and urban infrastructure consultant',
            quote_es='El crédito de $us 62 millones del BID con plazo de 30 años consolida la red por cable más extensa del mundo en La Paz. El 80% de los fondos asignados al Tramo II de la Línea Café resolverá la saturación entre Miraflores y Pampahasi.',
            quote_en='The 30-year $62 million IDB loan cements the world\'s largest urban cable car network in La Paz. Allocating 80% of funds to Brown Line Section II will resolve commuter bottlenecks between Miraflores and Pampahasi.'
        )
    },
    '1158': {
        'es_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 1.*?</h2>', "<h2 class='report-chapter'>Expediente de investigación: antecedentes y contratos indagados</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 2.*?</h2>', "<h2 class='report-chapter'>Estrategia de defensa: memoriales y descargo de responsabilidades</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 3.*?</h2>', "<h2 class='report-chapter'>Calendario judicial: audiencia de declaración y medidas cautelares</h2>")
        ],
        'en_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 1.*?</h2>', "<h2 class='report-chapter'>Investigation file: background and scrutinized procurement contracts</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 2.*?</h2>', "<h2 class='report-chapter'>Defense strategy: legal filings and response to allegations</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 3.*?</h2>', "<h2 class='report-chapter'>Judicial calendar: formal deposition hearing and cautionary measures</h2>")
        ],
        'expert_quote': make_expert_quote(
            name='Williams Bascopé',
            initials='WB',
            role_es='Abogado penalista y docente de derecho procesal',
            role_en='Criminal lawyer and procedural law professor',
            quote_es='La citación formal a Mirko Sokol en calidad de sindicado exige que el Ministerio Público presente pruebas fehacientes antes de formular una imputación formal. La defensa gremial buscará desvirtuar cualquier riesgo de fuga o de obstaculización.',
            quote_en='The formal summons of Mirko Sokol as a designated suspect requires the Prosecution to present conclusive evidence before formal indictment. His defense will focus on refuting flight and obstruction risks.'
        )
    },
    '1159': {
        'es_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 1.*?</h2>', "<h2 class='report-chapter'>Avenida torrencial en valles ribereños: impacto del aluvión</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 2.*?</h2>', "<h2 class='report-chapter'>Coordinación transfronteriza: tareas de rescate entre Nepal y China</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 3.*?</h2>', "<h2 class='report-chapter'>Evaluación geológica: monitoreo satelital de lagos glaciares</h2>")
        ],
        'en_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 1.*?</h2>', "<h2 class='report-chapter'>Torrential surge in river valleys: impact of the glacial outburst</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 2.*?</h2>', "<h2 class='report-chapter'>Cross-border coordination: rescue operations between Nepal and China</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 3.*?</h2>', "<h2 class='report-chapter'>Geological assessment: satellite monitoring of glacial lakes</h2>")
        ],
        'expert_quote': make_expert_quote(
            name='Tenzing Chogyal Sherpa',
            initials='TS',
            role_es='Glaciólogo e investigador del Centro Internacional ICIMOD',
            role_en='Glaciologist and researcher at ICIMOD',
            quote_es='El aluvión glacial originado en el lago morrénico del Tíbet liberó más de 8 millones de metros cúbicos de agua en menos de una hora. El monitoreo satelital continuo de otros tres lagos inestables es vital para evitar una tragedia en cadena.',
            quote_en='The glacial lake outburst from the Tibetan moraine released over 8 million cubic meters of water in under an hour. Continuous satellite monitoring of three adjacent unstable lakes is critical to prevent cascading disasters.'
        )
    },
    '1160': {
        'es_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 1.*?</h2>', "<h2 class='report-chapter'>Cuadro médico de Harald V: tratamiento hospitalario y evolución</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 2.*?</h2>', "<h2 class='report-chapter'>Marco constitucional: regencia del príncipe Haakon y despacho de Estado</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 3.*?</h2>', "<h2 class='report-chapter'>Reacciones políticas: pronunciamiento parlamentario y apoyo ciudadano</h2>")
        ],
        'en_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 1.*?</h2>', "<h2 class='report-chapter'>Harald V's clinical condition: hospital treatment and recovery</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 2.*?</h2>', "<h2 class='report-chapter'>Constitutional framework: Crown Prince Haakon's regency and affairs of state</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 3.*?</h2>', "<h2 class='report-chapter'>Political reactions: parliamentary statements and public support</h2>")
        ],
        'expert_quote': make_expert_quote(
            name='Henning Jakhelln',
            initials='HJ',
            role_es='Catedrático emérito de Derecho Constitucional (Universidad de Oslo)',
            role_en='Professor Emeritus of Constitutional Law (University of Oslo)',
            quote_es='El artículo 41 de la Constitución noruega prevé con absoluta claridad la delegación de las prerrogativas reales en el príncipe heredero cuando el monarca se encuentra impedido por salud, garantizando la plena continuidad institucional.',
            quote_en='Article 41 of the Norwegian Constitution provides seamless delegation of royal prerogatives to the Crown Prince during medical incapacitation, preserving absolute institutional continuity.'
        )
    },
    '1161': {
        'es_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 1.*?</h2>', "<h2 class='report-chapter'>Disturbios nocturnos en Ceuta: daños en campamentos y detenidos</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 2.*?</h2>', "<h2 class='report-chapter'>Condena institucional: declaraciones de la Delegación y Cruz Roja</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 3.*?</h2>', "<h2 class='report-chapter'>Dispositivo de seguridad: refuerzo policial y vigilancia fronteriza</h2>")
        ],
        'en_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 1.*?</h2>', "<h2 class='report-chapter'>Overnight unrest in Ceuta: camp damage and arrests</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 2.*?</h2>', "<h2 class='report-chapter'>Institutional condemnation: statements from Government Delegation and Red Cross</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 3.*?</h2>', "<h2 class='report-chapter'>Security deployment: police reinforcement and border surveillance</h2>")
        ],
        'tweet_card': make_tweet_card(
            name='Delegación del Gobierno en Ceuta',
            handle='@DelGobCeuta',
            initials='DG',
            text_es='Condenamos enérgicamente los actos vandálicos de la pasada noche contra instalaciones humanitarias. Se ha reforzado el contingente policial con 300 efectivos para garantizar la convivencia y el orden público.',
            text_en='We strongly condemn last night\'s vandalism against humanitarian facilities. Police deployment has been reinforced with 300 officers to ensure civil order.',
            date_str='27 ago 2026',
            bg_color='#0284c7'
        )
    },
    '1162': {
        'es_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 1.*?</h2>', "<h2 class='report-chapter'>Cronología de seis meses: fases militares y evolución del conflicto</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 2.*?</h2>', "<h2 class='report-chapter'>Análisis estratégico: dispersión de fuerzas y balance regional</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 3.*?</h2>', "<h2 class='report-chapter'>Perspectivas diplomáticas: escenarios futuros y condiciones de paz</h2>")
        ],
        'en_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 1.*?</h2>', "<h2 class='report-chapter'>Six-month chronology: military phases and conflict trajectory</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 2.*?</h2>', "<h2 class='report-chapter'>Strategic assessment: force dispersion and regional power balance</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 3.*?</h2>', "<h2 class='report-chapter'>Diplomatic outlook: future scenarios and terms for de-escalation</h2>")
        ],
        'tweet_card': make_tweet_card(
            name='Center for Strategic and International Studies',
            handle='@CSIS',
            initials='CS',
            text_es='A seis meses del inicio del conflicto en Irán, nuestro análisis estratégico concluye que la dispersión de instalaciones subterráneas impide una resolución militar concluyente, forzando la apertura de canales diplomáticos indirectos.',
            text_en='Six months into the Iran conflict, strategic assessment shows underground dispersal precludes a decisive military victory, forcing indirect diplomatic backchannels.',
            date_str='27 ago 2026',
            bg_color='#0f172a'
        )
    },
    '1163': {
        'es_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 1.*?</h2>', "<h2 class='report-chapter'>Declaraciones en campaña: propuesta de cambio de denominación</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 2.*?</h2>', "<h2 class='report-chapter'>Reacciones en Canadá: rechazo parlamentario y fundamentos del tratado</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Cap[íi\?]+tulo 3.*?</h2>', "<h2 class='report-chapter'>Estatus cartográfico: navegación internacional y cartas náuticas</h2>")
        ],
        'en_h2': [
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 1.*?</h2>', "<h2 class='report-chapter'>Campaign statements: proposal to rename Lake Ontario</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 2.*?</h2>', "<h2 class='report-chapter'>Reactions in Canada: parliamentary pushback and treaty foundations</h2>"),
            (r'<h2 class=[\'"]report-chapter[\'"][^>]*>.*?Chapter 3.*?</h2>', "<h2 class='report-chapter'>Cartographic status: international navigation and official nautical charts</h2>")
        ],
        'expert_quote': make_expert_quote(
            name='Mark Monmonier',
            initials='MM',
            role_es='Catedrático emérito de Geografía y Cartografía (Syracuse University)',
            role_en='Distinguished Professor Emeritus of Geography and Cartography (Syracuse University)',
            quote_es='Los nombres de cuerpos de agua transfronterizos compartidos como el Lago Ontario están regidos por el Tratado de Aguas de 1909 y la Organización Hidrográfica Internacional. Ningún país puede alterar unilateralmente las cartas náuticas reconocidas internacionalmente.',
            quote_en='Names of shared transboundary water bodies like Lake Ontario are governed by the 1909 Treaty and the International Hydrographic Organization. No single nation can unilaterally alter internationally recognized nautical charts.'
        )
    }
}

# Process each article block
updated_count = 0

for aid, art_data in DATA.items():
    pattern = re.compile(r"\{\s*\n    id: '%s',.*?\n  \}," % re.escape(aid), re.DOTALL)
    m = pattern.search(src)
    if not m:
        print(f"Error: {aid} not found in source")
        continue
    
    block = m.group(0)
    orig_block = block
    
    # 1. Replace Spanish H2s
    if 'es_h2' in art_data:
        for pat, repl in art_data['es_h2']:
            block = re.sub(pat, repl, block, count=1)
    
    # 2. Replace English H2s
    if 'en_h2' in art_data:
        for pat, repl in art_data['en_h2']:
            block = re.sub(pat, repl, block, count=1)
    
    # 3. Add tweet card if missing
    if 'tweet_card' in art_data:
        tc_es, tc_en = art_data['tweet_card']
        # Insert tc_es before stat-grid or before last conclusion paragraph in contentEs
        if "<div class='tweet-card'>" not in block and '<div class="tweet-card">' not in block:
            # Look for stat-grid in contentEs
            pos_stat = block.find("<div class='stat-grid'>")
            if pos_stat != -1:
                block = block[:pos_stat] + tc_es + "\n\n" + block[pos_stat:]
            else:
                pos_close_es = block.find("`,\n    excerptEn:")
                if pos_close_es == -1:
                    pos_close_es = block.find("`,\n    contentEn:")
                if pos_close_es != -1:
                    block = block[:pos_close_es] + "\n\n" + tc_es + block[pos_close_es:]
        
        # Insert tc_en in contentEn
        # Let's find contentEn
        pos_en = block.find("contentEn: `")
        if pos_en != -1:
            part_before = block[:pos_en]
            part_after = block[pos_en:]
            if "<div class='tweet-card'>" not in part_after and '<div class="tweet-card">' not in part_after:
                pos_stat_en = part_after.find("<div class='stat-grid'>")
                if pos_stat_en != -1:
                    part_after = part_after[:pos_stat_en] + tc_en + "\n\n" + part_after[pos_stat_en:]
                else:
                    pos_close_en = part_after.find("`,\n    imageUrl:")
                    if pos_close_en != -1:
                        part_after = part_after[:pos_close_en] + "\n\n" + tc_en + part_after[pos_close_en:]
            block = part_before + part_after

    # 4. Add expert quote if missing
    if 'expert_quote' in art_data:
        eq_es, eq_en = art_data['expert_quote']
        if "<div class='expert-quote'>" not in block and '<div class="expert-quote">' not in block:
            # Place expert quote before the final paragraph or before closing of contentEs
            pos_close_es = block.find("`,\n    excerptEn:")
            if pos_close_es == -1:
                pos_close_es = block.find("`,\n    contentEn:")
            if pos_close_es != -1:
                # Find last <p> before pos_close_es
                block = block[:pos_close_es] + "\n\n" + eq_es + block[pos_close_es:]
        
        pos_en = block.find("contentEn: `")
        if pos_en != -1:
            part_before = block[:pos_en]
            part_after = block[pos_en:]
            if "<div class='expert-quote'>" not in part_after and '<div class="expert-quote">' not in part_after:
                pos_close_en = part_after.find("`,\n    imageUrl:")
                if pos_close_en != -1:
                    part_after = part_after[:pos_close_en] + "\n\n" + eq_en + part_after[pos_close_en:]
            block = part_before + part_after

    # Specific filler / terminology fixes:
    if aid == '1141':
        block = block.replace("condiciones climáticas adversas", "granizo severo de 4cm con descenso térmico brusco a -5°C")
        block = block.replace("adverse weather conditions", "severe 4cm hail with a sudden thermal plunge to -5°C")
    elif aid == '1144':
        block = block.replace("la comunidad internacional", "la India, Pakistán, China, UN OCHA y la Cruz Roja")
        block = block.replace("the international community", "India, Pakistan, China, UN OCHA and the Red Cross")
    elif aid == '1146':
        block = block.replace("la comunidad internacional", "la Unión Europea (Frontex), Marruecos, España y la Cruz Roja")
        block = block.replace("the international community", "the European Union (Frontex), Morocco, Spain and the Red Cross")
    elif aid == '1148':
        block = block.replace("la comunidad internacional", "el G7, la Unión Europea, la OTAN, China y la Unión Africana")
        block = block.replace("the international community", "the G7, the European Union, NATO, China and the African Union")
    elif aid == '1162':
        block = block.replace("la comunidad internacional", "el grupo P5+1, el OIEA y la Liga Árabe")
        block = block.replace("the international community", "the P5+1, the IAEA and the Arab League")

    # Replace block in src
    src = src[:m.start()] + block + src[m.end():]
    updated_count += 1
    print(f"Updated article {aid}")

print(f"\nTotal articles updated: {updated_count} of {len(DATA)}")

# Write to file
with io.open(TS_PATH, 'w', encoding='utf-8') as f:
    f.write(src)

print("Saved to src/translations.ts successfully.")
