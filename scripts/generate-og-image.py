"""Generate a 1200x630 OG image for freddydev.net"""
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os, numpy as np

BG_SRC = "public/images/behind-scenes/DSC_2994.webp"
OUTPUT = "public/og-image.jpg"
SIZE = (1200, 630)
GOLD = (212, 175, 55)
WHITE = (255, 255, 255)

def main():
    img = Image.open(BG_SRC).convert("RGB")
    img = img.resize(SIZE, Image.LANCZOS)

    # Gradient overlay using numpy
    arr = np.array(img, dtype=np.float32)
    h, w = arr.shape[:2]
    gradient = np.linspace(0.35, 0.75, h, dtype=np.float32)
    gradient = gradient[:, np.newaxis, np.newaxis]
    overlay = np.full_like(arr, 5)  # dark #050505
    arr = arr * (1 - gradient * 0.7) + overlay * (gradient * 0.7)
    arr = np.clip(arr, 0, 255).astype(np.uint8)
    img = Image.fromarray(arr, "RGB")

    draw = ImageDraw.Draw(img)
    base = "C:\\Windows\\Fonts"
    fonts = {
        "bold": ImageFont.truetype(f"{base}\\Impact.ttf", 58),
        "semi": ImageFont.truetype(f"{base}\\trebuc.ttf", 22),
        "body": ImageFont.truetype(f"{base}\\calibri.ttf", 17),
    }

    x = 70
    y = 120

    # Gold accent line
    draw.rectangle([x, y, x + 80, y + 4], fill=GOLD)

    # Name
    draw.text((x, y + 20), "FREDDY TICONA", font=fonts["bold"], fill=WHITE)
    draw.text((x, y + 85), "GUZMAN", font=fonts["bold"], fill=WHITE)

    # Title
    draw.text((x, y + 160), "CAMAROGRAFO Y REALIZADOR", font=fonts["semi"], fill=GOLD)
    draw.text((x, y + 190), "AUDIOVISUAL", font=fonts["semi"], fill=GOLD)

    # Subtitle
    draw.text((x, y + 245), "Documentales . TV . Cobertura Periodistica . Drone",
              font=fonts["body"], fill=(180, 180, 180))

    # URL at bottom-right
    url_text = "freddydev.net"
    bbox = draw.textbbox((0, 0), url_text, font=fonts["semi"])
    url_w = bbox[2] - bbox[0]
    draw.text((SIZE[0] - x - url_w, SIZE[1] - 70), url_text, font=fonts["semi"], fill=GOLD)

    img.save(OUTPUT, "JPEG", quality=85, optimize=True)
    size_kb = os.path.getsize(OUTPUT) / 1024
    print(f"[OK] OG image saved: {OUTPUT} ({img.size[0]}x{img.size[1]}, {size_kb:.1f} KB)")

if __name__ == "__main__":
    main()
