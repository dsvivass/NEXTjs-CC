import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import GoBack from '../../../../../components/GoBack'

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
            <GoBack />
            <ul style={{ backgroundColor: '#ccc', fontSize: '12px' }}>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <Image
                            alt={comment.name}
                            src={`https://avatars.dicebear.com/api/adventurer/${comment.email}.svg`}
                            width={50}
                            height={50}
                        />
                        <h2>{comment.name}</h2>
                        <p>{comment.body}</p>
                    </li>
                ))}
            </ul>
        </article>
    )
}

export default Post