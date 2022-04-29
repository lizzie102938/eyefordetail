import React from 'react'
// import CameraImage from '../Images/camera-image.jpeg'
import Logo from '../Images/Logo.svg'
import About from './About';
import OurServices from './OurServices';

const Home = () => {
  return (
    <div>
      <div className='container mx-auto w-full h-screen'>
        <img className='absolute top-20 scale-75 right-20' src={Logo} alt='logo'/>
      </div>
      <div>
      <About />
      <OurServices />
      </div>
    </div>

  )
}

export default Home
