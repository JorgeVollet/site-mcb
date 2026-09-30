// SEO de todas as páginas: título, descrição, canonical, imagem de
// compartilhamento e dados estruturados (schema.org).
// Usado no build (páginas prontas em HTML) e no navegador (SeoHead).

import { empresa, cidadesAtendidas, contatos } from './siteData'
import { ambientes, getAmbiente, getProjeto } from './ambientesData'
import { conteudoDoAmbiente } from './ambientesConteudo'
import { descricaoDoProjeto } from './projetosConteudo'
import { perguntasFrequentes } from './institucional'
import { paginasCidade, getPaginaCidade } from './cidades'
import { arquitetos } from './arquitetos'
import { posts, getPost, categorias } from '../content/blog/posts'

export const SITE = empresa.site
const MARCA = empresa.nome
const IMG_PADRAO = '/fotos/hero-sala.jpg'
const IMG_PADRAO_ALT = 'Sala com painel de TV, lareira e móveis sob medida da Móveis Castelo Branco'

export const abs = (p) => (/^https?:\/\//.test(p) ? p : SITE + encodeURI(p))

// Todas as rotas que viram página pronta no build (e entram no sitemap)
export function rotas() {
  const lista = [
    '/',
    '/ambientes',
    '/sobre',
    '/como-funciona',
    '/perguntas-frequentes',
    '/contato',
    '/regiao-atendida',
    '/para-arquitetos',
    '/blog',
  ]
  for (const amb of ambientes) {
    lista.push(`/ambientes/${amb.slug}`)
    for (const p of amb.projetos) lista.push(`/ambientes/${amb.slug}/${p.slug}`)
  }
  for (const c of paginasCidade) lista.push(`/${c.slug}`)
  for (const p of posts) lista.push(`/blog/${p.slug}`)
  return lista
}

// ─── Dados estruturados ──────────────────────────────────────────────

function empresaSchema() {
  return {
    '@type': ['FurnitureStore', 'HomeAndConstructionBusiness'],
    '@id': `${SITE}/#empresa`,
    name: MARCA,
    alternateName: 'MCB Móveis Castelo Branco',
    slogan: 'Perfeição na medida do seu sonho',
    description:
      'Marcenaria de móveis planejados e sob medida em Três de Maio/RS, fundada em 1989 por Ademir Luís Noronha. Projetistas próprios, execução de projetos de arquitetos, MDF de primeira linha, montagem com equipe própria e garantia vitalícia.',
    url: `${SITE}/`,
    logo: abs('/logo-mcb-full.png'),
    image: [abs(IMG_PADRAO), abs('/fotos/fachada-mcb.jpg')],
    telephone: empresa.telefoneFixoE164,
    email: empresa.email,
    foundingDate: String(empresa.fundacao),
    founder: { '@type': 'Person', name: empresa.fundador },
    address: {
      '@type': 'PostalAddress',
      streetAddress: empresa.rua,
      addressLocality: empresa.cidade,
      addressRegion: empresa.estado,
      postalCode: empresa.cep,
      addressCountry: 'BR',
    },
    hasMap: empresa.mapa,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    areaServed: cidadesAtendidas.map((c) => ({ '@type': 'City', name: `${c}, RS` })),
    sameAs: [empresa.instagram],
    contactPoint: contatos.map((c) => ({
      '@type': 'ContactPoint',
      contactType: c.cargo === 'Fundador' ? 'sales' : 'customer service',
      name: c.nome,
      telephone: `+${c.whatsapp}`,
      availableLanguage: 'Portuguese',
    })),
    knowsAbout: [
      'Móveis planejados',
      'Móveis sob medida',
      'Marcenaria de alto padrão',
      'Execução de projetos de arquitetura e interiores',
      'Cozinha planejada',
      'Roupeiro planejado',
      'Closet planejado',
      'Gabinete de banheiro',
      'Móveis corporativos',
      'MDF',
    ],
  }
}

function siteSchema() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE}/#site`,
    url: `${SITE}/`,
    name: MARCA,
    inLanguage: 'pt-BR',
    publisher: { '@id': `${SITE}/#empresa` },
  }
}

function breadcrumb(itens) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: itens.map(([nome, path], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: nome,
      item: abs(path),
    })),
  }
}

function faqSchema(faq) {
  if (!faq?.length) return null
  return {
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.p,
      acceptedAnswer: { '@type': 'Answer', text: f.r },
    })),
  }
}

// ─── Meta por página ─────────────────────────────────────────────────

function titulo(t) {
  return t.includes(MARCA) ? t : `${t} | ${MARCA}`
}

