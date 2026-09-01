import pathlib, re, json
d = pathlib.Path('src/translations.ts').read_bytes().decode('utf-8')
# find article 1140
m = re.search(r"id: '1140'.*?(?=\n  \{|$)", d, re.DOTALL)
art = m.group(0)
# extract contentEs template
m2 = re.search(r"contentEs: \x60([\s\S]*?)\x60", art)
ce = m2.group(1)
# write to a utf-8 file
pathlib.Path('scripts/potosi_extract.txt').write_text(ce, encoding='utf-8')
print('OK, wrote extract')
# count chars
print('Codepoint counts in extract:')
for ch in ['ó','á','é','í','ú','ñ','—','¿']:
    print(f'  {ch!r} count:', ce.count(ch))
print('  \ufffd count:', ce.count('\ufffd'))
print('  Ã count:', ce.count('Ã'))
print('  â count:', ce.count('â'))
