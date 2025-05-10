import React from 'react';
import assets from '../assets/assets';

const AddItem = () => {
  
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mx-auto max-w-4xl">
        <h1 className="text-xl md:text-2xl font-bold mb-4">Add New Product</h1>
        
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-3">Upload Images</h2>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            <label className="aspect-[1/1] w-full max-w-[150px] border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50 hover:bg-gray-100 cursor-pointer">
              <img src={assets.upload_area} alt="Upload" className="h-10 w-auto" />
              <input type="file" className="hidden" />
            </label>
            <label className="aspect-[1/1] w-full max-w-[150px] border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50 hover:bg-gray-100 cursor-pointer">
              <img src={assets.upload_area} alt="Upload" className="h-10 w-auto" />
              <input type="file" className="hidden" />
            </label>
            <label className="aspect-[1/1] w-full max-w-[150px] border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50 hover:bg-gray-100 cursor-pointer">
              <img src={assets.upload_area} alt="Upload" className="h-10 w-auto" />
              <input type="file" className="hidden" />
            </label>
            <label className="aspect-[1/1] w-full max-w-[150px] border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50 hover:bg-gray-100 cursor-pointer">
              <img src={assets.upload_area} alt="Upload" className="h-10 w-auto" />
              <input type="file" className="hidden" />
            </label>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-medium">Product Details</h2>
          
          <div>
            <label className="block text-sm font-medium mb-1">Product Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product name"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Men</option>
                <option>Women</option>
                <option>Kids</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Sub Category</label>
              <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>TopWear</option>
                <option>BottomWear</option>
                <option>WinterWear</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Price</label>
              <input
                type="number"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter price"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Product description"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Available Sizes</label>
            <div className="flex flex-wrap gap-2">
              {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <button
                  key={size}
                  type="button"
                  className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <input 
              type="checkbox" 
              id="bestseller" 
              className="w-4 h-4 border border-gray-300 rounded focus:ring-blue-500" 
            />
            <label htmlFor="bestseller" className="text-sm">Add to Best Seller</label>
          </div>
        </div>

        <button
          className="w-full mt-6 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
          type="submit"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddItem;