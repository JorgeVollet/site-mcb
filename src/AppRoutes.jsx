import { Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import AmbientesPage from './pages/AmbientesPage.jsx'
import AmbientePage from './pages/AmbientePage.jsx'
import ProjetoPage from './pages/ProjetoPage.jsx'
import SobrePage from './pages/SobrePage.jsx'
import ComoFuncionaPage from './pages/ComoFuncionaPage.jsx'
import FaqPage from './pages/FaqPage.jsx'
import ContatoPage from './pages/ContatoPage.jsx'
import RegiaoPage from './pages/RegiaoPage.jsx'
import CidadePage from './pages/CidadePage.jsx'
import ArquitetosPage from './pages/ArquitetosPage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import BlogPostPage from './pages/BlogPostPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import SeoHead from './components/SeoHead.jsx'
import AvisoAgenda from './components/AvisoAgenda.jsx'
import { paginasCidade } from './lib/cidades'

// Rotas do site. Usado no navegador (main.jsx) e no build das páginas
// prontas em HTML (entry-server.jsx).
export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <SeoHead />
      <AvisoAgenda />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ambientes" element={<AmbientesPage />} />
        <Route path="/ambientes/:ambiente" element={<AmbientePage />} />
        <Route path="/ambientes/:ambiente/:projeto" element={<ProjetoPage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/como-funciona" element={<ComoFuncionaPage />} />
        <Route path="/perguntas-frequentes" element={<FaqPage />} />
        <Route path="/contato" element={<ContatoPage />} />
        <Route path="/regiao-atendida" element={<RegiaoPage />} />
        <Route path="/para-arquitetos" element={<ArquitetosPage />} />
        {paginasCidade.map((c) => (
          <Route key={c.slug} path={`/${c.slug}`} element={<CidadePage slug={c.slug} />} />
        ))}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}
