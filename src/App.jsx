import React from 'react'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Achievement from './Components/Achievement'

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>
      <hr className='text-white '/>
      <Skills></Skills>
      <hr className='text-white'/>
      <Projects></Projects>
      <hr className='text-white'/>
      <Achievement></Achievement>
      <hr className='text-white' />

    </div>
  )
}

export default App