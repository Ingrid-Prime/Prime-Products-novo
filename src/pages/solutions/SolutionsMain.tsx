import { Link } from 'react-router-dom';
import { Gauge, FlaskConical, Flame, Settings, ShieldCheck, ArrowRight, CheckCircle, Wrench, ClipboardList, LifeBuoy, BookOpen, Cpu } from 'lucide-react';
import { AnimateOnScroll } from '../../components/AnimateOnScroll';
import { EditableElement } from '../../components/EditableElement';
import { SectionContainer } from '../../components/SectionContainer';

const SERVICES = [
  {
    icon: ClipboardList,
    title: 'Projeto',
    desc: 'Elaboração de projetos técnicos para instalações de gases especiais, medicinais e industriais, sistemas de instrumentação e utilidades industriais, incluindo memorial descritivo, P&IDs e especificação de materiais.',
  },
  {
    icon: Wrench,
    title: 'Montagem',
    desc: 'Montagem e instalação de sistemas de distribuição de gases, painéis de instrumentação, skids de processo e redes de utilidades, com mão de obra especializada e conformidade com normas técnicas aplicáveis.',
  },
  {
    icon: LifeBuoy,
    title: 'Manutenção',
    desc: 'Manutenção preventiva e corretiva de sistemas de gases, instrumentos analíticos, reguladores de pressão, válvulas industriais e detectores de vazamento, garantindo confiabilidade e continuidade operacional.',
  },
  {
    icon: Cpu,
    title: 'Comissionamento',
    desc: 'Comissionamento e start-up de sistemas instalados, incluindo testes de estanqueidade, verificação funcional, calibração de instrumentos e entrega de documentação técnica e certificados rastreáveis.',
  },
  {
    icon: BookOpen,
    title: 'Treinamentos',
    desc: 'Treinamentos técnicos para equipes de operação e manutenção em sistemas de gases, instrumentação, normas de segurança NR-13 e melhores práticas para ambientes com gases tóxicos ou inflamáveis.',
  },
];

const TECHNICAL_AREAS = [
  {
    icon: Gauge,
    title: 'Instrumentação e Medição',
    path: '/solucoes/instrumentacao-medicao',
    img: '/images/sol-instrumentacao-medicao.png',
    desc: 'Transmissores, sensores, reguladores de pressão e sistemas de medição de precisão para processos industriais e laboratoriais.',
    items: ['Transmissores de pressão e nível', 'Sensores de temperatura', 'Medidores de vazão', 'Reguladores de precisão'],
  },
  {
    icon: FlaskConical,
    title: 'Instrumentação Analítica',
    path: '/solucoes/instrumentacao-analitica',
    img: '/images/sol-instrumentacao-analitica.png',
    desc: 'Analisadores de processo, cromatógrafos, detectores de gases e equipamentos para laboratórios analíticos.',
    items: ['Cromatógrafos de processo', 'Analisadores de O₂ e CO₂', 'Detectores de gases tóxicos', 'Sistemas de amostragem'],
  },
  {
    icon: Flame,
    title: 'Gases, Segurança e Automação',
    path: '/solucoes/gases-seguranca-automacao',
    img: '/images/app-seguranca-automacao.png',
    desc: 'Cilindros de gás, dewars criogênicos, reguladores e sistemas completos de detecção e combate a incêndio.',
    items: ['Instalação de gases especiais e medicinais', 'Dewars e sistemas criogênicos', 'Geração de O₂ on-site', 'Combate a incêndio por agentes gasosos'],
  },
  {
    icon: Settings,
    title: 'Soluções Integradas',
    path: '/solucoes/integradas',
    img: '/images/app-plantas-industriais.png',
    desc: 'Skids de processo, painéis de controle e sistemas customizados desenvolvidos para aplicações específicas.',
    items: ['Skids de processo e utilidades', 'Painéis de instrumentação', 'Sistemas de purificação de gases', 'Projetos sob encomenda'],
  },
];

export function SolutionsMain() {
  return (
    <>
      <EditableElement
        id="sol_hero_bg"
        type="container"
        as="section"
        className="relative min-h-[60vh] flex items-center bg-secondary overflow-hidden"
        defaultStyle={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
      >
        <div className="absolute inset-0 bg-secondary/85 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
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
      </EditableElement>

      {/* Serviços */}
      <section className="bg-white py-20">
        <SectionContainer className="py-0">
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">O que a Prime faz</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                <EditableElement id="sol_srv_title" defaultContent="Nossos Serviços" />
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
                <EditableElement id="sol_srv_desc" defaultContent="A Prime Products não atua apenas com fornecimento de produtos. Oferecemos suporte técnico completo desde o projeto até o treinamento das equipes." />
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

      {/* Áreas Técnicas */}
      <section className="bg-surface py-20">
        <SectionContainer className="py-0">
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Especialidades Técnicas</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                <EditableElement id="sol_area_title" defaultContent="Áreas de Atuação" />
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
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
                    <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
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
