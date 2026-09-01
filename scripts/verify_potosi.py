import pathlib, re
d = pathlib.Path('src/translations.ts').read_bytes().decode('utf-8')
# Find article 1140 (potosi)
m = re.search(r"id: '1140'.*?(?=\n  \{|$)", d, re.DOTALL)
if not m:
    print('not found'); raise SystemExit
art = m.group(0)
# extract contentEs template
m2 = re.search(r"contentEs: \x60([\s\S]*?)\x60", art)
if not m2: print('no content'); raise SystemExit
ce = m2.group(1)
# find Introduccion line and a few paragraphs
i = ce.find("Introducci")
print('INTRO:', repr(ce[i:i+200]))
i2 = ce.find("Desarrollo")
print('DES:', repr(ce[i2:i2+300]))
i3 = ce.find("Conclusi")
print('CONC:', repr(ce[i3:i3+200]))
# check for any remaining mojibake markers
for sig in ['Ã','â€','Â']:
    if sig in ce: print('STILL HAS', sig)
print('article length', len(ce))
