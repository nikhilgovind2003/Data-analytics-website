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
    <div className=' text-white py-24 px-4 max-w-[1240px] grid md:grid-cols-2'>
        <div>
        <h1 className='w-full text-2xl font-bold text-[#00df92]'>REACT.</h1>
        <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aliquid ullam debitis odit aspernatur asperiores.</p>
        
        <div>
            <FaFacebookSquare />
            <FaInstagram />
            <FaTwitterSquare />
            <FaGithubSquare />
            <FaDribbbleSquare />
        </div>
        </div>
    </div>
  )
}

export default Footer