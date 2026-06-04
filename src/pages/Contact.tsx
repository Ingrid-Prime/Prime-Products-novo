import { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock, CheckCircle } from 'lucide-react';
import { AnimateOnScroll } from '../components/AnimateOnScroll';
import { EditableElement } from '../components/EditableElement';
import { SectionContainer } from '../components/SectionContainer';

export function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    // Salva lead no localStorage
    const lead = { ...form, date: new Date().toISOString() };
    try {
      const existing = JSON.parse(localStorage.getItem('prime_leads') ?? '[]') as object[];
      existing.unshift(lead);
      localStorage.setItem('prime_leads', JSON.stringify(existing));
    } catch {}

    // Envia por email via mailto
    const body = [
      `Nome: ${form.name}`,
      `Empresa: ${form.company}`,
      `Telefone: ${form.phone}`,
      `Assunto: ${form.subject}`,
      `Mensagem: ${form.message}`,
    ].join('\n');
    window.location.href = `mailto:diretoria@primeproducts.ind.br?subject=${encodeURIComponent('Contato Site: ' + form.subject)}&body=${encodeURIComponent(body)}`;

    await new Promise((r) => setTimeout(r, 600));
    setSent(true);
    setSending(false);
  };

  const inputCls = 'w-full border border-gray-300 rounded-sm px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white text-secondary placeholder-gray-400';

  return (
    <>
      {/* Hero */}
      <EditableElement
        id="contact_hero_c"
        type="container"
        as="section"
        className="relative min-h-[60vh] flex items-center bg-secondary overflow-hidden"
        defaultStyle={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-secondary/80 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <AnimateOnScroll>
            <div className="inline-block w-20 h-1 bg-primary mb-8 rounded-full" />
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight">
              <EditableElement id="cont_hero_t" defaultContent="Fale Conosco" />
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={400}>
            <div className="text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
              <EditableElement id="cont_hero_s" defaultContent="Canais de suporte de engenharia e atendimento técnico especializado para o seu processo." />
            </div>
          </AnimateOnScroll>
        </div>
      </EditableElement>

      <section className="bg-surface relative overflow-visible -mt-20 pt-0">
        <SectionContainer className="pt-0">
          <div className="bg-white rounded-sm shadow-2xl overflow-hidden max-w-6xl mx-auto border-t-8 border-primary">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Info panel */}
              <div className="p-12 bg-secondary text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-10 -mt-10 bg-white/5 rounded-full w-64 h-64 blur-3xl" />
                <div className="absolute bottom-0 left-0 -ml-10 -mb-10 bg-primary/20 rounded-full w-64 h-64 blur-3xl" />
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-8">
                    <EditableElement id="cont_info_t" defaultContent="Informações de Contato" />
                  </h3>
                  <div className="text-gray-300 mb-12">
                    <EditableElement id="cont_info_d" defaultContent="Nossa equipe de engenharia está pronta para analisar a viabilidade e propor a solução técnica adequada para a sua demanda." />
                  </div>
                  <div className="space-y-8">
                    <AnimateOnScroll delay={100}>
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center mr-6 shrink-0">
                          <MapPin size={24} className="text-primary" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-1">
                            <EditableElement id="cont_addr_t" defaultContent="Matriz" />
                          </h4>
                          <div className="text-gray-400 text-sm">
                            <EditableElement id="cont_addr_1" defaultContent="Belo Horizonte – Minas Gerais" />
                          </div>
                          <div className="text-primary font-bold text-xs mt-1 uppercase tracking-wide">
                            <EditableElement id="cont_addr_2" defaultContent="Atendimento Nacional" />
                          </div>
                        </div>
                      </div>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={200}>
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center mr-6 shrink-0">
                          <Phone size={24} className="text-primary" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-1">
                            <EditableElement id="cont_ph_t" defaultContent="Telefones" />
                          </h4>
                          <div className="text-gray-400 text-sm">
                            <EditableElement id="cont_ph_1" defaultContent="(31) 9 8670-8742" />
                          </div>
                        </div>
                      </div>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={300}>
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center mr-6 shrink-0">
                          <Mail size={24} className="text-primary" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-1">
                            <EditableElement id="cont_em_t" defaultContent="E-mail Técnico" />
                          </h4>
                          <div className="text-gray-400 text-sm">
                            <EditableElement id="cont_em_1" defaultContent="info@primeproducts.ind.br" />
                          </div>
                        </div>
                      </div>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={400}>
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center mr-6 shrink-0">
                          <Clock size={24} className="text-primary" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-1">
                            <EditableElement id="cont_hours_t" defaultContent="Horário" />
                          </h4>
                          <div className="text-gray-400 text-sm">
                            <EditableElement id="cont_hours_1" defaultContent="Segunda a Sexta: 8h–18h" />
                          </div>
                        </div>
                      </div>
                    </AnimateOnScroll>
                  </div>
                </div>
              </div>

              {/* Form panel */}
              <div className="p-12">
                {sent ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-10">
                    <CheckCircle size={64} className="text-green-500 mb-6" />
                    <h3 className="text-2xl font-bold text-secondary mb-3">Mensagem Enviada!</h3>
                    <p className="text-gray-500 mb-6">Nossa equipe entrará em contato em breve.</p>
                    <button onClick={() => setSent(false)} className="text-primary font-bold hover:underline">Enviar nova mensagem</button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-secondary mb-8">
                      <EditableElement id="cont_form_t" defaultContent="Envie sua Mensagem" />
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Nome *</label>
                          <input className={inputCls} required placeholder="Seu nome completo" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Empresa</label>
                          <input className={inputCls} placeholder="Nome da empresa" value={form.company} onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))} />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase text-gray-500 mb-1">E-mail *</label>
                          <input type="email" className={inputCls} required placeholder="seu@email.com" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Telefone</label>
                          <input className={inputCls} placeholder="(11) 9 0000-0000" value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Assunto *</label>
                        <input className={inputCls} required placeholder="Descreva brevemente sua necessidade" value={form.subject} onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))} />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Mensagem *</label>
                        <textarea className={`${inputCls} resize-none`} rows={5} required placeholder="Detalhe sua aplicação, projeto ou dúvida técnica..." value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))} />
                      </div>
                      <button type="submit" disabled={sending} className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-sm transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 shadow-lg disabled:opacity-60">
                        <Send size={18} /> {sending ? 'ENVIANDO...' : 'ENVIAR MENSAGEM'}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
