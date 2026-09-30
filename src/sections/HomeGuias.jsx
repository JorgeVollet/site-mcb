import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import PostCard from '../components/PostCard'
import { getPost } from '../content/blog/posts'

// Artigos em destaque do blog na home (as dúvidas mais buscadas no Google)
const destaques = ['quanto-custam-moveis-planejados', 'mdf-ou-mdp', 'roupeiro-planejado-para-quarto-pequeno']

export default function HomeGuias() {
  const lista = destaques.map(getPost).filter(Boolean)
  return (
    <section id="guias" className="relative bg-mcb-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <Reveal>
              <span className="eyebrow">Antes de planejar</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-5xl">
                Guias para decidir com segurança
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-wood-600 transition-colors hover:text-wood-700"
            >
              Ver todos os guias <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lista.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08} className="h-full">
              <PostCard post={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
