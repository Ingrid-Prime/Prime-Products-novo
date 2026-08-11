import { Link } from 'react-router-dom';
import { Gauge, FlaskConical, Flame, Settings, ShieldCheck, ArrowRight, CheckCircle, Wrench, ClipboardList, LifeBuoy, BookOpen, Cpu, Wind, Scan, Star, MessageSquare, Factory } from 'lucide-react';
import { AnimateOnScroll } from '../../components/AnimateOnScroll';
import { EditableElement } from '../../components/EditableElement';
import { SectionContainer } from '../../components/SectionContainer';

const SOLUTIONS_TESTIMONIALS = [
  {
    name: 'Cliente Corporativo',
    role: 'Parceiro Estratégico',
    company: 'Indústria Química',
    quote: '[Espaço reservado para depoimento real. A integração entre engenharia e execução na montagem de redes de gases assegura uma instalação técnica impecável.]',
    rating: 5,
    tag: 'PROJETO E MONTAGEM',
    sealText: 'Padrão Técnico',
    sealIcon: Factory,
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Cliente Corporativo',
    role: 'Parceiro Estratégico',
    company: 'Setor Farmacêutico',
    quote: '[Espaço reservado para depoimento real. O comissionamento e a documentação as-built rigorosa garantem total rastreabilidade e segurança operacional.]',
    rating: 5,
    tag: 'COMISSIONAMENTO',
    sealText: 'Controle de Qualidade',
    sealIcon: ShieldCheck,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  }
];

const SERVICES = [
  {
    icon: ClipboardList,
    title: 'Projeto',
    desc: 'Elaboração de projetos de engenharia aplicada para instalações de gases e instrumentação, com atuação integrada na especificação técnica de sistemas complexos e fluxogramas de processo (P&IDs).',
  },
  {
    icon: Wrench,
    title: 'Montagem',
    desc: 'Execução real e instalação física de redes de distribuição, painéis e skids de processo, garantindo montagem de alta integridade técnica e conformidade rigorosa com as normas de segurança operacionais.',
  },
  {
    icon: Cpu,
    title: 'Comissionamento',
    desc: 'Testes funcionais, testes de estanqueidade e comissionamento de sistemas, atestando a conformidade técnica, calibragem e rastreabilidade para o início seguro da operação.',
  },
  {
    icon: BookOpen,
    title: 'Treinamentos',
    desc: 'Capacitação técnica de equipes para operação segura de sistemas de gases e instrumentação de processos, alinhando as melhores práticas do setor e requisitos de segurança operacional.',
  },
  {
    icon: LifeBuoy,
    title: 'Manutenção',
    desc: 'Suporte técnico contínuo através de manutenção preditiva, preventiva e corretiva para garantir o desempenho operacional de sistemas críticos, minimizando paradas não programadas.',
  },
];

const TECHNICAL_AREAS = [
  {
    icon: Gauge,
    title: 'Instrumentação de Processos',
    path: '/solucoes/instrumentacao-medicao',
    img: '/images/solucoes-integradas/instrumentacao-medicao/capa-medicao-nova.jpg',
    desc: 'Transmissores, sensores, reguladores de pressão e sistemas de medição de precisão para processos industriais e laboratoriais.',
    items: ['Transmissores de pressão e nível', 'Sensores de temperatura', 'Medidores de vazão', 'Reguladores de precisão'],
  },
  {
    icon: FlaskConical,
    title: 'Instrumentação Analítica',
    path: '/solucoes/instrumentacao-analitica',
    img: '/images/solucoes-integradas/instrumentacao-analitica/capa-analitica-nova.jpg',
    desc: 'Analisadores de processo, cromatógrafos, detectores de gases e equipamentos para laboratórios analíticos.',
    items: ['Cromatógrafos de processo', 'Analisadores de O₂ e CO₂', 'Detectores de gases tóxicos', 'Sistemas de amostragem'],
  },
  {
    icon: Flame,
    title: 'Segurança: detecção e combate a incêndio',
    path: '/solucoes/gases-seguranca-automacao',
    img: '/images/solucoes-integradas/capa-seguranca-nova.jpg',
    desc: 'Cilindros de gás, dewars criogênicos, reguladores e sistemas completos de detecção e combate a incêndio.',
    items: ['Instalação de gases especiais e medicinais', 'Dewars e sistemas criogênicos', 'Geração de O₂ on-site', 'Combate a incêndio por agentes gasosos'],
  },
  {
    icon: Settings,
    title: 'Soluções Integradas',
    path: '/solucoes/integradas',
    img: '/images/solucoes-integradas/capa-integradas-nova.jpg',
    desc: 'Skids de processo, painéis de controle e sistemas customizados desenvolvidos para aplicações específicas.',
    items: ['Skids de processo e utilidades', 'Painéis de instrumentação', 'Sistemas de purificação de gases', 'Projetos sob encomenda'],
  },
  {
    icon: Wind,
    title: 'Instalação de Rede de Gases',
    path: '/solucoes/instalacao-rede-gases',
    img: '/images/solucoes-integradas/instalacao-redes-gases/instalacao-gases-fundo.jpg',
    desc: 'Desenvolvimento de soluções técnicas e montagem física de redes para gases especiais, industriais e centrais de gases.',
    items: ['Redes em Inox 316L', 'Centrais e manifolds', 'Painéis de ponto de uso', 'Testes de estanqueidade'],
  },
  {
    icon: BookOpen,
    title: 'Guia Técnico de Ar Comprimido',
    path: '/solucoes/ar-comprimido-industrial-guia-tecnico',
    img: '/images/solucoes-integradas/capa-guia-ar-v3.jpg',
    desc: 'Contaminantes, pureza ISO 8573, tecnologias de secagem, compressores e projeto de redes industriais.',
    items: ['ISO 8573', 'Tecnologias de Compressores', 'Seleção de Secadores', 'Boas práticas e redes'],
  },
  {
    icon: Scan,
    title: 'Levantamento 3D e As Built',
    path: '/solucoes/engenharia-digital-3d',
    img: '/images/solucoes-integradas/engenharia-3d/eng-3d-bg.jpg',
    desc: 'Reality capture, modelagem e engenharia reversa para instalações críticas. Transformamos nuvens de pontos em as built validado.',
    items: ['Escaneamento Laser 3D', 'Scan-to-BIM e Plant 3D', 'Análise de Interferências', 'Dataviewer interativo'],
  },
];

const SHOW_TESTIMONIALS = false;

export function SolutionsMain() {
  return (
    <>
      <EditableElement
        id="sol_hero_bg"
        type="container"
        as="div"
        className="fixed inset-0 -z-50 prime-bg-standard bg-secondary"
        defaultStyle={{ backgroundImage: "url('/images/solucoes-integradas/solucoes-integradas-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-secondary/70 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/20 to-transparent z-0" />
      </EditableElement>

      <section className="relative min-h-[50vh] flex items-center z-10 pt-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <AnimateOnScroll>
            <div className="inline-block w-20 h-1 bg-primary mb-8 rounded-full" />
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6">
              <EditableElement id="sol_hero_title" defaultContent="Soluções Técnicas Integradas" />
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={400}>
            <div className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              <EditableElement id="sol_hero_sub" defaultContent="Serviços de engenharia aplicada e áreas técnicas especializadas para processos críticos industriais e laboratoriais." />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 relative z-10">
        <SectionContainer className="py-0">
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">O que a Prime faz</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <EditableElement id="sol_srv_title" defaultContent="Serviços de Engenharia e Atuação Integrada" />
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
                <EditableElement id="sol_srv_desc" defaultContent="Mais do que fornecer componentes, a Prime Products assegura a execução real e a integridade de seus processos críticos por meio de engenharia aplicada e suporte técnico completo de ponta a ponta." />
              </p>
              <div className="w-16 h-1 bg-primary mx-auto mt-6" />
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {SERVICES.map(({ icon: Icon, title, desc }, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="bg-surface p-7 border-b-4 border-transparent hover:border-primary shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-5 rounded-sm">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-secondary text-base mb-3">
                    <EditableElement id={`sol_srv_${i}_title`} defaultContent={title} />
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed flex-1">
                    <EditableElement id={`sol_srv_${i}_desc`} defaultContent={desc} />
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/contato" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-3 font-bold uppercase rounded-sm transition-all">
              Solicitar Proposta de Serviço <ArrowRight size={16} />
            </Link>
          </div>
        </SectionContainer>
      </section>

      {/* Depoimentos Soluções */}
      {SHOW_TESTIMONIALS && (

      <section className="py-20 relative z-10 border-t border-white/10">
        <SectionContainer className="py-0">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
                Provas Sociais
              </h4>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Entregas que geram impacto real
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto" />
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto pt-4">
            {SOLUTIONS_TESTIMONIALS.map(({ name, role, company, quote, rating, tag, sealText, sealIcon: SealIcon, avatar }, i) => (
              <AnimateOnScroll key={i} delay={i * 150}>
                <div className="bg-white p-8 shadow-lg border-t-4 border-primary h-full flex flex-col relative mt-2">
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
                  
                  <div className="mt-6 flex items-center justify-end gap-2 text-gray-400/80">
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

      {/* Áreas Técnicas */}
      <section className="py-20 relative z-10">
        <SectionContainer className="py-0">
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Especialidades Técnicas</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <EditableElement id="sol_area_title" defaultContent="Áreas de Atuação" />
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
                <EditableElement id="sol_area_desc" defaultContent="Quatro verticais técnicas que cobrem as principais demandas de instrumentação, gases e engenharia para processos críticos." />
              </p>
              <div className="w-16 h-1 bg-primary mx-auto mt-6" />
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {TECHNICAL_AREAS.map(({ icon: Icon, title, path, img, desc, items }, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="bg-white shadow-lg overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                  <div className="h-56 overflow-hidden relative">
                    <img src={img} alt={title} className={`prime-image-standard w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${img.includes('capa-guia-ar') ? 'object-[center_30%]' : ''}`} referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                    <div className="absolute bottom-4 left-6 flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center">
                        <Icon size={20} className="text-white" />
                      </div>
                      <h3 className="text-white font-bold text-lg">{title}</h3>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">{desc}</p>
                    <ul className="space-y-2 mb-6">
                      {items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle size={14} className="text-primary shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                    <Link to={path} className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-4 transition-all group-hover:text-primary-hover">
                      Ver detalhes <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="mt-16 bg-secondary rounded-sm p-10 text-center">
            <ShieldCheck size={48} className="text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">Engenharia Aplicada ao Seu Processo</h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">Nossa equipe técnica atua desde a especificação até a entrega, comissionamento e treinamento, garantindo a solução ideal para cada aplicação.</p>
            <Link to="/contato" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-3 font-bold uppercase rounded-sm transition-all">
              Solicitar Consultoria <ArrowRight size={16} />
            </Link>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
