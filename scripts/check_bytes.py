import pathlib
p = pathlib.Path('src/translations.ts')
data = p.read_bytes()
# Correct bytes for "Introducción"
correct = "Introducción".encode('utf-8')
print("correct bytes", [hex(b) for b in correct])
print("count correct", data.count(correct))
# Double bytes
double = "Introducción".encode('utf-8').decode('latin1').encode('utf-8') if False else None
# Actually double = correct bytes interpreted as cp1252 then re-encoded as utf-8
# Compute double as: correct bytes -> decode as cp1252 -> string mojibake -> encode as utf-8
mojibake = correct.decode('latin1') if False else correct.decode('cp1252', errors='replace')
# Let's compute correctly: original bytes C3 B3 for ó, interpret as cp1252 characters C3->Ã, B3->³, then encode those chars as utf-8 -> C3 83 C2 B3
# So double bytes = "Introducción".encode('utf-8').decode('cp1252').encode('utf-8')? Let's try
try:
    double_bytes = "Introducción".encode('utf-8').decode('cp1252').encode('utf-8')
    print("double bytes", [hex(b) for b in double_bytes[:20]])
    print("count double", data.count(double_bytes))
except Exception as e:
    print(e)

# Also check for em dash
correct_dash = "—".encode('utf-8')
print("dash correct", [hex(b) for b in correct_dash])
print("dash count correct", data.count(correct_dash))
try:
    double_dash = "—".encode('utf-8').decode('cp1252').encode('utf-8')
    print("dash double", [hex(b) for b in double_dash])
    print("dash double count", data.count(double_dash))
except Exception as e:
    print(e)
