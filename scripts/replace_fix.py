import io

BASE = r'C:\Users\Asus\Downloads\portafolio cv studio'
TS = BASE + r'\src\translations.ts'
FIX = {'1132': BASE + r'\scripts\_fix1132.ts', '1133': BASE + r'\scripts\_fix1133.ts'}

with io.open(TS, 'r', encoding='utf-8') as f:
    src = f.read()

for aid, fixpath in FIX.items():
    with io.open(fixpath, 'r', encoding='utf-8') as f:
        new_block = f.read().strip()
    marker = "    id: '%s'," % aid
    idx = src.index(marker)
    start = src.rindex("  {", 0, idx)
    end_marker = "  },"
    end = src.index(end_marker, idx) + len(end_marker)
    old = src[start:end]
    src = src[:start] + new_block + src[end:]
    print('replaced', aid, 'old len', len(old), 'new len', len(new_block))

with io.open(TS, 'w', encoding='utf-8') as f:
    f.write(src)
print('done')
