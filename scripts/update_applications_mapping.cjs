const fs = require('fs');
const path = require('path');
const file = 'c:/Site-prime-products/src/pages/applications/ApplicationDetail.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Update Hero Images (from loose files)
const heroReplacements = {
  'laboratorios-analiticos': '/images/aplicacoes/lab-analitico-panel.jpg',
  'farmaceutica': '/images/aplicacoes/farmaceutica-new.jpg',
  'centros-pesquisa': '/images/aplicacoes/centro-pesquisa.jpg',
  'hospitalar': '/images/aplicacoes/app-hospitalar-leito.jpg',
  'oleo-gas': '/images/aplicacoes/segmento-oleo-gas.png',
  'industria-quimica': '/images/aplicacoes/industria quimica.jpg',
  'alimentos-bebidas': '/images/aplicacoes/alimentos e bebidas.jpg',
  'energia-transicao-energetica': '/images/aplicacoes/energias-renovaveis-hero.jpg',
  'criogenia': '/images/aplicacoes/criogenia.jpg',
  'automotivo': '/images/aplicacoes/automotivo.jpg',
  'soldagem': '/images/aplicacoes/metal mecanica.jpg',
  'mineral': '/images/aplicacoes/mineiracao.jpg',
};

Object.entries(heroReplacements).forEach(([key, newImg]) => {
  const regex = new RegExp(`('${key}':\\s*\\{[\\s\\S]*?img:\\s*')[^']+(')`);
  content = content.replace(regex, `$1${newImg}$2`);
});

// 2. Map Gallery Images (everything inside the folders)
const folderMapping = {
  'laboratorios-analiticos': 'laboratorio analitico',
  'farmaceutica': 'farmaceutica',
  'centros-pesquisa': 'centro-pesquisa',
  'hospitalar': 'hospitalar',
  'oleo-gas': 'oleo-gas',
  'industria-quimica': 'quimica-petroquimica',
  'alimentos-bebidas': 'alimenticia',
  'energia-transicao-energetica': 'energia-hidrogenio',
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
    files = fs.readdirSync(folderPath)
      .filter(f => f.match(/\.(png|jpe?g|webp)$/i))
      .map(f => `'/images/aplicacoes/${folder}/${f}'`);
  }
  return `  '${key}': [${files.join(', ')}],`;
});

const newGalleryBlock = `const APP_GALLERY: Record<string, string[]> = {\n${galleryStrings.join('\n')}\n};`;

content = content.replace(/const APP_GALLERY: Record<string, string\[\]> = {[\s\S]*?};\n/, newGalleryBlock + '\n');

fs.writeFileSync(file, content);
console.log('ApplicationDetail updated with correct loose/folder mapping.');
