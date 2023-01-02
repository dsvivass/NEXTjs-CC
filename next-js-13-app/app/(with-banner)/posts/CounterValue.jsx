'use client'

import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function CounterValue() {
    const count = useSelector(state => state.test.value)
    const [countValue, setCountValue] = useState(count)

    useEffect(() => {
        setCountValue(count)
    }, [count])

    return (
        <div>Mi valor desde redux: {countValue}</div>
    )
}

export default CounterValue