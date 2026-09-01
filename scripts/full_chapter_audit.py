import re

with open('src/translations.ts', encoding='utf-8') as f:
    content = f.read()

# Find ALL article IDs in the file
all_ids = re.findall(r"id: '(\d+)'", content)
print(f"Total article IDs in file: {len(all_ids)}")

# Check each article for "Capítulo" in h2
articles_with_capitulos = []

for aid in all_ids:
    pos = content.find(f"id: '{aid}'")
    if pos == -1:
        continue
    nxt = content.find("id: '", pos + 10)
    blk = content[pos:nxt] if nxt != -1 else content[pos:]
    lb = blk.rfind("},")
    if lb != -1:
        blk = blk[:lb+2]
    
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
    
    # Find ALL h2 with "Capítulo" or "Chapter" or "Cap&iacute;tulo"
    h2s = re.findall(r'<h2[^>]*>([^<]+)</h2>', fc)
    capitulo_h2s = [h for h in h2s if 'Capítulo' in h or 'Chapter' in h or 'Cap&iacute;tulo' in h]
    
    if capitulo_h2s:
        # Also get title for context
        title_m = re.search(r"titleEs: .`([^`]+)`", blk)
        title = title_m.group(1) if title_m else 'N/A'
        
        articles_with_capitulos.append({
            'id': aid,
            'title': title[:80],
            'capitulos': capitulo_h2s
        })

print(f"\n=== ARTÍCULOS CON 'CAPÍTULO': {len(articles_with_capitulos)} ===\n")

for art in articles_with_capitulos:
    print(f"ARTÍCULO {art['id']}: {art['title']}")
    for i, cap in enumerate(art['capitulos']):
        clean = re.sub(r'&[^;]+;', '', cap).strip()
        print(f"  Capítulo {i+1}: {clean}")
    print()

# Summary
total_caps = sum(len(a['capitulos']) for a in articles_with_capitulos)
print(f"Total capítulos a convertir: {total_caps}")
print(f"Total artículos: {len(articles_with_capitulos)}")