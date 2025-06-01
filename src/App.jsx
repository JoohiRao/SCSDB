import React from 'react'
import Home from './components/Home'
import { Route,Routes } from 'react-router-dom'
function App() {
  return (
    <div className='w-[100%] h-screen bg-zinc-800 flex'>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    
    </div>
  )
}

export default App
