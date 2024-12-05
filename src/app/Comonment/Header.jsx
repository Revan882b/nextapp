import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div>
      <header className="bg-red-500 py-3">
          <div className="container mx-auto">
            <h1 className="text-3xl">LOGO</h1>
          </div>
    
        </header>
        <nav className="bg-green-400 py-3 text-white">

<ul  className="flex gap-5 justify-center">
  <li><Link href="/">Home</Link> </li>
  <li><Link href="/About-us">About us</Link> </li>
  <li><Link href="/Services">Services</Link> </li>

</ul>
        </nav>
    </div>
  )
}

export default Header
