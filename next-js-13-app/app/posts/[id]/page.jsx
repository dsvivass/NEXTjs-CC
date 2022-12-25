import React from 'react'

function Post({ params }) {
    const { id } = params

    return (
        <div>Este es mi post especifico del id: {id}</div>
    )
}

export default Post