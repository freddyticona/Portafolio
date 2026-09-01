import io, re, os

TS_PATH = r'src/translations.ts'

with io.open(TS_PATH, 'r', encoding='utf-8') as f:
    src = f.read()

print(f"Original file length: {len(src)} characters")

# Let's define the comprehensive transformation data for all 34 articles
# For each article:
# - replacements of Spanish H2 headers (regex or exact string)
# - replacements of English H2 headers
# - expert quote to inject if missing
# - tweet card to inject if missing
# - text / terminology fixes (filler phrases, stats integration)

ARTICLES_DATA = {
    '1121': {
        'es_h2': [
            (r'Cap[íi\?]+tulo 1\s*(?:&mdash;|—|-)\s*El viaje secreto y el rastro de vuelo', 'El vuelo C-17 de la CIA: rastreo y confirmación'),
            (r'Cap[íi\?]+tulo 2\s*(?:&mdash;|—|-)\s*El precedente: Burns en Mosc[úu\?]+, noviembre de 2021', 'El precedente Burns 2021: canal backchannel con el Kremlin'),
            (r'Cap[íi\?]+tulo 3\s*(?:&mdash;|—|-)\s*¿?Qu[ée\?]+ busca Ratcliffe en Mosc[úu\?]+\??', 'Objetivos de Ratcliffe: inteligencia, Ucrania y canales diplomáticos'),
            (r'Cap[íi\?]+tulo 4\s*(?:&mdash;|—|-)\s*El contexto de la semana', 'Contexto semanal: escalada Rusia-Ucrania y diplomacia oculta')
        ],
        'en_h2': [
            (r'Chapter 1\s*(?:&mdash;|—|-)\s*The secret trip and the flight trail', 'The CIA C-17 flight: tracking and confirmation'),
            (r'Chapter 2\s*(?:&mdash;|—|-)\s*The precedent: Burns in Moscow, November 2021', 'The 2021 Burns precedent: backchannel with the Kremlin'),
            (r'Chapter 3\s*(?:&mdash;|—|-)\s*What is Ratcliffe seeking in Moscow\?', 'Ratcliffe\'s objectives: intelligence, Ukraine and diplomatic channels'),
            (r'Chapter 4\s*(?:&mdash;|—|-)\s*The week\'s context', 'Weekly context: Russia-Ukraine escalation and covert diplomacy')
        ]
    },
    '1131': {
        'es_h2': [
            (r'Cap[íi\?]+tulo 1\s*(?:&mdash;|—|-)\s*El video: as[íi\?]+ fue el ataque \(18 de agosto\)', 'El ataque del 18 de agosto: reconstrucción por video'),
            (r'Cap[íi\?]+tulo 2\s*(?:&mdash;|—|-)\s*La detenci[óo\?]+n y la imputaci[óo\?]+n \(19 de agosto\)', 'Detención e imputación formal: 48 horas después'),
            (r'Cap[íi\?]+tulo 3\s*(?:&mdash;|—|-)\s*Lo que dijo Beller desde el hospital \(20-21 de agosto\)', 'Declaración de Beller desde el hospital: "fui emboscada"'),
            (r'Cap[íi\?]+tulo 4\s*(?:&mdash;|—|-)\s*Las voces oficiales \(20-26 de agosto\)', 'Posiciones oficiales: Fiscalía, Policía, Gobierno y oposición'),
            (r'Cap[íi\?]+tulo 5\s*(?:&mdash;|—|-)\s*Los chats: de TN 25 de junio al anuncio del 26 de agosto', 'La trama digital: chats de junio a agosto que antecedieron al caso')
        ],
        'en_h2': [
            (r'Chapter 1\s*(?:&mdash;|—|-)\s*The video: this is how the attack happened \(August 18\)', 'The August 18 attack: video reconstruction'),
            (r'Chapter 2\s*(?:&mdash;|—|-)\s*The arrest and the indictment \(August 19\)', 'Detention and formal indictment: 48 hours later'),
            (r'Chapter 3\s*(?:&mdash;|—|-)\s*What Beller said from the hospital \(August 20-21\)', 'Beller\'s statement from hospital: "I was ambushed"'),
            (r'Chapter 4\s*(?:&mdash;|—|-)\s*Official voices \(August 20-26\)', 'Official positions: Prosecution, Police, Government and opposition'),
            (r'Chapter 5\s*(?:&mdash;|—|-)\s*The chats: from TN June 25 to the August 26 announcement', 'The digital trail: June-to-August chats that preceded the case')
        ]
    },
    '1132': {
        'es_h2': [
            (r'Cap[íi\?]+tulo 1\s*(?:&mdash;|—|-)\s*Qu[ée\?]+ se est[áa\?]+ diciendo realmente', 'El debate real: disuasión vs. preparación para guerra'),
            (r'Cap[íi\?]+tulo 2\s*(?:&mdash;|—|-)\s*El Escudo Oriental de Polonia', 'El "Escudo Oriental" polaco: Tarcza Wschód y gasto del 4% PIB'),
            (r'Cap[íi\?]+tulo 3\s*(?:&mdash;|—|-)\s*Las amenazas h[íi\?]+bridas y la operaci[óo\?]+n Eastern Sentry', 'Amenazas híbridas y operación Eastern Sentry: ciber, migración y sabotaje'),
            (r'Cap[íi\?]+tulo 4\s*(?:&mdash;|—|-)\s*El papel de Estados Unidos', 'Compromiso de EE. UU.: rotaciones, defensa aérea y Artículo 5'),
            (r'Cap[íi\?]+tulo 5\s*(?:&mdash;|—|-)\s*Finlandia, los b[áa\?]+lticos y la doctrina de minas', 'Flanco nórdico-báltico: Finlandia, minas terrestres y frontera con Rusia'),
            (r'Cap[íi\?]+tulo 6\s*(?:&mdash;|—|-)\s*Los escenarios de guerra', 'Escenarios de conflicto: de incidente a guerra generalizada'),
            (r'Cap[íi\?]+tulo 7\s*(?:&mdash;|—|-)\s*La voz de Mosc[úu\?]+', 'Narrativa rusa: "amenaza existencial" y líneas rojas'),
            (r'Cap[íi\?]+tulo 8\s*(?:&mdash;|—|-)\s*Repercusiones y an[áa\?]+lisis', 'Análisis de repercusiones: defensa europea, gasto y seguridad'),
            (r'Cap[íi\?]+tulo 9\s*(?:&mdash;|—|-)\s*Conclusi[óo\?]+n', 'Conclusión: disuasión creíble o espiral de escalada')
        ],
        'en_h2': [
            (r'Chapter 1\s*(?:&mdash;|—|-)\s*What is actually being said', 'The real debate: deterrence vs. preparation for war'),
            (r'Chapter 2\s*(?:&mdash;|—|-)\s*Poland\'s Eastern Shield', 'Poland\'s "Eastern Shield": Tarcza Wschód and 4% GDP spending'),
            (r'Chapter 3\s*(?:&mdash;|—|-)\s*Hybrid threats and Eastern Sentry', 'Hybrid threats and Operation Eastern Sentry: cyber, migration and sabotage'),
            (r'Chapter 4\s*(?:&mdash;|—|-)\s*The US role', 'US commitment: rotational forces, air defense and Article 5'),
            (r'Chapter 5\s*(?:&mdash;|—|-)\s*Finland, the Baltics and the mine doctrine', 'Nordic-Baltic flank: Finland, landmines and the Russian border'),
            (r'Chapter 6\s*(?:&mdash;|—|-)\s*War scenarios', 'Conflict scenarios: from border incident to full-scale war'),
            (r'Chapter 7\s*(?:&mdash;|—|-)\s*Moscow\'s voice', 'Russian narrative: "existential threat" and red lines'),
            (r'Chapter 8\s*(?:&mdash;|—|-)\s*Repercussions and analysis', 'Repercussions analysis: European defense, spending and security'),
            (r'Chapter 9\s*(?:&mdash;|—|-)\s*Conclusion', 'Conclusion: credible deterrence or escalation spiral')
        ]
    },
    '1133': {
        'es_h2': [
            (r'Cap[íi\?]+tulo 1\s*(?:&mdash;|—|-)\s*Qu[ée\?]+ dijo Paz el 26 de agosto, frase por frase', 'La alocución de Paz: tres frases clave textuales'),
            (r'Cap[íi\?]+tulo 2\s*(?:&mdash;|—|-)\s*Por qu[ée\?]+ esas palabras encendieron la crisis', 'Por qué la mención a Cerimedo-Beller detonó la crisis política'),
            (r'Cap[íi\?]+tulo 3\s*(?:&mdash;|—|-)\s*La r[ée\?]+plica de Beller, tres horas despu[ée\?]+s', 'Réplica de Beller desde la clínica: "no soy testaferro, fui emboscada"'),
            (r'Cap[íi\?]+tulo 4\s*(?:&mdash;|—|-)\s*Qu[ée\?]+ hay en juego ahora', 'En juego: credibilidad presidencial, investigación fiscal y coalición'),
            (r'Cap[íi\?]+tulo 5\s*(?:&mdash;|—|-)\s*Lo que sigue', 'Próximos pasos: citación fiscal, comisión legislativa y plazo de 72 horas')
        ],
        'en_h2': [
            (r'Chapter 1\s*(?:&mdash;|—|-)\s*What Paz said August 26, line by line', 'Paz\'s address: three key verbatim statements'),
            (r'Chapter 2\s*(?:&mdash;|—|-)\s*Why those words set off the crisis', 'Why mentioning Cerimedo-Beller ignited the political crisis'),
            (r'Chapter 3\s*(?:&mdash;|—|-)\s*Beller\'s answer, three hours later', 'Beller\'s rebuttal from clinic: "I am no front-woman, I was ambushed"'),
            (r'Chapter 4\s*(?:&mdash;|—|-)\s*What is at stake now', 'At stake: presidential credibility, fiscal investigation and coalition'),
            (r'Chapter 5\s*(?:&mdash;|—|-)\s*What comes next', 'Next steps: prosecutor summons, legislative committee and 72-hour deadline')
        ]
    },
    '1134': {
        'es_h2': [
            (r'Cap[íi\?]+tulo 1\s*(?:&mdash;|—|-)\s*La asamblea c[íi\?]+vica y el malestar productivo', 'Asamblea cívica de Santa Cruz: agro, transporte y juntas vecinales'),
            (r'Cap[íi\?]+tulo 2\s*(?:&mdash;|—|-)\s*Citas directas y advertencia de paro', 'Advertencia de paro: "tolerancia agotada" — Fernando Larach'),
            (r'Cap[íi\?]+tulo 3\s*(?:&mdash;|—|-)\s*Escenarios ante la falta de di[áa\?]+logo', 'Escenarios: diálogo en 72 horas o escalada a bloqueos nacionales')
        ],
        'en_h2': [
            (r'Chapter 1\s*(?:&mdash;|—|-)\s*The civic assembly and productive discontent', 'Santa Cruz civic assembly: agriculture, transport and neighborhood boards'),
            (r'Chapter 2\s*(?:&mdash;|—|-)\s*Direct quotes and strike warning', 'Strike warning: "tolerance exhausted" — Fernando Larach'),
            (r'Chapter 3\s*(?:&mdash;|—|-)\s*Scenarios in the absence of dialogue', 'Scenarios: 72-hour dialogue or escalation to nationwide blockades')
        ]
    }
}

print("Basic setup validated.")
