import axios from 'axios';
import React from 'react'
import { BaseUrlLocal, BaseUrlProduction } from '../utils/constant.js';

const Contact = () => {
    const [posts, setPosts] = React.useState([])

    React.useEffect(() => {
        axios.get(`${BaseUrlProduction}/posts`)
            .then((response) => {
                setPosts(response.data)
            })
            .catch((error) => {
                console.error('Error fetching posts:', error)
            })
    }, [])


    return (
        <div>
            <h1>All Posts</h1>
            {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    )
}

export default Contact