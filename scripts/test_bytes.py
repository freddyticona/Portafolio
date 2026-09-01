import pathlib
p = pathlib.Path('src/translations.ts')
data = p.read_bytes()
# Find a specific double-encoded segment: Camarógrafo
# Correct bytes for Camarógrafo: Camar + C3 B3 + grafo
# Double-encoded bytes: C3 83 C2 B3
# Find that pattern
needle_double = "Camarógrafo".encode('utf-8')  # correct
print("correct needle", [hex(b) for b in needle_double])
# Search for double-encoded version
double = "Camarógrafo".encode('utf-8').decode('latin1').encode('utf-8')
print("double needle", [hex(b) for b in double])
idx = data.find(double)
print("double found at", idx)
if idx!=-1:
    print(data[idx-10:idx+30])
    # decode that slice as utf-8 to see mojibake
    print(data[idx:idx+20].decode('utf-8'))
    # try fix: decode double bytes as utf-8 -> mojibake string, then encode latin1 -> bytes, decode utf-8
    mojibake = data[idx:idx+20].decode('utf-8')
    print(repr(mojibake[:10]))
    fixed = mojibake.encode('latin1').decode('utf-8')
    print(repr(fixed[:10]))
    print("fixed bytes", [hex(b) for b in fixed.encode('utf-8')[:10]])

# Also test for Introducción
needle = "Introducción".encode('utf-8')
double2 = needle.decode('latin1').encode('utf-8')
print("double Introducción", [hex(b) for b in double2])
idx2 = data.find(double2)
print("found Introducción double at", idx2)
if idx2!=-1:
    print(data[idx2:idx2+30].decode('utf-8', errors='replace')[:30])
    mojibake2 = data[idx2:idx2+30].decode('utf-8')
    print(repr(mojibake2[:15]))
    try:
        fixed2 = mojibake2.encode('latin1').decode('utf-8')
        print(repr(fixed2[:15]))
    except Exception as e:
        print(e)
