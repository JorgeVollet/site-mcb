import { useEffect, useRef, useState } from 'react'

// Contador animado, fluido de 0 até `to`. Dispara quando entra na viewport
// (ou já visível). Começa em 0, segura um instante e sobe devagar.
// delay = tempo (ms) parado em 0 antes de começar a contar.
export default function CountUp({
  to = 0,
  duration = 4000,
  delay = 400,
  prefixo = '',
  sufixo = '',
  className = '',
}) {
  const ref = useRef(null)
  const [valor, setValor] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let intervalId = null
    let disparado = false

    const prefersReduced =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let timeoutId = null

    function start() {
      if (disparado) return
      disparado = true
      if (prefersReduced) {
        setValor(to)
        return
      }
      // Garante que começa visível em 0, segura `delay`, depois sobe devagar.
      setValor(0)
      timeoutId = setTimeout(() => {
        const inicio = Date.now()
        // easeInOutCubic — sobe bem suave, sem disparar no começo nem travar no fim
        const ease = (t) =>
          t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
        intervalId = setInterval(() => {
          const t = Math.min((Date.now() - inicio) / duration, 1)
          setValor(Math.round(ease(t) * to))
          if (t >= 1) {
            clearInterval(intervalId)
            intervalId = null
          }
        }, 16)
      }, delay)
    }

    const r = el.getBoundingClientRect()
    if (r.top < window.innerHeight && r.bottom > 0) {
      start()
    } else {
      const obs = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            start()
            obs.disconnect()
          }
        },
        { threshold: 0.3 }
      )
      obs.observe(el)
      return () => {
        obs.disconnect()
        if (intervalId) clearInterval(intervalId)
        if (timeoutId) clearTimeout(timeoutId)
      }
    }

    return () => {
      if (intervalId) clearInterval(intervalId)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [to, duration, delay])

  return (
    <span ref={ref} className={className}>
      {prefixo}
      {valor.toLocaleString('pt-BR')}
      {sufixo}
    </span>
  )
}
