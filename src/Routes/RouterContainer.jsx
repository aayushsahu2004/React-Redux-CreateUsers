import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Register from '../components/Register'
import UserInfo from '../components/UserInfo'

const RouterContainer = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/userinfo' element={<UserInfo />} />
      </Routes>
    </div>
  )
}

export default RouterContainer