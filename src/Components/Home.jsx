import React from 'react'
// import CameraImage from '../Images/camera-image.jpeg'
import Logo from '../Images/Logo.svg'
import About from './About';
import OurServices from './OurServices';
import Video from './Video';

const Home = () => {
  return (
    <div>
      {/* <div className=' w-full h-screen'> */}
        {/* <img className='absolute top-20 scale-75 right-20' src={Logo} alt='logo'/> */}
      {/* </div> */}

      <Video />
      <About />
      <OurServices />
    </div>

  )
}

export default Home;
