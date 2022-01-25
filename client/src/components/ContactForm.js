import React, { useState } from 'react';
import { Grid, TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import axios from 'axios';

const ContactForm = () => {

    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        email: '',
        number: '',
        message: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        const newRequest = {
            firstName: input.firstName,
            lastName: input.lastName,
            email: input.email,
            number: input.number,
            message: input.message
        }
        axios.post('http://localhost:5000/contact', newRequest);
    }

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
                </Grid>
                <Grid item xs={12}>
                    <Button type="button" variant="contained" color="primary" onClick={handleSubmit}>Send Message</Button>
                </Grid>
            </Grid>
        </form >
    )
}

export default ContactForm;