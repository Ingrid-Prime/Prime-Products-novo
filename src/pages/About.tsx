import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Award, Users, TrendingUp, Target, Eye, Heart, Compass, Wrench, BookOpen, Truck } from 'lucide-react';
import { AnimateOnScroll } from '../components/AnimateOnScroll';
import { EditableElement } from '../components/EditableElement';
import { SectionContainer } from '../components/SectionContainer';

const MISSAO_VISAO = [
  {
    icon: Target,
    label: 'Missão',
    title: 'Nossa Missão',
    text: 'Fornecer soluções técnicas integradas em instrumentação, gases especiais e engenharia aplicada, com excelência, segurança e confiabilidade, apoiando processos críticos na indústria, pesquisa e aplicações médicas.',
  },
  {
    icon: Eye,
    label: 'Visão',
    title: 'Nossa Visão',
    text: 'Ser reconhecida como referência nacional em instrumentação, gases de alta pureza e engenharia aplicada, com foco em processos críticos e atuação em mercados de alta exigência técnica.',
  },
  {
    icon: Heart,
    label: 'Valores',
    title: 'Nossos Valores',
    text: 'Excelência técnica, responsabilidade, confiabilidade, segurança operacional, foco no cliente e comprometimento com normas e regulamentações aplicáveis.',
  },
];

const VALUES = [
  { icon: Award, title: 'Excelência Técnica', desc: 'Equipamentos e soluções que atendem aos mais altos padrões internacionais de qualidade, performance e segurança operacional.' },
  { icon: Target, title: 'Foco no Processo', desc: 'Cada projeto é tratado com rigor técnico. Desenvolvemos soluções personalizadas baseadas nas necessidades reais do seu processo.' },
  { icon: Users, title: 'Equipe Qualificada', desc: 'Profissionais especializados em instrumentação, gases e engenharia, com formação técnica e experiência em projetos críticos.' },
  { icon: TrendingUp, title: 'Inovação Contínua', desc: 'Portfólio atualizado com as mais recentes tecnologias do mercado, incluindo protocolos digitais e soluções de alta pureza.' },
];

const DIFERENCIAIS = [
  { icon: Compass, title: 'Atuação Integrada', desc: 'Da especificação à entrega, passando por projeto, montagem e comissionamento — gerenciamos toda a cadeia técnica.' },
  { icon: Wrench, title: 'Suporte Técnico Especializado', desc: 'Equipe disponível para suporte pós-venda, manutenção preventiva e corretiva, calibração e treinamentos.' },
  { icon: BookOpen, title: 'Conformidade e Normas', desc: 'Atuação rigorosa conforme NR-13, ATEX/IECEx, ISO, ABNT e demais normas aplicáveis aos processos atendidos.' },
  { icon: Truck, title: 'Logística Eficiente', desc: 'Estrutura logística para atendimento nacional, com estoque estratégico e agilidade na entrega de itens críticos.' },
];

const OBJETIVOS = [
  'Ampliar o atendimento a mercados de alta exigência técnica: farmacêutico, óleo e gás, hospitalar e pesquisa',
  'Consolidar o portfólio de gases de alta pureza e instalações especiais',
  'Fortalecer a oferta de serviços integrados: projeto, montagem, comissionamento e manutenção',
  'Desenvolver parcerias estratégicas com fabricantes líderes em instrumentação e segurança',
  'Expandir a atuação em projetos de engenharia aplicada e soluções customizadas',
];

