import React from 'react'
import UseCounter from '../hooks/UseCounter'
import UseFetch from '../hooks/UseFetch'

const Card = () => {

  // const { count, decrement, increment, reset } = UseCounter()
  const { data } = UseFetch("https://jsonplaceholder.typicode.com/users")

  console.log(data);


  return (
    // <div className='p-4' >
    //   Card: {count}
    //   <br />
    //   <button className='bg-slate-400 text-white p-2 rounded' onClick={increment}>
    //     increment
    //   </button>
    //   <button className='bg-slate-400 text-white p-2 rounded' onClick={decrement}>
    //     decrement
    //   </button>
    //   <button className='bg-slate-400 text-white p-2 rounded' onClick={reset}>
    //     Reset
    //   </button>

    // </div>

    <div className='bg-amber-950'>
      {data?.map((val, idx) => <div key={idx}>{val.email}</div>)}
    </div>
  )
}

export default Card