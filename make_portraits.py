from PIL import Image, ImageDraw, ImageFilter, ImageEnhance
import random, os, math
random.seed(20260827)
os.makedirs('/mnt/data/hmg_work/images', exist_ok=True)
W,H=700,860
skins=[(205,158,132),(180,125,105),(225,181,155),(156,105,86),(201,143,115)]
shirts=[(28,31,35),(42,45,49),(55,48,44),(30,40,45),(50,35,38)]
hairs=[(24,22,22),(42,30,25),(18,24,28),(65,46,34),(30,29,34)]
for i in range(1,11):
    rng=random.Random(1000+i)
    im=Image.new('RGB',(W,H),(8,9,11)); d=ImageDraw.Draw(im)
    # vignette / backdrop
    for y in range(H):
        shade=int(18 + 22*(1-y/H))
        d.line((0,y,W,y), fill=(shade,shade+2,shade+4))
    # vertical blinds / wall texture
    for x in range(0,W,55):
        d.rectangle((x,0,x+2,H), fill=(30,31,33))
    skin=rng.choice(skins); shirt=rng.choice(shirts); hair=rng.choice(hairs)
    cx=rng.randint(330,370); headw=rng.randint(230,270); headh=rng.randint(315,360)
    top=145+rng.randint(-12,18); left=cx-headw//2; right=cx+headw//2; bottom=top+headh
    # neck and shoulders
    d.rounded_rectangle((cx-55,bottom-5,cx+55,bottom+150), radius=28, fill=skin)
    d.ellipse((cx-245,bottom+60,cx+245,bottom+400), fill=shirt)
    # ears
    d.ellipse((left-24,top+115,left+20,top+190),fill=skin); d.ellipse((right-20,top+115,right+24,top+190),fill=skin)
    # face
    d.rounded_rectangle((left,top,right,bottom),radius=95,fill=skin)
    # hair cap
    d.pieslice((left-8,top-35,right+8,top+145),180,360,fill=hair)
    # fringe
    for k in range(7):
        x=left+20+k*(headw-40)/6
        d.polygon([(x,top+35),(x+35,top+15+rng.randint(-15,20)),(x+20,top+105)],fill=hair)
    # eyes
    ey=top+150+rng.randint(-8,8); ex=70
    for sx in (-ex,ex):
        d.ellipse((cx+sx-22,ey-8,cx+sx+22,ey+8),fill=(230,225,215))
        d.ellipse((cx+sx-6,ey-7,cx+sx+6,ey+7),fill=(25,23,23))
    # brows
    d.line((cx-ex-22,ey-32,cx-ex+18,ey-38),fill=hair,width=10)
    d.line((cx+ex-18,ey-38,cx+ex+22,ey-32),fill=hair,width=10)
    # nose
    d.line((cx,ey+10,cx-12,ey+72,cx+8,ey+78),fill=(125,86,73),width=7)
    # mouth
    my=ey+112+rng.randint(-5,8); d.arc((cx-48,my-15,cx+48,my+25),0,180,fill=(100,48,48),width=7)
    # photo scratches / grain
    for _ in range(1300):
        x=rng.randrange(W); y=rng.randrange(H); g=rng.randrange(25,65)
        d.point((x,y),fill=(g,g,g))
    # frame + label
    d.rectangle((22,22,W-22,H-22),outline=(112,25,39),width=4)
    d.rectangle((42,42,285,86),fill=(7,8,10),outline=(112,25,39),width=2)
    d.text((58,55),'AI RECONSTRUCTION',fill=(235,45,65))
    d.rectangle((42,H-95,W-42,H-42),fill=(7,8,10),outline=(65,66,70),width=2)
    d.text((60,H-78),f'VICTIM FILE  /  CASE {i:02d}  /  SIMULATION',fill=(210,210,214))
    im=im.filter(ImageFilter.GaussianBlur(0.15))
    im=ImageEnhance.Contrast(im).enhance(1.08)
    im.save(f'/mnt/data/hmg_work/images/case-{i}.png',quality=92)
