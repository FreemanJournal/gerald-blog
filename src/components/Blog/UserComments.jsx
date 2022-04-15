import React, { useCallback, useRef } from 'react';
import { BsDistributeHorizontal, BsHeartFill, BsHeart,BsFillTrashFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import UserIntro from '../../utilities/UserIntro';
export default function UserComments() {
    const navigate = useNavigate();

    // Form Data
    const userComment = useRef();



    const onSubmitHandler = useCallback((e) => {
        e.preventDefault();
        const comment = userComment.current.value
        console.log('comment', comment);

    }, []);
    return (
        <div className="border border-gray-300  rounded-md ">
            <div className=" flex flex-col gap-5">
                <div>
                    <label htmlFor="blog" className="sr-only">
                        Comment
                    </label>
                    <p
                        id="blog"


                        className="appearance-none rounded-md relative block w-full px-3 py-3 border-0 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                    >Before starting a new implementation, please check if there is any work in progress for the stack you want to work on.</p>
                </div>

            </div>
            <div className='py-2 px-2 flex items-center justify-between bg-zinc-100'>
                <UserIntro />
                <BsFillTrashFill className='hover:text-red-600 text-slate-500'/>


            </div>
        </div>
    )
}
