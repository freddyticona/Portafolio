import re

d = open('src/translations.ts', encoding='utf-8').read()

# Find articles 1154-1163 and their imageUrl and imageCaption
for aid in ['1154','1155','1156','1157','1158','1159','1160','1161','1162','1163']:
    # Simpler pattern - just find the article block
    pattern = r"id: '" + aid + r"'.+?(?=\n  \{|\n  \])"
    m = re.search(pattern, d, re.DOTALL)
    if m:
        block = m.group(0)
        # Extract imageUrl
        img_m = re.search(r"imageUrl: '([^']+)'", block)
        img = img_m.group(1).split('/')[-1] if img_m else 'MISSING'
        # Extract imageCaption
        cap_m = re.search(r"imageCaption: '([^']+)'", block)
        cap = cap_m.group(1) if cap_m else 'MISSING'
        print(f'{aid}: img={img} cap={cap[:50]}')
    else:
        print(f'{aid}: NOT FOUND')