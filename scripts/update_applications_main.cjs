const fs = require('fs');
const file = 'c:/Site-prime-products/src/pages/applications/ApplicationsMain.tsx';
let content = fs.readFileSync(file, 'utf8');

const heroReplacements = {
  'automotivo': '/images/aplicacoes/automotivo.jpg',
  'soldagem': '/images/aplicacoes/metal mecanica.jpg',
  'mineral': '/images/aplicacoes/mineiracao.jpg',
  'hospitalar': '/images/aplicacoes/app-hospitalar-leito.jpg',
  'laboratorios-analiticos': '/images/aplicacoes/lab-analitico-panel.jpg',
  'farmaceutica': '/images/aplicacoes/farmaceutica-new.jpg',
  'centros-pesquisa': '/images/aplicacoes/centro-pesquisa.jpg',
  'energia-transicao-energetica': '/images/aplicacoes/energias-renovaveis-hero.jpg',
  'criogenia': '/images/aplicacoes/criogenia.jpg',
  'oleo-gas': '/images/aplicacoes/segmento-oleo-gas.png',
  'industria-quimica': '/images/aplicacoes/industria quimica.jpg',
  'alimentos-bebidas': '/images/aplicacoes/alimentos e bebidas.jpg'
};

Object.entries(heroReplacements).forEach(([key, newImg]) => {
  const regex = new RegExp(`(id:\\s*'${key}'[\\s\\S]*?img:\\s*')[^']+(')`);
  content = content.replace(regex, `$1${newImg}$2`);
});

fs.writeFileSync(file, content);
console.log('ApplicationsMain updated with loose hero images.');
