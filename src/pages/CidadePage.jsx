import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Pagina from '../components/Pagina'
import Breadcrumbs from '../components/Breadcrumbs'
import FaqLista from '../components/FaqLista'
import CtaOrcamento from '../components/CtaOrcamento'
import NotFoundPage from './NotFoundPage'
import { getPaginaCidade } from '../lib/cidades'
import { ambientes } from '../lib/ambientesData'
import { conteudoDoAmbiente } from '../lib/ambientesConteudo'

export default function CidadePage({ slug }) {
  const c = getPaginaCidade(slug)
  if (!c) return <NotFoundPage />

  return (
    <Pagina>
      <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28">
        <Breadcrumbs itens={[['Início', '/'], ['Região atendida', '/regiao-atendida'], [c.cidade]]} />

        <header className="mt-6 max-w-3xl">
          <span className="eyebrow">{c.cidade} e região</span>
          <h1 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-6xl">{c.titulo}</h1>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-mcb-gray-600 sm:text-lg">
            {c.intro.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
        </header>

        <ul className="mt-14 grid gap-6 sm:grid-cols-3">
          {c.blocos.map((b) => (
            <li key={b.titulo} className="rounded-2xl border border-mcb-gray-200 bg-white/60 p-7">
              <h2 className="font-display text-xl text-ink">{b.titulo}</h2>
              <p className="mt-3 text-sm leading-relaxed text-mcb-gray-600">{b.texto}</p>
            </li>
          ))}
        </ul>

        <section className="mt-20">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">O que fazemos para {c.cidade}</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ambientes.map((a) => (
              <Link
                key={a.slug}
                to={`/ambientes/${a.slug}`}
                className="group relative block h-56 overflow-hidden rounded-xl bg-neutral-900"
              >
                <img
                  src={a.capa}
                  alt={conteudoDoAmbiente(a.slug)?.h1 || a.nome}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5 font-display text-lg text-white">
                  {a.nome} <ArrowUpRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">Perguntas frequentes</h2>
          <div className="mt-6">
            <FaqLista faq={c.faq} />
          </div>
        </section>

        <p className="mt-12 max-w-3xl text-mcb-gray-600">
          Atendemos também as cidades vizinhas de {c.cidade}: {c.vizinhas.join(', ')}.{' '}
          <Link to="/regiao-atendida" className="font-medium text-wood-600 underline-offset-4 hover:underline">
            Veja toda a região atendida
          </Link>
          .
        </p>

        <div className="mt-16">
          <CtaOrcamento
            origem={`cidade-${c.slug}`}
            titulo={`Móveis sob medida para a sua casa em ${c.cidade}`}
            mensagem={`Olá! Sou de ${c.cidade}, vim pelo site e gostaria de um orçamento de móveis planejados.`}
          />
        </div>
      </div>
    </Pagina>
  )
}
