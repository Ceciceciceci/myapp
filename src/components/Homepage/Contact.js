import React from 'react';
import Footer from '../Footer';
import funpattern from '../../images/svgs/funpattern.svg'

export default function Contact (){
  return (
    <>
      <section id="contact" className="contact-section">
        <div className="intro-card">
          <h1>Let's talk more!</h1>
          <div style={{backgroundColor: "#FFB700", width: "100%", textAlign: "center", padding: "25px" }}>
            <ul> 
                <li><a href="https://twitter.com/ichi_nese/">Twitter</a></li>
                <li><a href="https://www.instagram.com/ichiknees/?hl=en">Instagram</a></li>
                <li><a href="https://www.behance.net/cecitran94fab0">Behance</a></li>
                <li><a href="mailTo:cecitran94@gmail.com">Email</a></li>
            </ul>
          </div>
        </div>
        {/* <div className="contact-form"> */}
          {/* <img src={funpattern} alt="pattern"/> */}
          {/* <div class="forms">
            <h4 class="title">To Cecilia:</h4>
            <form>
              <input type="text" name="full-name" class="full-name" placeholder="Your name" autocomplete='off' />
              <input type="email" name="full-name" class="email" placeholder="Your email" autocomplete='off' />
              <textarea rows={5} name="message" class="message" placeholder="Your message"></textarea>
              <button class="btn submit">SUBMIT</button>
            </form>
          </div> */}
        {/* </div> */}
      </section>
    </> 
  )
}