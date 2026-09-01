import pathlib
p = pathlib.Path('src/translations.ts')
data = p.read_bytes()
# find Introducción bytes
needle = "Introducción — Senamhi".encode('utf-8')
idx = data.find(needle)
print("utf8 needle found at", idx)
if idx==-1:
    # try mojibake needle
    needle2 = "IntroducciÃ³n â€”".encode('utf-8')
    idx2 = data.find(needle2)
    print("mojibake needle found at", idx2)
    # also try replacement char
    needle3 = "Introducci�n".encode('utf-8', errors='replace')
    print("replacement try", needle3)
else:
    print(data[idx-20:idx+40])
    print([hex(b) for b in data[idx:idx+20]])

# also check for Año vs A�o
import re
text = p.read_text(encoding='utf-8')
print("count Año", text.count("Año"))
print("count A�o", text.count("A�o"))
print("count Introducción —", text.count("Introducción —"))
print("count Introducci", text.count("Introducci"))
# find a problematic line
for line in text.splitlines():
    if "Potosi" in line or "potosi" in line.lower() or "1134" in line:
        pass
# find around id 1140
import re
m = re.search(r"id: '1140'.*?(Introducci.{0,100})", text, re.DOTALL)
if m:
    print(repr(m.group(1)[:120]))
