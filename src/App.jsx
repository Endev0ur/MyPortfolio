import React from 'react'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import Skills from './Components/Skills'

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>
      <hr className='text-white '/>
      <Skills></Skills>

    </div>
  )
}

export default App