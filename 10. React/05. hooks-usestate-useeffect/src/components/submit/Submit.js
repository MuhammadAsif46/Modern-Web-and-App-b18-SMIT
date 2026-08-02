import React, { useEffect } from 'react'

const Submit = () => {

    useEffect(() => {
    
        

        return () => {
            console.log("khatam ya component destroy");
        }
    }, [])

    return (
        <button>Submit</button>
    )
}

export default Submit