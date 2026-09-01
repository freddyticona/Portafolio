import re

with open('src/translations.ts', encoding='utf-8') as f:
    content = f.read()

# Find article IDs for each date
for target_date in ['2026-08-25', '2026-08-26', '2026-08-27', '2026-08-28']:
    pattern = "id: '(\\d+)'.+?date: '" + target_date + "'"
    matches = re.findall(pattern, content, re.DOTALL)
    print(f'{target_date}: {len(matches)} articles -> {matches[:20]}')

# Also find Cerimedo articles
cerimedo_pattern = "id: '(\\d+)'.+?Cerimedo"
cerimedo_matches = re.findall(cerimedo_pattern, content, re.DOTALL)
print(f'\nCerimedo articles: {cerimedo_matches}')