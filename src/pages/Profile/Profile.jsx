import { Tab } from '@headlessui/react'
import { useState } from 'react'
import { GiSelfLove } from 'react-icons/gi'
import Feed from '../../components/BlogFeed/Feed'
import HeroBanner from '../../components/Header/HeroBanner'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Profile() {

    return (
        <>
            <HeroBanner />
            <div className="container">
                <Feed/>
            </div>
        </>
    )
}
