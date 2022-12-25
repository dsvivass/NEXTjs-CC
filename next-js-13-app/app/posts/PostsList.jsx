const fetchPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
}

async function PostsList() {
    const posts = await fetchPosts()

    return posts.slice(0, 10).map(post => (
        <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </article>
    ))
}

export default PostsList