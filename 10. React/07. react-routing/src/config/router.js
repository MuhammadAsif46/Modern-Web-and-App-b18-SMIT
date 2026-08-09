import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import NotFound from '../pages/NotFound'

const AppRouter = () => {

    const [user, setUser] = useState(false)

    useEffect(()=>{
        let isUser = localStorage.getItem("user")
        setUser(isUser)
    },[])

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/login' element={user ? <Navigate to={"/profile"}/> : <Login />}></Route>
            {/* <Route path='/profile/:userId' element={ user ? <Profile /> : <Navigate to={"/login"}/>}></Route> */}
            <Route path='/profile' element={ user ? <Profile /> : <Navigate to={"/login"}/>}></Route>
            <Route path='*' element={<NotFound />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter