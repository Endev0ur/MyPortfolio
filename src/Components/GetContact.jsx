import React from 'react'
import { SiLinkedin, SiGmail } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const GetContact = () => {
  return (
    <div className='bg-black p-10'>
      <h1 className='text-4xl text-white font-bold'>Let's Connect : </h1>
      <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 pt-10'>
          <div className='h-[60px] lg:h-[70px] w-[100%] text-white bg-gray-900 border-5 border-white rounded-4xl flex justify-center items-center '>
          <SiLinkedin className='text-2xl mr-4'/>
            <a href='https://www.linkedin.com/in/shubham-rawat-522662257/' target='_main' className='text-xl md:text-2xl font-bold'>Linkedin</a>
          </div>

          <div className='h-[60px] lg:h-[70px] w-[100%] text-white bg-gray-900 border-5 border-white rounded-4xl flex justify-center items-center '>
            <FaXTwitter className='text-2xl mr-4' />  
            <a href='https://x.com/Uniyal_Ji_' target='_main' className='text-xl md:text-2xl font-bold'>Twitter</a>
          </div>

          <div className='h-[60px] lg:h-[70px] w-[100%] text-white bg-gray-900 border-5 border-white rounded-4xl flex justify-center items-center '>
            <SiGmail className='text-2xl mr-4'></SiGmail>
            <a href="mailto:shubham5555rawat@gmail.com" target='_main' className='text-xl md:text-2xl font-bold '>Email</a>
          </div>
      </div>
    </div>
  )
}

export default GetContact