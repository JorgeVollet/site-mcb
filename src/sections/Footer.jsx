import Logo from '../components/Logo'
import { empresa, contatos } from '../lib/siteData'

const navItens = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Ambientes', href: '#ambientes' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]

export default function Footer() {
  const ano = new Date().getFullYear()
  return (
    <footer className="bg-mcb-gray-900 text-mcb-gray-400">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo className="h-12" variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Móveis planejados e sob medida, feitos de forma artesanal há quase
              30 anos em {empresa.cidade}/{empresa.estado}.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-cream">
              Navegação
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navItens.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="transition-colors hover:text-wood-400">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-cream">
              Contato
            </h4>
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
                <a
                  href={`mailto:${empresa.email}`}
                  className="transition-colors hover:text-wood-400"
                >
                  {empresa.email}
                </a>
              </li>
              <li className="max-w-[200px]">{empresa.endereco}</li>
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
