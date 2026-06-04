import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Calculator, Gauge, Thermometer, Wind, Droplets, Zap } from 'lucide-react';
import { AnimateOnScroll } from '../../components/AnimateOnScroll';
import { EditableElement } from '../../components/EditableElement';
import { SectionContainer } from '../../components/SectionContainer';

const WEB_TOOLS = [
  {
    icon: Gauge,
    name: 'Conversor de Pressão',
    desc: 'Converta entre bar, psi, kPa, MPa, atm, mmHg e outras unidades de pressão.',
    url: 'https://www.unitconverters.net/pressure-converter.html',
  },
  {
    icon: Thermometer,
    name: 'Conversor de Temperatura',
    desc: 'Conversão entre Celsius, Fahrenheit, Kelvin e Rankine.',
    url: 'https://www.unitconverters.net/temperature-converter.html',
  },
  {
    icon: Wind,
    name: 'Conversor de Vazão',
    desc: 'Converta unidades de vazão: m³/h, L/min, SCFM, Nm³/h e mais.',
    url: 'https://www.unitconverters.net/flow-converter.html',
  },
  {
    icon: Droplets,
    name: 'Tabelas de Gases',
    desc: 'Propriedades físicas e termodinâmicas dos principais gases industriais.',
    url: 'https://www.engineeringtoolbox.com/gas-density-d_158.html',
  },
  {
    icon: Zap,
    name: 'Diagrama de Fases',
    desc: 'Diagramas de fases para gases criogênicos e industriais.',
    url: 'https://www.engineeringtoolbox.com/nitrogen-d_1421.html',
  },
  {
    icon: Calculator,
    name: 'Conversor de Energia',
    desc: 'Converta unidades de energia: kJ, kcal, BTU, kWh e outras.',
    url: 'https://www.unitconverters.net/energy-converter.html',
  },
];

export function ToolsMain() {
  return (
    <>
      <EditableElement
        id="tools_hero_bg"
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
              <EditableElement id="tools_hero_title" defaultContent="Simuladores e Ferramentas" />
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={400}>
            <div className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              <EditableElement id="tools_hero_sub" defaultContent="Recursos online para auxiliar seus projetos e cálculos técnicos." />
            </div>
          </AnimateOnScroll>
        </div>
      </EditableElement>

      <section className="bg-surface py-20">
        <SectionContainer className="py-0">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-secondary mb-2">Ferramentas Online</h2>
            <p className="text-gray-500">Links para conversores e simuladores externos de referência técnica.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {WEB_TOOLS.map(({ icon: Icon, name, desc, url }, i) => (
              <AnimateOnScroll key={i} delay={(i % 3) * 80}>
                <a href={url} target="_blank" rel="noopener noreferrer" className="group bg-white p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 block border-b-4 border-transparent hover:border-primary">
                  <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-5 transition-colors rounded-sm">
                    <Icon size={22} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-secondary text-lg mb-2 group-hover:text-primary transition-colors">{name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                  <span className="flex items-center gap-2 text-primary font-bold text-sm">
                    Acessar <ExternalLink size={14} />
                  </span>
                </a>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="bg-secondary rounded-sm p-10 text-center">
            <Calculator size={48} className="text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">Calculadoras Prime Avançadas</h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Acesse nossas calculadoras especializadas para dimensionamento de reguladores, seleção de cilindros e tabelas de conversão rápida.
            </p>
            <Link to="/ferramentas-pro" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-3 font-bold uppercase rounded-sm transition-all">
              Calculadoras Prime <ArrowRight size={16} />
            </Link>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
