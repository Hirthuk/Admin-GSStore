import React, { useEffect, useState } from 'react';
import assets from '../assets/assets';
import { toast } from 'react-toastify';
import axios from 'axios';
import { backendURL } from '../App';
const AddItem = ({token}) => {

    const [image1, setImage1] = useState(false);
    const [image2, setImage2] = useState(false);
    const [image3, setImage3] = useState(false);
    const [image4, setImage4] = useState(false);

    const [name, setName] = useState('');
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState("Men");
    const [subCategory, setSubCategory] = useState("TopWear");
    const [bestSeller, setBestSeller] = useState(false);
    const [sizes, setSizes] = useState([]);

    const handleFormSubmit = async (e) => {
      e.preventDefault();
     try{
      const formData = new FormData();
      formData.append('name',  name);
      formData.append('description',description);
      formData.append('price', price);
      formData.append('category', category);
      formData.append('subCategory',subCategory);
      formData.append('bestseller',bestSeller);
      // Can append array in to form data so converting to string in backedn we already using JSON.parse the input so it will work
      formData.append('sizes',JSON.stringify(sizes));

      // Adding images to the form
      // Checking the image is available before trying to append 
     image1 && formData.append('image1', image1);
     image2 && formData.append('image2',image2);
     image3 && formData.append('image3',image3);
     image4 && formData.append('image4', image4);
    // We have to pass token bcz in add product route we have middleware which cross verify the token from the header of the request
     const response = await axios.post(backendURL+"api/product/addProduct",formData, {
      headers: {token}
     });
     if(response.data.success){
      toast.success(response.data.message);
      setName('');
      setDescription('');
      setPrice('');

      setImage1(false);
      setImage2(false);
      setImage3(false);
      setImage4(false);
     }
     else{
      toast.error(response.data.message);
     }
     }
     catch(error){
        toast.error(error.message);
     }

    }
  return ( 
    <form action="" onSubmit={handleFormSubmit}>
    <div className="w-full max-w-full overflow-x-hidden">
      <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mx-auto max-w-4xl">
        <h1 className="text-xl md:text-2xl font-bold mb-4">Add New Product</h1>
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-3">Upload Images</h2>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            <label className="aspect-[1/1] w-full max-w-[150px] border-2 border-dashed border-gray-300 onClick={() => {setSizes(prev => prev.includes)}} rounded-lg flex items-center justify-center bg-gray-50 hover:bg-gray-100 hover:cursor-pointer cursor-pointer">
              <img src={image1 ? URL.createObjectURL(image1) : assets.upload_area} alt="Upload" className="h-10 w-auto" />
              <input onChange={(e) => {setImage1(e.target.files[0])}} type="file" className="hidden" required />
            </label>
            <label className="aspect-[1/1] w-full max-w-[150px] border-2 border-dashed border-gray-300 onClick={() => {setSizes(prev => prev.includes)}} rounded-lg flex items-center justify-center bg-gray-50 hover:bg-gray-100 hover:cursor-pointer cursor-pointer">
              <img src={image2 ? URL.createObjectURL(image2) : assets.upload_area} alt="Upload" className="h-10 w-auto" />
              <input onChange={(e) => {setImage2(e.target.files[0])}} type="file" className="hidden"  />
            </label>
            <label className="aspect-[1/1] w-full max-w-[150px] border-2 border-dashed border-gray-300 onClick={() => {setSizes(prev => prev.includes)}} rounded-lg flex items-center justify-center bg-gray-50 hover:bg-gray-100 hover:cursor-pointer cursor-pointer">
              <img src={image3 ? URL.createObjectURL(image3) : assets.upload_area} alt="Upload" className="h-10 w-auto" />
              <input onChange={(e) => {setImage3(e.target.files[0])}}  type="file" className="hidden" />
            </label>
            <label className="aspect-[1/1] w-full max-w-[150px] border-2 border-dashed border-gray-300 onClick={() => {setSizes(prev => prev.includes)}} rounded-lg flex items-center justify-center bg-gray-50 hover:bg-gray-100 hover:cursor-pointer cursor-pointer">
              <img src={image4 ? URL.createObjectURL(image4) : assets.upload_area} alt="Upload" className="h-10 w-auto" />
              <input onChange={(e) => {setImage4(e.target.files[0])}}  type="file" className="hidden" />
            </label>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-medium">Product Details</h2>
          
          <div>
            <label className="block text-sm font-medium mb-1">Product Name</label>
            <input
             onChange={(e) => {setName(e.target.value)}}
              type="text"
              value={name}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product name"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <select onChange={(e) => {setCategory(e.target.value)}} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="Men">Men</option>
                <option value="Womens">Women</option>
                <option value="Kids">Kids</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Sub Category</label>
              <select onChange={(e) => {setSubCategory(e.target.value)}} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="TopWear">TopWear</option>
                <option value="BottomWear">BottomWear</option>
                <option value="WinterWear">WinterWear</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Price</label>
              <input
                onChange={(e) => {setPrice(e.target.value)}}
                value={price}
                type="number"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter price"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              onChange={(e) => {setDescription(e.target.value)}}
              value={description}
              className="w-full p-2 border border-gray-300 rounded-md h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Product description"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Available Sizes</label>
            <div className="flex flex-wrap gap-2">
              {/* Verifying whether the Size already present if present we are removing if not present are adding it with previous elements */}
              <p onClick={() => {setSizes(prev => prev.includes("S") ? prev.filter((item) => item != 'S') : [...prev, 'S'])}} className= {`px-3 py-1 border border-gray-300 rounded-md hover:bg-blue-100 hover:cursor-pointer ${sizes.includes("S") ? "bg-blue-400 text-black" : '' }`}>S</p>
              <p onClick={() => {setSizes(prev => prev.includes("M") ? prev.filter((item) => item != 'M') : [...prev, 'M'])}} className= {`px-3 py-1 border border-gray-300 rounded-md hover:bg-blue-100 hover:cursor-pointer ${sizes.includes("M") ? "bg-blue-400 text-black" : '' }`}>M</p>
              <p onClick={() => {setSizes(prev => prev.includes("L") ? prev.filter((item) => item != 'L') : [...prev, 'L'])}} className= {`px-3 py-1 border border-gray-300 rounded-md hover:bg-blue-100 hover:cursor-pointer ${sizes.includes("L") ? "bg-blue-400 text-black" : '' }`}>L</p>
              <p onClick={() => {setSizes(prev => prev.includes("XL") ? prev.filter((item) => item != 'XL') : [...prev, 'XL'])}} className= {`px-3 py-1 border border-gray-300 rounded-md hover:bg-blue-100 hover:cursor-pointer ${sizes.includes("XL") ? "bg-blue-400 text-black" : '' }`}>XL</p>
              <p onClick={() => {setSizes(prev => prev.includes("XXL") ? prev.filter((item) => item != 'XXL') : [...prev, 'XXL'])}} className= {`px-3 py-1 border border-gray-300 rounded-md hover:bg-blue-100 hover:cursor-pointer ${sizes.includes("XXL") ? "bg-blue-400 text-black" : '' }`}>XXL</p>
            </div>
          </div>
              {/* onClick={() => {setSizes(prev => prev.includes)}} className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 hover:cursor-pointer" */}
          <div className="flex items-center gap-2 pt-2">
            <input 
             checked = {bestSeller}
              onClick={() => {setBestSeller(prev => !prev)}}
              type="checkbox" 
              id="bestseller" 
              className="w-4 h-4 border border-gray-300 rounded focus:ring-blue-500" 
            />
            <label htmlFor="bestseller" className="text-sm">Add to Best Seller</label>
          </div>
        </div>

        <button
          className="w-full md:w-1/2  items-center mt-6 px-4 py-2 bg-black text-white rounded-md transition-all duration-300 active:scale-90 active:bg-gray-500 hover:bg-slate-800 cursor-pointer shadow-sm hover:shadow-md"
          type="submit"
        >
          Add Product
        </button>
      </div>
    </div>
    </form>
  );
};

export default AddItem;