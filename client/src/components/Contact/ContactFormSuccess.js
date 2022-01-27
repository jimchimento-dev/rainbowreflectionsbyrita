import React from 'react';
import { Grid, Typography } from '@mui/material';

const ContactFormSuccess = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h2">Your form has been sent! Thank you for your feedback.</Typography>
            </Grid>
        </Grid>
    )
}

export default ContactFormSuccess; 