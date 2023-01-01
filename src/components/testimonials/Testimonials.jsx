import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/client_avatar1.png'
import AVTR2 from '../../assets/client_avatar2.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Emna KHAIRALLAH',
    review: 'If you have the opportunity to work with Houssem, I say go for it! You are guaranteed an enjoyable and productive experience. Houssem is skilled at what he/she does and we look forward to working with Houssem again for our next Devops project!'
  },
  {
    avatar: AVTR2,
    name: 'Malek MANSAR',
    review: 'If you have the opportunity to work with Houssem, I say go for it! You are guaranteed an enjoyable and productive experience. Houssem is skilled at what he/she does and we look forward to working with Houssem again for our next Devops project!'
  },
  {
    avatar: AVTR2,
    name: 'Nader FADHEL',
    review: 'If you have the opportunity to work with Houssem, I say go for it! You are guaranteed an enjoyable and productive experience. Houssem is skilled at what he/she does and we look forward to working with Houssem again for our next Devops project!'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials-container'
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client_avatar'>
                  <img src={avatar} alt="One" />
                </div>
                <h5 className='client_name'>{name}</h5>
                <small className='client_review'>{review}</small>

              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials