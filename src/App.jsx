import React from 'react'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import {Routes, Route} from 'react-router-dom'
import AddItem from './pages/AddItem'
import ListItem from './pages/ListItem'
import Order from './pages/Orders'
import { useState } from 'react'
import Login from './pages/Login'
const App = () => {
  const [token,setToken] = useState('');
  return (
    <div className='mx-2 md:mx-10'>
      {token == "" ? <Login/> :
        <>
        <Navbar/>
        <SideBar/>
        <div className='w-[75%] mx-auto ml-[max(5vw,25px)] my-8 '>
         <Routes>
           <Route path='/add' element={<AddItem/>}/>
           <Route path='/listitem' element={<ListItem/>}/>
           <Route path='/orders' element={<Order/>}/>
         </Routes>
        </div>
        </> }
    
    </div>
  )
}

export default App
