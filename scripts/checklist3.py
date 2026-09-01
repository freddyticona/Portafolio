import re

d = open('src/translations.ts', encoding='utf-8').read()

articulos = ['1154','1155','1156','1157','1158','1159','1161','1162','1163']

for aid in articulos:
    # Buscar el article block
    pattern = "{.*?id: '"+ aid + r"',.*?\n  },"
    m = re.search(pattern, d, re.DOTALL)
    if not m:
        # Try sin escape
        pattern =("{.*?id: '"+ aid + r"',.*?\n  },")
        m = re.search(pattern, d, re.DOTALL)
    
    if m:
        block = m.group(0)
        # Extraer contentEs
        ce_match = re.search(r"contentEs: .\x60([^\x60]{0,500})\x60", block)
        content = ce_match.group(1) if ce_match else ''
        
        # Extraer titulo y excerpt
        titular_m = re.search(r"titleEs: .\x60([^\x60]+)\x60", block)
        excerpt_m = re.search(r'excerptEs: .\x60([^\x60]+)\x60', block)
        titular = titular_m.group(1) if titular_m else ''
        excerpt = excerpt_m.group(1) if excerpt_m else ''
        
        # Q2: Subtitulos sin "Capitulo"
        h2s = re.findall(r'<h2[^>]*>([^<]+)</h2>', content)
        
        # Q3: Cifras en prose
        p_tag = re.search(r'<p[^>]*>[^<]*\d+[^<]*</p>', content[:200])
        has_numbers_prose = h2s is not None
        
        # Q5: Fuentes sin [REU]
        has_placeholder = '[REU]' in content or '[REU]' in block
        
        # Q5b: Sin fill
        has_fill = 'condiciones climticas adversas' in content.lower() or 'comunidad internacional' in content.lower()
        
        # Q7: Primeros parrafos - usar expresión más segura
        first_p_count = len(re.findall(r'<p>', content[:300]))
        
        print(aid, end=': ')
        # Q1: Sin redundancia
        redud = titular and excerpt and 'mismo' in (titular+excerpt).lower() and len(titular)>10 and len(excerpt)>10
        print('Q1=' + ('S' if not redud else 'NO'), end=' ')
        # Q2: Sin Capitulo
        no_cap = not any('Capitulo' in h for h in h2s)
        print('Q2=' + ('S' if no_cap else 'NO'), end=' ')
        # Q3: Cifras en prose
        print('Q3=' + ('S' if has_numbers_prose else 'NO'), end=' ')
        # Q5: Sin placeholder
        print('Q5=' + ('S' if not has_placeholder else 'NO'), end=' ')
        # Q5b: Sin fill
        print('Q5b=' + ('S' if not has_fill else 'NO'), end=' ')
        # Q7: Primeros parrafos (usar count de <p>)
        print('Q7=' + ('S' if first_p_count >= 2 else 'NO'))
    else:
        print(aid, ': NOT FOUND')