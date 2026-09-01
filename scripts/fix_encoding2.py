import pathlib

p = pathlib.Path('src/translations.ts')
text = p.read_text(encoding='utf-8')

fixes = {
    "\u00c3\u00a1": "\u00e1",  # Ã¡ -> á
    "\u00c3\u00a9": "\u00e9",  # Ã© -> é
    "\u00c3\u00ad": "\u00ed",  # Ãí -> í
    "\u00c3\u00b3": "\u00f3",  # Ã³ -> ó
    "\u00c3\u00ba": "\u00fa",  # Ãú -> ú
    "\u00c3\u00b1": "\u00f1",  # Ã± -> ñ
    "\u00c3\u0091": "\u00d1",  # ÃÑ -> Ñ (actually \u00c3\u0091)
    "\u00e2\u20ac\u2014": "\u2014", # â€” -> —  (E2 80 94 double encoded?)
    "\u00e2\u20ac\u201c": "\u201c", # â€œ -> “
    "\u00e2\u20ac\u009d": "\u201d", # â€ -> ”
    "\u00e2\u20ac\u2122": "\u2019", # â€™ -> ’
    "\u00c2": "", # stray Â
    "\u00e2\u20ac\u00a6": "\u2026", # â€¦ -> …
}

# More precise mojibake for em dash: bytes E2 80 94 -> when double encoded becomes C3 A2 C2 80 C2 94 -> read as "â€”" (three chars: \u00e2\u0080\u0094? Actually in utf8 double encoded, â is \u00e2, € is \u20ac? Hmm confusion)
# Simpler: handle the common visible mojibake strings as they appear in file when read as utf-8
# From hex we saw file contains C3 83 C2 B3 for ó, which reads as "\u00c3\u00b3" (Ã³) -> we already handle
# For em dash "—" (U+2014) utf8 E2 80 94 -> double encoded -> C3 A2 C2 80 C2 94 -> reads as "â€”" (\u00e2\u0080\u0094) but in python \u00e2\u20ac\u2014 etc.
# Let's handle by searching for the actual bytes pattern: read raw bytes and fix

# Alternative approach: fix by decoding double-encoding properly
# Try to fix entire text by encoding as latin1 and decoding as utf-8 where possible
# But we need to handle mixed correctly. We'll do iterative fix: while text contains "Ã" try to fix

original = text
# First, fix the double-encoded sequences by using the fixes dict above with proper unicode escapes
# Use the actual mojibake strings as they appear when file is read as utf-8 (which is "Ã³" etc)
# We need to ensure we use correct escapes for those mojibake strings

# The mojibake for "ó" is two chars: \u00c3\u00b3 (Ã + ³) ??? Wait ³ is \u00b3, not \u00b3? Actually ó is \u00f3, its utf8 C3 B3, double encoded -> C3 83 C2 B3 -> decoded as \u00c3\u00b3? Let's see: bytes C3 83 -> \u00c3, C2 B3 -> \u00b3 (which is ³). So mojibake is "Ã³" where second char is "³" (U+00B3) not "ó". But our earlier dict used \u00c3\u00b3 which is Ã + ó? Wait \u00b3 is ³, \u00f3 is ó. So need \u00c3\u00b3? Let's check: ó is \u00f3, ³ is \u00b3. Which is correct for mojibake? For ó (C3 B3), second byte B3 -> Latin1 0xB3 is "³" (superscript 3). So mojibake is "Ã³" where second char is "³", not "ó". But user snippet shows "Ã³" with ó accent, not ³. Hmm user snippet "IntroducciÃ³n" shows "ó" with accent, not "³". So maybe second byte B3 in Windows-1252 is "³" but displayed as "ó"? Confusing.

# Let's just handle both possibilities: replace both "Ã³" (\u00c3\u00b3) and "Ã³" with \u00f3? Actually \u00c3\u00b3 is Ã + ó, \u00c3\u00b3 with \u00b3 is Ã + ³. Let's handle both.

extra_fixes = {
    "\u00c3\u00b3": "\u00f3",  # Ã³ (with ó) -> ó
    "\u00c3\u00b3": "\u00f3",  # duplicate
    "\u00c3\u00a1": "\u00e1",
    "\u00c3\u00a9": "\u00e9",
    "\u00c3\u00ad": "\u00ed",
    "\u00c3\u00ba": "\u00fa",
    "\u00c3\u00b1": "\u00f1",
}

# Combine
all_fixes = {**fixes, **extra_fixes}
# Also handle "Ã³" where second char is \u00b3 (³)
all_fixes["\u00c3\u00b3".replace("\u00f3", "\u00b3")] = "\u00f3"  # Ã³ with ³ -> ó
# Actually \u00c3\u00b3 with \u00b3 is "\u00c3\u00b3" where second is \u00b3
all_fixes["\u00c3\u00b3"] = "\u00f3"  # keep
# Add for ³ variant
all_fixes["\u00c3\u00b3".replace("\u00f3", "\u00b3")] = "\u00f3"

# Simpler: just do global double-decode attempt for the whole file where possible
# Try to fix by encoding as bytes latin1 then decoding utf8 for lines that contain Ã
def try_fix(s):
    try:
        return s.encode('latin1').decode('utf-8')
    except:
        return s

# Split by lines and try to fix lines containing Ã or â
lines = text.splitlines()
fixed_lines = []
changed = 0
for line in lines:
    if "\u00c3" in line or "\u00e2" in line or "\u00c2" in line:
        candidate = try_fix(line)
        # If candidate contains fewer Ã/â and more correct accented chars, use it
        if candidate.count("\u00c3") < line.count("\u00c3") or candidate.count("Ã") < line.count("Ã"):
            # also check that candidate doesn't introduce �
            if "\ufffd" not in candidate:
                fixed_lines.append(candidate)
                changed += 1
                continue
    fixed_lines.append(line)

text2 = "\n".join(fixed_lines)
print(f"fixed {changed} lines via latin1->utf8")

# Also apply direct replacements for remaining mojibake
for bad, good in all_fixes.items():
    if bad in text2:
        cnt = text2.count(bad)
        text2 = text2.replace(bad, good)
        print(f"replaced {repr(bad)} -> {repr(good)} x{cnt}")

# Fix remaining �
if "\ufffd" in text2:
    cnt = text2.count("\ufffd")
    print(f"remaining � count {cnt}")
    # Replace patterns like a�os
    text2 = text2.replace("a\ufffdos", "años")
    text2 = text2.replace("A\ufffdos", "Años")
    text2 = text2.replace("a\ufffdo", "año")
    text2 = text2.replace("A\ufffdo", "Año")
    text2 = text2.replace("ni\ufffdos", "niños")
    text2 = text2.replace("\ufffd", "ñ")  # fallback
    print("replaced �")

print("Introducción count", text2.count("Introducción"))
print("Desarrollo — count", text2.count("Desarrollo —"))
print("Año count", text2.count("Año"))

p.write_text(text2, encoding='utf-8')
print("wrote fixed file")
