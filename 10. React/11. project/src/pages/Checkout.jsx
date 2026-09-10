import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Navbar from '../components/Navbar/Navbar'
import CartContext from '../context/cartContent'

const initialFormData = {
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
}

export default function Checkout() {
    const { cart, cartTotal } = useContext(CartContext)
    const navigate = useNavigate()
    const [formData, setFormData] = useState(initialFormData)

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((currentData) => ({ ...currentData, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // This object is ready to be sent to a future place-order API.
        const orderData = { customer: formData, items: cart, total: cartTotal }
        console.log('Order ready for API integration:', orderData)
    }

    return (
        <>
            <Navbar />
            <main className='mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-12'>
                <div className='mb-8'>
                    <Typography variant='h3' sx={{ fontWeight: 700, fontSize: { xs: '2rem', md: '2.75rem' } }}>Checkout</Typography>
                    <Typography color='text.secondary' sx={{ mt: 1 }}>Complete your details to review and place your order.</Typography>
                </div>

                {!cart.length ? (
                    <Card sx={{ textAlign: 'center', py: 6 }}>
                        <CardContent>
                            <Typography variant='h5' sx={{ mb: 1 }}>Your cart is empty</Typography>
                            <Typography color='text.secondary' sx={{ mb: 3 }}>Add a product before proceeding to checkout.</Typography>
                            <Button variant='contained' className='cart-btn' onClick={() => navigate('/')}>Continue Shopping</Button>
                        </CardContent>
                    </Card>
                ) : (
                    <Grid container spacing={4} alignItems='flex-start'>
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Card component='form' onSubmit={handleSubmit}>
                                <CardContent sx={{ p: { xs: 2, sm: 4 } }}>
                                    <Typography variant='h5' sx={{ fontWeight: 700, mb: 3 }}>Customer Information</Typography>
                                    <Grid container spacing={2}>
                                        <Grid size={{ xs: 12 }}>
                                            <TextField required fullWidth label='Full Name' name='fullName' value={formData.fullName} onChange={handleChange} />
                                        </Grid>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <TextField required fullWidth type='email' label='Email' name='email' value={formData.email} onChange={handleChange} />
                                        </Grid>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <TextField required fullWidth label='Phone Number' name='phone' value={formData.phone} onChange={handleChange} />
                                        </Grid>
                                        <Grid size={{ xs: 12 }}>
                                            <TextField required fullWidth multiline minRows={3} label='Complete Address' name='address' value={formData.address} onChange={handleChange} />
                                        </Grid>
                                        <Grid size={{ xs: 12, sm: 7 }}>
                                            <TextField required fullWidth label='City' name='city' value={formData.city} onChange={handleChange} />
                                        </Grid>
                                        <Grid size={{ xs: 12, sm: 5 }}>
                                            <TextField required fullWidth label='Postal Code' name='postalCode' value={formData.postalCode} onChange={handleChange} />
                                        </Grid>
                                    </Grid>
                                    <Button type='submit' fullWidth variant='contained' size='large' className='cart-btn' sx={{ mt: 4 }}>Place Order</Button>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid size={{ xs: 12, md: 5 }}>
                            <Card>
                                <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                                    <Typography variant='h5' sx={{ fontWeight: 700, mb: 2 }}>Order Summary</Typography>
                                    {cart.map((item) => (
                                        <div key={item.id} className='flex items-center gap-3 py-3'>
                                            <img src={item.image} alt={item.title} className='h-14 w-14 object-contain' />
                                            <div className='min-w-0 flex-1'>
                                                <Typography variant='subtitle2' sx={{ fontWeight: 600 }}>{item.title}</Typography>
                                                <Typography variant='body2' color='text.secondary'>Qty: {item.qty} x ${item.price.toFixed(2)}</Typography>
                                            </div>
                                            <Typography variant='subtitle2' sx={{ fontWeight: 700 }}>${(item.price * item.qty).toFixed(2)}</Typography>
                                        </div>
                                    ))}
                                    <Divider sx={{ my: 1 }} />
                                    <div className='flex justify-between pt-3'>
                                        <Typography variant='h6' sx={{ fontWeight: 700 }}>Total</Typography>
                                        <Typography variant='h6' sx={{ color: '#2a9d8f', fontWeight: 700 }}>${cartTotal.toFixed(2)}</Typography>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                )}
            </main>
        </>
    )
}
