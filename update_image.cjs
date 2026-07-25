const fs = require('fs');
const path = require('path');

const src = 'C:/Users/FILIPE DANIEL/.gemini/antigravity/brain/aab9ef78-f0d6-4e73-b0f2-f3bbdc4c1a1c/.user_uploaded/media__1784943951977.png';
const dest = 'c:/Site-prime-products/public/images/conteudos/capa-novos-2.png';

if (fs.existsSync(src)) {
  fs.copyFileSync(src, dest);
  console.log('Image copied to capa-novos-2.png');
}

const cmsPath = 'c:/Site-prime-products/public/cms-content.json';
if (fs.existsSync(cmsPath)) {
  let data = JSON.parse(fs.readFileSync(cmsPath, 'utf8'));
  let updated = false;
  data.articles.forEach(a => {
    if (a.id === 'seguranca-producao-hidrogenio-anp') {
      a.image = '/images/conteudos/capa-novos-2.png';
      updated = true;
    }
  });
  if (updated) {
    fs.writeFileSync(cmsPath, JSON.stringify(data, null, 2));
    console.log('cms-content.json updated');
  }
}

const tsPath = 'c:/Site-prime-products/src/data/defaultArticles.ts';
if (fs.existsSync(tsPath)) {
  let tsContent = fs.readFileSync(tsPath, 'utf8');
  tsContent = tsContent.replace(
    /("id":\s*"seguranca-producao-hidrogenio-anp"[\s\S]*?"image":\s*")[^"]+(")/g,
    '$1/images/conteudos/capa-novos-2.png$2'
  );
  fs.writeFileSync(tsPath, tsContent);
  console.log('defaultArticles.ts updated');
}
