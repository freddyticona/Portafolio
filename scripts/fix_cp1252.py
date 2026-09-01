import pathlib

p = pathlib.Path('src/translations.ts')
data = p.read_bytes()
# Try to decode as utf-8 to get mojibake string, then fix
text = data.decode('utf-8')

# Try cp1252 fix for entire file
try:
    fixed = text.encode('cp1252').decode('utf-8')
    print("cp1252 fix succeeded, len", len(fixed))
    # Check if fixed contains correct characters
    print("Camarógrafo in fixed", "Camarógrafo" in fixed)
    print("Introducción — in fixed", "Introducción —" in fixed)
    print("Desarrollo — in fixed", "Desarrollo —" in fixed)
    # Write to test file
    pathlib.Path('src/translations_fixed.ts').write_text(fixed, encoding='utf-8')
    print("wrote fixed")
except Exception as e:
    print("cp1252 fix failed", e)
    # Try latin1
    try:
        fixed2 = text.encode('latin1').decode('utf-8')
        print("latin1 fix succeeded")
        print("Camarógrafo in fixed2", "Camarógrafo" in fixed2)
    except Exception as e2:
        print("latin1 also failed", e2)
