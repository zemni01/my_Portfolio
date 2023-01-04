import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/photo-removebg.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='header'>
      <div className="container header_container">
        <h5> Hello, I'm</h5>
        <h1>Houssem ZEMNI</h1>
        <h5 className='text-light'>DevOps Engineer</h5>
        <CTA />

        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt="me" />
        </div>
        <div>
          <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>
      </div>
    </header>
  )
}

export default Header