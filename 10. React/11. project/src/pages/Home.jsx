import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import axios from 'axios'
import MuiCard from '../components/MuiCard/MuiCard'
import MuiModal from '../components/MuiModal/MuiModal'

const Home = () => {

    const [products, setProducts] = useState([])
    const [open, setOpen] = React.useState(false);
    const [cardDetails, setCardDetails] = React.useState({});


    useEffect(() => {
        axios('https://fakestoreapi.com/products')
            .then(json => setProducts(json.data))
            .catch(err => console.log(err))
    }, [])

    const viewDetails = (id) => {
        axios(`https://fakestoreapi.com/products/${id}`)
            .then(json => {
                setCardDetails(json.data)
                setOpen(true)
            })
            .catch(err => console.log(err))
    }

    // console.log(products);


    return (
        <div>
            <Navbar />
            <MuiModal cardDetails={cardDetails} setOpen={setOpen} open={open} />
            <div className='flex flex-wrap justify-evenly gap-10 p-10'>
                {products?.map((val, idx) => <MuiCard viewDetails={viewDetails} key={val.id} val={val} />)}
            </div>
        </div>
    )
}

export default Home