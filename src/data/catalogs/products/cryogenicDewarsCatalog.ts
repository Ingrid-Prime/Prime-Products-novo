const renderImages = (images: string[], scaleClass: string = '') => {
  const isMultiple = images.length > 1;
  const containerClass = isMultiple
    ? "flex flex-row flex-wrap gap-2 items-center justify-center max-w-[200px] mx-auto" 
    : "flex items-center justify-center";
    
  const imgSize = isMultiple ? "w-16 h-16" : "w-28 h-28";
    
  return `<div class="${containerClass}">` +
    images.map(img => `<img src="/images/produtos/dewers-criogenicos/${img}" alt="Produto Criogênico" class="${imgSize} object-contain ${scaleClass} mix-blend-multiply transition-transform duration-300 flex-shrink-0 hover:!scale-125" />`).join('') +
    `</div>`;
};

export const CRYOGENIC_DEWARS_CATALOG = [
  {
    title: 'LIQUID CYLINDERS (CILINDROS DE LÍQUIDO)',
    columns: ['IMAGEM', 'MODELO', 'DESCRIÇÃO', 'APLICAÇÃO', 'CARACTERÍSTICAS TÉCNICAS'],
    rows: [
      [renderImages(['cylinder-tw.png']), 'Série XL (Ex: XL-45, XL-50)', 'Cilindros de líquidos portáteis com isolamento a vácuo avançado.', 'Armazenamento e transporte de LIN, LOX, LAR e CO2.', '• Garantia de 5 anos no vácuo\n• Capacidade de 70 a 450 Litros\n• Anel de proteção contra choques (Full Circle Shock-Mount Ring)\n• Indicador de nível não-obstrutivo\n• Válvulas de alívio codificadas por cor'],
      [renderImages(['prod-dewars-2.png']), 'Série LSN / XP', 'Dewars para armazenamento seguro de gases liquefeitos com alta eficiência térmica.', 'Aplicações industriais e de pesquisa.', '• Construção robusta e durável\n• Isolamento multicamadas de alta performance\n• Base reforçada'],
      [renderImages(['prod-dewars-3.png']), 'Série TPED / GB', 'Cilindros criogênicos certificados para o mercado global.', 'Transporte internacional e uso geral.', '• Aprovações DOT-4L, TPED e GB Code\n• Opções para extração de líquido e gás\n• Design seguro para ambientes exigentes']
    ]
  },
  {
    title: 'VACUUM INSULATED PIPING (TUBULAÇÃO ISOLADA A VÁCUO)',
    columns: ['IMAGEM', 'SISTEMA', 'DESCRIÇÃO', 'APLICAÇÃO', 'CARACTERÍSTICAS TÉCNICAS'],
    rows: [
      [renderImages(['piping-tw.jpg']), 'Tubulações VJP (Vacuum Jacketed Piping)', 'Tubulação dupla (inner/outer) com vácuo intermediário, garantindo a menor taxa de evaporação (boil-off) do mercado.', 'Transferência de líquidos criogênicos em plantas de gás, indústrias e laboratórios.', '• Tubulação interna em Inox 304/316L (ASTM A312)\n• Retenção de vácuo garantida\n• Diâmetros de 1/2" a 6"\n• Pressão de projeto de até 40 barg\n• Limpeza Padrão Oxigênio (Oxygen Clean Standards)'],
      [renderImages(['piping-tw.jpg']), 'Conexões tipo Baioneta', 'Design proprietário para conexões livres de vazamentos e congelamento externo.', 'Sistemas modulares de transferência criogênica.', '• Conexões mecânicas de alta confiabilidade\n• Instalação rápida (Bayonet ou Field Weld)\n• Livre de manutenção a longo prazo'],
      [renderImages(['prod-dewars-criogenicos-new.jpg']), 'Acessórios e Mangueiras VIP', 'Mangueiras flexíveis e acessórios integrados com isolamento a vácuo.', 'Conexões móveis e interfaces de equipamentos.', '• Altamente flexíveis\n• Proteção anti-congelamento\n• Compatível com ASME B31.3']
    ]
  }
];

export const CRYOGENIC_DEWARS_EXTRA_BLOCKS = [
  {
    title: 'A Solução Ideal em Criogenia',
    desc: 'Os produtos fornecem desempenho superior na retenção térmica para os fluidos mais frios do mundo. Combinando os recipientes criogênicos (Liquid Cylinders) com a linha completa de Tubulações Isoladas a Vácuo (VIP), sua planta pode operar com mínima perda por evaporação (boil-off), resultando em alta economia e segurança operacional.',
    list: [
      'Garantia prolongada do vácuo',
      'Atende normas DOT-4L, TPED e ASME B31.3',
      'Extensa variedade de capacidades e pressões de operação'
    ],
    image: '/images/produtos/dewers-criogenicos/prod-dewars-2.png'
  }
];
