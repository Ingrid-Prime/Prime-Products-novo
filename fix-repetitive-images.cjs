const fs = require('fs');

const replacements = {
  'seguranca-sistemas-gases': '/images/aplicacoes/automotivo.jpg',
  'engenharia-aplicada-processos': '/images/aplicacoes/centro-pesquisa.jpg',
  'analise-processo-vs-laboratorio': '/images/aplicacoes/lab-analitico-panel.jpg',
  'conformidade-rastreabilidade': '/images/aplicacoes/app-bg-pharma.jpg',
  'tendencias-instrumentacao': '/images/aplicacoes/app-hospitalar-leito.jpg'
};

// Update JSON
const jsonFile = './public/cms-content.json';
if (fs.existsSync(jsonFile)) {
  let json = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));
  json.articles.forEach(article => {
    if (replacements[article.id]) {
      article.image = replacements[article.id];
    }
  });
  fs.writeFileSync(jsonFile, JSON.stringify(json, null, 2));
  console.log('Updated cms-content.json');
}

// Update TS
const tsFile = './src/data/defaultArticles.ts';
if (fs.existsSync(tsFile)) {
  let tsContent = fs.readFileSync(tsFile, 'utf8');
  // We need to carefully replace just the image for each specific article id block
  for (const [id, newImage] of Object.entries(replacements)) {
    const regex = new RegExp(`(id:\\s*'${id}'[\\s\\S]*?image:\\s*')[^']+(\')`);
    tsContent = tsContent.replace(regex, `$1${newImage}$2`);
  }
  fs.writeFileSync(tsFile, tsContent);
  console.log('Updated defaultArticles.ts');
}
