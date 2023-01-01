import React from 'react'
import './footer.css'
import {FaFacebookF, FaLinkedin} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Houssem ZEMNI</a>

      <ul className='permalinks'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer_socials'>
          <a href="https://www.facebook.com/houssem.zemni/"><FaFacebookF /></a>
          <a href="https://www.instagram.com/houssem_zemni/"><FiInstagram /></a>
          <a href="https://www.linkedin.com/in/houssem-zemni/"><FaLinkedin /></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; Houssem ZEMNI. All rights reserved.</small>
      </div>
    </footer>    
  )
}

export default Footer