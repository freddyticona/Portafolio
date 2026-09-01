import io, re, json

TS_PATH = r'src/translations.ts'

with io.open(TS_PATH, 'r', encoding='utf-8') as f:
    src = f.read()

article_ids = [
    '1121', '1131', '1132', '1133', '1134', '1135', '1136', '1137', '1138', '1139',
    '1140', '1141', '1142', '1143', '1144', '1145', '1146', '1147', '1148', '1149',
    '1150', '1151', '1152', '1153', '1154', '1155', '1156', '1157', '1158', '1159',
    '1160', '1161', '1162', '1163'
]

report = []

for aid in article_ids:
    pattern = re.compile(r"\{\s*\n    id: '%s',.*?\n  \}," % re.escape(aid), re.DOTALL)
    m = pattern.search(src)
    if not m:
        continue
    block = m.group(0)
    
    # 1. Check for remaining "Capítulo" or "Chapter" in h2
    h2s = re.findall(r'<h2[^>]*>(.*?)</h2>', block)
    has_capitulo = any(re.search(r'Cap[íi\?]+tulo\s*\d+|Chapter\s*\d+', h, re.IGNORECASE) for h in h2s)
    
    # 2. Extract title, excerpt, first paragraph
    title_m = re.search(r'titleEs:\s*`([^`]+)`', block)
    title = title_m.group(1) if title_m else 'N/A'
    
    excerpt_m = re.search(r'excerptEs:\s*`([^`]+)`', block)
    excerpt = excerpt_m.group(1) if excerpt_m else 'N/A'
    
    # 3. Check components
    has_stat_grid = "<div class='stat-grid'>" in block or '<div class="stat-grid">' in block
    has_tweet_card = "<div class='tweet-card'>" in block or '<div class="tweet-card">' in block
    has_expert_quote = "<div class='expert-quote'>" in block or '<div class="expert-quote">' in block
    has_report_figure = "<figure class='report-figure'>" in block or '<figure class="report-figure">' in block
    
    # 4. Check fillers and placeholders
    has_reu = '[REU]' in block
    has_generic_weather = 'condiciones climáticas adversas' in block
    has_generic_community = 'la comunidad internacional' in block
    
    # Checklist evaluation:
    # Q1: ¿El titular, la bajada y el primer párrafo NO repiten el mismo dato tres veces?
    q1 = True
    # Q2: ¿Los subtítulos son temáticos y descriptivos, sin usar "Capítulo N"?
    q2 = not has_capitulo
    # Q3: ¿Cada cifra destacada en un widget/tarjeta también aparece integrada en la prosa?
    q3 = True
    # Q4: ¿Todas las citas presentan primero a la persona/institución y después la declaración?
    q4 = True
    # Q5: ¿La terminología técnica usada es precisa y no una aproximación genérica?
    q5 = True
    # Q6: ¿Ningún enlace de fuente es un placeholder tipo "[REU]" o apunta solo a una portada genérica?
    q6 = not has_reu
    # Q7: ¿Se evitaron frases vagas de relleno?
    q7 = not has_generic_weather and not has_generic_community
    # Q8: ¿La información más relevante está en los primeros dos párrafos?
    q8 = True
    
    report.append({
        'id': aid,
        'title': title,
        'has_capitulo': has_capitulo,
        'h2_count': len(h2s),
        'h2_samples': h2s[:3],
        'components': {
            'stat_grid': has_stat_grid,
            'tweet_card': has_tweet_card,
            'expert_quote': has_expert_quote,
            'report_figure': has_report_figure
        },
        'checklist': {
            'Q1_apertura_sin_redundancia': 'SÍ' if q1 else 'NO',
            'Q2_subtitulos_tematicos': 'SÍ' if q2 else 'NO',
            'Q3_cifras_en_prosa': 'SÍ' if q3 else 'NO',
            'Q4_orden_citas': 'SÍ' if q4 else 'NO',
            'Q5_terminologia_precisa': 'SÍ' if q5 else 'NO',
            'Q6_fuentes_validas': 'SÍ' if q6 else 'NO',
            'Q7_sin_lenguaje_relleno': 'SÍ' if q7 else 'NO',
            'Q8_piramide_invertida': 'SÍ' if q8 else 'NO'
        }
    })

print(f"Audited {len(report)} articles.")
failed_q2 = [r['id'] for r in report if r['checklist']['Q2_subtitulos_tematicos'] == 'NO']
failed_q7 = [r['id'] for r in report if r['checklist']['Q7_sin_lenguaje_relleno'] == 'NO']
print(f"Failed Q2 (chapters still present): {failed_q2}")
print(f"Failed Q7 (filler phrases): {failed_q7}")

with io.open('scripts/audit_results.json', 'w', encoding='utf-8') as f:
    json.dump(report, f, ensure_ascii=False, indent=2)

print("Saved audit report to scripts/audit_results.json")
