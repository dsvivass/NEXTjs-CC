'use client'

import { useState } from 'react'

function LikeButton({id}) {

    const [liked, setLiked] = useState(false)

    return (
        <button onClick={() => setLiked(!liked)}>
            {liked ? 'No me gusta': '<3'}
        </button >
    )
}

export default LikeButton