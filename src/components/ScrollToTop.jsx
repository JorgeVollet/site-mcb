import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Rola para o topo sempre que a rota muda.
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}
