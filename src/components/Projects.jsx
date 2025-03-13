import React from 'react'
import { GoDotFill } from 'react-icons/go'

const Projects = () => {
  return (
    <div className="w-full  flex justify-center   ">
    <div className=" flex justify-center flex-col w-full  max-w-[1080px]">
    <div>
    <div className=" w-[1057px] h-16 border-r-2  border-black mb-3"></div>
    <div className=" flex items-center justify-end gap-5">
    <p className=" text-5xl font-semibold  text-right">Projects </p>
    <GoDotFill className="   border-2 p-2 text-5xl rounded-full "/>
   
    </div>
    </div>
    <div className="my-10 ">
  <section className='flex items-center gap-5 '>
  <p className=' '>lorem ipsum  “I'm a testimonial. Click to edit me and add text that says something nice about you and your services.” lorem ipsum 
   “I'm a testimonial. Click to edit me and add text that says something nice about you and your services.” 
   lorem ipsum  “I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”  </p>
  <h1 className='  text-[10rem]'>01</h1>
  </section>
  <section className='flex items-center gap-5  border-y-2'>
  <p className=' '>lorem ipsum  “I'm a testimonial. Click to edit me and add text that says something nice about you and your services.” lorem ipsum 
   “I'm a testimonial. Click to edit me and add text that says something nice about you and your services.” 
   lorem ipsum  “I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”  </p>
  <h1 className='  text-[10rem]'>02</h1>
  </section>
   
  <section className='flex items-center gap-5 '>
  <p className=' '>lorem ipsum  “I'm a testimonial. Click to edit me and add text that says something nice about you and your services.” lorem ipsum 
   “I'm a testimonial. Click to edit me and add text that says something nice about you and your services.” 
   lorem ipsum  “I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”  </p>
  <h1 className='  text-[10rem]'>03</h1>
  </section>
  
  </div>
  
    </div>
   </div>
  )
}

export default Projects
