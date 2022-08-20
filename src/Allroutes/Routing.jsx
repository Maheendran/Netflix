import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Search } from '../components/Search'
import { Singlepage } from '../components/Singlepage'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'


export const Routing = () => {
  return (
    <div> 
        <Routes>
        <Route path='/'  element={<Login/>}/>
        <Route path='/home'  element={<Home/>}/>
            <Route path='/search/:id'  element={<Search/>}/>
            <Route path='/moviedetail/:movieid'  element={<Singlepage/>}/>
        </Routes>
  
    </div>
  )
}
