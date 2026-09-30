// Carrega o texto dos artigos do blog sob demanda (cada .md vira um arquivo
// separado no build, então a home não carrega o blog inteiro).
import { getPost } from '../content/blog/posts'

const arquivos = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default' })
const cache = new Map()

function slugify(texto) {
  return texto
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/<[^>]+>/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

// Converte o markdown em HTML e monta o sumário a partir dos títulos (h2)
async function processar(md) {
  const { marked } = await import('marked')
  let html = marked.parse(md, { gfm: true })
  const sumario = []
  html = html.replace(/<h2>([\s\S]*?)<\/h2>/g, (_, inner) => {
    const id = slugify(inner)
    sumario.push({ id, texto: inner.replace(/<[^>]+>/g, '') })
    return `<h2 id="${id}">${inner}</h2>`
  })
  // Tabelas largas rolam dentro do próprio bloco no celular
  html = html.replace(/<table>/g, '<div class="tabela"><table>').replace(/<\/table>/g, '</table></div>')
  const palavras = md.split(/\s+/).filter(Boolean).length
  return { html, sumario, minutos: Math.max(2, Math.round(palavras / 200)) }
}

export function conteudoCarregado(slug) {
  return cache.get(slug) || null
}

export async function carregarConteudo(slug) {
  if (cache.has(slug)) return cache.get(slug)
  const loader = arquivos[`../content/blog/${slug}.md`]
  if (!loader) return null
  const md = await loader()
  const dados = await processar(md)
  cache.set(slug, dados)
  return dados
}

// Antes de renderizar uma rota de artigo (no build e no primeiro carregamento
// do navegador), deixa o texto pronto para não piscar.
export async function prepararRota(pathname) {
  const m = pathname.match(/^\/blog\/([^/]+)\/?$/)
  if (m && getPost(m[1])) await carregarConteudo(m[1])
}
