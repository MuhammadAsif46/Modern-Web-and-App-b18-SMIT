import React from 'react'

const UseCounter = () => {
    const [count, setCount] = React.useState(0)

    const increment = () => setCount(prev => prev + 1)
    const decrement = () => setCount(prev => prev - 1)
    const reset = () => setCount(0)

    return { count, increment, decrement, reset }

}

export default UseCounter