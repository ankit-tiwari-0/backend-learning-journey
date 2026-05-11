import React from 'react'

const About = () => {

  return (

    <div className='w-full min-h-screen px-10 py-16'>

        <div className='max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-sm'>

            <h1 className='text-5xl font-bold text-gray-800 mb-6'>
                About Mini Gallery
            </h1>

            <p className='text-gray-600 text-lg leading-8 mb-8'>

                Mini Gallery is a simple MERN stack image sharing
                application where users can upload, explore,
                and manage beautiful image posts with captions
                and categories.

            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>

                <div className='bg-[#eef2f7] p-6 rounded-2xl'>

                    <h2 className='text-2xl font-semibold mb-4 text-purple-700'>
                        Features
                    </h2>

                    <ul className='space-y-3 text-gray-700'>

                        <li>📸 Upload images</li>

                        <li>📝 Add captions</li>

                        <li>🏷️ Organize with categories</li>

                        <li>🗑️ Delete posts</li>

                        <li>⚡ Fast and responsive UI</li>

                    </ul>

                </div>

                <div className='bg-[#eef2f7] p-6 rounded-2xl'>

                    <h2 className='text-2xl font-semibold mb-4 text-blue-700'>
                        Technologies Used
                    </h2>

                    <ul className='space-y-3 text-gray-700'>

                        <li>⚛️ React JS</li>

                        <li>🎨 Tailwind CSS</li>

                        <li>🟢 Node JS</li>

                        <li>🚀 Express JS</li>

                        <li>🍃 MongoDB</li>

                        <li>☁️ ImageKit</li>

                    </ul>

                </div>

            </div>

            <div className='mt-10 bg-gradient-to-r from-blue-700 to-purple-600 rounded-2xl p-8 text-white'>

                <h2 className='text-3xl font-bold mb-4'>
                    Project Goal
                </h2>

                <p className='text-lg leading-8'>

                    This project was built to practice full-stack
                    MERN development concepts including CRUD
                    operations, image uploads, cloud storage,
                    REST APIs, React routing, and responsive UI
                    design.

                </p>

            </div>

        </div>

    </div>

  )
}

export default About