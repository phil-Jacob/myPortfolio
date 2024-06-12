import React from 'react'
import './contact.css'
import { IoMailOpenOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const serviceKey = 'service_965arte';
  const templateKey = 'template_lmc670n';
  const publicId = 'UG4LAViU6QrZ-Wb_r';

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceKey, templateKey, form.current, {
        publicKey: publicId,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };

  
  return (
    <section id='contact'>
      <h5>Get In Touch</h5
      ><h2>Contact Me</h2>


      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
          <IoMailOpenOutline className='contact__option-icon' />
            <h4>Email</h4>
            <h5>jack.joe1817@gmail.com</h5>
            <a href="mailto:dummyuser@gmail.com" target='_blank' rel='noreferrer'>Send a message</a>
          </article>
          <article className='contact__option'>
          <FaWhatsapp e className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <a href="https://web.whatsapp.com/send?phone=+918903437340" target='_blank' rel='noreferrer'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact