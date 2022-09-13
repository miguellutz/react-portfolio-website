import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/klikmeet.png'
import IMG2 from '../../assets/rheingassi.png'
import IMG3 from '../../assets/landing.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Klikmeet Website',
    github: 'https://github.com',
    demo: 'https://miguellutz3108.wixsite.com/website'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Rheingassi Website',
    github: 'https://github.com',
    demo: 'https://www.rheingassi.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Figma Dashboard UI kit',
    github: 'https://github.com',
    demo: 'https://www.figma.com'
  }
]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

      {
        data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                <a href={demo} className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
              </div>
            </article>
          )
        })
      }

      </div>
    </section>
  )
}

export default Portfolio
