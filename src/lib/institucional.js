// Textos das páginas institucionais: Como funciona e Perguntas frequentes.
// Fatos confirmados pelo Jorge/Ademir (30/09/2026):
// - nunca dar preço; cada projeto tem preço único
// - só MDF de primeira linha nos planejados
// - garantia vitalícia
// - várias visitas e medições, projeto feito por projetistas próprios
// - financiamento, principalmente Sicredi
// - segunda a sexta, 8h às 18h; não abre sábado

import { empresa, cidadesAtendidas } from './siteData'
import { agendaFechada, DATA_LIMITE_TEXTO, DATA_REABERTURA_TEXTO } from './agenda'

export const etapas = [
  {
    titulo: 'Primeiro contato',
    texto:
      'Você conta o que precisa pelo WhatsApp, telefone ou formulário: quais ambientes, o estilo que gosta, fotos de referência. Se tiver planta ou projeto de arquiteto, melhor ainda.',
  },
  {
    titulo: 'Visitas e medições',
    texto:
      'Nossa equipe vai até o local quantas vezes forem necessárias para medir cada parede, conferir esquadros, pé-direito, janelas e pontos de luz, água e gás.',
  },
  {
    titulo: 'Projeto',
    texto:
      'Os projetistas da MCB desenham os móveis com você: fachada, divisão interna, materiais, acabamentos, ferragens e iluminação.',
  },
  {
    titulo: 'Ajustes e orçamento',
    texto:
      'Você revisa o projeto, pede mudanças e tira dúvidas. O orçamento é feito em cima do seu projeto. O preço é único, porque o móvel é feito para a sua casa.',
  },
  {
    titulo: 'Contrato e pagamento',
    texto:
      'Projeto aprovado, tudo vai para o contrato: móveis, materiais, valores, prazo e garantia. Trabalhamos com financiamento, principalmente pelo Sicredi.',
  },
  {
    titulo: 'Medição final e produção',
    texto:
      'Com a obra pronta, fazemos a medição final e os móveis são produzidos na nossa fábrica em Três de Maio, em MDF de primeira linha.',
  },
  {
    titulo: 'Entrega e montagem',
    texto:
      'A montagem é feita pela nossa equipe própria e especializada: móveis instalados, nivelados e ajustados nos mínimos detalhes, e tudo conferido com você.',
  },
  {
    titulo: 'Garantia vitalícia',
    texto:
      'Os móveis que fabricamos têm garantia vitalícia, e a gente continua por perto para o que você precisar.',
  },
]

export function perguntasFrequentes() {
  const lista = [
    {
      p: 'Quanto custam os móveis planejados da Móveis Castelo Branco?',
      r: 'Não trabalhamos com preço de tabela. Cada projeto tem um preço único, que depende das medidas, dos materiais, das ferragens e dos acabamentos. O orçamento é feito depois das visitas, da medição e do projeto.',
    },
    {
      p: 'Como funciona o orçamento?',
      r: 'Você entra em contato, nossa equipe faz visitas e medições no local, os projetistas desenham os móveis e o orçamento é feito em cima desse projeto, que pode ser ajustado com você.',
    },
    {
      p: 'Vocês fazem o projeto dos móveis?',
      r: 'Sim. A MCB tem projetistas próprios, que desenham cada ambiente depois das visitas e medições. Também executamos projetos de arquitetos e designers de interiores, inclusive os mais desafiadores.',
    },
    {
      p: 'Quem faz a montagem dos móveis?',
      r: 'A nossa equipe própria e especializada. O móvel é entregue montado, nivelado e ajustado nos mínimos detalhes.',
    },
    {
      p: 'Qual material vocês usam?',
      r: 'Nos móveis planejados trabalhamos só com MDF de primeira linha. Em áreas úmidas, como banheiro e pia da cozinha, usamos MDF resistente à umidade.',
    },
    {
      p: 'Qual a garantia dos móveis?',
      r: 'Os móveis fabricados pela Móveis Castelo Branco têm garantia vitalícia, com as condições descritas no contrato de cada projeto.',
    },
    {
      p: 'Vocês atendem a minha cidade?',
      r: `A MCB fica em ${empresa.cidade}/${empresa.estado} e atende a região num raio de cerca de ${empresa.raioKm} km, incluindo ${cidadesAtendidas
        .slice(1, 9)
        .join(', ')} e outras cidades do noroeste gaúcho.`,
    },
    {
      p: 'Quanto tempo demora para ficar pronto?',
      r: 'Depende do tamanho do projeto e da agenda da fábrica. O prazo de produção fica escrito no contrato e começa a contar depois do projeto aprovado e da medição final, feita com a obra pronta.',
    },
    {
      p: 'Vocês trabalham com financiamento?',
      r: 'Sim, principalmente pelo Sicredi. As condições são conversadas no orçamento de cada projeto.',
    },
    {
      p: 'Qual o horário de atendimento?',
      r: `${empresa.horario}. Não abrimos aos sábados. Pelo WhatsApp você pode mandar mensagem a qualquer hora e respondemos no horário de atendimento.`,
    },
    {
      p: 'Vocês fazem móveis para empresas?',
      r: 'Fazemos. Já produzimos móveis para lojas de roupas, padaria, chopperia, consultório e escritórios.',
    },
    {
      p: 'Vocês trabalham com arquitetos?',
      r: 'Sim. Executamos projetos de arquitetos e designers de interiores com fidelidade ao desenho, com projetistas que conversam com o escritório sobre os detalhes técnicos e montagem com equipe própria.',
    },
    {
      p: 'Quando devo chamar a marcenaria durante a obra?',
      r: 'O quanto antes, para planejar tomadas, iluminação, água e gás junto com os móveis. A medição final para a produção é feita com paredes, piso e revestimentos prontos.',
    },
  ]

  if (agendaFechada()) {
    lista.splice(7, 0, {
      p: 'A agenda de vocês está aberta?',
      r: `Nossa agenda de produção está completa até ${DATA_LIMITE_TEXTO}. Novas produções serão agendadas a partir de ${DATA_REABERTURA_TEXTO}, e já dá para começar a planejar o seu projeto agora.`,
    })
  }
  return lista
}
