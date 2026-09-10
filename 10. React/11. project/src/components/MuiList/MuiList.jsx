import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CartContext from '../../context/cartContent';
import { useContext } from 'react';

export default function MuiList({ cartDetails }) {
    const { updateQuantity, removeFromCart } = useContext(CartContext);

    return (
        <List sx={{ width: '100%', overflowY: 'auto', p: 0 }}>
            {!cartDetails?.length && <Typography sx={{ color: 'text.secondary', py: 4, textAlign: 'center' }}>Your cart is empty.</Typography>}
            {cartDetails?.map((item) => {
                const subtotal = item.price * item.qty;

                return (
                    <React.Fragment key={item.id}>
                        <ListItem alignItems="flex-start" sx={{ px: 1, py: 1.5, my: 1, gap: 1, borderRadius: 2, backgroundColor: '#fff', boxShadow: '0 2px 10px rgba(18, 56, 52, 0.06)' }}>
                            <img src={item.image} alt={item.title} style={{ width: 72, height: 72, objectFit: 'contain', flexShrink: 0 }} />
                            <div className='min-w-0 flex-1'>
                                <Typography variant="subtitle2" sx={{ fontWeight: 600, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.title}</Typography>
                                <Typography variant="body2" color="text.secondary">${item.price.toFixed(2)} each</Typography>
                                <div className='flex items-center justify-between mt-1'>
                                    <div className='flex items-center'>
                                        <IconButton size="small" aria-label={`Decrease ${item.title} quantity`} onClick={() => updateQuantity(item.id, item.qty - 1)}><RemoveIcon fontSize="small" /></IconButton>
                                        <Typography sx={{ minWidth: 24, textAlign: 'center' }}>{item.qty}</Typography>
                                        <IconButton size="small" aria-label={`Increase ${item.title} quantity`} onClick={() => updateQuantity(item.id, item.qty + 1)}><AddIcon fontSize="small" /></IconButton>
                                    </div>
                                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>${subtotal.toFixed(2)}</Typography>
                                </div>
                            </div>
                            <IconButton color="error" aria-label={`Remove ${item.title}`} onClick={() => removeFromCart(item.id)}><DeleteOutlineIcon /></IconButton>
                        </ListItem>
                    </React.Fragment>
                )
            })}

        </List>
    );
}
