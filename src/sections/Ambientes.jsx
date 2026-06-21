import {
  ChefHat,
  BedDouble,
  Shirt,
  Sofa,
  Bath,
  Building2,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { ambientes } from '../lib/siteData'

const icones = { ChefHat, BedDouble, Shirt, Sofa, Bath, Building2, Sparkles }

// mapeia o id do siteData -> slug da página de ambiente (ambientesData)
const slugMap = {
  cozinha: 'cozinha',
  dormitorio: 'dormitorio',
  closet: 'closet',
  sala: 'sala-de-estar',
  banheiro: 'banheiros',
  corporativo: 'corporativo',
  especiais: 'moveis-especiais',
}

export default function Ambientes() {
  return (
    <section id="ambientes" className="relative bg-cream py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <Reveal>
              <span className="eyebrow">O que fazemos</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-5xl">
                Cada ambiente, sob medida
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-mcb-gray-600">
              Projetamos e produzimos para todos os espaços da sua casa ou
              empresa, com acabamento que dá o toque de perfeição.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {ambientes.map((a, i) => {
            const Icone = icones[a.icone]
            return (
              <Reveal key={a.id} delay={(i % 3) * 0.08}>
                <Link
                  to={`/ambientes/${slugMap[a.id] || a.id}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-wood-500/40 bg-gradient-to-br from-wood-500/10 to-cream p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-wood-500/70 hover:shadow-card"
                >
                  <div className="glow-wood pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex items-start justify-between">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mcb-gray-100 text-wood-600 transition-all duration-500 group-hover:bg-wood-500 group-hover:text-white">
                      {Icone && <Icone size={22} />}
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="text-mcb-gray-300 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-wood-500"
                    />
                  </div>

                  <h3 className="relative mt-6 font-display text-2xl text-ink">
                    {a.nome}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-mcb-gray-600">
                    {a.descricao}
                  </p>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
