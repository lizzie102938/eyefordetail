import React from 'react'
import Texture1 from '../Images/texture1.jpeg'
import Lens from '../Images/Lens.jpeg'

const OurServicesNewPage = () => {
  return (
    <div>
      <div name='about' className='mr-auto  w-4/5 h-screen text-[#010101] rounded-r-lg flex flex-col justify-center items-center'
      style={{ backgroundImage: `url(${Texture1})` }}>
        <div className='grid grid-cols-3'>
        <div className='col-start-1 col-end-2'>
            <div>
              <img src={Lens} alt='placeholder'/>
            </div>
          </div>
          <div classsName='col-start-2 col-end-4'>
            <h1 className='text-center'>
              Our Services
            </h1>
            <h2>
              Information about the services offered at Eye for Detail Productions.
              Information about the services offered at Eye for Detail Productions.
              Information about the services offered at Eye for Detail Productions.
              Information about the services offered at Eye for Detail Productions.
              Information about the services offered at Eye for Detail Productions.
              Information about the services offered at Eye for Detail Productions.
            </h2>
          </div>
        </div>
      </div>
    </div>

  );
}

export default OurServicesNewPage;
