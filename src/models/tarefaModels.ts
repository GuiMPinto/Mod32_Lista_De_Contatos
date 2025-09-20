class tarefaModels {
  nomeModels: string
  emailModels: string
  numeroModels: string
  idModels: number

  constructor(
    nomeModels: string,
    emailModels: string,
    numeroModels: string,
    idModels: number
  ) {
    this.nomeModels = nomeModels
    this.emailModels = emailModels
    this.numeroModels = numeroModels
    this.idModels = idModels
  }
}

export default tarefaModels
