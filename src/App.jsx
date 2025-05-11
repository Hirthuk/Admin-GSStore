import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import Login from './pages/Login';
import AddItem from './pages/AddItem';
import ListItem from './pages/ListItem';
import Order from './pages/Orders';
import 'react-toastify/dist/ReactToastify.css';

export const backendURL = import.meta.env.VITE_BACKEND_URL;
const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  return (
    <div className="min-h-screen bg-gray-50">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        className="w-full max-w-[90vw] mx-auto"
      />
      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <div className="flex flex-col h-screen">
          <Navbar 
            setToken={setToken}
            onMenuToggle={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          />
          
          {/* Mobile Sidebar Dropdown */}
          {mobileSidebarOpen && (
            <div className="md:hidden bg-white shadow-lg z-20">
              <SideBar onItemClick={() => setMobileSidebarOpen(false)} />
            </div>
          )}

          <div className="flex flex-1 overflow-hidden">
            {/* Desktop Sidebar (always visible) */}
            <div className="hidden md:block w-64 bg-white border-r border-gray-200">
              <SideBar />
            </div>
            
            {/* Main content */}
            <main className="flex-1 overflow-auto p-4 md:p-6">
              <Routes>
                <Route path="/add" element={<AddItem token = {token} />} />
                <Route path="/listitems" element={<ListItem  token = {token} />} />
                <Route path="/orders" element={<Order  token = {token} />} />
              </Routes>
            </main>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;