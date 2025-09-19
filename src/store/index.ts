// { configureStore } : configura uma ACTION que é um objeto do JavaScript ou TypeScript
import { configureStore } from '@reduxjs/toolkit'

import reducersTarefas from '../store/reducers/tarefasReducers'
import reducersFiltros from './reducers/filtroReducers'

/* Recebe um objeto */
const store = configureStore({
  reducer: {
    tarefasReducers: reducersTarefas, // Um STATE
    filtroReducers: reducersFiltros // Um STATE
  }
})

/* Usaremos qundo for usar o 'useSelector'. Este é usado para acessar um dado no Reducer.
O 'Reducer' monitora todas as ACTIONS. O ROOTREDUCER usa o USEREDUCER, este compartilha o
estado atual ( STATE ) com todos os componenetes através do USESELECTOR. USESELECTOR o HOOK
para selecionar e o USEDISPATCHER para alterar */
export type RootReducer = ReturnType<typeof store.getState>

export default store
