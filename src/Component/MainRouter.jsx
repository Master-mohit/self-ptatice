import React from 'react'
import { Routes, Route } from 'react-router-dom'
import User from "./User"
import About from "./About"
import Faltu from './Faltu'
import Home from './Home'


const MainRouter = () => {
  return (
    <Routes>
      <Route path='/about' element={<About />} />
      <Route path='/user' element={<User />} />
      <Route path='*' element={<Faltu />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  )
}

export default MainRouter
