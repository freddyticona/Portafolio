import re

d = open('src/translations.ts', encoding='utf-8').read()

# Find article 1106
m = re.search(r"id: '.1106.', d)
if m:
    pos = m.start()
    print(d[pos:pos+600])
else:
    print('1106 not found')
    # Try the pattern from earlier that worked
    m2 = re.search(r"\{.*?id: '.1106.',.*?\n  \}", d, re.DOTALL)
    if m2:
        print(f'Found with pattern2, pos: {m2.start()}')
        print(d[m2.start():m2.start()+500])