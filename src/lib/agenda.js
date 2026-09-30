// Agenda de produção. Usado pelo pop-up (AvisoAgenda) e pelos textos do site.
// Depois da data, o pop-up e os avisos somem sozinhos.
export const AGENDA_FECHADA_ATE = new Date('2027-03-30T23:59:59-03:00')
export const DATA_LIMITE_TEXTO = '30 de março de 2027'
export const DATA_REABERTURA_TEXTO = '31 de março de 2027'

export const agendaFechada = () => new Date() <= AGENDA_FECHADA_ATE
