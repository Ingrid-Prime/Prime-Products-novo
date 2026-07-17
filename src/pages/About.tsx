import { Link } from 'react-router-dom';
import { Award, TrendingUp, Target, Eye, Heart, Compass, Wrench, Truck, ShieldCheck, FileCheck, PhoneCall } from 'lucide-react';
import { AnimateOnScroll } from '../components/AnimateOnScroll';
import { EditableElement } from '../components/EditableElement';
import { SectionContainer } from '../components/SectionContainer';

const MISSAO_VISAO = [
  {
    icon: Target,
    label: 'Missão',
    title: 'Nossa Missão',
    id_title: 'about_mv_0_title',
    id_text: 'about_mv_0_text',
    defaultTitle: 'Nossa Missão',
    defaultText: 'Desenvolver e implementar soluções técnicas em gases, instrumentação e engenharia aplicada, com foco em segurança, confiabilidade e desempenho para processos críticos na indústria, laboratórios, hospitais e centros de pesquisa.',
  },
  {
    icon: Eye,
    label: 'Visão',
    title: 'Nossa Visão',
    id_title: 'about_mv_1_title',
    id_text: 'about_mv_1_text',
    defaultTitle: 'Nossa Visão',
    defaultText: 'Ser referência nacional em soluções integradas para gases e instrumentação, reconhecida pela excelência técnica, pela confiabilidade operacional e pela capacidade de atender aplicações críticas com padrão profissional elevado.',
  },
];

const VALORES_GRID = [
  { icon: Award, title: 'Excelência técnica', id_title: 'val_0_t', id_text: 'val_0_d', text: 'Engenharia aplicada com foco em desempenho real, coerência técnica e validação de processo.' },
  { icon: ShieldCheck, title: 'Segurança e conformidade', id_title: 'val_1_t', id_text: 'val_1_d', text: 'Atuação orientada por normas, boas práticas e prevenção de risco em todas as etapas.' },
  { icon: FileCheck, title: 'Rastreabilidade e documentação', id_title: 'val_2_t', id_text: 'val_2_d', text: 'Clareza técnica, organização das entregas e suporte à operação com documentação consistente.' },
  { icon: PhoneCall, title: 'Atendimento consultivo', id_title: 'val_3_t', id_text: 'val_3_d', text: 'Compromisso com a solução mais adequada, e não apenas com o fornecimento do item.' },
  { icon: Heart, title: 'Integridade e transparência', id_title: 'val_4_t', id_text: 'val_4_d', text: 'Relação objetiva, responsável e alinhada ao que é tecnicamente viável e comercialmente sustentável.' },
  { icon: TrendingUp, title: 'Melhoria contínua', id_title: 'val_5_t', id_text: 'val_5_d', text: 'Evolução permanente de processos, equipe, portfólio e capacidade de atendimento.' },
];

const DIFERENCIAIS = [
  { icon: Compass, title: 'Visão Técnica do Processo', id: 'dif_0', text: 'Soluções integradas com visão técnica do processo' },
  { icon: Wrench, title: 'Suporte de Aplicação', id: 'dif_1', text: 'Fornecimento especializado com suporte de aplicação' },
  { icon: Truck, title: 'Instalação e Testes', id: 'dif_2', text: 'Instalação, testes e comissionamento em campo' },
  { icon: ShieldCheck, title: 'Segurança Operacional', id: 'dif_3', text: 'Foco em segurança operacional e conformidade técnica' },
  { icon: FileCheck, title: 'Documentação Entregue', id: 'dif_4', text: 'Documentação e rastreabilidade como parte da entrega' },
  { icon: Target, title: 'Ambientes Críticos', id: 'dif_5', text: 'Atendimento a ambientes de alta exigência técnica' },
];

const TABLE_DATA = [
  { fase: '1. Análise técnica', oque: 'Avaliação da aplicação, compatibilidade dos gases, requisitos do processo e necessidades da instalação.', ganho: 'Maior precisão na especificação e redução de falhas de concepção.' },
  { fase: '2. Fornecimento especializado', oque: 'Portfólio técnico em gases, instrumentação, reguladores, manifolds, conexões, detecção e sistemas integrados.', ganho: 'Acesso a soluções compatíveis, rastreáveis e alinhadas ao processo.' },
  { fase: '3. Instalação e integração', oque: 'Montagem de redes, painéis, sistemas, interligações e infraestrutura técnica em campo.', ganho: 'Segurança operacional, melhor organização da instalação e redução de retrabalho.' },
  { fase: '4. Comissionamento e testes', oque: 'Verificações, testes, ajustes, entrega técnica e suporte.', ganho: 'Entrada em operação com mais confiabilidade, conformidade e previsibilidade.' },
];

