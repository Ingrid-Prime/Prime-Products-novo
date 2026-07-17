const Jimp = require('jimp');

async function cropImages() {
  try {
    const image = await Jimp.read('C:\\Users\\FILIPE DANIEL\\.gemini\\antigravity\\brain\\aab9ef78-f0d6-4e73-b0f2-f3bbdc4c1a1c\\media__1784133573504.jpg');
    const w = image.bitmap.width;
    const h = image.bitmap.height;
    
    const m = 10;
    
    const corte = image.clone().crop(m, m, w - 2*m, Math.floor(h/2) - 2*m);
    await corte.writeAsync('public/images/prod-corte-solda-new.jpg');
    
    const regHid = image.clone().crop(m, Math.floor(h/2) + m, Math.floor(w/2) - 2*m, Math.floor(h/2) - 2*m);
    await regHid.writeAsync('public/images/prod-reguladores-hidraulicos-new.jpg');
    
    const trans = image.clone().crop(Math.floor(w/2) + m, Math.floor(h/2) + m, Math.floor(w/2) - 2*m, Math.floor(h/2) - 2*m);
    await trans.writeAsync('public/images/prod-transmissores-new.jpg');
    
    console.log('Images cropped successfully!');
  } catch (err) {
    console.error(err);
  }
}

cropImages();
