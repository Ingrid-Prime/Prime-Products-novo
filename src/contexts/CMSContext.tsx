import React, { createContext, useContext, useState, useEffect } from 'react';
import type { CMSContextValue, ElementData, ElementsMap, Article, NavItem } from '../types';
import { defaultArticles } from '../data/defaultArticles';
import { defaultNavItems } from '../data/navItems';

// ─── Configuração ─────────────────────────────────────────────────────────────
const ADMIN_PASSWORD = 'prime@2025';
const SESSION_KEY    = 'prime_admin_auth';
const CMS_API        = '/api/cms.php';
const CMS_API_KEY    = 'prime_cms_K9mX3vN7pQ';

// ─── PHP API ──────────────────────────────────────────────────────────────────
interface CMSContent { elements: ElementsMap; articles: Article[]; navItems: NavItem[] }

async function apiSave(content: CMSContent): Promise<void> {
  const res = await fetch(CMS_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Key': CMS_API_KEY,
    },
    body: JSON.stringify(content),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({})) as { error?: string };
    throw new Error(err.error ?? `HTTP ${res.status}`);
  }
}

// ─── Context ──────────────────────────────────────────────────────────────────
const CMSCtx = createContext<CMSContextValue | undefined>(undefined);

export function CMSProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => sessionStorage.getItem(SESSION_KEY) === '1',
  );
  const [isEditing,    setIsEditing]    = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [selectedId,   setSelectedId]   = useState<string | null>(null);

  const [data, setData] = useState<ElementsMap>({});
  const [articles, setArticles] = useState<Article[]>(defaultArticles);
  const [navItems, setNavItems] = useState<NavItem[]>(defaultNavItems);

  // ── Carrega conteúdo salvo na hospedagem na inicialização ────────────────
  useEffect(() => {
    fetch(`${CMS_API}?t=${Date.now()}`, { cache: 'no-store' })
      .then((r) => r.ok ? r.json() as Promise<CMSContent> : Promise.reject())
      .then((saved) => {
        if (Object.keys(saved.elements ?? {}).length > 0) setData(saved.elements);
        if ((saved.articles ?? []).length > 0) setArticles(saved.articles);
        if ((saved.navItems ?? []).length > 0) setNavItems(saved.navItems);
      })
      .catch(() => {
        // Fallback: tenta o arquivo estático legado
        fetch(`/cms-content.json?t=${Date.now()}`, { cache: 'no-store' })
          .then((r) => r.ok ? r.json() as Promise<CMSContent> : Promise.reject())
          .then((saved) => {
            if (Object.keys(saved.elements ?? {}).length > 0) setData(saved.elements);
            if ((saved.articles ?? []).length > 0) setArticles(saved.articles);
            if ((saved.navItems ?? []).length > 0) setNavItems(saved.navItems);
          })
          .catch(() => {/* usa defaults */});
      });
  }, []);

  // ─── Auth ─────────────────────────────────────────────────────────────────
  const login = async (password: string): Promise<boolean> => {
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, '1');
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setIsAuthenticated(false);
    setIsEditing(false);
    setSelectedId(null);
  };

  // ─── Edição ───────────────────────────────────────────────────────────────
  const toggleEditing = () => setIsEditing((v) => !v);

  const updateElement = (id: string, elementData: Partial<ElementData>) =>
    setData((prev) => ({
      ...prev,
      [id]: { ...prev[id], ...elementData, id, type: elementData.type ?? prev[id]?.type ?? 'text' },
    }));

  const updateStyle = (id: string, style: Record<string, string>) =>
    setData((prev) => ({
      ...prev,
      [id]: { ...prev[id], id, style: { ...(prev[id]?.style ?? {}), ...style } },
    }));

  const selectElement = (id: string | null) => { if (isEditing) setSelectedId(id); };

  // ─── Artigos ──────────────────────────────────────────────────────────────
  const addArticle = async (article: Article) => {
    setArticles((prev) => [article, ...prev]);
  };

  const updateArticle = async (id: string, articleData: Partial<Article>) => {
    setArticles((prev) => prev.map((a) => (a.id === id ? { ...a, ...articleData } : a)));
  };

  const deleteArticle = async (id: string) => {
    if (!confirm('Excluir este artigo?')) return;
    setArticles((prev) => prev.filter((a) => a.id !== id));
  };

  // ─── Publicar ─────────────────────────────────────────────────────────────
  const saveLocal = () => {/* no-op */};

  const publish = async () => {
    setIsPublishing(true);
    try {
      const content: CMSContent = { elements: data, articles, navItems };
      await apiSave(content);
    } finally {
      setIsPublishing(false);
    }
  };

  const reset = () => {
    if (confirm('Descartar todas as edições não publicadas?')) window.location.reload();
  };

  const updateNavItems = (items: NavItem[]) => setNavItems(items);

  return (
    <CMSCtx.Provider value={{
      isEditing, toggleEditing,
      isAuthenticated, user: isAuthenticated ? { uid: 'admin' } : null,
      login, logout,
      data, updateElement, updateStyle,
      selectedId, selectElement,
      articles, addArticle, updateArticle, deleteArticle,
      saveLocal, publish, reset, isPublishing,
      navItems, updateNavItems,
    }}>
      {children}
    </CMSCtx.Provider>
  );
}

export function useCMS(): CMSContextValue {
  const ctx = useContext(CMSCtx);
  if (!ctx) throw new Error('useCMS must be used within a CMSProvider');
  return ctx;
}
