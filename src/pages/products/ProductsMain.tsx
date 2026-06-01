import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AnimateOnScroll } from '../../components/AnimateOnScroll';
import { EditableElement } from '../../components/EditableElement';
import { SectionContainer } from '../../components/SectionContainer';

const PRODUCTS = [
  { id: 'cilindros-aluminio', name: 'Cilindros de Alumínio', cat: 'Gases', img: '/images/prod-cilindros-aluminio.png', desc: 'Cilindros leves e resistentes para transporte de gases comprimidos.' },
  { id: 'cilindros-tipo-4', name: 'Cilindros Tipo 4', cat: 'Gases', img: '/images/prod-cilindros-tipo4.png', desc: 'Cilindros compósitos de alta performance para logística e mobilidade.' },
  { id: 'conexoes-instrumentacao', name: 'Conexões para Instrumentação', cat: 'Instrumentação', img: '/images/prod-conexoes-instrumentacao.png', desc: 'Conexões certificadas para aplicações analíticas e industriais.' },
  { id: 'detectores-vazamento', name: 'Detectores de Vazamento', cat: 'Segurança', img: '/images/prod-detectores-vazamento.png', desc: 'Detecção de gases tóxicos e inflamáveis para ambientes industriais.' },
  { id: 'dewars-criogenicos', name: 'Dewars Criogênicos', cat: 'Criogenia', img: '/images/prod-dewars-criogenicos.png', desc: 'Recipientes criogênicos para armazenamento de gases liquefeitos.' },
  { id: 'geracao-oxigenio', name: 'Geração de Oxigênio', cat: 'Gases', img: '/images/prod-geracao-oxigenio.png', desc: 'Sistemas PSA e concentradores para geração on-site de oxigênio.' },
  { id: 'corte-solda', name: 'Equipamentos de Corte e Solda', cat: 'Industrial', img: '/images/prod-corte-solda.png', desc: 'Maçaricos, reguladores e acessórios para corte e solda industrial.' },
  { id: 'reguladores-especiais', name: 'Reguladores de Pressão Especiais', cat: 'Instrumentação', img: '/images/prod-reguladores.png', desc: 'Reguladores de alta performance para gases especiais e pureza analítica.' },
  { id: 'reguladores-hidraulicos', name: 'Reguladores Hidráulicos', cat: 'Hidráulica', img: '/images/prod-reguladores-2.png', desc: 'Reguladores de alta pressão para aplicações hidráulicas especiais.' },
  { id: 'combate-incendio', name: 'Combate a Incêndio', cat: 'Segurança', img: '/images/prod-combate-incendio.png', desc: 'Sistemas de supressão com CO₂, FM-200 e outros agentes limpos.' },
  { id: 'transmissores-pressao', name: 'Transmissores de Pressão e Nível', cat: 'Instrumentação', img: '/images/prod-transmissores-pressao.png', desc: 'Transmissores inteligentes para medição de pressão diferencial, manométrica e nível.' },
  { id: 'valvulas-industriais', name: 'Válvulas Industriais e Medicinais', cat: 'Válvulas', img: '/images/prod-valvulas.png', desc: 'Válvulas de agulha, esfera e membrana para gases industriais e medicinais.' },
];

export function ProductsMain() {
  return (
    <>
      <EditableElement
        id="prod_hero_bg"
        type="container"
        as="section"
        className="relative min-h-[55vh] flex items-center bg-secondary overflow-hidden"
        defaultStyle={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
      >
        <div className="absolute inset-0 bg-secondary/85 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <AnimateOnScroll><div className="inline-block w-20 h-1 bg-primary mb-8 rounded-full" /></AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              <EditableElement id="prod_hero_title" defaultContent="Linha de Produtos" />
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={400}>
            <div className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              <EditableElement id="prod_hero_sub" defaultContent="Equipamentos engineering-grade para processos críticos industriais e laboratoriais." />
            </div>
          </AnimateOnScroll>
        </div>
      </EditableElement>

      <section className="bg-surface py-20">
        <SectionContainer className="py-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {PRODUCTS.map(({ id, name, cat, img, desc }, i) => (
              <AnimateOnScroll key={id} delay={(i % 4) * 80}>
                <Link to={`/produto/${id}`} className="group bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 block overflow-hidden">
                  <div className="h-44 overflow-hidden">
                    <img src={img} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-bold uppercase text-primary tracking-wider">{cat}</span>
                    <h3 className="font-bold text-secondary mt-2 mb-2 text-sm leading-tight group-hover:text-primary transition-colors">{name}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-3">{desc}</p>
                    <span className="flex items-center gap-1 text-primary font-bold text-xs group-hover:gap-3 transition-all">
                      Ver detalhes <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
