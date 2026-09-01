import io, re

TS_PATH = r'src/translations.ts'

with io.open(TS_PATH, 'r', encoding='utf-8') as f:
    src = f.read()

# Show field structure of article 1135
pattern = re.compile(r"\{\s*\n    id: '1135',.*?\n  \},", re.DOTALL)
m = pattern.search(src)
block = m.group(0)

# Find field positions
fields = ['contentEs:', 'contentEn:', 'excerptEs:', 'excerptEn:', 'imageUrl:', 'imageCaption:']
for f in fields:
    pos = block.find(f)
    print(f"{f}: position {pos}")

# Count expert-quote and tweet-card in full block
print(f"\nexpert-quote total: {block.count('expert-quote')}")
print(f"tweet-card total: {block.count('tweet-card')}")

# Show a snippet around expert-quote if it exists
eq_pos = block.find('expert-quote')
if eq_pos != -1:
    print(f"\nExpert-quote context (ES or EN?):")
    # Determine if it's in ES or EN by looking backward for contentEn marker
    nearest_content = block.rfind('contentEn:', 0, eq_pos)
    print(f"  nearest contentEn before expert: position {nearest_content}")
    print(f"  expert position: {eq_pos}")
    print(f"  context: {block[eq_pos-20:eq_pos+300]}")