import pathlib

p = pathlib.Path('src/translations.ts')
raw = p.read_bytes()
# Try to decode as utf-8
text = raw.decode('utf-8')

lines = text.splitlines()
fixed = []
changed = 0
for line in lines:
    # If line contains mojibake markers like Ã or â, try to fix via latin1->utf8
    if "\u00c3" in line or "\u00e2" in line:
        try:
            candidate = line.encode('latin1').decode('utf-8')
            # candidate should have fewer Ã and more correct accents, and not introduce �
            if candidate.count("Ã") < line.count("Ã") and "\ufffd" not in candidate:
                # also check that candidate contains expected correct chars
                fixed.append(candidate)
                changed += 1
                continue
        except Exception as e:
            pass
    fixed.append(line)

text2 = "\n".join(fixed)
print(f"fixed {changed} lines via double-decode")

# Now fix � patterns
replacements = {
    "a\ufffdos": "años",
    "A\ufffdos": "Años",
    "a\ufffdo": "año",
    "A\ufffdo": "Año",
    "ni\ufffdos": "niños",
    "se\ufffdal": "señal",
    "compa\ufffd\ufffdia": "compañía",
}

for bad, good in replacements.items():
    if bad in text2:
        c = text2.count(bad)
        text2 = text2.replace(bad, good)
        print(f"fixed {repr(bad)} -> {good} x{c}")

# Any remaining � -> ñ (most likely)
if "\ufffd" in text2:
    c = text2.count("\ufffd")
    print(f"remaining � {c}, replacing with ñ where context else removing")
    # Replace isolated � with ñ
    text2 = text2.replace("\ufffd", "ñ")
    print(f"replaced remaining")

print("Introducción count", text2.count("Introducción"))
print("Desarrollo — count", text2.count("Desarrollo —"))
# Check first hero title
import re
m = re.search(r"Camarógrafo", text2)
print("Camarógrafo found", bool(m))

p.write_text(text2, encoding='utf-8')
print("wrote clean fix")

# Verify no double-encoding remains for new articles
# Check for the specific potosi article
if "Introducción — Senamhi" in text2:
    print("potosi fix OK")
else:
    # search for mojibake still
    if "Introducci" in text2:
        idx = text2.find("Introducci")
        print(repr(text2[idx:idx+80]))
