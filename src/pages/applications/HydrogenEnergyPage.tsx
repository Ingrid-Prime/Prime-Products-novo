import { useEffect } from 'react';
import { ShieldCheck, Zap, Factory, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const HydrogenEnergyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Standard Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[60vh] flex items-end">
        {/* Background Image with Gradient Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/images/aplicacoes/energias-renovaveis-hero.jpg")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent z-10" />

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-primary text-white text-sm font-bold tracking-wider mb-6 uppercase">
              ENERGIA
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Energias Renováveis e Hidrogênio
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-8">
            <Link to="/aplicacoes" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline">
              <ArrowLeft size={16} /> Voltar para Aplicações
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-8 shadow-md">
                <h2 className="text-xl font-bold text-secondary mb-4">Sobre esta Aplicação</h2>
                <p className="text-gray-600 leading-relaxed">
                  O futuro da energia passa pelo Hidrogênio e soluções de altíssima pressão. A Prime Products fornece as melhores tecnologias do mercado (Best of Breed) em Jumbo Tubes de alta pressão e infraestrutura para H₂.
                </p>
              </div>

              <div className="bg-white p-8 shadow-md">
                <h2 className="text-xl font-bold text-secondary mb-6">Principais Desafios</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm">Garantir armazenamento e transporte 100% seguros de H₂ em altas pressões</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm">Infraestrutura para estações de abastecimento de H₂ (Filling Stations)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm">Prevenção contra fragilização por hidrogênio em materiais sob estresse</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm">Soluções de super alta capacidade para estocagem estacionária (248 a 875 bar)</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-8 shadow-md">
                <h2 className="text-xl font-bold text-secondary mb-6">Soluções Prime Products</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight size={16} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm">Sistemas de Transporte (Tube Trailers) Tipo 1 e Tipo 4</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight size={16} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm">Pacotes de Armazenamento de H₂ em Jumbo Tubes Tipo 4</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight size={16} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm">Vasos e tanques de combustível operando a 248 bar, 500 bar, 700 bar e até 875 bar</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight size={16} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm">Componentes e infraestrutura para centros Aeroespaciais e aplicações especiais</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

      {/* Content Blocks */}
      <div className="pt-8 pb-16">
        
        {/* Block 1: Transporte */}
        <div className="container mx-auto px-4 mb-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img 
                src="/images/aplicacoes/Energias Renováveis Hidrogênio/h2-tube-trailer.png" 
                alt="Transportation Systems" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-secondary mb-4 flex items-center">
                <Zap className="mr-3 text-[#e25a3a]" size={28} />
                Sistemas de Transporte (Tube Trailers)
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Para o mercado global de hidrogênio, o transporte eficiente e seguro é fundamental. Nossas soluções de <strong>Transportation Systems</strong> englobam carretas (Tube Trailers) equipadas com cilindros Tipo 1 e os modernos e leves tanques Tipo 4.
              </p>
              <ul className="list-none space-y-3">
                <li className="flex items-start">
                  <ShieldCheck className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Conformidade total com regulamentações internacionais de transporte de cargas perigosas em altíssima pressão.</span>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Redução de peso (Type 4) que maximiza o payload de hidrogênio por viagem.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Block 2: Armazenamento (FAIXA AZUL) */}
        <div className="bg-primary py-24 my-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="w-full md:w-1/2">
                <img 
                  src="/images/aplicacoes/Energias Renováveis Hidrogênio/h2-jumbo-tube.png" 
                  alt="Storage Systems" 
                  className="w-full h-auto rounded-lg shadow-2xl border-4 border-white/10"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Factory className="mr-3 text-[#e25a3a]" size={28} />
                  Super Large Capacity Storage
                </h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  A estocagem estacionária exige segurança contra a fragilização por hidrogênio. Oferecemos pacotes de armazenamento <strong className="text-white">Jumbo Tube Tipo 4</strong> e vasos de pressão projetados para capacidades extremas.
                </p>
                <div className="bg-white/10 backdrop-blur-sm p-6 border-l-4 border-[#e25a3a] shadow-sm rounded-r-lg">
                  <h4 className="font-bold text-white mb-2 text-sm uppercase tracking-wide">Faixas de Pressão de Operação:</h4>
                  <ul className="grid grid-cols-2 gap-2 text-gray-200 text-sm">
                    <li>• 248 bar Storage Vessels</li>
                    <li>• 500 bar Storage</li>
                    <li>• 700 bar Fuel Tanks</li>
                    <li>• 875 bar Storage</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Block 3: Filling Stations & Aero */}
        <div className="container mx-auto px-4 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img 
                src="/images/aplicacoes/Energias Renováveis Hidrogênio/h2-storage.png" 
                alt="H2 Filling Stations" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-secondary mb-4">
                H2 Filling Stations & Aerospace
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Desde postos de abastecimento de H₂ para veículos movidos a célula a combustível até complexos centros aeroespaciais (Aerospace Centers).
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                A Prime Products integra reguladores, válvulas e instrumentação analítica para garantir que todo o sistema flua com <strong>Zero Leakage</strong> (vazamento zero) e controle absoluto de pureza.
              </p>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wide">Produtos Relacionados:</h4>
                <div className="flex flex-wrap gap-4">
                  <Link to="/produto/reguladores-especiais" className="bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                    Reguladores de Alta Pressão
                  </Link>
                  <Link to="/produto/transmissores-pressao" className="bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                    Transmissores de Pressão
                  </Link>
                  <Link to="/produto/valvulas-industriais" className="bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                    Válvulas UHP
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>
        
        {/* Galeria de Imagens Técnicas e Complementares (Full Width) */}
        <div className="container mx-auto px-4 mt-16 border-t border-gray-200 pt-12">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Galeria de Aplicações Técnicas</h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            {[
              '/images/aplicacoes/Energias Renováveis Hidrogênio/Energia verde - Transição Energética.png',
              '/images/aplicacoes/Energias Renováveis Hidrogênio/app-energia-renovavel-1.jpg'
            ].map((src, i) => (
              <div key={i} className="relative group overflow-hidden rounded-sm shadow-md">
                <img 
                  src={src} 
                  alt={`Energias Renováveis - Imagem Técnica ${i + 1}`} 
                  className="w-full h-72 object-cover group-hover:scale-[1.02] transition-transform duration-700" 
                  referrerPolicy="no-referrer" 
                />
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default HydrogenEnergyPage;
