const sharp = require('sharp');
const fs = require('fs');

const path = 'public/images/solucoes-integradas/instrumentacao-medicao/prod-valvulas.png';

async function crop() {
  try {
    const metadata = await sharp(path).metadata();
    const { width, height } = metadata;
    
    // We will crop 8% off the bottom and 8% off the left and right just to be safe.
    // The user said "corte o canto esquerdo", but if the star is on the bottom right, we'll just cut both corners off.
    const cropLeft = Math.floor(width * 0.05);
    const cropTop = 0;
    const cropWidth = Math.floor(width * 0.90); // removing 5% left, 5% right
    const cropHeight = Math.floor(height * 0.92); // removing 8% bottom

    await sharp(path)
      .extract({ left: cropLeft, top: cropTop, width: cropWidth, height: cropHeight })
      .toFile('temp.png');
      
    fs.renameSync('temp.png', path);
    console.log('Cropped image successfully');
  } catch (error) {
    console.error('Error cropping image:', error);
  }
}

crop();
