import io, re
s = io.open('src/translations.ts', encoding='utf-8').read()
i = s.find("id: '1163'")
# find the block start (opening brace before id) and end
start = s.rfind('{', 0, i)
# find closing: '},' after content
# find the fields
print(s[i:i+1200])