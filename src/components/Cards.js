import React from 'react'
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
const Cards = () => {
  return (
    <div className='bg-white py-5 md:px-44 md:py-24'>
        <div className='max-w-[1240px] grid md:grid-cols-3 px-3'>

            {/* card 1 */}
            <div className=' shadow-xl flex flex-col mx-6 items-center justify-center py-6 my-6 duration-500 md:hover:scale-105 '>
                <img src= {Single} className='w-20' alt="" />
                <h1 className='text-3xl font-bold py-5'>Single</h1>
                <p className=' text-2xl font-bold'>$149</p>
                <div className='my-2 text-md text-center font-medium'>
                    <p className='my-2 border-b '>500GB Storage Data</p>
                    <p className='my-2 border-b '>1GB Storage Data</p>
                    <p className='my-2 border-b '>2GB Storage Data</p>
                </div>

                <button className='w-[200px]  bg-[#00df94] font-bold py-2 my-3 rounded-md'>Free Trial</button>
            </div>
            {/* card 2 */}
            <div className='bg-gray-100 shadow-xl flex flex-col md:my-0 items-center justify-center py-6 my-16 duration-500 md:hover:scale-105'>
                <img src={Double} className='w-20' alt="" />
                <h1 className='text-3xl font-bold py-5'>Partnership</h1>
                <p className=' text-2xl font-bold'>$149</p>
                <div className='my-2 text-md text-center font-medium'>
                    <p className='my-2 border-b '>500GB Storage Data</p>
                    <p className='my-2 border-b '>1GB Storage Data</p>
                    <p className='my-2 border-b '>2GB Storage Data</p>
                </div>

                <button className='w-[200px]  bg-[#00df94] font-bold py-2 my-3 rounded-md'>Free Trial</button>
            </div>
            {/* card 3 */}
            <div className=' shadow-xl flex mx-6 flex-col items-center justify-center py-6 my-6 duration-500 md:hover:scale-105'>
                <img src={Triple} className='w-20' alt="" />
                <h1 className='text-3xl font-bold py-5'>Group Account</h1>
                <p className=' text-2xl font-bold'>$149</p>
                <div className='my-2 text-md text-center font-medium'>
                    <p className='my-2 border-b '>500GB Storage Data</p>
                    <p className='my-2 border-b '>1GB Storage Data</p>
                    <p className='my-2 border-b '>2GB Storage Data</p>
                </div>

                <button className='w-[200px]  bg-[#00df94] font-bold py-2 my-3 rounded-md'>Free Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards