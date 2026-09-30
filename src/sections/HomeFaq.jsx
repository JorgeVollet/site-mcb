import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import FaqLista from '../components/FaqLista'
import { perguntasFrequentes } from '../lib/institucional'

// As 6 primeiras perguntas também vão no JSON-LD da home (seo.js).
// O Google exige que o texto do FAQPage esteja visível na página.
export default function HomeFaq() {
  return (
    <section id="perguntas" className="relative bg-cream py-16 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div>
          <Reveal>
            <span className="eyebrow">Dúvidas comuns</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-5xl">Perguntas frequentes</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              to="/perguntas-frequentes"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-wood-600 transition-colors hover:text-wood-700"
            >
              Todas as perguntas <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
        <FaqLista faq={perguntasFrequentes().slice(0, 6)} />
      </div>
    </section>
  )
}
