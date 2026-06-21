import { Target, Fingerprint, BadgeCheck, Lightbulb } from 'lucide-react'
import Reveal from '../components/Reveal'
import UnicornBackground from '../components/UnicornBackground'
import { pilares } from '../lib/siteData'

const icones = { Target, Fingerprint, BadgeCheck, Lightbulb }

export default function Pilares() {
  return (
    <section className="relative overflow-hidden py-24 text-cream sm:py-32">
      {/* Fundo animado UnicornStudio (efeito do cliente) */}
      <UnicornBackground projectId="N9XzvQXu7fA5SY2ewADJ" dim={0.3} />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-widest2 text-wood-300">
              Por que a MCB
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              Quatro pilares em cada projeto
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pilares.map((p, i) => {
            const Icone = icones[p.icone]
            return (
              <Reveal key={p.titulo} delay={i * 0.1}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:border-wood-500/40">
                  {/* Glow que acende no hover */}
                  <div className="glow-wood pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-wood-500/15 text-wood-300 transition-colors duration-500 group-hover:bg-wood-500 group-hover:text-white">
                      {Icone && <Icone size={22} />}
                    </div>
                    <h3 className="font-display text-xl text-cream">{p.titulo}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-mcb-gray-300">
                      {p.descricao}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
