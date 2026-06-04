import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, Phone, Mail, FileText, Send } from 'lucide-react';
import { AnimateOnScroll } from '../../components/AnimateOnScroll';
import { EditableElement } from '../../components/EditableElement';
import { SectionContainer } from '../../components/SectionContainer';
import { useCMS } from '../../contexts/CMSContext';

const PRODUCT_DATA: Record<string, { name: string; cat: string; img: string; images: string[]; desc: string; features: string[]; apps: string[] }> = {
  'cilindros-aluminio': { name: 'Cilindros de Alumínio', cat: 'Gases', img: '/images/prod-cilindros-aluminio.png', images: ['/images/prod-cilindros-aluminio.png', '/images/prod-cilindros-aluminio-2.png', '/images/prod-cilindros-aluminio-3.png'], desc: 'Cilindros leves e resistentes para transporte seguro de gases comprimidos. Fabricados em ligas de alumínio de alta resistência, ideais para gases medicinais, industriais e especiais.', features: ['Conformidade com normas DOT e ISO', 'Peso reduzido vs. cilindros de aço', 'Resistência à corrosão', 'Diversas capacidades disponíveis', 'Válvulas de segurança integradas'], apps: ['Gases medicinais', 'Gases de laboratório', 'Gases de alta pureza', 'Transporte especializado'] },
  'cilindros-tipo-4': { name: 'Cilindros Tipo 4', cat: 'Gases', img: '/images/prod-cilindros-tipo4.png', images: ['/images/prod-cilindros-tipo4.png', '/images/prod-cilindros-tipo4-2.png', '/images/prod-cilindros-tipo4-3.png', '/images/prod-cilindros-tipo4-4.png'], desc: 'Cilindros compósitos de alta performance com liner polimérico e reforço em fibra de carbono. Máxima leveza com alta capacidade de armazenamento.', features: ['Liner em HDPE ou liner metálico', 'Reforço em fibra de carbono ou vidro', 'Peso 70% menor que aço equivalente', 'Pressões de trabalho de até 700 bar', 'Alta resistência à fadiga'], apps: ['Logística de gases', 'Veículos a GNV', 'Gases medicinais portáteis', 'Indústria aeroespacial'] },
  'conexoes-instrumentacao': { name: 'Conexões para Instrumentação', cat: 'Instrumentação', img: '/images/prod-conexoes-instrumentacao.png', images: ['/images/prod-conexoes-instrumentacao.png', '/images/prod-conexoes-2.png', '/images/prod-conexoes-3.png', '/images/prod-conexoes-4.png', '/images/prod-conexoes-5.png'], desc: 'Conexões certificadas para aplicações de instrumentação analítica e industrial. Compatibilidade com transmissores, analisadores e sistemas de processo.', features: ['Conexões TK-Fujikin e equivalentes', 'Materiais: SS 316, Hastelloy, PTFE', 'Certificação para fluidos agressivos', 'Conexões compressão, NPT e flange', 'Estanqueidade garantida a altas pressões'], apps: ['Análise de processo', 'Instrumentação industrial', 'Laboratórios', 'Petroquímica'] },
  'detectores-vazamento': { name: 'Detectores de Vazamento', cat: 'Segurança', img: '/images/prod-detectores-vazamento.png', images: ['/images/prod-detectores-vazamento.png', '/images/prod-detectores-2.png', '/images/prod-detectores-3.png', '/images/prod-detectores-4.jpg'], desc: 'Sistemas de detecção de gases tóxicos e inflamáveis para proteção de ambientes industriais. Tecnologias catalítica, eletroquímica e de infravermelho.', features: ['Detecção de H₂S, CO, NH₃, LEL', 'Saída 4-20 mA e HART', 'Certificação ATEX e IECEx', 'Display local e alarmes sonoros/visuais', 'Calibração simplificada em campo'], apps: ['Refinarias e petroquímicas', 'Plantas de gás e GNL', 'Laboratórios químicos', 'Ambientes confinados'] },
  'dewars-criogenicos': { name: 'Dewars e Recipientes Criogênicos', cat: 'Criogenia', img: '/images/prod-dewars-criogenicos.png', images: ['/images/prod-dewars-criogenicos.png', '/images/prod-dewars-2.png', '/images/prod-dewars-3.png'], desc: 'Recipientes criogênicos para armazenamento e transporte de nitrogênio líquido, oxigênio líquido, argônio líquido e outros gases liquefeitos.', features: ['Isolamento a vácuo multicamada', 'Capacidade de 10 a 500 litros', 'Bocal de acesso largo ou estreito', 'Conformidade com normas de transporte', 'Acessórios e suprimentos'], apps: ['Criopreservação biológica', 'Laboratórios de pesquisa', 'Indústria alimentícia', 'Metalurgia criogênica'] },
  'geracao-oxigenio': { name: 'Geração de Oxigênio e Anestesia', cat: 'Gases', img: '/images/prod-geracao-oxigenio.png', images: ['/images/prod-geracao-oxigenio.png', '/images/prod-geracao-2.png', '/images/prod-geracao-3.png', '/images/prod-geracao-4.png', '/images/prod-geracao-5.png', '/images/prod-geracao-6.png', '/images/prod-geracao-7.png', '/images/prod-geracao-8.jpg', '/images/prod-geracao-worker.jpg'], desc: 'Sistemas PSA e concentradores de oxigênio para geração on-site. Independência de fornecedores externos de gases com produção contínua e confiável.', features: ['Pureza de 93% a 99,5% O₂', 'Capacidade de 1 a 500 Nm³/h', 'Tecnologia PSA ou VPSA', 'Monitoramento e controle automático', 'Manutenção simplificada'], apps: ['Hospitais e clínicas', 'Ozonização de água', 'Tratamento de efluentes', 'Soldagem e corte'] },
  'corte-solda': { name: 'Equipamentos para Corte e Solda', cat: 'Industrial', img: '/images/prod-corte-solda.png', images: ['/images/prod-corte-solda.png', '/images/prod-corte-solda-2.png', '/images/prod-corte-solda-3.png', '/images/prod-corte-solda-4.png'], desc: 'Maçaricos, reguladores e acessórios para corte oxiacetilênico e soldagem MIG/TIG/Eletrodo. Equipamentos para metalurgia, fabricação e manutenção industrial.', features: ['Maçaricos para corte e solda', 'Reguladores para CO₂, Ar, O₂, Acetileno', 'Mangueiras certificadas', 'Bocais e consumíveis', 'Kits completos para oficinas'], apps: ['Metalurgia e siderurgia', 'Construção civil e obras', 'Manutenção industrial', 'Oficinas mecânicas'] },
  'reguladores-especiais': { name: 'Reguladores de Gases Especiais', cat: 'Instrumentação', img: '/images/regulador-gases-09.jpg', images: ['/images/regulador-gases-09.jpg', '/images/regulador-gases-08.png', '/images/regulador-gases-04.jpg', '/images/regulador-gases-05.jpg', '/images/regulador-gases-06.jpg', '/images/regulador-gases-10-cropped.png'], desc: 'Reguladores de alta performance projetados para controle de gases especiais, aplicações de alta e altíssima pressão, e calibração de instrumentos de medição. Desenvolvidos com foco em máxima estabilidade e vedação absoluta contra vazamentos.', features: ['Modelos específicos para gases especiais de alta pureza', 'Estágio simples ou duplo para alta e altíssima pressão (até 300 bar)', 'Otimizados para processos críticos de calibração analítica', 'Construção em materiais inertes (Aço Inox 316, PTFE)', 'Estanqueidade certificada com teste de hélio em fábrica'], apps: ['Análise de gases padrão e misturas especiais', 'Estações de calibração de instrumentação', 'Controle de processos críticos de alta pressão', 'Laboratórios de P&D de alta exigência'] },
  'reguladores-hidraulicos': { name: 'Reguladores Hidráulicos Alta Pressão', cat: 'Hidráulica', img: '/images/prod-reguladores.png', images: ['/images/prod-reguladores.png', '/images/prod-reguladores-2.png'], desc: 'Reguladores de pressão de alta performance para sistemas hidráulicos industriais. Controle preciso de pressão em circuitos hidráulicos de alta demanda.', features: ['Pressões de até 700 bar', 'Vazões elevadas', 'Filtros integrados disponíveis', 'Construção em aço de alta resistência', 'Vedações de longa duração'], apps: ['Prensas e conformação', 'Injetoras plásticas', 'Máquinas-ferramenta', 'Sistemas de teste'] },
  'combate-incendio': { name: 'Sistemas de Combate a Incêndio', cat: 'Segurança', img: '/images/prod-combate-incendio.png', images: ['/images/prod-combate-incendio.png', '/images/prod-combate-incendio-2.png', '/images/prod-combate-3.png', '/images/prod-combate-4.png'], desc: 'Sistemas de supressão de incêndio com CO₂, FM-200, Novec 1230 e outros agentes limpos. Proteção de salas de dados, painéis elétricos e ambientes críticos.', features: ['Agentes: CO₂, FM-200, Novec 1230', 'Supressão total por inundação', 'Detecção integrada', 'Projeto conforme NFPA 12/2001', 'Manutenção e recarga de cilindros'], apps: ['Data centers e CPD', 'Painéis e subestações elétricas', 'Salas de controle', 'Museus e arquivos'] },
  'transmissores-pressao': { name: 'Transmissores de Pressão e Nível', cat: 'Instrumentação', img: '/images/prod-transmissores-pressao.png', images: ['/images/prod-transmissores-pressao.png', '/images/prod-transmissores-2.png'], desc: 'Transmissores inteligentes de alta performance para medição de pressão diferencial, manométrica, absoluta e nível. Compatíveis com HART, Profibus e Foundation Fieldbus.', features: ['Precisão de ±0,04% da URL', 'Protocolo HART, Profibus PA, FF', 'Rangeabilidade de 100:1', 'Display LCD local configurável', 'Certificação ATEX e SIL 2/3'], apps: ['Óleo e gás', 'Petroquímica e química', 'Geração de energia', 'Processos críticos de segurança'] },
  'valvulas-industriais': { name: 'Válvulas Industriais e Medicinais', cat: 'Válvulas', img: '/images/prod-valvulas.png', images: ['/images/prod-valvulas.png', '/images/prod-valvulas-2.png'], desc: 'Válvulas de agulha, esfera, globo e membrana para gases industriais, medicinais e especiais. Certificadas para aplicações de alta pressão e fluidos agressivos.', features: ['Materiais: aço inox, latão, PTFE', 'Pressões de até 400 bar', 'Tamanhos de 1/8" a 2"', 'Certificação para gases medicinais', 'Conexões rosca, solda e flange'], apps: ['Distribuição de gases medicinais', 'Laboratórios e P&D', 'Indústria química', 'Automação de processos'] },
};

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { articles } = useCMS();
  const [quoteForm, setQuoteForm] = useState({ name: '', company: '', email: '', phone: '', qty: '', details: '' });
  const [quoteSent, setQuoteSent] = useState(false);
  const [quoteSending, setQuoteSending] = useState(false);

  const handleQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSending(true);
    await new Promise((r) => setTimeout(r, 800));
    setQuoteSent(true);
    setQuoteSending(false);
  };

  const inputCls = 'w-full border border-gray-200 rounded-sm px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white text-secondary placeholder-gray-400';

  const product = id ? PRODUCT_DATA[id] : null;
  const article = articles.find((a) => a.id === id);

  if (!product && !article) {
    return (
      <SectionContainer className="text-center py-32">
        <h1 className="text-2xl font-bold text-secondary mb-4">Produto não encontrado</h1>
        <Link to="/produtos" className="text-primary font-bold hover:underline inline-flex items-center gap-2">
          <ArrowLeft size={16} /> Voltar para Produtos
        </Link>
      </SectionContainer>
    );
  }

  const name = product?.name ?? article?.title ?? '';
  const cat = product?.cat ?? article?.category ?? '';
  const img = product?.img ?? article?.image ?? '';
  const images = product?.images ?? (img ? [img] : []);
  const desc = product?.desc ?? article?.summary ?? '';
  const features = product?.features ?? [];
  const apps = product?.apps ?? [];

  return (
    <>
      <EditableElement
        id={`prod_${id}_hero`}
        type="container"
        as="section"
        className="relative min-h-[50vh] flex items-end bg-secondary overflow-hidden pb-16 pt-32"
        defaultStyle={{ backgroundImage: `url('${img}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <span className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 mb-4">{cat}</span>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
            <EditableElement id={`prod_${id}_title`} defaultContent={name} />
          </h1>
        </div>
      </EditableElement>

      <section className="bg-surface py-16">
        <SectionContainer className="py-0">
          <div className="mb-8">
            <Link to="/produtos" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline">
              <ArrowLeft size={16} /> Voltar para Produtos
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-8 shadow-md">
                <h2 className="text-xl font-bold text-secondary mb-4">Descrição</h2>
                {article?.content ? (
                  <div className="prose prose-sm max-w-none text-gray-600" dangerouslySetInnerHTML={{ __html: article.content }} />
                ) : (
                  <p className="text-gray-600 leading-relaxed">
                    <EditableElement id={`prod_${id}_desc`} defaultContent={desc} />
                  </p>
                )}
              </div>
              {features.length > 0 && (
                <div className="bg-white p-8 shadow-md">
                  <h2 className="text-xl font-bold text-secondary mb-6">Características Técnicas</h2>
                  <ul className="space-y-3">
                    {features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                        <span className="text-gray-700 text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {apps.length > 0 && (
                <div className="bg-white p-8 shadow-md">
                  <h2 className="text-xl font-bold text-secondary mb-6">Aplicações</h2>
                  <div className="grid grid-cols-2 gap-3">
                    {apps.map((a, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <ArrowRight size={14} className="text-primary shrink-0" /> {a}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Datasheet */}
              <div className="bg-white p-8 shadow-md">
                <h2 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                  <FileText size={20} className="text-primary" /> Datasheet e Documentação
                </h2>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                  Solicite o datasheet técnico completo, ficha de especificações ou documentação de certificação deste produto diretamente com nossa equipe.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contato"
                    className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-white px-6 py-3 font-bold text-sm uppercase tracking-wider rounded-sm transition-all"
                  >
                    <FileText size={16} /> Solicitar Datasheet
                  </Link>
                  <Link
                    to="/contato"
                    className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 font-bold text-sm uppercase tracking-wider rounded-sm transition-all"
                  >
                    Solicitar Certificados
                  </Link>
                </div>
              </div>

              {/* Formulário de cotação técnica */}
              <div className="bg-white p-8 shadow-md">
                <h2 className="text-xl font-bold text-secondary mb-2">Questionário Técnico para Cotação</h2>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  Preencha os dados abaixo para que nossa equipe elabore uma proposta técnica personalizada para este produto.
                </p>
                {quoteSent ? (
                  <div className="text-center py-8">
                    <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-secondary mb-2">Solicitação enviada!</h3>
                    <p className="text-gray-500 text-sm mb-4">Nossa equipe técnica entrará em contato em breve.</p>
                    <button onClick={() => setQuoteSent(false)} className="text-primary font-bold text-sm hover:underline">
                      Enviar nova solicitação
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleQuote} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Nome *</label>
                        <input className={inputCls} required placeholder="Seu nome" value={quoteForm.name} onChange={(e) => setQuoteForm((f) => ({ ...f, name: e.target.value }))} />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Empresa *</label>
                        <input className={inputCls} required placeholder="Empresa" value={quoteForm.company} onChange={(e) => setQuoteForm((f) => ({ ...f, company: e.target.value }))} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">E-mail *</label>
                        <input type="email" className={inputCls} required placeholder="seu@email.com" value={quoteForm.email} onChange={(e) => setQuoteForm((f) => ({ ...f, email: e.target.value }))} />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Telefone</label>
                        <input className={inputCls} placeholder="(11) 9 0000-0000" value={quoteForm.phone} onChange={(e) => setQuoteForm((f) => ({ ...f, phone: e.target.value }))} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Quantidade / Volume</label>
                      <input className={inputCls} placeholder="Ex: 5 unidades, 200 L/min, etc." value={quoteForm.qty} onChange={(e) => setQuoteForm((f) => ({ ...f, qty: e.target.value }))} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Detalhes técnicos da aplicação *</label>
                      <textarea className={`${inputCls} resize-none`} rows={4} required placeholder="Descreva sua aplicação, condições de processo, pressão, temperatura, fluido, etc." value={quoteForm.details} onChange={(e) => setQuoteForm((f) => ({ ...f, details: e.target.value }))} />
                    </div>
                    <button type="submit" disabled={quoteSending} className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 rounded-sm transition-all flex items-center justify-center gap-2 disabled:opacity-60">
                      <Send size={16} /> {quoteSending ? 'ENVIANDO...' : 'SOLICITAR COTAÇÃO TÉCNICA'}
                    </button>
                  </form>
                )}
              </div>
            </div>
            <div className="space-y-6">
              <AnimateOnScroll>
                <img src={img} alt={name} className="w-full rounded-sm shadow-lg" referrerPolicy="no-referrer" />
                {images.length > 1 && (
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {images.slice(1).map((src, i) => {
                      const isFullWidth = src.includes('regulador-gases-10-cropped.png');
                      return (
                        <img
                          key={i}
                          src={src}
                          alt={`${name} ${i + 2}`}
                          className={`${isFullWidth ? 'col-span-2 h-auto max-h-[160px] object-contain bg-white p-2 border border-gray-100' : 'h-28 object-cover'} w-full shadow-sm rounded-sm hover:opacity-90 transition-opacity`}
                          referrerPolicy="no-referrer"
                        />
                      );
                    })}
                  </div>
                )}
              </AnimateOnScroll>
              <div className="bg-secondary text-white p-8 rounded-sm shadow-lg">
                <h3 className="font-bold text-lg mb-4">Solicitar Informações</h3>
                <p className="text-gray-400 text-sm mb-6">Nossa equipe técnica está pronta para atender sua demanda.</p>
                <div className="space-y-3 text-sm mb-6">
                  <div className="flex items-center gap-3"><Phone size={16} className="text-primary" /><span>(31) 9 8670-8742</span></div>
                  <div className="flex items-center gap-3"><Mail size={16} className="text-primary" /><span>info@primeproducts.ind.br</span></div>
                </div>
                <Link to="/contato" className="block w-full bg-primary hover:bg-primary-hover text-white text-center py-3 font-bold uppercase tracking-wider rounded-sm transition-all">
                  Solicitar Cotação
                </Link>
              </div>
              <div className="bg-white p-6 shadow-md rounded-sm">
                <h3 className="font-bold text-secondary mb-4 text-sm uppercase tracking-wide">Outros Produtos</h3>
                <div className="space-y-2">
                  {Object.entries(PRODUCT_DATA).filter(([k]) => k !== id).slice(0, 4).map(([key, p]) => (
                    <Link key={key} to={`/produto/${key}`} className="block text-sm text-gray-600 hover:text-primary transition-colors py-1 border-b border-gray-100 last:border-0 flex items-center gap-2">
                      <ArrowRight size={12} className="text-primary shrink-0" /> {p.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
