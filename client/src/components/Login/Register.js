import React, { useState, useEffect } from 'react';
import { Grid, Typography, Paper, Avatar, TextField, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';
import axios from 'axios';

const Register = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");

        if (userInfo) {
            navigate("/login");
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            setLoading(true);

            const { data } = await axios.post('http://localhost:5000/register',
                {
                    firstName,
                    lastName,
                    email,
                    password
                },
                config);
            localStorage.setItem('userInfo', JSON.stringify(data));
            setLoading(false);
        } catch (error) {
            setError(error.response.data.msg);
            setLoading(false);
        }
    }

    return (
        <Grid>
            <Paper elevation={10} sx={{ padding: '20px', height: '70vh', width: '480px', margin: "20px auto" }}>
                <Grid align="center">
                    <Avatar src="/assets/images/Butterfly_nav_image-removebg-preview (1).png" sx={{ width: 50, height: 50 }}></Avatar>
                    <Typography variant="h5" sx={{ fontSize: 23 }}>Welcome! Create your account.</Typography>
                </Grid>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                {loading && <Loading />}
                <TextField
                    label="First Name"
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                    sx={{ marginTop: 5 }}
                    fullWidth
                    required />
                <TextField
                    label="Last Name"
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                    sx={{ marginTop: 2 }}
                    fullWidth
                    required />
                <TextField
                    label="Email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ marginTop: 2 }}
                    fullWidth
                    required />
                <TextField
                    label="Password"
                    placeholder="Password (6 or more characters)"
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    sx={{ marginTop: 2 }}
                    fullWidth
                    required />
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    sx={{ margin: '25px 0' }}
                    fullWidth
                    onClick={handleSubmit}>
                    Register
                </Button>
                <Typography variant="h6" align="center" sx={{ margin: '5px 0' }}>Already a member? <Link to="/login">Sign in</Link></Typography>
            </Paper>
        </Grid>
    )
}

export default Register;