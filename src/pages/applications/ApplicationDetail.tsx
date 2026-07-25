import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, Phone, Mail } from 'lucide-react';
import { AnimateOnScroll } from '../../components/AnimateOnScroll';
import { EditableElement } from '../../components/EditableElement';
import { SectionContainer } from '../../components/SectionContainer';
import HydrogenEnergyPage from './HydrogenEnergyPage';
import FarmaceuticaPage from './FarmaceuticaPage';
import AutomotivaPage from './AutomotivaPage';

const APP_GALLERY: Record<string, string[]> = {
  'laboratorios-analiticos': ['/images/aplicacoes/laboratorio-analitico/about-lab.jpg', '/images/aplicacoes/laboratorio-analitico/sol-analitica-00.png', '/images/aplicacoes/laboratorio-analitico/sol-analitica-02.png', '/images/aplicacoes/laboratorio-analitico/whatsapp-image-2026-03-24-at-17.03.49.jpeg'],
  'farmaceutica': ['/images/aplicacoes/farmaceutica/farmaceutica-corredor.jpg', '/images/aplicacoes/farmaceutica/farmaceutica-filtro.jpg', '/images/aplicacoes/farmaceutica/farmaceutica-linha-1.jpg', '/images/aplicacoes/farmaceutica/farmaceutica-linha-2.jpg'],
  'centros-pesquisa': ['/images/aplicacoes/centro-pesquisa/app-centros-pesquisa.webp', '/images/aplicacoes/centro-pesquisa/pesquisa.jpg'],
  'hospitalar': ['/images/aplicacoes/hospitalar/hospitalar.png', '/images/aplicacoes/hospitalar/medical-gas-outlets.png'],
  'oleo-gas': ['/images/aplicacoes/oleo-gas/app-oleo-gas-offshore.jpg', '/images/aplicacoes/oleo-gas/app-oleo-gas-refinaria.jpg'],
  'industria-quimica': ['/images/aplicacoes/quimica-petroquimica/app-quimica-1.jpg', '/images/aplicacoes/quimica-petroquimica/app-quimica-2.jpg', '/images/aplicacoes/quimica-petroquimica/Industria Química.png'],
  'alimentos-bebidas': ['/images/aplicacoes/alimenticia/app-alimentos-bebidas-1.jpg', '/images/aplicacoes/alimenticia/app-alimentos-bebidas-2.jpg', '/images/aplicacoes/alimenticia/segmento-de-alimentos-e-bebidas.png'],
  'energia-transicao-energetica': ['/images/aplicacoes/Energias Renováveis Hidrogênio/app-energia-renovavel-1.jpg', '/images/aplicacoes/Energias Renováveis Hidrogênio/app-energia-renovavel-2.jpg', '/images/aplicacoes/Energias Renováveis Hidrogênio/Energia verde - Transição Energética.png', '/images/aplicacoes/Energias Renováveis Hidrogênio/h2-jumbo-tube.png'],
  'criogenia': ['/images/aplicacoes/criogenia/app-criogenia.jpg', '/images/aplicacoes/criogenia/criogenia.png', '/images/aplicacoes/criogenia/prod-dewars-2.png', '/images/aplicacoes/criogenia/prod-dewars-3.png'],
  'automotivo': ['/images/aplicacoes/automotiva/app-automotivo-1.jpg', '/images/aplicacoes/automotiva/app-automotivo-2.jpg', '/images/aplicacoes/automotiva/Caminhão.png'],
  'soldagem': ['/images/aplicacoes/metal-mecanica/prod-corte-solda-principal.jpg', '/images/aplicacoes/metal-mecanica/equipamentos-para-corte-e-solda.png', '/images/aplicacoes/metal-mecanica/prod-corte-solda-2.png'],
  'mineral': ['/images/aplicacoes/mineracao/mineracao-principal.jpg', '/images/aplicacoes/mineracao/app-mineracao-1.jpg', '/images/aplicacoes/mineracao/app-mineracao-2.jpg'],
};

