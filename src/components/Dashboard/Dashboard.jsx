import { Tab } from '@headlessui/react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { BsFillArrowRightCircleFill, BsPencilSquare, BsSliders } from 'react-icons/bs'
import CreateArticle from '../CreateArticle/CreateArticle'

import Settings from '../Settings/Settings'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {

    let [categories] = useState(['blog', 'setting'])

    return (
        <div className=" py-16 sm:px-0">
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <div className="container">
                <Tab.Group>
                    <div className="grid md:grid-cols-12 gap-10">
                        <Tab.List className="p-1 bg-blue-300/20 h-fit rounded-xl md:col-span-2">
                            {categories.map((category) => (
                                <Tab
                                    key={category}
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
                                    <p className='pl-3 py-2'>{category === 'blog' ?
                                        <span className='flex gap-1 justify-between items-center '><span className='flex gap-1 justify-start items-center '><BsPencilSquare /><span>Write a blog...</span></span><BsFillArrowRightCircleFill className='mr-3' /></span> :
                                        <span className='flex gap-1 justify-between items-center '><span className='flex gap-1 justify-start items-center '><BsSliders /><span>Setting</span></span><BsFillArrowRightCircleFill className='mr-3' /></span>
                                    }</p>
                                </Tab>
                            ))}
                        </Tab.List>
                        <Tab.Panels className="md:col-span-10">
                            <Tab.Panel
                                className={classNames(
                                    'bg-white rounded-xl p-3 pt-0',
                                    'focus:outline-none  ring-white ring-opacity-60'
                                )}
                            >
                                <CreateArticle />

                            </Tab.Panel>
                            <Tab.Panel
                                className={classNames(
                                    'bg-white rounded-xl p-3 pt-0',
                                    'focus:outline-none  ring-white ring-opacity-60'
                                )}
                            >

                                <Settings />

                            </Tab.Panel>
                        </Tab.Panels>
                    </div>
                </Tab.Group>
            </div>
        </div>
    )
}
