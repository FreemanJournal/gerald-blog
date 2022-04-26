import React, { useCallback, useRef } from 'react';
import { BsDistributeHorizontal, BsHeartFill, BsHeart } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import UserIntro from '../../utilities/UserIntro';
import UserComments from './UserComments';
export default function NewComments() {
    const navigate = useNavigate();

    // Form Data
    const userComment = useRef();



    const onSubmitHandler = useCallback((e) => {
        e.preventDefault();
        const comment = userComment.current.value
       

    }, []);



    return (
        <form className="border border-gray-300  rounded-md mb-10" onSubmit={onSubmitHandler}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className=" flex flex-col gap-5">
                <div>
                    <label htmlFor="blog" className="sr-only">
                        Comment
                    </label>
                    <textarea
                        id="blog"
                        name="blog"
                        type="textarea"

                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-3 border-0 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                        placeholder="Write a comment..."
                        ref={userComment}
                    />
                </div>

            </div>
            <div className='py-2 px-2 flex items-center bg-zinc-100'>
                <div className="relative">
                    <dt>
                        <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-white">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                className="rounded-full w-32"
                                alt="Avatar"
                            />
                        </div>
                        <p className="ml-16 text-sm font-medium text-emerald-400 cursor-pointer hover:underline" onClick={() => navigate('/user-profile')}>Rizèl Scarlett</p>
                    </dt>
                    <dd className=" ml-16 text-xs text-slate-400">April 14,2021</dd>
                </div>
                <button
                    type="submit"
                    className="w-32 group relative flex justify-center ml-auto py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-400 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                    Post Comment
                </button>
            </div>
        </form>)
}
