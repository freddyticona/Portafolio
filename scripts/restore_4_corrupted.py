import io, re

ORIG_PATH = r'scripts/translations_head_backup.ts'
TS_PATH = r'src/translations.ts'

# Load original (HEAD) and current (corrupted) files
with io.open(ORIG_PATH, 'r', encoding='utf-8') as f:
    orig = f.read()

with io.open(TS_PATH, 'r', encoding='utf-8') as f:
    cur = f.read()

AIDS = ['1121', '1131', '1132', '1133']

# Extract original blocks for these 4 articles from orig
pattern_by_id = lambda text, aid: re.compile(r"\{\s*\n    id: '%s',.*?\n  \}," % re.escape(aid), re.DOTALL)

restored = 0
for aid in AIDS:
    p = pattern_by_id(orig, aid)
    om = p.search(orig)
    pm = p.search(cur)
    if not om or not pm:
        print(f"ERROR {aid}: orig found={bool(om)}, cur found={bool(pm)}")
        continue
    orig_block = om.group(0)
    cur_block = pm.group(0)
    # Replace the current (corrupted) block with original block
    cur = cur[:pm.start()] + orig_block + cur[pm.end():]
    restored += 1
    print(f"Restored {aid}: orig_len={len(orig_block)}, cur_len={len(cur_block)}")

print(f"\nRestored {restored} articles.")

with io.open(TS_PATH, 'w', encoding='utf-8') as f:
    f.write(cur)

print("Saved restored file.")