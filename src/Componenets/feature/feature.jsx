import React from 'react'
import './feature.css'
const feature = () => {
  return (
    <>
      <h1 className='about-title'>About Us</h1>
      <section className="feature">
        <div className="feature-container container">
          <div className="feature-card">
            <h3 className='title'>Coding Education</h3>
            <p className='text'>Girlz Can Code It offers comprehensive coding education programs designed to teach young women the fundamentals of programming.
              Our curriculum includes various coding languages and technologies, ensuring participants gain a well-rounded understanding of the tech world.
              Through interactive lessons and projects, we make learning coding fun and accessible.</p>
          </div>
          <div className="feature-card">
            <h3 className='title'>Mentorship and Support</h3>
            <p className='text'>We provide mentorship opportunities by connecting participants with experienced female professionals in the tech industry.
              These mentors offer guidance, share their experiences, and help young women navigate their career paths.
              Our supportive community encourages collaboration and peer learning, fostering a network of future tech leaders.</p>
          </div>
          <div className="feature-card">
            <h3 className='title'>Hands-On Experience</h3>
            <p className='text'>Our hands-on workshops and projects allow participants to apply their coding knowledge in real-world scenarios.
              From developing apps to creating websites, our programs focus on practical skills that are directly applicable to the tech industry.
              This experiential learning approach helps build confidence and competence in our participants.</p>
          </div>

          <div className="feature-card">
            <h3 className='title'>Community and Events</h3>
            <p className='text'>Girlz Can Code It hosts various community events, including hackathons, coding competitions, and tech talks, to inspire and engage young women in technology.
              These events provide opportunities to showcase talents, learn from industry experts, and connect with like-minded peers.
              We strive to create an inclusive environment where girls can thrive and pursue their passion for coding.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default feature