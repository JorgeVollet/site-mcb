import Pagina from '../components/Pagina'
import Breadcrumbs from '../components/Breadcrumbs'
import FaqLista from '../components/FaqLista'
import CtaOrcamento from '../components/CtaOrcamento'
import PostCard from '../components/PostCard'
import { arquitetos as a } from '../lib/arquitetos'
import { getPost } from '../content/blog/posts'

export default function ArquitetosPage() {
  const artigo = getPost('marcenaria-para-projetos-de-arquitetura')

  return (
    <Pagina>
      <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28">
        <Breadcrumbs itens={[['Início', '/'], ['Para arquitetos']]} />

        <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <header>
            <span className="eyebrow">Para arquitetos e designers</span>
            <h1 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-6xl">{a.h1}</h1>
          </header>
          <div className="space-y-4 text-base leading-relaxed text-mcb-gray-600 sm:text-lg lg:pt-10">
            {a.intro.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
        </div>

        <section className="mt-16">
          <div className="overflow-hidden rounded-2xl bg-mcb-gray-200 shadow-card">
            <img
              src="/fotos/sala-painel-tv-iluminado.jpg"
              alt="Sala com painel de TV iluminado, portas de vidro com perfil bronze e bancada sob medida, executados pela Móveis Castelo Branco"
              className="aspect-[4/3] w-full object-cover sm:aspect-[16/9]"
            />
          </div>
        </section>

        <section className="mt-20">
          <h2 className="font-display text-3xl text-ink sm:text-4xl">Como executamos o seu projeto</h2>
          <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {a.etapas.map((e, i) => (
              <li key={e.titulo} className="rounded-2xl border border-mcb-gray-200 bg-white/60 p-7">
                <span className="font-display text-4xl text-wood-500/70">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 font-display text-xl text-ink">{e.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mcb-gray-600">{e.texto}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-20 rounded-3xl bg-mcb-gray-800 p-8 text-cream sm:p-12">
          <h2 className="font-display text-3xl sm:text-4xl">O que você pode esperar da MCB</h2>
          <ul className="mt-8 grid gap-8 sm:grid-cols-2">
            {a.compromissos.map((c) => (
              <li key={c.titulo}>
                <h3 className="font-display text-xl text-wood-200">{c.titulo}</h3>
                <p className="mt-2 leading-relaxed text-mcb-gray-300">{c.texto}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-20">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">Perguntas frequentes de arquitetos</h2>
          <div className="mt-6">
            <FaqLista faq={a.faq} />
          </div>
        </section>

        {artigo && (
          <section className="mt-20 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <h2 className="font-display text-2xl text-ink sm:text-3xl">Para indicar uma marcenaria ao seu cliente</h2>
              <p className="mt-4 leading-relaxed text-mcb-gray-600">
                O que avaliar antes de confiar a execução do seu projeto a uma marcenaria.
              </p>
            </div>
            <PostCard post={artigo} compacto />
          </section>
        )}

        <div className="mt-20">
          <CtaOrcamento
            origem="arquitetos"
            titulo="Tem um projeto para executar?"
            texto="Mande o projeto detalhado para a gente orçar e executar. Projetos difíceis são bem-vindos."
            mensagem="Olá! Trabalho com arquitetura/interiores, vim pelo site e gostaria de conversar sobre a execução de um projeto de marcenaria."
          />
        </div>
      </div>
    </Pagina>
  )
}
