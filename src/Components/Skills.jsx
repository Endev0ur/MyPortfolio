import React from 'react'

const Skills = () => {
  return (
    <div className='bg-black pb-10'>
      <h1 className='text-4xl text-white p-10 font-bold'>SKILLS : </h1>
      <div className='bg-black  ml-5 mr-5 sm:ml-10 sm:mr-10 md:ml-20 md:mr-20 lg:ml-40 lg:mr-40 p-10 text-white border flex items-center justify-around flex-column overflow-scroll rounded-2xl scrollbar-hide'>
        
        <div className='text-3xl font-bold p-3 rounded-xl ml-4 border-2 border-violet-400 '>
          C++
        </div>
        <div className='text-3xl font-bold p-3 border-2 rounded-xl ml-4 border-indigo-500'>
          Python
        </div>
        <div className='text-3xl font-bold p-3 border-2 rounded-xl ml-4 border-amber-700'>
          SQL
        </div>
        <div className='text-3xl font-bold p-3 border rounded-xl ml-4 border-white'>
          DSA
        </div>
        <div className='text-3xl font-bold p-3 border-2 rounded-xl ml-4 border-green-500'>
          Javascript
        </div>
        <div className='text-3xl font-bold p-3 border-2 rounded-xl ml-4 border-yellow-500'>
          ReactJS
        </div>
        <div className='text-3xl font-bold p-3 border-2 rounded-xl ml-4 border-orange-500'>
          MongoDB
        </div>
      </div>
    </div>
  )
}

export default Skills