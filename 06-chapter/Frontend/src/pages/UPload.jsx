import React from 'react'
import axios from "axios"

import { RiUploadCloudLine , RiUploadCloud2Line } from "react-icons/ri"
const UPload = () => {
  return (
    <div className='px-10 py-10 bg-white my-10 w-full flex gap-10 rounded-2xl '>
       <div className='w-1/2 border-2 border-dashed border-purple-200 rounded-2xl flex flex-col items-center justify-center py-16  shadow-lg'>

    <RiUploadCloud2Line   className='text-7xl text-blue-600 mb-4'/>

    <h2 className='text-3xl font-bold text-gray-800 mb-2'>
        Upload Your Image
    </h2>

    <h4 className='text-gray-500 mb-6'>
        Drag and drop here or click to select
    </h4>

    <label className='bg-linear-to-r from-blue-700 to-purple-600 text-white px-6 py-3 rounded-xl cursor-pointer font-semibold hover:opacity-90 transition-all'>

        Choose Image

        <input
           type="file"
           name='image'
           accept='image/*'
           className='hidden'
        />

    </label>

</div>
         <div className='w-1/2 flex flex-col gap-5 '>

        <input
           type='text'
           placeholder='Write a caption...'
           className='w-full border border-gray-200 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-purple-400'
        />

        <select
           className='w-full border border-gray-200 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-purple-400'
        >

            <option>Select Category</option>

            <option>Nature</option>

            <option>Travel</option>

            <option>Food</option>

            <option>Cars</option>

        </select>

        <button className='w-full bg-linear-to-r from-blue-700 to-purple-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all'>

           <RiUploadCloud2Line />

            Upload Post

        </button>

        <p className='text-center text-gray-400 text-sm'>
            Supported formats: JPG, PNG, WEBP (Max 10MB)
        </p>

    </div>
        
    </div>
  )
}

export default UPload