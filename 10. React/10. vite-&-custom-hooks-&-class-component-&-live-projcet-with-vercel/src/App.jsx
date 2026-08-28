import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card.jsx'
import Header from './components/Header.jsx'
import UseFetch from './hooks/UseFetch.js'
import Footer from './components/Footer.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
      {/* <Header />
      <h1 className='text-3xl font-bold underline'>Hello</h1>
      <p className='text-green-500'>hello world</p>
      <Card />
      <Footer /> */}

      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/about' element={<Card />} />
        <Route path='/footer' element={<Footer />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
