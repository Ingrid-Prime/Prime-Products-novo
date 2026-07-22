export const OXYGEN_GENERATION_CATALOG = [
  {
    title: 'Geradores de Oxigênio PSA (Série O2)',
    columns: ['Modelo', 'Vazão (Nm³/h)', 'Pureza (%)', 'Pressão de Saída (bar)', 'Consumo de Ar (Nm³/h)'],
    rows: [
      ['Prime O2-05', '5.0', '93 - 95%', '4.0 a 6.0', '~65'],
      ['Prime O2-10', '10.0', '93 - 95%', '4.0 a 6.0', '~130'],
      ['Prime O2-20', '20.0', '93 - 95%', '4.0 a 6.0', '~260'],
      ['Prime O2-50', '50.0', '93 - 95%', '4.0 a 6.0', '~650'],
      ['Prime O2-100', '100.0', '93 - 95%', '4.0 a 6.0', '~1300'],
      ['Prime O2-200', '200.0', '93 - 95%', '4.0 a 6.0', '~2600']
    ]
  },
  {
    title: 'Sistemas de Cilindros e Backup (Manifolds)',
    columns: ['Tipo', 'Capacidade (Cilindros)', 'Pressão de Trabalho', 'Regulação', 'Uso Principal'],
    rows: [
      ['Rampa Simples', '1x2 a 1x10', 'Até 200 bar', 'Simples / Duplo Estágio', 'Backup Manual'],
      ['Rampa Dupla (Semi-Auto)', '2x2 a 2x10', 'Até 200 bar', 'Válvula Inversora Automática', 'Backup Contínuo'],
      ['Central Criogênica', 'Microbulk / LC', 'Até 350 psi', 'Reguladores de Alta Vazão', 'Alta Demanda de Pico']
    ]
  }
];

export const OXYGEN_GENERATION_EXTRA_BLOCKS = [
  {
    title: 'Tecnologia PSA (Pressure Swing Adsorption)',
    image: '/images/produtos/geracao-de-oxigenio/prod-geracao-gases-1.jpg',
    desc: 'Os sistemas de geração de oxigênio PSA utilizam Zeólita (Peneira Molecular) para separar o oxigênio do nitrogênio no ar ambiente comprimido. Esta tecnologia garante autonomia total, eliminando a dependência de entregas de cilindros ou caminhões criogênicos.',
    list: [
      'Pureza consistente de 93% a 95%, atendendo rigorosamente normas industriais e medicinais.',
      'Custo por Nm³ de oxigênio significativamente menor que o gás comprado.',
      'Operação 24/7 totalmente automatizada com monitoramento de pureza e pressão.',
      'Eliminação de riscos associados ao manuseio contínuo de cilindros de alta pressão.'
    ],
    warning: 'Nota de Engenharia: A eficiência do gerador PSA é diretamente dependente da qualidade do ar comprimido fornecido. A Prime Products dimensiona todo o sistema de tratamento de ar (filtros coalescentes, secadores) para garantir a vida útil da Zeólita.'
  },
  {
    title: 'Infraestrutura Completa (Turn-Key)',
    desc: 'A Prime Products não fornece apenas o gerador, mas integra a solução completa de utilidades na planta do cliente.',
    list: [
      'Dimensionamento de compressores de ar e sistemas de tratamento ISO 8573-1.',
      'Quadros de manobra e intertravamento com o sistema de backup (cilindros ou líquido).',
      'Redes de distribuição dimensionadas para evitar queda de pressão no ponto de uso.',
      'Sistemas de exaustão e controle térmico para a sala de compressores.'
    ]
  }
];
