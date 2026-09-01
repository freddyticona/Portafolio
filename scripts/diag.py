s = '\u00e2\u2020\u2019'  # â†’
fixed = s.encode('latin1').decode('utf-8')
print('latin1 fix:', repr(fixed), fixed.encode('utf-8').hex())
try:
    fixed2 = s.encode('cp1252').decode('utf-8')
    print('cp1252 fix:', repr(fixed2), fixed2.encode('utf-8').hex())
except Exception as e:
    print('cp1252 fail', e)

# Now the full text-context patterns we see in file
samples = [
    'a Word\r\nâ†’Bloque',          # the backslash + ` pattern in source
    'tos.gob.bo â€\x99',            # source-citation: gov.bo â€\x99
    'stos.gob.bo â†’',
]
for s in samples:
    print(repr(s), s.encode('utf-8', errors='replace').hex())
