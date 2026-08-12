import { useEffect } from 'react';
import { ArrowLeft, CheckCircle, ArrowRight, ShieldCheck, Database, Gauge, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';

const AutomotivaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Standard Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[60vh] flex items-end">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/images/aplicacoes/automotiva/app-automotivo-2.jpg")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent z-10" />

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-primary text-white text-sm font-bold tracking-wider mb-6 uppercase">
              INDÚSTRIA E CONTROLE
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Laboratórios de Controle de Emissões Veiculares
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-surface py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-8">
            <Link to="/aplicacoes" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline">
              <ArrowLeft size={16} /> Voltar para Aplicações
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-12">
              
              <div className="bg-white p-8 shadow-sm border-t-4 border-primary">
                <h2 className="text-2xl font-bold text-secondary mb-4">Visão Executiva</h2>
                <p className="text-gray-600 leading-relaxed font-medium mb-4">
                  Engenharia de gases, instrumentação analítica, dinamômetros e sistemas de calibração automotiva.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A Prime Products desenvolve soluções integrando centrais de gases, painéis de calibração, redes em aço inoxidável e infraestrutura para analisadores de gases e dinamômetros para laboratórios de P&D e homologação.
                </p>
                <div className="bg-primary/5 border-l-4 border-primary p-4 mt-6">
                  <p className="text-secondary font-bold text-sm">PRINCÍPIO CENTRAL</p>
                  <p className="text-gray-700 text-sm mt-1">
                    A confiabilidade do resultado não depende apenas do analisador. Ela resulta da integração entre gases certificados, estabilidade de pressão, estanqueidade e rastreabilidade metrológica.
                  </p>
                </div>
              </div>

              {/* Arquitetura */}
              <div className="bg-white p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Database className="text-primary h-6 w-6" />
                  <h2 className="text-2xl font-bold text-secondary">Arquitetura Funcional do Laboratório</h2>
                </div>
                <div className="space-y-4">
                  {[
                    'O dinamômetro aplica carga e reproduz o ciclo de condução ou o regime de operação do motor.',
                    'O sistema de amostragem coleta o escapamento bruto ou diluído e controla vazões, temperaturas e pressões.',
                    'Os analisadores determinam as concentrações dos poluentes e dos componentes de interesse.',
                    'Os painéis de gases executam redução de pressão, seleção, purga e distribuição de gases de zero, span e auditoria.',
                    'A automação sincroniza dinamômetro, CVS, analisadores e aquisição de dados.'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-gray-50 p-4 rounded-sm">
                      <div className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold">{idx + 1}</div>
                      <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tabelas de Instrumentação */}
              <div className="bg-white p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Gauge className="text-primary h-6 w-6" />
                  <h2 className="text-2xl font-bold text-secondary">Instrumentação Analítica de Emissões</h2>
                </div>
                <p className="text-gray-600 mb-6 text-sm">
                  Plataformas modulares (ex: HORIBA MEXA-ONE) configuradas com diferentes princípios de medição para cada componente.
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-600 border border-gray-100">
                    <thead className="bg-gray-50 text-secondary font-bold">
                      <tr>
                        <th className="px-4 py-3 border-b">Componente</th>
                        <th className="px-4 py-3 border-b">Princípio</th>
                        <th className="px-4 py-3 border-b">Aplicação Técnica</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-secondary">CO e CO₂</td>
                        <td className="px-4 py-3 text-primary">NDIR</td>
                        <td className="px-4 py-3">Medição em faixas baixas ou percentuais.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-secondary">THC</td>
                        <td className="px-4 py-3 text-primary">FID / Heated-FID</td>
                        <td className="px-4 py-3">Quantificação de hidrocarbonetos totais.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-secondary">CH₄ e NMHC</td>
                        <td className="px-4 py-3 text-primary">GC-FID / NMC-FID</td>
                        <td className="px-4 py-3">Determinação de metano e hidrocarbonetos não metano.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-secondary">NO e NOx</td>
                        <td className="px-4 py-3 text-primary">CLD / Heated-CLD</td>
                        <td className="px-4 py-3">Medição por quimiluminescência para pós-tratamento.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-secondary">Múltiplos (NH₃, N₂O...)</td>
                        <td className="px-4 py-3 text-primary">FTIR</td>
                        <td className="px-4 py-3">Medição simultânea multicomponente e de espécies não reguladas.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Circuitos Dedicados */}
              <div className="bg-white p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Wind className="text-primary h-6 w-6" />
                  <h2 className="text-2xl font-bold text-secondary">Painéis e Circuitos Dedicados</h2>
                </div>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  As linhas destinadas aos gases de calibração devem ser dedicadas e claramente identificadas. O compartilhamento inadequado de reguladores e válvulas pode provocar contaminação cruzada.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                  <p className="text-yellow-800 text-sm font-medium">DISTINÇÃO TÉCNICA</p>
                  <p className="text-yellow-700 text-sm mt-2">
                    Em grande parte dos laboratórios, o sistema correto é um painel de seleção e distribuição de gases certificados, e não um painel convencional de mistura. Misturar gases apenas por regulagem manual não assegura incerteza adequada.
                  </p>
                </div>
              </div>

            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              
              <div className="bg-primary/5 p-8 rounded-sm border border-primary/10">
                <h2 className="text-xl font-bold text-secondary mb-6">Segurança Integrada</h2>
                <ShieldCheck className="text-primary w-10 h-10 mb-4" />
                <p className="text-gray-700 text-sm mb-4">
                  Misturas contendo hidrogênio, CO e óxidos de nitrogênio exigem análise específica de riscos (ventilação, detecção de gases, corte automático e intertravamento).
                </p>
                <div className="bg-white p-3 rounded-sm border border-red-100">
                  <p className="text-red-600 text-xs font-bold mb-1">ALERTA DE PROJETO</p>
                  <p className="text-gray-600 text-xs">
                    A presença de hidrogênio não classifica todo o laboratório automaticamente. O estudo de risco deve nortear a configuração.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 shadow-sm">
                <h3 className="text-lg font-bold text-secondary mb-4">Soluções Prime Products</h3>
                <ul className="space-y-3">
                  {[
                    'Layout e elaboração de P&ID',
                    'Painéis de gases zero, span e auditoria',
                    'Redes em aço inox 316L (alta pureza)',
                    'Reguladores de baixo volume interno',
                    'Integração com analisadores HORIBA',
                    'Detecção de gases tóxicos e inflamáveis',
                    'Testes de estanqueidade e funcionalidade'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <ArrowRight size={16} className="text-primary mt-0.5 shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 shadow-sm">
                <h3 className="text-lg font-bold text-secondary mb-4">Resultados Esperados</h3>
                <ul className="space-y-2">
                  {[
                    'Maior repetibilidade entre ciclos',
                    'Menor consumo de gases certificados',
                    'Menor índice de ciclos invalidados',
                    'Maior segurança operacional'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle size={14} className="text-green-500 mt-1 shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sidebar images removed to be placed in gallery below */}
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Aplicações Técnicas */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-secondary mb-12 text-center border-b-2 border-gray-100 pb-4">
            Galeria de Aplicações Técnicas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              '/images/aplicacoes/automotiva/app-automotivo-1.jpg',
              '/images/aplicacoes/automotivo.jpg',
              '/images/aplicacoes/automotiva/caminhao.png'
            ].map((img, idx) => (
              <div key={idx} className={`relative overflow-hidden rounded-sm shadow-md group h-80 ${idx === 2 ? 'md:col-span-2' : ''}`}>
                <img src={img} alt={`Aplicação Automotiva ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutomotivaPage;
