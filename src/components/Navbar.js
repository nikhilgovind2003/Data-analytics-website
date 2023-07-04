import React from 'react'
import {AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react';


const Navbar = () => {

  const [Nav, setNav] = useState(false)

  const handleNav =()=>{
    setNav(!Nav)
  }

  return (
    <div className='text-white  flex h-24 justify-between items-center max-w-[1240px] px-4 mx-auto'>
      <h1 className='w-full text-2xl font-bold text-[#00df92]'>REACT.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>

      <div onClick={handleNav} className='md:hidden
      '>
        {
          Nav ? <AiOutlineClose size={20} />:<AiOutlineMenu size={20} />
        }
      </div>
      <div className={Nav? "absolute top-0 left-0 h-full w-[60%] border-r bg-black border-gray-900 ease-in-out duration-300" : "fixed left-[-100%]"}>     
        <h1 className='w-full text-2xl font-bold text-[#00df92] m-4'>REACT.</h1>
        <ul className='uppercase p-4'>
          <li className='p-4 border-b border-gray-700'>Home</li>
          <li className='p-4 border-b border-gray-700'>Company</li>
          <li className='p-4 border-b border-gray-700'>Resources</li>
          <li className='p-4 border-b border-gray-700'>About</li>
          <li className='p-4'>Contact</li>
        </ul>
      </div>
    </div>

    
  )
}

export default Navbar