import React from 'react'
import { Link } from 'react-router-dom'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    /* Links correspondientes a las rutas definidas */
    <nav className="navbar">
      <Link to ="/">
        <img className='logo'
          src="../public/images/DH-odonto.png"
          alt="Logotipo clinica odontologica" />
      </Link>
      <Link to ="/">
        <h4>Home</h4>
      </Link>
      <Link to ="/favs">
        <h4>Favoritos</h4>
      </Link>
      <Link to ="/contact">
        <h4>Contacto</h4>
      </Link>
      
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar