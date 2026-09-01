import re, os

with open('src/translations.ts', 'r', encoding='utf-8') as f:
    text = f.read()

start = text.find("export const blogPosts: BlogPost[] = [")
if start == -1:
    print("No blogPosts found")
    exit()
end = text.find("];", start)
if end == -1:
    print("No closing bracket found")
    exit()

body = text[start:end+1]

# Extract all dates
dates = re.findall(r"date:\s*'([^']+)'", body)
print(f"Total articles: {len(dates)}")

# Show unique dates sorted
unique_dates = sorted(set(dates))
print(f"\nUnique dates ({len(unique_dates)}):")
for d in unique_dates:
    print(f"  {d}")

# Count articles on or after 2026-08-27
target = '2026-08-27'
after = [d for d in dates if d >= target]
before = [d for d in dates if d < target]
print(f"\nArticles on or after {target}: {len(after)}")
print(f"Articles before {target}: {len(before)}")

# Show some dates after
print(f"\nSample articles after {target}:")
for d in after[:5]:
    # Find one article with this date
    idx = body.find(f"date': '{d}'")
    if idx != -1:
        # Get the slug
        slug_start = body.rfind("slug': '", 0, idx)
        if slug_start != -1:
            slug_start += len("slug': '")
            slug_end = body.find("'", slug_start)
            slug = body[slug_start:slug_end]
            print(f"  - {slug} (date: {d})")