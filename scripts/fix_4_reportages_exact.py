import io, re

TS_PATH = r'src/translations.ts'

with io.open(TS_PATH, 'r', encoding='utf-8') as f:
    src = f.read()

# Exact string replacements for each article
# Format: article_id -> list of (exact_original_h2, new_h2)

REPLACEMENTS = {
  '1121': [
    ('<h2 class="report-chapter">Capítulo 1 &mdash; El viaje secreto y el rastro de vuelo</h2>',
     '<h2 class="report-chapter">El vuelo C-17 de la CIA: rastreo y confirmación</h2>'),
    ('<h2 class="report-chapter">Capítulo 2 &mdash; El precedente: Burns en Moscú, noviembre de 2021</h2>',
     '<h2 class="report-chapter">El precedente Burns 2021: canal backchannel con el Kremlin</h2>'),
    ('<h2 class="report-chapter">Capítulo 3 &mdash; ¿Qué busca Ratcliffe en Moscú?</h2>',
     '<h2 class="report-chapter">Objetivos de Ratcliffe: inteligencia, Ucrania y canales diplomáticos</h2>'),
    ('<h2 class="report-chapter">Capítulo 4 &mdash; El contexto de la semana</h2>',
     '<h2 class="report-chapter">Contexto semanal: escalada Rusia-Ucrania y diplomacia oculta</h2>'),
    ('<h2 class="report-chapter">Chapter 1 &mdash; The secret trip and the flight trail</h2>',
     '<h2 class="report-chapter">The CIA C-17 flight: tracking and confirmation</h2>'),
    ('<h2 class="report-chapter">Chapter 2 &mdash; The precedent: Burns in Moscow, November 2021</h2>',
     '<h2 class="report-chapter">The 2021 Burns precedent: backchannel with the Kremlin</h2>'),
    ('<h2 class="report-chapter">Chapter 3 &mdash; What is Ratcliffe seeking in Moscow?</h2>',
     '<h2 class="report-chapter">Ratcliffe\'s objectives: intelligence, Ukraine and diplomatic channels</h2>'),
    ('<h2 class="report-chapter">Chapter 4 &mdash; The week\'s context</h2>',
     '<h2 class="report-chapter">Weekly context: Russia-Ukraine escalation and covert diplomacy</h2>'),
  ],
  '1131': [
    ("<h2 class='report-chapter'>Capítulo 1 — El video: así fue el ataque (18 de agosto)</h2>",
     "<h2 class='report-chapter'>El ataque del 18 de agosto: reconstrucción por video</h2>"),
    ("<h2 class='report-chapter'>Capítulo 2 — La detención y la imputación (19 de agosto)</h2>",
     "<h2 class='report-chapter'>Detención e imputación formal: 48 horas después</h2>"),
    ("<h2 class='report-chapter'>Capítulo 3 — Lo que dijo Beller desde el hospital (20-21 de agosto)</h2>",
     "<h2 class='report-chapter'>Declaración de Beller desde el hospital: \"fui emboscada\"</h2>"),
    ("<h2 class='report-chapter'>Capítulo 4 — Las voces oficiales (20-26 de agosto)</h2>",
     "<h2 class='report-chapter'>Posiciones oficiales: Fiscalía, Policía, Gobierno y oposición</h2>"),
    ("<h2 class='report-chapter'>Capítulo 5 — Los chats: de TN 25 de junio al anuncio del 26 de agosto</h2>",
     "<h2 class='report-chapter'>La trama digital: chats de junio a agosto que antecedieron al caso</h2>"),
    ("<h2 class='report-chapter'>Chapter 1 — The video: how the attack happened (Aug 18)</h2>",
     "<h2 class='report-chapter'>The August 18 attack: video reconstruction</h2>"),
    ("<h2 class='report-chapter'>Chapter 2 — Detention and charges (Aug 19)</h2>",
     "<h2 class='report-chapter'>Detention and formal indictment: 48 hours later</h2>"),
    ("<h2 class='report-chapter'>Chapter 3 — What Beller said from hospital (Aug 20-21)</h2>",
     "<h2 class='report-chapter'>Beller's statement from hospital: \"I was ambushed\"</h2>"),
    ("<h2 class='report-chapter'>Chapter 4 — Official voices (Aug 20-26)</h2>",
     "<h2 class='report-chapter'>Official positions: Prosecution, Police, Government and opposition</h2>"),
    ("<h2 class='report-chapter'>Chapter 5 — The chats: June 25 TN to Aug 26 announcement</h2>",
     "<h2 class='report-chapter'>The digital trail: June-to-August chats that preceded the case</h2>"),
  ],
  '1132': [
    ("<h2 class='report-chapter'>Capítulo 1 &mdash; Qué se está diciendo realmente</h2>",
     "<h2 class='report-chapter'>El debate real: disuasión vs. preparación para guerra</h2>"),
    ("<h2 class='report-chapter'>Capítulo 2 &mdash; El Escudo Oriental de Polonia</h2>",
     "<h2 class='report-chapter'>El \"Escudo Oriental\" polaco: Tarcza Wschód y gasto del 4% PIB</h2>"),
    ("<h2 class='report-chapter'>Capítulo 3 &mdash; Las amenazas híbridas y la operación Eastern Sentry</h2>",
     "<h2 class='report-chapter'>Amenazas híbridas y operación Eastern Sentry: ciber, migración y sabotaje</h2>"),
    ("<h2 class='report-chapter'>Capítulo 4 &mdash; El papel de Estados Unidos</h2>",
     "<h2 class='report-chapter'>Compromiso de EE. UU.: rotaciones, defensa aérea y Artículo 5</h2>"),
    ("<h2 class='report-chapter'>Capítulo 5 &mdash; Finlandia, los bálticos y la doctrina de minas</h2>",
     "<h2 class='report-chapter'>Flanco nórdico-báltico: Finlandia, minas terrestres y frontera con Rusia</h2>"),
    ("<h2 class='report-chapter'>Capítulo 6 &mdash; Los escenarios de guerra</h2>",
     "<h2 class='report-chapter'>Escenarios de conflicto: de incidente a guerra generalizada</h2>"),
    ("<h2 class='report-chapter'>Capítulo 7 &mdash; La voz de Moscú</h2>",
     "<h2 class='report-chapter'>Narrativa rusa: \"amenaza existencial\" y líneas rojas</h2>"),
    ("<h2 class='report-chapter'>Capítulo 8 &mdash; Repercusiones y análisis</h2>",
     "<h2 class='report-chapter'>Análisis de repercusiones: defensa europea, gasto y seguridad</h2>"),
    ("<h2 class='report-chapter'>Capítulo 9 &mdash; Conclusión</h2>",
     "<h2 class='report-chapter'>Conclusión: disuasión creíble o espiral de escalada</h2>"),
    ("<h2 class='report-chapter'>Chapter 1 &mdash; What is actually being said</h2>",
     "<h2 class='report-chapter'>The real debate: deterrence vs. preparation for war</h2>"),
    ("<h2 class='report-chapter'>Chapter 2 &mdash; Poland's Eastern Shield</h2>",
     "<h2 class='report-chapter'>Poland's \"Eastern Shield\": Tarcza Wschód and 4% GDP spending</h2>"),
    ("<h2 class='report-chapter'>Chapter 3 &mdash; Hybrid threats and Eastern Sentry</h2>",
     "<h2 class='report-chapter'>Hybrid threats and Operation Eastern Sentry: cyber, migration and sabotage</h2>"),
    ("<h2 class='report-chapter'>Chapter 4 &mdash; The US role</h2>",
     "<h2 class='report-chapter'>US commitment: rotational forces, air defense and Article 5</h2>"),
    ("<h2 class='report-chapter'>Chapter 5 &mdash; Finland, the Baltics and the mine doctrine</h2>",
     "<h2 class='report-chapter'>Nordic-Baltic flank: Finland, landmines and the Russian border</h2>"),
    ("<h2 class='report-chapter'>Chapter 6 &mdash; War scenarios</h2>",
     "<h2 class='report-chapter'>Conflict scenarios: from border incident to full-scale war</h2>"),
    ("<h2 class='report-chapter'>Chapter 7 &mdash; Moscow's voice</h2>",
     "<h2 class='report-chapter'>Russian narrative: \"existential threat\" and red lines</h2>"),
    ("<h2 class='report-chapter'>Chapter 8 &mdash; Repercussions and analysis</h2>",
     "<h2 class='report-chapter'>Repercussions analysis: European defense, spending and security</h2>"),
    ("<h2 class='report-chapter'>Chapter 9 &mdash; Conclusion</h2>",
     "<h2 class='report-chapter'>Conclusion: credible deterrence or escalation spiral</h2>"),
  ],
  '1133': [
    ("<h2 class='report-chapter'>Capítulo 1 &mdash; Qué dijo Paz el 26 de agosto, frase por frase</h2>",
     "<h2 class='report-chapter'>La alocución de Paz: tres frases clave textuales</h2>"),
    ("<h2 class='report-chapter'>Capítulo 2 &mdash; Por qué esas palabras encendieron la crisis</h2>",
     "<h2 class='report-chapter'>Por qué la mención a Cerimedo-Beller detonó la crisis política</h2>"),
    ("<h2 class='report-chapter'>Capítulo 3 &mdash; La réplica de Beller, tres horas después</h2>",
     "<h2 class='report-chapter'>Réplica de Beller desde la clínica: \"no soy testaferro, fui emboscada\"</h2>"),
    ("<h2 class='report-chapter'>Capítulo 4 &mdash; Qué hay en juego ahora</h2>",
     "<h2 class='report-chapter'>En juego: credibilidad presidencial, investigación fiscal y coalición</h2>"),
    ("<h2 class='report-chapter'>Capítulo 5 &mdash; Lo que sigue</h2>",
     "<h2 class='report-chapter'>Próximos pasos: citación fiscal, comisión legislativa y plazo de 72 horas</h2>"),
    ("<h2 class='report-chapter'>Chapter 1 &mdash; What Paz said August 26, line by line</h2>",
     "<h2 class='report-chapter'>Paz's address: three key verbatim statements</h2>"),
    ("<h2 class='report-chapter'>Chapter 2 &mdash; Why those words set off the crisis</h2>",
     "<h2 class='report-chapter'>Why mentioning Cerimedo-Beller ignited the political crisis</h2>"),
    ("<h2 class='report-chapter'>Chapter 3 &mdash; Beller's rebuttal, three hours later</h2>",
     "<h2 class='report-chapter'>Beller's rebuttal from clinic: \"I am no front-woman, I was ambushed\"</h2>"),
    ("<h2 class='report-chapter'>Chapter 4 &mdash; What is at stake now</h2>",
     "<h2 class='report-chapter'>At stake: presidential credibility, fiscal investigation and coalition</h2>"),
    ("<h2 class='report-chapter'>Chapter 5 &mdash; What comes next</h2>",
     "<h2 class='report-chapter'>Next steps: prosecutor summons, legislative committee and 72-hour deadline</h2>"),
  ],
}

total_replaced = 0
for aid, pairs in REPLACEMENTS.items():
    pattern = re.compile(r"\{\s*\n    id: '%s',.*?\n  \}," % re.escape(aid), re.DOTALL)
    m = pattern.search(src)
    if not m:
        print(f"ERROR: {aid} not found")
        continue
    block = m.group(0)
    replaced_in_block = 0
    for old, new in pairs:
        if old in block:
            block = block.replace(old, new, 1)
            replaced_in_block += 1
        else:
            print(f"  WARNING {aid}: NOT FOUND -> {old[:60]}")
    src = src[:m.start()] + block + src[m.end():]
    total_replaced += replaced_in_block
    print(f"{aid}: {replaced_in_block}/{len(pairs)} replacements")

print(f"\nTotal replacements: {total_replaced}")

with io.open(TS_PATH, 'w', encoding='utf-8') as f:
    f.write(src)

print("Saved.")