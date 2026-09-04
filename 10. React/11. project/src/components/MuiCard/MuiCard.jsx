import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import "./MuiCard.css"
import CartContext from '../../context/cartContent';
import { useContext } from 'react';

export default function MuiCard({ val, viewDetails }) {

    const { setCart } = useContext(CartContext)

    const addToCart = () => {
        const cartData = JSON.parse(localStorage.getItem("cart")) || []
        // console.log(cartData);
        cartData.push({ ...val, qty: 1 })
        localStorage.setItem("cart", JSON.stringify(cartData))
        setCart(cartData)

    }

    return (
        <Card sx={{ maxWidth: 300, paddingBottom: 6, position: "relative" }}>
            <CardMedia
                component="img"
                alt="green iguana"
                // height="90"
                // width={200}
                sx={{ objectFit: "contain", height: 240 }}
                image={val.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    $ {val.price}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {val.description.slice(0, 150)}
                </Typography>
                <Rating className='mt-5' name="read-only" value={val.rating.rate} readOnly />
            </CardContent>
            <CardActions className='absolute bottom-2 '>
                <Button variant="contained" onClick={addToCart} className='cart-btn'>Add to Cart</Button>
                <Button variant="outlined" onClick={() => viewDetails(val.id)} className='detail-btn'>View Details</Button>
            </CardActions>
        </Card>
    );
}
