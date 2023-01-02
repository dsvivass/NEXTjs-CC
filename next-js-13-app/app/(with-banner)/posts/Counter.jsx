'use client'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
    if (count > 0) {
      dispatch({ type: 'INCREMENT', payload: null })
    }
  }, [count])

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Counter