import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
const Login = ({setToken}) => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const backendURL = import.meta.env.VITE_BACKEND_URL;
    const onSumbitHandler = async (e) => {
        try{
            // To Stop reloading te page
            e.preventDefault();
            const response = await axios.post(backendURL+"api/user/adminlogin",{email,password});
            if(response.data.success){
                setToken(response.data.token);
            }
            else{
                toast.error(response.data.message)
            }
            // console.log(response);
        }
        catch(error){
            console.error(error.message);
            toast.error(error.message);
        }
    }
  return (
    // Login form
    <section className='w-full h-full min-h-screen bg-slate-50 flex text-center justify-center'>
        <div className='bg-white rounded-md shadow-lg flex flex-col gap-2 m-auto p-5 border border-gray-50 w-[93%] md:w-[45%] lg:w-[45%] h-80'>
            <h1 className='text-2xl font-bold'>Admin Panel</h1>
            <form className = 'space-y-2 text-base flex flex-col gap-1 items-start pl-5 pr-2'  action="" onSubmit={onSumbitHandler}>
                <p>Email Address</p>
               <input type="email" name="email" id="email"
               onChange={(e) => setEmail(e.target.value)}
               value={email}
               required
               placeholder='your@email.com'
               className='outline-none border w-full h-10 items-center px-5 border-gray-800 text-base rounded-md'
                />
                <p>Password</p>
               <input type="password" name="password" id="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               placeholder='password'
               required
               className='outline-none border w-full h-10 items-center px-5 border-gray-800 text-base rounded-md'
                />
                <div className='flex flex-row text-center justify-center border w-full h-12 bg-black text-white text-xl py-auto rounded-lg transition-all duration-200 hover:cursor-pointer active:bg-gray-800 active:scale-95 hover:bg-gray-600 hover:shadow-sm'>
                <button className='w-full' type="submit">Log In</button>
                </div>
                
            </form>
        </div>
    </section>
  )
}

export default Login
