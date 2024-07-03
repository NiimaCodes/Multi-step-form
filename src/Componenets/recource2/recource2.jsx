import React from 'react'
import './recource2.css' 
import Video from '../../assets/vid3.mp4'
import Video5 from '../../assets/vid5.mp4'
import Video6 from '../../assets/vid4.mp4'
const recource = () => {
  return (
    <>
      <div className="resources-container">
        <div className='recources-video'>
          <video width="600" controls>
            <source src={Video} type="video/mp4" />
          </video>
        </div>
        <div className='recources-video'>
          <video width="600" controls>
            <source src={Video5} type="video/mp4" />
          </video>
        </div>
        <div className='recources-video'>
          <video width="600" controls>
            <source src={Video6} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  )
}

export default recource