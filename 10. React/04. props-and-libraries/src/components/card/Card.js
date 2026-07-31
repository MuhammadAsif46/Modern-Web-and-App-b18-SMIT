import React from 'react'

import "../../App.css"

const Card = ({ title, description, image, foo }) => {
    let username = "Ali"

    return (
        <div className='main'>
            <img src={image} alt='image' width="100%" />
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={() => foo(username)}>Buy Now</button>
        </div>
    )
}

export default Card