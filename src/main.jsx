import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import './index.css'

import Home from './pages/Home'
import About from './pages/About'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/teste'>
      <Routes>
        <Route index element={<Home />} />
        <Route path="sobre" element={<About />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
