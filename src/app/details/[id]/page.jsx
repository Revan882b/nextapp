"use client"
import { useParams } from 'next/navigation'
import React from 'react'

async function page() {
    let {id}=useParams()
    let data = await fetch(`https://fakestoreapi.com/products/${id}`)
  let posts = await data.json()
  return (
    <div>
        <div className="container p-5 border shadow mx-auto">
        <h1>{posts.title}</h1> 
        <img src={posts.image} alt="" />
        </div>
    
    </div>
  )
}

export default page
