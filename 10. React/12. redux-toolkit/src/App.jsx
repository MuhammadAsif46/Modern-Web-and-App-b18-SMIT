// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment, incrementByAmount, multiply } from './features/counterSlice'
// import Header from './components/Header'

// function App() {

//   const count = useSelector((state) => state.counter.value)
//   const dispatch = useDispatch()

//   return (
//     <>
//     <Header />
//       <h1>Counter: {count}</h1>
//       <button onClick={() => dispatch(increment())}>Increment</button>
//       <br />
//       <button onClick={() => dispatch(decrement())}>Decrement</button>
//       <br />
//       <button onClick={() => dispatch(incrementByAmount(10))}>Incremnt By Value</button>
//       <br />
//       <button onClick={() => dispatch(multiply(20))}>Multiply</button>

//     </>
//   )
// }

// export default App


import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUsers } from "./features/users/userSlice";

function App() {
  const dispatch = useDispatch();

  const { users, loading, error } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h1>Users</h1>

      {users.map((user) => (
        <div key={user.id}>
          {user.name}
        </div>
      ))}
    </div>
  );
}

export default App;

