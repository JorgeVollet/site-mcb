import Pagina from '../components/Pagina'
import Breadcrumbs from '../components/Breadcrumbs'
import PostCard from '../components/PostCard'
import CtaOrcamento from '../components/CtaOrcamento'
import { posts, categorias, postsDaCategoria } from '../content/blog/posts'

export default function BlogPage() {
  const cats = Object.keys(categorias).filter((c) => postsDaCategoria(c).length)

  return (
    <Pagina>
      <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28">
        <Breadcrumbs itens={[['Início', '/'], ['Blog']]} />

        <header className="mt-6 max-w-3xl">
          <span className="eyebrow">Guias e ideias</span>
          <h1 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-6xl">
            Blog da Móveis Castelo Branco
          </h1>
          <p className="mt-5 text-base leading-relaxed text-mcb-gray-600 sm:text-lg">
            O que a gente aprendeu em mais de três décadas fazendo móveis sob medida, explicado de um jeito simples:
            como se forma o preço de um projeto, MDF ou MDP, como planejar o roupeiro de um quarto pequeno, a cozinha
            com fogão a lenha e muito mais. São {posts.length} guias para você decidir com segurança.
          </p>
        </header>

        <nav aria-label="Assuntos do blog" className="mt-10 flex flex-wrap gap-2">
          {cats.map((c) => (
            <a
              key={c}
              href={`#${c}`}
              className="rounded-full border border-mcb-gray-200 bg-white/60 px-4 py-2 text-sm font-medium text-mcb-gray-700 transition-colors hover:border-wood-500 hover:text-wood-700"
            >
              {categorias[c]}
            </a>
          ))}
        </nav>

        <div className="mt-14 space-y-16 sm:space-y-20">
          {cats.map((c) => (
            <section key={c} id={c} className="scroll-mt-28">
              <h2 className="font-display text-2xl text-ink sm:text-3xl">{categorias[c]}</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {postsDaCategoria(c).map((p) => (
                  <PostCard key={p.slug} post={p} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-20">
          <CtaOrcamento origem="blog" />
        </div>
      </div>
    </Pagina>
  )
}
