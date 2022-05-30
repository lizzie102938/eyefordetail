import React from 'react';
import Lens from '../Images/Lens.jpeg';
// import VideoBG from '../Images/video.mp4';

const Portfolio = () => {
  return (
    <div className='relative flex justify-center'>
      <div className='container px-10 mx-auto absolute top-40 '>
        <div className='text-white py-10'>
          <h2>Information about the services offered at Eye for Detail Productions.</h2>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10'>
          <div
            style={{ backgroundImage: `url(${Lens})`  }}
            className='shadow-lg shadow-[#0a192f] opacity-0.4 group container portfolio-div rounded-md flex justify-center items-center mx-auto content-div portfolio-project1'
          >
          {/* Hover Effects */}
            <div className='opacity-0.4 text-center'>
              <div className='text-xl font-bold text-white tracking-wider'>
                Project 1
              </div>
              <div className='text-lg font-bold text-white tracking-wider'>
                Blurb about the project
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Lens})`  }}
            className='shadow-lg shadow-[#0a192f] opacity-0.4 group container portfolio-div rounded-md flex justify-center items-center mx-auto content-div portfolio-project1'
          >
          {/* Hover Effects */}
            <div className='opacity-0.4 text-center'>
              <div className='text-xl font-bold text-white tracking-wider'>
                Project 2
              </div>
              <div className='text-lg font-bold text-white tracking-wider'>
                Blurb about the project
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Lens})`  }}
            className='shadow-lg shadow-[#0a192f] opacity-0.4 group container portfolio-div rounded-md flex justify-center items-center mx-auto content-div portfolio-project1'
          >
          {/* Hover Effects */}
            <div className='opacity-0.4 text-center'>
              <div className='text-xl font-bold text-white tracking-wider'>
                Project 3
              </div>
              <div className='text-lg font-bold text-white tracking-wider'>
                Blurb about the project
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;
