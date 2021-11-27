export interface Campanha{
  id?: number,
  nome: string,
  objetivo: string,
  dataInicio: Date,
  dataFinal: Date,
  cicloPagamento: string,
  diaSemana: string,
  primeiroPagamento: Date,
  meta: boolean,
  tipoMeta?: string,
  formaPagamento: string,
  aceiteApp: boolean,
  tipoMecanica: string,
  formaApuracao: string
  lojas?: []
}