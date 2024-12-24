import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomePage() {
    const navigate = useNavigate();
    const handleCreateTask =()=>{
        navigate("/create");
    }
  return (
    <>
    <button className='bg-teal-500 rounded-lg p-4 px-8 hover:bg-teal-600'
    onClick={handleCreateTask}>
        Create
    </button>
    <button className='bg-teal-500 rounded-lg p-4 px-8 hover:bg-teal-600'>
        Update
    </button>
    <button className='bg-teal-500 rounded-lg p-4 px-8 hover:bg-teal-600'>
        Delete
    </button>
    <button className='bg-teal-500 rounded-lg p-4 px-8 hover:bg-teal-600'>
        Create
    </button>
    </>
  )
}

export default HomePage