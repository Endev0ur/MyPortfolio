import React from 'react'
import ecommerceimg from '/home/hackerss/Desktop/My Projects/MyPortfolio/src/assets/Screenshot from 2025-04-05 11-19-13.png'

const Projects = () => {
  return (
    <div className='bg-black pt-10 pb-10 flex justify-around items-center flex-col'>
      <h1 className='text-white text-4xl font-bold pb-10'>PROJECTS </h1>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
        {/* template for project */}
        <div className='h-[350px] w-[300px] 2xl:h-[400px] 2xl:w-[350px] border border-blue-400 text-white rounded-xl m-5'>
        </div>

        <div className='h-[350px] w-[300px] 2xl:h-[400px] 2xl:w-[350px] border border-blue-400 text-white rounded-xl m-5'>
        </div>

        <div className='h-[350px] w-[300px] 2xl:h-[400px] 2xl:w-[350px] border border-blue-400 text-white rounded-xl m-5'>
        </div>

        <div className='h-[350px] w-[300px] 2xl:h-[400px] 2xl:w-[350px] border border-blue-400 text-white rounded-xl m-5'>
        </div>

        <div className='h-[350px] w-[300px] 2xl:h-[400px] 2xl:w-[350px] border border-blue-400 text-white rounded-xl m-5'>
        </div>

      </div>
    </div>
  )
}

export default Projects;