import React from 'react'
import './information.css'

const information = () => {
    return (
        <>
    <h1 className='about-title'>What people say</h1>
      <section className="feature">
        <div className="feature-container container">
          <div className="feature-card2">
            <h3 className='title'>Sarah T.</h3>
            <p className='text'>“Girlz Can Code It has been an inspiring and transformative experience for my daughter. 
                The confidence and skills she's gained are incredible. 
                The mentorship and support provided have opened up so many opportunities for her future.”</p>
          </div>
          <div className="feature-card2">
            <h3 className='title'>Emily R.</h3>
            <p className='text'>“As a mentor, I've seen firsthand the impact Girlz Can Code It has on young women.  It's a game-changer,
                 providing not just education but a supportive community that fosters growth and innovation.”</p>
          </div>
          <div className="feature-card2">
            <h3 className='title'>John M.</h3>
            <p className='text'>“Girlz Can Code It is building the future leaders of the tech industry.
                 The hands-on experience and real-world projects have equipped my students with valuable skills and a passion for coding.”</p>
          </div>

          <div className="feature-card2">
            <h3 className='title'> Megan L.</h3>
            <p className='text'>“This program is incredibly empowering. 
                The community is so supportive, and the opportunities for learning and growth are endless. 
                I highly recommend Girlz Can Code It to any young woman interested in tech.” </p>
          </div>
        </div>
      </section>
        </>
    )
}

export default information