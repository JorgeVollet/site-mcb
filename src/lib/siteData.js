// Dados reais da Móveis Castelo Branco (extraídos do site original)

export const empresa = {
  nome: 'Móveis Castelo Branco',
  sigla: 'MCB',
  fundacao: 1989,
  fundador: 'Ademir Luís Noronha',
  cidade: 'Três de Maio',
  estado: 'RS',
  endereco: 'Rua São Pedro, 1120 — Bairro Castelo Branco, Três de Maio/RS',
  telefoneFixo: '(55) 3535-8677',
  email: 'ademirmcb@gmail.com',
  emailSecundario: 'luana_noronhamcb@hotmail.com',
}

// Contatos para o botão de WhatsApp (números sem máscara, com DDI 55)
export const contatos = [
  {
    nome: 'Ademir Noronha',
    cargo: 'Fundador',
    whatsapp: '5555996227124',
    whatsappLabel: '(55) 9 9622-7124',
  },
  {
    nome: 'Ana Laura',
    cargo: 'Projetista',
    whatsapp: '5555999942637',
    whatsappLabel: '(55) 9 9994-2637',
  },
  {
    nome: 'Lediomar',
    cargo: 'Projetista',
    whatsapp: '5555997238533',
    whatsappLabel: '(55) 9 9723-8533',
  },
]

export const ambientes = [
  {
    id: 'cozinha',
    nome: 'Cozinha',
    descricao: 'Cozinhas planejadas que unem funcionalidade e beleza, pensadas para o seu dia a dia.',
    icone: 'ChefHat',
  },
  {
    id: 'dormitorio',
    nome: 'Dormitório',
    descricao: 'Quartos sob medida com aproveitamento total do espaço e acabamento impecável.',
    icone: 'BedDouble',
  },
  {
    id: 'closet',
    nome: 'Closet',
    descricao: 'Closets organizados e elegantes, projetados para guardar tudo com estilo.',
    icone: 'Shirt',
  },
  {
    id: 'sala',
    nome: 'Sala de Estar',
    descricao: 'Painéis, racks e estantes que transformam a sala no coração da casa.',
    icone: 'Sofa',
  },
  {
    id: 'banheiro',
    nome: 'Banheiros',
    descricao: 'Gabinetes e armários sob medida resistentes à umidade, com design refinado.',
    icone: 'Bath',
  },
  {
    id: 'corporativo',
    nome: 'Corporativo',
    descricao: 'Móveis para empresas, lojas e escritórios que valorizam a sua marca.',
    icone: 'Building2',
  },
  {
    id: 'especiais',
    nome: 'Móveis Especiais',
    descricao: 'Aquela peça única que você sempre sonhou e nunca encontrou. A MCB faz.',
    icone: 'Sparkles',
  },
]

