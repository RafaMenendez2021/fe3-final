import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from './utils/routes'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    /* Links correspondientes a las rutas definidas */
    <nav className="navbar">
      <div className='logo-content'>
        <Link to ={routes.home}>
          <img className='logo'
            src="../public/images/DH-odonto.png"
            alt="Logotipo clinica odontologica" />
        </Link>
      </div>
      <div className='option-content'>
        <Link to ={routes.home}>
          <h4>Home</h4>
        </Link>
        <Link to ={routes.favs}>
          <h4>Favoritos</h4>
        </Link>
        <Link to = {routes.contact}>
          <h4>Contacto</h4>
        </Link>
        <button >Change theme</button>
      </div>
    </nav>
  )
}

export default Navbar