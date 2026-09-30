// Gera uma página HTML pronta para cada rota do site (pré-renderização),
// além do sitemap.xml e do llms.txt. Roda depois do `vite build`.
//
// Por quê: o site é React (SPA). Sem isso, o HTML servido vem vazio e
// Google/ChatGPT/Perplexity/Claude não enxergam o conteúdo.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(raiz, 'dist')
const servidor = path.join(raiz, 'dist-server', 'entry-server.js')

const m = await import(pathToFileURL(servidor).href)
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

if (!template.includes('<!--seo:start-->') || !template.includes('<div id="root"></div>')) {
  throw new Error('index.html sem os marcadores <!--seo:start--> / <div id="root"></div>')
}

function montar(url, appHtml) {
  return template
    .replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, m.headHtml(url))
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
}

function arquivoDa(url) {
  // cleanUrls da Vercel: /sobre -> sobre.html ; / -> index.html
  return url === '/' ? path.join(dist, 'index.html') : path.join(dist, `${url.slice(1)}.html`)
}

const rotas = m.rotas()
let total = 0
for (const url of rotas) {
  await m.prepararRota(url)
  const html = montar(url, m.render(url))
  const arq = arquivoDa(url)
  fs.mkdirSync(path.dirname(arq), { recursive: true })
  fs.writeFileSync(arq, html)
  total++
}

// 404 (a Vercel serve dist/404.html com status 404 para endereços que não existem)
fs.writeFileSync(path.join(dist, '404.html'), montar('/404', m.render('/404')))

// ─── sitemap.xml ─────────────────────────────────────────────────────
const hoje = new Date().toISOString().slice(0, 10)
const prioridade = (u) => {
  if (u === '/') return '1.0'
  const niveis = u.split('/').length - 1
  if (niveis === 1) return '0.8' // /sobre, /blog, /ambientes, /moveis-planejados-santa-rosa...
  if (u.startsWith('/ambientes/') && niveis === 2) return '0.8' // páginas de ambiente
  if (u.startsWith('/blog/')) return '0.7'
  return '0.6' // projetos
}
const dataDoPost = Object.fromEntries(m.posts.map((p) => [`/blog/${p.slug}`, p.atualizado || p.data]))
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...rotas.map(
    (u) =>
      `  <url><loc>${m.SITE}${u === '/' ? '/' : u}</loc><lastmod>${dataDoPost[u] || hoje}</lastmod><priority>${prioridade(u)}</priority></url>`
  ),
  '</urlset>',
  '',
].join('\n')
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap)

// ─── llms.txt (resumo do site para IAs) ──────────────────────────────
const e = m.empresa
const link = (titulo, url, desc) => `- [${titulo}](${m.SITE}${url})${desc ? `: ${desc}` : ''}`
const llms = [
  `# ${e.nome}`,
  '',
  `> Marcenaria de móveis planejados e sob medida em ${e.cidade}/${e.estado}, fundada em ${e.fundacao} por ${e.fundador}. Atende clientes finais e arquitetos/designers de interiores. Projetistas próprios, visitas e medições no local, móveis em MDF de primeira linha, montagem com equipe própria e garantia vitalícia. Atende ${e.cidade} e cidades num raio de cerca de ${e.raioKm} km no noroeste do Rio Grande do Sul.`,
  '',
  '## Fatos',
  `- Nome: ${e.nome} (MCB)`,
  `- Fundação: ${e.fundacao}, por ${e.fundador} (${m.anosDeHistoria()} anos de história)`,
  `- Endereço: ${e.endereco}, CEP ${e.cep}`,
  `- Horário: ${e.horario}. Não abre aos sábados.`,
  `- Telefone: ${e.telefoneFixo}`,
  ...m.contatos.map((c) => `- WhatsApp ${c.nome} (${c.cargo}): ${c.whatsappLabel}`),
  `- E-mail: ${e.email}`,
  `- Instagram: ${e.instagram}`,
  `- Região atendida: ${m.cidadesAtendidas.join(', ')}`,
  '- Material: nos móveis planejados, somente MDF de primeira linha (MDF resistente à umidade em áreas molhadas)',
  '- Garantia: vitalícia nos móveis fabricados, com condições no contrato',
  '- Preço: não trabalha com preço de tabela; cada projeto tem orçamento próprio, feito após visitas, medição e projeto',
  '- Pagamento: trabalha com financiamento, principalmente pelo Sicredi',
  '- Montagem: feita por equipe própria e especializada',
  '- Arquitetos: executa projetos de arquitetos e designers de interiores com fidelidade ao desenho, inclusive os mais desafiadores; projetistas próprios fazem o desenho de produção',
  '',
  '## O que faz',
  ...m.ambientes.map((a) => {
    const c = m.conteudoDoAmbiente(a.slug)
    return link(c?.h1 || a.nome, `/ambientes/${a.slug}`, `${a.projetos.length} projeto(s) no site`)
  }),
  '',
  '## Páginas principais',
  link('Sobre a empresa', '/sobre', 'história desde 1989'),
  link('Como funciona', '/como-funciona', 'etapas do primeiro contato à montagem'),
  link('Perguntas frequentes', '/perguntas-frequentes'),
  link('Região atendida', '/regiao-atendida'),
  link('Para arquitetos e designers de interiores', '/para-arquitetos', 'execução de projetos de arquitetura, inclusive os mais desafiadores'),
  link('Móveis planejados em Santa Rosa/RS', '/moveis-planejados-santa-rosa'),
  link('Contato e orçamento', '/contato'),
  '',
  '## Guias do blog',
  ...m.posts.map((p) => link(p.titulo, `/blog/${p.slug}`, p.descricao)),
  '',
  '## Perguntas frequentes',
  ...m.perguntasFrequentes().flatMap((f) => [`### ${f.p}`, f.r, '']),
].join('\n')
fs.writeFileSync(path.join(dist, 'llms.txt'), llms)

fs.rmSync(path.join(raiz, 'dist-server'), { recursive: true, force: true })
console.log(`prerender: ${total} páginas + 404, sitemap com ${rotas.length} URLs, llms.txt`)
