import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

// Trilha de navegação visível (a versão para o Google vai no JSON-LD).
// itens = [['Início', '/'], ['Blog', '/blog'], ['Título atual']]
export default function Breadcrumbs({ itens }) {
  return (
    <nav aria-label="Você está em" className="text-xs font-medium uppercase tracking-widest text-mcb-gray-500">
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
        {itens.map(([nome, path], i) => {
          const ultimo = i === itens.length - 1
          return (
            <li key={nome} className="flex items-center gap-1.5">
              {ultimo || !path ? (
                <span aria-current={ultimo ? 'page' : undefined} className="text-mcb-gray-400 normal-case tracking-normal line-clamp-1">
                  {nome}
                </span>
              ) : (
                <Link to={path} className="transition-colors hover:text-wood-600">
                  {nome}
                </Link>
              )}
              {!ultimo && <ChevronRight size={12} className="shrink-0 text-mcb-gray-300" />}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