const APPLICATION_DATA: Record<string, {
  name: string;
  cat: string;
  img: string;
  desc: string;
  challenges: string[];
  solutions: string[];
  products: { name: string; path: string }[];
}> = {
  'laboratorios-analiticos': {
    name: 'Laboratórios Analíticos',
    cat: 'Laboratorial e Pesquisa',
    img: '/images/aplicacoes/lab-analitico-panel.jpg',
    desc: 'Laboratórios de análise química, controle de qualidade e pesquisa científica exigem gases de alta pureza, reguladores certificados e equipamentos de alta precisão para garantir a integridade e rastreabilidade dos resultados analíticos.',
    challenges: ['Pureza dos gases utilizados nos ensaios analíticos', 'Rastreabilidade e certificação dos instrumentos', 'Estanqueidade das conexões em gases reativos', 'Integração com sistemas LIMS e conformidade com normas'],
    solutions: ['Reguladores de alta pureza com certificado de calibração RBC', 'Cilindros com certificado de análise e rastreabilidade', 'Conexões TK-Fujikin para instrumentação analítica', 'Detectores de vazamento para gases tóxicos em laboratório'],
    products: [
      { name: 'Reguladores de Gases Especiais', path: '/produto/reguladores-especiais' },
      { name: 'Conexões para Instrumentação', path: '/produto/conexoes-instrumentacao' },
      { name: 'Detectores de Vazamento', path: '/produto/detectores-vazamento' },
      { name: 'Transmissores: Pressão - Nível - Temperatura', path: '/produto/transmissores-pressao' },
    ],
  },
  'farmaceutica': {
    name: 'Farmacêutico',
    cat: 'Laboratorial e Pesquisa',
    img: '/images/aplicacoes/farmaceutica-new.jpg',
    desc: 'A indústria farmacêutica exige gases de grau USP, sistemas validados, rastreabilidade completa e conformidade com GMP. A Prime Products fornece soluções auditáveis, com documentação técnica completa para atender às exigências da Anvisa e da FDA.',
    challenges: ['Gases com grau farmacêutico (USP) e certificados', 'Validação de sistemas e qualificação de equipamentos', 'Conformidade GMP e rastreabilidade de lotes', 'Controle de pureza e monitoramento contínuo'],
    solutions: ['Cilindros e reguladores para gases USP com certificado de análise', 'Sistemas de distribuição de gases medicinais certificados', 'Instrumentação validada para ambientes GMP', 'Detectores de vazamento e monitoramento de pureza'],
    products: [
      { name: 'Cilindros de Alumínio', path: '/produto/cilindros-aluminio' },
      { name: 'Reguladores de Gases Especiais', path: '/produto/reguladores-especiais' },
      { name: 'Válvulas Industriais - Medicinais - Especiais', path: '/produto/valvulas-industriais' },
      { name: 'Detectores de Vazamento', path: '/produto/detectores-vazamento' },
    ],
  },
  'centros-pesquisa': {
    name: 'Centros de Pesquisa',
    cat: 'Laboratorial e Pesquisa',
    img: '/images/aplicacoes/centro-pesquisa.jpg',
    desc: 'Centros de pesquisa e universidades demandam gases de altíssima pureza (5.0, 6.0), equipamentos especializados e suporte técnico de alto nível para viabilizar experimentos científicos e descobertas de ponta.',
    challenges: ['Gases de altíssima pureza (5.0, 6.0) com certificado de análise', 'Condições criogênicas para experimentos especiais', 'Flexibilidade e customização das soluções', 'Custo-benefício para aplicações de P&D acadêmico'],
    solutions: ['Cilindros e reguladores para gases de pesquisa de alta pureza', 'Dewars criogênicos para nitrogênio líquido, He e Ar líquido', 'Conexões ultra-limpas e inertes para ambientes de pesquisa', 'Sistemas de geração de gases in-situ (N₂, O₂)'],
    products: [
      { name: 'Reguladores de Gases Especiais', path: '/produto/reguladores-especiais' },
      { name: 'Dewars e Recipientes Criogênicos', path: '/produto/dewars-criogenicos' },
      { name: 'Cilindros de Alumínio', path: '/produto/cilindros-aluminio' },
      { name: 'Geração de Oxigênio e Anestesia', path: '/produto/geracao-oxigenio' },
    ],
  },
  'hospitalar': {
    name: 'Hospitalar',
    cat: 'Aplicações Médicas',
    img: '/images/aplicacoes/app-hospitalar-leito.jpg',
    desc: 'O setor hospitalar exige gases medicinais certificados, sistemas de distribuição confiáveis e equipamentos que garantam a segurança de pacientes e profissionais. A Prime atende hospitais, clínicas e centros cirúrgicos com soluções completas e suporte técnico especializado.',
    challenges: ['Fornecimento contínuo e confiável de gases medicinais', 'Conformidade com normas ABNT NBR 12188 e ANVISA', 'Sistemas de geração de oxigênio para independência de fornecedores', 'Segurança na distribuição e detecção de vazamentos'],
    solutions: ['Centrais de gases medicinais (O₂, N₂O, ar medicinal, CO₂)', 'Geradores de oxigênio PSA para produção on-site', 'Sistemas de distribuição em cobre e ramais de gases', 'Detectores de vazamento e alarmes de segurança hospitalar'],
    products: [
      { name: 'Geração de Oxigênio e Anestesia', path: '/produto/geracao-oxigenio' },
      { name: 'Cilindros de Alumínio', path: '/produto/cilindros-aluminio' },
      { name: 'Válvulas Industriais - Medicinais - Especiais', path: '/produto/valvulas-industriais' },
      { name: 'Detectores de Vazamento', path: '/produto/detectores-vazamento' },
    ],
  },
  'oleo-gas': {
    name: 'Óleo & Gás',
    cat: 'Processos Industriais',
    img: '/images/aplicacoes/segmento-oleo-gas.png',
    desc: 'Refinarias, plantas de GNL, plataformas e instalações de óleo & gás exigem instrumentação certificada para áreas classificadas, sistemas de detecção de gases tóxicos e inflamáveis e soluções de segurança funcional com certificação SIL.',
    challenges: ['Instrumentação certificada ATEX/IECEx para zonas classificadas', 'Detecção de H₂S, CO, LEL e outros gases de risco', 'Certificação de segurança funcional SIL 2/3', 'Alta disponibilidade e confiabilidade em ambientes críticos'],
    solutions: ['Transmissores de pressão com certificação ATEX e SIL', 'Detectores de gases tóxicos e inflamáveis com saída 4-20 mA/HART', 'Sistemas de supressão de incêndio por agentes limpos', 'Reguladores e válvulas para gases de processo em alta pressão'],
    products: [
      { name: 'Transmissores: Pressão - Nível - Temperatura', path: '/produto/transmissores-pressao' },
      { name: 'Detectores de Vazamento', path: '/produto/detectores-vazamento' },
      { name: 'Sistemas de Combate a Incêndio', path: '/produto/combate-incendio' },
      { name: 'Válvulas Industriais - Medicinais - Especiais', path: '/produto/valvulas-industriais' },
    ],
  },
  'industria-quimica': {
    name: 'Indústria Química',
    cat: 'Química, Óleo & Gás',
    img: '/images/aplicacoes/industria-quimica.jpg',
    desc: 'A indústria química trabalha com fluidos agressivos, gases reativos e processos em alta pressão. A Prime fornece conexões em materiais resistentes, reguladores para gases especiais e instrumentação certificada para ambientes com substâncias corrosivas.',
    challenges: ['Compatibilidade de materiais com fluidos agressivos e corrosivos', 'Detecção de gases tóxicos como Cl₂, NH₃, HF e outros', 'Alta pressão e temperaturas extremas de processo', 'Rastreabilidade e conformidade com normas de segurança'],
    solutions: ['Conexões em Hastelloy, PTFE e SS316L para fluidos agressivos', 'Detectores de gases tóxicos com certificação ATEX', 'Reguladores de pressão para gases especiais e reativos', 'Transmissores de processo com diafragma e selo químico'],
    products: [
      { name: 'Conexões para Instrumentação', path: '/produto/conexoes-instrumentacao' },
      { name: 'Detectores de Vazamento', path: '/produto/detectores-vazamento' },
      { name: 'Reguladores de Gases Especiais', path: '/produto/reguladores-especiais' },
      { name: 'Transmissores: Pressão - Nível - Temperatura', path: '/produto/transmissores-pressao' },
    ],
  },
  'alimentos-bebidas': {
    name: 'Alimentos e Bebidas',
    cat: 'Processos Industriais',
    img: '/images/aplicacoes/alimentos-e-bebidas.jpg',
    desc: 'O setor de alimentos e bebidas utiliza gases de grau alimentar para carbonatação, embalagem em atmosfera modificada (MAP), congelamento criogênico e processos de higienização. A Prime fornece gases certificados e sistemas de distribuição seguros e higiênicos.',
    challenges: ['Gases de grau alimentar (Food Grade) com certificação', 'Sistemas de embalagem em atmosfera modificada (MAP)', 'Carbonatação e dosagem precisa de CO₂', 'Higiene e conformidade com normas sanitárias'],
    solutions: ['CO₂, N₂ e O₂ de grau alimentar com certificados', 'Reguladores e conexões sanitizáveis para processos higiênicos', 'Sistemas de dosagem e mistura para carbonatação', 'Cilindros e tanques criogênicos para congelamento'],
    products: [
      { name: 'Cilindros de Alumínio', path: '/produto/cilindros-aluminio' },
      { name: 'Reguladores de Gases Especiais', path: '/produto/reguladores-especiais' },
      { name: 'Dewars e Recipientes Criogênicos', path: '/produto/dewars-criogenicos' },
      { name: 'Válvulas Industriais - Medicinais - Especiais', path: '/produto/valvulas-industriais' },
    ],
  },
  'energia-transicao-energetica': {
    name: 'Energias Renováveis e Hidrogênio',
    cat: 'Energia',
    img: '/images/aplicacoes/energias-renovaveis-hero.jpg',
    desc: 'O futuro da energia passa pelo Hidrogênio e soluções de altíssima pressão. A Prime Products fornece as melhores tecnologias do mercado (Best of Breed) em Jumbo Tubes de alta pressão e infraestrutura para H₂.',
    challenges: [
      'Garantir armazenamento e transporte 100% seguros de H₂ em altas pressões',
      'Infraestrutura para estações de abastecimento de H₂ (Filling Stations)',
      'Prevenção contra fragilização por hidrogênio em materiais sob estresse',
      'Soluções de super alta capacidade para estocagem estacionária (248 a 875 bar)'
    ],
    solutions: [
      'Sistemas de Transporte (Tube Trailers) Tipo 1 e Tipo 4',
      'Pacotes de Armazenamento de H₂ em Jumbo Tubes Tipo 4',
      'Vasos e tanques de combustível operando a 248 bar, 500 bar, 700 bar e até 875 bar',
      'Componentes e infraestrutura para centros Aeroespaciais e aplicações especiais'
    ],
    products: [
      { name: 'Reguladores de Gases Especiais', path: '/produto/reguladores-especiais' },
      { name: 'Transmissores: Pressão - Nível - Temperatura', path: '/produto/transmissores-pressao' },
      { name: 'Válvulas Industriais - Medicinais - Especiais', path: '/produto/valvulas-industriais' },
    ],
  },
  'criogenia': {
    name: 'Criogenia',
    cat: 'Energia',
    img: '/images/aplicacoes/criogenia.jpg',
    desc: 'Aplicações criogênicas demandam equipamentos especializados para armazenamento e transferência de gases liquefeitos como nitrogênio líquido (LN₂), oxigênio líquido (LOX), argônio líquido e hélio líquido.',
    challenges: ['Isolamento térmico eficiente para temperaturas criogênicas', 'Segurança no manuseio de LN₂, LOX e outros criogênicos', 'Compatibilidade de materiais com temperaturas abaixo de -150 °C', 'Logística de transporte e fornecimento contínuo'],
    solutions: ['Dewars e recipientes criogênicos de 10 a 500 litros', 'Válvulas e conexões especiais para temperaturas criogênicas', 'Sistemas de transferência e vaporizadores', 'Acessórios e EPIs para manuseio seguro de criogênicos'],
    products: [
      { name: 'Dewars e Recipientes Criogênicos', path: '/produto/dewars-criogenicos' },
      { name: 'Válvulas Industriais - Medicinais - Especiais', path: '/produto/valvulas-industriais' },
      { name: 'Cilindros de Alumínio', path: '/produto/cilindros-aluminio' },
      { name: 'Reguladores de Gases Especiais', path: '/produto/reguladores-especiais' },
    ],
  },
  'automotivo': {
    name: 'Automotivo',
    cat: 'Indústria',
    img: '/images/aplicacoes/automotivo.jpg',
    desc: 'A indústria automotiva utiliza gases para soldagem MIG/TIG, testes de estanqueidade, pintura a pó, processos de fabricação e controle de qualidade. A Prime fornece misturas certificadas, reguladores e equipamentos para cada etapa da produção.',
    challenges: ['Misturas para soldagem MIG/TIG com precisão de composição', 'Testes de estanqueidade em componentes e sistemas', 'Alta demanda e fornecimento contínuo nas linhas de produção', 'Conformidade com normas automotivas (IATF 16949)'],
    solutions: ['Misturas Ar+CO₂, Ar+He e gases puros para soldagem', 'Reguladores de alta vazão para linhas de produção', 'Cilindros de alumínio leves para aplicações móveis', 'Kits completos de corte e solda para manutenção'],
    products: [
      { name: 'Equipamentos para Corte e Solda', path: '/produto/corte-solda' },
      { name: 'Reguladores de Gases Especiais', path: '/produto/reguladores-especiais' },
      { name: 'Cilindros de Alumínio', path: '/produto/cilindros-aluminio' },
      { name: 'Detectores de Vazamento', path: '/produto/detectores-vazamento' },
    ],
  },
  'soldagem': {
    name: 'Metal Mecânica',
    cat: 'Indústria',
    img: '/images/aplicacoes/metal-mecanica.jpg',
    desc: 'Processos de soldagem MIG/TIG, eletrodo revestido, oxicorte e plasma exigem gases adequados, reguladores calibrados e acessórios certificados. A Prime fornece soluções completas para metalurgia, construção civil e manutenção industrial.',
    challenges: ['Seleção correta do gás de proteção para cada processo', 'Reguladores com vazão adequada para cada aplicação', 'Segurança no manuseio de acetileno e gases combustíveis', 'Qualidade e homogeneidade das juntas soldadas'],
    solutions: ['Gases puros e misturas para MIG/TIG (Ar, CO₂, He, N₂)', 'Maçaricos para corte oxiacetilênico e oxicorte', 'Reguladores para CO₂, O₂, Acetileno e misturas', 'Mangueiras certificadas e acessórios para soldagem'],
    products: [
      { name: 'Equipamentos para Corte e Solda', path: '/produto/corte-solda' },
      { name: 'Cilindros de Alumínio', path: '/produto/cilindros-aluminio' },
      { name: 'Reguladores de Gases Especiais', path: '/produto/reguladores-especiais' },
      { name: 'Válvulas Industriais - Medicinais - Especiais', path: '/produto/valvulas-industriais' },
    ],
  },
  'mineral': {
    name: 'Mineração',
    cat: 'Indústria',
    img: '/images/aplicacoes/mineiracao.jpg',
    desc: 'O setor mineral exige instrumentação robusta para ambientes severos, detecção de gases em espaços confinados e subterrâneos, e sistemas de segurança para proteção de trabalhadores e equipamentos em minas e plantas de beneficiamento.',
    challenges: ['Detecção de gases em espaços confinados e subterrâneos', 'Instrumentação resistente a poeira, umidade e vibração', 'Segurança ocupacional em ambientes de alto risco', 'Conformidade com NR-22 e normas de mineração'],
    solutions: ['Detectores portáteis e fixos de CO, H₂S, O₂ e LEL', 'Instrumentação com proteção IP67/IP68 para ambientes severos', 'Transmissores com certificação ATEX para áreas classificadas', 'Sistemas de combate a incêndio para plantas de beneficiamento'],
    products: [
      { name: 'Detectores de Vazamento', path: '/produto/detectores-vazamento' },
      { name: 'Transmissores: Pressão - Nível - Temperatura', path: '/produto/transmissores-pressao' },
      { name: 'Sistemas de Combate a Incêndio', path: '/produto/combate-incendio' },
      { name: 'Válvulas Industriais - Medicinais - Especiais', path: '/produto/valvulas-industriais' },
    ],
  },
};

