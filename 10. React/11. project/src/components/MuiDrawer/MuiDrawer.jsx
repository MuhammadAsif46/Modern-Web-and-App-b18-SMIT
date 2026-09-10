import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MuiList from '../MuiList/MuiList';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useNavigate } from 'react-router-dom';
import CartContext from '../../context/cartContent';
import { useContext } from 'react';

export default function MuiDrawer({ open, setOpen, cartDetails }) {
    const navigate = useNavigate();
    const { cartTotal } = useContext(CartContext);

    const goToCheckout = () => {
        setOpen(false);
        navigate('/checkout');
    };


    return (
        <div>
            <React.Fragment>
                <Drawer
                    anchor={"right"}
                    open={open}
                    onClose={() => setOpen(false)}
                    PaperProps={{ sx: { width: { xs: '100%', sm: 420 }, p: { xs: 2, sm: 3 }, display: 'flex', backgroundColor: '#fafdfc' } }}
                >
                    <div className='flex items-center justify-between border-b border-slate-200 p-2'>
                        <div className='flex items-center gap-2'>
                            <ShoppingBagOutlinedIcon sx={{ color: '#2a9d8f' }} />
                            <Typography variant="h5" sx={{ fontWeight: 700 }}>Your Cart</Typography>
                        </div>
                        <IconButton aria-label="Close cart" onClick={() => setOpen(false)}><CloseIcon /></IconButton>
                    </div>
                    <MuiList cartDetails={cartDetails} />
                    <div className='mt-auto border-t border-slate-200 p-4'>
                        <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, fontWeight: 700 }}>
                            <span>Total</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </Typography>
                        <Button
                            fullWidth
                            variant="contained"
                            className='cart-btn'
                            disabled={!cartDetails?.length}
                            onClick={goToCheckout}
                        >
                            Checkout
                        </Button>
                    </div>
                </Drawer>
            </React.Fragment>
        </div>
    );
}