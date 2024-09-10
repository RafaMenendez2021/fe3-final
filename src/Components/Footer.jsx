import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from './utils/routes'

const Footer = () => {
  return (
  <footer className='footer'>
    <div className='left-content'>
      <p>Powered by</p>
      <Link to={routes.home}>
        <img className='logoFooter' src="../public/images/DH.png" alt='DH-logo' />
      </Link>
    </div>
    
    <div className='right-content'>
      <a href='https://www.facebook.com'>
        <img className='redesSociales' src="../public/images/ico-facebook.png" alt='logotipo red social facebook' />
      </a>
      <a href='https://www.instagram.com'>
        <img className='redesSociales' src="../public/images/ico-instagram.png" alt='logotipo red social instagram' />
      </a>
      <a href='https://www.tiktok.com'>
        <img className='redesSociales' src="../public/images/ico-tiktok.png" alt='logotipo red social tiktok' />
      </a>
    </div>
  </footer>

  )
}

export default Footer
