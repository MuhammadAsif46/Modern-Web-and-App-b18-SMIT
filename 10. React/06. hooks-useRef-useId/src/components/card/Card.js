import React from 'react'
import MyButton from '../MyButton/MyButton'

const Card = ({ title, description, btnText }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <MyButton title={btnText} />
        </div>
    )
}

export default Card