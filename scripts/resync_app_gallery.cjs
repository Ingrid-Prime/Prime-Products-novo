const fs = require('fs');
const path = require('path');
const file = 'c:/Site-prime-products/src/pages/applications/ApplicationDetail.tsx';
let content = fs.readFileSync(file, 'utf8');

const folderMapping = {
  'laboratorios-analiticos': 'laboratorio analitico',
  'farmaceutica': 'farmaceutica',
  'centros-pesquisa': 'centro-pesquisa',
  'hospitalar': 'hospitalar',
  'oleo-gas': 'oleo-gas',
  'industria-quimica': 'quimica-petroquimica',
  'alimentos-bebidas': 'alimenticia',
  'energia-transicao-energetica': 'Energias Renováveis Hidrogênio',
  'criogenia': 'criogenia',
  'automotivo': 'automotiva',
  'soldagem': 'metal-mecanica',
  'mineral': 'mineracao',
};

const publicImagesDir = 'c:/Site-prime-products/public/images/aplicacoes';

const galleryStrings = Object.entries(folderMapping).map(([key, folder]) => {
  const folderPath = path.join(publicImagesDir, folder);
  let files = [];
  if (fs.existsSync(folderPath)) {
    // Only take first 4 files maximum to keep layout clean
    files = fs.readdirSync(folderPath)
      .filter(f => f.match(/\.(png|jpe?g|webp)$/i))
      .slice(0, 4)
      .map(f => `'/images/aplicacoes/${folder}/${f}'`);
  }
  return `  '${key}': [${files.join(', ')}],`;
});

const newGalleryBlock = `const APP_GALLERY: Record<string, string[]> = {\n${galleryStrings.join('\n')}\n};`;

content = content.replace(/const APP_GALLERY: Record<string, string\[\]> = {[\s\S]*?};\n/, newGalleryBlock + '\n');

fs.writeFileSync(file, content);
console.log('APP_GALLERY resynchronized successfully.');
