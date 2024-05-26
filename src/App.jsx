import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import MainRouter from './Component/MainRouter'
import Nav from './Component/Nav'
import axios from 'axios'

const App = () => {

  return (
    
      <>
        <Nav />
        <MainRouter />
    
      </>
   
  )
}

export default App
