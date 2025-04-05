import React from 'react'

const Achievement = () => {
  return (
    <div className='p-10 bg-black'>
      <h1 className='text-white text-4xl font-bold'>Achievements : </h1>
      <div className='pt-10 lg:pl-10'>
        <ul>
          <li>
          <p className='text-white text-2xl font-bold'>1. Global rank of <strong className='text-yellow-500 text-2xl'>875</strong> out of <strong className='text-red-500'>47000+</strong> candidates in IICPC Contest.</p>
          </li>
          <li>
            <p className='text-white text-2xl font-bold mt-5'>2. Global rank of <strong className='text-yellow-500 text-2xl'>2876</strong> out of <strong className='text-red-500 text-2xl'>444K+</strong> candidates in TCS Codevita Season-12.</p>
          </li>
          <li>
            <p className='text-white text-2xl font-bold mt-5'>3. Multiple time Global Rank <strong className='text-yellow-500 text-2xl'>under 500</strong> in Codechef Contest Div 3.</p>
          </li>
          <li>
            <p className='text-white text-2xl font-bold mt-5'>4. Global rank of <strong className='text-yellow-500'>7K</strong> in Facebook HackerCup.</p>
          </li>
          <li>
            <p className='text-white text-2xl font-bold mt-5'>5. Leetcode <strong className='text-amber-500'>under top 25%</strong></p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Achievement