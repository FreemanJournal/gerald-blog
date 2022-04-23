import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import HeroBanner from '../../components/Header/HeroBanner'
import Feed from '../../components/UserFeed/Feed';
import { GlobalContext } from '../../context/GlobalContext';

export default function UserProfile() {
    const {writerName} = useParams();
    const {globalData} = useContext(GlobalContext);
    const userBlogs = globalData?.filter(item=> item.blogWriter === writerName)
   
    return (
        <div>
            <HeroBanner randomUser writerName={writerName} userImg={userBlogs[0]?.img}/>
            <div className="container">
                <Feed randomUser userBlogs={userBlogs}/>
            </div>
        </div>
    )
}