export function ApplicationDetail() {
  const { id } = useParams<{ id: string }>();
  const app = id ? APPLICATION_DATA[id] : null;
  const galleryImages = id ? (APP_GALLERY[id] ?? []) : [];

  if (!app) {
    return <div className="text-center py-20 text-gray-500">Aplicação não encontrada</div>;
  }

  // Intercept the render if it is the Hydrogen page
  if (id === 'energia-transicao-energetica') {
    return <HydrogenEnergyPage />;
  }

  // Intercept Farmaceutica
  if (id === 'farmaceutica') {
    return <FarmaceuticaPage />;
  }

  // Intercept Automotiva
  if (id === 'automotivo') {
    return <AutomotivaPage />;
  }

  return (
    <>
      <EditableElement
        id={`app_${id}_hero`}
        type="container"
        as="section"
        className="prime-bg-standard relative min-h-[65vh] flex items-end bg-secondary overflow-hidden pb-16 pt-40"
        defaultStyle={{
          backgroundImage: `url('${app.img}')`,
          backgroundSize: 'cover',
          backgroundPosition: id === 'farmaceutica' ? 'center 15%' : 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <span className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 mb-4">{app.cat}</span>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
            <EditableElement id={`app_${id}_title`} defaultContent={app.name} />
          </h1>
        </div>
      </EditableElement>

      <section className="bg-surface py-16">
        <SectionContainer className="py-0">
          <div className="mb-8">
            <Link to="/aplicacoes" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline">
              <ArrowLeft size={16} /> Voltar para Aplicações
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-8 shadow-md">
                <h2 className="text-xl font-bold text-secondary mb-4">Sobre esta Aplicação</h2>
                <p className="text-gray-600 leading-relaxed">
                  <EditableElement id={`app_${id}_desc`} defaultContent={app.desc} />
                </p>
              </div>

              <div className="bg-white p-8 shadow-md">
                <h2 className="text-xl font-bold text-secondary mb-6">Principais Desafios</h2>
                <ul className="space-y-3">
                  {app.challenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                      <span className="text-gray-700 text-sm">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 shadow-md">
                <h2 className="text-xl font-bold text-secondary mb-6">Soluções Prime Products</h2>
                <ul className="space-y-3">
                  {app.solutions.map((s, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ArrowRight size={16} className="text-primary mt-0.5 shrink-0" />
                      <span className="text-gray-700 text-sm">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>


            </div>

            {/* Sidebar (Solicitar Informações e Produtos Relacionados) */}
            <div className="space-y-6">
              <div className="bg-secondary text-white p-8 rounded-sm shadow-lg">
                <h3 className="font-bold text-lg mb-4">Solicitar Informações</h3>
                <p className="text-gray-400 text-sm mb-6">Nossa equipe técnica está pronta para atender sua demanda.</p>
                <div className="space-y-3 text-sm mb-6">
                  <div className="flex items-center gap-3"><Phone size={16} className="text-primary" /><span>(31) 9 8670-8742</span></div>
                  <div className="flex items-center gap-3"><Mail size={16} className="text-primary" /><span>info@primeproducts.ind.br</span></div>
                </div>
                <Link to="/contato" className="block w-full bg-primary hover:bg-primary-hover text-white text-center py-3 font-bold uppercase tracking-wider rounded-sm transition-all">
                  Solicitar Cotação
                </Link>
              </div>
              <div className="bg-white p-6 shadow-md rounded-sm">
                <h3 className="font-bold text-secondary mb-4 text-sm uppercase tracking-wide">Produtos Relacionados</h3>
                <div className="space-y-2">
                  {app.products.map(({ name, path }) => (
                    <Link key={path} to={path} className="block text-sm text-gray-600 hover:text-primary transition-colors py-1 border-b border-gray-100 last:border-0 flex items-center gap-2">
                      <ArrowRight size={12} className="text-primary shrink-0" /> {name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Galeria de Imagens Técnicas e Complementares (Full Width) */}
          {galleryImages.length > 0 && (
            <div className="mt-16 border-t border-gray-200 pt-12">
              <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Galeria de Aplicações Técnicas</h2>
              <AnimateOnScroll>
                <div className={`grid gap-6 ${galleryImages.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
                  {galleryImages.map((src: string, i: number) => {
                    const isFeatured = galleryImages.length === 3 && i === 0;
                    const colSpan = isFeatured ? 'md:col-span-2' : '';
                    const height = galleryImages.length === 1 ? 'max-h-[800px] object-contain bg-gray-50' : (isFeatured ? 'h-[500px] object-cover' : 'h-96 object-cover');

                    return (
                      <div key={i} className={`relative group overflow-hidden rounded-sm shadow-md ${colSpan}`}>
                        <img 
                          src={src} 
                          alt={`${app.name} - Imagem Técnica ${i + 1}`} 
                          className={`w-full ${height} group-hover:scale-[1.02] transition-transform duration-700`} 
                          referrerPolicy="no-referrer" 
                        />
                      </div>
                    );
                  })}
                </div>
              </AnimateOnScroll>
            </div>
          )}
        </SectionContainer>
      </section>
    </>
  );
}
