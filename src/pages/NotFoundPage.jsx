import { Link } from 'react-router-dom'
import Pagina from '../components/Pagina'

export default function NotFoundPage() {
  const links = [
    ['Ambientes e projetos', '/ambientes'],
    ['Blog', '/blog'],
    ['Como funciona', '/como-funciona'],
    ['Contato', '/contato'],
  ]
  return (
    <Pagina>
      <section className="mx-auto flex min-h-[55vh] max-w-3xl flex-col items-center justify-center px-5 pb-24 text-center sm:px-8">
        <span className="eyebrow">Erro 404</span>
        <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">Página não encontrada</h1>
        <p className="mt-4 max-w-md text-mcb-gray-600">
          O endereço pode ter mudado ou não existe mais. Veja por onde continuar:
        </p>
        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          <li>
            <Link to="/" className="btn-primary bg-wood-500 text-white">
              Página inicial
            </Link>
          </li>
          {links.map(([nome, path]) => (
            <li key={path}>
              <Link to={path} className="btn-outline">
                {nome}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Pagina>
  )
}
