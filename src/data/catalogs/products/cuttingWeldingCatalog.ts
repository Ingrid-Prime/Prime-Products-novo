export const CUTTING_WELDING_CATALOG = [
  {
    title: 'Reguladores de Pressão Industrial (Linha Longxing)',
    columns: ['Modelo', 'Gás', 'Pressão Entrada Máx.', 'Pressão de Trabalho', 'Conexão'],
    rows: [
      ['LX-O2 (Oxigênio)', 'Oxigênio', '200 bar (2900 psi)', '0 - 10 bar', 'CGA 540'],
      ['LX-AC (Acetileno)', 'Acetileno', '25 bar (350 psi)', '0 - 1.5 bar', 'CGA 510 / 300'],
      ['LX-AR (Argônio/Mistura)', 'Argônio / Mistura', '200 bar (2900 psi)', 'Vazão 0 - 30 L/min', 'CGA 580'],
      ['LX-CO2 (Dióxido de Carbono)', 'Dióxido de Carbono', '200 bar (2900 psi)', 'Vazão 0 - 30 L/min', 'CGA 320']
    ]
  },
  {
    title: 'Maçaricos e Acessórios',
    columns: ['Categoria', 'Tipo', 'Capacidade de Corte', 'Gases Compatíveis', 'Aplicação Típica'],
    rows: [
      ['Maçarico de Corte', 'Injetor / Misturador', 'Até 300mm (12")', 'Oxi-Acetileno / Oxi-GLP', 'Cortes pesados e demolição'],
      ['Maçarico de Solda', 'Série Leve / Média', 'Aço até 14mm', 'Oxi-Acetileno', 'Oficinas e funilaria'],
      ['Válvula Corta-Chamas', 'Seca (Flashback Arrestor)', 'Pressão Máx. Reg.', 'O₂, Combustíveis', 'Segurança na linha de mangueira']
    ]
  }
];

export const CUTTING_WELDING_EXTRA_BLOCKS = [
  {
    title: 'Soluções Completas para Metalurgia',
    image: '/images/produtos/corte-solda/prod-corte-solda-new.jpg',
    desc: 'Fornecemos desde reguladores industriais robustos até sistemas completos de oxicorte. Nossos equipamentos são homologados e focados na segurança do operador, prevenindo retrocesso de chama e vazamentos em operações severas.',
    list: [
      'Corpo dos reguladores forjados em latão de alta resistência.',
      'Manômetros com escala dupla (bar / psi) de fácil leitura e proteção.',
      'Válvulas corta-chamas (Flashback Arrestors) certificadas com dupla proteção.',
      'Compatibilidade universal com conexões padrão ABNT / CGA.'
    ]
  }
];
