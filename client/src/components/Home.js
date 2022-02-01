import React from 'react';
import { Box, Typography, Button, Stack, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Box sx={{
                minHeight: "80vh",
                background: "url(assets/images/Header.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: 'center',
                width: '100%'
            }}>
                <Box
                    component="div"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        height: "80vh",
                        ml: 5,
                    }}
                >
                    <Typography variant="h2" sx={{ fontFamily: "cursive", fontWeight: "bold", color: "white", marginTop: "50px" }}>Explore Your Inner Self...</Typography>
                    <Typography variant="h3" sx={{ fontFamily: "cursive", fontWeight: "bold", color: "white", marginTop: "25px" }}>Welcome to Rainbow Reflections by Rita</Typography>
                    <Stack direction="row" spacing={4} mt={10} >
                        <Button variant="contained" sx={{ px: '55px', borderRadius: "15px" }}>Book A Reading</Button>
                        <Link to="/shop" style={{ textDecoration: 'none' }}><Button variant="contained" sx={{ px: '55px', borderRadius: "15px" }}>Shop Now</Button></Link>
                    </Stack>
                </Box>
            </Box>
            <Grid container className="row-content" sx={{ textAlign: 'center', marginTop: '40px' }}>
                <Grid item sm={4}>
                    <img src="/assets/images/Inspirational Gifts.jpeg" style={{ borderRadius: '50%' }} />
                </Grid>
                <Grid item sm={4}>
                    <Typography variant="h3">Refresh yourself in a better way.</Typography>
                    <Typography variant="h5">Surround yourself with positivity, view our uplifting gift items today!</Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography variant="h2">Inspirational Gifts</Typography>
                </Grid >
            </Grid>
            <Grid container className="row-content" sx={{ textAlign: 'center', marginTop: '20px' }}>
                <Grid item sm={4}>
                    <Typography variant="h2">Gemstones &amp; Crystals</Typography>
                </Grid >
                <Grid item sm={4}>
                    <Typography variant="h3">Enlighten your life.</Typography>
                    <Typography variant="h5">Give your life balance with our exquisite selection of gemstones.</Typography>
                </Grid>
                <Grid item sm={4}>
                    <img src="/assets/images/Gemstones and Crystals.jpeg" style={{ borderRadius: '50%' }} />
                </Grid>
            </Grid>
            <Grid container className="row-content" sx={{ textAlign: 'center', marginTop: '20px' }}>
                <Grid item sm={4}>
                    <img src="/assets/images/Mind Body Spirit.jpeg" style={{ borderRadius: '50%' }} />
                </Grid>
                <Grid item sm={4}>
                    <Typography variant="h3">Life is beautiful, feel it.</Typography>
                    <Typography variant="h5">Create a better understanding with yourself.</Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography variant="h2">Mind, Body &amp; Spirit</Typography>
                </Grid >
            </Grid>
        </>
    )
}

export default Home;