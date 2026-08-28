import React from 'react'
import UseFetch from '../hooks/UseFetch'


// header component add counter application
const Header = () => {

    // const { count, decrement, increment, reset } = UseCounter()
    const { data } = UseFetch("https://dummyjson.com/products")

    // console.log(data.products);


    return (
        // <div>
        //     <h1>Counter App</h1>
        //     <p>Count: {count}</p>
        //     <button className='bg-slate-400 text-white p-2 rounded' onClick={increment}>
        //         Increment
        //     </button>
        //     <button className='bg-slate-400 text-white p-2 rounded' onClick={decrement}>
        //         Decrement
        //     </button>
        //     <button className='bg-slate-400 text-white p-2 rounded' onClick={reset}>
        //         Reset
        //     </button>

        // </div>
        <div className='bg-slate-900'>
            {data?.products?.map((val, idx) => <div key={idx}>{val.brand}</div>)}
        </div>
    )
}

export default Header