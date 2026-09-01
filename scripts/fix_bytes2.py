import pathlib

p = pathlib.Path('src/translations.ts')
data = p.read_bytes()

# All possible accented/punct chars: full Latin-1 range + punctuation
chars = [chr(c) for c in range(0xA0, 0x100)] + [
    '\u2014', '\u2013', '\u2018', '\u2019', '\u201C', '\u201D',
    '\u2026', '\u2022', '\u20AC', '\u2122', '\u00D7', '\u00F7'
]

total = 0
for ch in chars:
    correct = ch.encode('utf-8')
    candidates = []
    # cp1252-based double-encoding
    try:
        d = correct.decode('cp1252').encode('utf-8')
        candidates.append(d)
    except (UnicodeDecodeError, UnicodeEncodeError):
        pass
    # latin1-based double-encoding (covers bytes cp1252 doesn't map)
    try:
        d = correct.decode('latin1').encode('utf-8')
        candidates.append(d)
    except (UnicodeDecodeError, UnicodeEncodeError):
        pass
    # macroman-based (rare)
    try:
        d = correct.decode('mac-roman').encode('utf-8')
        candidates.append(d)
    except (UnicodeDecodeError, UnicodeEncodeError):
        pass

    for double in dict.fromkeys(candidates):  # dedupe, keep order
        if double != correct and double in data:
            n = data.count(double)
            data = data.replace(double, correct)
            print("fixed code U+%04X [%s] via %dx" % (ord(ch), ch, n))
            total += n

remaining = data.count(b'\xc3\x83')
print("total fixed now:", total)
print("remaining C3 83 sequences:", remaining)

p.write_bytes(data)

# Sanity checks
print("check:", data.count("Introducción".encode("utf-8")), "introduccion ok")
print("check:", data.count("Camarógrafo".encode("utf-8")), "camarografo ok")
assert b'\xef\xbf\xbd' not in data, "replacement char remains"
print("OK - file written")
