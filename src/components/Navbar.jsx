import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    // NavBar section
    <section className='flex flex-row justify-between mt-16 align-middle text-center'>
       <img
               src={assets.logo}
               className="w-36  border border-gray-500 rounded-md shadow-lg hover:cursor-pointer"
               alt="Logo_image"
               srcset=""
             />
        {/* Logout Button */}
        <div className=''>
          <button>Logout</button>
        </div>
    </section>
  )
}

export default Navbar
