import { useEffect } from "react"
import { BrowserRouter,Routes,Route, useNavigate } from "react-router-dom"
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import axios from "axios";
import CreateTaskPage from "./pages/CreateTaskPage";


function App() {

  useEffect(()=>{
    handleLoginBack()
  },[]);
  const user = localStorage.getItem("username");
  const handleLoginBack = async()=>{
    try {
      const Token = localStorage.getItem("Token");
      
      if(!Token)return;

      const res = await axios.get("http://localhost:4000/auth/loginBack",
        {
          headers:{
            Authorization:`Bearer ${Token}`,
          }
        }
      )
      console.log("Username: ",res.data.username);
      localStorage.setItem(res.data.username);
    } catch (error) {
      
    }
  }

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ user?<HomePage/>: <LoginPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/create" element={<CreateTaskPage/>}/>
      </Routes>
    </BrowserRouter>
    {/* <h1 className="text-3xl font-bold underline bg-slate-500">
      Hello world!
    </h1> */}
    </>
  )
}

export default App