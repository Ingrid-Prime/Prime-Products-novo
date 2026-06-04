import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { AnimateOnScroll } from '../../components/AnimateOnScroll';
import { EditableElement } from '../../components/EditableElement';
import { SectionContainer } from '../../components/SectionContainer';

const PRODUCTS = [
  { path: '/produto/reguladores-especiais', img: '/images/regulador-gases-09.jpg', name: 'Reguladores de Gases Especiais', desc: 'Reguladores de alta performance para gases especiais, alta pressão e calibração.' },
  { path: '/produto/conexoes-instrumentacao', img: '/images/prod-conexoes-instrumentacao.png', name: 'Conexões para Instrumentação', desc: 'Conexões de alta performance para aplicações industriais e analíticas.' },
  { path: '/produto/valvulas-industriais', img: '/images/prod-valvulas.png', name: 'Válvulas Industriais', desc: 'Válvulas de agulha, esfera e membrana para controle e bloqueio.' },
  { path: '/produto/cilindros-aluminio', img: '/images/prod-cilindros-aluminio.png', name: 'Cilindros de Alumínio', desc: 'Cilindros de alta durabilidade para transporte seguro de gases.' },
];

export function InstalacaoRedeGases() {
  return (
    <>
      <EditableElement
        id="sol_gases_bg"
        type="container"
        as="section"
        className="relative min-h-[60vh] flex items-center bg-secondary overflow-hidden"
        defaultStyle={{ backgroundImage: "url('/images/instalacao-gases-fundo.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
      >
        <div className="absolute inset-0 bg-secondary/80 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <AnimateOnScroll><div className="inline-block w-20 h-1 bg-primary mb-8 rounded-full" /></AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              <EditableElement id="sol_gases_title" defaultContent="Instalação de Rede de Gases" />
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={400}>
            <div className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              <EditableElement id="sol_gases_sub" defaultContent="Soluções completas e engenharia de detalhe para distribuição segura de gases especiais e industriais." />
            </div>
          </AnimateOnScroll>
        </div>
      </EditableElement>

      {/* Texto institucional da página */}
      <section className="bg-white py-16">
        <SectionContainer className="py-0">
          <div className="mb-8">
            <Link to="/solucoes" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline mb-8">
              <ArrowLeft size={16} /> Voltar para Soluções
            </Link>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 text-gray-600 leading-relaxed text-base">
            <AnimateOnScroll>
              <p className="text-lg text-secondary font-medium">
                A Prime Products atua no desenvolvimento de soluções técnicas para sistemas de gases especiais, gases industriais e redes centralizadas para laboratórios e processos produtivos.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <p>
                Com foco em engenharia aplicada, segurança e confiabilidade, oferecemos suporte para fornecimento, instalação, testes, comissionamento e manutenção de sistemas de distribuição de gases.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <p>
                Atendemos empresas que necessitam de soluções para hidrogênio, hélio, nitrogênio, oxigênio, argônio, ar sintético, dióxido de carbono e misturas especiais, sempre considerando as características do processo, as exigências do cliente e as boas práticas de instalação.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <p className="pb-8 border-b border-gray-100">
                Nossa atuação busca reduzir riscos operacionais, melhorar a organização das áreas técnicas e garantir maior confiabilidade no fornecimento de gases até os pontos de consumo.
              </p>
            </AnimateOnScroll>

            {/* Tópicos */}
            <div className="space-y-12 pt-8">
              {/* Item 1 */}
              <AnimateOnScroll>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-secondary flex items-center gap-3">
                    <span className="text-primary font-black text-xl bg-primary/10 w-9 h-9 rounded-sm flex items-center justify-center">1</span>
                    Instalação de Gases Especiais
                  </h2>
                  <h3 className="text-lg font-semibold text-secondary">Instalação de Gases Especiais para Laboratórios e Indústrias</h3>
                  <p>
                    A Prime Products atua no fornecimento de soluções técnicas para instalação de gases especiais, atendendo laboratórios, centros de pesquisa, indústrias farmacêuticas, químicas, petroquímicas, alimentícias, universidades e plantas industriais que necessitam de redes seguras, confiáveis e compatíveis com gases de alta pureza.
                  </p>
                  <p>
                    Desenvolvemos sistemas para gases como nitrogênio, hidrogênio, hélio, oxigênio, argônio, ar sintético, dióxido de carbono e misturas especiais, considerando as características físico-químicas de cada fluido, pressão de trabalho, vazão, compatibilidade de materiais, segurança operacional e requisitos normativos aplicáveis.
                  </p>
                  <p>
                    Nossos serviços podem contemplar centrais de gases, manifolds, reguladores de pressão, painéis de ponto de uso, tubulações em aço inoxidável, suportação, identificação das linhas, testes de estanqueidade, comissionamento e documentação técnica.
                  </p>
                  <p>
                    A Prime Products aplica boas práticas de engenharia para garantir instalações seguras, organizadas e adequadas ao uso contínuo em ambientes críticos.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Item 2 */}
              <AnimateOnScroll>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-secondary flex items-center gap-3">
                    <span className="text-primary font-black text-xl bg-primary/10 w-9 h-9 rounded-sm flex items-center justify-center">2</span>
                    Instalação de Gases Industriais
                  </h2>
                  <h3 className="text-lg font-semibold text-secondary">Instalação de Gases Industriais com Segurança e Confiabilidade</h3>
                  <p>
                    A Prime Products oferece soluções para instalação de gases industriais em sistemas de distribuição centralizada, atendendo aplicações produtivas, laboratoriais e utilidades industriais.
                  </p>
                  <p>
                    Atuamos com gases como nitrogênio, oxigênio, argônio, ar comprimido, dióxido de carbono, hidrogênio e misturas gasosas, sempre considerando as necessidades específicas de cada processo, incluindo pressão, vazão, pureza, distância entre a central e os pontos de consumo, segurança e facilidade de manutenção.
                  </p>
                  <p>
                    As instalações podem incluir centrais de cilindros, painéis de regulagem, redes de distribuição, pontos de consumo, válvulas de bloqueio, dispositivos de segurança, identificação das tubulações, testes de pressão, testes de estanqueidade e entrega técnica del sistema.
                  </p>
                  <p>
                    Nosso objetivo é entregar instalações industriais robustas, seguras e tecnicamente adequadas às exigências operacionais de cada cliente.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Item 3 */}
              <AnimateOnScroll>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-secondary flex items-center gap-3">
                    <span className="text-primary font-black text-xl bg-primary/10 w-9 h-9 rounded-sm flex items-center justify-center">3</span>
                    Rede Centralizada de Gases
                  </h2>
                  <h3 className="text-lg font-semibold text-secondary">Rede Centralizada de Gases para Laboratórios e Processos Industriais</h3>
                  <p>
                    A rede centralizada de gases é uma solução técnica que permite distribuir gases a partir de uma central externa ou sala técnica até os pontos de consumo internos, garantindo maior segurança, organização, controle operacional e redução do manuseio de cilindros dentro das áreas produtivas ou laboratoriais.
                  </p>
                  <p>
                    A Prime Products desenvolve e executa sistemas centralizados para gases especiais, industriais e laboratoriais, contemplando desde o dimensionamento preliminar até a instalação, testes e comissionamento da rede.
                  </p>
                  <p>
                    A solução pode incluir central de cilindros, manifold, reguladores de primeiro e segundo estágio, tubulação em aço inoxidável, válvulas, painéis de ponto de uso, identificação das linhas, suportação e documentação técnica.
                  </p>
                  <p>
                    Esse tipo de instalação é indicado para laboratórios analíticos, cromatografia, espectrometria, pesquisa e desenvolvimento, controle de qualidade, plantas piloto e processos industriais que exigem fornecimento contínuo e seguro de gases.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Item 4 */}
              <AnimateOnScroll>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-secondary flex items-center gap-3">
                    <span className="text-primary font-black text-xl bg-primary/10 w-9 h-9 rounded-sm flex items-center justify-center">4</span>
                    Tubulação em Aço Inox 316L para Gases Especiais
                  </h2>
                  <h3 className="text-lg font-semibold text-secondary">Tubulação em Aço Inox 316L para Redes de Gases Especiais</h3>
                  <p>
                    A escolha correta da tubulação é fundamental para garantir segurança, pureza e confiabilidade em sistemas de gases especiais. A Prime Products trabalha com soluções em aço inoxidável 316L, material amplamente utilizado em redes de gases de alta pureza devido à sua resistência à corrosão, compatibilidade química e excelente desempenho em aplicações críticas.
                  </p>
                  <p>
                    A tubulação em inox 316L é indicada para gases como hélio, hidrogênio, nitrogênio, argônio, oxigênio, ar sintético e misturas especiais, especialmente em laboratórios analíticos, sistemas de cromatografia, espectrometria, áreas de pesquisa, indústrias farmacêuticas, químicas e semicondutores.
                  </p>
                  <p>
                    As instalações podem ser executadas com conexões apropriadas, válvulas compatíveis, suportação técnica, identificação das linhas, limpeza adequada, testes de pressão, testes de estanqueidade e documentação final de entrega.
                  </p>
                  <p>
                    A Prime Products busca assegurar que cada rede seja projetada e instalada com foco em desempenho, segurança operacional e preservação da qualidade do gás até o ponto de uso.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Item 5 */}
              <AnimateOnScroll>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-secondary flex items-center gap-3">
                    <span className="text-primary font-black text-xl bg-primary/10 w-9 h-9 rounded-sm flex items-center justify-center">5</span>
                    Instalação de Gases para Laboratórios
                  </h2>
                  <h3 className="text-lg font-semibold text-secondary">Instalação de Gases para Laboratórios Analíticos, Pesquisa e Controle de Qualidade</h3>
                  <p>
                    A Prime Products oferece soluções técnicas para instalação de gases para laboratórios, atendendo ambientes que exigem segurança, precisão e fornecimento contínuo para equipamentos analíticos e processos laboratoriais.
                  </p>
                  <p>
                    Atuamos em laboratórios de controle de qualidade, pesquisa e desenvolvimento, análises químicas, microbiológicas, farmacêuticas, petroquímicas, alimentícias, universidades e centros tecnológicos.
                  </p>
                  <p>
                    Nossas soluções podem atender equipamentos como cromatógrafos, espectrômetros, analisadores, capelas, linhas de gases especiais e pontos de uso laboratoriais, sempre considerando pressão, vazão, pureza do gás, compatibilidade de materiais e segurança da instalação.
                  </p>
                  <p>
                    O escopo pode incluir centrais externas de gases, redes em aço inoxidável, painéis de regulagem, pontos de consumo, válvulas de bloqueio, identificação das linhas, testes de estanqueidade, comissionamento e documentação técnica.
                  </p>
                  <p>
                    A Prime Products entrega soluções voltadas à confiabilidade operacional, segurança dos usuários e desempenho adequado dos equipamentos laboratoriais.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* Grid de produtos relacionados */}
      <section className="bg-surface py-20 border-t border-gray-100">
        <SectionContainer className="py-0">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-secondary">Equipamentos Relacionados</h2>
            <p className="text-gray-500 text-sm mt-1">Componentes críticos utilizados na montagem das redes de gases.</p>
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
            <h2 className="text-2xl font-bold text-secondary mb-4">Precisa de um projeto de distribuição de gases?</h2>
            <p className="text-gray-500 mb-6">Entre em contato com nossa equipe técnica para um dimensionamento sob medida.</p>
            <Link to="/contato" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-3 font-bold uppercase rounded-sm transition-all">
              Solicitar Cotação <ArrowRight size={16} />
            </Link>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
