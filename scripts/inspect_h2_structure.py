import io, re, json

with io.open('src/translations.ts', 'r', encoding='utf-8') as f:
    src = f.read()

with io.open('scripts/chapter_proposals.json', 'r', encoding='utf-8') as f:
    proposals = json.load(f)

# Let's inspect a few articles to see how contentEs and contentEn are structured
for aid in ['1121', '1132', '1135', '1155']:
    pattern = re.compile(r"\{\s*\n    id: '%s',.*?\n  \}," % re.escape(aid), re.DOTALL)
    m = pattern.search(src)
    if m:
        block = m.group(0)
        # Find all h2 in contentEs and contentEn
        h2_es = re.findall(r'<h2[^>]*>(.*?)</h2>', block)
        print(f"=== Article {aid} ===")
        print(f"Total H2s: {len(h2_es)}")
        for h in h2_es:
            print(f"  H2: {h}")
