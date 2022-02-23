import React, { useState } from 'react';
import { Grid, Typography, Button, Card, CardContent } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
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
                <Grid item xs={12}>
                    <Typography variant="h4" mt={5} sx={{ display: "flex", justifyContent: "center" }}>Contact Us</Typography>
                    <hr />
                </Grid>
            </Grid>
            <Grid container direction='row' justifyContent="center" className="row-content">
                <Grid item sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" mb={3}><u>Our Address</u></Typography>
                    <Typography>75 NJ-15 Building I-5</Typography>
                    <Typography>Lafayette, NJ</Typography>
                    <Typography>07848</Typography>
                    <Button fullWidth startIcon={<PhoneIcon />} href="tel:+19733003377" >1-973-300-3377</Button>
                    <Button fullWidth sx={{ textTransform: 'none' }} startIcon={<EmailIcon />} href="mailto:rainbowreflectionsbyrita@gmail.com">rainbowreflectionsbyrita@gmail.com</Button>
                </Grid>
            </Grid>
            <Grid container direction='row' justifyContent="center" mt={3}>
                <Grid item>
                    <Typography variant="h3">Have a question? Send us a message below!</Typography>

                </Grid>
            </Grid>``
            <Card sx={{ display: 'flex', justifyContent: 'center' }}>
                <CardContent>
                    {!formIsSubmitted ? <ContactForm submitForm={submitForm} /> : <ContactFormSuccess />}
                </CardContent>
            </Card>
            <Grid container className="row-content">
                <Grid item xs={12} display="flex" justifyContent="center">
                    <iframe width="85%" height="500" id="gmap_canvas" title="Google map image"
                        src="https://maps.google.com/maps?q=75%20NJ-15%20building%20i-5,%20Lafayette,%20NJ%2007848&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" />
                </Grid>
            </Grid>
        </>
    )
}

export default Contact;