import pathlib

p = pathlib.Path('src/translations.ts')
data = p.read_bytes()
text = data.decode('utf-8')
has_bom = text.startswith('\ufeff')
if has_bom:
    text = text[1:]

# Try latin1
try:
    fixed = text.encode('latin1', errors='replace').decode('utf-8', errors='replace')
    print("latin1 global succeeded")
    print("correct Introducción", fixed.count("Introducción"))
    print("mojibake Ã count", fixed.count("Ã"))
    print("dash — count", fixed.count("—"))
    # Check for �
    print("� count", fixed.count("�"))
    pathlib.Path('src/translations_fixed2.ts').write_text(('\ufeff' if has_bom else '') + fixed, encoding='utf-8')
    print("wrote fixed2")
except Exception as e:
    print(e)
