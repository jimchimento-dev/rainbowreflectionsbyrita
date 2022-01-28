import React, { useState } from 'react';
import { Typography, Grid } from '@mui/material';

const Cart = () => {

    const [cartItems, setCartItems] = useState([])

    return (
        <Grid container>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <Typography variant="h2">Cart is shown here</Typography>
            </Grid>

            {cartItems.length === 0 && <Typography>No items are added in your cart.</Typography>}

            <Grid item>
                {cartItems.map(item => {
                    <Typography variant="div" key={item.id}>
                        <img
                            src={item.image}
                            alt={item.itemName} />
                    </Typography>
                })}
            </Grid>
        </Grid>
    )
}

export default Cart;