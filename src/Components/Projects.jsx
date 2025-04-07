import React from 'react'
import ecommerceimg from '/home/hackerss/Desktop/My Projects/MyPortfolio/src/assets/Screenshot from 2025-04-05 11-19-13.png'

const Projects = () => {
  return (
    <div className='bg-black pt-10 pb-10 flex justify-around items-center flex-col'>
      <h1 className='text-white text-4xl font-bold pb-10'>PROJECTS </h1>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
        {/* template for project */}
        <div className='h-[350px] w-[300px] xl:h-[400px] xl:w-[350px] border border-blue-400 text-white rounded-xl m-5 flex justify-center items-center flex-wrap'>
            <div className='h-[50%] w-[90%] bg-gray-400 rounded-t-xl '>
              
            </div>
            <h1 className='text-2xl font-bold '>E-Commerce Platform</h1>
            <button className='h-[10%] w-[90%] bg-gray-900 font-bold rounded-xl border-1'>Deployment Link</button>
            <button className='h-[10%] w-[90%] bg-gray-900 font-bold rounded-xl border-1'>Github Link</button>
        </div>

        <div className='h-[350px] w-[300px] xl:h-[400px] xl:w-[350px] border border-blue-400 text-white rounded-xl m-5 flex justify-center items-center flex-wrap'>
            <div className='h-[50%] w-[90%] bg-gray-400 rounded-t-xl '>
              
            </div>
            <h1 className='text-2xl font-bold '>E-Commerce Platform</h1>
            <button className='h-[10%] w-[90%] bg-gray-900 font-bold rounded-xl border-1'>Deployment Link</button>
            <button className='h-[10%] w-[90%] bg-gray-900 font-bold rounded-xl border-1'>Github Link</button>
        </div>

        <div className='h-[350px] w-[300px] xl:h-[400px] xl:w-[350px] border border-blue-400 text-white rounded-xl m-5 flex justify-center items-center flex-wrap'>
            <div className='h-[50%] w-[90%] bg-gray-400 rounded-t-xl '>
              
            </div>
            <h1 className='text-2xl font-bold '>E-Commerce Platform</h1>
            <button className='h-[10%] w-[90%] bg-gray-900 font-bold rounded-xl border-1'>Deployment Link</button>
            <button className='h-[10%] w-[90%] bg-gray-900 font-bold rounded-xl border-1'>Github Link</button>
        </div>

        <div className='h-[350px] w-[300px] xl:h-[400px] xl:w-[350px] border border-blue-400 text-white rounded-xl m-5 flex justify-center items-center flex-wrap'>
            <div className='h-[50%] w-[90%] bg-gray-400 rounded-t-xl '>
              
            </div>
            <h1 className='text-2xl font-bold '>E-Commerce Platform</h1>
            <button className='h-[10%] w-[90%] bg-gray-900 font-bold rounded-xl border-1'>Deployment Link</button>
            <button className='h-[10%] w-[90%] bg-gray-900 font-bold rounded-xl border-1'>Github Link</button>
        </div>



      </div>
    </div>
  )
}

export default Projects;