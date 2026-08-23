import React, { useContext } from 'react'
import UserContext from '../context/UserContext';

const Login = () => {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const { setUser } = useContext(UserContext)

    const loginFunction = () => {
        // Login logic here
        console.log(username, password);

        setUser({ username, password })

    }

    return (
        <div>
            <h1>Login Page</h1>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
            <br />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
            <button onClick={loginFunction}>Login</button>
        </div>
    )
}

export default Login