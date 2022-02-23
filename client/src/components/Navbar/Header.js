import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Tab, Tabs, Button, IconButton, useMediaQuery, useTheme, Badge, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import NavDrawer from './NavDrawer';
import { Link } from 'react-router-dom';

const Header = (props) => {

    const { trackCartItems } = props;
    const [value, setValue] = useState();
    const [isLogged, setisLogged] = useState(false);

    useEffect(() => {
        checkStorage();
        return () => { };
    }, [isLogged]);

    const checkStorage = () => {
        if (localStorage.getItem("userInfo")) {
            setisLogged(true);
        } else {
            setisLogged(false);
        }
    }

    const logout = () => {
        localStorage.removeItem("userInfo");
        setisLogged(false);
    }

    const theme = useTheme();

    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    console.log(isMatch);
    const imageHomeIndicator = (value) => {
        value = 0;
        setValue(value);
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="sticky" sx={{ background: '#063970' }}>
                    <Toolbar sx={{ margin: 0, padding: 0 }}>
                        <Link to="/">
                            <div className="logo">
                                <img src="/assets/images/main-image-1 (1).png" alt="Home Logo" width="400" height="auto" onClick={() => imageHomeIndicator()} />
                            </div>
                        </Link>
                        {
                            isMatch ? (
                                <>
                                    {/* <NavDrawer /> */}
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
                                            {!isLogged ? (
                                                <Button sx={{ marginLeft: 'auto' }} color="secondary" variant="contained">Login</Button>
                                            ) : (
                                                    <Button sx={{ marginLeft: 'auto' }} color="error" onClick={logout} variant="contained">Logout</Button>
                                                )}
                                        </Link>
                                        <IconButton sx={{ marginLeft: '15px', color: "white" }}>
                                            <Link to="/cart">
                                                <Badge badgeContent={trackCartItems} color="error">
                                                    <ShoppingCartIcon sx={{ color: 'white' }} />
                                                </Badge>
                                            </Link>
                                        </IconButton>
                                    </>
                                )
                        }
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}


export default Header;