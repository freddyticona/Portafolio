import pathlib, re
p = pathlib.Path('src/translations.ts')
t = p.read_text(encoding='utf-8')
m = re.search(r'Introducci.{0,15}', t)
print(repr(m.group(0)) if m else 'not found')
for pat in ['Ã³','Ã¡','Ã©','Ã±','â€”','Introducci','AÃ±o','Desarrollo']:
    print(pat, t.count(pat))
# also check correct
for pat in ['Introducción','Desarrollo —','Año','Señ']:
    print(pat+" ok", t.count(pat))
