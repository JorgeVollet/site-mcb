// Catálogo do blog. O texto de cada artigo fica em ./<slug>.md
// Regras de conteúdo (combinadas com o Ademir):
// - NUNCA publicar preço ou faixa de preço. Cada projeto é único.
// - Nos móveis planejados a MCB usa só MDF de primeira linha.
// - Não inventar números, prazos ou dados que não foram confirmados.

export const categorias = {
  preco: 'Preço e orçamento',
  materiais: 'Materiais',
  decisao: 'Antes de contratar',
  ambientes: 'Ideias por ambiente',
  cuidados: 'Cuidados',
  comercial: 'Lojas e empresas',
  arquitetos: 'Para arquitetos',
}

const DATA = '2026-09-30'

export const posts = [
  // ─── Preço ─────────────────────────────────────────────
  {
    slug: 'quanto-custam-moveis-planejados',
    titulo: 'Quanto custam móveis planejados? O que forma o preço de um projeto sob medida',
    descricao:
      'Por que uma marcenaria séria não passa preço sem medir, o que faz o valor de um móvel planejado subir ou descer e como pedir um orçamento que dá para comparar.',
    categoria: 'preco',
    data: DATA,
    capa: '/fotos/cozinha-ilha-bancada.jpg',
    capaAlt: 'Cozinha planejada em L com armários claros e bancada escura',
    ambiente: 'cozinha',
    faq: [
      {
        p: 'Dá para saber o preço de móveis planejados sem visita?',
        r: 'Não com segurança. O valor depende das medidas reais, do material, das ferragens, dos acabamentos e da complexidade do projeto. Por isso a Móveis Castelo Branco só passa orçamento depois de visitar, medir e desenhar o projeto.',
      },
      {
        p: 'Preço por metro linear serve para comparar orçamentos?',
        r: 'Serve pouco. Um metro de armário com gavetas, ferragens com amortecimento e portas usinadas custa diferente de um metro com duas portas simples. Compare projetos iguais, com o mesmo material e as mesmas ferragens.',
      },
      {
        p: 'O que mais pesa no preço de um móvel planejado?',
        r: 'Tamanho do projeto, quantidade de gavetas e ferragens, tipo de acabamento das portas (liso, usinado, laca, vidro), puxadores e acessórios internos, além da complexidade da instalação.',
      },
    ],
  },
  {
    slug: 'quanto-custa-cozinha-planejada',
    titulo: 'Quanto custa uma cozinha planejada: o que pesa no orçamento',
    descricao:
      'Cozinha pequena, em L, em U ou com ilha: entenda o que muda o valor de uma cozinha planejada sob medida e onde vale investir mais.',
    categoria: 'preco',
    data: DATA,
    capa: '/projetos/cozinha/cozinha-luxury/01.jpg',
    capaAlt: 'Cozinha planejada com portas brancas com moldura e puxadores dourados',
    ambiente: 'cozinha',
    faq: [
      {
        p: 'Cozinha com ilha é sempre mais cara?',
        r: 'Normalmente sim, porque a ilha é um móvel a mais, com acabamento dos quatro lados, e muitas vezes recebe cooktop, cuba ou pontos elétricos. Mas uma cozinha em L bem resolvida pode custar mais que uma com ilha simples. Depende do conjunto.',
      },
      {
        p: 'Vale mais a pena investir em gavetas ou em portas?',
        r: 'Nos armários de baixo, gavetas e gavetões costumam ser mais práticos: você enxerga tudo sem se abaixar. Custam mais por causa das corrediças, mas é onde o uso diário mais agradece.',
      },
      {
        p: 'Posso fazer a cozinha por etapas?',
        r: 'Pode. Muita gente faz primeiro a parte da pia e do fogão e deixa a torre, a despensa ou os aéreos para depois. O importante é que o projeto seja desenhado inteiro desde o começo, para as etapas conversarem.',
      },
    ],
  },
  {
    slug: 'quanto-custa-roupeiro-sob-medida',
    titulo: 'Roupeiro sob medida: o que define o valor e como acertar no projeto',
    descricao:
      'Portas de correr ou de abrir, espelho, gaveteiro, maleiro, iluminação: veja o que faz o preço de um roupeiro planejado mudar e como montar um projeto que cabe no orçamento.',
    categoria: 'preco',
    data: DATA,
    capa: '/projetos/dormitorio/dormitorio-classico/02.jpg',
    capaAlt: 'Roupeiro planejado com portas de espelho e perfis dourados',
    ambiente: 'dormitorio',
    faq: [
      {
        p: 'Roupeiro de porta de correr é mais caro?',
        r: 'Em geral sim, porque o sistema de trilhos e roldanas de boa qualidade custa mais que dobradiças. Em compensação, economiza o espaço de abertura das portas, o que em quarto pequeno faz muita diferença.',
      },
      {
        p: 'Roupeiro até o teto vale a pena?',
        r: 'Quase sempre. O maleiro no alto guarda edredons, malas e roupas de outra estação, e o acabamento até o teto evita a faixa de pó em cima do móvel.',
      },
      {
        p: 'Qual a profundidade certa de um roupeiro?',
        r: 'Para roupa pendurada em cabide de frente, o padrão fica em torno de 55 a 60 cm. Em quartos muito estreitos dá para usar cabideiros frontais e trabalhar com menos profundidade.',
      },
    ],
  },
  {
    slug: 'por-que-moveis-planejados-custam-mais',
    titulo: 'Por que móveis planejados custam mais, e onde não vale economizar',
    descricao:
      'O que está por trás do valor de um móvel sob medida: material, ferragens, projeto, fabricação e montagem. E as escolhas que parecem economia mas saem caras depois.',
    categoria: 'preco',
    data: DATA,
    capa: '/projetos/cozinha/cozinha-moderna-taj-mahal/01.jpg',
    capaAlt: 'Detalhe de cozinha planejada com portas em alto brilho e puxador perfil dourado',
    ambiente: 'cozinha',
    faq: [
      {
        p: 'Por que o móvel planejado custa mais que o pronto de loja?',
        r: 'Porque ele é desenhado e fabricado para um espaço específico, com medição, projeto, cortes sob medida, montagem no local e ajustes. O móvel pronto é feito em série, em medidas padrão.',
      },
      {
        p: 'Onde não vale economizar em móveis planejados?',
        r: 'Nas ferragens (dobradiças e corrediças), na qualidade da chapa e na fita de borda. São as partes que mais sofrem no dia a dia e as mais difíceis de trocar depois.',
      },
    ],
  },
  {
    slug: 'moveis-planejados-valorizam-o-imovel',
    titulo: 'Móveis planejados valorizam o imóvel?',
    descricao:
      'Quando os móveis sob medida ajudam a vender ou alugar um imóvel, quando não fazem diferença e como planejar pensando no futuro.',
    categoria: 'preco',
    data: DATA,
    capa: '/projetos/cozinha/cozinha-classica/02.jpg',
    capaAlt: 'Cozinha ampla planejada com ilha verde-água e mesa de vidro',
    ambiente: 'cozinha',
    faq: [
      {
        p: 'Móveis planejados aumentam o valor de venda da casa?',
        r: 'Cozinha, roupeiros e banheiros bem feitos costumam deixar o imóvel mais atrativo e ajudam a vender ou alugar mais rápido. Não existe um percentual fixo de valorização: depende do padrão do imóvel, do estado dos móveis e do gosto de quem compra.',
      },
      {
        p: 'Que móveis planejados mais ajudam na hora de vender?',
        r: 'Os que todo comprador precisa: cozinha, roupeiros e gabinetes de banheiro, em cores e linhas mais neutras e bem conservados.',
      },
    ],
  },

  // ─── Materiais ─────────────────────────────────────────
  {
    slug: 'mdf-ou-mdp',
    titulo: 'MDF ou MDP: qual a diferença e qual usar em cada ambiente',
    descricao:
      'Entenda de forma simples a diferença entre MDF e MDP, o que cada um faz bem, como se comportam com umidade, peso e cupim, e por que a MCB trabalha só com MDF.',
    categoria: 'materiais',
    data: DATA,
    capa: '/projetos/cozinha/cozinha-tons-neutros/01.jpg',
    capaAlt: 'Cozinha planejada em MDF com armários em tom neutro e nichos com vidro',
    ambiente: 'cozinha',
    faq: [
      {
        p: 'Qual a diferença entre MDF e MDP?',
        r: 'O MDF é feito de fibras de madeira bem finas prensadas com resina, e fica uma chapa homogênea por dentro. O MDP é feito de partículas de madeira em camadas: finas nas faces e mais grossas no miolo. O MDF aceita melhor usinagem, cantos arredondados, frisos e pintura.',
      },
      {
        p: 'MDF ou MDP para cozinha e banheiro?',
        r: 'Nenhum dos dois gosta de água parada. Em áreas úmidas o indicado é o MDF resistente à umidade (MDF RU), com todas as bordas bem fechadas por fita e vedação entre bancada e parede.',
      },
      {
        p: 'MDF ou MDP pega cupim?',
        r: 'Nenhuma chapa é totalmente imune, mas as de fabricantes sérios recebem tratamento e vêm de madeira de reflorestamento. O maior risco costuma ser um foco de cupim que já existe na casa, em madeiramento, rodapés ou batentes.',
      },
      {
        p: 'Qual material a Móveis Castelo Branco usa?',
        r: 'Nos móveis planejados, a MCB trabalha só com MDF de primeira linha.',
      },
    ],
  },
  {
    slug: 'moveis-de-mdf-no-banheiro-e-na-cozinha',
    titulo: 'Móveis de MDF no banheiro e na cozinha: como lidar com a umidade',
    descricao:
      'Por que o MDF estufa, o que é o MDF RU (resistente à umidade) e os cuidados de projeto e de uso que fazem o gabinete e a cozinha durarem muitos anos.',
    categoria: 'materiais',
    data: DATA,
    capa: '/projetos/banheiros/banheiro-moderno/02.jpg',
    capaAlt: 'Gabinete de banheiro suspenso em MDF com cuba esculpida',
    ambiente: 'banheiros',
    faq: [
      {
        p: 'Por que o móvel de MDF estufa?',
        r: 'Porque a água entra por onde a chapa está exposta: bordas sem fita, furos, cortes e emendas mal vedadas. Com a chapa bem protegida e sem água parada, o MDF dura muitos anos em banheiro e cozinha.',
      },
      {
        p: 'O que é MDF RU?',
        r: 'É o MDF resistente à umidade, geralmente com o miolo esverdeado. Ele absorve menos água que o MDF comum e é o indicado para gabinetes de banheiro e armários de pia. Ele é resistente à umidade, não à prova d’água.',
      },
      {
        p: 'Gabinete suspenso é melhor para banheiro?',
        r: 'Ajuda bastante: sem contato com o piso molhado, a base do móvel não fica exposta à água da limpeza e ainda facilita passar pano embaixo.',
      },
    ],
  },
  {
    slug: 'dobradicas-e-corredicas',
    titulo: 'Dobradiças e corrediças: o detalhe que decide quanto o móvel dura',
    descricao:
      'As ferragens são a parte que mais trabalha num móvel planejado. Veja os tipos de dobradiça e corrediça, o que é amortecimento, extração total e como cuidar.',
    categoria: 'materiais',
    data: DATA,
    capa: '/projetos/cozinha/cozinha-rustica-industrial/02.jpg',
    capaAlt: 'Armário despenseiro planejado com prateleiras deslizantes ao lado do cooktop',
    ambiente: 'cozinha',
    faq: [
      {
        p: 'O que é dobradiça com amortecimento?',
        r: 'É a dobradiça com um mecanismo que freia a porta no final do fechamento. A porta fecha devagar e sem bater, o que protege o móvel e diminui o barulho.',
      },
      {
        p: 'O que é corrediça de extração total?',
        r: 'É a corrediça que deixa a gaveta sair inteira para fora do móvel, para você enxergar e alcançar até o fundo. Nas gavetas de panelas e de despensa faz muita diferença.',
      },
      {
        p: 'Porta de armário desalinhada tem conserto?',
        r: 'Na maioria das vezes sim. As dobradiças de boa qualidade têm parafusos de regulagem de altura, profundidade e lateral, e um ajuste simples resolve.',
      },
    ],
  },

  // ─── Antes de contratar ────────────────────────────────
  {
    slug: 'planejado-modulado-ou-sob-medida',
    titulo: 'Móveis planejados, modulados ou sob medida: qual a diferença',
    descricao:
      'Modulado, planejado e sob medida parecem a mesma coisa, mas não são. Entenda o que cada um significa, prós e contras, e qual combina com a sua casa.',
    categoria: 'decisao',
    data: DATA,
    capa: '/projetos/cozinha/cozinha-industrial-moderna/01.jpg',
    capaAlt: 'Cozinha sob medida em cinza grafite com torre de fornos e ilha',
    ambiente: 'cozinha',
    faq: [
      {
        p: 'Qual a diferença entre móvel planejado e modulado?',
        r: 'O modulado vem em módulos de tamanhos fixos, fabricados em série, e você combina os que cabem no espaço. O planejado é desenhado para o ambiente e ocupa o espaço com mais precisão, sobrando menos vãos e arremates.',
      },
      {
        p: 'Móvel sob medida é a mesma coisa que planejado?',
        r: 'No dia a dia as palavras se misturam. Sob medida quer dizer que cada peça é fabricada na medida exata do ambiente, sem depender de módulos padrão. É assim que a Móveis Castelo Branco trabalha.',
      },
      {
        p: 'O que é mais barato: modulado ou planejado?',
        r: 'O modulado costuma ser mais barato porque é produzido em série e em medidas fixas. O sob medida aproveita melhor o espaço, permite escolher acabamentos e costuma durar mais, por isso o custo é outro.',
      },
    ],
  },
  {
    slug: 'marcenaria-ou-loja-de-planejados',
    titulo: 'Marcenaria ou loja de planejados: como decidir',
    descricao:
      'As diferenças reais entre contratar uma marcenaria com fábrica própria e uma loja de móveis planejados de franquia, sem torcida: projeto, fabricação, prazos, ajustes e atendimento.',
    categoria: 'decisao',
    data: DATA,
    capa: '/fotos/fachada-mcb.jpg',
    capaAlt: 'Fachada da fábrica da Móveis Castelo Branco em Três de Maio/RS',
    ambiente: null,
    faq: [
      {
        p: 'O que é melhor: marceneiro ou loja de móveis planejados?',
        r: 'Depende do que você valoriza. A loja de franquia oferece showroom e padrão da marca. A marcenaria com fábrica própria tem mais liberdade de medidas e acabamentos, fabrica perto e deixa você falar direto com quem produz e monta.',
      },
      {
        p: 'Marcenaria tem projeto 3D?',
        r: 'As marcenarias estruturadas, sim. Na Móveis Castelo Branco o projeto é feito por projetistas próprios, depois de visitas e medições no local, e aprovado com o cliente antes da produção.',
      },
    ],
  },
  {
    slug: 'como-escolher-uma-marcenaria',
    titulo: 'Como escolher uma marcenaria: perguntas para fazer antes de fechar',
    descricao:
      'Um roteiro prático para comparar marcenarias e lojas de planejados: material, ferragens, projeto, prazo, contrato, garantia e montagem.',
    categoria: 'decisao',
    data: DATA,
    capa: '/projetos/banheiros/banheiros-tons-claros/01.jpg',
    capaAlt: 'Detalhe de gabinete planejado com puxadores dourados e bancada em pedra',
    ambiente: null,
    faq: [
      {
        p: 'O que perguntar para uma marcenaria antes de fechar?',
        r: 'Qual chapa e espessura vai usar, quais ferragens, quem mede e quem monta, se o projeto é aprovado antes da produção, qual o prazo por escrito, como funciona a garantia e se dá para visitar a fábrica e ver trabalhos entregues.',
      },
      {
        p: 'Como saber se uma marcenaria é confiável?',
        r: 'Veja há quanto tempo ela existe, visite a fábrica, peça para ver projetos entregues e converse com clientes antigos. Endereço fixo, contrato claro e garantia por escrito também contam.',
      },
    ],
  },
  {
    slug: 'garantia-de-moveis-planejados',
    titulo: 'Garantia de móveis planejados: o que a lei diz e o que pedir no contrato',
    descricao:
      'A diferença entre a garantia legal do Código de Defesa do Consumidor e a garantia da empresa, o que costuma estar coberto e o que deve estar escrito no contrato.',
    categoria: 'decisao',
    data: DATA,
    capa: '/projetos/cozinha/cozinha-luxury/02.jpg',
    capaAlt: 'Cozinha planejada em U com LED sob os armários aéreos',
    ambiente: null,
    faq: [
      {
        p: 'Qual a garantia legal de um móvel planejado?',
        r: 'Pelo Código de Defesa do Consumidor, móveis são bens duráveis e têm 90 dias para reclamar de defeitos aparentes, contados da entrega. Em defeitos ocultos, o prazo começa a contar quando o problema aparece.',
      },
      {
        p: 'Garantia da empresa substitui a garantia da lei?',
        r: 'Não. A garantia contratual é um complemento da garantia legal e deve ser dada por escrito, dizendo o que cobre e por quanto tempo.',
      },
      {
        p: 'Qual a garantia da Móveis Castelo Branco?',
        r: 'A Móveis Castelo Branco oferece garantia vitalícia nos móveis que fabrica. As condições ficam descritas no contrato de cada projeto.',
      },
    ],
  },
  {
    slug: 'quanto-tempo-demora-moveis-planejados',
    titulo: 'Quanto tempo demora para fazer móveis planejados, etapa por etapa',
    descricao:
      'Do primeiro contato à montagem: as etapas de um projeto sob medida, o que faz o prazo variar e por que a medição final só acontece com a obra pronta.',
    categoria: 'decisao',
    data: DATA,
    capa: '/fotos/cozinha-ampla.jpg',
    capaAlt: 'Cozinha planejada ampla integrada com bancada e banquetas',
    ambiente: null,
    faq: [
      {
        p: 'Quanto tempo leva para fazer móveis planejados?',
        r: 'Depende do tamanho do projeto e da agenda da fábrica. O prazo de produção deve estar escrito no contrato, e ele só começa a correr depois do projeto aprovado e da medição final.',
      },
      {
        p: 'Quando devo chamar a marcenaria durante a obra?',
        r: 'O quanto antes, para planejar pontos elétricos e hidráulicos junto. Mas a medição final para produção deve ser feita com paredes, piso e revestimentos prontos.',
      },
    ],
  },
  {
    slug: 'financiamento-de-moveis-planejados',
    titulo: 'Financiamento de móveis planejados: como funciona',
    descricao:
      'As formas mais comuns de pagar um projeto sob medida, como comparar propostas de crédito pelo Custo Efetivo Total e o que a MCB oferece.',
    categoria: 'decisao',
    data: DATA,
    capa: '/projetos/cozinha/cozinha-classica/01.jpg',
    capaAlt: 'Cozinha clássica planejada com ilha verde-água',
    ambiente: null,
    faq: [
      {
        p: 'Dá para financiar móveis planejados?',
        r: 'Dá. Bancos e cooperativas têm linhas de crédito que podem ser usadas para móveis. Na Móveis Castelo Branco o financiamento é feito principalmente pelo Sicredi.',
      },
      {
        p: 'Como comparar propostas de financiamento?',
        r: 'Pelo Custo Efetivo Total (CET), que soma juros, tarifas, seguros e impostos. Ele mostra o custo real do crédito, bem melhor que olhar só a taxa de juros ou o valor da parcela.',
      },
    ],
  },

  // ─── Ideias por ambiente ───────────────────────────────
  {
    slug: 'roupeiro-planejado-para-quarto-pequeno',
    titulo: 'Roupeiro planejado para quarto pequeno: soluções que funcionam',
    descricao:
      'Porta de correr, roupeiro até o teto, em L, com espelho, cama com baú: ideias práticas para caber mais roupa em quarto pequeno sem apertar a circulação.',
    categoria: 'ambientes',
    data: DATA,
    capa: '/projetos/dormitorio/dormitorio-moderno-no-i/02.jpg',
    capaAlt: 'Quarto pequeno com roupeiro planejado do piso ao teto e cabeceira estofada',
    ambiente: 'dormitorio',
    faq: [
      {
        p: 'Porta de correr ou de abrir em quarto pequeno?',
        r: 'Se a distância entre o roupeiro e a cama é curta, a porta de correr costuma ser a melhor escolha, porque não precisa de espaço para abrir. Se há espaço livre na frente, a porta de abrir dá acesso ao roupeiro inteiro de uma vez.',
      },
      {
        p: 'Espelho na porta do roupeiro ajuda?',
        r: 'Ajuda duas vezes: dispensa um espelho de corpo inteiro na parede e dá sensação de amplitude ao quarto.',
      },
    ],
  },
  {
    slug: 'cozinha-com-fogao-a-lenha-e-churrasqueira',
    titulo: 'Cozinha com fogão a lenha e churrasqueira: como planejar os móveis',
    descricao:
      'O jeito gaúcho de cozinhar pede um projeto próprio. Distância do calor, bancadas, lugar para lenha e carvão, armários e ventilação: o que considerar.',
    categoria: 'ambientes',
    data: DATA,
    capa: '/projetos/cozinha/cozinha-rustica-industrial/01.jpg',
    capaAlt: 'Cozinha integrada planejada com mesa grande de madeira e armários grafite',
    ambiente: 'cozinha',
    faq: [
      {
        p: 'Pode ter móvel de MDF perto do fogão a lenha?',
        r: 'Pode, desde que o móvel não encoste nas partes quentes e respeite o afastamento indicado pelo fabricante do fogão. Nas laterais e em volta, o ideal é usar pedra, alvenaria ou outro material resistente ao calor como transição.',
      },
      {
        p: 'Que móveis colocar numa área de churrasqueira?',
        r: 'Bancada de apoio em pedra, cuba, gaveteiro para espetos e utensílios, armário para carvão e, se quiser, espaço ventilado para geladeira ou cervejeira. Em área aberta, proteger os móveis da chuva e do sol direto.',
      },
    ],
  },
  {
    slug: 'painel-de-tv-com-lareira',
    titulo: 'Painel de TV com lareira: materiais, calor e posição da TV',
    descricao:
      'Como planejar painel de TV e lareira na mesma parede: tipos de lareira, proteção contra calor, altura da TV e acabamentos que combinam.',
    categoria: 'ambientes',
    data: DATA,
    capa: '/fotos/sala-estar-lareira.jpg',
    capaAlt: 'Sala com painel de TV planejado e lareira embutida',
    ambiente: 'sala-de-estar',
    faq: [
      {
        p: 'Pode colocar TV em cima da lareira?',
        r: 'Pode, se o calor não chegar até a TV e a altura ficar confortável para assistir. Lareiras elétricas e ecológicas aquecem menos a parede, mas é preciso respeitar as distâncias do fabricante da lareira e da TV.',
      },
      {
        p: 'Painel de MDF pode ficar em volta da lareira?',
        r: 'Pode, com uma moldura de material resistente ao calor em volta da boca da lareira e o afastamento indicado pelo fabricante. O MDF não deve ficar em contato com superfícies quentes.',
      },
    ],
  },
  {
    slug: 'quarto-infantil-planejado',
    titulo: 'Quarto infantil planejado que acompanha o crescimento',
    descricao:
      'Do berço à adolescência sem trocar tudo: como planejar os móveis do quarto das crianças com segurança, espaço para brincar e peças que mudam de função.',
    categoria: 'ambientes',
    data: DATA,
    capa: '/projetos/dormitorio/dormitorio-infantil/02.jpg',
    capaAlt: 'Quarto infantil planejado com roupeiro de portas espelhadas e cabeceira estofada',
    ambiente: 'dormitorio',
    faq: [
      {
        p: 'Como fazer um quarto infantil que dure até a adolescência?',
        r: 'Invista nos móveis de base em cores neutras (roupeiro, cômoda, escrivaninha) e deixe o tema infantil em itens fáceis de trocar, como papel de parede, roupa de cama e puxadores.',
      },
      {
        p: 'Quais cuidados de segurança em móveis de quarto infantil?',
        r: 'Fixar na parede os móveis altos, evitar quinas vivas na altura da criança, usar travas em gavetas e portas quando ela é pequena e preferir puxadores sem pontas.',
      },
    ],
  },

  // ─── Cuidados ──────────────────────────────────────────
  {
    slug: 'como-limpar-moveis-planejados',
    titulo: 'Como limpar móveis planejados sem manchar',
    descricao:
      'O jeito certo de limpar MDF, alto brilho, laca e puxadores, os produtos que estragam o acabamento e os cuidados simples que fazem o móvel durar.',
    categoria: 'cuidados',
    data: DATA,
    capa: '/projetos/cozinha/cozinha-moderna-taj-mahal/02.jpg',
    capaAlt: 'Bancada de refeições planejada com banquetas estofadas',
    ambiente: null,
    faq: [
      {
        p: 'Qual o melhor produto para limpar móveis planejados?',
        r: 'Pano macio levemente úmido com água e um pouco de detergente neutro, e depois pano seco. É simples e não agride o acabamento.',
      },
      {
        p: 'Pode limpar móvel planejado com álcool?',
        r: 'Evite. Álcool, thinner, removedores, saponáceos e esponjas abrasivas podem manchar ou tirar o brilho do acabamento, principalmente em alto brilho e laca.',
      },
    ],
  },

  // ─── Lojas e empresas ──────────────────────────────────
  {
    slug: 'moveis-para-loja-de-roupas',
    titulo: 'Móveis para loja de roupas: o que planejar',
    descricao:
      'Araras, expositores, provador, balcão de caixa e estoque: como planejar os móveis de uma loja de moda para vender mais, com exemplos de lojas feitas pela MCB.',
    categoria: 'comercial',
    data: DATA,
    capa: '/projetos/corporativo/loja-le-cher/01.jpg',
    capaAlt: 'Loja de roupas com araras e mesa expositora planejadas',
    ambiente: 'corporativo',
    faq: [
      {
        p: 'Quais móveis uma loja de roupas precisa?',
        r: 'Araras e nichos de exposição, mesa ou ilha para peças dobradas, provador com espelho, balcão de caixa e um estoque organizado. O que muda é a proporção de cada um, conforme o tipo de roupa.',
      },
      {
        p: 'Vale fazer móveis sob medida para loja alugada?',
        r: 'Vale, se o projeto prever peças que possam ser desmontadas e levadas numa mudança. Isso deve ser combinado já no projeto.',
      },
    ],
  },
  {
    slug: 'moveis-para-padaria-e-cafe',
    titulo: 'Móveis para padaria e café: balcões, expositores e higiene',
    descricao:
      'Como planejar os móveis de uma padaria ou café: fluxo de atendimento, integração com vitrines e equipamentos, superfícies laváveis e o salão.',
    categoria: 'comercial',
    data: DATA,
    capa: '/projetos/corporativo/padaria-sao-francisco/02.jpg',
    capaAlt: 'Balcão e expositores planejados de padaria com vitrines',
    ambiente: 'corporativo',
    faq: [
      {
        p: 'Que cuidados de higiene os móveis de padaria precisam ter?',
        r: 'Nas áreas de manipulação de alimentos, a Anvisa (RDC 216/2004) pede superfícies lisas, impermeáveis e laváveis. No atendimento, balcões fáceis de limpar e sem frestas onde acumule sujeira.',
      },
      {
        p: 'O marceneiro precisa conhecer os equipamentos antes do projeto?',
        r: 'Sim. Vitrines refrigeradas, estufas, fornos e máquinas de café têm medidas e exigências de ventilação próprias, e o móvel precisa ser desenhado em volta deles.',
      },
    ],
  },
  {
    slug: 'moveis-para-consultorio-e-clinica',
    titulo: 'Móveis para consultório e clínica: recepção, sala de atendimento e arquivo',
    descricao:
      'Como planejar os móveis de consultórios e clínicas: balcão de recepção, mesa de atendimento, armários, acessibilidade e acabamentos fáceis de limpar.',
    categoria: 'comercial',
    data: DATA,
    capa: '/projetos/corporativo/consultorio/01.jpg',
    capaAlt: 'Consultório com mesa de atendimento e estante planejadas',
    ambiente: 'corporativo',
    faq: [
      {
        p: 'Quais móveis um consultório precisa?',
        r: 'Recepção com balcão, sala de espera, mesa de atendimento, armários para material e arquivo. Em clínicas de saúde, acabamentos lisos e fáceis de higienizar.',
      },
      {
        p: 'O balcão de recepção precisa ser acessível?',
        r: 'É recomendável ter um trecho de balcão rebaixado para atender pessoas em cadeira de rodas, seguindo a norma de acessibilidade NBR 9050.',
      },
    ],
  },
]

