import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'

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
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter