import { useState } from 'react'
import { Link } from 'react-router-dom';
import './style.css'

function Menu() {

    return (
        <nav className="c-menu">
          <Link to="/">home</Link>
          <Link to="/usuarios">Usuario</Link>
          <Link to="/buscador">Buscador</Link>
          <Link to="/personajes">Personajes</Link>
          <Link to="/favoritos">Favoritos</Link>
          <Link to="/original">Original</Link>
        </nav>
    )
}

export default Menu