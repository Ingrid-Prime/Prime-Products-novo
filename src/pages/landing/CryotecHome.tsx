import { useState } from 'react';
import { 
  Gauge, 
  Wrench, 
  Thermometer, 
  RotateCw, 
  Activity, 
  Sparkles, 
  Eye, 
  CheckCircle2, 
  Mail, 
  MapPin, 
  ShieldCheck,
  Send,
  MessageSquare
} from 'lucide-react';

export function CryotecHome() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    location: '',
    description: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form data submitted:', formData);
    setSubmitted(true);
  };

  const services = [
    {
      num: "01",
      title: "Recarga de helio",
      desc: "Abastecimiento planificado para garantizar la continuidad operativa de su resonador.",
      icon: Gauge
    },
    {
      num: "02",
      title: "Cambio de coldhead",
      desc: "Sustitución técnica de coldhead para mantener la máxima eficiencia de enfriamiento del sistema.",
      icon: RotateCw
    },
    {
      num: "03",
      title: "Presurización de compresores",
      desc: "Verificación, recarga y corrección precisa de la presión de trabajo del compresor de helio.",
      icon: Activity
    },
    {
      num: "04",
      title: "Mantenimiento de compresores",
      desc: "Servicios preventivos y correctivos avanzados para asegurar la confiabilidad del conjunto de compresión.",
      icon: Wrench
    },
    {
      num: "05",
      title: "Limpieza de flexines",
      desc: "Limpieza profunda de las líneas flexibles para preservar el flujo criogénico y la integridad del sistema.",
      icon: Sparkles
    },
    {
      num: "06",
      title: "Chillers: limpieza y mantenimiento",
      desc: "Monitoreo y mantenimiento preventivo del sistema de enfriamiento de agua para una operación de resonancia estable.",
      icon: Thermometer
    },
    {
      num: "07",
      title: "Monitoreo continuo",
      desc: "Acompañamiento técnico regular para anticipar riesgos de escape de helio y reducir tiempos de parada.",
      icon: Eye
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans antialiased text-slate-800">
      
      {/* Navigation Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded bg-blue-900 flex items-center justify-center text-white font-bold text-xl">
              C
            </div>
            <div>
              <span className="text-2xl font-bold tracking-tight text-blue-900">Cryotec</span>
              <span className="block text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Soluciones Criogénicas</span>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 items-center">
            <a href="#servicios" className="text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors">Servicios</a>
            <a href="#compromiso" className="text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors">Compromiso</a>
            <a href="#contacto" className="text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors">Contacto</a>
            <a 
              href="#contacto" 
              className="bg-blue-900 hover:bg-blue-800 text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
            >
              Solicitar Soporte
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative bg-slate-900 text-white overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.8)), url("/images/home/hero-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-blue-800 text-blue-200 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
              Soporte Especializado en Paraguay
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Criogenia confiable para resonancia magnética.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
              Soluciones especializadas para preservar la operación, la seguridad y el máximo rendimiento de sus equipos de diagnóstico.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contacto" 
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3 rounded transition-colors shadow-lg"
              >
                Solicitar atención
              </a>
              <a 
                href="#servicios" 
                className="border border-slate-400 hover:border-white text-white font-medium px-8 py-3 rounded transition-colors"
              >
                Ver servicios
              </a>
            </div>
          </div>
        </div>

        {/* Diagonal Separator Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-slate-50 transform skew-y-1 origin-bottom-right"></div>
      </section>

      {/* Stat Bar */}
      <section className="bg-blue-900 text-white py-6 relative z-20 shadow-md">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          <div className="text-4xl md:text-5xl font-black text-blue-300">
            750+
          </div>
          <div>
            <h4 className="text-lg font-bold">Recargas de helio atendidas con éxito</h4>
            <p className="text-sm text-blue-200">Experiencia técnica aplicada a operaciones críticas en clínicas y hospitales de la región.</p>
          </div>
        </div>
      </section>

      {/* Intro & Services Section */}
      <section id="servicios" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          
          {/* Section Title */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Especialistas en sistemas criogénicos
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Cryotec ofrece soporte técnico avanzado para equipos de resonancia magnética con enfoque en atención responsable, precisa y transparente. Nuestro equipo cuenta con capacitación internacional para realizar servicios criogénicos complejos en equipos de fabricantes líderes como <strong className="text-blue-900">GE, Siemens, Philips y Canon</strong>.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md hover:border-blue-200 transition-all group"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-blue-50 text-blue-900 rounded group-hover:bg-blue-900 group-hover:text-white transition-all">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-slate-300 font-bold text-xl">{service.num}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-950 mb-3 group-hover:text-blue-900 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coverage & Commitment Section */}
      <section id="compromiso" className="py-20 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Coverage Card */}
            <div className="bg-slate-50 p-8 md:p-10 rounded-xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Atención técnica donde lo necesita
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Nuestros ingenieros de servicio están equipados y listos para atender de manera ágil a clínicas, centros de diagnóstico por imagen y hospitales en todo el territorio paraguayo, garantizando un soporte rápido para evitar la pérdida de vacío y resguardar la carga de helio de sus imanes.
              </p>
              <div className="flex items-center gap-3 text-blue-900 font-semibold">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>Cobertura nacional completa en Paraguay</span>
              </div>
            </div>

            {/* Commitment Details */}
            <div>
              <span className="text-sm font-bold text-blue-700 uppercase tracking-widest block mb-2">Nuestro Compromiso</span>
              <h3 className="text-3xl font-bold text-slate-900 mb-8">Garantía de calidad criogénica</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="mt-1 p-1 bg-green-50 text-green-600 rounded-full">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Know-how especializado</h4>
                    <p className="text-slate-600 text-sm">Amplia experiencia práctica e instrumentación criogénica de alta precisión aplicada a resonadores magnéticos.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 p-1 bg-green-50 text-green-600 rounded-full">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Comunicación clara</h4>
                    <p className="text-slate-600 text-sm">Transparencia absoluta en cada etapa del servicio, proporcionando informes detallados de presiones, temperaturas y estado general.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 p-1 bg-green-50 text-green-600 rounded-full">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Soluciones personalizadas</h4>
                    <p className="text-slate-600 text-sm">Diagnósticos precisos y soluciones orientadas exactamente a las necesidades específicas de cada marca y modelo de equipo.</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Contact & Support Form */}
      <section id="contacto" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Decorative Circles */}
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 rounded-full bg-blue-950 opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-96 h-96 rounded-full bg-blue-900 opacity-20 blur-3xl"></div>

        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <ShieldCheck className="w-16 h-16 text-blue-400 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hable con Cryotec</h2>
            <p className="text-slate-300 max-w-lg mx-auto">
              Cuente con soporte técnico criogénico confiable para su resonador magnético. Rellene el formulario a continuación para contactarnos.
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700 backdrop-blur rounded-xl p-8 md:p-12 shadow-xl">
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">¡Solicitud Enviada con Éxito!</h3>
                <p className="text-slate-300 mb-6">Nuestro equipo de ingeniería revisará los detalles y se pondrá en contacto a la brevedad.</p>
                <button 
                  type="button" 
                  onClick={() => setSubmitted(false)}
                  className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded text-sm font-semibold transition-colors"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Nombre completo</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Ej: Ing. Carlos Gómez"
                      className="w-full bg-slate-900 border border-slate-700 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Clínica o Centro Médico</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Ej: Hospital de Clínicas"
                      className="w-full bg-slate-900 border border-slate-700 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Correo electrónico corporativo</label>
                    <input 
                      type="email" 
                      required
                      placeholder="correo@ejemplo.com"
                      className="w-full bg-slate-900 border border-slate-700 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Teléfono / WhatsApp</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="Ej: +595 981 123456"
                      className="w-full bg-slate-900 border border-slate-700 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Ubicación del equipo (Ciudad, Paraguay)</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Ej: Asunción, Paraguay"
                    className="w-full bg-slate-900 border border-slate-700 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Detalles del resonador y servicios solicitados</label>
                  <textarea 
                    rows={4} 
                    required
                    placeholder="Describa el modelo del resonador (ej: GE Signa Creator 1.5T), los niveles de helio actuales o la falla observada..."
                    className="w-full bg-slate-900 border border-slate-700 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-4 border-t border-slate-700">
                  <div className="flex flex-col gap-2">
                    <a 
                      href="https://wa.me/595981123456" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-green-400 hover:text-green-300 text-sm transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Contacto Rápido por WhatsApp</span>
                    </a>
                    <a 
                      href="mailto:diretoria@cryotec.net" 
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>diretoria@cryotec.net</span>
                    </a>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3 rounded flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <span>Enviar Solicitud</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                
                <p className="text-[11px] text-slate-400 text-center mt-4">
                  * Nota: El suministro e instalação en Paraguay están sujetos a validación de viabilidad técnica y logística por parte de nuestro departamento de ingeniería.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-8 border-t border-slate-800 text-center text-xs">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Cryotec - Soluciones en Criogenia.</p>
          <div className="flex gap-4">
            <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
            <a href="#compromiso" className="hover:text-white transition-colors">Compromiso</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
