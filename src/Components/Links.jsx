import React from 'react'
import { SiLeetcode , SiCodechef , SiCodeforces , SiGeeksforgeeks , SiGithub } from "react-icons/si";
import { FaCode } from "react-icons/fa";

const Links = () => {
  return (
    <div className='bg-black  p-10 pl-7 pr-7 md:pl-10 md:pr-10'>
      <h1 className='text-white text-4xl font-bold'>Important Links</h1>
      <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 pt-10 gap-3'>
          <div className='h-[60px] lg:h-[70px] w-[100%] bg-gradient-to-r from-green-400 via-red-500 to-blue-500 border-5 border-yellow-500 rounded-4xl flex justify-center items-center '>
            <SiLeetcode className='text-3xl mr-4' />
            <a href='https://leetcode.com/u/UniversalX/' target='_main' className='text-xl md:text-2xl font-bold text-black'>Leetcode : (max-1626)</a>
          </div>

          <div className='h-[60px] lg:h-[70px] w-[100%] bg-gradient-to-r from-green-400 via-red-500 to-blue-500 border-5 border-yellow-500 rounded-4xl flex justify-center items-center '>
            <SiCodechef className='text-3xl mr-4' />
            <a href='https://www.codechef.com/users/ratttttttins' target='_main' className='text-xl md:text-2xl font-bold text-black'>Codechef : (max-1591)</a>
          </div>

          <div className='h-[60px] lg:h-[70px] w-[100%] bg-gradient-to-r from-green-400 via-red-500 to-blue-500 border-5 border-yellow-500 rounded-4xl flex justify-center items-center '>
            <SiCodeforces className='text-3xl mr-4' />
            <a href='https://codeforces.com/profile/I-A-S-12' target='_main' className='text-xl md:text-2xl font-bold text-black'>Codeforces : (max-1119)</a>
          </div>

          <div className='h-[60px] lg:h-[70px] w-[100%] bg-gradient-to-r from-green-400 via-red-500 to-blue-500 border-5 border-yellow-500 rounded-4xl flex justify-center items-center '>
            <FaCode className='text-3xl mr-4' />
            <a href='https://atcoder.jp/users/infycode' target='_main' className='text-xl md:text-2xl font-bold text-black'>Atcoder : (max-387)</a>
          </div>

          <div className='h-[60px] lg:h-[70px] w-[100%] bg-gradient-to-r from-green-400 via-red-500 to-blue-500 border-5 border-yellow-500 rounded-4xl flex justify-center items-center '>
            <SiGeeksforgeeks className='text-3xl mr-4' />
            <a href='https://www.geeksforgeeks.org/user/endevour' target='_main' className='text-xl md:text-2xl font-bold text-black'>Gfg : (score-630)</a>
          </div>


          <div className='h-[60px] lg:h-[70px] w-[100%] bg-gradient-to-r from-green-400 via-red-500 to-blue-500 border-5 border-amber-500 rounded-4xl flex justify-center items-center '>
            <SiGithub className='text-3xl mr-4' />
            <a href='https://github.com/Endev0ur' target='_main' className='text-xl md:text-2xl font-bold text-black'>Github</a>
          </div>

          

          
          


          

          
        </div>
      </div>
    </div>
  )
}

export default Links;