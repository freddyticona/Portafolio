import re
import json

with open('src/translations.ts', encoding='utf-8') as f:
    content = f.read()

# Article IDs with chapters (from previous audit)
article_ids = [
    '1121', '1131', '1132', '1133', '1134', '1135', '1136', '1137', '1138', '1139',
    '1140', '1141', '1142', '1143', '1144', '1145', '1146', '1147', '1148', '1149',
    '1150', '1151', '1152', '1153', '1154', '1155', '1156', '1157', '1158', '1159',
    '1160', '1161', '1162', '1163'
]

results = []

for aid in article_ids:
    pos = content.find(f"id: '{aid}'")
    if pos == -1:
        continue
    nxt = content.find("id: '", pos + 10)
    blk = content[pos:nxt] if nxt != -1 else content[pos:]
    lb = blk.rfind("},")
    if lb != -1:
        blk = blk[:lb+2]
    
    # Extract titleEs
    title_m = re.search(r"titleEs: .`([^`]+)`", blk)
    title = title_m.group(1) if title_m else 'N/A'
    
    # Extract excerptEs
    excerpt_m = re.search(r"excerptEs: .`([^`]+)`", blk)
    excerpt = excerpt_m.group(1) if excerpt_m else 'N/A'
    
    # Extract contentEs
    st = blk.find("contentEs: `")
    if st == -1:
        continue
    end = blk.find("`,\n    excerptEn:", st)
    if end == -1:
        end = blk.find("`,\n    contentEn:", st)
    if end == -1:
        end = blk.find("`,\n    imageUrl:", st)
    if end == -1:
        continue
    fc = blk[st+len("contentEs: `"):end]
    
    # Find all h2 with their full text
    h2s = re.findall(r'<h2[^>]*>([^<]+)</h2>', fc)
    capitulo_h2s = [(i, h) for i, h in enumerate(h2s) if 'Capítulo' in h or 'Chapter' in h or 'Cap&iacute;tulo' in h]
    
    # Extract paragraphs for context (first 2000 chars)
    paragraphs = re.findall(r'<p>([^<]+)</p>', fc[:3000])
    
    # Check components
    has_stat = 'stat-grid' in fc
    has_tweet = 'tweet-card' in fc
    has_expert = 'expert-quote' in fc
    has_figure = 'report-figure' in fc
    has_conclusion = 'Conclusi' in fc or 'conclusi' in fc.lower()
    has_reu = '[REU]' in fc
    
    # Check for filler language
    has_fill = any(p in fc.lower() for p in ['condiciones climáticas adversas', 'comunidad internacional'])
    
    results.append({
        'id': aid,
        'title': title,
        'excerpt': excerpt[:150],
        'capitulos': [{'num': i+1, 'original': re.sub(r'&[^;]+;', '', h).strip()} for i, h in capitulo_h2s],
        'paragraphs_sample': [p[:200] for p in paragraphs[:5]],
        'components': {
            'stat-grid': has_stat,
            'tweet-card': has_tweet,
            'expert-quote': has_expert,
            'report-figure': has_figure,
            'conclusion': has_conclusion
        },
        'issues': {
            'reu': has_reu,
            'filler': has_fill
        }
    })

# Save to JSON for review
with open('scripts/chapter_proposals.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

# Print summary
for r in results:
    print(f"\n=== {r['id']} ===")
    print(f"Título: {r['title'][:80]}")
    print(f"Bajada: {r['excerpt'][:100]}")
    print(f"Capítulos ({len(r['capitulos'])}):")
    for c in r['capitulos']:
        print(f"  {c['num']}. {c['original']}")
    print(f"Componentes: {r['components']}")
    print(f"Primeros párrafos:")
    for i, p in enumerate(r['paragraphs_sample'][:3]):
        print(f"  {i+1}. {p[:120]}...")