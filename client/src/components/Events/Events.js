import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@mui/material';
import { openPopupWidget } from 'react-calendly';

const Events = ({ events }) => {

    const bookEvent = ({ url = "https://calendly.com/chimentoaudio/30-minute-tarot-card-reading" }) => {
        openPopupWidget({ url });
    }

    const displayEvents = () => {
        if (!events.length) return null;

        return events.map((event, index) => (
            <Grid item xs={9} key={index} sx={{ display: 'flex', justifyContent: 'center' }} mt={4} mb={3}>
                <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <CardMedia
                        component="img"
                        image={event.image}
                        alt={event.eventName}
                        sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', height: '100%', maxHeight: 'auto', width: '100%', maxWidth: '300px', margin: '3rem' }}
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
                        <Button size="large" variant="contained" onClick={bookEvent} sx={{ whiteSpace: 'nowrap', marginBottom: '15px', marginRight: '40px' }}>Book Now</Button>
                    </CardActions>
                </Card>
            </Grid>
        ))
    }

    return (
        <Grid container direction="row"
            alignItems="center"
            justify="center">
            <Grid item xs={12}>
                <Typography variant="h4" mt={5} sx={{ display: "flex", justifyContent: "center" }}>Upcoming Events</Typography>
                <hr />
            </Grid>
            {displayEvents()}
        </Grid>
    )
}

export default Events;





// class Events extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             events: []
//         }
//     }

//     componentDidMount = () => {
//         this.getEvents();
//     };

//     getEvents = () => {
//         axios.get('http://localhost:5000/events')
//             .then(res => {
//                 this.setState({ events: res.data });
//             })
//             .catch(() => {
//                 console.log('Error retrieving data.');
//             });
//     }

//     displayEvents = events => {
//         if (!events.length) return null;

//         return events.map((event, index) => (
//             <Grid item xs={12} key={index} sx={{ display: 'flex', justifyContent: 'center' }} mt={4}>
//                 <Card sx={{ maxWidth: 345 }} variant="outlined" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
//                     <CardMedia
//                         component="img"
//                         image={event.image}
//                         alt={event.eventName}
//                         sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', height: 'auto', maxHeight: '500px', width: 'auto', maxWidth: '400px', margin: '3rem' }}
//                     />
//                     <CardContent sx={{ textAlign: 'center' }}>
//                         <Typography gutterBottom variant="h5" component="div">
//                             {event.eventName}
//                         </Typography>
//                         <Typography variant="body2" color="text.secondary">
//                             {event.description}
//                         </Typography>
//                     </CardContent>
//                     <CardActions sx={{ marginTop: 'auto' }}>
//                         <Button size="large" variant="contained" sx={{ whiteSpace: 'nowrap', marginBottom: '15px', marginRight: '40px' }}>Book Now</Button>
//                     </CardActions>
//                 </Card>
//             </Grid>
//         ))
//     }

//     render() {
//         return (
//             <Grid container>
//                 <Grid item xs={12}>
//                     <Typography variant="h4" mt={5} sx={{ display: "flex", justifyContent: "center" }}>Upcoming Events</Typography>
//                     <hr />
//                 </Grid>
//                 {this.displayEvents(this.state.events)}
//             </Grid>
//         )
//     }
// }

// export default Events;