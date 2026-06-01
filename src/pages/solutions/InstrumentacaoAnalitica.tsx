import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { AnimateOnScroll } from '../../components/AnimateOnScroll';
import { EditableElement } from '../../components/EditableElement';
import { SectionContainer } from '../../components/SectionContainer';

const GALLERY = [
  { img: '/images/sol-analitica-00.png', label: 'Análise de Processo' },
  { img: '/images/sol-analitica-01.png', label: 'Instrumentação Analítica' },
  { img: '/images/sol-analitica-02.png', label: 'Detecção de Gases' },
  { img: '/images/sol-analitica-03.png', label: 'Cromatografia' },
  { img: '/images/sol-analitica-04.png', label: 'Laboratório Analítico' },
  { img: '/images/sol-instrumentacao-analitica.png', label: 'Controle de Qualidade' },
];

const PRODUCTS = [
  { path: '/produto/detectores-vazamento', img: '/images/prod-detectores-vazamento.png', name: 'Detectores de Vazamento', desc: 'Detecção de gases tóxicos e inflamáveis com tecnologia avançada.' },
  { path: '/produto/conexoes-instrumentacao', img: '/images/prod-conexoes-instrumentacao.png', name: 'Conexões Analíticas', desc: 'Conexões específicas para análise e laboratório.' },
  { path: '/produto/reguladores-especiais', img: '/images/prod-reguladores.png', name: 'Reguladores de Alta Pureza', desc: 'Reguladores certificados para gases analíticos.' },
  { path: '/produto/transmissores-pressao', img: '/images/prod-transmissores-pressao.png', name: 'Transmissores de Processo', desc: 'Para aplicações analíticas de alta precisão.' },
];

export function InstrumentacaoAnalitica() {
  return (
    <>
      <EditableElement
        id="sol_ana_bg"
        type="container"
        as="section"
        className="relative min-h-[60vh] flex items-center bg-secondary overflow-hidden"
        defaultStyle={{ backgroundImage: "url('/images/sol-instrumentacao-analitica.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
      >
        <div className="absolute inset-0 bg-secondary/80 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <AnimateOnScroll><div className="inline-block w-20 h-1 bg-primary mb-8 rounded-full" /></AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              <EditableElement id="sol_ana_title" defaultContent="Instrumentação Analítica" />
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={400}>
            <div className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              <EditableElement id="sol_ana_sub" defaultContent="Analisadores, detectores e sistemas para laboratórios e controle de processo." />
            </div>
          </AnimateOnScroll>
        </div>
      </EditableElement>

      {/* Galeria de fotos */}
      <section className="bg-secondary py-14">
        <SectionContainer className="py-0">
          <AnimateOnScroll>
            <p className="text-primary font-bold uppercase tracking-widest text-xs mb-6 text-center">Equipamentos e Laboratórios</p>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {GALLERY.map(({ img, label }, i) => (
              <AnimateOnScroll key={i} delay={i * 60}>
                <div className="relative overflow-hidden group h-36">
                  <img src={img} alt={label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-secondary/40 group-hover:bg-secondary/20 transition-colors" />
                  <p className="absolute bottom-0 left-0 right-0 text-white text-xs font-bold px-2 py-1 bg-secondary/60 text-center leading-tight">{label}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </SectionContainer>
      </section>

      <section className="bg-surface py-20">
        <SectionContainer className="py-0">
          <div className="mb-8">
            <Link to="/solucoes" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline">
              <ArrowLeft size={16} /> Voltar para Soluções
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map(({ path, img, name, desc }, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <Link to={path} className="group bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 block overflow-hidden h-full flex flex-col">
                  <div className="h-40 overflow-hidden">
                    <img src={img} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5 flex flex-col flex-1 border-b-4 border-transparent group-hover:border-primary transition-colors">
                    <h3 className="font-bold text-secondary text-sm mb-2 group-hover:text-primary transition-colors">{name}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed flex-1 mb-3">{desc}</p>
                    <span className="flex items-center gap-1 text-primary font-bold text-xs group-hover:gap-3 transition-all">Ver produto <ArrowRight size={13} /></span>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-secondary mb-4">Precisa de uma solução personalizada?</h2>
            <p className="text-gray-500 mb-6">Entre em contato com nossa equipe técnica para um projeto sob medida.</p>
            <Link to="/contato" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-3 font-bold uppercase rounded-sm transition-all">
              Solicitar Cotação <ArrowRight size={16} />
            </Link>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
