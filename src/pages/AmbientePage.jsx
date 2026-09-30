import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import Pagina from '../components/Pagina'
import Breadcrumbs from '../components/Breadcrumbs'
import FaqLista from '../components/FaqLista'
import CtaOrcamento from '../components/CtaOrcamento'
import PostCard from '../components/PostCard'
import NotFoundPage from './NotFoundPage'
import { getAmbiente } from '../lib/ambientesData'
import { conteudoDoAmbiente } from '../lib/ambientesConteudo'
import { getPost } from '../content/blog/posts'

export default function AmbientePage() {
  const { ambiente } = useParams()
  const amb = getAmbiente(ambiente)
  const c = conteudoDoAmbiente(ambiente)

  if (!amb || !c) return <NotFoundPage />

  const leituras = (c.posts || []).map(getPost).filter(Boolean)

  return (
    <Pagina>
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24 lg:pb-32">
        <Breadcrumbs itens={[['Início', '/'], ['Ambientes', '/ambientes'], [amb.nome]]} />

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <span className="eyebrow">{amb.nome}</span>
            <h1 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-6xl">{c.h1}</h1>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-mcb-gray-600 sm:text-lg lg:pt-10">
            {c.intro.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
        </div>

        <h2 className="mt-16 font-display text-2xl text-ink sm:text-3xl">
          Projetos de {amb.nome.toLowerCase()} feitos pela MCB
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {amb.projetos.map((proj, i) => (
            <motion.div
              key={proj.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -60px 0px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <Link
                to={`/ambientes/${amb.slug}/${proj.slug}`}
                className="glow-border group relative block h-[300px] overflow-hidden rounded-xl bg-neutral-900 sm:h-[380px]"
              >
                <img
                  src={proj.fotos[0]}
                  alt={`${proj.nome}: ${amb.nome.toLowerCase()} sob medida pela Móveis Castelo Branco`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full rounded-xl object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-xl bg-[linear-gradient(to_top,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.35)_12%,transparent_22%)]" />
                <div className="absolute right-4 top-4 rounded border border-white/10 bg-black/30 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-neutral-200 backdrop-blur-sm">
                  {proj.fotos.length} {proj.fotos.length === 1 ? 'foto' : 'fotos'}
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="flex items-end justify-between border-t border-white/10 pt-4">
                    <h3 className="font-display text-xl leading-tight text-white">{proj.nome}</h3>
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 group-hover:bg-wood-500 group-hover:text-white">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-3">
          {c.destaques.map((d) => (
            <div key={d.titulo} className="rounded-2xl border border-mcb-gray-200 bg-white/60 p-7">
              <h2 className="font-display text-xl text-ink">{d.titulo}</h2>
              <p className="mt-3 text-sm leading-relaxed text-mcb-gray-600">{d.texto}</p>
            </div>
          ))}
        </div>

        <section className="mt-20 grid gap-10 rounded-3xl bg-mcb-gray-50 p-8 sm:p-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl text-ink sm:text-3xl">O que muda o valor do projeto</h2>
            <p className="mt-4 leading-relaxed text-mcb-gray-600">
              Não trabalhamos com preço de tabela. Cada projeto tem um preço único, feito depois das visitas, da
              medição e do desenho dos móveis. Estes são os pontos que mais influenciam:
            </p>
            <Link
              to="/blog/quanto-custam-moveis-planejados"
              className="mt-4 inline-block font-medium text-wood-600 underline-offset-4 hover:underline"
            >
              Entenda como se forma o preço
            </Link>
          </div>
          <ul className="space-y-3">
            {c.valor.map((v) => (
              <li key={v} className="flex items-start gap-3 text-mcb-gray-700">
                <Check size={18} className="mt-0.5 shrink-0 text-wood-500" /> {v}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-20">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">Perguntas frequentes</h2>
          <div className="mt-6">
            <FaqLista faq={c.faq} />
          </div>
        </section>

        {leituras.length > 0 && (
          <section className="mt-20">
            <h2 className="font-display text-2xl text-ink sm:text-3xl">Guias para planejar</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {leituras.map((p) => (
                <PostCard key={p.slug} post={p} compacto />
              ))}
            </div>
          </section>
        )}

        <div className="mt-20">
          <CtaOrcamento
            origem={`ambiente-${amb.slug}`}
            titulo={`Vamos planejar ${c.h1.toLowerCase().startsWith('móveis') ? 'os seus móveis' : 'o seu projeto'}?`}
            mensagem={`Olá! Vim pelo site e gostaria de um orçamento de ${amb.nome.toLowerCase()} sob medida.`}
          />
        </div>
      </section>
    </Pagina>
  )
}
