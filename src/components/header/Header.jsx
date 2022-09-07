import React from 'react'
import './header.css'
import CTA from './CTA-buttons'
import ME from '../../assets/Profile_Foto.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container" /* BEM naming convention */>
        <h5>Hello, I am</h5>
        <h1>Miguel Lutz</h1>
        <h5 className="text-light">Fullstack Developer from Cologne, Germany</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
