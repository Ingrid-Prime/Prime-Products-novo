import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Menu, X, ChevronDown, MapPin, Phone, Mail, ChevronRight,
  Edit, Lock,
} from 'lucide-react';
import { useCMS } from '../contexts/CMSContext';
import { CMSEditor } from './CMSEditor';
import { EditableElement } from './EditableElement';

export function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();
  const { isAuthenticated, isEditing, toggleEditing, navItems } = useCMS();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen font-sans text-secondary">
      <CMSEditor />

      {/* Topbar */}
      <div className="bg-primary text-white text-xs font-medium py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-8">
            <span className="flex items-center gap-2 cursor-default">
              <MapPin size={14} className="text-white fill-current" />
              <EditableElement id="layout_topbar_city" defaultContent="Belo Horizonte – MG" />
            </span>
            <span className="flex items-center gap-2 cursor-default">
              <Mail size={14} className="text-white fill-current" />
              <EditableElement id="layout_topbar_email" defaultContent="info@primeproducts.ind.br" />
            </span>
          </div>
          <div className="flex items-center">
            <span className="flex items-center gap-2 font-bold cursor-default">
              <Phone size={14} className="text-white fill-current" />
              <EditableElement id="layout_topbar_phone" defaultContent="(31) 9 8670-8742" />
            </span>
            {isAuthenticated && (
              <button
                onClick={toggleEditing}
                className="ml-4 flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded hover:bg-white/30 transition-colors"
              >
                <Edit size={12} /> {isEditing ? 'Sair da Edição' : 'Editar Site'}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4 border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            {/* Logo */}
            <Link to="/" className="flex items-center group shrink-0 h-full">
              <div className="h-10 md:h-12 w-auto">
                <EditableElement
                  id="layout_logo_img"
                  type="image"
                  defaultContent="https://placehold.co/200x60/transparent/1564C0?text=LOGO+AQUI"
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden xl:flex space-x-1 items-center">
              {navItems.map((item, i) => (
                <div key={item.path} className="relative group px-3 py-2">
                  {item.subItems ? (
                    <>
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `flex items-center text-xs font-bold uppercase tracking-widest transition-colors whitespace-nowrap gap-1 ${
                            isActive ? 'text-primary' : 'text-gray-600 hover:text-primary'
                          }`
                        }
                      >
                        <EditableElement id={`nav_item_${i}`} defaultContent={item.label} />
                        <ChevronDown size={12} />
                      </NavLink>
                      <div className="absolute left-0 top-full pt-2 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200 w-56">
                        <div className="bg-white shadow-xl rounded-sm border-t-4 border-primary p-2 flex flex-col gap-1">
                          {item.subItems.map((sub, j) => (
                            <NavLink
                              key={j}
                              to={sub.path}
                              className={({ isActive }) =>
                                `block px-4 py-3 text-sm font-bold text-gray-600 hover:text-white hover:bg-primary rounded-sm transition-colors ${
                                  isActive && sub.path === location.pathname ? 'bg-gray-100 text-primary' : ''
                                }`
                              }
                            >
                              {sub.label}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors whitespace-nowrap ${
                          isActive ? 'text-primary' : 'text-gray-600'
                        }`
                      }
                    >
                      <EditableElement id={`nav_item_${i}`} defaultContent={item.label} />
                    </NavLink>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA + mobile toggle */}
            <div className="hidden xl:block shrink-0 ml-4">
              <EditableElement
                id="layout_nav_cta"
                type="button"
                defaultContent="FALE CONOSCO"
                defaultHref="/contato"
                as={Link}
                to="/contato"
                className="bg-primary hover:bg-primary-hover text-white px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-sm inline-block rounded-sm whitespace-nowrap"
              />
            </div>
            <button
              className="xl:hidden text-secondary hover:text-primary transition-colors p-2"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100 absolute w-full shadow-2xl z-50 animate-fade-in-up">
            <div className="px-4 pt-4 pb-6 space-y-2 h-[80vh] overflow-y-auto">
              {navItems.map((item, i) => (
                <div key={item.path}>
                  {item.subItems ? (
                    <div>
                      <div className="flex items-center">
                        <NavLink
                          to={item.path}
                          className={({ isActive }) =>
                            `flex-grow px-4 py-3 text-sm font-bold uppercase tracking-wide rounded-sm transition-colors ${
                              isActive ? 'text-primary bg-primary/5' : 'text-secondary hover:bg-gray-50'
                            }`
                          }
                          onClick={() => setMobileOpen(false)}
                        >
                          <EditableElement id={`nav_item_${i}_mobile`} defaultContent={item.label} />
                        </NavLink>
                        <button
                          onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                          className={`px-4 py-3 text-secondary transition-colors ${mobileExpanded === item.label ? 'text-primary' : ''}`}
                        >
                          <ChevronDown size={20} className={`transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                      {mobileExpanded === item.label && (
                        <div className="pl-6 space-y-1 mt-1 border-l-2 border-primary/20 ml-4">
                          {item.subItems.map((sub, j) => (
                            <NavLink
                              key={j}
                              to={sub.path}
                              onClick={() => setMobileOpen(false)}
                              className={({ isActive }) =>
                                `block px-4 py-3 text-sm font-medium text-gray-600 hover:text-primary ${
                                  isActive && sub.path === location.pathname ? 'text-primary' : ''
                                }`
                              }
                            >
                              {sub.label}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `block px-4 py-3 text-sm font-bold uppercase tracking-wide rounded-sm transition-colors ${
                          isActive ? 'text-primary bg-primary/5' : 'text-secondary hover:bg-gray-50'
                        }`
                      }
                      onClick={() => setMobileOpen(false)}
                    >
                      <EditableElement id={`nav_item_${i}_mobile`} defaultContent={item.label} />
                    </NavLink>
                  )}
                </div>
              ))}
              <div className="pt-4 mt-4 border-t border-gray-100">
                <Link
                  to="/contato"
                  className="block w-full text-center bg-primary text-white py-3 rounded-sm font-bold uppercase"
                  onClick={() => setMobileOpen(false)}
                >
                  FALE CONOSCO
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">{children}</main>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/5531986708742"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-whatsapp hover:bg-whatsapp-hover text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 group flex items-center gap-2 overflow-hidden"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" className="animate-pulse-slow fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold">
          WhatsApp
        </span>
      </a>

      {/* Footer */}
      <footer className="bg-secondary text-gray-400 border-t-4 border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand */}
            <div>
              <div className="mb-6 h-14">
                <EditableElement
                  id="footer_logo_img"
                  type="image"
                  defaultContent="https://placehold.co/200x60/transparent/white?text=LOGO+BRANCA"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="mb-8 border-l-2 border-gray-700 pl-4 text-sm leading-relaxed">
                <EditableElement
                  id="footer_desc"
                  defaultContent="Soluções técnicas voltadas à instrumentação, gases e engenharia aplicada com foco em segurança e confiabilidade."
                />
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-white font-bold uppercase tracking-wider mb-8 text-sm border-b border-gray-800 pb-2 inline-block">
                Navegação
              </h3>
              <ul className="space-y-3">
                {navItems.map((item, i) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-sm hover:text-white hover:translate-x-2 transition-all flex items-center group"
                    >
                      <ChevronRight size={14} className="mr-2 text-primary group-hover:text-white transition-colors" />
                      <EditableElement id={`footer_nav_${i}`} defaultContent={item.label} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-bold uppercase tracking-wider mb-8 text-sm border-b border-gray-800 pb-2 inline-block">
                Contato
              </h3>
              <ul className="space-y-5 text-sm">
                <li className="flex items-start group">
                  <div className="p-2 bg-primary/10 rounded mr-3 group-hover:bg-primary group-hover:text-white transition-colors">
                    <MapPin size={18} className="text-primary group-hover:text-white" />
                  </div>
                  <span>
                    <EditableElement id="footer_address_1" defaultContent="Belo Horizonte – MG" />
                    <br />
                    <span className="text-xs text-gray-500 uppercase font-bold">
                      <EditableElement id="footer_address_2" defaultContent="Atendimento Nacional" />
                    </span>
                  </span>
                </li>
                <li className="flex items-center group">
                  <div className="p-2 bg-primary/10 rounded mr-3 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone size={18} className="text-primary group-hover:text-white" />
                  </div>
                  <span><EditableElement id="footer_phone_1" defaultContent="(31) 9 8670-8742" /></span>
                </li>
<li className="flex items-center group">
                  <div className="p-2 bg-primary/10 rounded mr-3 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail size={18} className="text-primary group-hover:text-white" />
                  </div>
                  <span><EditableElement id="footer_email" defaultContent="info@primeproducts.ind.br" /></span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-white font-bold uppercase tracking-wider mb-8 text-sm border-b border-gray-800 pb-2 inline-block">
                Newsletter
              </h3>
              <p className="text-sm mb-6">Receba artigos técnicos e novidades do setor.</p>
              <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Seu e-mail profissional"
                  className="bg-secondary-dark border border-gray-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-primary rounded-sm transition-colors"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-hover text-white px-4 py-3 text-sm font-bold uppercase rounded-sm transition-all hover:shadow-lg"
                >
                  Inscrever-se
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="bg-secondary-dark py-6 text-center text-xs text-gray-600 border-t border-gray-800 flex justify-center items-center gap-4">
          <p>© 2026 Prime Products — Excelência em Engenharia.</p>
          <Link
            to="/login"
            className="flex items-center gap-1 text-gray-600 hover:text-primary transition-colors"
          >
            <Lock size={10} />
            <span>Admin</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
