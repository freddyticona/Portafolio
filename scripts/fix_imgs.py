import re, pathlib

TS = pathlib.Path('src/translations.ts')
src = TS.read_text(encoding='utf-8')

# Define proper image assignments for articles 1154-1163
# Using actual existing images from the blog folder
article_images = {
    "1154": "/images/blog/bolivia-agosto-2026/combustibles-filas-surtidores.jpg",  # San Pablo blockade - fuel lines
    "1155": "/images/blog/caso-nadia-beller/cerimedo-efe.jpg",  # Cerimedo allanamiento Equipetrol
    "1156": "/images/blog/bolivia-agosto-2026/rodrigo-paz-escasez-combustibles.jpg",  # Paz DS 5676
    "1157": "/images/blog/bolivia-agosto-2026/turistas-laguna-colorada-nieve.jpg",  # Senado BID - government work
    "1158": "/images/blog/santa-cruz-semana-contrastes-clima.jpg",  # Sokol - Bolivia general
    "1159": "/images/blog/bolivia-agosto-2026/nevadas-potosi-frontera-chile.jpg",  # Nepal flood - mountain
    "1160": "/images/blog/reino-unido-chagos-burnham-primer-ministro-2026.jpg",  # Norway king - royalty
    "1161": "/images/blog/migrantes-mediterraneo-muertes-aumentan-2026-omi.jpg",  # Ceuta - migrants
    "1162": "/images/blog/israel-iran-guerra-2026.jpg",  # Iran war
    "1163": "/images/blog/aranceles-eeuu-canada-50-2026.jpg",  # Trump-Lake America - US Canada
}

# Also update the imageCaption for each
image_captions = {
    "1154": "Surtidores de combustible en La Paz. Fuente: Unitel.",
    "1155": "Allanamiento en departamento de Cerimedo, Equipetrol. Fuente: Unitel.",
    "1156": "Presidente Rodrigo Paz sobre el DS 5676. Fuente: Los Tiempos.",
    "1157": "Familias en Laguna Colorada. Fuente: Gobierno de Bolivia.",
    "1158": "Paisaje boliviano. Fuente: Archivo Freddy Ticona.",
    "1159": "Riada en Nepal. Fuente: Agencia EFE.",
    "1160": "Reino de Noruega. Fuente: Casa Real Noruega.",
    "1161": "Campo de migrantes en Ceuta. Fuente: RTVE.",
    "1162": "Conflicto en Irán. Fuente: Agencia EFE.",
    "1163": "Relación comercial EE.UU.-Canadá. Fuente: BBC Mundo.",
}

# Replace each article's imageUrl and imageCaption
for aid, img_path in article_images.items():
    # Pattern to find and replace the article block - but we need to replace just the imageUrl and imageCaption within the block
    # First find the article block
    pattern = r"id: '" + aid + r"'.+?(?=\n  \{|\n  \])"
    m = re.search(pattern, src, re.DOTALL)
    if not m:
        print(f"{aid}: article block not found")
        continue
    
    block = m.group(0)
    
    # Replace imageUrl
    block = re.sub(r"imageUrl: '[^']+'", f"imageUrl: '{img_path}'", block)
    
    # Replace imageCaption
    cap = image_captions.get(aid, "Fuente: " + aid)
    block = re.sub(r"imageCaption: '[^']+'", f"imageCaption: '{cap}'", block)
    
    # Put back
    src = src[:m.start()] + block + src[m.end():]

TS.write_text(src, encoding='utf-8')
print("Updated image URLs and captions for articles 1154-1163")