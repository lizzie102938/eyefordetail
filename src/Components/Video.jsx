import React from 'react';
import VideoBG from '../Images/video.mp4';

const Video = () => {
  return (
    <div className='w-full h-screen relative'>
      <div className='overlay'>
        <video src={VideoBG} autoPlay loop muted className='w-full h-screen object-cover'/>
        <div className="absolute w-full h-full top-0 left-0 bg-gray-900 opacity-40 z-5">
        {/* <div className='logo-content'>
          <h1>eye for detail productions</h1>
        </div> */}
        </div>
      </div>
    </div>
  )
}

export default Video
