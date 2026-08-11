export const TYPE4_CATALOG = [
  {
    title: 'Modelos e Especificações Gerais',
    columns: ['Categoria', 'Material do Liner', 'Revestimento', 'Pressão de Serviço', 'Capacidade / Dimensões'],
    rows: [
      [
        'Armazenamento Veicular e Mobilidade (Gás Natural, H₂)',
        'Polímero de Alta Densidade (HDPE / PET)',
        'Fibra de Carbono + Fibra de Vidro em Resina Epóxi',
        '250 bar a 700 bar (Sob consulta)',
        'Sob consulta conforme projeto e modelo do veículo'
      ],
      [
        'Módulos de Armazenamento Estacionário e Transporte',
        'Polímero de Alta Densidade (HDPE / PET)',
        'Fibra de Carbono + Fibra de Vidro em Resina Epóxi',
        '250 bar a 300 bar (Sob consulta)',
        'Sob consulta conforme Skid/Rack'
      ]
    ]
  }
];

export const TYPE4_EXTRA_BLOCKS = [
  {
    title: 'Configurações e Acessórios (Instalação e Fixação)',
    image: '/images/produtos/cilindros-tipo-4/sistema-de-fixacao-por-cintas.jpg',
    desc: 'O cilindro compósito deve ser montado de forma a acomodar a expansão volumétrica durante a pressurização. A Prime orienta sobre os sistemas de fixação corretos para evitar danos estruturais.',
    list: [
      'Sistemas de cintas com proteção elastomérica (Neck/Strap Mount).',
      'Válvulas com Dispositivo de Alívio de Pressão Térmico (TPRD) integrado.',
      'Sistemas manifold para interligação em cascata.',
      'Suportes usinados sob medida para evitar pontos de concentração de tensão.'
    ]
  },
  {
    title: 'Segurança e Conformidade',
    image: '/images/produtos/cilindros-tipo-4/prod-cilindros-tipo4-4.png',
    desc: 'Cilindros Tipo 4 são vasos de pressão críticos. As intervenções e testes periódicos diferem dos cilindros metálicos tradicionais.',
    list: [
      'Proibição de qualquer modificação, perfuração ou abrasão na estrutura de fibra.',
      'Requisitos rigorosos de temperatura (exposição ao calor pode comprometer a resina).',
      'Uso exclusivo de válvulas certificadas com torque de instalação homologado.',
      'Inspeção visual periódica recomendada para identificar danos ao verniz/resina antes que atinjam a fibra.',
      'Certificações (ISO 11439, ISO 11119-3, R110) variam conforme a origem do fabricante homologado.'
    ],
    warning: 'Atenção: A seleção da rosca e torque da válvula deve seguir estritamente o manual do fabricante do cilindro. Danos à rosca do liner polimérico são irreversíveis.'
  },
  {
    title: 'Suporte de Engenharia Prime',
    desc: 'A Prime Products não atua apenas como revenda de cilindros, mas como integradora de soluções em alta pressão.',
    list: [
      'Especificação da classe do cilindro (Tipo 1 ao Tipo 4) ideal para o OPEX do cliente.',
      'Dimensionamento da malha de válvulas, reguladores e tubulação de alta pressão.',
      'Cálculo de autonomia e fluxo em sistemas de redução de pressão.',
      'Análise de compatibilidade química entre o gás, o liner e a válvula.'
    ]
  }
];
