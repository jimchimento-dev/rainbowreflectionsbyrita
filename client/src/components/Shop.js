import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@mui/material';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shopItems: []
        }
    }

    componentDidMount = () => {
        this.getShopItems();
    };

    getShopItems = () => {
        axios.get('http://localhost:5000/shop')
            .then(res => {
                this.setState({ shopItems: res.data });
            })
            .catch(() => {
                console.log('Error retrieving data.');
            });
    }

    displayShopItems = items => {
        if (!items.length) return null;

        return items.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} mt={3}>
                <Card sx={{ maxWidth: 345 }} variant="outlined">
                    <CardMedia
                        component="img"
                        height="500"
                        image={item.image}
                        alt={item.itemName}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.itemName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Add to Cart</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Grid>
        ))
    }

    render() {
        return (
            <Grid container>
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    <Typography variant="h2">Shop</Typography>
                    <hr />
                </Grid>
                {this.displayShopItems(this.state.shopItems)}
            </Grid>
        );
    }
}

export default Shop;