import React, { useState } from 'react';
import { Typography, Grid, Button } from '@mui/material';
import useShopData from './useShopData';

const Cart = () => {

    const [shopItems] = useShopData();
    const [cartItems, setCartItems] = useState([]);


    const addToCart = item => {
        setCartItems([...cartItems, item]);
    }

    // const displayCart = cartItems.map(item => (
    //     <Typography key={item.id}>
    //         <Typography>{item.itemName}</Typography>
    //         <Button onClick={() => onAdd(item)}>+</Button>
    //         <Button onClick={() => onRemove(item)}>-</Button>
    //     </Typography>
    // ))

    const removeFromCart = item => {
        let copyCart = [...cartItems];

        copyCart = copyCart.filter(cartItem => cartItem.id !== item.id);
        setCartItems(copyCart);
    }

    return (
        <Grid container>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <Typography variant="h2">Cart is shown here</Typography>
            </Grid>

            {cartItems.map((item, index) => (
                <Grid item key={index}>
                    <Typography>{item.itemName}</Typography>
                    <Typography>{item.cost}</Typography>
                    <img src={item.image} alt={item.name} />
                </Grid>
            ))}



            {/* {shopItems.length === 0 && <Typography>No items are added in your cart.</Typography>}

            <Grid item>
                {shopItems.map(item => {
                    <Typography variant="div" key={item.id}>
                        <img
                            src={item.image}
                            alt={item.itemName} />
                    </Typography>
                })}
            </Grid>
            <Grid item>
                {shopItems.map(item => {
                    <Typography key={item.id}>
                        <Typography>{item.itemName}</Typography>
                        <Button onClick={() => onAdd(item)}>+</Button>
                        <Button onClick={() => onRemove(item)}>-</Button>
                    </Typography>
                })}
            </Grid>
            <Grid item>
                {item.qty} x {item.cost.toFixed(2)}
            </Grid> */}
        </Grid>
    )
}

export default Cart;