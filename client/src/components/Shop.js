import React, { Component } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

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
            <Grid item xs={12} sm={4} md={3} key={index}>
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
                {this.displayShopItems(this.state.shopItems)}
            </Grid>
        );
    }
}

export default Shop;