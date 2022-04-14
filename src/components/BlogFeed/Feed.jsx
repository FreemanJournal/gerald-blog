import { Tab } from '@headlessui/react'
import { useState } from 'react'
import BlogCard from './BlogCard'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Feed({ home, randomUser = false }) {
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
                                    posts.map((post, index) => <BlogCard post={post} key={index}/>)
                                }

                            </Tab.Panel>
                        )
                    })}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}
