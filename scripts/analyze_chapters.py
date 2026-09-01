import re

# Read the file
with open('src/translations.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to find article blocks with "Capítulo" in h2
chapter_pattern = r'<h2 class="report-chapter"[^>]*>([^<]+)</h2>'
chapters_found = re.findall(chapter_pattern, content)
print(f"Total h2.report-chapter found: {len(chapters_found)}")

# Show some examples
for i, ch in enumerate(chapters_found[:10]):
    print(f"  {i+1}. '{ch}'")

# Now let's find which articles have this pattern
# Search for id + chapter combination
sample_articles = re.findall(r"\{.*?id: .\d+\'.*?contentEs: .\x60.*?\x60.*?\n  \},", content, re.DOTALL)
print(f"\nSample article blocks: {len(sample_articles)}")

# Check first few for "Capitulo"
for i, art in enumerate(sample_articles[:5]):
    has_cap = 'Capitulo' in art or 'Capítulo' in art
    print(f"Artículo muestra {i+1}: tiene 'Capitulo' = {has_cap}")