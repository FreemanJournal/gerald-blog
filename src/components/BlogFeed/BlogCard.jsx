import React from 'react'
import { BsDistributeHorizontal, BsHeartFill, BsHeart } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

export default function BlogCard({ post }) {

    const navigate = useNavigate();
    return (
        <div className="blogCard mb-10 pb-5 border-b-2 border-slate-300">
            <div className="intro flex justify-between">
                <div className="relative">
                    <dt>
                        <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-white">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                className="rounded-full w-32"
                                alt="Avatar"
                            />
                        </div>
                        <p className="ml-16 text-sm font-medium text-emerald-400 cursor-pointer hover:underline" onClick={() => navigate('/user-profile')}>Honey Singh</p>
                    </dt>
                    <dd className=" ml-16 text-xs text-slate-400">November 24,2021</dd>
                </div>
                <div className="">
                    <button type="button" className="py-1 px-6  bg-transparent text-emerald-400 font-medium text-sm leading-tight uppercase rounded border border-emerald-400 focus:outline-none focus:ring-0 transition duration-150 ease-in-out flex items-center justify-center">
                        <BsHeart />
                        <span className="inline-block text-base py-1 px-1.5 leading-none text-center whitespace-nowrap align-baseline font-bold text-emerald-400 rounded ml-2">7</span>
                    </button>
                </div>
            </div>
            <div className="para-section mt-5 hover:cursor-pointer" onClick={()=>navigate('/blog')}>
                <div className="hover:underline underline-offset-4 ">
                    <h2 className='text-3xl font-bold text-slate-600' >{post.title}</h2>
                    <p className='text-slate-400'>join the community by creating a new implementation</p>
                </div>
                <div className="flex justify-between mt-5">
                    <p className='text-slate-400 hover:text-slate-600'>Read more...</p>
                    <p
                        className="px-3 rounded-full flex items-center text-slate-400 border border-slate-300  text-sm  cursor-pointer active:bg-gray-300 transition duration-300 ease">
                        welcome
                    </p>
                </div>
            </div>
        </div>
    )
}
