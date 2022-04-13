import React from 'react'
import HeroBanner from '../../components/Header/HeroBanner'
import BlogFeedPage from '../BlogFeedPage/BlogFeedPage'

export default function Home() {
  return (
    <>
    <HeroBanner home/>
    <BlogFeedPage/>
    </>
  )
}
