const fs = require('fs');
const path = require('path');

const canonical = {
  '/produto/cilindros-aluminio': 'Cilindros de Alumínio',
  '/produto/cilindros-tipo-4': 'Cilindros Tipo 4',
  '/produto/conexoes-instrumentacao': 'Conexões para Instrumentação',
  '/produto/detectores-vazamento': 'Detectores de Vazamento',
  '/produto/dewars-criogenicos': 'Dewars Criogênicos',
  '/produto/geracao-oxigenio': 'Geração de Oxigênio',
  '/produto/corte-solda': 'Equipamentos de Corte e Solda',
  '/produto/reguladores-especiais': 'Reguladores de Gases Especiais',
  '/produto/reguladores-hidraulicos': 'Reguladores Hidráulicos Alta Pressão',
  '/produto/reguladores-calibracao': 'Reguladores para Calibração de Equipamentos',
  '/produto/combate-incendio': 'Combate a Incêndio',
  '/produto/transmissores-pressao': 'Transmissores: Pressão - Nível - Temperatura',
  '/produto/valvulas-industriais': 'Válvulas Industriais - Medicinais - Especiais'
};

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

console.log('--- STARTING VERIFICATION ---');
walkDir('c:/Site-prime-products/src/pages', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    const content = fs.readFileSync(filePath, 'utf-8');
    for (const [prodPath, expectedName] of Object.entries(canonical)) {
      if (content.includes(prodPath)) {
        const lines = content.split('\n');
        lines.forEach((line, i) => {
          if (line.includes(prodPath) && line.includes('name:')) {
            const match = line.match(/name:\s*['"]([^'"]+)['"]/);
            if (match) {
              const actualName = match[1];
              if (actualName !== expectedName) {
                console.log('MISMATCH in', filePath, 'Line', i+1);
                console.log('Expected:', expectedName);
                console.log('Actual:', actualName);
              }
            }
          }
        });
      }
    }
  }
});
console.log('--- VERIFICATION COMPLETE ---');
