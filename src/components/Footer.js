import React from 'react'
import { 
    FaInstagram,
    FaFacebookSquare,
    FaTwitterSquare, 
    FaGithubSquare,
    FaDribbbleSquare
 } from "react-icons/fa";


const Footer = () => {
  return (
    <div className=' text-gray-100 py-16 px-24 grid md:grid-cols-3'>
      <div className=''>
        <h1 className='w-full text-2xl font-bold text-[#00df92]'>REACT.</h1>
        <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aliquid ullam debitis odit aspernatur asperiores.</p>
        <div className='flex w-full md:w-[50%] justify-between my-4'>
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='grid grid-cols-4 md:col-span-2 sm:my-7 md:ml-4'>
      <div className=''>
        <p className=' text-gray-400'>Solutions</p>
        <ul>
          <li className='text-sm my-2'>Analytic</li>
          <li className='text-sm my-2'>Analytic</li>
          <li className='text-sm my-2'>Analytic</li>
          <li className='text-sm my-2'>Analytic</li>
          <li className='text-sm my-2'>Analytic</li>
        </ul>
      </div>
      <div className=''>
        <p className=' text-gray-400'>Solutions</p>
        <ul>
          <li className='text-sm my-2'>Analytic</li>
          <li className='text-sm my-2'>Analytic</li>
          <li className='text-sm my-2'>Analytic</li>
          <li className='text-sm my-2'>Analytic</li>
          <li className='text-sm my-2'>Analytic</li>
        </ul>
      </div>
      <div className=''>
        <p className=' text-gray-400'>Solutions</p>
        <ul>
          <li className='text-sm my-2'>Analytic</li>
          <li className='text-sm my-2'>Analytic</li>
          <li className='text-sm my-2'>Analytic</li>
          <li className='text-sm my-2'>Analytic</li>
          <li className='text-sm my-2'>Analytic</li>
        </ul>
      </div>
      <div className=''>
        <p className=' text-gray-400'>Solutions</p>
        <ul>
          <li className='text-sm my-2'>Analytic</li>
          <li className='text-sm my-2'>Analytic</li>
          <li className='text-sm my-2'>Analytic</li>
          <li className='text-sm my-2'>Analytic</li>
          <li className='text-sm my-2'>Analytic</li>
        </ul>
      </div>
      </div>
</div>
  )
}

export default Footer