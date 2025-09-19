/* CREATEBROWSERROUTER = Lugar onde vai ser configurada as páginas e o roteamento da aplicação */
/* ROUTERPROVIDER = O componente que vai gerenciar a aplicação */
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import EstiloGlobal, { Container } from './styles'
import { Provider } from 'react-redux'
import store from './store'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

const rotas = createBrowserRouter([
  {
    path: '/' /* propriedade que indiica um caminho. Ao encontrar o '/' algum elemento será renderizado */,
    element: <Home /> /* Elemento a ser renderizado */
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
