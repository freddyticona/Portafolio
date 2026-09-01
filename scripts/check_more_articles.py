import re

with open('src/translations.ts', encoding='utf-8') as f:
    content = f.read()

def extract_full_content(aid):
    pos = content.find(f"id: '{aid}'")
    if pos == -1:
        return None
    next_id = content.find("id: '", pos + 10)
    block = content[pos:next_id]
    last_brace = block.rfind("},")
    if last_brace != -1:
        block = block[:last_brace + 2]
    
    start = block.find("contentEs: `")
    if start == -1:
        return None
    end = block.find("`,\n    excerptEn:", start)
    if end == -1:
        end = block.find("`,\n    contentEn:", start)
    if end == -1:
        end = block.find("`,\n    imageUrl:", start)
    if end == -1:
        return None
    return block[start + len("contentEs: `"):end]

# Check 1133
for aid in ['1133', '1155', '1156', '1157']:
    full_content = extract_full_content(aid)
    if full_content:
        # Check for "Capítulo" in any h2
        all_h2s = re.findall(r'<h2[^>]*>([^<]+)</h2>', full_content)
        capitulo_h2s = [h for h in all_h2s if 'Capítulo' in h or 'Chapter' in h or 'Cap&iacute;tulo' in h]
        
        print(f"\n=== ARTICULO {aid} ===")
        print(f"Content length: {len(full_content)}")
        print(f"h2 con 'Capítulo': {len(capitulo_h2s)}")
        for h in capitulo_h2s[:10]:
            print(f"  {h.strip()}")
        print(f"stat-grid: {'stat-grid' in full_content}")
        print(f"tweet-card: {'tweet-card' in full_content}")
        print(f"expert-quote: {'expert-quote' in full_content}")
        print(f"report-figure: {'report-figure' in full_content}")
        print(f"[REU]: {'[REU]' in full_content}")
        
        # First paragraphs
        paragraphs = re.findall(r'<p>([^<]+)</p>', full_content[:800])
        print(f"Primeros párrafos: {len(paragraphs)}")
        for i, p in enumerate(paragraphs[:3]):
            print(f"  {i+1}. {p[:120]}")
    else:
        print(f"\n=== ARTICULO {aid}: NO CONTENT ===")