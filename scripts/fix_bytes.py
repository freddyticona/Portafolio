import pathlib

p = pathlib.Path('src/translations.ts')
data = p.read_bytes()

# Characters to fix: common Spanish accented and punctuation
chars = ["á","é","í","ó","ú","ñ","Ñ","Á","É","Í","Ó","Ú","—","–","“","”","‘","’","…","ü","Ü","¡","¿"]

fixed = 0
for ch in chars:
    try:
        correct = ch.encode('utf-8')
        # double = correct bytes interpreted as cp1252 then re-encoded as utf-8
        mojibake = correct.decode('cp1252')
        double = mojibake.encode('utf-8')
        if double != correct and double in data:
            count = data.count(double)
            data = data.replace(double, correct)
            print(f"fixed {repr(ch)} double {double.hex()} -> correct {correct.hex()} x{count}")
            fixed += count
    except Exception as e:
        print(f"skip {repr(ch)} {e}")

# Also handle the specific case where file has replacement char � for ñ (already corrupted)
# Check for "a�os" pattern which is bytes for "años" where ñ was replaced with � (EF BF BD)
# That pattern is bytes for "a" + EF BF BD + "os"
# We can replace that specific byte sequence with correct "años" bytes
# Correct "años" bytes: 61 C3 B1 6F 73
# Corrupted "a�os" bytes: 61 EF BF BD 6F 73
if b'a\xef\xbf\xbdos' in data:
    c = data.count(b'a\xef\xbf\xbdos')
    data = data.replace(b'a\xef\xbf\xbdos', 'años'.encode('utf-8'))
    print(f"fixed a�os x{c}")

# Also check for other patterns
remaining = data.count(b'\xef\xbf\xbd')
print(f"remaining replacement bytes {remaining}")

p.write_bytes(data)
print(f"done, total fixed {fixed}")
# Verify
print("correct Introduccion", data.count("Introducción".encode('utf-8')))
print("correct dash", data.count("—".encode('utf-8')))
print("correct Camarografo", data.count("Camarógrafo".encode('utf-8')))
