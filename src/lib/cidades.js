// Páginas por cidade. Só criar página para cidade com busca real no Google
// e com conteúdo próprio — página "copia e cola" trocando o nome é punida.
// Pesquisa de 30/09/2026: Santa Rosa é a cidade vizinha com mais buscas.

export const paginasCidade = [
  {
    slug: 'moveis-planejados-santa-rosa',
    cidade: 'Santa Rosa',
    titulo: 'Móveis planejados em Santa Rosa/RS',
    seoTitle: 'Móveis Planejados e Sob Medida em Santa Rosa/RS',
    seoDescription:
      'Móveis planejados sob medida em Santa Rosa/RS: cozinhas, roupeiros, banheiros, closets e móveis para empresas, com visitas, medição, projeto e montagem. MCB, desde 1989.',
    intro: [
      'A Móveis Castelo Branco fica em Três de Maio, vizinha de Santa Rosa, e atende a cidade com o mesmo processo completo que usa em casa: visitas e medições no local, projeto feito pelos nossos projetistas, produção na nossa fábrica e montagem.',
      'Para quem mora em Santa Rosa, isso quer dizer ter a fábrica perto: fácil de conversar, de acompanhar o projeto e de ter alguém por perto depois da entrega.',
    ],
    blocos: [
      {
        titulo: 'Para casas e apartamentos',
        texto:
          'Cozinhas planejadas, roupeiros e dormitórios, closets, gabinetes de banheiro, painéis de TV e salas com lareira, sob medida para o seu espaço.',
      },
      {
        titulo: 'Para empresas de Santa Rosa',
        texto:
          'Lojas, consultórios, escritórios, padarias e bares: balcões, expositores e móveis de trabalho com a identidade do seu negócio.',
      },
      {
        titulo: 'Acompanhamento da obra',
        texto:
          'Podemos entrar no começo da obra para planejar tomadas, iluminação e pontos de água com os móveis. A medição final é feita com a obra pronta.',
      },
    ],
    faq: [
      {
        p: 'A Móveis Castelo Branco atende Santa Rosa?',
        r: 'Sim. A MCB fica em Três de Maio, vizinha de Santa Rosa, e faz em Santa Rosa as visitas, medições e montagens.',
      },
      {
        p: 'Como pedir um orçamento de móveis planejados em Santa Rosa?',
        r: 'Pelo WhatsApp, telefone ou formulário do site. Depois do primeiro contato, a equipe agenda a visita e a medição, e o orçamento é feito em cima do projeto.',
      },
      {
        p: 'Vocês fazem móveis para empresas em Santa Rosa?',
        r: 'Fazemos: lojas, consultórios, escritórios, padarias e bares.',
      },
    ],
    vizinhas: ['Horizontina', 'Tuparendi', 'Giruá', 'Santo Cristo', 'Cândido Godói', 'Tucunduva'],
  },
]

export function getPaginaCidade(slug) {
  return paginasCidade.find((c) => c.slug === slug) || null
}
