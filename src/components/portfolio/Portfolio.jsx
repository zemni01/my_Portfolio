import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: "portfolio web app",
    github: "https://github.com/zemni01/my_Portfolio",
    demo: "https://github.com/zemni01/my_Portfolio"
  },
  {
    id: 2,
    image: IMG2,
    title: "portfolio web app",
    github: "https://github.com/zemni01/my_Portfolio",
    demo: "https://github.com/zemni01/my_Portfolio"
  },
  {
    id: 3,
    image: IMG3,
    title: "portfolio web app",
    github: "https://github.com/zemni01/my_Portfolio",
    demo: "https://github.com/zemni01/my_Portfolio"
  },
  {
    id: 3,
    image: IMG4,
    title: "portfolio web app",
    github: "https://github.com/zemni01/my_Portfolio",
    demo: "https://github.com/zemni01/my_Portfolio"
  },
  {
    id: 5,
    image: IMG5,
    title: "portfolio web app",
    github: "https://github.com/zemni01/my_Portfolio",
    demo: "https://github.com/zemni01/my_Portfolio"
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio-container'>
        {
          data.map(({ id, image, title, github, demo }) => {
            return (<article key={id} className='portfolio_item'>
              <div className='portfolio_item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio_item-cta'>
                <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
              </div>
            </article>)
          })
        }
      </div>
    </section>
  )
}

export default Portfolio