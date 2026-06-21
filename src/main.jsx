import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import AmbientesPage from './pages/AmbientesPage.jsx'
import AmbientePage from './pages/AmbientePage.jsx'
import ProjetoPage from './pages/ProjetoPage.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ambientes" element={<AmbientesPage />} />
        <Route path="/ambientes/:ambiente" element={<AmbientePage />} />
        <Route path="/ambientes/:ambiente/:projeto" element={<ProjetoPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
