import io, re

TS_PATH = r'src/translations.ts'

with io.open(TS_PATH, 'r', encoding='utf-8') as f:
    src = f.read()

for aid in ['1140', '1144', '1149']:
    pattern = re.compile(r"\{\s*\n    id: '%s',.*?\n  \}," % re.escape(aid), re.DOTALL)
    m = pattern.search(src)
    block = m.group(0)
    
    print(f"=== Article {aid} ===")
    # Search for filler patterns
    for phrase in ['comunidad internacional', 'condiciones climáticas adversas', 'condiciones adversas', 'international community', 'adverse weather']:
        if phrase in block:
            # Find context
            idx = block.find(phrase)
            context = block[max(0,idx-80):idx+80]
            print(f"  FOUND '{phrase}': ...{context}...")
    
    # Also check sourceUrl for generic homepage patterns
    sourceurl_m = re.search(r"sourceUrl:\s*`?([^,\n]+)`?", block)
    if sourceurl_m:
        print(f"  sourceUrl: {sourceurl_m.group(1)}")