import io, re

TS_PATH = r'src/translations.ts'

with io.open(TS_PATH, 'r', encoding='utf-8') as f:
    src = f.read()

# Fix Q7 filler phrases for the 3 remaining articles with specificity
fixes = {
    '1140': [
        ('las relaciones económicas y comerciales entre el sector privado nacional y la comunidad internacional',
         'las relaciones económicas y comerciales entre el sector privado nacional y los socios de China, la Unión Europea y los mercados del Asia-Pacífico'),
        ('economic and trade relations between the national private sector and the international community',
         'economic and trade relations between the national private sector and partners from China, the European Union and the Asia-Pacific markets')
    ],
    '1144': [
        ('operan con helicópteros militares en medio de condiciones climáticas adversas',
         'operan con helicópteros militares en medio de lluvias torrenciales, nubosidad baja y riesgo de aludes en laderas inestables'),
        ('operate military helicopters amid adverse weather conditions',
         'operate military helicopters amid torrential rain, low cloud cover and the risk of landslides on unstable slopes')
    ],
    '1149': [
        ('así seguirá siendo reconocido por Canadá y la comunidad internacional',
         'así seguirá siendo reconocido por Canadá, la Comisión Mixta Internacional y los organismos de Derecho internacional'),
        ('and will continue to be recognized by Canada and the international community',
         'and will continue to be recognized by Canada, the International Joint Commission and bodies of international law')
    ]
}

count = 0
for aid, pairs in fixes.items():
    pattern = re.compile(r"\{\s*\n    id: '%s',.*?\n  \}," % re.escape(aid), re.DOTALL)
    m = pattern.search(src)
    if not m:
        print(f"Error: {aid} not found")
        continue
    block = m.group(0)
    orig = block
    for old, new in pairs:
        if old in block:
            block = block.replace(old, new)
            count += 1
    src = src[:m.start()] + block + src[m.end():]
    print(f"Fixed {aid}")

print(f"\nTotal replacements: {count}")

with io.open(TS_PATH, 'w', encoding='utf-8') as f:
    f.write(src)
print("Saved.")