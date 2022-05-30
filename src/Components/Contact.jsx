import React from 'react'

const Contact = () => {
  return (
    <div className='relative'>
    <div name='contact' className='absolute top-20 w-full h-screen bg-[#010101] flex justify-center items-center px-4'>
        <form method='POST' action="https://getform.io/f/b7de5a5c-8cb0-4da2-9caa-7eeadd95d2e2" className='flex flex-col max-w-[600px] w-full '>
          <div className='pb-8 '>
            <p className='text-4xl font-bold inline border-b-4 border-[gray-300] text-gray-300'>Contact</p>
            {/* <p className='text-gray-100 py-4'>Submit the form below or send me an email - ...></p> */}
          </div>
          <input className='bg-white p-2' type='text' placeholder='Name' name='name'/>
          <input className='my-4 p-2 bg-white' type='email' placeholder="Email" name='email'/>
          <textarea className='bg-white p-2' name='message' rows='10' placeholder='Message'></textarea>
          <button className='text-white border-2 hover:bg-gray-600 hover:border-white px-4 py-3 my-8 mx-auto flex items-center'>Message me</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
