import React, { useState } from 'react';
import { AppBar, Typography, Toolbar, Tab, Tabs, Button, IconButton, useMediaQuery, useTheme } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NavDrawer from './NavDrawer';
import { Link } from 'react-router-dom';
import Login from './Login/Login';

// const OpenLogin = props => {
//     const { onClose, open } = props;

//     return (
//         <Login />
//     )
// }

const Header = () => {

    const [value, setValue] = useState();

    const theme = useTheme();
    console.log(theme);

    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    console.log(isMatch);
    const imageHomeIndicator = (value) => {
        value = 0;
        setValue(value);
    }

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <AppBar position="sticky" sx={{ background: '#063970' }}>
                <Toolbar>
                    <Link to="/">
                        <div className="logo">
                            <img src="/assets/images/main-image-1 (1).png" alt="Home Logo" width="400" height="auto" onClick={() => imageHomeIndicator()} />
                        </div>
                    </Link>
                    {
                        isMatch ? (
                            <>
                                <NavDrawer />
                            </>
                        ) : (
                                <>
                                    <Tabs
                                        sx={{ marginLeft: 'auto', marginRight: 'auto' }}
                                        textColor="inherit"
                                        value={value}
                                        onChange={(e, value) => setValue(value)}
                                        indicatorColor="secondary"
                                    >
                                        <Tab label="Home" component={Link} to="/" />
                                        <Tab label="About" component={Link} to="/about" />
                                        <Tab label="Services" component={Link} to="/services" />
                                        <Tab label="Events" component={Link} to="/events" />
                                        <Tab label="Contact Us" component={Link} to="/contact" />
                                        <Tab label="Shop" component={Link} to="/shop" />
                                    </Tabs>
                                    <Link to="/login" style={{ textDecoration: 'none' }}>
                                        <Button sx={{ marginLeft: 'auto' }} variant="contained" onClick={handleOpen}>Login</Button>
                                    </Link>
                                    <IconButton sx={{ marginLeft: '15px', color: "white" }}>
                                        <Link to="/cart">
                                            <ShoppingCartIcon sx={{ color: 'white' }} />
                                        </Link>
                                    </IconButton>
                                </>
                            )
                    }
                </Toolbar>
            </AppBar>
        </>
    )
}


export default Header;