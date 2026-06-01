import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CMSProvider } from './contexts/CMSContext';
import { Layout } from './components/Layout';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';

import { SolutionsMain } from './pages/solutions/SolutionsMain';
import { InstrumentacaoMedicao } from './pages/solutions/InstrumentacaoMedicao';
import { InstrumentacaoAnalitica } from './pages/solutions/InstrumentacaoAnalitica';
import { GasesSeguranca } from './pages/solutions/GasesSeguranca';
import { Integradas } from './pages/solutions/Integradas';

import { ProductsMain } from './pages/products/ProductsMain';
import { ProductDetail } from './pages/products/ProductDetail';

import { ApplicationsMain } from './pages/applications/ApplicationsMain';
import { ApplicationDetail } from './pages/applications/ApplicationDetail';

import { ToolsMain } from './pages/tools/ToolsMain';
import { ToolsPro } from './pages/tools/ToolsPro';

import { ContentMain } from './pages/content/ContentMain';
import { ArticleDetail } from './pages/content/ArticleDetail';

export function App() {
  return (
    <BrowserRouter>
      <CMSProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/solucoes" element={<SolutionsMain />} />
            <Route path="/solucoes/instrumentacao-medicao" element={<InstrumentacaoMedicao />} />
            <Route path="/solucoes/instrumentacao-analitica" element={<InstrumentacaoAnalitica />} />
            <Route path="/solucoes/gases-seguranca-automacao" element={<GasesSeguranca />} />
            <Route path="/solucoes/integradas" element={<Integradas />} />
            <Route path="/produtos" element={<ProductsMain />} />
            <Route path="/produto/:id" element={<ProductDetail />} />
            <Route path="/aplicacoes" element={<ApplicationsMain />} />
            <Route path="/aplicacao/:id" element={<ApplicationDetail />} />
            <Route path="/ferramentas" element={<ToolsMain />} />
            <Route path="/ferramentas-pro" element={<ToolsPro />} />
            <Route path="/conteudo" element={<ContentMain />} />
            <Route path="/artigo/:id" element={<ArticleDetail />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Layout>
      </CMSProvider>
    </BrowserRouter>
  );
}
