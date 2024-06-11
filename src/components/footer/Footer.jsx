import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#logo" className='footer__logo'>PhilJacob</a>

      <ul className='permalinks'>
        <li><a href="#top">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__copyrights'>
        <small>&copy; Phil Jacob. All Rights Reserved </small>
      </div>
    </footer>
  )
}

export default Footer