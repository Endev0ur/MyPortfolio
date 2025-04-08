import React from 'react'
import ecommerceimg from '../assets/E-Commerce.png'

const Projects = () => {
  return (
    <div className='bg-black pt-10 pb-10 flex justify-around items-center flex-col'>
      <h1 className='text-white text-4xl font-bold pb-10'>PROJECTS </h1>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 '>
        {/* template for project */}
        <div className='h-[350px] w-[300px] xl:h-[400px] xl:w-[350px] border border-white text-white rounded-xl m-5 flex justify-center items-center flex-wrap'>
            <div className='h-[50%] w-[90%] bg-gray-400 rounded-t-xl'>
              <img src={ecommerceimg} alt="" className='h-[100%] w-[100%] object-cover' />
            </div>
            <h1 className='text-2xl font-bold '>E-Commerce Platform</h1>
            <a href="https://e-commerce-project-2fzy.vercel.app/" target='_blank' className='h-[10%] w-[90%] bg-gray-900 font-bold rounded-xl border-1 flex justify-center items-center' >Deployment Link</a>
            <a href='https://github.com/Endev0ur/E-commerce-Project' target='_blank' className='h-[10%] w-[90%] bg-gray-900 font-bold rounded-xl border-1 flex justify-center items-center'>Github Link</a>
        </div>

        <div className='h-[350px] w-[300px] xl:h-[400px] xl:w-[350px] border border-white text-white rounded-xl m-5 flex justify-center items-center flex-wrap'>
            <div className='h-[50%] w-[90%] bg-gray-400 rounded-t-xl'>
              <img src={ecommerceimg} alt="" className='h-[100%] w-[100%] object-cover' />
            </div>
            <h1 className='text-2xl font-bold '>E-Commerce Platform</h1>
            <a href="https://e-commerce-project-2fzy.vercel.app/" target='_blank' className='h-[10%] w-[90%] bg-gray-900 font-bold rounded-xl border-1 flex justify-center items-center' >Deployment Link</a>
            <a href='https://github.com/Endev0ur/E-commerce-Project' target='_blank' className='h-[10%] w-[90%] bg-gray-900 font-bold rounded-xl border-1 flex justify-center items-center'>Github Link</a>
        </div>

        <div className='h-[350px] w-[300px] xl:h-[400px] xl:w-[350px] border border-white text-white rounded-xl m-5 flex justify-center items-center flex-wrap'>
            <div className='h-[50%] w-[90%] bg-gray-400 rounded-t-xl'>
              <img src={ecommerceimg} alt="" className='h-[100%] w-[100%] object-cover' />
            </div>
            <h1 className='text-2xl font-bold '>E-Commerce Platform</h1>
            <a href="https://e-commerce-project-2fzy.vercel.app/" target='_blank' className='h-[10%] w-[90%] bg-gray-900 font-bold rounded-xl border-1 flex justify-center items-center' >Deployment Link</a>
            <a href='https://github.com/Endev0ur/E-commerce-Project' target='_blank' className='h-[10%] w-[90%] bg-gray-900 font-bold rounded-xl border-1 flex justify-center items-center'>Github Link</a>
        </div>

        <div className='h-[350px] w-[300px] xl:h-[400px] xl:w-[350px] border border-white text-white rounded-xl m-5 flex justify-center items-center flex-wrap'>
            <div className='h-[50%] w-[90%] bg-gray-400 rounded-t-xl'>
              <img src={ecommerceimg} alt="" className='h-[100%] w-[100%] object-cover' />
            </div>
            <h1 className='text-2xl font-bold '>E-Commerce Platform</h1>
            <a href="https://e-commerce-project-2fzy.vercel.app/" target='_blank' className='h-[10%] w-[90%] bg-gray-900 font-bold rounded-xl border-1 flex justify-center items-center' >Deployment Link</a>
            <a href='https://github.com/Endev0ur/E-commerce-Project' target='_blank' className='h-[10%] w-[90%] bg-gray-900 font-bold rounded-xl border-1 flex justify-center items-center'>Github Link</a>
        </div>

        



      </div>
    </div>
  )
}

export default Projects;