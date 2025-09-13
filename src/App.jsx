import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import Listagem from './pages/listagem'
import Cadastro from './pages/cadastro'
import CadastroAtividades from './pages/CadastroAtividades'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/listagem' element={<Listagem />}></Route>
        <Route path='/cadastro' element={<Cadastro />}></Route>
        <Route path='/cadastroAtividades' element={<CadastroAtividades />}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
