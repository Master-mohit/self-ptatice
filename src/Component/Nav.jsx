import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul >
        <li><Link to="/about">About</Link></li>
        <li><Link to="/user">User</Link></li>
        <li><Link to="/">Others</Link></li>
        <li><Link to="/home">chacha</Link></li>

{/* 
        <NavLink to = "/about">About</NavLink>
        <NavLink to = "/user">USer</NavLink>
        <NavLink to = "/">Others</NavLink> */}
      </ul>
    </nav>
  )
}

export default Nav
