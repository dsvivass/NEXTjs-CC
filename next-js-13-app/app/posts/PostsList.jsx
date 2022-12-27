import Link from "next/link"
import LikeButton from "./LikeButton"

const fetchPosts = () => {

    // getStaticProps
    // is a Next.js function that fetches data at build time

    // --> return fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())



    // getServerSideProps
    // is a Next.js function that fetches data at request time
    
    // --> return fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })
        // .then(response => response.json())



    // incremental static regeneration
    // is a Next.js function that fetches data every n seconds

    // --> return fetch('https://jsonplaceholder.typicode.com/posts', { 
            //  next: {
                //   revalidate: 10
                // } ,
            // })
            // .then(response => response.json())

    return fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })
        .then(response => response.json())
}

async function PostsList() {
    const posts = await fetchPosts()

    return posts.slice(0, 10).map(post => (
        <article key={post.id}>
            <Link href={`/posts/${post.id}`}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <LikeButton id={post.id} />
            </Link>
        </article>
    ))
}

export default PostsList