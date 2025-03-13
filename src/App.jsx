import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import { IoIosArrowDown } from 'react-icons/io'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className=' w-full  overflow-x-hidden' >
    <Navbar/>
    <HeroSection/>
   <Skills/>
   <About/>
   <Projects/>
    </div>
  )
}

export default App
