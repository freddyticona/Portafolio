import re
d = open('src/translations.ts', encoding='utf-8').read()

# Find all articles with their dates and imageUrls
pattern = r"id: '(\d+)',.*?slug: '([^']+)'.*?date: '([^']+)'.*?imageUrl: '([^']+)'"
matches = re.findall(pattern, d, re.DOTALL)

# Filter for Aug 25-27
for m in matches:
    aid, slug, date, img = m
    if date in ['2026-08-25','2026-08-26','2026-08-27']:
        print(f"ID={aid} date={date} img={img}")
        print(f"  slug={slug}")
        print()
