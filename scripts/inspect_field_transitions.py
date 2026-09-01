import io, re

TS_PATH = r'src/translations.ts'

with io.open(TS_PATH, 'r', encoding='utf-8') as f:
    src = f.read()

# Inspect exact field transitions for article 1135
pattern = re.compile(r"\{\s*\n    id: '1135',.*?\n  \},", re.DOTALL)
m = pattern.search(src)
block = m.group(0)

# Show exact bytes around each field transition
for label in ['contentEs:', 'contentEn:']:
    idx = block.find(label)
    print(f"--- {label} ---")
    print(repr(block[idx:idx+60]))
    print()

# Find where contentEs ends (the closing backtick before contentEn)
en_pos = block.find("contentEn:")
print("bytes before contentEn:")
print(repr(block[en_pos-40:en_pos]))

# Find where contentEn ends (before imageUrl)
img_pos = block.find("imageUrl:")
print("\nbytes before imageUrl:")
print(repr(block[img_pos-40:img_pos]))

# Determine closing backtick pattern
print("\nDoes contentEs end with `,\n ?")
print(repr(block[en_pos-60:en_pos]))