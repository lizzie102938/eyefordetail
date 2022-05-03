import React from 'react'

const AboutNewPage = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#010101] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-text-gray-300'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>About Eye for Detail</p>
            </div>
            <div>
              <p>A London-based video production agency looking to bring a new level of detail to video production.</p>
            </div>
        </div>
      </div>
    </div>

  );
}

export default AboutNewPage;
