import React from 'react';
// import CameraImage from '../Images/camera-image.jpeg'
import Logo from './Logo';
import About from './About';
import OurServices from './OurServices';
import Video from './Video';


const Home = () => {
  return (
    <div>
      <Video />
      <Logo />
      <About />
      <OurServices />
    </div>
  )
}

export default Home;
