import React from 'react'
import { SiLeetcode , SiCodechef , SiCodeforces , SiGeeksforgeeks} from "react-icons/si";
import { FaCode } from "react-icons/fa";

const Skills = () => {
  return (
    <div className='bg-black  p-10 pl-7 pr-7 md:pl-10 md:pr-10'>
      <h1 className='text-white text-4xl font-bold'>Important Links</h1>
      <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 pt-10 gap-4'>
          <div className='h-[60px] lg:h-[70px] w-[100%] bg-gradient-to-r bg-white rounded-xl flex justify-center items-center '>
            <p className='text-xl md:text-2xl font-bold text-black'>C++</p>
          </div>

          <div className='h-[60px] lg:h-[70px] w-[100%] bg-gradient-to-r bg-white rounded-xl flex justify-center items-center '>
            <p className='text-xl md:text-2xl font-bold text-black'>React Js</p>
          </div>

          <div className='h-[60px] lg:h-[70px] w-[100%] bg-gradient-to-r bg-white rounded-xl flex justify-center items-center '>
            <p className='text-xl md:text-2xl font-bold text-black'>Python</p>
          </div>

          <div className='h-[60px] lg:h-[70px] w-[100%] bg-gradient-to-r bg-white rounded-xl flex justify-center items-center '>
            <p className='text-xl md:text-2xl font-bold text-black'>Mongo DB</p>
          </div>

          <div className='h-[60px] lg:h-[70px] w-[100%] bg-gradient-to-r bg-white rounded-xl flex justify-center items-center '>
            <p className='text-xl md:text-2xl font-bold text-black'>NodeJs</p>
          </div>

          <div className='h-[60px] lg:h-[70px] w-[100%] bg-gradient-to-r bg-white rounded-xl flex justify-center items-center '>
            <p className='text-xl md:text-2xl font-bold text-black'>DSA</p>
          </div>

          <div className='h-[60px] lg:h-[70px] w-[100%] bg-gradient-to-r bg-white rounded-xl flex justify-center items-center '>
            <p className='text-xl md:text-2xl font-bold text-black'>SQL</p>
          </div>

          <div className='h-[60px] lg:h-[70px] w-[100%] bg-gradient-to-r bg-white rounded-xl flex justify-center items-center '>
            <p className='text-xl md:text-2xl font-bold text-black'>JavaScript</p>
          </div>
          

          
          


          

          
        </div>
      </div>
    </div>
  )
}

export default Skills