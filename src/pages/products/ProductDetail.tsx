import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, Phone, Mail, FileText, Send } from 'lucide-react';
import { AnimateOnScroll } from '../../components/AnimateOnScroll';
import { EditableElement } from '../../components/EditableElement';
import { SectionContainer } from '../../components/SectionContainer';
import { useCMS } from '../../contexts/CMSContext';
import { TRANSMITTER_CATALOG, CALIBRATION_CATALOG, HYDRAULIC_CATALOG, VALVES_CATALOG, SPECIAL_REGULATORS_CATALOG, TEKNO_VALVES_CATALOG, TKF_CATALOG, GASTRON_CATALOG, TYPE4_CATALOG, TYPE4_EXTRA_BLOCKS, ALUMINUM_CYLINDERS_CATALOG, ALUMINUM_CYLINDERS_EXTRA_BLOCKS, OXYGEN_GENERATION_CATALOG, OXYGEN_GENERATION_EXTRA_BLOCKS, CUTTING_WELDING_CATALOG, CUTTING_WELDING_EXTRA_BLOCKS, FIRE_SUPPRESSION_CATALOG, FIRE_SUPPRESSION_EXTRA_BLOCKS } from '../../data/catalogs';

const PRODUCT_DATA: Record<string, { name: string; cat: string; img: string; images: string[]; desc: string; features: string[]; apps: string[]; catalogTables?: typeof TRANSMITTER_CATALOG | typeof CALIBRATION_CATALOG | typeof HYDRAULIC_CATALOG | typeof VALVES_CATALOG | typeof SPECIAL_REGULATORS_CATALOG | typeof TEKNO_VALVES_CATALOG | typeof TKF_CATALOG | typeof GASTRON_CATALOG | typeof TYPE4_CATALOG | typeof ALUMINUM_CYLINDERS_CATALOG; extraBlocks?: typeof TYPE4_EXTRA_BLOCKS | typeof ALUMINUM_CYLINDERS_EXTRA_BLOCKS }> = {
  'cilindros-aluminio': { 
    name: 'Cilindros de Alumínio', 
    cat: 'Gases', 
    img: '/images/produtos/cilindros-aluminio/prod-cilindros-aluminio-new.jpg', 
    images: ['/images/produtos/cilindros-aluminio/prod-cilindros-aluminio-new.jpg', '/images/produtos/cilindros-aluminio/cilindro-aluminio-novo-1.jpg', '/images/produtos/cilindros-aluminio/cilindro-aluminio-novo-2.jpg', '/images/produtos/cilindros-aluminio/cilindro-aluminio-novo-3.jpg'], 
    desc: 'Cilindros leves e resistentes para transporte seguro de gases comprimidos. Fabricados em ligas de alumínio de alta resistência (ex: 6061-T6), ideais para gases medicinais, industriais e alimentícios, com acabamento interno resistente à corrosão.', 
    features: ['Conformidade com normas DOT-3AL e ISO 7866', 'Até 40% de redução de peso vs. cilindros de aço', 'Alta resistência à corrosão', 'Integridade e pureza para misturas especiais', 'Diversas opções de válvulas e roscas integradas'], 
    apps: ['Gases medicinais e homecare', 'Gases de laboratório e P&D', 'Bebidas e CO2 alimentício', 'Gases industriais e misturas analíticas'],
    catalogTables: ALUMINUM_CYLINDERS_CATALOG,
    extraBlocks: ALUMINUM_CYLINDERS_EXTRA_BLOCKS
  },
  'cilindros-tipo-4': { 
    name: 'Cilindros Tipo 4', 
    cat: 'Gases', 
    img: '/images/produtos/cilindros-tipo-4/capa/prod-cilindros-tipo4-3.png', 
    images: ['/images/produtos/cilindros-tipo-4/capa/prod-cilindros-tipo4-3.png'], 
    desc: 'Os cilindros Tipo 4 utilizam liner polimérico não metálico envolvido por reforço estrutural em fibra composta, proporcionando elevada relação entre capacidade de armazenamento e peso. São indicados para aplicações que exigem redução de massa, resistência mecânica e armazenamento de gases comprimidos em alta pressão.', 
    features: ['Liner polimérico não metálico', 'Reforço estrutural em fibra composta', 'Construção totalmente composta', 'Elevada relação resistência/peso', 'Proteção contra impacto, abrasão e esforços de instalação', 'Configuração de válvula conforme a aplicação', 'Possibilidade de integração com dispositivo de alívio de pressão', 'Montagem mediante suportes tecnicamente dimensionados'], 
    apps: ['Mobilidade a gás', 'Veículos comerciais', 'Ônibus e caminhões', 'Módulos de armazenamento', 'Sistemas de energia', 'Transporte de gases comprimidos', 'Aplicações industriais customizadas'], 
    catalogTables: TYPE4_CATALOG, 
    extraBlocks: TYPE4_EXTRA_BLOCKS 
  },
  'conexoes-instrumentacao': { name: 'Conexões para Instrumentação', cat: 'Instrumentação', img: '/images/produtos/conexoes-instrumentacao/prod-conexoes-instrumentacao-new.jpg', images: ['/images/produtos/conexoes-instrumentacao/prod-conexoes-instrumentacao-new.jpg', '/images/produtos/conexoes-instrumentacao/prod-conexoes-2.png', '/images/produtos/conexoes-instrumentacao/prod-conexoes-3.png', '/images/produtos/conexoes-instrumentacao/prod-conexoes-4.png', '/images/produtos/conexoes-instrumentacao/prod-conexoes-5.png'], desc: 'Conexões certificadas para aplicações de instrumentação analítica e industrial. Compatibilidade com transmissores, analisadores e sistemas de processo.', features: ['Conexões TK-Fujikin e equivalentes', 'Materiais: SS 316, Hastelloy, PTFE', 'Certificação para fluidos agressivos', 'Conexões compressão, NPT e flange', 'Estanqueidade garantida a altas pressões'], apps: ['Análise de processo', 'Instrumentação industrial', 'Laboratórios', 'Petroquímica'], catalogTables: TKF_CATALOG },
  'detectores-vazamento': { name: 'Detectores de Vazamento', cat: 'Segurança', img: '/images/produtos/detectores-de-vazamentos/detector-principal.jpg', images: ['/images/produtos/detectores-de-vazamentos/detector-principal.jpg', '/images/solucoes-integradas/instrumentacao-analitica/prod-detectores-vazamento.png', '/images/solucoes-integradas/instrumentacao-analitica/app-detector-2.jpg'], desc: 'Sistemas de detecção de gases tóxicos e inflamáveis para proteção de ambientes industriais. Tecnologias catalítica, eletroquímica e de infravermelho.', features: ['Detecção de H₂S, CO, NH₃, LEL', 'Saída 4-20 mA e HART', 'Certificação ATEX e IECEx', 'Display local e alarmes sonoros/visuais', 'Calibração simplificada em campo'], apps: ['Refinarias e petroquímicas', 'Plantas de gás e GNL', 'Laboratórios químicos', 'Ambientes confinados'], catalogTables: GASTRON_CATALOG },
  'dewars-criogenicos': { name: 'Dewars e Recipientes Criogênicos', cat: 'Criogenia', img: '/images/produtos/dewers-criogenicos/prod-dewars-criogenicos-new.jpg', images: ['/images/produtos/dewers-criogenicos/prod-dewars-criogenicos-new.jpg', '/images/produtos/dewers-criogenicos/prod-dewars-2.png', '/images/produtos/dewers-criogenicos/prod-dewars-3.png'], desc: 'Recipientes criogênicos para armazenamento e transporte de nitrogênio líquido, oxigênio líquido, argônio líquido e outros gases liquefeitos.', features: ['Isolamento a vácuo multicamada', 'Capacidade de 10 a 500 litros', 'Bocal de acesso largo ou estreito', 'Conformidade com normas de transporte', 'Acessórios e suprimentos'], apps: ['Criopreservação biológica', 'Laboratórios de pesquisa', 'Indústria alimentícia', 'Metalurgia criogênica'] },
  'geracao-oxigenio-anestesia': {
    name: 'Geração de Oxigênio e Anestesia',
    cat: 'Gases',
    desc: 'Sistemas completos on-site com tecnologia PSA/TCA para autonomia na geração de gases. Integração turn-key com redes hospitalares, painéis de alarme e manifolds de backup automático, garantindo conformidade com a RDC 50.',
    img: '/images/conteudos/generation-hero.jpg',
    images: ['/images/conteudos/generation-hero.jpg', '/images/produtos/anestesia-1.jpg', '/images/produtos/anestesia-2.jpg', '/images/produtos/anestesia-3.jpg'],
    features: [
      'Geração on-site via tecnologia PSA / VPSA (Pureza de 93-95%).',
      'Painéis de alarme modulares com monitoramento remoto de pressão.',
      'Manifolds automáticos para backup contínuo sem queda de pressão.',
      'Sistemas misturadores para gases anestésicos.'
    ],
    apps: ['Redes Hospitalares', 'Clínicas Veterinárias', 'Centros Cirúrgicos', 'Indústrias de Ozonização'],
    catalogTables: OXYGEN_GENERATION_CATALOG,
    extraBlocks: OXYGEN_GENERATION_EXTRA_BLOCKS
  },
  'geracao-oxigenio': { 
    name: 'Geração de Oxigênio e Anestesia', 
    cat: 'Gases', 
    img: '/images/produtos/geracao-de-oxigenio/prod-geracao-gases-2.jpg', 
    images: ['/images/produtos/geracao-de-oxigenio/psa-control-panel.png', '/images/produtos/geracao-de-oxigenio/prod-geracao-gases-1.jpg', '/images/produtos/geracao-de-oxigenio/prod-geracao-gases-3.jpg'], 
    desc: 'Sistemas PSA e concentradores de oxigênio para geração on-site. Independência de fornecedores externos de gases com produção contínua e confiável.', 
    features: ['Pureza de 93% a 99,5% O₂', 'Capacidade de 1 a 500 Nm³/h', 'Tecnologia PSA ou VPSA', 'Monitoramento e controle automático', 'Manutenção simplificada'], 
    apps: ['Hospitais e clínicas', 'Ozonização de água', 'Tratamento de efluentes', 'Soldagem e corte'],
    catalogTables: OXYGEN_GENERATION_CATALOG,
    extraBlocks: OXYGEN_GENERATION_EXTRA_BLOCKS
  },
  'corte-solda': { 
    name: 'Equipamentos para Corte e Solda', 
    cat: 'Industrial', 
    img: '/images/produtos/corte-solda/prod-corte-solda-new.jpg', 
    images: ['/images/produtos/corte-solda/prod-corte-solda-new.jpg'], 
    desc: 'Maçaricos, reguladores e acessórios para corte oxiacetilênico e soldagem MIG/TIG/Eletrodo. Equipamentos para metalurgia, fabricação e manutenção industrial.', 
    features: ['Maçaricos para corte e solda', 'Reguladores para CO₂, Ar, O₂, Acetileno', 'Mangueiras certificadas', 'Bocais e consumíveis', 'Kits completos para oficinas'], 
    apps: ['Metalurgia e siderurgia', 'Construção civil e obras', 'Manutenção industrial', 'Oficinas mecânicas'],
    catalogTables: CUTTING_WELDING_CATALOG,
    extraBlocks: CUTTING_WELDING_EXTRA_BLOCKS
  },
  'reguladores-especiais': { name: 'Reguladores de Gases Especiais', cat: 'Instrumentação', img: '/images/produtos/aplicacao-real.webp', images: ['/images/produtos/aplicacao-real.webp', '/images/produtos/reguladores-especiais/regulador-gases-08.png', '/images/produtos/reguladores-especiais/regulador-gases-04.jpg', '/images/produtos/reguladores-especiais/regulador-gases-05.jpg', '/images/produtos/reguladores-especiais/regulador-gases-06.jpg', '/images/produtos/reguladores-especiais/regulador-gases-10-cropped.png'], desc: 'Reguladores de alta performance projetados para controle de gases especiais, aplicações de alta e altíssima pressão, e calibração de instrumentos de medição. Desenvolvidos com foco em máxima estabilidade e vedação absoluta contra vazamentos.', features: ['Modelos específicos para gases especiais de alta pureza', 'Estágio simples ou duplo para alta e altíssima pressão (até 300 bar)', 'Otimizados para processos críticos de calibração analítica', 'Construção em materiais inertes (Aço Inox 316, PTFE)', 'Estanqueidade certificada com teste de hélio em fábrica'], apps: ['Análise de gases padrão e misturas especiais', 'Estações de calibração de instrumentação', 'Controle de processos críticos de alta pressão', 'Laboratórios de P&D de alta exigência'], catalogTables: SPECIAL_REGULATORS_CATALOG },
  'reguladores-hidraulicos': { name: 'Reguladores Hidráulicos', cat: 'Alta Pressão', img: '/images/produtos/prod-reguladores-hidraulicos-new.jpg', images: ['/images/produtos/prod-reguladores-hidraulicos-new.jpg', '/images/produtos/prod-reguladores-2.png', '/images/produtos/prod-reguladores-3.png', '/images/produtos/prod-reguladores-4.png', '/images/produtos/prod-reguladores-5.png', '/images/produtos/prod-reguladores-6.png'], desc: 'Reguladores de alta pressão para aplicações hidráulicas especiais.', features: ['Controle preciso de alta pressão', 'Construção robusta', 'Vedação confiável'], apps: ['Sistemas hidráulicos', 'Teste de pressão'], catalogTables: HYDRAULIC_CATALOG },
  'reguladores-calibracao': { name: 'Reguladores para Calibração de Equipamentos', cat: 'Calibração', img: '/images/produtos/reguladores-calibracao/bg-principal.png', images: ['/images/produtos/reguladores-calibracao/bg-principal.png', '/images/produtos/reguladores-calibracao/reg-cali-1.png', '/images/produtos/reguladores-calibracao/reg-cali-2.png', '/images/produtos/reguladores-calibracao/reg-cali-3.png'], desc: 'Mini reguladores e reguladores de demanda compactos de alta precisão para calibração e instrumentação.', features: ['Alta precisão', 'Design compacto', 'Conexões C-10, 5/8 UNF e CGA'], apps: ['Calibração de detectores', 'Analisadores portáteis', 'Laboratórios de campo'], catalogTables: CALIBRATION_CATALOG },
  'combate-incendio': { 
    name: 'Sistemas de Combate a Incêndio', 
    cat: 'Segurança', 
    img: '/images/solucoes-integradas/prod-combate-incendio.png', 
    images: ['/images/solucoes-integradas/prod-combate-incendio.png'], 
    desc: 'Sistemas de supressão de incêndio com CO₂, FM-200, Novec 1230 e outros agentes limpos. Proteção de salas de dados, painéis elétricos e ambientes críticos.', 
    features: ['Agentes: CO₂, FM-200, Novec 1230', 'Supressão total por inundação', 'Detecção integrada', 'Projeto conforme NFPA 12/2001', 'Manutenção e recarga de cilindros'], 
    apps: ['Data centers e CPD', 'Painéis e subestações elétricas', 'Salas de controle', 'Museus e arquivos'],
    catalogTables: FIRE_SUPPRESSION_CATALOG,
    extraBlocks: FIRE_SUPPRESSION_EXTRA_BLOCKS
  },
  'transmissores-pressao': { name: 'Transmissores: Pressão - Nível - Temperatura', cat: 'Instrumentação', img: '/images/solucoes-integradas/instrumentacao-medicao/prod-transmissores-new.jpg', images: ['/images/solucoes-integradas/instrumentacao-medicao/prod-transmissores-new.jpg', '/images/produtos/transmissores-pressao/prod-transmissores-2.png'], desc: 'Transmissores inteligentes de alta performance para medição de pressão diferencial, manométrica, absoluta e nível. Compatíveis com HART, Profibus e Foundation Fieldbus.', features: ['Precisão de ±0,04% da URL', 'Protocolo HART, Profibus PA, FF', 'Rangeabilidade de 100:1', 'Display LCD local configurável', 'Certificação ATEX e SIL 2/3'], apps: ['Óleo & gás', 'Petroquímica e química', 'Geração de energia', 'Processos críticos de segurança'], catalogTables: TRANSMITTER_CATALOG },
  'valvulas-industriais': { name: 'Válvulas Industriais - Medicinais - Especiais', cat: 'Válvulas para Cilindros', img: '/images/solucoes-integradas/instrumentacao-medicao/prod-valvulas.png', images: ['/images/solucoes-integradas/instrumentacao-medicao/prod-valvulas.png'], desc: 'Válvulas de agulha, esfera e membrana para gases industriais e medicinais. Com tecnologia de vedação de precisão, suportam altas pressões e oferecem controle fino de fluxo.', features: ['Materiais: aço inox, latão, PTFE', 'Pressões de até 400 bar', 'Tamanhos de 1/8" a 2"', 'Certificação para gases medicinais', 'Conexões rosca, solda e flange'], apps: ['Distribuição de gases medicinais', 'Laboratórios e P&D', 'Indústria química', 'Automação de processos'], catalogTables: TEKNO_VALVES_CATALOG },
};

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { articles } = useCMS();
  const [quoteForm, setQuoteForm] = useState({ name: '', company: '', email: '', phone: '', qty: '', details: '' });
  const [quoteSent, setQuoteSent] = useState(false);
  const [quoteSending, setQuoteSending] = useState(false);

  const handleQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSending(true);
    await new Promise((r) => setTimeout(r, 800));
    setQuoteSent(true);
    setQuoteSending(false);
  };

  const inputCls = 'w-full border border-gray-200 rounded-sm px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white text-secondary placeholder-gray-400';

  const product = id ? PRODUCT_DATA[id] : null;
  const article = articles.find((a) => a.id === id);

  if (!product && !article) {
    return (
      <SectionContainer className="text-center py-32">
        <h1 className="text-2xl font-bold text-secondary mb-4">Produto não encontrado</h1>
        <Link to="/produtos" className="text-primary font-bold hover:underline inline-flex items-center gap-2">
          <ArrowLeft size={16} /> Voltar para Produtos
        </Link>
      </SectionContainer>
    );
  }

  const name = product?.name ?? article?.title ?? '';
  const cat = product?.cat ?? article?.category ?? '';
  const img = product?.img ?? article?.image ?? '';
  const images = product?.images ?? (img ? [img] : []);
  const desc = product?.desc ?? article?.summary ?? '';
  const features = product?.features ?? [];
  const apps = product?.apps ?? [];

  return (
    <>
      <EditableElement
        id={`prod_${id}_hero_bg`}
        type="container"
        as="section"
        className="prime-bg-standard relative min-h-[65vh] flex items-end bg-secondary overflow-hidden pb-16 pt-40"
        defaultStyle={{ backgroundImage: `url('${img}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <span className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 mb-4">{cat}</span>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
            <EditableElement id={`prod_${id}_title`} defaultContent={name} />
          </h1>
        </div>
      </EditableElement>

      <section className="bg-surface py-16">
        <SectionContainer className="py-0">
          <div className="mb-8">
            <Link to="/produtos" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline">
              <ArrowLeft size={16} /> Voltar para Produtos
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className={`bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex justify-center items-center h-full min-h-[300px] ${id === 'cilindros-tipo-4' ? 'overflow-hidden' : ''}`}>
              <img 
                src={img} 
                alt={name} 
                className={`max-w-full max-h-96 object-contain mix-blend-multiply ${id === 'cilindros-tipo-4' ? 'scale-[1.30] origin-top-left' : ''}`} 
              />
            </div>
            <div className="space-y-6">
              <h1 className="text-3xl font-black text-secondary">{name}</h1>
              <p className="text-gray-600 leading-relaxed">{desc}</p>
              {features.length > 0 && (
                <ul className="space-y-2">
                  {features.slice(0, 4).map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle size={16} className="text-primary shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-8 shadow-md">
                <h2 className="text-xl font-bold text-secondary mb-4">Descrição</h2>
                {article?.content ? (
                  <div className="prose prose-sm max-w-none text-gray-600" dangerouslySetInnerHTML={{ __html: article.content }} />
                ) : (
                  <p className="text-gray-600 leading-relaxed">
                    <EditableElement id={`prod_${id}_desc`} defaultContent={desc} />
                  </p>
                )}
              </div>
              {features.length > 0 && (
                <div className="bg-white p-8 shadow-md">
                  <h2 className="text-xl font-bold text-secondary mb-6">Características Técnicas</h2>
                  <ul className="space-y-3">
                    {features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                        <span className="text-gray-700 text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {apps.length > 0 && (
                <div className="bg-white p-8 shadow-md">
                  <h2 className="text-xl font-bold text-secondary mb-6">Aplicações</h2>
                  <div className="grid grid-cols-2 gap-3">
                    {apps.map((a, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <ArrowRight size={14} className="text-primary shrink-0" /> {a}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {!product?.catalogTables && (
                <AnimateOnScroll>
                  <img src={img} alt={name === 'Geração de Oxigênio e Anestesia' ? 'Sistema de geração de gases on-site com tecnologia PSA/TCA em instalação técnica.' : name} className="w-full rounded-sm shadow-lg mix-blend-multiply" referrerPolicy="no-referrer" />
                  {images.length > 1 && (
                    <div className={`grid ${images.length === 2 ? 'grid-cols-1' : 'grid-cols-2'} gap-2 mt-2`}>
                      {images.slice(1).map((src, i) => {
                          const isFullWidth = src.includes('regulador-gases-10-cropped.png');
                          const isDetector = id === 'detectores-vazamento';
                          const isCalibracao = id === 'reguladores-calibracao';
                          const isEspeciais = id === 'reguladores-especiais';
                          return (
                            <img
                              key={i}
                              src={src}
                              alt={`${name} ${i + 2}`}
                              className={`prime-image-standard mix-blend-multiply ${isFullWidth ? 'col-span-2 h-48 object-cover object-center bg-white border border-gray-100' : (isDetector ? 'h-64 object-cover' : (isCalibracao ? 'h-48 object-contain bg-white border border-gray-100' : (isEspeciais ? 'h-40 object-contain bg-white p-2 border border-gray-100' : 'h-28 object-cover')))} w-full shadow-sm rounded-sm hover:opacity-90 transition-opacity`}
                              referrerPolicy="no-referrer"
                            />
                          );
                        })}
                    </div>
                  )}
                </AnimateOnScroll>
              )}
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
                <h3 className="font-bold text-secondary mb-4 text-sm uppercase tracking-wide">Outros Produtos</h3>
                <div className="space-y-2">
                  {Object.entries(PRODUCT_DATA).filter(([k]) => k !== id).slice(0, 4).map(([key, p]) => (
                    <Link key={key} to={`/produto/${key}`} className="block text-sm text-gray-600 hover:text-primary transition-colors py-1 border-b border-gray-100 last:border-0 flex items-center gap-2">
                      <ArrowRight size={12} className="text-primary shrink-0" /> {p.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 mt-12">
            {/* Extra Blocks */}
            {product?.extraBlocks && (
              <div className="space-y-8 mb-12">
                {product.extraBlocks.map((block: any, i: number) => (
                  <div key={i} className={`bg-white p-8 shadow-md rounded-sm grid grid-cols-1 ${block.image ? 'md:grid-cols-2' : ''} gap-8 items-center`}>
                    <div className={i % 2 !== 0 && block.image ? 'md:order-last' : ''}>
                      <h2 className="text-2xl font-bold text-secondary mb-4 border-l-4 border-primary pl-4">{block.title}</h2>
                      {block.desc && <p className="text-gray-600 mb-6 leading-relaxed">{block.desc}</p>}
                      {block.list && (
                        <ul className="space-y-3 mb-6">
                          {block.list.map((item: string, j: number) => (
                            <li key={j} className="flex items-start gap-3">
                              <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                              <span className="text-gray-700 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {block.warning && (
                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-sm mt-4">
                          <p className="text-yellow-800 text-sm font-medium">{block.warning}</p>
                        </div>
                      )}
                    </div>
                    {block.image && (
                      <div>
                        <img src={block.image} alt={block.title} className="w-full max-h-80 object-contain rounded-sm shadow-sm border border-gray-100 mix-blend-multiply" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Catalog Tables */}
              {product?.catalogTables && (
                <div className="bg-white p-8 shadow-md">
                  <h2 className="text-xl font-bold text-secondary mb-6">Modelos e Especificações Técnicas</h2>
                  <div className="space-y-4">
                    {product.catalogTables.map((table: any, i: number) => (
                      <details key={i} className="group border border-gray-200 rounded-sm">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 bg-gray-50 hover:bg-gray-100 transition-colors">
                          <span className="text-secondary font-bold text-sm uppercase tracking-wide">{table.title}</span>
                          <span className="transition group-open:rotate-180">
                            <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20"><path d="M6 9l6 6 6-6"></path></svg>
                          </span>
                        </summary>
                        <div className="p-4 text-gray-600 border-t border-gray-200 overflow-x-auto">
                          <table className="w-full text-sm text-left">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                              <tr>
                                {table.columns.map((col: string, j: number) => (
                                  <th key={j} className="px-4 py-3">{col}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {table.rows.map((row: string[], j: number) => (
                                <tr key={j} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                                  {row.map((cell: string, k: number) => (
                                    <td key={k} className="px-4 py-3 whitespace-pre-line align-top">
                                      {cell.includes('<img') ? (
                                        <div className="[&>img]:mix-blend-multiply" dangerouslySetInnerHTML={{ __html: cell }} />
                                      ) : (
                                        cell
                                      )}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}


              {/* Datasheet */}
              <div className="bg-white p-8 shadow-md">
                <h2 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                  <FileText size={20} className="text-primary" /> Datasheet e Documentação
                </h2>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                  Solicite o datasheet técnico completo, ficha de especificações ou documentação de certificação deste produto diretamente com nossa equipe.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contato"
                    className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-white px-6 py-3 font-bold text-sm uppercase tracking-wider rounded-sm transition-all"
                  >
                    <FileText size={16} /> Solicitar Datasheet
                  </Link>
                  <Link
                    to="/contato"
                    className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 font-bold text-sm uppercase tracking-wider rounded-sm transition-all"
                  >
                    Solicitar Certificados
                  </Link>
                </div>
              </div>

              {/* Formulário de cotação técnica */}
              <div className="bg-white p-8 shadow-md">
                <h2 className="text-xl font-bold text-secondary mb-2">Questionário Técnico para Cotação</h2>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  Preencha os dados abaixo para que nossa equipe elabore uma proposta técnica personalizada para este produto.
                </p>
                {quoteSent ? (
                  <div className="text-center py-8">
                    <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-secondary mb-2">Solicitação enviada!</h3>
                    <p className="text-gray-500 text-sm mb-4">Nossa equipe técnica entrará em contato em breve.</p>
                    <button onClick={() => setQuoteSent(false)} className="text-primary font-bold text-sm hover:underline">
                      Enviar nova solicitação
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleQuote} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Nome *</label>
                        <input className={inputCls} required placeholder="Seu nome" value={quoteForm.name} onChange={(e) => setQuoteForm((f) => ({ ...f, name: e.target.value }))} />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Empresa *</label>
                        <input className={inputCls} required placeholder="Empresa" value={quoteForm.company} onChange={(e) => setQuoteForm((f) => ({ ...f, company: e.target.value }))} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">E-mail *</label>
                        <input type="email" className={inputCls} required placeholder="seu@email.com" value={quoteForm.email} onChange={(e) => setQuoteForm((f) => ({ ...f, email: e.target.value }))} />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Telefone</label>
                        <input className={inputCls} placeholder="(11) 9 0000-0000" value={quoteForm.phone} onChange={(e) => setQuoteForm((f) => ({ ...f, phone: e.target.value }))} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Quantidade / Volume</label>
                      <input className={inputCls} placeholder="Ex: 5 unidades, 200 L/min, etc." value={quoteForm.qty} onChange={(e) => setQuoteForm((f) => ({ ...f, qty: e.target.value }))} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Detalhes técnicos da aplicação *</label>
                      <textarea className={`${inputCls} resize-none`} rows={4} required placeholder="Descreva sua aplicação, condições de processo, pressão, temperatura, fluido, etc." value={quoteForm.details} onChange={(e) => setQuoteForm((f) => ({ ...f, details: e.target.value }))} />
                    </div>
                    <button type="submit" disabled={quoteSending} className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 rounded-sm transition-all flex items-center justify-center gap-2 disabled:opacity-60">
                      <Send size={16} /> {quoteSending ? 'ENVIANDO...' : 'SOLICITAR COTAÇÃO TÉCNICA'}
                    </button>
                  </form>
                )}
              </div>
            </div>
        </SectionContainer>
      </section>
    </>
  );
}
