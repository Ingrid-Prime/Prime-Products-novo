const fs = require('fs');
const file = 'c:/Site-prime-products/src/pages/applications/ApplicationDetail.tsx';
let content = fs.readFileSync(file, 'utf8');

const replacements = {
  'laboratorios-analiticos': '/images/aplicacoes/laboratorio analitico/sol-analitica-00.png',
  'farmaceutica': '/images/aplicacoes/farmaceutica/Farmacêutica.png',
  'centros-pesquisa': '/images/aplicacoes/centro-pesquisa/app-centros-pesquisa.webp',
  'hospitalar': '/images/aplicacoes/hospitalar/Hospitalar.png',
  'oleo-gas': '/images/aplicacoes/segmento-oleo-gas.png',
  'industria-quimica': '/images/aplicacoes/quimica-petroquimica/Industria Química.png',
  'alimentos-bebidas': '/images/aplicacoes/alimenticia/Segmento de Alimentos e Bebidas.png',
  'energia-transicao-energetica': '/images/aplicacoes/energia-hidrogenio/Energia verde - Transição Energética.png',
  'criogenia': '/images/aplicacoes/criogenia/criogenia.png',
  'automotivo': '/images/aplicacoes/automotiva/Caminhão.png',
  'soldagem': '/images/aplicacoes/metal-mecanica/Equipamentos para Corte e Solda.png',
  'mineral': '/images/aplicacoes/mineracao/mineracao principal.jpg',
};

Object.entries(replacements).forEach(([key, newImg]) => {
  const regex = new RegExp(`('${key}':\\s*\\{[\\s\\S]*?img:\\s*')[^']+(')`);
  content = content.replace(regex, `$1${newImg}$2`);
});

fs.writeFileSync(file, content);
console.log('APPLICATION_DATA images updated.');
