import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from '../components/Reveal'

// Chamada para arquitetos e designers (público foco da MCB além do cliente final)
export default function HomeArquitetos() {
  return (
    <section id="arquitetos" className="relative bg-cream pb-16 sm:pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative grid overflow-hidden rounded-3xl bg-mcb-gray-800 text-cream lg:grid-cols-2">
            <div className="relative p-8 sm:p-12">
              <div className="glow-wood pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full opacity-40 blur-3xl" />
              <span className="relative text-xs font-medium uppercase tracking-widest2 text-wood-300">
                Para arquitetos e designers
              </span>
              <h2 className="relative mt-4 font-display text-3xl leading-tight sm:text-4xl">
                Você desenha, a gente executa. Até os projetos mais difíceis.
              </h2>
              <p className="relative mt-4 max-w-md leading-relaxed text-mcb-gray-300">
                Você entrega o projeto detalhado, a gente executa com fidelidade: fábrica própria e montagem com
                equipe própria e especializada.
              </p>
              <Link
                to="/para-arquitetos"
                className="btn-primary relative mt-8 bg-wood-500 text-white hover:bg-wood-600"
              >
                Como executamos o seu projeto <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative min-h-[240px]">
              <img
                src="/fotos/sala-painel-tv-iluminado.jpg"
                alt="Sala com painel de TV iluminado e móveis sob medida executados pela Móveis Castelo Branco"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
