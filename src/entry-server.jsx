// Entrada usada só no build: gera o HTML de cada página para o Google,
// as IAs e para o site abrir com o conteúdo já pronto.
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes.jsx'

export { rotas, headHtml, metaDaPagina, SITE } from './lib/seo'
export { prepararRota } from './lib/blog'
export { posts, categorias } from './content/blog/posts'
export { ambientes } from './lib/ambientesData'
export { conteudoDoAmbiente } from './lib/ambientesConteudo'
export { descricaoDoProjeto } from './lib/projetosConteudo'
export { empresa, contatos, cidadesAtendidas, anosDeHistoria } from './lib/siteData'
export { perguntasFrequentes, etapas } from './lib/institucional'

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>
  )
}
