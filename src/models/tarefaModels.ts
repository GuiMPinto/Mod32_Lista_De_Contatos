import * as enums from '../utils/enums/enumTarefas'

class tarefaModels {
  tituloModels: string
  prioridadeModels: enums.Prioridade
  statusModels: enums.Status
  descricaoModels: string
  idModels: number

  constructor(
    tituloModels: string,
    prioridadeModels: enums.Prioridade,
    statusModels: enums.Status,
    descricaoModels: string,
    idModels: number
  ) {
    this.tituloModels = tituloModels
    this.prioridadeModels = prioridadeModels
    this.statusModels = statusModels
    this.descricaoModels = descricaoModels
    this.idModels = idModels
  }
}

export default tarefaModels
