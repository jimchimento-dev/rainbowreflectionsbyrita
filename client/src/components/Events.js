import React, { Component } from 'react';
import axios from 'axios'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@mui/material';

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        }
    }

    componentDidMount = () => {
        this.getEvents();
    };

    getEvents = () => {
        axios.get('http://localhost:5000/events')
            .then(res => {
                this.setState({ events: res.data });
            })
            .catch(() => {
                console.log('Error retrieving data.');
            });
    }

    displayEvents = events => {
        if (!events.length) return null;

        return events.map((event, index) => (
            <Grid item xs={12} key={index} sx={{ display: 'flex', justifyContent: 'center' }} mt={4}>
                <Card sx={{ maxWidth: 345 }} variant="outlined" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <CardMedia
                        component="img"
                        image={event.image}
                        alt={event.eventName}
                        sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', height: 'auto', maxHeight: '500px', width: 'auto', maxWidth: '400px', margin: '3rem' }}
                    />
                    <CardContent sx={{ textAlign: 'center' }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {event.eventName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {event.description}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ marginTop: 'auto' }}>
                        <Button size="large" variant="contained" sx={{ whiteSpace: 'nowrap', marginBottom: '15px', marginRight: '40px' }}>Book Now</Button>
                    </CardActions>
                </Card>
            </Grid>
        ))
    }

    render() {
        return (
            <Grid container>
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    <Typography variant="h2">Upcoming Events</Typography>
                    <hr />
                </Grid>
                {this.displayEvents(this.state.events)}
            </Grid>
        )
    }
}

export default Events;