import React from 'react'
// import {Route , Routes, Switch} from "react-router-dom"
import About from "./Component/About"
import User from "./Component/User"
import Faltu from './Component/Faltu'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
  
  <>
  <Routes>
    <Route path='/about' Component={About}></Route>
    <Route path='/user' Component={User}></Route>
    <Route path='*' Component={Faltu}></Route>

  </Routes>
  </> 
    
    
  )
}

export default App
