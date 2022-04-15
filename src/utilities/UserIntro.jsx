import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function UserIntro({ img, blogWriter, date }) {
    const navigate = useNavigate();

    return (
        <div className="relative">
            <div>
                <div className="absolute flex items-center justify-center h-10 w-10 rounded-md text-white">
                    <img
                        src={img}
                        className="rounded-full w-32"
                        alt="Avatar"
                    />
                </div>
                <p className="ml-16 text-sm font-medium text-emerald-400 cursor-pointer hover:underline" onClick={() => navigate('/user-profile')}>{blogWriter}</p>
            </div>
            <p className=" ml-16 text-xs text-slate-400">{date}</p>
        </div>
    )
}
