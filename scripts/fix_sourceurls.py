import io, re

TS_PATH = r'src/translations.ts'

with io.open(TS_PATH, 'r', encoding='utf-8') as f:
    src = f.read()

article_ids = [
    '1121', '1131', '1132', '1133', '1134', '1135', '1136', '1137', '1138', '1139',
    '1140', '1141', '1142', '1143', '1144', '1145', '1146', '1147', '1148', '1149',
    '1150', '1151', '1152', '1153', '1154', '1155', '1156', '1157', '1158', '1159',
    '1160', '1161', '1162', '1163'
]

# Keep specific article URLs only for these (they point to a real specific article)
KEEP_SPECIFIC = {'1121', '1131'}

blanked = 0
kept = 0

for aid in article_ids:
    pattern = re.compile(r"\{\s*\n    id: '%s',.*?\n  \}," % re.escape(aid), re.DOTALL)
    m = pattern.search(src)
    if not m:
        print(f"{aid}: not found")
        continue
    block = m.group(0)
    
    sourceurl_m = re.search(r"sourceUrl:\s*'([^']*)'", block)
    if not sourceurl_m:
        print(f"{aid}: no single-quoted sourceUrl")
        continue
    
    url = sourceurl_m.group(1)
    
    if aid in KEEP_SPECIFIC:
        kept += 1
        print(f"{aid}: KEEP specific -> {url[:60]}")
        continue
    
    # Blank the generic homepage URL
    new_block = block.replace(f"sourceUrl: '{url}'", "sourceUrl: ''")
    src = src[:m.start()] + new_block + src[m.end():]
    blanked += 1
    print(f"{aid}: blanked -> {url[:50]}")

print(f"\nBlanked: {blanked}, Kept: {kept}")

with io.open(TS_PATH, 'w', encoding='utf-8') as f:
    f.write(src)
print("Saved.")