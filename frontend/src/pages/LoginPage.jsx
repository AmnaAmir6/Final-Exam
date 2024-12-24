import React, { useEffect, useState } from 'react'
import toast from "react-hot-toast"
import { useNavigate } from 'react-router-dom'
import axios from "axios"

function LoginPage() {
    const [FormData,setFormData]=useState({
        username:"",
        password:""
    })
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData({...FormData, [name]: value})
      }
      const navigate = useNavigate()

const handleLogin = async(e) =>{
    e.preventDefault();
    const response = await axios.post("http://localhost:4000/auth/login",{
        username:FormData.username,
        password:FormData.password,
    })
    localStorage.setItem("Token",response.data.token);
    localStorage.setItem("username",FormData.username);
    console.log("Logged in user : ",FormData.username," with token ",response.data.token)
    toast.success("Logged In");
    navigate("/");
    }
    
    console.log("on login page")

  return (
    <>
    <div className='w-full  h-[585px] bg-gradient-to-t from-emerald-300 to-teal-700 flex justify-center '>
    <div className='max-w-2xl w-full bg-white m-6 space-x-4 flex justify-center text-center rounded-xl p-6'>
    <form onSubmit={handleLogin}>
        <div className='relative'>
        <label className='text-2xl pt-4 '>Username
        <input className=' ml-6 px-4 py-2 rounded-lg border-slate-700 focus:border-teal-700 bg-slate-100'
        type="text"
        name="username"
        value={FormData.username}
        onChange={handleChange}
        placeholder='Enter your Username'
         />
        </label>
        </div>
        <div className='p-4'>
        
          <label className='text-2xl pt-4'>Password
          <input className='ml-6 px-4 py-2 rounded-lg border-slate-700 focus:border-teal-700 bg-slate-100'
        type="password"
        name="password"
        placeholder='Enter your Password'
        value={FormData.password}
        onChange={handleChange}
         />
          </label>
          </div>
         <button className='bg-teal-500 rounded-lg p-4 px-8 hover:bg-teal-600'
         type='submit'>
            Submit
         </button>
    </form>
    </div>
    </div>
    </>
  )
}


export default LoginPage