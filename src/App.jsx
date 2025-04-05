import React from 'react'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import Skills from './Components/Skills'
import Projects from './Components/Projects'

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>
      <hr className='text-white '/>
      <Skills></Skills>
      <hr className='text-white'/>
      <Projects></Projects>
      

    </div>
  )
}

export default App