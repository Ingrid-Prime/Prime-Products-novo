import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AnimateOnScroll } from '../../components/AnimateOnScroll';
import { EditableElement } from '../../components/EditableElement';
import { SectionContainer } from '../../components/SectionContainer';

interface AppItem {
  id: string;
  name: string;
  desc: string;
  img: string;
}

interface AppGroup {
  group: string;
  color: string;
  items: AppItem[];
}

const APPLICATION_GROUPS: AppGroup[] = [
  {
    group: 'Indústria',
    color: 'bg-blue-700',
    items: [
      { id: 'automotivo', name: 'Automotivo', desc: 'Gases para soldagem, testes de estanqueidade, pintura e processos de fabricação na indústria automotiva.', img: '/images/app-automotivo.jpg' },
      { id: 'soldagem', name: 'Soldagem e Corte', desc: 'Misturas para MIG/TIG, oxicorte e oxiacetilênico. Reguladores e acessórios para processos de soldagem industrial.', img: '/images/prod-corte-solda.png' },
      { id: 'mineral', name: 'Mineral e Mineração', desc: 'Instrumentação robusta para ambientes de mineração, controle de processo e segurança em ambientes subterrâneos.', img: '/images/app-plantas-industriais.png' },
    ],
  },
  {
    group: 'Hospitalar e Médico',
    color: 'bg-green-700',
    items: [
      { id: 'hospitalar', name: 'Hospitalar e Clínicas', desc: 'Gases medicinais certificados (O₂, N₂O, ar medicinal), centrais de gases, geração de oxigênio e sistemas de distribuição hospitalar.', img: '/images/prod-geracao-oxigenio.png' },
    ],
  },
  {
    group: 'Laboratorial e Pesquisa',
    color: 'bg-purple-700',
    items: [
      { id: 'laboratorios-analiticos', name: 'Laboratórios Analíticos', desc: 'Gases de alta pureza, reguladores certificados, conexões TK-Fujikin e detectores de vazamento para laboratórios de análise e controle de qualidade.', img: '/images/app-laboratorios-analiticos.png' },
      { id: 'farmaceutica', name: 'Farmacêutica', desc: 'Soluções validadas para a indústria farmacêutica: gases USP, sistemas de alta pureza, instrumentação GMP e rastreabilidade completa.', img: '/images/farmaceutica_linha_1.jpg' },
      { id: 'centros-pesquisa', name: 'Centros de Pesquisa', desc: 'Gases de altíssima pureza (5.0, 6.0), dewars criogênicos, equipamentos especializados e suporte técnico para P&D e universidades.', img: '/images/app-centros-pesquisa.jpg' },
    ],
  },
  {
    group: 'Energia e Transição Energética',
    color: 'bg-yellow-600',
    items: [
      { id: 'energia-transicao-energetica', name: 'Energia e Transição Energética', desc: 'Cilindros para GNV/H₂, monitoramento de emissões (CEMS), tratamento de efluentes, bioenergia e integração com fontes de energia limpa.', img: '/images/app-energia.jpg' },
      { id: 'criogenia', name: 'Criogenia', desc: 'Dewars, tanques criogênicos e sistemas para nitrogênio líquido, oxigênio líquido, argônio líquido e hélio líquido para diversas aplicações industriais.', img: '/images/prod-dewars-criogenicos.png' },
    ],
  },
  {
    group: 'Química, Óleo e Gás',
    color: 'bg-orange-700',
    items: [
      { id: 'oleo-gas', name: 'Óleo e Gás', desc: 'Instrumentação ATEX/IECEx, transmissores SIL, detectores de H₂S e LEL, válvulas de segurança e sistemas de supressão para refinarias e plantas de processo.', img: '/images/app-seguranca-automacao.png' },
      { id: 'industria-quimica', name: 'Indústria Química', desc: 'Conexões em materiais resistentes (Hastelloy, PTFE), reguladores para gases reativos, detectores de vazamento e sistemas para ambientes agressivos.', img: '/images/prod-conexoes-instrumentacao.png' },
      { id: 'alimentos-bebidas', name: 'Alimentos e Bebidas', desc: 'Gases de grau alimentar (CO₂, N₂, O₂), sistemas de pureza certificada, instrumentação para processos de embalagem, carbonatação e atmosfera modificada.', img: '/images/app-linhas-producao.png' },
    ],
  },
];

export function ApplicationsMain() {
  return (
    <>
      <EditableElement
        id="app_hero_bg"
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
              <EditableElement id="app_hero_title" defaultContent="Aplicações" />
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={400}>
            <div className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              <EditableElement id="app_hero_sub" defaultContent="Soluções técnicas especializadas para cada segmento industrial, hospitalar, laboratorial e científico." />
            </div>
          </AnimateOnScroll>
        </div>
      </EditableElement>

      <section className="bg-surface py-20">
        <SectionContainer className="py-0">
          <div className="space-y-16">
            {APPLICATION_GROUPS.map(({ group, color, items }, gi) => (
              <div key={group}>
                <AnimateOnScroll>
                  <div className="flex items-center gap-3 mb-8">
                    <span className={`${color} text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm`}>{group}</span>
                    <div className="flex-1 h-px bg-gray-200" />
                  </div>
                </AnimateOnScroll>
                <div className={`grid grid-cols-1 ${items.length === 1 ? 'md:grid-cols-1 max-w-xl' : items.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6`}>
                  {items.map(({ id, name, desc, img }, i) => (
                    <AnimateOnScroll key={id} delay={(gi * 50) + (i * 80)}>
                      <Link to={`/aplicacao/${id}`} className="group bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 block overflow-hidden h-full flex flex-col">
                        <div className="h-44 overflow-hidden">
                          <img src={img} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                          <h3 className="font-bold text-secondary text-lg mb-2 group-hover:text-primary transition-colors">{name}</h3>
                          <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{desc}</p>
                          <span className="flex items-center gap-1 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                            Ver aplicação <ArrowRight size={14} />
                          </span>
                        </div>
                      </Link>
                    </AnimateOnScroll>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
