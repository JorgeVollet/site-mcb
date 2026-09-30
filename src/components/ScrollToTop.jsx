import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const BASE = 'https://www.moveiscastelobranco.com.br'

// Rola para o topo sempre que a rota muda
// e atualiza o canonical (pro Google indexar cada página de ambiente/projeto).
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', BASE + pathname)
  }, [pathname])
  return null
}