export function About() {
  return (
    <>
      {/* 1. Fundo Fixo */}
      <EditableElement
        id="about_hero_bg"
        type="container"
        as="div"
        className="fixed inset-0 -z-50 prime-bg-standard bg-secondary"
        defaultStyle={{
          backgroundImage: "url('/images/about-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-secondary/80 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/30 to-transparent z-0" />
      </EditableElement>

      {/* 2. Hero Content */}
      <section className="relative min-h-[60vh] flex items-center z-10 pt-20 pb-12">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <AnimateOnScroll>
            <div className="inline-block w-20 h-1 bg-primary mb-8 rounded-full" />
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight max-w-5xl mx-auto text-balance">
              <EditableElement id="about_hero_title" defaultContent="Engenharia aplicada e soluções integradas para gases, instrumentação e processos críticos" />
            </h1>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Container Principal */}
      <div className="bg-white relative z-10">
        {/* 3. Introdução institucional e Proposta de valor */}
        <section className="bg-white py-20">
        <SectionContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Imagem Restaurada */}
            <AnimateOnScroll>
              <div className="relative pl-8 pt-8">
                <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-gray-50 -z-10" />
                <EditableElement
                  id="about_main_img"
                  type="image"
                  defaultContent="/images/quem-somos-campo.webp"
                  className="w-full h-auto shadow-lg relative z-10"
                />
                <div className="absolute bottom-0 right-0 bg-primary text-white p-6 md:p-8 z-20 shadow-xl -mb-6 md:-mb-8 mr-4 md:mr-0 max-w-[280px]">
                  <div className="text-3xl md:text-4xl font-black mb-2">
                    <EditableElement id="about_stat_num" defaultContent="+35" />
                  </div>
                  <div className="text-sm font-medium leading-relaxed text-white/90">
                    <EditableElement id="about_stat_txt" defaultContent="Anos transformando rigor técnico em segurança, confiabilidade e suporte para processos críticos." />
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
            
            {/* Textos: Introdução + Proposta de Valor */}
            <div className="lg:pl-8 mt-12 lg:mt-0">
              <AnimateOnScroll delay={200}>
                <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
                  <EditableElement id="about_intro_label" defaultContent="Visão Geral" />
                </h4>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 leading-tight">
                  <EditableElement id="about_intro_title" defaultContent="Especialistas em processos críticos" />
                </h2>
                
                <div className="text-gray-600 space-y-4 leading-relaxed text-base mb-8">
                  <p className="text-lg font-medium text-secondary">
                    <EditableElement id="about_sec_p1" defaultContent="A Prime Products atua no desenvolvimento e na integração de soluções técnicas para gases especiais, gases industriais, gases medicinais, instrumentação e sistemas aplicados a processos críticos." />
                  </p>
                  <p>
                    <EditableElement id="about_sec_p2" defaultContent="Nossa atuação combina fornecimento especializado, engenharia aplicada, instalação em campo, comissionamento, testes e suporte técnico, com foco em segurança, conformidade e confiabilidade operacional." />
                  </p>
                  <p>
                    <EditableElement id="about_sec_p3" defaultContent="Atendemos empresas e instituições que exigem precisão técnica, rastreabilidade, documentação consistente e desempenho estável em aplicações industriais, laboratoriais, hospitalares e científicas." />
                  </p>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll delay={300}>
                <div className="bg-gray-50 border-l-4 border-primary p-6 rounded-r-lg shadow-sm">
                  <h3 className="text-lg font-bold text-secondary mb-3 flex items-center gap-2">
                    <ShieldCheck size={20} className="text-primary" />
                    <EditableElement id="about_vp_title" defaultContent="Engenharia ponta a ponta, com responsabilidade técnica real" />
                  </h3>
                  <div className="text-gray-600 space-y-3 text-sm">
                    <p><EditableElement id="about_vp_p1" defaultContent="Em operações críticas, a escolha inadequada de componentes, a instalação incorreta ou a falta de integração entre fornecimento e campo podem comprometer segurança, desempenho e continuidade operacional." /></p>
                    <p><EditableElement id="about_vp_p2" defaultContent="A Prime Products reduz esse risco ao atuar de forma integrada, conectando especificação técnica, fornecimento, instalação, comissionamento e suporte, para entregar soluções mais seguras, confiáveis e coerentes com a realidade de cada processo." /></p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* 4. Como trabalhamos */}
      <section className="bg-surface py-20">
        <SectionContainer>
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <AnimateOnScroll>
              <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Como Trabalhamos</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                <EditableElement id="about_table_title" defaultContent="Soluções técnicas com visão completa do processo" />
              </h2>
              <p className="text-gray-600 text-lg">
                <EditableElement id="about_table_sub" defaultContent="Nossa abordagem considera não apenas o equipamento isolado, mas o contexto real de aplicação, os requisitos normativos, a compatibilidade técnica dos materiais e a confiabilidade da operação ao longo do tempo." />
              </p>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={200}>
            <div className="overflow-x-auto shadow-xl rounded-lg bg-white border border-gray-100">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="py-5 px-6 font-semibold w-1/4"><EditableElement id="tbl_th_1" defaultContent="Fase" /></th>
                    <th className="py-5 px-6 font-semibold w-2/4"><EditableElement id="tbl_th_2" defaultContent="O que a Prime executa" /></th>
                    <th className="py-5 px-6 font-semibold w-1/4"><EditableElement id="tbl_th_3" defaultContent="Ganho para a operação" /></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {TABLE_DATA.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="py-5 px-6 font-bold text-secondary">
                        <EditableElement id={`tbl_row_${i}_1`} defaultContent={row.fase} />
                      </td>
                      <td className="py-5 px-6 text-gray-600">
                        <EditableElement id={`tbl_row_${i}_2`} defaultContent={row.oque} />
                      </td>
                      <td className="py-5 px-6 text-gray-700 bg-blue-50/30">
                        <EditableElement id={`tbl_row_${i}_3`} defaultContent={row.ganho} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>
        </SectionContainer>
      </section>

      {/* 5. Missão, Visão e Valores */}
      <section className="bg-white py-20">
        <SectionContainer>
          <div className="text-center mb-16">
            <AnimateOnScroll>
              <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Identidade Corporativa</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary">Missão, Visão e Valores</h2>
              <div className="w-16 h-1 bg-primary mx-auto mt-4" />
            </AnimateOnScroll>
          </div>

          {/* Missão e Visão */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {MISSAO_VISAO.map(({ icon: Icon, label, id_title, id_text, defaultTitle, defaultText }, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="bg-surface p-10 border-t-4 border-primary shadow-sm h-full hover:shadow-md transition-shadow rounded-b-lg">
                  <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center mb-6">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">{label}</span>
                  <h3 className="font-bold text-secondary text-2xl mb-4">
                    <EditableElement id={id_title} defaultContent={defaultTitle} />
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    <EditableElement id={id_text} defaultContent={defaultText} />
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Valores em Grade */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALORES_GRID.map(({ icon: Icon, id_title, id_text, title, text }, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="bg-white p-8 border border-gray-100 rounded-lg shadow-sm hover:shadow-md hover:border-primary/30 transition-all h-full group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon size={20} className="text-primary group-hover:text-white" />
                    </div>
                    <h4 className="font-bold text-secondary text-lg leading-tight">
                      <EditableElement id={id_title} defaultContent={title} />
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    <EditableElement id={id_text} defaultContent={text} />
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* 6. Diferenciais */}
      <section className="bg-secondary py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.png')] opacity-5" />
        <SectionContainer className="relative z-10">
          <div className="text-center mb-16">
            <AnimateOnScroll>
              <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Por que escolher a Prime Products</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Nossos Diferenciais</h2>
              <div className="w-16 h-1 bg-primary mx-auto mt-4" />
            </AnimateOnScroll>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 max-w-5xl mx-auto">
            {DIFERENCIAIS.map(({ icon: Icon, id, text }, i) => (
              <AnimateOnScroll key={i} delay={i * 50}>
                <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 bg-primary rounded flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-white" />
                  </div>
                  <span className="text-gray-200 font-medium text-base">
                    <EditableElement id={id} defaultContent={text} />
                  </span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* 7. CTA Final */}
      <section className="relative py-24 overflow-hidden">
        {/* Imagem de fundo e Overlay Escuro */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/cta-bg-reuniao.jpg')" }}
        />
        <div className="absolute inset-0 z-0 bg-gray-800/80 mix-blend-multiply" />
        
        <SectionContainer className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                <EditableElement id="about_cta_title" defaultContent="Pronto para elevar a segurança e a confiabilidade da sua operação?" />
              </h2>
              <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed font-light">
                <EditableElement id="about_cta_desc" defaultContent="Nossa equipe está disponível para entender a sua aplicação e propor a solução técnica mais adequada ao seu processo." />
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contato" className="w-full sm:w-auto bg-secondary text-white font-bold py-4 px-8 rounded hover:bg-gray-800 transition-colors shadow-lg flex items-center justify-center gap-2">
                  <PhoneCall size={20} />
                  Falar com um especialista
                </Link>
                <Link to="/solucoes" className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded hover:bg-white hover:text-primary transition-colors flex items-center justify-center gap-2">
                  <Wrench size={20} />
                  Conhecer nossas soluções
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </SectionContainer>
      </section>
      </div>
    </>
  );
}
