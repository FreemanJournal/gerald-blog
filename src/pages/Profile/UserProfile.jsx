import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Feed from '../../components/BlogFeed/Feed'
import HeroBanner from '../../components/Header/HeroBanner'
import { GlobalContext } from '../../context/GlobalContext';

export default function UserProfile() {
    const {writerName} = useParams();
    const {globalData} = useContext(GlobalContext);
    const userBlogs = globalData?.filter(item=> item.blogWriter === writerName)
   
    return (
        <div>
            <HeroBanner randomUser writerName={writerName}/>
            <div className="container">
                <Feed randomUser userBlogs={userBlogs}/>
            </div>
        </div>
    )
}
