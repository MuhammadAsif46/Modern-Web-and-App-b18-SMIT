import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from './pages/Home'
import CartContext from './context/cartContent'

function App() {

  const [cart, setCart] = useState([])

  useEffect(()=>{
    const carts = JSON.parse(localStorage.getItem("cart")) || []
    setCart(carts)
  },[])

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Home />
    </CartContext.Provider>
  )
}

export default App
