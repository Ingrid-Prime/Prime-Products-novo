export const FIRE_SUPPRESSION_CATALOG = [
  {
    title: 'Sistemas de Supressão Direta e Indireta (Tecnologia Pneumática)',
    columns: ['Série', 'Tipo de Atuação', 'Agentes Limpos', 'Aprovação Típica', 'Aplicações'],
    rows: [
      ['FIWAGUARD Direct', 'Ruptura do Tubo Sensor (Descarga Direta)', 'CO2, Novec 1230, FM-200', 'CE / Pi', 'Painéis Elétricos, Máquinas CNC'],
      ['FIWAGUARD Indirect', 'Tubo Sensor Atua Válvula Mestre (Difusores)', 'CO2, Novec 1230, HFC-227ea', 'VdS / LPCB (Válvula)', 'Data Centers, Salas de Controle, Arquivos'],
      ['FIWAGUARD Kitchen', 'Tubo Sensor Químico Úmido', 'Wet Chemical', 'NFPA 17A', 'Cozinhas Industriais, Fritadeiras'],
      ['Válvulas IHP', 'Solenóide / Manual / Pneumática', 'Inertes (IG-55, IG-100)', 'VdS / TPED', 'Sistemas de Inundação Total']
    ]
  },
  {
    title: 'Especificações Técnicas de Cilindros e Válvulas',
    columns: ['Componente', 'Pressão de Trabalho', 'Material', 'Conexão do Tubo', 'Acessórios Integrados'],
    rows: [
      ['Válvula de Supressão Rápida', 'Até 300 bar', 'Latão Forjado / Niquelado', '6mm / 8mm (Push-in)', 'Manômetro, Pressostato de Fim de Curso'],
      ['Cilindros de Aço (Sem Costura)', '150 a 300 bar', 'Aço Liga (CrMo)', 'Rosca 25E / 1" NPT', 'Pintura Vermelha (RAL 3000)'],
      ['Cilindros Soldados de Baixa Pressão', 'Até 42 bar', 'Aço Carbono', 'Rosca 2.5" / 1"', 'Suportes de Parede / Piso'],
      ['Tubo Sensor Polimérico', '15 - 25 bar (Monitoramento)', 'Polímero Especial Termossensível', 'Conexões Instantâneas', 'Molas de Proteção, Clipes de Fixação']
    ]
  }
];

export const FIRE_SUPPRESSION_EXTRA_BLOCKS = [
  {
    title: 'Proteção Autônoma Inteligente (FIWAGUARD)',
    image: '/images/solucoes-integradas/prod-combate-incendio.png',
    desc: 'Os sistemas FIWAGUARD operam de forma totalmente mecânica e pneumática, sem necessidade de energia elétrica. O tubo sensor pressurizado detecta o foco de incêndio pelo calor (aprox. 110°C - 175°C) e se rompe, liberando imediatamente o agente extintor exatamente onde as chamas começaram.',
    list: [
      'Resposta ultra-rápida no coração do equipamento (Painéis elétricos, racks de servidores).',
      'Independência de fontes de energia externas (100% autônomo).',
      'Instalação flexível: O tubo sensor alcança cantos e áreas confinadas inacessíveis a detectores convencionais.',
      'Compatibilidade com agentes limpos que não deixam resíduos nem danificam eletrônicos sensíveis.'
    ]
  },
  {
    title: 'Sistemas de Inundação Total e Certificação',
    desc: 'Para ambientes maiores, a Prime Products desenha sistemas indiretos de inundação total, onde a detecção local aciona a válvula mestre que descarrega o banco de cilindros (CO2 ou Inertes) através de uma rede de tubulação e difusores.',
    list: [
      'Componentes e válvulas com aprovações internacionais VdS, LPCB e Pi-mark (TPED).',
      'Projetos em estrita conformidade com as normas NFPA 2001 e NFPA 12.',
      'Testes de estanqueidade de sala (Door Fan Test) garantindo o tempo de retenção do gás.',
      'Integração com painéis de alarme e desligamento automático de ar-condicionado (HVAC).'
    ]
  }
];
