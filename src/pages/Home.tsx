import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Gauge, ShieldCheck, Settings, FlaskConical, Flame, CheckCircle,
  ArrowRight, MessageSquare, Star, ChevronDown, ChevronUp,
  History, Briefcase, Trophy, PhoneCall, Wrench, Factory, Zap
} from 'lucide-react';
import { AnimateOnScroll } from '../components/AnimateOnScroll';
import { EditableElement } from '../components/EditableElement';
import { SectionContainer } from '../components/SectionContainer';
import { Counter } from '../components/Counter';
import { ParticleCanvas } from '../components/ParticleCanvas';
import { useCMS } from '../contexts/CMSContext';

const SOLUTIONS = [
  { icon: Gauge, id: 'sol_1', label: 'Instrumentação de Processos', path: '/solucoes/instrumentacao-medicao', desc: 'Transmissores, sensores, reguladores e sistemas de medição de precisão.', img: '/images/solucoes-integradas/instrumentacao-medicao/capa-medicao-nova.jpg' },
  { icon: FlaskConical, id: 'sol_2', label: 'Instrumentação Analítica', path: '/solucoes/instrumentacao-analitica', desc: 'Analisadores de processo, cromatógrafos e detectores de gases.', img: '/images/solucoes-integradas/instrumentacao-analitica/capa-analitica-nova.jpg' },
  { icon: Flame, id: 'sol_3', label: 'Segurança: detecção e combate a incêndio', path: '/solucoes/gases-seguranca-automacao', desc: 'Cilindros, reguladores, dewars e sistemas de combate a incêndio.', img: '/images/solucoes-integradas/capa-seguranca-nova.jpg' },
  { icon: Settings, id: 'sol_4', label: 'Soluções Integradas', path: '/solucoes/integradas', desc: 'Skids, painéis e sistemas customizados para sua planta.', img: '/images/solucoes-integradas/capa-integradas-nova.jpg' },
  { icon: ShieldCheck, id: 'sol_5', label: 'Engenharia Aplicada', path: '/solucoes', desc: 'Consultoria técnica, especificação e suporte para processos críticos.', img: '/images/quem-somos/quem-somos-campo.webp' },
  { icon: FlaskConical, id: 'sol_6', label: 'Cilindros de Alumínio', path: '/produto/cilindros-aluminio', desc: 'Cilindros leves e resistentes para transporte de gases comprimidos.', img: '/images/produtos/cilindros-aluminio/prod-cilindros-aluminio-new.jpg' },
  { icon: FlaskConical, id: 'sol_7', label: 'Cilindros Tipo 4', path: '/produto/cilindros-tipo-4', desc: 'Cilindros compósitos de alta performance para logística e mobilidade.', img: '/images/produtos/cilindros-tipo-4/capa-new.jpeg' },
  { icon: Settings, id: 'sol_8', label: 'Conexões para Instrumentação', path: '/produto/conexoes-instrumentacao', desc: 'Conexões certificadas para aplicações analíticas e industriais.', img: '/images/produtos/conexoes-instrumentacao/prod-conexoes-instrumentacao-new.jpg' },
  { icon: FlaskConical, id: 'sol_9', label: 'Dewars e Recipientes Criogênicos', path: '/produto/dewars-criogenicos', desc: 'Recipientes criogênicos para armazenamento de gases liquefeitos.', img: '/images/produtos/dewers-criogenicos/prod-dewars-criogenicos-new.jpg' },
  { icon: Gauge, id: 'sol_10', label: 'Reguladores de Gases Especiais', path: '/produto/reguladores-especiais', desc: 'Reguladores de alta performance para gases especiais e calibração.', img: '/images/produtos/prod-reguladores-especiais-new.jpg' },
];

