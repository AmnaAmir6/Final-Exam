import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'
import 'font-awesome/css/font-awesome.min.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster/>
    <App />
  </StrictMode>,
)