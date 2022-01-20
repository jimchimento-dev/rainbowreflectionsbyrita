import React from 'react';
import { Typography, Grid } from '@mui/material';

const Services = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    <Typography variant="h2">Services Offered</Typography>
                    <hr />
                </Grid>
            </Grid>

            <Grid container className="row-content">
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <img src="/assets/images/Spiritual Guidance.jpeg" alt="Spiritual Guidance" className="img-thumbnail" />
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    <Typography variant="h2" mt={4}>Intuitive Guidance and Metaphysical Counseling</Typography>
                    <Typography variant="p" sx={{ overflowWrap: "break-word" }}>Each of us is the navigator of our own life and create our own destiny through our choices and free will. Intuitive readings and metaphysical counseling can provide deeper insight and understanding of life situations so that you can move forward feeling empowered and in control of your life.</Typography>
                </Grid>
                <Grid item xs={6} mt={3} sx={{ textAlign: 'center' }}>
                    <Typography variant="h3">30 Minute Session</Typography>
                    <br />
                    <Typography variant="h3">45 Minute Session</Typography>
                    <br />
                    <Typography variant="h3">Full Hour Session</Typography>
                </Grid>
                <Grid item xs={6} mt={3} sx={{ textAlign: 'center' }}>
                    <Typography variant="h3">$50</Typography>
                    <br />
                    <Typography variant="h3">$75</Typography>
                    <br />
                    <Typography variant="h3">$90</Typography>
                </Grid>
            </Grid>
            <Grid container className="row-content">
                <Grid container direction="row" justifyContent="center" alignItems="center" >
                    <img src="/assets/images/Reiki Healing.jpeg" alt="Reiki Healing" className="img-thumbnail" />
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    <Typography variant="h2" mt={4}>Reiki Healing Session with Chakra Balancing</Typography>
                    <Typography variant="p">Reiki is a Japanese technique for stress reduction and relaxation that also promotes healing. It is administered by "laying on hands" and is based on the idea that an unseen "life force energy" flows through us and is what causes us to be alive. It can relieve stress, anxiety, and expedite the healing process after illness, surgery or injury. Reiki treats the whole person including body, mind and spirit.</Typography>
                </Grid>
                <Grid item xs={6} mt={3} sx={{ textAlign: 'center' }}>
                    <Typography variant="h3">Reiki Session</Typography>
                    <Typography variant="p"><i>During a Reiki session, your seven major chakras will be checked, cleared, balanced and your auric field will be sealed from negativity.</i></Typography>
                </Grid>
                <Grid item xs={6} mt={3} sx={{ textAlign: 'center' }}>
                    <Typography variant="h3">$90</Typography>
                </Grid>
            </Grid>

        </>
    )
}

export default Services;