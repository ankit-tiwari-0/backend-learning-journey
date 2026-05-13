import React from 'react'

const welcome = () => {
  return (
          <div>
            <div className='bg-gradient-to-br from-blue-700 via-purple-600 to-indigo-700 rounded-[32px] px-10 py-20 text-white shadow-[0_10px_40px_rgba(0,0,0,0.15)] overflow-hidden relative m-10'>

    {/* BLUR CIRCLES */}

    <div className='absolute top-[-60px] right-[-40px] w-72 h-72 bg-white/10 rounded-full blur-3xl'></div>

    <div className='absolute bottom-[-80px] left-[-40px] w-72 h-72 bg-pink-400/20 rounded-full blur-3xl'></div>

    {/* CONTENT */}

    <div className='relative z-10 max-w-4xl'>

        <p className='uppercase tracking-[6px] text-sm text-purple-200 mb-5 font-semibold'>

            Modern MERN Gallery

        </p>

        <h1 className='text-6xl font-black leading-tight mb-8'>

            Welcome to

            <span className='block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300'>

                Mini Gallery 📸

            </span>

        </h1>

        <p className='text-xl leading-10 text-purple-100 max-w-3xl'>

            Discover and share beautiful moments through
            a modern image gallery experience. Upload your
            favorite memories, organize them with categories,
            and explore creative posts inside a smooth and
            elegant MERN stack application.

        </p>

        {/* STATS */}

        <div className='flex gap-10 mt-12 flex-wrap'>

            <div>

                <h2 className='text-4xl font-bold'>
                    100+
                </h2>

                <p className='text-purple-200 mt-2'>
                    Uploaded Photos
                </p>

            </div>

            <div>

                <h2 className='text-4xl font-bold'>
                    10+
                </h2>

                <p className='text-purple-200 mt-2'>
                    Categories
                </p>

            </div>

            <div>

                <h2 className='text-4xl font-bold'>
                    MERN
                </h2>

                <p className='text-purple-200 mt-2'>
                    Full Stack Project
                </p>

            </div>

        </div>

    </div>

</div>
          </div>
  )
}

export default welcome