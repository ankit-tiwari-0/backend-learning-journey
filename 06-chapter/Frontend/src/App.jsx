import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Nav from './pages/Nav'
import About from './pages/About'
import UPload from './pages/UPload'

const App = () => {
  return (
    <div className='m-0 p-0 box-border h-screen w-full'>
      <Nav />

      <Routes>
        <Route path='/about' element={ <About />} />
        <Route path='/gallary' element={ <UPload /> } />
      </Routes>
    </div>
  )
}

export default App