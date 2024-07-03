import React from 'react'
import './recource.css' 
import Video1 from '../../assets/vid4.mp4'
import Video2 from '../../assets/vid2.mp4'
import Video3 from '../../assets/vid1.mp4'
const recource = () => {
  return (
    <>
    <h1 className='title4'>Recources</h1>
      <div className="resources-container">
        <div className='recources-video'>
          <video width="600" controls>
            <source src={Video1} type="video/mp4" />
          </video>
        </div>
        <div className='recources-video'>
          <video width="600" controls>
            <source src={Video2} type="video/mp4" />
          </video>
        </div>
        <div className='recources-video'>
          <video width="600" controls>
            <source src={Video3} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  )
}

export default recource