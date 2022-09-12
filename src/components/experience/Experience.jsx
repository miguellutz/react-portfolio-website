import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__webdev">
          <h3>Full Stack Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>Ruby</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>SASS</h4>
              <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div>

        {/* Corporate Development */}

        <div className="experience__corpdev">
          <h3>Corporate Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Figma</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Corporate Branding</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Agile</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Scrum</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
