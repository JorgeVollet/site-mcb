import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import { empresa, contatos, anosDeHistoria } from '../lib/siteData'
import { ambientes } from '../lib/ambientesData'

const navItens = [
  { label: 'Sobre', to: '/sobre' },
  { label: 'Ambientes e projetos', to: '/ambientes' },
  { label: 'Como funciona', to: '/como-funciona' },
  { label: 'Perguntas frequentes', to: '/perguntas-frequentes' },
  { label: 'Blog', to: '/blog' },
  { label: 'Região atendida', to: '/regiao-atendida' },
  { label: 'Contato', to: '/contato' },
]

export default function Footer() {
  const ano = new Date().getFullYear()
  return (
    <footer className="bg-mcb-gray-900 text-mcb-gray-400">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo className="h-12" variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Móveis planejados e sob medida em {empresa.cidade}/{empresa.estado} desde {empresa.fundacao}.{' '}
              {anosDeHistoria()} anos fazendo móveis com projeto próprio, MDF de primeira linha e garantia vitalícia.
            </p>
            <a
              href={empresa.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-sm font-medium text-mcb-gray-300 transition-colors hover:text-wood-400"
            >
              Instagram {empresa.instagramUser}
            </a>
          </div>

          <div>
            <h2 className="text-xs font-medium uppercase tracking-widest text-cream">Navegação</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navItens.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="transition-colors hover:text-wood-400">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-medium uppercase tracking-widest text-cream">Ambientes</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {ambientes.map((a) => (
                <li key={a.slug}>
                  <Link to={`/ambientes/${a.slug}`} className="transition-colors hover:text-wood-400">
                    {a.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-medium uppercase tracking-widest text-cream">Contato</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>{empresa.telefoneFixo}</li>
              {contatos.map((c) => (
                <li key={c.whatsapp}>
                  <a
                    href={`https://wa.me/${c.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-wood-400"
                  >
                    {c.nome} · {c.whatsappLabel}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${empresa.email}`} className="transition-colors hover:text-wood-400">
                  {empresa.email}
                </a>
              </li>
              <li className="max-w-[240px]">
                <a
                  href={empresa.mapa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-wood-400"
                >
                  {empresa.endereco}
                </a>
              </li>
              <li>{empresa.horario}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row">
          <p>
            © {ano} {empresa.nome}. Todos os direitos reservados.
          </p>
          <p>
            Site desenvolvido por{' '}
            <a
              href="https://www.jvwebstudio.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-mcb-gray-300 transition-colors hover:text-wood-400"
            >
              JV WEB STUDIO
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
