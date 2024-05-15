import React from 'react'
import { useSelector } from 'react-redux'
import { userDets } from '../store/reducers/userReducer'
import Cards from './Cards'

const UserInfo = () => {
  const state = useSelector(state => state.userDets)
  return state ? (
    <div className='w-full h-[90.6vh] py-10 px-14 overflow-y-auto flex flex-wrap items-center justify-center gap-10'>
      {state.length > 0 ? (
        state.map(state => <Cards key={state.Userid} state={state} />)
      ) : (
        <h1 className='text-xl font-medium text-center'>No User Found!</h1>
      )}
    </div>
  ) : <h1 className="text-2xl font-semibold text-center mt-64">Loading Users....</h1>
}

export default UserInfo