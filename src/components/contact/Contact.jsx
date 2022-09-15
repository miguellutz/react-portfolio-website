import React from 'react'
import './contact.css'

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
        <form action="">
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
