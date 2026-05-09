import React from 'react'
import {Routes, Route} from 'react-router-dom'
import CreatePost from './pages/CreatePost'

const App = () => {
  return (
    <div>
       <Routes>
      <Route path='/create-post' element={<CreatePost />} />
      <Route path='/about' element={<h1>hello about</h1>} />
    </Routes>
    </div>
  )
}

export default App