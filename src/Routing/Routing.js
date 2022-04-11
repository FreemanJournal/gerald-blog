import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Authorization from '../components/Authorization/Authorization'
import Home from '../components/Home/Home'
import Settings from '../components/Settings/Settings'
import WriteBlog from '../components/WriteBlog/WriteBlog'
import PrivateRoute from './PrivateRoute'

export default function Routing() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/blog' element={<PrivateRoute><WriteBlog/></PrivateRoute>}/>
            <Route path='/setting' element={<PrivateRoute><Settings/></PrivateRoute>}/>
            <Route path='/signIn' element={<Authorization signIn/>}/>
            <Route path='/signUp' element={<Authorization signIn={false}/>}/>
        </Routes>
    </>
  )
}
