import React from 'react';
import assets from '../assets/assets';

const SingleItems = ({ image, name, category, price, onDelete }) => {
  return (
    <div className="grid grid-cols-12 gap-4 items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
      <div className="col-span-12 md:col-span-3">
        <img 
          src={image} 
          alt={name} 
          className="w-20 h-20 object-cover rounded-md"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/80';
          }}
        />
      </div>
      
      <div className="col-span-6 md:col-span-3 ">
        <p className="font-medium text-gray-800 truncate">{name}</p>
      </div>
      
      <div className="col-span-3 md:col-span-2  -mt-28 md:-mt-0">
        <p className="text-gray-600 capitalize">{category}</p>
      </div>
      
      <div className="col-span-3 md:col-span-2 -mt-28 md:-mt-0">
        <p className="font-medium text-gray-800">{price.toFixed(2)}</p>
      </div>
      
      <div className="col-span-12 md:col-span-2 flex justify-end  -mt-20 md:-mt-0">
        <button 
          onClick={onDelete}
          className="p-2 text-red-500 hover:text-red-700 transition-colors"
          aria-label="Delete product"
        >
          <img 
            src={assets.cross} 
            alt="Delete" 
            className="w-5 h-5" 
          />
        </button>
      </div>
    </div>
  );
};

export default SingleItems;