import pathlib

p = pathlib.Path('src/translations.ts')
data = p.read_bytes()
text = data.decode('utf-8')

# Global fix: encode mojibake as cp1252 bytes, decode as utf-8
# Need to handle BOM separately
has_bom = text.startswith('\ufeff')
if has_bom:
    text = text[1:]

# Try cp1252
try:
    fixed = text.encode('cp1252').decode('utf-8')
    print("global cp1252 fix succeeded")
    # Check counts
    print("correct Introducción", fixed.count("Introducción"))
    print("correct —", fixed.count("—"))
    print("double Introducción mojibake", fixed.count("Ã"))
    # Write to temp for verification
    pathlib.Path('src/translations_fixed_global.ts').write_text(('\ufeff' if has_bom else '') + fixed, encoding='utf-8')
    print("wrote fixed global")
except Exception as e:
    print("failed", e)
    import traceback
    traceback.print_exc()
