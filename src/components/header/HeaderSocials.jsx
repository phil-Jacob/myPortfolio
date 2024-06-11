import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://in.linkedin.com" rel="noreferrer" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/login" rel="noreferrer" target='_blank'><FaGithub /></a>
        <a href="https://leetcode.com" rel="noreferrer" target='_blank'><SiLeetcode /></a>
        </div>
  )
}

export default HeaderSocials