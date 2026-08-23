import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {

    const { user } = useContext(UserContext)

    return (
        <div>
            <h1>Profile Page</h1>
            {user ? <p>Welcome, {user.username}!</p> : <p>Please log in to view your profile.</p>}
        </div>
    )
}

export default Profile