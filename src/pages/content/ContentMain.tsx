import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { AnimateOnScroll } from '../../components/AnimateOnScroll';
import { EditableElement } from '../../components/EditableElement';
import { SectionContainer } from '../../components/SectionContainer';
import { useCMS } from '../../contexts/CMSContext';

export function ContentMain() {
  const { articles } = useCMS();

  return (
    <>
      <EditableElement
        id="content_hero_bg"
        type="container"
        as="div"
        className="fixed inset-0 -z-50 prime-bg-standard bg-secondary"
        defaultStyle={{ backgroundImage: "url('/images/conteudos/hero-conteudo.jpg')", backgroundSize: 'cover', backgroundPosition: 'center 25%' }}
      >
        {/* Overlay escuro solicitado para diferenciar da imagem repetida */}
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/40 to-transparent z-0" />
      </EditableElement>

      <section className="relative min-h-[50vh] flex items-center z-10 pt-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <AnimateOnScroll><div className="inline-block w-20 h-1 bg-primary mb-8 rounded-full" /></AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              <EditableElement id="content_hero_title" defaultContent="Conteúdo Técnico" />
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={400}>
            <div className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              <EditableElement id="content_hero_sub" defaultContent="Artigos, guias e insights técnicos da equipe Prime." />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-20 relative z-10">
        <SectionContainer className="py-0">
          {articles.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">Nenhum conteúdo publicado ainda.</p>
            </div>
          ) : (
            <>
              {/* Featured article */}
              <AnimateOnScroll>
                <Link to={`/artigo/${articles[0].id}`} className="group block mb-12 bg-white shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="h-64 lg:h-full min-h-[320px] overflow-hidden relative bg-gray-100 flex items-center justify-center">
                      {!articles[0].image ? (
                        <span className="text-gray-400">Imagem indisponível</span>
                      ) : (
                        <img
                          src={articles[0].image}
                          alt={articles[0].title}
                          className="prime-image-standard absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                          onError={(e) => { 
                            if (e.currentTarget.src !== window.location.origin + '/images/conteudos/capa-novos-2-corrigida.jpg') {
                              e.currentTarget.src = '/images/conteudos/capa-novos-2-corrigida.jpg'; 
                            } else {
                              e.currentTarget.style.display = 'none';
                            }
                          }}
                        />
                      )}
                    </div>
                    <div className="p-10 flex flex-col justify-center">
                      <span className="inline-flex items-center gap-1 text-xs font-bold uppercase text-primary tracking-wider mb-4">
                        <Tag size={12} /> {articles[0].category}
                      </span>
                      <h2 className="text-2xl font-black text-secondary mb-4 group-hover:text-primary transition-colors leading-tight">
                        {articles[0].title}
                      </h2>
                      <p className="text-gray-500 mb-6 leading-relaxed">{articles[0].summary}</p>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1 text-xs text-gray-400"><Calendar size={12} /> {articles[0].date}</span>
                        <span className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-4 transition-all">
                          Ler artigo <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>

              {/* Remaining articles grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.slice(1).map(({ id, title, category, date, summary, image }, i) => (
                  <AnimateOnScroll key={id} delay={(i % 3) * 80}>
                    <Link to={`/artigo/${id}`} className="group bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 block overflow-hidden h-full flex flex-col">
                      <div className="h-48 overflow-hidden">
                        <img src={image} alt={title} className="prime-image-standard w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-bold uppercase text-primary tracking-wider">{category}</span>
                          <span className="flex items-center gap-1 text-xs text-gray-400"><Calendar size={11} /> {date}</span>
                        </div>
                        <h3 className="font-bold text-secondary mb-3 leading-tight group-hover:text-primary transition-colors flex-1">{title}</h3>
                        <p className="text-xs text-gray-500 leading-relaxed mb-4">{summary}</p>
                        <span className="flex items-center gap-1 text-primary font-bold text-xs group-hover:gap-3 transition-all">
                          Ler artigo <ArrowRight size={12} />
                        </span>
                      </div>
                    </Link>
                  </AnimateOnScroll>
                ))}
              </div>
            </>
          )}
        </SectionContainer>
      </section>
    </>
  );
}
