import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Nav from './pages/Nav'

const App = () => {
  return (
    <div className='m-0 p-0 box-border h-screen w-full'>
      <Nav />

      <Routes>
        <Route path='/' />
      </Routes>
    </div>
  )
}

export default App