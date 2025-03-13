import React from 'react'
import { BiSolidQuoteRight} from "react-icons/bi";
import IMAGES from '../assets/images';
import { IoIosArrowDown } from "react-icons/io";

const HeroSection = () => {
  return (
    <div className='w-full flex justify-center'>
    <div className=' w-full max-w-[1080px] flex justify-center'>
    <section className=' grid  lg:grid-cols-2 grid-cols-1 gap-5'>
    <div className='flex flex-col gap-10 justify-center'>
    <p className=' font-semibold text-6xl'>
    <span className=' border-b-2 border-black py-3' >Rajat</span>
   <span className='py-3'> Kumar</span>
    </p>
    <p className=' font-semibold text-3xl'>MERN Stack <span className=' text-amber-500'> Developer </span>
    </p>
    
    </div>
    <div className=' relative'>
  
<BiSolidQuoteRight className=" text-[30rem] z-10 "/>
    </div>
    <button><IoIosArrowDown className=' border-2 border-black rounded-full text-black p-3 text-6xl'/></button>
    </section>
    </div>
   
    </div>
  )
}

export default HeroSection
