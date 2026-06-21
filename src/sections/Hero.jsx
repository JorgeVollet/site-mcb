import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react'
import MagneticButton from '../components/MagneticButton'
import CountUp from '../components/CountUp'
import { estatisticas } from '../lib/siteData'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const yTexto = useTransform(scrollYProgress, [0, 1], ['0%', '-12%'])
  const yFoto = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section
      id="topo"
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#1a1410]"
    >
      {/* Fundo: foto real de cozinha planejada MCB com leve zoom + parallax */}
      <motion.div
        style={{ y: yFoto }}
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/fotos/cozinha-ilha-clara.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Overlays marrom MCB — identidade + legibilidade */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-ink/50 via-wood-900/40 to-ink/85" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-wood-900/20 mix-blend-multiply" />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ background: 'radial-gradient(ellipse at center, transparent 35%, rgba(20,16,12,0.55) 100%)' }}
      />

      {/* Conteúdo central */}
      <motion.div
        style={{ y: yTexto, opacity }}
        className="relative z-10 mx-auto max-w-4xl px-5 pt-24 text-center sm:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-wood-300/30 bg-black/20 px-5 py-2 backdrop-blur-md"
        >
          <Sparkles size={14} className="text-wood-300" />
          <span className="text-xs font-medium uppercase tracking-widest2 text-wood-100">
            Marcenaria sob medida · desde 1998
          </span>
        </motion.div>

        <h1 className="font-display text-5xl leading-[1.04] text-cream drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-6xl lg:text-7xl">
          <RevealWord delay={0.15}>Perfeição na</RevealWord>
          <RevealWord delay={0.28}>
            <span className="text-wood-300">medida</span> do seu sonho
          </RevealWord>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-cream/90 drop-shadow-[0_1px_10px_rgba(0,0,0,0.6)]"
        >
          Móveis planejados e sob medida, feitos de forma artesanal nos mínimos
          detalhes — do clássico ao mais moderno.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.64 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            href="#contato"
            className="btn-primary bg-wood-500 text-white"
          >
            Solicitar orçamento
            <ArrowRight size={16} />
          </MagneticButton>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 bg-black/10 px-8 py-4 text-sm font-medium uppercase tracking-widest text-cream backdrop-blur-sm transition-all duration-300 hover:border-cream hover:bg-cream hover:text-ink"
          >
            Ver projetos
          </a>
        </motion.div>

        {/* Estatísticas com count-up em destaque — sempre na mesma linha (4 colunas) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-4 items-start gap-x-5 sm:gap-x-14 lg:-ml-[90px] lg:gap-x-20"
        >
          {estatisticas.map((s, i) => (
            <div key={s.label} className="relative px-1 text-center">
              {i > 0 && (
                <span className="absolute -left-2.5 top-1 hidden h-14 w-px bg-gradient-to-b from-transparent via-wood-300/40 to-transparent sm:left-[-1.75rem] sm:block lg:left-[-2.5rem]" />
              )}
              <div
                className={`font-display leading-none text-wood-300 drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] ${
                  s.texto
                    ? 'text-2xl sm:text-4xl lg:text-5xl'
                    : 'text-3xl sm:text-5xl lg:text-6xl'
                }`}
              >
                {s.texto ? (
                  s.texto
                ) : (
                  <CountUp
                    to={s.numero}
                    prefixo={s.prefixo || ''}
                    sufixo={s.sufixo || ''}
                    duration={2800}
                  />
                )}
              </div>
              <div className="mt-2.5 text-[9px] font-medium uppercase leading-tight tracking-widest text-cream/75 sm:text-[11px]">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="text-cream/60"
        >
          <ChevronDown size={26} />
        </motion.div>
      </motion.div>
    </section>
  )
}

function RevealWord({ children, delay }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  )
}
