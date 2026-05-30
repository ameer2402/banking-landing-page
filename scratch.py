import sys
from PIL import Image

try:
    img = Image.open('public/images/media_5575cb3d-8568-4b5e-bc1b-234365a4d539_1780051497043.png')
    print(f"Image size: {img.size}")
except Exception as e:
    print(e)
