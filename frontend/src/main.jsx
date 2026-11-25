import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoginPage from './App.jsx'
import TopHeader from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginPage/>
    {/* <TopHeader /> */}
  </StrictMode>,
)
