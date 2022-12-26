import { useState } from 'react'

function LikeButton({id}) {

    const [liked, setLiked] = useState(false)

    return (
        <button onClick={() => setLiked(!liked)}>
            {liked ? '<3': 'Me gusta'}
        </button >
    )
}

export default LikeButton