import io, re
p = 'dist/messi-adios-seleccion/index.html'
s = io.open(p, encoding='utf-8', errors='replace').read()
t = re.search(r'<title>(.*?)</title>', s)
d = re.search(r'name="description" content="(.*?)"', s)
c = re.search(r'rel="canonical" href="(.*?)"', s)
print('TITLE:', t.group(1) if t else 'NONE')
print('DESC:', (d.group(1)[:90] if d else 'NONE'))
print('CANONICAL:', c.group(1) if c else 'NONE')
print('has care/letter marker:', 'Gracias, Lionel' in s or 'adios' in s.lower() or 'dios' in s.lower())