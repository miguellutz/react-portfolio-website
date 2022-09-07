import React from 'react'
import './about.css'
import {FiAward} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {BsFolder2Open} from 'react-icons/bs'

import Me from '../../assets/Profile_Foto.png'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FiAward className='about-icon'/>
              <h5>Experience</h5>
              <small>2+ Years Professional Experience</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about-icon'/>
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>

            <article className='about__card'>
              <BsFolder2Open className='about-icon'/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium, rerum sed alias nesciunt suscipit hic enim,
            veniam accusamus dicta ullam molestias beatae incidunt quia.
            Distinctio in quis quisquam repellat! Corporis!
          </p>


          <a href="#contact" className='btn btn-primary'></a>
        </div>
      </div>
    </section>
  )
}

export default About
