import pathlib
p = pathlib.Path('src/translations.ts')
data = p.read_bytes()
idx = data.find("Introducci".encode('utf-8'))
# find first occurrence of mojibake pattern
# search for the mojibake sequence for ó
needle = "Ã³".encode('utf-8')  # this is C3 83 C2 B3
print("needle Ã³ bytes", [hex(b) for b in needle])
idx = data.find(needle)
print("first Ã³ at", idx)
if idx!=-1:
    print(data[idx-10:idx+30])
    print([hex(b) for b in data[idx-2:idx+10]])
else:
    print("no Ã³ found, try correct ó")
    needle2 = "ó".encode('utf-8')
    print([hex(b) for b in needle2])
    idx2 = data.find(needle2)
    print("first ó at", idx2)
    if idx2!=-1:
        print(data[idx2-10:idx2+30][:50])
