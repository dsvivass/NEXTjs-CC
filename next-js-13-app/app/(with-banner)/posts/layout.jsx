import React from 'react'
import Counter from './Counter'

function PostsLayout({ children }) {
  return (
    <div>
        <small>Home &bull; Posts</small>
        <Counter />
        {children}
    </div>
  )
}

export default PostsLayout