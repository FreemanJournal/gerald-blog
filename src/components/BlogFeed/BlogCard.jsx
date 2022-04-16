import React from 'react'
import { BsDistributeHorizontal, BsHeartFill, BsHeart } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import UserIntro from '../../utilities/UserIntro';

export default function BlogCard({ post }) {
    const navigate = useNavigate();

    const { postId, img, blogWriter, date, title, description, tags, commentCount, likeCount } = post || {}
    return (
        <div className="blogCard mb-10 pb-5 border-b-2 border-slate-300">
            <div className="intro flex justify-between">
                <UserIntro img={img} blogWriter={blogWriter} date={date}/>
               
                <div className="">
                    <button type="button" className="py-1 px-6  bg-transparent text-emerald-400 font-medium text-sm leading-tight uppercase rounded border border-emerald-400 focus:outline-none focus:ring-0 transition duration-150 ease-in-out flex items-center justify-center">
                        <BsHeart />
                        <span className="inline-block text-base py-1 px-1.5 leading-none text-center whitespace-nowrap align-baseline font-bold text-emerald-400 rounded ml-2">{likeCount}</span>
                    </button>
                </div>
            </div>
            <div className="para-section mt-5 hover:cursor-pointer" onClick={() => navigate(`/single-blog/${postId}`)}>
                <div className="hover:underline underline-offset-4 ">
                    <h2 className='text-3xl font-bold text-slate-600' >{title}</h2>
                    <p className='text-slate-400 truncate mt-2'>{description}</p>
                </div>
                <div className="flex justify-between mt-5">
                    <p className='text-slate-400 hover:text-slate-600'>Read more...</p>
                    <div className="flex gap-1">
                        {tags?.map((tag, index) => (
                            <p key={index}
                                className="px-3 rounded-full flex items-center text-slate-400 border border-slate-300  text-sm  cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                {tag}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
