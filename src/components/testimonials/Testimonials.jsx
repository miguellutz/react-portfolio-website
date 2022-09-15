import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar_1.jpeg'
import AVTR2 from '../../assets/avatar_2.jpeg'
import AVTR3 from '../../assets/avatar_3.jpeg'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar: AVTR1,
    name: 'Nick Blaker',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam officia aliquid itaque nesciunt, deleniti cupiditate, ut magni fuga in, distinctio beatae commodi reprehenderit. Commodi expedita optio praesentium perferendis! Optio, hic?'
  },
  {
    avatar: AVTR2,
    name: 'Josh Richards',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam officia aliquid itaque nesciunt, deleniti cupiditate, ut magni fuga in, distinctio beatae commodi reprehenderit. Commodi expedita optio praesentium perferendis! Optio, hic?'
  },
  {
    avatar: AVTR3,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam officia aliquid itaque nesciunt, deleniti cupiditate, ut magni fuga in, distinctio beatae commodi reprehenderit. Commodi expedita optio praesentium perferendis! Optio, hic?'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
