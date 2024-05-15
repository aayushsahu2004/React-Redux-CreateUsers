import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='w-full h-14 bg-zinc-800 text-zinc-200 flex items-center justify-center gap-10'>
        <NavLink className={(e) => (e.isActive ? "text-[#fe4e4e]" : " ")} to="/">Home</NavLink>
        <h1>|</h1>
        <NavLink className={(e) => (e.isActive ? "text-[#fe4e4e]" : " ")} to="/Register">Register</NavLink>
        <h1>|</h1>
        <NavLink className={(e) => (e.isActive ? "text-[#fe4e4e]" : " ")} to="/userinfo">AllUsers</NavLink>
    </div>
  )
}

export default Nav