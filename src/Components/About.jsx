import React from 'react'
import Texture1 from '../Images/texture1.jpeg'
import Lens from '../Images/Lens.jpeg'

const About = () => {
  return (
    <div>
      <div name='about' className='ml-auto my-60 w-4/5 h-screen text-[#010101] rounded-l-lg flex flex-col justify-center items-center'
      style={{ backgroundImage: `url(${Texture1})` }}>
        <div className='grid grid-cols-3'>
          <div classsName='col-start-1 col-end-3'>
            <h1 className='text-center'>
              About
            </h1>
            <h2>
              A London-based video production agency looking to bring a new level of detail to video production.
              A London-based video production agency looking to bring a new level of detail to video production.
              A London-based video production agency looking to bring a new level of detail to video production.
              A London-based video production agency looking to bring a new level of detail to video production.
              A London-based video production agency looking to bring a new level of detail to video production.
              A London-based video production agency looking to bring a new level of detail to video production.
            </h2>
          </div>
          <div className='col-start-3 col-end-4'>
            <div>
              <img src={Lens} alt='placeholder'/>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default About;
