import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Sign In', href: '/signIn' },
        { name: 'Sign Up', href: '/signUp' },
      ]
      
    
    return (
        <nav className="shadow-2xl">
           <div className="container flex justify-between items-center">
               <div className="logo">
                   <h3 className='font-semibold text-3xl text-green-500'>gerald</h3>
               </div>
               <div className="block md:ml-10 md:pr-4 md:space-x-8">
                  {navigation.map((item) => (
                    <NavLink 
                    key={item.name} 
                    to={item.href} 
                    style={({isActive})=>isActive ? {color:'black'}:{}}
                    className="px-3 py-2 rounded-md text-base font-normal text-gray-400 hover:text-gray-900">
                      {item.name}
                    </NavLink>
                  ))}
                 
                </div>
           </div>
        </nav>
    )
}
