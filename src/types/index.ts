export interface NavSubItem {
  label: string;
  path: string;
}

export interface NavItem {
  label: string;
  path: string;
  subItems?: NavSubItem[];
}

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  image: string;
  content: string;
  author?: string;
  tags?: string[];
}

export interface ElementData {
  id: string;
  type: 'text' | 'image' | 'button' | 'link' | 'icon' | 'container';
  content?: string;
  href?: string;
  style?: Record<string, string>;
}

export interface ElementsMap {
  [id: string]: ElementData;
}

export interface CMSContextValue {
  isEditing: boolean;
  toggleEditing: () => void;
  isAuthenticated: boolean;
  user: unknown;
  login: (password: string) => Promise<boolean>;
  logout: () => void;
  data: ElementsMap;
  updateElement: (id: string, data: Partial<ElementData>) => void;
  updateStyle: (id: string, style: Record<string, string>) => void;
  selectedId: string | null;
  selectElement: (id: string | null) => void;
  articles: Article[];
  addArticle: (article: Article) => Promise<void>;
  updateArticle: (id: string, data: Partial<Article>) => Promise<void>;
  deleteArticle: (id: string) => Promise<void>;
  saveLocal: () => void;
  publish: () => Promise<void>;
  reset: () => void;
  isPublishing: boolean;
  navItems: NavItem[];
  updateNavItems: (items: NavItem[]) => void;
}
