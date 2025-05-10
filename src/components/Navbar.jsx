import React from 'react';
import assets from '../assets/assets';

const Navbar = ({ setToken, onMenuToggle }) => {
  return (
    <div>
      <section className='flex flex-row justify-between mt-8 mx-0 md:mx-4 align-middle text-center items-center'>
        {/* Mobile Menu Button (new addition) */}
        <button 
          onClick={onMenuToggle}
          className='md:hidden mr-2 p-1'
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round"  strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <img
          src={assets.logo}
          className="w-36 border border-gray-500 rounded-md shadow-lg hover:cursor-pointer"
          alt="Logo"
        />

        {/* Logout Button */}
        <div className='group relative'>
          <button 
            onClick={() => setToken('')} 
            className='bg-black text-white px-4 py-1 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-gray-500 hover:shadow-lg active:bg-gray-700 active:scale-95 w-24 h-10'
          >
            Logout
          </button>
        </div>
      </section>
      <div className='mt-4 w-full bg-gray-400 h-[1px]'></div>
    </div>
  );
};

export default Navbar;