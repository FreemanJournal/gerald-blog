import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from '../components/Authorization/SignIn'
import SignUp from '../components/Authorization/SignUp'
import Home from '../components/Home/Home'
import Settings from '../components/Settings/Settings'
import WriteBlog from '../components/WriteBlog/WriteBlog'

export default function Routing() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/blog' element={<WriteBlog/>}/>
            <Route path='/setting' element={<Settings/>}/>
            <Route path='/signIn' element={<SignIn/>}/>
            <Route path='/signUp' element={<SignUp/>}/>
        </Routes>
    </>
  )
}
