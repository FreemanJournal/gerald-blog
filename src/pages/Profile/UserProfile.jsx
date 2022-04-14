import React from 'react'
import Feed from '../../components/BlogFeed/Feed'
import HeroBanner from '../../components/Header/HeroBanner'

export default function UserProfile() {
    return (
        <div>
            <HeroBanner randomUser/>
            <div className="container">
                <Feed randomUser/>
            </div>
        </div>
    )
}
