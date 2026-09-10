import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions, Chip, Rating } from '@mui/material';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../../context/cartContent';

export default function ProductDetail({ cardDetails, onClose }) {
    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate();

    const handleAddToCart = () => {
        addToCart(cardDetails);
        onClose();
    };

    const handleBuyNow = () => {
        addToCart(cardDetails);
        onClose();
        navigate('/checkout');
    };

    return (
        <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, padding: { xs: 1, sm: 2 }, boxShadow: 'none' }}>
            <CardMedia
                component="img"
                sx={{ width: { xs: '100%', sm: 200 }, height: { xs: 180, sm: 260 }, objectFit: "contain" }}
                image={cardDetails.image}

                alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {cardDetails.title}
                    </Typography>
                    <Typography component="div" variant="h6" className='py-2'>
                        $ {cardDetails.price}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ color: 'text.secondary' }}
                    >
                        {cardDetails.description}
                    </Typography>

                    <Box sx={{paddingTop:1}}>
                        <Chip label={cardDetails.category} />
                    </Box>
                    <Rating className='mt-5' name="read-only" value={cardDetails.rating.rate} readOnly />
                    <CardActions className=''>
                        <Button variant="contained" className='cart-btn' onClick={handleAddToCart}>Add to Cart</Button>
                        <Button variant="outlined" className='detail-btn' onClick={handleBuyNow}>Buy Now</Button>
                    </CardActions>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                </Box>
            </Box>

        </Card>
    );
}
