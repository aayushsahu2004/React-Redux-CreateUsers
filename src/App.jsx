import React from 'react'
import Home from './components/Home'
import Nav from './components/Nav'
import RouterContainer from './Routes/RouterContainer'

const App = () => {
  return (
    <div className='w-full h-screen bg-zinc-400'>
      <Nav/>
      <RouterContainer/>
    </div>
  )
}

export default App