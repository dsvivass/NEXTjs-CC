'use client'
import { useRouter } from 'next/navigation'

function GoBack() {

    const router = useRouter()

    return (
        <button onClick={() => router.back()}>Back</button>
    )
}

export default GoBack