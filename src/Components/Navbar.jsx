import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
// import {Link} from 'react-scroll';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div onclick="window.scrollTo(0, 0);" className='fixed w-full h-[80px] flex justify-between items-center px-4 mb-50 bg-[#010101] text-[#B9BCC1] font-bold z-50'>
      {/*menu*/}
      <ul  className='hidden md:flex'>
        <Link className='hover:underline' to="/">
          <motion.li
          initial={{ y: -150}}
          animate={{ y: 0 }}
          transition={{delay: 0, duration: 0.5, type: 'tween'}}>
          {/* whileHover={{ scale: 1.2 }}> */}
            Home
          </motion.li>
        </Link>
        <Link className='hover:underline' to="/about">
          <motion.li
          initial={{ y: -150}}
          animate={{ y: 0 }}
          transition={{delay: 0.3, duration: 0.5, type: 'tween'}} >
            About
          </motion.li>
        </Link>
        <Link className='hover:underline' to="/ourservices">
          <motion.li
          initial={{ y: -150}}
          animate={{ y: 0 }}
          transition={{delay: 0.6, duration: 0.5, type: 'tween'}}>
            Our Services
          </motion.li>
        </Link>
        <Link className='hover:underline' to="/portfolio">
          <motion.li
          initial={{ y: -150}}
          animate={{ y: 0 }}
          transition={{delay: 0.9, duration: 0.5, type: 'tween'}}>
            Portfolio
          </motion.li>
        </Link>
        <Link className='hover:underline' to="/contact">
          <motion.li
          initial={{ y: -150}}
          animate={{ y: 0 }}
          transition={{delay: 1.2, duration: 0.5, type: 'tween'}}>
            Contact
          </motion.li>
        </Link>
      </ul>

     {/*hamburger*/}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/*mobile menu*/}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#010101] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" duration={500}>
          Home
        </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" duration={500}>
          About
        </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="ourservices" duration={500}>
          Our Services
        </Link></li>
        {/* these need to go use routes not scroll */}
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="work" duration={500}>
          Portfolio
        </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" duration={500}>
          Contact
        </Link></li>
      </ul>
  </div>
  );
};

export default Navbar
