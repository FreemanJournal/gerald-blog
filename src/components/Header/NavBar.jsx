import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import auth from '../../utilities/firebase.init';

export default function NavBar() {
  const [user, loading, error] = useAuthState(auth);

  const [display, setDisplay] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      setDisplay(true)
    } else {
      setDisplay(false)
    }
  }, [user])

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Dashboard', href: '/dashboard', current: display },
    { name: 'Sign In', href: '/signIn', current: !display },
    { name: 'Sign Up', href: '/signUp', current: !display },
  ]

  // useEffect(()=>setName(user?.displayName),[user])


  return (
    <nav className="">
      <div className="container py-5 flex flex-col md:flex-row justify-between items-center">
        <div className="logo">
          <h3 className='font-semibold text-2xl text-emerald-500 cursor-pointer' onClick={() => navigate('/')}>gerald</h3>
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
          <NavLink style={({ isActive }) => isActive ? { color: 'black' } : {}} to="/profile" className={`${user || 'hidden'} px-3 py-2 rounded-md text-base font-normal text-gray-400 hover:text-gray-900`}>{user?.displayName}</NavLink>

        </div>
      </div>
    </nav>
  )
}
