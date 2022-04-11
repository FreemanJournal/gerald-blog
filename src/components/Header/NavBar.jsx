import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Write a blog...', href: '/blog', current: true },
    { name: 'Settings', href: '/setting', current: true },
    { name: 'Sign In', href: '/signIn', current: true },
    { name: 'Sign Up', href: '/signUp', current: true },
  ]


  return (
    <nav className="">
      <div className="container py-5 flex flex-col md:flex-row justify-between items-center">
        <div className="logo">
          <h3 className='font-semibold text-2xl text-emerald-500'>gerald</h3>
        </div>
        <div className="block mt-5 md:mt-0 md:ml-10 md:pr-4 md:space-x-8">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              style={({ isActive }) => isActive ? { color: 'black' } : {}}
              className="px-3 py-2 rounded-md text-base font-normal text-gray-400 hover:text-gray-900">
              {item.name}
            </NavLink>
          ))}
          {<Link to="/" className='px-3 py-2 rounded-md text-base font-normal text-gray-400 hover:text-gray-900'>Md Ishaq</Link>}

        </div>
      </div>
    </nav>
  )
}
