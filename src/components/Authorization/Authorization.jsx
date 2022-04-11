import React from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
export default function Authorization({ signIn }) {
  return (
    <div className='w-96 md:w-4/12 mx-auto mt-16'>
      <div className="text-center">
        <h2 className='text-4xl text-slate-600 font-semibold'>{signIn ? 'Sign In' : 'Sign Up'}</h2>
        <Link to={signIn ? '/signUp' : '/signIn'} className='my-3 block text-emerald-500'>{signIn ? 'Need an account?' : 'Have an account?'}</Link>
      </div>
      <form className="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className=" flex flex-col gap-5">
          {!signIn && <div>
            <label htmlFor="username" className="sr-only">
              Name
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
              placeholder="Username"
            />
          </div>}
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-24 group relative flex justify-center ml-auto py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-400 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            Sign in
          </button>
        </div>
      </form>
      <div className="flex flex-col ">
        <div className="flex gap-3 justify-center items-center">
          <hr className='w-96 border border-b-0 border-zinc-300'/>
          <p className="mt-2 mb-4 text-center text-sm text-gray-600">
            Or{' '}
          </p>
          <hr className='w-96 border border-b-0 border-zinc-300'/>

        </div>

        <button className=" flex gap-1 justify-center font-semibold border border-zinc-400 py-2 px-10 shadow-md rounded-md  text-emerald-600 hover:text-emerald-500">
          <FcGoogle className='font-bold text-2xl' /><span>Continue with google</span>
        </button>
      </div>

    </div>
  )
}
