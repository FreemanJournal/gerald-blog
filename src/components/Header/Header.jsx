import React from 'react'
import NavBar from './NavBar'

export default function Header() {
  return (
    <>
      
      <div className="bg-emerald-400 headerShadow h-48 flex items-center">
        <div className="container text-center">
          <h1 className='text-white font-bold text-3xl md:text-6xl drop-shadow-md'>gerald blog</h1>
          <p className='text-white md:text-2xl my-5 tracking-wider'>A place to share your wisdom.</p>
        </div>
      </div>
    </>
  )
}
