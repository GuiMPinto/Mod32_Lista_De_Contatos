import * as enums from '../utils/enums/enumTarefas'

class tarefaModels {
  nomeModels: string
  prioridadeModels: enums.Prioridade
  statusModels: enums.Status
  emailModels: string
  idModels: number

  constructor(
    nomeModels: string,
    prioridadeModels: enums.Prioridade,
    statusModels: enums.Status,
    emailModels: string,
    idModels: number
  ) {
    this.nomeModels = nomeModels
    this.prioridadeModels = prioridadeModels
    this.statusModels = statusModels
    this.emailModels = emailModels
    this.idModels = idModels
  }
}

export default tarefaModels
