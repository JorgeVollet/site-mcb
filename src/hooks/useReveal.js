import { useEffect, useRef, useState } from 'react'

// Hook leve de scroll reveal via IntersectionObserver.
// Retorna [ref, visivel]. Use para revelar elementos ao entrar na viewport.
export function useReveal(options = {}) {
  const ref = useRef(null)
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisivel(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, visivel]
}
