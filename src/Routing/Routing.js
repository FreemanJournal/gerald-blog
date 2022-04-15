import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Authorization from '../components/Authorization/Authorization'
import Dashboard from '../components/Dashboard/Dashboard'
import SingleBlog from '../components/SingleBlog/SingleBlog'
import Home from '../pages/Home/Home'
import Profile from '../pages/Profile/Profile'
import UserProfile from '../pages/Profile/UserProfile'
import PrivateRoute from './PrivateRoute'

export default function Routing() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
            <Route path='/profile' element={<PrivateRoute><Profile/></PrivateRoute>}/>
            <Route path='/user-profile' element={<PrivateRoute><UserProfile/></PrivateRoute>}/>
            <Route path='/blog' element={<PrivateRoute><SingleBlog/></PrivateRoute>}/>
            <Route path='/signIn' element={<Authorization signIn/>}/>
            <Route path='/signUp' element={<Authorization signIn={false}/>}/>
        </Routes>
    </>
  )
}
