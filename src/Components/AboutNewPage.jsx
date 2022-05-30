import React from 'react'
import Texture1 from '../Images/texture1.jpeg'
import Lens from '../Images/Lens.jpeg'
// import { motion } from 'framer-motion';
// import {useInView} from 'react-intersection-observer';
// import {useEffect} from 'react';
// import {useAnimation} from 'framer-motion';

const About = () => {

  return (
    <div >
      <div
      name='about'
      className='relative top-[12rem] opacity-90 ml-auto w-4/5 h-[32rem] text-[#010101] rounded-l-lg flex flex-col justify-center items-center'
      style={{ backgroundImage: `url(${Texture1})` }}>
        <div className='absolute grid grid-cols-3'>
          <div className='col-start-1 col-end-3 px-20'>
            <h1 className='text-center' >
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
