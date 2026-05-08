import React from 'react'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
       <Routes>
      <Route path='/' element={<h1>hello world</h1>} />
      <Route path='/about' element={<h1>hello about</h1>} />
    </Routes>
    </div>
  )
}

export default App