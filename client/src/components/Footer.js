import React, { useState } from 'react';
import { Container, Grid, Box, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {

    return (
        <footer>
            <Container>
                <Box>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={3} sx={{ textAlign: 'center', listStyleType: 'none', textDecoration: 'none' }}>
                            <h3>Links</h3>
                            <Box>
                                <Link style={{ textDecoration: 'none' }} to="/">
                                    <li>Home</li>
                                </Link>
                            </Box>
                            <Box>
                                <Link style={{ textDecoration: 'none' }} to="/about">
                                    <li>About</li>
                                </Link>
                            </Box>
                            <Box>
                                <Link style={{ textDecoration: 'none' }} to="/services">
                                    <li>Services</li>
                                </Link>
                            </Box>
                            <Box>
                                <Link style={{ textDecoration: 'none' }} to="/events">
                                    <li>Events</li>
                                </Link>
                            </Box>
                            <Box>
                                <Link style={{ textDecoration: 'none' }} to="/contact">
                                    <li>Contact Us</li>
                                </Link>
                            </Box>
                            <Box>
                                <Link style={{ textDecoration: 'none' }} to="/shop">
                                    <li>Shop</li>
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item sx={{ textAlign: 'center' }} xs={12} sm={3}>
                            <h3>Hours</h3>
                            <ul style={{ listStyleType: 'none' }}>
                                <li><u>Monday - Thursday</u>: Appointment Only</li>
                                <li><u>Friday</u>: 12PM - 4PM</li>
                                <li><u>Saturday</u>: 11AM - 3PM</li>
                                <li><u>Sunday</u>: 11AM - 3PM</li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <h3 style={{ textAlign: 'center' }}>Social</h3>
                            <Box sx={{ textAlign: 'center' }}>
                                <IconButton href="https://www.facebook.com/Rainbowreflectionsbyrita/" target="_blank">
                                    <FacebookIcon sx={{ fontSize: 40 }} color="primary" />
                                </IconButton>
                                <IconButton href="https://www.instagram.com/rainbowreflectionsbyrita/?hl=en" target="_blank">
                                    <InstagramIcon sx={{ fontSize: 40 }} color="secondary" />
                                </IconButton>
                            </Box>
                        </Grid>
                        <Grid item sx={{ textAlign: 'center' }} xs={12} sm={3}>
                            <h3>Contact</h3>
                            <Button startIcon={<PhoneIcon />} href="tel:+19733003377" >1-973-300-3377</Button>
                            <Button sx={{ textTransform: 'none' }} startIcon={<EmailIcon />} href="mailto:rainbowreflectionsbyrita@gmail.com">rainbowreflectionsbyrita@gmail.com</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <div style={{ textAlign: 'center', marginTop: '15px' }}>
                Copyright © 2022 Rainbow Reflections by Rita - All Rights Reserved.
                            </div>
        </footer>
    )
}

export default Footer;