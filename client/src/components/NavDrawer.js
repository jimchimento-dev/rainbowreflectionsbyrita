import React, { useState } from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
const PAGES = ['Products', 'Services', 'AboutUs', 'ContactUs', 'Login', 'Logout'];
const NavDrawer = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
    return (
        <>
            <Drawer open={openDrawer}
                onClose={() => setOpenDrawer(false)}>
                <List>
                    {
                        PAGES.map((page, index) => (
                            <ListItemButton onClick={() => setOpenDrawer(false)} key={index}>
                                <ListItemIcon>
                                    <ListItemText>
                                        {page}
                                    </ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        ))
                    }
                </List>
            </Drawer>
            <IconButton sx={{ color: 'white', marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </>
    );
}

export default NavDrawer;