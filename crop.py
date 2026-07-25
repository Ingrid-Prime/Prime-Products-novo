from PIL import Image
import sys

img_path = 'public/images/solucoes-integradas/instrumentacao-medicao/prod-valvulas.png'
img = Image.open(img_path)
width, height = img.size

# Crop 6% from left, 6% from right, 6% from bottom, 2% from top
left = width * 0.06
top = height * 0.02
right = width * 0.94
bottom = height * 0.94

img_cropped = img.crop((left, top, right, bottom))
img_cropped.save(img_path)
print("Cropped successfully")
