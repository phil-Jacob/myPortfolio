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
          <img src={ME} alt="About " />
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
              <small>1 Fullstack Project & few smallprojects</small>
            </article>
          </div>

          <p>As a passionate and dedicated Full Stack Developer, I specialize in crafting dynamic, high-performance web applications that deliver seamless user experiences.
             With expertise in both front-end and back-end technologies, I bring a comprehensive approach to development, ensuring robust, scalable, and efficient solutions.
             My commitment to staying versed of the latest industry trends and my collaborative spirit make me a valuable asset to any development team.</p>

             <a href="contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About