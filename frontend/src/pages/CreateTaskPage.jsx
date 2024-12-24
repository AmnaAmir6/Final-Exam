import React, { useEffect, useState } from 'react'
import toast from "react-hot-toast"
import { useNavigate } from 'react-router-dom'
import axios from "axios"

function CreateTaskPage() {
    const [FormData,setFormData]=useState({
        name:"",
        description:"",
        dueDate:"",
    })
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData({...FormData, [name]: value})
      }
      const navigate = useNavigate()

const handleCreate = async(e) =>{
    try{
    e.preventDefault();
    const response = await axios.post("http://localhost:4000/task/task",{
        name:FormData.name,
        description:FormData.description,
        dueDate:FormData.dueDate
    })
   
  
    toast.success("Created Task");
    navigate("/");
}
catch(error)
{
    console.log(error);
}
    }

    
    

  return (
    <>
    <div className='w-full  h-[585px] bg-gradient-to-t from-emerald-300 to-teal-700 flex justify-center '>
    <div className='max-w-2xl w-full bg-white m-6 space-x-4 flex justify-center text-center rounded-xl p-6'>
    <form onSubmit={handleCreate}>
        <div className='relative'>
        <label className='text-2xl pt-4 '>Name
        <input className=' ml-6 px-4 py-2 rounded-lg border-slate-700 focus:border-teal-700 bg-slate-100'
        type="text"
        name="name"
        value={FormData.name}
        onChange={handleChange}
        placeholder='Enter your Username'
         />
        </label>
        </div>
        <div className='p-4'>
        
          <label className='text-2xl pt-4'>Due Date
          <input className='ml-6 px-4 py-2 rounded-lg border-slate-700 focus:border-teal-700 bg-slate-100'
        type="date"
        name="dueDate"
        placeholder='Enter Description'
        value={FormData.dueDate}
        onChange={handleChange}
         />
          </label>
          </div>
        <div className='p-4'>
        
          <label className='text-2xl pt-4'>Description
          <input className='ml-6 px-4 py-2 rounded-lg border-slate-700 focus:border-teal-700 bg-slate-100'
        type="test"
        name="description"
        placeholder='Enter Description'
        value={FormData.description}
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


export default CreateTaskPage