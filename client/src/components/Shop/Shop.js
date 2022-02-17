import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@mui/material';
import useShopData from './useShopData';
import { Link } from 'react-router-dom';

const Shop = () => {

    const [shopItems] = useShopData();

    const addToCart = () => {

    }

    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h4" ml={25} mt={5}>Shop</Typography>
                    <hr />
                </Grid>
                {shopItems.map((item, index) =>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        key={index}
                        mt={3}>
                        <Card sx={{ maxWidth: 345, height: '100%' }} variant="outlined">
                            <CardMedia
                                component="img"
                                height="500"
                                image={item.image}
                                alt={item.itemName}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.itemName} - ${item.cost}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    sx={{ marginLeft: 'auto', marginBottom: '15px', marginRight: '15px', height: '100%' }}
                                    variant="contained"
                                    size="small "
                                    onClick={addToCart}
                                >Add to Cart</Button>
                            </CardActions>
                        </Card>
                    </Grid>)}
                {/* <Link to="/cart">
                    <Button variant="outlined">Go to cart</Button>
                </Link> */}
            </Grid>
        </>
    )
}

export default Shop;
