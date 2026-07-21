const fs = require('fs');

const filesToFix = [
  'c:/Site-prime-products/src/data/navItems.ts',
  'c:/Site-prime-products/src/pages/Home.tsx',
  'c:/Site-prime-products/src/pages/solutions/GasesSeguranca.tsx',
  'c:/Site-prime-products/src/pages/solutions/Integradas.tsx',
  'c:/Site-prime-products/src/pages/applications/ApplicationDetail.tsx'
];

const replacements = [
  { target: "label: 'Dewars Criogênicos'", replacement: "label: 'Dewars e Recipientes Criogênicos'" },
  { target: "label: 'Geração de Oxigênio'", replacement: "label: 'Geração de Oxigênio e Anestesia'" },
  { target: "label: 'Corte e Solda'", replacement: "label: 'Equipamentos para Corte e Solda'" },
  { target: "label: 'Combate a Incêndio'", replacement: "label: 'Sistemas de Combate a Incêndio'" },
  { target: "name: 'Dewars Criogênicos'", replacement: "name: 'Dewars e Recipientes Criogênicos'" },
  { target: "name: 'Reguladores Especiais'", replacement: "name: 'Reguladores de Gases Especiais'" },
  { target: "name: 'Geração de Oxigênio'", replacement: "name: 'Geração de Oxigênio e Anestesia'" },
  { target: "name: 'Combate a Incêndio'", replacement: "name: 'Sistemas de Combate a Incêndio'" },
  { target: "name: 'Equipamentos Corte e Solda'", replacement: "name: 'Equipamentos para Corte e Solda'" },
  { target: "name: 'Reguladores Hidráulicos'", replacement: "name: 'Reguladores Hidráulicos Alta Pressão'" },
  { target: "name: 'Reguladores de Pressão Especiais'", replacement: "name: 'Reguladores de Gases Especiais'" },
  { target: "name: 'Válvulas Industriais'", replacement: "name: 'Válvulas Industriais - Medicinais - Especiais'" }
];

filesToFix.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    replacements.forEach(r => {
      content = content.split(r.target).join(r.replacement);
    });
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${filePath}`);
  }
});
