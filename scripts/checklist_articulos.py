import re

d = open('src/translations.ts', encoding='utf-8').read()

articulos = ['1154','1155','1156','1157','1158','1159','1160','1161','1162','1163']

for aid in articulos:
    # Buscar el article block
    pattern = r'\{.*?id: .\'\' + aid + \'\',.*?\n  \},'
    m = re.search(pattern, d, re.DOTALL)
    if not m:
        pattern = rf'id: .\'\'{aid}\'.*?\n  \},'
        m = re.search(pattern, d, re.DOTALL)
    
    if m:
        block = m.group(0)
        # Extraer contentEs
        ce_match = re.search(r'contentEs: .\x60([^\x60]{0,500})\x60', block)
        content = ce_match.group(1) if ce_match else ''
        
        # Extraer título y excerpt
        titular_m = re.search(r"titleEs: .\x60([^\x60]+)\x60", block)
        excerpt_m = re.search(r'excerptEs: .\x60([^\x60]+)\x60', block)
        titular = titular_m.group(1) if titular_m else ''
        excerpt = excerpt_m.group(1) if excerpt_m else ''
        
        # Q2: Subtítulos sin "Capítulo"
        h2s = re.findall(r'<h2[^>]*>([^<]+)</h2>', content)
        
        # Q3: Cifras en prose
        has_numbers_prose = bool(re.search(r'<p>[^<]*\d+[^<]*</p>', content[:200]))
        
        # Q5: Fuentes - sin placeholders [REU]
        has_placeholder = '[REU]' in content or '[REU]' in block
        
        # Q5b: Sin lenguaje de relleno
        has_fill = 'condiciones climáticas adversas' in content.lower() or 'comunidad internacional' in content.lower()
        
        # Q7: Primeros párrafos
        first_p = re.findall(r'<p>([^<]+</p>', content[:300])
        
        print(f'{aid}:')
        print(f'  Q1 (sin redundancia): {"SÍ" if not (titular and excerpt and "mismo" in (titular+excerpt).lower() and len(titular)>10 and len(excerpt)>10) else "NO"}')
        print(f'  Q2 (subtítulos sin Capítulo): {"SÍ" if not any("Capítulo" in h for h in h2s) else "NO"}')
        print(f'  Q3 (cifras en prose): {"SÍ" if has_numbers_prose else "NO"}')
        print(f'  Q5 (fuentes sin [REU]): {"SÍ" if not has_placeholder else "NO"}')
        print(f'  Q5b (sin fill): {"SÍ" if not has_fill else "NO"}')
        print(f'  Q7 (piramide): {"SÍ" if len(first_p) >= 2 else "NO"}')
        print()
    else:
        print(f'{aid}: NOT FOUND')