import { log } from 'node:console'
import React from 'react'

export default async function call() {
    const res = await fetch('https://localhost:3000/api/tasks')
    const data = await res.json()
    console.log(data);
    


  return (
    <div>
        <h1>Tasks</h1>
      
    </div>
  )
}
