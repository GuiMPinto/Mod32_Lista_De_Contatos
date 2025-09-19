import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { alteraFiltro } from '../../store/reducers/filtroReducers'
import * as enums from '../../utils/enums/enumTarefas'
import { RootReducer } from '../../store'
import tarefaModels from '../../models/tarefaModels'

// Criado o tipo 'PropsFiltroTarefas'
export type PropsFiltroTarefas = {
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const FiltroCard = ({ legenda, criterio, valor }: PropsFiltroTarefas) => {
  const dispatch = useDispatch()
  const { filtroReducers, tarefasReducers } = useSelector(
    (state: RootReducer) => state
  )

  const verificarEstadoAtivo = () => {
    const mesmoCriterio = filtroReducers.criterio === criterio
    const mesmoValor = filtroReducers.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contarTarefa = () => {
    if (criterio === 'todas') return tarefasReducers.itens.length
    if (criterio === 'prioridade') {
      return tarefasReducers.itens.filter(
        (item) => item.prioridadeModels === valor
      ).length
    }
    if (criterio === 'status') {
      return tarefasReducers.itens.filter((item) => item.statusModels === valor)
        .length
    }
  }
  const ativo = verificarEstadoAtivo()
  const contador = contarTarefa()

  const filtrar = () => {
    dispatch(
      alteraFiltro({
        criterio,
        valor
      })
    )
  }

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
