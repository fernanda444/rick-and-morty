import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usuario from './componentes/usuario'
import Buscador from './componentes/buscador'
import Favoritos from './componentes/favoritos'
import Home from './componentes/home'
import Original from './componentes/original'
import Personajes from './componentes/personajes'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './componentes/menu'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <Menu />
      <Routes>
        <Route path="/usuarios" element={<Usuario/>} />
        <Route path="/buscador" element={<Buscador />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/" element={<Home />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/original" element={<Original />} />
        
      </Routes>
    </Router>


    </>
  )
}

export default App
