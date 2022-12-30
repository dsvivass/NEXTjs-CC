import React from 'react'
import Link from 'next/link'

const fetchPostComments = async (id) => {

    await new Promise(resolve => setTimeout(resolve, 3000))

    // throw new Error('Error al traer los comments')

    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { cache: 'no-store' })
        .then(response => response.json())
}

async function Post({ params }) {
    const { id } = params
    const comments = await fetchPostComments(id)

    return (
        <article>
            <h1>Comentarios</h1>
            <ul style={{ backgroundColor: '#ccc', fontSize: '12px'}}>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <h2>{comment.name}</h2>
                        <p>{comment.body}</p>
                    </li>
                ))}
            </ul>
        </article>
    )
}

export default Post