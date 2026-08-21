

// import "./App.css"

// import 'bootstrap/dist/css/bootstrap.min.css';

// import { useState, useRef, useId } from "react";


// const App = () => {

//   const [counter, setCounter] = useState(0)
//   const headingRef = useRef(null)
//   // const nameId = useId();
//   // const passwordId = useId();
//   // const passwordId1 = useId();

//   // console.log(nameId);
//   // console.log(passwordId);
//   // console.log(passwordId1);


//   return (
//     <div>
//       {/* <h1 ref={headingRef}  className="abc">{counter}</h1>  */}
//       <h1 className="abc">{counter}</h1> 
//       <button onClick={() => {
//         setCounter(oldValue => oldValue + 1)
//         console.log(headingRef.current);

//       }}>Increament</button>
//       <button disabled={counter < 1} onClick={() => setCounter(counter - 1)}>Decrement</button>

//       {/* <label htmlFor={nameId}>
//         name
//         <br />
//         <input type="text" id={nameId} />
//       </label>
//       <br />
//       <label htmlFor={passwordId}>
//         password
//         <br />
//         <input type="text" id={passwordId} />
//       </label> */}

//     </div>
//   );
// };
// export default App;





import "./App.css"

import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useRef, useId, useCallback, useMemo } from "react";
import React from "react";
import Child from "./components/Child/Child";
import Products from "./components/Products/Products";
import Forms from "./components/Forms/Forms";


const App = () => {

  const [counter, setCounter] = useState(0)
  const [show, setShow] = useState(false)

  console.log("Running");

  // const getFruitsData = () => {
  //   return ["Apple", "Mango"]
  // }

  // const getFruitsData = useCallback(() => {
  //   return ["Apple", "Mango"]
  // }, [show])

  // console.log(getFruitsData());

  // const getRandomValue = Math.random() * 100 
  // const getRandomValue = useMemo(()=>{
  //   return Math.random() * 100
  // }, [show])

  // const obj = useMemo(() => {
  //   return { username: "ahmed" }
  // }, [])

  // console.log(getRandomValue);



  return (
    <div>
      {/* <Child getFruitsData={getFruitsData} /> */}
      {/* <Child data={obj} /> */}
      {/* <h1>{obj.username}</h1> */}
      {/* <h1 className="abc">{counter}</h1>
      <button onClick={() => {
        setCounter(oldValue => oldValue + 1)

      }}>Increament</button>
      <button disabled={counter < 1} onClick={() => setCounter(counter - 1)}>Decrement</button>

      <br />
      <br />
      <br />

      <button onClick={() => setShow(!show)}>{show ? "Show" : "Hide"}</button> */}

      {/* <Products /> */}
      <Forms />
    </div>
  );
};
export default App;