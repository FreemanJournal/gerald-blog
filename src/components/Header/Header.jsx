import React from 'react'
import NavBar from './NavBar'

export default function Header() {
  return (
    <>
      <NavBar/>
      <div className="bg-green-400 shadow-inner h-48 flex items-center">
        <div className="container text-center">
          <h1 className='text-white font-bold text-6xl drop-shadow-md'>gerald blog</h1>
          <p className='text-white text-2xl my-5 tracking-wider'>A place to share your wisdom.</p>
        </div>
      </div>
    </>
  )
}
