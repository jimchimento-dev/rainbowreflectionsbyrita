import React from 'react';
import { Grid, Typography, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Grid>
            <Paper elevation={10} sx={{ padding: '20px', height: '70vh', width: '480px', margin: "20px auto" }}>
                <Grid align="center">
                    <Avatar src="/assets/images/Butterfly_nav_image-removebg-preview (1).png" sx={{ width: 50, height: 50 }}></Avatar>
                    <Typography variant="h5" sx={{ fontSize: 23 }}>Welcome! Create your account.</Typography>
                </Grid>
                <TextField label="First Name" placeholder="First Name" sx={{ marginTop: 5 }} fullWidth required />
                <TextField label="Last Name" placeholder="Last Name" sx={{ marginTop: 2 }} fullWidth required />
                <TextField label="Email" placeholder="Email" sx={{ marginTop: 2 }} fullWidth required />
                <TextField label="Password" placeholder="Password (6 or more characters)" type="password" sx={{ marginTop: 2 }} fullWidth required />
                <Button type="submit" color="primary" variant="contained" sx={{ margin: '25px 0' }} fullWidth>Register</Button>
                <Typography variant="h6" align="center" sx={{ margin: '5px 0' }}>Already a member? <Link to="/login">Sign in</Link></Typography>
            </Paper>
        </Grid>
    )
}

export default Register;