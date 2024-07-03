import React from 'react'
import './service.css'
const feature = () => {
  return (
    <>
      <h1 className='Services-title'>Our Services</h1>
      <section className="feature">
        <div className="feature-container container">
          <div className="feature-box">
            <h3 className='title'>Intro to coding</h3>
            <p className='P-tag'>
            Our Intro to Web Development class teaches students how to create stunning websites using HTML, CSS, and JavaScript. 
            Participants build practical skills through hands-on projects, crafting responsive and dynamic web pages.
            </p>
          </div>
          <div className="feature-box">
            <h3 className='title'>Java Script:Fundamentals</h3>
            <p className='P-tag'>In the JavaScript class, students learn to add interactivity to web pages, mastering concepts like DOM manipulation and event handling. 
              They will build dynamic, responsive websites and web applications through engaging projects.</p>
          </div>
          <div className="feature-box">
            <h3 className='title'>App Development</h3>
            <p className='P-tag'>Our App Development class teaches students how to build mobile applications for Android and iOS using MIT App Inventor and Swift.
               Participants will develop functional, user-friendly apps, gaining valuable skills in UI design and </p>
          </div>

          <div className="feature-box">
            <h3 className='title'>Web Development</h3>
            <p className='P-tag'>Our Web Development class at teaches girls to build and design websites using HTML, CSS, and JavaScript. Through hands-on projects, participants develop practical skills to create responsive and dynamic web pages.</p>
          </div> 
        </div>
      </section>
    </>
  )
}

export default feature