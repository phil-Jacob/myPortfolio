import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/project1.png'
import IMG2 from '../../assets/project2.png'
import IMG3 from '../../assets/project3.png'

const data = [
  {
    id:1,
    image: IMG1,
    title: 'Socialmedia-clone',
    github: 'https://github.com/phil-Jacob/socialmedia_Clone',
    demo: 'https://ephemeral-narwhal-0dcb8c.netlify.app',
  },
  {
    id:2,
    image: IMG2,
    title: 'DiceGame',
    github: 'https://github.com/phil-Jacob/DiceGame',
    demo: 'https://benevolent-truffle-24451a.netlify.app',
  },
  {
    id:3,
    image: IMG3,
    title: 'Portfolio',
    github: 'https://github.com/phil-Jacob/myPortfolio',
    demo: 'https://app.netlify.com/teams/jasonjoe777/overview',
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Recent Works</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className='btn'>Github</a>
            <a href={demo} className='btn btn-primary'>Live Demo</a>
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