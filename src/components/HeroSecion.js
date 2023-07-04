import React from 'react'
const HeroSecion = () => {
  return (
    <div className='container mx-auto flex justify-center flex-col w-full gap-2 items-center h-screen text-white'>
        <p className='text-[#00df92] font-bold '>GROWING WITH DATA ANALYTIC</p>
        <h1 className='lg:text-7xl md:text-6xl text-3xl font-bold'>Grow with data.</h1>
        <div className='flex items-center text-md font-bold md:text-2xl text-center'>
            <p>Fast, flexible financing for </p>

        </div>
        <p className='py-1 text-gray-500 md:text-2xl font-bold text-md text-center sm:mx-4'>Monitor your data analytic to increase revenue  for BTB, BTC & SASS platforms.</p>
        <button className='text-black bg-[#00df92] font-bold p-2 my-2 px-8 rounded-md'>Get Start</button>
 
    </div>
  )
}

export default HeroSecion