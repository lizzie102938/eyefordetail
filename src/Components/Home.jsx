import React from 'react';
// import CameraImage from '../Images/camera-image.jpeg'
import Logo from './Logo';
import About from './About';
import OurServices from './OurServices';
import Video from './Video';
import ImageSlide from './ImageSlide';


const Home = () => {
  return (
    <div>
      <Video />
      <Logo />
      <div className='container mx-auto px-4'>
        <ImageSlide />
        <About />
        <OurServices />
      </div>
    </div>
  )
}

export default Home;
