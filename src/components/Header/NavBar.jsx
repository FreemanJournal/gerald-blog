import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom'
import auth from '../../utilities/firebase.init';

export default function NavBar() {
  const [user, loading, error] = useAuthState(auth);

  const [display, setDisplay] = useState(true)

  useEffect(() => user ? setDisplay(true) : setDisplay(false), [user])

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Write a blog...', href: '/blog', current: display },
    { name: 'Settings', href: '/setting', current: display },
    { name: 'Sign In', href: '/signIn', current: !display },
    { name: 'Sign Up', href: '/signUp', current: !display },
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
              className={`${item.current ? 'px-3 py-2 rounded-md text-base font-normal text-gray-400 hover:text-gray-900' : 'hidden'}`}>
              {item.name}
            </NavLink>
          ))}
          {user && <Link to="/" className='px-3 py-2 rounded-md text-base font-normal text-gray-400 hover:text-gray-900'>{user?.displayName}</Link>}

        </div>
      </div>
    </nav>
  )
}
