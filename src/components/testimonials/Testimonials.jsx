import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar_1.jpeg'
import AVTR2 from '../../assets/avatar_2.jpeg'
import AVTR3 from '../../assets/avatar_3.jpeg'


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla maiores eius amet necessitatibus molestias sequi totam officiis? Atque, quasi reprehenderit impedit nulla modi illum, dolorum pariatur distinctio nesciunt eaque labore.
          </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="" />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla maiores eius amet necessitatibus molestias sequi totam officiis? Atque, quasi reprehenderit impedit nulla modi illum, dolorum pariatur distinctio nesciunt eaque labore.
          </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="" />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla maiores eius amet necessitatibus molestias sequi totam officiis? Atque, quasi reprehenderit impedit nulla modi illum, dolorum pariatur distinctio nesciunt eaque labore.
          </small>
        </article>

      </div>
    </section>
  )
}

export default Testimonials
