import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>DevOps</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div><h4>Python</h4>
                <small className='text-light'>
                  Experienced
                </small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Git</h4>
                <small className='text-light'>
                  Experienced
                </small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Docker</h4>
                <small className='text-light'>
                  Experienced
                </small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Kubernetes</h4>
                <small className='text-light'>
                  intermediate
                </small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Jenkins</h4>
                <small className='text-light'>
                  intermediate
                </small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Azure</h4>
                <small className='text-light'>
                  intermediate
                </small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience_backend'>
          <h3>Full Stack Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>HTML/CSS</h4>
                <small className='text-light'>
                  Experienced
                </small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>
                  intermediate
                </small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Node.JS</h4>
                <small className='text-light'>
                  intermediate
                </small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Django/flask</h4>
                <small className='text-light'>
                  intermediate
                </small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>
                  Experienced
                </small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>
                  Experienced
                </small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience