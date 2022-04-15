import { signOut } from 'firebase/auth';
import React, { useCallback, useRef } from 'react';
import auth from '../../utilities/firebase.init';
import { IoIosLogOut } from 'react-icons/io'

export default function Settings() {

  // Form Data
  const userImgUrl = useRef();
  const userName = useRef();
  const userBio = useRef();
  const userEmail = useRef();
  const userPassword = useRef();


  const onSubmitHandler = useCallback((e) => {
    e.preventDefault();
    const formData = {
      imgUrl: userImgUrl.current?.value,
      username: userName.current?.value,
      bio: userBio.current?.value,
      email: userEmail.current?.value,
      password: userPassword.current?.value,

    }

  }, []);






  return (
    <div className=' mx-auto'>

      <form className="" onSubmit={onSubmitHandler}>
        <input type="hidden" name="remember" defaultValue="true" />
        <div className=" flex flex-col gap-5">
          {/* <div>
            <label htmlFor="imgUrl" className="">
              Profile Picture url
            </label>
            <input
              id="imgUrl"
              name="imgUrl"
              type="text"
              autoComplete="imgUrl"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
              placeholder="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              ref={userImgUrl}
            />
          </div> */}
          <div>
            <label htmlFor="username" className="">
              User Name
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
              placeholder="Md Ishaque"
              ref={userName}
            />
          </div>
          <div>
            <label htmlFor="bio" className="">
              A short bio about you...
            </label>
            <textarea
              id="bio"
              name="bio"
              type="textarea"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
              placeholder="I am a javascript developer and I am a good human being."
              ref={userBio}
            />
          </div>
          <div>
            <label htmlFor="email-address" className="">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
              placeholder="iamishaque.business@gmail.com"
              ref={userEmail}
            />
          </div>
          <div>
            <label htmlFor="password" className="">
              New Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
              placeholder="123456"
              ref={userPassword}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Photo</label>
            <div className="mt-1 flex items-center">
              <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
              <label
                htmlFor='file-upload'
                className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 "
              >
               <span>Change</span>
              <input id="file-upload" name="file-upload" type="file" className="sr-only" />
              </label>
              
            </div>
          </div>


        </div>
        <div className='mt-10'>
          <button
            type="submit"
            className="w-44 group relative flex justify-center ml-auto py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-400 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            Update Setting
          </button>
        </div>

      </form>
      <div className="flex flex-col w-72 md:w-auto mx-auto">
        <div className="flex gap-3 justify-center items-center">
          <hr className='w-96 border border-b-0 border-zinc-300' />
          <p className="mt-2 mb-4 text-center text-sm text-gray-600">
            Or{' '}
          </p>
          <hr className='w-96 border border-b-0 border-zinc-300' />

        </div>

        <button onClick={() => {

          signOut(auth)
        }}
          className=" flex w-44 mx-auto gap-1 justify-center items-center font-semibold border border-zinc-400 py-2 px-10 shadow-md rounded-md  text-emerald-600 hover:text-emerald-500" >
          <IoIosLogOut className='font-bold text-xl' /><span>Sign Out</span>
        </button>
      </div>

    </div>
  )
}
