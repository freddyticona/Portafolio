import io, re

BASE = r'C:\Users\Asus\Downloads\portafolio cv studio'
TS = BASE + r'\src\translations.ts'
FIX = {'1132': BASE + r'\scripts\_fix1132.ts', '1133': BASE + r'\scripts\_fix1133.ts'}

with io.open(TS, 'r', encoding='utf-8') as f:
    src = f.read()

for aid, fixpath in FIX.items():
    with io.open(fixpath, 'r', encoding='utf-8') as f:
        new_block = f.read().strip()
    # anchor on the id line; match from its opening brace to its own closing brace
    pattern = re.compile(r"\{\s*\n    id: '%s',.*?\n  \}," % re.escape(aid), re.DOTALL)
    m = pattern.search(src)
    if not m:
        raise SystemExit("NOT FOUND: %s" % aid)
    old = m.group(0)
    src = src[:m.start()] + new_block + src[m.end():]
    print('replaced', aid, 'old len', len(old), 'new len', len(new_block))

with io.open(TS, 'w', encoding='utf-8') as f:
    f.write(src)
print('done')
