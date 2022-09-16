import React, {useState} from 'react'
import './contact.css'

import AlertComponent from '../alert/Alert'

import {ImMail} from 'react-icons/im'
import {BsLinkedin} from 'react-icons/bs'
import {FaPhoneSquareAlt} from 'react-icons/fa'

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const clearStatusMessage = () => setStatusMessage("")

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w2cu5lw', 'template_ayxm01b', form.current, 'wglmctuRLORHKnmf2')
    .then((result) => {
      console.log(result.text);
      setStatusMessage("Email sent successfully!")
      <AlertComponent; key='success'; variant='success'/>
    }, (error) => {
      console.log(error.text);
      setStatusMessage(`${error.text} happened`)
     });

    e.target.reset()
    clearStatusMessage()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <ImMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>miguellutz31@gmail.com</h5>
            <a href="mailto:miguellutz31@gmail.com" target="_blank" rel="noreferrer">Send Email</a>
          </article>

          <article className="contact__option">
            <BsLinkedin className='contact__option-icon' />
            <h4>Linkedin</h4>
            <h5>Miguel Lutz</h5>
            <a href="https://linkedin.com/in/miguellutz" target='_blank' rel="noreferrer">Contact</a>
          </article>

          <article className="contact__option">
            <FaPhoneSquareAlt className='contact__option-icon' />
            <h4>Phone</h4>
            <h5>+4915752008690</h5>
            <a href="https://api.whatsapp.com/send?phone+4915752008690" target='_blank' rel="noreferrer">Send Message</a>
          </article>

        </div>
        {/* End of contact options*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Full Name" required />
          <input type="email" name='email' placeholder='Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type="submit" className='btn btn-primary '>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
