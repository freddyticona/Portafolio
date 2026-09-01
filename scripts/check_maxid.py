import io, re
s = io.open('src/translations.ts', encoding='utf-8').read()
ids = [int(x) for x in re.findall(r"id: '(\d+)'", s)]
uniq = sorted(set(ids))
print('max id:', max(ids))
print('unique ids count:', len(uniq))
print('last 20 unique ids:', uniq[-20:])
# check which contentTypes exist
print('contentType news count:', s.count("contentType: 'news'"))