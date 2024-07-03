import React from 'react'
import './contact.css'
const contact = () => {
  return (
    <>
      <section class="main-form">
        <div class="form-container container">
          <div class="form-container-title">
            <h1>Contact Form</h1>
            <h1>Contact Form</h1>
          </div>
          <form action="submit" class="form">
            <div class="form-title">
              <h3>Get In Touch</h3>
            </div>
            <div class="form-input">
              <input type="text" placeholder="Enter Your Name"/>
            </div>
            <div class="form-input">
              <input type="email" placeholder="Enter Your Email"/>
            </div>
            <div class="form-input">
              <textarea rows="10" placeholder="Enter Your Message"></textarea>
            </div>
            <div class="form-btn">
              <button>Send</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )

}

export default contact