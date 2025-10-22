"use client"
import { useParams } from "next/navigation";

export default function BlogPost(){
const params = useParams()
const {id} = params
return(
    <div>
        <h1> Blog post {id}</h1>
        <p> This is the content of the Blog Post #{id}</p>
    </div>
)
}