import React, { useState } from 'react'
import { RiDeleteBinLine } from "react-icons/ri"

const Feed = () => {

    const [post, setpost] = useState([

        {
            _id: "1",

            image:
            "https://images.unsplash.com/photo-1778512828600-4a6540a1a115?w=900&auto=format&fit=crop&q=60",

            caption: "Peaceful morning at the lake 🌿",

            category: "Nature",

            like: "24"
        },

    ])

    return (

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-16  px-8 '>

            {

                post.map((post) => (

                    <div
                        key={post._id}

                        className='bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300'
                    >

                        {/* IMAGE */}
                         <div className='relative bg-white rounded-2xl overflow-hidden shadow-md'>

    <button
       className='absolute top-4 right-4 bg-white p-2 rounded-xl shadow-md text-red-500 hover:bg-red-50 transition-all'
    >

       <RiDeleteBinLine className='text-xl' />

    </button>

    <img
       src={post.image}
       alt={post.caption}
       className='w-full h-72 object-cover'
    />

</div>
                        {/* CONTENT */}

                        <div className='p-4'>

                            {/* CATEGORY */}

                            <span className='bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full'>

                                🌿 {post.category}

                            </span>

                            {/* CAPTION */}

                            <p className='mt-4 text-gray-800 font-medium'>

                                {post.caption}

                            </p>

                            {/* FOOTER */}

                            <div className='flex justify-between items-center mt-5 text-gray-500 text-sm'>

                                <p className='text-red-500'>
                                    ❤️ {post.like}
                                </p>

                                <p>
                                    2 days ago
                                </p>

                            </div>

                        </div>

                    </div>

                ))

            }
            
        </div>
        

    )
}

export default Feed