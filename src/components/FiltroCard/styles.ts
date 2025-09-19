import styled from 'styled-components'

// type criado herda o type PropsFiltroTarefas do index.tsx porém sem os atributos
// 'contador' e 'legenda'. Pois estes atributos não serão usados neste arquivo
type PropsAtivo = {
  ativo: boolean
}

/* Será  passado uma PROPS para mudar as propriedades 'border' e 'color'.
  PROPS é uma propriedade passada de um componente Pai para um componente Filho.
  PROPS é um atributo de um componete. Atribuido na prática em uma tag */
export const Card = styled.div<PropsAtivo>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1e90ff' : '#a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#1e90ff' : '#5e5e5e')};
  border-radius: 8px;
  cursor: pointer;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`
export const Label = styled.span`
  font-size: 14px;
`
