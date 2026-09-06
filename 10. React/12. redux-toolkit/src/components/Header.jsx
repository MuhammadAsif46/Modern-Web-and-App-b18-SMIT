import React from 'react'

import { useSelector } from 'react-redux'


const Header = () => {

    const count = useSelector((state) => state.counter.value)

  return (
    <div>
        <h1>Header Component</h1>
        <h2>Current Count value : {count}</h2>
    </div>
  )
}

export default Header