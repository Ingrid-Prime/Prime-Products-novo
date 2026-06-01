import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Tag, Phone, Mail } from 'lucide-react';
import { AnimateOnScroll } from '../../components/AnimateOnScroll';
import { SectionContainer } from '../../components/SectionContainer';
import { useCMS } from '../../contexts/CMSContext';

export function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const { articles } = useCMS();

  const article = articles.find((a) => a.id === id);
  const related = articles.filter((a) => a.id !== id).slice(0, 3);

  if (!article) {
    return (
      <SectionContainer className="text-center py-32">
        <h1 className="text-2xl font-bold text-secondary mb-4">Artigo não encontrado</h1>
        <Link to="/conteudo" className="text-primary font-bold hover:underline inline-flex items-center gap-2">
          <ArrowLeft size={16} /> Voltar para Conteúdo
        </Link>
      </SectionContainer>
    );
  }

  return (
    <>
      <section
        className="relative min-h-[50vh] flex items-end bg-secondary overflow-hidden pb-16 pt-32"
        style={{ backgroundImage: `url('${article.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1 bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1">
              <Tag size={11} /> {article.category}
            </span>
            <span className="flex items-center gap-1 text-white/70 text-xs">
              <Calendar size={11} /> {article.date}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-4xl">
            {article.title}
          </h1>
        </div>
      </section>

      <section className="bg-surface py-16">
        <SectionContainer className="py-0">
          <div className="mb-8">
            <Link to="/conteudo" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline">
              <ArrowLeft size={16} /> Voltar para Conteúdo
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-8 shadow-md">
                <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light border-l-4 border-primary pl-4 italic">
                  {article.summary}
                </p>
                {article.content ? (
                  <div
                    className="prose prose-sm max-w-none text-gray-600 prose-headings:text-secondary prose-a:text-primary"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
                ) : (
                  <p className="text-gray-400 italic">Conteúdo completo em breve.</p>
                )}
              </div>

              {related.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-secondary mb-6">Artigos Relacionados</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {related.map(({ id: rid, title, category, image }) => (
                      <Link key={rid} to={`/artigo/${rid}`} className="group bg-white shadow-md hover:shadow-lg transition-all block overflow-hidden">
                        <div className="h-32 overflow-hidden">
                          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                        </div>
                        <div className="p-4">
                          <span className="text-xs font-bold text-primary uppercase">{category}</span>
                          <h4 className="text-sm font-bold text-secondary mt-1 leading-tight group-hover:text-primary transition-colors">{title}</h4>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <AnimateOnScroll>
                <img src={article.image} alt={article.title} className="w-full rounded-sm shadow-lg" referrerPolicy="no-referrer" />
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
              {related.length > 0 && (
                <div className="bg-white p-6 shadow-md rounded-sm">
                  <h3 className="font-bold text-secondary mb-4 text-sm uppercase tracking-wide">Mais Artigos</h3>
                  <div className="space-y-2">
                    {related.map(({ id: rid, title }) => (
                      <Link key={rid} to={`/artigo/${rid}`} className="block text-sm text-gray-600 hover:text-primary transition-colors py-1 border-b border-gray-100 last:border-0 flex items-center gap-2">
                        <ArrowRight size={12} className="text-primary shrink-0" /> {title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
