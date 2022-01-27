import React, { useState } from 'react';
import { Grid, Typography, Button, Card, CardContent } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import ContactForm from './ContactForm';
import ContactFormSuccess from './ContactFormSuccess';

const Contact = () => {

    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    const submitForm = () => {
        setFormIsSubmitted(true);
    }

    return (
        <>
            <Grid container>
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    <Typography variant="h2">Contact Us</Typography>
                    <hr />
                </Grid>
            </Grid>
            <Grid container direction='row' justifyContent="center" className="row-content">
                <Grid item sx={{ textAlign: 'center' }}>
                    <Typography variant="h4">Our Address</Typography>
                    <Typography>75 NJ-15 Building I-5</Typography>
                    <Typography>Lafayette, NJ</Typography>
                    <Typography>07848</Typography>
                    <Button startIcon={<PhoneIcon />} href="tel:+19733003377" >1-973-300-3377</Button>
                </Grid>
            </Grid>
            <Grid container direction='row' justifyContent="center" mt={3}>
                <Grid item>
                    <Typography variant="h3">Send us your feedback, we'd love to hear from you!</Typography>

                </Grid>
            </Grid>
            <Card sx={{ display: 'flex', justifyContent: 'center' }}>
                <CardContent>
                    {!formIsSubmitted ? <ContactForm submitForm={submitForm} /> : <ContactFormSuccess />}
                </CardContent>
            </Card>
            <Grid container className="row-content">
                <Grid item xs={12}>
                    <iframe width="100%" height="500" id="gmap_canvas"
                        src="https://maps.google.com/maps?q=75%20NJ-15%20building%20i-5,%20Lafayette,%20NJ%2007848&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" /><a
                        href="https://www.zipcodewiki.net/united-states/" />
                </Grid>
            </Grid>
        </>
    )
}

export default Contact;