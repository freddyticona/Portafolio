import io, re

TS_PATH = r'src/translations.ts'

with io.open(TS_PATH, 'r', encoding='utf-8') as f:
    src = f.read()

for aid in ['1121', '1131', '1132', '1133']:
    pattern = re.compile(r"\{\s*\n    id: '%s',.*?\n  \}," % re.escape(aid), re.DOTALL)
    m = pattern.search(src)
    if not m:
        print(f"{aid}: NOT FOUND")
        continue
    block = m.group(0)
    
    # Count remaining "Capítulo" and "Chapter"
    cap_es = len(re.findall(r'Cap[íi\?]+tulo\s*\d+', block))
    cap_en = len(re.findall(r'Chapter\s*\d+', block))
    
    # List all h2 headings
    h2s = re.findall(r'<h2[^>]*>(.*?)</h2>', block)
    
    print(f"\n=== Article {aid} ===")
    print(f"Remaining 'Capítulo N': {cap_es}")
    print(f"Remaining 'Chapter N': {cap_en}")
    print(f"Total h2 tags found: {len(h2s)}")
    for h in h2s:
        print(f"  - {h.strip()[:70]}")