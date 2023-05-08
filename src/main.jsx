import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {App1, App2, App3} from './App.jsx'
import './index.css'

// https://github.com/LuxLingTN/luxLing
// git init
// git add .
// git commit -m "1commit"
// git branch -M main
// git remote add origin [link].git
// git push -u origin main

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App1 />} />
      <Route path="ex" element={<App2 />} />
      <Route path="gen" element={<App3 />} />
    </Routes>
  </BrowserRouter>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
