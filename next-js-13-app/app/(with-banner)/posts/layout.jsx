import React from 'react'
import Counter from './Counter'
import CounterValue from './CounterValue'

function PostsLayout({ children }) {
  return (
    <div>
        <small>Home &bull; Posts</small>
        <Counter />
        <CounterValue />
        {children}
    </div>
  )
}

export default PostsLayout