export const portfolio = [
  // Cozinhas
  { id: 1, titulo: 'Cozinha com ilha e bancada', categoria: 'cozinha', categoriaLabel: 'Cozinha', img: '/fotos/cozinha-ilha-bancada.jpg' },
  { id: 2, titulo: 'Cozinha clara integrada à sala', categoria: 'cozinha', categoriaLabel: 'Cozinha', img: '/fotos/cozinha-ilha-clara.jpg' },
  { id: 3, titulo: 'Cozinha branca com inox', categoria: 'cozinha', categoriaLabel: 'Cozinha', img: '/fotos/cozinha-branca-inox.jpg' },
  { id: 4, titulo: 'Cozinha rústica com banquetas', categoria: 'cozinha', categoriaLabel: 'Cozinha', img: '/fotos/cozinha-rustica-banquetas.jpg' },
  { id: 5, titulo: 'Cozinha escura moderna', categoria: 'cozinha', categoriaLabel: 'Cozinha', img: '/fotos/cozinha-escura-moderna.jpg' },
  { id: 6, titulo: 'Cozinha em madeira', categoria: 'cozinha', categoriaLabel: 'Cozinha', img: '/fotos/cozinha-rustica-madeira.jpg' },

  // Dormitórios
  { id: 7, titulo: 'Dormitório com cabeceira estofada', categoria: 'dormitorio', categoriaLabel: 'Dormitório', img: '/fotos/dormitorio-cabeceira.jpg' },
  { id: 8, titulo: 'Dormitório planejado', categoria: 'dormitorio', categoriaLabel: 'Dormitório', img: '/fotos/dormitorio-verde.jpg' },

  // Closets
  { id: 9, titulo: 'Closet com prateleiras', categoria: 'closet', categoriaLabel: 'Closet', img: '/fotos/closet-prateleiras.jpg' },
  { id: 10, titulo: 'Closet aramado organizado', categoria: 'closet', categoriaLabel: 'Closet', img: '/fotos/closet-aramado.jpg' },
  { id: 11, titulo: 'Closet de roupas', categoria: 'closet', categoriaLabel: 'Closet', img: '/fotos/closet-roupas.jpg' },

  // Salas de estar
  { id: 12, titulo: 'Sala com painel e lareira', categoria: 'sala', categoriaLabel: 'Sala de Estar', img: '/fotos/sala-painel-lareira.jpg' },
  { id: 13, titulo: 'Painel de TV com lareira embutida', categoria: 'sala', categoriaLabel: 'Sala de Estar', img: '/fotos/sala-estar-lareira.jpg' },
  { id: 14, titulo: 'Painel de TV rústico', categoria: 'sala', categoriaLabel: 'Sala de Estar', img: '/fotos/sala-painel-rustico.jpg' },

  // Banheiros
  { id: 15, titulo: 'Banheiro com bancada sob medida', categoria: 'banheiro', categoriaLabel: 'Banheiros', img: '/fotos/banheiro-bancada.jpg' },
  { id: 16, titulo: 'Gabinete de banheiro', categoria: 'banheiro', categoriaLabel: 'Banheiros', img: '/fotos/banheiro-gabinete.jpg' },

  // Corporativo
  { id: 17, titulo: 'Escritório / home office', categoria: 'corporativo', categoriaLabel: 'Corporativo', img: '/fotos/corporativo-escritorio.jpg' },
  { id: 18, titulo: 'Loja comercial planejada', categoria: 'corporativo', categoriaLabel: 'Corporativo', img: '/fotos/comercial-loja.jpg' },
  { id: 19, titulo: 'Boutique de roupas', categoria: 'corporativo', categoriaLabel: 'Corporativo', img: '/fotos/comercial-boutique.jpg' },
  { id: 20, titulo: 'Salão comercial amplo', categoria: 'corporativo', categoriaLabel: 'Corporativo', img: '/fotos/comercial-salao.jpg' },

  // Móveis especiais
  { id: 21, titulo: 'Divisória vazada decorativa', categoria: 'especiais', categoriaLabel: 'Móveis Especiais', img: '/fotos/moveis-especiais-divisoria.jpg' },
]

export const pilares = [
  {
    titulo: 'Perfeição',
    descricao: 'Peças exclusivas feitas sob medida de acordo com o seu gosto, nos mínimos detalhes.',
    icone: 'Target',
  },
  {
    titulo: 'Personalidade',
    descricao: 'Aquela área que você quer transformar ou o móvel que sempre sonhou? A MCB faz.',
    icone: 'Fingerprint',
  },
  {
    titulo: 'Qualidade',
    descricao: 'Com os melhores fornecedores, garantimos qualidade e durabilidade em cada produto.',
    icone: 'BadgeCheck',
  },
  {
    titulo: 'Modernidade',
    descricao: 'Designers ligados às tendências e a tudo que há de mais moderno em mobiliário.',
    icone: 'Lightbulb',
  },
]

export const depoimentos = [
  {
    nome: 'Cliente Residencial',
    local: 'Três de Maio/RS',
    texto:
      'Móveis impecáveis e exatamente como sonhei. O cuidado artesanal da Castelo Branco aparece em cada detalhe do acabamento.',
  },
  {
    nome: 'Cliente Corporativo',
    local: 'Região Noroeste/RS',
    texto:
      'Projetaram toda a nossa loja sob medida. Atendimento próximo, prazo cumprido e um resultado que valorizou demais a marca.',
  },
  {
    nome: 'Cliente Residencial',
    local: 'Três de Maio/RS',
    texto:
      'Confiar na MCB foi a melhor decisão. Transformaram um espaço difícil em algo funcional e lindo. Recomendo de olhos fechados.',
  },
]

// Estatísticas com count-up: numero = valor final, prefixo/sufixo opcionais.
// Quando "texto" é definido, mostra texto fixo (sem contador).
export const estatisticas = [
  { numero: 37, prefixo: '+', label: 'anos de história' },
  { numero: 100, sufixo: '%', label: 'sob medida' },
  { numero: 2500, prefixo: '+', label: 'projetos entregues' },
  { texto: 'Referência', label: 'em planejados na região' },
]
