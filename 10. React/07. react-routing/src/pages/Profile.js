import React from 'react'
import Links from '../components/links/Links'
import { useParams, useLocation } from 'react-router-dom'

const Profile = () => {

    // const { userId } = useParams()
    // console.log(userId);
    const { state, pathname } = useLocation()
    console.log(state?.name);
    console.log(pathname);

    return (
        <div>
            {/* <h2>Profile ({userId})</h2> */}
            <h2>Profile </h2>
            <Links />
        </div>
    )
}

export default Profile