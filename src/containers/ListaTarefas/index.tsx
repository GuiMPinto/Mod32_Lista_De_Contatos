import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Tarefa from '../../components/Tarefa'
import { MainContainer, Titulo } from '../../styles'

const ListaTarefas = () => {
  //const tarefas = useSelector((state: RootReducer) => state.tarefasReducers)
  const { itens } = useSelector((state: RootReducer) => state.tarefasReducers)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) =>
      state.filtroReducers /* Monitorando os possiveis estatos(states)
     do filtroReducers */
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens

    //termo !== undefined . Evita de ter o valor falso se a string estiver vazia
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.nomeModels.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      return tarefasFiltradas
    } else {
      return itens
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''

    const complementacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} Contato(s) ${complementacao}`
    } else {
      mensagem = `${quantidade} Contato(s) ${complementacao}`
    }
    return mensagem
  }
  const tarefasExibidas = filtraTarefas()
  const mensagem = exibeResultadoFiltragem(tarefasExibidas.length)

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {
          tarefasExibidas.map(
            (t) => (
              <li key={t.nomeModels}>
                <Tarefa
                  emailModels={t.emailModels}
                  nomeModels={t.nomeModels}
                  numeroModels={t.numeroModels}
                  idModels={t.idModels}
                />
              </li>
            ) /* => (*/
          ) /* .map ( */
        }
      </ul>
    </MainContainer>
  )
} // const ListaTarefas = () => {

export default ListaTarefas
