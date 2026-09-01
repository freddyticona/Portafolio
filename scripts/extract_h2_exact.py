import io, re

TS_PATH = r'src/translations.ts'

with io.open(TS_PATH, 'r', encoding='utf-8') as f:
    src = f.read()

for aid in ['1121', '1131', '1132', '1133']:
    pattern = re.compile(r"\{\s*\n    id: '%s',.*?\n  \}," % re.escape(aid), re.DOTALL)
    m = pattern.search(src)
    block = m.group(0)
    print(f"\n=== Article {aid} ===")
    for h2m in re.finditer(r'<h2[^>]*>.*?</h2>', block):
        print(repr(h2m.group(0)))