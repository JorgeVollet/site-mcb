import { useMemo, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import { portfolio } from '../lib/siteData'

const filtros = [
  { id: 'todos', label: 'Todos' },
  { id: 'cozinha', label: 'Cozinha' },
  { id: 'dormitorio', label: 'Dormitório' },
  { id: 'closet', label: 'Closet' },
  { id: 'sala', label: 'Sala de Estar' },
  { id: 'banheiro', label: 'Banheiros' },
  { id: 'corporativo', label: 'Corporativo' },
  { id: 'especiais', label: 'Especiais' },
]

export default function Portfolio() {
  const [filtro, setFiltro] = useState('todos')
  const [lightbox, setLightbox] = useState(null)

  const lista = useMemo(
    () =>
      filtro === 'todos'
        ? portfolio
        : portfolio.filter((p) => p.categoria === filtro),
    [filtro]
  )

  const fechar = useCallback(() => setLightbox(null), [])
  const anterior = useCallback(
    () => setLightbox((i) => (i === null ? i : (i - 1 + lista.length) % lista.length)),
    [lista.length]
  )
  const proximo = useCallback(
    () => setLightbox((i) => (i === null ? i : (i + 1) % lista.length)),
    [lista.length]
  )

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') fechar()
      if (e.key === 'ArrowLeft') anterior()
      if (e.key === 'ArrowRight') proximo()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox, fechar, anterior, proximo])

  return (
    <section id="portfolio" className="relative bg-mcb-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center">
          <Reveal>
            <span className="eyebrow">Nossos trabalhos</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Projetos que viraram realidade
            </h2>
          </Reveal>
        </div>

        {/* Filtros */}
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {filtros.map((f) => (
              <button
                key={f.id}
                onClick={() => setFiltro(f.id)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  filtro === f.id
                    ? 'bg-ink text-cream shadow-glow'
                    : 'border border-mcb-gray-200 bg-white text-mcb-gray-600 hover:border-wood-500/50 hover:text-ink'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Galeria de cards */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {lista.map((p, i) => (
              <motion.button
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
                onClick={() => setLightbox(i)}
                className="glow-border group relative h-[460px] overflow-hidden rounded-xl bg-neutral-900 text-left"
              >
                <img
                  src={p.img}
                  alt={p.titulo}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full rounded-xl object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-xl bg-[linear-gradient(to_top,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.35)_12%,transparent_22%)]" />

                {/* badge categoria (canto superior) */}
                <div className="absolute right-4 top-4 rounded border border-white/10 bg-black/30 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-neutral-200 backdrop-blur-sm">
                  {p.categoriaLabel}
                </div>

                {/* rodapé do card */}
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 transition-transform duration-300 group-hover:translate-y-0">
                  <div className="flex items-end justify-between border-t border-white/10 pt-4">
                    <div>
                      <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-wood-400">
                        Projeto
                      </span>
                      <h3 className="font-display text-xl leading-tight text-white">
                        {p.titulo}
                      </h3>
                    </div>
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-wood-500 hover:text-white">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && lista[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-md"
            onClick={fechar}
          >
            <button
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-cream transition-colors hover:bg-white/20"
              onClick={fechar}
              aria-label="Fechar"
            >
              <X size={22} />
            </button>

            <button
              className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-cream transition-colors hover:bg-white/20 sm:left-8"
              onClick={(e) => {
                e.stopPropagation()
                anterior()
              }}
              aria-label="Anterior"
            >
              <ChevronLeft size={26} />
            </button>
            <button
              className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-cream transition-colors hover:bg-white/20 sm:right-8"
              onClick={(e) => {
                e.stopPropagation()
                proximo()
              }}
              aria-label="Próximo"
            >
              <ChevronRight size={26} />
            </button>

            <motion.figure
              key={lista[lightbox].id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="max-h-[85vh] max-w-4xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lista[lightbox].img}
                alt={lista[lightbox].titulo}
                className="max-h-[78vh] w-full object-contain"
              />
              <figcaption className="bg-ink/60 px-6 py-4 text-center">
                <span className="text-xs uppercase tracking-widest text-wood-300">
                  {lista[lightbox].categoriaLabel}
                </span>
                <p className="font-display text-lg text-cream">
                  {lista[lightbox].titulo}
                </p>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
