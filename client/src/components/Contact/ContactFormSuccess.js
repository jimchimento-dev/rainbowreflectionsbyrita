import React from 'react';
import { Grid, Typography } from '@mui/material';

const ContactFormSuccess = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h2">Your form has been submitted! We will be in touch with you soon.</Typography>
            </Grid>
        </Grid>
    )
}

export default ContactFormSuccess; 