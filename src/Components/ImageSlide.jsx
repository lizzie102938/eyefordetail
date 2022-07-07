import React from 'react'
import { motion } from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';
import {useAnimation} from 'framer-motion';
import Blue from '../Images/Blue_pillars.jpeg';

const ImageSlide = () => {

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
      animation.start({x: '-250vw'})
    }
    ;
  }, [inView]);

  return (
    <div ref={ref}>
      <motion.div
      animate={animation}
      name='image'
      className='absolute top w-4/5 h-[42rem] justify-center items-center'
      style={{ backgroundImage: `url(${Blue})` }}>
      </motion.div>
    </div>

  );
}

export default ImageSlide;
