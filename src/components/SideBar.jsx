import React from 'react'
import {NavLink} from 'react-router-dom'
import { assets } from '../assets/assets'
const SideBar = () => {
  return (
    <div className='flex flex-row'>
    <section className='flex flex-col gap-5  mt-6 w-1/5 mr-0'>
        <NavLink to={'add'} className='flex flex-row gap-2 items-center border border-gray-500 rounded-sm py-1 px-2 border-r-0'>
            <img className='h-5 w-5 shadow-sm' src={assets.add_icon} alt="add_icon" />
            <p className='hidden md:block'>Add Items</p>
        </NavLink>
        <NavLink to={'listitems'} className='flex flex-row gap-2 items-center border border-gray-500 rounded-sm py-1 px-2 border-r-0'>
            <img className='h-5 w-5 shadow-sm' src={assets.order_icon} alt="add_icon" />
            <p className='hidden md:block'>List Items</p>
        </NavLink>
        <NavLink to={'orders'} className='flex flex-row gap-2 items-center border border-gray-500 rounded-sm py-1 px-2 border-r-0'>
            <img className='h-5 w-5 shadow-sm' src={assets.order_icon} alt="add_icon" />
            <p className='hidden md:block'>Orders</p>
        </NavLink>
    </section>
    <p className='min-h-screen bg-gray-400 h-[1px] w-[0.5px]'></p>
    </div>
  )
}

export default SideBar
