import io, re

TS_PATH = r'src/translations.ts'

with io.open(TS_PATH, 'r', encoding='utf-8') as f:
    src = f.read()

# For a specific article, extract the raw contentEs and contentEn and show their tail
for aid in ['1135', '1136']:
    pattern = re.compile(r"\{\s*\n    id: '%s',.*?\n  \}," % re.escape(aid), re.DOTALL)
    m = pattern.search(src)
    block = m.group(0)

    # Extract contentEs (between "contentEs: `" and closing backtick before "contentEn:")
    es_start = block.find("contentEs: `") + len("contentEs: `")
    es_end = block.find("contentEn: `")
    contentEs = block[es_start:es_end]
    # strip trailing backtick
    contentEs = contentEs.rstrip()
    if contentEs.endswith("`"):
        contentEs = contentEs[:-1]

    print(f"\n=== {aid} contentEs tail (last 400 chars) ===")
    print(contentEs[-400:])
    print("\n--- contains expert-quote:", 'expert-quote' in contentEs)
    print("--- contains tweet-card:", 'tweet-card' in contentEs)

    # Extract contentEn
    en_start = block.find("contentEn: `") + len("contentEn: `")
    en_end = block.find("imageUrl:")
    contentEn = block[en_start:en_end]
    contentEn = contentEn.rstrip()
    if contentEn.endswith("`"):
        contentEn = contentEn[:-1]

    print(f"\n=== {aid} contentEn tail (last 400 chars) ===")
    print(contentEn[-400:])
    print("\n--- contains expert-quote:", 'expert-quote' in contentEn)
    print("--- contains tweet-card:", 'tweet-card' in contentEn)