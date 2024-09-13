import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from './utils/routes';
import { useContextGlobal } from './utils/global.context';
import styles from '../Styles/Footer.module.css';

const Footer = () => {
  const { state } = useContextGlobal();

  return (
    <footer className={`${styles.footer} ${styles[state.theme]}`}>
      <div className={styles.leftContent}>
        <p>Powered by</p>
        <Link to={routes.home}>
          <img className={styles.logoFooter} src="../public/images/DH.png" alt='DH-logo' />
        </Link>
      </div>
      
      <div className={styles.rightContent}>
        <a href='https://www.facebook.com'>
          <img className={styles.redesSociales} src={`../public/images/ico-facebook-${state.theme}.png`} alt='logotipo red social facebook' />
        </a>
        <a href='https://www.instagram.com'>
          <img className={styles.redesSociales} src={`../public/images/ico-instagram-${state.theme}.png`} alt='logotipo red social instagram' />
        </a>
        <a href='https://www.tiktok.com'>
          <img className={styles.redesSociales} src={`../public/images/ico-tiktok-${state.theme}.png`} alt='logotipo red social tiktok' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
