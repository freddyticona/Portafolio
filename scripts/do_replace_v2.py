import pathlib, io, re
BASE = pathlib.Path(r"C:\Users\Asus\Downloads\portafolio cv studio")
TS = BASE / "src/translations.ts"
fix = BASE / "scripts/_fix1133_v2.ts"
with io.open(fix, 'r', encoding='utf-8') as f:
    new_block = f.read().strip()
with io.open(TS, 'r', encoding='utf-8') as f:
    src = f.read()
pat = re.compile(r"\{\s*\n    id: '1133',.*?\n  \},", re.DOTALL)
m = pat.search(src)
if not m:
    raise SystemExit("1133 not found")
old = m.group(0)
src = src[:m.start()] + new_block + src[m.end():]
with io.open(TS, 'w', encoding='utf-8') as f:
    f.write(src)
print(f"replaced 1133 old {len(old)} new {len(new_block)}")
