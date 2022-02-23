import React from 'react';
import { Typography, Grid, Button, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { loadStripe } from '@stripe/stripe-js' // creates a stripe object once it finishes loading.
import axios from 'axios';

const Cart = ({ cartItems, onAdd, onRemove }) => {

    const itemsPrice = cartItems.reduce((a, c) => a + c.cost * c.qty, 0);
    const taxPrice = itemsPrice * 0.06625;
    const totalPrice = itemsPrice + taxPrice;


    let stripePromise;

    const getStripe = () => {
        if (!stripePromise) {
            stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
        }
        return stripePromise;
    }

    const item = {
        price: cartItems.map(item => item.cost),
        quantity: 1
    }

    const checkoutOptions = {
        lineItems: [item],
        mode: "payment",
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/cancel`
    }

    const redirectToCheckout = async () => {
        console.log("redirectToCheckout")

        const stripe = await getStripe()
        const { error } = await stripe.redirectToCheckout(checkoutOptions);
        console.log("Stripe checkout error", error)
    }

    const makePayment = token => {
        const body = {
            token,
            cartItems
        }
        const headers = {
            "Content-Type": "application/json"
        }
        axios.post('http://localhost:5000/contact', {
            headers,
            body
        })
            .then(response => {
                console.log(response)
                const { status } = response;
                console.log(status)
            })
            .catch(error => console.log(error));
    }

    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h4" mt={5} sx={{ display: "flex", justifyContent: "center" }}>Cart</Typography>
                    <hr />
                </Grid>
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography mt={3} variant="h3">
                        {cartItems.length === 0 && <Typography variant="h5" mb={5}>Your cart is currently empty.</Typography>}
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{ display: "flex", alignContent: "center" }}>
                    <Card variant="outlined" sx={{}}>
                        {
                            cartItems.length !== 0 && (
                                <>
                                    <CardContent sx={{ textAlign: "center" }}>
                                        <Typography variant="h6">Items Price - ${itemsPrice.toFixed(2)} </Typography>
                                        <Typography variant="h6">Tax - ${taxPrice.toFixed(2)}</Typography>
                                        <Typography variant="h6" sx={{ fontWeight: "600" }}>Total - ${totalPrice.toFixed(2)}</Typography>
                                    </CardContent>
                                    <CardActions sx={{ marginTop: 'auto', display: "flex", justifyContent: "center" }}>
                                        <Button variant="contained" size="large" fullWidth onClick={redirectToCheckout}>Checkout</Button>
                                    </CardActions>
                                </>
                            )
                        }
                    </Card>
                </Grid>
                {cartItems.map((item) => (
                    <Grid item xs={12} key={item.id} sx={{ display: 'flex', justifyContent: 'center' }} mt={4}>
                        <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '60%' }}>
                            <CardMedia
                                component="img"
                                image={item.image}
                                alt={item.itemName}
                                sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', width: '100%', height: '15vw', margin: '3rem' }}
                            />
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.itemName}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                                <Typography mt={4} sx={{ marginBottom: "auto", whiteSpace: "nowrap", fontWeight: "600" }}>Quantity - {item.qty} x ${item.cost.toFixed(2)}</Typography>
                            </CardContent>
                            <Grid item xs={12}>
                                <CardActions>
                                    <Button variant="contained" color="success" onClick={() => onAdd(item)}>+</Button>
                                    <Button variant="contained" color="error" onClick={() => onRemove(item)}>-</Button>
                                </CardActions>
                            </Grid>
                        </Card>
                    </Grid>
                ))
                }
            </Grid >
        </>
    )
}

export default Cart;