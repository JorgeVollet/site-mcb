import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { categorias } from '../content/blog/posts'

// Cartão de artigo do blog (lista do blog, artigos relacionados, home).
export default function PostCard({ post, compacto = false }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-mcb-gray-200 bg-white/60 transition-all duration-500 hover:-translate-y-1 hover:border-wood-500/40 hover:shadow-card"
    >
      <div className={`relative overflow-hidden bg-mcb-gray-200 ${compacto ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
        <img
          src={post.capa}
          alt={post.capaAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="text-[11px] font-medium uppercase tracking-widest text-wood-600">
          {categorias[post.categoria]}
        </span>
        <h3 className="mt-2 font-display text-xl leading-snug text-ink">{post.titulo}</h3>
        {!compacto && <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-mcb-gray-600">{post.descricao}</p>}
        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-wood-600">
          Ler artigo
          <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  )
}
