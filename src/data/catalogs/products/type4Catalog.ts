export const TYPE4_CATALOG = [
  {
    title: 'Modelos e Configurações Técnicas',
    columns: ['Imagem', 'Configuração', 'Descrição', 'Aplicação', 'Observações Técnicas'],
    rows: [
      [
        '<img src="/images/produtos/cilindros-tipo-4/prod-cilindros-tipo4-3.png?v=5" alt="Cilindro Tipo 4" class="h-24 object-contain mix-blend-multiply" />',
        'Cilindro Tipo 4 para Gás Comprimido',
        'Recipiente totalmente compósito, com liner polimérico não metálico e reforço em fibra.',
        'Armazenamento embarcado de gases comprimidos em alta pressão.',
        'Especificação final depende do projeto e condições de serviço.'
      ],
      [
        '<img src="/images/produtos/cilindros-tipo-4/Sistema de Fixação por Cintas.jpg?v=5" alt="Fixação" class="h-24 object-contain mix-blend-multiply" />',
        'Sistema de Fixação por Cintas',
        'Suporte projetado para restringir o cilindro sem provocar abrasão ou concentração de carga.',
        'Instalação veicular e módulos industriais.',
        'Exige proteção elastomérica entre a cinta e o cilindro.'
      ],
      [
        '<img src="/images/produtos/cilindros-tipo-4/Válvula com Dispositivo de Alívio de Pressão.jpg?v=5" alt="Válvula e Dispositivo de Alívio" class="h-24 object-contain mix-blend-multiply" />',
        'Válvula com Dispositivo de Alívio de Pressão',
        'Componentes certificados compatíveis com a rosca 1.125-12UNF do cilindro.',
        'Controle de fluxo e alívio térmico de emergência.',
        'Torque e integração devem ser confirmados com o fabricante.'
      ],
      [
        '<img src="/images/produtos/cilindros-tipo-4/Conjunto Cilindro, Válvula e Suporte.jpg?v=5" alt="Conjunto Integrado" class="h-24 object-contain mix-blend-multiply" />',
        'Conjunto Cilindro, Válvula e Suporte',
        'Integração completa dos componentes para pronta instalação.',
        'Sistemas turn-key e projetos customizados.',
        'Requer teste de estanqueidade do conjunto montado.'
      ],
      [
        '<img src="/images/produtos/cilindros-tipo-4/Configuração para Módulos ou Racks.jpg?v=5" alt="Módulos" class="h-24 object-contain mix-blend-multiply" />',
        'Configuração para Módulos ou Racks',
        'Arranjo otimizado para armazenamento em cascata.',
        'Transporte de gases comprimidos e sistemas de energia.',
        'Dimensões e espaçamentos devem prever a expansão do cilindro.'
      ]
    ]
  }
];

export const TYPE4_EXTRA_BLOCKS = [
  {
    title: 'Instalação e Fixação',
    image: '/images/produtos/cilindros-tipo-4/Sistema de Fixação por Cintas.jpg?v=5',
    desc: 'O cilindro deve ser fixado de forma a impedir deslocamentos, sem induzir danos à estrutura compósita. A expansão dimensional durante a pressurização deve ser considerada no projeto do suporte.',
    list: [
      'Utilizar proteção elastomérica contínua entre a cinta metálica e o cilindro.',
      'Distribuir adequadamente os pontos de apoio (geralmente Lmid ≥ 1/2 do comprimento).',
      'Evitar qualquer contato direto com partes metálicas abrasivas.',
      'Proteger contra vibração, impacto e movimentação do chassi.',
      'Respeitar afastamentos térmicos (ex: mínimo 100 mm do sistema de exaustão).',
      'Superfície não deve ultrapassar a temperatura máxima de serviço.'
    ]
  },
  {
    title: 'Válvula e Dispositivos de Segurança',
    image: '/images/produtos/cilindros-tipo-4/prod-cilindros-tipo4-4.png?v=7',
    desc: 'A montagem da válvula exige componentes perfeitamente compatíveis e procedimento qualificado, garantindo a vedação e integridade do cilindro e do dispositivo de alívio térmico (PRD).',
    list: [
      'Utilizar exclusivamente componentes certificados e compatíveis com a aplicação.',
      'A compatibilidade da rosca (ex: 1.125-12UNF) deve ser rigorosamente inspecionada.',
      'Aperto deve ser realizado com ferramenta adequada, respeitando a faixa de torque recomendada (ex: 130 a 140 N·m).',
      'Realizar teste de estanqueidade obrigatório após a montagem do conjunto.',
      'O dispositivo térmico de alívio não pode ser substituído por tampões sólidos.'
    ],
    warning: 'Atenção: O torque de instalação exato depende da configuração técnica específica da válvula e do cilindro, e deve ser confirmado pelo fabricante em cada aplicação.'
  },
  {
    title: 'Segurança e Conformidade',
    desc: 'Cilindros Tipo 4 são vasos de pressão críticos. Modificações na estrutura são estritamente proibidas e as intervenções devem ser documentadas.',
    list: [
      'Instalação e manutenção apenas por equipe tecnicamente qualificada.',
      'Inspeção visual periódica recomendada pelo menos a cada 3 anos.',
      'Proteção contra ferramentas soltas, calor excessivo, agentes químicos e impactos fortes.',
      'Antes de qualquer intervenção nas válvulas, garantir pressão interna igual a zero.',
      'Qualquer dano visível ao liner ou ao compósito deve ser avaliado antes do reuso.'
    ],
    warning: 'A seleção do cilindro deve considerar gás armazenado, pressão de serviço, temperatura, ciclo de abastecimento, permeação, fadiga, válvula, dispositivo de alívio, suporte, ambiente de instalação e regulamentação aplicável.'
  }
];
