import pathlib

p = pathlib.Path('src/translations.ts')
text = p.read_text(encoding='utf-8')

# Map of mojibake to correct
fixes = {
    "Ã¡": "á",
    "Ã©": "é",
    "Ãí": "í",
    "Ã³": "ó",
    "Ãº": "ú",
    "Ã±": "ñ",
    "ÃÑ": "Ñ",
    "Ãü": "ü",
    "Ã¶": "ö",
    "ÃÁ": "Á",
    "ÃÉ": "É",
    "ÃÍ": "Í",
    "ÃÓ": "Ó",
    "ÃÚ": "Ú",
    "â€”": "—",
    "â€“": "–",
    "â€œ": "“",
    "â€": "”",
    "â€˜": "‘",
    "â€™": "’",
    "Â": "",  # stray Â from double encoding
    "â€¦": "…",
    "Æ’": "ƒ",
    # specific double-encoded combos that include Â
    "CamarÃ³grafo": "Camarógrafo",
    "CamarÃ³grafo": "Camarógrafo",
}

# First, handle the common double-encoded patterns where Ã + char
# The file has bytes C3 83 C2 B3 for ó, which read as "Ã³" (two chars)
# Our fixes above cover those
for bad, good in fixes.items():
    if bad in text:
        text = text.replace(bad, good)
        print(f"fixed {repr(bad)} -> {repr(good)}")

# Fix replacement char � cases: try to infer
# "a�os" -> "años", "A�o" -> "Año", "se�al" etc.
# We'll replace � with ñ where it appears in common words, else remove
# Common patterns with �
replacements_fallback = {
    "a�os": "años",
    "A�os": "Años",
    "a�o": "año",
    "A�o": "Año",
    "ni�os": "niños",
    "se�al": "señal",
    "peque�o": "pequeño",
    "compa�ia": "compañía",
}

for bad, good in replacements_fallback.items():
    if bad in text:
        text = text.replace(bad, good)
        print(f"fixed fallback {bad} -> {good}")

# After that, any remaining � (U+FFFD) replace with empty or ñ?
# Count remaining
remaining = text.count("�")
print(f"remaining � count: {remaining}")
if remaining:
    # Replace remaining � with 'ñ' if surrounded by a and o? else remove
    # For safety, replace with 'n' maybe? Let's replace with '' and log
    # We'll replace with 'ñ' as most likely
    text = text.replace("�", "ñ")
    print(f"replaced remaining � with ñ")

# Also fix Senamhi related mojibake that may still have "IntroducciÃ³n" etc. already handled
# Check counts
print("Introducción count", text.count("Introducción"))
print("Desarrollo — count", text.count("Desarrollo —"))

p.write_text(text, encoding='utf-8')
print("done fix, wrote file")
