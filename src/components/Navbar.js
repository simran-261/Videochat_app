import React from 'react'
import logo from "../assets/logo.png"
const Navbar = () => {
  return (
    <div className='bg-black h-[5rem] flex items-center justify-between'>
        <div className=' flex w-[12rem] h-[5rem]  '>
            <img src={logo} alt="logo" className='objevct-cover p-2'/>
        </div>


        <div className=''>
            <ul className='text-white font-bold flex items-center gap-10  px-8 text-[25px]'>
                <li>About Us</li>
                <li>Product</li>
                <li>Blog</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar