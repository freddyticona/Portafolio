import re
d = open('src/translations.ts', encoding='utf-8').read()

# Check editorial format of articles 1106-1110 as samples
for aid in ['1106','1107','1108','1109','1110']:
    # Find the contentEs section
    m = re.search(r"id: '%s'.*?contentEs: \x60([^\x60]{0,500})" % aid, d, re.DOTALL)
    if m:
        content_preview = m.group(1)[:400]
        print(f"\n=== Article {aid} contentEs preview ===")
        print(content_preview)
        print("...")
