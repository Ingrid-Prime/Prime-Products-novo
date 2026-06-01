import { useState, useRef } from 'react';
import { X, FileText, PlusCircle, Trash2, Save } from 'lucide-react';
import { useCMS } from '../contexts/CMSContext';
import type { Article } from '../types';

interface Props {
  onClose: () => void;
}

const newArticleTemplate = (): Article => ({
  id: `post-${Date.now()}`,
  title: '',
  category: 'Geral',
  date: new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }),
  summary: '',
  content: '<p>Escreva seu conteúdo aqui...</p>',
  image: '/images/sol-medicao-02.png',
});

export function ArticleManager({ onClose }: Props) {
  const { articles, addArticle, updateArticle, deleteArticle } = useCMS();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [form, setForm] = useState<Article>(newArticleTemplate());
  const fileRef = useRef<HTMLInputElement>(null);

  const selectArticle = (article: Article) => {
    setForm(article);
    setSelectedId(article.id);
    setIsNew(false);
  };

  const startNew = () => {
    setForm(newArticleTemplate());
    setSelectedId(null);
    setIsNew(true);
  };

  const handleSave = async () => {
    if (!form.title) { alert('O título é obrigatório'); return; }
    try {
      if (isNew) {
        await addArticle(form);
        setIsNew(false);
      } else if (selectedId) {
        await updateArticle(selectedId, form);
        setSelectedId(null);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 200 * 1024) {
      alert('Atenção: Imagem muito grande. Use imagens menores ou links externos para melhor performance.');
    }
    const reader = new FileReader();
    reader.onloadend = () => setForm((f) => ({ ...f, image: reader.result as string }));
    reader.readAsDataURL(file);
  };

  const isEditing = isNew || selectedId !== null;
  const inputCls = 'w-full bg-white text-gray-900 border border-gray-300 rounded p-2 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none placeholder-gray-400';

  return (
    <div className="fixed inset-0 z-[10000] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-4xl h-[90vh] rounded-lg shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-secondary text-white p-4 flex justify-between items-center shrink-0">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <FileText size={20} /> Gerenciador de Artigos
          </h2>
          <button onClick={onClose} className="hover:bg-white/10 p-2 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Article list */}
          <div className={`w-1/3 border-r border-gray-200 bg-gray-50 flex flex-col ${isEditing ? 'hidden md:flex' : 'flex'}`}>
            <div className="p-4 border-b border-gray-200">
              <button
                onClick={startNew}
                className="w-full bg-primary hover:bg-primary-hover text-white py-2 px-4 rounded font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <PlusCircle size={18} /> Novo Artigo
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-2 space-y-2">
              {articles.map((art) => (
                <div
                  key={art.id}
                  onClick={() => selectArticle(art)}
                  className={`p-3 rounded cursor-pointer border transition-all ${selectedId === art.id ? 'bg-white border-primary shadow-md' : 'bg-white border-gray-200 hover:border-gray-400'}`}
                >
                  <div className="text-xs text-gray-400 font-bold mb-1">{art.date}</div>
                  <h4 className="font-bold text-secondary text-sm line-clamp-2">{art.title}</h4>
                  <span className="text-[10px] uppercase bg-gray-100 px-2 py-0.5 rounded text-gray-500 mt-2 inline-block">{art.category}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Editor panel */}
          <div className={`flex-1 flex-col bg-white ${isEditing ? 'flex' : 'hidden md:flex'}`}>
            {isEditing ? (
              <div className="flex-1 flex flex-col overflow-hidden">
                <div className="p-6 flex-1 overflow-y-auto space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <label className="text-xs font-bold uppercase text-gray-500 block mb-1">Título *</label>
                      <input
                        className={inputCls}
                        value={form.title}
                        onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                        placeholder="Título do artigo"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase text-gray-500 block mb-1">Categoria</label>
                      <input
                        className={inputCls}
                        value={form.category}
                        onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase text-gray-500 block mb-1">Data</label>
                      <input
                        className={inputCls}
                        value={form.date}
                        onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="text-xs font-bold uppercase text-gray-500 block mb-1">Resumo</label>
                      <textarea
                        className={`${inputCls} resize-none`}
                        rows={2}
                        value={form.summary}
                        onChange={(e) => setForm((f) => ({ ...f, summary: e.target.value }))}
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="text-xs font-bold uppercase text-gray-500 block mb-1">Imagem (URL ou upload)</label>
                      <input
                        className={`${inputCls} mb-2`}
                        value={form.image}
                        onChange={(e) => setForm((f) => ({ ...f, image: e.target.value }))}
                        placeholder="https://..."
                      />
                      <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                      <button
                        onClick={() => fileRef.current?.click()}
                        className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded border border-gray-300"
                      >
                        Fazer upload de imagem
                      </button>
                      {form.image && (
                        <img src={form.image} alt="preview" className="mt-2 h-24 object-cover rounded border" />
                      )}
                    </div>
                    <div className="col-span-2">
                      <label className="text-xs font-bold uppercase text-gray-500 block mb-1">Conteúdo (HTML)</label>
                      <textarea
                        className={`${inputCls} font-mono text-xs resize-none`}
                        rows={10}
                        value={form.content}
                        onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))}
                      />
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t border-gray-200 flex gap-3 bg-gray-50 shrink-0">
                  <button
                    onClick={() => { setSelectedId(null); setIsNew(false); }}
                    className="flex-1 border border-gray-300 hover:bg-gray-100 py-2 rounded font-bold text-sm"
                  >
                    Cancelar
                  </button>
                  {selectedId && (
                    <button
                      onClick={() => { deleteArticle(selectedId); setSelectedId(null); }}
                      className="flex items-center gap-1 border border-red-300 text-red-600 hover:bg-red-50 px-4 py-2 rounded font-bold text-sm"
                    >
                      <Trash2 size={14} /> Excluir
                    </button>
                  )}
                  <button
                    onClick={handleSave}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded font-bold text-sm flex items-center justify-center gap-2"
                  >
                    <Save size={14} /> Salvar
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <FileText size={48} className="mx-auto mb-4 opacity-30" />
                  <p>Selecione um artigo ou crie um novo</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
