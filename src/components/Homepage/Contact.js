import React from 'react';
import Footer from '../Footer';
import funpattern from '../../images/svgs/funpattern.svg'

export default function Contact (){
  return (
    <>
      <section id="contact" className="contact-section">
        <div className="intro-card">
          {/* <h1>Let's talk more!</h1> */}
        </div>
        <div className="contact-form">
          {/* <img src={funpattern} alt="pattern"/> */}
          <div class="forms">
            <h4 class="title">To Cecilia:</h4>
            <form>
              <input type="text" name="full-name" class="full-name" placeholder="Your name" autocomplete='off' />
              <input type="email" name="full-name" class="email" placeholder="Your email" autocomplete='off' />
              <textarea rows={5} name="message" class="message" placeholder="Your message"></textarea>
              <button class="btn submit">SUBMIT</button>
            </form>
          </div>
        </div>
        <Footer />
      </section>
    </> 
  )
}