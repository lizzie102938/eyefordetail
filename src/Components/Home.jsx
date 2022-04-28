import React from 'react'
import CameraImage from '../Images/camera-image.jpeg'
import Logo from '../Images/Logo.svg'

const Home = () => {
  return (
    // <div name='home' className='item-center w-full h-screen bg-[#0a192f]'>
    // <div className='w-full h-screen' style={{backgroundImage:`url(${CameraImage})` }}>
    //   <h1>This is red car</h1>
    //   <h2>blue car</h2>
    //   <h1>This is red car</h1>
    //   <h2>blue car</h2>
    //   <h1>This is red car</h1>
    //   <h2>blue car</h2>
    //   <h2>blue car</h2>
    //   <h1>This is red car</h1>
    //   <h2>blue car</h2>
    //   <h2>blue car</h2>
    //   <h1>This is red car</h1>
    //   <h2>blue car</h2>
    //   <h2>blue car</h2>
    //   <h1>This is red car</h1>
    //   <h2>blue car</h2>
    // </div>

    // container
    <div className='container mx-auto px-50'>
      <div style={{backgroundImage:`url(${CameraImage})` }}>
          <img src={Logo} alt='logo'/>
      </div>
    </div>

  )
}

export default Home
