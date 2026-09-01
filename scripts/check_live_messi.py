import io, re
s = io.open(r'C:\Users\Asus\AppData\Local\Temp\opencode\live_messi.html', encoding='utf-8', errors='replace').read()
t = re.search(r'<title>(.*?)</title>', s)
c = re.search(r'rel="canonical" href="(.*?)"', s)
print('TITLE:', t.group(1) if t else 'NONE')
print('CANONICAL:', c.group(1) if c else 'NONE')
print('has care marker:', ('Gracias, Lionel' in s) or ('selecci' in s.lower()) or ('dios' in s.lower()))
# check for the letter/quotes content
print('has quote1:', 'me retiro de la Selecci' in s or 'retir' in s.lower())
print('has Messi name:', 'Messi' in s)