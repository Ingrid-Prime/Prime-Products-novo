import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Gauge, ShieldCheck, Settings, FlaskConical, Flame, CheckCircle,
  ArrowRight, MessageSquare, Star, ChevronDown, ChevronUp,
  UserCheck, History, Briefcase, Trophy,
} from 'lucide-react';
import { AnimateOnScroll } from '../components/AnimateOnScroll';
import { EditableElement } from '../components/EditableElement';
import { SectionContainer } from '../components/SectionContainer';
import { ParticleCanvas } from '../components/ParticleCanvas';
import { useCMS } from '../contexts/CMSContext';

const SOLUTIONS = [
  { icon: Gauge, id: 'sol_1', label: 'Instrumentação e Medição', path: '/solucoes/instrumentacao-medicao', desc: 'Transmissores, sensores, reguladores e sistemas de medição de precisão.', img: '/images/sol-instrumentacao-medicao.png' },
  { icon: FlaskConical, id: 'sol_2', label: 'Instrumentação Analítica', path: '/solucoes/instrumentacao-analitica', desc: 'Analisadores de processo, cromatógrafos e detectores de gases.', img: '/images/sol-instrumentacao-analitica.png' },
  { icon: Flame, id: 'sol_3', label: 'Gases e Segurança', path: '/solucoes/gases-seguranca-automacao', desc: 'Cilindros, reguladores, dewars e sistemas de combate a incêndio.', img: '/images/app-seguranca-automacao.png' },
  { icon: Settings, id: 'sol_4', label: 'Soluções Integradas', path: '/solucoes/integradas', desc: 'Skids, painéis e sistemas customizados para sua planta.', img: '/images/app-plantas-industriais.png' },
  { icon: ShieldCheck, id: 'sol_5', label: 'Engenharia Aplicada', path: '/solucoes', desc: 'Consultoria técnica, especificação e suporte para processos críticos.', img: '/images/quem-somos-campo.png' },
];

const APPLICATIONS = [
  { label: 'Óleo e Gás', desc: 'Instrumentação certificada ATEX para refinarias e plantas de processo.', path: '/aplicacao/oleo-gas', img: '/images/app-tanques.jpg' },
  { label: 'Hospitalar e Médico', desc: 'Gases medicinais, geração de oxigênio e sistemas de combate a incêndio.', path: '/aplicacao/hospitalar', img: '/images/prod-geracao-oxigenio.png' },
  { label: 'Laboratórios e Pesquisa', desc: 'Gases de alta pureza, reguladores analíticos e criogenia.', path: '/aplicacao/laboratorios-analiticos', img: '/images/app-laboratorios-analiticos.png' },
];

const TESTIMONIALS = [
  { name: 'Eng. Ricardo Mendes', role: 'Gerente de Manutenção', company: 'Indústria Petroquímica', quote: 'A Prime Products entregou uma solução de monitoramento de gases que elevou nosso padrão de segurança. O suporte técnico durante a instalação foi o diferencial.', rating: 5 },
  { name: 'Dra. Juliana Costa', role: 'Diretora de Laboratório', company: 'Centro de Análises Clínicas', quote: 'Precisávamos de gases de alta pureza e reguladores precisos. A consultoria técnica da Prime nos ajudou a especificar exatamente o que precisávamos.', rating: 5 },
  { name: 'Carlos Ferreira', role: 'Coordenador de Projetos', company: 'Empresa de Energia', quote: 'Confiabilidade é a palavra. Os equipamentos são robustos e a entrega foi pontual. É um parceiro que indicamos para projetos críticos.', rating: 5 },
];

const FAQS = [
  { q: 'A Prime Products atende em todo o Brasil?', a: 'Sim. Possuímos estrutura logística para atender demandas em todo o território nacional, com suporte técnico remoto e, quando necessário, visitas técnicas presenciais para grandes projetos.' },
  { q: 'Os equipamentos possuem certificados de calibração?', a: 'Sim. Todos os equipamentos de medição e analíticos podem ser fornecidos com certificados de calibração rastreáveis RBC/Inmetro, garantindo a conformidade com as normas de qualidade.' },
  { q: 'Vocês realizam projetos personalizados?', a: 'Com certeza. Nossa especialidade é a Engenharia Aplicada. Analisamos a necessidade do seu processo e desenvolvemos skids, painéis e sistemas sob medida para a sua aplicação.' },
  { q: 'Qual o prazo médio de entrega para equipamentos?', a: 'Trabalhamos com estoque estratégico para itens de alto giro. Para itens importados ou sob encomenda, o prazo é alinhado na proposta comercial, sempre priorizando a agilidade.' },
];

