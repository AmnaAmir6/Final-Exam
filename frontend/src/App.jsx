import { useEffect } from "react"
import toast from "react-hot-toast"
import { BrowserRouter,Routes,Route } from "react-router-dom"

function App() {
  useEffect(()=>{
toast.success("Welcome");
  },[])
  return (
    <h1 className="text-3xl font-bold underline bg-slate-500">
      Hello world!
    </h1>
  )
}

export default App