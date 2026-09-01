import re

with open('src/translations.ts', encoding='utf-8') as f:
    content = f.read()

# Extract article 1132 block
pos = content.find("id: '1132'")
next_id = content.find("id: '", pos + 10)
block = content[pos:next_id]
last_brace = block.rfind("},")
if last_brace != -1:
    block = block[:last_brace + 2]

# Extract contentEs fully
content_m = re.search(r"contentEs: .`([^`]*)`", block, re.DOTALL)
if content_m:
    full_content = content_m.group(1)
    print(f"Content length: {len(full_content)}")
    
    # Check for h2.report-chapter
    h2s = re.findall(r'<h2 class="report-chapter"[^>]*>([^<]+)</h2>', full_content)
    print(f"h2.report-chapter count: {len(h2s)}")
    for i, h2 in enumerate(h2s[:10]):
        print(f"  {i+1}. {h2.strip()}")
    
    # Check for other components
    print(f"\nstat-grid: {'stat-grid' in full_content}")
    print(f"tweet-card: {'tweet-card' in full_content}")
    print(f"expert-quote: {'expert-quote' in full_content}")
    print(f"report-figure: {'report-figure' in full_content}")
    print(f"[REU]: {'[REU]' in full_content}")
    
    # Check first few paragraphs
    paragraphs = re.findall(r'<p>([^<]+)</p>', full_content[:1000])
    print(f"\nPrimeros párrafos:")
    for i, p in enumerate(paragraphs[:5]):
        print(f"  {i+1}. {p[:150]}")
    
    # Check for "Capítulo" in any h2
    all_h2s = re.findall(r'<h2[^>]*>([^<]+)</h2>', full_content)
    capitulo_h2s = [h for h in all_h2s if 'Capítulo' in h or 'Chapter' in h]
    print(f"\nTodos los h2 con 'Capítulo': {len(capitulo_h2s)}")
    for h in capitulo_h2s[:10]:
        print(f"  {h.strip()}")
else:
    print("No contentEs found")