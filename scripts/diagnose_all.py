import re

d = open('src/translations.ts', encoding='utf-8').read()

# Lista de IDs de artículos del 25 al 28 de agosto
# Aug 25: 1106-1130 (25 artículos, pero muchos se repiten en IDs)
# Aug 26: 1, 1131-1133 (Caso Cerimedo)
# Aug 27: 1154-1163 (10 artículos nuevos)
# Aug 28: Algunos artículos en el feed

# Primero, voy a identificar todos los artículos con fecha 2026-08-25, 26, 27
# y extraer sus metadatos y contenido para analizarlos

articulos_a_revisar = []

# Buscar artículos con fechas 2026-08-25
for aid in range(1106, 1131):  # IDs 1106-1130 son del 25 ago
    m = re.search(r"id: .\'\' + aid + \'\'", d)
    # Usar patrón más flexible
    pattern = r"\{.*?id: .\'\' + str(aid) + \'\',.*?\n  \}"
    # Actually let's use a simpler approach - just check if date matches
    pass

# Mejor enfoque: obtener todos los articles con su fecha y contenido
# y filtrar por fecha

# Voy a leer el archivo y extraer información clave de cada artículo
# Para agilizar, voy a revisar una muestra representativa y luego aplicar los patrones detectados

# Artículo 1134 (referencia de calidad) - ya tiene buen contenido
# Voy a extraer sus secciones para entender el patrón

print("=== ANÁLISIS DE ESTRUCTURA ARTÍCULO 1134 ===")
# Extraer contentEs
content_es_match = re.search(r'contentEs: .\x60([^\x60]{2000})\x60', d)
if content_es_match:
    content = content_es_match.group(1)
    # Contar subtítulos
    capitulos = re.findall(r'<h2 class=.report-chapter[^>]*>([^<]+)</h2>', content)
    bloques_quote = re.findall(r'<blockquote>', content)
    stat_grid = 'stat-grid' in content
    tweet_card = 'tweet-card' in content
    expert_quote = 'expert-quote' in content
    print(f"  H2 (Capítulos): {capitulos}")
    print(f"  Bloques quote: {len(bloques_quote)}")
    print(f"  Stat-grid: {stat_grid}")
    print(f"  Tweet-card: {tweet_card}")
    print(f"  Expert-quote: {expert_quote}")
    print(f"  Longitud contenido: {len(content)} chars")

# Ahora revisar artículos 1154-1163 (27 ago) que creé recientemente
print("\n=== VERIFICACIÓN ARTÍCULOS 1154-1163 ===")
for aid in ['1154', '1155', '1156', '1157', '1158', '1159', '1160', '1161', '1162', '1163']:
    pattern = r"id: .\'\' + aid + \'\'.*?contentEs: .\x60([^\x60]{0,200})\x60"
    m = re.search(pattern, d, re.DOTALL)
    if m:
        content_preview = m.group(1)
        # Verificar elementos clave
        has_h2 = '<h2' in content_preview[:500]
        has_bullets = '<li' in content_preview[:500]
        has_expert = 'expert-quote' in content_preview[:500]
        has_stat = 'stat-grid' in content_preview[:500]
        has_conclusion = 'Conclusi' in content_preview[:500]
        print(f'{aid}: h2={has_h2}, bullets={has_bullets}, expert={has_expert}, stat={has_stat}, conclusion={has_conclusion}')
    else:
        print(f'{aid}: NOT FOUND')

print("\n=== LISTADO DE ARTÍCULOS POR FECHA ===")
# Contar artículos por fecha usando el patrón de date
for fecha in ['2026-08-25', '2026-08-26', '2026-08-27', '2026-08-28']:
    pattern = r"date: .\'\' + fecha
    # Usar expresión más flexible
    count = len(re.findall(r"id: .\'\'.*?date: .\'\' + fecha", d, re.DOTALL))
    print(f'{fecha}: {count} artículos')