import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Button, CardActions, Chip, Rating } from '@mui/material';

export default function ProductDetail({ cardDetails }) {
    const theme = useTheme();

    return (
        <Card sx={{ display: 'flex', padding: 2 }}>
            <CardMedia
                component="img"
                sx={{ width: 200, objectFit: "contain" }}
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
                        <Button variant="contained" className='cart-btn'>Add to Cart</Button>
                        <Button variant="outlined" className='detail-btn'>Buy Now</Button>
                    </CardActions>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                </Box>
            </Box>

        </Card>
    );
}
