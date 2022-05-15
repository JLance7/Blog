import React from 'react'
import ReactDOM from 'react-dom/client'
import Blog from './componenets/blog'
import Navbar from './componenets/navbar'
import Edit from './componenets/edit'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar />
      <Blog />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/new' element={<Edit action='new' />} />
      <Route path='/edit/:id' element={<Edit action='edit'/>} />
      <Route path='*' element={<App />} />
    </Routes>
    
  </BrowserRouter>
)