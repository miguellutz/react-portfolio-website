import React from 'react'
import './footer.css'

import Logo from '../../assets/Klikmeet_Logo_3.png'

import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiPolywork} from 'react-icons/si'



const Footer = () => {
  return (
    <footer>
      <a href="/" className='footer__logo'><img src={Logo} alt="Klikmeet Logo" /></a>

      <ul className='permalinks'>
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/miguellutz"><BsLinkedin /></a>
        <a href="https://github.com/miguellutz"><BsGithub /></a>
        <a href="https://troopl.com/miguellutz"><SiPolywork /></a>
      </div>

      <div className="footer__copyright">
        <small><small className='footer__copyright-logo'>&copy;</small> Klikmeet Web Development. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
