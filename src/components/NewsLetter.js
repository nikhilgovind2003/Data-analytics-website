import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full bg-black py-16 px-4 text-white'>
        <div className='max-w-[1240px] mx-auto px-4 grid md:grid-cols-3'>
            <div className='md:col-span-2 py-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold'>Want tips & tricks to optimize your flow?</h1>
                <p className='py-2'>Sign up your newsletter and stay  upto there</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col items-center justify-center sm:flex-row sm:items-center  gap-2'>
                    <input type="email" placeholder='Enter Email' className='rounded-md w-full p-3 my-3 '/>
                    <button className='bg-[#00df92] text-black p-3 w-[200px] rounded-md font-medium text-md md:px-0'>Get  Started</button>
                </div>
                <p className='my-3'>We can bout protection of your data. Read your <span className='text-[#00df94] underline'>Privacy Policy.</span></p>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter