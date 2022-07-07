import React from 'react'
import Texture1 from '../Images/texture1.jpeg'
import Lens from '../Images/Lens.jpeg'
import { motion } from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';
import {useAnimation} from 'framer-motion';
import Blue from '../Images/Blue_pillars.jpeg';

const About = () => {

  const {ref, inView} = useInView({
    threshold: 0.2
  });
  const animation = useAnimation();

  useEffect(() => {
    console.log("use effect hook, inView = ", inView);
    if(inView){
      animation.start({
        x: 0,
        transition: {
          type: 'tween', duration: 0.6
        }
      });
    }
    if(!inView){
      animation.start({x: '250vw'})
    }
    ;
  }, [inView]);

  return (
    <div ref={ref}>
      <motion.div
      // initial={{ x: '250vw'}}
      animate={animation}
      // transition={{type: 'tween', duration: 3}}
      name='about'
      className='ml-auto relative my-60 w-4/5 h-[32rem] text-[#010101] bg-white flex flex-col justify-center items-center'>
      {/* // style={{ backgroundImage: `url(${Texture1})` }} */}
        <div className='grid grid-cols-3'>
          <div className='col-start-1 col-end-3'>
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
      </motion.div>
    </div>

  );
}

export default About;
