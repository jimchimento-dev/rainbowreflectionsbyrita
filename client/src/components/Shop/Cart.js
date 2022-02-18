import React from 'react';
import { Typography, Grid, Button, Card, CardMedia, CardContent, CardActions, Paper, Box } from '@mui/material';

const Cart = ({ cartItems, onAdd, onRemove }) => {

    const itemsPrice = cartItems.reduce((a, c) => a + c.cost * c.qty, 0);
    const taxPrice = itemsPrice * 0.06625;
    const totalPrice = itemsPrice + taxPrice;

    return (

        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h4" ml={25} mt={5}>Cart</Typography>
                <hr />
            </Grid>
            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                <Typography mt={3} variant="h3">
                    {cartItems.length === 0 && <Typography variant="h5" mb={5}>Your cart is currently empty.</Typography>}
                </Typography>
            </Grid>
            {cartItems.map((item) => (
                <Grid item xs={12} md={9} key={item.id} sx={{ display: 'flex', justifyContent: 'center' }} mt={4}>
                    <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '60%' }}>
                        <CardMedia
                            component="img"
                            image={item.image}
                            alt={item.itemName}
                            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', width: '100%', height: '15vw', margin: '3rem' }}
                        />
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.itemName} - ${item.cost}
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
            <Grid item xs={12} md={3} sx={{ display: "flex", justifyContent: "center" }}>
                <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "center" }}>
                    {
                        cartItems.length !== 0 && (
                            <>
                                <CardContent sx={{ textAlign: "center" }}>
                                    <Typography variant="h6">Items Price - ${itemsPrice.toFixed(2)} </Typography>
                                    <Typography variant="h6">Tax - ${taxPrice.toFixed(2)}</Typography>
                                    <Typography variant="h6" sx={{ fontWeight: "600" }}>Total - ${totalPrice.toFixed(2)}</Typography>
                                </CardContent>
                                <CardActions sx={{ marginTop: 'auto', textAlign: "center" }}>
                                    <Button variant="contained" color="primary">Checkout</Button>
                                </CardActions>
                            </>
                        )
                    }
                </Card>
            </Grid>
        </Grid >
    )
}

export default Cart;