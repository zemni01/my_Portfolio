import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiWhatsapp} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/houssem-zemni/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/zemni01" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://wa.me/+21692762884" target="_blank" rel="noreferrer"><SiWhatsapp /></a>
    </div>
  )
}

export default HeaderSocials