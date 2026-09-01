import io, re

TS_PATH = r'src/translations.ts'

with io.open(TS_PATH, 'r', encoding='utf-8') as f:
    src = f.read()

# Fix remaining "comunidad internacional" in 1144 body text
for aid in ['1144']:
    pattern = re.compile(r"\{\s*\n    id: '%s',.*?\n  \}," % re.escape(aid), re.DOTALL)
    m = pattern.search(src)
    block = m.group(0)
    
    pairs = [
        ('solicitó auxilio urgente de la comunidad internacional en suministros médicos',
         'solicitó auxilio urgente a la India, China, Pakistán, UN OCHA y la Cruz Roja en suministros médicos'),
        ('requested urgent international assistance with medical supplies',
         'requested urgent assistance from India, China, Pakistan, UN OCHA and the Red Cross with medical supplies'),
    ]
    for old, new in pairs:
        if old in block:
            block = block.replace(old, new, 1)
            print(f"  replaced: '{old[:50]}'")
    
    src = src[:m.start()] + block + src[m.end():]

with io.open(TS_PATH, 'w', encoding='utf-8') as f:
    f.write(src)
print("done")