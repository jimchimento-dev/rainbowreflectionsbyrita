import React from 'react';
import { Grid, Typography, Button, Card, CardContent } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import ContactForm from './ContactForm';

const Contact = () => {
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
                    <ContactForm />
                </CardContent>
            </Card>
        </>
    )
}

export default Contact;