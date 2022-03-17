import React from 'react';
import { Box, Typography, Button, Paper, Grid } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import carouselImage1 from '../carousel/Carousel Image Main.jpg'
import carouselImage2 from '../carousel/Carousel Image 3.jpeg'
import carouselImage3 from '../carousel/Carousel Image 6.jpeg'
import carouselImage4 from '../carousel/Carousel Image 10.jpg'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

const CarouselItems = (props) => {
    return (
        <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
            <Grid item>
                <img alt={props.item.title} style={{ height: "100%", width: "100%", maxWidth: "100%", maxHeight: "100%", verticalAlign: "center" }} src={props.item.image} />
            </Grid>
            <Grid item mt={6} sx={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}>
                <Typography textAlign="center" variant="h2" mt={2}>{props.item.header}</Typography>
                <Typography textAlign="center" variant="h3" mt={2}>{props.item.description}</Typography>
                <Grid item mt={10} sx={{ display: "flex", justifyContent: "center" }}>
                    <Link to="/services" className="linkDecoration"><Button variant="contained" color="secondary" sx={{ marginRight: 7, px: 5, borderRadius: 15 }}>{props.item.button1}</Button></Link>
                    <Link to="/shop" className="linkDecoration"><Button variant="contained" color="secondary" sx={{ px: 5, borderRadius: 15 }}>{props.item.button2}</Button></Link>
                </Grid>
            </Grid>
        </Grid>
    );
}

const Home = () => {

    const items = [
        {
            header: "Explore your inner self...",
            description: "Welcome to Rainbow Reflections By Rita",
            button1: "Book A Reading",
            button2: "Shop Now",
            image: carouselImage1,
            imageTitle: "Main Carousel Image"
        },
        {
            header: "Candles Tarot Cards & Incense",
            description: "Tap into your intuitive side! Browse our spiritual goods today.",
            button1: "Book A Reading",
            button2: "Shop Now",
            image: carouselImage2,
            imageTitle: "Carousel Image 2"
        },
        {
            header: "Figurines, Pottery & Salt Lamps ",
            description: "Start your own collection! View our beautiful assortment of inspirational items!",
            button1: "Book A Reading",
            button2: "Shop Now",
            image: carouselImage3,
            imageTitle: "Carousel Image 3"
        },
        {
            header: "Mugs, Relics & More",
            description: "Surround yourself with positivity, incorporate peace and clarity throughout your day to day life.",
            button1: "Book A Reading",
            button2: "Shop Now",
            image: carouselImage4,
            imageTitle: "Carousel Image 4"
        },
    ];

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
                    items.map((item, header, description, button1, button2, i, image, imageTitle) =>
                        <CarouselItems
                            key={i}
                            item={item}
                            header={header}
                            description={description}
                            button1={button1}
                            button2={button2}
                            image={image}
                            imageTitle={imageTitle}
                        />)
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
    );
}

export default Home;