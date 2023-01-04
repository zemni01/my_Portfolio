import React from 'react'
import CV from '../../assets/Devops_CV_Houssem_ZEMNI_2022.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download my Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default CTA