const STATS = [
  { icon: History, numId: 'home_stat_1_num', lblId: 'home_stat_1_lbl', num: '+10', lbl: 'Anos de Experiência' },
  { icon: Briefcase, numId: 'home_stat_2_num', lblId: 'home_stat_2_lbl', num: '+500', lbl: 'Projetos Entregues' },
  { icon: ShieldCheck, numId: 'home_stat_3_num', lblId: 'home_stat_3_lbl', num: '100%', lbl: 'Segurança Operacional' },
  { icon: Trophy, numId: 'home_stat_4_num', lblId: 'home_stat_4_lbl', num: '+50', lbl: 'Marcas Parceiras' },
];

export function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { articles } = useCMS();
  const latestArticles = articles.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <EditableElement
        id="home_hero_bg"
        type="container"
        as="section"
        className="relative h-[700px] flex items-center bg-secondary overflow-hidden"
        defaultStyle={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-secondary/80 z-0" />
        <ParticleCanvas />
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
      </EditableElement>

      {/* About section */}
      <section className="bg-white overflow-visible py-20">
        <SectionContainer className="py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <div className="relative pl-8 pt-8">
                <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-gray-50 -z-10" />
                <EditableElement id="home_about_img" type="image" defaultContent="/images/quem-somos-equipe.png" className="w-full h-auto shadow-lg relative z-10" />
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
            <div className="lg:pl-8 mt-12 lg:mt-0">
              <AnimateOnScroll delay={200}>
                <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
                  <EditableElement id="home_about_label" defaultContent="Quem Somos" />
                </h4>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 leading-tight">
                  <EditableElement id="home_about_heading" defaultContent="Excelência e Segurança em Soluções Industriais" />
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll delay={300}>
                <div className="text-gray-600 space-y-4 mb-8 leading-relaxed text-base">
                  <EditableElement id="home_about_p1" defaultContent="A Prime Products é uma empresa especializada em soluções técnicas para instrumentação, gases e aplicações de engenharia, atuando de forma integrada desde a especificação até a entrega e suporte técnico." />
                  <br />
                  <EditableElement id="home_about_p2" defaultContent="Nossa atuação é baseada em critérios técnicos rigorosos, normas aplicáveis e foco total em segurança, confiabilidade e desempenho." />
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={400}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4 mb-8">
                  {['Engenharia aplicada', 'Equipamentos engineering-grade', 'Conformidade técnica', 'Segurança operacional', 'Suporte técnico especializado'].map((item, i) => (
                    <div key={i} className="flex items-center">
                      <CheckCircle className="text-primary shrink-0 mr-3" size={18} />
                      <span className="text-secondary font-medium text-sm">
                        <EditableElement id={`home_chk_${i}`} defaultContent={item} />
                      </span>
                    </div>
                  ))}
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
                    <EditableElement id={numId} defaultContent={num} />
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
                    <img src={img} alt={label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
                  <img src={img} alt={label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
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
      <section className="bg-surface py-20">
        <SectionContainer className="py-0">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
                <EditableElement id="home_test_label" defaultContent="Depoimentos" />
              </h4>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                <EditableElement id="home_test_title" defaultContent="O que dizem nossos clientes" />
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto" />
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map(({ name, role, company, quote, rating }, i) => (
              <AnimateOnScroll key={i} delay={i * 150}>
                <div className="bg-white p-8 shadow-lg border-t-4 border-primary h-full flex flex-col">
                  <div className="flex mb-4">
                    {Array.from({ length: rating }).map((_, j) => (
                      <Star key={j} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <MessageSquare size={32} className="text-primary/20 mb-4" />
                  <p className="text-gray-600 italic leading-relaxed flex-grow">"{quote}"</p>
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {name.charAt(0)}
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
                        <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
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

      {/* CTA */}
      <EditableElement
        id="home_cta_bg"
        type="container"
        as="section"
        className="relative py-24 bg-primary overflow-hidden"
        defaultStyle={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-primary/90" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <AnimateOnScroll>
            <UserCheck size={56} className="text-white/30 mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              <EditableElement id="home_cta_title" defaultContent="Pronto para elevar o nível da sua operação?" />
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              <EditableElement id="home_cta_desc" defaultContent="Fale com um especialista da Prime Products e descubra a solução ideal para o seu processo." />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contato" className="bg-white text-primary hover:bg-gray-100 px-10 py-4 font-black uppercase tracking-wider transition-all hover:-translate-y-1 shadow-2xl rounded-sm inline-flex items-center gap-2">
                <EditableElement id="home_cta_btn1" defaultContent="Solicitar Cotação" /> <ArrowRight size={18} />
              </Link>
              <Link to="/sobre" className="border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-4 font-black uppercase tracking-wider transition-all rounded-sm">
                <EditableElement id="home_cta_btn2" defaultContent="A Prime Products" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </EditableElement>
    </>
  );
}
