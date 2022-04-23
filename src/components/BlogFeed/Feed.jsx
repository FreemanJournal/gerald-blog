import { Tab } from '@headlessui/react'
import { useContext, useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { GlobalContext } from '../../context/GlobalContext'
import auth from '../../utilities/firebase.init'
import BlogCard from './BlogCard'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Feed({ home, randomUser = false, userBlogs}) {
    const { globalData } = useContext(GlobalContext)
    const [user, loading, error] = useAuthState(auth);
    const [feedData, setFeedData] = useState([...globalData]);

 

    useEffect(() => {
        if (randomUser) {
            setFeedData(userBlogs)
        }else{
            setFeedData(globalData)
        }
    }, [randomUser,globalData])

    return (
        <div className="px-2 py-16 sm:px-0">
            <Tab.Group>
                <Tab.List className={`${user && !randomUser ? 'flex' : 'hidden'} p-1 space-x-1 bg-blue-900/20 rounded-xl ${home ? 'md:w-6/12' : 'md:w-4/12'}`}>
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
                        {home ? 'For You' : 'Blogs'}
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
                    <Tab.Panel
                        className={classNames(
                            'bg-white rounded-xl p-3',
                            'focus:outline-none  ring-white ring-opacity-60'
                        )}
                    >
                        {
                            feedData?.map((post, index) => <BlogCard post={post} key={index} />)
                        }

                    </Tab.Panel>
                    <Tab.Panel
                        className={classNames(
                            'bg-white rounded-xl p-3',
                            'focus:outline-none  ring-white ring-opacity-60'
                        )}
                    >
                        {
                            globalData?.map((post, index) => <BlogCard post={post} key={index} />)
                        }

                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}
