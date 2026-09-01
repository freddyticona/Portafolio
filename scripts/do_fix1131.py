import pathlib, io, re
BASE = pathlib.Path(r"C:\Users\Asus\Downloads\portafolio cv studio")
TS = BASE / "src/translations.ts"
fix = BASE / "scripts/_fix1131_cronologia.ts"
new_block = pathlib.Path(fix).read_text(encoding='utf-8').strip()
src = pathlib.Path(TS).read_text(encoding='utf-8')
pat = re.compile(r"\{\s*\n    id: '1131',.*?\n  \},", re.DOTALL)
m = pat.search(src)
if not m: raise SystemExit("1131 not found")
src = src[:m.start()] + new_block + src[m.end():]
pathlib.Path(TS).write_text(src, encoding='utf-8')
print(f"replaced 1131 ok len {len(new_block)}")
