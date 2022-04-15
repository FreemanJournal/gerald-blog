import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../utilities/firebase.init';
import { BsGear } from 'react-icons/bs'

export default function HeroBanner({ home, randomUser = false }) {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate()
  return (
    <>
      {
        home ? (
          <div className="bg-emerald-400 headerShadow h-48 flex items-center">
            <div className="container text-center">
              <h1 className='text-white font-bold text-3xl md:text-6xl drop-shadow-md select-none' onClick={()=>navigate('/')}>gerald blog</h1>
              <p className='text-white md:text-2xl my-5 tracking-wider select-none'>A place to share your wisdom.</p>
            </div>
          </div>

        ) : (
          <div className="bg-emerald-400 headerShadow h-72 flex items-center relative">
            <div className="container flex flex-col  justify-center items-center">
              <div className="w-32 h-32"><img src={user?.photoURL ? `${user?.photoURL}` : '/images/profile.jpg'} alt="Profile" className='w-full h-full rounded-full object-cover' /></div>
              <h1 className='text-white font-bold text-xl md:text-4xl drop-shadow-md capitalize'>{user?.displayName}</h1>
              <p className='text-white md:text-2xl my-5 tracking-wider'>{randomUser ? 'No bio' : 'I am a javascript developer and  a good human being.'}</p>
            </div>
            {
              randomUser || (
                <div className='absolute left-1/2 -translate-x-2/4  bottom-3 md:left-auto md:bottom-8 md:right-10'>
                  <button
                    type="button"
                    className="w-32 group flex items-center gap-1 py-2 px-4 border hover:border-transparent text-sm font-medium rounded-md text-white  hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                    onClick={() => navigate('/dashboard')}
                  >
                    <BsGear /> <span>Edit Profile</span>
                  </button>
                </div>
              )
            }
          </div>

        )
      }


    </>
  )
}
