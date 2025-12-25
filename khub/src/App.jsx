import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Components/Home'
// import Loader from './components/Loader'
import Blog from './Components/routes/Blog'
import { Course } from './Components/routes/Course'
import { AutoCAD } from './Components/routes/courseRoutes/AutoCAD'
import LoginForm from './Components/login/Login'
import MememberShip from './Components/MememberShip'

function App() {

  return (
    <div className='w-screen h-auto 2xl:flex 2xl:justify-center'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Course' element={<Course />} />
          <Route path='/Course/AutoCAD' element={<AutoCAD />} />
          <Route path='/LoginForm' element={<LoginForm />} />
          {/* <Route path='/' element={<MememberShip/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
