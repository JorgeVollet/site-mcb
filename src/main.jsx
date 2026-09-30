import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes.jsx'
import './index.css'
import { iniciarAnalytics } from './lib/analytics.js'
import { prepararRota } from './lib/blog.js'

iniciarAnalytics()

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
)

// No site publicado cada página já vem pronta em HTML (gerada no build).
// Aqui o React "assume" esse HTML. No modo dev (npm run dev) ele desenha do zero.
async function iniciar() {
  const root = document.getElementById('root')
  await prepararRota(window.location.pathname)
  if (root.hasChildNodes()) hydrateRoot(root, app)
  else createRoot(root).render(app)
}

iniciar()
