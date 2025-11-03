import React from 'react'
import main_video from '../assets/video_02.mp4'
import '../assets/scss/Home_module.scss'

const Home = () => {
  return (
    <div>
        <video autoPlay muted loop>
          <source src={main_video} type='video/mp4'/>
        </video>
    </div>
  )
}

export default Home