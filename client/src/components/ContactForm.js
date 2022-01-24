import React, { useState } from 'react';
import { Grid, TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const ContactForm = () => {

    const [value, setValue] = useState('');

    const handleChange = e => {
        setValue(e.target.value)
    }

    return (
        <form>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        label="First Name"
                        placeholder="Enter first name"
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        label="Last Name"
                        placeholder="Enter last name"
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        type="email"
                        variant="outlined"
                        label="Email"
                        placeholder="Enter email address"
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        type="number"
                        label="Phone Number"
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        id="subject"
                        label="Subject"
                        placeholder="Choose..."
                        select
                        required
                        fullWidth
                        value={value}
                        onChange={handleChange}
                    >
                        <MenuItem value={'Gifts'}>Gifts</MenuItem>
                        <MenuItem value={'Reading/Reiki Inquiry'}>Reading/Reiki Inquiry</MenuItem>
                        <MenuItem value={'Events'}>Events</MenuItem>
                        <MenuItem value={'Other'}>Other</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        label="Message"
                        multiline
                        rows={6}
                        placeholder="Your message here"
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">Send Message</Button>
                </Grid>
            </Grid>
        </form >
    )
}

export default ContactForm;