import re

d = open('src/translations.ts', encoding='utf-8').read()

# Count articles by date using a simpler pattern
# Pattern: id: 'xxx' followed by date: '2026-08-xx'
articles_by_date = {}

# Find all article IDs with dates
all_ids = re.findall(r"id: '(\d+)'", d)
print(f"Total IDs found: {len(all_ids)}")

# For each ID, try to find its date
for aid in all_ids[:50]:  # First 50 to test pattern
    # Look for date after the id pattern
    pattern = rf"id: .\'\'{aid}\'.*?date: .\'\'([^\']+)\'\'"
    m = re.search(pattern, d, re.DOTALL)
    if m:
        date = m.group(1)
        if date not in articles_by_date:
            articles_by_date[date] = []
        articles_by_date[date].append(aid)

print("Artículos por fecha (muestra):")
for date, ids in sorted(articles_by_date.items())[:10]:
    print(f"  {date}: {len(ids)} artículos -> {ids[:5]}...")

# Check if we have articles for Aug 25-28
for date in ['2026-08-25', '2026-08-26', '2026-08-27', '2026-08-28']:
    if date in articles_by_date:
        print(f"\n{date}: {len(articles_by_date[date])} artículos -> {articles_by_date[date][:3]}...")
    else:
        print(f"\n{date}: 0 artículos encontrados")