import { Tab } from '@headlessui/react'
import { useState } from 'react'
import { GiSelfLove } from 'react-icons/gi'
import { BsDistributeHorizontal, BsHeartFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Feed({ home, randomUser = false }) {
    const navigate = useNavigate();
    let [categories] = useState({
        Global: [
            {
                id: 1,
                title: 'Does drinking coffee make you smarter?',
                date: '5h ago',
                commentCount: 5,
                shareCount: 2,
            },
            {
                id: 2,
                title: "So you've bought coffee...now what?",
                date: '2h ago',
                commentCount: 3,
                shareCount: 2,
            },
        ],
        Your: [
            {
                id: 1,
                title: 'Is tech making coffee better or worse?',
                date: 'Jan 7',
                commentCount: 29,
                shareCount: 16,
            },
            {
                id: 2,
                title: 'The most innovative things happening in coffee',
                date: 'Mar 19',
                commentCount: 24,
                shareCount: 12,
            },
        ]

    })

    return (
        <div className="px-2 py-16 sm:px-0">
            <Tab.Group>
                <Tab.List className={`flex p-1 space-x-1 bg-blue-900/20 rounded-xl ${home ? 'md:w-6/12' : 'md:w-4/12'}`}>
                    <Tab
                        className={({ selected }) =>
                            classNames(
                                'w-full py-2.5 text-sm  font-medium text-slate-500 rounded-lg',
                                'focus:outline-none ring-white ring-opacity-60',
                                selected
                                    ? 'bg-white shadow'
                                    : 'text-slate-500 hover:bg-white/[0.12] hover:text-slate-900'
                            )
                        }
                    >
                        {home ? 'For You'  : 'Blogs'}
                    </Tab>
                    <Tab
                        className={({ selected }) =>
                            classNames(
                                'w-full py-2.5 text-sm leading-5 font-medium text-slate-500 rounded-lg',
                                'focus:outline-none ring-white ring-opacity-60',
                                selected
                                    ? 'bg-white shadow'
                                    : 'text-slate-500 hover:bg-white/[0.12] hover:text-slate-900'
                            )
                        }
                    >
                        {home ? 'Following' : 'Favorite'}

                    </Tab>
                </Tab.List>
                <Tab.Panels className="mt-2">
                    {Object.values(categories).map((posts, idx) => {

                        return (
                            <Tab.Panel
                                key={idx}
                                className={classNames(
                                    'bg-white rounded-xl p-3',
                                    'focus:outline-none  ring-white ring-opacity-60'
                                )}
                            >
                                {
                                    posts.map((post, index) => (
                                        <div className="blogCard mb-10 pb-5 border-b-2 border-slate-300" key={index}>
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
                                                        <GiSelfLove />
                                                        <span className="inline-block text-base py-1 px-1.5 leading-none text-center whitespace-nowrap align-baseline font-bold text-emerald-400 rounded ml-2">7</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="para-section mt-5 hover:cursor-pointer">
                                                <div className="hover:underline underline-offset-4 ">
                                                    <h2 className='text-3xl font-bold text-slate-600 '>{post.title}</h2>
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
                                    ))
                                }

                            </Tab.Panel>
                        )
                    })}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}
