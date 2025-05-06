import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    // NavBar section
    <div>
    <section className='flex flex-row justify-between mt-8 align-middle text-center items-center'>
       <img
               src={assets.logo}
               className="w-36  border border-gray-500 rounded-md shadow-lg hover:cursor-pointer"
               alt="Logo_image"
               srcset=""
             />
        {/* Logout Button */}
        <div className='group relative'>
          <button className='bg-black text-white px-4 py-1 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-gray-500 hover:shadow-lg active:bg-gray-700 active:scale-95 w-24 h-10 hover:text-pretty' >Logout</button>
          </div>

    </section>
    <p className='mt-4 w-full bg-gray-400 h-[1px]'></p>
    </div>
  )
}

export default Navbar
