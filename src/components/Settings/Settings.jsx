import { signOut } from 'firebase/auth';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import auth from '../../utilities/firebase.init';
import { IoIosLogOut } from 'react-icons/io'
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from 'axios';
import { async } from '@firebase/util';

export default function Settings() {
  const [user, loading, error] = useAuthState(auth);
  const [profileData, setProfileData] = useState({});

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      username: profileData?.username || user?.displayName,
      email_address: user?.email,
      shortBio: profileData?.shortBio || ''
    }
  });

  useEffect(() => {
    const getUser = async () => {
      const uri = `${process.env.REACT_APP_uri}/user?email=${user?.email}`
      const result = await axios.get(uri)
      setProfileData(result.data)

    }
    getUser()
  }, [user])

  useEffect(() => {
    reset(profileData)
  }, [profileData])

 
  const onSubmitHandler = (value) => {
    // const uri = `${process.env.REACT_APP_uri}/user`
    // console.log('http://localhost:5000/user',uri);
    fetch(`http://localhost:5000/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(value)
    })
      .then(res => res.json())
      .then(result => toast.info("User Info updated..."))
      .catch((error)=>toast.error(error))


  };






  return (
    <div className=' mx-auto'>


      <form className="" onSubmit={handleSubmit(onSubmitHandler)}>
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
              className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
              placeholder="Md Ishaque"
              {...register("username", { required: true, maxLength: 100 })}

            />
            <p className='text-pink-400 pt-2'>{errors.username ? "This field is required!!" : ""}</p>

          </div>
          <div>
            <label htmlFor="bio" className="">
              A short bio about you...
            </label>
            <textarea
              id="shortBio"
              type="textarea"
              className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
              placeholder="I am a javascript developer and I am a good human being."
              {...register("shortBio", { required: true, maxLength: 1000 })}
            />
            <p className='text-pink-400 pt-2'>{errors.shortBio ? "This field is required!!" : ""}</p>
          </div>
          <div>
            <label htmlFor="email-address" className="">
              Email address
            </label>
            <input
              id="email-address"
              disabled
              className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
              {...register("email_address")}
            />
          </div>
          <div>
            <label htmlFor="password" className="">
              New Password
            </label>
            <input
              id="password"
              className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
              placeholder="123456"
            // {...register("password", {minLength: 8, maxLength: 16 })}
            />
            <p className='text-pink-400 pt-2'>{errors.password ? "Password must be 8 to 16 characters" : ""}</p>
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
                <input id="file-upload" name="file-upload" type="file" className="sr-only"  {...register("img_file")} />
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
