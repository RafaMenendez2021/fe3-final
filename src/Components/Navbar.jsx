import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from './utils/routes';
import { useContextGlobal } from './utils/global.context'; 
import styles from '../Styles/Navbar.module.css';

const Navbar = () => {
  const { state, toggleTheme, getThemeClass } = useContextGlobal();

  const themeIcon = state.theme === 'light' ? '🌙' : '☀️';

  return (
    <nav className={`${styles.navbar} ${styles[getThemeClass()]}`}>
      <div className={styles.logoContent}>
        <Link to={routes.home}>
          <img
            className={`${styles.logo} ${styles[getThemeClass()]}`}
            // Cambiar ruta para que sea estática, desde la raíz
            src={`/images/DH-odonto-${state.theme}.png`}
            alt="Logotipo clinica odontologica"
          />
        </Link>
      </div>
      <div className={styles.optionContent}>
        <Link to={routes.home} className={`${styles.h4} ${styles[getThemeClass()]}`}>
          <h4>Home</h4>
        </Link>
        <Link to={routes.favs} className={`${styles.h4} ${styles[getThemeClass()]}`}>
          <h4>Favoritos</h4>
        </Link>
        <Link to={routes.contact} className={`${styles.h4} ${styles[getThemeClass()]}`}>
          <h4>Contacto</h4>
        </Link>
        <button className={`${styles.button} ${styles[getThemeClass()]}`} onClick={toggleTheme}>
          {themeIcon}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
