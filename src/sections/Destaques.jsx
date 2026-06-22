import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal'

const destaques = Array.from({ length: 14 }, (_, i) => ({
  src: `/destaques/destaque-${String(i + 1).padStart(2, '0')}.jpg`,
  alt: `Projeto Moveis Castelo Branco ${i + 1}`,
}))

export default function Destaques() {
  const loop = [...destaques, ...destaques]
  const trackRef = useRef(null)
  const posRef = useRef(0)
  const alvoRef = useRef(1.2)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let raf
    let velAtual = 1.2
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    function tick() {
      const metade = track.scrollWidth / 2
      velAtual += (alvoRef.current - velAtual) * 0.05
      posRef.current -= velAtual
      if (metade > 0 && Math.abs(posRef.current) >= metade) {
        posRef.current += metade
      }
      track.style.transform = `translate3d(${posRef.current}px,0,0)`
      raf = requestAnimationFrame(tick)
    }
    if (!prefersReduced) raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section id="portfolio" className="relative overflow-hidden bg-mcb-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <span className="eyebrow">Nossos trabalhos</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-5xl">
Destaques Móveis Castelo Branco
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-mcb-gray-600">
              Passe o mouse sobre a faixa para apreciar cada projeto com calma.
            </p>
          </Reveal>
        </div>
      </div>

      <div
        className="relative mt-10 w-full overflow-hidden sm:mt-14"
        onMouseEnter={() => (alvoRef.current = 0.6)}
        onMouseLeave={() => (alvoRef.current = 1.2)}
      >
        <div ref={trackRef} className="flex w-max gap-4 sm:gap-5">
          {loop.map((d, i) => (
            <div
              key={i}
              className="group relative aspect-[16/9] h-[200px] shrink-0 overflow-hidden rounded-2xl bg-neutral-900 sm:h-[380px]"
            >
              <img
                src={d.src}
                alt={d.alt}
                loading="lazy"
                className="h-full w-full rounded-2xl object-contain"
              />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-mcb-gray-50 to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-mcb-gray-50 to-transparent sm:w-24" />
      </div>

      <div className="mx-auto mt-12 max-w-7xl px-5 text-center sm:mt-14 sm:px-8">
        <Reveal>
          <Link to="/ambientes" className="btn-primary inline-flex bg-wood-500 text-white">
            Ver todos os projetos
            <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
