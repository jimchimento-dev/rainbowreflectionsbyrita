import React from 'react';
import { Typography, Grid, Button } from '@mui/material';
import { openPopupWidget } from 'react-calendly';

const Services = () => {

    const book30 = ({ url = "https://calendly.com/chimentoaudio/30-minute-tarot-card-reading" }) => {
        openPopupWidget({ url });
    }

    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h4" mt={5} sx={{ display: "flex", justifyContent: "center" }}>Services Offered</Typography>
                    <hr />
                </Grid>
            </Grid>
            <Grid container className="row-content">
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <img src="/assets/images/Spiritual Guidance.jpeg" alt="Spiritual Guidance" className="img-thumbnail" />
                </Grid>
                <Grid item xs={12} align="center">
                    <Typography variant="h3" mt={4}>Intuitive Guidance and Metaphysical Counseling</Typography>
                    <Typography variant="h5" mt={3} sx={{ overflowWrap: "break-word", fontSize: 20 }}>Each of us is the navigator of our own life and create our own destiny through our choices and free will. Intuitive readings and metaphysical counseling can provide deeper insight and understanding of life situations so that you can move forward feeling empowered and in control of your life.</Typography>
                </Grid>
                <Grid item xs={12} sm={4} mt={3} align="center">
                    <Typography variant="h4">30 Minute Reading</Typography>
                    <br />
                    <Typography variant="h4">45 Minute Session</Typography>
                    <br />
                    <Typography variant="h4">Full Hour Session</Typography>
                </Grid>
                <Grid item xs={4} sm={4} mt={3} align="center" className="displayNone">
                    <Typography variant="h4">$50</Typography>
                    <br />
                    <Typography variant="h4">$75</Typography>
                    <br />
                    <Typography variant="h4">$90</Typography>
                </Grid>
                <Grid item xs={12} sm={4} align="center" mt={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <Button variant="contained" onClick={book30}>Book 30 Minute Reading</Button>
                    <br />
                    <Button variant="contained" onClick={book30}>Book 45 Minute Reading</Button>
                    <br />
                    <Button variant="contained" onClick={book30}>Book Hour Reading</Button>
                </Grid>
            </Grid>
            <Grid container className="row-content">
                <Grid container direction="row" justifyContent="center" alignItems="center" >
                    <img src="/assets/images/Reiki Healing.jpeg" alt="Reiki Healing" className="img-thumbnail" width="500" />
                </Grid>
                <Grid item xs={12} align="center">
                    <Typography variant="h3" mt={4}>Reiki Healing Session with Chakra Balancing</Typography>
                    <Typography variant="h5" mt={3} sx={{ fontSize: 20 }}>Reiki is a Japanese technique for stress reduction and relaxation that also promotes healing. It is administered by "laying on hands" and is based on the idea that an unseen "life force energy" flows through us and is what causes us to be alive. It can relieve stress, anxiety, and expedite the healing process after illness, surgery or injury. Reiki treats the whole person including body, mind and spirit.</Typography>
                </Grid>
                <Grid item xs={12} sm={4} mt={3} align="center">
                    <Typography variant="h4">Reiki Session</Typography>
                    <Typography variant="p"><i>During a Reiki session, your seven major chakras will be checked, cleared, balanced and your auric field will be sealed from negativity.</i></Typography>
                </Grid>
                <Grid item sm={4} mt={3} className="displayNone" align="center">
                    <Typography variant="h4">$90</Typography>
                </Grid>
                <Grid item xs={12} sm={4} mt={6} align="center">
                    <Button variant="contained" disabled>Coming Soon!</Button>
                </Grid>
            </Grid>

        </>
    )
}

export default Services;