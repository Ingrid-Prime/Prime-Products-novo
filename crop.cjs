const Jimp = require('jimp');

async function cropImages() {
  try {
    const image = await Jimp.read('C:\\Users\\FILIPE DANIEL\\.gemini\\antigravity\\brain\\aab9ef78-f0d6-4e73-b0f2-f3bbdc4c1a1c\\media__1783974438328.jpg');
    const w = image.bitmap.width;
    const h = image.bitmap.height;
    
    const m = 10;
    
    const alum = image.clone().crop(m, m, Math.floor(w/2) - 2*m, Math.floor(h/2) - 2*m);
    await alum.writeAsync('public/images/prod-cilindros-aluminio-new.jpg');
    
    const t4 = image.clone().crop(Math.floor(w/2) + m, m, Math.floor(w/2) - 2*m, Math.floor(h/2) - 2*m);
    await t4.writeAsync('public/images/prod-cilindros-tipo4-new.jpg');
    
    const con = image.clone().crop(m, Math.floor(h/2) + m, Math.floor(w/3) - 2*m, Math.floor(h/2) - 2*m);
    await con.writeAsync('public/images/prod-conexoes-instrumentacao-new.jpg');
    
    const dew = image.clone().crop(Math.floor(w/3) + m, Math.floor(h/2) + m, Math.floor(w/3) - 2*m, Math.floor(h/2) - 2*m);
    await dew.writeAsync('public/images/prod-dewars-criogenicos-new.jpg');
    
    const reg = image.clone().crop(Math.floor(2*w/3) + m, Math.floor(h/2) + m, Math.floor(w/3) - 2*m, Math.floor(h/2) - 2*m);
    await reg.writeAsync('public/images/prod-reguladores-especiais-new.jpg');
    
    console.log('Images cropped successfully!');
  } catch (err) {
    console.error(err);
  }
}

cropImages();
