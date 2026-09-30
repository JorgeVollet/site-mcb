import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Pagina from '../components/Pagina'
import Breadcrumbs from '../components/Breadcrumbs'
import FaqLista from '../components/FaqLista'
import CtaOrcamento from '../components/CtaOrcamento'
import PostCard from '../components/PostCard'
import NotFoundPage from './NotFoundPage'
import { getPost, categorias, postsRelacionados } from '../content/blog/posts'
import { conteudoCarregado, carregarConteudo } from '../lib/blog'
import { getAmbiente } from '../lib/ambientesData'
import { conteudoDoAmbiente } from '../lib/ambientesConteudo'

const dataPt = (iso) =>
  new Date(`${iso}T12:00:00-03:00`).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

export default function BlogPostPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const post = getPost(slug)
  const [, setVersao] = useState(0)
  const conteudo = conteudoCarregado(slug)

  // Navegação dentro do site: carrega o texto do artigo se ainda não veio
  useEffect(() => {
    if (post && !conteudoCarregado(slug)) {
      carregarConteudo(slug).then(() => setVersao((v) => v + 1))
    }
  }, [slug, post])

  if (!post) return <NotFoundPage />

  // Links internos dentro do texto navegam sem recarregar a página
  function onClickArtigo(e) {
    const a = e.target.closest('a')
    const href = a?.getAttribute('href')
    if (href && href.startsWith('/') && !a.target && !e.metaKey && !e.ctrlKey) {
      e.preventDefault()
      navigate(href)
    }
  }

  const amb = post.ambiente ? getAmbiente(post.ambiente) : null
  const ambConteudo = post.ambiente ? conteudoDoAmbiente(post.ambiente) : null
  const relacionados = postsRelacionados(post)

  return (
    <Pagina>
      <article className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28">
        <Breadcrumbs itens={[['Início', '/'], ['Blog', '/blog'], [post.titulo]]} />

        <header className="mt-6 max-w-4xl">
          <Link
            to={`/blog#${post.categoria}`}
            className="eyebrow transition-colors hover:text-wood-700"
          >
            {categorias[post.categoria]}
          </Link>
          <h1 className="mt-3 font-display text-3xl leading-tight text-ink sm:text-5xl">{post.titulo}</h1>
          <p className="mt-5 text-lg leading-relaxed text-mcb-gray-600">{post.descricao}</p>
          <p className="mt-5 text-sm text-mcb-gray-500">
            Por Móveis Castelo Branco · <time dateTime={post.data}>{dataPt(post.data)}</time>
            {conteudo && <> · {conteudo.minutos} min de leitura</>}
          </p>
        </header>

        <div className="mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-mcb-gray-200 shadow-card sm:aspect-[21/9]">
          <img src={post.capa} alt={post.capaAlt} className="h-full w-full object-cover" />
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16">
          <div className="min-w-0">
            {conteudo ? (
              <div
                className="prose-mcb"
                onClick={onClickArtigo}
                dangerouslySetInnerHTML={{ __html: conteudo.html }}
              />
            ) : (
              <p className="text-mcb-gray-500">Carregando o artigo…</p>
            )}

            {post.faq?.length > 0 && (
              <section className="mt-16">
                <h2 className="font-display text-2xl text-ink sm:text-3xl">Perguntas frequentes</h2>
                <div className="mt-6">
                  <FaqLista faq={post.faq} />
                </div>
              </section>
            )}
          </div>

          <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
            {conteudo?.sumario?.length > 0 && (
              <nav aria-label="Neste artigo" className="rounded-2xl border border-mcb-gray-200 bg-white/60 p-6">
                <p className="text-xs font-medium uppercase tracking-widest text-mcb-gray-500">Neste artigo</p>
                <ol className="mt-4 space-y-2.5 text-sm">
                  {conteudo.sumario.map((s) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`} className="text-mcb-gray-700 transition-colors hover:text-wood-600">
                        {s.texto}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            {amb && ambConteudo && (
              <Link
                to={`/ambientes/${amb.slug}`}
                className="group block overflow-hidden rounded-2xl border border-mcb-gray-200 bg-white/60 transition-all hover:border-wood-500/40 hover:shadow-card"
              >
                <div className="aspect-[4/3] overflow-hidden bg-mcb-gray-200">
                  <img
                    src={amb.capa}
                    alt={ambConteudo.h1}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-widest text-wood-600">Veja projetos</p>
                  <p className="mt-1 flex items-center justify-between font-display text-lg text-ink">
                    {ambConteudo.h1}
                    <ArrowUpRight size={16} className="text-wood-500" />
                  </p>
                </div>
              </Link>
            )}
          </aside>
        </div>

        <div className="mt-20">
          <CtaOrcamento origem="blog-artigo" />
        </div>

        {relacionados.length > 0 && (
          <section className="mt-20">
            <h2 className="font-display text-2xl text-ink sm:text-3xl">Continue lendo</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relacionados.map((p) => (
                <PostCard key={p.slug} post={p} compacto />
              ))}
            </div>
          </section>
        )}
      </article>
    </Pagina>
  )
}
