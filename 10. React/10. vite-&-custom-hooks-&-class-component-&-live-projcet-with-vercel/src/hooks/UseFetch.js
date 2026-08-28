import React, { useEffect, useState } from 'react'

const UseFetch = (url) => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(res => setData(res))
            .catch(err => console.log(err))
    }, [])

    return { data }

}

export default UseFetch