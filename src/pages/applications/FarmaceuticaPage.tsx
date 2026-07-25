import { useEffect } from 'react';
import { ArrowLeft, CheckCircle, Activity, Droplets, FlaskConical, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const FarmaceuticaPage = () => {
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
            backgroundImage: 'url("/images/aplicacoes/farmaceutica-new.jpg")',
            backgroundPosition: 'center 15%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent z-10" />

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-primary text-white text-sm font-bold tracking-wider mb-6 uppercase">
              LABORATORIAL E PESQUISA
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Soluções de Engenharia para a Indústria Farmacêutica
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
                <h2 className="text-2xl font-bold text-secondary mb-4">Utilidades e Sistemas de Processo para Ambientes Regulados</h2>
                <p className="text-gray-600 leading-relaxed font-medium mb-4">
                  Projetos, fornecimento e montagens integradas, com foco em qualidade, segurança operacional, rastreabilidade e preparação para qualificação.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A Prime Products desenvolve projetos, fornece componentes e executa montagens de sistemas de utilidades e linhas de processo para indústrias farmacêuticas, biofarmacêuticas, veterinárias, cosméticas e de biotecnologia.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Nossas soluções são concebidas a partir dos requisitos específicos de cada processo, considerando qualidade do produto, controle de contaminação, segurança operacional, facilidade de limpeza, confiabilidade e rastreabilidade documental. Atuamos desde o diagnóstico até o comissionamento.
                </p>
              </div>

              {/* Gases e Utilidades */}
              <div className="bg-white p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Activity className="text-primary h-6 w-6" />
                  <h2 className="text-2xl font-bold text-secondary">Gases de Processo e Utilidades Críticas</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Projetamos e instalamos sistemas centralizados para gases especiais, gases de processo, nitrogênio, dióxido de carbono, oxigênio, argônio, ar comprimido e outras utilidades gasosas.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Centrais de abastecimento e painéis de regulagem',
                    'Redes de distribuição em aço inoxidável',
                    'Reguladores e painéis de ponto de uso',
                    'Sistemas de purga e alívio',
                    'Filtragem e controle de particulados',
                    'Instrumentação de pressão, vazão e pureza',
                    'Monitoramento, alarmes e intertravamentos',
                    'Testes de pressão, estanqueidade e integridade'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sistemas de Água */}
              <div className="bg-white p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Droplets className="text-primary h-6 w-6" />
                  <h2 className="text-2xl font-bold text-secondary">Sistemas de Água e Vapor</h2>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-bold text-secondary mb-3">Água para Injetáveis — WFI</h3>
                    <p className="text-gray-600 mb-4 text-sm">Geração, armazenamento e distribuição considerando os requisitos de qualidade química e microbiológica. Prioriza configuração sanitária, distribuição em circuito contínuo e controle de temperatura.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-secondary mb-3">Água Purificada — PW</h3>
                    <p className="text-gray-600 mb-4 text-sm">Integra tecnologias como osmose reversa, eletrodeionização, ultrafiltração, sanitização térmica/química para proporcionar estabilidade química e microbiológica contínua.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-secondary mb-3">Sistemas de Vapor Puro</h3>
                    <p className="text-gray-600 mb-4 text-sm">Geração e distribuição para sanitização e esterilização de equipamentos, autoclaves e tubulações, com eliminação de pontos baixos e preparação para operações SIP.</p>
                  </div>
                </div>
              </div>

              {/* CIP */}
              <div className="bg-white p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <FlaskConical className="text-primary h-6 w-6" />
                  <h2 className="text-2xl font-bold text-secondary">Sistemas Clean-in-Place — CIP</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Limpeza automatizada ou semiautomatizada de tanques, reatores, misturadores e linhas, reduzindo intervenções manuais e aumentando a repetibilidade.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Tanques para água e soluções de limpeza',
                    'Dosagem controlada de agentes químicos',
                    'Controle de temperatura, vazão e condutividade',
                    'Receitas automatizadas de limpeza',
                    'Dispositivos de aspersão interna',
                    'Registro de parâmetros críticos (Data Integrity)'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-primary/5 p-8 rounded-sm border border-primary/10">
                <h2 className="text-xl font-bold text-secondary mb-6">Engenharia e Qualidade</h2>
                <ul className="space-y-4">
                  {[
                    'Levantamento técnico e diagnóstico',
                    'Fluxogramas P&IDs e Isométricos',
                    'Fabricação de skids e painéis',
                    'Soldagem orbital com registro',
                    'Inspeção visual e boroscopia',
                    'Limpeza, passivação e preservação',
                    'FAT, SAT e comissionamento',
                    'Suporte às atividades de qualificação'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Settings size={18} className="text-primary mt-0.5 shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 shadow-sm">
                <h3 className="text-lg font-bold text-secondary mb-4">Referências Normativas</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Projetos desenvolvidos conforme:
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• RDC nº 658/2022 ANVISA</li>
                  <li>• Farmacopeia Brasileira</li>
                  <li>• USP e European Pharmacopoeia</li>
                  <li>• ASME BPE / ASME B31.3</li>
                  <li>• Guias ISPE</li>
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
              '/images/aplicacoes/farmaceutica/farmaceutica-corredor.jpg',
              '/images/aplicacoes/farmaceutica/farmaceutica-filtro.jpg',
              '/images/aplicacoes/farmaceutica/farmaceutica-linha-1.jpg',
              '/images/aplicacoes/farmaceutica/farmaceutica-linha-2.jpg'
            ].map((img, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-sm shadow-md group h-80">
                <img src={img} alt={`Aplicação Farmacêutica ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FarmaceuticaPage;
