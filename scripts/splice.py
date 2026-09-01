import io

BASE = r'C:\Users\Asus\Downloads\portafolio cv studio'
TS = BASE + r'\src\translations.ts'
PENDS = ['_pending1.ts', '_pending2.ts', '_pending3.ts', '_pending4.ts']

with io.open(TS, 'r', encoding='utf-8') as f:
    src = f.read()

marker = '// FIN DE NOTICIAS'
assert marker in src, 'marker not found'

parts = []
for p in PENDS:
    with io.open(BASE + r'\scripts\\' + p, 'r', encoding='utf-8') as f:
        parts.append(f.read().strip())
pending = '\n'.join(parts).rstrip('\n') + '\n'

new = src.replace(marker, pending + '\n' + marker, 1)

with io.open(TS, 'w', encoding='utf-8') as f:
    f.write(new)

print('inserted', len(PENDS), 'batches; new length', len(new))
