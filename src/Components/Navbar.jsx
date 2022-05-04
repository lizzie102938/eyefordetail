import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
// import {Link} from 'react-scroll';
import { Link } from 'react-router-dom';




const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 mb-50 bg-[#010101] text-[#B9BCC1] font-bold z-10'>
      {/*menu*/}
      <ul  className='hidden md:flex'>
        <Link to="/" smooth={true} duration={500}>
          <li>Home</li>
        </Link>
        <Link to="/about" smooth={true} duration={1000}>
          <li>About</li>
        </Link>
        <Link to="/ourservices" smooth={true} duration={500}>
          <li>OurServices</li>
        </Link>
        <Link to="/portfolio">
          <li>Portfolio</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>

     {/*hamburger*/}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/*mobile menu*/}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#010101] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}>
          Home
        </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500}>
          About
        </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="ourservices" smooth={true} duration={500}>
          Our Services
        </Link></li>
        {/* these need to go use routes not scroll */}
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="work" smooth={true} duration={500}>
          Portfolio
        </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>
          Contact
        </Link></li>
      </ul>
  </div>
  );
};

export default Navbar