const APPLICATIONS = [
  { label: 'Óleo & Gás', desc: 'Instrumentação certificada ATEX para refinarias e plantas de processo.', path: '/aplicacao/oleo-gas', img: '/images/aplicacoes/segmento-oleo-gas.png' },
  { label: 'Hospitalar', desc: 'Gases medicinais, geração de oxigênio e sistemas de combate a incêndio.', path: '/aplicacao/hospitalar', img: '/images/aplicacoes/app-hospitalar-leito.jpg' },
  { label: 'Laboratórios Analíticos', desc: 'Gases de alta pureza, reguladores analíticos e criogenia.', path: '/aplicacao/laboratorios-analiticos', img: '/images/aplicacoes/lab-analitico-panel.jpg' },
];

const TESTIMONIALS = [
  {
    name: 'Cliente Corporativo',
    role: 'Parceiro Estratégico',
    company: 'Setor Petroquímico',
    quote: '[Espaço reservado para depoimento real. A Prime assegura conformidade e segurança em projetos críticos de automação e gases especiais.]',
    rating: 5,
    tag: 'AUTOMAÇÃO DE GASES',
    sealText: 'Padrão Técnico',
    sealIcon: Factory,
    avatar: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Cliente Corporativo',
    role: 'Parceiro Estratégico',
    company: 'Centro de Análises',
    quote: '[Espaço reservado para depoimento real. Mais do que fornecer reguladores, a equipe projeta skids focados na estabilidade de vazão.]',
    rating: 5,
    tag: 'SISTEMA ANALÍTICO',
    sealText: 'Qualidade Lab.',
    sealIcon: FlaskConical,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Cliente Corporativo',
    role: 'Parceiro Estratégico',
    company: 'Setor de Energia',
    quote: '[Espaço reservado para depoimento real. Projetos críticos de energia exigem rigor e especificações entregues dentro do prazo estipulado.]',
    rating: 5,
    tag: 'PROJETOS TURN-KEY',
    sealText: 'Certificação ISO',
    sealIcon: Zap,
    avatar: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  }
];

const FAQS = [
  {
    q: 'A Prime Products atende em todo o Brasil?',
    a: 'Sim. Possuímos estrutura comercial e de engenharia para atender demandas em todo o território nacional, oferecendo suporte técnico especializado tanto remoto quanto em campo para implantações de grande porte.'
  },
  {
    q: 'Os equipamentos possuem certificados de calibração?',
    a: 'Sim. Fornecemos nossos instrumentos de medição e sistemas analíticos com certificados de calibração rastreáveis RBC (Rede Brasileira de Calibração) e padrões do INMETRO, garantindo conformidade com normas de qualidade.'
  },
  {
    q: 'Quais certificações técnicas as soluções da Prime atendem?',
    a: 'Nossas soluções e skids integrados atendem a normas nacionais e internacionais rigorosas, incluindo NR-13 para vasos de pressão, NR-12 para segurança de máquinas, diretrizes da ANVISA (grau médico/farmacêutico), certificações SIL 2/3 de segurança funcional e certificações ATEX/IECEx para áreas classificadas.'
  },
  {
    q: 'Qual o prazo médio de entrega para equipamentos e sistemas?',
    a: 'Mantemos um estoque estratégico de componentes e sobressalentes críticos para atendimento imediato. Para skids, painéis dedicados e soluções customizadas de engenharia aplicada, o prazo é dimensionado de acordo com a complexidade técnica e detalhado na proposta comercial.'
  },
  {
    q: 'A Prime executa a montagem física dos sistemas além do projeto?',
    a: 'Sim. Desenvolvemos soluções completas do tipo turn-key, executando desde a engenharia de projeto (conceitual e detalhada) até a montagem mecânica, montagem de skids de válvulas, conexões de tubulação de alta pressão, teste de estanqueidade, comissionamento em campo (start-up) e treinamento operacional.'
  },
  {
    q: 'Quais disciplinas de engenharia a Prime Products atende em seus projetos?',
    a: 'Nossa equipe multidisciplinar atende plenamente as demandas de Instrumentação e Controle de Processos, Engenharia Civil (bases e estruturas de suporte), Engenharia Elétrica (painéis de comando e distribuição de força) e sistemas de HVAC (aquecimento, ventilação e ar condicionado) aplicados a salas de analisadores e abrigos industriais.'
  }
];

