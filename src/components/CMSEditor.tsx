import { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Settings, X, FileText, UploadCloud, RotateCcw, ChevronRight,
  LogOut, Users, Trash2, Mail,
} from 'lucide-react';
import { useCMS } from '../contexts/CMSContext';
import { ArticleManager } from './ArticleManager';

const NAV_PAGES = [
  { label: 'Home', path: '/' },
  { label: 'A Prime (Sobre)', path: '/sobre' },
  { label: 'Soluções', path: '/solucoes' },
  { label: 'Produtos', path: '/produtos' },
  { label: 'Aplicações', path: '/aplicacoes' },
  { label: 'Ferramentas', path: '/ferramentas' },
  { label: 'Conteúdo', path: '/conteudo' },
  { label: 'Contato', path: '/contato' },
];

// ─── Painel de Leads ─────────────────────────────────────────────────────────
interface Lead {
  name: string; company: string; email: string; phone: string;
  subject: string; message: string; date: string;
}

function LeadsPanel({ onClose }: { onClose: () => void }) {
  const [leads, setLeads] = useState<Lead[]>(() => {
    try { return JSON.parse(localStorage.getItem('prime_leads') ?? '[]') as Lead[]; } catch { return []; }
  });

  const deleteLead = (i: number) => {
    if (!confirm('Excluir este lead?')) return;
    const updated = leads.filter((_, idx) => idx !== i);
    setLeads(updated);
    localStorage.setItem('prime_leads', JSON.stringify(updated));
  };

  const emailLead = (lead: Lead) => {
    const body = [`Nome: ${lead.name}`, `Empresa: ${lead.company}`, `Telefone: ${lead.phone}`, `Assunto: ${lead.subject}`, `Mensagem: ${lead.message}`].join('\n');
    window.location.href = `mailto:diretoria@primeproducts.ind.br?subject=${encodeURIComponent('Lead: ' + lead.subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="fixed inset-0 z-[99999] bg-black/70 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-white w-full max-w-2xl rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col max-h-[90vh]">
        <div className="bg-secondary text-white p-4 rounded-t-2xl sm:rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <Users size={18} /> Leads do Formulário ({leads.length})
          </div>
          <button onClick={onClose} className="hover:bg-white/10 p-1 rounded"><X size={18} /></button>
        </div>
        <div className="overflow-y-auto flex-1 p-4 space-y-3">
          {leads.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <Users size={40} className="mx-auto mb-3 opacity-30" />
              <p className="text-sm">Nenhum lead ainda. Os contatos enviados pelo formulário aparecerão aqui.</p>
            </div>
          ) : leads.map((lead, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-4 space-y-1 text-sm">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-bold text-secondary">{lead.name} {lead.company && <span className="text-gray-500 font-normal">— {lead.company}</span>}</p>
                  <p className="text-gray-500 text-xs">{new Date(lead.date).toLocaleString('pt-BR')}</p>
                </div>
                <div className="flex gap-1 shrink-0">
                  <button onClick={() => emailLead(lead)} title="Responder por email" className="p-1.5 rounded bg-primary/10 hover:bg-primary hover:text-white text-primary transition-colors"><Mail size={14} /></button>
                  <button onClick={() => deleteLead(i)} title="Excluir" className="p-1.5 rounded bg-red-50 hover:bg-red-500 hover:text-white text-red-500 transition-colors"><Trash2 size={14} /></button>
                </div>
              </div>
              {lead.email && <p className="text-xs text-blue-600">{lead.email} {lead.phone && `· ${lead.phone}`}</p>}
              {lead.subject && <p className="font-semibold text-xs text-gray-700">Assunto: {lead.subject}</p>}
              {lead.message && <p className="text-xs text-gray-500 leading-relaxed">{lead.message}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Editor principal ─────────────────────────────────────────────────────────
export function CMSEditor() {
  const {
    isEditing, selectedId, data, updateElement, updateStyle,
    publish, reset, selectElement, logout, isPublishing,
  } = useCMS();

  const navigate = useNavigate();
  const location = useLocation();
  const [showArticleManager, setShowArticleManager] = useState(false);
  const [showLeads,          setShowLeads]          = useState(false);
  const [saved,              setSaved]              = useState(false);
  const fileRef  = useRef<HTMLInputElement>(null);

  if (!isEditing) return null;

  const selected = selectedId ? data[selectedId] : null;

  const handlePublish = async () => {
    try {
      await publish();
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      console.error('Erro ao salvar:', msg);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !selectedId) return;
    if (file.size > 200 * 1024) {
      alert('Imagem muito grande. Use imagens menores para melhor performance.');
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      if (selected?.type === 'image') {
        updateElement(selectedId, { content: result });
      } else {
        updateStyle(selectedId, { backgroundImage: `url('${result}')` });
      }
    };
    reader.readAsDataURL(file);
  };

  const inputCls = 'w-full bg-white text-gray-900 border border-gray-300 rounded p-2 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none placeholder-gray-400';

  return (
    <>
      {showArticleManager && <ArticleManager onClose={() => setShowArticleManager(false)} />}
      {showLeads && <LeadsPanel onClose={() => setShowLeads(false)} />}

      <div className="fixed right-0 top-0 h-screen w-80 bg-white shadow-2xl z-[9999] border-l border-gray-200 flex flex-col overflow-hidden animate-slide-in">
        {/* Header */}
        <div className="bg-secondary text-white p-4 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2 font-bold">
              <Settings size={18} /> <span>CMS Editor</span>
            </div>
            <button onClick={() => selectElement(null)} className="hover:bg-white/10 p-1 rounded">
              <X size={18} />
            </button>
          </div>
          <div className="relative">
            <label className="text-[10px] uppercase font-bold text-gray-400 mb-1 block">Navegar</label>
            <div className="flex items-center bg-white/10 rounded overflow-hidden border border-white/20">
              <select
                className="w-full bg-secondary text-white text-xs p-2 outline-none cursor-pointer"
                value={location.pathname}
                onChange={(e) => navigate(e.target.value)}
              >
                <option value="" disabled>Ir para página...</option>
                {NAV_PAGES.map((p) => (
                  <option key={p.path} value={p.path} className="text-white bg-secondary">{p.label}</option>
                ))}
              </select>
              <div className="pr-2 pointer-events-none absolute right-0">
                <ChevronRight size={12} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Botões de ação */}
        <div className="bg-gray-100 p-2 border-b border-gray-200 space-y-2">
          <button
            onClick={() => setShowArticleManager(true)}
            className="w-full bg-primary hover:bg-primary-hover text-white text-xs font-bold py-2 rounded flex items-center justify-center gap-2 transition-colors"
          >
            <FileText size={14} /> GERENCIAR ARTIGOS (BLOG)
          </button>
          <button
            onClick={() => setShowLeads(true)}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold py-2 rounded flex items-center justify-center gap-2 transition-colors"
          >
            <Users size={14} /> VER LEADS / CONTATOS
          </button>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handlePublish}
              disabled={isPublishing || saved}
              className={`${isPublishing ? 'bg-gray-400' : saved ? 'bg-emerald-500' : 'bg-green-600 hover:bg-green-700'} text-white text-xs font-bold py-2 rounded flex items-center justify-center gap-1 transition-colors`}
            >
              <UploadCloud size={14} /> {isPublishing ? 'SALVANDO...' : saved ? 'SALVO ✓' : 'PUBLICAR'}
            </button>
            <button
              onClick={reset}
              className="bg-red-500 hover:bg-red-600 text-white text-xs font-bold py-2 rounded flex items-center justify-center gap-1 transition-colors"
            >
              <RotateCcw size={14} /> DESCARTAR
            </button>
          </div>
        </div>

        {/* Editor de elemento */}
        <div className="flex-1 overflow-y-auto p-4">
          {selected ? (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-secondary text-sm uppercase tracking-wide">Editando Elemento</h3>
                <span className="text-[10px] bg-primary/10 text-primary px-2 py-1 rounded font-bold uppercase">{selected.type}</span>
              </div>
              <div className="text-[10px] text-gray-400 font-mono bg-gray-50 p-2 rounded break-all">{selectedId}</div>

              {selected.type !== 'container' && (
                <div>
                  <label className="text-xs font-bold uppercase text-gray-500 block mb-1">
                    {selected.type === 'image' ? 'URL da Imagem' : 'Conteúdo'}
                  </label>
                  {selected.type === 'image' ? (
                    <>
                      <input
                        className={inputCls}
                        value={selected.content ?? ''}
                        onChange={(e) => updateElement(selectedId!, { content: e.target.value })}
                        placeholder="https://..."
                      />
                      <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                      <button
                        onClick={() => fileRef.current?.click()}
                        className="mt-2 w-full text-xs bg-gray-100 hover:bg-gray-200 py-2 rounded border border-gray-300"
                      >
                        Upload de Imagem
                      </button>
                    </>
                  ) : (
                    <textarea
                      className={`${inputCls} resize-none`}
                      rows={4}
                      value={selected.content ?? ''}
                      onChange={(e) => updateElement(selectedId!, { content: e.target.value })}
                    />
                  )}
                </div>
              )}

              {(selected.type === 'button' || selected.type === 'link') && (
                <div>
                  <label className="text-xs font-bold uppercase text-gray-500 block mb-1">Link (href)</label>
                  <input
                    className={inputCls}
                    value={selected.href ?? ''}
                    onChange={(e) => updateElement(selectedId!, { href: e.target.value })}
                    placeholder="/pagina ou https://..."
                  />
                </div>
              )}

              {(selected.type === 'container' || selected.type === 'text') && (
                <div>
                  <label className="text-xs font-bold uppercase text-gray-500 block mb-1">Imagem de Fundo — URL</label>
                  <input
                    className={inputCls}
                    placeholder="https://..."
                    value={(selected.style?.backgroundImage ?? '').replace(/^url\(['"]?/, '').replace(/['"]?\)$/, '')}
                    onChange={(e) => updateStyle(selectedId!, { backgroundImage: e.target.value ? `url('${e.target.value}')` : '' })}
                  />
                  <label className="text-xs font-bold uppercase text-gray-500 block mb-1 mt-3">Imagem de Fundo — Upload</label>
                  <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                  <button
                    onClick={() => fileRef.current?.click()}
                    className="w-full text-xs bg-gray-100 hover:bg-gray-200 py-2 rounded border border-gray-300"
                  >
                    Upload de Imagem
                  </button>
                </div>
              )}

              <button
                onClick={() => selectElement(null)}
                className="w-full border border-gray-300 hover:bg-gray-100 py-2 rounded text-sm font-bold"
              >
                Fechar Seleção
              </button>
            </div>
          ) : (
            <div className="text-center text-gray-400 mt-8">
              <Settings size={40} className="mx-auto mb-3 opacity-30" />
              <p className="text-sm">Clique em qualquer elemento da página para editá-lo.</p>
            </div>
          )}
        </div>

        {/* Logout */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <button
            onClick={logout}
            className="w-full flex items-center justify-center gap-2 text-xs text-red-600 hover:text-red-700 font-bold py-2 rounded hover:bg-red-50"
          >
            <LogOut size={14} /> Sair do Editor
          </button>
        </div>
      </div>
    </>
  );
}
