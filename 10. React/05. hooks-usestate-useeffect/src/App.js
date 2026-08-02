
// import * as data from "./utils/constant"
import smitWebsiteLink from "./utils/constant"
import "./App.css"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./components/login/Login"

import { useState, useEffect } from "react"
import Submit from "./components/submit/Submit";


const App = () => {

  const [show, setShow] = useState(true)

  // var , function
  // const [name, setName] = useState("Hello")
  // const [todos, setTodos] = useState(["Apple", "Mango"])
  // const [value, setValue] = useState("")
  // console.log("running....");

  // var arr = ["Apple", "Mango"]
  // arr = []

  // const [data, setData] = useState()

  // fetch('https://jsonplaceholder.typicode.com/todos')
  //   .then(response => response.json())
  //   .then(json => setData(json))

  //   console.log("data-->", data);


  // useEffect(()=>{
  //   console.log("USEEFFECT RUNNING..");
  // })

  useEffect(() => {
    // console.log("hello");
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setData(json))

    return()=>{
      console.log("appp");
    }
  }, [name, todos, value])





  // console.log("data-->", data);


  return (
    // <Login />
    <div>
      {/* <h1>{name}</h1> */}
      {/* <h1>{value}</h1> */}
      {/* <ul>
        {todos.map((v, i) => <li key={i}>{v}</li>)}
      </ul>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} /> */}

      {/* <button onClick={() => setName("user")}>Update</button> */}
      {/* <button onClick={() => setTodos([...todos, "kiwi"])}>Add Todo</button> */}
      {/* <button onClick={() => {
        setTodos([...todos, value])
        setValue("")
      }}>Add Todo</button> */}
      {/* <button onClick={() => setTodos([])}>Delete All</button> */}
      {show && <Submit />}
      <br />
      <br />
      <br />
      <br />
      <button onClick={()=>setShow(false)}>Hide</button>
    </div>
  );
};
export default App;