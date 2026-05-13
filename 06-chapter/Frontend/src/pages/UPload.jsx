import React, { useState } from 'react'

import axios from "axios"


import { RiUploadCloudLine , RiUploadCloud2Line } from "react-icons/ri"
const UPload = () => {
     const [image, setImage] = useState(null)

    const [caption, setCaption] = useState("")

     const [category, setCategory] = useState("")

    const handleUpload = async () => {

    try {

        const formData = new FormData()

        formData.append("image", image)

        formData.append("caption", caption)

        formData.append("category", category)

        const response = await axios.post(
            

            "http://localhost:3000/add-post",

            formData
          
        )
         setImage(null)

        setCaption("")

        setCategory("")

        window.location.reload()


        console.log(response.data)

    } catch(error){

        console.log(error)

    }

}

  return (
    <div className='px-10 py-10 bg-white my-10 w-full flex gap-10 rounded-2xl '>
      <div className='w-1/2  border-2 border-dashed border-purple-200 rounded-2xl flex flex-col items-center justify-center py-16 shadow-lg overflow-hidden'>

    {

        image ? (

            <img

                src={URL.createObjectURL(image)}

                alt="preview"

                className='w-full h-96 object-cover'

            />

        ) : (

            <>

                <RiUploadCloud2Line
                   className='text-7xl text-blue-600 mb-4'
                />

                <h2 className='text-3xl font-bold text-gray-800 mb-2'>

                    Upload Your Image

                </h2>

                <h4 className='text-gray-500 mb-6'>

                    Drag and drop here or click to select

                </h4>

            </>

        )

    }

    <label className='bg-linear-to-r from-blue-700 to-purple-600 text-white px-6 py-3 rounded-xl cursor-pointer font-semibold hover:opacity-90 transition-all mt-4'>

        Choose Image

        <input

           type="file"

           name='image'

           accept='image/*'

           className='hidden'

           onChange={(e) => setImage(e.target.files[0])}

        />

    </label>

</div>
         <div className='w-1/2 flex flex-col gap-5 '>

        <input
           type='text'
           placeholder='Write a caption...'
           className='w-full border border-gray-200 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-purple-400'
           onChange={(e) => setCaption(e.target.value)}
        />

        <select
           className='w-full border border-gray-200 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-purple-400'
           onChange={(e) => setCategory(e.target.value)}
        >

            <option>Select Category</option>

            <option>Nature</option>

            <option>Travel</option>

            <option>Food</option>

            <option>Cars</option>

        </select>

        <button onClick={handleUpload}
         className='w-full bg-linear-to-r from-blue-700 to-purple-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-90'>

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