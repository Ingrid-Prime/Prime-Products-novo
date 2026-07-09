import { Link } from 'react-router-dom';
import { ArrowRight, Droplets, Wind, Zap, Bug, CheckCircle, ArrowDown, Activity, Info } from 'lucide-react';
import { AnimateOnScroll } from '../../components/AnimateOnScroll';
import { SectionContainer } from '../../components/SectionContainer';
import { EditableElement } from '../../components/EditableElement';
import { useState } from 'react';

export function GuiaArComprimido() {
  const [activeTab, setActiveTab] = useState<'particulas' | 'agua' | 'oleo'>('particulas');
  
  // Calculator State
  const [calcVazao, setCalcVazao] = useState(500);
  const [calcPressao, setCalcPressao] = useState(7);
  const [calcDiametro, setCalcDiametro] = useState(50);

  return (
    <>
      {/* Hero Section */}
      <EditableElement
        id="guia_ar_hero_bg"
        type="container"
        as="div"
        className="fixed inset-0 -z-50 prime-bg-standard bg-secondary"
        defaultStyle={{ backgroundImage: "url('/images/instalacao-gases-fundo.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-secondary/80 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/30 to-transparent z-0" />
      </EditableElement>

      <section className="relative min-h-[60vh] flex items-center z-10 pt-24 pb-12">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <AnimateOnScroll>
            <div className="inline-block px-4 py-1.5 bg-primary/20 text-primary font-bold uppercase tracking-widest text-xs mb-6 rounded-full border border-primary/30">
              Guia Técnico
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              <EditableElement id="guia_ar_hero_title" defaultContent="Ar Comprimido Industrial" />
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={400}>
            <div className="text-xl text-gray-300 max-w-3xl mx-auto font-light mb-8">
              <EditableElement id="guia_ar_hero_sub" defaultContent="Contaminantes, tecnologias de compressão, secagem, filtração, condensado e projeto de redes. Um guia completo para eficiência e qualidade." />
            </div>
            <a href="#conteudo" className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/20 text-white hover:border-primary hover:text-primary transition-all">
              <ArrowDown size={24} />
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      <div id="conteudo" className="bg-white relative z-10">
        {/* Contaminantes */}
        <section className="py-20 border-b border-gray-100">
          <SectionContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-secondary mb-4">A Cadeia de Contaminação</h2>
              <p className="text-gray-500 max-w-3xl mx-auto">O compressor não cria pureza. Ele aspira o ar atmosférico e concentra tudo o que estiver presente. Conheça os 4 principais vilões da qualidade do ar comprimido.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Droplets, title: 'Água', desc: 'Presente como vapor, aerossol ou líquido. Causa corrosão, falha de válvulas e manchas em pintura.', color: 'text-blue-500', bg: 'bg-blue-50' },
                { icon: Wind, title: 'Óleo', desc: 'Vem do lubrificante do compressor ou do ambiente. Causa perda de aderência e contamina produtos.', color: 'text-yellow-600', bg: 'bg-yellow-50' },
                { icon: Zap, title: 'Partículas', desc: 'Poeira, ferrugem e dessecante. Causam entupimentos, abrasão e defeitos superficiais.', color: 'text-gray-700', bg: 'bg-gray-100' },
                { icon: Bug, title: 'Microrganismos', desc: 'Bactérias e fungos que prosperam na umidade. Risco crítico para indústrias alimentícias e farmacêuticas.', color: 'text-green-600', bg: 'bg-green-50' }
              ].map((item, i) => (
                <div key={i} className={`p-8 rounded-lg ${item.bg} border border-black/5 hover:-translate-y-1 transition-transform`}>
                  <item.icon size={32} className={`${item.color} mb-4`} />
                  <h3 className="font-bold text-lg mb-2 text-secondary">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </SectionContainer>
        </section>

        {/* ISO 8573 */}
        <section className="py-20 bg-surface border-b border-gray-100">
          <SectionContainer>
            <div className="max-w-4xl mx-auto">
              <div className="mb-10 text-center">
                <h2 className="text-3xl font-bold text-secondary mb-4">Entendendo a ISO 8573-1</h2>
                <p className="text-gray-500">A ISO classifica a pureza em três eixos independentes: Partículas, Água e Óleo. Uma especificação típica é escrita no formato [Partículas : Água : Óleo], por exemplo: <strong>Classe 1:2:1</strong>.</p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="flex border-b border-gray-200">
                  <button onClick={() => setActiveTab('particulas')} className={`flex-1 py-4 text-sm font-bold uppercase transition-colors ${activeTab === 'particulas' ? 'bg-primary text-white' : 'text-gray-500 hover:bg-gray-50'}`}>Partículas (1º Dígito)</button>
                  <button onClick={() => setActiveTab('agua')} className={`flex-1 py-4 text-sm font-bold uppercase transition-colors ${activeTab === 'agua' ? 'bg-primary text-white' : 'text-gray-500 hover:bg-gray-50'}`}>Água (2º Dígito)</button>
                  <button onClick={() => setActiveTab('oleo')} className={`flex-1 py-4 text-sm font-bold uppercase transition-colors ${activeTab === 'oleo' ? 'bg-primary text-white' : 'text-gray-500 hover:bg-gray-50'}`}>Óleo (3º Dígito)</button>
                </div>
                
                <div className="p-6">
                  {activeTab === 'particulas' && (
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left">
                        <thead className="bg-gray-50 text-gray-700">
                          <tr><th className="p-3">Classe</th><th className="p-3">0,1 a 0,5 µm (nº/m³)</th><th className="p-3">0,5 a 1,0 µm (nº/m³)</th><th className="p-3">1,0 a 5,0 µm (nº/m³)</th></tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          <tr><td className="p-3 font-bold text-primary">0</td><td className="p-3" colSpan={3}>Conforme especificação do usuário, mais rigorosa que Classe 1</td></tr>
                          <tr><td className="p-3 font-bold">1</td><td className="p-3">≤ 20.000</td><td className="p-3">≤ 400</td><td className="p-3">≤ 10</td></tr>
                          <tr><td className="p-3 font-bold">2</td><td className="p-3">≤ 400.000</td><td className="p-3">≤ 6.000</td><td className="p-3">≤ 100</td></tr>
                          <tr><td className="p-3 font-bold">3</td><td className="p-3">Não especificado</td><td className="p-3">≤ 90.000</td><td className="p-3">≤ 1.000</td></tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                  {activeTab === 'agua' && (
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left">
                        <thead className="bg-gray-50 text-gray-700">
                          <tr><th className="p-3">Classe</th><th className="p-3">Critério (Ponto de Orvalho sob Pressão - PDP)</th></tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          <tr><td className="p-3 font-bold text-primary">1</td><td className="p-3">PDP ≤ -70°C</td></tr>
                          <tr><td className="p-3 font-bold">2</td><td className="p-3">PDP ≤ -40°C</td></tr>
                          <tr><td className="p-3 font-bold">3</td><td className="p-3">PDP ≤ -20°C</td></tr>
                          <tr><td className="p-3 font-bold">4</td><td className="p-3">PDP ≤ +3°C (Típico Secador Refrigeração)</td></tr>
                          <tr><td className="p-3 font-bold">5</td><td className="p-3">PDP ≤ +7°C</td></tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                  {activeTab === 'oleo' && (
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left">
                        <thead className="bg-gray-50 text-gray-700">
                          <tr><th className="p-3">Classe</th><th className="p-3">Óleo líquido + aerossol + vapor (mg/m³)</th></tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          <tr><td className="p-3 font-bold text-primary">1</td><td className="p-3">≤ 0,01 mg/m³</td></tr>
                          <tr><td className="p-3 font-bold">2</td><td className="p-3">≤ 0,1 mg/m³</td></tr>
                          <tr><td className="p-3 font-bold">3</td><td className="p-3">≤ 1 mg/m³</td></tr>
                          <tr><td className="p-3 font-bold">4</td><td className="p-3">≤ 5 mg/m³</td></tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </SectionContainer>
        </section>

        {/* Compressores */}
        <section className="py-20 border-b border-gray-100">
          <SectionContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-secondary mb-4">Tecnologias de Compressores</h2>
              <p className="text-gray-500 max-w-3xl mx-auto">Não existe um compressor perfeito para todas as aplicações. O melhor equipamento depende da sua curva de demanda, pressão, requisito de pureza e custo de energia.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Pistão Reciprocante', ideal: 'Baixa a média vazão, alta pressão, intermitente.', pro: 'Alto diferencial de pressão, robusto.', con: 'Pulsação, ruído, válvulas.' },
                { title: 'Parafuso Lubrificado', ideal: 'Operação contínua, média vazão (5-13 bar).', pro: 'Fluxo estável, excelente custo-benefício.', con: 'Carryover de óleo.' },
                { title: 'Parafuso Oil-Free Seco', ideal: 'Processos críticos, operação contínua.', pro: 'Sem óleo na câmara de compressão.', con: 'CAPEX maior, sensível a operação.' },
                { title: 'Centrífugo', ideal: 'Grandes vazões e demanda base estável.', pro: 'Sem óleo, alta eficiência no projeto.', con: 'Turndown limitado (surge).' }
              ].map((comp, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:border-primary transition-colors flex flex-col">
                  <h3 className="font-bold text-secondary text-lg mb-4 border-b pb-3">{comp.title}</h3>
                  <div className="flex-1 space-y-4">
                    <div><span className="text-xs uppercase font-bold text-gray-400 block mb-1">Perfil Ideal</span><p className="text-sm text-gray-700">{comp.ideal}</p></div>
                    <div><span className="text-xs uppercase font-bold text-green-600 block mb-1">Vantagens</span><p className="text-sm text-gray-700">{comp.pro}</p></div>
                    <div><span className="text-xs uppercase font-bold text-red-500 block mb-1">Limitações</span><p className="text-sm text-gray-700">{comp.con}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </SectionContainer>
        </section>

        {/* Secadores */}
        <section className="py-20 bg-surface border-b border-gray-100">
          <SectionContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-secondary mb-4">Secadores e Remoção de Água</h2>
              <p className="text-gray-500 max-w-3xl mx-auto">A seleção começa pelo menor Ponto de Orvalho sob Pressão (PDP) requerido no ponto crítico. Cada tecnologia tem sua faixa de atuação ideal.</p>
            </div>
            
            <div className="overflow-x-auto shadow-sm rounded-lg bg-white border border-gray-200">
              <table className="w-full text-sm text-left">
                <thead className="bg-secondary text-white">
                  <tr>
                    <th className="p-4 font-bold">Tecnologia</th>
                    <th className="p-4 font-bold">PDP Típico</th>
                    <th className="p-4 font-bold">Energia / Purga</th>
                    <th className="p-4 font-bold">Aplicação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-bold text-secondary">Refrigeração (Não Cíclica/Cíclica)</td>
                    <td className="p-4">+3°C a +10°C</td>
                    <td className="p-4">Compressor frigorífico / Varia conforme carga</td>
                    <td className="p-4">Ar industrial interno; não serve para linhas abaixo de 0°C.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-bold text-secondary">Adsorção (Heatless)</td>
                    <td className="p-4">-40°C ou -70°C</td>
                    <td className="p-4">Purga de ar seco significativa</td>
                    <td className="p-4">Instrumentação, ambientes frios, processos críticos.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-bold text-secondary">Calor de Compressão</td>
                    <td className="p-4">≈ -40°C</td>
                    <td className="p-4">Aproveita calor do compressor oil-free</td>
                    <td className="p-4">Carga estável, demanda zero de purga, altíssima eficiência.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-bold text-secondary">Membrana</td>
                    <td className="p-4">Variável</td>
                    <td className="p-4">Purga contínua de ar</td>
                    <td className="p-4">Ponto de uso, áreas classificadas, sem peças móveis.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </SectionContainer>
        </section>

        {/* Calculadora */}
        <section className="py-20 bg-white border-b border-gray-100">
          <SectionContainer>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3 flex items-center gap-2"><Zap size={16} /> Ferramenta Expressa</h4>
                <h2 className="text-3xl font-bold text-secondary mb-4">Estimativa de Queda de Pressão</h2>
                <p className="text-gray-500 mb-6">O diâmetro domina a queda de pressão. Tubulações estranguladas obrigam o compressor a trabalhar com pressão mais alta, aumentando o consumo de energia artificialmente.</p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-md">
                  <p className="text-sm text-yellow-800 font-medium">Regra Prática do DOE: Elevar a pressão de descarga em apenas 2 psi aumenta o consumo de energia em até 2%.</p>
                </div>
              </div>

              <div className="bg-surface p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Vazão (Nm³/h): {calcVazao}</label>
                    <input type="range" min="100" max="5000" step="50" value={calcVazao} onChange={(e) => setCalcVazao(Number(e.target.value))} className="w-full accent-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Pressão (bar g): {calcPressao}</label>
                    <input type="range" min="4" max="13" step="1" value={calcPressao} onChange={(e) => setCalcPressao(Number(e.target.value))} className="w-full accent-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Diâmetro Interno Estimado (mm): {calcDiametro}</label>
                    <input type="range" min="25" max="150" step="5" value={calcDiametro} onChange={(e) => setCalcDiametro(Number(e.target.value))} className="w-full accent-primary" />
                  </div>
                  
                  <div className="mt-8 bg-white p-4 rounded-md border border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="block text-xs text-gray-400 uppercase font-bold mb-1">Velocidade Aprox.</span>
                      <span className="text-xl font-bold text-secondary">{((calcVazao / 3600) / (Math.PI * Math.pow(calcDiametro/2000, 2)) / (calcPressao + 1)).toFixed(1)} m/s</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-xs text-gray-400 uppercase font-bold mb-1">Status</span>
                      {((calcVazao / 3600) / (Math.PI * Math.pow(calcDiametro/2000, 2)) / (calcPressao + 1)) > 8 ? (
                        <span className="text-red-500 font-bold bg-red-50 px-2 py-1 rounded text-sm">Crítico</span>
                      ) : (
                        <span className="text-green-500 font-bold bg-green-50 px-2 py-1 rounded text-sm">Adequado</span>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 italic text-center mt-4">* Valores puramente ilustrativos. Requer cálculo de escoamento compressível para projeto executivo.</p>
                </div>
              </div>
            </div>
          </SectionContainer>
        </section>

        {/* Boas Práticas - Pescoço de Ganso e CTA */}
        <section className="py-20 bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.png')] opacity-5" />
          <SectionContainer className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Pescoço de Ganso e Rede de Distribuição</h2>
                <p className="text-gray-400 mb-6 leading-relaxed">O projeto da rede é crucial. Um erro comum é derivar a tubulação por baixo, arrastando todo o condensado da linha para a máquina.</p>
                <div className="bg-white/5 p-6 rounded-lg shadow-sm border border-white/10 mb-6 backdrop-blur-sm">
                  <h4 className="font-bold text-primary mb-2 flex items-center gap-2"><CheckCircle size={18} /> Detalhe Construtivo (Pescoço de Ganso)</h4>
                  <p className="text-sm text-gray-300">A derivação deve sair sempre pelo topo ou quadrante superior do header principal, subir ligeiramente e depois descer para o consumidor, criando uma barreira física contra a água líquida.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg shadow-sm border border-white/10 backdrop-blur-sm">
                  <h4 className="font-bold text-primary mb-2 flex items-center gap-2"><CheckCircle size={18} /> Rede em Anel</h4>
                  <p className="text-sm text-gray-300">Redes em anel alimentam os consumidores por duas direções, reduzindo a velocidade do ar, estabilizando a pressão em picos e permitindo o isolamento de setores para manutenção sem parar a fábrica.</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary to-secondary p-10 rounded-xl text-white text-center shadow-2xl">
                <Activity size={48} className="mx-auto mb-6 opacity-80" />
                <h2 className="text-2xl font-bold mb-4">Precisa dimensionar seu sistema?</h2>
                <p className="text-primary-100 mb-8">A engenharia da Prime Products realiza o diagnóstico de vazão, auditoria da qualidade ISO 8573 e projeto completo de redes para otimizar sua planta e garantir a eficiência energética.</p>
                <Link to="/contato" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-sm font-bold uppercase hover:bg-gray-100 transition-colors">
                  Solicitar Diagnóstico <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </SectionContainer>
        </section>
      </div>
    </>
  );
}
