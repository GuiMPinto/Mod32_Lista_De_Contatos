/* CREATE SLICE é a criação do REDUCER e da ACTION a mesmo tempo. Sem o
CREATE SLICE é necessário criar um identifcador para cada ACTION. Ele cria as
ACTIONs e os reducers dos componentes

Uma função REDUCER é disparado por uma ACTION que é um objeto TYPESCRIPT ou
JAVASCRIPT. Uma ACTION representa uma ação que o usuário pode fazer ou disparar.
Dizemos que o usuário fez um 'dispatcher' */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import tarefaModels from '../../models/tarefaModels'

type TarefaState = {
  itens: tarefaModels[]
}

const initialState: TarefaState = {
  itens: [
    {
      idModels: 1,
      emailModels: 'guipinto@admim.com',
      numeroModels: '3197888811',
      nomeModels: 'Guilherme Pinto'
    },
    {
      idModels: 2,
      emailModels: 'mulhermaravilha@dc.com',
      numeroModels: '3197888821',
      nomeModels: 'Diana de Themísera'
    },
    {
      idModels: 3,
      emailModels: 'mulhergato@dc.com',
      numeroModels: '3197888411',
      nomeModels: 'Selina kaiu'
    }
  ]
}

/* Antes do uso do CREATESLICE todo o objeto era retornado. Agora apenas os atributos desejados são retornados */
const tarefasSlice = createSlice({
  //Nome Reducer
  name: 'tarefas',
  initialState, // = initialState: initialState,

  /* Os reducers. Tem o geral ( Use Reducer ) que monitor todas as ACTIONS e um REDUCER
  para cada componente

  Será colocada dentro do escopo deste código:  reducers: {} as ACTIONS que alterarão os reducers*/
  reducers: {
    //função que remove uma tarefa. Cada proriedade do reducer é uma função
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (tarefa) => tarefa.idModels !== action.payload
      )
    },
    editar: (state, action: PayloadAction<tarefaModels>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.idModels === action.payload.idModels
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<tarefaModels>) => {
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.nomeModels.toLowerCase() ===
          action.payload.nomeModels.toLowerCase()
      )
      if (tarefaJaExiste) {
        alert('Já existe uma tarefa com esse nome')
      } else {
        state.itens.push(action.payload)
      }
    } // reducer:{
  }
})

export default tarefasSlice.reducer

export const { remover, editar, cadastrar } = tarefasSlice.actions
