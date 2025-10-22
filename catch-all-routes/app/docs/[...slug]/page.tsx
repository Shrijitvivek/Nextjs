"use client"
import { useParams } from "next/navigation"

export default function(){
    const params = useParams()
    const slug = params.slug as string[]

    return(
        <div>
            <h1> Docs Page</h1>
            <p> URL parts : {slug.join('/')}</p>
        </div>
    )
}