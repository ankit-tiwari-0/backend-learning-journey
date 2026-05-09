import React from 'react'
import { useState } from 'react'

const Feed = () => {

    const [ posts, setPosts] = useState(
        [
            {
                _id: "1",
                image:"https://images.unsplash.com/photo-1776715139556-f7d420661a89?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                caption:"Beautiful Scenery"
            }
        ]
    )
  return (
    <section className='feed-name'>
       
       {
  posts.length > 0 ? (
    posts.map((post) => (
      <div key={post._id} className="post-card">
        <img src={post.image} alt={post.caption} />
        <p>{post.caption}</p>
      </div>
    ))
  ) : (
    <h1>No posts available</h1>
  )
}
        
    </section>
  )
}

export default Feed