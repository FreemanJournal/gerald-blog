import React from 'react'
import Feed from './Feed'
import Tags from './Tags'

export default function BlogFeed() {
  return (
    <>
      <div className="container py-5 grid md:grid-cols-6 gap-10">
        <div className="feed col-span-4">
          <Feed />
        </div>
        <div className="tags col-span-2">
          <Tags />
        </div>
      </div>

    </>
  )
}