export function metaDaPagina(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/'
  const base = {
    title: titulo('Móveis Planejados e Sob Medida em Três de Maio/RS'),
    description:
      'Marcenaria de móveis planejados e sob medida em Três de Maio/RS desde 1989. Cozinhas, roupeiros, closets, banheiros e móveis para empresas, com projeto próprio e garantia vitalícia.',
    canonical: abs(path === '/' ? '/' : path),
    image: abs(IMG_PADRAO),
    imageAlt: IMG_PADRAO_ALT,
    type: 'website',
    noindex: false,
    extra: [],
  }

  const m = (o) => {
    const meta = { ...base, ...o }
    meta.jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [empresaSchema(), siteSchema(), ...meta.extra.filter(Boolean)],
    }
    return meta
  }

  if (path === '/') {
    return m({
      extra: [faqSchema(perguntasFrequentes().slice(0, 6))],
    })
  }

  if (path === '/ambientes') {
    return m({
      title: titulo('Ambientes e Projetos de Móveis Planejados'),
      description:
        'Veja cozinhas, dormitórios, closets, salas, banheiros e móveis corporativos feitos sob medida pela Móveis Castelo Branco em Três de Maio e região.',
      extra: [breadcrumb([['Início', '/'], ['Ambientes', '/ambientes']])],
    })
  }

  const mAmb = path.match(/^\/ambientes\/([^/]+)$/)
  if (mAmb) {
    const amb = getAmbiente(mAmb[1])
    const c = conteudoDoAmbiente(mAmb[1])
    if (amb && c) {
      return m({
        title: titulo(c.seoTitle),
        description: c.seoDescription,
        image: abs(amb.capa),
        imageAlt: `${c.h1} - Móveis Castelo Branco`,
        extra: [
          breadcrumb([['Início', '/'], ['Ambientes', '/ambientes'], [amb.nome, path]]),
          faqSchema(c.faq),
        ],
      })
    }
  }

  const mProj = path.match(/^\/ambientes\/([^/]+)\/([^/]+)$/)
  if (mProj) {
    const d = getProjeto(mProj[1], mProj[2])
    if (d) {
      const { ambiente: amb, projeto: proj } = d
      const desc = descricaoDoProjeto(amb.slug, proj.slug)
      return m({
        title: titulo(`${proj.nome} · ${amb.nome} sob medida`),
        description: `${desc} Projeto da Móveis Castelo Branco, Três de Maio/RS.`.slice(0, 300),
        image: abs(proj.fotos[0]),
        imageAlt: `${proj.nome} - ${amb.nome} sob medida pela Móveis Castelo Branco`,
        extra: [
          breadcrumb([
            ['Início', '/'],
            ['Ambientes', '/ambientes'],
            [amb.nome, `/ambientes/${amb.slug}`],
            [proj.nome, path],
          ]),
          {
            '@type': 'ImageGallery',
            name: proj.nome,
            description: desc,
            url: abs(path),
            creator: { '@id': `${SITE}/#empresa` },
            image: proj.fotos.map((f, i) => ({
              '@type': 'ImageObject',
              contentUrl: abs(f),
              name: `${proj.nome} - foto ${i + 1}`,
            })),
          },
        ],
      })
    }
  }

  if (path === '/sobre') {
    return m({
      title: titulo('Sobre a Móveis Castelo Branco: marcenaria desde 1989'),
      description:
        'A história da Móveis Castelo Branco, marcenaria fundada em 1989 por Ademir Luís Noronha em Três de Maio/RS: da garagem de casa a fábrica com projetistas próprios.',
      image: abs('/fotos/fachada-mcb.jpg'),
      imageAlt: 'Fachada da Móveis Castelo Branco em Três de Maio/RS',
      extra: [
        breadcrumb([['Início', '/'], ['Sobre', '/sobre']]),
        { '@type': 'AboutPage', url: abs('/sobre'), about: { '@id': `${SITE}/#empresa` } },
      ],
    })
  }

  if (path === '/como-funciona') {
    return m({
      title: titulo('Como Funciona: do Primeiro Contato à Montagem'),
      description:
        'Visitas e medições, projeto com projetistas próprios, orçamento, produção em MDF de primeira linha, montagem com equipe própria e garantia vitalícia.',
      extra: [breadcrumb([['Início', '/'], ['Como funciona', '/como-funciona']])],
    })
  }

  if (path === '/perguntas-frequentes') {
    return m({
      title: titulo('Perguntas Frequentes sobre Móveis Planejados'),
      description:
        'Preço, orçamento, materiais, garantia, prazo, financiamento e cidades atendidas: respostas diretas sobre os móveis planejados da Móveis Castelo Branco.',
      extra: [
        breadcrumb([['Início', '/'], ['Perguntas frequentes', '/perguntas-frequentes']]),
        faqSchema(perguntasFrequentes()),
      ],
    })
  }

  if (path === '/contato') {
    return m({
      title: titulo('Contato e Orçamento'),
      description: `Peça seu orçamento de móveis planejados: WhatsApp, telefone ${empresa.telefoneFixo}, e-mail e endereço em Três de Maio/RS. ${empresa.horario}.`,
      extra: [
        breadcrumb([['Início', '/'], ['Contato', '/contato']]),
        { '@type': 'ContactPage', url: abs('/contato'), about: { '@id': `${SITE}/#empresa` } },
      ],
    })
  }

  if (path === '/regiao-atendida') {
    return m({
      title: titulo('Região Atendida: Três de Maio, Santa Rosa, Ijuí e Noroeste do RS'),
      description: `A Móveis Castelo Branco atende Três de Maio e cidades num raio de cerca de ${empresa.raioKm} km: Santa Rosa, Horizontina, Ijuí, Santo Ângelo, Três Passos e região.`,
      extra: [breadcrumb([['Início', '/'], ['Região atendida', '/regiao-atendida']])],
    })
  }

  if (path === '/para-arquitetos') {
    return m({
      title: titulo(arquitetos.seoTitle),
      description: arquitetos.seoDescription,
      image: abs('/projetos/corporativo/escritorio-eme-arquitetura/02.jpg'),
      imageAlt: 'Móveis produzidos pela Móveis Castelo Branco para um escritório de arquitetura',
      extra: [
        breadcrumb([['Início', '/'], ['Para arquitetos', '/para-arquitetos']]),
        {
          '@type': 'Service',
          name: 'Execução de marcenaria para projetos de arquitetura e interiores',
          serviceType: 'Marcenaria sob medida',
          provider: { '@id': `${SITE}/#empresa` },
          audience: { '@type': 'BusinessAudience', audienceType: 'Arquitetos e designers de interiores' },
          areaServed: 'Noroeste do Rio Grande do Sul',
          url: abs('/para-arquitetos'),
        },
        faqSchema(arquitetos.faq),
      ],
    })
  }

  const cidade = getPaginaCidade(path.slice(1))
  if (cidade) {
    return m({
      title: titulo(cidade.seoTitle),
      description: cidade.seoDescription,
      extra: [
        breadcrumb([['Início', '/'], ['Região atendida', '/regiao-atendida'], [cidade.cidade, path]]),
        faqSchema(cidade.faq),
      ],
    })
  }

  if (path === '/blog') {
    return m({
      title: titulo('Blog: Guias sobre Móveis Planejados'),
      description:
        'Guias práticos sobre móveis planejados: o que forma o preço, MDF ou MDP, roupeiro para quarto pequeno, cozinha com fogão a lenha, garantia e muito mais.',
      extra: [
        breadcrumb([['Início', '/'], ['Blog', '/blog']]),
        {
          '@type': 'Blog',
          '@id': `${SITE}/blog#blog`,
          name: `Blog ${MARCA}`,
          url: abs('/blog'),
          publisher: { '@id': `${SITE}/#empresa` },
          blogPost: posts.map((p) => ({ '@type': 'BlogPosting', headline: p.titulo, url: abs(`/blog/${p.slug}`) })),
        },
      ],
    })
  }

  const mPost = path.match(/^\/blog\/([^/]+)$/)
  if (mPost) {
    const post = getPost(mPost[1])
    if (post) {
      return m({
        title: titulo(post.titulo),
        description: post.descricao,
        image: abs(post.capa),
        imageAlt: post.capaAlt,
        type: 'article',
        extra: [
          breadcrumb([['Início', '/'], ['Blog', '/blog'], [post.titulo, path]]),
          {
            '@type': 'BlogPosting',
            headline: post.titulo,
            description: post.descricao,
            image: abs(post.capa),
            datePublished: post.data,
            dateModified: post.atualizado || post.data,
            inLanguage: 'pt-BR',
            articleSection: categorias[post.categoria],
            author: { '@id': `${SITE}/#empresa` },
            publisher: { '@id': `${SITE}/#empresa` },
            mainEntityOfPage: abs(path),
          },
          faqSchema(post.faq),
        ],
      })
    }
  }

  // Página não encontrada
  return m({
    title: titulo('Página não encontrada'),
    description: 'Esta página não existe. Veja nossos ambientes, o blog ou fale com a gente.',
    canonical: null,
    noindex: true,
  })
}

// ─── HTML do <head> (usado no build) ─────────────────────────────────

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export function jsonLdTexto(obj) {
  return JSON.stringify(obj).replace(/</g, '\\u003c')
}

export function headHtml(pathname) {
  const meta = metaDaPagina(pathname)
  const t = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    meta.noindex ? '<meta name="robots" content="noindex, follow" />' : '<meta name="robots" content="index, follow, max-image-preview:large" />',
    meta.canonical ? `<link rel="canonical" href="${esc(meta.canonical)}" />` : '',
    `<meta property="og:type" content="${meta.type}" />`,
    '<meta property="og:locale" content="pt_BR" />',
    `<meta property="og:site_name" content="${esc(MARCA)}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    meta.canonical ? `<meta property="og:url" content="${esc(meta.canonical)}" />` : '',
    `<meta property="og:image" content="${esc(meta.image)}" />`,
    `<meta property="og:image:alt" content="${esc(meta.imageAlt)}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${esc(meta.image)}" />`,
    `<script type="application/ld+json" id="ld-json">${jsonLdTexto(meta.jsonLd)}</script>`,
  ]
  return t.filter(Boolean).join('\n    ')
}
