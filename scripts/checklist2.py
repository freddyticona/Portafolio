import re

d = open('src/translations.ts', encoding='utf-8').read()

articulos = ['1154','1155','1156','1157','1158','1159','1161','1162','1163']

for aid in articulos:
    # Buscar el article block - pattern simple
    pattern = '{.*?id: ' + aid + r',.*?\n  },'
    m = re.search(pattern, d, re.DOTALL)
    if not m:
        # Try con comillas simples escapeadas
        pattern = "{.*?id: '%s',.*?\n  }," % aid
        m = re.search(pattern, d, re.DOTALL)
    
    if m:
        block = m.group(0)
        # Extraer contentEs
        ce_match = re.search(r'contentEs: .\x60([^\x60]{0,500})\x60', block)
        content = ce_match.group(1) if ce_match else ''
        
        # Extraer titulo y excerpt
        titular_m = re.search(r"titleEs: .\x60([^\x60]+)\x60", block)
        excerpt_m = re.search(r'excerptEs: .\x60([^\x60]+)\x60', block)
        titular = titular_m.group(1) if titular_m else ''
        excerpt = excerpt_m.group(1) if excerpt_m else ''
        
        # Q2: Subtitulos sin "Capitulo"
        h2s = re.findall(r'<h2[^>]*>([^<]+)</h2>', content)
        
        # Q3: Cifras en prose
        has_numbers_prose = bool(re.search(r'<p>[^<]*\d+[^<]*</p>', content[:200]))
        
        # Q5: Fuentes sin [REU]
        has_placeholder = '[REU]' in content or '[REU]' in block
        
        # Q5b: Sin fill
        has_fill = 'condiciones climticas adversas' in content.lower() or 'comunidad internacional' in content.lower()
        
        # Q7: Primeros parrafos
        first_p = re.findall(r'<p>([^<]+</p>', content[:300])
        
        print(aid, end=': ')
        print('Q1 S1=' + ('S' if not (titular and excerpt and 'mismo' in (titular+excerpt).lower() and len(titular)>10 and len(excerpt)>10) else 'NO'), end=' ')
        print('Q2=' + ('S' if not any('Capitulo' in h for h in h2s) else 'NO'), end=' ')
        print('Q3=' + ('S' if has_numbers_prose else 'NO'), end=' ')
        print('Q5=' + ('S' if not has_placeholder else 'NO'), end=' ')
        print('Q5b=' + ('S' if not has_fill else 'NO'), end=' ')
        print('Q7=' + ('S' if len(first_p) >= 2 else 'NO'))
    else:
        print(aid, ': NOT FOUND')