import React from 'react'

const Hero = () => {
  return (
    <div className='bg-black h-[600px] md:h-[500px] xl:h-[700px] w-full flex justify-around items-center'>
      {/* large screeen */}
      <div className='bg-black h-[90%] w-[100%] sm:w-[82%] lg:w-[52%] border p-10 xl:pt-30'>
        <p className='text-4xl font-bold text-yellow-400'>Hi,</p>
        <br className=''/>
        <p className='text-3xl font-bold text-white'>This is <span className='text-red-500'>SHUBHAM RAWAT</span></p>
        <br />
        <p className='text-2xl font-bold text-white'>I’m a developer who loves solving real-world problems with clean and efficient code.</p>
        <br />
        <br className='hidden lg:block'/>
        <button className='h-[50px] w-[200px] border-3 text-xl rounded mr-10 text-white'>Let's Connect</button>
        <button className='h-[50px] w-[200px] border-3 mt-3 text-xl rounded text-white'>Resume</button>
      </div>
      <div className='bg-black hidden lg:block h-[80%] w-[40%]'>
      {/* image area */}
      </div>
    </div>
  )
}

export default Hero