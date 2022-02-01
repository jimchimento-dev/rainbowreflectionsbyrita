import React from 'react';
import { Grid, Typography, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {

    return (
        <>
            <Grid>
                <Paper elevation={10} sx={{ padding: '20px', height: '70vh', width: '480px', margin: "20px auto" }}>
                    <Grid align="center">
                        <Avatar src="/assets/images/Butterfly_nav_image-removebg-preview (1).png" sx={{ width: 50, height: 50 }}></Avatar>
                        <Typography variant="h5">Welcome! Please sign in below.</Typography>
                    </Grid>
                    <TextField label="Username" placeholder="Username" sx={{ marginTop: 5 }} fullWidth required />
                    <TextField label="Password" placeholder="Password" type="password" sx={{ marginTop: 2 }} fullWidth required />
                    <FormControlLabel sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }} label="Remember Me" control={<Checkbox color="primary" />} />
                    <Button type="submit" color="primary" variant="contained" sx={{ margin: '8px 0' }} fullWidth>Sign In</Button>
                    <Typography variant="h6" align="center" sx={{ margin: '15px 0' }}>New user? <Link to="/register">Register here</Link></Typography>
                </Paper>
            </Grid>
        </>
    )
}

export default Login;