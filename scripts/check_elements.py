import re
d = open('src/translations.ts', encoding='utf-8').read()

# Check content of article 1106 fully
m = re.search(r"id: '1106'.*?contentEs: \x60([^\x60]+)\x60", d, re.DOTALL)
if m:
    content = m.group(1)
    print(f"Article 1106 contentEs length: {len(content)}")
    # Check for editorial elements
    elements = {
        'h1': '<h1' in content,
        'h2': '<h2' in content,
        'stat-grid': 'stat-grid' in content,
        'tweet-card': 'tweet-card' in content,
        'expert-quote': 'expert-quote' in content,
        'report-figure': 'report-figure' in content,
        'report-chapter': 'report-chapter' in content,
        'blockquote': '<blockquote' in content,
        'ul/li': '<li' in content or '<ul' in content,
        'strong': '<strong' in content,
        'em': '<em' in content,
    }
    for k, v in elements.items():
        print(f"  {k}: {'YES' if v else 'NO'}")
    
    # Show structure
    headings = re.findall(r'<h[12][^>]*>([^<]+)', content)
    print(f"\nHeadings: {headings}")
