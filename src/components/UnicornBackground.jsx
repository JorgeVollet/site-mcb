import { useEffect, useRef } from 'react'

// Embed de um projeto UnicornStudio como background animado.
// projectId padrão = efeito criado pelo cliente (cqcLtDwfoHqqRPttBbQE).
// dim = opacidade do preto por cima (mantém o tema escuro coerente).
export default function UnicornBackground({
  projectId = 'N9XzvQXu7fA5SY2ewADJ',
  className = '',
  dim = 0.4,
  invert = false,
}) {
  const ref = useRef(null)

  useEffect(() => {
    const SRC =
      'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js'

    function init() {
      if (window.UnicornStudio && typeof window.UnicornStudio.init === 'function') {
        try {
          window.UnicornStudio.init()
          window.UnicornStudio.isInitialized = true
        } catch (e) {
          /* noop */
        }
      }
    }

    if (window.UnicornStudio && window.UnicornStudio.isInitialized) {
      setTimeout(init, 50)
      return
    }

    const existing = document.querySelector(`script[src="${SRC}"]`)
    if (existing) {
      existing.addEventListener('load', init)
      if (window.UnicornStudio) setTimeout(init, 50)
      return () => existing.removeEventListener('load', init)
    }

    window.UnicornStudio = { isInitialized: false }
    const s = document.createElement('script')
    s.src = SRC
    s.async = true
    s.onload = () => setTimeout(init, 50)
    document.body.appendChild(s)
  }, [])

  return (
    <div
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-black ${className}`}
      aria-hidden="true"
    >
      <div
        ref={ref}
        data-us-project={projectId}
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={invert ? { filter: 'invert(1) grayscale(1) brightness(1.6)' } : undefined}
      />
      <div className="pointer-events-none absolute inset-0 bg-black" style={{ opacity: dim }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
    </div>
  )
}
