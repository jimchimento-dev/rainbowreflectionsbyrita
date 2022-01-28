import React from 'react';
import { Grid, TextField, Button, Typography } from '@mui/material';
import useForm from './useForm';

const ContactForm = ({ submitForm }) => {

    const { handleChange, handleSubmit, input, errors } = useForm(
        submitForm
    );

    return (
        <form>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        onChange={handleChange}
                        name="firstName"
                        variant="outlined"
                        label="First Name"
                        placeholder="Enter first name"
                        value={input.firstName}
                        required
                        fullWidth
                    />
                    {errors.firstName && <Typography sx={{ color: 'red' }} variant="p">{errors.firstName}</Typography>}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        onChange={handleChange}
                        name="lastName"
                        variant="outlined"
                        label="Last Name"
                        placeholder="Enter last name"
                        value={input.lastName}
                        required
                        fullWidth
                    />
                    {errors.lastName && <Typography sx={{ color: 'red' }} variant="p">{errors.lastName}</Typography>}
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        onChange={handleChange}
                        name="email"
                        type="email"
                        variant="outlined"
                        label="Email"
                        placeholder="Enter email address"
                        required
                        fullWidth
                        value={input.email}
                    />
                    {errors.email && <Typography sx={{ color: 'red' }} variant="p">{errors.email}</Typography>}
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        onChange={handleChange}
                        name="number"
                        type="number"
                        label="Phone Number"
                        value={input.number}
                        required
                        fullWidth
                    />
                    {errors.number && <Typography sx={{ color: 'red' }} variant="p">{errors.number}</Typography>}
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        onChange={handleChange}
                        name="message"
                        variant="outlined"
                        label="Message"
                        value={input.message}
                        multiline
                        rows={6}
                        placeholder="Your message here"
                        required
                        fullWidth
                    />
                    {errors.message && <Typography sx={{ color: 'red' }} variant="p">{errors.message}</Typography>}
                </Grid>
                <Grid item xs={12} sx={{ display: "flex", justifyContent: 'flex-end' }}>
                    <Button type="button" variant="contained" color="primary" onClick={handleSubmit}>Send Message</Button>
                </Grid>
            </Grid>
        </form >
    )
}

export default ContactForm;