import React from 'react'

const OurServicesNewPage = () => {
  return (
    <div name='ourservices' className='w-full h-screen bg-[#010101] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-300'>
              Our Services
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Enjoying learning more and more every day.</p>
            </div>
            <div>
              <p>Before entering the World of tech, I worked in sales and marketing for global spirits companies. I learned to code because I found it exciting gaining new skills which could be so useful in modern society. I hope to combine my prior business experience with these new coding skills. I enjoy working in teams of interesting people and love how the developer community is so collaborative and helpful.</p>
              <br></br>
              <p>Access my LinkedIn, Github, Email and CV from the links on this site.</p>
            </div>
        </div>
      </div>
    </div>

  );
}

export default OurServicesNewPage;
