import React, { useState, useEffect } from 'react';
import { Grid, Typography, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Link, useNavigate } from 'react-router-dom';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';
import axios from 'axios';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");

        if (userInfo) {
            navigate("/");
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }

            setLoading(true);

            const { data } = await axios.post('http://localhost:5000/login',
                {
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
        <>
            <Grid>
                <Paper elevation={10} sx={{ padding: '20px', height: '70vh', width: '480px', margin: "20px auto" }}>
                    <Grid align="center">
                        <Avatar src="/assets/images/Butterfly_nav_image-removebg-preview (1).png" sx={{ width: 50, height: 50 }} />
                        <Typography variant="h5">Welcome! Please sign in below.</Typography>
                    </Grid>
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    {loading && <Loading />}
                    <TextField
                        label="Email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{ marginTop: 5 }}
                        fullWidth
                        required
                    />
                    <TextField
                        label="Password"
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        sx={{ marginTop: 2 }}
                        fullWidth
                        required />
                    <FormControlLabel sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }} label="Remember Me" control={<Checkbox color="primary" />} />
                    <Button
                        endIcon={<SendIcon />}
                        type="submit"
                        color="primary"
                        variant="contained"
                        sx={{ margin: '8px 0' }}
                        fullWidth
                        onClick={handleSubmit}>
                        Sign In
                         </Button>
                    <Typography variant="h6" align="center" sx={{ margin: '15px 0' }}>New user? <Link to="/register">Register here</Link></Typography>
                </Paper>
            </Grid>
        </>
    )
}

export default Login;