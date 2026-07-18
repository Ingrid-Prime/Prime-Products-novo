import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AnimateOnScroll } from '../../components/AnimateOnScroll';
import { EditableElement } from '../../components/EditableElement';
import { SectionContainer } from '../../components/SectionContainer';

const PRODUCTS = [
  { id: 'cilindros-aluminio', name: 'Cilindros de Alumínio', cat: 'Gases', img: '/images/produtos/cilindros-aluminio/prod-cilindros-aluminio-new.jpg', desc: 'Cilindros leves e resistentes para transporte de gases comprimidos.' },
  { id: 'cilindros-tipo-4', name: 'Cilindros Tipo 4', cat: 'Gases', img: '/images/produtos/cilindros-tipo-4/prod-cilindros-tipo4-new.jpg', desc: 'Cilindros compósitos de alta performance para logística e mobilidade.' },
  { id: 'conexoes-instrumentacao', name: 'Conexões para Instrumentação', cat: 'Instrumentação', img: '/images/produtos/conexoes-instrumentacao/prod-conexoes-instrumentacao-new.jpg', desc: 'Conexões certificadas para aplicações analíticas e industriais.' },
  { id: 'detectores-vazamento', name: 'Detectores de Vazamento', cat: 'Segurança', img: '/images/produtos/detectores-de-vazamentos/detector-principal.jpg', desc: 'Detecção de gases tóxicos e inflamáveis para ambientes industriais.' },
  { id: 'dewars-criogenicos', name: 'Dewars Criogênicos', cat: 'Criogenia', img: '/images/produtos/dewers-criogenicos/prod-dewars-criogenicos-new.jpg', desc: 'Recipientes criogênicos para armazenamento de gases liquefeitos.' },
  { id: 'geracao-oxigenio', name: 'Geração de Oxigênio', cat: 'Gases', img: '/images/produtos/geracao-de-oxigenio/prod-geracao-gases-2.jpg', desc: 'Sistemas PSA e concentradores para geração on-site de oxigênio.' },
  { id: 'corte-solda', name: 'Equipamentos de Corte e Solda', cat: 'Industrial', img: '/images/produtos/corte-solda/prod-corte-solda-new.jpg', desc: 'Maçaricos, reguladores e acessórios para corte e solda industrial.' },
  { id: 'reguladores-especiais', name: 'Reguladores de Gases Especiais', cat: 'Instrumentação', img: '/images/produtos/reguladores-especiais/aplicacao real.webp', desc: 'Reguladores de alta performance para gases especiais, alta pressão e calibração.' },
  { id: 'reguladores-hidraulicos', name: 'Reguladores Hidráulicos', cat: 'Hidráulica', img: '/images/produtos/prod-reguladores-hidraulicos-new.jpg', desc: 'Reguladores de alta pressão para aplicações hidráulicas especiais.' },
  { id: 'reguladores-calibracao', name: 'Reguladores para Calibração de Equipamentos', cat: 'Instrumentação', img: '/images/produtos/reguladores-calibracao/bg-principal.png', desc: 'Mini reguladores e reguladores de demanda compactos de alta precisão para calibração e instrumentação.' },
  { id: 'combate-incendio', name: 'Combate a Incêndio', cat: 'Segurança', img: '/images/solucoes-integradas/prod-combate-incendio.png', desc: 'Sistemas de supressão com CO₂, FM-200 e outros agentes limpos.' },
  { id: 'transmissores-pressao', name: 'Transmissores: Pressão - Nível - Temperatura', cat: 'Instrumentação', img: '/images/solucoes-integradas/instrumentacao-medicao/prod-transmissores-new.jpg', desc: 'Transmissores inteligentes para medição de pressão diferencial, manométrica e nível.' },
  { id: 'valvulas-industriais', name: 'Válvulas Industriais - Medicinais - Especiais', cat: 'Válvulas', img: '/images/solucoes-integradas/instrumentacao-medicao/prod-valvulas.png', desc: 'Válvulas de agulha, esfera e membrana para gases industriais e medicinais.' },
];

export function ProductsMain() {
  return (
    <>
      <EditableElement
        id="prod_hero_bg"
        type="container"
        as="div"
        className="fixed inset-0 -z-50 prime-bg-standard bg-secondary"
        defaultStyle={{ backgroundImage: "url('/images/produtos/produtos-bg-new.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-secondary/40 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/20 to-transparent z-0" />
      </EditableElement>
      
      <section className="relative min-h-[50vh] flex items-center z-10 pt-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
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
      </section>

      <section className="py-20 relative z-10">
        <SectionContainer className="py-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {PRODUCTS.map(({ id, name, cat, img, desc }, i) => (
              <AnimateOnScroll key={id} delay={(i % 4) * 80}>
                <Link to={`/produto/${id}`} className="group bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 block overflow-hidden">
                  <div className="h-44 overflow-hidden">
                    <img src={img} alt={name === 'Geração de Oxigênio' ? 'Sistema de geração de gases on-site com tecnologia PSA/TCA em instalação técnica.' : name} className="prime-image-standard w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
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
