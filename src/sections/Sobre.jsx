import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal from '../components/Reveal'
import { empresa } from '../lib/siteData'

export default function Sobre() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const yImg = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section id="sobre" ref={ref} className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Imagem com parallax + moldura cinza */}
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-24 w-24 border-l border-t border-mcb-gray" />
              <div className="absolute -bottom-4 -right-4 h-24 w-24 border-b border-r border-mcb-gray" />
              <div className="relative aspect-[1423/752] w-full overflow-hidden rounded-2xl shadow-soft">
                <img
                  src="/fotos/fachada-mcb.jpg"
                  alt="Fachada da Móveis Castelo Branco em Três de Maio/RS"
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
                {/* legenda sobre a foto */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-5">
                  <p className="text-xs uppercase tracking-widest text-wood-200">
                    Nossa sede · {empresa.cidade}/{empresa.estado}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Texto */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <span className="eyebrow">Sobre a empresa</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
                Quase 30 anos fazendo parte da história
              </h2>
            </Reveal>

            <div className="mt-7 space-y-5 text-lg leading-relaxed text-mcb-gray-600">
              <Reveal delay={0.15}>
                <p>
                  A {empresa.nome} faz parte da história de {empresa.cidade},
                  cidade do interior do Rio Grande do Sul. Foi em {empresa.fundacao}{' '}
                  que nos firmamos no mercado como uma empresa consolidada — mas
                  tudo começou bem antes, quando o fundador {empresa.fundador}{' '}
                  iniciou o trabalho numa marcenaria improvisada na garagem de
                  casa.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>
                  Produzimos móveis exclusivos, sob medida, tendo como
                  matéria-prima principal o MDF. Hoje contamos com maquinário e
                  profissionais capacitados que garantem a excelência dos
                  produtos, com designers especializados para projetar peças que
                  vão deixar o seu ambiente perfeito.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.3}>
              <div className="mt-10 flex items-center gap-6">
                <div className="divider-gray max-w-[60px]" />
                <p className="font-display text-xl text-wood-600">
                  Trabalho artesanal, do clássico ao moderno.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
