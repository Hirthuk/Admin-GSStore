import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendURL } from '../App';
import { toast } from 'react-toastify';
import SingleItems from '../components/SingleItems';

const ListItem = ({ token }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const listProducts = async () => {
    try {
      const response = await axios.get(`${backendURL}api/product/listProduct`, token, {
        headers: { token } // Directly passing token in headers as per your backend
      });
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message || 'Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    listProducts();
  }, []);

  const handleDelete = async (productId) => {
    try {
      const response = await axios.post(
        `${backendURL}api/product/removeProduct/`,
        { id: productId }, // Product ID in request body
        {
          headers: { token } // Token in headers
        }
      );
      
      if (response.data.success) {
        toast.success("Disabled in preview")
        // Disable in demo part -> Enable this to delete from the admin portal
        // toast.success('Product deleted successfully');
        // setProducts(products.filter(product => product._id !== productId));
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message || 'Failed to delete product');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">All Products</h1>
      
      <div className="hidden md:grid grid-cols-12 gap-4 bg-gray-100 p-4 rounded-lg shadow-sm mb-4">
        <div className="col-span-3 font-medium text-gray-700">Image</div>
        <div className="col-span-3 font-medium text-gray-700">Name</div>
        <div className="col-span-2 font-medium text-gray-700">Category</div>
        <div className="col-span-2 font-medium text-gray-700">Price</div>
        <div className="col-span-2 font-medium text-gray-700">Actions</div>
      </div>
      
      <div className="space-y-4">
        {products.length > 0 ? (
          products.map((item) => (
            <SingleItems 
              key={item._id}
              id={item._id}
              image={item.image[0]} 
              name={item.name} 
              category={item.category} 
              price={item.price}
              onDelete={() => handleDelete(item._id)}
            />
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500 text-lg">No products found</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ListItem;