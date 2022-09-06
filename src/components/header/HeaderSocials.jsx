import React from 'react'
import {BsLinkedin} from 'react-icons/bs' /* import React icons */
import {BsGithub} from 'react-icons/bs'
import {AiFillProject} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com/in/miguellutz" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/miguellutz" target="_blank" rel="noreferrer"><BsGithub /></a>
      <a href="https://troopl.com" target="_blank" rel="noreferrer"><AiFillProject /></a>
    </div>
  )
}

export default HeaderSocials