// ─── Para arquitetos ──────────────────────────────────
posts.push({
  slug: 'marcenaria-para-projetos-de-arquitetura',
  titulo: 'Marcenaria para projetos de arquitetura: o que avaliar antes de indicar ao cliente',
  descricao:
    'Para arquitetos e designers de interiores: como escolher a marcenaria que vai executar o seu projeto com fidelidade, do projeto detalhado à montagem.',
  categoria: 'arquitetos',
  data: DATA,
  capa: '/projetos/corporativo/escritorio-eme-arquitetura/01.jpg',
  capaAlt: 'Escritório de arquitetura com móveis sob medida produzidos pela Móveis Castelo Branco',
  ambiente: 'corporativo',
  faq: [
    {
      p: 'Como escolher uma marcenaria para executar um projeto de arquitetura?',
      r: 'Avalie se ela tem fábrica e montagem próprias, se executa o detalhamento com fidelidade, se tem histórico com projetos difíceis, proposta com material e ferragens especificados e respeito à autoria do projeto.',
    },
    {
      p: 'O que a marcenaria precisa receber do arquiteto?',
      r: 'O projeto detalhado: plantas, vistas, detalhamento de marcenaria e especificação de materiais, ferragens e acabamentos. É a partir dele que a marcenaria orça e executa.',
    },
  ],
})

export function getPost(slug) {
  return posts.find((p) => p.slug === slug) || null
}

export function postsDaCategoria(cat) {
  return posts.filter((p) => p.categoria === cat)
}

export function postsRelacionados(post, n = 3) {
  const mesma = posts.filter((p) => p.slug !== post.slug && p.categoria === post.categoria)
  const doAmbiente = posts.filter(
    (p) => p.slug !== post.slug && post.ambiente && p.ambiente === post.ambiente && !mesma.includes(p)
  )
  return [...mesma, ...doAmbiente, ...posts.filter((p) => p.slug !== post.slug)]
    .filter((p, i, arr) => arr.indexOf(p) === i)
    .slice(0, n)
}
