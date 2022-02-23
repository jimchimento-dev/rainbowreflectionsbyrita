import React from 'react';
import { Box, Typography, Button, Stack, Grid, listItemClasses } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import carouselImage1 from '../carousel/Carousel Image Main.jpg'
import carouselImage2 from '../carousel/Carousel Image 3.jpeg'
import carouselImage3 from '../carousel/Carousel Image 5.jpeg'
import carouselImage4 from '../carousel/Carousel Image 6.jpeg'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

const CarouselImages = (props) => {
    return (
        <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img alt={props.image.title} style={{ height: '100%', width: '100%', maxWidth: '100%', maxHeight: '100%', verticalAlign: "center", overflow: "hidden", objectFit: "cover" }} src={props.image.image} />
        </Grid>

    )
}

const Home = () => {

    const images = [
        {
            image: carouselImage1,
            title: "Main Carousel Image"
        },
        {
            image: carouselImage2,
            title: "Carousel Image 2"
        },
        {
            image: carouselImage3,
            title: "Carousel Image 3"
        },
        {
            image: carouselImage4,
            title: "Carousel Image 4"
        }

    ]

    return (
        <>
            <Carousel
                navButtonsAlwaysVisible
                autoPlay
                interval="5000"
                animation="slide"
                NextIcon={<ArrowForwardIosIcon />}
                PrevIcon={<ArrowBackIosIcon />}
                navButtonsWrapperProps={{
                    style: {
                        bottom: '0',
                        top: 'unset'
                    }
                }}
                sx={{ height: '85vh' }} >
                {
                    images.map((image, i, title) => <CarouselImages key={i} image={image} title={title} />)
                }
            </Carousel>
            <Grid container className="row-content" direction="row" alignItems="center" justify="center">
                <Grid item xs={12} sm={4} align="center">
                    <img src="/assets/images/Inspirational Gifts.jpeg" alt="Inspirational Gifts" style={{ borderRadius: '50%', height: 300 }} />
                </Grid>
                <Grid item sm={4} className="hideText" align="center">
                    <Typography variant="h4">Refresh yourself in a better way.</Typography>
                    <Typography variant="h6" mt={1}>Surround yourself with positivity, view our uplifting gift items today!</Typography>
                </Grid>
                <Grid item xs={12} sm={4} align="center">
                    <Typography variant="h3" className="alignTop">Inspirational Gifts</Typography>
                </Grid >
            </Grid>
            <Grid container className="row-content" direction="row" alignItems="center" justify="center">
                <Grid item xs={12} sm={4} align="center">
                    <Typography variant="h3" className="alignBottom">Gemstones &amp; Crystals</Typography>
                </Grid >
                <Grid item sm={4} className="hideText" align="center">
                    <Typography variant="h4">Enlighten your life.</Typography>
                    <Typography variant="h6" mt={1}>Give your life balance with our exquisite selection of gemstones.</Typography>
                </Grid>
                <Grid item xs={12} sm={4} align="center">
                    <img src="/assets/images/Gemstones and Crystals.jpeg" alt="Gemstones and Crystals" style={{ borderRadius: '50%', height: 300 }} />
                </Grid>
            </Grid>
            <Grid container className="row-content" direction="row" alignItems="center" justify="center">
                <Grid item xs={12} sm={4} align="center">
                    <img src="/assets/images/Mind Body Spirit.jpeg" alt="Mind Body Spirit" style={{ borderRadius: '50%', height: 300 }} />
                </Grid>
                <Grid item sm={4} className="hideText" align="center">
                    <Typography variant="h4">Life is beautiful, feel it.</Typography>
                    <Typography variant="h6" mt={1}>Create a better understanding with yourself.</Typography>
                </Grid>
                <Grid item xs={12} sm={4} align="center">
                    <Typography variant="h3" className="alignTop">Mind, Body &amp; Spirit</Typography>
                </Grid >
            </Grid>
        </>
    )
}

export default Home;