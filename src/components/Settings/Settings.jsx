import { signOut } from 'firebase/auth'
import React from 'react'
import auth from '../../utilities/firebase.init'

export default function Settings() {
  return (
    <div className='flex justify-center m-24'>
       <button
            className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={()=>signOut(auth)}
          >
            Sign Out
          </button>
    </div>
  )
}
