import { Link } from 'react-router-dom';
import { Scan, Box, Layers, Database, ShieldCheck, Cpu, Camera, Crosshair, Map, Video, CheckCircle } from 'lucide-react';
import { AnimateOnScroll } from '../../components/AnimateOnScroll';
import { SectionContainer } from '../../components/SectionContainer';
import { EditableElement } from '../../components/EditableElement';

export function EngenhariaDigital3D() {
  return (
    <>
      {/* Hero Section */}
      <EditableElement
        id="eng3d_hero_bg"
        type="container"
        as="div"
        className="fixed inset-0 -z-50 prime-bg-standard bg-secondary"
        defaultStyle={{ backgroundImage: "url('/images/eng-3d-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center center' }}
      >
        <div className="absolute inset-0 bg-secondary/70 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent z-0" />
      </EditableElement>

      <section className="relative min-h-[70vh] flex flex-col justify-center z-10 pt-28 pb-12">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <AnimateOnScroll>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/20 text-primary font-bold uppercase tracking-widest text-xs mb-6 rounded-full border border-primary/30 shadow-[0_0_15px_rgba(0,111,208,0.3)]">
              <Scan size={14} /> Solução Premium
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
              <EditableElement id="eng3d_hero_title" defaultContent="Engenharia Digital 3D" />
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={400}>
            <div className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto font-light mb-10 text-balance leading-relaxed">
              <EditableElement id="eng3d_hero_sub" defaultContent="Levantamento a laser (Reality Capture), As Built industrial e análise de interferências para processos críticos." />
            </div>
            <a href="#conteudo" className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white hover:border-primary hover:text-primary transition-all bg-white/5 backdrop-blur-sm">
              <Crosshair size={20} />
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      <div id="conteudo" className="bg-white relative z-10">
        
        {/* Diferencial / Princípio de Confiabilidade */}
        <section className="py-20 border-b border-gray-100 bg-gray-50">
          <SectionContainer>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimateOnScroll>
                <div className="relative">
                  <div className="absolute -inset-4 bg-primary/5 transform -skew-y-3 z-0 rounded-3xl" />
                  <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl relative z-10 border border-gray-100">
                    <Scan className="text-primary w-12 h-12 mb-6" />
                    <h2 className="text-3xl font-bold text-secondary mb-4">Nuvem de pontos não é Engenharia.</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      A captura a laser registra apenas a geometria visível. Ela não sabe qual fluido corre no tubo, nem a classe de pressão ou o material. 
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      O diferencial da Prime Products é unir a <strong>Tecnologia Trimble X9</strong> ao nosso conhecimento especializado. Nós transformamos o dado bruto em um As Built validado tecnicamente, mitigando riscos para o seu projeto.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-primary p-4 rounded-r-lg">
                      <p className="text-sm text-secondary font-medium">
                        <strong>Princípio de Confiabilidade:</strong> Nenhuma informação não observável é apresentada como fato sem verificação documental ou em campo.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll delay={200}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { icon: Map, title: 'Alta Precisão', desc: 'Até 1 milhão de pontos/segundo e exatidão milimétrica (3mm a 20m).' },
                    { icon: ShieldCheck, title: 'As Built Validado', desc: 'Modelagem 3D inteligente associada a tags, diâmetros e fluidos.' },
                    { icon: Cpu, title: 'Scan-to-BIM', desc: 'Integração com AutoCAD Plant 3D, Revit e Navisworks (RCP/E57).' },
                    { icon: Box, title: 'Digitalização', desc: 'Redução de incertezas e retrabalhos durante fabricação e montagem.' }
                  ].map((item, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                      <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                        <item.icon size={20} className="text-gray-600 group-hover:text-primary transition-colors" />
                      </div>
                      <h3 className="font-bold text-secondary mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
          </SectionContainer>
        </section>

        {/* Fluxo de Trabalho Integrado */}
        <section className="py-20 bg-secondary border-b border-gray-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.png')] opacity-5 mix-blend-overlay" />
          <SectionContainer className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Fluxo de Trabalho Integrado</h2>
              <p className="text-gray-400 max-w-3xl mx-auto">Um processo estruturado de ponta a ponta, desde a captura em campo até a entrega do modelo inteligente pronto para uso.</p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative">
              {/* Linha conectora (visível apenas no desktop) */}
              <div className="hidden lg:block absolute top-12 left-10 right-10 h-0.5 bg-gray-800 z-0" />

              {[
                { step: '1', title: 'Campo', desc: 'Levantamento 3D com Trimble X9.', icon: Camera },
                { step: '2', title: 'Nuvem', desc: 'Processamento e registro de pontos.', icon: Database },
                { step: '3', title: 'Modelagem 3D', desc: 'Scan-to-BIM com dados técnicos.', icon: Box },
                { step: '4', title: 'Validação', desc: 'QA/QC e análise de interferências.', icon: ShieldCheck },
                { step: '5', title: 'Entrega Técnica', desc: 'As Built, relatórios e modelos.', icon: Layers }
              ].map((item, i) => (
                <AnimateOnScroll key={i} delay={i * 100} className="w-full lg:w-1/5 relative z-10">
                  <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl flex flex-col items-center text-center hover:border-primary transition-all group h-full">
                    <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors border border-gray-700 group-hover:border-primary relative">
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg">
                        {item.step}
                      </div>
                      <item.icon size={24} className="text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </SectionContainer>
        </section>

        {/* Níveis de Entrega (LOIN) */}
        <section className="py-24 bg-white">
          <SectionContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-secondary mb-4">Níveis de Entrega e Informação</h2>
              <p className="text-gray-500 max-w-3xl mx-auto">Adequamos o nível de detalhe (LOIN) de acordo com o objetivo do seu projeto, separando a realidade capturada da informação de engenharia validada.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  level: 'Nível 1', 
                  title: 'Reality Capture', 
                  desc: 'Nuvem de pontos registrada, imagens panorâmicas e relatório de cobertura. Sem modelagem vetorial.',
                  color: 'bg-gray-100', text: 'text-gray-600'
                },
                { 
                  level: 'Nível 2', 
                  title: 'As Built Geométrico', 
                  desc: 'Modelagem da geometria visível (skids, estruturas, tubulações). Geração de plantas e cortes em CAD/BIM.',
                  color: 'bg-blue-50', text: 'text-blue-600'
                },
                { 
                  level: 'Nível 3', 
                  title: 'As Built de Engenharia', 
                  desc: 'Inclusão de inteligência: tags, fluidos, diâmetros nominais, materiais e sentido de fluxo, validados com inspeção.',
                  color: 'bg-primary/10', text: 'text-primary'
                },
                { 
                  level: 'Nível 4', 
                  title: 'Retrofit e Tie-ins', 
                  desc: 'Análise de interferências (clash detection), controle dimensional, simulação de acessibilidade e viabilidade de montagem.',
                  color: 'bg-secondary/10', text: 'text-secondary'
                }
              ].map((item, i) => (
                <AnimateOnScroll key={i} delay={i * 100}>
                  <div className="relative h-full flex flex-col p-8 rounded-2xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-lg transition-all group overflow-hidden">
                    <div className={`absolute top-0 left-0 w-full h-1 ${item.color}`} />
                    <div className={`inline-block px-3 py-1 rounded-md text-xs font-bold mb-4 w-max ${item.color} ${item.text}`}>
                      {item.level}
                    </div>
                    <h3 className="font-bold text-xl text-secondary mb-3">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">{item.desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </SectionContainer>
        </section>

        {/* Escopo e Limitações (Dark Section) */}
        <section className="py-24 bg-secondary relative overflow-hidden">
          <SectionContainer className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <AnimateOnScroll>
                <h2 className="text-3xl font-bold text-white mb-6">Escopo Típico de Modelagem</h2>
                <p className="text-gray-300 mb-8 leading-relaxed">Definimos previamente uma matriz de inclusão para garantir que o modelo entregue esteja perfeitamente alinhado às necessidades do seu projeto.</p>
                
                <ul className="space-y-4">
                  {[
                    'Tubulações de Processo e Gases',
                    'Skids, Vasos e Compressores',
                    'Estruturas Metálicas e Pipe Racks',
                    'Arquitetura, Civil e HVAC'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-200">
                      <CheckCircle className="text-primary" size={20} />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <div className="bg-gray-800/50 border border-gray-700 p-8 rounded-2xl backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <ShieldCheck className="text-yellow-500" />
                    Transparência Técnica
                  </h3>
                  <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
                    <p>O laser scanner não enxerga através de paredes, isolamento térmico, pisos ou obstáculos opacos.</p>
                    <p><strong>Isolamento Térmico:</strong> É capturada a superfície externa. O diâmetro real do tubo interno depende de documentação ou remoção pontual.</p>
                    <p><strong>Small-Bore Tubing (1/4" a 1/2"):</strong> Requerem varreduras mais densas e confirmação manual em campo para garantir conexões corretas.</p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </SectionContainer>
        </section>

        {/* Call to Action */}
        <section className="py-20 text-center">
          <SectionContainer>
            <AnimateOnScroll>
              <h2 className="text-3xl font-bold text-secondary mb-6">Pronto para digitalizar sua instalação?</h2>
              <p className="text-gray-500 mb-10 max-w-2xl mx-auto">
                Recomendamos iniciar com um <strong>Projeto-Piloto de 300 a 1.000 m²</strong>, permitindo validar o fluxo completo (desde a captura em campo até o uso do modelo 3D pela sua equipe) antes de escalar para a planta inteira.
              </p>
              <Link to="/contato" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Solicitar Avaliação Técnica
              </Link>
            </AnimateOnScroll>
          </SectionContainer>
        </section>
      </div>
    </>
  );
}
