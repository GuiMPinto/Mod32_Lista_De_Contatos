import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux' // HOOK usado para de ACTION

import * as S from './styles'
//import * as enums from '../../utils/enums/enumTarefas'
import {
  remover,
  editar
} from '../../store/reducers/tarefasReducers' /* Importando a função que remover uma ACTION */
import tarefaModels from '../../models/tarefaModels'
import { BotaoSalvar } from '../../styles'

type PropsTarefas = tarefaModels
const Tarefa = ({
  nomeModels,
  emailModels,
  numeroModels,
  idModels
}: PropsTarefas) => {
  const dispatch = useDispatch() // HOOK que altera a ACTION

  /* O uso de USESTATE é feito com 2 parâmetros o 'valor' e a 'função que configura este valor' */
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState(' ')
  const [nome, mudarNome] = useState(' ')
  const [numeroTelefone, mudarNumero] = useState(' ')

  /*o USE EFFECT dispara uma função apenas na condição do If */
  useEffect(() => {
    if (emailModels.length > 0) {
      setDescricao(emailModels)
    }
    if (nomeModels.length > 0) {
      mudarNome(nomeModels)
    }
    if (nomeModels.length > 0) {
      mudarNumero(numeroModels)
    }
  }, [emailModels, nomeModels, numeroModels])

  function cancelerEdicao() {
    setEstaEditando(false)
    setDescricao(emailModels)
    mudarNome(nomeModels)
  }

  return (
    <S.Card>
      <S.Titulo>NOME </S.Titulo>
      {/* Equivalente ao <textarea ></textarea> */}
      <S.Descricao
        disabled={!estaEditando}
        value={nome}
        onChange={(evento) => mudarNome(evento.target.value)}
      />

      <S.Titulo>E-MAIL </S.Titulo>
      {/* Equivalente ao <textarea ></textarea> */}
      <S.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      />

      <S.Titulo>TELEFONE </S.Titulo>
      {/* Equivalente ao <textarea ></textarea> */}
      <S.Descricao
        disabled={!estaEditando}
        value={numeroTelefone}
        onChange={(evento) => mudarNumero(evento.target.value)}
      />

      <S.BarraAcao>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nomeModels,

                    emailModels,
                    numeroModels,
                    idModels
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelerEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(idModels))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcao>
    </S.Card>
  )
}

export default Tarefa
