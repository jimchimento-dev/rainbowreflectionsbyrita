import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
    return (
        <AppBar position="fixed" style={{ backgroundColor: "grey" }}>
            <Toolbar>
                <img src="/assets/images/main-image-1 (1).png" width="400" height="auto" />
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center" }} component='div'>
                    <Box>

                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <Typography variant="h5" sx={{ marginRight: "20px", cursor: "pointer" }}>
                            Home
                        </Typography>
                        <Typography variant="h5" sx={{ marginRight: "20px", cursor: "pointer" }}>
                            About
                        </Typography>
                        <Typography variant="h5" sx={{ marginRight: "20px", cursor: "pointer" }}>
                            Services
                        </Typography>
                        <Typography variant="h5" sx={{ marginRight: "20px", cursor: "pointer" }}>
                            Events
                        </Typography>
                        <Typography variant="h5" sx={{ marginRight: "20px", cursor: "pointer" }}>
                            Contact Us
                        </Typography>
                        <Typography variant="h5" sx={{ marginRight: "20px", cursor: "pointer" }}>
                            Shop
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                        <Button disableElevation variant="contained" sx={{ marginRight: "20px" }}>Login</Button>
                        <IconButton>
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar >
    );
};
export default Header;
