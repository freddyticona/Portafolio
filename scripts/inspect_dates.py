import io, re

s = io.open('src/translations.ts', encoding='utf-8').read()

dates = re.findall(r"date: '([^']*)'", s)
print("Total dates:", len(dates))
print("Unique date formats:")
from collections import Counter
c = Counter(dates)
for d, n in c.most_common(15):
    print(f"  {d!r}: {n}")

# Check article blocks with contentType news
news_ids = re.findall(r"id: '(\d+)',\s*\n\s*contentType: 'news'", s)
print(f"\nNews articles (contentType news): {len(news_ids)}")

# Check a sample news article structure - fields
# find fields present
fields = ['datePublished', 'dateModified', 'author', 'imageURL', 'imageUrl', 'source', 'sourceUrl', 'categoryEs', 'titleEs', 'excerptEs']
print("\nField presence check (first news article):")
m = re.search(r"\{\s*\n\s*id: '\d+',\s*\n\s*contentType: 'news'.{0,3000}", s, re.DOTALL)
if m:
    block = m.group(0)
    for f in fields:
        print(f"  {f}: {f in block}")