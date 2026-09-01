s = "Introducci\u00c3\u00b3n"  # Ã + ³
print(repr(s))
print(s.encode('latin1'))
print(s.encode('latin1').decode('utf-8'))
print(repr(s.encode('latin1').decode('utf-8')))

s2 = "Introducci\u00c3\u00b3n".replace("\u00b3", "\u00f3")  # Ã + ó (wrong)
print(repr(s2))
try:
    print(repr(s2.encode('latin1').decode('utf-8')))
except Exception as e:
    print(e)

# test em dash
s3 = "Desarrollo \u00e2\u0080\u0094"  # â + control? Actually mojibake for — is "â€”" with bytes E2 80 94 -> double encoded?
# Let's see what actual bytes in file are for —
import pathlib
p = pathlib.Path('src/translations.ts')
data = p.read_bytes()
# find "Desarrollo" bytes
idx = data.find("Desarrollo".encode('utf-8'))
print(data[idx:idx+30])
print([hex(b) for b in data[idx:idx+30]])
# decode that slice as utf-8 to see mojibake
print(data[idx:idx+30].decode('utf-8', errors='replace')[:50])
