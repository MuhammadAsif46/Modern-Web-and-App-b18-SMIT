import { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import CartContext from './context/cartContent'
import { Route, Routes } from 'react-router-dom'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

function App() {

  const [cart, setCart] = useState([])
  const [toastOpen, setToastOpen] = useState(false)

  useEffect(()=>{
    const carts = JSON.parse(localStorage.getItem("cart")) || []
    setCart(carts)
  },[])

  const saveCart = (nextCart) => {
    setCart(nextCart)
    localStorage.setItem("cart", JSON.stringify(nextCart))
  }

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id)
    const nextCart = existingProduct
      ? cart.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item)
      : [...cart, { ...product, qty: 1 }]

    saveCart(nextCart)
    setToastOpen(true)
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId)
      return
    }

    saveCart(cart.map((item) => item.id === productId ? { ...item, qty: quantity } : item))
  }

  const removeFromCart = (productId) => {
    saveCart(cart.filter((item) => item.id !== productId))
  }

  const cartTotal = cart.reduce((total, item) => total + item.price * item.qty, 0)

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, cartTotal }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Snackbar
        open={toastOpen}
        autoHideDuration={2800}
        onClose={() => setToastOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={() => setToastOpen(false)} severity="success" variant="filled" sx={{ width: '100%' }}>
          Product added to cart successfully!
        </Alert>
      </Snackbar>
    </CartContext.Provider>
  )
}

export default App
