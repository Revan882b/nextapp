import Link from 'next/link'
import React from 'react'

async function page() {
  let data = await fetch('https://fakestoreapi.com/products/')
  let posts = await data.json()
  return (
    <div>
      <h1>Home Page</h1>
      <div className="flex flex-wrap gap-4">
      {posts.map((a)=>(
        <div className='w-[22%] border p-3'>
          <img className='w-full ' src={a.image} alt="" />
          <Link  href={`/details/${a.id}`}>{a.title}</Link> </div>
      ))}
      </div>
      
    </div>
  )
}

export default page
