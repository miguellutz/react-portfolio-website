import React from 'react'
import './contact.css'

import Mailto from 'react-mailto'

import {ImMail} from 'react-icons/im'
import {BsLinkedin} from 'react-icons/bs'
import {FaPhoneSquareAlt} from 'react-icons/fa'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <ImMail />
            <h4>Email</h4>
            <h5>miguellutz31@gmail.com</h5>
            <a href="mailto:miguellutz31@gmail.com">Send Email</a>
          </article>

          <article className="contact__option">
            <BsLinkedin />
            <h4>Linkedin</h4>
            <h5>Miguel Lutz</h5>
            <a href="https://linkedin.com/in/miguellutz" target='_blank' rel="noreferrer">Contact</a>
            <Mailto email="miguellutz31@gmail.com">Email Me</Mailto>
          </article>

          <article className="contact__option">
            <FaPhoneSquareAlt />
            <h4>Phone</h4>
            <h5>+4915752008690</h5>
            {/* <a href="https://api.whatsapp.com/send?phone+4915752008690" target='_blank' rel="noreferrer">Send Message</a> */}
          </article>

        </div>
        {/* End of contact options*/}
        <form action=""></form>
      </div>
    </section>
  )
}

export default Contact
