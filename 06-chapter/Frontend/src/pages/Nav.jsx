import React from 'react'
import {RiImage2Line, RiApps2Line ,RiInfoI } from "react-icons/ri"

const Nav = () => {
  return (
    <div className='w-full flex  justify-between p-8 py-5 bg-white'>
     <div className='flex items-center justify-between'> 
        <div className='flex gap-2'>
            <RiImage2Line className='text-4xl text-blue-800  '/>
            <h1 className='text-2xl font-bold  bg-linear-to-b from-blue-700 to-purple-600 bg-clip-text text-transparent '>Mini Gallary</h1>
        </div>
     </div>
        
        <div className='flex gap-10  items-center'>
            <div className='flex items-center gap-2 '>
                <RiApps2Line  className='text-2xl text-blue-700'  />
                <h2 className='text-xl text-blue-700 font-semibold'>Gallary</h2>
            </div>

            <div className='flex gap-1 items-center'>
                <div className='flex gap-1'>
                    <RiInfoI className='text-l border-2 rounded-2xl ' />
                    <h3 className='text-sm font-semibold'>About</h3>
                </div>

            </div>

        </div>
        
        
    </div>
  )
}

export default Nav