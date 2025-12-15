import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Components/Home'
// import Loader from './components/Loader'

function App() {

  return (
    <div className='w-screen h-auto 2xl:flex 2xl:justify-center'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
