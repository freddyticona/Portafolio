import re
d = open('src/translations.ts', encoding='utf-8').read()

# Check articles 1106-1133 for contentEs/contentEn presence and image variety
for aid in range(1106, 1134):
    aid_str = str(aid)
    m = re.search(r"id: '%s'.*?(?=\n  \{|\n  \])" % aid_str, d, re.DOTALL)
    if not m:
        continue
    block = m.group(0)
    has_content_es = 'contentEs:' in block
    has_content_en = 'contentEn:' in block
    img = re.search(r"imageUrl: '([^']+)'", block)
    img_path = img.group(1) if img else 'MISSING'
    date = re.search(r"date: '([^']+)'", block)
    date_str = date.group(1) if date else 'MISSING'
    title = re.search(r"titleEs: \x60([^\x60]+)\x60", block)
    title_str = title.group(1)[:60] if title else 'MISSING'
    
    status = 'OK' if has_content_es and has_content_en else 'MISSING CONTENT'
    print(f"{aid_str} | {date_str} | {status} | img={img_path.split('/')[-1][:40]}")
    print(f"  title: {title_str}")
