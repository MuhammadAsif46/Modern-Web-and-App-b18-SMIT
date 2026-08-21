import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Products = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        // fetch("https://dummyjson.com/products")
        //     .then(response => response.json())
        //     .then(res => setData(res.products))
        //     .catch(err => console.log(err))
        axios("https://dummyjson.com/products")
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])

    console.log(data.products);


    return (
        <div>
            <h1>Products</h1>
            <div>
                {data?.products?.map((val, idx) => <div key={idx}>{val.title}</div>)}
            </div>
        </div>
    )
}

export default Products