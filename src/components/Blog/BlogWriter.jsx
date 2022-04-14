import React from 'react'
import { BsDistributeHorizontal, BsHeartFill, BsHeart } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

export default function BlogWriter() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="intro grid grid-cols-10">
                <div className="bg-emerald-400 headerShadow h-24 flex items-center col-span-7">
                    <div className="container text-center">
                        <h1 className='text-white font-bold text-xl md:text-4xl drop-shadow-md'>gerald blog</h1>
                    </div>
                </div>
                <div className="place-self-center col-span-3">
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
            </div>
        </div>
    )
}
