import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    
    const navigate = useNavigate();

    // const loginFunction = () => {
    //     navigate("/profile/muhammadasif46", {
    //         state: {
    //             name: "JhoN Elia"
    //         }
    //     })
    // }

    const loginHandle = () => {
        localStorage.setItem("user", true)
        // navigate("/profile/developer")
        navigate("/profile")
    }

    
  return (
    <div>
        <h1>Login Page</h1>
        {/* <button onClick={loginFunction}>Sign in</button> */}
        <button onClick={loginHandle}>Sign in</button>
    </div>
  )
}

export default Login