import re

# Read the file with utf-8 encoding
with open('src/translations.ts', encoding='utf-8') as f:
    content = f.read()

# Find all occurrences of "Capítulo" with context
# Let's find article blocks that contain "Capítulo" in h2 headings
# Pattern: look for h2.report-chapter followed by content

# Simpler approach: find all h2.report-chapter and show their text
chapter_h2s = re.findall(r'<h2 class="report-chapter"[^>]*>(.*?)</h2>', content, re.DOTALL)
print(f"Total h2.report-chapter found: {len(chapter_h2s)}")
print("\nEjemplos de subtítulos actuales:")
for i, h2 in enumerate(chapter_h2s[:15]):
    # Clean the text
    clean = re.sub(r'<[^>]+>', '', h2).strip()
    print(f"  {i+1}. '{clean}'")

# Now let's find which article IDs have these chapters
# Strategy: search for pattern id:'xxx' near the chapter h2
# This is complex, so let's take a different approach

# Let's look for article blocks that contain both id and chapter
# We'll search for 'id: ' followed later by 'Capítulo'
id_chapter_pattern = re.findall(r"id: '.+?'", content)
print(f"\nTotal id patterns found: {len(id_chapter_pattern)}")

# Show first 10 IDs
for i, id_pattern in enumerate(id_chapter_pattern[:10]):
    print(f"  {i+1}. {id_pattern}")