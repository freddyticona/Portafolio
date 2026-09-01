import io, re
s = io.open('src/translations.ts', encoding='utf-8').read()
ids = [int(x) for x in re.findall(r"id: '(\d+)'", s)]
print('max id now:', max(ids))
print('1164-1171 present:', all(str(x) in [str(i) for i in ids] for x in range(1164, 1172)))
print('publishedAt count:', s.count('publishedAt:'))
print('dateModified count:', s.count('dateModified:'))
# check no stray "Fuente: Fuente:"
print('Fuente: Fuente: count:', s.count('Fuente: Fuente:'))
print('Source: Source: count:', s.count('Source: Source:'))
# verify the new articles don't contain "Capítulo"
print('Capítulo in new range check (should be 0 in inserted blocks):')
for x in range(1164, 1172):
    i = s.find("id: '%d'" % x)
    seg = s[i:i+2000]
    print(' ', x, 'Capítulo' ,'Capítulo' in seg)