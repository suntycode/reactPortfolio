import React from 'react'

const Navbar = () => {
  return (
    <header className=' w-full flex justify-center    bg-black p-5 text-white'>
<nav className='flex items-center justify-between max-w-[1080px] w-full  ' >

<ul className='flex items-center gap-5'>
<li className=' font-semibold text-lg cursor-pointer '>Home </li>
<li className='font-semibold text-lg cursor-pointer'>Projects</li>
<li className='font-semibold text-lg cursor-pointer'>About me</li>
<li className='font-semibold text-lg cursor-pointer'>Contect us</li>
</ul>
<p  className='font-semibold text-lg'>Call Me <span className=' parat'>+918398929837</span></p>
</nav>

      
    </header>
  )
}

export default Navbar
