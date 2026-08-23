import React from 'react'
// import AppRouter from './config/router'

import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

const App = () => {
  return (
    // <div>
    //   <AppRouter />
    // </div>
    <UserContextProvider>

        <h1>App Component</h1>
        <Login />
        <Profile />

    </UserContextProvider>
  )
}

export default App