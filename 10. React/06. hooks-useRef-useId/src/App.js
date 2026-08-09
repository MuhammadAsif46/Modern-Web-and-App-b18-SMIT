
// import * as data from "./utils/constant"
import "./App.css"
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Login from "./components/login/Login"

// import { useState, useEffect } from "react"
// import Submit from "./components/submit/Submit";
import Card from "./components/card/Card";
import { useState, useRef, useId } from "react";


const App = () => {

  // const [counter, setCounter] = useState(0)
  // const headingRef = useRef(null)
  const nameId = useId();
  const passwordId = useId();

  // console.log(id);
  // console.log(id1);


  return (
    // <div>
    //   {/* <h1>Cards</h1> */}
    //   <div>
    //     <Card title={"Honda"} description={"Hello world"} btnText={"Show more"}/>
    //     <Card title={"Civic"} description={"Hello world two"} btnText={"Show Less"}/>
    //   </div>
    // </div>
    <div>
      {/* <h1 ref={headingRef} className="abc">{counter}</h1>
      <button onClick={() => {
        setCounter(oldValue => oldValue + 1)
        console.log(headingRef.current);

      }}>Increament</button>
      <button disabled={counter < 1} onClick={() => setCounter(counter - 1)}>Decrement</button> */}

      <label htmlFor={nameId}>
        name
        <br />
        <input type="text" id={nameId} />
      </label>
      <br />
      <label htmlFor={passwordId}>
        password
        <br />
        <input type="text" id={passwordId} />
      </label>

    </div>
  );
};
export default App;