export function About() {
  return (
    <>
      {/* Hero */}
      <EditableElement
        id="about_hero_bg"
        type="container"
        as="section"
        className="relative min-h-[60vh] flex items-center bg-secondary overflow-hidden"
        defaultStyle={{
          backgroundImage: "url('/images/quem-somos-equipe.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-secondary/60 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <AnimateOnScroll>
            <div className="inline-block w-20 h-1 bg-primary mb-8 rounded-full" />
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight">
              <EditableElement id="about_hero_title" defaultContent="A Prime Products" />
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={400}>
            <div className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
              <EditableElement id="about_hero_sub" defaultContent="Excelência técnica, engenharia aplicada e segurança em soluções para processos críticos." />
            </div>
          </AnimateOnScroll>
        </div>
      </EditableElement>

      {/* Apresentação institucional */}
      <section className="bg-white pb-10">
        <SectionContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <AnimateOnScroll>
              <div className="relative pl-8 pt-8">
                <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-gray-50 -z-10" />
                <EditableElement
                  id="about_main_img"
                  type="image"
                  defaultContent="/images/quem-somos-campo.png"
                  className="w-full h-auto shadow-lg relative z-10"
                />
                <div className="absolute bottom-0 right-0 bg-primary text-white p-6 md:p-10 z-20 shadow-xl -mb-6 md:-mb-10 mr-4 md:mr-0 max-w-[200px] md:max-w-[240px]">
                  <div className="text-4xl md:text-5xl font-black mb-1">
                    <EditableElement id="about_stat_num" defaultContent="+10" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider leading-tight">
                    <EditableElement id="about_stat_txt" defaultContent="Anos de Atuação Técnica" />
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
            <div className="lg:pl-8 mt-12 lg:mt-0">
              <AnimateOnScroll delay={200}>
                <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
                  <EditableElement id="about_sec_label" defaultContent="Quem Somos" />
                </h4>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 leading-tight">
                  <EditableElement id="about_sec_title" defaultContent="Soluções Técnicas com Profundidade de Engenharia" />
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll delay={300}>
                <div className="text-gray-600 space-y-4 mb-8 leading-relaxed text-base">
                  <EditableElement id="about_sec_p1" defaultContent="A Prime Products é uma empresa especializada em soluções técnicas para instrumentação, gases especiais, gases medicinais, gases industriais e aplicações de engenharia, atuando de forma integrada desde a especificação até a entrega, instalação e suporte técnico." />
                  <br />
                  <EditableElement id="about_sec_p2" defaultContent="Nossa atuação é fundamentada em critérios técnicos rigorosos, conformidade com normas de segurança aplicáveis e foco total em confiabilidade, desempenho e segurança operacional em processos críticos." />
                  <br />
                  <EditableElement id="about_sec_p3" defaultContent="Atendemos indústrias de alta exigência técnica — como farmacêutica, óleo e gás, química, hospitalar, pesquisa e energia — com equipe qualificada e logística eficiente para todo o Brasil." />
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={400}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4">
                  {[
                    'Instalação de gases especiais e medicinais',
                    'Instrumentação e projetos técnicos',
                    'Alta pureza e conformidade técnica',
                    'Segurança ocupacional e operacional',
                    'Suporte técnico especializado',
                    'Logística nacional eficiente',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center">
                      <CheckCircle className="text-primary shrink-0 mr-3" size={18} />
                      <span className="text-secondary font-medium text-sm">
                        <EditableElement id={`about_chk_${i}`} defaultContent={item} />
                      </span>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
          </div>

          {/* Missão / Visão / Valores */}
          <div className="mb-20">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Identidade Corporativa</h4>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary">Missão, Visão e Valores</h2>
                <div className="w-16 h-1 bg-primary mx-auto mt-4" />
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {MISSAO_VISAO.map(({ icon: Icon, label, title, text }, i) => (
                <AnimateOnScroll key={i} delay={i * 100}>
                  <div className="bg-surface p-8 border-l-4 border-primary h-full">
                    <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-5">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">{label}</span>
                    <h3 className="font-bold text-secondary text-lg mb-4">
                      <EditableElement id={`about_mv_${i}_title`} defaultContent={title} />
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      <EditableElement id={`about_mv_${i}_text`} defaultContent={text} />
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          {/* Valores / Pilares */}
          <div className="mb-20">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Cultura Organizacional</h4>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary">Pilares da Prime Products</h2>
                <div className="w-16 h-1 bg-primary mx-auto mt-4" />
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {VALUES.map(({ icon: Icon, title, desc }, i) => (
                <AnimateOnScroll key={i} delay={i * 100}>
                  <div className="bg-white p-8 border-t-4 border-primary shadow-lg h-full hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-6">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <h3 className="font-bold text-secondary text-lg mb-3">
                      <EditableElement id={`about_val_${i}_title`} defaultContent={title} />
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      <EditableElement id={`about_val_${i}_desc`} defaultContent={desc} />
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          {/* Diferenciais */}
          <div className="mb-10">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Por que a Prime Products</h4>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary">Nossos Diferenciais</h2>
                <div className="w-16 h-1 bg-primary mx-auto mt-4" />
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {DIFERENCIAIS.map(({ icon: Icon, title, desc }, i) => (
                <AnimateOnScroll key={i} delay={i * 100}>
                  <div className="flex items-start gap-5 bg-white p-8 shadow-md border-b-4 border-transparent hover:border-primary transition-all">
                    <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center shrink-0">
                      <Icon size={26} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary text-lg mb-2">
                        <EditableElement id={`about_dif_${i}_title`} defaultContent={title} />
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        <EditableElement id={`about_dif_${i}_desc`} defaultContent={desc} />
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* Banner Equipe */}
      <section className="relative h-72 overflow-hidden">
        <img src="/images/quem-somos-equipe.png" alt="Equipe Prime Products" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-secondary/65" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Nossa Equipe</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Profissionais Especializados</h2>
            <p className="text-gray-300 text-base max-w-2xl mx-auto">Equipe técnica qualificada para atender os mais complexos projetos de instrumentação, gases e engenharia aplicada.</p>
          </div>
        </div>
      </section>

      {/* Objetivos Estratégicos */}
      <section className="bg-secondary py-20">
        <SectionContainer className="py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll>
              <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Visão de Longo Prazo</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                <EditableElement id="about_obj_title" defaultContent="Objetivos Estratégicos" />
              </h2>
              <div className="space-y-4">
                {OBJETIVOS.map((obj, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-white font-black text-sm">{i + 1}</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      <EditableElement id={`about_obj_${i}`} defaultContent={obj} />
                    </p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <div className="bg-primary/10 border border-primary/30 p-10 rounded-sm">
                <h3 className="text-white font-bold text-xl mb-6">
                  <EditableElement id="about_cta_side_title" defaultContent="Quer conhecer nossas soluções?" />
                </h3>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                  <EditableElement id="about_cta_side_desc" defaultContent="Nossa equipe técnica está pronta para analisar sua aplicação e propor a solução mais adequada para o seu processo." />
                </p>
                <div className="space-y-3">
                  <Link to="/solucoes" className="flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/20 text-white px-5 py-3 transition-all text-sm font-semibold rounded-sm">
                    Ver Soluções e Serviços <ArrowRight size={16} />
                  </Link>
                  <Link to="/produtos" className="flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/20 text-white px-5 py-3 transition-all text-sm font-semibold rounded-sm">
                    Linha de Produtos <ArrowRight size={16} />
                  </Link>
                  <Link to="/contato" className="flex items-center justify-between bg-primary hover:bg-primary-hover text-white px-5 py-3 transition-all text-sm font-bold rounded-sm">
                    Solicitar Consultoria <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
