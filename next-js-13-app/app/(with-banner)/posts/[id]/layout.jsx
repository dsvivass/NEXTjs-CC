import React from 'react'
import Link from 'next/link'

const fetchPost = (id) => {

    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: 'no-store' })
        .then(response => response.json())
}

async function Post({ children, params }) {
    const { id } = params
    const post = await fetchPost(id)

    return (
        <article>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link href={`/posts/${id}/comments`}> Ver comentarios </Link>
            {children}
        </article>
    )
}

export default Post