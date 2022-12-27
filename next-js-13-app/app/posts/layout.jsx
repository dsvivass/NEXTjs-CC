import React from 'react'
import Counter from './Counter'

function PostsLayout({ children }) {
  return (
    <div>
        <h1>Todos mis posts</h1>
        <Counter />
        {children}
    </div>
  )
}

export default PostsLayout