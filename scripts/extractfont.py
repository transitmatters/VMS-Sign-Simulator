# this is in the order 0-9A-Za-z(colon)(space)
# for this, #000000 is off and anything else is on

from PIL import Image # package "pillow"

input_file = "vms-font-mbta.bmp"

img = Image.open(input_file)
pixels = img.load()

chars = []

for y in range(9): # just manually update this if there are more rows
    for x in range(8):
        currentchar = ""
        for b in range(16):
            for a in range(10):
                if sum(pixels[x*10+a,y*16+b]) > 0:
                    currentchar += "1"
                else:
                    currentchar += "0"
        chars.append(currentchar)


print (chars)
