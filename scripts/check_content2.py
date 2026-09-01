import re

d = open('src/translations.ts', encoding='utf-8').read()

# Check content quality of articles 1106-1110 (Aug 25 sample)
for aid in ['1106','1107','1110']:
    m = re.search(r"id: .\'\' + aid + \'\'.*?contentEs: .\x60([^\x60]{0,300})\x60", d, re.DOTALL)
    if m:
        content = m.group(1)
        # Check for generic phrases from the prompt prohibition
        generic_phrases = [
            "en un fascinante mundo de",
            "en resumen,",
            "sin duda alguna",
            "es un hito histórico"
        ]
        has_generic = any(g in content for g in generic_phrases)
        # Check for specific elements from the prompt
        has_h2 = '<h2' in content or '##' in content
        has_bullets = '<li' in content or '<ul' in content
        has_expert_quote = 'expert-quote' in content or ('<blockquote' in content)
        has_conclusion = '<h2>Conclusi' in content or 'Conclusi' in content
        has_photo_credit = 'Fuente:' in content
        
        print(f'{aid}: generic={has_generic}, h2={has_h2}, bullets={has_bullets}, expert={has_expert_quote}, conclusion={has_conclusion}, credit={has_photo_credit}')
        print(f'  Content excerpt: {content[:120]}...')
    else:
        print(f'{aid}: NOT FOUND')