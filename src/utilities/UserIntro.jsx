import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function UserIntro() {
    const navigate = useNavigate();

    return (
        <div className="intro flex justify-between">
            <div className="relative">
                <dt className='flex items-center gap-2'>
                    <div className="flex items-center justify-center h-5 w-5 rounded-md text-white">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                            className="rounded-full w-32"
                            alt="Avatar"
                        />
                    </div>
                    <p className="text-xs font-medium text-emerald-400 cursor-pointer hover:underline" onClick={() => navigate('/blog')}>Honey Singh</p>
                    <dd className=" text-xs text-slate-400">November 24,2021</dd>

                </dt>
            </div>
        </div>
    )
}