const STATS = [
  { icon: History, numId: 'home_stat_1_num', lblId: 'home_stat_1_lbl', num: '+35', lbl: 'Anos de Experiência' },
  { icon: Briefcase, numId: 'home_stat_2_num', lblId: 'home_stat_2_lbl', num: '+1000', lbl: 'Projetos Entregues' },
  { icon: ShieldCheck, numId: 'home_stat_3_num', lblId: 'home_stat_3_lbl', num: '100%', lbl: 'Segurança Operacional' },
  { icon: Trophy, numId: 'home_stat_4_num', lblId: 'home_stat_4_lbl', num: '+50', lbl: 'Marcas Parceiras' },
];

const SHOW_TESTIMONIALS = false;

export function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { articles, data, isEditing } = useCMS();
  const latestArticles = articles.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[700px] flex items-center bg-secondary overflow-hidden">
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        
        {/* Camada Base removida para testar luminosidade do vídeo */}
        {/* <div className="absolute inset-0 bg-secondary/70 z-[1] pointer-events-none" /> */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
           <ParticleCanvas />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/70 to-transparent z-[2] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-none">
          <div className="max-w-3xl pt-8 pointer-events-auto">
            <AnimateOnScroll>
              <div className="mb-6">
                <span className="bg-primary text-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider inline-block">
                  <EditableElement id="home_hero_badge" defaultContent="ENGENHARIA E INSTRUMENTAÇÃO" />
                </span>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 drop-shadow-2xl">
                <EditableElement id="home_hero_title" defaultContent="Excelência técnica em engenharia aplicada, segurança e soluções para processos críticos." />
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll delay={400}>
              <div className="border-l-4 border-primary pl-6 mb-10 bg-secondary/30 backdrop-blur-sm py-2 rounded-r">
                <div className="text-lg md:text-xl text-white leading-relaxed font-light opacity-90">
                  <EditableElement id="home_hero_desc" defaultContent="Equipamentos, integração técnica e engenharia aplicada para processos críticos na indústria, pesquisa e aplicações médicas." />
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={600}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/solucoes" className="bg-primary hover:bg-primary-hover text-white px-8 py-4 font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 rounded-sm">
                  <EditableElement id="home_hero_btn1" defaultContent="NOSSAS SOLUÇÕES" />
                  <ArrowRight size={18} />
                </Link>
                <Link to="/sobre" className="bg-white/10 border-2 border-white/20 backdrop-blur-sm text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-white hover:text-secondary transition-all rounded-sm">
                  <EditableElement id="home_hero_btn2" defaultContent="QUEM SOMOS" />
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 h-32 w-2/3 md:w-1/2 bg-primary z-10 pointer-events-none" style={{ clipPath: 'polygon(15% 100%, 100% 100%, 100% 0, 0 100%)' }} />
      </section>

      {/* About section */}
      <section className="bg-white overflow-visible py-20">
        <SectionContainer className="py-0">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-stretch">
            <div className="lg:col-span-3 h-full">
              <AnimateOnScroll className="h-full">
              <div className="relative pl-8 pt-8 h-full min-h-[400px]">
                <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-gray-50 -z-10" />
                <EditableElement id="home_about_img" type="image" defaultContent="/images/home/imagem-para-home-site.webp" className="w-full h-full object-cover object-center shadow-lg relative z-10 rounded-sm" />
                <div className="absolute bottom-0 right-0 bg-primary text-white p-6 md:p-10 z-20 shadow-xl -mb-6 md:-mb-10 mr-4 md:mr-0 max-w-[200px] md:max-w-[240px]">
                  <div className="text-4xl md:text-5xl font-black mb-1">
                    <EditableElement id="home_about_stat_num" defaultContent="100%" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider leading-tight">
                    <EditableElement id="home_about_stat_txt" defaultContent="Conformidade Técnica" />
                  </div>
                </div>
              </div>
              </AnimateOnScroll>
            </div>
            <div className="lg:col-span-2 lg:pl-4 mt-12 lg:mt-0">
              <AnimateOnScroll delay={200}>
                <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
                  <EditableElement id="home_about_label" defaultContent="Quem Somos" />
                </h4>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 leading-tight">
                  <EditableElement id="home_about_heading" defaultContent="Onde a precisão técnica encontra a confiabilidade operacional." />
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll delay={300}>
                <div className="text-gray-600 space-y-4 mb-8 leading-relaxed text-base">
                  <p className="text-lg font-medium text-secondary">
                    <EditableElement id="home_about_p1" defaultContent="Sua operação não pode parar. Por isso, transformamos complexidade técnica em estabilidade operacional." />
                  </p>
                  <p>
                    <EditableElement id="home_about_p2" defaultContent="Entregamos engenharia aplicada e sistemas de controle precisos. O resultado? Mais segurança, rastreabilidade e continuidade para o seu processo." />
                  </p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={400}>
                <div className="space-y-6 mb-8">
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1"><CheckCircle className="text-primary" size={20} /></div>
                    <div className="ml-4">
                      <h5 className="text-secondary font-bold text-base"><EditableElement id="home_feat1_title" defaultContent="Engenharia sem margem para erro" /></h5>
                      <p className="text-gray-600 text-sm mt-1 leading-relaxed"><EditableElement id="home_feat1_desc" defaultContent="Projetamos skids e painéis customizados para aplicações críticas. Soluções dimensionadas para a mais alta exigência." /></p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1"><CheckCircle className="text-primary" size={20} /></div>
                    <div className="ml-4">
                      <h5 className="text-secondary font-bold text-base"><EditableElement id="home_feat2_title" defaultContent="Rastreabilidade de ponta a ponta" /></h5>
                      <p className="text-gray-600 text-sm mt-1 leading-relaxed"><EditableElement id="home_feat2_desc" defaultContent="Asseguramos conformidade total. Documentação rigorosa e suporte para processos que exigem controle absoluto." /></p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1"><CheckCircle className="text-primary" size={20} /></div>
                    <div className="ml-4">
                      <h5 className="text-secondary font-bold text-base"><EditableElement id="home_feat3_title" defaultContent="Controle sob medida" /></h5>
                      <p className="text-gray-600 text-sm mt-1 leading-relaxed"><EditableElement id="home_feat3_desc" defaultContent="Colocamos a inteligência nas suas mãos. Instrumentação e IHM com leitura exata e resposta imediata." /></p>
                    </div>
                  </div>
                </div>
                <Link to="/sobre" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-3 font-bold uppercase tracking-wider transition-all hover:-translate-y-0.5 shadow-md rounded-sm">
                  <EditableElement id="home_about_btn" defaultContent="Conheça a Prime" /> <ArrowRight size={18} />
                </Link>
              </AnimateOnScroll>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* Stats */}
      <section className="bg-secondary py-16">
        <SectionContainer className="py-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map(({ icon: Icon, numId, lblId, num, lbl }, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <div className="text-4xl font-black text-white mb-1">
                    {isEditing ? (
                      <EditableElement id={numId} defaultContent={num} />
                    ) : (
                      <Counter value={String(data[numId] || num)} />
                    )}
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">
                    <EditableElement id={lblId} defaultContent={lbl} />
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* Solutions */}
      <section className="bg-surface py-20">
        <SectionContainer className="py-0">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
                <EditableElement id="home_sol_label" defaultContent="Soluções Integradas" />
              </h4>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                <EditableElement id="home_sol_title" defaultContent="Nossas Soluções e Produtos" />
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto" />
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTIONS.map(({ icon: Icon, label, path, desc, img }, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <Link to={path} className="group bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 block overflow-hidden h-full flex flex-col">
                  <div className="h-44 overflow-hidden relative">
                    <img src={img} alt={label} className="prime-image-standard w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-9 h-9 bg-primary rounded-sm flex items-center justify-center shadow-md">
                      <Icon size={18} className="text-white" />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1 border-b-4 border-transparent group-hover:border-primary transition-colors">
                    <h3 className="text-base font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                      <EditableElement id={`home_sol_${i}_title`} defaultContent={label} />
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                      <EditableElement id={`home_sol_${i}_desc`} defaultContent={desc} />
                    </p>
                    <span className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-4 transition-all">
                      Ver mais <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/produtos" className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-4 font-bold uppercase tracking-wider transition-all rounded-sm">
              <EditableElement id="home_prod_btn" defaultContent="Linha de Produtos" /> <ArrowRight size={18} />
            </Link>
          </div>
        </SectionContainer>
      </section>

      {/* Applications */}
      <section className="bg-secondary py-20 overflow-hidden">
        <SectionContainer className="py-0">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
                <EditableElement id="home_app_label" defaultContent="Aplicações Industriais" />
              </h4>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <EditableElement id="home_app_title" defaultContent="Onde a engenharia da Prime Products faz a diferença." />
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto" />
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {APPLICATIONS.map(({ label, desc, path, img }, i) => (
              <AnimateOnScroll key={i} delay={i * 150}>
                <Link to={path} className="group relative overflow-hidden block h-64 rounded-sm">
                  <img src={img} alt={label === 'Laboratórios Analíticos' ? 'Painel de gases de alta pureza em ambiente laboratorial analítico com tubulação em inox e instrumentação técnica.' : label === 'Hospitalar' ? 'Infraestrutura hospitalar de gases medicinais com painel técnico e saídas de oxigênio, ar e vácuo.' : label === 'Óleo & Gás' ? 'Ambiente offshore de óleo & gás com instrumentação de processo e infraestrutura técnica.' : label} className="prime-image-standard w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-1">
                      <EditableElement id={`home_app_${i}_lbl`} defaultContent={label} />
                    </h3>
                    <p className="text-gray-300 text-sm">
                      <EditableElement id={`home_app_${i}_desc`} defaultContent={desc} />
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight size={14} className="text-white" />
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/aplicacoes" className="inline-flex items-center gap-2 border-2 border-white/30 text-white hover:border-primary hover:text-primary px-10 py-4 font-bold uppercase tracking-wider transition-all rounded-sm">
              Ver Todas Aplicações <ArrowRight size={18} />
            </Link>
          </div>
        </SectionContainer>
      </section>

      {/* Testimonials */}
      {SHOW_TESTIMONIALS && (

      <section className="bg-surface py-20">
        <SectionContainer className="py-0">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
                <EditableElement id="home_test_label" defaultContent="Depoimentos" />
              </h4>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                <EditableElement id="home_test_title" defaultContent="Resultados comprovados em operações críticas." />
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto" />
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            {TESTIMONIALS.map(({ name, role, company, quote, rating, tag, sealText, sealIcon: SealIcon, avatar }, i) => (
              <AnimateOnScroll key={i} delay={i * 150}>
                <div className="bg-white p-8 shadow-lg border-t-4 border-primary h-full flex flex-col relative mt-2">
                  {/* Tag de Projeto */}
                  <div className="absolute top-0 right-6 -translate-y-1/2 bg-primary text-white text-[10px] sm:text-xs font-bold px-3 py-1 uppercase tracking-widest shadow-md">
                    {tag}
                  </div>
                  
                  <div className="flex mb-4">
                    {Array.from({ length: rating }).map((_, j) => (
                      <Star key={j} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <MessageSquare size={32} className="text-primary/20 mb-4" />
                  <p className="text-gray-600 italic leading-relaxed flex-grow">"{quote}"</p>
                  
                  {/* Selos / Logos */}
                  <div className="mt-6 flex items-center gap-2 text-gray-400/80">
                    <SealIcon size={20} className="shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">{sealText}</span>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-gray-100">
                      <img src={avatar} alt={name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <div className="font-bold text-secondary text-sm">{name}</div>
                      <div className="text-xs text-gray-500">{role} · {company}</div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </SectionContainer>
      </section>
      )}

      {/* Latest Articles */}
      {latestArticles.length > 0 && (
        <section className="bg-white py-20">
          <SectionContainer className="py-0">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
                  <EditableElement id="home_blog_label" defaultContent="Informação Qualificada" />
                </h4>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                  <EditableElement id="home_blog_title" defaultContent="Conteúdo Técnico" />
                </h2>
                <div className="w-16 h-1 bg-primary mx-auto" />
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {latestArticles.map((article, i) => (
                <AnimateOnScroll key={article.id} delay={i * 100}>
                  <Link to={`/artigo/${article.id}`} className="group block bg-white border border-gray-100 hover:border-primary shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden h-full">
                    {article.image && (
                      <div className="h-40 overflow-hidden">
                        <img src={article.image} alt={article.title} className="prime-image-standard w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                      </div>
                    )}
                    <div className="p-5">
                      <span className="text-xs font-bold uppercase text-primary tracking-wider">{article.category}</span>
                      <h3 className="font-bold text-secondary mt-2 mb-2 text-sm leading-tight group-hover:text-primary transition-colors line-clamp-3">{article.title}</h3>
                      <p className="text-xs text-gray-500">{article.date}</p>
                    </div>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/conteudo" className="inline-flex items-center gap-2 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-10 py-4 font-bold uppercase tracking-wider transition-all rounded-sm">
                Ver Todo Conteúdo <ArrowRight size={18} />
              </Link>
            </div>
          </SectionContainer>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-surface py-20">
        <SectionContainer className="py-0">
          <div className="max-w-3xl mx-auto">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
                  <EditableElement id="home_faq_label" defaultContent="Tire suas dúvidas" />
                </h4>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                  <EditableElement id="home_faq_title" defaultContent="Perguntas Frequentes" />
                </h2>
                <div className="w-16 h-1 bg-primary mx-auto" />
              </div>
            </AnimateOnScroll>
            <div className="space-y-3">
              {FAQS.map(({ q, a }, i) => (
                <AnimateOnScroll key={i} delay={i * 80}>
                  <div className="bg-white shadow-sm border border-gray-100">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full text-left px-6 py-5 flex justify-between items-center font-bold text-secondary hover:text-primary transition-colors"
                    >
                      <span><EditableElement id={`home_faq_${i}_q`} defaultContent={q} /></span>
                      {openFaq === i ? <ChevronUp size={20} className="text-primary shrink-0" /> : <ChevronDown size={20} className="shrink-0" />}
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-5 text-gray-600 leading-relaxed text-sm border-t border-gray-100">
                        <div className="pt-4">
                          <EditableElement id={`home_faq_${i}_a`} defaultContent={a} />
                        </div>
                      </div>
                    )}
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* CTA Final */}
      <section className="relative py-24 overflow-hidden">
        {/* Imagem de fundo e Overlay Escuro */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/quem-somos/cta-bg-reuniao.jpg')" }}
        />
        <div className="absolute inset-0 z-0 bg-gray-800/80 mix-blend-multiply" />
        
        <SectionContainer className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                <EditableElement id="home_cta_title" defaultContent="Engenharia de precisão para operações que não podem parar." />
              </h2>
              <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed font-light">
                <EditableElement id="home_cta_desc" defaultContent="Sente-se à mesa com nossos especialistas. Desenvolvemos skids e painéis customizados para os processos mais críticos da indústria." />
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contato" className="w-full sm:w-auto bg-secondary text-white font-bold py-4 px-8 rounded hover:bg-gray-800 transition-colors shadow-lg flex items-center justify-center gap-2">
                  <PhoneCall size={20} />
                  <EditableElement id="home_cta_btn1" defaultContent="Discutir meu projeto" />
                </Link>
                <Link to="/solucoes" className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded hover:bg-white hover:text-primary transition-colors flex items-center justify-center gap-2">
                  <Wrench size={20} />
                  <EditableElement id="home_cta_btn2" defaultContent="Ver Soluções Integradas" />
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
