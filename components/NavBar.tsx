import React from 'react'
import Logo from '../public/assets/logo-dark.png'
import Image from 'next/image'

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 h-20 sticky top-0 z-50 bg-white shadow-lg">
  <a href="#">
    <Image src={Logo} alt="Logo" height={40} />
  </a>
  <div className="flex gap-4">
    <a href="#" className="text-sm font-semibold py-2 px-4 text-gray-900 rounded-lg transition duration-300 cursor-not-allowed hover:bg-black/10">
      About
    </a>
    <a href="#" className="text-sm font-semibold py-2 px-4 text-gray-900 rounded-lg transition duration-300 cursor-not-allowed hover:bg-black/10">
      Features
    </a>
    <a href="#" className="text-sm font-semibold py-2 px-4 text-gray-900 rounded-lg transition duration-300 cursor-not-allowed hover:bg-black/10">
      How it works
    </a>
    <a href="#" className="text-sm font-semibold py-2 px-4 text-gray-900 rounded-lg transition duration-300 cursor-not-allowed hover:bg-black/10">
      Privacy policy
    </a>
  </div>
  <button className="h-10 text-base font-semibold px-4 py-2 flex items-center justify-center rounded-lg transition duration-200 ease transform bg-black/10 border-0 text-black hover:text-white hover:bg-black hover:scale-110">
    Sign In
  </button>
</nav>

  )
}