import React from 'react'

const OurServices = () => {
  return (
    <div name='ourservices' className='w-full h-screen bg-[#010101] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
          <p className='text-4xl font-bold inline border-b-4 border-text-gray-300'>
              Our Services
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Find out about all services here</p>
            </div>
            <ul>
              <li>Video shooting and filming for businesses</li>
              <li>Weddings and special events</li>
              <li>Editing phone video content</li>
              <li>Free consultation before project inception</li>
            </ul>
        </div>
      </div>
    </div>

  );
}

export default OurServices;
