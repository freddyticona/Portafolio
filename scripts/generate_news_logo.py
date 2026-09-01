from PIL import Image, ImageDraw, ImageFont
import os

W, H = 600, 60
bg = (10, 10, 10)      # #0a0a0a fondo
gold = (212, 175, 55)  # #D4AF37
white = (255, 255, 255)
dim = (150, 150, 150)

img = Image.new('RGB', (W, H), bg)
d = ImageDraw.Draw(img)

# Buscar una fuente disponible (bold)
def find_font(sizes):
    candidates = [
        "C:/Windows/Fonts/arialbd.ttf",
        "C:/Windows/Fonts/segoeuib.ttf",
        "C:/Windows/Fonts/calibrib.ttf",
        "C:/Windows/Fonts/arial.ttf",
    ]
    for c in candidates:
        if os.path.exists(c):
            return c
    return None

font_path = find_font([])
if not font_path:
    raise SystemExit("no font found")

# Texto principal "FreddyDev" en gold, "Noticias" en blanco, separador dorado
font_name = ImageFont.truetype(font_path, 26)
font_sub = ImageFont.truetype(font_path, 18)

# Box medidor a la izquierda (ícono de "noticias")
box_x0, box_y0 = 8, 14
box_x1, box_y1 = 8 + 32, 14 + 32
d.rectangle([box_x0, box_y0, box_x1, box_y1], outline=gold, width=2)
# barrita inferior del "periódico"
d.rectangle([12, 40, 36, 40], fill=gold)

# "FreddyDev" en gold
d.text((52, 16), "FreddyDev", font=font_name, fill=gold)

# medir ancho de "FreddyDev"
w_main = d.textbbox((0,0), "FreddyDev", font=font_name)[2]
x_sub = 52 + w_main + 10

# separador vertical dorado
d.rectangle([x_sub - 6, 20, x_sub - 5, 44], fill=gold)

# "Noticias" en blanco
d.text((x_sub + 6, 23), "Noticias", font=font_sub, fill=white)

# baseline / tagline sutil
# (espacio inferior ya reservado)

img.save('public/images/news-logo.png')
print("saved public/images/news-logo.png", img.size)