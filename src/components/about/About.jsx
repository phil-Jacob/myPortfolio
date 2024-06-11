import React from 'react'
import './about.css'
import ME from '../../assets/me-abt.jpg'
import { FaAward } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { RiFolder6Line } from "react-icons/ri";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Mastered Fullstack Development</small>
            </article>

            <article className='about__card'>
              <FaCode className='about__icon'/>
              <h5>Programs</h5>
              <small>Solved 50+ Coding problems</small>
            </article>

            <article className='about__card'>
              <RiFolder6Line  className='about__icon'/>
              <h5>Projects</h5>
              <small>5 Fullstack Projects</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Itaque quaerat corrupti architecto, quis non qui temporibus consequatur pariatur eos nihil reiciendis perferendis nam delectus enim consequuntur.
             Ipsam excepturi sed suscipit!</p>

             <a href="contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About