import React from 'react'
import { Helmet } from 'react-helmet-async'
import HeroBanner from '../../components/Header/HeroBanner'
import Feed from '../../components/UserFeed/Feed'


export default function Home() {


  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HeroBanner home />
      <div className="container py-5 grid md:grid-cols-6 gap-10">
        <div className="feed col-span-4">
          <Feed home />
        </div>
        {/* <div className="tags col-span-2">
          <Tags />
        </div> */}
      </div>
    </>
  )
}
