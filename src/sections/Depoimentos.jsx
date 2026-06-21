import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import Reveal from '../components/Reveal'
import { depoimentos } from '../lib/siteData'

export default function Depoimentos() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % depoimentos.length), 6000)
    return () => clearInterval(t)
  }, [])

  const d = depoimentos[i]

  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden bg-cream py-16 sm:py-24 lg:py-32"
    >
      <div className="glow-gray pointer-events-none absolute -left-20 top-1/3 h-80 w-80 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="eyebrow">Quem confia, recomenda</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-5xl">
            O que dizem nossos clientes
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative mt-10 sm:mt-14">
            <Quote
              size={64}
              className="mx-auto text-wood-500/20"
              strokeWidth={1}
            />
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mx-auto max-w-2xl"
              >
                <p className="font-display text-xl leading-relaxed text-ink sm:text-3xl">
                  "{d.texto}"
                </p>
                <div className="mt-8 flex items-center justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} size={16} className="fill-wood-500 text-wood-500" />
                  ))}
                </div>
                <footer className="mt-4">
                  <div className="font-medium text-ink">{d.nome}</div>
                  <div className="text-sm text-mcb-gray-500">{d.local}</div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>
        </Reveal>

        <div className="mt-8 flex items-center justify-center gap-2">
          {depoimentos.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Depoimento ${k + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                k === i ? 'w-8 bg-wood-500' : 'w-2 bg-mcb-gray-300 hover:bg-mcb-gray'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
