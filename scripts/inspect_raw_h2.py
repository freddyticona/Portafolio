import io, re

TS_PATH = r'src/translations.ts'

with io.open(TS_PATH, 'r', encoding='utf-8') as f:
    src = f.read()

for aid in ['1121', '1132']:
    pattern = re.compile(r"\{\s*\n    id: '%s',.*?\n  \}," % re.escape(aid), re.DOTALL)
    m = pattern.search(src)
    block = m.group(0)
    
    print(f"\n=== Article {aid}: raw h2 tags (repr) ===")
    # Find all h2 tags with their full raw content
    for h2m in re.finditer(r'<h2[^>]*>.*?</h2>', block):
        raw = h2m.group(0)
        print(repr(raw[:120]))
        print("---")