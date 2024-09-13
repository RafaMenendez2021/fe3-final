import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from './utils/routes';
import { useContextGlobal } from './utils/global.context'; 
import styles from '../Styles/Navbar.module.css';

const Navbar = () => {
  const { state, toggleTheme } = useContextGlobal(); 

  const themeIcon = state.theme === 'light' ? '🌙' : '☀️';

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContent}>
        <Link to={routes.home}>
          <img className={styles.logo}
            src={`../public/images/${state.theme}/DH-odonto.png`}
            alt="Logotipo clinica odontologica" />
        </Link>
      </div>
      <div className={styles.optionContent}>
        <Link to={routes.home} className={styles.h4}>
          <h4>Home</h4>
        </Link>
        <Link to={routes.favs} className={styles.h4}>
          <h4>Favoritos</h4>
        </Link>
        <Link to={routes.contact} className={styles.h4}>
          <h4>Contacto</h4>
        </Link>
        {/* Botón para cambiar el tema con el emoji correspondiente */}
        <button className={styles.button} onClick={toggleTheme}>
          {themeIcon} {/* Muestra ☀️ o 🌙 según el tema */}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
