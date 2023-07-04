import React from 'react'
import Laptop from '../assets/laptop.jpg'
const Analytics = () => {
  return (
    <div className='bg-white w-full py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
         <div className='w-[500px] mx-auto my-4'> 
            <img className='w-full h-full' src={Laptop} alt="" />
        </div>
        <div className='flex flex-col justify-center'>
            <p className='text-[#00df92] font-bold'>DATA ANALYTICS DASHBOARD</p>
            <h1 className=' font-bold text-2xl capitalize md:text-4xl sm:text-3xl py-2'>manage data analytics centraly</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius dolorem inventore harum rem incidunt modi dolor veritatis. Id corporis cumque consequuntur natus iusto, doloremque facere est, eum blanditiis eligendi maiores.</p>
            <button className='bg-black text-[#00df92] w-[200px] md:mx-0 mx-auto my-16 rounded-md py-3 font-medium'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics