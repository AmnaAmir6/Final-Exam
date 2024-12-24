import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HomePage() {
    const navigate = useNavigate();
    const handleCreateTask =()=>{
        navigate("/create");
    }
const [tasks,setTasks]=useState([]);
    useEffect(()=>{fetchData();},[])
    const fetchData = async()=>{
        try {
        const response = await axios.get("http://localhost:4000/task/task")
        console.log("response: " ,response.data);

    } catch (error) {
            console.log("error");
    }
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
    {/* <div>
        {tasks.map(task=>())}
    </div> */}
    </>
  )
}

export default HomePage