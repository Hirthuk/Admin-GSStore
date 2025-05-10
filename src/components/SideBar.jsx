import React from 'react';
import { NavLink } from 'react-router-dom';
import assets from '../assets/assets';

const SideBar = ({ onItemClick }) => {
  return (
    <div className="flex flex-col p-4">
      <div className="space-y-2">
        {/* Manual NavLinks instead of mapped ones */}
        <NavLink
          to="add"
          onClick={onItemClick}
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg ${
              isActive ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
            }`
          }
        >
          <img className="h-5 w-5" src={assets.add_icon} alt="Add Items" />
          <span className="text-sm font-medium">Add Items</span>
        </NavLink>

        <NavLink
          to="listitems"
          onClick={onItemClick}
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg ${
              isActive ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
            }`
          }
        >
          <img className="h-5 w-5" src={assets.parcel_icon} alt="List Items" />
          <span className="text-sm font-medium">List Items</span>
        </NavLink>

        <NavLink
          to="orders"
          onClick={onItemClick}
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg ${
              isActive ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
            }`
          }
        >
          <img className="h-5 w-5" src={assets.order_icon} alt="Orders" />
          <span className="text-sm font-medium">Orders</span>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;